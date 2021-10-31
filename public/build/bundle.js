var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function m(){return f("")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t){c=t}function v(){if(!c)throw new Error("Function called outside component initialization");return c}function E(){const t=v();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,i)}))}}}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],k=[],S=[],A=[],C=Promise.resolve();let x=!1;function _(){x||(x=!0,C.then(O))}function D(t){S.push(t)}let N=!1;const L=new Set;function O(){if(!N){N=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];b(e),P(e.$$)}for(b(null),I.length=0;k.length;)k.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];L.has(e)||(L.add(e),e())}S.length=0}while(I.length);for(;A.length;)A.pop()();x=!1,N=!1,L.clear()}}function P(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const R=new Set;let M;function V(){M={r:0,c:[],p:M}}function F(){M.r||i(M.c),M=M.p}function B(t,e){t&&t.i&&(R.delete(t),t.i(e))}function j(t,e,n,s){if(t&&t.o){if(R.has(t))return;R.add(t),M.c.push((()=>{R.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function U(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const t in o)t in a||(s[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[r]=a}else for(const t in o)i[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function $(t){return"object"==typeof t&&null!==t?t:{}}function q(t){t&&t.c()}function z(t,e,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),o||D((()=>{const e=c.map(n).filter(r);l?l.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(D)}function H(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,n,r,o,a,l,u,d=[-1]){const f=c;b(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(p.root);let m=!1;if(p.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),m&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),_(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),m=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&B(e.$$.fragment),z(e,n.target,n.anchor,n.customElement),O()}b(f)}class G{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function Q(t,e){return{subscribe:Y(t,e).subscribe}}function Y(e,n=t){let s;const i=new Set;function r(t){if(o(e,t)&&(e=t,s)){const t=!W.length;for(const t of i)t[1](),W.push(t,e);if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(s=n(r)||t),o(e),()=>{i.delete(c),0===i.size&&(s(),s=null)}}}}function X(e,n,s){const o=!Array.isArray(e),a=o?[e]:e,c=n.length<2;return Q(s,(e=>{let s=!1;const l=[];let u=0,h=t;const d=()=>{if(u)return;h();const s=n(o?l[0]:l,e);c?e(s):h=r(s)?s:t},f=a.map(((e,n)=>function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(e,(t=>{l[n]=t,u&=~(1<<n),s&&d()}),(()=>{u|=1<<n}))));return s=!0,d(),function(){i(f),h()}}))}function J(t){let n,s,i;const r=[t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[7])),{c(){n&&q(n.$$.fragment),s=m()},m(t,e){n&&z(n,t,e),u(t,s,e),i=!0},p(t,e){const i=4&e?U(r,[$(t[2])]):{};if(o!==(o=t[0])){if(n){V();const t=n;j(t.$$.fragment,1,0,(()=>{H(t,1)})),F()}o?(n=new o(a()),n.$on("routeEvent",t[7]),q(n.$$.fragment),B(n.$$.fragment,1),z(n,s.parentNode,s)):n=null}else o&&n.$set(i)},i(t){i||(n&&B(n.$$.fragment,t),i=!0)},o(t){n&&j(n.$$.fragment,t),i=!1},d(t){t&&h(s),n&&H(n,t)}}}function Z(t){let n,s,i;const r=[{params:t[1]},t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<r.length;t+=1)n=e(n,r[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[6])),{c(){n&&q(n.$$.fragment),s=m()},m(t,e){n&&z(n,t,e),u(t,s,e),i=!0},p(t,e){const i=6&e?U(r,[2&e&&{params:t[1]},4&e&&$(t[2])]):{};if(o!==(o=t[0])){if(n){V();const t=n;j(t.$$.fragment,1,0,(()=>{H(t,1)})),F()}o?(n=new o(a()),n.$on("routeEvent",t[6]),q(n.$$.fragment),B(n.$$.fragment,1),z(n,s.parentNode,s)):n=null}else o&&n.$set(i)},i(t){i||(n&&B(n.$$.fragment,t),i=!0)},o(t){n&&j(n.$$.fragment,t),i=!1},d(t){t&&h(s),n&&H(n,t)}}}function tt(t){let e,n,s,i;const r=[Z,J],o=[];function a(t,e){return t[1]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=m()},m(t,n){o[e].m(t,n),u(t,s,n),i=!0},p(t,[i]){let c=e;e=a(t),e===c?o[e].p(t,i):(V(),j(o[c],1,1,(()=>{o[c]=null})),F(),n=o[e],n?n.p(t,i):(n=o[e]=r[e](t),n.c()),B(n,1),n.m(s.parentNode,s))},i(t){i||(B(n),i=!0)},o(t){j(n),i=!1},d(t){o[e].d(t),t&&h(s)}}}function et(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const nt=Q(null,(function(t){t(et());const e=()=>{t(et())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));X(nt,(t=>t.location)),X(nt,(t=>t.querystring));const st=Y(void 0);function it(t,e){if(e=ot(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return rt(t,e),{update(e){e=ot(e),rt(t,e)}}}function rt(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function ot(t){return t&&"string"==typeof t?{href:t}:t||{}}function at(t,e,n){let{routes:s={}}=e,{prefix:i=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,i,r,o=[],a="",c=t.split("/");for(c[0]||c.shift();i=c.shift();)"*"===(n=i[0])?(o.push("wild"),a+="/(.*)"):":"===n?(s=i.indexOf("?",1),r=i.indexOf(".",1),o.push(i.substring(1,~s?s:~r?r:i.length)),a+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~s?"?":"")+"\\"+i.substring(r))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(i)if("string"==typeof i){if(!t.startsWith(i))return null;t=t.substr(i.length)||"/"}else if(i instanceof RegExp){const e=t.match(i);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];s instanceof Map?s.forEach(((t,e)=>{a.push(new o(e,t))})):Object.keys(s).forEach((t=>{a.push(new o(t,s[t]))}));let c=null,l=null,u={};const h=E();async function d(t,e){await(_(),C),h(t,e)}let f=null,p=null;r&&(p=t=>{f=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",p),function(t){v().$$.after_update.push(t)}((()=>{f?window.scrollTo(f.__svelte_spa_router_scrollX,f.__svelte_spa_router_scrollY):window.scrollTo(0,0)})));let m=null,g=null;const w=nt.subscribe((async t=>{m=t;let e=0;for(;e<a.length;){const s=a[e].match(t.location);if(!s){e++;continue}const i={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await a[e].checkConditions(i))return n(0,c=null),g=null,void d("conditionsFailed",i);d("routeLoading",Object.assign({},i));const r=a[e].component;if(g!=r){r.loading?(n(0,c=r.loading),g=r,n(1,l=r.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},i,{component:c,name:c.name,params:l}))):(n(0,c=null),g=null);const e=await r();if(t!=m)return;n(0,c=e&&e.default||e),g=r}return s&&"object"==typeof s&&Object.keys(s).length?n(1,l=s):n(1,l=null),n(2,u=a[e].props),void d("routeLoaded",Object.assign({},i,{component:c,name:c.name,params:l})).then((()=>{st.set(l)}))}n(0,c=null),g=null,st.set(void 0)}));return function(t){v().$$.on_destroy.push(t)}((()=>{w(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,i=t.prefix),"restoreScrollState"in t&&n(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[c,l,u,s,i,r,function(e){T.call(this,t,e)},function(e){T.call(this,t,e)}]}class ct extends G{constructor(t){super(),K(this,t,at,tt,o,{routes:3,prefix:4,restoreScrollState:5})}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function lt(t,e,n,s){return new(n||(n=Promise))((function(i,r){function o(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((s=s.apply(t,e||[])).next())}))}function ut(t,e){var n,s,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,s&&(i=2&r[0]?s.return:r[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,r[1])).done)return i;switch(s=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,s=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],s=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function ht(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],s=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function dt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var s,i,r=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(s=r.next()).done;)o.push(s.value)}catch(t){i={error:t}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return o}function ft(t,e,n){if(n||2===arguments.length)for(var s,i=0,r=e.length;i<r;i++)!s&&i in e||(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function mt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function gt(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class wt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yt.prototype.create)}}class yt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(bt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new wt(s,o,n)}}const bt=/\{\$([^}]+)}/g;function vt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(Et(n)&&Et(r)){if(!vt(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function Et(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tt(t,e=1e3,n=2){const s=e*Math.pow(n,t),i=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+i)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function It(t){return t&&t._delegate?t._delegate:t}var kt=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),St="[DEFAULT]",At=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new pt;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:St})}catch(t){}try{for(var s=ht(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var r=dt(i.value,2),o=r[0],a=r[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(t){}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=St),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return lt(this,void 0,void 0,(function(){var t;return ut(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(ft(ft([],dt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),dt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=St),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=St),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var s=t.options,i=void 0===s?{}:s,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(this.name+"("+r+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:r,options:i});try{for(var a=ht(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=dt(c.value,2),u=l[0],h=l[1];r===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);var r=this.instances.get(s);return r&&t(r,s),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,s,i=this.onInitCallbacks.get(e);if(i)try{for(var r=ht(i),o=r.next();!o.done;o=r.next()){var a=o.value;try{a(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,s=t.options,i=void 0===s?{}:s,r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===St?void 0:e),options:i}),this.instances.set(n,r),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch(t){}return r||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=St),this.component?this.component.multipleInstances?t:St:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ct,xt=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new At(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ct||(Ct={}));const _t={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},Dt=Ct.INFO,Nt={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},Lt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Nt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class Ot{constructor(t){this.name=t,this._logLevel=Dt,this._logHandler=Lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?_t[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Rt="@firebase/app",Mt="0.7.5",Vt=new Ot("@firebase/app"),Ft="[DEFAULT]",Bt={[Rt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},jt=new Map,Ut=new Map;function $t(t,e){try{t.container.addComponent(e)}catch(n){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(Ut.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Ut.set(e,t);for(const e of jt.values())$t(e,t);return!0}function zt(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ht=new yt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Gt(t="[DEFAULT]"){const e=jt.get(t);if(!e)throw Ht.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=null!==(s=Bt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Vt.warn(t.join(" "))}qt(new kt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Qt;Qt="",qt(new kt("platform-logger",(t=>new Pt(t)),"PRIVATE")),Wt(Rt,Mt,Qt),Wt(Rt,Mt,"esm2017"),Wt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Wt("firebase","9.2.0","app");var Yt,Xt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Jt=Jt||{},Zt=Xt||self;function te(){}function ee(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ne(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var se="closure_uid_"+(1e9*Math.random()>>>0),ie=0;function re(t,e,n){return t.call.apply(t.bind,arguments)}function oe(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ae(t,e,n){return(ae=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?re:oe).apply(null,arguments)}function ce(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function le(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function ue(){this.s=this.s,this.o=this.o}var he={};ue.prototype.s=!1,ue.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,se)&&t[se]||(t[se]=++ie)}(this);delete he[t]}},ue.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const de=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},fe=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function pe(t){return Array.prototype.concat.apply([],arguments)}function me(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ge(t){return/^[\s\xa0]*$/.test(t)}var we,ye=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function be(t,e){return-1!=t.indexOf(e)}function ve(t,e){return t<e?-1:t>e?1:0}t:{var Ee=Zt.navigator;if(Ee){var Te=Ee.userAgent;if(Te){we=Te;break t}}we=""}function Ie(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ke(t){const e={};for(const n in t)e[n]=t[n];return e}var Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Se.length;e++)n=Se[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ce(t){return Ce[" "](t),t}Ce[" "]=te;var xe,_e,De=be(we,"Opera"),Ne=be(we,"Trident")||be(we,"MSIE"),Le=be(we,"Edge"),Oe=Le||Ne,Pe=be(we,"Gecko")&&!(be(we.toLowerCase(),"webkit")&&!be(we,"Edge"))&&!(be(we,"Trident")||be(we,"MSIE"))&&!be(we,"Edge"),Re=be(we.toLowerCase(),"webkit")&&!be(we,"Edge");function Me(){var t=Zt.document;return t?t.documentMode:void 0}t:{var Ve="",Fe=(_e=we,Pe?/rv:([^\);]+)(\)|;)/.exec(_e):Le?/Edge\/([\d\.]+)/.exec(_e):Ne?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_e):Re?/WebKit\/(\S+)/.exec(_e):De?/(?:Version)[ \/]?(\S+)/.exec(_e):void 0);if(Fe&&(Ve=Fe?Fe[1]:""),Ne){var Be=Me();if(null!=Be&&Be>parseFloat(Ve)){xe=String(Be);break t}}xe=Ve}var je,Ue={};function $e(){return function(t){var e=Ue;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ye(String(xe)).split("."),n=ye("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ve(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ve(0==i[2].length,0==r[2].length)||ve(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Zt.document&&Ne){var qe=Me();je=qe||(parseInt(xe,10)||void 0)}else je=void 0;var ze=je,He=function(){if(!Zt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Zt.addEventListener("test",te,e),Zt.removeEventListener("test",te,e)}catch(t){}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ge(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pe){t:{try{Ce(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:We[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ge.Z.h.call(this)}}Ke.prototype.h=function(){this.defaultPrevented=!0},le(Ge,Ke);var We={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Ye=0;function Xe(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ye,this.ca=this.fa=!1}function Je(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ze(t){this.src=t,this.g={},this.h=0}function tn(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=de(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Je(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function en(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Ze.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=en(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Xe(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var nn="closure_lm_"+(1e6*Math.random()|0),sn={};function rn(t,e,n,s,i){if(s&&s.once)return an(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)rn(t,e[r],n,s,i);return null}return n=pn(n),t&&t[Qe]?t.N(e,n,ne(s)?!!s.capture:!!s,i):on(t,e,n,!1,s,i)}function on(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ne(i)?!!i.capture:!!i,a=dn(t);if(a||(t[nn]=a=new Ze(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=hn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)He||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(un(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function an(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)an(t,e[r],n,s,i);return null}return n=pn(n),t&&t[Qe]?t.O(e,n,ne(s)?!!s.capture:!!s,i):on(t,e,n,!0,s,i)}function cn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)cn(t,e[r],n,s,i);else s=ne(s)?!!s.capture:!!s,n=pn(n),t&&t[Qe]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=en(r=t.g[e],n,s,i))&&(Je(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=dn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=en(e,n,s,i)),(n=-1<t?e[t]:null)&&ln(n))}function ln(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Qe])tn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(un(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=dn(e))?(tn(n,t),0==n.h&&(n.src=null,e[nn]=null)):Je(t)}}}function un(t){return t in sn?sn[t]:sn[t]="on"+t}function hn(t,e){if(t.ca)t=!0;else{e=new Ge(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ln(t),t=n.call(s,e)}return t}function dn(t){return(t=t[nn])instanceof Ze?t:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function pn(t){return"function"==typeof t?t:(t[fn]||(t[fn]=function(e){return t.handleEvent(e)}),t[fn])}function mn(){ue.call(this),this.i=new Ze(this),this.P=this,this.I=null}function gn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var i=e;Ae(e=new Ke(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=wn(o,s,!0,e)&&i}if(i=wn(o=e.g=t,s,!0,e)&&i,i=wn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=wn(o=e.g=n[r],s,!1,e)&&i}function wn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&tn(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}le(mn,ue),mn.prototype[Qe]=!0,mn.prototype.removeEventListener=function(t,e,n,s){cn(this,t,e,n,s)},mn.prototype.M=function(){if(mn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Je(n[s]);delete e.g[t],e.h--}}this.I=null},mn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},mn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var yn=Zt.JSON.stringify;function bn(){var t=An;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var vn,En=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Tn),(t=>t.reset()));class Tn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function In(t){Zt.setTimeout((()=>{throw t}),0)}function kn(t,e){vn||function(){var t=Zt.Promise.resolve(void 0);vn=function(){t.then(Cn)}}(),Sn||(vn(),Sn=!0),An.add(t,e)}var Sn=!1,An=new class{constructor(){this.h=this.g=null}add(t,e){const n=En.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Cn(){for(var t;t=bn();){try{t.h.call(t.g)}catch(t){In(t)}var e=En;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sn=!1}function xn(t,e){mn.call(this),this.h=t||1,this.g=e||Zt,this.j=ae(this.kb,this),this.l=Date.now()}function _n(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Dn(t,e,n){if("function"==typeof t)n&&(t=ae(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ae(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zt.setTimeout(t,e||0)}function Nn(t){t.g=Dn((()=>{t.g=null,t.i&&(t.i=!1,Nn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}le(xn,mn),(Yt=xn.prototype).da=!1,Yt.S=null,Yt.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),gn(this,"tick"),this.da&&(_n(this),this.start()))}},Yt.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Yt.M=function(){xn.Z.M.call(this),_n(this),delete this.g};class Ln extends ue{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nn(this)}M(){super.M(),this.g&&(Zt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(t){ue.call(this),this.h=t,this.g={}}le(On,ue);var Pn=[];function Rn(t,e,n,s){Array.isArray(n)||(n&&(Pn[0]=n.toString()),n=Pn);for(var i=0;i<n.length;i++){var r=rn(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Mn(t){Ie(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ln(t)}),t),t.g={}}function Vn(){this.g=!0}function Fn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return yn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}On.prototype.M=function(){On.Z.M.call(this),Mn(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vn.prototype.Aa=function(){this.g=!1},Vn.prototype.info=function(){};var Bn={},jn=null;function Un(){return jn=jn||new mn}function $n(t){Ke.call(this,Bn.Ma,t)}function qn(t){const e=Un();gn(e,new $n(e,t))}function zn(t,e){Ke.call(this,Bn.STAT_EVENT,t),this.stat=e}function Hn(t){const e=Un();gn(e,new zn(e,t))}function Kn(t,e){Ke.call(this,Bn.Na,t),this.size=e}function Gn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Zt.setTimeout((function(){t()}),e)}Bn.Ma="serverreachability",le($n,Ke),Bn.STAT_EVENT="statevent",le(zn,Ke),Bn.Na="timingevent",le(Kn,Ke);var Wn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yn(){}function Xn(t){return t.h||(t.h=t.i())}function Jn(){}Yn.prototype.h=null;var Zn,ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function es(){Ke.call(this,"d")}function ns(){Ke.call(this,"c")}function ss(){}function is(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new On(this),this.P=os,t=Oe?125:void 0,this.W=new xn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rs}function rs(){this.i=null,this.g="",this.h=!1}le(es,Ke),le(ns,Ke),le(ss,Yn),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},Zn=new ss;var os=45e3,as={},cs={};function ls(t,e,n){t.K=1,t.v=Ls(As(e)),t.s=n,t.U=!0,us(t,null)}function us(t,e){t.F=Date.now(),ps(t),t.A=As(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Hs(n.h,"t",s),t.C=0,n=t.l.H,t.h=new rs,t.g=Hi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ln(ae(t.Ia,t,t.g),t.O)),Rn(t.V,t.g,"readystatechange",t.gb),e=t.H?ke(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),qn(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function hs(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ds(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=fs(t,n),s==cs){4==e&&(t.o=4,Hn(14),i=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}if(s==as){t.o=4,Hn(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Fn(t.j,t.m,s,null),bs(t,s)}hs(t)&&s!=cs&&s!=as&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Hn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vi(e),e.L=!0,Hn(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),ws(t))}function fs(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?cs:(n=Number(e.substring(n,s)),isNaN(n)?as:(s+=1)+n>e.length?cs:(e=e.substr(s,n),t.C=s+n,e))}function ps(t){t.Y=Date.now()+t.P,ms(t,t.P)}function ms(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Gn(ae(t.eb,t),e)}function gs(t){t.B&&(Zt.clearTimeout(t.B),t.B=null)}function ws(t){0==t.l.G||t.I||ji(t.l,t)}function ys(t){gs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,_n(t.W),Mn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Xs(n.i,t)))if(n.I=t.N,!t.J&&Xs(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Bi(n),xi(n)}Mi(n),Hn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Gn(ae(n.ab,n),6e3));if(1>=Ys(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else $i(n,11)}else if((t.J||n.g==t)&&Bi(n),!ge(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(be(t,"spdy")||be(t,"quic")||be(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Js(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Ns(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=zi(s,s.H?s.la:null,s.W),o.J){Zs(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(gs(a),ps(a)),s.g=o}else Ri(s);0<n.l.length&&Ni(n)}else"stop"!=l[0]&&"close"!=l[0]||$i(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?$i(n,7):Ci(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}qn(4)}catch(t){}}function vs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ee(t)||"string"==typeof t)fe(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ee(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ee(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Es(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Es)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ts(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Is(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Is(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Is(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Yt=is.prototype).setTimeout=function(t){this.P=t},Yt.gb=function(t){t=t.target;const e=this.L;e&&3==Ti(t)?e.l():this.Ia(t)},Yt.Ia=function(t){try{if(t==this.g)t:{const u=Ti(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Oe||this.g&&(this.h.h||this.g.ga()||Ii(this.g)))){this.I||4!=u||7==e||qn(8==e||0>=h?3:2),gs(this);var n=this.g.ba();this.N=n;e:if(hs(this)){var s=Ii(this.g);t="";var i=s.length,r=4==Ti(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ys(this),ws(this);var o="";break e}this.h.i=new Zt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Hn(12),ys(this),ws(this);break t}Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bs(this,n)}this.U?(ds(this,u,o),Oe&&this.i&&3==u&&(Rn(this.V,this.W,"tick",this.fb),this.W.start())):(Fn(this.j,this.m,o,null),bs(this,o)),4==u&&ys(this),this.i&&!this.I&&(4==u?ji(this.l,this):(this.i=!1,ps(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Hn(12)):(this.o=0,Hn(13)),ys(this),ws(this)}}}catch(t){}},Yt.fb=function(){if(this.g){var t=Ti(this.g),e=this.g.ga();this.C<e.length&&(gs(this),ds(this,t,e),this.i&&4!=t&&ps(this))}},Yt.cancel=function(){this.I=!0,ys(this)},Yt.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(qn(3),Hn(17)),ys(this),this.o=2,ws(this)):ms(this,this.Y-t)},(Yt=Es.prototype).R=function(){Ts(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Yt.T=function(){return Ts(this),this.g.concat()},Yt.get=function(t,e){return Is(this.h,t)?this.h[t]:e},Yt.set=function(t,e){Is(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Yt.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var ks=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ss(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ss){this.g=void 0!==e?e:t.g,Cs(this,t.j),this.s=t.s,xs(this,t.i),_s(this,t.m),this.l=t.l,e=t.h;var n=new Us;n.i=e.i,e.g&&(n.g=new Es(e.g),n.h=e.h),Ds(this,n),this.o=t.o}else t&&(n=String(t).match(ks))?(this.g=!!e,Cs(this,n[1]||"",!0),this.s=Os(n[2]||""),xs(this,n[3]||"",!0),_s(this,n[4]),this.l=Os(n[5]||"",!0),Ds(this,n[6]||"",!0),this.o=Os(n[7]||"")):(this.g=!!e,this.h=new Us(null,this.g))}function As(t){return new Ss(t)}function Cs(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xs(t,e,n){t.i=n?Os(e,!0):e}function _s(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ds(t,e,n){e instanceof Us?(t.h=e,function(t,e){e&&!t.j&&($s(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(qs(this,e),Hs(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Ps(e,Bs)),t.h=new Us(e,t.g))}function Ns(t,e,n){t.h.set(e,n)}function Ls(t){return Ns(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Rs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Rs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,Ms,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ps(e,Ms,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ps(n,"/"==n.charAt(0)?Fs:Vs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,js)),t.join("")};var Ms=/[#\/\?@]/g,Vs=/[#\?:]/g,Fs=/[#\?]/g,Bs=/[#\?@]/g,js=/#/g;function Us(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $s(t){t.g||(t.g=new Es,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function qs(t,e){$s(t),e=Ks(t,e),Is(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Is((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ts(t)))}function zs(t,e){return $s(t),e=Ks(t,e),Is(t.g.h,e)}function Hs(t,e,n){qs(t,e),0<n.length&&(t.i=null,t.g.set(Ks(t,e),me(n)),t.h+=n.length)}function Ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Yt=Us.prototype).add=function(t,e){$s(this),this.i=null,t=Ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Yt.forEach=function(t,e){$s(this),this.g.forEach((function(n,s){fe(n,(function(n){t.call(e,n,s,this)}),this)}),this)},Yt.T=function(){$s(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},Yt.R=function(t){$s(this);var e=[];if("string"==typeof t)zs(this,t)&&(e=pe(e,this.g.get(Ks(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=pe(e,t[n])}return e},Yt.set=function(t,e){return $s(this),this.i=null,zs(this,t=Ks(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Yt.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Yt.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Gs(t){this.l=t||Ws,Zt.PerformanceNavigationTiming?t=0<(t=Zt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Zt.g&&Zt.g.Ea&&Zt.g.Ea()&&Zt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ws=10;function Qs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ys(t){return t.h?1:t.g?t.g.size:0}function Xs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Js(t,e){t.g?t.g.add(e):t.h=e}function Zs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ti(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return me(t.i)}function ei(){}function ni(){this.g=new ei}function si(t,e,n){const s=n||"";try{vs(t,(function(t,n){let i=t;ne(t)&&(i=yn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function ii(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function ri(t){this.l=t.$b||null,this.j=t.ib||!1}function oi(t,e){mn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ai,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gs.prototype.cancel=function(){if(this.i=ti(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ei.prototype.stringify=function(t){return Zt.JSON.stringify(t,void 0)},ei.prototype.parse=function(t){return Zt.JSON.parse(t,void 0)},le(ri,Yn),ri.prototype.g=function(){return new oi(this.l,this.j)},ri.prototype.i=function(t){return function(){return t}}({}),le(oi,mn);var ai=0;function ci(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Yt=oi.prototype).open=function(t,e){if(this.readyState!=ai)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)},Yt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Zt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Yt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,li(this)),this.readyState=ai},Yt.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Zt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ci(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Yt.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?li(this):ui(this),3==this.readyState&&ci(this)}},Yt.Ua=function(t){this.g&&(this.response=this.responseText=t,li(this))},Yt.Ta=function(t){this.g&&(this.response=t,li(this))},Yt.ha=function(){this.g&&li(this)},Yt.setRequestHeader=function(t,e){this.v.append(t,e)},Yt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Yt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var hi=Zt.JSON.parse;function di(t){mn.call(this),this.headers=new Es,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fi,this.K=this.L=!1}le(di,mn);var fi="",pi=/^https?$/i,mi=["POST","PUT"];function gi(t){return"content-type"==t.toLowerCase()}function wi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yi(t),vi(t)}function yi(t){t.D||(t.D=!0,gn(t,"complete"),gn(t,"error"))}function bi(t){if(t.h&&void 0!==Jt&&(!t.C[1]||4!=Ti(t)||2!=t.ba()))if(t.v&&4==Ti(t))Dn(t.Fa,0,t);else if(gn(t,"readystatechange"),4==Ti(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(ks)[1]||null;if(!i&&Zt.self&&Zt.self.location){var r=Zt.self.location.protocol;i=r.substr(0,r.length-1)}s=!pi.test(i?i.toLowerCase():"")}n=s}if(n)gn(t,"complete"),gn(t,"success");else{t.m=6;try{var o=2<Ti(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",yi(t)}}finally{vi(t)}}}function vi(t,e){if(t.g){Ei(t);const n=t.g,s=t.C[0]?te:null;t.g=null,t.C=null,e||gn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Ei(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Zt.clearTimeout(t.A),t.A=null)}function Ti(t){return t.g?t.g.readyState:0}function Ii(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ki(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return Ie(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ns(t,e,n))}function Si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ai(t){this.za=0,this.l=[],this.h=new Vn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Si("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Si("baseRetryDelayMs",5e3,t),this.$a=Si("retryDelaySeedMs",1e4,t),this.Ya=Si("forwardChannelMaxRetries",2,t),this.ra=Si("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Gs(t&&t.concurrentRequestLimit),this.Ca=new ni,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ci(t){if(_i(t),3==t.G){var e=t.V++,n=As(t.F);Ns(n,"SID",t.J),Ns(n,"RID",e),Ns(n,"TYPE","terminate"),Oi(t,n),(e=new is(t,t.h,e,void 0)).K=2,e.v=Ls(As(n)),n=!1,Zt.navigator&&Zt.navigator.sendBeacon&&(n=Zt.navigator.sendBeacon(e.v.toString(),"")),!n&&Zt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ps(e)}qi(t)}function xi(t){t.g&&(Vi(t),t.g.cancel(),t.g=null)}function _i(t){xi(t),t.u&&(Zt.clearTimeout(t.u),t.u=null),Bi(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Zt.clearTimeout(t.m),t.m=null)}function Di(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Ni(t)}function Ni(t){Qs(t.i)||t.m||(t.m=!0,kn(t.Ha,t),t.C=0)}function Li(t,e){var n;n=e?e.m:t.V++;const s=As(t.F);Ns(s,"SID",t.J),Ns(s,"RID",n),Ns(s,"AID",t.U),Oi(t,s),t.o&&t.s&&ki(s,t.o,t.s),n=new is(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Pi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Js(t.i,n),ls(n,s,e)}function Oi(t,e){t.j&&vs({},(function(t,n){Ns(e,n,t)}))}function Pi(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ae(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{si(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Ri(t){t.g||t.u||(t.Y=1,kn(t.Ga,t),t.A=0)}function Mi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Gn(ae(t.Ga,t),Ui(t,t.A)),t.A++,!0)}function Vi(t){null!=t.B&&(Zt.clearTimeout(t.B),t.B=null)}function Fi(t){t.g=new is(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=As(t.oa);Ns(e,"RID","rpc"),Ns(e,"SID",t.J),Ns(e,"CI",t.N?"0":"1"),Ns(e,"AID",t.U),Oi(t,e),Ns(e,"TYPE","xmlhttp"),t.o&&t.s&&ki(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ls(As(e)),n.s=null,n.U=!0,us(n,t)}function Bi(t){null!=t.v&&(Zt.clearTimeout(t.v),t.v=null)}function ji(t,e){var n=null;if(t.g==e){Bi(t),Vi(t),t.g=null;var s=2}else{if(!Xs(t.i,e))return;n=e.D,Zs(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;gn(s=Un(),new Kn(s,n,e,i)),Ni(t)}else Ri(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(Ys(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Gn(ae(t.Ha,t,e),Ui(t,t.C)),t.C++,0)))}(t,e)||2==s&&Mi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:$i(t,5);break;case 4:$i(t,10);break;case 3:$i(t,6);break;default:$i(t,2)}}function Ui(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function $i(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=ae(t.jb,t);n||(n=new Ss("//www.google.com/images/cleardot.gif"),Zt.location&&"http"==Zt.location.protocol||Cs(n,"https"),Ls(n)),function(t,e){const n=new Vn;if(Zt.Image){const s=new Image;s.onload=ce(ii,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ce(ii,n,s,"TestLoadImage: error",!1,e),s.onabort=ce(ii,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ce(ii,n,s,"TestLoadImage: timeout",!1,e),Zt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Hn(2);t.G=0,t.j&&t.j.va(e),qi(t),_i(t)}function qi(t){t.G=0,t.I=-1,t.j&&(0==ti(t.i).length&&0==t.l.length||(t.i.i.length=0,me(t.l),t.l.length=0),t.j.ua())}function zi(t,e,n){let s=function(t){return t instanceof Ss?As(t):new Ss(t,void 0)}(n);if(""!=s.i)e&&xs(s,e+"."+s.i),_s(s,s.m);else{const t=Zt.location;s=function(t,e,n,s){var i=new Ss(null,void 0);return t&&Cs(i,t),e&&xs(i,e),n&&_s(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Ie(t.aa,(function(t,e){Ns(s,e,t)})),e=t.D,n=t.sa,e&&n&&Ns(s,e,n),Ns(s,"VER",t.ma),Oi(t,s),s}function Hi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new di(new ri({ib:!0})):new di(t.qa)).L=t.H,e}function Ki(){}function Gi(){if(Ne&&!(10<=Number(ze)))throw Error("Environmental error: no available transport.")}function Wi(t,e){mn.call(this),this.g=new Ai(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ge(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ge(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Xi(this)}function Qi(t){es.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Yi(){ns.call(this),this.status=1}function Xi(t){this.g=t}(Yt=di.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zn.g(),this.C=this.u?Xn(this.u):Xn(Zn),this.g.onreadystatechange=ae(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void wi(this,t)}t=n||"";const i=new Es(this.headers);s&&vs(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=gi;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Zt.FormData&&t instanceof Zt.FormData,!(0<=de(mi,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ei(this),0<this.B&&((this.K=function(t){return Ne&&$e()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.pa,this)):this.A=Dn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){wi(this,t)}},Yt.pa=function(){void 0!==Jt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gn(this,"timeout"),this.abort(8))},Yt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,gn(this,"complete"),gn(this,"abort"),vi(this))},Yt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vi(this,!0)),di.Z.M.call(this)},Yt.Fa=function(){this.s||(this.F||this.v||this.l?bi(this):this.cb())},Yt.cb=function(){bi(this)},Yt.ba=function(){try{return 2<Ti(this)?this.g.status:-1}catch(t){return-1}},Yt.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Yt.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),hi(e)}},Yt.Da=function(){return this.m},Yt.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Yt=Ai.prototype).ma=8,Yt.G=1,Yt.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Yt.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new is(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ke(r),Ae(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Pi(this,i,e),Ns(n=As(this.F),"RID",t),Ns(n,"CVER",22),this.D&&Ns(n,"X-HTTP-Session-Id",this.D),Oi(this,n),this.o&&r&&ki(n,this.o,r),Js(this.i,i),this.Ra&&Ns(n,"TYPE","init"),this.ja?(Ns(n,"$req",e),Ns(n,"SID","null"),i.$=!0,ls(i,n,null)):ls(i,n,e),this.G=2}}else 3==this.G&&(t?Li(this,t):0==this.l.length||Qs(this.i)||Li(this))},Yt.Ga=function(){if(this.u=null,Fi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Gn(ae(this.bb,this),t)}},Yt.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Hn(10),xi(this),Fi(this))},Yt.ab=function(){null!=this.v&&(this.v=null,xi(this),Mi(this),Hn(19))},Yt.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Hn(2)):(this.h.info("Failed to ping google.com"),Hn(1))},(Yt=Ki.prototype).xa=function(){},Yt.wa=function(){},Yt.va=function(){},Yt.ua=function(){},Yt.Oa=function(){},Gi.prototype.g=function(t,e){return new Wi(t,e)},le(Wi,mn),Wi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),kn(ae(t.hb,t,e))),Hn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=zi(t,null,t.W),Ni(t)},Wi.prototype.close=function(){Ci(this.g)},Wi.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Di(this.g,e)}else this.v?((e={}).__data__=yn(t),Di(this.g,e)):Di(this.g,t)},Wi.prototype.M=function(){this.g.j=null,delete this.j,Ci(this.g),delete this.g,Wi.Z.M.call(this)},le(Qi,es),le(Yi,ns),le(Xi,Ki),Xi.prototype.xa=function(){gn(this.g,"a")},Xi.prototype.wa=function(t){gn(this.g,new Qi(t))},Xi.prototype.va=function(t){gn(this.g,new Yi(t))},Xi.prototype.ua=function(){gn(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,Wi.prototype.send=Wi.prototype.u,Wi.prototype.open=Wi.prototype.m,Wi.prototype.close=Wi.prototype.close,Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,Qn.COMPLETE="complete",Jn.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",mn.prototype.listen=mn.prototype.N,di.prototype.listenOnce=di.prototype.O,di.prototype.getLastError=di.prototype.La,di.prototype.getLastErrorCode=di.prototype.Da,di.prototype.getStatus=di.prototype.ba,di.prototype.getResponseJson=di.prototype.Qa,di.prototype.getResponseText=di.prototype.ga,di.prototype.send=di.prototype.ea;var Ji=Wn,Zi=Qn,tr=Bn,er=10,nr=11,sr=ri,ir=Jn,rr=di;const or="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ar.UNAUTHENTICATED=new ar(null),ar.GOOGLE_CREDENTIALS=new ar("google-credentials-uid"),ar.FIRST_PARTY=new ar("first-party-uid"),ar.MOCK_USER=new ar("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let cr="9.2.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lr=new Ot("@firebase/firestore");function ur(){return lr.logLevel}function hr(t,...e){if(lr.logLevel<=Ct.DEBUG){const n=e.map(pr);lr.debug(`Firestore (${cr}): ${t}`,...n)}}function dr(t,...e){if(lr.logLevel<=Ct.ERROR){const n=e.map(pr);lr.error(`Firestore (${cr}): ${t}`,...n)}}function fr(t,...e){if(lr.logLevel<=Ct.WARN){const n=e.map(pr);lr.warn(`Firestore (${cr}): ${t}`,...n)}}function pr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function mr(t="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function gr(t,e){t||mr()}function wr(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class br extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Er{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Tr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ar.UNAUTHENTICATED)))}shutdown(){}}class Ir{constructor(t){this.t=t,this.currentUser=ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{hr("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(hr("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(hr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(gr("string"==typeof e.accessToken),new Er(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return gr(null===t||"string"==typeof t),new ar(t)}}class kr{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ar.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Sr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new kr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Cr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ar.T=-1;class xr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Cr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function _r(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new br(yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new br(yr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new br(yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new br(yr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nr.fromMillis(Date.now())}static fromDate(t){return Nr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Nr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_r(this.nanoseconds,t.nanoseconds):_r(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Lr(t)}static min(){return new Lr(new Nr(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Or(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mr{constructor(t,e,n){void 0===e?e=0:e>t.length&&mr(),void 0===n?n=t.length-e:n>t.length-e&&mr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Mr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Vr extends Mr{construct(t,e,n){return new Vr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new br(yr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Vr(e)}static emptyPath(){return new Vr([])}}const Fr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Br extends Mr{construct(t,e,n){return new Br(t,e,n)}static isValidIdentifier(t){return Fr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Br.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Br(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new br(yr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new br(yr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new br(yr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new br(yr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Br(e)}static emptyPath(){return new Br([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jr{constructor(t){this.fields=t,t.sort(Br.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Dr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ur{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ur(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ur(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _r(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ur.EMPTY_BYTE_STRING=new Ur("");const $r=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(gr(!!t),"string"==typeof t){let e=0;const n=$r.exec(t);if(gr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:zr(t.seconds),nanos:zr(t.nanos)}}function zr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Hr(t){return"string"==typeof t?Ur.fromBase64String(t):Ur.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Gr(t){const e=t.mapValue.fields.__previous_value__;return Kr(e)?Gr(e):e}function Wr(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new Nr(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qr(t){return null==t}function Yr(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xr{constructor(t){this.path=t}static fromPath(t){return new Xr(Vr.fromString(t))}static fromName(t){return new Xr(Vr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Vr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Vr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xr(new Vr(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kr(t)?4:10:mr()}function Zr(t,e){const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=qr(t.timestampValue),s=qr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Hr(t.bytesValue).isEqual(Hr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return zr(t.geoPointValue.latitude)===zr(e.geoPointValue.latitude)&&zr(t.geoPointValue.longitude)===zr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return zr(t.integerValue)===zr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=zr(t.doubleValue),s=zr(e.doubleValue);return n===s?Yr(n)===Yr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Or(n)!==Or(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Zr(n[t],s[t])))return!1;return!0}(t,e);default:return mr()}}function to(t,e){return void 0!==(t.values||[]).find((t=>Zr(t,e)))}function eo(t,e){const n=Jr(t),s=Jr(e);if(n!==s)return _r(n,s);switch(n){case 0:return 0;case 1:return _r(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=zr(t.integerValue||t.doubleValue),s=zr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return no(t.timestampValue,e.timestampValue);case 4:return no(Wr(t),Wr(e));case 5:return _r(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Hr(t),s=Hr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=_r(n[t],s[t]);if(0!==e)return e}return _r(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_r(zr(t.latitude),zr(e.latitude));return 0!==n?n:_r(zr(t.longitude),zr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=eo(n[t],s[t]);if(e)return e}return _r(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=_r(s[t],r[t]);if(0!==e)return e;const o=eo(n[s[t]],i[r[t]]);if(0!==o)return o}return _r(s.length,r.length)}(t.mapValue,e.mapValue);default:throw mr()}}function no(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _r(t,e);const n=qr(t),s=qr(e),i=_r(n.seconds,s.seconds);return 0!==i?i:_r(n.nanos,s.nanos)}function so(t){return io(t)}function io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=qr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Xr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=io(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${io(t.fields[i])}`;return n+"}"}(t.mapValue):mr();var e,n}function ro(t){return!!t&&"integerValue"in t}function oo(t){return!!t&&"arrayValue"in t}function ao(t){return!!t&&"nullValue"in t}function co(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=uo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ho{constructor(t){this.value=t}static empty(){return new ho({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!lo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=uo(e)}setAll(t){let e=Br.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=uo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());lo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Pr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new ho(uo(this.value))}}function fo(t){const e=[];return Pr(t.fields,((t,n)=>{const s=new Br([t]);if(lo(n)){const t=fo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new jr(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class po{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new po(t,0,Lr.min(),ho.empty(),0)}static newFoundDocument(t,e,n){return new po(t,1,e,n,0)}static newNoDocument(t,e){return new po(t,2,e,ho.empty(),0)}static newUnknownDocument(t,e){return new po(t,3,e,ho.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ho.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ho.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof po&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new po(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mo{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.A=null}}function go(t,e=null,n=[],s=[],i=null,r=null,o=null){return new mo(t,e,n,s,i,r,o)}function wo(t){const e=wr(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+so(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Do(e.startAt)),e.endAt&&(t+="|ub:",t+=Do(e.endAt)),e.A=t}return e.A}function yo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Zr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Po(t.startAt,e.startAt)&&Po(t.endAt,e.endAt)}function bo(t){return Xr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class vo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Eo(t,e,n):"array-contains"===e?new So(t,n):"in"===e?new Ao(t,n):"not-in"===e?new Co(t,n):"array-contains-any"===e?new xo(t,n):new vo(t,e,n)}static R(t,e,n){return"in"===e?new To(t,n):new Io(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(eo(e,this.value)):null!==e&&Jr(this.value)===Jr(e)&&this.P(eo(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return mr()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Eo extends vo{constructor(t,e,n){super(t,e,n),this.key=Xr.fromName(n.referenceValue)}matches(t){const e=Xr.comparator(t.key,this.key);return this.P(e)}}class To extends vo{constructor(t,e){super(t,"in",e),this.keys=ko("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Io extends vo{constructor(t,e){super(t,"not-in",e),this.keys=ko("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ko(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Xr.fromName(t.referenceValue)))}class So extends vo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oo(e)&&to(e.arrayValue,this.value)}}class Ao extends vo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&to(this.value.arrayValue,e)}}class Co extends vo{constructor(t,e){super(t,"not-in",e)}matches(t){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!to(this.value.arrayValue,e)}}class xo extends vo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>to(this.value.arrayValue,t)))}}class _o{constructor(t,e){this.position=t,this.before=e}}function Do(t){return`${t.before?"b":"a"}:${t.position.map((t=>so(t))).join(",")}`}class No{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Oo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Xr.comparator(Xr.fromName(o.referenceValue),n.key):eo(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Po(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zr(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ro{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Mo(t){return new Ro(t)}function Vo(t){return!Qr(t.limit)&&"F"===t.limitType}function Fo(t){return!Qr(t.limit)&&"L"===t.limitType}function Bo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jo(t){for(const e of t.filters)if(e.v())return e.field;return null}function Uo(t){const e=wr(t);if(null===e.V){e.V=[];const t=jo(e),n=Bo(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new No(t)),e.V.push(new No(Br.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new No(Br.keyField(),t))}}}return e.V}function $o(t){const e=wr(t);if(!e.S)if("F"===e.limitType)e.S=go(e.path,e.collectionGroup,Uo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Uo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new No(n.field,e))}const n=e.endAt?new _o(e.endAt.position,!e.endAt.before):null,s=e.startAt?new _o(e.startAt.position,!e.startAt.before):null;e.S=go(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.S}function qo(t,e){return yo($o(t),$o(e))&&t.limitType===e.limitType}function zo(t){return`${wo($o(t))}|lt:${t.limitType}`}function Ho(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${so(e.value)}`;var e})).join(", ")}]`),Qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+Do(t.startAt)),t.endAt&&(e+=", endAt: "+Do(t.endAt)),`Target(${e})`}($o(t))}; limitType=${t.limitType})`}function Ko(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Xr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Oo(t.startAt,Uo(t),e))&&(!t.endAt||!Oo(t.endAt,Uo(t),e))}(t,e)}function Go(t){return(e,n)=>{let s=!1;for(const i of Uo(t)){const t=Wo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Wo(t,e,n){const s=t.field.isKeyField()?Xr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?eo(s,i):mr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return mr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qo(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function Yo(t){return{integerValue:""+t}}function Xo(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Yr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Yo(e):Qo(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jo{constructor(){this._=void 0}}function Zo(t,e,n){return t instanceof na?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof sa?ia(t,e):t instanceof ra?oa(t,e):function(t,e){const n=ea(t,e),s=ca(n)+ca(t.C);return ro(n)&&ro(t.C)?Yo(s):Qo(t.N,s)}(t,e)}function ta(t,e,n){return t instanceof sa?ia(t,e):t instanceof ra?oa(t,e):n}function ea(t,e){return t instanceof aa?ro(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class na extends Jo{}class sa extends Jo{constructor(t){super(),this.elements=t}}function ia(t,e){const n=la(e);for(const e of t.elements)n.some((t=>Zr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ra extends Jo{constructor(t){super(),this.elements=t}}function oa(t,e){let n=la(e);for(const e of t.elements)n=n.filter((t=>!Zr(t,e)));return{arrayValue:{values:n}}}class aa extends Jo{constructor(t,e){super(),this.N=t,this.C=e}}function ca(t){return zr(t.integerValue||t.doubleValue)}function la(t){return oo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class ua{constructor(t,e){this.version=t,this.transformResults=e}}class ha{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ha}static exists(t){return new ha(void 0,t)}static updateTime(t){return new ha(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function da(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fa{}function pa(t,e,n){t instanceof ba?function(t,e,n){const s=t.value.clone(),i=Ta(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof va?function(t,e,n){if(!da(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ta(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ea(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ma(t,e,n){t instanceof ba?function(t,e,n){if(!da(t.precondition,e))return;const s=t.value.clone(),i=Ia(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(ya(e),s).setHasLocalMutations()}(t,e,n):t instanceof va?function(t,e,n){if(!da(t.precondition,e))return;const s=Ia(t.fieldTransforms,n,e),i=e.data;i.setAll(Ea(t)),i.setAll(s),e.convertToFoundDocument(ya(e),i).setHasLocalMutations()}(t,e,n):function(t,e){da(t.precondition,e)&&e.convertToNoDocument(Lr.min())}(t,e)}function ga(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=ea(s.transform,t||null);null!=i&&(null==n&&(n=ho.empty()),n.set(s.field,i))}return n||null}function wa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Dr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof sa&&e instanceof sa||t instanceof ra&&e instanceof ra?Dr(t.elements,e.elements,Zr):t instanceof aa&&e instanceof aa?Zr(t.C,e.C):t instanceof na&&e instanceof na}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ya(t){return t.isFoundDocument()?t.version:Lr.min()}class ba extends fa{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class va extends fa{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ea(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Ta(t,e,n){const s=new Map;gr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ta(o,a,n[i]))}return s}function Ia(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Zo(t,r,e))}return s}class ka extends fa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Sa extends fa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Aa{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ca,xa;function _a(t){if(void 0===t)return dr("GRPC error has no .code"),yr.UNKNOWN;switch(t){case Ca.OK:return yr.OK;case Ca.CANCELLED:return yr.CANCELLED;case Ca.UNKNOWN:return yr.UNKNOWN;case Ca.DEADLINE_EXCEEDED:return yr.DEADLINE_EXCEEDED;case Ca.RESOURCE_EXHAUSTED:return yr.RESOURCE_EXHAUSTED;case Ca.INTERNAL:return yr.INTERNAL;case Ca.UNAVAILABLE:return yr.UNAVAILABLE;case Ca.UNAUTHENTICATED:return yr.UNAUTHENTICATED;case Ca.INVALID_ARGUMENT:return yr.INVALID_ARGUMENT;case Ca.NOT_FOUND:return yr.NOT_FOUND;case Ca.ALREADY_EXISTS:return yr.ALREADY_EXISTS;case Ca.PERMISSION_DENIED:return yr.PERMISSION_DENIED;case Ca.FAILED_PRECONDITION:return yr.FAILED_PRECONDITION;case Ca.ABORTED:return yr.ABORTED;case Ca.OUT_OF_RANGE:return yr.OUT_OF_RANGE;case Ca.UNIMPLEMENTED:return yr.UNIMPLEMENTED;case Ca.DATA_LOSS:return yr.DATA_LOSS;default:return mr()}}(xa=Ca||(Ca={}))[xa.OK=0]="OK",xa[xa.CANCELLED=1]="CANCELLED",xa[xa.UNKNOWN=2]="UNKNOWN",xa[xa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xa[xa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xa[xa.NOT_FOUND=5]="NOT_FOUND",xa[xa.ALREADY_EXISTS=6]="ALREADY_EXISTS",xa[xa.PERMISSION_DENIED=7]="PERMISSION_DENIED",xa[xa.UNAUTHENTICATED=16]="UNAUTHENTICATED",xa[xa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xa[xa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xa[xa.ABORTED=10]="ABORTED",xa[xa.OUT_OF_RANGE=11]="OUT_OF_RANGE",xa[xa.UNIMPLEMENTED=12]="UNIMPLEMENTED",xa[xa.INTERNAL=13]="INTERNAL",xa[xa.UNAVAILABLE=14]="UNAVAILABLE",xa[xa.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Da{constructor(t,e){this.comparator=t,this.root=e||La.EMPTY}insert(t,e){return new Da(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,La.BLACK,null,null))}remove(t){return new Da(this.comparator,this.root.remove(t,this.comparator).copy(null,null,La.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Na(this.root,t,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Na(this.root,t,this.comparator,!0)}}class Na{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class La{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:La.RED,this.left=null!=s?s:La.EMPTY,this.right=null!=i?i:La.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new La(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return La.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return La.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,La.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,La.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mr();if(this.right.isRed())throw mr();const t=this.left.check();if(t!==this.right.check())throw mr();return t+(this.isRed()?0:1)}}La.EMPTY=null,La.RED=!0,La.BLACK=!1,La.EMPTY=new class{constructor(){this.size=0}get key(){throw mr()}get value(){throw mr()}get color(){throw mr()}get left(){throw mr()}get right(){throw mr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new La(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Oa{constructor(t){this.comparator=t,this.data=new Da(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pa(this.data.getIterator())}getIteratorFrom(t){return new Pa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Oa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Oa(this.comparator);return e.data=t,e}}class Pa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ra=new Da(Xr.comparator);function Ma(){return Ra}const Va=new Da(Xr.comparator);function Fa(){return Va}const Ba=new Da(Xr.comparator);const ja=new Oa(Xr.comparator);function Ua(...t){let e=ja;for(const n of t)e=e.add(n);return e}const $a=new Oa(_r);function qa(){return $a}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class za{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ha.createSynthesizedTargetChangeForCurrentChange(t,e)),new za(Lr.min(),n,qa(),Ma(),Ua())}}class Ha{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ha(Ur.EMPTY_BYTE_STRING,e,Ua(),Ua(),Ua())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ka{constructor(t,e,n,s){this.k=t,this.removedTargetIds=e,this.key=n,this.$=s}}class Ga{constructor(t,e){this.targetId=t,this.O=e}}class Wa{constructor(t,e,n=Ur.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Qa{constructor(){this.F=0,this.M=Ja(),this.L=Ur.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ua(),e=Ua(),n=Ua();return this.M.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:mr()}})),new Ha(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Ja()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ya{constructor(t){this.tt=t,this.et=new Map,this.nt=Ma(),this.st=Xa(),this.it=new Oa(_r)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:mr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,s=this.dt(e);if(s){const t=s.target;if(bo(t))if(0===n){const n=new Xr(t.path);this.ct(e,n,po.newNoDocument(n,Lr.min()))}else gr(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,s)=>{const i=this.dt(s);if(i){if(n.current&&bo(i.target)){const e=new Xr(i.target.path);null!==this.nt.get(e)||this.gt(s,e)||this.ct(s,e,po.newNoDocument(e,t))}n.K&&(e.set(s,n.W()),n.G())}}));let n=Ua();this.st.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new za(t,e,this.it,this.nt,n);return this.nt=Ma(),this.st=Xa(),this.it=new Oa(_r),s}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const s=this.ut(t);this.gt(t,e)?s.H(e,1):s.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Qa,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Oa(_r),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||hr("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new Qa),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Xa(){return new Da(Xr.comparator)}function Ja(){return new Da(Xr.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Za={asc:"ASCENDING",desc:"DESCENDING"},tc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ec{constructor(t,e){this.databaseId=t,this.D=e}}function nc(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sc(t,e){return t.D?e.toBase64():e.toUint8Array()}function ic(t,e){return nc(t,e.toTimestamp())}function rc(t){return gr(!!t),Lr.fromTimestamp(function(t){const e=qr(t);return new Nr(e.seconds,e.nanos)}(t))}function oc(t,e){return function(t){return new Vr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ac(t){const e=Vr.fromString(t);return gr(Cc(e)),e}function cc(t,e){return oc(t.databaseId,e.path)}function lc(t,e){const n=ac(e);if(n.get(1)!==t.databaseId.projectId)throw new br(yr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new br(yr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Xr(dc(n))}function uc(t,e){return oc(t.databaseId,e)}function hc(t){return new Vr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dc(t){return gr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function fc(t,e,n){return{name:cc(t,e),fields:n.value.mapValue.fields}}function pc(t,e){return{documents:[uc(t,e.path)]}}function mc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=uc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=uc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(co(t.value))return{unaryFilter:{field:Tc(t.field),op:"IS_NAN"}};if(ao(t.value))return{unaryFilter:{field:Tc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(co(t.value))return{unaryFilter:{field:Tc(t.field),op:"IS_NOT_NAN"}};if(ao(t.value))return{unaryFilter:{field:Tc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tc(t.field),op:Ec(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Tc(t.field),direction:vc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.D||Qr(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=yc(e.startAt)),e.endAt&&(n.structuredQuery.endAt=yc(e.endAt)),n}function gc(t){let e=function(t){const e=ac(t);return 4===e.length?Vr.emptyPath():dc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){gr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=wc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new No(Ic(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Qr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=bc(n.startAt));let l=null;return n.endAt&&(l=bc(n.endAt)),function(t,e,n,s,i,r,o,a){return new Ro(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,l)}function wc(t){return t?void 0!==t.unaryFilter?[Sc(t)]:void 0!==t.fieldFilter?[kc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wc(t))).reduce(((t,e)=>t.concat(e))):mr():[]}function yc(t){return{before:t.before,values:t.position}}function bc(t){const e=!!t.before,n=t.values||[];return new _o(n,e)}function vc(t){return Za[t]}function Ec(t){return tc[t]}function Tc(t){return{fieldPath:t.canonicalString()}}function Ic(t){return Br.fromServerFormat(t.fieldPath)}function kc(t){return vo.create(Ic(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return mr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ic(t.unaryFilter.field);return vo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ic(t.unaryFilter.field);return vo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ic(t.unaryFilter.field);return vo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ic(t.unaryFilter.field);return vo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return mr()}}function Ac(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Cc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new xc(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof xc?e:xc.resolve(e)}catch(t){return xc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):xc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):xc.reject(e)}static resolve(t){return new xc(((e,n)=>{e(t)}))}static reject(t){return new xc(((e,n)=>{n(t)}))}static waitFor(t){return new xc(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=xc.resolve(!1);for(const n of t)e=e.next((t=>t?xc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function _c(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&pa(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ma(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ma(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(Lr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ua())}isEqual(t){return this.batchId===t.batchId&&Dr(this.mutations,t.mutations,((t,e)=>wa(t,e)))&&Dr(this.baseMutations,t.baseMutations,((t,e)=>wa(t,e)))}}class Nc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){gr(t.mutations.length===n.length);let s=Ba;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Nc(t,e,n,s)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lc{constructor(t,e,n,s,i=Lr.min(),r=Lr.min(),o=Ur.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Lc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Lc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Lc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oc{constructor(t){this.Wt=t}}function Pc(t){const e=gc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rc{constructor(){this.Gt=new Mc}addToCollectionParentIndex(t,e){return this.Gt.add(e),xc.resolve()}getCollectionParents(t,e){return xc.resolve(this.Gt.getEntries(e))}}class Mc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Oa(Vr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Oa(Vr.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vc{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Vc(0)}static ie(){return new Vc(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Fc(t){if(t.code!==yr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;hr("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){Pr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Rr(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class jc{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Xr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Xr(e)).next((t=>{let e=Fa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const s=e.collectionGroup;let i=Fa();return this.Ht.getCollectionParents(t,s).next((r=>xc.forEach(r,(r=>{const o=function(t,e){return new Ro(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let s,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=po.newInvalidDocument(n),s=s.insert(n,i)),ma(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{Ko(e,n)||(s=s.remove(t))})),s)))}Cn(t,e,n){let s=Ua();for(const t of e)for(const e of t.mutations)e instanceof va&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.He.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=s}static kn(t,e){let n=Ua(),s=Ua();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Uc(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $c{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Lr.min())?this.Fn(t,e):this.On.Pn(t,s).next((i=>{const r=this.Mn(e,i);return(Vo(e)||Fo(e))&&this.Ln(e.limitType,r,s,n)?this.Fn(t,e):(ur()<=Ct.DEBUG&&hr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ho(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new Oa(Go(t));return e.forEach(((e,s)=>{Ko(t,s)&&(n=n.add(s))})),n}Ln(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(t,e){return ur()<=Ct.DEBUG&&hr("QueryEngine","Using full collection scan to execute query:",Ho(e)),this.On.getDocumentsMatchingQuery(t,e,Lr.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qc{constructor(t,e,n,s){this.persistence=t,this.Bn=e,this.N=s,this.Un=new Da(_r),this.qn=new Bc((t=>wo(t)),yo),this.Kn=Lr.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new jc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function zc(t,e){const n=wr(t);let s=n.In,i=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.In.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new jc(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=Ua();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.In=s,n.Qn=i,n.Bn.$n(n.Qn),r}function Hc(t){const e=wr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function Kc(t,e){const n=wr(t),s=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,r)=>{const a=i.get(r);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,r).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,r))));const c=e.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,s).withSequenceNumber(t.currentSequenceNumber);i=i.insert(r,l),function(t,e,n){return gr(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,e)&&o.push(n.ze.updateTargetData(t,l))}}));let a=Ma();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=Ua();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ma();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(Lr.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(Lr.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return xc.waitFor(o).next((()=>r.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function Gc(t,e){const n=wr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function Wc(t,e,n){const s=wr(t),i=s.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!_c(t))throw t;hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Un=s.Un.remove(e),s.qn.delete(i.target)}function Qc(t,e,n){const s=wr(t);let i=Lr.min(),r=Ua();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=wr(t),i=s.qn.get(n);return void 0!==i?xc.resolve(s.Un.get(i)):s.ze.getTargetData(e,n)}(s,t,$o(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Bn.getDocumentsMatchingQuery(t,e,n?i:Lr.min(),n?r:Ua()))).next((t=>({documents:t,Gn:r})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yc{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return xc.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:rc(n.createTime)}),xc.resolve()}getNamedQuery(t,e){return xc.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Pc(t.bundledQuery),readTime:rc(t.readTime)}}(e)),xc.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xc{constructor(){this.Zn=new Oa(Jc.ts),this.es=new Oa(Jc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Jc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Jc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Xr(new Vr([])),n=new Jc(e,t),s=new Jc(e,t+1),i=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Xr(new Vr([])),n=new Jc(e,t),s=new Jc(e,t+1);let i=Ua();return this.es.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Jc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Jc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Xr.comparator(t.key,e.key)||_r(t.ls,e.ls)}static ns(t,e){return _r(t.ls,e.ls)||Xr.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zc{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Oa(Jc.ts)}checkEmpty(t){return xc.resolve(0===this.In.length)}addMutationBatch(t,e,n,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const r=new Dc(i,e,n,s);this.In.push(r);for(const e of s)this.ds=this.ds.add(new Jc(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return xc.resolve(r)}lookupMutationBatch(t,e){return xc.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this._s(n),i=s<0?0:s;return xc.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return xc.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return xc.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Jc(e,0),s=new Jc(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,s],(t=>{const e=this.ws(t.ls);i.push(e)})),xc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Oa(_r);return e.forEach((t=>{const e=new Jc(t,0),s=new Jc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),xc.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Xr.isDocumentKey(i)||(i=i.child(""));const r=new Jc(new Xr(i),0);let o=new Oa(_r);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),r),xc.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){gr(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return xc.forEach(e.mutations,(s=>{const i=new Jc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new Jc(e,0),s=this.ds.firstAfterOrEqual(n);return xc.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.In.length,xc.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tl{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Da(Xr.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Ht.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return xc.resolve(n?n.document.clone():po.newInvalidDocument(e))}getEntries(t,e){let n=Ma();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():po.newInvalidDocument(t))})),xc.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=Ma();const i=new Xr(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Ko(e,i)&&(s=s.insert(i.key,i.clone()))}return xc.resolve(s)}Ts(t,e){return xc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new el(this)}getSize(t){return xc.resolve(this.size)}}class el extends class{constructor(){this.changes=new Bc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Lr.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:po.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?xc.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.Se.addEntry(t,s.document,this.getReadTime(n))):this.Se.removeEntry(n)})),xc.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nl{constructor(t){this.persistence=t,this.Es=new Bc((t=>wo(t)),yo),this.lastRemoteSnapshotVersion=Lr.min(),this.highestTargetId=0,this.Is=0,this.As=new Xc,this.targetCount=0,this.Rs=Vc.se()}forEachTarget(t,e){return this.Es.forEach(((t,n)=>e(n))),xc.resolve()}getLastRemoteSnapshotVersion(t){return xc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return xc.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),xc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),xc.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Vc(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,xc.resolve()}updateTargetData(t,e){return this.ce(e),xc.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,xc.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Es.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),xc.waitFor(i).next((()=>s))}getTargetCount(t){return xc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return xc.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),xc.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),xc.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),xc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return xc.resolve(n)}containsKey(t,e){return xc.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sl{constructor(t,e){this.bs={},this.Le=new Ar(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new nl(this),this.Ht=new Rc,this.He=function(t,e){return new tl(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new Oc(e),this.Je=new Yc(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Zc(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){hr("MemoryPersistence","Starting transaction:",t);const s=new il(this.Le.next());return this.referenceDelegate.vs(),n(s).next((t=>this.referenceDelegate.Vs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ss(t,e){return xc.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class il extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class rl{constructor(t){this.persistence=t,this.Ds=new Xc,this.Cs=null}static Ns(t){return new rl(t)}get xs(){if(this.Cs)return this.Cs;throw mr()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),xc.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),xc.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),xc.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xc.forEach(this.xs,(n=>{const s=Xr.fromPath(n);return this.ks(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return xc.or([()=>xc.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class ol{constructor(){this.activeTargetIds=qa()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class al{constructor(){this.yi=new ol,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ol,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cl{Ti(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ll{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ul={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hl{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,s){const i=this.Bi(t,e);hr("RestConnection","Sending: ",i,n);const r={};return this.Ui(r,s),this.qi(t,i,r,n).then((t=>(hr("RestConnection","Received: ",t),t)),(e=>{throw fr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,s){return this.Li(t,e,n,s)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+cr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=ul[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,s){return new Promise(((i,r)=>{const o=new rr;o.listenOnce(Zi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ji.NO_ERROR:const e=o.getResponseJson();hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ji.TIMEOUT:hr("Connection",'RPC "'+t+'" timed out'),r(new br(yr.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const n=o.getStatus();if(hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(yr).indexOf(e)>=0?e:yr.UNKNOWN}(t.status);r(new br(e,t.message))}else r(new br(yr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new br(yr.UNAVAILABLE,"Connection failed."));break;default:mr()}}finally{hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Gi,i=Un(),r={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(r.xmlHttpFactory=new sr({})),this.Ui(r.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())||"object"==typeof navigator&&"ReactNative"===navigator.product||mt().indexOf("Electron/")>=0||function(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||mt().indexOf("MSAppHost/")>=0||gt()||(r.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");hr("Connection","Creating WebChannel: "+o,r);const a=s.createWebChannel(o,r);let c=!1,l=!1;const u=new hl({vi:t=>{l?hr("Connection","Not sending because WebChannel is closed:",t):(c||(hr("Connection","Opening WebChannel transport."),a.open(),c=!0),hr("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,ir.EventType.OPEN,(()=>{l||hr("Connection","WebChannel transport opened.")})),h(a,ir.EventType.CLOSE,(()=>{l||(l=!0,hr("Connection","WebChannel transport closed"),u.$i())})),h(a,ir.EventType.ERROR,(t=>{l||(l=!0,fr("Connection","WebChannel transport errored:",t),u.$i(new br(yr.UNAVAILABLE,"The operation could not be completed")))})),h(a,ir.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];gr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ca[t];if(void 0!==e)return _a(e)}(t),n=i.message;void 0===e&&(e=yr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,u.$i(new br(e,n)),a.close()}else hr("Connection","WebChannel received:",n),u.Oi(n)}})),h(i,tr.STAT_EVENT,(t=>{t.stat===er?hr("Connection","Detected buffering proxy"):t.stat===nr&&hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ki()}),0),u}}function fl(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function pl(t){return new ec(t,!0)}class ml{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),s=Math.max(0,e-n);s>0&&hr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(t,e,n,s,i,r,o){this.Oe=t,this.er=n,this.nr=s,this.sr=i,this.credentialsProvider=r,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new ml(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this._r())))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===yr.RESOURCE_EXHAUSTED?(dr(e.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===yr.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then((t=>{this.ir===e&&this.Er(t)}),(e=>{t((()=>{const t=new br(yr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)}))}))}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si((()=>{e((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,(()=>(this.hr()&&(this.state=3),Promise.resolve()))),this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.Ir(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}lr(){this.state=5,this.ar.Xi((async()=>{this.state=0,this.start()}))}Ir(t){return hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget((()=>this.ir===t?e():(hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wl extends gl{constructor(t,e,n,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i),this.N=s}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:mr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.D?(gr(void 0===e||"string"==typeof e),Ur.fromBase64String(e||"")):(gr(void 0===e||e instanceof Uint8Array),Ur.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?yr.UNKNOWN:_a(t.code);return new br(e,t.message||"")}(o);n=new Wa(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=lc(t,s.document.name),r=rc(s.document.updateTime),o=new ho({mapValue:{fields:s.document.fields}}),a=po.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ka(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=lc(t,s.document),r=s.readTime?rc(s.readTime):Lr.min(),o=po.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=lc(t,s.document),r=s.removedTargetIds||[];n=new Ka([],r,i,null)}else{if(!("filter"in e))return mr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Aa(s),r=t.targetId;n=new Ga(r,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return Lr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Lr.min():e.readTime?rc(e.readTime):Lr.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=hc(this.N),e.addTarget=function(t,e){let n;const s=e.target;return n=bo(s)?{documents:pc(t,s)}:{query:mc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=sc(t,e.resumeToken):e.snapshotVersion.compareTo(Lr.min())>0&&(n.readTime=nc(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return mr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=hc(this.N),e.removeTarget=t,this.mr(e)}}class yl extends gl{constructor(t,e,n,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(gr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const e=function(t,e){return t&&t.length>0?(gr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?rc(t.updateTime):rc(e);return n.isEqual(Lr.min())&&(n=rc(e)),new ua(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=rc(t.commitTime);return this.listener.Dr(n,e)}return gr(!t.writeResults||0===t.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=hc(this.N),this.mr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof ba)n={update:fc(t,e.key,e.value)};else if(e instanceof ka)n={delete:cc(t,e.key)};else if(e instanceof va)n={update:fc(t,e.key,e.data),updateMask:Ac(e.fieldMask)};else{if(!(e instanceof Sa))return mr();n={verify:cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof na)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ra)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof aa)return{fieldPath:e.field.canonicalString(),increment:n.C};throw mr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ic(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:mr()}(t,e.precondition)),n}(this.N,t)))};this.mr(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new br(yr.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then((s=>this.sr.Li(t,e,n,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===yr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new br(yr.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.$r(),this.credentials.getToken().then((s=>this.sr.Ki(t,e,n,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===yr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new br(yr.UNKNOWN,t.toString())}))}terminate(){this.kr=!0}}class vl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve()))))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(dr(e),this.Mr=!1):hr("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class El{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti((t=>{n.enqueueAndForget((async()=>{Dl(this)&&(hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=wr(t);e.Wr.add(4),await Il(e),e.Hr.set("Unknown"),e.Wr.delete(4),await Tl(e)}(this))}))})),this.Hr=new vl(n,s)}}async function Tl(t){if(Dl(t))for(const e of t.Gr)await e(!0)}async function Il(t){for(const e of t.Gr)await e(!1)}function kl(t,e){const n=wr(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),_l(n)?xl(n):Kl(n).hr()&&Al(n,e))}function Sl(t,e){const n=wr(t),s=Kl(n);n.Qr.delete(e),s.hr()&&Cl(n,e),0===n.Qr.size&&(s.hr()?s.wr():Dl(n)&&n.Hr.set("Unknown"))}function Al(t,e){t.Jr.Y(e.targetId),Kl(t).br(e)}function Cl(t,e){t.Jr.Y(e),Kl(t).Pr(e)}function xl(t){t.Jr=new Ya({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Kl(t).start(),t.Hr.Lr()}function _l(t){return Dl(t)&&!Kl(t).ur()&&t.Qr.size>0}function Dl(t){return 0===wr(t).Wr.size}function Nl(t){t.Jr=void 0}async function Ll(t){t.Qr.forEach(((e,n)=>{Al(t,e)}))}async function Ol(t,e){Nl(t),_l(t)?(t.Hr.qr(e),xl(t)):t.Hr.set("Unknown")}async function Pl(t,e,n){if(t.Hr.set("Online"),e instanceof Wa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Qr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Qr.delete(s),t.Jr.removeTarget(s))}(t,e)}catch(n){hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rl(t,n)}else if(e instanceof Ka?t.Jr.rt(e):e instanceof Ga?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Lr.min()))try{const e=await Hc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Qr.get(s);i&&t.Qr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(Ur.EMPTY_BYTE_STRING,n.snapshotVersion)),Cl(t,e);const s=new Lc(n.target,e,1,n.sequenceNumber);Al(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){hr("RemoteStore","Failed to raise snapshot:",e),await Rl(t,e)}}async function Rl(t,e,n){if(!_c(e))throw e;t.Wr.add(1),await Il(t),t.Hr.set("Offline"),n||(n=()=>Hc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{hr("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Tl(t)}))}function Ml(t,e){return e().catch((n=>Rl(t,n,e)))}async function Vl(t){const e=wr(t),n=Gl(e);let s=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;Fl(e);)try{const t=await Gc(e.localStore,s);if(null===t){0===e.jr.length&&n.wr();break}s=t.batchId,Bl(e,t)}catch(t){await Rl(e,t)}jl(e)&&Ul(e)}function Fl(t){return Dl(t)&&t.jr.length<10}function Bl(t,e){t.jr.push(e);const n=Gl(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function jl(t){return Dl(t)&&!Gl(t).ur()&&t.jr.length>0}function Ul(t){Gl(t).start()}async function $l(t){Gl(t).Nr()}async function ql(t){const e=Gl(t);for(const n of t.jr)e.Sr(n.mutations)}async function zl(t,e,n){const s=t.jr.shift(),i=Nc.from(s,e,n);await Ml(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Vl(t)}async function Hl(t,e){e&&Gl(t).Vr&&await async function(t,e){if(function(t){switch(t){default:return mr();case yr.CANCELLED:case yr.UNKNOWN:case yr.DEADLINE_EXCEEDED:case yr.RESOURCE_EXHAUSTED:case yr.INTERNAL:case yr.UNAVAILABLE:case yr.UNAUTHENTICATED:return!1;case yr.INVALID_ARGUMENT:case yr.NOT_FOUND:case yr.ALREADY_EXISTS:case yr.PERMISSION_DENIED:case yr.FAILED_PRECONDITION:case yr.ABORTED:case yr.OUT_OF_RANGE:case yr.UNIMPLEMENTED:case yr.DATA_LOSS:return!0}}(n=e.code)&&n!==yr.ABORTED){const n=t.jr.shift();Gl(t).dr(),await Ml(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Vl(t)}var n}(t,e),jl(t)&&Ul(t)}function Kl(t){return t.Yr||(t.Yr=function(t,e,n){const s=wr(t);return s.$r(),new wl(e,s.sr,s.credentials,s.N,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Si:Ll.bind(null,t),Ci:Ol.bind(null,t),Rr:Pl.bind(null,t)}),t.Gr.push((async e=>{e?(t.Yr.dr(),_l(t)?xl(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Nl(t))}))),t.Yr}function Gl(t){return t.Xr||(t.Xr=function(t,e,n){const s=wr(t);return s.$r(),new yl(e,s.sr,s.credentials,s.N,n)}(t.datastore,t.asyncQueue,{Si:$l.bind(null,t),Ci:Hl.bind(null,t),Cr:ql.bind(null,t),Dr:zl.bind(null,t)}),t.Gr.push((async e=>{e?(t.Xr.dr(),await Vl(t)):(await t.Xr.stop(),t.jr.length>0&&(hr("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))}))),t.Xr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Wl{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Wl(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new br(yr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(t,e){if(dr("AsyncQueue",`${e}: ${t}`),_c(t))return new br(yr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Xr.comparator(e.key,n.key):(t,e)=>Xr.comparator(t.key,e.key),this.keyedMap=Fa(),this.sortedSet=new Da(this.comparator)}static emptySet(t){return new Yl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Yl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xl{constructor(){this.Zr=new Da(Xr.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):mr():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Jl{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Jl(t,e,Yl.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zl{constructor(){this.no=void 0,this.listeners=[]}}class tu{constructor(){this.queries=new Bc((t=>zo(t)),qo),this.onlineState="Unknown",this.so=new Set}}function eu(t,e){const n=wr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.ro(t)&&(s=!0);i.no=t}}s&&su(n)}function nu(t,e,n){const s=wr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function su(t){t.so.forEach((t=>{t.next()}))}class iu{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Jl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.fo&&n||t.docs.isEmpty()&&"Offline"!==e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=Jl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ru{constructor(t){this.key=t}}class ou{constructor(t){this.key=t}}class au{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=Ua(),this.mutatedKeys=Ua(),this.Io=Go(t),this.Ao=new Yl(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new Xl,s=e?e.Ao:this.Ao;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Vo(this.query)&&s.size===this.query.limit?s.last():null,c=Fo(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const l=s.get(t),u=Ko(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Io(u,a)>0||c&&this.Io(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Vo(this.query)||Fo(this.query))for(;r.size>this.query.limit;){const t=Vo(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ao:r,Po:n,Ln:o,mutatedKeys:i}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const i=t.Po.eo();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mr()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Io(t.doc,e.doc))),this.Vo(n);const r=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==i.length||a?{snapshot:new Jl(this.query,t.Ao,s,i,t.mutatedKeys,0===o,a,!1),Do:r}:{Do:r}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Xl,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach((t=>this.po=this.po.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.po=this.po.delete(t))),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=Ua(),this.Ao.forEach((t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))}));const e=[];return t.forEach((t=>{this.Eo.has(t)||e.push(new ou(t))})),this.Eo.forEach((n=>{t.has(n)||e.push(new ru(n))})),e}No(t){this.po=t.Gn,this.Eo=Ua();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return Jl.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class cu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class lu{constructor(t){this.key=t,this.ko=!1}}class uu{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.$o={},this.Oo=new Bc((t=>zo(t)),qo),this.Fo=new Map,this.Mo=new Set,this.Lo=new Da(Xr.comparator),this.Bo=new Map,this.Uo=new Xc,this.qo={},this.Ko=new Map,this.jo=Vc.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function hu(t,e){const n=function(t){const e=wr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gu.bind(null,e),e.$o.Rr=eu.bind(null,e.eventManager),e.$o.Go=nu.bind(null,e.eventManager),e}(t);let s,i;const r=n.Oo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=wr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.ze.getTargetData(t,e).next((i=>i?(s=i,xc.resolve(s)):n.ze.allocateTargetId(t).next((i=>(s=new Lc(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Un.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,$o(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Wo=(e,n,s)=>async function(t,e,n,s){let i=e.view.bo(n);i.Ln&&(i=await Qc(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Iu(t,e.targetId,o.Do),o.snapshot}(t,e,n,s);const i=await Qc(t.localStore,e,!0),r=new au(e,i.Gn),o=r.bo(i.documents),a=Ha.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Iu(t,n,c.Do);const l=new cu(e,n,r);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&kl(n.remoteStore,t)}return i}async function du(t,e){const n=wr(t),s=n.Oo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter((t=>!qo(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Wc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Sl(n.remoteStore,s.targetId),Eu(n,s.targetId)})).catch(Fc)):(Eu(n,s.targetId),await Wc(n.localStore,s.targetId,!0))}async function fu(t,e,n){const s=function(t){const e=wr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yu.bind(null,e),e}(t);try{const t=await function(t,e){const n=wr(t),s=Nr.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ua());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.Pn(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=ga(t,r.get(t.key));null!=e&&o.push(new va(t.key,e,fo(e.value.mapValue),ha.exists(!0)))}return n.In.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.qo[t.currentUser.toKey()];s||(s=new Da(_r)),s=s.insert(e,n),t.qo[t.currentUser.toKey()]=s}(s,t.batchId,n),await Au(s,t.changes),await Vl(s.remoteStore)}catch(t){const e=Ql(t,"Failed to persist write");n.reject(e)}}async function pu(t,e){const n=wr(t);try{const t=await Kc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Bo.get(e);s&&(gr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ko=!0:t.modifiedDocuments.size>0?gr(s.ko):t.removedDocuments.size>0&&(gr(s.ko),s.ko=!1))})),await Au(n,t,e)}catch(t){await Fc(t)}}function mu(t,e,n){const s=wr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Oo.forEach(((n,s)=>{const i=s.view.io(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=wr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.io(e)&&(s=!0)})),s&&su(n)}(s.eventManager,e),t.length&&s.$o.Rr(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gu(t,e,n){const s=wr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Bo.get(e),r=i&&i.key;if(r){let t=new Da(Xr.comparator);t=t.insert(r,po.newNoDocument(r,Lr.min()));const n=Ua().add(r),i=new za(Lr.min(),new Map,new Oa(_r),t,n);await pu(s,i),s.Lo=s.Lo.remove(r),s.Bo.delete(e),Su(s)}else await Wc(s.localStore,e,!1).then((()=>Eu(s,e,n))).catch(Fc)}async function wu(t,e){const n=wr(t),s=e.batch.batchId;try{const t=await function(t,e){const n=wr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=xc.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);gr(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&s.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,s)))}))}(n.localStore,e);vu(n,s,null),bu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Au(n,t)}catch(t){await Fc(t)}}async function yu(t,e,n){const s=wr(t);try{const t=await function(t,e){const n=wr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.In.lookupMutationBatch(t,e).next((e=>(gr(null!==e),s=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,s)))}))}(s.localStore,e);vu(s,e,n),bu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Au(s,t)}catch(n){await Fc(n)}}function bu(t,e){(t.Ko.get(e)||[]).forEach((t=>{t.resolve()})),t.Ko.delete(e)}function vu(t,e,n){const s=wr(t);let i=s.qo[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.qo[s.currentUser.toKey()]=i}}function Eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Oo.delete(s),n&&t.$o.Go(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach((e=>{t.Uo.containsKey(e)||Tu(t,e)}))}function Tu(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(Sl(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Su(t))}function Iu(t,e,n){for(const s of n)s instanceof ru?(t.Uo.addReference(s.key,e),ku(t,s)):s instanceof ou?(hr("SyncEngine","Document no longer in limbo: "+s.key),t.Uo.removeReference(s.key,e),t.Uo.containsKey(s.key)||Tu(t,s.key)):mr()}function ku(t,e){const n=e.key,s=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(s)||(hr("SyncEngine","New document in limbo: "+n),t.Mo.add(s),Su(t))}function Su(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new Xr(Vr.fromString(e)),s=t.jo.next();t.Bo.set(s,new lu(n)),t.Lo=t.Lo.insert(n,s),kl(t.remoteStore,new Lc($o(Mo(n.path)),s,2,Ar.T))}}async function Au(t,e,n){const s=wr(t),i=[],r=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach(((t,a)=>{o.push(s.Wo(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Uc.kn(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.$o.Rr(i),await async function(t,e){const n=wr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>xc.forEach(e,(e=>xc.forEach(e.Nn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>xc.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!_c(t))throw t;hr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Un=n.Un.insert(e,i)}}}(s.localStore,r))}async function Cu(t,e){const n=wr(t);if(!n.currentUser.isEqual(e)){hr("SyncEngine","User change. New user:",e.toKey());const t=await zc(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach((t=>{t.forEach((t=>{t.reject(new br(yr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ko.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Au(n,t.Wn)}}function xu(t,e){const n=wr(t),s=n.Bo.get(e);if(s&&s.ko)return Ua().add(s.key);{let t=Ua();const s=n.Fo.get(e);if(!s)return t;for(const e of s){const s=n.Oo.get(e);t=t.unionWith(s.view.Ro)}return t}}class _u{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=pl(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return function(t,e,n,s){return new qc(t,e,n,s)}(this.persistence,new $c,t.initialUser,this.N)}Jo(t){return new sl(rl.Ns,this.N)}Ho(t){return new al}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Du{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>mu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cu.bind(null,this.syncEngine),await async function(t,e){const n=wr(t);e?(n.Wr.delete(2),await Tl(n)):e||(n.Wr.add(2),await Il(n),n.Hr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tu}createDatastore(t){const e=pl(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new dl(s));var s;return function(t,e,n){return new bl(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>mu(this.syncEngine,t,0),r=ll.bt()?new ll:new cl,new El(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new uu(t,e,n,s,i,r);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=wr(t);hr("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await Il(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=ar.UNAUTHENTICATED,this.clientId=xr.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{hr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new br(yr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Ql(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ou(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(hr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await zc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new _u)),t.offlineComponents}(t);hr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>async function(t,e){const n=wr(t);n.asyncQueue.verifyOperationInProgress(),hr("RemoteStore","RemoteStore received new credentials");const s=Dl(n);n.Wr.add(3),await Il(n),s&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await Tl(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Pu(t){return t.onlineComponents||(hr("FirestoreClient","Using default OnlineComponentProvider"),await Ou(t,new Du)),t.onlineComponents}async function Ru(t){const e=await Pu(t),n=e.eventManager;return n.onListen=hu.bind(null,e.syncEngine),n.onUnlisten=du.bind(null,e.syncEngine),n}function Mu(t,e,n={}){const s=new vr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Nu({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=wr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o))),n.fromCache&&"server"===s.source?i.reject(new br(yr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new iu(n,r,{includeMetadataChanges:!0,fo:!0});return async function(t,e){const n=wr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Zl),i)try{r.no=await n.onListen(s)}catch(t){const n=Ql(t,`Initialization of query '${Ho(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.io(n.onlineState),r.no&&e.ro(r.no)&&su(n)}(t,o)}(await Ru(t),t.asyncQueue,e,n,s))),s.promise}class Vu{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fu{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fu&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bu=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ju(t,e,n){if(!n)throw new br(yr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uu(t){if(!Xr.isDocumentKey(t))throw new br(yr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $u(t){if(Xr.isDocumentKey(t))throw new br(yr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":mr()}function zu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new br(yr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new br(yr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new br(yr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new br(yr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new br(yr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ku{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hu({}),this._settingsFrozen=!1,t instanceof Fu?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new br(yr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fu(t.options.projectId)}(t))}get app(){if(!this._app)throw new br(yr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new br(yr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hu(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Tr;switch(t.type){case"gapi":const e=t.client;return gr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Sr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new br(yr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Bu.get(t);e&&(hr("ComponentProvider","Removing Datastore"),Bu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gu(this.firestore,t,this._key)}}class Wu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Wu(this.firestore,t,this._query)}}class Qu extends Wu{constructor(t,e,n){super(t,e,Mo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gu(this.firestore,null,new Xr(t))}withConverter(t){return new Qu(this.firestore,t,this._path)}}function Yu(t,e,...n){if(t=It(t),ju("collection","path",e),t instanceof Ku){const s=Vr.fromString(e,...n);return $u(s),new Qu(t,null,s)}{if(!(t instanceof Gu||t instanceof Qu))throw new br(yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Vr.fromString(e,...n));return $u(s),new Qu(t.firestore,null,s)}}function Xu(t,e,...n){if(t=It(t),1===arguments.length&&(e=xr.I()),ju("doc","path",e),t instanceof Ku){const s=Vr.fromString(e,...n);return Uu(s),new Gu(t,null,new Xr(s))}{if(!(t instanceof Gu||t instanceof Qu))throw new br(yr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Vr.fromString(e,...n));return Uu(s),new Gu(t.firestore,t instanceof Qu?t.converter:null,new Xr(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ju{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new ml(this,"async_queue_retry"),this.Rc=()=>{const t=fl();t&&hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=fl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=fl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise((()=>{}));const e=new vr;return this.Pc((()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.mc.push(t),this.vc())))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!_c(t))throw t;hr("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi((()=>this.vc()))}}Pc(t){const e=this._c.then((()=>(this.Ec=!0,t().catch((t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw dr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ec=!1,t))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const s=Wl.createAndSchedule(this,t,e,n,(t=>this.Vc(t)));return this.yc.push(s),s}bc(){this.Tc&&mr()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then((()=>{this.yc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()}))}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}class Zu extends Ku{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Ju,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||eh(this),this._firestoreClient.terminate()}}function th(t){return t._firestoreClient||eh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eh(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Vu(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Lu(t._credentials,t._queue,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new br(yr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Br(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sh(Ur.fromBase64String(t))}catch(t){throw new br(yr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new sh(Ur.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ih{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new br(yr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new br(yr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _r(this._lat,t._lat)||_r(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oh=/^__.*__$/;class ah{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new va(t,this.data,this.fieldMask,e,this.fieldTransforms):new ba(t,this.data,e,this.fieldTransforms)}}class ch{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new va(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mr()}}class uh{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=s,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new uh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$c({path:n,Fc:!1});return s.Mc(t),s}Lc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$c({path:n,Fc:!1});return s.xc(),s}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return Th(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Uc("Document fields must not be empty");if(lh(this.kc)&&oh.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class hh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||pl(t)}jc(t,e,n,s=!1){return new uh({kc:t,methodName:e,Kc:n,path:Br.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function dh(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new hh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fh(t,e,n,s,i,r={}){const o=t.jc(r.merge||r.mergeFields?2:0,e,n,i);yh("Data must be an object, but it was:",o,s);const a=gh(s,o);let c,l;if(r.merge)c=new jr(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=bh(e,s,n);if(!o.contains(i))throw new br(yr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ih(t,i)||t.push(i)}c=new jr(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ah(new ho(a),c,l)}class ph extends ih{_toFieldTransform(t){if(2!==t.kc)throw 1===t.kc?t.Uc(`${this._methodName}() can only appear at the top level of your update data`):t.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ph}}function mh(t,e){if(wh(t=It(t)))return yh("Unsupported field value:",e,t),gh(t,e);if(t instanceof ih)return function(t,e){if(!lh(e.kc))throw e.Uc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Uc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.kc)throw e.Uc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=mh(i,e.Bc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=It(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Xo(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Nr.fromDate(t);return{timestampValue:nc(e.N,n)}}if(t instanceof Nr){const n=new Nr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:nc(e.N,n)}}if(t instanceof rh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof sh)return{bytesValue:sc(e.N,t._byteString)};if(t instanceof Gu){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Uc(`Unsupported field value: ${qu(t)}`)}(t,e)}function gh(t,e){const n={};return Rr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,((t,s)=>{const i=mh(s,e.Oc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function wh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Nr||t instanceof rh||t instanceof sh||t instanceof Gu||t instanceof ih)}function yh(t,e,n){if(!wh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=qu(n);throw"an object"===s?e.Uc(t+" a custom object"):e.Uc(t+" "+s)}}function bh(t,e,n){if((e=It(e))instanceof nh)return e._internalPath;if("string"==typeof e)return Eh(t,e);throw Th("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const vh=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(vh)>=0)throw Th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nh(...e.split("."))._internalPath}catch(s){throw Th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Th(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new br(yr.INVALID_ARGUMENT,a+t+c)}function Ih(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Sh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ah("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Sh extends kh{data(){return super.data()}}function Ah(t,e){return"string"==typeof e?Eh(t,e):e instanceof nh?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xh extends kh{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ah("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class _h extends xh{data(t={}){return super.data(t)}}class Dh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ch(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new _h(this._firestore,this._userDataWriter,n.key,n,new Ch(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new br(yr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new _h(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ch(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new _h(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ch(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Nh(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Nh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh extends class{}{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new br(yr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new br(yr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new No(e,n);return function(t,e){if(null===Bo(t)){const n=jo(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new br(yr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,n,e.field)}}(t,s),s}(t._query,this.Gc,this.Jc);return new Wu(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ro(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class Oh extends class{convertValue(t,e="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Hr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw mr()}}convertObject(t,e){const n={};return Pr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new rh(zr(t.latitude),zr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Gr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wr(t));default:return null}}convertTimestamp(t){const e=qr(t);return new Nr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Vr.fromString(t);gr(Cc(n));const s=new Fu(n.get(1),n.get(3)),i=new Xr(n.popFirst(5));return s.isEqual(e)||dr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new sh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Gu(this.firestore,null,e)}}function Ph(t){t=zu(t,Wu);const e=zu(t.firestore,Zu),n=th(e),s=new Oh(e);return function(t){if(Fo(t)&&0===t.explicitOrderBy.length)throw new br(yr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Mu(n,t._query).then((n=>new Dh(e,s,t,n)))}function Rh(t,e,n,...s){t=zu(t,Gu);const i=zu(t.firestore,Zu),r=dh(i);let o;return o="string"==typeof(e=It(e))||e instanceof nh?function(t,e,n,s,i,r){const o=t.jc(1,e,n),a=[bh(e,s,n)],c=[i];if(r.length%2!=0)throw new br(yr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(bh(e,r[t])),c.push(r[t+1]);const l=[],u=ho.empty();for(let t=a.length-1;t>=0;--t)if(!Ih(l,a[t])){const e=a[t];let n=c[t];n=It(n);const s=o.Lc(e);if(n instanceof ph)l.push(e);else{const t=mh(n,s);null!=t&&(l.push(e),u.set(e,t))}}const h=new jr(l);return new ch(u,h,o.fieldTransforms)}(r,"updateDoc",t._key,e,n,s):function(t,e,n,s){const i=t.jc(1,e,n);yh("Data must be an object, but it was:",i,s);const r=[],o=ho.empty();Pr(s,((t,s)=>{const a=Eh(e,t,n);s=It(s);const c=i.Lc(a);if(s instanceof ph)r.push(a);else{const t=mh(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new jr(r);return new ch(o,a,i.fieldTransforms)}(r,"updateDoc",t._key,e),Mh(i,[o.toMutation(t._key,ha.exists(!0))])}function Mh(t,e){return function(t,e){const n=new vr;return t.asyncQueue.enqueueAndForget((async()=>fu(await function(t){return Pu(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(th(t),e)}!function(t,e=!0){cr="9.2.0",qt(new kt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Zu(s,new Ir(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),Wt(or,"3.2.0",t),Wt(or,"3.2.0","esm2017")}();const Vh=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Ft,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Ht.create("bad-app-name",{appName:String(s)});const i=jt.get(s);if(i){if(vt(t,i.options)&&vt(n,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const r=new xt(s);for(const t of Ut.values())r.addComponent(t);const o=new Kt(t,n,r);return jt.set(s,o),o}({apiKey:"AIzaSyB5GO4tp2lWgIpmm3R9ERWLILbICTmAdUI",authDomain:"kbcdemo-d9954.firebaseapp.com",projectId:"kbcdemo-d9954",storageBucket:"kbcdemo-d9954.appspot.com",messagingSenderId:"43631783339",appId:"1:43631783339:web:b0807381eec5ec4f1eb6ee"}),Fh=function(t=Gt()){return zt(t,"firestore").getImmediate()}(),Bh=Vh;var jh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Uh(t){var e={exports:{}};return t(e,e.exports),e.exports}var $h=Uh((function(t,e){!function(t){function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function s(t,e,s){var i,r=new Promise((function(r,o){n(i=t[e].apply(t,s)).then(r,o)}));return r.request=i,r}function i(t,e,n){var i=s(t,e,n);return i.then((function(t){if(t)return new u(t,i.request)}))}function r(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function o(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return s(this[e],i,arguments)})}))}function a(t,e,n,s){s.forEach((function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})}))}function c(t,e,n,s){s.forEach((function(s){s in n.prototype&&(t.prototype[s]=function(){return i(this[e],s,arguments)})}))}function l(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function f(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function p(t){this._db=t}function m(t,e,n){var i=s(indexedDB,"open",[t,e]),r=i.request;return r&&(r.onupgradeneeded=function(t){n&&n(new f(r.result,t.oldVersion,r.transaction))}),i.then((function(t){return new p(t)}))}function g(t){return s(indexedDB,"deleteDatabase",[t])}r(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,s=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,s),n(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},r(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[h,l].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),s=n[n.length-1],i=this._store||this._index,r=i[t].apply(i,n.slice(0,-1));r.onsuccess=function(){s(r.result)}})}))})),[l,h].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,s=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(s.push(t.value),void 0===e||s.length!=e?t.continue():i(s)):i(s)}))}))})})),t.openDb=m,t.deleteDb=g,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));const qh="@firebase/installations",zh="0.5.2",Hh=1e4,Kh="w:0.5.2",Gh="FIS_v2",Wh=36e5,Qh=new yt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Yh(t){return t instanceof wt&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xh({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Jh(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Zh(t,e){const n=(await e.json()).error;return Qh.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function td({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ed(t,{refreshToken:e}){const n=td(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),n}async function nd(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function sd(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const id=/^[cdef][\w-]{21}$/;function rd(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);return id.test(e)?e:""}catch(t){return""}}function od(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ad=new Map;function cd(t,e){const n=od(t);ld(n,e),function(t,e){const n=function(){!ud&&"BroadcastChannel"in self&&(ud=new BroadcastChannel("[Firebase] FID Change"),ud.onmessage=t=>{ld(t.data.key,t.data.fid)});return ud}();n&&n.postMessage({key:t,fid:e});0===ad.size&&ud&&(ud.close(),ud=null)}(n,e)}function ld(t,e){const n=ad.get(t);if(n)for(const t of n)t(e)}let ud=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const hd="firebase-installations-store";let dd=null;function fd(){return dd||(dd=$h.openDb("firebase-installations-database",1,(t=>{if(0===t.oldVersion)t.createObjectStore(hd)}))),dd}async function pd(t,e){const n=od(t),s=(await fd()).transaction(hd,"readwrite"),i=s.objectStore(hd),r=await i.get(n);return await i.put(e,n),await s.complete,r&&r.fid===e.fid||cd(t,e.fid),e}async function md(t){const e=od(t),n=(await fd()).transaction(hd,"readwrite");await n.objectStore(hd).delete(e),await n.complete}async function gd(t,e){const n=od(t),s=(await fd()).transaction(hd,"readwrite"),i=s.objectStore(hd),r=await i.get(n),o=e(r);return void 0===o?await i.delete(n):await i.put(o,n),await s.complete,!o||r&&r.fid===o.fid||cd(t,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function wd(t){let e;const n=await gd(t,(n=>{const s=function(t){return vd(t||{fid:rd(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Qh.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=async function(t,e){try{const n=await async function(t,{fid:e}){const n=Xh(t),s=td(t),i={fid:e,authVersion:Gh,appId:t.appId,sdkVersion:Kh},r={method:"POST",headers:s,body:JSON.stringify(i)},o=await nd((()=>fetch(n,r)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:Jh(t.authToken)}}throw await Zh("Create Installation",o)}(t,e);return pd(t,n)}catch(n){throw Yh(n)&&409===n.customData.serverCode?await md(t):await pd(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:s}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:yd(t)}:{installationEntry:e}}(t,s);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function yd(t){let e=await bd(t);for(;1===e.registrationStatus;)await sd(100),e=await bd(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await wd(t);return n||e}return e}function bd(t){return gd(t,(t=>{if(!t)throw Qh.create("installation-not-found");return vd(t)}))}function vd(t){return 1===(e=t).registrationStatus&&e.registrationTime+Hh<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Ed({appConfig:t,platformLoggerProvider:e},n){const s=function(t,{fid:e}){return`${Xh(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,n),i=ed(t,n),r=e.getImmediate({optional:!0});r&&i.append("x-firebase-client",r.getPlatformInfoString());const o={installation:{sdkVersion:Kh}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await nd((()=>fetch(s,a)));if(c.ok){return Jh(await c.json())}throw await Zh("Generate Auth Token",c)}async function Td(t,e=!1){let n;const s=await gd(t.appConfig,(s=>{if(!kd(s))throw Qh.create("not-registered");const i=s.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wh}(t)}(i))return s;if(1===i.requestStatus)return n=async function(t,e){let n=await Id(t.appConfig);for(;1===n.authToken.requestStatus;)await sd(100),n=await Id(t.appConfig);const s=n.authToken;return 0===s.requestStatus?Td(t,e):s}(t,e),s;{if(!navigator.onLine)throw Qh.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(s);return n=async function(t,e){try{const n=await Ed(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await pd(t.appConfig,s),n}catch(n){if(!Yh(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pd(t.appConfig,n)}else await md(t.appConfig);throw n}}(t,e),e}}));return n?await n:s.authToken}function Id(t){return gd(t,(t=>{if(!kd(t))throw Qh.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Hh<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function kd(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Sd(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await wd(t);e&&await e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Td(n,e)).token}function Ad(t){return Qh.create("missing-app-config-values",{valueName:t})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Cd="installations",xd=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Ad("App Configuration");if(!t.name)throw Ad("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ad(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,platformLoggerProvider:zt(e,"platform-logger"),_delete:()=>Promise.resolve()}},_d=t=>{const e=zt(t.getProvider("app").getImmediate(),Cd).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:s}=await wd(e.appConfig);return s?s.catch(console.error):Td(e).catch(console.error),n.fid}(e),getToken:t=>Sd(e,t)}};qt(new kt(Cd,xd,"PUBLIC")),qt(new kt("installations-internal",_d,"PRIVATE")),Wt(qh,zh),Wt(qh,zh,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Dd="analytics",Nd="https://www.googletagmanager.com/gtag/js",Ld=new Ot("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Od(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Pd(t,e,n,s){return async function(i,r,o){try{"event"===i?await async function(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const s=await Od(n);for(const n of t){const t=s.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(t){Ld.error(t)}}(t,e,n,r,o):"config"===i?await async function(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const t=(await Od(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){Ld.error(t)}t("config",i,r)}(t,e,n,s,r,o):t("set",r)}catch(t){Ld.error(t)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Rd=new yt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Md=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Vd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Fd(t,e=Md,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Rd.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Rd.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jd;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Bd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Bd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Md){const{appId:r,measurementId:o}=t;try{await function(t,e){return new Promise(((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(r),s(Rd.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(s,e)}catch(t){if(o)return Ld.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:o};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Vd(s)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Rd.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(r),e}catch(e){if(!function(t){if(!(t instanceof wt&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(i.deleteThrottleMetadata(r),o)return Ld.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:o};throw e}const a=503===Number(e.customData.httpStatus)?Tt(n,i.intervalMillis,30):Tt(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(r,c),Ld.debug(`Calling attemptFetch again in ${a} millis`),Bd(t,c,s,i)}}class jd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ud(){if("object"!=typeof indexedDB)return Ld.warn(Rd.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return Ld.warn(Rd.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function $d(t,e,n,s,i,r,o){var a;const c=Fd(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Ld.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Ld.error(t))),e.push(c);const l=Ud().then((t=>t?s.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Nd))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${Nd}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qd{constructor(t){this.app=t}_delete(){return delete zd[this.app.options.appId],Promise.resolve()}}let zd={},Hd=[];const Kd={};let Gd,Wd,Qd="dataLayer",Yd=!1;function Xd(){const t=[];if(gt()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Rd.create("invalid-analytics-context",{errorInfo:e});Ld.warn(n.message)}}function Jd(t,e,n){Xd();const s=t.options.appId;if(!s)throw Rd.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Rd.create("no-api-key");Ld.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=zd[s])throw Rd.create("already-exists",{id:s});if(!Yd){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Qd);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,s,i){let r=function(...t){window[s].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=Pd(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}(zd,Hd,Kd,Qd,"gtag");Wd=t,Gd=e,Yd=!0}zd[s]=$d(t,Hd,Kd,e,Gd,Qd,n);return new qd(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zd(t=Gt()){const e=zt(t=It(t),Dd);return e.isInitialized()?e.getImmediate():function(t,e={}){const n=zt(t,Dd);if(n.isInitialized()){const t=n.getImmediate();if(vt(e,n.getOptions()))return t;throw Rd.create("already-initialized")}return n.initialize({options:e})}(t)}function tf(t,e,n,s){t=It(t),async function(t,e,n,s,i){if(i&&i.global)t("event",n,s);else{const i=await e;t("event",n,Object.assign(Object.assign({},s),{send_to:i}))}}(Wd,zd[t.app.options.appId],e,n,s).catch((t=>Ld.error(t)))}const ef="@firebase/analytics",nf="0.7.2";qt(new kt(Dd,((t,{options:e})=>Jd(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),qt(new kt("analytics-internal",(function(t){try{const e=t.getProvider(Dd).getImmediate();return{logEvent:(t,n,s)=>tf(e,t,n,s)}}catch(t){throw Rd.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Wt(ef,nf),Wt(ef,nf,"esm2017");let sf=[{question:"Which among the following teams has played World Cup (Cricket) final match maximum number of times, but could not win a single trophy?",options:["South Africa","West Indies","Sri Lanka"],answer:["England"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"Which among the following teams has played World Cup (Cricket) final match maximum number of times, but could not win a single trophy?",options:["South Africa","West Indies","Sri Lanka"],answer:["England"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]},{question:"The trophy Aga Khan Cup is related to …",options:["Badminton","Football","Basketball"],answer:["Hockey"]}];const rf=Y(0),of=Y(0);
/*!
    * sweetalert2 v11.1.9
    * Released under the MIT License.
    */
var af=Uh((function(t,e){t.exports=function(){const t=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),e="SweetAlert2:",n=t=>{const e=[];for(let n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e},s=t=>t.charAt(0).toUpperCase()+t.slice(1),i=t=>Array.prototype.slice.call(t),r=t=>{console.warn("".concat(e," ").concat("object"==typeof t?t.join(" "):t))},o=t=>{console.error("".concat(e," ").concat(t))},a=[],c=t=>{a.includes(t)||(a.push(t),r(t))},l=(t,e)=>{c('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))},u=t=>"function"==typeof t?t():t,h=t=>t&&"function"==typeof t.toPromise,d=t=>h(t)?t.toPromise():Promise.resolve(t),f=t=>t&&Promise.resolve(t)===t,p=t=>"object"==typeof t&&t.jquery,m=t=>t instanceof Element||p(t),g=t=>{const e={};return"object"!=typeof t[0]||m(t[0])?["title","html","icon"].forEach(((n,s)=>{const i=t[s];"string"==typeof i||m(i)?e[n]=i:void 0!==i&&o("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(typeof i))})):Object.assign(e,t[0]),e},w="swal2-",y=t=>{const e={};for(const n in t)e[t[n]]=w+t[n];return e},b=y(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),v=y(["success","warning","info","question","error"]),E=()=>document.body.querySelector(".".concat(b.container)),T=t=>{const e=E();return e?e.querySelector(t):null},I=t=>T(".".concat(t)),k=()=>I(b.popup),S=()=>I(b.icon),A=()=>I(b.title),C=()=>I(b["html-container"]),x=()=>I(b.image),_=()=>I(b["progress-steps"]),D=()=>I(b["validation-message"]),N=()=>T(".".concat(b.actions," .").concat(b.confirm)),L=()=>T(".".concat(b.actions," .").concat(b.deny)),O=()=>I(b["input-label"]),P=()=>T(".".concat(b.loader)),R=()=>T(".".concat(b.actions," .").concat(b.cancel)),M=()=>I(b.actions),V=()=>I(b.footer),F=()=>I(b["timer-progress-bar"]),B=()=>I(b.close),j='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',U=()=>{const t=i(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((t,e)=>(t=parseInt(t.getAttribute("tabindex")))>(e=parseInt(e.getAttribute("tabindex")))?1:t<e?-1:0)),e=i(k().querySelectorAll(j)).filter((t=>"-1"!==t.getAttribute("tabindex")));return n(t.concat(e)).filter((t=>at(t)))},$=()=>!q()&&!document.body.classList.contains(b["no-backdrop"]),q=()=>document.body.classList.contains(b["toast-shown"]),z=()=>k().hasAttribute("data-loading"),H={previousBodyPadding:null},K=(t,e)=>{if(t.textContent="",e){const n=(new DOMParser).parseFromString(e,"text/html");i(n.querySelector("head").childNodes).forEach((e=>{t.appendChild(e)})),i(n.querySelector("body").childNodes).forEach((e=>{t.appendChild(e)}))}},G=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},W=(t,e)=>{i(t.classList).forEach((n=>{Object.values(b).includes(n)||Object.values(v).includes(n)||Object.values(e.showClass).includes(n)||t.classList.remove(n)}))},Q=(t,e,n)=>{if(W(t,e),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return r("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof e.customClass[n],'"'));Z(t,e.customClass[n])}},Y=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return et(t,b[e]);case"checkbox":return t.querySelector(".".concat(b.checkbox," input"));case"radio":return t.querySelector(".".concat(b.radio," input:checked"))||t.querySelector(".".concat(b.radio," input:first-child"));case"range":return t.querySelector(".".concat(b.range," input"));default:return et(t,b.input)}},X=t=>{if(t.focus(),"file"!==t.type){const e=t.value;t.value="",t.value=e}},J=(t,e,n)=>{t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach((e=>{t.forEach?t.forEach((t=>{n?t.classList.add(e):t.classList.remove(e)})):n?t.classList.add(e):t.classList.remove(e)})))},Z=(t,e)=>{J(t,e,!0)},tt=(t,e)=>{J(t,e,!1)},et=(t,e)=>{for(let n=0;n<t.childNodes.length;n++)if(G(t.childNodes[n],e))return t.childNodes[n]},nt=(t,e,n)=>{n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)},st=(t,e="flex")=>{t.style.display=e},it=t=>{t.style.display="none"},rt=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},ot=(t,e,n)=>{e?st(t,n):it(t)},at=t=>!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),ct=()=>!at(N())&&!at(L())&&!at(R()),lt=t=>!!(t.scrollHeight>t.clientHeight),ut=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},ht=(t,e=!1)=>{const n=F();at(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"}),10))},dt=()=>{const t=F(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(s,"%")},ft=()=>"undefined"==typeof window||"undefined"==typeof document,pt='\n <div aria-labelledby="'.concat(b.title,'" aria-describedby="').concat(b["html-container"],'" class="').concat(b.popup,'" tabindex="-1">\n   <button type="button" class="').concat(b.close,'"></button>\n   <ul class="').concat(b["progress-steps"],'"></ul>\n   <div class="').concat(b.icon,'"></div>\n   <img class="').concat(b.image,'" />\n   <h2 class="').concat(b.title,'" id="').concat(b.title,'"></h2>\n   <div class="').concat(b["html-container"],'" id="').concat(b["html-container"],'"></div>\n   <input class="').concat(b.input,'" />\n   <input type="file" class="').concat(b.file,'" />\n   <div class="').concat(b.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(b.select,'"></select>\n   <div class="').concat(b.radio,'"></div>\n   <label for="').concat(b.checkbox,'" class="').concat(b.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(b.label,'"></span>\n   </label>\n   <textarea class="').concat(b.textarea,'"></textarea>\n   <div class="').concat(b["validation-message"],'" id="').concat(b["validation-message"],'"></div>\n   <div class="').concat(b.actions,'">\n     <div class="').concat(b.loader,'"></div>\n     <button type="button" class="').concat(b.confirm,'"></button>\n     <button type="button" class="').concat(b.deny,'"></button>\n     <button type="button" class="').concat(b.cancel,'"></button>\n   </div>\n   <div class="').concat(b.footer,'"></div>\n   <div class="').concat(b["timer-progress-bar-container"],'">\n     <div class="').concat(b["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),mt=()=>{const t=E();return!!t&&(t.remove(),tt([document.documentElement,document.body],[b["no-backdrop"],b["toast-shown"],b["has-column"]]),!0)},gt=()=>{Us.isVisible()&&Us.resetValidationMessage()},wt=()=>{const t=k(),e=et(t,b.input),n=et(t,b.file),s=t.querySelector(".".concat(b.range," input")),i=t.querySelector(".".concat(b.range," output")),r=et(t,b.select),o=t.querySelector(".".concat(b.checkbox," input")),a=et(t,b.textarea);e.oninput=gt,n.onchange=gt,r.onchange=gt,o.onchange=gt,a.oninput=gt,s.oninput=()=>{gt(),i.value=s.value},s.onchange=()=>{gt(),s.nextSibling.value=s.value}},yt=t=>"string"==typeof t?document.querySelector(t):t,bt=t=>{const e=k();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},vt=t=>{"rtl"===window.getComputedStyle(t).direction&&Z(E(),b.rtl)},Et=t=>{const e=mt();if(ft())return void o("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=b.container,e&&Z(n,b["no-transition"]),K(n,pt);const s=yt(t.target);s.appendChild(n),bt(t),vt(s),wt()},Tt=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):"object"==typeof t?It(t,e):t&&K(e,t)},It=(t,e)=>{t.jquery?kt(e,t):K(e,t.toString())},kt=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},St=(()=>{if(ft())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1})(),At=()=>{const t=document.createElement("div");t.className=b["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Ct=(t,e)=>{const n=M(),s=P(),i=N(),r=L(),o=R();e.showConfirmButton||e.showDenyButton||e.showCancelButton?st(n):it(n),Q(n,e,"actions"),_t(i,"confirm",e),_t(r,"deny",e),_t(o,"cancel",e),xt(i,r,o,e),e.reverseButtons&&(n.insertBefore(o,s),n.insertBefore(r,s),n.insertBefore(i,s)),K(s,e.loaderHtml),Q(s,e,"loader")};function xt(t,e,n,s){if(!s.buttonsStyling)return tt([t,e,n],b.styled);Z([t,e,n],b.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,Z(t,b["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,Z(e,b["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,Z(n,b["default-outline"]))}function _t(t,e,n){ot(t,n["show".concat(s(e),"Button")],"inline-block"),K(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=b[e],Q(t,n,"".concat(e,"Button")),Z(t,n["".concat(e,"ButtonClass")])}function Dt(t,e){"string"==typeof e?t.style.background=e:e||Z([document.documentElement,document.body],b["no-backdrop"])}function Nt(t,e){e in b?Z(t,b[e]):(r('The "position" parameter is not valid, defaulting to "center"'),Z(t,b.center))}function Lt(t,e){if(e&&"string"==typeof e){const n="grow-".concat(e);n in b&&Z(t,b[n])}}const Ot=(t,e)=>{const n=E();n&&(Dt(n,e.backdrop),Nt(n,e.position),Lt(n,e.grow),Q(n,e,"container"))};var Pt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Rt=["input","file","range","select","radio","checkbox","textarea"],Mt=(t,e)=>{const n=k(),s=Pt.innerParams.get(t),i=!s||e.input!==s.input;Rt.forEach((t=>{const s=b[t],r=et(n,s);Bt(t,e.inputAttributes),r.className=s,i&&it(r)})),e.input&&(i&&Vt(e),jt(e))},Vt=t=>{if(!zt[t.input])return o('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));const e=qt(t.input),n=zt[t.input](e,t);st(n),setTimeout((()=>{X(n)}))},Ft=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Bt=(t,e)=>{const n=Y(k(),t);if(n){Ft(n);for(const t in e)n.setAttribute(t,e[t])}},jt=t=>{const e=qt(t.input);t.customClass&&Z(e,t.customClass.input)},Ut=(t,e)=>{t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)},$t=(t,e,n)=>{if(n.inputLabel){t.id=b.input;const s=document.createElement("label"),i=b["input-label"];s.setAttribute("for",t.id),s.className=i,Z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},qt=t=>{const e=b[t]?b[t]:b.input;return et(k(),e)},zt={};zt.text=zt.email=zt.password=zt.number=zt.tel=zt.url=(t,e)=>("string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:f(e.inputValue)||r('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof e.inputValue,'"')),$t(t,t,e),Ut(t,e),t.type=e.input,t),zt.file=(t,e)=>($t(t,t,e),Ut(t,e),t),zt.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,$t(n,t,e),t},zt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");K(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return $t(t,t,e),t},zt.radio=t=>(t.textContent="",t),zt.checkbox=(t,e)=>{const n=Y(k(),"checkbox");n.value=1,n.id=b.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return K(s,e.inputPlaceholder),t},zt.textarea=(t,e)=>{t.value=e.inputValue,Ut(t,e),$t(t,t,e);const n=t=>parseInt(window.getComputedStyle(t).marginLeft)+parseInt(window.getComputedStyle(t).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const e=parseInt(window.getComputedStyle(k()).width);new MutationObserver((()=>{const s=t.offsetWidth+n(t);k().style.width=s>e?"".concat(s,"px"):null})).observe(t,{attributes:!0,attributeFilter:["style"]})}})),t};const Ht=(t,e)=>{const n=C();Q(n,e,"htmlContainer"),e.html?(Tt(e.html,n),st(n,"block")):e.text?(n.textContent=e.text,st(n,"block")):it(n),Mt(t,e)},Kt=(t,e)=>{const n=V();ot(n,e.footer),e.footer&&Tt(e.footer,n),Q(n,e,"footer")},Gt=(t,e)=>{const n=B();K(n,e.closeButtonHtml),Q(n,e,"closeButton"),ot(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Wt=(t,e)=>{const n=Pt.innerParams.get(t),s=S();return n&&e.icon===n.icon?(Xt(s,e),void Qt(s,e)):e.icon||e.iconHtml?e.icon&&-1===Object.keys(v).indexOf(e.icon)?(o('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"')),it(s)):(st(s),Xt(s,e),Qt(s,e),void Z(s,e.showClass.icon)):it(s)},Qt=(t,e)=>{for(const n in v)e.icon!==n&&tt(t,v[n]);Z(t,v[e.icon]),Jt(t,e),Yt(),Q(t,e,"icon")},Yt=()=>{const t=k(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let t=0;t<n.length;t++)n[t].style.backgroundColor=e},Xt=(t,e)=>{t.textContent="",e.iconHtml?K(t,Zt(e.iconHtml)):"success"===e.icon?K(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?K(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):K(t,Zt({question:"?",warning:"!",info:"i"}[e.icon]))},Jt=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])rt(t,n,"backgroundColor",e.iconColor);rt(t,".swal2-success-ring","borderColor",e.iconColor)}},Zt=t=>'<div class="'.concat(b["icon-content"],'">').concat(t,"</div>"),te=(t,e)=>{const n=x();if(!e.imageUrl)return it(n);st(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),nt(n,"width",e.imageWidth),nt(n,"height",e.imageHeight),n.className=b.image,Q(n,e,"image")},ee=t=>{const e=document.createElement("li");return Z(e,b["progress-step"]),K(e,t),e},ne=t=>{const e=document.createElement("li");return Z(e,b["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},se=(t,e)=>{const n=_();if(!e.progressSteps||0===e.progressSteps.length)return it(n);st(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&r("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(((t,s)=>{const i=ee(t);if(n.appendChild(i),s===e.currentProgressStep&&Z(i,b["active-progress-step"]),s!==e.progressSteps.length-1){const t=ne(e);n.appendChild(t)}}))},ie=(t,e)=>{const n=A();ot(n,e.title||e.titleText,"block"),e.title&&Tt(e.title,n),e.titleText&&(n.innerText=e.titleText),Q(n,e,"title")},re=(t,e)=>{const n=E(),s=k();e.toast?(nt(n,"width",e.width),s.style.width="100%",s.insertBefore(P(),S())):nt(s,"width",e.width),nt(s,"padding",e.padding),e.background&&(s.style.background=e.background),it(D()),oe(s,e)},oe=(t,e)=>{t.className="".concat(b.popup," ").concat(at(t)?e.showClass.popup:""),e.toast?(Z([document.documentElement,document.body],b["toast-shown"]),Z(t,b.toast)):Z(t,b.modal),Q(t,e,"popup"),"string"==typeof e.customClass&&Z(t,e.customClass),e.icon&&Z(t,b["icon-".concat(e.icon)])},ae=(t,e)=>{re(t,e),Ot(t,e),se(t,e),Wt(t,e),te(t,e),ie(t,e),Gt(t,e),Ht(t,e),Ct(t,e),Kt(t,e),"function"==typeof e.didRender&&e.didRender(k())},ce=()=>at(k()),le=()=>N()&&N().click(),ue=()=>L()&&L().click(),he=()=>R()&&R().click();function de(...t){return new this(...t)}function fe(t){class e extends(this){_main(e,n){return super._main(e,Object.assign({},t,n))}}return e}const pe=t=>{let e=k();e||Us.fire(),e=k();const n=P();q()?it(S()):me(e,t),st(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},me=(t,e)=>{const n=M(),s=P();!e&&at(N())&&(e=N()),st(n),e&&(it(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),Z([t,n],b.loading)},ge=100,we={},ye=()=>{we.previousActiveElement&&we.previousActiveElement.focus?(we.previousActiveElement.focus(),we.previousActiveElement=null):document.body&&document.body.focus()},be=t=>new Promise((e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;we.restoreFocusTimeout=setTimeout((()=>{ye(),e()}),ge),window.scrollTo(n,s)})),ve=()=>we.timeout&&we.timeout.getTimerLeft(),Ee=()=>{if(we.timeout)return dt(),we.timeout.stop()},Te=()=>{if(we.timeout){const t=we.timeout.start();return ht(t),t}},Ie=()=>{const t=we.timeout;return t&&(t.running?Ee():Te())},ke=t=>{if(we.timeout){const e=we.timeout.increase(t);return ht(e,!0),e}},Se=()=>we.timeout&&we.timeout.isRunning();let Ae=!1;const Ce={};function xe(t="data-swal-template"){Ce[t]=this,Ae||(document.body.addEventListener("click",_e),Ae=!0)}const _e=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const t in Ce){const n=e.getAttribute(t);if(n)return void Ce[t].fire({template:n})}},De={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ne=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Le={},Oe=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Pe=t=>Object.prototype.hasOwnProperty.call(De,t),Re=t=>-1!==Ne.indexOf(t),Me=t=>Le[t],Ve=t=>{Pe(t)||r('Unknown parameter "'.concat(t,'"'))},Fe=t=>{Oe.includes(t)&&r('The parameter "'.concat(t,'" is incompatible with toasts'))},Be=t=>{Me(t)&&l(t,Me(t))},je=t=>{!t.backdrop&&t.allowOutsideClick&&r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Ve(e),t.toast&&Fe(e),Be(e)};var Ue=Object.freeze({isValidParameter:Pe,isUpdatableParameter:Re,isDeprecatedParameter:Me,argsToParams:g,isVisible:ce,clickConfirm:le,clickDeny:ue,clickCancel:he,getContainer:E,getPopup:k,getTitle:A,getHtmlContainer:C,getImage:x,getIcon:S,getInputLabel:O,getCloseButton:B,getActions:M,getConfirmButton:N,getDenyButton:L,getCancelButton:R,getLoader:P,getFooter:V,getTimerProgressBar:F,getFocusableElements:U,getValidationMessage:D,isLoading:z,fire:de,mixin:fe,showLoading:pe,enableLoading:pe,getTimerLeft:ve,stopTimer:Ee,resumeTimer:Te,toggleTimer:Ie,increaseTimer:ke,isTimerRunning:Se,bindClickHandler:xe});function $e(){const t=Pt.innerParams.get(this);if(!t)return;const e=Pt.domCache.get(this);it(e.loader),q()?t.icon&&st(S()):qe(e),tt([e.popup,e.actions],b.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const qe=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?st(e[0],"inline-block"):ct()&&it(t.actions)};function ze(t){const e=Pt.innerParams.get(t||this),n=Pt.domCache.get(t||this);return n?Y(n.popup,e.input):null}const He=()=>{null===H.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(H.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(H.previousBodyPadding+At(),"px"))},Ke=()=>{null!==H.previousBodyPadding&&(document.body.style.paddingRight="".concat(H.previousBodyPadding,"px"),H.previousBodyPadding=null)},Ge=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!G(document.body,b.iosfix)){const t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),Z(document.body,b.iosfix),Qe(),We()}},We=()=>{if(!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)){const t=44;k().scrollHeight>window.innerHeight-t&&(E().style.paddingBottom="".concat(t,"px"))}},Qe=()=>{const t=E();let e;t.ontouchstart=t=>{e=Ye(t)},t.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())}},Ye=t=>{const e=t.target,n=E();return!(Xe(t)||Je(t)||e!==n&&(lt(n)||"INPUT"===e.tagName||"TEXTAREA"===e.tagName||lt(C())&&C().contains(e)))},Xe=t=>t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType,Je=t=>t.touches&&t.touches.length>1,Ze=()=>{if(G(document.body,b.iosfix)){const t=parseInt(document.body.style.top,10);tt(document.body,b.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},tn=()=>{i(document.body.children).forEach((t=>{t===E()||t.contains(E())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}))},en=()=>{i(document.body.children).forEach((t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")}))};var nn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function sn(t,e,n,s){q()?pn(t,s):(be(n).then((()=>pn(t,s))),we.keydownTarget.removeEventListener("keydown",we.keydownHandler,{capture:we.keydownListenerCapture}),we.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),$()&&(Ke(),Ze(),en()),rn()}function rn(){tt([document.documentElement,document.body],[b.shown,b["height-auto"],b["no-backdrop"],b["toast-shown"]])}function on(t){t=hn(t);const e=nn.swalPromiseResolve.get(this),n=cn(this);this.isAwaitingPromise()?t.isDismissed||(un(this),e(t)):n&&e(t)}function an(){return!!Pt.awaitingPromise.get(this)}const cn=t=>{const e=k();if(!e)return!1;const n=Pt.innerParams.get(t);if(!n||G(e,n.hideClass.popup))return!1;tt(e,n.showClass.popup),Z(e,n.hideClass.popup);const s=E();return tt(s,n.showClass.backdrop),Z(s,n.hideClass.backdrop),dn(t,e,n),!0};function ln(t){const e=nn.swalPromiseReject.get(this);un(this),e&&e(t)}const un=t=>{t.isAwaitingPromise()&&(Pt.awaitingPromise.delete(t),Pt.innerParams.get(t)||t._destroy())},hn=t=>void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),dn=(t,e,n)=>{const s=E(),i=St&&ut(e);"function"==typeof n.willClose&&n.willClose(e),i?fn(t,e,s,n.returnFocus,n.didClose):sn(t,s,n.returnFocus,n.didClose)},fn=(t,e,n,s,i)=>{we.swalCloseEventFinishedCallback=sn.bind(null,t,n,s,i),e.addEventListener(St,(function(t){t.target===e&&(we.swalCloseEventFinishedCallback(),delete we.swalCloseEventFinishedCallback)}))},pn=(t,e)=>{setTimeout((()=>{"function"==typeof e&&e.bind(t.params)(),t._destroy()}))};function mn(t,e,n){const s=Pt.domCache.get(t);e.forEach((t=>{s[t].disabled=n}))}function gn(t,e){if(!t)return!1;if("radio"===t.type){const n=t.parentNode.parentNode.querySelectorAll("input");for(let t=0;t<n.length;t++)n[t].disabled=e}else t.disabled=e}function wn(){mn(this,["confirmButton","denyButton","cancelButton"],!1)}function yn(){mn(this,["confirmButton","denyButton","cancelButton"],!0)}function bn(){return gn(this.getInput(),!1)}function vn(){return gn(this.getInput(),!0)}function En(t){const e=Pt.domCache.get(this),n=Pt.innerParams.get(this);K(e.validationMessage,t),e.validationMessage.className=b["validation-message"],n.customClass&&n.customClass.validationMessage&&Z(e.validationMessage,n.customClass.validationMessage),st(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",b["validation-message"]),X(s),Z(s,b.inputerror))}function Tn(){const t=Pt.domCache.get(this);t.validationMessage&&it(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),tt(e,b.inputerror))}function In(){return Pt.domCache.get(this).progressSteps}class kn{constructor(t,e){this.callback=t,this.remaining=e,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}increase(t){const e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}var Sn={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function An(t){t.inputValidator||Object.keys(Sn).forEach((e=>{t.input===e&&(t.inputValidator=Sn[e])}))}function Cn(t){(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(r('Target parameter is not valid, defaulting to "body"'),t.target="body")}function xn(t){An(t),t.showLoaderOnConfirm&&!t.preConfirm&&r("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Cn(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),Et(t)}const _n=["swal-title","swal-html","swal-footer"],Dn=t=>{const e="string"==typeof t.template?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Vn(n),Object.assign(Nn(n),Ln(n),On(n),Pn(n),Rn(n),Mn(n,_n))},Nn=t=>{const e={};return i(t.querySelectorAll("swal-param")).forEach((t=>{Fn(t,["name","value"]);const n=t.getAttribute("name");let s=t.getAttribute("value");"boolean"==typeof De[n]&&"false"===s&&(s=!1),"object"==typeof De[n]&&(s=JSON.parse(s)),e[n]=s})),e},Ln=t=>{const e={};return i(t.querySelectorAll("swal-button")).forEach((t=>{Fn(t,["type","color","aria-label"]);const n=t.getAttribute("type");e["".concat(n,"ButtonText")]=t.innerHTML,e["show".concat(s(n),"Button")]=!0,t.hasAttribute("color")&&(e["".concat(n,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(e["".concat(n,"ButtonAriaLabel")]=t.getAttribute("aria-label"))})),e},On=t=>{const e={},n=t.querySelector("swal-image");return n&&(Fn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Pn=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Fn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Rn=t=>{const e={},n=t.querySelector("swal-input");n&&(Fn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},i(s).forEach((t=>{Fn(t,["value"]);const n=t.getAttribute("value"),s=t.innerHTML;e.inputOptions[n]=s}))),e},Mn=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Fn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Vn=t=>{const e=_n.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);i(t.children).forEach((t=>{const n=t.tagName.toLowerCase();-1===e.indexOf(n)&&r("Unrecognized element <".concat(n,">"))}))},Fn=(t,e)=>{i(t.attributes).forEach((n=>{-1===e.indexOf(n.name)&&r(['Unrecognized attribute "'.concat(n.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(e.length?"Allowed attributes are: ".concat(e.join(", ")):"To set the value, use HTML within the element.")])}))},Bn=10,jn=t=>{const e=E(),n=k();"function"==typeof t.willOpen&&t.willOpen(n);const s=window.getComputedStyle(document.body).overflowY;zn(e,n,t),setTimeout((()=>{$n(e,n)}),Bn),$()&&(qn(e,t.scrollbarPadding,s),tn()),q()||we.previousActiveElement||(we.previousActiveElement=document.activeElement),"function"==typeof t.didOpen&&setTimeout((()=>t.didOpen(n))),tt(e,b["no-transition"])},Un=t=>{const e=k();if(t.target!==e)return;const n=E();e.removeEventListener(St,Un),n.style.overflowY="auto"},$n=(t,e)=>{St&&ut(e)?(t.style.overflowY="hidden",e.addEventListener(St,Un)):t.style.overflowY="auto"},qn=(t,e,n)=>{Ge(),e&&"hidden"!==n&&He(),setTimeout((()=>{t.scrollTop=0}))},zn=(t,e,n)=>{Z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),st(e,"grid"),setTimeout((()=>{Z(e,n.showClass.popup),e.style.removeProperty("opacity")}),Bn),Z([document.documentElement,document.body],b.shown),n.heightAuto&&n.backdrop&&!n.toast&&Z([document.documentElement,document.body],b["height-auto"])},Hn=(t,e)=>{"select"===e.input||"radio"===e.input?Yn(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(h(e.inputValue)||f(e.inputValue))&&(pe(N()),Xn(t,e))},Kn=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Gn(n);case"radio":return Wn(n);case"file":return Qn(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Gn=t=>t.checked?1:0,Wn=t=>t.checked?t.value:null,Qn=t=>t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null,Yn=(t,e)=>{const n=k(),s=t=>Jn[e.input](n,Zn(t),e);h(e.inputOptions)||f(e.inputOptions)?(pe(N()),d(e.inputOptions).then((e=>{t.hideLoading(),s(e)}))):"object"==typeof e.inputOptions?s(e.inputOptions):o("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof e.inputOptions))},Xn=(t,e)=>{const n=t.getInput();it(n),d(e.inputValue).then((s=>{n.value="number"===e.input?parseFloat(s)||0:"".concat(s),st(n),n.focus(),t.hideLoading()})).catch((e=>{o("Error in inputValue promise: ".concat(e)),n.value="",st(n),n.focus(),t.hideLoading()}))},Jn={select:(t,e,n)=>{const s=et(t,b.select),i=(t,e,s)=>{const i=document.createElement("option");i.value=s,K(i,e),i.selected=ts(s,n.inputValue),t.appendChild(i)};e.forEach((t=>{const e=t[0],n=t[1];if(Array.isArray(n)){const t=document.createElement("optgroup");t.label=e,t.disabled=!1,s.appendChild(t),n.forEach((e=>i(t,e[1],e[0])))}else i(s,n,e)})),s.focus()},radio:(t,e,n)=>{const s=et(t,b.radio);e.forEach((t=>{const e=t[0],i=t[1],r=document.createElement("input"),o=document.createElement("label");r.type="radio",r.name=b.radio,r.value=e,ts(e,n.inputValue)&&(r.checked=!0);const a=document.createElement("span");K(a,i),a.className=b.label,o.appendChild(r),o.appendChild(a),s.appendChild(o)}));const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Zn=t=>{const e=[];return"undefined"!=typeof Map&&t instanceof Map?t.forEach(((t,n)=>{let s=t;"object"==typeof s&&(s=Zn(s)),e.push([n,s])})):Object.keys(t).forEach((n=>{let s=t[n];"object"==typeof s&&(s=Zn(s)),e.push([n,s])})),e},ts=(t,e)=>e&&e.toString()===t.toString(),es=t=>{const e=Pt.innerParams.get(t);t.disableButtons(),e.input?is(t,"confirm"):ls(t,!0)},ns=t=>{const e=Pt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?is(t,"deny"):os(t,!1)},ss=(e,n)=>{e.disableButtons(),n(t.cancel)},is=(t,e)=>{const n=Pt.innerParams.get(t),s=Kn(t,n);n.inputValidator?rs(t,s,e):t.getInput().checkValidity()?"deny"===e?os(t,s):ls(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},rs=(t,e,n)=>{const s=Pt.innerParams.get(t);t.disableInput(),Promise.resolve().then((()=>d(s.inputValidator(e,s.validationMessage)))).then((s=>{t.enableButtons(),t.enableInput(),s?t.showValidationMessage(s):"deny"===n?os(t,e):ls(t,e)}))},os=(t,e)=>{const n=Pt.innerParams.get(t||void 0);n.showLoaderOnDeny&&pe(L()),n.preDeny?(Pt.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>d(n.preDeny(e,n.validationMessage)))).then((n=>{!1===n?t.hideLoading():t.closePopup({isDenied:!0,value:void 0===n?e:n})})).catch((e=>cs(t||void 0,e)))):t.closePopup({isDenied:!0,value:e})},as=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},cs=(t,e)=>{t.rejectPromise(e)},ls=(t,e)=>{const n=Pt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&pe(),n.preConfirm?(t.resetValidationMessage(),Pt.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>d(n.preConfirm(e,n.validationMessage)))).then((n=>{at(D())||!1===n?t.hideLoading():as(t,void 0===n?e:n)})).catch((e=>cs(t||void 0,e)))):as(t,e)},us=(t,e,n,s)=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1),n.toast||(e.keydownHandler=e=>ps(t,e,s),e.keydownTarget=n.keydownListenerCapture?window:k(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},hs=(t,e,n)=>{const s=U();if(s.length)return(e+=n)===s.length?e=0:-1===e&&(e=s.length-1),s[e].focus();k().focus()},ds=["ArrowRight","ArrowDown"],fs=["ArrowLeft","ArrowUp"],ps=(t,e,n)=>{const s=Pt.innerParams.get(t);s&&(s.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?ms(t,e,s):"Tab"===e.key?gs(e,s):[...ds,...fs].includes(e.key)?ws(e.key):"Escape"===e.key&&ys(e,s,n))},ms=(t,e,n)=>{if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;le(),e.preventDefault()}},gs=(t,e)=>{const n=t.target,s=U();let i=-1;for(let t=0;t<s.length;t++)if(n===s[t]){i=t;break}t.shiftKey?hs(e,i,-1):hs(e,i,1),t.stopPropagation(),t.preventDefault()},ws=t=>{if(![N(),L(),R()].includes(document.activeElement))return;const e=ds.includes(t)?"nextElementSibling":"previousElementSibling",n=document.activeElement[e];n&&n.focus()},ys=(e,n,s)=>{u(n.allowEscapeKey)&&(e.preventDefault(),s(t.esc))},bs=(t,e,n)=>{Pt.innerParams.get(t).toast?vs(t,e,n):(Ts(e),Is(e),ks(t,e,n))},vs=(e,n,s)=>{n.popup.onclick=()=>{const n=Pt.innerParams.get(e);n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton||n.timer||n.input||s(t.close)}};let Es=!1;const Ts=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Es=!0)}}},Is=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Es=!0)}}},ks=(e,n,s)=>{n.container.onclick=i=>{const r=Pt.innerParams.get(e);Es?Es=!1:i.target===n.container&&u(r.allowOutsideClick)&&s(t.backdrop)}};function Ss(t,e={}){je(Object.assign({},e,t)),we.currentInstance&&(we.currentInstance._destroy(),$()&&en()),we.currentInstance=this;const n=As(t,e);xn(n),Object.freeze(n),we.timeout&&(we.timeout.stop(),delete we.timeout),clearTimeout(we.restoreFocusTimeout);const s=xs(this);return ae(this,n),Pt.innerParams.set(this,n),Cs(this,s,n)}const As=(t,e)=>{const n=Dn(t),s=Object.assign({},De,e,n,t);return s.showClass=Object.assign({},De.showClass,s.showClass),s.hideClass=Object.assign({},De.hideClass,s.hideClass),s},Cs=(e,n,s)=>new Promise(((i,r)=>{const o=t=>{e.closePopup({isDismissed:!0,dismiss:t})};nn.swalPromiseResolve.set(e,i),nn.swalPromiseReject.set(e,r),n.confirmButton.onclick=()=>es(e),n.denyButton.onclick=()=>ns(e),n.cancelButton.onclick=()=>ss(e,o),n.closeButton.onclick=()=>o(t.close),bs(e,n,o),us(e,we,s,o),Hn(e,s),jn(s),_s(we,s,o),Ds(n,s),setTimeout((()=>{n.container.scrollTop=0}))})),xs=t=>{const e={popup:k(),container:E(),actions:M(),confirmButton:N(),denyButton:L(),cancelButton:R(),loader:P(),closeButton:B(),validationMessage:D(),progressSteps:_()};return Pt.domCache.set(t,e),e},_s=(t,e,n)=>{const s=F();it(s),e.timer&&(t.timeout=new kn((()=>{n("timer"),delete t.timeout}),e.timer),e.timerProgressBar&&(st(s),setTimeout((()=>{t.timeout&&t.timeout.running&&ht(e.timer)}))))},Ds=(t,e)=>{if(!e.toast)return u(e.allowEnterKey)?void(Ns(t,e)||hs(e,-1,1)):Ls()},Ns=(t,e)=>e.focusDeny&&at(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&at(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!at(t.confirmButton)||(t.confirmButton.focus(),0)),Ls=()=>{document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};function Os(t){const e=k(),n=Pt.innerParams.get(this);if(!e||G(e,n.hideClass.popup))return r("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s={};Object.keys(t).forEach((e=>{Us.isUpdatableParameter(e)?s[e]=t[e]:r('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}));const i=Object.assign({},n,s);ae(this,i),Pt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}function Ps(){const t=Pt.domCache.get(this),e=Pt.innerParams.get(this);e?(t.popup&&we.swalCloseEventFinishedCallback&&(we.swalCloseEventFinishedCallback(),delete we.swalCloseEventFinishedCallback),we.deferDisposalTimer&&(clearTimeout(we.deferDisposalTimer),delete we.deferDisposalTimer),"function"==typeof e.didDestroy&&e.didDestroy(),Rs(this)):Ms(this)}const Rs=t=>{Ms(t),delete t.params,delete we.keydownHandler,delete we.keydownTarget,delete we.currentInstance},Ms=t=>{t.isAwaitingPromise()?(Vs(Pt,t),Pt.awaitingPromise.set(t,!0)):(Vs(nn,t),Vs(Pt,t))},Vs=(t,e)=>{for(const n in t)t[n].delete(e)};var Fs=Object.freeze({hideLoading:$e,disableLoading:$e,getInput:ze,close:on,isAwaitingPromise:an,rejectPromise:ln,closePopup:on,closeModal:on,closeToast:on,enableButtons:wn,disableButtons:yn,enableInput:bn,disableInput:vn,showValidationMessage:En,resetValidationMessage:Tn,getProgressSteps:In,_main:Ss,update:Os,_destroy:Ps});let Bs;class js{constructor(...t){if("undefined"==typeof window)return;Bs=this;const e=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:e,writable:!1,enumerable:!0,configurable:!0}});const n=this._main(this.params);Pt.promise.set(this,n)}then(t){return Pt.promise.get(this).then(t)}finally(t){return Pt.promise.get(this).finally(t)}}Object.assign(js.prototype,Fs),Object.assign(js,Ue),Object.keys(Fs).forEach((t=>{js[t]=function(...e){if(Bs)return Bs[t](...e)}})),js.DismissReason=t,js.version="11.1.9";const Us=js;return Us.default=Us,Us}(),void 0!==jh&&jh.Sweetalert2&&(jh.swal=jh.sweetAlert=jh.Swal=jh.SweetAlert=jh.Sweetalert2),"undefined"!=typeof document&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch(t){n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')}));function cf(e){let n,s,r,o,a,c,m,b,v,E,T,I,k,S,A,C,x,_,D;return{c(){n=d("main"),s=d("div"),r=d("h4"),o=f(e[0]),a=p(),c=d("ul"),m=d("li"),b=f(e[1]),v=p(),E=d("li"),T=f(e[2]),I=p(),k=d("li"),S=f(e[3]),A=p(),C=d("li"),x=f(e[4]),w(m,"class","btn btn-outline-primary d-flex my-2"),w(E,"class","btn btn-outline-primary d-flex my-2"),w(k,"class","btn btn-outline-primary d-flex my-2"),w(C,"class","btn btn-outline-primary d-flex my-2"),w(c,"class","ps-0"),w(s,"class","card p-4 shadow rounded-3")},m(t,i){u(t,n,i),l(n,s),l(s,r),l(r,o),l(s,a),l(s,c),l(c,m),l(m,b),l(c,v),l(c,E),l(E,T),l(c,I),l(c,k),l(k,S),l(c,A),l(c,C),l(C,x),_||(D=[g(m,"click",e[6]),g(E,"click",e[7]),g(k,"click",e[8]),g(C,"click",e[9])],_=!0)},p(t,[e]){1&e&&y(o,t[0]),2&e&&y(b,t[1]),4&e&&y(T,t[2]),8&e&&y(S,t[3]),16&e&&y(x,t[4])},i:t,o:t,d(t){t&&h(n),_=!1,i(D)}}}function lf(t,e,n){Zd(Bh);let s,i,r,o,a,c,l=0,u=sf.length;function h(){rf.set(l);let t=[sf[l].options[0],sf[l].options[1],sf[l].options[2],sf[l].answer];t=t.sort((()=>Math.random()-.5)),n(0,i=`Question ${l+1}: ${sf[l].question}`),n(1,r=t[0]),n(2,o=t[1]),n(3,a=t[2]),n(4,c=t[3]),s=sf[l].answer}async function d(){let t=localStorage.getItem("highScore");t?l>t&&localStorage.setItem("highScore",l):localStorage.setItem("highScore",l),of.set(localStorage.getItem("highScore")),await Rh(Xu(Fh,"Leaderboard",localStorage.getItem("user")),{score:parseInt(localStorage.getItem("highScore"))})}function f(t){l<u-1?t==s?(l+=1,h()):(d(),l=0,h(),af.fire({title:"You loose!",icon:"error",confirmButtonText:"Try again!"})):(d(),l=0,h(),af.fire({title:"You solved every question!",icon:"success",confirmButtonText:"Go again!"}))}localStorage.getItem("highScore")&&of.set(localStorage.getItem("highScore")),localStorage.getItem("user")||af.fire({title:"Enter your name",input:"text",confirmButtonText:"Lets Play!",allowOutsideClick:!1}).then((async t=>{const e=await function(t,e){const n=zu(t.firestore,Zu),s=Xu(t),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e);return Mh(n,[fh(dh(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,ha.exists(!1))]).then((()=>s))}(Yu(Fh,"Leaderboard"),{name:t.value,score:0});localStorage.setItem("user",e.id),localStorage.setItem("name",t.value)})),h();return[i,r,o,a,c,f,()=>f(r),()=>f(o),()=>f(a),()=>f(c)]}class uf extends G{constructor(t){super(),K(this,t,lf,cf,o,{})}}function hf(t,e,n){const s=t.slice();return s[3]=e[n].name,s[4]=e[n].score,s}function df(t){let e,n,s,i,r,o,a,c=t[3]+"",m=t[4]+"";return{c(){e=d("tr"),n=d("td"),s=f(c),i=p(),r=d("td"),o=f(m),a=p()},m(t,c){u(t,e,c),l(e,n),l(n,s),l(e,i),l(e,r),l(r,o),l(e,a)},p(t,e){1&e&&c!==(c=t[3]+"")&&y(s,c),1&e&&m!==(m=t[4]+"")&&y(o,m)},d(t){t&&h(e)}}}function ff(e){let n,s,i,r,o,a=e[0],c=[];for(let t=0;t<a.length;t+=1)c[t]=df(hf(e,a,t));return{c(){n=d("main"),s=d("table"),i=d("thead"),i.innerHTML="<tr><th>Name</th> \n            <th>Score</th></tr>",r=p(),o=d("tbody");for(let t=0;t<c.length;t+=1)c[t].c();w(s,"class","table")},m(t,e){u(t,n,e),l(n,s),l(s,i),l(s,r),l(s,o);for(let t=0;t<c.length;t+=1)c[t].m(o,null)},p(t,[e]){if(1&e){let n;for(a=t[0],n=0;n<a.length;n+=1){const s=hf(t,a,n);c[n]?c[n].p(s,e):(c[n]=df(s),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=a.length}},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t)}}}function pf(t,e,n){let s=[];const i=function(t,...e){for(const n of e)t=n._apply(t);return t}(Yu(Fh,"Leaderboard"),function(t,e="asc"){const n=e,s=Ah("orderBy",t);return new Lh(s,n)}("score","desc"));return async function(){(await Ph(i)).forEach((t=>{t=t.data(),s.push({name:t.name,score:t.score})})),n(0,s)}(),[s]}class mf extends G{constructor(t){super(),K(this,t,pf,ff,o,{})}}function gf(e){let n,s,o,a,c,m,b,v,E,T,I,k,S,A,C,x,_,D;return{c(){n=d("header"),s=d("div"),o=d("a"),o.textContent="Home",a=p(),c=d("span"),m=d("i"),b=f(" Temperature: "),v=f(e[2]),E=p(),T=d("a"),T.innerHTML='<i class="bi bi-check2-all"></i> Leaderboard',I=p(),k=d("span"),S=f(e[1]),A=p(),C=d("span"),x=f(e[0]),w(o,"class","navbar-brand"),w(o,"href","/"),w(m,"class","bi bi-brightness-alt-high-fill"),w(c,"class","ms-auto me-0 mx-2 fw-bold"),w(T,"class","btn btn-primary me-0 mx-2 fw-bold text-white text-decoration-none"),w(T,"href","/leaderboard"),w(k,"class","me-0 mx-2 fw-bold"),w(C,"class","me-0 mx-2 text-success fw-bold"),w(s,"class","container-fluid"),w(n,"class","navbar navbar-light bg-light")},m(i,h){var d;u(i,n,h),l(n,s),l(s,o),l(s,a),l(s,c),l(c,m),l(c,b),l(c,v),l(s,E),l(s,T),l(s,I),l(s,k),l(k,S),l(s,A),l(s,C),l(C,x),_||(D=[(d=it.call(null,T),d&&r(d.destroy)?d.destroy:t),g(k,"click",e[3])],_=!0)},p(t,[e]){4&e&&y(v,t[2]),2&e&&y(S,t[1]),1&e&&y(x,t[0])},i:t,o:t,d(t){t&&h(n),_=!1,i(D)}}}function wf(t,e,n){let{headerScore:s}=e,{headerHighScore:i}=e;const r={title:"MDN",text:"Learn web development on MDN!",url:"https://developer.mozilla.org"};rf.subscribe((t=>{n(0,s=t)})),of.subscribe((t=>{n(1,i=t)}));let o=0;return fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cbf40c31dc6e53a5b63069b956572b3a",{method:"GET",redirect:"follow"}).then((t=>t.json())).then((t=>n(2,o=parseInt(t.main.temp-273.15)))).catch((t=>console.log("error",t))),t.$$set=t=>{"headerScore"in t&&n(0,s=t.headerScore),"headerHighScore"in t&&n(1,i=t.headerHighScore)},[s,i,o,async function(){await navigator.share(r)}]}class yf extends G{constructor(t){super(),K(this,t,wf,gf,o,{headerScore:0,headerHighScore:1})}}function bf(e){let n;return{c(){n=d("footer"),n.textContent="Copyright - All rights reserved!",w(n,"class","bg-dark text-white text-center p-4 svelte-2yj728")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class vf extends G{constructor(t){super(),K(this,t,null,bf,o,{})}}function Ef(e){let n,s,i,r,o,c,f,m,g,y,b;return c=new yf({}),m=new ct({props:{routes:e[0]}}),y=new vf({}),{c(){var t,e;n=d("link"),s=d("script"),r=d("link"),o=p(),q(c.$$.fragment),f=p(),q(m.$$.fragment),g=p(),q(y.$$.fragment),w(n,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"),w(n,"rel","stylesheet"),w(n,"integrity","sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"),w(n,"crossorigin","anonymous"),t=s.src,e=i="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",a||(a=document.createElement("a")),a.href=e,t!==a.href&&w(s,"src","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"),w(s,"integrity","sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"),w(s,"crossorigin","anonymous"),w(r,"rel","stylesheet"),w(r,"href","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.6.1/font/bootstrap-icons.min.css"),w(r,"integrity","sha512-9a1QYep56cYgIPFq0JYfsh9xRYYmPBxKaD6/ZfVAtplQ6y9ZUSk7GxgC2dmwtxK9T2cGQOxCV6J2Ll51nrvP2w=="),w(r,"crossorigin","anonymous"),w(r,"referrerpolicy","no-referrer")},m(t,e){l(document.head,n),l(document.head,s),l(document.head,r),u(t,o,e),z(c,t,e),u(t,f,e),z(m,t,e),u(t,g,e),z(y,t,e),b=!0},p:t,i(t){b||(B(c.$$.fragment,t),B(m.$$.fragment,t),B(y.$$.fragment,t),b=!0)},o(t){j(c.$$.fragment,t),j(m.$$.fragment,t),j(y.$$.fragment,t),b=!1},d(t){h(n),h(s),h(r),t&&h(o),H(c,t),t&&h(f),H(m,t),t&&h(g),H(y,t)}}}function Tf(t){return[{"/":uf,"/leaderboard":mf}]}return new class extends G{constructor(t){super(),K(this,t,Tf,Ef,o,{})}}({target:document.body})}();
