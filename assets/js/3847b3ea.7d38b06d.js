"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[581],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"setup",title:"Setup",sidebar_position:0},s="Setup",p={unversionedId:"setup",id:"setup",title:"Setup",description:"Hi, Welcome to the Mask Network. This guide will quickly take you through setting up the extension development environment.",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"setup",title:"Setup",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/docs/architecture"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Install",id:"install",level:2},{value:"pnpm",id:"pnpm",level:3},{value:"Start the local development server",id:"start-the-local-development-server",level:3},{value:"Load the extension into your browser",id:"load-the-extension-into-your-browser",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Debug the background page",id:"debug-the-background-page",level:3},{value:"Debug the content script",id:"debug-the-content-script",level:3},{value:"Use React Devtools",id:"use-react-devtools",level:3},{value:"Contribute your working",id:"contribute-your-working",level:2},{value:"Git conversions",id:"git-conversions",level:3},{value:"Using Git",id:"using-git",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Hi, Welcome to the Mask Network. This guide will quickly take you through setting up the extension development environment."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Here is a snippet of engines requirements in the ",(0,r.kt)("a",{target:"_blank",href:n(4532).Z},(0,r.kt)("code",null,"package.json"))," of Mask Network. As you can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," are required at least a specific version."),(0,r.kt)("p",null,"We suggest you to use the latest Node.js version, and enable ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"corepack"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"pnpm"},"pnpm"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/"},"pnpm")," is a disk space-efficient package manager. After NodeJS is preinstalled. If you have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"corepack")," enabled, you can skip the ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," section, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," is already available! If you want to setup pnpm manually, here is the ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"installation guide from pnpm"),"."),(0,r.kt)("p",null,"Now, you will need to have tools installed to start development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you encounter with error ",(0,r.kt)("inlineCode",{parentName:"p"},"EACCES: permission denied, open...'"),", please run ",(0,r.kt)("inlineCode",{parentName:"p"},"chown -R $USER /pathToYourProject/Mask")," to solve."))),(0,r.kt)("h3",{id:"start-the-local-development-server"},"Start the local development server"),(0,r.kt)("p",null,"For Chromium-based browsers (Chrome, Opera, Edge, etc.), please run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm start"),". It's preset of many development commands."),(0,r.kt)("p",null,"If you need to develop in other environments (for example, Firefox), please run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx dev --help")," to see the documentation."),(0,r.kt)("h3",{id:"load-the-extension-into-your-browser"},"Load the extension into your browser"),(0,r.kt)("p",null,"Mask Network has a huge codebase, and it might take time to let the webpack fully startup. It outcomes the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," folder, which contains the unpacked source files of a development version of the Mask Network extension."),(0,r.kt)("p",null,"For Chrome,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://extensions")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings -> Extensions"),"."),(0,r.kt)("li",{parentName:"ul"},"Turn on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer mode")," on the top right corner."),(0,r.kt)("li",{parentName:"ul"},"It will present a top toolbar with an action button ",(0,r.kt)("inlineCode",{parentName:"li"},"Load unpacked")," on it. Click it and choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/")," folder to load the unpacked version of the Mask Network extension. You can drag and drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," folder into this page."),(0,r.kt)("li",{parentName:"ul"},"If everything goes fine. Then, the Mask Network will guide you to the setup process.")),(0,r.kt)("p",null,"For Firefox, it's quite the same process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"about:debugging#/runtime/this-firefox")),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Temporary Add-on\u2026")," and select the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/")," folder to load the unpacked extension."),(0,r.kt)("li",{parentName:"ul"},"If everything goes fine. The Mask Network will start to guide you to the setup process.")),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"There is no difference between extension development and normal web development. In normal web development, you only have a single web page (SPA), but an extension could have more than one page."),(0,r.kt)("p",null,'There is an invisible "background page" running all the time and an "options page" like a normal web page. Moreover, an extension could inject "content script" into the currently visiting web page.'),(0,r.kt)("h3",{id:"debug-the-background-page"},"Debug the background page"),(0,r.kt)("p",null,"The background page of the Mask Network extension maintains a bunch of fundamental services for front-end functions. Like Crypto Algorithm, Web3 SDKs, APIs to many third-party data providers, etc. They are stand-by all the time, once to be called for a specific task."),(0,r.kt)("p",null,"To debug ",(0,r.kt)("em",{parentName:"p"},"background service"),", click links right after ",(0,r.kt)("strong",{parentName:"p"},"Inspect views"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5390719/103509131-5ce0cb00-4e9d-11eb-9aec-b24b9888b863.png",alt:"An image displaying Chrome extension manage page"})),(0,r.kt)("h3",{id:"debug-the-content-script"},"Debug the content script"),(0,r.kt)("p",null,"Mask Network only injects content script with permission from the user. For every new website that Mask Network is going to support, it will show a prompt dialog to ask permission dynamically, rather than asking for all permission when the plugin is installed."),(0,r.kt)("p",null,"To debug ",(0,r.kt)("em",{parentName:"p"},"content script"),", open the dev tools in the web page, then you can select context as the following picture describes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5390719/103509436-1a6bbe00-4e9e-11eb-9b18-bde021337944.png",alt:"An image displaying how to select Mask Network as the debug context"})),(0,r.kt)("p",null,"It's important to select the correct context when you're debugging,\notherwise, you cannot access all the global variables,\n",(0,r.kt)("em",{parentName:"p"},"save as temp variables")," also fails."),(0,r.kt)("h3",{id:"use-react-devtools"},"Use React Devtools"),(0,r.kt)("p",null,"Run the following command to start the React Devtools. It doesn't work if you install it as a browser extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpx react-devtools\n")),(0,r.kt)("p",null,"And start the development by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpx dev --profile\n")),(0,r.kt)("h2",{id:"contribute-your-working"},"Contribute your working"),(0,r.kt)("h3",{id:"git-conversions"},"Git conversions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch is our developing branch, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"released")," branch points to the latest released version."),(0,r.kt)("p",null,"Your commit message should follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org"},"Conventional Commits"),"."),(0,r.kt)("h3",{id:"using-git"},"Using Git"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/getting-started-with-github/using-git-rebase-on-the-command-line"},"Using git rebase on the command line")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork"},"Configuring a remote for a fork")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests"},"Syncing a fork"))))}m.isMDXComponent=!0},4532:function(e,t,n){t.Z=n.p+"assets/files/package-29ac1c008f189a393f8221a2c42edffb.json"}}]);