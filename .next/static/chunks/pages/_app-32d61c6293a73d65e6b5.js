_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"048l":function(e,t,r){},"1TCz":function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return N}));var o=r("nKUr"),a=r("/MKj"),i=r("q1tI"),c=r("ANjH");function u(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var f=u();f.withExtraArgument=u;var s=f,l="setProducts",p="setProduct";function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={products:[],product:{}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return h(h({},e),{},{products:t.payload});case p:return h(h({},e),{},{product:t.payload});default:return e}},v=r("3hYr");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O,w={User:{},LogedIn:!1},j={productsState:y,User:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a.setUserLogedIn:return m(m({},e),{},{User:t.payload,LogedIn:!e.LogedIn});case v.a.Logout:return m(m({},e),{},{User:{},LogedIn:!e.LogedIn});default:return e}}},x=Object(c.c)(j),P=r("1mXj");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=[r.n(P).a,s];function _(e){return Object(c.d)(x,e,c.a.apply(void 0,E))}function D(e){return Object(i.useMemo)((function(){return function(e){var t,r=null!==(t=O)&&void 0!==t?t:_(e);return e&&O&&(r=_(k(k({},O.getState()),e)),O=void 0),O||(O=r),r}(e)}),[e])}r("H/sG");var A=r("g4pe"),M=r.n(A);r("048l"),r("sMFY");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=e.Component,r=e.pageProps,n=D(r.initialReduxState);return Object(o.jsxs)(a.a,{store:n,children:[Object(o.jsxs)(M.a,{children:[Object(o.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.13.0/css/all.css"}),Object(o.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})]}),Object(o.jsx)(t,I({},r))]})}},"1mXj":function(e,t,r){(function(e){!function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function f(e){var t="undefined"==typeof e?"undefined":A(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function s(e,t,r,n,l,p,d){d=d||[];var h=(l=l||[]).slice(0);if("undefined"!=typeof p){if(n){if("function"==typeof n&&n(h,p))return;if("object"===("undefined"==typeof n?"undefined":A(n))){if(n.prefilter&&n.prefilter(h,p))return;if(n.normalize){var g=n.normalize(h,p,e,t);g&&(e=g[0],t=g[1])}}}h.push(p)}"regexp"===f(e)&&"regexp"===f(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":A(e),v="undefined"==typeof t?"undefined":A(t),b="undefined"!==y||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),m="undefined"!==v||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!b&&m)r(new a(h,t));else if(!m&&b)r(new i(h,e));else if(f(e)!==f(t))r(new o(h,e,t));else if("date"===f(e)&&e-t!==0)r(new o(h,e,t));else if("object"===y&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var O;for(e.length,O=0;O<e.length;O++)O>=t.length?r(new c(h,O,new i(void 0,e[O]))):s(e[O],t[O],r,n,h,O,d);for(;O<t.length;)r(new c(h,O,new a(void 0,t[O++])))}else{var w=Object.keys(e),j=Object.keys(t);w.forEach((function(o,a){var i=j.indexOf(o);i>=0?(s(e[o],t[o],r,n,h,o,d),j=u(j,i)):s(e[o],void 0,r,n,h,o,d)})),j.forEach((function(e){s(void 0,t[e],r,n,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function l(e,t,r,n){return n=n||[],s(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],a=r.path.length-1;for(n=0;n<a;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=u(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,a=r.path?r.path.length-1:0;++o<a;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":p(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,o=e[t],a=r.path.length-1;for(n=0;n<a;n++)o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=u(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,a=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof a[r.path[n]]&&(a[r.path[n]]={}),a=a[r.path[n]];switch(r.kind){case"A":h(a[r.path[n]],r.index,r.item);break;case"D":case"E":a[r.path[n]]=r.lhs;break;case"N":delete a[r.path[n]]}}}function y(e,t,r){e&&t&&s(e,t,(function(n){r&&!r(e,t,n)||d(e,t,n)}))}function v(e){return"color: "+I[e].color+"; font-weight: bold"}function b(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(t){case"E":return[r.join("."),n,"\u2192",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+a+"]",i];default:return[]}}function m(e,t,r,n){var o=l(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=b(e);r.log.apply(r,["%c "+I[t].text,v(t)].concat(M(n)))})):r.log("\u2014\u2014 no diff \u2014\u2014");try{r.groupEnd()}catch(e){r.log("\u2014\u2014 diff end \u2014\u2014 ")}}function O(e,t,r,n){switch("undefined"==typeof e?"undefined":A(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,M(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+n),r&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}function j(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,a=void 0===o?w(t):o,i=t.collapsed,c=t.colors,u=t.level,f=t.diff,s="undefined"==typeof t.titleFormatter;e.forEach((function(o,l){var p=o.started,d=o.startedTime,h=o.action,g=o.prevState,y=o.error,v=o.took,b=o.nextState,w=e[l+1];w&&(b=w.prevState,v=w.started-p);var j=n(h),x="function"==typeof i?i((function(){return b}),h,o):i,P=_(d),S=c.title?"color: "+c.title(j)+";":"",k=["color: gray; font-weight: lighter;"];k.push(S),t.timestamp&&k.push("color: gray; font-weight: lighter;"),t.duration&&k.push("color: gray; font-weight: lighter;");var E=a(j,P,v);try{x?c.title&&s?r.groupCollapsed.apply(r,["%c "+E].concat(k)):r.groupCollapsed(E):c.title&&s?r.group.apply(r,["%c "+E].concat(k)):r.group(E)}catch(e){r.log(E)}var D=O(u,j,[g],"prevState"),A=O(u,j,[j],"action"),M=O(u,j,[y,g],"error"),C=O(u,j,[b],"nextState");if(D)if(c.prevState){var I="color: "+c.prevState(g)+"; font-weight: bold";r[D]("%c prev state",I,g)}else r[D]("prev state",g);if(A)if(c.action){var N="color: "+c.action(j)+"; font-weight: bold";r[A]("%c action    ",N,j)}else r[A]("action    ",j);if(y&&M)if(c.error){var H="color: "+c.error(y,g)+"; font-weight: bold;";r[M]("%c error     ",H,y)}else r[M]("error     ",y);if(C)if(c.nextState){var T="color: "+c.nextState(b)+"; font-weight: bold";r[C]("%c next state",T,b)}else r[C]("next state",b);f&&m(g,b,r,x);try{r.groupEnd()}catch(e){r.log("\u2014\u2014 log end \u2014\u2014")}}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},N,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,a=t.predicate,i=t.logErrors,c=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(f){if("function"==typeof a&&!a(r,f))return e(f);var s={};u.push(s),s.started=D.now(),s.startedTime=new Date,s.prevState=n(r()),s.action=f;var l=void 0;if(i)try{l=e(f)}catch(e){s.error=o(e)}else l=e(f);s.took=D.now()-s.started,s.nextState=n(r());var p=t.diff&&"function"==typeof c?c(r,f):t.diff;if(j(u,Object.assign({},t,{diff:p})),u.length=0,s.error)throw s.error;return l}}}}var P,S,k=function(e,t){return new Array(t+1).join(e)},E=function(e,t){return k("0",t-e.toString().length)+e},_=function(e){return E(e.getHours(),2)+":"+E(e.getMinutes(),2)+":"+E(e.getSeconds(),2)+"."+E(e.getMilliseconds(),3)},D="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];P="object"===("undefined"==typeof e?"undefined":A(e))&&e?e:"undefined"!=typeof window?window:{},(S=P.DeepDiff)&&C.push((function(){"undefined"!=typeof S&&P.DeepDiff===l&&(P.DeepDiff=S,S=void 0)})),r(o,n),r(a,n),r(i,n),r(c,n),Object.defineProperties(l,{diff:{value:l,enumerable:!0},observableDiff:{value:s,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof S},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach((function(e){e()})),C=null),l},enumerable:!0}});var I={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},N={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?x()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=N,t.createLogger=x,t.logger=H,t.default=H,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,r("ntbh"))},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),u=r("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,f=p.length;u<f;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var l=o.props[s],d=n[s]||new Set;"name"===s&&i||!d.has(l)?(d.add(l),n[s]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}h.rewind=function(){};var g=h;t.default=g},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},"H/sG":function(e,t,r){},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=(r("qXWd"),r("48fX")),c=r("tCBg"),u=r("T0f4");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("q1tI"),l=function(e){i(r,e);var t=f(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=l},g4pe:function(e,t,r){e.exports=r("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sMFY:function(e,t,r){},tCBg:function(e,t,r){var n=r("C+bE"),o=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}}},[[0,0,1,2,3,4,8]]]);