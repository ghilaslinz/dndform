_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+Css":function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},"1uZy":function(t,n,e){"use strict";e.r(n);var r=e("vJKn"),o=e.n(r),c=e("rg98"),u=e("nKUr"),i=e("q1tI"),f=e("H+61"),a=e("UlJF"),s=e("7LId"),l=e("VIvw"),p=e("iHvq");function d(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(p.a)(t);if(n){var o=Object(p.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}var b=function(t){Object(s.a)(e,t);var n=d(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"render",value:function(){return Object(u.jsx)("ul",{children:this.props.data.map((function(t,n){var e=t.count/100*500;return Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{style:{width:"500px"},children:Object(u.jsx)("span",{children:t.text})}),Object(u.jsxs)("div",{style:{width:"500px",display:"flex",justifyContent:"space-between",backgroundColor:"yellow"},children:[Object(u.jsx)("span",{style:{width:e,backgroundColor:"red",color:"red"}}),Object(u.jsx)("span",{children:t.count})]})]},n)}))})}}]),e}(i.Component);function y(t){var n=t.id,e=Object(i.useState)(),r=e[0],o=e[1];return Object(i.useEffect)((function(){fetch("http://localhost:3000/api/findgraph/".concat(n)).then((function(t){return t.json()})).then((function(t){return o(t)}))}),[]),Object(u.jsx)("div",{children:r&&r.map((function(t){return Object(u.jsxs)("div",{children:[t.label,Object(u.jsx)(b,{id:t._id,data:t.options})]})}))})}y.getInitialProps=function(){var t=Object(c.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.query,r=e.id,t.abrupt("return",{id:r});case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.default=y},"7LId":function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))},"H+61":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},UlJF:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},VIvw:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,"a",(function(){return c}));var o=e("+Css");function c(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(o.a)(t):n}},X9ck:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graph/[id]",function(){return e("1uZy")}])},iHvq:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},rg98:function(t,n,e){"use strict";function r(t,n,e,r,o,c,u){try{var i=t[c](u),f=i.value}catch(a){return void e(a)}i.done?n(f):Promise.resolve(f).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,c){var u=t.apply(n,e);function i(t){r(u,o,c,i,f,"next",t)}function f(t){r(u,o,c,i,f,"throw",t)}i(void 0)}))}}e.d(n,"a",(function(){return o}))}},[["X9ck",0,1,2]]]);