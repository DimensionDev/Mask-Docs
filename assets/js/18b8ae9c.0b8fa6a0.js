"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[450],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Provider",sidebar_position:4},c=void 0,l={unversionedId:"web3/provider",id:"web3/provider",title:"Provider",description:"We assume a wallet provider is an application available as a client-side application or server-side service. It handles requests from decentralized applications and provides APIs to create an interactable instance (Web3) with the official SDK. A network specification also defines the APIs as a protocol (Web3Provider) that all wallet providers should implement them.",source:"@site/docs/web3/provider.md",sourceDirName:"web3",slug:"/web3/provider",permalink:"/docs/web3/provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web3/provider.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Provider",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Connection",permalink:"/docs/web3/connection"},next:{title:"Third-Party Data Hub",permalink:"/docs/web3/hub"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We assume a wallet provider is an application available as a client-side application or server-side service. It handles requests from decentralized applications and provides APIs to create an interactable instance (",(0,o.kt)("inlineCode",{parentName:"p"},"Web3"),") with the official SDK. A network specification also defines the APIs as a protocol (",(0,o.kt)("inlineCode",{parentName:"p"},"Web3Provider"),") that all wallet providers should implement them."),(0,o.kt)("p",null,"In the Ethereum world, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DimensionDev/Maskbook/blob/develop/packages/web3-shared/evm/types/index.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"EIP1193Provider"))," protocol defines all APIs that a wallet provider should implement and the ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," could create an instance from it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function createEIP1193Provider() {\n    return {\n        request<T extends unknown>(requestArguments: RequestArguments): Promise<T>\n        on(): Promise<void>\n        off(): Promise<void>\n        /* omitted */\n    }\n}\n\nconst web3 = new Web3(createEIP1193Provider())\n")),(0,o.kt)("p",null,"In Mask, we provide hooks to access them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const web3 = useWeb3(NetworkPluginID.PLUGIN_EVM)\nconst web3Provider = useWeb3Provider(NetworkPluginID.PLUGIN_EVM)\n")),(0,o.kt)("p",null,"Integrating a wallet provider should implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"WalletProvider")," interface. We assume there is lazy progress that a wallet provider will need to do the preparation, and it can switch to a specific sub-network. It also creates an SDK instance and a provider instance that implements the provider protocol of that network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface WalletProvider<ChainId, ProviderType, Web3Provider, Web3> {\n    /** Keep waiting until the provider is ready. */\n    readonly readyPromise: Promise<void>\n    /** Switch to the designate chain. */\n    switchChain(chainId?: ChainId): Promise<void>\n    /** Create an instance that creates from the network SDK. */\n    createWeb3(chainId?: ChainId): Promise<Web3>\n    /** Create an instance that implement the wallet protocol. */\n    createWeb3Provider(chainId?: ChainId): Promise<Web3Provider>\n    /** Create the connection. */\n    connect(chainId?: ChainId): Promise<Account<ChainId>>\n    /** Dismiss the connection. */\n    disconnect(): Promise<void>\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProviderState")," takes management of multiple wallet providers. It tracks the currently selected account address and in which sub-network the account stays. Of course, we can access them with hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the currently connected account on the visiting page\nconst account = useAccount(NetworkPluginID.PLUGIN_EVM)\n// Get the currently connected wallet provider type on the visiting page\nconst providerType = useProviderType(NetworkPluginID.PLUGIN_EVM)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are two types of sites in Mask: ",(0,o.kt)("inlineCode",{parentName:"p"},"EnhanceableSite")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtensionSite"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProviderState")," maintains each site with a standalone state. It means you can connect to an account from MetaMask on Twitter, and on the dashboard page, can use a WalletConnect account simultaneously."))))}m.isMDXComponent=!0}}]);