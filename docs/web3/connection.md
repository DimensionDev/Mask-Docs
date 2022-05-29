---
title: Connection
sidebar_position: 3
---

When we say create a connection with the network, it means we got a way to send request and receive response with a node in the network. The communication protocol might be HTTP or WebSocket. Generally speaking, developers don't need to compose the request payload manually. The SDK will come to help. For EVM, we have [`ethers.js`](https://docs.ethers.io/v5/) and [`web3.js`](https://web3js.readthedocs.io/); for Flow, we have [`FCL`](https://docs.onflow.org/fcl/).

The `ConnectionState` implements the ability to interact with a blockchain network.

```ts
export interface ConnectionState {
    /** Get web3 SDK instance */
    getWeb3?: (options?: Web3ConnectionOptions) => Promise<Web3>
    /** Get web3 provider instance */
    getWeb3Provider?: (options?: Web3ConnectionOptions) => Promise<Web3Provider>
    /** Get connection */
    getConnection?: (options?: Web3ConnectionOptions) => Promise<Web3Connection>
}
```

The primary task of this state is to implement a `Connection` for the network. It describes the commonality of a network to be adopted. It includes:

+ _To create a SDK instance._
+ _To get the instant block number._
+ _To sign a plain message._
+ _To send a transaction._
+ _To connect to a wallet provider._

Paste a snippet from the source code.

```ts
export interface Connection {
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

Use the connection of your network in UI components:

```ts
const connection = useConnection(NetwrokPluginID.PLUGIN_EVM)

const signature = await connection.signMessage(message)
```
