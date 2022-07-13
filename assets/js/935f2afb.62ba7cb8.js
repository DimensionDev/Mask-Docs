"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Setup","href":"/docs/setup","docId":"setup"},{"type":"link","label":"Architecture","href":"/docs/architecture","docId":"architecture"},{"type":"link","label":"Concepts","href":"/docs/concepts","docId":"concepts"},{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ethereum-Compatible Chain","href":"/docs/tutorial/evm-integration","docId":"tutorial/evm-integration"}],"href":"/docs/category/tutorial"},{"type":"category","label":"Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Bounty Development","href":"/docs/guide/bounty","docId":"guide/bounty"},{"type":"link","label":"CSS in JS","href":"/docs/guide/css-in-js","docId":"guide/css-in-js"},{"type":"link","label":"Form","href":"/docs/guide/form","docId":"guide/form"},{"type":"link","label":"Internationalization","href":"/docs/guide/internationalization","docId":"guide/internationalization"}],"href":"/docs/category/guide"},{"type":"category","label":"Payload Format","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PayloadContainer","href":"/docs/payload-format/payload-container","docId":"payload-format/payload-container"},{"type":"link","label":"Payload version -37","href":"/docs/payload-format/payload-v37","docId":"payload-format/payload-v37"},{"type":"link","label":"TypedMessage binary format","href":"/docs/payload-format/typed-message","docId":"payload-format/typed-message"}],"href":"/docs/category/payload-format"},{"type":"category","label":"Plugin Infra","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/plugin-infra/overview","docId":"plugin-infra/overview"}],"href":"/docs/category/plugin-infra"},{"type":"category","label":"Web3","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Types","href":"/docs/web3/web3-types","docId":"web3/web3-types"},{"type":"link","label":"Hooks","href":"/docs/web3/web3-hooks","docId":"web3/web3-hooks"},{"type":"link","label":"States","href":"/docs/web3/web3-state","docId":"web3/web3-state"},{"type":"link","label":"Connection","href":"/docs/web3/connection","docId":"web3/connection"},{"type":"link","label":"Provider","href":"/docs/web3/provider","docId":"web3/provider"},{"type":"link","label":"Hub","href":"/docs/web3/hub","docId":"web3/hub"}],"href":"/docs/category/web3"},{"type":"link","label":"FQA","href":"/docs/faq","docId":"faq"},{"type":"link","label":"Dependencies upgrading","href":"/docs/dependencies","docId":"dependencies"},{"type":"link","label":"Local Dialog vs Remote Dialog","href":"/docs/local-or-remote-dialog","docId":"local-or-remote-dialog"},{"type":"link","label":"mask-flavored-jsonrpc-api","href":"/docs/mask-flavored-jsonrpc-api","docId":"mask-flavored-jsonrpc-api"}]},"docs":{"architecture":{"id":"architecture","title":"Architecture","description":"This document describes the Mask Network protocols, the subsystems, the interfaces, and how it all fits together. It delegates non-interface details to other specs as much as possible. This is meant as a top-level view of the protocol and how the system fits together.","sidebar":"tutorialSidebar"},"concepts":{"id":"concepts","title":"Concepts","description":"Persona","sidebar":"tutorialSidebar"},"dependencies":{"id":"dependencies","title":"Dependencies upgrading","description":"- @dimensiondev/webextension-shim: MUST match the version from the iOS side.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FQA","description":"How to remove unused locale keys?","sidebar":"tutorialSidebar"},"guide/bounty":{"id":"guide/bounty","title":"Bounty Development","description":"Hi, Awesome people! Welcome to start a bounty task on Mask Network.","sidebar":"tutorialSidebar"},"guide/css-in-js":{"id":"guide/css-in-js","title":"CSS in JS","description":"General guides","sidebar":"tutorialSidebar"},"guide/form":{"id":"guide/form","title":"Form","description":"General content","sidebar":"tutorialSidebar"},"guide/internationalization":{"id":"guide/internationalization","title":"Internationalization","description":"Crowdin","sidebar":"tutorialSidebar"},"local-or-remote-dialog":{"id":"local-or-remote-dialog","title":"Local Dialog vs Remote Dialog","description":"What is remote-dialog","sidebar":"tutorialSidebar"},"mask-flavored-jsonrpc-api":{"id":"mask-flavored-jsonrpc-api","title":"mask-flavored-jsonrpc-api","description":"Transaction","sidebar":"tutorialSidebar"},"payload-format/payload-container":{"id":"payload-format/payload-container","title":"PayloadContainer","description":"Status: This format has not been shipped to production yet. It might change at any time.","sidebar":"tutorialSidebar"},"payload-format/payload-v37":{"id":"payload-format/payload-v37","title":"Payload version -37","description":"Status: This format has not been shipped to production yet. It might change at any time.","sidebar":"tutorialSidebar"},"payload-format/typed-message":{"id":"payload-format/typed-message","title":"TypedMessage binary format","description":"Status: This format has not been shipped to production yet. It might change at any time.","sidebar":"tutorialSidebar"},"plugin-infra/overview":{"id":"plugin-infra/overview","title":"Overview","description":"Setup","sidebar":"tutorialSidebar"},"setup":{"id":"setup","title":"Setup","description":"Hi, Welcome to the Mask Network. This guide will quickly take you through setting up the extension development environment.","sidebar":"tutorialSidebar"},"tutorial/evm-integration":{"id":"tutorial/evm-integration","title":"Ethereum-Compatible Chain","description":"This tutorial guides you to integrate a new EVM chain.","sidebar":"tutorialSidebar"},"web3/connection":{"id":"web3/connection","title":"Connection","description":"To participate in the network, we need to send requests and receive responses from a node in the network. We have tools like ethers.js, web3.js and FCL helps to compose request payloads and decode responses.","sidebar":"tutorialSidebar"},"web3/hub":{"id":"web3/hub","title":"Hub","description":"","sidebar":"tutorialSidebar"},"web3/provider":{"id":"web3/provider","title":"Provider","description":"We assume a wallet provider is an application available as a client-side application or server-side service. It handles requests from decentralized applications and provides APIs to create an interactable instance (Web3) with the official SDK. A network specification also defines the APIs as a protocol (Web3Provider) that all wallet providers should implement them.","sidebar":"tutorialSidebar"},"web3/web3-hooks":{"id":"web3/web3-hooks","title":"Hooks","description":"In Mask Network, a special kind of plugin provides the abilities of a network; they are \\"Network Plugins\\". Each of them has a unique ID. An enum called NetworkPlugin lists them all in it.","sidebar":"tutorialSidebar"},"web3/web3-state":{"id":"web3/web3-state","title":"States","description":"In the developing process of Mask Network, we abstract common features from different networks. Based on that, we create a state for each feature to avoid repeating ourselves.","sidebar":"tutorialSidebar"},"web3/web3-types":{"id":"web3/web3-types","title":"Types","description":"This document describes how to define a network.","sidebar":"tutorialSidebar"}}}')}}]);