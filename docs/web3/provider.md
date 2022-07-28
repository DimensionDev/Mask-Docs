---
title: Provider
sidebar_position: 5
---

We assume a wallet provider is an application available as a client-side application or server-side service. It handles requests from decentralized applications and provides APIs to create an interactable instance (`Web3`) with the official SDK. A network specification also defines the APIs as a protocol (`Web3Provider`) that all wallet providers should implement them.

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

In Mask, we provide hooks to access them.

```ts
const web3 = useWeb3(NetworkPluginID.PLUGIN_EVM)
const web3Provider = useWeb3Provider(NetworkPluginID.PLUGIN_EVM)
```

Integrating a wallet provider should implement the `WalletProvider` interface. We assume there is lazy progress that a wallet provider will need to do the preparation, and it can switch to a specific subnetwork. It also creates an SDK instance and a provider instance that implements the provider protocol of that network.

```ts
export interface WalletProvider<ChainId, ProviderType, Web3Provider, Web3> {
    /** Keep waiting until the provider is ready. */
    readonly readyPromise: Promise<void>
    /** Switch to the designate chain. */
    switchChain(chainId?: ChainId): Promise<void>
    /** Create an instance that creates from the network SDK. */
    createWeb3(chainId?: ChainId): Promise<Web3>
    /** Create an instance that implement the wallet protocol. */
    createWeb3Provider(chainId?: ChainId): Promise<Web3Provider>
    /** Create the connection. */
    connect(chainId?: ChainId): Promise<Account<ChainId>>
    /** Dismiss the connection. */
    disconnect(): Promise<void>
}
```

The `ProviderState` takes management of multiple wallet providers. It tracks the currently selected account address and in which subnetwork the account stays. Of course, we can access them with hooks.

```ts
// Get the currently connected account on the visiting page
const account = useAccount(NetworkPluginID.PLUGIN_EVM)
// Get the currently connected wallet provider type on the visiting page
const providerType = useProviderType(NetworkPluginID.PLUGIN_EVM)
```

:::info
There are two types of sites in Mask: `EnhanceableSite` and `ExtensionSite`. The `ProviderState` maintains each site with a standalone state. It means you can connect to an account from MetaMask on Twitter, and on the dashboard page, can use a WalletConnect account simultaneously.
:::
