(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,r){"use strict";r("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var o,i=n(r("PJYZ")),a=n(r("VbXa")),s=n(r("8OQS")),u=n(r("pVnL")),c=n(r("q1tI")),f=n(r("17x9")),l=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,o=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),o&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=l(e),r=p(t);return g[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,o=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:o,srcSet:n,sizes:i}),c.default.createElement("source",{media:o,srcSet:r,sizes:i}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function T(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function L(e,t){var r=e.srcSet,n=e.srcSetWebp,o=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(o?'media="'+o+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),o);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',a=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",f=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+a+s+r+n+t+i+o+u+f+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,o=e.generateSources,i=e.spreadProps,a=e.ariaHidden,s=c.default.createElement(C,(0,u.default)({ref:t,src:r},i,{ariaHidden:a}));return n.length>1?c.default.createElement("picture",null,o(n),s):s})),C=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,o=e.src,i=e.style,a=e.onLoad,f=e.onError,l=e.loading,d=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:o},h,{onLoad:a,onError:f,ref:t,loading:l,draggable:d,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var A=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=l(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=l(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,s=void 0===a?{}:a,f=e.placeholderStyle,d=void 0===f?{}:f,p=e.placeholderClassName,g=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,x=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,u.default)({opacity:R?1:0,transition:A?"opacity "+y+"ms":"none"},s),I="boolean"==typeof v?"lightgray":v,V={transitionDelay:y+"ms"},B=(0,u.default)({opacity:this.state.imgLoaded?0:1},A&&V,s,d),k={title:t,alt:this.state.isVisible?"":r,style:B,className:p,itemProp:w};if(g){var q=g,z=h(g);return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),I&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&V)}),z.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:k,imageVariants:q,generateSources:T}),z.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:k,imageVariants:q,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(q),c.default.createElement(C,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,u.default)({alt:r,title:t,loading:x},z,{imageVariants:q}))}}))}if(m){var P=m,U=h(m),J=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete J.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},I&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:I,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},A&&V)}),U.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:k,imageVariants:P,generateSources:T}),U.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:k,imageVariants:P,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(P),c.default.createElement(C,{alt:r,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,u.default)({alt:r,title:t,loading:x},U,{imageVariants:P}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string}),I=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string,maxWidth:f.default.number,maxHeight:f.default.number});A.propTypes={resolutions:j,sizes:I,fixed:f.default.oneOfType([j,f.default.arrayOf(j)]),fluid:f.default.oneOfType([I,f.default.arrayOf(I)]),fadeIn:f.default.bool,durationFadeIn:f.default.number,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,crossOrigin:f.default.oneOfType([f.default.string,f.default.bool]),style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string,itemProp:f.default.string,loading:f.default.oneOf(["auto","lazy","eager"]),draggable:f.default.bool};var V=A;t.default=V},"9rSQ":function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},AphP:function(e,t,r){"use strict";var n=r("XKFU"),o=r("S/j/"),i=r("apmT");n(n.P+n.F*r("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),r=i(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},CgaS:function(e,t,r){"use strict";r("pIFo"),r("8+KV"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("MLWZ"),i=r("9rSQ"),a=r("UnBK"),s=r("SntB");function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=u},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},EK0E:function(e,t,r){"use strict";var n,o=r("dyZX"),i=r("CkkT")(0),a=r("KroJ"),s=r("Z6vF"),u=r("czNK"),c=r("ZD67"),f=r("0/R4"),l=r("s5qY"),d=r("s5qY"),p=!o.ActiveXObject&&"ActiveXObject"in o,h=s.getWeak,g=Object.isExtensible,m=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(f(e)){var t=h(e);return!0===t?m(l(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(l(this,"WeakMap"),e,t)}},b=e.exports=r("4LiD")("WeakMap",v,y,c,!0,!0);d&&p&&(u((n=c.getConstructor(v,"WeakMap")).prototype,y),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];a(t,e,(function(t,o){if(f(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,o);return"set"==e?this:i}return r.call(this,t,o)}))})))},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},INYr:function(e,t,r){"use strict";var n=r("XKFU"),o=r("CkkT")(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),n(n.P+n.F*a,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},JEQr:function(e,t,r){"use strict";(function(t){r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("xTJ+"),o=r("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=r("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(i)})),e.exports=u}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var n=r("OH9c");e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,r){"use strict";r("V+eJ"),r("jqX0"),r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt"),r("pIFo");var n=r("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OGtf:function(e,t,r){var n=r("XKFU"),o=r("eeVq"),i=r("vhPU"),a=/"/g,s=function(e,t,r,n){var o=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},OH9c:function(e,t,r){"use strict";r("f3/d"),r("AphP"),e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,r){"use strict";r("OG14"),r("pIFo");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},RXBc:function(e,t,r){"use strict";r.r(t);r("VRzm"),r("Btvt");var n=r("o0o1"),o=r.n(n),i=(r("ls82"),r("q1tI")),a=r.n(i),s=r("Wbzz"),u=r("vDqi"),c=r.n(u),f=r("Bl7J"),l=r("edhK"),d=r("9eSz"),p=r.n(d),h=function(){var e=l.data;return a.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})},g=r("vrFN");function m(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}var v=function(){var e,t=(e=o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/.netlify/functions/leaderboard");case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){m(i,n,o,a,s,"next",e)}function s(e){m(i,n,o,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();t.default=function(){return v(),a.a.createElement(f.a,null,a.a.createElement(g.a,{title:"Home"}),a.a.createElement("h1",null,"Hi people"),a.a.createElement("p",null,"Welcome to your new Gatsby site."),a.a.createElement("p",null,"Now go build something great."),a.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},a.a.createElement(h,null)),a.a.createElement(s.Link,{to:"/page-2/"},"Go to page 2")," ",a.a.createElement("br",null),a.a.createElement(s.Link,{to:"/using-typescript/"},'Go to "Using TypeScript"'))}},"Rn+g":function(e,t,r){"use strict";var n=r("LYNF");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},SntB:function(e,t,r){"use strict";r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("8+KV");var n=r("xTJ+");e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(i,(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(a,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var s=o.concat(i).concat(a),u=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(u,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},Tze0:function(e,t,r){"use strict";r("qncB")("trim",(function(e){return function(){return e(this,3)}}))},UnBK:function(e,t,r){"use strict";r("VRzm"),r("Btvt"),r("8+KV");var n=r("xTJ+"),o=r("xAGQ"),i=r("Lmem"),a=r("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),o=r("Z6vF").getWeak,i=r("y3w9"),a=r("0/R4"),s=r("9gX7"),u=r("SlkY"),c=r("CkkT"),f=r("aagx"),l=r("s5qY"),d=c(5),p=c(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},v=function(e,t){return d(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var r=v(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,n){s(e,c,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&u(n,r,e[i],e)}));return n(c.prototype,{delete:function(e){if(!a(e))return!1;var r=o(e);return!0===r?g(l(this,t)).delete(e):r&&f(r,this._i)&&delete r[this._i]},has:function(e){if(!a(e))return!1;var r=o(e);return!0===r?g(l(this,t)).has(e):r&&f(r,this._i)}}),c},def:function(e,t,r){var n=o(i(t),!0);return!0===n?g(e).set(t,r):n[e._i]=r,e},ufstore:g}},edhK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},endd:function(e,t,r){"use strict";function n(e){this.message=e}r("a1Th"),r("h7Nl"),r("Btvt"),n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,r){"use strict";r("eM6i"),r("Oyvg"),r("SRfc");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,r){"use strict";var n=r("2SVd"),o=r("5oMp");e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},"jfS+":function(e,t,r){"use strict";r("VRzm"),r("Btvt");var n=r("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jqX0:function(e,t,r){var n=r("XKFU"),o=r("jtBr");n(n.P+n.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,r){"use strict";var n=r("eeVq"),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(e){return e>9?e:"0"+e};e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!n((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+"."+(r>99?r:"0"+a(r))+"Z"}:i},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=u(e,t,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===c)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var c={};function f(){}function l(){}function d(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(E([])));g&&g!==t&&r.call(g,o)&&(p=g);var m=d.prototype=f.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){f.value=e,a(f)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return l.prototype=m.constructor=d,d.constructor=l,d[a]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new y(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},tQ2B:function(e,t,r){"use strict";r("8+KV"),r("V+eJ"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("Rn+g"),i=r("MLWZ"),a=r("g7np"),s=r("w0Vi"),u=r("OTTw"),c=r("LYNF");e.exports=function(e){return new Promise((function(t,f){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+g)}var m=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,f,n),p=null}},p.onabort=function(){p&&(f(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var v=r("eqyj"),y=(e.withCredentials||u(m))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";r("Tze0"),r("V+eJ"),r("KKXr"),r("8+KV");var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},xAGQ:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";r("pIFo"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("HSsa"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},zuR4:function(e,t,r){"use strict";r("VRzm"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3");var n=r("xTJ+"),o=r("HSsa"),i=r("CgaS"),a=r("SntB");function s(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=s(r("JEQr"));u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=r("endd"),u.CancelToken=r("jfS+"),u.isCancel=r("Lmem"),u.all=function(e){return Promise.all(e)},u.spread=r("DfZB"),e.exports=u,e.exports.default=u}}]);
//# sourceMappingURL=component---src-pages-index-js-34f35485da7140442f00.js.map