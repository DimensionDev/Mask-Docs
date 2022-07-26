"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Hooks",sidebar_position:1},l=void 0,c={unversionedId:"web3/web3-hooks",id:"web3/web3-hooks",title:"Hooks",description:'In Mask Network, a special kind of plugin provides the abilities of a network; they are "Network Plugins". Each of them has a unique ID. An enum called NetworkPlugin lists them all in it.',source:"@site/docs/web3/web3-hooks.md",sourceDirName:"web3",slug:"/web3/web3-hooks",permalink:"/docs/web3/web3-hooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web3/web3-hooks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Hooks",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/docs/web3/web3-types"},next:{title:"States",permalink:"/docs/web3/web3-state"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'In Mask Network, a special kind of plugin provides the abilities of a network; they are "Network Plugins". Each of them has a unique ID. An ',(0,r.kt)("inlineCode",{parentName:"p"},"enum")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPlugin")," lists them all in it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum NetworkPluginID {\n    PLUGIN_EVM = 'com.mask.evm',\n    PLUGIN_FLOW = 'com.mask.flow',\n    PLUGIN_SOLANA = 'com.mask.solana',\n    /* Add your new network plugin here. */\n}\n")),(0,r.kt)("p",null,"A network plugin will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3State")," that encapsulates the network abilities. There are public shared ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3State")," interfaces that every network plugin should implement by itself. It means that all networks have the same API exported for their consumers, conversely speaking, a consumer can support another network without a code change. The only thing is to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPlugin")," to the expected one. It makes all networks use one set of hooks."),(0,r.kt)("p",null,"On the React UI side, a context ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginsWeb3Context")," collects all ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3State")," into an object and provides UI components to access any network states with React hooks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// access Web3 abilities of the EVM plugin\nconst Web3State = useWeb3State(NetworkPluginID.PLUGIN_EVM)\n\n// access Web3 abilities of the flow plugin\nconst Web3State = useWeb3State(NetworkPluginID.PLUGIN_FLOW)\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As we know, all React hooks should write in a functional component. Here we omit the component wrapper for demonstrating the concept. In production, they should always stay in components."))),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3State")," contains all stuff a network should have. We defined many state interfaces that a network plugin needs to implement. But they are not mandatory. A network plugin can implement the state only if they are supporting that feature. E.g., if a network may lack facilities like ENS on Ethereum, it can choose not to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"NameService")," state. Because of that, some features of Mask Network which depend on the state will not work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { NameService } = useWeb3State(NetworkPluginID.PLUGIN_ID)\n\nconst { value: name = 'UNKNOWN' } = useAsync(async () => {\n    // the NameService could be undefined\n    return NameService?.lookup(address) \n})\n")),(0,r.kt)("p",null,"To access state from the start of ",(0,r.kt)("inlineCode",{parentName:"p"},"useWeb3State()")," is boring and lengthy. Since then, there have been a bunch of hooks existed to reduce labor work. Here is a simplified version of the previous one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { value: name = 'UNKNOWN' } = useLookupAddress(NetwrokPluginID.PLUGIN_ID, address)\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All Web3 hooks reserved the first parameter for ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPluginID"),". It's omittable if the rest parameters are not necessary. It will take the plugin ID of the currently selected network as a fallback."))),(0,r.kt)("p",null,"As we know, the extension maintains three kinds of pages. It includes a background page, some extension pages (popups and dashboard), and multiple content pages. Yeah, each of them will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginsWeb3Context"),". And they are sharing the same copy of data. If you alter the state of the context on the content page, it will finally sync to the rest pages. These UI components can update automatically, although they stay on different pages."),(0,r.kt)("p",null,"Suppose we have an address book UI running on the content page. The user could add a new address to the book by clicking somewhere on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const account = useAccount(NetworkPluginID.PLUGIN_ID)\nconst { AddressBook } = useWeb3State(NetworkPluginID.PLUGIN_ID)\n\nconst onAddAddress = useCallback(async (address: string) => {\n    await AddressBook?.addAddress(account, addresss)\n})\n")),(0,r.kt)("p",null,"And a select box on the options page will react to changes from the content page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const account = useAccount(NetworkPluginID.PLUGIN_ID)\n\n// the address book will change if the user adds an address on the content page.\nconst addressBook = useAddressBook(NetworkPluginID.PLUGIN_ID, account)\n\nreturn <AddressSelectBox addressBook={address} />\n")))}m.isMDXComponent=!0}}]);