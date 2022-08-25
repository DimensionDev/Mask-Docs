---
title: Connection
sidebar_position: 3
---

To participate in the network, we need to send requests and receive responses from a node in the network. We have tools like [`ethers.js`](https://docs.ethers.io/v5/), [`web3.js`](https://web3js.readthedocs.io/) and [`FCL`](https://docs.onflow.org/fcl/) helps to compose request payloads and decode responses.

### Overview

The `ConnectionState` defines the ability to interact with a blockchain network.

```ts
interface ConnectionState {
    /** Get web3 SDK instance */
    getWeb3?: (initial?: Web3ConnectionOptions) => Promise<Web3>
    /** Get web3 provider instance */
    getWeb3Provider?: (initial?: Web3ConnectionOptions) => Promise<Web3Provider>
    /** Get connection */
    getConnection?: (initial?: Web3ConnectionOptions) => Promise<Web3Connection>
}
```

The primary task of this state is to implement a `Connection` for the network. It describes the commonality of a network to be adopted.

```ts
interface Connection {
    /** Get the web3 SDK instance. */
    getWeb3(initial?: Web3ConnectionOptions): Promise<Web3>
    /** Get the latest block number. */
    getBlockNumber(initial?: Web3ConnectionOptions): Promise<number>
    /** Sign message */
    signMessage(dataToSign: string, signType?: string, initial?: Web3ConnectionOptions): Promise<Signature>
    /** Send a transaction and wait for mining */
    sendTransaction(transaction: Transaction, initial?: Web3ConnectionOptions): Promise<string>
    /** Build connection */
    connect(initial?: Web3ConnectionOptions): Promise<Account<ChainId>>
}
```

With a `Connection`, we can do:

-   _To create an SDK instance._
-   _To get the instant block number._
-   _To sign a plain message._
-   _To send a transaction and wait for confirmation._
-   _To connect to a wallet provider._

In the UI components, we use `useWeb3Connection` to access the connection of a specific network.

```ts
const signature = await connection.signMessage(/* ... */)
```

### Options

We could alter the connection with the `options` parameter in actions. It gives us the chance to override the current connection settings.

```ts
interface ConnectionOptions<ChainId, ProviderType, Transaction> {
    /** Designate the subnetwork id of the transaction. */
    chainId?: ChainId
    /** Designate the signer of the transaction. */
    account?: string
    /** Designate the provider to handle the transaction. */
    providerType?: ProviderType
    /** Fragments to merge into the transaction. */
    overrides?: Partial<Transaction>
}
```

To override settings in the connection scope, take `options` as the last parameter of the `useWeb3Connection` hook. It will alter every invocation on the connection.

```ts
const connection = useWeb3Connection(NetworkPluginID.PLUGIN_EVM, {
    // all invocation on the connection will send to polygon network
    chainId: ChainId.Polygon,
})

// fetch the instant block number of polygon network
const blockNumber = connection.getBlockNumber()

// fetch the instant balance of address on polygon network
const balance = connection.getBalance(address)
```

Moreover, each method accepts `options` as the last parameter, overriding settings for that invocation.

```ts
const connection = useWeb3Connection(NetworkPluginID.PLUGIN_EVM)

// fetch the instant block number of polygon network
const blockNumber = connection.getBlockNumber({
    // only this invocation gets an alteration
    chainId: ChainId.Polygon,
})

// fetch the instant balance of address on the currently selected network (might not polygon network)
const balance = connection.getBalance(address)
```

## Usage

### getWeb3

```ts
const web3 = await connection.getWeb3([options])
```

Get Web3 SDK instance of the currently selected network.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Web3>` - The Web3 SDK instance.

#### Example

```ts
// get web3js instance
const connection = useWeb3Connection(NetworkPluginID.PLUGIN_EVM)

const getWeb3 = useCallback(() => {
    const web3 = await connection.getWeb3()

    // learn more: https://web3js.readthedocs.io/
    await web3.eth.callTransaction(/* ... */)
}, [connection])

// get solana SDK instance
const solanaConnection = useWeb3Connection(NetworkPluginID.PLUGIN_SOLANA)

const getSolanaWeb3 = useCallback(() => {
    const web3 = await connection.getWeb3()

    // learn more: https://docs.solana.com/developing/clients/javascript-reference
    const connection = new web3.Connection(/* ... */)
    const slot = await connection.getSlot()
}, [connection])
```

### getWeb3Provider

```ts
getWeb3Provider(initial?: Web3ConnectionOptions): Promise<Web3Provider>
```

Get the internal web3 provider instance which is the fundamental description of a wallet provider. A network might define a wallet protocol. E.g., https://eips.ethereum.org/EIPS/eip-1193.

For the network that doesn't have a provider protocol, we borrow the definition from the market leader wallet. E.g., https://docs.phantom.app/integrating/extension-and-in-app-browser-web-apps/establishing-a-connection.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Web3Provider>`

#### Example

```ts
const provider = await connection.getWeb3Provider()

// get the EIP1193 provider and send raw JSON RPC request with it
provider.request({
    id: 0,
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: ['0x...'],
})
```

### connect

```ts
connect(initial?: Web3ConnectionOptions): Promise<Account<ChainId>>
```

Build connection.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Account<ChainId>>` The account object contains the connected account address and subnetwork chain id.

#### Example

```ts
const account = (await connection.connect()) > { account: '0x...', chainId: ChainId.Mainnet }
```

### disconnect

```ts
disconnect(initial?: Web3ConnectionOptions): Promise<void>
```

Break connection.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<void>`

#### Example

```ts
await connection.disconnect()
```

### getGasPrice

```ts
getGasPrice(initial?: Web3ConnectionOptions): Promise<string>
```

Get gas price.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getTokenSchema

```ts
getTokenSchema(address: string, initial?: Web3ConnectionOptions): Promise<SchemaType | undefined>
```

Get schema type of given token address.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNativeToken

```ts
getNativeToken(initial?: Web3ConnectionOptions): Promise<FungibleToken<ChainId, SchemaType>>
```

Get a native fungible token.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getFungibleToken

```ts
getFungibleToken(address: string, initial?: Web3ConnectionOptions): Promise<FungibleToken<ChainId, SchemaType>>
```

Get a fungible token.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNonFungibleToken

```ts
getNonFungibleToken(
    address: string,
    tokenId: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<NonFungibleToken<ChainId, SchemaType>>
```

Get a non-fungible token.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNonFungibleTokenOwnership

```ts
getNonFungibleTokenOwnership(
    address: string,
    tokenId: string,
    owner: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<boolean>
```

Detect if a non-fungible token is owned by a specific account.

#### Parameters

1. address - `string`. The token program address.
1. tokenId - `string`. The id of the token.
1. owner - `string`. The owner's address for detection
1. schema - `SchemaType`. An optional token schema type.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<boolean>`

#### Example

```ts
const owner = '0x...'
const owned = await connection.getNonFungibleTokenOwnership(address, tokenId, owner)
```

### getNonFungibleTokenMetadata

```ts
getNonFungibleTokenMetadata(
    address: string,
    tokenId: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<NonFungibleTokenMetadata<ChainId>>
```

Get a non-fungible token.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNonFungibleTokenContract

```ts
getNonFungibleTokenContract(
    address: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<NonFungibleTokenContract<ChainId, SchemaType>>
```

Get a non-fungible token contract.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNonFungibleTokenCollection

```ts
getNonFungibleTokenCollection(
    address: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<NonFungibleTokenCollection<ChainId>>
```

Get a non-fungible token collection.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getNativeTokenBalance

```ts
getNativeTokenBalance(initial?: Web3ConnectionOptions): Promise<string>
```

Get a native fungible token balance. Alias of `getBalance`.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string>` The balance as a hex string.

#### Example

```ts
const balance = await connection.getNativeTokenBalance()
```

### getFungibleTokenBalance

```ts
getFungibleTokenBalance(address: string, initial?: Web3ConnectionOptions): Promise<string>
```

Get fungible token balance.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string>` The balance as a hex string.

#### Example

```ts
const balance = await connection.getFungibleTokenBalance()
```

### getNonFungibleTokenBalance

```ts
getNonFungibleTokenBalance(address: string, tokenId?: string, schema?: SchemaType, initial?: Web3ConnectionOptions): Promise<string>
```

Get a non-fungible token balance.

#### Parameters

1. address - `string`. The token program address.
1. tokenId - `string`. The id of the token.
1. schema - `SchemaType`. An optional token schema type.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string>` The balance as a hex string.

#### Example

```ts
const balance = await connection.getNonFungibleTokenBalance()
```

### getFungibleTokensBalance

```ts
getFungibleTokensBalance(listOfAddress: string[], initial?: Web3ConnectionOptions): Promise<Record<string, string>>
```

Get fungible token balance.

#### Parameters

1. listOfAddress - `string[]`.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
const listOfBalance = await connection.getFungibleTokensBalance(listOfAddress)
```

### getNonFungibleTokensBalance

```ts
getNonFungibleTokensBalance(
    listOfAddress: string[],
    initial?: Web3ConnectionOptions,
): Promise<Record<string, string>>
```

Get a non-fungible token balance.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getAccount

```ts
getAccount(initial?: Web3ConnectionOptions): Promise<string>
```

Get the currently connected account.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string>` The account address.

#### Example

```ts
const account = await connection.getAccount()
```

### getChainId

```ts
getChainId(initial?: Web3ConnectionOptions): Promise<ChainId>
```

Get the current chain id.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<ChainId>` The chain id must be a natural number.

#### Example

```ts
const chainId = await connection.getChainId()
```

### getBlock

```ts
getBlock(no: number, initial?: Web3ConnectionOptions): Promise<Block | null>
```

Get a specific block.

#### Parameters

1. no - `number`. To specific the number of the block.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Block | null>` The block object defined in [Types](./types).

#### Example

```ts
// learn more: https://web3js.readthedocs.io/en/v1.7.3/web3-eth.html#getblock
const block = await connection.getBlock()

// learn more: https://docs.solana.com/developing/clients/jsonrpc-api#getblock
const solanaBlock = await solanaConnection.getBlock()
```

### getBlockNumber

```ts
getBlockNumber(initial?: Web3ConnectionOptions): Promise<number>
```

Get the latest block number.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<number>`

#### Example

```ts
const blockNumber = await connection.getBlockNumber()
```

### getBlockTimestamp

```ts
getBlockTimestamp(initial?: Web3ConnectionOptions): Promise<number>
```

Get the latest block UNIX timestamp.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<number>`

#### Example

```ts
const timestamp = await connection.getBlockNumber()

// convert to a normal Date object
const date = new Date(timestamp * 1000)
```

### getBalance

```ts
getBalance(address: string, initial?: Web3ConnectionOptions): Promise<string>
```

Get the latest balance of the account.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string` The balance as a hex string.

#### Example

```ts
const balance = await connection.getBalance()

// format as Ether
formatBalance(balance, 18)
```

### getTransaction

```ts
getTransaction(id: string, initial?: Web3ConnectionOptions): Promise<TransactionDetailed | null>
```

Get the detailed information of a transaction.

#### Parameters

1. id - `string`. The id of the transaction.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Transaction>` The transaction object defined in [Types](./types.md).

#### Example

```ts
const transaction = await connection.getTransaction(id)
```

### getTransactionStatus

```ts
getTransactionStatus(id: string, initial?: Web3ConnectionOptions): Promise<TransactionStatusType>
```

Get the latest transaction status. A transaction could be one of three statuses `NOT_DEPEND`, `SUCCEED` or `FAILED`.

```txt
# a succeed transaction: transit from initial status to successful status
NOT_DEPEND(START) -> SUCCEED(END)

# a failed transaction: transit from initial status to failure status
NOT_DEPEND(START) -> FAILED(END)
```

#### Parameters

1. id - `string`. The id of a transaction.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<TransactionStatusType>` A computed transaction status type.

#### Example

```ts
const status = await connection.getTransactionStatus(id)
```

### getTransactionNonce

```ts
getTransactionNonce(address: string, initial?: Web3ConnectionOptions): Promise<number>
```

Get the latest transaction nonce.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### getTransactionReceipt

```ts
getTransactionReceipt(id: string, initial?: Web3ConnectionOptions): Promise<TransactionReceipt | null>
```

Get the transaction receipt.

#### Parameters

1. id - `string`. The id of the transaction.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<TransactionReceipt>` The tranaction receipt object defined in [Types](./types.md).

#### Example

```ts
const receipt = await connection.getTransactionReceipt(id)
```

### getCode

```ts
getCode(address: string, initial?: Web3ConnectionOptions): Promise<string>
```

Get the source code of an on-chain program.

#### Parameters

1. address - `string`. The address of the on-chain program.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<string>` The source code of the program.

#### Example

```ts
// get USDC contract source
const code = await connection.getCode('0x')
// > 0x...
```

### switchChain

```ts
switchChain?: (chainId: ChainId, initial?: Web3ConnectionOptions) => Promise<void>
```

Switch to a subnetwork.

#### Parameters

1. chainId - `ChainId`. The chain id of the subnetwork.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<void>`

#### Example

```ts
// switch to Ethereum mainnet
await connection.switchChain(ChainId.Mainnet)

// switch to polygon network
await connection.switchChainId(ChainId.Polygon)
```

### signMessage

```ts
const signature = await connection.signMessage(message, [signType], [options])
```

Sign data using the currently selected account. This account could be overrided with `options`.

#### Parameters

1. message - `string`. Data to sign. A UTF8 string.
1. signType - `string`. Switch between multiple sign algorithms. The default value for EVM is `personalSign` and supports typed data sign (v4) with `typedDataSign`.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<srting>` - The signed signature.

#### Example

```ts
const message = 'Hello World'
const signature = await connection.signMessage(message, 'personalSign')
// > `0x...`
```

### verifyMessage

```ts
verifyMessage(
    dataToVerify: string,
    signature: Signature,
    signType?: string,
    initial?: Web3ConnectionOptions,
): Promise<boolean>
```

Verify a message signature.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<boolean>`

#### Example

```ts
const message = 'Hello World'
const signature = await connection.signMessage(message, 'personalSign')
const verified = await connection.verifyMessage(message, signature, 'personalSign')
// > true
```

### transferFungibleToken

```ts
transferFungibleToken(
    address: string,
    recipient: string,
    amount: string,
    memo?: string,
    initial?: Web3ConnectionOptions,
): Promise<string>
```

Transfer fungible token to.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### transferNonFungibleToken

```ts
transferNonFungibleToken(
    address: string | undefined,
    recipient: string,
    tokenId: string,
    amount: string,
    schema?: SchemaType,
    initial?: Web3ConnectionOptions,
): Promise<string>
```

Transfer non-fungible token to.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### signTransaction

```ts
signTransaction(transaction: Transaction, initial?: Web3ConnectionOptions): Promise<TransactionSignature>
```

Sign a transaction. Most time, a transaction signature is a plain string.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<TransactionSignature>`. An transaction signature defined in [Types](./types).

#### Example

```ts
const signature = await connection.signTransaction(transaction)
```

### signTransactions

```ts
signTransactions(transactions: Transaction[], initial?: Web3ConnectionOptions): Promise<TransactionSignature[]>
```

Sign multiple transactions.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<Array<TransactionSignature>>`. An array of transaction signatures.

#### Example

```ts
const signatures = await connection.signTransactions(transactions)
```

### callTransaction

```ts
callTransaction(transaction: Transaction, initial?: Web3ConnectionOptions): Promise<string>
```

Query a transaction.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### sendTransaction

```ts
sendTransaction(transaction: Transaction, initial?: Web3ConnectionOptions): Promise<string>
```

Send a transaction and wait for mining.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### sendSignedTransaction

```ts
sendSignedTransaction(signature: TransactionSignature, initial?: Web3ConnectionOptions): Promise<string>
```

Send a signed transaction.

#### Parameters

1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

#### Example

```ts
// TODO
```

### replaceTransaction

```ts
replaceTransaction(id: string, transaction: Transaction, initial?: Web3ConnectionOptions): Promise<void>
```

To replace a sent transaction before it gets confirmation.

#### Parameters

1. id - `string`. The id of the transaction to be replaced.
1. transaction - `Transaction`. The substitute transaction.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<void>`

#### Example

```ts
// TODO
```

```ts
const id = await connection.sendTransaction({
    /* ... */
    gasPrice: toHex(300000),
})

// replace the previously sent transaction with a higher gasPrice
await connection.replaceTransation(id, {
    /* ... */
    gasPrice: toHex(400000),
})
```

### cancelTransaction

```ts
cancelTransaction(id: string, initial?: Web3ConnectionOptions): Promise<void>
```

To cancel a sent transaction before it gets confirmation.

#### Parameters

1. id - `string`. The id of the transaction to be canceled.
1. initial - `Web3ConnectionOptions`. An optional object to override the connection settings.

#### Returns

`Promise<void>`

#### Example

```ts
const hash = await connection.sendTransaction(transaction)

// cancel the previous sent transation
await connection.cancelTransaction(hash)
```
