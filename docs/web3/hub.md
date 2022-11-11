---
title: Hub
sidebar_position: 4
---

## Overview

The `HubState` is aggregation of third-party APIs. It defines a collection of standardized interfaces to hide the difference between implementations.

## Options

```ts
interface HubOptions<ChainId, Indicator = HubIndicator> {
    /** The user account as the API parameter */
    account?: string
    /** The chain id as the API parameter */
    chainId?: ChainId
    /** The networkPluginID as the API parameter */
    networkPluginId?: NetworkPluginID
    /** The id of data provider */
    sourceType?: SourceType
    /** The currency type of data */
    currencyType?: CurrencyType
    /** The item size of each page. */
    size?: number
    /** The page index. */
    indicator?: Indicator
}
```

## Usage

### getTransactions

```ts
getTransactions: (chainId: ChainId, account: string, initial?: Web3HubOptions) =>
    Promise<Pageable<Transaction<ChainId, SchemaType>>>
```

Get the most recent transactions of the given account.

### getNonFungibleTokensByCollection

```ts
getNonFungibleTokensByCollection?: (
    address: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleToken<ChainId, SchemaType>>>
```

Get non-fungible tokens of the given collection.

### getNonFungibleAssetsByCollection

```ts
getNonFungibleAssetsByCollection?: (
    address: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleAsset<ChainId, SchemaType>>>
```

Get non-fungible assets of the given collection.

### getNonFungibleTokenOwner

```ts
getNonFungibleTokenOwner?: (address: string, tokenId: string, initial?: Web3HubOptions) => Promise<string>
```

Get a non-fungible token owner address.

### getNonFungibleTokenFloorPrice

```ts
getNonFungibleTokenFloorPrice?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<PriceInToken<ChainId, SchemaType>>
```

Get a non-fungible token floor price.

### getNonFungibleTokenContract

```ts
getNonFungibleTokenContract?: (
    address: string,
    initial?: Web3HubOptions,
) => Promise<NonFungibleTokenContract<ChainId, SchemaType> | undefined>
```

Get a non-fungible contract.

### getFungibleTokenBalance

```ts
getFungibleTokenBalance?: (address: string, initial?: Web3HubOptions) => Promise<number>
```

Get balance of a fungible token owned by the given account.

### getNonFungibleTokenBalance

```ts
getNonFungibleTokenBalance?: (address: string, initial?: Web3HubOptions) => Promise<number>
```

Get balance of non-fungible tokens in a collection owned by the given account.

### getFungibleTokenStats

```ts
getFungibleTokenStats?: (address: string, initial?: Web3HubOptions) => Promise<FungibleTokenStats>
```

Get stats data of a fungible token

### getNonFungibleTokenStats

```ts
getNonFungibleTokenStats?: (address: string, initial?: Web3HubOptions) => Promise<NonFungibleTokenStats>
```

Get stats data of a non-fungible token

### getFungibleTokenSecurity

Get security diagnosis about a fungible token.

```ts
getFungibleTokenSecurity?: (
    chainId: ChainId,
    address: string,
    initial?: Web3HubOptions,
) => Promise<FungibleTokenSecurity>
```

Get security diagnosis about a fungible token.

### getNonFungibleTokenSecurity

```ts
getNonFungibleTokenSecurity?: (
    chainId: ChainId,
    address: string,
    initial?: Web3HubOptions,
) => Promise<NonFungibleTokenSecurity>
```

Get security diagnosis about a non-fungible token.

### getFungibleTokensFromTokenList

```ts
getFungibleTokensFromTokenList?: (
    chainId: ChainId,
    initial?: Web3HubOptions,
) => Promise<Array<FungibleToken<ChainId, SchemaType>>>
```

Get fungible tokens from built-in token list.

### getNonFungibleTokensFromTokenList

```ts
getNonFungibleTokensFromTokenList?: (
    chainId: ChainId,
    initial?: Web3HubOptions,
) => Promise<Array<NonFungibleToken<ChainId, SchemaType>>>
```

Get non-fungible tokens from built-in token list.

### getFungibleTokenPrice

```ts
getFungibleTokenPrice?: (chainId: ChainId, address: string, initial?: Web3HubOptions) => Promise<number>
```

Get price of a fungible token.

### getNonFungibleTokenPrice

```ts
getNonFungibleTokenPrice?: (
    chainId: ChainId,
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<number>
```

Get price of a non-fungible token.

### getFungibleTokenIconURLs

```ts
getFungibleTokenIconURLs?: (chainId: ChainId, address: string, initial?: Web3HubOptions) => Promise<string[]>
```

Get token icon URLs that point to a fungible token.

