var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,l,f,u,s,d,p,c,h,v,b,g,m={},y={};function w(e){if(y[e])return y[e].exports;var r=y[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,w),r.loaded=!0,r.exports}w.m=m,w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{261:"e80595592ff17cb053ba",287:"88f8c493374042e35cd4",486:"e3638d8492fd53e1957b",568:"37b4ff2368e65439ec73",755:"6ca9bd64cf131aabbb94"}[e]+".js?v="+{261:"e80595592ff17cb053ba",287:"88f8c493374042e35cd4",486:"e3638d8492fd53e1957b",568:"37b4ff2368e65439ec73",755:"6ca9bd64cf131aabbb94"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ipytree:",w.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var s=f[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="ipytree",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},f=[];switch(t){case"default":l("ipytree","0.2.1",(()=>Promise.all([w.e(755),w.e(568)]).then((()=>()=>w(568))))),l("jstree","3.3.11",(()=>Promise.all([w.e(755),w.e(287)]).then((()=>()=>w(287))))),l("lodash","4.17.21",(()=>w.e(486).then((()=>()=>w(486)))))}return e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+f()+")":1===l?"("+f()+" || "+f()+")":2===l?i.pop()+" "+i.pop():o(l))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,f=!0;;l++,i++){var u,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(u=r[i]))[0]))return!f||("u"==d?l>n&&!o:""==d!=o);if("u"==s){if(!f||"u"!=d)return!1}else if(f)if(d==s)if(l<=n){if(u!=e[l])return!1}else{if(o?u>e[l]:u<e[l])return!1;u!=e[l]&&(f=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;f=!1,l--}else{if(l<=n||s<d!=o)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,l--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",u=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(f(t,o,n)),d(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),c=(p=e=>function(r,t,n,o){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),u(r,0,t,n)))),h=p(((e,r,t,n,o)=>{var a=r&&w.o(r,t)&&s(r,t,n);return a?d(a):o()})),v={},b={431:()=>h("default","lodash",[1,4,17,4],(()=>w.e(486).then((()=>()=>w(486))))),600:()=>h("default","jstree",[2,3,3,9],(()=>w.e(287).then((()=>()=>w(287))))),648:()=>c("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2,0,1],1,1])},g={568:[431,600,648]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,m[e]=t=>{delete y[e],t.exports=r()}},n=r=>{delete v[e],m[e]=t=>{throw delete y[e],r}};try{var o=b[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={521:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,o,[a,i,l]=t,f=0,u=[];f<a.length;f++)o=a[f],w.o(e,o)&&e[o]&&u.push(e[o][0]),e[o]=0;for(n in i)w.o(i,n)&&(w.m[n]=i[n]);for(l&&l(w),r&&r(t);u.length;)u.shift()()},t=self.webpackChunkipytree=self.webpackChunkipytree||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E={};(()=>{var e=E,r={"./index":()=>Promise.all([w.e(755),w.e(568)]).then((()=>()=>w(568))),"./extension":()=>Promise.all([w.e(755),w.e(568),w.e(261)]).then((()=>()=>w(261)))},t=(e,t)=>(w.R=t,t=w.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),w.R=void 0,t),n=(e,r)=>{if(w.S){var t=w.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return w.S[n]=e,w.I(n,r)}};w.d(e,{get:()=>t,init:()=>n})})(),(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipytree=E})();