---
title: Connection
sidebar_position: 3
---

When we say create a connection with the network, it means we got a way to send request and receive response with a node in the network. The communication protocol might be HTTP or WebSocket. Generally speaking, developers don't need to compose the request payload manually. The SDK will come to help. For EVM, we have `ethers.js` and `web3.js`; for Flow, we have `FCL`.

We designed the `Connection` to have two methods.

```ts
export interface ConnectionState<Web3, Web3ConnectionOptions, Web3Connection> {
    /** Get web3 SDK instance */
    getWeb3?: (options?: Web3ConnectionOptions) => Promise<Web3>
    /** Get connection */
    getConnection?: (options?: Web3ConnectionOptions) => Promise<Web3Connection>
}
```

To feed the UI components with the same APIs we create `Web3Connection`. It describes the commonality of networks. Paste a snippet from the source code.

```ts
export interface Connection<
    ChainId,
    SchemaType,
    ProviderType,
    Signature,
    Block,
    Transaction,
    TransactionDetailed,
    TransactionSignature,
    Web3,
    Web3ConnectionOptions = ConnectionOptions<ChainId, ProviderType, Transaction>,
> {
    /** Get the latest block number. */
    getBlockNumber(options?: Web3ConnectionOptions): Promise<number>
    /** Sign message */
    signMessage(dataToSign: string, signType?: string, options?: Web3ConnectionOptions): Promise<Signature>
    /** Send a transaction and wait for mining */
    sendTransaction(transaction: Transaction, options?: Web3ConnectionOptions): Promise<string>
    /** Build connection */
    connect(options?: Web3ConnectionOptions): Promise<Account<ChainId>>
}
```

As you can see from the interface, those generic are slots waiting for definition from network. A network should define how are things like in its context.


```ts
const connection = useConnection(NetwrokPluginID.PLUGIN_EVM)

const signature = await connection.signMessage(message)
```

```ts
const connection = useConnection()

const signature = await connection.signMessage(message)
```