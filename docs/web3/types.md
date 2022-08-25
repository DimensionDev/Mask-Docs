---
title: Types
sidebar_position: 0
---

This document describes how to define a network.

To add a new network to Mask Network, you should give the definition of the network in TypeScript. The question that comes into our mind is _"What does a network have to define?"_

Let's go back to the blockchain. All blockchains function similarly. That is a state machine altered by transactions to transit from the current state to the next state. The user holds a keypair (wallet) to sign transactions, and a kind of token as a symbol of value to make proof of participation.

As a network, it should answer questions like:

- _How does **Transaction** looks like?_
- _What does each **Token** contain?_

This gives us the reason for the definition of the following concepts:

| Concept                | Description                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ChainId`              | Identifies all subnetworks. It must be a natural number.                                                                                                                                  |
| `SchemaType`           | There is two types of tokens in Mask. But you can give more detailed information about a token, such as what specification the token to implement. E.g, `ERC20`, `ERC721`, and `ERC1155`. |
| `NetworkType`          | The type of a subnetwork but ignores testnets, e.g, Matic and Mumbai are the types of `Polygon`.                                                                                          |
| `ProviderType`         | The type of wallet providers, e.g, `MetaMask` and `WalletConnect`.                                                                                                                        |
| `Block`                | Define everything in a block.                                                                                                                                                             |
| `Transaction`          | Send what kind of data as a `Transaction`.                                                                                                                                                |
| `TransactionDetailed`  | The representation of an on-chain transaction. Generally, it's the type of transaction that returns by calling `getTransactions` on SDK.                                                  |
| `TransactionSignature` | The type of signed transaction. This format could be sent to the RPC provider directly.                                                                                                   |
| `TransactionParameter` | The type of decoded transaction parameters. Learn more in the `TransactionFormatter` state.                                                                                               |
| `Web3Provider`         | The definition of the wallet provider. For Ethereum the [EIP1559](https://eips.ethereum.org/EIPS/eip-1193) defines it.                                                                    |
| `Web3`                 | The definition of the SDK library.                                                                                                                                                        |

:::info
The complete list is too much for this document. You can refer to the source code for the complete list.
:::

:::info
Another question is where to find those definitions of a network. The quick answer is to read SDK documentation. You will discover them by using it to create something. Sometimes, if the SDK has a TypeScript declaration file, the definitions can borrow from it directly.
:::

Mask Network creates more complex interfaces with these basic definitions and reuse them across multi-networks. Here is the fungible token definition in Mask. With concrete types of EVM, we create a [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) token on Ethereum Mainnet.

```ts
import { ChainId, SchemaType } from '@masknet/web3-shared-evm'

export interface FungibleToken<ChainId, SchemaType> {
    // fungible or non-fungible token
    type: TokenType
    // the protocol type that the token to adhere
    schema: SchemaType
    name: string,
    symbol?: string
    decimals: number
    address: string
}

const USDC: FungibleToken<ChainId.Mainnet, SchemaType.ERC20> {
    type: TokenType.Fungible,
    schema: SchemaType.ERC20,
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 18,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
}
```
