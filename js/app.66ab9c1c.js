(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-e0218c36":"a3603cae"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-e0218c36":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-e0218c36":"84b5ff3e"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/magic/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e21":function(e,t,n){},"2fb4":function(e,t,n){},"4d40":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"grid"},[n("router-view")],1)])},a=[],c=(n("5c0b"),n("2877")),i={},u=Object(c["a"])(i,o,a,!1,null,null,null),s=u.exports,l=n("9483");Object(l["a"])("".concat("/magic/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},e._l(e.arrCards,(function(e,t){return n("HomeCard",{key:t,attrs:{linkData:e}})})),1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"home-card",attrs:{tag:"div",to:e.linkData.link}},[n("q-card",{staticClass:"my-card"},[n("q-card-section",[e._v(" "+e._s(e.linkData.title)+" ")])],1)],1)},h=[],g={name:"HomeCard",props:{linkData:Object}},v=g,b=(n("b880"),n("f09f")),y=n("a370"),w=n("93dc"),k=n.n(w),C=Object(c["a"])(v,m,h,!1,null,"529d984c",null),O=C.exports;k()(C,"components",{QCard:b["a"],QCardSection:y["a"]});var _={name:"Home",components:{HomeCard:O},data:function(){return{arrCards:[{title:"InsectOnHand",link:"/insect"},{title:"tttt",link:""}]}},computed:{},watch:{},methods:{},mounted:function(){},created:function(){}},j=_,E=Object(c["a"])(j,d,p,!1,null,"7bf38888",null),S=E.exports;r["a"].use(f["a"]);var x=[{path:"/",name:"Home",component:S},{path:"/insect",name:"InsectOnHand",component:function(){return n.e("chunk-e0218c36").then(n.bind(null,"b538"))}}],P=new f["a"]({mode:"hash",base:"/magic/",routes:x}),A=P,H=n("2f62");r["a"].use(H["a"]);var N=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=(n("0e21"),n("14c0")),D=(n("e54f"),n("b05d")),q=n("9c40"),B=n("0016");r["a"].use(D["a"],{config:{},components:{QBtn:q["a"],QIcon:B["a"]},plugins:{},lang:T["a"]});n("2fb4");r["a"].config.productionTip=!1,new r["a"]({router:A,store:N,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("4d40")},b880:function(e,t,n){"use strict";n("f0da")},f0da:function(e,t,n){}});
//# sourceMappingURL=app.66ab9c1c.js.map