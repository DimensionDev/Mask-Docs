---
title: Others
sidebar_position: 12
---

The `Others` provides a way to access network definitions.

-   _The default chain of the network._
-   _The average time for mining a single block._
-   _Definition of chains, networks, and providers._

It alos defines many commonly needed utilities from dapps.

-   _Utility functions for addresses comparison._
-   _Utility functions for formatting addresses, domains, and token ids._

## Definitions

### Chain Descriptor

The `ChainDescriptor` defines a subnetwork of a kind of blockchain.

| Name                   | Description                                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                 | The type of chain. It's a rougher categorization than chain id. E.g., Matic and Mumbai have different chain IDs but have the same network type `Polygon`.                   |
| `chainId`              | The ID of the chain. It must be a natural number.                                                                                                                           |
| `coinMarketCapChainId` | The ID of the chain in CoinMarketCap. It's used when calling CoinMarketCap APIs.                                                                                            |
| `coinGeckoChainId`     | The ID of the chain in CoinGecko. It's used when calling CoinGecko APIs.                                                                                                    |
| `coinGeckoPlatformId`  | The platform ID of the chain in CoinGecko. It's used when callin CoinGecko APIs.                                                                                            |
| `name`                 | The name of the chain.                                                                                                                                                      |
| `color`                | The primary color of the chain.                                                                                                                                             |
| `fullName`             | The full name of the chain.                                                                                                                                                 |
| `shortName`            | The brief name of the chain.                                                                                                                                                |
| `network`              | A label for marking `mainnet` different from other networks. If the chain is a mainnet, it should be `mainnet`. All other values will let the chain be treated as testnets. |
| `nativeCurrency`       | The native token of the chain. We assumed that it was a fungible token.                                                                                                     |
| `explorerURL`          | The URL of the explorer website of the chain.                                                                                                                               |
| `features`             | A list of supported features of the chain. (E.g, `EIP1193`)                                                                                                                 |

### Network Descriptor

The `NetworkDescriptor` defines a subnetwork of a kind of blockchain. The difference between `ChainDescriptor` is a it only defines the currently supported subnetworks of Mask Network.

| Name                       | Description                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `ID`                       | An unique ID for each subnetwork.                                                            |
| `networkSupporterPluginID` | The ID of the plugin that provides the functionality of the network.                         |
| `chainId`                  | The chain id of the network. A network descirptor must has a coressponding chain descriptor. |
| `type`                     | The network type.                                                                            |
| `icon`                     | The network icon.                                                                            |
| `iconColor`                | The network icon in fixed color.                                                             |
| `averageBlockDelay`        | The average time for mining a block. (unit: seconds)                                         |
| `backgroundGradient`       | The background gradient color of the network.                                                |
| `name`                     | The network name.                                                                            |
| `shortName`                | The network short name.                                                                      |
| `isMainnet`                | Is a mainnet network.                                                                        |

### Provider Descriptor

The `ProviderDescriptor` defines a wallet provider.

| Name                                           | Description                                                                                                     |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `ID`                                           | An unique ID for each wallet provider.                                                                          |
| `providerAdaptorPluginID`                      | The ID of a plugin that provides the adoption of this provider..                                                |
| `type`                                         | The provider type.                                                                                              |
| `icon`                                         | The provider icon.                                                                                              |
| `name`                                         | The provider name.                                                                                              |
| `backgroundGradient`                           | The provider bar background gradient color.                                                                     |
| `iconFilterColor`                              | The provider icon filter color.                                                                                 |
| `enableRequirements.supportedChainIds`         | All supported subnetworks of the wallet provider.                                                               |
| `enableRequirements.supportedEnhanceableSites` | All supported SNS websites of the wallet provider.                                                              |
| `enableRequirements.supportedExtensionSites`   | All supported extension websites of the wallet provider. Only two extension websites: `Popups` and `Dashboard`. |
| `homeLink`                                     | A link to provider's home website. E.g., `https://metamask.io`.                                                 |
| `shortenLink`                                  | A link only contains domain name. E.g., `metamask.io`.                                                          |
| `downloadLink`                                 | A link to download the client application. E.g., `https://metamask.io/download.html`.                           |

## Usage

### getDefaultChainId

Get the chain ID of the default subnetwork between the same kind of blockchains. E.g., The Ethereum Mainnet (`ChainId.Mainnet`) is the default subnetwork in many EVM blockchains.

