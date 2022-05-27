"use strict";(self.webpackChunkmask_docs=self.webpackChunkmask_docs||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Form",c={unversionedId:"guide/form",id:"guide/form",title:"Form",description:"General content",source:"@site/docs/guide/form.md",sourceDirName:"guide",slug:"/guide/form",permalink:"/docs/guide/form",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/form.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS in JS",permalink:"/docs/guide/css-in-js"},next:{title:"Internationalization",permalink:"/docs/guide/internationalization"}},d={},m=[{value:"General content",id:"general-content",level:2},{value:"1. Use <code>zod</code> to create form field schema",id:"1-use-zod-to-create-form-field-schema",level:3},{value:"2. Call <code>useForm</code> to get the method collection",id:"2-call-useform-to-get-the-method-collection",level:3},{value:"3. Create form UI with <code>Controller</code> and Material-UI component",id:"3-create-form-ui-with-controller-and-material-ui-component",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Use <code>useFormContext</code> to get methods in children component",id:"use-useformcontext-to-get-methods-in-children-component",level:3},{value:"Set field",id:"set-field",level:3},{value:"Be careful with watch",id:"be-careful-with-watch",level:3}],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"form"},"Form"),(0,a.kt)("h2",{id:"general-content"},"General content"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},(0,a.kt)("inlineCode",{parentName:"a"},"react-hook-form"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/colinhacks/zod#error-formatting"},(0,a.kt)("inlineCode",{parentName:"a"},"zod"))," to create the form. Here are the basic steps to create a simple form"),(0,a.kt)("h3",{id:"1-use-zod-to-create-form-field-schema"},"1. Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"zod")," to create form field schema"),(0,a.kt)("p",null,"You can set error message with i18n, you can read this file to learn about ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/internationalization"},"i18n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { z as zod } from 'zod'\n\nexport function ComponentForm() {\n  const t = useComponentI18N() // Set error message with i18n.\n  const schema = zod.object({\n    name: zod.string(), // string\n    age: zod.number(t.needBeNumber()).positive(t.needGreaterThanZero()), // > 0\n    country: zod.string(t.countyNeedBeString()).optional(), // string | undefined\n    address: zod\n      .string()\n      .min(1)\n      .refine((address) => ValidAddress(address), t.InvalidAddress), // You can use other methods to validate this field\n  })\n\n  // ...\n}\n")),(0,a.kt)("h3",{id:"2-call-useform-to-get-the-method-collection"},"2. Call ",(0,a.kt)("inlineCode",{parentName:"h3"},"useForm")," to get the method collection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { zodResolver } from '@hookform/resolvers/zod'\nimport { useForm } from 'react-hook-form'\n\nconst methods = useForm<formType>({\n  resolver: zodResolver(schema),\n  defaultValues: {\n    name: '',\n    age: 1,\n    address: '',\n  },\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react-hook-form")," provides ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},"optional arguments"),", you can change it on demand."),(0,a.kt)("h3",{id:"3-create-form-ui-with-controller-and-material-ui-component"},"3. Create form UI with ",(0,a.kt)("inlineCode",{parentName:"h3"},"Controller")," and Material-UI component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"react-hook-form")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," component without import other packages to support UI libraries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n  control,\n  handleSubmit,\n  formState: { errors, dirtyFields, isDirty },\n} = useForm(options)\n\nconst onSubmit = handleSubmit((data) => doSomething())\n\nreturn (\n  <form>\n    <Controller\n      render={({ field }) => <TextField {...field} helperText={errors.name?.message} error={dirtyFields.name} />}\n      name="name"\n    />\n    <Button onClick={onSubmit} disabled={!isValid} />\n  </form>\n)\n')),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("h3",{id:"use-useformcontext-to-get-methods-in-children-component"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"useFormContext")," to get methods in children component"),(0,a.kt)("p",null,"In practice, you may need to get form methods in the children component. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"useFormContext")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FormProvider")," to resolve this problem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Parent component\nconst methods = useForm()\nreturn <FormProvider {...methods}>....</FormProvider>\n\n// Children component\nconst { control, register, formState } = useFormContext()\n")),(0,a.kt)("h3",{id:"set-field"},"Set field"),(0,a.kt)("p",null,"Sometimes we need set some field from remote data. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue")," to change these field. If you want to trigger valid while setting the field, you can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldValid")," option"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { watch, setValue } = useForm()\n\n// You can use watch to monitor some field change\nconst address = watch('address')\nuseEffect(() => {\n  const { symbol } = fetchDataByAddress(address)\n  setValue('symbol', symbol, { shouldValid: true })\n}, [address])\n")),(0,a.kt)("h3",{id:"be-careful-with-watch"},"Be careful with watch"),(0,a.kt)("p",null,"Sometimes we need to listen to the field update to do something. Although you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," to react to a field. But it will cause extra renders and cause a potential performance problem. Try to use ",(0,a.kt)("inlineCode",{parentName:"p"},"getValues")," if that suits you."))}p.isMDXComponent=!0}}]);