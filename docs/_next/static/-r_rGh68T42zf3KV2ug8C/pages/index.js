(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=l,t.useAmp=function(){return l(a.default.useContext(o.AmpStateContext))}},"62q6":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=[{title:"Alerts",url:"/docs/alerts"},{title:"Forms",url:"/docs/forms"}],l=n("YFqc"),i=n.n(l),s=n("nOHt"),c=a.a.createElement;t.a=function(e){var t=e.isOpen,n=Object(s.useRouter)();return c("nav",{className:t?"w-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10":"hidden w-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10"},c("h5",{className:"text-xs font-bold tracking-normal text-gray-500 uppercase"},"Components"),c("ul",null,o.map((function(e){return c("li",{className:n.pathname===e.url?"text-gray-800 font-semibold":"",key:e.url},c(i.a,{href:e.url},c("a",{className:"hover:text-gray-800"},e.title)))}))))}},"66+1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),l=n("lwAK"),i=n("FYa8"),s=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var c=f[i];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var u=a.props[c],d=r[c]||new Set;d.has(u)?o=!1:(d.add(u),r[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=o.default();function h(e){var t=e.children;return a.default.createElement(l.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),s=n("Nsbk"),c=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){l(c,i);var s=u(c);function c(e){var o;return r(this,c),o=s.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},Y038:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),l=n.n(o),i=a.a.createElement;t.a=function(e){var t=e.isOpen,n=e.setIsOpen;return i("header",{className:"fixed inset-x-0 top-0 z-20 flex items-center max-w-screen-xl px-6 py-2 mx-auto text-gray-700 bg-white"},i(l.a,{href:"/"},i("a",{className:"flex items-center hidden pr-6 font-bold md:block lg:w-1/4 xl:w-1/5"},"Tailwind Starter Kit")),i("div",{className:"w-full lg:w-2/4 xl:w-3/5"},i("div",{className:"w-full xl:pl-12"},i("div",{className:"relative"},i("div",{className:"absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600 pointer-events-none"},i("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 20 20"},i("path",{d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd",fillRule:"evenodd"}))),i("input",{className:"w-full py-2 pl-10 pr-4 placeholder-gray-600 transition-shadow duration-100 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed focus:bg-white focus:shadow-lg",placeholder:"Waiting for Algolia to crawl",disabled:!0})))),i("div",{className:"flex items-center -mr-2 lg:hidden"},i("button",{className:"p-2 ml-4 text-gray-600",onClick:function(){return n(!t)}},i("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},i("path",t?{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd",fillRule:"evenodd"}:{d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd",fillRule:"evenodd"})))),i("div",{className:"justify-end hidden pl-4 lg:flex lg:w-1/4 xl:w-1/5"},i("ul",{className:"flex"},i("li",null,i("a",{href:"https://github.com/estevanmaito/windmill",target:"_blank"},i("svg",{viewBox:"0 0 16 16",className:"w-6 h-6 fill-current hover:text-gray-600"},i("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),l=n.n(o),i=n("Y038"),s=(n("62q6"),n("YFqc")),c=n.n(s),u=a.a.createElement;t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return u(a.a.Fragment,null,u(l.a,null,u("title",null,"Tailwind CSS Starter Kit"),u("link",{rel:"icon",href:"/favicon.ico"})),u("div",{className:"w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl"},u(i.a,{isOpen:t,setIsOpen:n}),u("div",{className:"mt-8 md:mt-16"},u("div",{className:"flex flex-col items-center md:flex-row"},u("div",{className:"my-12 md:my-0 md:w-1/2"},u("h1",{className:"text-4xl font-bold tracking-tight text-center text-gray-700 md:text-left lg:text-5xl xl:text-6xl"},"Tailwind Start Kit"),u("p",{className:"max-w-md mx-auto mb-8 text-lg leading-normal text-center text-gray-700 md:mx-0 md:text-left"},"A library of components made with Tailwind CSS to bootstrap your projects"),u("div",{className:"flex items-center justify-center md:justify-start"},u(c.a,{href:"/docs/alerts"},u("a",{className:"inline-flex items-center px-4 py-2 mr-4 font-bold text-white transition-colors duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 focus:shadow-outline"},"Read docs")),u(c.a,{href:"/docs/alerts"},u("a",{className:"inline-flex items-center px-4 py-2 font-bold text-gray-700 transition-colors duration-150 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 focus:shadow-outline"},u("svg",{className:"h-4 mr-2 fill-current",viewBox:"0 0 20 20"},u("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"})),"Share")))),u("div",{className:"md:w-1/2"},u("img",{className:"w-full",src:"/undraw_product_teardown.svg",alt:"Smartphone with puzzle pieces"}))))))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),l=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}var c=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,d=u(n("q1tI")),p=n("QmWs"),h=n("g/15"),m=c(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,w=window.IntersectionObserver,x={};function b(){return f||(w?f=new w((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var l=e(a,o);return t=a,n=o,r=l,l}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),l=o.href,i=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var s=window.location.pathname;l=(0,p.resolve)(s,l),i=i?(0,p.resolve)(s,i):l,e.preventDefault();var c=a.props.scroll;null==c&&(c=i.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](l,i,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,p.resolve)(e,n);return[a,r?(0,p.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),l={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||r),d.default.cloneElement(o,l)}}]),n}(d.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})}},[["66+1",0,2,1]]]);