### getNonFungibleTokenIconURLs

```ts
getNonFungibleTokenIconURLs?: (
    chainId: ChainId,
    address: string,
    tokenId?: string,
    initial?: Web3HubOptions,
) => Promise<string[]>
```

Get token icon URLs that point to a non-fungible token.

### getApprovedFungibleTokenSpenders

```ts
getApprovedFungibleTokenSpenders?: (
    chainId: ChainId,
    account: string,
    initial?: Web3HubOptions,
) => Promise<Array<FungibleTokenSpenderAuthorization<ChainId, SchemaType>>>
```

Get spenders of a fungible token approved by the given account.

### getApprovedNonFungibleContracts

```ts
getApprovedNonFungibleContracts?: (
    chainId: ChainId,
    account: string,
    initial?: Web3HubOptions,
) => Promise<Array<NonFungibleContractSpenderAuthorization<ChainId, SchemaType>>>
```

Get contracts of a non-fungible token approved by the given account.

### getFungibleAsset

```ts
getFungibleAsset?: (
    address: string,
    initial?: Web3HubOptions,
) => Promise<FungibleAsset<ChainId, SchemaType> | undefined>
```

Get a fungible asset.

### getNonFungibleAsset

Get a non-fungible asset.

```ts
getNonFungibleAsset?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<NonFungibleAsset<ChainId, SchemaType> | undefined>
```

Get a non-fungible asset.

### getFungibleAssets

```ts
getFungibleAssets?: (
    account: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<FungibleAsset<ChainId, SchemaType>>>
```

Get fungible assets owned by the given account.

### getNonFungibleAssets

```ts
getNonFungibleAssets?: (
    account: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleAsset<ChainId, SchemaType>>>
```

Get non-fungible assets owned by the given account.

### getFungibleToken

```ts
getFungibleToken?: (
    address: string,
    initial?: Web3HubOptions,
) => Promise<FungibleToken<ChainId, SchemaType> | undefined>
```

Get a fungible token.

### getNonFungibleToken

Get a non-fungible token.

```ts
getNonFungibleToken?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<NonFungibleToken<ChainId, SchemaType> | undefined>
```

Get a non-fungible token.

### getFungibleTokens

```ts
getFungibleTokens?: (
    account: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<FungibleToken<ChainId, SchemaType> | Error>>
```

Get fungible tokens owned by the given account.

### getNonFungibleTokens

```ts
getNonFungibleTokens?: (
    account: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleToken<ChainId, SchemaType>>>
```

Get non-fungible tokens owned by the given account.

### getNonFungibleTokenEvents

Get events of a non-fungible token.

```ts
getNonFungibleTokenEvents?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleTokenEvent<ChainId, SchemaType>>>
```

Get events of a non-fungible token.

### getNonFungibleTokenListings

```ts
getNonFungibleTokenListings?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleTokenOrder<ChainId, SchemaType>>>
```

Get listed orders of a non-fungible token.

### getNonFungibleTokenOffers

```ts
getNonFungibleTokenOffers?: (
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleTokenOrder<ChainId, SchemaType>>>
```

Get offered orders of a non-fungible token.

### getNonFungibleTokenOrders

Get orders of a non-fungible token.

```ts
getNonFungibleTokenOrders?: (
    address: string,
    tokenId: string,
    side: OrderSide,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleTokenOrder<ChainId, SchemaType>>>
```

### getNonFungibleCollectionsByOwner

```ts
getNonFungibleCollectionsByOwner?: (
    account: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleCollection<ChainId, SchemaType>>>
```

Get non-fungible collections owned by the given account.

### getNonFungibleCollectionsByKeyword

```ts
getNonFungibleCollectionsByKeyword?: (
    keyword: string,
    initial?: Web3HubOptions,
) => Promise<Pageable<NonFungibleCollection<ChainId, SchemaType>>>
```

Get non-fungible tokens search by the give keyword.

### getNonFungibleRarity

```ts
getNonFungibleRarity?:(
    address: string,
    tokenId: string,
    initial?: Web3HubOptions,
)=>Promise<NonFungibleTokenRarity | undefined>
```

### createBuyOrder

```ts
createBuyOrder?: (/** TODO: add parameters */) => Promise<void>
```

Place a bid on a token.

### createSellOrder

```ts
createSellOrder?: (/** TODO: add parameters */) => Promise<void>
```

List a token for public sell.

### fulfillOrder

```ts
fulfillOrder?: (/** TODO: add parameters */) => Promise<void>
```

Fulfill an order.

### cancelOrder

```ts
cancelOrder?: (/** TODO: add parameters */) => Promise<void>
```

Cancel an order.
