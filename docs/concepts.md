---
id: concepts
title: Concepts
sidebar_position: 20
---

# Concepts

## Persona

A Persona is the digital identity of the user of Mask Network. In a nutshell, it's a crypto key pair to encrypt digital assets owned by the user. Anyone else cannot access those assets without permission from the Persona owner. Persona is the crucial weapon of the user to take their data back from the Web 2.0 giants.

:::tip
The Next.ID project empowers Persona to be able to connect to any pre-existing social identities and other digital identities. Learn more from [Next.ID](https://next.id/).
:::

## Post

A piece of writing, image, or other formats of information that every cybercitizen creates on social media platforms. On Twitter, we call it "tweet"; on Facebook, we call it "post". With Mask Network, extra information could insert into a post as a payload. It could be a secret message, a value transaction, application metadata, or a bunch of them. Mask Network is like a wizard casting magic that hides data into links, images even audio and videos. 

On the other side, we pick Web3 applications for every post. Not an OpenSea link anymore, but you can trade the asset that it points to.

## Wallet

A crypto wallet has a public key and a private key. Mask Network supports connecting to your daily used wallets like MetaMask, WalletConnect, and Phantom. Beyond those third-party wallet providers, the extension supports Mask Wallet natively.

## Plugin

A plugin is an add-on program that integrates into the Mask Network extension. It exists for tasks that are impossible or hard to fulfill using Mask Network. It also provides decentralized applications for extension users. Mask SDK is under development and aims to be the standard for developing a plugin outside the main GitHub project.

## Network

A network component by many distributed compute nodes. It obeys the same consensus algorithm and serves to handle transactions from everywhere in the network. The Mask SDK creates connections from the plugin to those networks, e.g., all EVM-compatible networks, Flow, and Solana. It allows extension users to go across many different networks instantly.

## Chain

You can understand a chain as a subnetwork. We call EVM a network and Ethereum a chain of EVM networks. Each chain has got a numeric ID which should be a unique identity of the chain in that network, e.g, Ethereum has the chain ID `1` and Polygon has the chain ID `137`.