/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),s=n(26),i=n(372),o=n(327),a=n(97),l=n(109),c=n(985),d=n(61);e.exports=function(e){return new Promise((function(t,n){var u=e.data,p=e.headers;r.isFormData(u)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(f+":"+m)}var g=a(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?l(h.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};s(t,n,i),h=null}},h.onabort=function(){h&&(n(d("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(d("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(d(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||c(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){void 0===u&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),n(e),h=null)})),u||(u=null),h.send(u)}))}},609:(e,t,n)=>{"use strict";var r=n(867),s=n(849),i=n(321),o=n(185);function a(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var l=a(n(655));l.Axios=i,l.create=function(e){return a(o(l.defaults,e))},l.Cancel=n(263),l.CancelToken=n(972),l.isCancel=n(502),l.all=function(e){return Promise.all(e)},l.spread=n(713),e.exports=l,e.exports.default=l},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),s=n(327),i=n(782),o=n(572),a=n(185);function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},l.prototype.getUri=function(e){return e=a(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},782:(e,t,n)=>{"use strict";var r=n(867);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,n)=>{"use strict";var r=n(793),s=n(303);e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,s,i){var o=new Error(e);return r(o,t,n,s,i)}},572:(e,t,n)=>{"use strict";var r=n(867),s=n(527),i=n(502),o=n(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={},s=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function l(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=l(void 0,e[s])):n[s]=l(e[s],t[s])}r.forEach(s,(function(e){r.isUndefined(t[e])||(n[e]=l(void 0,t[e]))})),r.forEach(i,c),r.forEach(o,(function(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=l(void 0,e[s])):n[s]=l(void 0,t[s])})),r.forEach(a,(function(r){r in t?n[r]=l(e[r],t[r]):r in e&&(n[r]=l(void 0,e[r]))}));var d=s.concat(i).concat(o).concat(a),u=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===d.indexOf(e)}));return r.forEach(u,c),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),s=n(16),i={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,l={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(448)),a),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(i)})),e.exports=l},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))})))})),i=o.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,s,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(s)&&a.push("path="+s),r.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(o[t]&&s.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,n)=>{"use strict";var r=n(849),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===s.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:l,isUndefined:o,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){l(t[r])&&l(n)?t[r]=e(t[r],n):l(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,s=arguments.length;r<s;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,s){e[s]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,p=-1,h=0;const{strings:f,values:{length:m}}=e;for(;h<m;){const e=a.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,o)&&r++;for(;r-- >0;){const t=f[h],n=u.exec(t)[2],r=n.toLowerCase()+o,s=e.getAttribute(r);e.removeAttribute(r);const a=s.split(i);this.parts.push({type:"attribute",index:p,name:n,strings:a}),h+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,s=t.split(i),a=s.length-1;for(let t=0;t<a;t++){let n,i=s[t];if(""===i)n=d();else{const e=u.exec(i);null!==e&&l(e[2],o)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++p})}""===s[a]?(r.insertBefore(d(),e),n.push(e)):e.data=s[a],h+=a}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&p!==c||(p++,t.insertBefore(d(),e)),c=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(n.push(e),p--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,133,null,!1);let i=f(r),o=r[i],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,i=f(r,i),o=r[i]}c.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},f=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(c(t))return n}return-1},m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),y={},v={};class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,l=s.nextNode();for(;o<r.length;)if(i=r[o],c(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=n.pop(),l=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${r} `;class w{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],a=e.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===e.indexOf("--\x3e",a+1);const l=u.exec(e);t+=null===l?e+(n?b:s):e.substr(0,l.index)+l[1]+l[2]+o+l[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==x&&(t=x.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),P=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!P(e))return e}let r="";for(let s=0;s<t;s++){r+=e[s];const t=n[s];if(void 0!==t){const e=t.value;if(S(e)||!P(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||S(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],void 0===n&&(n=new N(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class A extends C{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends E{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class U{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function j(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(r);return n=t.keyString.get(s),void 0===n&&(n=new a(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,L=new WeakMap,B=new class{handleAttributeExpressions(e,t,n,r){const s=t[0];return"."===s?new A(e,t.slice(1),n).parts:"@"===s?[new U(e,t.slice(1),r.eventContext)]:"?"===s?[new T(e,t.slice(1),n)]:new C(e,t,n).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(e,...t)=>new w(e,t,"html",B),q=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const $=e=>t=>{const n=q(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r);if(i=s.keyString.get(o),void 0===i){const n=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,e),i=new a(t,n),s.keyString.set(o,i)}return s.stringsArray.set(t.strings,i),i},I=["html","svg"],H=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdateInternal(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=F){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||D,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||D.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const s=this.constructor;n=n||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Y{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(e,...t)=>{const n=t.reduce(((t,n,r)=>t+(e=>{if(e instanceof Y)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new Y(n,K)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class ee extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),r=[];n.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new Y(String(t),K)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Z}}ee.finalized=!0,ee.render=(e,n,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,i=L.has(n),o=z&&11===n.nodeType&&!!n.host,a=o&&!H.has(s),l=a?document.createDocumentFragment():n;if(((e,n,r)=>{let s=L.get(n);void 0===s&&(t(n,n.firstChild),L.set(n,s=new N(Object.assign({templateFactory:j},r))),s.appendInto(n)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:$(s)},r)),a){const e=L.get(l);L.delete(l);((e,t,n)=>{H.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{I.forEach((t=>{const n=V.get(q(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),p(e,n)}))}))})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let o=f(s),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=h(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=f(s,o);return}o=f(s,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(n,e)}})(s,l,e.value instanceof _?e.value.template:void 0),t(n,n.firstChild),n.appendChild(l),L.set(n,e)}!i&&o&&window.ShadyCSS.styleElement(n.host)};class te extends HTMLElement{constructor(){super();const e=document.createElement("nav"),t=document.createElement("style");e.innerHTML='\n                <div>\n                    <picture style="margin-left: 30px;">\n                        <img src="images/travazy.png" alt="travazy-logo" class=\'logo-image\'>\n                    </picture>\n                </div>\n                <div style="width: 100px;"></div>\n                <div style="margin-right: 30px;">\n                    <ul class="nav-list">\n                        <li>\n                            <a href="index.html">HOME</a>\n                        </li>\n                        <li>\n                            <a href="destinations.html">DESTINATIONS</a>\n                        </li>\n                        <li>\n                            <a href="#google_translate_element">LANGUAGE</a>\n                        </li>\n                    </ul>\n                </div>\n            ',this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.appendChild(e),this._shadowRoot.appendChild(t)}static get observedAttributes(){return["color"]}updateStyle(e){console.log("merge"),e.shadowRoot.querySelector("style").innerHTML=`\n                nav {\n                    display: flex;\n                    justify-content: space-between;\n                    text-align: center;\n                    position: sticky;\n                    background-color: #17231f;\n                }\n\n                .nav-list {\n                    list-style: none;\n                    display: flex;\n                    margin-right: -20px;\n                }\n                \n                .nav-list li {\n                    border: solid;\n                    border-radius: 1em;\n                    border-width: 1.8px;\n                    border-style: solid;\n                    border-image: \n                    linear-gradient(\n                        to bottom, \n                        goldenrod, \n                        #17231f\n                    ) 1 100%;\n                }\n                \n                .nav-list li:first-child {\n                    border-left: none;\n                }\n                \n                .nav-list li:last-child {\n                    border-right: none;\n                }\n                \n                .nav-list li a {\n                    color: inherit;\n                    font-family: serif;\n                    display: inline-block;\n                    min-width: 70px;\n                    padding: 10px 15px;\n                    text-decoration: none;\n                    font-weight: bold;\n                }\n                \n                .nav-list li a:hover {\n                    color: goldenrod;\n                    text-decoration-line: underline;\n                }\n\n                .logo-image {\n                    width: 150px;\n                }\n\n                :host {\n                    color: ${e.getAttribute("color")};\n                }\n            `}connectedCallback(){console.log("hello from connected callback")}disconnectedCallback(){console.log("hello from disconnected callback")}adoptedCallback(){console.log("hello from adopted callback")}attributeChangedCallback(e,t,n){console.log("changed color",e,t,n),this.updateStyle(this)}}customElements.define("navigation-element",te),customElements.define("app-header",class extends ee{static get styles(){return Q`
                #header-title {
                    padding-top: 100px;
                    font-family: serif;
                    font-size: 3cm;
                    color: whitesmoke;
                }
                
                #header-subtitle {
                    padding-bottom: 100px;
                    margin-top: -5%;
                    font-family: serif;
                    font-size: xx-large;
                    color: whitesmoke;
                }

                .header-div {
                    margin-top: -75.5px;
                    background-image: url(../images/banner.png);
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 100%;
                    text-align: center;
                }

                :host {
                    grid-area: my-header;
                }
            `}constructor(){super()}render(){return M`
                <navigation-element color="white"></navigation-element>
                <div class="header-div">
                    <h1 id="header-title">Welcome to Travazy</h1>
                    <h3 id="header-subtitle">Your journey starts here</h3>
                </div>
                <div style="height: 80px; background-color: #17231f; margin-top: -32px;"></div>
            `}connectedCallback(){super.connectedCallback();const e=new Promise(((e,t)=>{e("I am Yoda")})),t=new Promise(((e,t)=>{setTimeout(t,700,"ok")})),n=new Promise(((e,t)=>{setTimeout(t,500,"super ok")}));Promise.race([e,t,n]).then((e=>console.log(e))).catch((e=>console.log(e))),this.getPosts(),this.getPosts2()}getPosts(){}async getPosts2(){const e=window.axios;try{const t=await e.get("https://jsonplaceholder.typicode.com/posts");console.log(t)}catch(e){console.log(e)}console.log("la sfarsitul metodei")}}),customElements.define("app-footer",class extends ee{static get styles(){return Q`
                :root {
                    --background:  #17231f;
                }

                #footer-text {
                    font-family: monospace;
                    color: white;
                    margin-top: 0%;
                }

                .logo-image {
                    width: 150px;
                }

                :host {
                    background-color: var(--background);
                    text-align: center;
                    margin: 0;
                    position: relative;
                    grid-area: my-footer;
                }
            `}constructor(){super()}render(){return M`
                <div>
                    <picture>
                        <img src="images/travazy.png" alt="travazy-logo" class='logo-image'>
                    </picture>
                    <p id="footer-text">
                        Copyright &copy; {Dev}School 2020. All rights reserved.
                    </p>
                </div>
            `}});var ne=n(669),re=n.n(ne);customElements.define("article-destination",class extends ee{static get styles(){return Q`
                .article-title {
                    margin-bottom: -15px;
                    color: #d04764;
                    font-family: "Playfair Display";
                    font-style: normal;
                    font-variant: normal;
                    font-size: 36px;
                    font-weight: bold;
                    line-height: 48px;
                    text-shadow: 1px 0 0 #fff;
                }
                
                .article-subtitle {
                    font-weight: normal;
                    color: grey;
                }

                .images {
                    width: 100px;
                    padding: 10px;
                    flex: 1;
                    object-fit: cover;
                }

                .destinations-text-content {
                    flex: 5;
                    padding: 10px;
                }

                .my-span {
                    background-color: gray;
                    font-weight: bold;
                }

                :host {
                    display: flex;
                    padding-bottom: 30px;
                }
            `}static get properties(){return{destination_id:{type:String},title:{type:String},subtitle:{type:String},firstParagraph:{type:String},secondParagraph:{type:String},imageUrl:{type:String},moreUrl:{type:String}}}render(){return this.getHtmlContent()}getHtmlContent(){return M`
                <img src=${this.imageUrl}
                alt="istanbul" class="images">
                <div class="destinations-text-content">
                    <header>
                        <h2 class="article-title">
                            ${this.title}
                        </h2>
                        <h3 class="article-subtitle">
                            ${this.subtitle}
                        </h3>
                    </header>
                    <div>
                        <p>
                            ${this.firstParagraph}
                        </p>
                        <p>
                            ${this.secondParagraph}
                        </p>
                    </div>
                    <div>
                        <a href=${this.moreUrl} target="_blank">Read more about Istanbul here...</a>
                    </div>
                </div>
            `}}),customElements.define("article-destinations",class extends ee{static get styles(){return Q`
                .content-section-heading {
                    text-align: center;
                    font-family: "Playfair Display";
                    padding-bottom: 50px;
                    text-shadow: 1px 1px 2px var(--shadow);
                    font-size: 30px;
                }

                :host {
                    display: flex;
                    flex-direction: column;
                }
            `}static get properties(){return{title:{type:String},destinations:{type:Array}}}constructor(){super(),this.title="Amazing destinations incoming",this.destinations=[]}render(){return M`
                <h2 class="content-section-heading">
                    ${this.title}
                </h2>
                ${this.destinations.map((e=>{let t=e.title.toLowerCase().replaceAll(" ","-");return M`
                            <article-destination id="${t}"
                                .title="${e.title}"
                                .subtitle="${e.subtitle}"
                                .firstParagraph="${e["first-paragraph"]}"
                                .secondParagraph="${e["second-paragraph"]}"
                                .imageUrl="${e["image-url"]}"
                                .moreUrl="${e["more-info-url"]}"
                            ></article-destination>
                        `}))}
            `}connectedCallback(){super.connectedCallback(),this.getPosts()}getPosts(){re().get("https://devschool-2020.firebaseio.com/andrei-zbarcea/destinations.json").then((e=>{this.destinations=e.data["-MOBzr7ft5ztSW-SWQak"].destinations}))}}),customElements.define("main-component",class extends ee{static get styles(){return Q`
            #google_translate_element {
                padding-top: 30px;
                padding-bottom: 15px;
                text-align: center;
                grid-area: my-translator;
                background: var(--background);
            }
            
            .grid-container {
                display: grid;
                grid-template-areas: 'my-header'
                                    'my-main'
                                    'my-translator'
                                    'my-footer';
            }
            
            .my-main {
                grid-area: my-main;
                display: flex;
            }
            
            .my-border {
                width: 300px;
                background-color: var(--background);
            }
            
            .my-border-radius {
                border-radius: 10px;
                box-shadow: 0 0 0 .6em var(--background);
                overflow: hidden;
                margin: 0;
                perspective: 1px;
            }
            
            .sections-div {
                border-image-slice: 1;
                padding-top: 30px;
                padding-bottom: 30px;
                padding-left: 50px;
                padding-right: 50px;
            }
            
            .my-section {
                text-align: center;
                margin-bottom: 50px;
                padding: 1rem;
                color: white;
                background-color: gainsboro;
                border-width: 4px;
                border-style: solid;
                border-image:
                linear-gradient(
                    to top, 
                    rgb(204, 0, 255), 
                    rgb(80, 46, 80)
                ) 1 100%;
                font-size: larger;
            }
            
            .my-section h2 {
                color: black;
                font-family: "Playfair Display";
                font-style: normal;
                font-variant: normal;
                font-size: 60px;
                font-weight: bold;
                line-height: 48px;
                text-align: center;
                text-shadow: 1px 1px 2px var(--shadow);
            }
            
            .destinations-list {
                font-family: sans-serif;
                text-decoration: none;
                font-weight: bold;
            }
            
            .destinations-list li {
                margin-top: 20px;
                margin-left: -55px;
                text-decoration: none;
                list-style: none;
            }
            
            .destinations-list li a, a:visited, a:hover, a:active {
                text-decoration: none;
                color: blue;
                cursor: pointer;
            }
        `}render(){return M`
            <div class="grid-container">
                <app-header class="my-header"></app-header>
                <main class="my-main">
                    <div class="my-border"></div>
                    <div class="my-border-radius">
                        <div class="sections-div">
                            <section class="my-section">
                                <h2>
                                    Available destinations
                                </h2>
                                <p style="color: rgb(48, 30, 30)">
                                    Currently, we reviewed six destinations. Stay tuned, as future destinations are coming soon.
                                </p>
                                <ul class="destinations-list">
                                    <li>
                                        <a target="istanbul" onclick="getTarget(this)">Istanbul, Turkey</a>
                                    </li>
                                    <li>
                                        <a target="paris" onclick="getTarget(this)">Paris, France</a>
                                    </li>
                                    <li>
                                        <a target="madrid" onclick="getTarget(this)">Madrid, Spain</a>
                                    </li>
                                    <li>
                                        <a target="santorini" onclick="getTarget(this)">Santorini, Greece</a>
                                    </li>
                                    <li>
                                        <a target="budapest" onclick="getTarget(this)">Budapest, Hungary</a>
                                    </li>
                                    <li>
                                        <a target="rio-de-janeiro" onclick="getTarget(this)">Rio de Janeiro, Brazil</a>
                                    </li>
                                </ul>
                            </section>
                            <article-destinations id="article-dest"></article-destinations>
                        </div>
                    </div>
                    <div class="my-border"></div>
                </main>
                <div id="google_translate_element">
                    <script type="text/javascript">  
                        function googleTranslateElementInit() {  
                            new google.translate.TranslateElement( 
                                {pageLanguage: 'en'},  
                                'google_translate_element' 
                            );  
                        }
                    </script>
                    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>  
                </div>
                <app-footer class="my-footer"></app-footer>
            </div>
        `}})})()})();