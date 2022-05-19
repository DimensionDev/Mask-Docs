"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[859],{3905:function(a,e,t){t.d(e,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function c(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var s=n.createContext({}),l=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):c(c({},e),a)),t},d=function(a){var e=l(a.components);return n.createElement(s.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,o=a.originalType,s=a.parentName,d=i(a,["components","mdxType","originalType","parentName"]),u=l(t),m=r,M=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(M,c(c({ref:e},d),{},{components:t})):n.createElement(M,c({ref:e},d))}));function m(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=a,i.mdxType="string"==typeof a?a:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3494:function(a,e,t){t.r(e),t.d(e,{Highlight:function(){return u},assets:function(){return d},contentTitle:function(){return s},default:function(){return M},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:4},s="Markdown Features",l={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/Mask-Docs/docs/tutorial-basics/markdown-features",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/Mask-Docs/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/Mask-Docs/docs/tutorial-basics/deploy-your-site"}},d={},p=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=function(a){var e=a.children,t=a.color;return(0,o.kt)("span",{style:{backgroundColor:t,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){alert("You clicked the color "+t+" with label "+e)}},e)},m={toc:p,Highlight:u};function M(a){var e=a.components,i=(0,r.Z)(a,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,o.kt)("p",null,"Docusaurus supports ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,o.kt)("strong",{parentName:"p"},"additional features"),"."),(0,o.kt)("h2",{id:"front-matter"},"Front Matter"),(0,o.kt)("p",null,"Markdown documents have metadata at the top called ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,o.kt)("a",{parentName:"p",href:"/Mask-Docs/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Regular Markdown images are supported."),(0,o.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/mask.png"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Mask logo](/img/mask.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mask logo",src:t(9587).Z,width:"378",height:"378"})),(0,o.kt)("p",null,"You can reference images relative to the current file as well, as shown in ",(0,o.kt)("a",{parentName:"p",href:"/Mask-Docs/docs/tutorial-extras/manage-docs-versions"},"the extra guides"),"."),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"My tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use this awesome feature option"))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Take care")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This action is dangerous"))),(0,o.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,o.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,o.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}M.isMDXComponent=!0},9587:function(a,e){e.Z="data:image/png;base64,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"}}]);