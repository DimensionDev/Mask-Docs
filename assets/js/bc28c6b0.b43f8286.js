"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[966],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Types",sidebar_position:0},s=void 0,d={unversionedId:"web3/types",id:"web3/types",title:"Types",description:"This document describes how to define a network.",source:"@site/docs/web3/types.md",sourceDirName:"web3",slug:"/web3/types",permalink:"/docs/web3/types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web3/types.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Types",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Web3",permalink:"/docs/category/web3"},next:{title:"Hooks",permalink:"/docs/web3/hooks"}},p={},m=[],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how to define a network."),(0,o.kt)("p",null,"To add a new network to Mask Network, you should give the definition of the network in TypeScript. The question that comes into our mind is ",(0,o.kt)("em",{parentName:"p"},'"What does a network have to define?"')),(0,o.kt)("p",null,"Let's go back to the blockchain. All blockchains function similarly. That is a state machine altered by transactions to transit from the current state to the next state. The user holds a keypair (wallet) to sign transactions, and a kind of token as a symbol of value to make proof of participation."),(0,o.kt)("p",null,"As a network, it should answer questions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"How does ",(0,o.kt)("strong",{parentName:"em"},"Transaction")," looks like?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"What does each ",(0,o.kt)("strong",{parentName:"em"},"Token")," contain?"))),(0,o.kt)("p",null,"This gives us the reason for the definition of the following concepts:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Concept"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ChainId")),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies all subnetworks. It must be a natural number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SchemaType")),(0,o.kt)("td",{parentName:"tr",align:null},"There is two types of tokens in Mask. But you can give more detailed information about a token, such as what specification the token to implement. E.g, ",(0,o.kt)("inlineCode",{parentName:"td"},"ERC20"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ERC721"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"ERC1155"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NetworkType")),(0,o.kt)("td",{parentName:"tr",align:null},"The type of a subnetwork but ignores testnets, e.g, Matic and Mumbai are the types of ",(0,o.kt)("inlineCode",{parentName:"td"},"Polygon"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ProviderType")),(0,o.kt)("td",{parentName:"tr",align:null},"The type of wallet providers, e.g, ",(0,o.kt)("inlineCode",{parentName:"td"},"MetaMask")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"WalletConnect"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Block")),(0,o.kt)("td",{parentName:"tr",align:null},"Define everything in a block.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Transaction")),(0,o.kt)("td",{parentName:"tr",align:null},"Send what kind of data as a ",(0,o.kt)("inlineCode",{parentName:"td"},"Transaction"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TransactionDetailed")),(0,o.kt)("td",{parentName:"tr",align:null},"The representation of an on-chain transaction. Generally, it's the type of transaction that returns by calling ",(0,o.kt)("inlineCode",{parentName:"td"},"getTransactions")," on SDK.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TransactionSignature")),(0,o.kt)("td",{parentName:"tr",align:null},"The type of signed transaction. This format could be sent to the RPC provider directly.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TransactionParameter")),(0,o.kt)("td",{parentName:"tr",align:null},"The type of decoded transaction parameters. Learn more in the ",(0,o.kt)("inlineCode",{parentName:"td"},"TransactionFormatter")," state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Web3Provider")),(0,o.kt)("td",{parentName:"tr",align:null},"The definition of the wallet provider. For Ethereum the ",(0,o.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP1559")," defines it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Web3")),(0,o.kt)("td",{parentName:"tr",align:null},"The definition of the SDK library.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The complete list is too much for this document. You can refer to the source code for the complete list."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Another question is where to find those definitions of a network. The quick answer is to read SDK documentation. You will discover them by using it to create something. Sometimes, if the SDK has a TypeScript declaration file, the definitions can borrow from it directly."))),(0,o.kt)("p",null,"Mask Network creates more complex interfaces with these basic definitions and reuse them across multi-networks. Here is the fungible token definition in Mask. With concrete types of EVM, we create a ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},"USDC")," token on Ethereum Mainnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ChainId, SchemaType } from '@masknet/web3-shared-evm'\n\nexport interface FungibleToken<ChainId, SchemaType> {\n    // fungible or non-fungible token\n    type: TokenType\n    // the protocol type that the token to adhere\n    schema: SchemaType\n    name: string,\n    symbol?: string\n    decimals: number\n    address: string\n}\n\nconst USDC: FungibleToken<ChainId.Mainnet, SchemaType.ERC20> {\n    type: TokenType.Fungible,\n    schema: SchemaType.ERC20,\n    name: 'USD Coin',\n    symbol: 'USDC',\n    decimals: 18,\n    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',\n}\n")))}u.isMDXComponent=!0}}]);