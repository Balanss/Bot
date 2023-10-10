function NP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function DP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ZI={exports:{}},dh={},eE={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),xP=Symbol.for("react.portal"),bP=Symbol.for("react.fragment"),VP=Symbol.for("react.strict_mode"),OP=Symbol.for("react.profiler"),LP=Symbol.for("react.provider"),MP=Symbol.for("react.context"),FP=Symbol.for("react.forward_ref"),UP=Symbol.for("react.suspense"),$P=Symbol.for("react.memo"),BP=Symbol.for("react.lazy"),Ay=Symbol.iterator;function jP(t){return t===null||typeof t!="object"?null:(t=Ay&&t[Ay]||t["@@iterator"],typeof t=="function"?t:null)}var tE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nE=Object.assign,rE={};function vo(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iE(){}iE.prototype=vo.prototype;function Pm(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}var Cm=Pm.prototype=new iE;Cm.constructor=Pm;nE(Cm,vo.prototype);Cm.isPureReactComponent=!0;var Ry=Array.isArray,sE=Object.prototype.hasOwnProperty,km={current:null},oE={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sE.call(e,r)&&!oE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:km.current}}function zP(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function qP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Py=/\/+/g;function xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qP(""+t.key):e.toString(36)}function Fu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case xP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xd(o,0):r,Ry(i)?(n="",t!=null&&(n=t.replace(Py,"$&/")+"/"),Fu(i,e,n,"",function(u){return u})):i!=null&&(Nm(i)&&(i=zP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Py,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ry(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xd(s,a);o+=Fu(s,e,n,l,i)}else if(l=jP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xd(s,a++),o+=Fu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return Fu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Uu={transition:null},GP={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Uu,ReactCurrentOwner:km};Y.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!Nm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=vo;Y.Fragment=bP;Y.Profiler=OP;Y.PureComponent=Pm;Y.StrictMode=VP;Y.Suspense=UP;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GP;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=km.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sE.call(e,l)&&!oE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:MP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LP,_context:t},t.Consumer=t};Y.createElement=aE;Y.createFactory=function(t){var e=aE.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:FP,render:t}};Y.isValidElement=Nm;Y.lazy=function(t){return{$$typeof:BP,_payload:{_status:-1,_result:t},_init:WP}};Y.memo=function(t,e){return{$$typeof:$P,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Uu.transition;Uu.transition={};try{t()}finally{Uu.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return It.current.useCallback(t,e)};Y.useContext=function(t){return It.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return It.current.useDeferredValue(t)};Y.useEffect=function(t,e){return It.current.useEffect(t,e)};Y.useId=function(){return It.current.useId()};Y.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return It.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};Y.useRef=function(t){return It.current.useRef(t)};Y.useState=function(t){return It.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return It.current.useTransition()};Y.version="18.2.0";eE.exports=Y;var b=eE.exports;const lE=DP(b),KP=NP({__proto__:null,default:lE},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HP=b,QP=Symbol.for("react.element"),YP=Symbol.for("react.fragment"),XP=Object.prototype.hasOwnProperty,JP=HP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZP={key:!0,ref:!0,__self:!0,__source:!0};function uE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XP.call(e,r)&&!ZP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QP,type:t,key:s,ref:o,props:i,_owner:JP.current}}dh.Fragment=YP;dh.jsx=uE;dh.jsxs=uE;ZI.exports=dh;var B=ZI.exports,Ff={},cE={exports:{}},qt={},hE={exports:{}},dE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var K=L.length;L.push(W);e:for(;0<K;){var Re=K-1>>>1,Ue=L[Re];if(0<i(Ue,W))L[Re]=W,L[K]=Ue,K=Re;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],K=L.pop();if(K!==W){L[0]=K;e:for(var Re=0,Ue=L.length,lu=Ue>>>1;Re<lu;){var ri=2*(Re+1)-1,Dd=L[ri],ii=ri+1,uu=L[ii];if(0>i(Dd,K))ii<Ue&&0>i(uu,Dd)?(L[Re]=uu,L[ii]=K,Re=ii):(L[Re]=Dd,L[ri]=K,Re=ri);else if(ii<Ue&&0>i(uu,K))L[Re]=uu,L[ii]=K,Re=ii;else break e}}return W}function i(L,W){var K=L.sortIndex-W.sortIndex;return K!==0?K:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=L)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function I(L){if(_=!1,g(L),!y)if(n(l)!==null)y=!0,kd(A);else{var W=n(u);W!==null&&Nd(I,W.startTime-L)}}function A(L,W){y=!1,_&&(_=!1,m(M),M=-1),f=!0;var K=d;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||L&&!nn());){var Re=h.callback;if(typeof Re=="function"){h.callback=null,d=h.priorityLevel;var Ue=Re(h.expirationTime<=W);W=t.unstable_now(),typeof Ue=="function"?h.callback=Ue:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var lu=!0;else{var ri=n(u);ri!==null&&Nd(I,ri.startTime-W),lu=!1}return lu}finally{h=null,d=K,f=!1}}var C=!1,N=null,M=-1,ie=5,G=-1;function nn(){return!(t.unstable_now()-G<ie)}function Fo(){if(N!==null){var L=t.unstable_now();G=L;var W=!0;try{W=N(!0,L)}finally{W?Uo():(C=!1,N=null)}}else C=!1}var Uo;if(typeof p=="function")Uo=function(){p(Fo)};else if(typeof MessageChannel<"u"){var Sy=new MessageChannel,kP=Sy.port2;Sy.port1.onmessage=Fo,Uo=function(){kP.postMessage(null)}}else Uo=function(){E(Fo,0)};function kd(L){N=L,C||(C=!0,Uo())}function Nd(L,W){M=E(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,kd(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(L,W,K){var Re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Re+K:Re):K=Re,L){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=K+Ue,L={id:c++,callback:W,priorityLevel:L,startTime:K,expirationTime:Ue,sortIndex:-1},K>Re?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(_?(m(M),M=-1):_=!0,Nd(I,K-Re))):(L.sortIndex=Ue,e(l,L),y||f||(y=!0,kd(A))),L},t.unstable_shouldYield=nn,t.unstable_wrapCallback=function(L){var W=d;return function(){var K=d;d=W;try{return L.apply(this,arguments)}finally{d=K}}}})(dE);hE.exports=dE;var eC=hE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=b,Bt=eC;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pE=new Set,Ma={};function Xi(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)pE.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,tC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cy={},ky={};function nC(t){return Uf.call(ky,t)?!0:Uf.call(Cy,t)?!1:tC.test(t)?ky[t]=!0:(Cy[t]=!0,!1)}function rC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iC(t,e,n,r){if(e===null||typeof e>"u"||rC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dm=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dm,xm);rt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dm,xm);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dm,xm);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function bm(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iC(e,n,i,r)&&(n=null),r||i===null?nC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hu=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),_E=Symbol.for("react.offscreen"),Ny=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,bd;function ia(t){if(bd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+t}var Vd=!1;function Od(t,e){if(!t||Vd)return"";Vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function sC(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Od(t.type,!1),t;case 11:return t=Od(t.type.render,!1),t;case 1:return t=Od(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case ws:return"Portal";case $f:return"Profiler";case Vm:return"StrictMode";case Bf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gE:return(t.displayName||"Context")+".Consumer";case mE:return(t._context.displayName||"Context")+".Provider";case Om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function oC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===Vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aC(t){var e=yE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function du(t){t._valueTracker||(t._valueTracker=aC(t))}function vE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qf(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wE(t,e){e=e.checked,e!=null&&bm(t,"checked",e,!1)}function Wf(t,e){wE(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function by(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(sa(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function IE(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function EE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?EE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,TE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lC=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){lC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function SE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function AE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=SE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uC=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(uC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,Os=null,Ls=null;function Oy(t){if(t=bl(t)){if(typeof Jf!="function")throw Error(R(280));var e=t.stateNode;e&&(e=_h(e),Jf(t.stateNode,t.type,e))}}function RE(t){Os?Ls?Ls.push(t):Ls=[t]:Os=t}function PE(){if(Os){var t=Os,e=Ls;if(Ls=Os=null,Oy(t),e)for(t=0;t<e.length;t++)Oy(e[t])}}function CE(t,e){return t(e)}function kE(){}var Ld=!1;function NE(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return CE(t,e,n)}finally{Ld=!1,(Os!==null||Ls!==null)&&(kE(),PE())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=_h(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Zf=!1;if(qn)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Zf=!1}function cC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ya=!1,cc=null,hc=!1,ep=null,hC={onError:function(t){ya=!0,cc=t}};function dC(t,e,n,r,i,s,o,a,l){ya=!1,cc=null,cC.apply(hC,arguments)}function fC(t,e,n,r,i,s,o,a,l){if(dC.apply(this,arguments),ya){if(ya){var u=cc;ya=!1,cc=null}else throw Error(R(198));hc||(hc=!0,ep=u)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function DE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ly(t){if(Ji(t)!==t)throw Error(R(188))}function pC(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ly(i),t;if(s===r)return Ly(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function xE(t){return t=pC(t),t!==null?bE(t):null}function bE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bE(t);if(e!==null)return e;t=t.sibling}return null}var VE=Bt.unstable_scheduleCallback,My=Bt.unstable_cancelCallback,mC=Bt.unstable_shouldYield,gC=Bt.unstable_requestPaint,Pe=Bt.unstable_now,_C=Bt.unstable_getCurrentPriorityLevel,Fm=Bt.unstable_ImmediatePriority,OE=Bt.unstable_UserBlockingPriority,dc=Bt.unstable_NormalPriority,yC=Bt.unstable_LowPriority,LE=Bt.unstable_IdlePriority,fh=null,Cn=null;function vC(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(fh,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:EC,wC=Math.log,IC=Math.LN2;function EC(t){return t>>>=0,t===0?32:31-(wC(t)/IC|0)|0}var pu=64,mu=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function TC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ME(){var t=pu;return pu<<=1,!(pu&4194240)&&(pu=64),t}function Md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function AC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function FE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var UE,$m,$E,BE,jE,np=!1,gu=[],Ir=null,Er=null,Tr=null,$a=new Map,Ba=new Map,dr=[],RC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fy(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PC(t,e,n,r,i){switch(e){case"focusin":return Ir=jo(Ir,t,e,n,r,i),!0;case"dragenter":return Er=jo(Er,t,e,n,r,i),!0;case"mouseover":return Tr=jo(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $a.set(s,jo($a.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ba.set(s,jo(Ba.get(s)||null,t,e,n,r,i)),!0}return!1}function zE(t){var e=mi(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=DE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){$E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return e=bl(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function Uy(t,e,n){$u(t)&&n.delete(e)}function CC(){np=!1,Ir!==null&&$u(Ir)&&(Ir=null),Er!==null&&$u(Er)&&(Er=null),Tr!==null&&$u(Tr)&&(Tr=null),$a.forEach(Uy),Ba.forEach(Uy)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,np||(np=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,CC)))}function ja(t){function e(i){return zo(i,t)}if(0<gu.length){zo(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&zo(Ir,t),Er!==null&&zo(Er,t),Tr!==null&&zo(Tr,t),$a.forEach(e),Ba.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)zE(n),n.blockedOn===null&&dr.shift()}var Ms=Xn.ReactCurrentBatchConfig,pc=!0;function kC(t,e,n,r){var i=ne,s=Ms.transition;Ms.transition=null;try{ne=1,Bm(t,e,n,r)}finally{ne=i,Ms.transition=s}}function NC(t,e,n,r){var i=ne,s=Ms.transition;Ms.transition=null;try{ne=4,Bm(t,e,n,r)}finally{ne=i,Ms.transition=s}}function Bm(t,e,n,r){if(pc){var i=rp(t,e,n,r);if(i===null)Kd(t,e,r,mc,n),Fy(t,r);else if(PC(i,t,e,n,r))r.stopPropagation();else if(Fy(t,r),e&4&&-1<RC.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&UE(s),s=rp(t,e,n,r),s===null&&Kd(t,e,r,mc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kd(t,e,r,null,n)}}var mc=null;function rp(t,e,n,r){if(mc=null,t=Mm(r),t=mi(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=DE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function qE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_C()){case Fm:return 1;case OE:return 4;case dc:case yC:return 16;case LE:return 536870912;default:return 16}default:return 16}}var gr=null,jm=null,Bu=null;function WE(){if(Bu)return Bu;var t,e=jm,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bu=i.slice(t,1<r?1-r:void 0)}function ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function $y(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:$y,this.isPropagationStopped=$y,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=Wt(wo),xl=ye({},wo,{view:0,detail:0}),DC=Wt(xl),Fd,Ud,qo,ph=ye({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(Fd=t.screenX-qo.screenX,Ud=t.screenY-qo.screenY):Ud=Fd=0,qo=t),Fd)},movementY:function(t){return"movementY"in t?t.movementY:Ud}}),By=Wt(ph),xC=ye({},ph,{dataTransfer:0}),bC=Wt(xC),VC=ye({},xl,{relatedTarget:0}),$d=Wt(VC),OC=ye({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),LC=Wt(OC),MC=ye({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FC=Wt(MC),UC=ye({},wo,{data:0}),jy=Wt(UC),$C={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jC[t])?!!e[t]:!1}function qm(){return zC}var qC=ye({},xl,{key:function(t){if(t.key){var e=$C[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(t){return t.type==="keypress"?ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WC=Wt(qC),GC=ye({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=Wt(GC),KC=ye({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),HC=Wt(KC),QC=ye({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),YC=Wt(QC),XC=ye({},ph,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JC=Wt(XC),ZC=[9,13,27,32],Wm=qn&&"CompositionEvent"in window,va=null;qn&&"documentMode"in document&&(va=document.documentMode);var ek=qn&&"TextEvent"in window&&!va,GE=qn&&(!Wm||va&&8<va&&11>=va),qy=String.fromCharCode(32),Wy=!1;function KE(t,e){switch(t){case"keyup":return ZC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function tk(t,e){switch(t){case"compositionend":return HE(e);case"keypress":return e.which!==32?null:(Wy=!0,qy);case"textInput":return t=e.data,t===qy&&Wy?null:t;default:return null}}function nk(t,e){if(Es)return t==="compositionend"||!Wm&&KE(t,e)?(t=WE(),Bu=jm=gr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GE&&e.locale!=="ko"?null:e.data;default:return null}}var rk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rk[t.type]:e==="textarea"}function QE(t,e,n,r){RE(r),e=gc(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,za=null;function ik(t){o0(t,0)}function mh(t){var e=As(t);if(vE(e))return t}function sk(t,e){if(t==="change")return e}var YE=!1;if(qn){var Bd;if(qn){var jd="oninput"in document;if(!jd){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),jd=typeof Ky.oninput=="function"}Bd=jd}else Bd=!1;YE=Bd&&(!document.documentMode||9<document.documentMode)}function Hy(){wa&&(wa.detachEvent("onpropertychange",XE),za=wa=null)}function XE(t){if(t.propertyName==="value"&&mh(za)){var e=[];QE(e,za,t,Mm(t)),NE(ik,e)}}function ok(t,e,n){t==="focusin"?(Hy(),wa=e,za=n,wa.attachEvent("onpropertychange",XE)):t==="focusout"&&Hy()}function ak(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mh(za)}function lk(t,e){if(t==="click")return mh(e)}function uk(t,e){if(t==="input"||t==="change")return mh(e)}function ck(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:ck;function qa(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Qy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yy(t,e){var n=Qy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qy(n)}}function JE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?JE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ZE(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uc(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hk(t){var e=ZE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&JE(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yy(n,s);var o=Yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dk=qn&&"documentMode"in document&&11>=document.documentMode,Ts=null,ip=null,Ia=null,sp=!1;function Xy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sp||Ts==null||Ts!==uc(r)||(r=Ts,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&qa(Ia,r)||(Ia=r,r=gc(ip,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},zd={},e0={};qn&&(e0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function gh(t){if(zd[t])return zd[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e0)return zd[t]=e[n];return t}var t0=gh("animationend"),n0=gh("animationiteration"),r0=gh("animationstart"),i0=gh("transitionend"),s0=new Map,Jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){s0.set(t,e),Xi(e,[t])}for(var qd=0;qd<Jy.length;qd++){var Wd=Jy[qd],fk=Wd.toLowerCase(),pk=Wd[0].toUpperCase()+Wd.slice(1);Gr(fk,"on"+pk)}Gr(t0,"onAnimationEnd");Gr(n0,"onAnimationIteration");Gr(r0,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(i0,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Zy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fC(r,e,void 0,t),t.currentTarget=null}function o0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zy(i,a,u),s=l}}}if(hc)throw t=ep,hc=!1,ep=null,t}function le(t,e){var n=e[cp];n===void 0&&(n=e[cp]=new Set);var r=t+"__bubble";n.has(r)||(a0(e,t,2,!1),n.add(r))}function Gd(t,e,n){var r=0;e&&(r|=4),a0(n,t,r,e)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[vu]){t[vu]=!0,pE.forEach(function(n){n!=="selectionchange"&&(mk.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vu]||(e[vu]=!0,Gd("selectionchange",!1,e))}}function a0(t,e,n,r){switch(qE(e)){case 1:var i=kC;break;case 4:i=NC;break;default:i=Bm}n=i.bind(null,e,n,t),i=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}NE(function(){var u=s,c=Mm(n),h=[];e:{var d=s0.get(t);if(d!==void 0){var f=zm,y=t;switch(t){case"keypress":if(ju(n)===0)break e;case"keydown":case"keyup":f=WC;break;case"focusin":y="focus",f=$d;break;case"focusout":y="blur",f=$d;break;case"beforeblur":case"afterblur":f=$d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=By;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=bC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=HC;break;case t0:case n0:case r0:f=LC;break;case i0:f=YC;break;case"scroll":f=DC;break;case"wheel":f=JC;break;case"copy":case"cut":case"paste":f=FC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=zy}var _=(e&4)!==0,E=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=Ua(p,m),I!=null&&_.push(Ga(p,I,g)))),E)break;p=p.return}0<_.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Xf&&(y=n.relatedTarget||n.fromElement)&&(mi(y)||y[Wn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?mi(y):null,y!==null&&(E=Ji(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=By,I="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=zy,I="onPointerLeave",m="onPointerEnter",p="pointer"),E=f==null?d:As(f),g=y==null?d:As(y),d=new _(I,p+"leave",f,n,c),d.target=E,d.relatedTarget=g,I=null,mi(c)===u&&(_=new _(m,p+"enter",y,n,c),_.target=g,_.relatedTarget=E,I=_),E=I,f&&y)t:{for(_=f,m=y,p=0,g=_;g;g=ls(g))p++;for(g=0,I=m;I;I=ls(I))g++;for(;0<p-g;)_=ls(_),p--;for(;0<g-p;)m=ls(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=ls(_),m=ls(m)}_=null}else _=null;f!==null&&ev(h,d,f,_,!1),y!==null&&E!==null&&ev(h,E,y,_,!0)}}e:{if(d=u?As(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var A=sk;else if(Gy(d))if(YE)A=uk;else{A=ak;var C=ok}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=lk);if(A&&(A=A(t,u))){QE(h,A,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Gf(d,"number",d.value)}switch(C=u?As(u):window,t){case"focusin":(Gy(C)||C.contentEditable==="true")&&(Ts=C,ip=u,Ia=null);break;case"focusout":Ia=ip=Ts=null;break;case"mousedown":sp=!0;break;case"contextmenu":case"mouseup":case"dragend":sp=!1,Xy(h,n,c);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":Xy(h,n,c)}var N;if(Wm)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Es?KE(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(GE&&n.locale!=="ko"&&(Es||M!=="onCompositionStart"?M==="onCompositionEnd"&&Es&&(N=WE()):(gr=c,jm="value"in gr?gr.value:gr.textContent,Es=!0)),C=gc(u,M),0<C.length&&(M=new jy(M,t,null,n,c),h.push({event:M,listeners:C}),N?M.data=N:(N=HE(n),N!==null&&(M.data=N)))),(N=ek?tk(t,n):nk(t,n))&&(u=gc(u,"onBeforeInput"),0<u.length&&(c=new jy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}o0(h,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=Ua(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ev(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ua(n,s),l!=null&&o.unshift(Ga(n,l,a))):i||(l=Ua(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gk=/\r\n?/g,_k=/\u0000|\uFFFD/g;function tv(t){return(typeof t=="string"?t:""+t).replace(gk,`
`).replace(_k,"")}function wu(t,e,n){if(e=tv(e),tv(t)!==e&&n)throw Error(R(425))}function _c(){}var op=null,ap=null;function lp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var up=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(wk)}:up;function wk(t){setTimeout(function(){throw t})}function Hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),_n="__reactFiber$"+Io,Ka="__reactProps$"+Io,Wn="__reactContainer$"+Io,cp="__reactEvents$"+Io,Ik="__reactListeners$"+Io,Ek="__reactHandles$"+Io;function mi(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rv(t);t!==null;){if(n=t[_n])return n;t=rv(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[_n]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function _h(t){return t[Ka]||null}var hp=[],Rs=-1;function Kr(t){return{current:t}}function he(t){0>Rs||(t.current=hp[Rs],hp[Rs]=null,Rs--)}function se(t,e){Rs++,hp[Rs]=t.current,t.current=e}var br={},ht=Kr(br),Nt=Kr(!1),Di=br;function Ys(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function yc(){he(Nt),he(ht)}function iv(t,e,n){if(ht.current!==br)throw Error(R(168));se(ht,e),se(Nt,n)}function l0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,oC(t)||"Unknown",i));return ye({},n,r)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Di=ht.current,se(ht,t),se(Nt,Nt.current),!0}function sv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=l0(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,he(Nt),he(ht),se(ht,t)):he(Nt),se(Nt,n)}var On=null,yh=!1,Qd=!1;function u0(t){On===null?On=[t]:On.push(t)}function Tk(t){yh=!0,u0(t)}function Hr(){if(!Qd&&On!==null){Qd=!0;var t=0,e=ne;try{var n=On;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,yh=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),VE(Fm,Hr),i}finally{ne=e,Qd=!1}}return null}var Ps=[],Cs=0,wc=null,Ic=0,Gt=[],Kt=0,xi=null,Ln=1,Mn="";function oi(t,e){Ps[Cs++]=Ic,Ps[Cs++]=wc,wc=t,Ic=e}function c0(t,e,n){Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=xi,xi=t;var r=Ln;t=Mn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-un(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function Km(t){t.return!==null&&(oi(t,1),c0(t,1,0))}function Hm(t){for(;t===wc;)wc=Ps[--Cs],Ps[Cs]=null,Ic=Ps[--Cs],Ps[Cs]=null;for(;t===xi;)xi=Gt[--Kt],Gt[Kt]=null,Mn=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null}var Ut=null,Mt=null,de=!1,an=null;function h0(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Mt=null,!0):!1;default:return!1}}function dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fp(t){if(de){var e=Mt;if(e){var n=e;if(!ov(t,e)){if(dp(t))throw Error(R(418));e=Sr(n.nextSibling);var r=Ut;e&&ov(t,e)?h0(r,n):(t.flags=t.flags&-4097|2,de=!1,Ut=t)}}else{if(dp(t))throw Error(R(418));t.flags=t.flags&-4097|2,de=!1,Ut=t}}}function av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Iu(t){if(t!==Ut)return!1;if(!de)return av(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lp(t.type,t.memoizedProps)),e&&(e=Mt)){if(dp(t))throw d0(),Error(R(418));for(;e;)h0(t,e),e=Sr(e.nextSibling)}if(av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ut?Sr(t.stateNode.nextSibling):null;return!0}function d0(){for(var t=Mt;t;)t=Sr(t.nextSibling)}function Xs(){Mt=Ut=null,de=!1}function Qm(t){an===null?an=[t]:an.push(t)}var Sk=Xn.ReactCurrentBatchConfig;function sn(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ec=Kr(null),Tc=null,ks=null,Ym=null;function Xm(){Ym=ks=Tc=null}function Jm(t){var e=Ec.current;he(Ec),t._currentValue=e}function pp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Tc=t,Ym=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(Tc===null)throw Error(R(308));ks=t,Tc.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var gi=null;function Zm(t){gi===null?gi=[t]:gi.push(t)}function f0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function zu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=ye({},h,d);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=h}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var m0=new fE.Component().refs;function mp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vh={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Pr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(cn(e,t,i,r),zu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Pr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(cn(e,t,i,r),zu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Pr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(cn(e,t,r,n),zu(e,t,r))}};function cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function g0(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=Dt(e)?Di:ht.current,r=e.contextTypes,s=(r=r!=null)?Ys(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vh.enqueueReplaceState(e,e.state,null)}function gp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=m0,eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=Dt(e)?Di:ht.current,i.context=Ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vh.enqueueReplaceState(i,i.state,null),Sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===m0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Eu(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dv(t){var e=t._init;return e(t._payload)}function _0(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Cr(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,I){return p===null||p.tag!==6?(p=nf(g,m.mode,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,I){var A=g.type;return A===Is?c(m,p,g.props.children,I,g.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&dv(A)===p.type)?(I=i(p,g.props),I.ref=Wo(m,p,g),I.return=m,I):(I=Qu(g.type,g.key,g.props,null,m.mode,I),I.ref=Wo(m,p,g),I.return=m,I)}function u(m,p,g,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=rf(g,m.mode,I),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,I,A){return p===null||p.tag!==7?(p=Ai(g,m.mode,I,A),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hu:return g=Qu(p.type,p.key,p.props,null,m.mode,g),g.ref=Wo(m,null,p),g.return=m,g;case ws:return p=rf(p,m.mode,g),p.return=m,p;case cr:var I=p._init;return h(m,I(p._payload),g)}if(sa(p)||$o(p))return p=Ai(p,m.mode,g,null),p.return=m,p;Eu(m,p)}return null}function d(m,p,g,I){var A=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(m,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hu:return g.key===A?l(m,p,g,I):null;case ws:return g.key===A?u(m,p,g,I):null;case cr:return A=g._init,d(m,p,A(g._payload),I)}if(sa(g)||$o(g))return A!==null?null:c(m,p,g,I,null);Eu(m,g)}return null}function f(m,p,g,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(p,m,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case hu:return m=m.get(I.key===null?g:I.key)||null,l(p,m,I,A);case ws:return m=m.get(I.key===null?g:I.key)||null,u(p,m,I,A);case cr:var C=I._init;return f(m,p,g,C(I._payload),A)}if(sa(I)||$o(I))return m=m.get(g)||null,c(p,m,I,A,null);Eu(p,I)}return null}function y(m,p,g,I){for(var A=null,C=null,N=p,M=p=0,ie=null;N!==null&&M<g.length;M++){N.index>M?(ie=N,N=null):ie=N.sibling;var G=d(m,N,g[M],I);if(G===null){N===null&&(N=ie);break}t&&N&&G.alternate===null&&e(m,N),p=s(G,p,M),C===null?A=G:C.sibling=G,C=G,N=ie}if(M===g.length)return n(m,N),de&&oi(m,M),A;if(N===null){for(;M<g.length;M++)N=h(m,g[M],I),N!==null&&(p=s(N,p,M),C===null?A=N:C.sibling=N,C=N);return de&&oi(m,M),A}for(N=r(m,N);M<g.length;M++)ie=f(N,m,M,g[M],I),ie!==null&&(t&&ie.alternate!==null&&N.delete(ie.key===null?M:ie.key),p=s(ie,p,M),C===null?A=ie:C.sibling=ie,C=ie);return t&&N.forEach(function(nn){return e(m,nn)}),de&&oi(m,M),A}function _(m,p,g,I){var A=$o(g);if(typeof A!="function")throw Error(R(150));if(g=A.call(g),g==null)throw Error(R(151));for(var C=A=null,N=p,M=p=0,ie=null,G=g.next();N!==null&&!G.done;M++,G=g.next()){N.index>M?(ie=N,N=null):ie=N.sibling;var nn=d(m,N,G.value,I);if(nn===null){N===null&&(N=ie);break}t&&N&&nn.alternate===null&&e(m,N),p=s(nn,p,M),C===null?A=nn:C.sibling=nn,C=nn,N=ie}if(G.done)return n(m,N),de&&oi(m,M),A;if(N===null){for(;!G.done;M++,G=g.next())G=h(m,G.value,I),G!==null&&(p=s(G,p,M),C===null?A=G:C.sibling=G,C=G);return de&&oi(m,M),A}for(N=r(m,N);!G.done;M++,G=g.next())G=f(N,m,M,G.value,I),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?M:G.key),p=s(G,p,M),C===null?A=G:C.sibling=G,C=G);return t&&N.forEach(function(Fo){return e(m,Fo)}),de&&oi(m,M),A}function E(m,p,g,I){if(typeof g=="object"&&g!==null&&g.type===Is&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case hu:e:{for(var A=g.key,C=p;C!==null;){if(C.key===A){if(A=g.type,A===Is){if(C.tag===7){n(m,C.sibling),p=i(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&dv(A)===C.type){n(m,C.sibling),p=i(C,g.props),p.ref=Wo(m,C,g),p.return=m,m=p;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===Is?(p=Ai(g.props.children,m.mode,I,g.key),p.return=m,m=p):(I=Qu(g.type,g.key,g.props,null,m.mode,I),I.ref=Wo(m,p,g),I.return=m,m=I)}return o(m);case ws:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=rf(g,m.mode,I),p.return=m,m=p}return o(m);case cr:return C=g._init,E(m,p,C(g._payload),I)}if(sa(g))return y(m,p,g,I);if($o(g))return _(m,p,g,I);Eu(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=nf(g,m.mode,I),p.return=m,m=p),o(m)):n(m,p)}return E}var Js=_0(!0),y0=_0(!1),Vl={},kn=Kr(Vl),Ha=Kr(Vl),Qa=Kr(Vl);function _i(t){if(t===Vl)throw Error(R(174));return t}function tg(t,e){switch(se(Qa,e),se(Ha,t),se(kn,Vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}he(kn),se(kn,e)}function Zs(){he(kn),he(Ha),he(Qa)}function v0(t){_i(Qa.current);var e=_i(kn.current),n=Hf(e,t.type);e!==n&&(se(Ha,t),se(kn,n))}function ng(t){Ha.current===t&&(he(kn),he(Ha))}var me=Kr(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function rg(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var qu=Xn.ReactCurrentDispatcher,Xd=Xn.ReactCurrentBatchConfig,bi=0,ge=null,Oe=null,Be=null,Rc=!1,Ea=!1,Ya=0,Ak=0;function st(){throw Error(R(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(bi=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?kk:Nk,t=n(r,i),Ea){s=0;do{if(Ea=!1,Ya=0,25<=s)throw Error(R(301));s+=1,Be=Oe=null,e.updateQueue=null,qu.current=Dk,t=n(r,i)}while(Ea)}if(qu.current=Pc,e=Oe!==null&&Oe.next!==null,bi=0,Be=Oe=ge=null,Rc=!1,e)throw Error(R(300));return t}function og(){var t=Ya!==0;return Ya=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ge.memoizedState=Be=t:Be=Be.next=t,Be}function Zt(){if(Oe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Be===null?ge.memoizedState:Be.next;if(e!==null)Be=e,Oe=t;else{if(t===null)throw Error(R(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?ge.memoizedState=Be=t:Be=Be.next=t}return Be}function Xa(t,e){return typeof e=="function"?e(t):e}function Jd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,Vi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function w0(){}function I0(t,e){var n=ge,r=Zt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,ag(S0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ja(9,T0.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(R(349));bi&30||E0(n,e,i)}return i}function E0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,r){e.value=n,e.getSnapshot=r,A0(e)&&R0(t)}function S0(t,e,n){return n(function(){A0(e)&&R0(t)})}function A0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function R0(t){var e=Gn(t,1);e!==null&&cn(e,t,1,-1)}function fv(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,ge,t),[e.memoizedState,t]}function Ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P0(){return Zt().memoizedState}function Wu(t,e,n,r){var i=gn();ge.flags|=t,i.memoizedState=Ja(1|e,n,void 0,r===void 0?null:r)}function wh(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=Ja(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Ja(1|e,n,s,r)}function pv(t,e){return Wu(8390656,8,t,e)}function ag(t,e){return wh(2048,8,t,e)}function C0(t,e){return wh(4,2,t,e)}function k0(t,e){return wh(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D0(t,e,n){return n=n!=null?n.concat([t]):null,wh(4,4,N0.bind(null,e,t),n)}function lg(){}function x0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function b0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return bi&21?(hn(n,e)||(n=ME(),ge.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Rk(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Xd.transition;Xd.transition={};try{t(!1),e()}finally{ne=n,Xd.transition=r}}function O0(){return Zt().memoizedState}function Pk(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L0(t))M0(e,n);else if(n=f0(t,e,n,r),n!==null){var i=gt();cn(n,t,r,i),F0(n,e,r)}}function Ck(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L0(t))M0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=e.interleaved;l===null?(i.next=i,Zm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=f0(t,e,i,r),n!==null&&(i=gt(),cn(n,t,r,i),F0(n,e,r))}}function L0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function M0(t,e){Ea=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}var Pc={readContext:Jt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},kk={readContext:Jt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Pk.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:fv,useDebugValue:lg,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=fv(!1),e=t[0];return t=Rk.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=gn();if(de){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ze===null)throw Error(R(349));bi&30||E0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pv(S0.bind(null,r,s,t),[t]),r.flags|=2048,Ja(9,T0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=ze.identifierPrefix;if(de){var n=Mn,r=Ln;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ak++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nk={readContext:Jt,useCallback:x0,useContext:Jt,useEffect:ag,useImperativeHandle:D0,useInsertionEffect:C0,useLayoutEffect:k0,useMemo:b0,useReducer:Jd,useRef:P0,useState:function(){return Jd(Xa)},useDebugValue:lg,useDeferredValue:function(t){var e=Zt();return V0(e,Oe.memoizedState,t)},useTransition:function(){var t=Jd(Xa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:I0,useId:O0,unstable_isNewReconciler:!1},Dk={readContext:Jt,useCallback:x0,useContext:Jt,useEffect:ag,useImperativeHandle:D0,useInsertionEffect:C0,useLayoutEffect:k0,useMemo:b0,useReducer:Zd,useRef:P0,useState:function(){return Zd(Xa)},useDebugValue:lg,useDeferredValue:function(t){var e=Zt();return Oe===null?e.memoizedState=t:V0(e,Oe.memoizedState,t)},useTransition:function(){var t=Zd(Xa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:I0,useId:O0,unstable_isNewReconciler:!1};function eo(t,e){try{var n="",r=e;do n+=sC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xk=typeof WeakMap=="function"?WeakMap:Map;function U0(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,Pp=r),_p(t,e)},n}function $0(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_p(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_p(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gk.bind(null,t,e,n),e.then(t,t))}function gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var bk=Xn.ReactCurrentOwner,Rt=!1;function dt(t,e,n,r){e.child=t===null?y0(e,null,n,r):Js(e,t.child,n,r)}function yv(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(de&&n&&Km(e),e.flags|=1,dt(t,e,r,i),e.child)}function vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,B0(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function B0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return yp(t,e,n,r,i)}function j0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Ds,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Ds,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Ds,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Ds,Ot),Ot|=r;return dt(t,e,i,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yp(t,e,n,r,i){var s=Dt(n)?Di:ht.current;return s=Ys(e,s),Fs(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(de&&r&&Km(e),e.flags|=1,dt(t,e,n,i),e.child)}function wv(t,e,n,r,i){if(Dt(n)){var s=!0;vc(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Gu(t,e),g0(e,n,r),gp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=Dt(n)?Di:ht.current,u=Ys(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hv(e,o,r,u),hr=!1;var d=e.memoizedState;o.state=d,Sc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Nt.current||hr?(typeof c=="function"&&(mp(e,n,c,r),l=e.memoizedState),(a=hr||cv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=Dt(n)?Di:ht.current,l=Ys(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hv(e,o,r,l),hr=!1,d=e.memoizedState,o.state=d,Sc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Nt.current||hr?(typeof f=="function"&&(mp(e,n,f,r),y=e.memoizedState),(u=hr||cv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vp(t,e,n,r,s,i)}function vp(t,e,n,r,i,s){z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sv(e,n,!1),Kn(t,e,s);r=e.stateNode,bk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&sv(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?iv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iv(t,e.context,!1),tg(t,e.containerInfo)}function Iv(t,e,n,r,i){return Xs(),Qm(i),e.flags|=256,dt(t,e,n,r),e.child}var wp={dehydrated:null,treeContext:null,retryLane:0};function Ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function W0(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Th(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ip(n),e.memoizedState=wp,t):ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wp,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ug(t,e){return e=Th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&Qm(r),Js(e,t.child,null,n),t=ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ef(Error(R(422))),Tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Th({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Ip(o),e.memoizedState=wp,s);if(!(e.mode&1))return Tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=ef(s,r,void 0),Tu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),cn(r,t,i,-1))}return mg(),r=ef(Error(R(421))),Tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Kk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Sr(i.nextSibling),Ut=e,de=!0,an=null,t!==null&&(Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=xi,Ln=t.id,Mn=t.overflow,xi=e),e=ug(e,r.children),e.flags|=4096,e)}function Ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pp(t.return,e,n)}function tf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,n,e);else if(t.tag===19)Ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:q0(e),Xs();break;case 5:v0(e);break;case 1:Dt(e.type)&&vc(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?W0(t,e,n):(se(me,me.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,j0(t,e,n)}return Kn(t,e,n)}var K0,Ep,H0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ep=function(){};H0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_i(kn.current);var s=null;switch(n){case"input":i=qf(t,i),r=qf(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_c)}Qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Q0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Dt(e.type)&&yc(),ot(e),null;case 3:return r=e.stateNode,Zs(),he(Nt),he(ht),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Np(an),an=null))),Ep(t,e),ot(e),null;case 5:ng(e);var i=_i(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)H0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ot(e),null}if(t=_i(kn.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)le(aa[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Dy(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":by(r,s),le("invalid",r)}Qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":du(r),xy(r,s,!0);break;case"textarea":du(r),Vy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=EE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Ka]=r,K0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yf(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)le(aa[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Dy(t,r),i=qf(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":by(t,r),i=Kf(t,r),le("invalid",t);break;default:i=r}Qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?AE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&TE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(t,l):typeof l=="number"&&Fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&bm(t,s,l,o))}switch(n){case"input":du(t),xy(t,r,!1);break;case"textarea":du(t),Vy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=_i(Qa.current),_i(kn.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return ot(e),null;case 13:if(he(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Mt!==null&&e.mode&1&&!(e.flags&128))d0(),Xs(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[_n]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else an!==null&&(Np(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Le===0&&(Le=3):mg())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Zs(),Ep(t,e),t===null&&Wa(e.stateNode.containerInfo),ot(e),null;case 10:return Jm(e.type._context),ot(e),null;case 17:return Dt(e.type)&&yc(),ot(e),null;case 19:if(he(me),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Go(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ac(t),o!==null){for(e.flags|=128,Go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>to&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ac(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return ot(e),null}else 2*Pe()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Mk(t,e){switch(Hm(e),e.tag){case 1:return Dt(e.type)&&yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),he(Nt),he(ht),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(he(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(me),null;case 4:return Zs(),null;case 10:return Jm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Su=!1,lt=!1,Fk=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Tp(t,e,n){try{n()}catch(r){we(t,e,r)}}var Tv=!1;function Uk(t,e){if(op=pc,t=ZE(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ap={focusedElem:t,selectionRange:n},pc=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,E=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:sn(e.type,_),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(I){we(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Tv,Tv=!1,y}function Ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tp(e,n,s)}i=i.next}while(i!==r)}}function Ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y0(t){var e=t.alternate;e!==null&&(t.alternate=null,Y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Ka],delete e[cp],delete e[Ik],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X0(t){return t.tag===5||t.tag===3||t.tag===4}function Sv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_c));else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}function Rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}var Qe=null,on=!1;function sr(t,e,n){for(n=n.child;n!==null;)J0(t,e,n),n=n.sibling}function J0(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(fh,n)}catch{}switch(n.tag){case 5:lt||Ns(n,e);case 6:var r=Qe,i=on;Qe=null,sr(t,e,n),Qe=r,on=i,Qe!==null&&(on?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(on?(t=Qe,n=n.stateNode,t.nodeType===8?Hd(t.parentNode,n):t.nodeType===1&&Hd(t,n),ja(t)):Hd(Qe,n.stateNode));break;case 4:r=Qe,i=on,Qe=n.stateNode.containerInfo,on=!0,sr(t,e,n),Qe=r,on=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tp(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!lt&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,sr(t,e,n),lt=r):sr(t,e,n);break;default:sr(t,e,n)}}function Av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fk),e.forEach(function(r){var i=Hk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,on=!1;break e;case 3:Qe=a.stateNode.containerInfo,on=!0;break e;case 4:Qe=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(Qe===null)throw Error(R(160));J0(s,o,i),Qe=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z0(e,t),e=e.sibling}function Z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),mn(t),r&4){try{Ta(3,t,t.return),Ih(3,t)}catch(_){we(t,t.return,_)}try{Ta(5,t,t.return)}catch(_){we(t,t.return,_)}}break;case 1:rn(e,t),mn(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(rn(e,t),mn(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var i=t.stateNode;try{Fa(i,"")}catch(_){we(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wE(i,s),Yf(a,o);var u=Yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?AE(i,h):c==="dangerouslySetInnerHTML"?TE(i,h):c==="children"?Fa(i,h):bm(i,c,h,u)}switch(a){case"input":Wf(i,s);break;case"textarea":IE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Vs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(i,!!s.multiple,s.defaultValue,!0):Vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(_){we(t,t.return,_)}}break;case 6:if(rn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){we(t,t.return,_)}}break;case 3:if(rn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(_){we(t,t.return,_)}break;case 4:rn(e,t),mn(t);break;case 13:rn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=Pe())),r&4&&Av(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,rn(e,t),lt=u):rn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ta(4,d,d.return);break;case 1:Ns(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){we(r,n,_)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){Pv(h);continue}}f!==null?(f.return=d,O=f):Pv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=SE("display",o))}catch(_){we(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){we(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rn(e,t),mn(t),r&4&&Av(t);break;case 21:break;default:rn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=Sv(t);Rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sv(t);Ap(t,a,o);break;default:throw Error(R(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $k(t,e,n){O=t,eT(t)}function eT(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Su;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Su;var u=lt;if(Su=o,(lt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Cv(i):l!==null?(l.return=o,O=l):Cv(i);for(;s!==null;)O=s,eT(s),s=s.sibling;O=i,Su=a,lt=u}Rv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Rv(t)}}function Rv(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||Ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ja(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}lt||e.flags&512&&Sp(e)}catch(d){we(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Pv(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Cv(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ih(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Sp(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Sp(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var Bk=Math.ceil,Cc=Xn.ReactCurrentDispatcher,cg=Xn.ReactCurrentOwner,Xt=Xn.ReactCurrentBatchConfig,Z=0,ze=null,be=null,Ze=0,Ot=0,Ds=Kr(0),Le=0,Za=null,Vi=0,Eh=0,hg=0,Sa=null,At=null,dg=0,to=1/0,Vn=null,kc=!1,Pp=null,Rr=null,Au=!1,_r=null,Nc=0,Aa=0,Cp=null,Ku=-1,Hu=0;function gt(){return Z&6?Pe():Ku!==-1?Ku:Ku=Pe()}function Pr(t){return t.mode&1?Z&2&&Ze!==0?Ze&-Ze:Sk.transition!==null?(Hu===0&&(Hu=ME()),Hu):(t=ne,t!==0||(t=window.event,t=t===void 0?16:qE(t.type)),t):1}function cn(t,e,n,r){if(50<Aa)throw Aa=0,Cp=null,Error(R(185));Dl(t,n,r),(!(Z&2)||t!==ze)&&(t===ze&&(!(Z&2)&&(Eh|=n),Le===4&&fr(t,Ze)),xt(t,r),n===1&&Z===0&&!(e.mode&1)&&(to=Pe()+500,yh&&Hr()))}function xt(t,e){var n=t.callbackNode;SC(t,e);var r=fc(t,t===ze?Ze:0);if(r===0)n!==null&&My(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&My(n),e===1)t.tag===0?Tk(kv.bind(null,t)):u0(kv.bind(null,t)),vk(function(){!(Z&6)&&Hr()}),n=null;else{switch(FE(r)){case 1:n=Fm;break;case 4:n=OE;break;case 16:n=dc;break;case 536870912:n=LE;break;default:n=dc}n=lT(n,tT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tT(t,e){if(Ku=-1,Hu=0,Z&6)throw Error(R(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=fc(t,t===ze?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var i=Z;Z|=2;var s=rT();(ze!==t||Ze!==e)&&(Vn=null,to=Pe()+500,Si(t,e));do try{qk();break}catch(a){nT(t,a)}while(1);Xm(),Cc.current=s,Z=i,be!==null?e=0:(ze=null,Ze=0,e=Le)}if(e!==0){if(e===2&&(i=tp(t),i!==0&&(r=i,e=kp(t,i))),e===1)throw n=Za,Si(t,0),fr(t,r),xt(t,Pe()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!jk(i)&&(e=Dc(t,r),e===2&&(s=tp(t),s!==0&&(r=s,e=kp(t,s))),e===1))throw n=Za,Si(t,0),fr(t,r),xt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:ai(t,At,Vn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=dg+500-Pe(),10<e)){if(fc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=up(ai.bind(null,t,At,Vn),e);break}ai(t,At,Vn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bk(r/1960))-r,10<r){t.timeoutHandle=up(ai.bind(null,t,At,Vn),r);break}ai(t,At,Vn);break;case 5:ai(t,At,Vn);break;default:throw Error(R(329))}}}return xt(t,Pe()),t.callbackNode===n?tT.bind(null,t):null}function kp(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=At,At=n,e!==null&&Np(e)),t}function Np(t){At===null?At=t:At.push.apply(At,t)}function jk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~hg,e&=~Eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function kv(t){if(Z&6)throw Error(R(327));Us();var e=fc(t,0);if(!(e&1))return xt(t,Pe()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=tp(t);r!==0&&(e=r,n=kp(t,r))}if(n===1)throw n=Za,Si(t,0),fr(t,e),xt(t,Pe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ai(t,At,Vn),xt(t,Pe()),null}function fg(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(to=Pe()+500,yh&&Hr())}}function Oi(t){_r!==null&&_r.tag===0&&!(Z&6)&&Us();var e=Z;Z|=1;var n=Xt.transition,r=ne;try{if(Xt.transition=null,ne=1,t)return t()}finally{ne=r,Xt.transition=n,Z=e,!(Z&6)&&Hr()}}function pg(){Ot=Ds.current,he(Ds)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yc();break;case 3:Zs(),he(Nt),he(ht),rg();break;case 5:ng(r);break;case 4:Zs();break;case 13:he(me);break;case 19:he(me);break;case 10:Jm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(ze=t,be=t=Cr(t.current,null),Ze=Ot=e,Le=0,Za=null,hg=Eh=Vi=0,At=Sa=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function nT(t,e){do{var n=be;try{if(Xm(),qu.current=Pc,Rc){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rc=!1}if(bi=0,Be=Oe=ge=null,Ea=!1,Ya=0,cg.current=null,n===null||n.return===null){Le=1,Za=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=gv(o);if(f!==null){f.flags&=-257,_v(f,o,a,s,e),f.mode&1&&mv(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){mv(s,u,e),mg();break e}l=Error(R(426))}}else if(de&&a.mode&1){var E=gv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),_v(E,o,a,s,e),Qm(eo(l,a));break e}}s=l=eo(l,a),Le!==4&&(Le=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=U0(s,l,e);lv(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Rr===null||!Rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=$0(s,a,e);lv(s,I);break e}}s=s.return}while(s!==null)}sT(n)}catch(A){e=A,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function rT(){var t=Cc.current;return Cc.current=Pc,t===null?Pc:t}function mg(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(Vi&268435455)&&!(Eh&268435455)||fr(ze,Ze)}function Dc(t,e){var n=Z;Z|=2;var r=rT();(ze!==t||Ze!==e)&&(Vn=null,Si(t,e));do try{zk();break}catch(i){nT(t,i)}while(1);if(Xm(),Z=n,Cc.current=r,be!==null)throw Error(R(261));return ze=null,Ze=0,Le}function zk(){for(;be!==null;)iT(be)}function qk(){for(;be!==null&&!mC();)iT(be)}function iT(t){var e=aT(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?sT(t):be=e,cg.current=null}function sT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mk(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,be=null;return}}else if(n=Lk(n,e,Ot),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Le===0&&(Le=5)}function ai(t,e,n){var r=ne,i=Xt.transition;try{Xt.transition=null,ne=1,Wk(t,e,n,r)}finally{Xt.transition=i,ne=r}return null}function Wk(t,e,n,r){do Us();while(_r!==null);if(Z&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AC(t,s),t===ze&&(be=ze=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,lT(dc,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=ne;ne=1;var a=Z;Z|=4,cg.current=null,Uk(t,n),Z0(n,t),hk(ap),pc=!!op,ap=op=null,t.current=n,$k(n),gC(),Z=a,ne=o,Xt.transition=s}else t.current=n;if(Au&&(Au=!1,_r=t,Nc=i),s=t.pendingLanes,s===0&&(Rr=null),vC(n.stateNode),xt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=Pp,Pp=null,t;return Nc&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Cp?Aa++:(Aa=0,Cp=t):Aa=0,Hr(),null}function Us(){if(_r!==null){var t=FE(Nc),e=Xt.transition,n=ne;try{if(Xt.transition=null,ne=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Nc=0,Z&6)throw Error(R(331));var i=Z;for(Z|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Ta(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,f=c.return;if(Y0(c),c===u){O=null;break}if(d!==null){d.return=f,O=d;break}O=f}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ih(9,a)}}catch(A){we(a,a.return,A)}if(a===o){O=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,O=I;break e}O=a.return}}if(Z=i,Hr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(fh,t)}catch{}r=!0}return r}finally{ne=n,Xt.transition=e}}return!1}function Nv(t,e,n){e=eo(n,e),e=U0(t,e,1),t=Ar(t,e,1),e=gt(),t!==null&&(Dl(t,1,e),xt(t,e))}function we(t,e,n){if(t.tag===3)Nv(t,t,n);else for(;e!==null;){if(e.tag===3){Nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=eo(n,t),t=$0(e,t,1),e=Ar(e,t,1),t=gt(),e!==null&&(Dl(e,1,t),xt(e,t));break}}e=e.return}}function Gk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ze&n)===n&&(Le===4||Le===3&&(Ze&130023424)===Ze&&500>Pe()-dg?Si(t,0):hg|=n),xt(t,e)}function oT(t,e){e===0&&(t.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var n=gt();t=Gn(t,e),t!==null&&(Dl(t,e,n),xt(t,n))}function Kk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oT(t,n)}function Hk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),oT(t,n)}var aT;aT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Ok(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,de&&e.flags&1048576&&c0(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gu(t,e),t=e.pendingProps;var i=Ys(e,ht.current);Fs(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,vc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=vh,e.stateNode=i,i._reactInternals=e,gp(e,r,t,n),e=vp(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Km(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Yk(r),t=sn(r,t),i){case 0:e=yp(null,e,r,t,n);break e;case 1:e=wv(null,e,r,t,n);break e;case 11:e=yv(null,e,r,t,n);break e;case 14:e=vv(null,e,r,sn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),yp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),wv(t,e,r,i,n);case 3:e:{if(q0(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p0(t,e),Sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=eo(Error(R(423)),e),e=Iv(t,e,r,n,i);break e}else if(r!==i){i=eo(Error(R(424)),e),e=Iv(t,e,r,n,i);break e}else for(Mt=Sr(e.stateNode.containerInfo.firstChild),Ut=e,de=!0,an=null,n=y0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),r===i){e=Kn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return v0(e),t===null&&fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lp(r,i)?o=null:s!==null&&lp(r,s)&&(e.flags|=32),z0(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&fp(e),null;case 13:return W0(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),yv(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(Ec,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=Jt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),vv(t,e,r,i,n);case 15:return B0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Gu(t,e),e.tag=1,Dt(r)?(t=!0,vc(e)):t=!1,Fs(e,n),g0(e,r,i),gp(e,r,i,n),vp(null,e,r,!0,t,n);case 19:return G0(t,e,n);case 22:return j0(t,e,n)}throw Error(R(156,e.tag))};function lT(t,e){return VE(t,e)}function Qk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new Qk(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yk(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Om)return 11;if(t===Lm)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Ai(n.children,i,s,e);case Vm:o=8,i|=8;break;case $f:return t=Qt(12,n,e,i|2),t.elementType=$f,t.lanes=s,t;case Bf:return t=Qt(13,n,e,i),t.elementType=Bf,t.lanes=s,t;case jf:return t=Qt(19,n,e,i),t.elementType=jf,t.lanes=s,t;case _E:return Th(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mE:o=10;break e;case gE:o=9;break e;case Om:o=11;break e;case Lm:o=14;break e;case cr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Th(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=_E,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _g(t,e,n,r,i,s,o,a,l){return t=new Xk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function Jk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uT(t){if(!t)return br;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Dt(n))return l0(t,n,e)}return e}function cT(t,e,n,r,i,s,o,a,l){return t=_g(n,r,!0,t,i,s,o,a,l),t.context=uT(null),n=t.current,r=gt(),i=Pr(n),s=Bn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Dl(t,i,r),xt(t,r),t}function Sh(t,e,n,r){var i=e.current,s=gt(),o=Pr(i);return n=uT(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(cn(t,i,o,s),zu(t,i,o)),o}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yg(t,e){Dv(t,e),(t=t.alternate)&&Dv(t,e)}function Zk(){return null}var hT=typeof reportError=="function"?reportError:function(t){console.error(t)};function vg(t){this._internalRoot=t}Ah.prototype.render=vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Sh(t,e,null,null)};Ah.prototype.unmount=vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){Sh(null,t,null,null)}),e[Wn]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=BE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&zE(t)}};function wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xv(){}function eN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xc(o);s.call(u)}}var o=cT(e,r,t,0,null,!1,!1,"",xv);return t._reactRootContainer=o,t[Wn]=o.current,Wa(t.nodeType===8?t.parentNode:t),Oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xc(l);a.call(u)}}var l=_g(t,0,!1,null,null,!1,!1,"",xv);return t._reactRootContainer=l,t[Wn]=l.current,Wa(t.nodeType===8?t.parentNode:t),Oi(function(){Sh(e,l,n,r)}),l}function Ph(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xc(o);a.call(l)}}Sh(e,o,t,i)}else o=eN(n,e,t,i,r);return xc(o)}UE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Um(e,n|1),xt(e,Pe()),!(Z&6)&&(to=Pe()+500,Hr()))}break;case 13:Oi(function(){var r=Gn(t,1);if(r!==null){var i=gt();cn(r,t,1,i)}}),yg(t,1)}};$m=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=gt();cn(e,t,134217728,n)}yg(t,134217728)}};$E=function(t){if(t.tag===13){var e=Pr(t),n=Gn(t,e);if(n!==null){var r=gt();cn(n,t,e,r)}yg(t,e)}};BE=function(){return ne};jE=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Jf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_h(r);if(!i)throw Error(R(90));vE(r),Wf(r,i)}}}break;case"textarea":IE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};CE=fg;kE=Oi;var tN={usingClientEntryPoint:!1,Events:[bl,As,_h,RE,PE,fg]},Ko={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nN={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||Zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{fh=Ru.inject(nN),Cn=Ru}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tN;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(e))throw Error(R(200));return Jk(t,e,null,n)};qt.createRoot=function(t,e){if(!wg(t))throw Error(R(299));var n=!1,r="",i=hT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_g(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Wa(t.nodeType===8?t.parentNode:t),new vg(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=xE(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Oi(t)};qt.hydrate=function(t,e,n){if(!Rh(e))throw Error(R(200));return Ph(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!wg(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cT(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};qt.render=function(t,e,n){if(!Rh(e))throw Error(R(200));return Ph(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Rh(t))throw Error(R(40));return t._reactRootContainer?(Oi(function(){Ph(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};qt.unstable_batchedUpdates=fg;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rh(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Ph(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";function dT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT)}catch(t){console.error(t)}}dT(),cE.exports=qt;var rN=cE.exports,bv=rN;Ff.createRoot=bv.createRoot,Ff.hydrateRoot=bv.hydrateRoot;/**
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
 *//**
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
 */const fT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new sN;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oN=function(t){const e=fT(t);return pT.encodeByteArray(e,!0)},bc=function(t){return oN(t).replace(/\./g,"")},mT=function(t){try{return pT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aN(n)||(t[n]=Vc(t[n],e[n]));return t}function aN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function lN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const uN=()=>lN().__FIREBASE_DEFAULTS__,cN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mT(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return uN()||cN()||hN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dN=t=>{var e,n;return(n=(e=Ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fN=t=>{const e=dN(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gT=()=>{var t;return(t=Ch())===null||t===void 0?void 0:t.config},pN=t=>{var e;return(e=Ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bc(JSON.stringify(n)),bc(JSON.stringify(o)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _N(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Ig(){var t;const e=(t=Ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yN(){return typeof self=="object"&&self.self===self}function Eg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _T(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vN(){return!Ig()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function no(){try{return typeof indexedDB=="object"}catch{return!1}}function yT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function wN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const IN="FirebaseError";class et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IN,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?EN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new et(i,a,r)}}function EN(t,e){return t.replace(TN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TN=/\{\$([^}]+)}/g;/**
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
 */function Vv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function SN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ov(s)&&Ov(o)){if(!Oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ov(t){return t!==null&&typeof t=="object"}/**
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
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function la(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vT(t,e){const n=new AN(t,e);return n.subscribe.bind(n)}class AN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sf),i.error===void 0&&(i.error=sf),i.complete===void 0&&(i.complete=sf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sf(){}/**
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
 */const PN=1e3,CN=2,kN=4*60*60*1e3,NN=.5;function Lv(t,e=PN,n=CN){const r=e*Math.pow(n,t),i=Math.round(NN*r*(Math.random()-.5)*2);return Math.min(kN,r+i)}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const li="[DEFAULT]";/**
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
 */class DN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bN(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xN(t){return t===li?void 0:t}function bN(t){return t.instantiationMode==="EAGER"}/**
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
 */class VN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Sg=[];var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const wT={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ON=H.INFO,LN={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},MN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ol{constructor(e){this.name=e,this._logLevel=ON,this._logHandler=MN,this._userLogHandler=null,Sg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function FN(t){Sg.forEach(e=>{e.setLogLevel(t)})}function UN(t,e){for(const n of Sg){let r=null;e&&e.level&&(r=wT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:H[s].toLowerCase(),message:a,args:o,type:i.name})}}}const $N=(t,e)=>e.some(n=>t instanceof n);let Mv,Fv;function BN(){return Mv||(Mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jN(){return Fv||(Fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IT=new WeakMap,Dp=new WeakMap,ET=new WeakMap,of=new WeakMap,Ag=new WeakMap;function zN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&IT.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function qN(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ET.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WN(t){xp=t(xp)}function GN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return ET.set(r,e.sort?e.sort():[e]),kr(r)}:jN().includes(t)?function(...e){return t.apply(af(this),e),kr(IT.get(this))}:function(...e){return kr(t.apply(af(this),e))}}function KN(t){return typeof t=="function"?GN(t):(t instanceof IDBTransaction&&qN(t),$N(t,BN())?new Proxy(t,xp):t)}function kr(t){if(t instanceof IDBRequest)return zN(t);if(of.has(t))return of.get(t);const e=KN(t);return e!==t&&(of.set(t,e),Ag.set(e,t)),e}const af=t=>Ag.get(t);function HN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QN=["get","getKey","getAll","getAllKeys","count"],YN=["put","add","delete","clear"],lf=new Map;function Uv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lf.set(e,s),s}WN(t=>({...t,get:(e,n,r)=>Uv(e,n)||t.get(e,n,r),has:(e,n)=>!!Uv(e,n)||t.has(e,n)}));/**
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
 */class XN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bp="@firebase/app",$v="0.9.19";/**
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
 */const Li=new Ol("@firebase/app"),ZN="@firebase/app-compat",eD="@firebase/analytics-compat",tD="@firebase/analytics",nD="@firebase/app-check-compat",rD="@firebase/app-check",iD="@firebase/auth",sD="@firebase/auth-compat",oD="@firebase/database",aD="@firebase/database-compat",lD="@firebase/functions",uD="@firebase/functions-compat",cD="@firebase/installations",hD="@firebase/installations-compat",dD="@firebase/messaging",fD="@firebase/messaging-compat",pD="@firebase/performance",mD="@firebase/performance-compat",gD="@firebase/remote-config",_D="@firebase/remote-config-compat",yD="@firebase/storage",vD="@firebase/storage-compat",wD="@firebase/firestore",ID="@firebase/firestore-compat",ED="firebase",TD="10.4.0";/**
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
 */const Vr="[DEFAULT]",SD={[bp]:"fire-core",[ZN]:"fire-core-compat",[tD]:"fire-analytics",[eD]:"fire-analytics-compat",[rD]:"fire-app-check",[nD]:"fire-app-check-compat",[iD]:"fire-auth",[sD]:"fire-auth-compat",[oD]:"fire-rtdb",[aD]:"fire-rtdb-compat",[lD]:"fire-fn",[uD]:"fire-fn-compat",[cD]:"fire-iid",[hD]:"fire-iid-compat",[dD]:"fire-fcm",[fD]:"fire-fcm-compat",[pD]:"fire-perf",[mD]:"fire-perf-compat",[gD]:"fire-rc",[_D]:"fire-rc-compat",[yD]:"fire-gcs",[vD]:"fire-gcs-compat",[wD]:"fire-fst",[ID]:"fire-fst-compat","fire-js":"fire-js",[ED]:"fire-js-all"};/**
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
 */const Or=new Map,el=new Map;function Lc(t,e){try{t.container.addComponent(e)}catch(n){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function TT(t,e){t.container.addOrOverwriteComponent(e)}function en(t){const e=t.name;if(el.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,t);for(const n of Or.values())Lc(n,t);return!0}function Zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function AD(t,e,n=Vr){Zi(t,e).clearInstance(n)}function RD(){el.clear()}/**
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
 */const PD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Jn("app","Firebase",PD);/**
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
 */let CD=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}};/**
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
 */const Qr=TD;function Rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=gT()),!n)throw jn.create("no-options");const s=Or.get(i);if(s){if(Oc(n,s.options)&&Oc(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new VN(i);for(const l of el.values())o.addComponent(l);const a=new CD(n,r,o);return Or.set(i,a),a}function Pg(t=Vr){const e=Or.get(t);if(!e&&t===Vr&&gT())return Rg();if(!e)throw jn.create("no-app",{appName:t});return e}function kD(){return Array.from(Or.values())}async function ST(t){const e=t.name;Or.has(e)&&(Or.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _t(t,e,n){var r;let i=(r=SD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(a.join(" "));return}en(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function AT(t,e){if(t!==null&&typeof t!="function")throw jn.create("invalid-log-argument");UN(t,e)}function RT(t){FN(t)}/**
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
 */const ND="firebase-heartbeat-database",DD=1,tl="firebase-heartbeat-store";let uf=null;function PT(){return uf||(uf=HN(ND,DD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tl)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),uf}async function xD(t){try{return await(await PT()).transaction(tl).objectStore(tl).get(CT(t))}catch(e){if(e instanceof et)Li.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Li.warn(n.message)}}}async function Bv(t,e){try{const r=(await PT()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,CT(t)),await r.done}catch(n){if(n instanceof et)Li.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Li.warn(r.message)}}}function CT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bD=1024,VD=30*24*60*60*1e3;class OD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=VD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jv(),{heartbeatsToSend:n,unsentEntries:r}=LD(this._heartbeatsCache.heartbeats),i=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jv(){return new Date().toISOString().substring(0,10)}function LD(t,e=bD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return no()?yT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zv(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FD(t){en(new Vt("platform-logger",e=>new XN(e),"PRIVATE")),en(new Vt("heartbeat",e=>new OD(e),"PRIVATE")),_t(bp,$v,t),_t(bp,$v,"esm2017"),_t("fire-js","")}FD("");const UD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:et,SDK_VERSION:Qr,_DEFAULT_ENTRY_NAME:Vr,_addComponent:Lc,_addOrOverwriteComponent:TT,_apps:Or,_clearComponents:RD,_components:el,_getProvider:Zi,_registerComponent:en,_removeServiceInstance:AD,deleteApp:ST,getApp:Pg,getApps:kD,initializeApp:Rg,onLog:AT,registerVersion:_t,setLogLevel:RT},Symbol.toStringTag,{value:"Module"}));var $D="firebase",BD="10.4.0";/**
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
 */_t($D,BD,"app");const jD=(t,e)=>e.some(n=>t instanceof n);let qv,Wv;function zD(){return qv||(qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qD(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kT=new WeakMap,Vp=new WeakMap,NT=new WeakMap,cf=new WeakMap,Cg=new WeakMap;function WD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kT.set(n,t)}).catch(()=>{}),Cg.set(e,t),e}function GD(t){if(Vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vp.set(t,e)}let Op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KD(t){Op=t(Op)}function HD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hf(this),e,...n);return NT.set(r,e.sort?e.sort():[e]),Nr(r)}:qD().includes(t)?function(...e){return t.apply(hf(this),e),Nr(kT.get(this))}:function(...e){return Nr(t.apply(hf(this),e))}}function QD(t){return typeof t=="function"?HD(t):(t instanceof IDBTransaction&&GD(t),jD(t,zD())?new Proxy(t,Op):t)}function Nr(t){if(t instanceof IDBRequest)return WD(t);if(cf.has(t))return cf.get(t);const e=QD(t);return e!==t&&(cf.set(t,e),Cg.set(e,t)),e}const hf=t=>Cg.get(t);function YD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const XD=["get","getKey","getAll","getAllKeys","count"],JD=["put","add","delete","clear"],df=new Map;function Gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return df.set(e,s),s}KD(t=>({...t,get:(e,n,r)=>Gv(e,n)||t.get(e,n,r),has:(e,n)=>!!Gv(e,n)||t.has(e,n)}));const DT="@firebase/installations",kg="0.6.4";/**
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
 */const xT=1e4,bT=`w:${kg}`,VT="FIS_v2",ZD="https://firebaseinstallations.googleapis.com/v1",ex=60*60*1e3,tx="installations",nx="Installations";/**
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
 */const rx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mi=new Jn(tx,nx,rx);function OT(t){return t instanceof et&&t.code.includes("request-failed")}/**
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
 */function LT({projectId:t}){return`${ZD}/projects/${t}/installations`}function MT(t){return{token:t.token,requestStatus:2,expiresIn:sx(t.expiresIn),creationTime:Date.now()}}async function FT(t,e){const r=(await e.json()).error;return Mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function UT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ix(t,{refreshToken:e}){const n=UT(t);return n.append("Authorization",ox(e)),n}async function $T(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sx(t){return Number(t.replace("s","000"))}function ox(t){return`${VT} ${t}`}/**
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
 */async function ax({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LT(t),i=UT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:VT,appId:t.appId,sdkVersion:bT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await $T(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:MT(u.authToken)}}else throw await FT("Create Installation",l)}/**
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
 */function BT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function lx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ux=/^[cdef][\w-]{21}$/,Lp="";function cx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hx(t);return ux.test(n)?n:Lp}catch{return Lp}}function hx(t){return lx(t).substr(0,22)}/**
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
 */function kh(t){return`${t.appName}!${t.appId}`}/**
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
 */const jT=new Map;function zT(t,e){const n=kh(t);qT(n,e),dx(n,e)}function qT(t,e){const n=jT.get(t);if(n)for(const r of n)r(e)}function dx(t,e){const n=fx();n&&n.postMessage({key:t,fid:e}),px()}let yi=null;function fx(){return!yi&&"BroadcastChannel"in self&&(yi=new BroadcastChannel("[Firebase] FID Change"),yi.onmessage=t=>{qT(t.data.key,t.data.fid)}),yi}function px(){jT.size===0&&yi&&(yi.close(),yi=null)}/**
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
 */const mx="firebase-installations-database",gx=1,Fi="firebase-installations-store";let ff=null;function Ng(){return ff||(ff=YD(mx,gx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),ff}async function Mc(t,e){const n=kh(t),i=(await Ng()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&zT(t,e.fid),e}async function WT(t){const e=kh(t),r=(await Ng()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function Nh(t,e){const n=kh(t),i=(await Ng()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&zT(t,a.fid),a}/**
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
 */async function Dg(t){let e;const n=await Nh(t.appConfig,r=>{const i=_x(r),s=yx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _x(t){const e=t||{fid:cx(),registrationStatus:0};return GT(e)}function yx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wx(t)}:{installationEntry:e}}async function vx(t,e){try{const n=await ax(t,e);return Mc(t.appConfig,n)}catch(n){throw OT(n)&&n.customData.serverCode===409?await WT(t.appConfig):await Mc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wx(t){let e=await Kv(t.appConfig);for(;e.registrationStatus===1;)await BT(100),e=await Kv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Dg(t);return r||n}return e}function Kv(t){return Nh(t,e=>{if(!e)throw Mi.create("installation-not-found");return GT(e)})}function GT(t){return Ix(t)?{fid:t.fid,registrationStatus:0}:t}function Ix(t){return t.registrationStatus===1&&t.registrationTime+xT<Date.now()}/**
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
 */async function Ex({appConfig:t,heartbeatServiceProvider:e},n){const r=Tx(t,n),i=ix(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:bT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await $T(()=>fetch(r,a));if(l.ok){const u=await l.json();return MT(u)}else throw await FT("Generate Auth Token",l)}function Tx(t,{fid:e}){return`${LT(t)}/${e}/authTokens:generate`}/**
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
 */async function xg(t,e=!1){let n;const r=await Nh(t.appConfig,s=>{if(!KT(s))throw Mi.create("not-registered");const o=s.authToken;if(!e&&Rx(o))return s;if(o.requestStatus===1)return n=Sx(t,e),s;{if(!navigator.onLine)throw Mi.create("app-offline");const a=Cx(s);return n=Ax(t,a),a}});return n?await n:r.authToken}async function Sx(t,e){let n=await Hv(t.appConfig);for(;n.authToken.requestStatus===1;)await BT(100),n=await Hv(t.appConfig);const r=n.authToken;return r.requestStatus===0?xg(t,e):r}function Hv(t){return Nh(t,e=>{if(!KT(e))throw Mi.create("not-registered");const n=e.authToken;return kx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ax(t,e){try{const n=await Ex(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mc(t.appConfig,r),n}catch(n){if(OT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await WT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mc(t.appConfig,r)}throw n}}function KT(t){return t!==void 0&&t.registrationStatus===2}function Rx(t){return t.requestStatus===2&&!Px(t)}function Px(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ex}function Cx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kx(t){return t.requestStatus===1&&t.requestTime+xT<Date.now()}/**
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
 */async function Nx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Dg(e);return r?r.catch(console.error):xg(e).catch(console.error),n.fid}/**
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
 */async function Dx(t,e=!1){const n=t;return await xx(n),(await xg(n,e)).token}async function xx(t){const{registrationPromise:e}=await Dg(t);e&&await e}/**
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
 */function bx(t){if(!t||!t.options)throw pf("App Configuration");if(!t.name)throw pf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pf(t){return Mi.create("missing-app-config-values",{valueName:t})}/**
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
 */const HT="installations",Vx="installations-internal",Ox=t=>{const e=t.getProvider("app").getImmediate(),n=bx(e),r=Zi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lx=t=>{const e=t.getProvider("app").getImmediate(),n=Zi(e,HT).getImmediate();return{getId:()=>Nx(n),getToken:i=>Dx(n,i)}};function Mx(){en(new Vt(HT,Ox,"PUBLIC")),en(new Vt(Vx,Lx,"PRIVATE"))}Mx();_t(DT,kg);_t(DT,kg,"esm2017");/**
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
 */const Fc="analytics",Fx="firebase_id",Ux="origin",$x=60*1e3,Bx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bg="https://www.googletagmanager.com/gtag/js";/**
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
 */const bt=new Ol("@firebase/analytics");/**
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
 */const jx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new Jn("analytics","Analytics",jx);/**
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
 */function zx(t){if(!t.startsWith(bg)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return bt.warn(e.message),""}return t}function QT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Wx(t,e){const n=qx("firebase-js-sdk-policy",{createScriptURL:zx}),r=document.createElement("script"),i=`${bg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Kx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await QT(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){bt.error(a)}t("config",i,s)}async function Hx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await QT(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){bt.error(s)}}function Qx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Hx(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Kx(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){bt.error(a)}}return i}function Yx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Qx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Xx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bg)&&n.src.includes(t))return n;return null}/**
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
 */const Jx=30,Zx=1e3;class eb{constructor(e={},n=Zx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const YT=new eb;function tb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:tb(r)},s=Bx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function rb(t,e=YT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ob;return setTimeout(async()=>{a.abort()},n!==void 0?n:$x),XT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function XT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=YT){var s;const{appId:o,measurementId:a}=t;try{await ib(r,e)}catch(l){if(a)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await nb(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!sb(u)){if(i.deleteThrottleMetadata(o),a)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Lv(n,i.intervalMillis,Jx):Lv(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),bt.debug(`Calling attemptFetch again in ${c} millis`),XT(t,h,r,i)}}function ib(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sb(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ob{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ab(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function lb(){if(no())try{await yT()}catch(t){return bt.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ub(t,e,n,r,i,s,o){var a;const l=rb(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>bt.error(f)),e.push(l);const u=lb().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);Xx(s)||Wx(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Ux]="firebase",d.update=!0,h!=null&&(d[Fx]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class cb{constructor(e){this.app=e}_delete(){return delete Ra[this.app.options.appId],Promise.resolve()}}let Ra={},Qv=[];const Yv={};let mf="dataLayer",hb="gtag",Xv,JT,Jv=!1;function db(){const t=[];if(Eg()&&t.push("This is a browser extension environment."),wN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});bt.warn(n.message)}}function fb(t,e,n){db();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Ra[r]!=null)throw $t.create("already-exists",{id:r});if(!Jv){Gx(mf);const{wrappedGtag:s,gtagCore:o}=Yx(Ra,Qv,Yv,mf,hb);JT=s,Xv=o,Jv=!0}return Ra[r]=ub(t,Qv,Yv,e,Xv,mf,n),new cb(t)}function pb(t=Pg()){t=$(t);const e=Zi(t,Fc);return e.isInitialized()?e.getImmediate():mb(t)}function mb(t,e={}){const n=Zi(t,Fc);if(n.isInitialized()){const i=n.getImmediate();if(Oc(e,n.getOptions()))return i;throw $t.create("already-initialized")}return n.initialize({options:e})}function gb(t,e,n,r){t=$(t),ab(JT,Ra[t.app.options.appId],e,n,r).catch(i=>bt.error(i))}const Zv="@firebase/analytics",ew="0.10.0";function _b(){en(new Vt(Fc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return fb(r,i,n)},"PUBLIC")),en(new Vt("analytics-internal",t,"PRIVATE")),_t(Zv,ew),_t(Zv,ew,"esm2017");function t(e){try{const n=e.getProvider(Fc).getImmediate();return{logEvent:(r,i,s)=>gb(n,r,i,s)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}_b();/**
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
 */class yb{constructor(e,n){this._delegate=e,this.firebase=n,Lc(e,new Vt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ST(this._delegate)))}_getService(e,n=Vr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Vr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Lc(this._delegate,e)}_addOrOverwriteComponent(e){TT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},tw=new Jn("app-compat","Firebase",vb);/**
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
 */function wb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:_t,setLogLevel:RT,onLog:AT,apps:null,SDK_VERSION:Qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:UD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Vr,!Vv(e,u))throw tw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Rg(u,c);if(Vv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(en(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw tw.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Vc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function ZT(){const t=wb(yb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ZT,extendNamespace:e,createSubscribe:vT,ErrorFactory:Jn,deepExtend:Vc});function e(n){Vc(t,n)}return t}const Ib=ZT();/**
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
 */const nw=new Ol("@firebase/app-compat"),Eb="@firebase/app-compat",Tb="0.2.19";/**
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
 */function Sb(t){_t(Eb,Tb,t)}/**
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
 */if(yN()&&self.firebase!==void 0){nw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&nw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Zn=Ib;Sb();var Ab="firebase",Rb="10.4.0";/**
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
 */Zn.registerVersion(Ab,Rb,"app-compat");function Vg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ho={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},us={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function rw(t){return t!==void 0&&t.getResponse!==void 0}function iw(t){return t!==void 0&&t.enterprise!==void 0}class Pb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Cb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function eS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kb=Cb,Nb=eS,tS=new Jn("auth","Firebase",eS());/**
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
 */const Uc=new Ol("@firebase/auth");function Db(t,...e){Uc.logLevel<=H.WARN&&Uc.warn(`Auth (${Qr}): ${t}`,...e)}function Yu(t,...e){Uc.logLevel<=H.ERROR&&Uc.error(`Auth (${Qr}): ${t}`,...e)}/**
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
 */function it(t,...e){throw Og(t,...e)}function tt(t,...e){return Og(t,...e)}function nS(t,e,n){const r=Object.assign(Object.assign({},Nb()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function To(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(t,"argument-error"),nS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Og(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tS.create(t,...e)}function P(t,e,...n){if(!t)throw Og(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yu(e),new Error(e)}function dn(t,e){t||Tn(e)}/**
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
 */function nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lg(){return sw()==="http:"||sw()==="https:"}function sw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||Eg()||"connection"in navigator)?navigator.onLine:!0}function bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=_N()||Tg()}get(){return xb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mg(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ob=new Ll(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ve(t,e,n,r,i={}){return iS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rS.fetch()(sS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function iS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vb),e);try{const i=new Lb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ua(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nS(t,c,u);it(t,c)}}catch(i){if(i instanceof et)throw i;it(t,"network-request-failed",{message:String(i)})}}async function er(t,e,n,r,i={}){const s=await Ve(t,e,n,r,i);return"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mg(t.config,i):`${t.config.apiScheme}://${i}`}class Lb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Ob.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Mb(t){return(await Ve(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fb(t,e){return Ve(t,"GET","/v2/recaptchaConfig",Ne(t,e))}/**
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
 */async function Ub(t,e){return Ve(t,"POST","/v1/accounts:delete",e)}async function $b(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function Bb(t,e){return Ve(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jb(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=Dh(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa(gf(i.auth_time)),issuedAtTime:Pa(gf(i.iat)),expirationTime:Pa(gf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gf(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yu("JWT malformed, contained fewer than 3 sections"),null;try{const i=mT(n);return i?JSON.parse(i):(Yu("Failed to decode base64 JWT payload"),null)}catch(i){return Yu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zb(t){const e=Dh(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof et&&qb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Wb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hn(t,Bb(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hb(s.providerUserInfo):[],a=Kb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Gb(t){const e=$(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hb(t){return t.map(e=>{var{providerId:n}=e,r=Vg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qb(t,e){const n=await iS(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class il{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new il;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new il,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function or(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jb(this,e)}reload(){return Gb(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,Ub(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:A,providerData:C,stsTokenManager:N}=n;P(g&&N,e,"internal-error");const M=il.fromJSON(this.name,N);P(typeof g=="string",e,"internal-error"),or(h,e.name),or(d,e.name),P(typeof I=="boolean",e,"internal-error"),P(typeof A=="boolean",e,"internal-error"),or(f,e.name),or(y,e.name),or(_,e.name),or(E,e.name),or(m,e.name),or(p,e.name);const ie=new Ri({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:A,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:M,createdAt:m,lastLoginAt:p});return C&&Array.isArray(C)&&(ie.providerData=C.map(G=>Object.assign({},G))),E&&(ie._redirectEventId=E),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new il;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}}/**
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
 */const ow=new Map;function Ft(t){dn(t instanceof Function,"Expected a class definition");let e=ow.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ow.set(t,e),e)}/**
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
 */class aS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aS.type="NONE";const ro=aS;/**
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
 */function Pi(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(Ft(ro),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(ro);const o=Pi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $s(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $s(s,e,r))}}/**
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
 */function aw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hS(e))return"Blackberry";if(dS(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||uS(e))&&!e.includes("edge/"))return"Chrome";if(Ml(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lS(t=ve()){return/firefox\//i.test(t)}function Fg(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uS(t=ve()){return/crios\//i.test(t)}function cS(t=ve()){return/iemobile/i.test(t)}function Ml(t=ve()){return/android/i.test(t)}function hS(t=ve()){return/blackberry/i.test(t)}function dS(t=ve()){return/webos/i.test(t)}function So(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yb(t=ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Xb(t=ve()){var e;return So(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jb(){return _T()&&document.documentMode===10}function fS(t=ve()){return So(t)||Ml(t)||dS(t)||hS(t)||/windows phone/i.test(t)||cS(t)}function Zb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pS(t,e=[]){let n;switch(t){case"Browser":n=aw(ve());break;case"Worker":n=`${aw(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class eV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function tV(t,e={}){return Ve(t,"GET","/v2/passwordPolicy",Ne(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const nV=6;class rV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class iV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lw(this),this.idTokenSubscription=new lw(this),this.beforeStateQueue=new eV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tV(this),n=new rV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Db(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Te(t){return $(t)}class lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=vT(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ug(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sV().appendChild(r)})}function mS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oV="https://www.google.com/recaptcha/enterprise.js?render=",aV="recaptcha-enterprise",lV="NO_RECAPTCHA";class uV{constructor(e){this.type=aV,this.auth=Te(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Pb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;iw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&iw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ug(oV+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Lr(t,e,n,r=!1){const i=new uV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function cV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hV(t,e,n){const r=Te(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gS(e),{host:o,port:a}=dV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fV()}function gS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dV(t){const e=gS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uw(o)}}}function uw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ao{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function _S(t,e){return Ve(t,"POST","/v1/accounts:resetPassword",Ne(t,e))}async function yS(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function pV(t,e){return Ve(t,"POST","/v1/accounts:update",Ne(t,e))}/**
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
 */async function _f(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function xh(t,e){return Ve(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function mV(t,e){return xh(t,e)}async function yf(t,e){return xh(t,e)}async function vf(t,e){return xh(t,e)}async function gV(t,e){return xh(t,e)}/**
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
 */async function _V(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function yV(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
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
 */class sl extends Ao{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Lr(e,r,"signInWithPassword");return _f(e,i)}else return _f(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Lr(e,r,"signInWithPassword");return _f(e,s)}else return Promise.reject(i)});case"emailLink":return _V(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yV(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Ne(t,e))}/**
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
 */const vV="http://localhost";class Dn extends Ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:vV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
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
 */async function wV(t,e){return Ve(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function IV(t,e){return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function EV(t,e){const n=await er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw ua(t,"account-exists-with-different-credential",n);return n}const TV={USER_NOT_FOUND:"user-not-found"};async function SV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),TV)}/**
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
 */class Ci extends Ao{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ci({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ci({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return IV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return EV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return SV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ci({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function AV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RV(t){const e=xs(la(t)).link,n=e?xs(la(e)).deep_link_id:null,r=xs(la(t)).deep_link_id;return(r?xs(la(r)).link:null)||r||n||e||t}class bh{constructor(e){var n,r,i,s,o,a;const l=xs(la(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=AV((i=l.mode)!==null&&i!==void 0?i:null);P(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RV(e);try{return new bh(n)}catch{return null}}}/**
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
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bh.parseLink(n);return P(r,"argument-error"),sl._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ro extends tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bs extends Ro{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),Dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),Dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Bs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class yn extends Ro{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class wn extends Ro{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */const PV="http://localhost";class io extends Ao{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new io(r,s)}static _create(e,n){return new io(e,n)}buildRequest(){return{requestUri:PV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const CV="saml.";class $c extends tr{constructor(e){P(e.startsWith(CV),"argument-error"),super(e)}static credentialFromResult(e){return $c.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $c.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=io.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return io._create(r,n)}catch{return null}}}/**
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
 */class In extends Ro{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function Xu(t,e){return er(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ri._fromIdTokenResponse(e,r,i),o=cw(r);return new tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cw(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function kV(t){var e;const n=Te(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Xu(n,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Bc extends et{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bc(e,n,r,i)}}function vS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function wS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function NV(t,e){const n=$(t);await Vh(!0,n,e);const{providerUserInfo:r}=await $b(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=wS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function $g(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}async function Vh(t,e,n){await rl(e);const r=wS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function IS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hn(t,vS(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Dh(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
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
 */async function ES(t,e,n=!1){const r="signIn",i=await vS(t,r,e),s=await tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Oh(t,e){return ES(Te(t),e)}async function TS(t,e){const n=$(t);return await Vh(!1,n,e.providerId),$g(n,e)}async function SS(t,e){return IS($(t),e)}/**
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
 */async function DV(t,e){return er(t,"POST","/v1/accounts:signInWithCustomToken",Ne(t,e))}/**
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
 */async function xV(t,e){const n=Te(t),r=await DV(n,{token:e,returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Fl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bg._fromServerResponse(e,n):"totpInfo"in n?jg._fromServerResponse(e,n):it(e,"internal-error")}}class Bg extends Fl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bg(n)}}class jg extends Fl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new jg(n)}}/**
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
 */function js(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function zg(t){const e=Te(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bV(t,e,n){var r;const i=Te(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Lr(i,s,"getOobCode",!0);n&&js(i,o,n),await yf(i,o)}else n&&js(i,s,n),await yf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Lr(i,s,"getOobCode",!0);n&&js(i,a,n),await yf(i,a)}else return Promise.reject(o)})}async function VV(t,e,n){await _S($(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zg(t),r})}async function OV(t,e){await pV($(t),{oobCode:e})}async function AS(t,e){const n=$(t),r=await _S(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Fl._fromServerResponse(Te(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function LV(t,e){const{data:n}=await AS($(t),e);return n.email}async function MV(t,e,n){var r;const i=Te(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Lr(i,s,"signUpPassword");o=Xu(i,u)}else o=Xu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Lr(i,s,"signUpPassword");return Xu(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zg(t),u}),l=await tn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function FV(t,e,n){return Oh($(t),Yr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zg(t),r})}/**
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
 */async function UV(t,e,n){var r;const i=Te(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){P(l.handleCodeInApp,i,"argument-error"),l&&js(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Lr(i,s,"getOobCode",!0);o(a,n),await vf(i,a)}else o(s,n),await vf(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Lr(i,s,"getOobCode",!0);o(l,n),await vf(i,l)}else return Promise.reject(a)})}function $V(t,e){const n=bh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function BV(t,e,n){const r=$(t),i=Yr.credentialWithLink(e,n||nl());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Oh(r,i)}/**
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
 */async function jV(t,e){return Ve(t,"POST","/v1/accounts:createAuthUri",Ne(t,e))}/**
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
 */async function zV(t,e){const n=Lg()?nl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await jV($(t),r);return i||[]}async function qV(t,e){const n=$(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&js(n.auth,i,e);const{email:s}=await mV(n.auth,i);s!==t.email&&await t.reload()}async function WV(t,e,n){const r=$(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&js(r.auth,s,n);const{email:o}=await gV(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function GV(t,e){return Ve(t,"POST","/v1/accounts:update",e)}/**
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
 */async function KV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hn(r,GV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HV(t,e){return RS($(t),e,null)}function QV(t,e){return RS($(t),null,e)}async function RS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Hn(t,yS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function YV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Dh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new zs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new XV(s,i);case"github.com":return new JV(s,i);case"google.com":return new ZV(s,i);case"twitter.com":return new eO(s,i,t.screenName||null);case"custom":case"anonymous":return new zs(s,null);default:return new zs(s,r,i)}}class zs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class PS extends zs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class XV extends zs{constructor(e,n){super(e,"facebook.com",n)}}class JV extends PS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ZV extends zs{constructor(e,n){super(e,"google.com",n)}}class eO extends PS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function tO(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:YV(n)}/**
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
 */class vi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new vi("enroll",e,n)}static _fromMfaPendingCredential(e){return new vi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return vi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return vi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class qg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Te(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Fl._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=vi._fromMfaPendingCredential(i.mfaPendingCredential);return new qg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await tn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return P(n.user,r,"internal-error"),tn._forOperation(n.user,n.operationType,u);default:it(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function nO(t,e){var n;const r=$(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),qg._fromError(r,i)}/**
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
 */function rO(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}function iO(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(t,e))}function sO(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(t,e))}class Wg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Fl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wg(e)}async getSession(){return vi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Hn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Hn(this.user,sO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const wf=new WeakMap;function oO(t){const e=$(t);return wf.has(e)||wf.set(e,Wg._fromUser(e)),wf.get(e)}const jc="__sak";/**
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
 */class CS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aO(){const t=ve();return Fg(t)||So(t)}const lO=1e3,uO=10;class kS extends CS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aO()&&Zb(),this.fallbackToPolling=fS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kS.type="LOCAL";const Gg=kS;/**
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
 */class NS extends CS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NS.type="SESSION";const Ui=NS;/**
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
 */function cO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function Ul(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ul("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xe(){return window}function dO(t){xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Kg(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function fO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mO(){return Kg()?self:null}/**
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
 */const DS="firebaseLocalStorageDb",gO=1,zc="firebaseLocalStorage",xS="fbase_key";class $l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mh(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function _O(){const t=indexedDB.deleteDatabase(DS);return new $l(t).toPromise()}function Mp(){const t=indexedDB.open(DS,gO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:xS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await _O(),e(await Mp()))})})}async function hw(t,e,n){const r=Mh(t,!0).put({[xS]:e,value:n});return new $l(r).toPromise()}async function yO(t,e){const n=Mh(t,!1).get(e),r=await new $l(n).toPromise();return r===void 0?null:r.value}function dw(t,e){const n=Mh(t,!0).delete(e);return new $l(n).toPromise()}const vO=800,wO=3;class bS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(mO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fO(),!this.activeServiceWorker)return;this.sender=new hO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mp();return await hw(e,jc,"1"),await dw(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mh(i,!1).getAll();return new $l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bS.type="LOCAL";const ol=bS;/**
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
 */function IO(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}function EO(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:finalize",Ne(t,e))}/**
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
 */const TO=500,SO=6e4,Pu=1e12;class AO{constructor(e){this.auth=e,this.counter=Pu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new RO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Pu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Pu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Pu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class RO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=PO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},SO)},TO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function PO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const If=mS("rcb"),CO=new Ll(3e4,6e4),kO="https://www.google.com/recaptcha/api.js?";class NO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(DO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&rw(xe().grecaptcha)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(tt(e,"network-request-failed"))},CO.get());xe()[If]=()=>{xe().clearTimeout(s),delete xe()[If];const a=xe().grecaptcha;if(!a||!rw(a)){i(tt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${kO}?${Eo({onload:If,render:"explicit",hl:n})}`;Ug(o).catch(()=>{clearTimeout(s),i(tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function DO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class xO{async load(e){return new AO(e)}clearedOneInstance(){}}/**
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
 */const VS="recaptcha",bO={theme:"light",type:"image"};let VO=class{constructor(e,n,r=Object.assign({},bO)){this.parameters=r,this.type=VS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Te(e),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new xO:new NO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Lg()&&!Kg(),this.auth,"internal-error"),await OO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Mb(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function OO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Hg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ci._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function LO(t,e,n){const r=Te(t),i=await Fh(r,e,$(n));return new Hg(i,s=>Oh(r,s))}async function MO(t,e,n){const r=$(t);await Vh(!1,r,"phone");const i=await Fh(r.auth,e,$(n));return new Hg(i,s=>TS(r,s))}async function FO(t,e,n){const r=$(t),i=await Fh(r.auth,e,$(n));return new Hg(i,s=>SS(r,s))}async function Fh(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===VS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await rO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await IO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await wV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function UO(t,e){await $g($(t),e)}/**
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
 */let $i=class Ju{constructor(e){this.providerId=Ju.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,n){return Fh(this.auth,e,$(n))}static credential(e,n){return Ci._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ju.credentialFromTaggedObject(n)}static credentialFromError(e){return Ju.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ci._fromTokenResponse(n,r):null}};$i.PROVIDER_ID="phone";$i.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function es(t,e){return e?Ft(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qg extends Ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $O(t){return ES(t.auth,new Qg(t),t.bypassAuthState)}function BO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),IS(n,new Qg(t),t.bypassAuthState)}async function jO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),$g(n,new Qg(t),t.bypassAuthState)}/**
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
 */class OS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $O;case"linkViaPopup":case"linkViaRedirect":return jO;case"reauthViaPopup":case"reauthViaRedirect":return BO;default:it(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zO=new Ll(2e3,1e4);async function qO(t,e,n){const r=Te(t);To(t,e,tr);const i=es(r,n);return new Fn(r,"signInViaPopup",e,i).executeNotNull()}async function WO(t,e,n){const r=$(t);To(r.auth,e,tr);const i=es(r.auth,n);return new Fn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GO(t,e,n){const r=$(t);To(r.auth,e,tr);const i=es(r.auth,n);return new Fn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Fn extends OS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zO.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const KO="pendingRedirect",Ca=new Map;class HO extends OS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const r=await QO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QO(t,e){const n=MS(e),r=LS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Yg(t,e){return LS(t)._set(MS(e),"true")}function YO(){Ca.clear()}function Xg(t,e){Ca.set(t._key(),e)}function LS(t){return Ft(t._redirectPersistence)}function MS(t){return Pi(KO,t.config.apiKey,t.name)}/**
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
 */function XO(t,e,n){return JO(t,e,n)}async function JO(t,e,n){const r=Te(t);To(t,e,tr),await r._initializationPromise;const i=es(r,n);return await Yg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ZO(t,e,n){return eL(t,e,n)}async function eL(t,e,n){const r=$(t);To(r.auth,e,tr),await r.auth._initializationPromise;const i=es(r.auth,n);await Yg(i,r.auth);const s=await FS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function tL(t,e,n){return nL(t,e,n)}async function nL(t,e,n){const r=$(t);To(r.auth,e,tr),await r.auth._initializationPromise;const i=es(r.auth,n);await Vh(!1,r,e.providerId),await Yg(i,r.auth);const s=await FS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function rL(t,e){return await Te(t)._initializationPromise,Uh(t,e,!1)}async function Uh(t,e,n=!1){const r=Te(t),i=es(r,e),o=await new HO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function FS(t){const e=Ul(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const iL=10*60*1e3;class US{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$S(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iL&&this.cachedEventUids.clear(),this.cachedEventUids.has(fw(e))}saveEventToCache(e){this.cachedEventUids.add(fw(e)),this.lastProcessedEventTime=Date.now()}}function fw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $S({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $S(t);default:return!1}}/**
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
 */async function BS(t,e={}){return Ve(t,"GET","/v1/projects",e)}/**
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
 */const oL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aL=/^https?/;async function lL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BS(t);for(const n of e)try{if(uL(n))return}catch{}it(t,"unauthorized-domain")}function uL(t){const e=nl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aL.test(n))return!1;if(oL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cL=new Ll(3e4,6e4);function pw(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hL(t){return new Promise((e,n)=>{var r,i,s;function o(){pw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pw(),n(tt(t,"network-request-failed"))},timeout:cL.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=mS("iframefcb");return xe()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Ug(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zu=null,e})}let Zu=null;function dL(t){return Zu=Zu||hL(t),Zu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fL=new Ll(5e3,15e3),pL="__/auth/iframe",mL="emulator/auth/iframe",gL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_L=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yL(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mg(e,mL):`https://${t.config.authDomain}/${pL}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=_L.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function vL(t){const e=await dL(t),n=xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:yL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},fL.get());function l(){xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IL=500,EL=600,TL="_blank",SL="http://localhost";class mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AL(t,e,n,r=IL,i=EL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ve().toLowerCase();n&&(a=uS(u)?TL:n),lS(u)&&(e=e||SL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Xb(u)&&a!=="_self")return RL(e||"",a),new mw(null);const h=window.open(e||"",a,c);P(h,t,"popup-blocked");try{h.focus()}catch{}return new mw(h)}function RL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PL="__/auth/handler",CL="emulator/auth/handler",kL=encodeURIComponent("fac");async function Fp(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ro){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${kL}=${encodeURIComponent(l)}`:"";return`${NL(t)}?${Eo(a).slice(1)}${u}`}function NL({config:t}){return t.emulator?Mg(t,CL):`https://${t.authDomain}/${PL}`}/**
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
 */const Ef="webStorageSupport";class DL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ui,this._completeRedirectFn=Uh,this._overrideRedirectResult=Xg}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fp(e,n,r,nl(),i);return AL(e,o,Ul())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fp(e,n,r,nl(),i);return dO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vL(e),r=new US(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ef,{type:Ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ef];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fS()||Fg()||So()}}const xL=DL;class bL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class Jg extends bL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Jg(e)}_finalizeEnroll(e,n,r){return iO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return EO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jS{constructor(){}static assertion(e){return Jg._fromCredential(e)}}jS.FACTOR_ID="phone";var gw="@firebase/auth",_w="1.3.0";/**
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
 */class VL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LL(t){en(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pS(t)},u=new iV(r,i,s,l);return cV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Vt("auth-internal",e=>{const n=Te(e.getProvider("auth").getImmediate());return(r=>new VL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(gw,_w,OL(t)),_t(gw,_w,"esm2017")}/**
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
 */const ML=5*60;pN("authIdTokenMaxAge");LL("Browser");/**
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
 */function Bi(){return window}/**
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
 */const FL=2e3;async function UL(t,e,n){var r;const{BuildInfo:i}=Bi();dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await qL(e.sessionId),o={};return So()?o.ibi=i.packageName:Ml()?o.apn=i.packageName:it(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Fp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function $L(t){const{BuildInfo:e}=Bi(),n={};So()?n.iosBundleId=e.packageName:Ml()?n.androidPackageName=e.packageName:it(t,"operation-not-supported-in-this-environment"),await BS(t,n)}function BL(t){const{cordova:e}=Bi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Yb()?"_blank":"_system","location=yes"),n(i)})})}async function jL(t,e,n){const{cordova:r}=Bi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(tt(t,"redirect-cancelled-by-user"))},FL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Ml()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function zL(t){var e,n,r,i,s,o,a,l,u,c;const h=Bi();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qL(t){const e=WL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function WL(t){if(dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const GL=20;class KL extends US{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function HL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:XL(),postBody:null,tenantId:t.tenantId,error:tt(t,"no-auth-event")}}function QL(t,e){return Up()._set($p(t),e)}async function yw(t){const e=await Up()._get($p(t));return e&&await Up()._remove($p(t)),e}function YL(t,e){var n,r;const i=ZL(e);if(i.includes("/__/auth/callback")){const s=ec(i),o=s.firebaseError?JL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?tt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function XL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<GL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Up(){return Ft(Gg)}function $p(t){return Pi("authEvent",t.config.apiKey,t.name)}function JL(t){try{return JSON.parse(t)}catch{return null}}function ZL(t){const e=ec(t),n=e.link?decodeURIComponent(e.link):void 0,r=ec(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ec(i).link||i||r||n||t}function ec(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return xs(n.join("?"))}/**
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
 */const eM=500;class tM{constructor(){this._redirectPersistence=Ui,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Uh,this._overrideRedirectResult=Xg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new KL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){it(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){zL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),YO(),await this._originValidation(e);const o=HL(e,r,i);await QL(e,o);const a=await UL(e,o,n),l=await BL(a);return jL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$L(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Bi(),o=setTimeout(async()=>{await yw(e),n.onEvent(vw())},eM),a=async c=>{clearTimeout(o);const h=await yw(e);let d=null;h&&(c!=null&&c.url)&&(d=YL(h,c.url)),n.onEvent(d||vw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Bi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const nM=tM;function vw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:tt("no-auth-event")}}/**
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
 */function rM(t,e){Te(t)._logFramework(e)}var iM="@firebase/auth-compat",sM="0.4.6";/**
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
 */const oM=1e3;function ka(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function aM(){return ka()==="http:"||ka()==="https:"}function zS(t=ve()){return!!((ka()==="file:"||ka()==="ionic:"||ka()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function lM(){return Tg()||Ig()}function uM(){return _T()&&(document==null?void 0:document.documentMode)===11}function cM(t=ve()){return/Edge\/\d+/.test(t)}function hM(t=ve()){return uM()||cM(t)}function qS(){try{const t=self.localStorage,e=Ul();if(t)return t.setItem(e,"1"),t.removeItem(e),hM()?no():!0}catch{return Zg()&&no()}return!1}function Zg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Tf(){return(aM()||Eg()||zS())&&!lM()&&qS()&&!Zg()}function WS(){return zS()&&typeof document<"u"}async function dM(){return WS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},oM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function fM(){return typeof window<"u"?window:null}/**
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
 */const Lt={LOCAL:"local",NONE:"none",SESSION:"session"},Qo=P,GS="persistence";function pM(t,e){if(Qo(Object.values(Lt).includes(e),t,"invalid-persistence-type"),Tg()){Qo(e!==Lt.SESSION,t,"unsupported-persistence-type");return}if(Ig()){Qo(e===Lt.NONE,t,"unsupported-persistence-type");return}if(Zg()){Qo(e===Lt.NONE||e===Lt.LOCAL&&no(),t,"unsupported-persistence-type");return}Qo(e===Lt.NONE||qS(),t,"unsupported-persistence-type")}async function Bp(t){await t._initializationPromise;const e=KS(),n=Pi(GS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function mM(t,e){const n=KS();if(!n)return[];const r=Pi(GS,t,e);switch(n.getItem(r)){case Lt.NONE:return[ro];case Lt.LOCAL:return[ol,Ui];case Lt.SESSION:return[Ui];default:return[]}}function KS(){var t;try{return((t=fM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const gM=P;class yr{constructor(){this.browserResolver=Ft(xL),this.cordovaResolver=Ft(nM),this.underlyingResolver=null,this._redirectPersistence=Ui,this._completeRedirectFn=Uh,this._overrideRedirectResult=Xg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return WS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await dM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function HS(t){return t.unwrap()}function _M(t){return t.wrapped()}/**
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
 */function yM(t){return QS(t)}function vM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wM(t,nO(t,e))}else if(r){const i=QS(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function QS(t){const{_tokenResponse:e}=t instanceof et?t.customData:t;if(!e)return null;if(!(t instanceof et)&&"temporaryProof"in e&&"phoneNumber"in e)return $i.credentialFromResult(t);const n=e.providerId;if(!n||n===Ho.PASSWORD)return null;let r;switch(n){case Ho.GOOGLE:r=vn;break;case Ho.FACEBOOK:r=yn;break;case Ho.GITHUB:r=wn;break;case Ho.TWITTER:r=In;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?io._create(n,a):Dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Bs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof et?r.credentialFromError(t):r.credentialFromResult(t)}function Tt(t,e){return e.catch(n=>{throw n instanceof et&&vM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yM(n),additionalUserInfo:tO(n),user:$h.getOrCreate(i)}})}async function jp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Tt(t,n.confirm(r))}}class wM{constructor(e,n){this.resolver=n,this.auth=_M(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Tt(HS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let $h=class ca{constructor(e){this._delegate=e,this.multiFactor=oO(e)}static getOrCreate(e){return ca.USER_MAP.has(e)||ca.USER_MAP.set(e,new ca(e)),ca.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Tt(this.auth,TS(this._delegate,e))}async linkWithPhoneNumber(e,n){return jp(this.auth,MO(this._delegate,e,n))}async linkWithPopup(e){return Tt(this.auth,GO(this._delegate,e,yr))}async linkWithRedirect(e){return await Bp(Te(this.auth)),tL(this._delegate,e,yr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Tt(this.auth,SS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return jp(this.auth,FO(this._delegate,e,n))}reauthenticateWithPopup(e){return Tt(this.auth,WO(this._delegate,e,yr))}async reauthenticateWithRedirect(e){return await Bp(Te(this.auth)),ZO(this._delegate,e,yr)}sendEmailVerification(e){return qV(this._delegate,e)}async unlink(e){return await NV(this._delegate,e),this}updateEmail(e){return HV(this._delegate,e)}updatePassword(e){return QV(this._delegate,e)}updatePhoneNumber(e){return UO(this._delegate,e)}updateProfile(e){return KV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return WV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};$h.USER_MAP=new WeakMap;/**
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
 */const Yo=P;class zp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Yo(r,"invalid-api-key",{appName:e.name}),Yo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?yr:void 0;this._delegate=n.initialize({options:{persistence:IM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(kb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$h.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){hV(this._delegate,e,n)}applyActionCode(e){return OV(this._delegate,e)}checkActionCode(e){return AS(this._delegate,e)}confirmPasswordReset(e,n){return VV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Tt(this._delegate,MV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return zV(this._delegate,e)}isSignInWithEmailLink(e){return $V(this._delegate,e)}async getRedirectResult(){Yo(Tf(),this._delegate,"operation-not-supported-in-this-environment");const e=await rL(this._delegate,yr);return e?Tt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=ww(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=ww(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return UV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return bV(this._delegate,e,n||void 0)}async setPersistence(e){pM(this._delegate,e);let n;switch(e){case Lt.SESSION:n=Ui;break;case Lt.LOCAL:n=await Ft(ol)._isAvailable()?ol:Gg;break;case Lt.NONE:n=ro;break;default:return it("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Tt(this._delegate,kV(this._delegate))}signInWithCredential(e){return Tt(this._delegate,Oh(this._delegate,e))}signInWithCustomToken(e){return Tt(this._delegate,xV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Tt(this._delegate,FV(this._delegate,e,n))}signInWithEmailLink(e,n){return Tt(this._delegate,BV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return jp(this._delegate,LO(this._delegate,e,n))}async signInWithPopup(e){return Yo(Tf(),this._delegate,"operation-not-supported-in-this-environment"),Tt(this._delegate,qO(this._delegate,e,yr))}async signInWithRedirect(e){return Yo(Tf(),this._delegate,"operation-not-supported-in-this-environment"),await Bp(this._delegate),XO(this._delegate,e,yr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return LV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}zp.Persistence=Lt;function ww(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&$h.getOrCreate(o)),error:e,complete:n}}function IM(t,e){const n=mM(t,e);if(typeof self<"u"&&!n.includes(ol)&&n.push(ol),typeof window<"u")for(const r of[Gg,Ui])n.includes(r)||n.push(r);return n.includes(ro)||n.push(ro),n}/**
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
 */class e_{constructor(){this.providerId="phone",this._delegate=new $i(HS(Zn.auth()))}static credential(e,n){return $i.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}e_.PHONE_SIGN_IN_METHOD=$i.PHONE_SIGN_IN_METHOD;e_.PROVIDER_ID=$i.PROVIDER_ID;/**
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
 */const EM=P;class TM{constructor(e,n,r=Zn.app()){var i;EM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new VO(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const SM="auth-compat";function AM(t){t.INTERNAL.registerComponent(new Vt(SM,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new zp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:us.EMAIL_SIGNIN,PASSWORD_RESET:us.PASSWORD_RESET,RECOVER_EMAIL:us.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:us.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:us.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:us.VERIFY_EMAIL}},EmailAuthProvider:Yr,FacebookAuthProvider:yn,GithubAuthProvider:wn,GoogleAuthProvider:vn,OAuthProvider:Bs,SAMLAuthProvider:$c,PhoneAuthProvider:e_,PhoneMultiFactorGenerator:jS,RecaptchaVerifier:TM,TwitterAuthProvider:In,Auth:zp,AuthCredential:Ao,Error:et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(iM,sM)}AM(Zn);var RM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,t_=t_||{},j=RM||self;function Bh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PM(t){return Object.prototype.hasOwnProperty.call(t,Sf)&&t[Sf]||(t[Sf]=++CM)}var Sf="closure_uid_"+(1e9*Math.random()>>>0),CM=0;function kM(t,e,n){return t.call.apply(t.bind,arguments)}function NM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=kM:ut=NM,ut.apply(null,arguments)}function Cu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var DM=0;Xr.prototype.s=!1;Xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DM!=0)&&PM(this)};Xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const YS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function n_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Iw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var xM=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function al(t){return/^[\s\xa0]*$/.test(t)}function jh(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return jh().indexOf(t)!=-1}function r_(t){return r_[" "](t),t}r_[" "]=function(){};function bM(t,e){var n=A2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VM=En("Opera"),so=En("Trident")||En("MSIE"),XS=En("Edge"),qp=XS||so,JS=En("Gecko")&&!(jh().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),OM=jh().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function ZS(){var t=j.document;return t?t.documentMode:void 0}var Wp;e:{var Af="",Rf=function(){var t=jh();if(JS)return/rv:([^\);]+)(\)|;)/.exec(t);if(XS)return/Edge\/([\d\.]+)/.exec(t);if(so)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OM)return/WebKit\/(\S+)/.exec(t);if(VM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rf&&(Af=Rf?Rf[1]:""),so){var Pf=ZS();if(Pf!=null&&Pf>parseFloat(Af)){Wp=String(Pf);break e}}Wp=Af}var Gp;if(j.document&&so){var Ew=ZS();Gp=Ew||parseInt(Wp,10)||void 0}else Gp=void 0;var LM=Gp;function ll(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(JS){e:{try{r_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ll.$.h.call(this)}}Ge(ll,ct);var MM={2:"touch",3:"pen",4:"mouse"};ll.prototype.h=function(){ll.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jl="closure_listenable_"+(1e6*Math.random()|0),FM=0;function UM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++FM,this.fa=this.ia=!1}function zh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function i_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function eA(t){const e={};for(const n in t)e[n]=t[n];return e}const Tw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Tw.length;s++)n=Tw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qh(t){this.src=t,this.g={},this.h=0}qh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Kp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=YS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var s_="closure_lm_"+(1e6*Math.random()|0),Cf={};function nA(t,e,n,r,i){if(r&&r.once)return iA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)nA(t,e[s],n,r,i);return null}return n=l_(n),t&&t[jl]?t.O(e,n,Bl(r)?!!r.capture:!!r,i):rA(t,e,n,!1,r,i)}function rA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Bl(i)?!!i.capture:!!i,a=a_(t);if(a||(t[s_]=a=new qh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)xM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(oA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BM(){function t(n){return e.call(t.src,t.listener,n)}const e=jM;return t}function iA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)iA(t,e[s],n,r,i);return null}return n=l_(n),t&&t[jl]?t.P(e,n,Bl(r)?!!r.capture:!!r,i):rA(t,e,n,!0,r,i)}function sA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)sA(t,e[s],n,r,i);else r=Bl(r)?!!r.capture:!!r,n=l_(n),t&&t[jl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hp(s,n,r,i),-1<n&&(zh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=a_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hp(e,n,r,i)),(n=-1<t?e[t]:null)&&o_(n))}function o_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[jl])Kp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(oA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=a_(e))?(Kp(n,t),n.h==0&&(n.src=null,e[s_]=null)):zh(t)}}}function oA(t){return t in Cf?Cf[t]:Cf[t]="on"+t}function jM(t,e){if(t.fa)t=!0;else{e=new ll(e,this);var n=t.listener,r=t.la||t.src;t.ia&&o_(t),t=n.call(r,e)}return t}function a_(t){return t=t[s_],t instanceof qh?t:null}var kf="__closure_events_fn_"+(1e9*Math.random()>>>0);function l_(t){return typeof t=="function"?t:(t[kf]||(t[kf]=function(e){return t.handleEvent(e)}),t[kf])}function We(){Xr.call(this),this.i=new qh(this),this.S=this,this.J=null}Ge(We,Xr);We.prototype[jl]=!0;We.prototype.removeEventListener=function(t,e,n,r){sA(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var i=e;e=new ct(r,t),tA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ku(o,r,!0,e)&&i}if(o=e.g=t,i=ku(o,r,!0,e)&&i,i=ku(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ku(o,r,!1,e)&&i}We.prototype.N=function(){if(We.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zh(n[r]);delete t.g[e],t.h--}}this.J=null};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ku(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Kp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var u_=j.JSON.stringify;class zM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qM(){var t=c_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WM{constructor(){this.h=this.g=null}add(e,n){const r=aA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var aA=new zM(()=>new GM,t=>t.reset());class GM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function HM(t){j.setTimeout(()=>{throw t},0)}let ul,cl=!1,c_=new WM,lA=()=>{const t=j.Promise.resolve(void 0);ul=()=>{t.then(QM)}};var QM=()=>{for(var t;t=qM();){try{t.h.call(t.g)}catch(n){HM(n)}var e=aA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cl=!1};function Wh(t,e){We.call(this),this.h=t||1,this.g=e||j,this.j=ut(this.qb,this),this.l=Date.now()}Ge(Wh,We);x=Wh.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(h_(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function h_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Wh.$.N.call(this),h_(this),delete this.g};function d_(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function uA(t){t.g=d_(()=>{t.g=null,t.i&&(t.i=!1,uA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YM extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uA(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hl(t){Xr.call(this),this.h=t,this.g={}}Ge(hl,Xr);var Sw=[];function cA(t,e,n,r){Array.isArray(n)||(n&&(Sw[0]=n.toString()),n=Sw);for(var i=0;i<n.length;i++){var s=nA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function hA(t){i_(t.g,function(e,n){this.g.hasOwnProperty(n)&&o_(e)},t),t.g={}}hl.prototype.N=function(){hl.$.N.call(this),hA(this)};hl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gh(){this.g=!0}Gh.prototype.Ea=function(){this.g=!1};function XM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+e2(t,n)+(r?" "+r:"")})}function ZM(t,e){t.info(function(){return"TIMEOUT: "+e})}Gh.prototype.info=function(){};function e2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return u_(n)}catch{return e}}var ts={},Aw=null;function Kh(){return Aw=Aw||new We}ts.Ta="serverreachability";function dA(t){ct.call(this,ts.Ta,t)}Ge(dA,ct);function dl(t){const e=Kh();nt(e,new dA(e))}ts.STAT_EVENT="statevent";function fA(t,e){ct.call(this,ts.STAT_EVENT,t),this.stat=e}Ge(fA,ct);function mt(t){const e=Kh();nt(e,new fA(e,t))}ts.Ua="timingevent";function pA(t,e){ct.call(this,ts.Ua,t),this.size=e}Ge(pA,ct);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function f_(){}f_.prototype.h=null;function Rw(t){return t.h||(t.h=t.i())}function gA(){}var ql={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function p_(){ct.call(this,"d")}Ge(p_,ct);function m_(){ct.call(this,"c")}Ge(m_,ct);var Qp;function Qh(){}Ge(Qh,f_);Qh.prototype.g=function(){return new XMLHttpRequest};Qh.prototype.i=function(){return{}};Qp=new Qh;function Wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hl(this),this.P=t2,t=qp?125:void 0,this.V=new Wh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _A}function _A(){this.i=null,this.g="",this.h=!1}var t2=45e3,Yp={},qc={};x=Wl.prototype;x.setTimeout=function(t){this.P=t};function Xp(t,e,n){t.L=1,t.v=Xh(Qn(e)),t.s=n,t.S=!0,yA(t,null)}function yA(t,e){t.G=Date.now(),Gl(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),RA(n.i,"t",r),t.C=0,n=t.l.J,t.h=new _A,t.g=KA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new YM(ut(t.Pa,t,t.g),t.O)),cA(t.U,t.g,"readystatechange",t.nb),e=t.I?eA(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),dl(),XM(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||qp||this.g&&(this.h.h||this.g.ja()||Nw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?dl(3):dl(2)),Yh(this);var n=this.g.da();this.ca=n;t:if(vA(this)){var r=Nw(this.g);t="";var i=r.length,s=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wi(this),Na(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!al(a)){var u=a;break t}}u=null}if(n=u)bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jp(this,n);else{this.i=!1,this.o=3,mt(12),wi(this),Na(this);break e}}this.S?(wA(this,c,o),qp&&this.i&&c==3&&(cA(this.U,this.V,"tick",this.mb),this.V.start())):(bs(this.j,this.m,o,null),Jp(this,o)),c==4&&wi(this),this.i&&!this.J&&(c==4?zA(this.l,this):(this.i=!1,Gl(this)))}else E2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),wi(this),Na(this)}}}catch{}finally{}};function vA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wA(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=n2(t,n),i==qc){e==4&&(t.o=4,mt(14),r=!1),bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yp){t.o=4,mt(15),bs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bs(t.j,t.m,i,null),Jp(t,i);vA(t)&&i!=qc&&i!=Yp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),I_(e),e.M=!0,mt(11))):(bs(t.j,t.m,n,"[Invalid Chunked Response]"),wi(t),Na(t))}x.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(Yh(this),wA(this,t,e),this.i&&t!=4&&Gl(this))}};function n2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qc:(n=Number(e.substring(n,r)),isNaN(n)?Yp:(r+=1,r+n>e.length?qc:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,wi(this)};function Gl(t){t.Y=Date.now()+t.P,IA(t,t.P)}function IA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zl(ut(t.lb,t),e)}function Yh(t){t.B&&(j.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ZM(this.j,this.A),this.L!=2&&(dl(),mt(17)),wi(this),this.o=2,Na(this)):IA(this,this.Y-t)};function Na(t){t.l.H==0||t.J||zA(t.l,t)}function wi(t){Yh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,h_(t.V),hA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Jp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Zp(n.i,t))){if(!t.K&&Zp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kc(n),td(n);else break e;w_(n),mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=zl(ut(n.ib,n),6e3));if(1>=kA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ii(n,11)}else if((t.K||n.g==t)&&Kc(n),!al(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(g_(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ue(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=GA(r,r.J?r.pa:null,r.Y),o.K){NA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Yh(a),Gl(a)),r.g=o}else BA(r);0<n.j.length&&nd(n)}else u[0]!="stop"&&u[0]!="close"||Ii(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ii(n,7):v_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}dl(4)}catch{}}function r2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function i2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function EA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=i2(t),r=r2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var TA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ki){this.h=t.h,Wc(this,t.j),this.s=t.s,this.g=t.g,Gc(this,t.m),this.l=t.l;var e=t.i,n=new fl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pw(this,n),this.o=t.o}else t&&(e=String(t).match(TA))?(this.h=!1,Wc(this,e[1]||"",!0),this.s=ha(e[2]||""),this.g=ha(e[3]||"",!0),Gc(this,e[4]),this.l=ha(e[5]||"",!0),Pw(this,e[6]||"",!0),this.o=ha(e[7]||"")):(this.h=!1,this.i=new fl(null,this.h))}ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(da(e,Cw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(da(e,Cw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(da(n,n.charAt(0)=="/"?l2:a2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",da(n,c2)),t.join("")};function Qn(t){return new ki(t)}function Wc(t,e,n){t.j=n?ha(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pw(t,e,n){e instanceof fl?(t.i=e,h2(t.i,t.h)):(n||(e=da(e,u2)),t.i=new fl(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Xh(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ha(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function da(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,o2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function o2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cw=/[#\/\?@]/g,a2=/[#\?:]/g,l2=/[#\?]/g,u2=/[#\?@]/g,c2=/#/g;function fl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&s2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=fl.prototype;x.add=function(t,e){Jr(this),this.i=null,t=Po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function SA(t,e){Jr(t),e=Po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function AA(t,e){return Jr(t),e=Po(t,e),t.g.has(e)}x.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){Jr(this);let e=[];if(typeof t=="string")AA(this,t)&&(e=e.concat(this.g.get(Po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Jr(this),this.i=null,t=Po(this,t),AA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function RA(t,e,n){SA(t,e),0<n.length&&(t.i=null,t.g.set(Po(t,e),n_(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function h2(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(SA(this,r),RA(this,i,n))},t)),t.j=e}var d2=class{constructor(t,e){this.g=t,this.map=e}};function PA(t){this.l=t||f2,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f2=10;function CA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kA(t){return t.h?1:t.g?t.g.size:0}function Zp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function g_(t,e){t.g?t.g.add(e):t.h=e}function NA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}PA.prototype.cancel=function(){if(this.i=DA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return n_(t.i)}var p2=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function m2(){this.g=new p2}function g2(t,e,n){const r=n||"";try{EA(t,function(i,s){let o=i;Bl(i)&&(o=u_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _2(t,e){const n=new Gh;if(j.Image){const r=new Image;r.onload=Cu(Nu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Cu(Nu,n,r,"TestLoadImage: error",!1,e),r.onabort=Cu(Nu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Cu(Nu,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Jh(t){this.l=t.ec||null,this.j=t.ob||!1}Ge(Jh,f_);Jh.prototype.g=function(){return new Zh(this.l,this.j)};Jh.prototype.i=function(t){return function(){return t}}({});function Zh(t,e){We.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=__,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(Zh,We);var __=0;x=Zh.prototype;x.open=function(t,e){if(this.readyState!=__)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pl(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kl(this)),this.readyState=__};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pl(this)),this.g&&(this.readyState=3,pl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kl(this):pl(this),this.readyState==3&&xA(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Kl(this))};x.Ya=function(t){this.g&&(this.response=t,Kl(this))};x.ka=function(){this.g&&Kl(this)};function Kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pl(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var y2=j.JSON.parse;function Se(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bA,this.L=this.M=!1}Ge(Se,We);var bA="",v2=/^https?$/i,w2=["POST","PUT"];x=Se.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qp.g(),this.C=this.u?Rw(this.u):Rw(Qp),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){kw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=YS(w2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LA(this),0<this.B&&((this.L=I2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=d_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){kw(this,s)}};function I2(t){return so&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof t_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function kw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,VA(t),ed(t)}function VA(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),ed(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ed(this,!0)),Se.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?OA(this):this.kb())};x.kb=function(){OA(this)};function OA(t){if(t.h&&typeof t_<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)d_(t.La,0,t);else if(nt(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(TA)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!v2.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var s=2<Sn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",VA(t)}}finally{ed(t)}}}}function ed(t,e){if(t.g){LA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function LA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),y2(e)}};function Nw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function E2(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(al(t[r]))continue;var n=KM(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$M(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function MA(t){let e="";return i_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function y_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Xo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FA(t){this.Ga=0,this.j=[],this.l=new Gh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xo("baseRetryDelayMs",5e3,t),this.hb=Xo("retryDelaySeedMs",1e4,t),this.eb=Xo("forwardChannelMaxRetries",2,t),this.xa=Xo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new PA(t&&t.concurrentRequestLimit),this.Ja=new m2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=FA.prototype;x.ra=8;x.H=1;function v_(t){if(UA(t),t.H==3){var e=t.W++,n=Qn(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),Hl(t,n),e=new Wl(t,t.l,e),e.L=2,e.v=Xh(Qn(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=KA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Gl(e)}WA(t)}function td(t){t.g&&(I_(t),t.g.cancel(),t.g=null)}function UA(t){td(t),t.u&&(j.clearTimeout(t.u),t.u=null),Kc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function nd(t){if(!CA(t.i)&&!t.m){t.m=!0;var e=t.Na;ul||lA(),cl||(ul(),cl=!0),c_.add(e,t),t.C=0}}function T2(t,e){return kA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zl(ut(t.Na,t,e),qA(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=eA(s),tA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$A(this,i,e),n=Qn(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Hl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(MA(s)))+"&"+e:this.o&&y_(n,this.o,s)),g_(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,Xp(i,n,null)):Xp(i,n,e),this.H=2}}else this.H==3&&(t?Dw(this,t):this.j.length==0||CA(this.i)||Dw(this))};function Dw(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),Hl(t,r),t.o&&t.s&&y_(r,t.o,t.s),n=new Wl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$A(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),g_(t.i,n),Xp(n,r,e)}function Hl(t,e){t.na&&i_(t.na,function(n,r){ue(e,r,n)}),t.h&&EA({},function(n,r){ue(e,r,n)})}function $A(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{g2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function BA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ul||lA(),cl||(ul(),cl=!0),c_.add(e,t),t.A=0}}function w_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zl(ut(t.Ma,t),qA(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,jA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zl(ut(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),td(this),jA(this))};function I_(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function jA(t){t.g=new Wl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),Hl(t,e),t.o&&t.s&&y_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Xh(Qn(e)),n.s=null,n.S=!0,yA(n,t)}x.ib=function(){this.v!=null&&(this.v=null,td(this),w_(this),mt(19))};function Kc(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function zA(t,e){var n=null;if(t.g==e){Kc(t),I_(t),t.g=null;var r=2}else if(Zp(t.i,e))n=e.F,NA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Kh(),nt(r,new pA(r,n)),nd(t)}else BA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&T2(t,e)||r==2&&w_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ii(t,5);break;case 4:Ii(t,10);break;case 3:Ii(t,6);break;default:Ii(t,2)}}}function qA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ut(t.pb,t);n||(n=new ki("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Wc(n,"https"),Xh(n)),_2(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),WA(t),UA(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function WA(t){if(t.H=0,t.ma=[],t.h){const e=DA(t.i);(e.length!=0||t.j.length!=0)&&(Iw(t.ma,e),Iw(t.ma,t.j),t.i.i.length=0,n_(t.j),t.j.length=0),t.h.ya()}}function GA(t,e,n){var r=n instanceof ki?Qn(n):new ki(n);if(r.g!="")e&&(r.g=e+"."+r.g),Gc(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ki(null);r&&Wc(s,r),e&&(s.g=e),i&&Gc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),Hl(t,r),r}function KA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new Jh({ob:!0})):new Se(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function HA(){}x=HA.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Hc(){if(so&&!(10<=Number(LM)))throw Error("Environmental error: no available transport.")}Hc.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){We.call(this),this.g=new FA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!al(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!al(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Co(this)}Ge(jt,We);jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=GA(t,null,t.Y),nd(t)};jt.prototype.close=function(){v_(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=u_(t),t=n);e.j.push(new d2(e.fb++,t)),e.H==3&&nd(e)};jt.prototype.N=function(){this.g.h=null,delete this.j,v_(this.g),delete this.g,jt.$.N.call(this)};function QA(t){p_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(QA,p_);function YA(){m_.call(this),this.status=1}Ge(YA,m_);function Co(t){this.g=t}Ge(Co,HA);Co.prototype.Ba=function(){nt(this.g,"a")};Co.prototype.Aa=function(t){nt(this.g,new QA(t))};Co.prototype.za=function(t){nt(this.g,new YA)};Co.prototype.ya=function(){nt(this.g,"b")};function S2(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(fn,S2);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Nf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Nf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Nf(this,r),i=0;break}}this.h=i,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var A2={};function E_(t){return-128<=t&&128>t?bM(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return qs;if(0>t)return Xe(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=em;return new re(e,0)}function XA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(XA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=An(Math.pow(e,s)),r=r.R(s).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var em=4294967296,qs=E_(0),tm=E_(1),xw=E_(16777216);x=re.prototype;x.ea=function(){if(Ht(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:em+r)*e,e*=em}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Ht(this))return"-"+Xe(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var i=Yc(n,e).g;n=Qc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Un(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}x.X=function(t){return t=Qc(this,t),Ht(t)?-1:Un(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(tm)}x.abs=function(){return Ht(this)?Xe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Qc(t,e){return t.add(Xe(e))}x.R=function(t){if(Un(this)||Un(t))return qs;if(Ht(this))return Ht(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(Ht(t))return Xe(this.R(Xe(t)));if(0>this.X(xw)&&0>t.X(xw))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Du(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Du(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Du(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Du(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function Du(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Jo(t,e){this.g=t,this.h=e}function Yc(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new Jo(qs,qs);if(Ht(t))return e=Yc(Xe(t),e),new Jo(Xe(e.g),Xe(e.h));if(Ht(e))return e=Yc(t,Xe(e)),new Jo(Xe(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tm,r=e;0>=r.X(t);)n=bw(n),r=bw(r);var i=cs(n,1),s=cs(r,1);for(r=cs(r,2),n=cs(n,2);!Un(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=cs(r,1),n=cs(n,1)}return e=Qc(t,i.R(e)),new Jo(i,e)}for(i=qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=An(n),o=s.R(e);Ht(o)||0<o.X(t);)n-=r,s=An(n),o=s.R(e);Un(s)&&(s=tm),i=i.add(s),t=Qc(t,o)}return new Jo(i,t)}x.gb=function(t){return Yc(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function bw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function cs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Hc.prototype.createWebChannel=Hc.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Hh.NO_ERROR=0;Hh.TIMEOUT=8;Hh.HTTP_ERROR=6;mA.COMPLETE="complete";gA.EventType=ql;ql.OPEN="a";ql.CLOSE="b";ql.ERROR="c";ql.MESSAGE="d";We.prototype.listen=We.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=An;re.fromString=XA;var R2=function(){return new Hc},P2=function(){return Kh()},Df=Hh,C2=mA,k2=ts,Vw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},xu=gA,N2=Se,D2=fn,Ws=re;const Ow="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let ko="10.4.0";/**
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
 */const Mr=new Ol("@firebase/firestore");function ms(){return Mr.logLevel}function x2(t){Mr.setLogLevel(t)}function S(t,...e){if(Mr.logLevel<=H.DEBUG){const n=e.map(T_);Mr.debug(`Firestore (${ko}): ${t}`,...n)}}function Ce(t,...e){if(Mr.logLevel<=H.ERROR){const n=e.map(T_);Mr.error(`Firestore (${ko}): ${t}`,...n)}}function pn(t,...e){if(Mr.logLevel<=H.WARN){const n=e.map(T_);Mr.warn(`Firestore (${ko}): ${t}`,...n)}}function T_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+t;throw Ce(e),new Error(e)}function U(t,e){t||V()}function b2(t,e){t||V()}function D(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class O2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L2{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new JA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new je(e)}}class M2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class F2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new M2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new U2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function B2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ZA{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=B2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function z(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function e1(t){return t+"\0"}/**
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
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new pe(0,0))}static max(){return new F(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends ml{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const j2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends ml{construct(e,n,r){return new Ee(e,n,r)}static isValidIdentifier(e){return j2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
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
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(J.fromString(e))}static fromName(e){return new k(J.fromString(e).popFirst(5))}static empty(){return new k(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new J(e.slice()))}}/**
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
 */class Xc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function nm(t){return t.fields.find(e=>e.kind===2)}function ui(t){return t.fields.filter(e=>e.kind!==2)}Xc.UNKNOWN_ID=-1;class tc{constructor(e,n){this.fieldPath=e,this.kind=n}}class gl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new gl(0,zt.min())}}function t1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new zt(i,k.empty(),e)}function n1(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zt(F.min(),k.empty(),-1)}static max(){return new zt(F.max(),k.empty(),-1)}}function S_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=k.comparator(t.documentKey,e.documentKey),n!==0?n:z(t.largestBatchId,e.largestBatchId))}/**
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
 */const r1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class i1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==r1)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class rd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new qe,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Da(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=A_(r.target.error);this.m.reject(new Da(e,i))}}static open(e,n,r,i){try{return new rd(n,e.transaction(i,r))}catch(s){throw new Da(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new q2(n)}}class ln{constructor(e,n,r){this.name=e,this.version=n,this.S=r,ln.D(ve())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),ci(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!no())return!1;if(ln.v())return!0;const e=ve(),n=ln.D(e),r=0<n&&n<10,i=ln.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Da(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Da(e,o))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=rd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return l.catch(()=>{}),await a.g,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class z2{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return ci(this.q.delete())}}class Da extends T{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ei(t){return t.name==="IndexedDbTransactionError"}class q2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ci(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),ci(this.store.add(e))}get(e){return ci(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),ci(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),ci(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new v((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=A_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new v((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new z2(a),u=n(a.primaryKey,a.value,l);if(u instanceof v){const c=u.catch(h=>(l.done(),v.reject(h)));r.push(c)}l.isDone?i():l.U===null?a.continue():a.continue(l.U)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ci(t){return new v((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=A_(r.target.error);n(i)}})}let Lw=!1;function A_(t){const e=ln.D(ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Lw||(Lw=!0,setTimeout(()=>{throw r},0)),r}}return t}class W2{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){ei(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zr(n)}await this.te(6e4)})}}class G2{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=n1(s);S_(o,r)>0&&(r=o)}),new zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Pt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Pt.ae=-1;function Ql(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function s1(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function yt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mw(e)),e=K2(t.get(n),e);return Mw(e)}function K2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Mw(t){return t+""}function Rn(t){const e=t.length;if(U(e>=2),e===2)return U(t.charAt(0)===""&&t.charAt(1)===""),J.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Fw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function nc(t,e){return[t,yt(e)]}function o1(t,e,n){return[t,yt(e),n]}const H2={},Q2=["prefixPath","collectionGroup","readTime","documentId"],Y2=["prefixPath","collectionGroup","documentId"],X2=["collectionGroup","readTime","prefixPath","documentId"],J2=["canonicalId","targetId"],Z2=["targetId","path"],eF=["path","targetId"],tF=["collectionId","parent"],nF=["indexId","uid"],rF=["uid","sequenceNumber"],iF=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sF=["indexId","uid","orderedDocumentKey"],oF=["userId","collectionPath","documentId"],aF=["userId","collectionPath","largestBatchId"],lF=["userId","collectionGroup","largestBatchId"],a1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uF=[...a1,"documentOverlays"],l1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],u1=l1,cF=[...u1,"indexConfiguration","indexState","indexEntries"];/**
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
 */class rm extends i1{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function Ke(t,e){const n=D(t);return ln.O(n.ue,e)}/**
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
 */function Uw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ae{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $w(this.data.getIterator())}getIteratorFrom(e){return new $w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class $w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new oe(Ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class h1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function hF(){return typeof atob<"u"}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new h1("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const dF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(U(!!t),typeof t=="string"){let e=0;const n=dF.exec(t);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */function id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function R_(t){const e=t.mapValue.fields.__previous_value__;return id(e)?R_(e):e}function yl(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class fF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rc={nullValue:"NULL_VALUE"};function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?id(t)?4:d1(t)?9007199254740991:10:V()}function xn(t,e){if(t===e)return!0;const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yl(t).isEqual(yl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),a=Fr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),a=Ie(s.doubleValue);return o===a?_l(o)===_l(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Uw(o)!==Uw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(t,e);default:return V()}}function vl(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Br(t,e){if(t===e)return 0;const n=ji(t),r=ji(e);if(n!==r)return z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ie(s.integerValue||s.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Bw(t.timestampValue,e.timestampValue);case 4:return Bw(yl(t),yl(e));case 5:return z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ur(s),l=Ur(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=z(a[u],l[u]);if(c!==0)return c}return z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=z(Ie(s.latitude),Ie(o.latitude));return a!==0?a:z(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Br(a[u],l[u]);if(c)return c}return z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===vr.mapValue&&o===vr.mapValue)return 0;if(s===vr.mapValue)return 1;if(o===vr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=z(l[h],c[h]);if(d!==0)return d;const f=Br(a[l[h]],u[c[h]]);if(f!==0)return f}return z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function Bw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z(t,e);const n=Fr(t),r=Fr(e),i=z(n.seconds,r.seconds);return i!==0?i:z(n.nanos,r.nanos)}function ao(t){return im(t)}function im(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return k.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=im(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${im(n.fields[o])}`;return i+"}"}(t.mapValue):V()}function zi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sm(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function jw(t){return!!t&&"nullValue"in t}function zw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function d1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function pF(t){return"nullValue"in t?rc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?zi($r.empty(),k.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function mF(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?zi($r.empty(),k.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?vr:V()}function qw(t,e){const n=Br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Ww(t,e){const n=Br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(n)}setAll(e){let n=Ee.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(xa(this.value))}}function f1(t){const e=[];return ns(t.fields,(n,r)=>{const i=new Ee([n]);if(ic(r)){const s=f1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,F.min(),F.min(),F.min(),Je.empty(),0)}static newFoundDocument(e,n,r,i){return new ce(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new ce(e,2,n,F.min(),F.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,F.min(),F.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jr{constructor(e,n){this.position=e,this.inclusive=n}}function Gw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=k.comparator(k.fromName(o.referenceValue),n.key):r=Br(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function gF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class p1{}class Q extends p1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _F(e,n,r):n==="array-contains"?new wF(e,r):n==="in"?new w1(e,r):n==="not-in"?new IF(e,r):n==="array-contains-any"?new EF(e,r):new Q(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yF(e,r):new vF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Br(n,this.value)):n!==null&&ji(this.value)===ji(n)&&this.matchesComparison(Br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class te extends p1{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new te(e,n)}matches(e){return lo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lo(t){return t.op==="and"}function om(t){return t.op==="or"}function P_(t){return m1(t)&&lo(t)}function m1(t){for(const e of t.filters)if(e instanceof te)return!1;return!0}function am(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(P_(t))return t.filters.map(e=>am(e)).join(",");{const e=t.filters.map(n=>am(n)).join(",");return`${t.op}(${e})`}}function g1(t,e){return t instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&g1(o,i.filters[a]),!0):!1}(t,e):void V()}function _1(t,e){const n=t.filters.concat(e);return te.create(n,t.op)}function y1(t){return t instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof te?function(n){return n.op.toString()+" {"+n.getFilters().map(y1).join(" ,")+"}"}(t):"Filter"}class _F extends Q{constructor(e,n,r){super(e,n,r),this.key=k.fromName(r.referenceValue)}matches(e){const n=k.comparator(e.key,this.key);return this.matchesComparison(n)}}class yF extends Q{constructor(e,n){super(e,"in",n),this.keys=v1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vF extends Q{constructor(e,n){super(e,"not-in",n),this.keys=v1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>k.fromName(r.referenceValue))}class wF extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wl(n)&&vl(n.arrayValue,this.value)}}class w1 extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vl(this.value.arrayValue,n)}}class IF extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vl(this.value.arrayValue,n)}}class EF extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vl(this.value.arrayValue,r))}}/**
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
 */class TF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function lm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new TF(t,e,n,r,i,s,o)}function qi(t){const e=D(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>am(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.he=n}return e.he}function Yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kw(t.startAt,e.startAt)&&Kw(t.endAt,e.endAt)}function Jc(t){return k.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Zc(t,e){return t.filters.filter(n=>n instanceof Q&&n.field.isEqual(e))}function Hw(t,e,n){let r=rc,i=!0;for(const s of Zc(t,e)){let o=rc,a=!0;switch(s.op){case"<":case"<=":o=pF(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rc}qw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];qw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Qw(t,e,n){let r=vr,i=!0;for(const s of Zc(t,e)){let o=vr,a=!0;switch(s.op){case">=":case">":o=mF(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=vr}Ww({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ww({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class nr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function I1(t,e,n,r,i,s,o,a){return new nr(t,e,n,r,i,s,o,a)}function No(t){return new nr(t)}function Yw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function k_(t){return t.collectionGroup!==null}function Ks(t){const e=D(t);if(e.Pe===null){e.Pe=[];const n=sd(e),r=C_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Gs(n)),e.Pe.push(new Gs(Ee.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Gs(Ee.keyField(),s))}}}return e.Pe}function vt(t){const e=D(t);return e.Ie||(e.Ie=SF(e,Ks(t))),e.Ie}function SF(t,e){if(t.limitType==="F")return lm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gs(i.field,s)});const n=t.endAt?new jr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jr(t.startAt.position,t.startAt.inclusive):null;return lm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function um(t,e){e.getFirstInequalityField(),sd(t);const n=t.filters.concat([e]);return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eh(t,e,n){return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xl(t,e){return Yl(vt(t),vt(e))&&t.limitType===e.limitType}function E1(t){return`${qi(vt(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>y1(i)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ao(i)).join(",")),`Target(${r})`}(vt(t))}; limitType=${t.limitType})`}function Jl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):k.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Gw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ks(r),i)||r.endAt&&!function(o,a,l){const u=Gw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ks(r),i))}(t,e)}function T1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S1(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=AF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AF(t,e,n){const r=t.field.isKeyField()?k.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Br(l,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c1(this.inner)}size(){return this.innerSize}}/**
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
 */const RF=new ae(k.comparator);function kt(){return RF}const A1=new ae(k.comparator);function fa(...t){let e=A1;for(const n of t)e=e.insert(n.key,n);return e}function R1(t){let e=A1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pn(){return ba()}function P1(){return ba()}function ba(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const PF=new ae(k.comparator),CF=new oe(k.comparator);function q(...t){let e=CF;for(const n of t)e=e.add(n);return e}const kF=new oe(z);function N_(){return kF}/**
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
 */function C1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function k1(t){return{integerValue:""+t}}function N1(t,e){return s1(e)?k1(e):C1(t,e)}/**
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
 */class od{constructor(){this._=void 0}}function NF(t,e,n){return t instanceof uo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&id(s)&&(s=R_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Wi?x1(t,e):t instanceof Gi?b1(t,e):function(i,s){const o=D1(i,s),a=Xw(o)+Xw(i.Te);return sm(o)&&sm(i.Te)?k1(a):C1(i.serializer,a)}(t,e)}function DF(t,e,n){return t instanceof Wi?x1(t,e):t instanceof Gi?b1(t,e):n}function D1(t,e){return t instanceof co?function(r){return sm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class uo extends od{}class Wi extends od{constructor(e){super(),this.elements=e}}function x1(t,e){const n=V1(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends od{constructor(e){super(),this.elements=e}}function b1(t,e){let n=V1(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class co extends od{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Xw(t){return Ie(t.integerValue||t.doubleValue)}function V1(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Zl{constructor(e,n){this.field=e,this.transform=n}}function xF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Wi&&i instanceof Wi||r instanceof Gi&&i instanceof Gi?oo(r.elements,i.elements,xn):r instanceof co&&i instanceof co?xn(r.Te,i.Te):r instanceof uo&&i instanceof uo}(t.transform,e.transform)}class bF{constructor(e,n){this.version=e,this.transformResults=n}}class fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ad{}function O1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xo(t.key,fe.none()):new Do(t.key,t.data,fe.none());{const n=t.data,r=Je.empty();let i=new oe(Ee.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new rr(t.key,r,new Ct(i.toArray()),fe.none())}}function VF(t,e,n){t instanceof Do?function(i,s,o){const a=i.value.clone(),l=Zw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(i,s,o){if(!sc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Zw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(L1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Do?function(s,o,a,l){if(!sc(s.precondition,o))return a;const u=s.value.clone(),c=eI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(s,o,a,l){if(!sc(s.precondition,o))return a;const u=eI(s.fieldTransforms,l,o),c=o.data;return c.setAll(L1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return sc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=D1(r.transform,i||null);s!=null&&(n===null&&(n=Je.empty()),n.set(r.field,s))}return n||null}function Jw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&oo(r,i,(s,o)=>xF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Do extends ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function L1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zw(t,e,n){const r=new Map;U(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,DF(o,a,n[i]))}return r}function eI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NF(s,o,e))}return r}class xo extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D_ extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class x_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=O1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,r)=>Jw(n,r))&&oo(this.baseMutations,e.baseMutations,(n,r)=>Jw(n,r))}}class b_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){U(e.mutations.length===r.length);let i=function(){return PF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new b_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class V_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class LF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,X;function M1(t){switch(t){default:return V();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function F1(t){if(t===void 0)return Ce("GRPC error has no .code"),w.UNKNOWN;switch(t){case De.OK:return w.OK;case De.CANCELLED:return w.CANCELLED;case De.UNKNOWN:return w.UNKNOWN;case De.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case De.INTERNAL:return w.INTERNAL;case De.UNAVAILABLE:return w.UNAVAILABLE;case De.UNAUTHENTICATED:return w.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case De.NOT_FOUND:return w.NOT_FOUND;case De.ALREADY_EXISTS:return w.ALREADY_EXISTS;case De.PERMISSION_DENIED:return w.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case De.ABORTED:return w.ABORTED;case De.OUT_OF_RANGE:return w.OUT_OF_RANGE;case De.UNIMPLEMENTED:return w.UNIMPLEMENTED;case De.DATA_LOSS:return w.DATA_LOSS;default:return V()}}(X=De||(De={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function U1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const MF=new Ws([4294967295,4294967295],0);function tI(t){const e=U1().encode(t),n=new D2;return n.update(e),new Uint8Array(n.digest())}function nI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ws([n,r],0),new Ws([i,s],0)]}class O_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pa(`Invalid padding: ${n}`);if(r<0)throw new pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pa(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ws.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Ws.fromNumber(r)));return i.compare(MF)===1&&(i=new Ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=tI(e),[r,i]=nI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new O_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=tI(e),[r,i]=nI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(F.min(),i,new ae(z),kt(),q())}}class tu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tu(r,n,q(),q(),q())}}/**
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
 */class oc{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class $1{constructor(e,n){this.targetId=e,this.ye=n}}class B1{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rI{constructor(){this.we=0,this.Se=sI(),this.be=Fe.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=q(),n=q(),r=q();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new tu(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=sI()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class FF{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=kt(),this.Ue=iI(),this.We=new ae(z)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Jc(s))if(r===0){const o=new k(s.path);this.je(n,o,ce.newNoDocument(o,F.min()))}else U(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ur(r).toUint8Array()}catch(l){if(l instanceof h1)return pn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new O_(o,i,s)}catch(l){return pn(l instanceof pa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Jc(a.target)){const l=new k(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,ce.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=q();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.We,this.$e,r);return this.$e=kt(),this.Ue=iI(),this.We=new ae(z),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new rI,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new oe(z),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new rI),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function iI(){return new ae(k.comparator)}function sI(){return new ae(k.comparator)}const UF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$F=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BF=(()=>({and:"AND",or:"OR"}))();class jF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cm(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zF(t,e){return ho(t,e.toTimestamp())}function ke(t){return U(!!t),F.fromTimestamp(function(n){const r=Fr(n);return new pe(r.seconds,r.nanos)}(t))}function L_(t,e){return function(r){return new J(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function z1(t){const e=J.fromString(t);return U(J1(e)),e}function Il(t,e){return L_(t.databaseId,e.path)}function Nn(t,e){const n=z1(e);if(n.get(1)!==t.databaseId.projectId)throw new T(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new k(W1(n))}function hm(t,e){return L_(t.databaseId,e)}function q1(t){const e=z1(t);return e.length===4?J.emptyPath():W1(e)}function El(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W1(t){return U(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function oI(t,e,n){return{name:Il(t,e),fields:n.value.mapValue.fields}}function G1(t,e,n){const r=Nn(t,e.name),i=ke(e.updateTime),s=e.createTime?ke(e.createTime):F.min(),o=new Je({mapValue:{fields:e.fields}}),a=ce.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function qF(t,e){return"found"in e?function(r,i){U(!!i.found),i.found.name,i.found.updateTime;const s=Nn(r,i.found.name),o=ke(i.found.updateTime),a=i.found.createTime?ke(i.found.createTime):F.min(),l=new Je({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){U(!!i.missing),U(!!i.readTime);const s=Nn(r,i.missing),o=ke(i.readTime);return ce.newNoDocument(s,o)}(t,e):V()}function WF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(U(c===void 0||typeof c=="string"),Fe.fromBase64String(c||"")):(U(c===void 0||c instanceof Uint8Array),Fe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:F1(u.code);return new T(c,u.message||"")}(o);n=new B1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nn(t,r.document.name),s=ke(r.document.updateTime),o=r.document.createTime?ke(r.document.createTime):F.min(),a=new Je({mapValue:{fields:r.document.fields}}),l=ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new oc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nn(t,r.document),s=r.readTime?ke(r.readTime):F.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nn(t,r.document),s=r.removedTargetIds||[];n=new oc([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LF(i,s),a=r.targetId;n=new $1(a,o)}}return n}function Tl(t,e){let n;if(e instanceof Do)n={update:oI(t,e.key,e.value)};else if(e instanceof xo)n={delete:Il(t,e.key)};else if(e instanceof rr)n={update:oI(t,e.key,e.data),updateMask:XF(e.fieldMask)};else{if(!(e instanceof D_))return V();n={verify:Il(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof co)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(t,e.precondition)),n}function dm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?fe.updateTime(ke(s.updateTime)):s.exists!==void 0?fe.exists(s.exists):fe.none()}(e.currentDocument):fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)U(a.setToServerValue==="REQUEST_TIME"),l=new uo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Wi(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Gi(c)}else"increment"in a?l=new co(o,a.increment):V();const u=Ee.fromServerFormat(a.fieldPath);return new Zl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Nn(t,e.update.name),s=new Je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Ct(u.map(c=>Ee.fromServerFormat(c)))}(e.updateMask);return new rr(i,s,o,n,r)}return new Do(i,s,n,r)}if(e.delete){const i=Nn(t,e.delete);return new xo(i,n)}if(e.verify){const i=Nn(t,e.verify);return new D_(i,n)}return V()}function GF(t,e){return t&&t.length>0?(U(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ke(i.updateTime):ke(s);return o.isEqual(F.min())&&(o=ke(s)),new bF(o,i.transformResults||[])}(n,e))):[]}function K1(t,e){return{documents:[hm(t,e.path)]}}function H1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return X1(te.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:_s(h.field),direction:HF(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=cm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Q1(t){let e=q1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){U(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Y1(h);return d instanceof te&&P_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Gs(ys(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ql(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new jr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new jr(f,d)}(n.endAt)),I1(e,i,o,s,a,"F",l,u)}function KF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Y1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ys(n.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ys(n.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(n){return Q.create(ys(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return te.create(n.compositeFilter.filters.map(r=>Y1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(t):V()}function HF(t){return UF[t]}function QF(t){return $F[t]}function YF(t){return BF[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ys(t){return Ee.fromServerFormat(t.fieldPath)}function X1(t){return t instanceof Q?function(n){if(n.op==="=="){if(zw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(jw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(jw(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:QF(n.op),value:n.value}}}(t):t instanceof te?function(n){const r=n.getFilters().map(i=>X1(i));return r.length===1?r[0]:{compositeFilter:{op:YF(n.op),filters:r}}}(t):V()}function XF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function J1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Z1{constructor(e){this.ht=e}}function JF(t,e){let n;if(e.document)n=G1(t.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=k.fromSegments(e.noDocument.path),i=Hi(e.noDocument.readTime);n=ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=k.fromSegments(e.unknownDocument.path),i=Hi(e.unknownDocument.version);n=ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new pe(i[0],i[1]);return F.fromTimestamp(s)}(e.readTime)),n}function aI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:th(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Il(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ho(s,o.version.toTimestamp()),createTime:ho(s,o.createTime.toTimestamp())}}(t.ht,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ki(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:Ki(e.version)}}return r}function th(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ki(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hi(t){const e=new pe(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function hi(t,e){const n=(e.baseMutations||[]).map(s=>dm(t.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>dm(t.ht,s)),i=pe.fromMillis(e.localWriteTimeMs);return new x_(e.batchId,i,n,r)}function ma(t){const e=Hi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Hi(t.lastLimboFreeSnapshotVersion):F.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return U(s.documents.length===1),vt(No(q1(s.documents[0])))}(t.query):function(s){return vt(Q1(s))}(t.query),new $n(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function eR(t,e){const n=Ki(e.snapshotVersion),r=Ki(e.lastLimboFreeSnapshotVersion);let i;i=Jc(e.target)?K1(t.ht,e.target):H1(t.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function M_(t){const e=Q1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eh(e,e.limit,"L"):e}function xf(t,e){return new V_(e.largestBatchId,dm(t.ht,e.overlayMutation))}function lI(t,e){const n=e.path.lastSegment();return[t,yt(e.path.popLast()),n]}function uI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ki(r.readTime),documentKey:yt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class ZF{getBundleMetadata(e,n){return cI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Hi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return cI(e).put(function(i){return{bundleId:i.id,createTime:Ki(ke(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return hI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:M_(s.bundledQuery),readTime:Hi(s.readTime)}}(r)})}saveNamedQuery(e,n){return hI(e).put(function(i){return{name:i.name,readTime:Ki(ke(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function cI(t){return Ke(t,"bundles")}function hI(t){return Ke(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ld{constructor(e,n){this.serializer=e,this.userId=n}static Pt(e,n){const r=n.uid||"";return new ld(e,r)}getOverlay(e,n){return Zo(e).get(lI(this.userId,n)).next(r=>r?xf(this.serializer,r):null)}getOverlays(e,n){const r=Pn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new V_(n,o);i.push(this.It(e,a))}),v.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(yt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zo(e).J("collectionPathOverlayIndex",a))}),v.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Pn(),s=yt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zo(e).G("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=xf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Pn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Zo(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=xf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}It(e,n){return Zo(e).put(function(i,s,o){const[a,l,u]=lI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Tl(i.ht,o.mutation)}}(this.serializer,this.userId,n))}}function Zo(t){return Ke(t,"documentOverlays")}/**
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
 */class di{constructor(){}dt(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.At(n,5);else if("booleanValue"in e)this.At(n,10),n.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(n,15),n.Rt(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.At(n,13):(this.At(n,15),_l(r)?n.Rt(0):n.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(n,20),typeof r=="string"?n.Vt(r):(n.Vt(`${r.seconds||""}`),n.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,n),this.gt(n);else if("bytesValue"in e)this.At(n,30),n.yt(Ur(e.bytesValue)),this.gt(n);else if("referenceValue"in e)this.wt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(n,45),n.Rt(r.latitude||0),n.Rt(r.longitude||0)}else"mapValue"in e?d1(e)?this.At(n,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,n),this.gt(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.gt(n)):V()}ft(e,n){this.At(n,25),this.Dt(e,n)}Dt(e,n){n.Vt(e)}St(e,n){const r=e.fields||{};this.At(n,55);for(const i of Object.keys(r))this.ft(i,n),this.Tt(r[i],n)}bt(e,n){const r=e.values||[];this.At(n,50);for(const i of r)this.Tt(i,n)}wt(e,n){this.At(n,37),k.fromName(e).path.forEach(r=>{this.At(n,60),this.Dt(r,n)})}At(e,n){e.Rt(n)}gt(e){e.Rt(2)}}di.Ct=new di;function eU(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function dI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=eU(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class tU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=dI(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=dI(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class nU{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class rU{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ea{constructor(){this.jt=new tU,this.Ht=new nU(this.jt),this.Jt=new rU(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fi(this.indexId,this.documentKey,this.arrayValue,r)}}function ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=fI(t.arrayValue,e.arrayValue),n!==0?n:(n=fI(t.directionalValue,e.directionalValue),n!==0?n:k.comparator(t.documentKey,e.documentKey)))}function fI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class pI{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const n of e.filters){const r=n;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){U(e.collectionGroup===this.collectionId);const n=nm(e);if(n!==void 0&&!this.rn(n))return!1;const r=ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}_n(){let e=new oe(Ee.comparator);const n=[];for(const r of this.en)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new tc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new tc(r.field,0))}for(const r of this.Xt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new tc(r.field,r.dir==="asc"?0:1)));return new Xc(Xc.UNKNOWN_ID,this.collectionId,n,gl.empty())}rn(e){for(const n of this.en)if(this.sn(n,e))return!0;return!1}sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}on(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function tR(t){var e,n;if(U(t instanceof Q||t instanceof te),t instanceof Q){if(t instanceof w1){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Q.create(t.field,"==",s)))||[];return te.create(i,"or")}return t}const r=t.filters.map(i=>tR(i));return te.create(r,t.op)}function iU(t){if(t.getFilters().length===0)return[];const e=mm(tR(t));return U(nR(e)),fm(e)||pm(e)?[e]:e.getFilters()}function fm(t){return t instanceof Q}function pm(t){return t instanceof te&&P_(t)}function nR(t){return fm(t)||pm(t)||function(n){if(n instanceof te&&om(n)){for(const r of n.getFilters())if(!fm(r)&&!pm(r))return!1;return!0}return!1}(t)}function mm(t){if(U(t instanceof Q||t instanceof te),t instanceof Q)return t;if(t.filters.length===1)return mm(t.filters[0]);const e=t.filters.map(r=>mm(r));let n=te.create(e,t.op);return n=nh(n),nR(n)?n:(U(n instanceof te),U(lo(n)),U(n.filters.length>1),n.filters.reduce((r,i)=>F_(r,i)))}function F_(t,e){let n;return U(t instanceof Q||t instanceof te),U(e instanceof Q||e instanceof te),n=t instanceof Q?e instanceof Q?function(i,s){return te.create([i,s],"and")}(t,e):mI(t,e):e instanceof Q?mI(e,t):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),lo(i)&&lo(s))return _1(i,s.getFilters());const o=om(i)?i:s,a=om(i)?s:i,l=o.filters.map(u=>F_(u,a));return te.create(l,"or")}(t,e),nh(n)}function mI(t,e){if(lo(e))return _1(e,t.getFilters());{const n=e.filters.map(r=>F_(t,r));return te.create(n,"or")}}function nh(t){if(U(t instanceof Q||t instanceof te),t instanceof Q)return t;const e=t.getFilters();if(e.length===1)return nh(e[0]);if(m1(t))return t;const n=e.map(i=>nh(i)),r=[];return n.forEach(i=>{i instanceof Q?r.push(i):i instanceof te&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:te.create(r,t.op)}/**
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
 */class sU{constructor(){this.an=new U_}addToCollectionParentIndex(e,n){return this.an.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(zt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class U_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new oe(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(J.comparator)).toArray()}}/**
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
 */const Vu=new Uint8Array(0);class oU{constructor(e,n){this.user=e,this.databaseId=n,this.un=new U_,this.cn=new ti(r=>qi(r),(r,i)=>Yl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.un.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.un.add(n)});const s={collectionId:r,parent:yt(i)};return gI(e).put(s)}return v.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[e1(n),""],!1,!0);return gI(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Rn(o.parent))}return r})}addFieldIndex(e,n){const r=ta(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=fs(e);return s.next(a=>{o.put(uI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ta(e),i=fs(e),s=ds(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ta(e),r=ds(e),i=fs(e);return n.J().next(()=>r.J()).next(()=>i.J())}createTargetIndexes(e,n){return v.forEach(this.ln(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new pI(r);return this.addFieldIndex(e,s._n())}}))}getDocumentsMatchingTarget(e,n){const r=ds(e);let i=!0;const s=new Map;return v.forEach(this.ln(n),o=>this.hn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=q();const a=[];return v.forEach(s,(l,u)=>{S("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`}(l)} to execute ${qi(n)}`);const c=function(g,I){const A=nm(I);if(A===void 0)return null;for(const C of Zc(g,A.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),h=function(g,I){const A=new Map;for(const C of ui(I))for(const N of Zc(g,C.fieldPath))switch(N.op){case"==":case"in":A.set(C.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return A.set(C.fieldPath.canonicalString(),N.value),Array.from(A.values())}return null}(u,l),d=function(g,I){const A=[];let C=!0;for(const N of ui(I)){const M=N.kind===0?Hw(g,N.fieldPath,g.startAt):Qw(g,N.fieldPath,g.startAt);A.push(M.value),C&&(C=M.inclusive)}return new jr(A,C)}(u,l),f=function(g,I){const A=[];let C=!0;for(const N of ui(I)){const M=N.kind===0?Qw(g,N.fieldPath,g.endAt):Hw(g,N.fieldPath,g.endAt);A.push(M.value),C&&(C=M.inclusive)}return new jr(A,C)}(u,l),y=this.Pn(l,u,d),_=this.Pn(l,u,f),E=this.In(l,u,h),m=this.dn(l.indexId,c,y,d.inclusive,_,f.inclusive,E);return v.forEach(m,p=>r.H(p,n.limit).next(g=>{g.forEach(I=>{const A=k.fromSegments(I.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return v.resolve(null)})}ln(e){let n=this.cn.get(e);return n||(e.filters.length===0?n=[e]:n=iU(te.create(e.filters,"and")).map(r=>lm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,n),n)}dn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.Tn(n[h/u]):Vu,f=this.En(e,d,r[h%u],i),y=this.An(e,d,s[h%u],o),_=a.map(E=>this.En(e,d,E,!0));c.push(...this.createRange(f,y,_))}return c}En(e,n,r,i){const s=new fi(e,k.empty(),n,r);return i?s:s.Zt()}An(e,n,r,i){const s=new fi(e,k.empty(),n,r);return i?s.Zt():s}hn(e,n){const r=new pI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.ln(n);return v.forEach(i,s=>this.hn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new oe(Ee.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Rn(e,n){const r=new ea;for(const i of ui(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);di.Ct.dt(s,o)}return r.zt()}Tn(e){const n=new ea;return di.Ct.dt(e,n.Yt(0)),n.zt()}Vn(e,n){const r=new ea;return di.Ct.dt(zi(this.databaseId,n),r.Yt(function(s){const o=ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}In(e,n,r){if(r===null)return[];let i=[];i.push(new ea);let s=0;for(const o of ui(e)){const a=r[s++];for(const l of i)if(this.mn(n,o.fieldPath)&&wl(a))i=this.fn(i,o,a);else{const u=l.Yt(o.kind);di.Ct.dt(a,u)}}return this.gn(i)}Pn(e,n,r){return this.In(e,n,r.position)}gn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ea;l.seed(a.zt()),di.Ct.dt(o,l.Yt(n.kind)),s.push(l)}return s}mn(e,n){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ta(e),i=fs(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return v.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new gl(h.sequenceNumber,new zt(Hi(h.readTime),new k(Rn(h.documentKey)),h.largestBatchId)):gl.empty(),f=c.fields.map(([y,_])=>new tc(Ee.fromServerFormat(y),_));return new Xc(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ta(e),s=fs(e);return this.pn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,l=>s.put(uI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),v.forEach(a,l=>this.yn(e,i,l).next(u=>{const c=this.wn(s,l);return u.isEqual(c)?v.resolve():this.Sn(e,s,l,u,c)}))))})}bn(e,n,r,i){return ds(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(r,n.key),documentKey:n.key.path.toArray()})}Dn(e,n,r,i){return ds(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(r,n.key),n.key.path.toArray()])}yn(e,n,r){const i=ds(e);let s=new oe(ar);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Vn(r,n)])},(o,a)=>{s=s.add(new fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new oe(ar);const i=this.Rn(n,e);if(i==null)return r;const s=nm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(wl(o))for(const a of o.arrayValue.values||[])r=r.add(new fi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new fi(n.indexId,e.key,Vu,i));return r}Sn(e,n,r,i,s){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),y=u.getIterator();let _=hs(f),E=hs(y);for(;_||E;){let m=!1,p=!1;if(_&&E){const g=c(_,E);g<0?p=!0:g>0&&(m=!0)}else _!=null?p=!0:m=!0;m?(h(E),E=hs(y)):p?(d(_),_=hs(f)):(_=hs(f),E=hs(y))}}(i,s,ar,a=>{o.push(this.bn(e,n,r,a))},a=>{o.push(this.Dn(e,n,r,a))}),v.waitFor(o)}pn(e){let n=1;return fs(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ar(o,a)).filter((o,a,l)=>!a||ar(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ar(o,e),l=ar(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Vu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Vu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return ar(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(_I)}getMinOffset(e,n){return v.mapArray(this.ln(n),r=>this.hn(e,r).next(i=>i||V())).next(_I)}}function gI(t){return Ke(t,"collectionParents")}function ds(t){return Ke(t,"indexEntries")}function ta(t){return Ke(t,"indexConfiguration")}function fs(t){return Ke(t,"indexState")}function _I(t){U(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;S_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new zt(e.readTime,e.documentKey,n)}/**
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
 */const yI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{U(a===1)}));const u=[];for(const c of n.mutations){const h=o1(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return v.waitFor(s).next(()=>u)}function rh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class ud{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,n,r,i){U(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ud(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=vs(e),o=lr(e);return o.add({}).next(a=>{U(typeof a=="number");const l=new x_(a,n,r,i),u=function(f,y,_){const E=_.baseMutations.map(p=>Tl(f.ht,p)),m=_.mutations.map(p=>Tl(f.ht,p));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:E,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new oe((d,f)=>z(d.canonicalString(),f.canonicalString()));for(const d of i){const f=o1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,H2))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=l.keys()}),v.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return lr(e).get(n).next(r=>r?(U(r.userId===this.userId),hi(this.serializer,r)):null)}Fn(e,n){return this.vn[n]?v.resolve(this.vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return lr(e).Z({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(U(a.batchId>=r),s=hi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return lr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).G("userMutationsIndex",n).next(r=>r.map(i=>hi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=nc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return vs(e).Z({range:i},(o,a,l)=>{const[u,c,h]=o,d=Rn(c);if(u===this.userId&&n.path.isEqual(d))return lr(e).get(h).next(f=>{if(!f)throw V();U(f.userId===this.userId),s.push(hi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(z);const i=[];return n.forEach(s=>{const o=nc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=vs(e).Z({range:a},(u,c,h)=>{const[d,f,y]=u,_=Rn(f);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(l)}),v.waitFor(i).next(()=>this.Mn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=nc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new oe(z);return vs(e).Z({range:o},(l,u,c)=>{const[h,d,f]=l,y=Rn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Mn(e,a))}Mn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(lr(e).get(s).next(o=>{if(o===null)throw V();U(o.userId===this.userId),r.push(hi(this.serializer,o))}))}),v.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return rR(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.xn(n.batchId)}),v.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return vs(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Rn(s[1]);i.push(l)}else a.done()}).next(()=>{U(i.length===0)})})}containsKey(e,n){return iR(e,this.userId,n)}On(e){return sR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iR(t,e,n){const r=nc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return vs(t).Z({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function lr(t){return Ke(t,"mutations")}function vs(t){return Ke(t,"documentMutations")}function sR(t){return Ke(t,"mutationQueues")}/**
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
 */class Qi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Qi(0)}static Ln(){return new Qi(-1)}}/**
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
 */class aU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.kn(e).next(n=>{const r=new Qi(n.highestTargetId);return n.highestTargetId=r.next(),this.qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(n=>F.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.kn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.qn(e,i)))}addTargetData(e,n){return this.Qn(e,n).next(()=>this.kn(e).next(r=>(r.targetCount+=1,this.Kn(n,r),this.qn(e,r))))}updateTargetData(e,n){return this.Qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ps(e).delete(n.targetId)).next(()=>this.kn(e)).next(r=>(U(r.targetCount>0),r.targetCount-=1,this.qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ps(e).Z((o,a)=>{const l=ma(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ps(e).Z((r,i)=>{const s=ma(i);n(s)})}kn(e){return vI(e).get("targetGlobalKey").next(n=>(U(n!==null),n))}qn(e,n){return vI(e).put("targetGlobalKey",n)}Qn(e,n){return ps(e).put(eR(this.serializer,n))}Kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.kn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=qi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ps(e).Z({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ma(a);Yl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=pr(e);return n.forEach(o=>{const a=yt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(i)}removeMatchingKeys(e,n,r){const i=pr(e);return v.forEach(n,s=>{const o=yt(s.path);return v.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=pr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=pr(e);let s=q();return i.Z({range:r,Y:!0},(o,a,l)=>{const u=Rn(o[1]),c=new k(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=yt(n.path),i=IDBKeyRange.bound([r],[e1(r)],!1,!0);let s=0;return pr(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,n){return ps(e).get(n).next(r=>r?ma(r):null)}}function ps(t){return Ke(t,"targets")}function vI(t){return Ke(t,"targetGlobal")}function pr(t){return Ke(t,"targetDocuments")}/**
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
 */function wI([t,e],[n,r]){const i=z(t,n);return i===0?z(e,r):i}class lU{constructor(e){this.$n=e,this.buffer=new oe(wI),this.Un=0}Wn(){return++this.Un}Gn(e){const n=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.jn(3e5)})}}class cU{constructor(e,n){this.Hn=e,this.params=n}calculateTargetCount(e,n){return this.Hn.Jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Pt.ae);const r=new lU(n);return this.Hn.forEachTarget(e,i=>r.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>r.Gn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Hn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Hn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(yI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yI):this.Zn(e,n))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ms()<=H.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function hU(t,e){return new cU(t,e)}/**
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
 */class dU{constructor(e,n){this.db=e,this.garbageCollector=hU(this,n)}Jn(e){const n=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Xn(e){let n=0;return this.Yn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Yn(e,n){return this.er(e,(r,i)=>n(i))}addReference(e,n,r){return Ou(e,r)}removeReference(e,n,r){return Ou(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Ou(e,n)}tr(e,n){return function(i,s){let o=!1;return sR(i).X(a=>iR(i,a,s).next(l=>(l&&(o=!0),v.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,a)=>{if(a<=n){const l=this.tr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,F.min()),pr(e).delete(function(h){return[0,yt(h.path)]}(o))))});i.push(l)}}).next(()=>v.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Ou(e,n)}er(e,n){const r=pr(e);let i,s=Pt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Pt.ae&&n(new k(Rn(i)),s),s=u,i=l):s=Pt.ae}).next(()=>{s!==Pt.ae&&n(new k(Rn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ou(t,e){return pr(t).put(function(r,i){return{targetId:0,path:yt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class oR{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return si(e).put(r)}removeEntry(e,n,r){return si(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],th(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.nr(e,r)))}getEntry(e,n){let r=ce.newInvalidDocument(n);return si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(na(n))},(i,s)=>{r=this.rr(n,s)}).next(()=>r)}ir(e,n){let r={size:0,document:ce.newInvalidDocument(n)};return si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(na(n))},(i,s)=>{r={document:this.rr(n,s),size:rh(s)}}).next(()=>r)}getEntries(e,n){let r=kt();return this.sr(e,n,(i,s)=>{const o=this.rr(i,s);r=r.insert(i,o)}).next(()=>r)}_r(e,n){let r=kt(),i=new ae(k.comparator);return this.sr(e,n,(s,o)=>{const a=this.rr(s,o);r=r.insert(s,a),i=i.insert(s,rh(o))}).next(()=>({documents:r,ar:i}))}sr(e,n,r){if(n.isEmpty())return v.resolve();let i=new oe(TI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(na(i.first()),na(i.last())),o=i.getIterator();let a=o.getNext();return si(e).Z({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=k.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&TI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.W(na(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),th(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return si(e).G(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=kt();for(const h of u){const d=this.rr(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Jl(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=kt();const o=EI(n,r),a=EI(n,zt.max());return si(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.rr(k.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new pU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return II(e).get("remoteDocumentGlobalKey").next(n=>(U(!!n),n))}nr(e,n){return II(e).put("remoteDocumentGlobalKey",n)}rr(e,n){if(n){const r=JF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(F.min())))return r}return ce.newInvalidDocument(e)}}function aR(t){return new fU(t)}class pU extends oR{constructor(e,n){super(),this.ur=e,this.trackRemovals=n,this.cr=new ti(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new oe((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.cr.get(s);if(n.push(this.ur.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=aI(this.ur.serializer,o);i=i.add(s.path.popLast());const u=rh(l);r+=u-a.size,n.push(this.ur.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=aI(this.ur.serializer,o.convertToNoDocument(F.min()));n.push(this.ur.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ur.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.ur.ir(e,n).next(r=>(this.cr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ur._r(e,n).next(({documents:r,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function II(t){return Ke(t,"remoteDocumentGlobal")}function si(t){return Ke(t,"remoteDocumentsV14")}function na(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function EI(t,e){const n=e.documentKey.path.toArray();return[t,th(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function TI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=z(n[s],r[s]),i)return i;return i=z(n.length,r.length),i||(i=z(n[n.length-2],r[r.length-2]),i||z(n[n.length-1],r[r.length-1]))}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class mU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,Ct.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kt();const o=ba(),a=function(){return ba()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof rr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Va(c.mutation,u,c.mutation.getFieldMask(),pe.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new mU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new ae((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=P1();c.forEach(d=>{if(!s.has(d)){const f=O1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return k.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(Pn());let a=-1,l=s;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:R1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new k(n)).next(r=>{let i=fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fa();return this.indexManager.getCollectionParents(e,s).next(a=>v.forEach(a,l=>{const u=function(h,d){return new nr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ce.newInvalidDocument(c)))});let a=fa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Va(c.mutation,u,Ct.empty(),pe.now()),Jl(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class gU{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return v.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ke(i.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:M_(i.bundledQuery),readTime:ke(i.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class _U{constructor(){this.overlays=new ae(k.comparator),this.Pr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=Pn(),s=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ae((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Pn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Pn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return v.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new V_(n,r));let s=this.Pr.get(n);s===void 0&&(s=q(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class $_{constructor(){this.Ir=new oe($e.dr),this.Tr=new oe($e.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new $e(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new k(new J([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new k(new J([])),r=new $e(n,e),i=new $e(n,e+1);let s=q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return k.comparator(e.key,n.key)||z(e.yr,n.yr)}static Er(e,n){return z(e.yr,n.yr)||k.comparator(e.key,n.key)}}/**
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
 */class yU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new oe($e.dr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(z);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),v.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;k.isDocumentKey(s)||(s=s.child(""));const o=new $e(new k(s),0);let a=new oe(z);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),v.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){U(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return v.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new $e(n,0),i=this.Sr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vU{constructor(e){this.Fr=e,this.docs=function(){return new ae(k.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let r=kt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kt();const o=n.path,a=new k(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||S_(n1(c),r)<=0||(i.has(c.key)||Jl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}Mr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wU(this)}getSize(e){return v.resolve(this.size)}}class wU extends oR{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class IU{constructor(e){this.persistence=e,this.Or=new ti(n=>qi(n),Yl),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Nr=0,this.Br=new $_,this.targetCount=0,this.Lr=Qi.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),v.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Qn(n),v.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Br.containsKey(n))}}/**
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
 */class uR{constructor(e,n){this.kr={},this.overlays={},this.qr=new Pt(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new IU(this),this.indexManager=new sU,this.remoteDocumentCache=function(i){return new vU(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Z1(n),this.Ur=new gU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _U,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new yU(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const i=new EU(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return v.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class EU extends i1{constructor(e){super(),this.currentSequenceNumber=e}}class cd{constructor(e){this.persistence=e,this.jr=new $_,this.Hr=null}static Jr(e){return new cd(e)}get Yr(){if(this.Hr)return this.Hr;throw V()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),v.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Yr,r=>{const i=k.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return v.or([()=>v.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class TU{constructor(e){this.serializer=e}B(e,n,r,i){const s=new rd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fw,{unique:!0}),l.createObjectStore("documentMutations")}(e),SI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),SI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").G().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fw,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return v.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ei(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),r<7&&i>=7&&(o=o.next(()=>this.ni(s))),r<8&&i>=8&&(o=o.next(()=>this.ri(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ii(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:oF});u.createIndex("collectionPathOverlayIndex",aF,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",lF,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:Q2});u.createIndex("documentKeyIndex",Y2),u.createIndex("collectionGroupIndex",X2)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.oi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:nF}).createIndex("sequenceNumberIndex",rF,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:iF}).createIndex("documentKeyIndex",sF,{unique:!1})}(e))),o}ti(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=rh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ei(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>v.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>v.forEach(a,l=>{U(l.userId===s.userId);const u=hi(this.serializer,l);return rR(e,s.userId,u).next(()=>{})}))}))}ni(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const l=new J(o),u=function(h){return[0,yt(h)]}(l);s.push(n.get(u).next(c=>c?v.resolve():(h=>n.put({targetId:0,path:yt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>v.waitFor(s))})}ri(e,n){e.createObjectStore("collectionParents",{keyPath:tF});const r=n.store("collectionParents"),i=new U_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:yt(l)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const l=new J(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,l],u)=>{const c=Rn(a);return s(c.popLast())}))}ii(e){const n=e.store("targets");return n.Z((r,i)=>{const s=ma(i),o=eR(this.serializer,s);return n.put(o)})}si(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new k(J.fromString(h.document.name).popFirst(5)):h.noDocument?k.fromSegments(h.noDocument.path):h.unknownDocument?k.fromSegments(h.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>v.waitFor(i))}oi(e,n){const r=n.store("mutations"),i=aR(this.serializer),s=new uR(cd.Jr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:q();hi(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),v.forEach(a,(l,u)=>{const c=new je(u),h=ld.Pt(this.serializer,c),d=s.getIndexManager(c),f=ud.Pt(c,this.serializer,d,s.referenceDelegate);return new lR(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new rm(n,Pt.ae),l).next()})})}}function SI(t){t.createObjectStore("targetDocuments",{keyPath:Z2}).createIndex("documentTargetsIndex",eF,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",J2,{unique:!0}),t.createObjectStore("targetGlobal")}const bf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class B_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this._i=s,this.window=o,this.document=a,this.ai=u,this.ui=c,this.ci=h,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!B_.C())throw new T(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dU(this,i),this.Ti=n+"main",this.serializer=new Z1(l),this.Ei=new ln(this.Ti,this.ci,new TU(this.serializer)),this.Kr=new aU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=aR(this.serializer),this.Ur=new ZF,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,c===!1&&Ce("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(w.FAILED_PRECONDITION,bf);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new Pt(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Lu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(n=>{n||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(n=>this.isPrimary&&!n?this.wi(e).next(()=>!1):!!n&&this.Si(e).next(()=>!0))).catch(e=>{if(ei(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return ra(e).get("owner").next(n=>v.resolve(this.bi(n)))}Di(e){return Lu(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ke(n,"clientMetadata");return r.G().next(i=>{const s=this.Fi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ai)for(const n of e)this.Ai.removeItem(this.Mi(n.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?v.resolve(!0):ra(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)){if(this.bi(n)&&this.networkEnabled)return!0;if(!this.bi(n)){if(!n.allowTabSynchronization)throw new T(w.FAILED_PRECONDITION,bf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lu(e).G().next(r=>this.Fi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new rm(e,Pt.ae);return this.wi(n).next(()=>this.Di(n))}),this.Ei.close(),this.Li()}Fi(e,n){return e.filter(r=>this.vi(r.updateTimeMs,n)&&!this.xi(r.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>Lu(e).G().next(n=>this.Fi(n,18e5).map(r=>r.clientId)))}get started(){return this.Qr}getMutationQueue(e,n){return ud.Pt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oU(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return ld.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?cF:l===14?u1:l===13?l1:l===12?uF:l===11?a1:void V()}(this.ci);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new rm(a,this.qr?this.qr.next():Pt.ae),n==="readwrite-primary"?this.pi(o).next(l=>!!l||this.yi(o)).next(l=>{if(!l)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new T(w.FAILED_PRECONDITION,r1);return r(o)}).next(l=>this.Si(o).next(()=>l)):this.qi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}qi(e){return ra(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)&&!this.bi(n)&&!(this.ui||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(w.FAILED_PRECONDITION,bf)})}Si(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ra(e).put("owner",n)}static C(){return ln.C()}wi(e){const n=ra(e);return n.get("owner").next(r=>this.bi(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ce(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Vi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.li=()=>{this.Oi();const n=/(?:Version|Mobile)\/1[456]/;vN()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var n;try{const r=((n=this.Ai)===null||n===void 0?void 0:n.getItem(this.Mi(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ce("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch{}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ra(t){return Ke(t,"owner")}function Lu(t){return Ke(t,"clientMetadata")}function j_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class z_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new z_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class SU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cR{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new SU;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(ms()<=H.DEBUG&&S("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),v.resolve()):(ms()<=H.DEBUG&&S("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(ms()<=H.DEBUG&&S("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(n))):v.resolve())}Hi(e,n){if(Yw(n))return v.resolve(null);let r=vt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=eh(n,null,"F"),r=vt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,eh(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return Yw(n)||i.isEqual(F.min())?v.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?v.resolve(null):(ms()<=H.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.ts(e,o,n,t1(i,-1)).next(a=>a))})}Xi(e,n){let r=new oe(S1(e));return n.forEach((i,s)=>{Jl(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return ms()<=H.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",gs(n)),this.ji.getDocumentsMatchingQuery(e,n,zt.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class AU{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new ae(z),this.ss=new ti(s=>qi(s),Yl),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function hR(t,e,n,r){return new AU(t,e,n,r)}async function dR(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function RU(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=v.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(_=>{const E=u.docVersions.get(y);U(E!==null),_.version.compareTo(E)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fR(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function PU(t,e){const n=D(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Fe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,E,m){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.Kr.updateTargetData(s,f))});let l=kt(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(pR(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(F.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function pR(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function CU(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function po(t,e,n){const r=D(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ei(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function ih(t,e,n){const r=D(t);let i=F.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.ss.get(c);return d!==void 0?v.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,vt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:q())).next(a=>(_R(r,T1(e),a),{documents:a,Ps:s})))}function mR(t,e){const n=D(t),r=D(n.Kr),i=n.rs.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function gR(t,e){const n=D(t),r=n.os.get(e)||F.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n._s.getAllFromCollectionGroup(i,e,t1(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(_R(n,e,i),i))}function _R(t,e,n){let r=t.os.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}async function kU(t,e,n,r){const i=D(t);let s=q(),o=kt();for(const u of n){const c=e.Is(u.metadata.name);u.document&&(s=s.add(c));const h=e.ds(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i._s.newChangeBuffer({trackRemovals:!0}),l=await fo(i,function(c){return vt(No(J.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>pR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Kr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Kr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.ls,c.hs)).next(()=>c.ls)))}async function NU(t,e,n=q()){const r=await fo(t,vt(M_(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ur.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.rs=i.rs.insert(a.targetId,a),i.Kr.updateTargetData(s,a).next(()=>i.Kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ur.saveNamedQuery(s,e))})}function AI(t,e){return`firestore_clients_${t}_${e}`}function RI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Vf(t,e){return`firestore_targets_${t}_${e}`}class sh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new sh(e,n,i.state,s):(Ce("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new Oa(e,r.state,i):(Ce("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=N_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=s1(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new oh(e,s):(Ce("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class q_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new q_(n.clientId,n.onlineState):(Ce("SharedClientState",`Failed to parse online state: ${e}`),null)}}class gm{constructor(){this.activeTargetIds=N_()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Of{constructor(e,n,r,i,s){this.window=e,this._i=n,this.persistenceKey=r,this.fs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new ae(z),this.started=!1,this.ws=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=AI(this.persistenceKey,this.fs),this.bs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ys=this.ys.insert(this.fs,new gm),this.Ds=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Fs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Ms=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const r of e){if(r===this.fs)continue;const i=this.getItem(AI(this.persistenceKey,r));if(i){const s=oh.Es(r,i);s&&(this.ys=this.ys.insert(s.clientId,s))}}this.xs();const n=this.storage.getItem(this.Fs);if(n){const r=this.Os(n);r&&this.Ns(r)}for(const r of this.ws)this.ps(r);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let n=!1;return this.ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.ks(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Vf(this.persistenceKey,e));if(r){const i=Oa.Es(e,r);i&&(n=i.state)}}return this.qs.Rs(e),this.xs(),n}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vf(this.persistenceKey,e))}updateQueryState(e,n,r){this.Qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ks(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return S("SharedClientState","READ",e,n),n}setItem(e,n){S("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const n=e;if(n.storageArea===this.storage){if(S("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ss)return void Ce("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ds.test(n.key)){if(n.newValue==null){const r=this.Us(n.key);return this.Ws(r,null)}{const r=this.Gs(n.key,n.newValue);if(r)return this.Ws(r.clientId,r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(this.vs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(n.key===this.Fs){if(n.newValue!==null){const r=this.Os(n.newValue);if(r)return this.Ns(r)}}else if(n.key===this.bs){const r=function(s){let o=Pt.ae;if(s!=null)try{const a=JSON.parse(s);U(typeof a=="number"),o=a}catch(a){Ce("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Pt.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.Ms){const r=this.Ys(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Zs(i)))}}}else this.ws.push(n)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,n,r){const i=new sh(this.currentUser,e,n,r),s=RI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.As())}ks(e){const n=RI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Ks(e){const n={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(n))}Qs(e,n,r){const i=Vf(this.persistenceKey,e),s=new Oa(e,n,r);this.setItem(i,s.As())}$s(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Ms,n)}Us(e){const n=this.Ds.exec(e);return n?n[1]:null}Gs(e,n){const r=this.Us(e);return oh.Es(r,n)}zs(e,n){const r=this.Cs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return sh.Es(new je(s),i,n)}Hs(e,n){const r=this.vs.exec(e),i=Number(r[1]);return Oa.Es(i,n)}Os(e){return q_.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,n){const r=n?this.ys.insert(e,n):this.ys.remove(e),i=this.Bs(this.ys),s=this.Bs(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.no(o,a).then(()=>{this.ys=r})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let n=N_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class yR{constructor(){this.ro=new gm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DU{so(e){}shutdown(){}}/**
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
 */class PI{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Mu=null;function Lf(){return Mu===null?Mu=function(){return 268435456+Math.round(2147483648*Math.random())}():Mu++,"0x"+Mu.toString(16)}/**
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
 */const xU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bU{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const at="WebChannelConnection";class VU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Lf(),l=this.Do(n,r);S("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(S("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw pn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=xU[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Lf();return new Promise((o,a)=>{const l=new N2;l.setWithCredentials(!0),l.listenOnce(C2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Df.NO_ERROR:const c=l.getResponseJson();S(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Df.TIMEOUT:S(at,`RPC '${e}' ${s} timed out`),a(new T(w.DEADLINE_EXCEEDED,"Request time out"));break;case Df.HTTP_ERROR:const h=l.getStatus();if(S(at,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(f.status);a(new T(y,f.message))}else a(new T(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(w.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{S(at,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);S(at,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Lf(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=R2(),a=P2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");S(at,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new bU({ho:E=>{f?S(at,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(S(at,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),S(at,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},Po:()=>h.close()}),_=(E,m,p)=>{E.listen(m,g=>{try{p(g)}catch(I){setTimeout(()=>{throw I},0)}})};return _(h,xu.EventType.OPEN,()=>{f||S(at,`RPC '${e}' stream ${i} transport opened.`)}),_(h,xu.EventType.CLOSE,()=>{f||(f=!0,S(at,`RPC '${e}' stream ${i} transport closed`),y.mo())}),_(h,xu.EventType.ERROR,E=>{f||(f=!0,pn(at,`RPC '${e}' stream ${i} transport errored:`,E),y.mo(new T(w.UNAVAILABLE,"The operation could not be completed")))}),_(h,xu.EventType.MESSAGE,E=>{var m;if(!f){const p=E.data[0];U(!!p);const g=p,I=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(I){S(at,`RPC '${e}' stream ${i} received error:`,I);const A=I.status;let C=function(ie){const G=De[ie];if(G!==void 0)return F1(G)}(A),N=I.message;C===void 0&&(C=w.INTERNAL,N="Unknown error status: "+A+" with message "+I.message),f=!0,y.mo(new T(C,N)),h.close()}else S(at,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),_(a,k2.STAT_EVENT,E=>{E.stat===Vw.PROXY?S(at,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Vw.NOPROXY&&S(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}/**
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
 *//**
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
 */function vR(){return typeof window<"u"?window:null}function ac(){return typeof document<"u"?document:null}/**
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
 */function nu(t){return new jF(t,!0)}/**
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
 */class W_{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class wR{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new W_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Ce(n.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new T(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OU extends wR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=WF(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ke(o.readTime):F.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=El(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Jc(l)?{documents:K1(s,l)}:{query:H1(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=j1(s,o.resumeToken);const u=cm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=ho(s,o.snapshotVersion.toTimestamp());const u=cm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=KF(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=El(this.serializer),n.removeTarget=e,this.n_(n)}}class LU extends wR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=GF(e.writeResults,e.commitTime),r=ke(e.commitTime);return this.listener.T_(r,n)}return U(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=El(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tl(this.serializer,r))};this.n_(n)}}/**
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
 */class MU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new T(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(w.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(w.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class FU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Ce(n),this.p_=!1):S("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class UU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{ni(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.F_.add(4),await bo(u),u.O_.set("Unknown"),u.F_.delete(4),await ru(u)}(this))})}),this.O_=new FU(r,i)}}async function ru(t){if(ni(t))for(const e of t.M_)await e(!0)}async function bo(t){for(const e of t.M_)await e(!1)}function hd(t,e){const n=D(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),H_(n)?K_(n):Oo(n).Yo()&&G_(n,e))}function Sl(t,e){const n=D(t),r=Oo(n);n.v_.delete(e),r.Yo()&&IR(n,e),n.v_.size===0&&(r.Yo()?r.e_():ni(n)&&n.O_.set("Unknown"))}function G_(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(t).l_(e)}function IR(t,e){t.N_.Le(e),Oo(t).h_(e)}function K_(t){t.N_=new FF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Oo(t).start(),t.O_.y_()}function H_(t){return ni(t)&&!Oo(t).Jo()&&t.v_.size>0}function ni(t){return D(t).F_.size===0}function ER(t){t.N_=void 0}async function $U(t){t.v_.forEach((e,n)=>{G_(t,e)})}async function BU(t,e){ER(t),H_(t)?(t.O_.b_(e),K_(t)):t.O_.set("Unknown")}async function jU(t,e,n){if(t.O_.set("Online"),e instanceof B1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ah(t,r)}else if(e instanceof oc?t.N_.Ge(e):e instanceof $1?t.N_.Xe(e):t.N_.He(e),!n.isEqual(F.min()))try{const r=await fR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(Fe.EMPTY_BYTE_STRING,c.snapshotVersion)),IR(s,l);const h=new $n(c.target,l,u,c.sequenceNumber);G_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await ah(t,r)}}async function ah(t,e,n){if(!ei(e))throw e;t.F_.add(1),await bo(t),t.O_.set("Offline"),n||(n=()=>fR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await ru(t)})}function TR(t,e){return e().catch(n=>ah(t,n,e))}async function Vo(t){const e=D(t),n=zr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;zU(e);)try{const i=await CU(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,qU(e,i)}catch(i){await ah(e,i)}SR(e)&&AR(e)}function zU(t){return ni(t)&&t.C_.length<10}function qU(t,e){t.C_.push(e);const n=zr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function SR(t){return ni(t)&&!zr(t).Jo()&&t.C_.length>0}function AR(t){zr(t).start()}async function WU(t){zr(t).A_()}async function GU(t){const e=zr(t);for(const n of t.C_)e.d_(n.mutations)}async function KU(t,e,n){const r=t.C_.shift(),i=b_.from(r,e,n);await TR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vo(t)}async function HU(t,e){e&&zr(t).I_&&await async function(r,i){if(function(o){return M1(o)&&o!==w.ABORTED}(i.code)){const s=r.C_.shift();zr(r).Xo(),await TR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vo(r)}}(t,e),SR(t)&&AR(t)}async function CI(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=ni(n);n.F_.add(3),await bo(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await ru(n)}async function _m(t,e){const n=D(t);e?(n.F_.delete(2),await ru(n)):e||(n.F_.add(2),await bo(n),n.O_.set("Unknown"))}function Oo(t){return t.B_||(t.B_=function(n,r,i){const s=D(n);return s.V_(),new OU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:$U.bind(null,t),Eo:BU.bind(null,t),c_:jU.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),H_(t)?K_(t):t.O_.set("Unknown")):(await t.B_.stop(),ER(t))})),t.B_}function zr(t){return t.L_||(t.L_=function(n,r,i){const s=D(n);return s.V_(),new LU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:WU.bind(null,t),Eo:HU.bind(null,t),E_:GU.bind(null,t),T_:KU.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Vo(t)):(await t.L_.stop(),t.C_.length>0&&(S("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Q_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Q_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(t,e){if(Ce("AsyncQueue",`${e}: ${t}`),ei(t))return new T(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||k.comparator(n.key,r.key):(n,r)=>k.comparator(n.key,r.key),this.keyedMap=fa(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kI{constructor(){this.k_=new ae(k.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):V():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mo(e,n,Hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class QU{constructor(){this.Q_=void 0,this.listeners=[]}}class YU{constructor(){this.queries=new ti(e=>E1(e),Xl),this.onlineState="Unknown",this.K_=new Set}}async function Y_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new QU),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Lo(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&J_(n)}async function X_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function XU(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&J_(n)}function JU(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function J_(t){t.K_.forEach(e=>{e.next()})}class Z_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class ZU{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
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
 */class NI{constructor(e){this.serializer=e}Is(e){return Nn(this.serializer,e)}ds(e){return e.metadata.exists?G1(this.serializer,e.document,!1):ce.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ke(e)}}class e${constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=RR(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=J.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new NI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Is(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||q()).add(s);n.set(o,a)}}return n}async complete(){const e=await kU(this.localStore,new NI(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await NU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function RR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class PR{constructor(e){this.key=e}}class CR{constructor(e){this.key=e}}class kR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=q(),this.mutatedKeys=q(),this.ua=S1(e),this.ca=new Hs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new kI,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Jl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),E=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,f){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return y(d)-y(f)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new mo(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new kI,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=q(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new CR(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new PR(r))}),n}Ra(e){this.oa=e.Ps,this.aa=q();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return mo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class t${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class n${constructor(e){this.key=e,this.ma=!1}}class r${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ti(a=>E1(a),Xl),this.pa=new Map,this.ya=new Set,this.wa=new ae(k.comparator),this.Sa=new Map,this.ba=new $_,this.Da={},this.Ca=new Map,this.va=Qi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function i$(t,e){const n=iy(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await fo(n.localStore,vt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ey(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&hd(n.remoteStore,o)}return i}async function ey(t,e,n,r,i){t.Ma=(h,d,f)=>async function(_,E,m,p){let g=E.view.ha(m);g.es&&(g=await ih(_.localStore,E.query,!1).then(({documents:C})=>E.view.ha(C,g)));const I=p&&p.targetChanges.get(E.targetId),A=E.view.applyChanges(g,_.isPrimaryClient,I);return ym(_,E.targetId,A.Ea),A.snapshot}(t,h,d,f);const s=await ih(t.localStore,e,!0),o=new kR(e,s.Ps),a=o.ha(s.documents),l=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ym(t,n,u.Ea);const c=new t$(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function s$(t,e){const n=D(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Xl(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await po(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sl(n.remoteStore,r.targetId),go(n,r.targetId)}).catch(Zr)):(go(n,r.targetId),await po(n.localStore,r.targetId,!0))}async function o$(t,e,n){const r=sy(t);try{const i=await function(o,a){const l=D(o),u=pe.now(),c=a.reduce((f,y)=>f.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=kt(),_=q();return l._s.getEntries(f,c).next(E=>{y=E,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const m=[];for(const p of a){const g=OF(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new rr(p.key,g,f1(g.value.mapValue),fe.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(E=>{d=E;const m=E.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,E.batchId,m)})}).then(()=>({batchId:d.batchId,changes:R1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ae(z)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await ir(r,i.changes),await Vo(r.remoteStore)}catch(i){const s=Lo(i,"Failed to persist write");n.reject(s)}}async function NR(t,e){const n=D(t);try{const r=await PU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?U(o.ma):i.removedDocuments.size>0&&(U(o.ma),o.ma=!1))}),await ir(n,r,e)}catch(r){await Zr(r)}}function DI(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&J_(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a$(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ae(k.comparator);o=o.insert(s,ce.newNoDocument(s,F.min()));const a=q().add(s),l=new eu(F.min(),new Map,new ae(z),o,a);await NR(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),ry(r)}else await po(r.localStore,e,!1).then(()=>go(r,e,n)).catch(Zr)}async function l$(t,e){const n=D(t),r=e.batch.batchId;try{const i=await RU(n.localStore,e);ny(n,r,null),ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ir(n,i)}catch(i){await Zr(i)}}async function u$(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(U(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);ny(r,e,n),ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ir(r,i)}catch(i){await Zr(i)}}async function c$(t,e){const n=D(t);ni(n.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=Lo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ty(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function ny(t,e,n){const r=D(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||DR(t,r)})}function DR(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Sl(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),ry(t))}function ym(t,e,n){for(const r of n)r instanceof PR?(t.ba.addReference(r.key,e),h$(t,r)):r instanceof CR?(S("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||DR(t,r.key)):V()}function h$(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(S("SyncEngine","New document in limbo: "+n),t.ya.add(r),ry(t))}function ry(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new k(J.fromString(e)),r=t.va.next();t.Sa.set(r,new n$(n)),t.wa=t.wa.insert(n,r),hd(t.remoteStore,new $n(vt(No(n.path)),r,"TargetPurposeLimboResolution",Pt.ae))}}async function ir(t,e,n){const r=D(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=z_.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,d=>v.forEach(d.Qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>v.forEach(d.Ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ei(h))throw h;S("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.rs.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(d,_)}}}(r.localStore,s))}async function d$(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await dR(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new T(w.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ir(n,r.cs)}}function f$(t,e){const n=D(t),r=n.Sa.get(e);if(r&&r.ma)return q().add(r.key);{let i=q();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function p$(t,e){const n=D(t),r=await ih(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&ym(n,e.targetId,i.Ea),i}async function m$(t,e){const n=D(t);return gR(n.localStore,e).then(r=>ir(n,r))}async function g$(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Fn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):v.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Vo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ny(i,e,r||null),ty(i,e),function(a,l){D(D(a).mutationQueue).xn(l)}(i.localStore,e)):V(),await ir(i,s)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function _$(t,e){const n=D(t);if(iy(n),sy(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await xI(n,r.toArray());n.Fa=!0,await _m(n.remoteStore,!0);for(const s of i)hd(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(go(n,o),po(n.localStore,o,!0))),Sl(n.remoteStore,o)}),await i,await xI(n,r),function(o){const a=D(o);a.Sa.forEach((l,u)=>{Sl(a.remoteStore,u)}),a.ba.gr(),a.Sa=new Map,a.wa=new ae(k.comparator)}(n),n.Fa=!1,await _m(n.remoteStore,!1)}}async function xI(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await fo(r.localStore,vt(l[0]));for(const u of l){const c=r.ga.get(u),h=await p$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await mR(r.localStore,o);a=await fo(r.localStore,u),await ey(r,xR(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.c_(s),i}function xR(t){return I1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function y$(t){return function(n){return D(D(n).persistence).ki()}(D(t).localStore)}async function v$(t,e,n,r){const i=D(t);if(i.Fa)return void S("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await gR(i.localStore,T1(s[0])),a=eu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Fe.EMPTY_BYTE_STRING);await ir(i,o,a);break}case"rejected":await po(i.localStore,e,!0),go(i,e,r);break;default:V()}}async function w$(t,e,n){const r=iy(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){S("SyncEngine","Adding an already active target "+i);continue}const s=await mR(r.localStore,i),o=await fo(r.localStore,s);await ey(r,xR(s),o.targetId,!1,o.resumeToken),hd(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await po(r.localStore,i,!1).then(()=>{Sl(r.remoteStore,i),go(r,i)}).catch(Zr)}}function iy(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=NR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a$.bind(null,e),e.fa.c_=XU.bind(null,e.eventManager),e.fa.xa=JU.bind(null,e.eventManager),e}function sy(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u$.bind(null,e),e}function I$(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,y){const _=D(f),E=ke(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",m=>_.Ur.getBundleMetadata(m,y.id)).then(m=>!!m&&m.createTime.compareTo(E)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(RR(l));const u=new e$(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const d=await u.na(c);d&&a._updateProgress(d),c=await o.Oa()}const h=await u.complete();return await ir(s,h.sa,void 0),await function(f,y){const _=D(f);return _.persistence.runTransaction("Save bundle","readwrite",E=>_.Ur.saveBundleMetadata(E,y))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(l){return pn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class vm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new cR,e.initialUser,this.serializer)}createPersistence(e){return new uR(cd.Jr,this.serializer)}createSharedClientState(e){return new yR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bR extends vm{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await sy(this.Na.syncEngine),await Vo(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hR(this.persistence,new cR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new uU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new G2(n,this.persistence);return new W2(e.asyncQueue,r)}createPersistence(e){const n=j_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new B_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,vR(),ac(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new yR}}class E$ extends bR{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Of&&(this.sharedClientState.syncEngine={Xs:g$.bind(null,n),eo:v$.bind(null,n),no:w$.bind(null,n),ki:y$.bind(null,n),Zs:m$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.gi(async r=>{await _$(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=vR();if(!Of.C(n))throw new T(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=j_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Of(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class oy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>DI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=d$.bind(null,this.syncEngine),await _m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YU}()}createDatastore(e){const n=nu(e.databaseInfo.databaseId),r=function(s){return new VU(s)}(e.databaseInfo);return function(s,o,a,l){return new MU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new UU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>DI(this.syncEngine,n,0),function(){return PI.C()?new PI:new DU}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new r$(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);S("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await bo(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */function bI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class dd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class T${constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new qe,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new ZU(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class S${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=D(i),a=El(o.serializer)+"/documents",l={documents:s.map(d=>Il(o.serializer,d))},u=await o.Fo("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=qF(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());U(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=k.fromPath(r);this.mutations.push(new D_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o=El(s.serializer)+"/documents",a={writes:i.map(l=>Tl(s.serializer,l))};await s.bo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=F.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?fe.exists(!1):fe.updateTime(n):fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new T(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(n)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class A${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.Ho=new W_(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new S$(this.datastore),n=this.Ha(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ja(i)}))}).catch(r=>{this.Ja(r)})})}Ha(e){try{const n=this.updateFunction(e);return!Ql(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!M1(n)}return!1}}/**
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
 */class R${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=ZA.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{S("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(S("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ay(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>CI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>CI(e.remoteStore,s)),t._onlineComponents=e}function VR(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ay(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VR(n))throw n;pn("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new vm)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await lc(t,new vm);return t._offlineComponents}async function fd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await wm(t,t._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await wm(t,new oy))),t._onlineComponents}function OR(t){return ay(t).then(e=>e.persistence)}function ly(t){return ay(t).then(e=>e.localStore)}function LR(t){return fd(t).then(e=>e.remoteStore)}function uy(t){return fd(t).then(e=>e.syncEngine)}function P$(t){return fd(t).then(e=>e.datastore)}async function _o(t){const e=await fd(t),n=e.eventManager;return n.onListen=i$.bind(null,e.syncEngine),n.onUnlisten=s$.bind(null,e.syncEngine),n}function C$(t){return t.asyncQueue.enqueue(async()=>{const e=await OR(t),n=await LR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.F_.delete(0),ru(s)}(n)})}function k$(t){return t.asyncQueue.enqueue(async()=>{const e=await OR(t),n=await LR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.F_.add(0),await bo(s),s.O_.set("Offline")}(n)})}function N$(t,e){const n=new qe;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new T(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Lo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await ly(t),e,n)),n.promise}function MR(t,e,n={}){const r=new qe;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new dd({next:d=>{o.enqueueAndForget(()=>X_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Z_(No(a.path),c,{includeMetadataChanges:!0,Z_:!0});return Y_(s,h)}(await _o(t),t.asyncQueue,e,n,r)),r.promise}function D$(t,e){const n=new qe;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ih(i,s,!0),l=new kR(s,a.Ps),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Lo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await ly(t),e,n)),n.promise}function FR(t,e,n={}){const r=new qe;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new dd({next:d=>{o.enqueueAndForget(()=>X_(s,h)),d.fromCache&&l.source==="server"?u.reject(new T(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Z_(a,c,{includeMetadataChanges:!0,Z_:!0});return Y_(s,h)}(await _o(t),t.asyncQueue,e,n,r)),r.promise}function x$(t,e){const n=new dd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.add(s),s.next()}(await _o(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.delete(s)}(await _o(t),n))}}function b$(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?U1().encode(o):o,function(c,h){return new T$(c,h)}(function(c,h){if(c instanceof Uint8Array)return bI(c,h);if(c instanceof ArrayBuffer)return bI(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,nu(e));t.asyncQueue.enqueueAndForget(async()=>{I$(await uy(t),i,r)})}function V$(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ur.getNamedQuery(o,i))}(await ly(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function UR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const VI=new Map;/**
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
 */function cy(t,e,n){if(!n)throw new T(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $R(t,e,n,r){if(e===!0&&r===!0)throw new T(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function OI(t){if(!k.isDocumentKey(t))throw new T(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function LI(t){if(k.isDocumentKey(t))throw new T(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pd(t);throw new T(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function BR(t,e){if(e<=0)throw new T(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class MI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new T(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new MI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new MI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new V2;switch(r.type){case"firstParty":return new F2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=VI.get(n);r&&(S("ComponentProvider","Removing Datastore"),VI.delete(n),r.terminate())}(this),Promise.resolve()}}function jR(t,e,n,r={}){var i;const s=(t=ee(t,iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=je.MOCK_USER;else{a=gN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(u)}t._authCredentials=new O2(new JA(a,l))}}/**
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
 */let wt=class zR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zR(this.firestore,e,this._query)}},_e=class qR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qR(this.firestore,e,this._key)}},Dr=class WR extends wt{constructor(e,n,r){super(e,n,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new k(e))}withConverter(e){return new WR(this.firestore,e,this._path)}};function GR(t,e,...n){if(t=$(t),cy("collection","path",e),t instanceof iu){const r=J.fromString(e,...n);return LI(r),new Dr(t,null,r)}{if(!(t instanceof _e||t instanceof Dr))throw new T(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return LI(r),new Dr(t.firestore,null,r)}}function O$(t,e){if(t=ee(t,iu),cy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new wt(t,null,function(r){return new nr(J.emptyPath(),r)}(e))}function lh(t,e,...n){if(t=$(t),arguments.length===1&&(e=ZA.V()),cy("doc","path",e),t instanceof iu){const r=J.fromString(e,...n);return OI(r),new _e(t,null,new k(r))}{if(!(t instanceof _e||t instanceof Dr))throw new T(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return OI(r),new _e(t.firestore,t instanceof Dr?t.converter:null,new k(r))}}function KR(t,e){return t=$(t),e=$(e),(t instanceof _e||t instanceof Dr)&&(e instanceof _e||e instanceof Dr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function HR(t,e){return t=$(t),e=$(e),t instanceof wt&&e instanceof wt&&t.firestore===e.firestore&&Xl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class L${constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new W_(this,"async_queue_retry"),this.ou=()=>{const n=ac();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new qe;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ei(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ce("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=Q_.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&V()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Im(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class M${constructor(){this._progressObserver={},this._taskCompletionResolver=new qe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const F$=-1;let Ae=class extends iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new L$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QR(this),this._firestoreClient.terminate()}};function U$(t,e){const n=typeof t=="object"?t:Pg(),r=typeof t=="string"?t:e||"(default)",i=Zi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fN("firestore");s&&jR(i,...s)}return i}function He(t){return t._firestoreClient||QR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new fF(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,UR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new R$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function $$(t,e){XR(t=ee(t,Ae));const n=He(t);if(n._uninitializedComponentsProvider)throw new T(w.FAILED_PRECONDITION,"SDK cache is already specified.");pn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new oy;return YR(n,i,new bR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function B$(t){XR(t=ee(t,Ae));const e=He(t);if(e._uninitializedComponentsProvider)throw new T(w.FAILED_PRECONDITION,"SDK cache is already specified.");pn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new oy;return YR(e,r,new E$(r,n.cacheSizeBytes))}function YR(t,e,n){const r=new qe;return t.asyncQueue.enqueue(async()=>{try{await lc(t,n),await wm(t,e),r.resolve()}catch(i){const s=i;if(!VR(s))throw s;pn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function j$(t){if(t._initialized&&!t._terminated)throw new T(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new qe;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ln.C())return Promise.resolve();const i=r+"main";await ln.delete(i)}(j_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function z$(t){return function(n){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>c$(await uy(n),r)),r.promise}(He(t=ee(t,Ae)))}function q$(t){return C$(He(t=ee(t,Ae)))}function W$(t){return k$(He(t=ee(t,Ae)))}function G$(t,e){const n=He(t=ee(t,Ae)),r=new M$;return b$(n,t._databaseId,e,r),r}function K$(t,e){return V$(He(t=ee(t,Ae)),e).then(n=>n?new wt(t,null,n.query):null)}function XR(t){if(t._initialized||t._terminated)throw new T(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Fe.fromBase64String(e))}catch(n){throw new T(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let qr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let rs=class{constructor(e){this._methodName=e}};/**
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
 */class md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
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
 */const H$=/^__.*__$/;class Q${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Do(e,this.data,n,this.fieldTransforms)}}class JR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class gd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new gd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return uh(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(ZR(this.Tu)&&H$.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class Y${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nu(e)}wu(e,n,r,i=!1){return new gd({Tu:e,methodName:n,yu:r,path:Ee.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function is(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new Y$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _d(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);py("Data must be an object, but it was:",o,r);const a=nP(r,o);let l,u;if(s.merge)l=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Em(e,h,n);if(!o.contains(d))throw new T(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iP(c,d)||c.push(d)}l=new Ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Q$(new Je(a),l,u)}class su extends rs{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof su}}function eP(t,e,n){return new gd({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hy extends rs{_toFieldTransform(e){return new Zl(e.path,new uo)}isEqual(e){return e instanceof hy}}class X$ extends rs{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=eP(this,e,!0),r=this.Su.map(s=>ss(s,n)),i=new Wi(r);return new Zl(e.path,i)}isEqual(e){return this===e}}class J$ extends rs{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=eP(this,e,!0),r=this.Su.map(s=>ss(s,n)),i=new Gi(r);return new Zl(e.path,i)}isEqual(e){return this===e}}class Z$ extends rs{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=new co(e.serializer,N1(e.serializer,this.bu));return new Zl(e.path,n)}isEqual(e){return this===e}}function dy(t,e,n,r){const i=t.wu(1,e,n);py("Data must be an object, but it was:",i,r);const s=[],o=Je.empty();ns(r,(l,u)=>{const c=my(e,l,n);u=$(u);const h=i.mu(c);if(u instanceof su)s.push(c);else{const d=ss(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ct(s);return new JR(o,a,i.fieldTransforms)}function fy(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Em(e,r,n)],l=[i];if(s.length%2!=0)throw new T(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Em(e,s[d])),l.push(s[d+1]);const u=[],c=Je.empty();for(let d=a.length-1;d>=0;--d)if(!iP(u,a[d])){const f=a[d];let y=l[d];y=$(y);const _=o.mu(f);if(y instanceof su)u.push(f);else{const E=ss(y,_);E!=null&&(u.push(f),c.set(f,E))}}const h=new Ct(u);return new JR(c,h,o.fieldTransforms)}function tP(t,e,n,r=!1){return ss(n,t.wu(r?4:3,e))}function ss(t,e){if(rP(t=$(t)))return py("Unsupported field value:",e,t),nP(t,e);if(t instanceof rs)return function(r,i){if(!ZR(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ss(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:ho(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ho(i.serializer,s)}}if(r instanceof md)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:j1(i.serializer,r._byteString)};if(r instanceof _e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:L_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${pd(r)}`)}(t,e)}function nP(t,e){const n={};return c1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,i)=>{const s=ss(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof md||t instanceof bn||t instanceof _e||t instanceof rs)}function py(t,e,n){if(!rP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pd(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Em(t,e,n){if((e=$(e))instanceof qr)return e._internalPath;if(typeof e=="string")return my(t,e);throw uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const e4=new RegExp("[~\\*/\\[\\]]");function my(t,e,n){if(e.search(e4)>=0)throw uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qr(...e.split("."))._internalPath}catch{throw uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(w.INVALID_ARGUMENT,a+t+l)}function iP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Al{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t4 extends Al{data(){return super.data()}}function yd(t,e){return typeof e=="string"?my(t,e):e instanceof qr?e._internalPath:e._delegate._internalPath}/**
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
 */function sP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gy{}class ou extends gy{}function ur(t,e,...n){let r=[];e instanceof gy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof _y).length,a=s.filter(l=>l instanceof vd).length;if(o>1||o>0&&a>0)throw new T(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vd extends ou{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vd(e,n,r)}_apply(e){const n=this._parse(e);return aP(e._query,n),new wt(e.firestore,e.converter,um(e._query,n))}_parse(e){const n=is(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){UI(h,c);const f=[];for(const y of h)f.push(FI(l,s,y));d={arrayValue:{values:f}}}else d=FI(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||UI(h,c),d=tP(a,o,h,c==="in"||c==="not-in");return Q.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function n4(t,e,n){const r=e,i=yd("where",t);return vd._create(i,r,n)}class _y extends gy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _y(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:te.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)aP(o,l),o=um(o,l)}(e._query,n),new wt(e.firestore,e.converter,um(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yy extends ou{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new yy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new T(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new T(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Gs(s,o);return function(u,c){if(C_(u)===null){const h=sd(u);h!==null&&lP(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new wt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new nr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function r4(t,e="asc"){const n=e,r=yd("orderBy",t);return yy._create(r,n)}class wd extends ou{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new wd(e,n,r)}_apply(e){return new wt(e.firestore,e.converter,eh(e._query,this._limit,this._limitType))}}function i4(t){return BR("limit",t),wd._create("limit",t,"F")}function s4(t){return BR("limitToLast",t),wd._create("limitToLast",t,"L")}class Id extends ou{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Id(e,n,r)}_apply(e){const n=oP(e,this.type,this._docOrFields,this._inclusive);return new wt(e.firestore,e.converter,function(i,s){return new nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function o4(...t){return Id._create("startAt",t,!0)}function a4(...t){return Id._create("startAfter",t,!1)}class Ed extends ou{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ed(e,n,r)}_apply(e){const n=oP(e,this.type,this._docOrFields,this._inclusive);return new wt(e.firestore,e.converter,function(i,s){return new nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function l4(...t){return Ed._create("endBefore",t,!1)}function u4(...t){return Ed._create("endAt",t,!0)}function oP(t,e,n,r){if(n[0]=$(n[0]),n[0]instanceof Al)return function(s,o,a,l,u){if(!l)throw new T(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Ks(s))if(h.field.isKeyField())c.push(zi(o,l.key));else{const d=l.data.field(h.field);if(id(d))throw new T(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new T(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new jr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=is(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new T(w.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<c.length;y++){const _=c[y];if(d[y].field.isKeyField()){if(typeof _!="string")throw new T(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!k_(o)&&_.indexOf("/")!==-1)throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const E=o.path.child(J.fromString(_));if(!k.isDocumentKey(E))throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const m=new k(E);f.push(zi(a,m))}else{const E=tP(l,u,_);f.push(E)}}return new jr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function FI(t,e,n){if(typeof(n=$(n))=="string"){if(n==="")throw new T(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k_(e)&&n.indexOf("/")!==-1)throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!k.isDocumentKey(r))throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zi(t,new k(r))}if(n instanceof _e)return zi(t,n._key);throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pd(n)}.`)}function UI(t,e){if(!Array.isArray(t)||t.length===0)throw new T(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aP(t,e){if(e.isInequality()){const r=sd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new T(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=C_(t);s!==null&&lP(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new T(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lP(t,e,n){if(!n.isEqual(e))throw new T(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vy{convertValue(e,n="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ns(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new md(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=R_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yl(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);U(J1(r));const i=new $r(r.get(1),r.get(3)),s=new k(r.popFirst(5));return i.isEqual(n)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Td(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class c4 extends vy{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}/**
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
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Yn=class extends Al{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},La=class extends Yn{data(e={}){return super.data(e)}},Wr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ei(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new La(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ei(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new La(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ei(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:h4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function h4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function uP(t,e){return t instanceof Yn&&e instanceof Yn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Wr&&e instanceof Wr&&t._firestore===e._firestore&&HR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function d4(t){t=ee(t,_e);const e=ee(t.firestore,Ae);return MR(He(e),t._key).then(n=>wy(e,t,n))}class os extends vy{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function f4(t){t=ee(t,_e);const e=ee(t.firestore,Ae),n=He(e),r=new os(e);return N$(n,t._key).then(i=>new Yn(e,r,t._key,i,new Ei(i!==null&&i.hasLocalMutations,!0),t.converter))}function p4(t){t=ee(t,_e);const e=ee(t.firestore,Ae);return MR(He(e),t._key,{source:"server"}).then(n=>wy(e,t,n))}function m4(t){t=ee(t,wt);const e=ee(t.firestore,Ae),n=He(e),r=new os(e);return sP(t._query),FR(n,t._query).then(i=>new Wr(e,r,t,i))}function g4(t){t=ee(t,wt);const e=ee(t.firestore,Ae),n=He(e),r=new os(e);return D$(n,t._query).then(i=>new Wr(e,r,t,i))}function _4(t){t=ee(t,wt);const e=ee(t.firestore,Ae),n=He(e),r=new os(e);return FR(n,t._query,{source:"server"}).then(i=>new Wr(e,r,t,i))}function $I(t,e,n){t=ee(t,_e);const r=ee(t.firestore,Ae),i=Td(t.converter,e,n);return au(r,[_d(is(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fe.none())])}function BI(t,e,n,...r){t=ee(t,_e);const i=ee(t.firestore,Ae),s=is(i);let o;return o=typeof(e=$(e))=="string"||e instanceof qr?fy(s,"updateDoc",t._key,e,n,r):dy(s,"updateDoc",t._key,e),au(i,[o.toMutation(t._key,fe.exists(!0))])}function y4(t){return au(ee(t.firestore,Ae),[new xo(t._key,fe.none())])}function v4(t,e){const n=ee(t.firestore,Ae),r=lh(t),i=Td(t.converter,e);return au(n,[_d(is(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then(()=>r)}function cP(t,...e){var n,r,i;t=$(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Im(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Im(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof _e)u=ee(t.firestore,Ae),c=No(t._key.path),l={next:h=>{e[o]&&e[o](wy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(t,wt);u=ee(h.firestore,Ae),c=h._query;const d=new os(u);l={next:f=>{e[o]&&e[o](new Wr(u,d,h,f))},error:e[o+1],complete:e[o+2]},sP(t._query)}return function(d,f,y,_){const E=new dd(_),m=new Z_(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>Y_(await _o(d),m)),()=>{E.La(),d.asyncQueue.enqueueAndForget(async()=>X_(await _o(d),m))}}(He(u),c,a,l)}function w4(t,e){return x$(He(t=ee(t,Ae)),Im(e)?e:{next:e})}function au(t,e){return function(r,i){const s=new qe;return r.asyncQueue.enqueueAndForget(async()=>o$(await uy(r),i,s)),s.promise}(He(t),e)}function wy(t,e,n){const r=n.docs.get(e._key),i=new os(t);return new Yn(t,i,e._key,r,new Ei(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const I4={maxAttempts:5};/**
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
 */let E4=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=is(e)}set(e,n,r){this._verifyNotCommitted();const i=mr(e,this._firestore),s=Td(i.converter,n,r),o=_d(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=mr(e,this._firestore);let o;return o=typeof(n=$(n))=="string"||n instanceof qr?fy(this._dataReader,"WriteBatch.update",s._key,n,r,i):dy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=mr(e,this._firestore);return this._mutations=this._mutations.concat(new xo(n._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function mr(t,e){if((t=$(t)).firestore!==e)throw new T(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */let T4=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=is(n)}get(n){const r=mr(n,this._firestore),i=new c4(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return V();const o=s[0];if(o.isFoundDocument())return new Al(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Al(this._firestore,i,r._key,null,r.converter);throw V()})}set(n,r,i){const s=mr(n,this._firestore),o=Td(s.converter,r,i),a=_d(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=mr(n,this._firestore);let a;return a=typeof(r=$(r))=="string"||r instanceof qr?fy(this._dataReader,"Transaction.update",o._key,r,i,s):dy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=mr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=mr(e,this._firestore),r=new os(this._firestore);return super.get(e).then(i=>new Yn(this._firestore,r,n._key,i._document,new Ei(!1,!1),n.converter))}};function S4(t,e,n){t=ee(t,Ae);const r=Object.assign(Object.assign({},I4),n);return function(s){if(s.maxAttempts<1)throw new T(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new qe;return s.asyncQueue.enqueueAndForget(async()=>{const u=await P$(s);new A$(s.asyncQueue,u,a,o,l).run()}),l.promise}(He(t),i=>e(new T4(t,i)),r)}/**
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
 */function A4(){return new su("deleteField")}function R4(){return new hy("serverTimestamp")}function P4(...t){return new X$("arrayUnion",t)}function C4(...t){return new J$("arrayRemove",t)}function k4(t){return new Z$("increment",t)}(function(e,n=!0){(function(i){ko=i})(Qr),en(new Vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ae(new L2(r.getProvider("auth-internal")),new $2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_t(Ow,"4.2.0",e),_t(Ow,"4.2.0","esm2017")})();const N4="@firebase/firestore-compat",D4="0.3.18";/**
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
 */function Iy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function jI(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function zI(){if(!hF())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Rl{constructor(e){this._delegate=e}static fromBase64String(e){return zI(),new Rl(bn.fromBase64String(e))}static fromUint8Array(e){return jI(),new Rl(bn.fromUint8Array(e))}toBase64(){return zI(),this._delegate.toBase64()}toUint8Array(){return jI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Tm(t){return x4(t,["next","error","complete"])}function x4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class b4{enableIndexedDbPersistence(e,n){return $$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return B$(e._delegate)}clearIndexedDbPersistence(e){return j$(e._delegate)}}class hP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof $r||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&pn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){jR(this._delegate,e,n,r)}enableNetwork(){return q$(this._delegate)}disableNetwork(){return W$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,$R("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return z$(this._delegate)}onSnapshotsInSync(e){return w4(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new yo(this,GR(this._delegate,e))}catch(n){throw pt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Yt(this,lh(this._delegate,e))}catch(n){throw pt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ft(this,O$(this._delegate,e))}catch(n){throw pt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return S4(this._delegate,n=>e(new dP(this,n)))}batch(){return He(this._delegate),new fP(new E4(this._delegate,e=>au(this._delegate,e)))}loadBundle(e){return G$(this._delegate,e)}namedQuery(e){return K$(this._delegate,e).then(n=>n?new ft(this,n):null)}}class Sd extends vy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rl(new bn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Yt.forKey(n,this.firestore,null)}}function V4(t){x2(t)}class dP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Sd(e)}get(e){const n=Ti(e);return this._delegate.get(n).then(r=>new Pl(this._firestore,new Yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ti(e);return r?(Iy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ti(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ti(e);return this._delegate.delete(n),this}}class fP{constructor(e){this._delegate=e}set(e,n,r){const i=Ti(e);return r?(Iy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ti(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ti(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Yi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new La(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Cl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Yi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Yi(e,new Sd(e),n),i.set(n,s)),s}}Yi.INSTANCES=new WeakMap;class Yt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Sd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Yt(n,new _e(n._delegate,r,new k(e)))}static forKey(e,n,r){return new Yt(n,new _e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new yo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new yo(this.firestore,GR(this._delegate,e))}catch(n){throw pt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=$(e),e instanceof _e?KR(this._delegate,e):!1}set(e,n){n=Iy("DocumentReference.set",n);try{return n?$I(this._delegate,e,n):$I(this._delegate,e)}catch(r){throw pt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?BI(this._delegate,e):BI(this._delegate,e,n,...r)}catch(i){throw pt(i,"updateDoc()","DocumentReference.update()")}}delete(){return y4(this._delegate)}onSnapshot(...e){const n=pP(e),r=mP(e,i=>new Pl(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return cP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=f4(this._delegate):(e==null?void 0:e.source)==="server"?n=p4(this._delegate):n=d4(this._delegate),n.then(r=>new Pl(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Yt(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function pt(t,e,n){return t.message=t.message.replace(e,n),t}function pP(t){for(const e of t)if(typeof e=="object"&&!Tm(e))return e;return{}}function mP(t,e){var n,r;let i;return Tm(t[0])?i=t[0]:Tm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Pl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Yt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return uP(this._delegate,e._delegate)}}class Cl extends Pl{data(e){const n=this._delegate.data(e);return b2(n!==void 0),n}}class ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Sd(e)}where(e,n,r){try{return new ft(this.firestore,ur(this._delegate,n4(e,n,r)))}catch(i){throw pt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ft(this.firestore,ur(this._delegate,r4(e,n)))}catch(r){throw pt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ft(this.firestore,ur(this._delegate,i4(e)))}catch(n){throw pt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ft(this.firestore,ur(this._delegate,s4(e)))}catch(n){throw pt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ft(this.firestore,ur(this._delegate,o4(...e)))}catch(n){throw pt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ft(this.firestore,ur(this._delegate,a4(...e)))}catch(n){throw pt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ft(this.firestore,ur(this._delegate,l4(...e)))}catch(n){throw pt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ft(this.firestore,ur(this._delegate,u4(...e)))}catch(n){throw pt(n,"endAt()","Query.endAt()")}}isEqual(e){return HR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=g4(this._delegate):(e==null?void 0:e.source)==="server"?n=_4(this._delegate):n=m4(this._delegate),n.then(r=>new Sm(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=pP(e),r=mP(e,i=>new Sm(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return cP(this._delegate,n,r)}withConverter(e){return new ft(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class O4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Cl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Sm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Cl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new O4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Cl(this._firestore,r))})}isEqual(e){return uP(this._delegate,e._delegate)}}class yo extends ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Yt(this.firestore,e):null}doc(e){try{return e===void 0?new Yt(this.firestore,lh(this._delegate)):new Yt(this.firestore,lh(this._delegate,e))}catch(n){throw pt(n,"doc()","CollectionReference.doc()")}}add(e){return v4(this._delegate,e).then(n=>new Yt(this.firestore,n))}isEqual(e){return KR(this._delegate,e._delegate)}withConverter(e){return new yo(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ti(t){return ee(t,_e)}/**
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
 */class Ey{constructor(...e){this._delegate=new qr(...e)}static documentId(){return new Ey(Ee.keyField().canonicalString())}isEqual(e){return e=$(e),e instanceof qr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class pi{constructor(e){this._delegate=e}static serverTimestamp(){const e=R4();return e._methodName="FieldValue.serverTimestamp",new pi(e)}static delete(){const e=A4();return e._methodName="FieldValue.delete",new pi(e)}static arrayUnion(...e){const n=P4(...e);return n._methodName="FieldValue.arrayUnion",new pi(n)}static arrayRemove(...e){const n=C4(...e);return n._methodName="FieldValue.arrayRemove",new pi(n)}static increment(e){const n=k4(e);return n._methodName="FieldValue.increment",new pi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const L4={Firestore:hP,GeoPoint:md,Timestamp:pe,Blob:Rl,Transaction:dP,WriteBatch:fP,DocumentReference:Yt,DocumentSnapshot:Pl,Query:ft,QueryDocumentSnapshot:Cl,QuerySnapshot:Sm,CollectionReference:yo,FieldPath:Ey,FieldValue:pi,setLogLevel:V4,CACHE_SIZE_UNLIMITED:F$};function M4(t,e){t.INTERNAL.registerComponent(new Vt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},L4)))}/**
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
 */function F4(t){M4(t,(e,n)=>new hP(e,n,new b4)),t.registerVersion(N4,D4)}F4(Zn);const U4={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},gP=Zn.initializeApp(U4);pb(gP);Zn.auth();const qI=Zn.firestore();U$(gP);Zn.firestore();function $4({name:t,setName:e,setMiddle:n}){const r=async()=>{try{return qI.collection("TempName").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));e(a)})}catch(s){console.error("Error fetching message data:",s)}};b.useEffect(()=>{r()},[]);const i=async()=>{try{return qI.collection("Temp").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));n(a)})}catch(s){console.error("Error fetching message data:",s)}};b.useEffect(()=>{i()},[])}const B4="https://Balanss.github.io/Bot/assets/useLogo-9ef383ff.png";/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const WI="popstate";function j4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=as(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Am("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:_P(s))}function r(i,s){Ad(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return q4(e,n,r,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ad(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z4(){return Math.random().toString(36).substr(2,8)}function GI(t,e){return{usr:t.state,key:t.key,idx:e}}function Am(t,e,n,r){return n===void 0&&(n=null),kl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?as(e):e,{state:n,key:e&&e.key||r||z4()})}function _P(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function as(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function q4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(kl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=wr.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:m})}function d(E,m){a=wr.Push;let p=Am(_.location,E,m);n&&n(p,E),u=c()+1;let g=GI(p,u),I=_.createHref(p);try{o.pushState(g,"",I)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(I)}s&&l&&l({action:a,location:_.location,delta:1})}function f(E,m){a=wr.Replace;let p=Am(_.location,E,m);n&&n(p,E),u=c();let g=GI(p,u),I=_.createHref(p);o.replaceState(g,"",I),s&&l&&l({action:a,location:_.location,delta:0})}function y(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:_P(E);return Me(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(WI,h),l=E,()=>{i.removeEventListener(WI,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let m=y(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(E){return o.go(E)}};return _}var KI;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(KI||(KI={}));function W4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?as(e):e,i=wP(r.pathname||"/",n);if(i==null)return null;let s=yP(t);G4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tB(s[a],iB(i));return o}function yP(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ni([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yP(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Z4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vP(s.path))i(s,o,l)}),e}function vP(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vP(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function G4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eB(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K4=/^:\w+$/,H4=3,Q4=2,Y4=1,X4=10,J4=-2,HI=t=>t==="*";function Z4(t,e){let n=t.split("/"),r=n.length;return n.some(HI)&&(r+=J4),e&&(r+=Q4),n.filter(i=>!HI(i)).reduce((i,s)=>i+(K4.test(s)?H4:s===""?Y4:X4),r)}function eB(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tB(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nB({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Ni([i,c.pathname]),pathnameBase:cB(Ni([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ni([i,c.pathnameBase]))}return s}function nB(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rB(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=sB(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rB(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ad(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iB(t){try{return decodeURI(t)}catch(e){return Ad(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sB(t,e){try{return decodeURIComponent(t)}catch(n){return Ad(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function wP(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oB(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?as(t):t;return{pathname:n?n.startsWith("/")?n:aB(n,e):e,search:hB(r),hash:dB(i)}}function aB(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lB(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uB(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=as(t):(i=kl({},t),Me(!i.pathname||!i.pathname.includes("?"),Mf("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Mf("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Mf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=oB(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ni=t=>t.join("/").replace(/\/\/+/g,"/"),cB=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hB=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dB=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fB(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const IP=["post","put","patch","delete"];new Set(IP);const pB=["get",...IP];new Set(pB);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ch(){return ch=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ch.apply(this,arguments)}const Ty=b.createContext(null),mB=b.createContext(null),Rd=b.createContext(null),Pd=b.createContext(null),Mo=b.createContext({outlet:null,matches:[],isDataRoute:!1}),EP=b.createContext(null);function Cd(){return b.useContext(Pd)!=null}function TP(){return Cd()||Me(!1),b.useContext(Pd).location}function SP(t){b.useContext(Rd).static||b.useLayoutEffect(t)}function AP(){let{isDataRoute:t}=b.useContext(Mo);return t?CB():gB()}function gB(){Cd()||Me(!1);let t=b.useContext(Ty),{basename:e,navigator:n}=b.useContext(Rd),{matches:r}=b.useContext(Mo),{pathname:i}=TP(),s=JSON.stringify(lB(r).map(l=>l.pathnameBase)),o=b.useRef(!1);return SP(()=>{o.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=uB(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ni([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function _B(t,e){return yB(t,e)}function yB(t,e,n){Cd()||Me(!1);let{navigator:r}=b.useContext(Rd),{matches:i}=b.useContext(Mo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=TP(),u;if(e){var c;let _=typeof e=="string"?as(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Me(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=W4(t,{pathname:d}),y=TB(f&&f.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ni([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Ni([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?b.createElement(Pd.Provider,{value:{location:ch({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wr.Pop}},y):y}function vB(){let t=PB(),e=fB(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const wB=b.createElement(vB,null);class IB extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Mo.Provider,{value:this.props.routeContext},b.createElement(EP.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EB(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Ty);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Mo.Provider,{value:e},r)}function TB(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Me(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||wB);let d=e.concat(s.slice(0,u+1)),f=()=>{let y;return c?y=h:l.route.Component?y=b.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,b.createElement(EB,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(IB,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var RP=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(RP||{}),hh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hh||{});function SB(t){let e=b.useContext(Ty);return e||Me(!1),e}function AB(t){let e=b.useContext(mB);return e||Me(!1),e}function RB(t){let e=b.useContext(Mo);return e||Me(!1),e}function PP(t){let e=RB(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function PB(){var t;let e=b.useContext(EP),n=AB(hh.UseRouteError),r=PP(hh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function CB(){let{router:t}=SB(RP.UseNavigateStable),e=PP(hh.UseNavigateStable),n=b.useRef(!1);return SP(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ch({fromRouteId:e},s)))},[t,e])}function ga(t){Me(!1)}function kB(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1}=t;Cd()&&Me(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=as(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,y=b.useMemo(()=>{let _=wP(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return y==null?null:b.createElement(Rd.Provider,{value:l},b.createElement(Pd.Provider,{children:n,value:y}))}function NB(t){let{children:e,location:n}=t;return _B(Rm(e),n)}new Promise(()=>{});function Rm(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Rm(r.props.children,s));return}r.type!==ga&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const DB="startTransition",QI=KP[DB];function xB(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=j4({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=b.useCallback(h=>{u&&QI?QI(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(kB,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var YI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(YI||(YI={}));var XI;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(XI||(XI={}));function CP(){const t=AP();return B.jsx("img",{onClick:()=>{localStorage.setItem("password",""),setTimeout(()=>{t("/")},1e3)},src:B4,className:"w-[100px] mt-4 ml-4 hover:scale-105  cursor-pointer"})}function JI(){const[t,e]=b.useState([]),[n,r]=b.useState([]);b.useEffect(()=>{const o=document.createElement("script");return o.src="https://cdn.voiceflow.com/widget/bundle.mjs",o.type="text/javascript",o.async=!0,o.onload=()=>{window.voiceflow.chat.load({verify:{projectID:"64ee23419c1d720007cc0d3a"},url:"https://general-runtime.voiceflow.com",versionID:"production"})},document.body.appendChild(o),()=>{document.body.removeChild(o)}},[]);const[i,s]=b.useState("");return b.useEffect(()=>{s(localStorage.getItem("password"))},[]),B.jsxs(B.Fragment,{children:[B.jsx(CP,{}),i==="meds"&&B.jsxs("div",{className:"w-1/2 m-auto",children:[B.jsx($4,{name:t,setName:e,setMiddle:r}),B.jsxs("section",{className:"mt-10 mb-10 ml-5 text-white drop-shadow-xl ",children:[B.jsx("h1",{children:" "}),t.map((o,a)=>B.jsxs("h1",{className:"text-2xl  drop-shadow-xl",children:[" ","Hello, ",o.Name===0?"":o.Name," "]},a))]}),B.jsx("br",{}),B.jsx("hr",{className:"w-[50vw] border-yellow-500 border-b-4"}),B.jsx("section",{className:"mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl",children:n.map((o,a)=>B.jsxs("div",{className:"text-2xl",children:[B.jsxs("li",{className:" drop-shadow-xl",children:[o.Name," "]}),B.jsx("li",{className:" drop-shadow-xl",children:o.Location}),B.jsx("li",{className:" drop-shadow-xl",children:o.description})]},a))})]})]})}const bB="https://Balanss.github.io/Bot/assets/animation-41cc76e6.gif";function VB(){const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(!1),o=AP();function a(){s(!0),localStorage.setItem("password",t),setTimeout(()=>{localStorage.getItem("password")==="aimigo"&&o("/foodbot"),localStorage.getItem("password")==="meds"?o("/main"):r("wrong password")},2e3)}return B.jsxs("div",{className:"text-center",children:[B.jsxs("section",{className:"mt-10 mb-10 ml-5 text-white drop-shadow-xl ",children:[B.jsx("h1",{children:" "}),B.jsx("h1",{className:"text-6xl  drop-shadow-xl",children:" Welcome Project Aimigo "})]}),B.jsx("br",{}),B.jsxs("section",{className:"mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl",children:[B.jsxs("h1",{className:"text-xl  drop-shadow-lg",children:[" ","enter password to continue"," "]}),B.jsx("input",{className:"text-2xl text-black drop-shadow-xl mt-2",type:"password",onChange:l=>e(l.target.value)}),B.jsx("br",{}),B.jsxs("button",{className:"  text-2xl text-white drop-shadow-xl mt-2 bg-sky-600 hover:bg-sky-700 rounded-xl p-2",onClick:a,children:[" ","Submit"," "]}),B.jsx("span",{className:"text-center flex items-center justify-center mt-[20px]",children:i?B.jsxs(B.Fragment,{children:[" ",B.jsx("img",{src:bB})," "]}):""}),B.jsx("br",{})]})]})}function OB(){const[t,e]=b.useState("");return b.useEffect(()=>{e(localStorage.getItem("password"))},[]),b.useEffect(()=>{const n=document.createElement("script");return n.src="https://cdn.voiceflow.com/widget/bundle.mjs",n.type="text/javascript",n.async=!0,n.onload=()=>{window.voiceflow.chat.load({verify:{projectID:"651b2a5e4c2fe90007147e86"},url:"https://general-runtime.voiceflow.com",versionID:"production"}),setTimeout(()=>{window.voiceflow.chat.open()},2e3)},document.body.appendChild(n),()=>{document.body.removeChild(n)}},[]),B.jsxs(B.Fragment,{children:[B.jsx(CP,{}),t==="651b2a5e4c2fe90007147e86"&&B.jsx("div",{className:"bot text-center"})]})}function LB(){return B.jsx("div",{children:B.jsx(xB,{children:B.jsxs(NB,{children:[B.jsx(ga,{path:"/",element:B.jsx(VB,{})}),B.jsx(ga,{path:"/foodbot",element:B.jsx(OB,{})}),B.jsx(ga,{path:"/main",element:B.jsx(JI,{})}),B.jsx(ga,{path:"/meds",element:B.jsx(JI,{})})]})})})}Ff.createRoot(document.getElementById("root")).render(B.jsx(lE.StrictMode,{children:B.jsx(LB,{})}));
