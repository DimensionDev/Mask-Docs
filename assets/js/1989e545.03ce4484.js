"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={},l="Internationalization Guide",c={unversionedId:"plugin-infra/i18n-guide",id:"plugin-infra/i18n-guide",title:"Internationalization Guide",description:"Crowdin",source:"@site/docs/plugin-infra/i18n-guide.md",sourceDirName:"plugin-infra",slug:"/plugin-infra/i18n-guide",permalink:"/docs/plugin-infra/i18n-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugin-infra/i18n-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Form Guide",permalink:"/docs/plugin-infra/form-guide"},next:{title:"Plugin Development Guide",permalink:"/docs/plugin-infra/plugin-development-guide"}},p={},s=[{value:"Submit community translation",id:"submit-community-translation",level:2},{value:"Caveats",id:"caveats",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internationalization-guide"},"Internationalization Guide"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://crowdin.com/project/mask-network"},(0,i.kt)("img",{parentName:"a",src:"https://badges.crowdin.net/mask-network/localized.svg",alt:"Crowdin"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We're currently not accepting new language support in Mask Network.")),(0,i.kt)("h2",{id:"submit-community-translation"},"Submit community translation"),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("a",{parentName:"p",href:"https://crowdin.com/project/mask-network"},"https://crowdin.com/project/mask-network")," or you can join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/4SVXvj7"},"Discord server")),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1")," two-letter code for locale file names.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new language new support"),(0,i.kt)("p",{parentName:"li"},"Please send to ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/4SVXvj7"},"Discord server")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"idea")," channel")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When add a new i18n text, add English version only,\nleave the rest to professional translators"))))}m.isMDXComponent=!0}}]);