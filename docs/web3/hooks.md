---
title: Hooks
sidebar_position: 1
---

In Mask Network, a special kind of plugin provides the abilities of a network; they are "Network Plugins". Each of them has a unique ID. An `enum` called `NetworkPlugin` lists them all in it.

```ts
export enum NetworkPluginID {
    PLUGIN_EVM = 'com.mask.evm',
    PLUGIN_FLOW = 'com.mask.flow',
    PLUGIN_SOLANA = 'com.mask.solana',
    /* Add your new network plugin here. */
}
```

A network plugin will create a `Web3State` that encapsulates the network abilities. There are public shared `Web3State` interfaces that every network plugin should implement by itself. It means that all networks have the same API exported for their consumers, conversely speaking, a consumer can support another network without a code change. The only thing is to change the `NetworkPlugin` to the expected one. It makes all networks use one set of hooks.

On the React UI side, a context `PluginsWeb3Context` collects all `Web3State` into an object and provides UI components to access any network states with React hooks.

```ts
// access Web3 abilities of the EVM plugin
const Web3State = useWeb3State(NetworkPluginID.PLUGIN_EVM)

// access Web3 abilities of the flow plugin
const Web3State = useWeb3State(NetworkPluginID.PLUGIN_FLOW)
```

:::info
As we know, all React hooks should write in a functional component. Here we omit the component wrapper for demonstrating the concept. In production, they should always stay in components.
:::

A `Web3State` contains all stuff a network should have. We defined many state interfaces that a network plugin needs to implement. But they are not mandatory. A network plugin can implement the state only if they are supporting that feature. E.g., if a network may lack facilities like ENS on Ethereum, it can choose not to implement the `NameService` state. Because of that, some features of Mask Network which depend on the state will not work.


```ts
const { NameService } = useWeb3State(NetworkPluginID.PLUGIN_ID)

const { value: name = 'UNKNOWN' } = useAsync(async () => {
    // the NameService could be undefined
    return NameService?.lookup(address) 
})
```

To access state from the start of `useWeb3State()` is boring and lengthy. Since then, there have been a bunch of hooks existed to reduce labor work. Here is a simplified version of the previous one.

```ts
const { value: name = 'UNKNOWN' } = useLookupAddress(NetwrokPluginID.PLUGIN_ID, address)
```

:::info
All Web3 hooks reserved the first parameter for `NetworkPluginID`. It's omittable if the rest parameters are not necessary. It will take the plugin ID of the currently selected network as a fallback.
:::


As we know, the extension maintains three kinds of pages. It includes a background page, some extension pages (popups and dashboard), and multiple content pages. Yeah, each of them will create a `PluginsWeb3Context`. And they are sharing the same copy of data. If you alter the state of the context on the content page, it will finally sync to the rest pages. These UI components can update automatically, although they stay on different pages.

Suppose we have an address book UI running on the content page. The user could add a new address to the book by clicking somewhere on it.

```ts
const account = useAccount(NetworkPluginID.PLUGIN_ID)
const { AddressBook } = useWeb3State(NetworkPluginID.PLUGIN_ID)

const onAddAddress = useCallback(async (address: string) => {
    await AddressBook?.addAddress(account, addresss)
})
```

And a select box on the options page will react to changes from the content page.

```ts
const account = useAccount(NetworkPluginID.PLUGIN_ID)

// the address book will change if the user adds an address on the content page.
const addressBook = useAddressBook(NetworkPluginID.PLUGIN_ID, account)

return <AddressSelectBox addressBook={address} />
```