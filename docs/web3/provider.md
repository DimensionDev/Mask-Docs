---
title: Provider
sidebar_position: 4
---

We assume a wallet provider is an application wherever it lives on the client-side or server-side. It handles requests from decentralized applications and it provides APIs to create an interactive instance (`Web3`) with the official SDK. Some network also defines the APIs as a protocol (`Web3Provider`) that all wallet providers should obey.

In the Ethereum world, the [`EIP1193Provider`](https://github.com/DimensionDev/Maskbook/blob/develop/packages/web3-shared/evm/types/index.ts) protocol defines all APIs that a wallet provider should implement and the [Web3.js](https://web3js.readthedocs.io/) could create an instance from it.

```ts
function createEIP1193Provider() {
    return {
        request<T extends unknown>(requestArguments: RequestArguments): Promise<T>
        on(): Promise<void>
        off(): Promise<void>
        /* omitted */
    }
}

const web3 = new Web3(createEIP1193Provider())
```

