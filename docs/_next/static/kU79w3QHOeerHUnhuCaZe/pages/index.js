(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"62q6":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=[{title:"Alerts",url:"/docs/alerts"},{title:"Forms",url:"/docs/forms"},{title:"Buttons",url:"/docs/buttons"}],i=n("YFqc"),l=n.n(i),s=n("nOHt"),c=a.a.createElement;e.a=function(t){var e=t.isOpen,n=Object(s.useRouter)();return c("nav",{className:e?"w-full fixed inset-0 pt-16 h-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10":"hidden w-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10"},c("div",{className:"h-full overflow-y-auto scrolling-touch lg:fixed"},c("div",{className:"p-6 overflow-y-auto lg:p-0"},c("h5",{className:"text-xs font-bold tracking-normal text-gray-500 uppercase"},"Components"),c("ul",null,o.map((function(t){return c("li",{className:n.pathname.includes(t.url)?"text-gray-800 font-semibold":"",key:t.url},c(l.a,{href:t.url},c("a",{className:"hover:text-gray-800"},t.title)))}))))))}},"66+1":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),l=n("FYa8"),s=n("/0+H");function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var c=f[l];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var u=a.props[c],d=r[c]||new Set;d.has(u)?o=!1:(d.add(u),r[c]=d)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var p=o.default();function m(t){var e=t.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)}))}))}m.rewind=p.rewind,e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.HeadManagerContext=a.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("Bnag");t.exports=function(t){return r(t)||a(t)||o()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),l=n("a1gu"),s=n("Nsbk"),c=n("RIqP");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(l){i(c,l);var s=u(c);function c(t){var o;return r(this,c),o=s.call(this,t),d&&(e.add(a(o)),n(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},Y038:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),l=a.a.createElement;e.a=function(t){var e=t.isOpen,n=t.setIsOpen;return l("header",{className:"fixed inset-x-0 top-0 z-20 flex items-center h-16 max-w-screen-xl px-6 mx-auto text-gray-700 bg-white"},l(i.a,{href:"/"},l("a",{className:"flex items-center hidden pr-6 font-bold md:block lg:w-1/4 xl:w-1/5"},"Tailwind Starter Kit")),l("div",{className:"w-full lg:w-2/4 xl:w-3/5"},l("div",{className:"w-full xl:pl-12"},l("div",{className:"relative"},l("div",{className:"absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600 pointer-events-none"},l("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 20 20"},l("path",{d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd",fillRule:"evenodd"}))),l("input",{className:"w-full py-2 pl-10 pr-4 placeholder-gray-600 transition-shadow duration-100 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed focus:bg-white focus:shadow-lg",placeholder:"Waiting for Algolia to crawl",disabled:!0})))),l("div",{className:"flex items-center -mr-2 lg:hidden"},l("button",{className:"p-2 ml-4 text-gray-600",onClick:function(){return n(!e)}},l("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},l("path",e?{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd",fillRule:"evenodd"}:{d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd",fillRule:"evenodd"})))),l("div",{className:"justify-end hidden pl-4 lg:flex lg:w-1/4 xl:w-1/5"},l("ul",{className:"flex"},l("li",null,l("a",{href:"https://github.com/estevanmaito/tailwind-starter-kit",target:"_blank"},l("svg",{viewBox:"0 0 16 16",className:"w-6 h-6 fill-current hover:text-gray-600"},l("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))))))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cMU6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),l=n("Y038"),s=n("62q6"),c=n("YFqc"),u=n.n(c),f=a.a.createElement;e.default=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1],o=e?"fixed min-h-screen overflow-hidden lg:relative":"";return f(a.a.Fragment,null,f(i.a,null,f("title",null,"Tailwind CSS Starter Kit"),f("meta",{name:"description",content:"A library of components made with Tailwind CSS to bootstrap your projects"}),f("link",{rel:"canonical",href:"https://estevanmaito.github.io/tailwind-starter-kit"}),f("meta",{name:"author",content:"Nome do autor do site"}),f("meta",{name:"robots",content:"index"}),f("meta",{itemprop:"name",content:"Tailwind CSS Starter Kit"}),f("meta",{itemprop:"description",content:"A library of components made with Tailwind CSS to bootstrap your projects"}),f("meta",{itemprop:"image",content:"https://estevanmaito.github.io/tailwind-starter-kit/social.png"}),f("meta",{property:"og:title",content:"Tailwind CSS Starter Kit"}),f("meta",{property:"og:description",content:"A library of components made with Tailwind CSS to bootstrap your projects"}),f("meta",{property:"og:url",content:"https://estevanmaito.github.io/tailwind-starter-kit"}),f("meta",{property:"og:type",content:"website"}),f("meta",{property:"og:image",content:"https://estevanmaito.github.io/tailwind-starter-kit/social.png"}),f("meta",{name:"twitter:title",content:"Tailwind CSS Starter Kit"}),f("meta",{name:"twitter:description",content:"A library of components made with Tailwind CSS to bootstrap your projects"}),f("meta",{name:"twitter:url",content:"https://estevanmaito.github.io/tailwind-starter-kit"}),f("meta",{name:"twitter:card",content:"summary_large_image"}),f("meta",{name:"twitter:image",content:"https://estevanmaito.github.io/tailwind-starter-kit/social.png"}),f("meta",{name:"twitter:creator",content:"@estevanmaito"})),f("div",{className:"w-full px-6 mx-auto lg:max-w-screen-xl"},f(l.a,{isOpen:e,setIsOpen:n}),f("div",{className:"lg:hidden"},f(s.a,{isOpen:e})),f("div",{className:o},f("div",{className:"mt-8 md:mt-16"},f("div",{className:"flex flex-col items-center md:flex-row"},f("div",{className:"my-12 md:my-0 md:w-1/2"},f("h1",{className:"mb-2 text-4xl font-bold tracking-tight text-center text-gray-700 md:text-left lg:text-5xl"},"Tailwind Starter Kit"),f("p",{className:"max-w-md mx-auto mb-8 text-lg leading-normal text-center text-gray-700 md:mx-0 md:text-left"},"A library of components made with Tailwind CSS to bootstrap your projects"),f("div",{className:"flex items-center justify-center md:justify-start"},f(u.a,{href:"/docs/alerts"},f("a",{className:"inline-flex items-center px-4 py-2 mr-4 font-bold text-white transition-colors duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 focus:shadow-outline"},"Read docs")),f("a",{className:"inline-flex items-center px-4 py-2 font-bold text-gray-700 transition-colors duration-150 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 focus:shadow-outline",href:"https://twitter.com/intent/tweet?text=Tailwind Starter Kit - A library of components made with Tailwind CSS to bootstrap your projects&via=estevanmaito&url=https://estevanmaito.github.io/tailwind-starter-kit",target:"_blank"},f("svg",{className:"h-4 mr-2 fill-current",viewBox:"0 0 24 24"},f("path",{d:"M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"})),"Share"))),f("div",{className:"md:w-1/2"},f("img",{className:"w-full",src:"/tailwind-starter-kit/undraw_product_teardown.svg",alt:"Smartphone with puzzle pieces"})))))))}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),l=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var f,d=u(n("q1tI")),p=n("QmWs"),m=n("g/15"),h=c(n("nOHt")),v=n("elyg");function w(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var g=new Map,y=window.IntersectionObserver,b={};function x(){return f||(y?f=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var S=function(t){o(n,t);var e=s(n);function n(t){var a;return r(this,n),(a=e.call(this,t)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:(0,v.addBasePath)(w(t)),as:e?(0,v.addBasePath)(w(e)):e}})),a.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,l=o.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var s=window.location.pathname;i=(0,p.resolve)(s,i),l=l?(0,p.resolve)(s,l):i,t.preventDefault();var c=a.props.scroll;null==c&&(c=l.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](i,l,{shallow:a.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==t.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,p.resolve)(t,n);return[a,r?(0,p.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=x();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),d.default.cloneElement(o,i)}}]),n}(d.Component);e.default=S},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.AmpStateContext=a.createContext({})}},[["66+1",0,2,1]]]);