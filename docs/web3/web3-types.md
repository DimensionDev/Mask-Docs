---
title: Types
sidebar_position: 0
---

To add a new network into Mask Network, you should give the deifinition of network in TypeScript. The question comes into our mind is _"What does a network have to define?"_ 

Let's go back to the blockchain. All blockchains function similarly. That is a state machine altered by transactions to transit from the current state to the next state. The user holds a keypair (wallet) to sign transactions, and a kind of token as a symbol of value to make proof of participation.

As a network, it should answer questions like:

+ _How does **Trasnaction** looks like?_
+ _What does each **Block** contains?_

This gives us the reason for the definition of the following concepts:

| Concept | Description |
| ------- | ----------- |
| `ChainId` | Identifies all subnetworks. |
| `SchemaType` | The type of tokens, e.g, `ERC20`, `ERC721` and `ERC1155`. |
| `ProviderType` | The type of wallet providers, e.g, `MetaMask` and `WalletConnect`. |
| `Transaction` | Send what kind of data as a `Transaction`. |
| `Block` | Define everything in a block. |
| `Web3` | The TypeScript definition of the SDK library. |

:::info
The complete list is too much for this document. You can refer to the source code for the complete list.
:::

:::info
Another question is where to find those definitions of a network. The quick answer is to read SDK documentation. You will discover them by using it to create something. Sometimes, if the SDK has a TypeScript declaration file, the definitions can borrow from it directly.
:::

Mask Network creates more complex interfaces with these basic definitions. And they are reusable across multi-networks. Here is an example about `FungibleToken`. We give it EVM definitions to replace the generic parameters to create a USDC token.

```ts
import { ChainId, SchemaType } from '@masknet/web3-shared-evm'

export interface FungibleToken<ChainId, SchemaType> {
    // fungible or non-fungible token
    type: TokenType
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

