---
title: States
sidebar_position: 2
---

In the developing process of Mask Network, we abstract common features from different networks. Based on that, we create a state for each feature to avoid repeating ourselves. 

E.g., a network needs a book to let users record addresses that interact with recently; and a name service like ENS for labeling a human unreadable address as a meaningful name; besides that, a network should provide the ability to build connections with wallet providers; and also storage to keep tracking tokens and transactions.

Let's take more details about states. You can learn each of them in the rest docs.

| State | Description |
| ----- | ------------- |
| `AddressBook` | For tracking recently interacted addresses. |
| `NameService` | For lookup and reverse access between address and name. |
| `Token` | For recording user-added tokens.
| `Transaction` | For recording recently sent transactions. |
| `TransactionFormatter` | For formatting transactions into human-readable messages. |
| `TransactionWatcher` | For reporting transaction state. |
| [`Provider`](./provider.md) | A aggregation of all supported wallet provoders. |
| [`Connection`](./connection.md) | Build connections with wallet providers. |
| `Wallet` | Access wallets from the kernel indexDB of Mask Network. |
| [`Hub`](./hub.md) | For standardizing how to access various third-party services build for the network. |
| `Settings` | General settings like currency type, gas option type, etc. |
| [`Others`](./others.md) | A bunch of shared utilities. |
