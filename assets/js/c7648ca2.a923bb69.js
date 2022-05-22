"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[679],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={author:"zhouhancheng",maintainer:["zhouhancheng"]},c="Local Dialog vs Remote Dialog",s={unversionedId:"local-or-remote-dialog",id:"local-or-remote-dialog",title:"Local Dialog vs Remote Dialog",description:"What is remote-dialog",source:"@site/docs/local-or-remote-dialog.md",sourceDirName:".",slug:"/local-or-remote-dialog",permalink:"/docs/local-or-remote-dialog",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/local-or-remote-dialog.md",tags:[],version:"current",frontMatter:{author:"zhouhancheng",maintainer:["zhouhancheng"]},sidebar:"tutorialSidebar",previous:{title:"Checklist",permalink:"/docs/failed-checklist"},next:{title:"mask-flavored-jsonrpc-api",permalink:"/docs/mask-flavored-jsonrpc-api"}},d={},u=[{value:"What is remote-dialog",id:"what-is-remote-dialog",level:2},{value:"What is local-dialog",id:"what-is-local-dialog",level:2},{value:"When not to use remote-dialog",id:"when-not-to-use-remote-dialog",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-dialog-vs-remote-dialog"},"Local Dialog vs Remote Dialog"),(0,r.kt)("h2",{id:"what-is-remote-dialog"},"What is remote-dialog"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useRemoteControlledDialog<\n  T extends {\n    open: boolean\n  },\n>(\n  event: UnboundedRegistry<T>,\n  onUpdateByRemote?: ((ev: T) => void) | undefined,\n  tabType?: 'self' | 'activated',\n): readonly [boolean, (ev: T) => void]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"remote-dialog")," serves a special universal scene."),(0,r.kt)("p",null,"e.g: Ethereum transaction state track dialog, Select wallet dialog, they are used at lot of places."),(0,r.kt)("p",null,"It is a global singleton:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const EthereumPluginDefine: PluginConfig = {\n  PageComponent() {\n    return <TransactionDialog />\n  },\n}\n")),(0,r.kt)("h2",{id:"what-is-local-dialog"},"What is local-dialog"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"local-dialog")," serves for detailed business logic.\nIts props provided by parent component,\nsince it is part of the detailed business actually,\nits code located under the parent component which open/close it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<SnapshotCard>\n  //...\n  <VoteConfirmDialog\n    open={open}\n    loading={loading}\n    onClose={() => setOpen(false)}\n    choiceText={choices[choice - 1]}\n    message={message}\n    power={power}\n    onVoteConfirm={onVoteConfirm}\n  />\n</SnapshotCard>\n")),(0,r.kt)("h2",{id:"when-not-to-use-remote-dialog"},"When not to use remote-dialog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you render ",(0,r.kt)("inlineCode",{parentName:"p"},"remote-dialog")," under twitter timeline payload post component.\nAs you click the open dialog button, you will find several dialogs would be opened,\nbecause each instance has been loaded\nwhen there're multiple payload posts at the timeline and are listening to the open dialog event.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"remote-dialog")," loads in advance, usually it only loads once after the web page loads,\nwhich leads to that data returned by its network request hooks isn't the latest.\nEven a dialog is not rendered under on timeline,\nthere's only one instance rendered at the same time.\nIf you want it to fetch the latest network data each time when you open it,\nconsider using ",(0,r.kt)("inlineCode",{parentName:"p"},"local-dialog"),"."))))}m.isMDXComponent=!0}}]);