```ts
const defaultChainId = getDefaultChainId(): ChainId
```

#### Returns

`ChainId` - The chain id of the subnetwork.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

// It returns ChainId.Mainnet which is 1.
const defaultChainId = Others?.getDefaultChainId()
```

### getDefaultNetworkType

Get the network type of the default subnetwork between the same kind of blockchains. E.g., The Ethereum Mainnet (`NetworkType.Ethereum`) is the default subnetwork in many EVM blockchains.

#### Returns

`NetworkType` - The network type of the subnetwork.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

// It returns NetworkType.Ethereum which is 'Ethereum'.
const defaultNetworkType = Others?.getDefaultNetworkType()
```

### getDefaultProviderType

Get the provider type of the default wallet provider.

#### Returns

`ProviderType` - The wallet provider type.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

// If you are on the popups page, it will return 'ProviderType.MaskWallet'.
const defaultProviderType = getDefaultProviderType()
```

### getZeroAddress

Get the nullish address. E.g., It's `0x0000000000000000000000000000000000000000` for EVM blockchains.

#### Returns

`string` - The nullish address.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

// For EVM, you can also import this constants from `@masknet/web3-shared-evm`.
const ZERO_ADDRESS = Others?.getZeroAddress()
```

### getNativeTokenAddress

Get the address of the native token (the gas token) of a subnetwork. A native token address could be different between subnetworks. E.g., for some EVM blockchains, they use a ERC20 token for gas fees.

#### Parameters

`ChainId` - The chain id of the subnetwork.

#### Returns

`string` - The address of the native token.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

const NATIVE_TOKEN_ADDRESS = getNativeTokenAddress(ChainId.Mainnet)
```

### getMaskTokenAddress

Get the address of the Mask token of on the subnetwork. Now it's only avaiable on EVM blockchains: Ethereum Mainnet, BNB, and Polygon.

#### Parameters

`ChainId` - The chain id of the subnetwork.

#### Returns

`string` - The address of the Mask token.

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

const MASK_TOKEN_ADDRESS = getMaskTokenAddress(ChainId.Mainnet)
```

### getAverageBlockDelay

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

getAverageBlockDelay(chainId: ChainId, scale = 1): number {
    return this.options.defaultBlockDelay * scale * 1000
}
```

### getTransactionSignature

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

getTransactionSignature(chainId?: ChainId, transaction?: Transaction | undefined): string |undefined {
    return
}
```

### isSameAddress

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isSameAddress(address?: string): boolean {
    throw new Error('Method not implemented.')
}
```

### isZeroAddress

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isZeroAddress(address?: string): boolean {
    throw new Error('Method not implemented.')
}
```

### isNativeTokenAddress

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isNativeTokenAddress(address?: string): boolean {
    throw new Error('Method not implemented.')
}
```

### isValidChain

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isValidChain(chainId: ChainId, testnet = false): boolean {
    return this.options.chainDescriptors.find((x) => x.chainId === chainId)?.network === 'mainnet' || testnet
}
```

### isValidDomain

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isValidDomain(domain: string): boolean {
    throw new Error('Method not implemented.')
}
```

### isValidAddress

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

isValidAddress(address: string): boolean {
    throw new Error('Method not implemented.')
}
```

### chainResolver

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

chainResolver = createChainResolver<ChainId, SchemaType, NetworkType>(this.options.chainDescriptors)
```

### explorerResolver

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

explorerResolver = createExplorerResolver<ChainId, SchemaType, NetworkType>(this.options.chainDescriptors)
```

### providerResolver

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

providerResolver = createProviderResolver<ChainId, ProviderType>(this.options.providerDescriptors)
```

### networkResolver

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

networkResolver = createNetworkResolver<ChainId, NetworkType>(this.options.networkDescriptors)
```

### formatAddress

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

formatAddress(address: string, size?: number | undefined): string {
    throw new Error('Method not implemented.')
}
```

### formatTokenId

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

formatTokenId(id?: string | undefined, size?: number | undefined): string {
    throw new Error('Method not implemented.')
}
```

### formatDomainName

#### Parameters

#### Returns

#### Example

```ts
const { Others } = useWeb3State(NetworkPluginID.PLUGIN_EVM)

formatDomainName(domain?: string | undefined, size?: number | undefined): string {
    throw new Error('Method not implemented.')
}
```
