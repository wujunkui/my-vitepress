import{a1 as o,at as p,au as u,av as l,aw as c,ax as f,ay as d,az as m,aA as h,aB as A,aC as g,d as v,y,o as P,h as w,aD as C,aE as R,aF as E,j as b}from"./chunks/framework.Ce1QH-zc.js";import{R as S}from"./chunks/theme.D9Tch3aC.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),T=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),R(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=j(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(T)}function j(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};
