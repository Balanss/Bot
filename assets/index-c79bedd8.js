function TP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function SP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var YI={exports:{}},uh={},XI={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),AP=Symbol.for("react.portal"),RP=Symbol.for("react.fragment"),PP=Symbol.for("react.strict_mode"),CP=Symbol.for("react.profiler"),kP=Symbol.for("react.provider"),NP=Symbol.for("react.context"),DP=Symbol.for("react.forward_ref"),xP=Symbol.for("react.suspense"),bP=Symbol.for("react.memo"),VP=Symbol.for("react.lazy"),Ey=Symbol.iterator;function OP(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var JI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZI=Object.assign,eE={};function yo(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||JI}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tE(){}tE.prototype=yo.prototype;function Sm(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||JI}var Am=Sm.prototype=new tE;Am.constructor=Sm;ZI(Am,yo.prototype);Am.isPureReactComponent=!0;var Ty=Array.isArray,nE=Object.prototype.hasOwnProperty,Rm={current:null},rE={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nE.call(e,r)&&!rE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pl,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function LP(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function MP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sy=/\/+/g;function Cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?MP(""+t.key):e.toString(36)}function Lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case AP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cd(o,0):r,Ty(i)?(n="",t!=null&&(n=t.replace(Sy,"$&/")+"/"),Lu(i,e,n,"",function(u){return u})):i!=null&&(Pm(i)&&(i=LP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ty(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cd(s,a);o+=Lu(s,e,n,l,i)}else if(l=OP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cd(s,a++),o+=Lu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lu(t,e,n){if(t==null)return t;var r=[],i=0;return Lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Mu={transition:null},UP={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:Rm};Y.Children={map:lu,forEach:function(t,e,n){lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lu(t,function(){e++}),e},toArray:function(t){return lu(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=yo;Y.Fragment=RP;Y.Profiler=CP;Y.PureComponent=Sm;Y.StrictMode=PP;Y.Suspense=xP;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UP;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ZI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nE.call(e,l)&&!rE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pl,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:NP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kP,_context:t},t.Consumer=t};Y.createElement=iE;Y.createFactory=function(t){var e=iE.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:DP,render:t}};Y.isValidElement=Pm;Y.lazy=function(t){return{$$typeof:VP,_payload:{_status:-1,_result:t},_init:FP}};Y.memo=function(t,e){return{$$typeof:bP,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Mu.transition;Mu.transition={};try{t()}finally{Mu.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return wt.current.useCallback(t,e)};Y.useContext=function(t){return wt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return wt.current.useEffect(t,e)};Y.useId=function(){return wt.current.useId()};Y.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return wt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};Y.useRef=function(t){return wt.current.useRef(t)};Y.useState=function(t){return wt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return wt.current.useTransition()};Y.version="18.2.0";XI.exports=Y;var U=XI.exports;const sE=SP(U),$P=TP({__proto__:null,default:sE},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BP=U,jP=Symbol.for("react.element"),zP=Symbol.for("react.fragment"),qP=Object.prototype.hasOwnProperty,WP=BP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GP={key:!0,ref:!0,__self:!0,__source:!0};function oE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qP.call(e,r)&&!GP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jP,type:t,key:s,ref:o,props:i,_owner:WP.current}}uh.Fragment=zP;uh.jsx=oE;uh.jsxs=oE;YI.exports=uh;var B=YI.exports,bf={},aE={exports:{}},qt={},lE={exports:{}},uE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,W){var K=O.length;O.push(W);e:for(;0<K;){var Re=K-1>>>1,Fe=O[Re];if(0<i(Fe,W))O[Re]=W,O[K]=Fe,K=Re;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],K=O.pop();if(K!==W){O[0]=K;e:for(var Re=0,Fe=O.length,ou=Fe>>>1;Re<ou;){var ri=2*(Re+1)-1,Pd=O[ri],ii=ri+1,au=O[ii];if(0>i(Pd,K))ii<Fe&&0>i(au,Pd)?(O[Re]=au,O[ii]=K,Re=ii):(O[Re]=Pd,O[ri]=K,Re=ri);else if(ii<Fe&&0>i(au,K))O[Re]=au,O[ii]=K,Re=ii;else break e}}return W}function i(O,W){var K=O.sortIndex-W.sortIndex;return K!==0?K:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=O)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function I(O){if(_=!1,g(O),!y)if(n(l)!==null)y=!0,Ad(A);else{var W=n(u);W!==null&&Rd(I,W.startTime-O)}}function A(O,W){y=!1,_&&(_=!1,m(L),L=-1),f=!0;var K=d;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||O&&!nn());){var Re=h.callback;if(typeof Re=="function"){h.callback=null,d=h.priorityLevel;var Fe=Re(h.expirationTime<=W);W=t.unstable_now(),typeof Fe=="function"?h.callback=Fe:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var ou=!0;else{var ri=n(u);ri!==null&&Rd(I,ri.startTime-W),ou=!1}return ou}finally{h=null,d=K,f=!1}}var C=!1,N=null,L=-1,ie=5,G=-1;function nn(){return!(t.unstable_now()-G<ie)}function Lo(){if(N!==null){var O=t.unstable_now();G=O;var W=!0;try{W=N(!0,O)}finally{W?Mo():(C=!1,N=null)}}else C=!1}var Mo;if(typeof p=="function")Mo=function(){p(Lo)};else if(typeof MessageChannel<"u"){var Iy=new MessageChannel,EP=Iy.port2;Iy.port1.onmessage=Lo,Mo=function(){EP.postMessage(null)}}else Mo=function(){E(Lo,0)};function Ad(O){N=O,C||(C=!0,Mo())}function Rd(O,W){L=E(function(){O(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Ad(A))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return O()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=d;d=O;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(O,W,K){var Re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Re+K:Re):K=Re,O){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=K+Fe,O={id:c++,callback:W,priorityLevel:O,startTime:K,expirationTime:Fe,sortIndex:-1},K>Re?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(_?(m(L),L=-1):_=!0,Rd(I,K-Re))):(O.sortIndex=Fe,e(l,O),y||f||(y=!0,Ad(A))),O},t.unstable_shouldYield=nn,t.unstable_wrapCallback=function(O){var W=d;return function(){var K=d;d=W;try{return O.apply(this,arguments)}finally{d=K}}}})(uE);lE.exports=uE;var KP=lE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=U,Bt=KP;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hE=new Set,Oa={};function Yi(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)hE.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,HP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ay={},Ry={};function QP(t){return Vf.call(Ry,t)?!0:Vf.call(Ay,t)?!1:HP.test(t)?Ry[t]=!0:(Ay[t]=!0,!1)}function YP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XP(t,e,n,r){if(e===null||typeof e>"u"||YP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function km(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cm,km);nt[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cm,km);nt[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cm,km);nt[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XP(e,n,i,r)&&(n=null),r||i===null?QP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),ys=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),pE=Symbol.for("react.offscreen"),Py=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=Py&&t[Py]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,kd;function na(t){if(kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kd=e&&e[1]||""}return`
`+kd+t}var Nd=!1;function Dd(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function JP(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Dd(t.type,!1),t;case 11:return t=Dd(t.type.render,!1),t;case 1:return t=Dd(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case ys:return"Portal";case Of:return"Profiler";case Dm:return"StrictMode";case Lf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fE:return(t.displayName||"Context")+".Consumer";case dE:return(t._context.displayName||"Context")+".Provider";case xm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bm:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function ZP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eC(t){var e=mE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){t._valueTracker||(t._valueTracker=eC(t))}function gE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _E(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function $f(t,e){_E(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bf(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ky(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(ra(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function yE(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hu,wE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hu=hu||document.createElement("div"),hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tC=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){tC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function IE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function EE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=IE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nC=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(nC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gf=null;function Vm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,bs=null,Vs=null;function xy(t){if(t=Nl(t)){if(typeof Kf!="function")throw Error(R(280));var e=t.stateNode;e&&(e=ph(e),Kf(t.stateNode,t.type,e))}}function TE(t){bs?Vs?Vs.push(t):Vs=[t]:bs=t}function SE(){if(bs){var t=bs,e=Vs;if(Vs=bs=null,xy(t),e)for(t=0;t<e.length;t++)xy(e[t])}}function AE(t,e){return t(e)}function RE(){}var xd=!1;function PE(t,e,n){if(xd)return t(e,n);xd=!0;try{return AE(t,e,n)}finally{xd=!1,(bs!==null||Vs!==null)&&(RE(),SE())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Hf=!1;if(qn)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Hf=!1}function rC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ga=!1,lc=null,uc=!1,Qf=null,iC={onError:function(t){ga=!0,lc=t}};function sC(t,e,n,r,i,s,o,a,l){ga=!1,lc=null,rC.apply(iC,arguments)}function oC(t,e,n,r,i,s,o,a,l){if(sC.apply(this,arguments),ga){if(ga){var u=lc;ga=!1,lc=null}else throw Error(R(198));uc||(uc=!0,Qf=u)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function by(t){if(Xi(t)!==t)throw Error(R(188))}function aC(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return by(i),t;if(s===r)return by(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function kE(t){return t=aC(t),t!==null?NE(t):null}function NE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=NE(t);if(e!==null)return e;t=t.sibling}return null}var DE=Bt.unstable_scheduleCallback,Vy=Bt.unstable_cancelCallback,lC=Bt.unstable_shouldYield,uC=Bt.unstable_requestPaint,Pe=Bt.unstable_now,cC=Bt.unstable_getCurrentPriorityLevel,Om=Bt.unstable_ImmediatePriority,xE=Bt.unstable_UserBlockingPriority,cc=Bt.unstable_NormalPriority,hC=Bt.unstable_LowPriority,bE=Bt.unstable_IdlePriority,ch=null,Cn=null;function dC(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ch,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:mC,fC=Math.log,pC=Math.LN2;function mC(t){return t>>>=0,t===0?32:31-(fC(t)/pC|0)|0}var du=64,fu=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ia(a):(s&=o,s!==0&&(r=ia(s)))}else o=n&~i,o!==0?r=ia(o):s!==0&&(r=ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function gC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _C(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=gC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function VE(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function yC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function OE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var LE,Mm,ME,FE,UE,Xf=!1,pu=[],Ir=null,Er=null,Tr=null,Fa=new Map,Ua=new Map,dr=[],vC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oy(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function $o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Nl(e),e!==null&&Mm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wC(t,e,n,r,i){switch(e){case"focusin":return Ir=$o(Ir,t,e,n,r,i),!0;case"dragenter":return Er=$o(Er,t,e,n,r,i),!0;case"mouseover":return Tr=$o(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,$o(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ua.set(s,$o(Ua.get(s)||null,t,e,n,r,i)),!0}return!1}function $E(t){var e=mi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=CE(n),e!==null){t.blockedOn=e,UE(t.priority,function(){ME(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gf=r,n.target.dispatchEvent(r),Gf=null}else return e=Nl(n),e!==null&&Mm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ly(t,e,n){Fu(t)&&n.delete(e)}function IC(){Xf=!1,Ir!==null&&Fu(Ir)&&(Ir=null),Er!==null&&Fu(Er)&&(Er=null),Tr!==null&&Fu(Tr)&&(Tr=null),Fa.forEach(Ly),Ua.forEach(Ly)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Xf||(Xf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,IC)))}function $a(t){function e(i){return Bo(i,t)}if(0<pu.length){Bo(pu[0],t);for(var n=1;n<pu.length;n++){var r=pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&Bo(Ir,t),Er!==null&&Bo(Er,t),Tr!==null&&Bo(Tr,t),Fa.forEach(e),Ua.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)$E(n),n.blockedOn===null&&dr.shift()}var Os=Xn.ReactCurrentBatchConfig,dc=!0;function EC(t,e,n,r){var i=ne,s=Os.transition;Os.transition=null;try{ne=1,Fm(t,e,n,r)}finally{ne=i,Os.transition=s}}function TC(t,e,n,r){var i=ne,s=Os.transition;Os.transition=null;try{ne=4,Fm(t,e,n,r)}finally{ne=i,Os.transition=s}}function Fm(t,e,n,r){if(dc){var i=Jf(t,e,n,r);if(i===null)zd(t,e,r,fc,n),Oy(t,r);else if(wC(i,t,e,n,r))r.stopPropagation();else if(Oy(t,r),e&4&&-1<vC.indexOf(t)){for(;i!==null;){var s=Nl(i);if(s!==null&&LE(s),s=Jf(t,e,n,r),s===null&&zd(t,e,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zd(t,e,r,null,n)}}var fc=null;function Jf(t,e,n,r){if(fc=null,t=Vm(r),t=mi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=CE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function BE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cC()){case Om:return 1;case xE:return 4;case cc:case hC:return 16;case bE:return 536870912;default:return 16}default:return 16}}var gr=null,Um=null,Uu=null;function jE(){if(Uu)return Uu;var t,e=Um,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uu=i.slice(t,1<r?1-r:void 0)}function $u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function My(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:My,this.isPropagationStopped=My,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$m=Wt(vo),kl=ye({},vo,{view:0,detail:0}),SC=Wt(kl),Vd,Od,jo,hh=ye({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(Vd=t.screenX-jo.screenX,Od=t.screenY-jo.screenY):Od=Vd=0,jo=t),Vd)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),Fy=Wt(hh),AC=ye({},hh,{dataTransfer:0}),RC=Wt(AC),PC=ye({},kl,{relatedTarget:0}),Ld=Wt(PC),CC=ye({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),kC=Wt(CC),NC=ye({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DC=Wt(NC),xC=ye({},vo,{data:0}),Uy=Wt(xC),bC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OC[t])?!!e[t]:!1}function Bm(){return LC}var MC=ye({},kl,{key:function(t){if(t.key){var e=bC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(t){return t.type==="keypress"?$u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FC=Wt(MC),UC=ye({},hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$y=Wt(UC),$C=ye({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),BC=Wt($C),jC=ye({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),zC=Wt(jC),qC=ye({},hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WC=Wt(qC),GC=[9,13,27,32],jm=qn&&"CompositionEvent"in window,_a=null;qn&&"documentMode"in document&&(_a=document.documentMode);var KC=qn&&"TextEvent"in window&&!_a,zE=qn&&(!jm||_a&&8<_a&&11>=_a),By=String.fromCharCode(32),jy=!1;function qE(t,e){switch(t){case"keyup":return GC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function WE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function HC(t,e){switch(t){case"compositionend":return WE(e);case"keypress":return e.which!==32?null:(jy=!0,By);case"textInput":return t=e.data,t===By&&jy?null:t;default:return null}}function QC(t,e){if(ws)return t==="compositionend"||!jm&&qE(t,e)?(t=jE(),Uu=Um=gr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zE&&e.locale!=="ko"?null:e.data;default:return null}}var YC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YC[t.type]:e==="textarea"}function GE(t,e,n,r){TE(r),e=pc(e,"onChange"),0<e.length&&(n=new $m("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ya=null,Ba=null;function XC(t){r0(t,0)}function dh(t){var e=Ts(t);if(gE(e))return t}function JC(t,e){if(t==="change")return e}var KE=!1;if(qn){var Md;if(qn){var Fd="oninput"in document;if(!Fd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),Fd=typeof qy.oninput=="function"}Md=Fd}else Md=!1;KE=Md&&(!document.documentMode||9<document.documentMode)}function Wy(){ya&&(ya.detachEvent("onpropertychange",HE),Ba=ya=null)}function HE(t){if(t.propertyName==="value"&&dh(Ba)){var e=[];GE(e,Ba,t,Vm(t)),PE(XC,e)}}function ZC(t,e,n){t==="focusin"?(Wy(),ya=e,Ba=n,ya.attachEvent("onpropertychange",HE)):t==="focusout"&&Wy()}function ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dh(Ba)}function tk(t,e){if(t==="click")return dh(e)}function nk(t,e){if(t==="input"||t==="change")return dh(e)}function rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:rk;function ja(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vf.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ky(t,e){var n=Gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gy(n)}}function QE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?QE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function YE(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ik(t){var e=YE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&QE(n.ownerDocument.documentElement,n)){if(r!==null&&zm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ky(n,s);var o=Ky(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sk=qn&&"documentMode"in document&&11>=document.documentMode,Is=null,Zf=null,va=null,ep=!1;function Hy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Is==null||Is!==ac(r)||(r=Is,"selectionStart"in r&&zm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),va&&ja(va,r)||(va=r,r=pc(Zf,"onSelect"),0<r.length&&(e=new $m("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Ud={},XE={};qn&&(XE=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function fh(t){if(Ud[t])return Ud[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in XE)return Ud[t]=e[n];return t}var JE=fh("animationend"),ZE=fh("animationiteration"),e0=fh("animationstart"),t0=fh("transitionend"),n0=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){n0.set(t,e),Yi(e,[t])}for(var $d=0;$d<Qy.length;$d++){var Bd=Qy[$d],ok=Bd.toLowerCase(),ak=Bd[0].toUpperCase()+Bd.slice(1);Gr(ok,"on"+ak)}Gr(JE,"onAnimationEnd");Gr(ZE,"onAnimationIteration");Gr(e0,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(t0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lk=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oC(r,e,void 0,t),t.currentTarget=null}function r0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yy(i,a,u),s=l}}}if(uc)throw t=Qf,uc=!1,Qf=null,t}function le(t,e){var n=e[sp];n===void 0&&(n=e[sp]=new Set);var r=t+"__bubble";n.has(r)||(i0(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),i0(n,t,r,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[_u]){t[_u]=!0,hE.forEach(function(n){n!=="selectionchange"&&(lk.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,jd("selectionchange",!1,e))}}function i0(t,e,n,r){switch(BE(e)){case 1:var i=EC;break;case 4:i=TC;break;default:i=Fm}n=i.bind(null,e,n,t),i=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}PE(function(){var u=s,c=Vm(n),h=[];e:{var d=n0.get(t);if(d!==void 0){var f=$m,y=t;switch(t){case"keypress":if($u(n)===0)break e;case"keydown":case"keyup":f=FC;break;case"focusin":y="focus",f=Ld;break;case"focusout":y="blur",f=Ld;break;case"beforeblur":case"afterblur":f=Ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=RC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=BC;break;case JE:case ZE:case e0:f=kC;break;case t0:f=zC;break;case"scroll":f=SC;break;case"wheel":f=WC;break;case"copy":case"cut":case"paste":f=DC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=$y}var _=(e&4)!==0,E=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=Ma(p,m),I!=null&&_.push(qa(p,I,g)))),E)break;p=p.return}0<_.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Gf&&(y=n.relatedTarget||n.fromElement)&&(mi(y)||y[Wn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?mi(y):null,y!==null&&(E=Xi(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=Fy,I="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=$y,I="onPointerLeave",m="onPointerEnter",p="pointer"),E=f==null?d:Ts(f),g=y==null?d:Ts(y),d=new _(I,p+"leave",f,n,c),d.target=E,d.relatedTarget=g,I=null,mi(c)===u&&(_=new _(m,p+"enter",y,n,c),_.target=g,_.relatedTarget=E,I=_),E=I,f&&y)t:{for(_=f,m=y,p=0,g=_;g;g=os(g))p++;for(g=0,I=m;I;I=os(I))g++;for(;0<p-g;)_=os(_),p--;for(;0<g-p;)m=os(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=os(_),m=os(m)}_=null}else _=null;f!==null&&Xy(h,d,f,_,!1),y!==null&&E!==null&&Xy(h,E,y,_,!0)}}e:{if(d=u?Ts(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var A=JC;else if(zy(d))if(KE)A=nk;else{A=ek;var C=ZC}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=tk);if(A&&(A=A(t,u))){GE(h,A,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Bf(d,"number",d.value)}switch(C=u?Ts(u):window,t){case"focusin":(zy(C)||C.contentEditable==="true")&&(Is=C,Zf=u,va=null);break;case"focusout":va=Zf=Is=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,Hy(h,n,c);break;case"selectionchange":if(sk)break;case"keydown":case"keyup":Hy(h,n,c)}var N;if(jm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ws?qE(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(zE&&n.locale!=="ko"&&(ws||L!=="onCompositionStart"?L==="onCompositionEnd"&&ws&&(N=jE()):(gr=c,Um="value"in gr?gr.value:gr.textContent,ws=!0)),C=pc(u,L),0<C.length&&(L=new Uy(L,t,null,n,c),h.push({event:L,listeners:C}),N?L.data=N:(N=WE(n),N!==null&&(L.data=N)))),(N=KC?HC(t,n):QC(t,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(c=new Uy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}r0(h,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(qa(t,s,i)),s=Ma(t,e),s!=null&&r.push(qa(t,s,i))),t=t.return}return r}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ma(n,s),l!=null&&o.unshift(qa(n,l,a))):i||(l=Ma(n,s),l!=null&&o.push(qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uk=/\r\n?/g,ck=/\u0000|\uFFFD/g;function Jy(t){return(typeof t=="string"?t:""+t).replace(uk,`
`).replace(ck,"")}function yu(t,e,n){if(e=Jy(e),Jy(t)!==e&&n)throw Error(R(425))}function mc(){}var tp=null,np=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,hk=typeof clearTimeout=="function"?clearTimeout:void 0,Zy=typeof Promise=="function"?Promise:void 0,dk=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(t){return Zy.resolve(null).then(t).catch(fk)}:ip;function fk(t){setTimeout(function(){throw t})}function qd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$a(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$a(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),_n="__reactFiber$"+wo,Wa="__reactProps$"+wo,Wn="__reactContainer$"+wo,sp="__reactEvents$"+wo,pk="__reactListeners$"+wo,mk="__reactHandles$"+wo;function mi(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ev(t);t!==null;){if(n=t[_n])return n;t=ev(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[_n]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function ph(t){return t[Wa]||null}var op=[],Ss=-1;function Kr(t){return{current:t}}function he(t){0>Ss||(t.current=op[Ss],op[Ss]=null,Ss--)}function se(t,e){Ss++,op[Ss]=t.current,t.current=e}var br={},ct=Kr(br),kt=Kr(!1),Ni=br;function Qs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function gc(){he(kt),he(ct)}function tv(t,e,n){if(ct.current!==br)throw Error(R(168));se(ct,e),se(kt,n)}function s0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,ZP(t)||"Unknown",i));return ye({},n,r)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Ni=ct.current,se(ct,t),se(kt,kt.current),!0}function nv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=s0(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,he(kt),he(ct),se(ct,t)):he(kt),se(kt,n)}var On=null,mh=!1,Wd=!1;function o0(t){On===null?On=[t]:On.push(t)}function gk(t){mh=!0,o0(t)}function Hr(){if(!Wd&&On!==null){Wd=!0;var t=0,e=ne;try{var n=On;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,mh=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),DE(Om,Hr),i}finally{ne=e,Wd=!1}}return null}var As=[],Rs=0,yc=null,vc=0,Gt=[],Kt=0,Di=null,Ln=1,Mn="";function oi(t,e){As[Rs++]=vc,As[Rs++]=yc,yc=t,vc=e}function a0(t,e,n){Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=Di,Di=t;var r=Ln;t=Mn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-un(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function qm(t){t.return!==null&&(oi(t,1),a0(t,1,0))}function Wm(t){for(;t===yc;)yc=As[--Rs],As[Rs]=null,vc=As[--Rs],As[Rs]=null;for(;t===Di;)Di=Gt[--Kt],Gt[Kt]=null,Mn=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null}var Ut=null,Mt=null,de=!1,an=null;function l0(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Mt=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(de){var e=Mt;if(e){var n=e;if(!rv(t,e)){if(ap(t))throw Error(R(418));e=Sr(n.nextSibling);var r=Ut;e&&rv(t,e)?l0(r,n):(t.flags=t.flags&-4097|2,de=!1,Ut=t)}}else{if(ap(t))throw Error(R(418));t.flags=t.flags&-4097|2,de=!1,Ut=t}}}function iv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function vu(t){if(t!==Ut)return!1;if(!de)return iv(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=Mt)){if(ap(t))throw u0(),Error(R(418));for(;e;)l0(t,e),e=Sr(e.nextSibling)}if(iv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ut?Sr(t.stateNode.nextSibling):null;return!0}function u0(){for(var t=Mt;t;)t=Sr(t.nextSibling)}function Ys(){Mt=Ut=null,de=!1}function Gm(t){an===null?an=[t]:an.push(t)}var _k=Xn.ReactCurrentBatchConfig;function sn(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wc=Kr(null),Ic=null,Ps=null,Km=null;function Hm(){Km=Ps=Ic=null}function Qm(t){var e=wc.current;he(wc),t._currentValue=e}function up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Ic=t,Km=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Km!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Ic===null)throw Error(R(308));Ps=t,Ic.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var gi=null;function Ym(t){gi===null?gi=[t]:gi.push(t)}function c0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Xm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}function sv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=ye({},h,d);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=h}}function ov(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var d0=new cE.Component().refs;function cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gh={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Pr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(cn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Pr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(cn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Pr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(cn(e,t,r,n),Bu(e,t,r))}};function av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,r)||!ja(i,s):!0}function f0(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=Nt(e)?Ni:ct.current,r=e.contextTypes,s=(r=r!=null)?Qs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gh.enqueueReplaceState(e,e.state,null)}function hp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=d0,Xm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=Nt(e)?Ni:ct.current,i.context=Qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gh.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===d0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function wu(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uv(t){var e=t._init;return e(t._payload)}function p0(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Cr(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,I){return p===null||p.tag!==6?(p=Jd(g,m.mode,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,I){var A=g.type;return A===vs?c(m,p,g.props.children,I,g.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&uv(A)===p.type)?(I=i(p,g.props),I.ref=zo(m,p,g),I.return=m,I):(I=Ku(g.type,g.key,g.props,null,m.mode,I),I.ref=zo(m,p,g),I.return=m,I)}function u(m,p,g,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Zd(g,m.mode,I),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,I,A){return p===null||p.tag!==7?(p=Ai(g,m.mode,I,A),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Jd(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case uu:return g=Ku(p.type,p.key,p.props,null,m.mode,g),g.ref=zo(m,null,p),g.return=m,g;case ys:return p=Zd(p,m.mode,g),p.return=m,p;case cr:var I=p._init;return h(m,I(p._payload),g)}if(ra(p)||Fo(p))return p=Ai(p,m.mode,g,null),p.return=m,p;wu(m,p)}return null}function d(m,p,g,I){var A=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(m,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uu:return g.key===A?l(m,p,g,I):null;case ys:return g.key===A?u(m,p,g,I):null;case cr:return A=g._init,d(m,p,A(g._payload),I)}if(ra(g)||Fo(g))return A!==null?null:c(m,p,g,I,null);wu(m,g)}return null}function f(m,p,g,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(p,m,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case uu:return m=m.get(I.key===null?g:I.key)||null,l(p,m,I,A);case ys:return m=m.get(I.key===null?g:I.key)||null,u(p,m,I,A);case cr:var C=I._init;return f(m,p,g,C(I._payload),A)}if(ra(I)||Fo(I))return m=m.get(g)||null,c(p,m,I,A,null);wu(p,I)}return null}function y(m,p,g,I){for(var A=null,C=null,N=p,L=p=0,ie=null;N!==null&&L<g.length;L++){N.index>L?(ie=N,N=null):ie=N.sibling;var G=d(m,N,g[L],I);if(G===null){N===null&&(N=ie);break}t&&N&&G.alternate===null&&e(m,N),p=s(G,p,L),C===null?A=G:C.sibling=G,C=G,N=ie}if(L===g.length)return n(m,N),de&&oi(m,L),A;if(N===null){for(;L<g.length;L++)N=h(m,g[L],I),N!==null&&(p=s(N,p,L),C===null?A=N:C.sibling=N,C=N);return de&&oi(m,L),A}for(N=r(m,N);L<g.length;L++)ie=f(N,m,L,g[L],I),ie!==null&&(t&&ie.alternate!==null&&N.delete(ie.key===null?L:ie.key),p=s(ie,p,L),C===null?A=ie:C.sibling=ie,C=ie);return t&&N.forEach(function(nn){return e(m,nn)}),de&&oi(m,L),A}function _(m,p,g,I){var A=Fo(g);if(typeof A!="function")throw Error(R(150));if(g=A.call(g),g==null)throw Error(R(151));for(var C=A=null,N=p,L=p=0,ie=null,G=g.next();N!==null&&!G.done;L++,G=g.next()){N.index>L?(ie=N,N=null):ie=N.sibling;var nn=d(m,N,G.value,I);if(nn===null){N===null&&(N=ie);break}t&&N&&nn.alternate===null&&e(m,N),p=s(nn,p,L),C===null?A=nn:C.sibling=nn,C=nn,N=ie}if(G.done)return n(m,N),de&&oi(m,L),A;if(N===null){for(;!G.done;L++,G=g.next())G=h(m,G.value,I),G!==null&&(p=s(G,p,L),C===null?A=G:C.sibling=G,C=G);return de&&oi(m,L),A}for(N=r(m,N);!G.done;L++,G=g.next())G=f(N,m,L,G.value,I),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?L:G.key),p=s(G,p,L),C===null?A=G:C.sibling=G,C=G);return t&&N.forEach(function(Lo){return e(m,Lo)}),de&&oi(m,L),A}function E(m,p,g,I){if(typeof g=="object"&&g!==null&&g.type===vs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case uu:e:{for(var A=g.key,C=p;C!==null;){if(C.key===A){if(A=g.type,A===vs){if(C.tag===7){n(m,C.sibling),p=i(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&uv(A)===C.type){n(m,C.sibling),p=i(C,g.props),p.ref=zo(m,C,g),p.return=m,m=p;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===vs?(p=Ai(g.props.children,m.mode,I,g.key),p.return=m,m=p):(I=Ku(g.type,g.key,g.props,null,m.mode,I),I.ref=zo(m,p,g),I.return=m,m=I)}return o(m);case ys:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Zd(g,m.mode,I),p.return=m,m=p}return o(m);case cr:return C=g._init,E(m,p,C(g._payload),I)}if(ra(g))return y(m,p,g,I);if(Fo(g))return _(m,p,g,I);wu(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Jd(g,m.mode,I),p.return=m,m=p),o(m)):n(m,p)}return E}var Xs=p0(!0),m0=p0(!1),Dl={},kn=Kr(Dl),Ga=Kr(Dl),Ka=Kr(Dl);function _i(t){if(t===Dl)throw Error(R(174));return t}function Jm(t,e){switch(se(Ka,e),se(Ga,t),se(kn,Dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}he(kn),se(kn,e)}function Js(){he(kn),he(Ga),he(Ka)}function g0(t){_i(Ka.current);var e=_i(kn.current),n=zf(e,t.type);e!==n&&(se(Ga,t),se(kn,n))}function Zm(t){Ga.current===t&&(he(kn),he(Ga))}var me=Kr(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gd=[];function eg(){for(var t=0;t<Gd.length;t++)Gd[t]._workInProgressVersionPrimary=null;Gd.length=0}var ju=Xn.ReactCurrentDispatcher,Kd=Xn.ReactCurrentBatchConfig,xi=0,ge=null,Oe=null,$e=null,Sc=!1,wa=!1,Ha=0,yk=0;function it(){throw Error(R(321))}function tg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function ng(t,e,n,r,i,s){if(xi=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?Ek:Tk,t=n(r,i),wa){s=0;do{if(wa=!1,Ha=0,25<=s)throw Error(R(301));s+=1,$e=Oe=null,e.updateQueue=null,ju.current=Sk,t=n(r,i)}while(wa)}if(ju.current=Ac,e=Oe!==null&&Oe.next!==null,xi=0,$e=Oe=ge=null,Sc=!1,e)throw Error(R(300));return t}function rg(){var t=Ha!==0;return Ha=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ge.memoizedState=$e=t:$e=$e.next=t,$e}function Zt(){if(Oe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=$e===null?ge.memoizedState:$e.next;if(e!==null)$e=e,Oe=t;else{if(t===null)throw Error(R(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},$e===null?ge.memoizedState=$e=t:$e=$e.next=t}return $e}function Qa(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,bi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qd(t){var e=Zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _0(){}function y0(t,e){var n=ge,r=Zt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,ig(I0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Ya(9,w0.bind(null,n,r,i,e),void 0,null),je===null)throw Error(R(349));xi&30||v0(n,e,i)}return i}function v0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,r){e.value=n,e.getSnapshot=r,E0(e)&&T0(t)}function I0(t,e,n){return n(function(){E0(e)&&T0(t)})}function E0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function T0(t){var e=Gn(t,1);e!==null&&cn(e,t,1,-1)}function cv(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ik.bind(null,ge,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S0(){return Zt().memoizedState}function zu(t,e,n,r){var i=gn();ge.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function _h(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&tg(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function hv(t,e){return zu(8390656,8,t,e)}function ig(t,e){return _h(2048,8,t,e)}function A0(t,e){return _h(4,2,t,e)}function R0(t,e){return _h(4,4,t,e)}function P0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,_h(4,4,P0.bind(null,e,t),n)}function sg(){}function k0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function N0(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function D0(t,e,n){return xi&21?(hn(n,e)||(n=VE(),ge.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function vk(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Kd.transition;Kd.transition={};try{t(!1),e()}finally{ne=n,Kd.transition=r}}function x0(){return Zt().memoizedState}function wk(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))V0(e,n);else if(n=c0(t,e,n,r),n!==null){var i=mt();cn(n,t,r,i),O0(n,e,r)}}function Ik(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))V0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ym(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=c0(t,e,i,r),n!==null&&(i=mt(),cn(n,t,r,i),O0(n,e,r))}}function b0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function V0(t,e){wa=Sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}var Ac={readContext:Jt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Ek={readContext:Jt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zu(4194308,4,P0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zu(4194308,4,t,e)},useInsertionEffect:function(t,e){return zu(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wk.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:cv,useDebugValue:sg,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=cv(!1),e=t[0];return t=vk.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=gn();if(de){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),je===null)throw Error(R(349));xi&30||v0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hv(I0.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,w0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=je.identifierPrefix;if(de){var n=Mn,r=Ln;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tk={readContext:Jt,useCallback:k0,useContext:Jt,useEffect:ig,useImperativeHandle:C0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:N0,useReducer:Hd,useRef:S0,useState:function(){return Hd(Qa)},useDebugValue:sg,useDeferredValue:function(t){var e=Zt();return D0(e,Oe.memoizedState,t)},useTransition:function(){var t=Hd(Qa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:y0,useId:x0,unstable_isNewReconciler:!1},Sk={readContext:Jt,useCallback:k0,useContext:Jt,useEffect:ig,useImperativeHandle:C0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:N0,useReducer:Qd,useRef:S0,useState:function(){return Qd(Qa)},useDebugValue:sg,useDeferredValue:function(t){var e=Zt();return Oe===null?e.memoizedState=t:D0(e,Oe.memoizedState,t)},useTransition:function(){var t=Qd(Qa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:y0,useId:x0,unstable_isNewReconciler:!1};function Zs(t,e){try{var n="",r=e;do n+=JP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ak=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pc||(Pc=!0,Ep=r),dp(t,e)},n}function M0(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dp(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ak;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Uk.bind(null,t,e,n),e.then(t,t))}function fv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var Rk=Xn.ReactCurrentOwner,At=!1;function ht(t,e,n,r){e.child=t===null?m0(e,null,n,r):Xs(e,t.child,n,r)}function mv(t,e,n,r,i){n=n.render;var s=e.ref;return Ls(e,i),r=ng(t,e,n,r,s,i),n=rg(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(de&&n&&qm(e),e.flags|=1,ht(t,e,r,i),e.child)}function gv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F0(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ja(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return fp(t,e,n,r,i)}function U0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ks,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(ks,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(ks,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(ks,Ot),Ot|=r;return ht(t,e,i,n),e.child}function $0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fp(t,e,n,r,i){var s=Nt(n)?Ni:ct.current;return s=Qs(e,s),Ls(e,i),n=ng(t,e,n,r,s,i),r=rg(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(de&&r&&qm(e),e.flags|=1,ht(t,e,n,i),e.child)}function _v(t,e,n,r,i){if(Nt(n)){var s=!0;_c(e)}else s=!1;if(Ls(e,i),e.stateNode===null)qu(t,e),f0(e,n,r),hp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=Nt(n)?Ni:ct.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&lv(e,o,r,u),hr=!1;var d=e.memoizedState;o.state=d,Ec(e,r,o,i),l=e.memoizedState,a!==r||d!==l||kt.current||hr?(typeof c=="function"&&(cp(e,n,c,r),l=e.memoizedState),(a=hr||av(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=Nt(n)?Ni:ct.current,l=Qs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&lv(e,o,r,l),hr=!1,d=e.memoizedState,o.state=d,Ec(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||kt.current||hr?(typeof f=="function"&&(cp(e,n,f,r),y=e.memoizedState),(u=hr||av(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return pp(t,e,n,r,s,i)}function pp(t,e,n,r,i,s){$0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nv(e,n,!1),Kn(t,e,s);r=e.stateNode,Rk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&nv(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?tv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tv(t,e.context,!1),Jm(t,e.containerInfo)}function yv(t,e,n,r,i){return Ys(),Gm(i),e.flags|=256,ht(t,e,n,r),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function j0(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gp(n),e.memoizedState=mp,t):og(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mp,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function og(t,e){return e=wh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,r){return r!==null&&Gm(r),Xs(e,t.child,null,n),t=og(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yd(Error(R(422))),Iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wh({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=gp(o),e.memoizedState=mp,s);if(!(e.mode&1))return Iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Yd(s,r,void 0),Iu(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),cn(r,t,i,-1))}return dg(),r=Yd(Error(R(421))),Iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$k.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Sr(i.nextSibling),Ut=e,de=!0,an=null,t!==null&&(Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=Di,Ln=t.id,Mn=t.overflow,Di=e),e=og(e,r.children),e.flags|=4096,e)}function vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),up(t.return,e,n)}function Xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vv(t,n,e);else if(t.tag===19)vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xd(e,!0,n,null,s);break;case"together":Xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ck(t,e,n){switch(e.tag){case 3:B0(e),Ys();break;case 5:g0(e);break;case 1:Nt(e.type)&&_c(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?j0(t,e,n):(se(me,me.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return z0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return Kn(t,e,n)}var q0,_p,W0,G0;q0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_p=function(){};W0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_i(kn.current);var s=null;switch(n){case"input":i=Uf(t,i),r=Uf(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=jf(t,i),r=jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mc)}qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};G0=function(t,e,n,r){n!==r&&(e.flags|=4)};function qo(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kk(t,e,n){var r=e.pendingProps;switch(Wm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Nt(e.type)&&gc(),st(e),null;case 3:return r=e.stateNode,Js(),he(kt),he(ct),eg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Ap(an),an=null))),_p(t,e),st(e),null;case 5:Zm(e);var i=_i(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)W0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return st(e),null}if(t=_i(kn.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<sa.length;i++)le(sa[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Cy(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Ny(r,s),le("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":cu(r),ky(r,s,!0);break;case"textarea":cu(r),Dy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Wa]=r,q0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wf(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<sa.length;i++)le(sa[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Cy(t,r),i=Uf(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":Ny(t,r),i=jf(t,r),le("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?EE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&La(t,l):typeof l=="number"&&La(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Nm(t,s,l,o))}switch(n){case"input":cu(t),ky(t,r,!1);break;case"textarea":cu(t),Dy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)G0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=_i(Ka.current),_i(kn.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return st(e),null;case 13:if(he(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Mt!==null&&e.mode&1&&!(e.flags&128))u0(),Ys(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[_n]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else an!==null&&(Ap(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Le===0&&(Le=3):dg())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Js(),_p(t,e),t===null&&za(e.stateNode.containerInfo),st(e),null;case 10:return Qm(e.type._context),st(e),null;case 17:return Nt(e.type)&&gc(),st(e),null;case 19:if(he(me),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qo(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>eo&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return st(e),null}else 2*Pe()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return hg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Nk(t,e){switch(Wm(e),e.tag){case 1:return Nt(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),he(kt),he(ct),eg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zm(e),null;case 13:if(he(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(me),null;case 4:return Js(),null;case 10:return Qm(e.type._context),null;case 22:case 23:return hg(),null;case 24:return null;default:return null}}var Eu=!1,at=!1,Dk=typeof WeakSet=="function"?WeakSet:Set,V=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){we(t,e,r)}}var wv=!1;function xk(t,e){if(tp=dc,t=YE(),zm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},dc=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,E=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:sn(e.type,_),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(I){we(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return y=wv,wv=!1,y}function Ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yp(e,n,s)}i=i.next}while(i!==r)}}function yh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Wa],delete e[sp],delete e[pk],delete e[mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H0(t){return t.tag===5||t.tag===3||t.tag===4}function Iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(r!==4&&(t=t.child,t!==null))for(wp(t,e,n),t=t.sibling;t!==null;)wp(t,e,n),t=t.sibling}function Ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ip(t,e,n),t=t.sibling;t!==null;)Ip(t,e,n),t=t.sibling}var He=null,on=!1;function sr(t,e,n){for(n=n.child;n!==null;)Q0(t,e,n),n=n.sibling}function Q0(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ch,n)}catch{}switch(n.tag){case 5:at||Cs(n,e);case 6:var r=He,i=on;He=null,sr(t,e,n),He=r,on=i,He!==null&&(on?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(on?(t=He,n=n.stateNode,t.nodeType===8?qd(t.parentNode,n):t.nodeType===1&&qd(t,n),$a(t)):qd(He,n.stateNode));break;case 4:r=He,i=on,He=n.stateNode.containerInfo,on=!0,sr(t,e,n),He=r,on=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!at&&(Cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,sr(t,e,n),at=r):sr(t,e,n);break;default:sr(t,e,n)}}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dk),e.forEach(function(r){var i=Bk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,on=!1;break e;case 3:He=a.stateNode.containerInfo,on=!0;break e;case 4:He=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(He===null)throw Error(R(160));Q0(s,o,i),He=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y0(e,t),e=e.sibling}function Y0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),mn(t),r&4){try{Ia(3,t,t.return),yh(3,t)}catch(_){we(t,t.return,_)}try{Ia(5,t,t.return)}catch(_){we(t,t.return,_)}}break;case 1:rn(e,t),mn(t),r&512&&n!==null&&Cs(n,n.return);break;case 5:if(rn(e,t),mn(t),r&512&&n!==null&&Cs(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(_){we(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_E(i,s),Wf(a,o);var u=Wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?EE(i,h):c==="dangerouslySetInnerHTML"?wE(i,h):c==="children"?La(i,h):Nm(i,c,h,u)}switch(a){case"input":$f(i,s);break;case"textarea":yE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(i,!!s.multiple,s.defaultValue,!0):xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wa]=s}catch(_){we(t,t.return,_)}}break;case 6:if(rn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){we(t,t.return,_)}}break;case 3:if(rn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(_){we(t,t.return,_)}break;case 4:rn(e,t),mn(t);break;case 13:rn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ug=Pe())),r&4&&Ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,rn(e,t),at=u):rn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(h=V=c;V!==null;){switch(d=V,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ia(4,d,d.return);break;case 1:Cs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){we(r,n,_)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Sv(h);continue}}f!==null?(f.return=d,V=f):Sv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=IE("display",o))}catch(_){we(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){we(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rn(e,t),mn(t),r&4&&Ev(t);break;case 21:break;default:rn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=Iv(t);Ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iv(t);wp(t,a,o);break;default:throw Error(R(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bk(t,e,n){V=t,X0(t)}function X0(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Eu;var u=at;if(Eu=o,(at=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Av(i):l!==null?(l.return=o,V=l):Av(i);for(;s!==null;)V=s,X0(s),s=s.sibling;V=i,Eu=a,at=u}Tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):Tv(t)}}function Tv(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ov(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ov(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&$a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}at||e.flags&512&&vp(e)}catch(d){we(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function Sv(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Av(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yh(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{vp(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{vp(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var Vk=Math.ceil,Rc=Xn.ReactCurrentDispatcher,ag=Xn.ReactCurrentOwner,Xt=Xn.ReactCurrentBatchConfig,Z=0,je=null,be=null,Je=0,Ot=0,ks=Kr(0),Le=0,Xa=null,bi=0,vh=0,lg=0,Ea=null,St=null,ug=0,eo=1/0,Vn=null,Pc=!1,Ep=null,Rr=null,Tu=!1,_r=null,Cc=0,Ta=0,Tp=null,Wu=-1,Gu=0;function mt(){return Z&6?Pe():Wu!==-1?Wu:Wu=Pe()}function Pr(t){return t.mode&1?Z&2&&Je!==0?Je&-Je:_k.transition!==null?(Gu===0&&(Gu=VE()),Gu):(t=ne,t!==0||(t=window.event,t=t===void 0?16:BE(t.type)),t):1}function cn(t,e,n,r){if(50<Ta)throw Ta=0,Tp=null,Error(R(185));Cl(t,n,r),(!(Z&2)||t!==je)&&(t===je&&(!(Z&2)&&(vh|=n),Le===4&&fr(t,Je)),Dt(t,r),n===1&&Z===0&&!(e.mode&1)&&(eo=Pe()+500,mh&&Hr()))}function Dt(t,e){var n=t.callbackNode;_C(t,e);var r=hc(t,t===je?Je:0);if(r===0)n!==null&&Vy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vy(n),e===1)t.tag===0?gk(Rv.bind(null,t)):o0(Rv.bind(null,t)),dk(function(){!(Z&6)&&Hr()}),n=null;else{switch(OE(r)){case 1:n=Om;break;case 4:n=xE;break;case 16:n=cc;break;case 536870912:n=bE;break;default:n=cc}n=sT(n,J0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J0(t,e){if(Wu=-1,Gu=0,Z&6)throw Error(R(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=hc(t,t===je?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kc(t,r);else{e=r;var i=Z;Z|=2;var s=eT();(je!==t||Je!==e)&&(Vn=null,eo=Pe()+500,Si(t,e));do try{Mk();break}catch(a){Z0(t,a)}while(1);Hm(),Rc.current=s,Z=i,be!==null?e=0:(je=null,Je=0,e=Le)}if(e!==0){if(e===2&&(i=Yf(t),i!==0&&(r=i,e=Sp(t,i))),e===1)throw n=Xa,Si(t,0),fr(t,r),Dt(t,Pe()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ok(i)&&(e=kc(t,r),e===2&&(s=Yf(t),s!==0&&(r=s,e=Sp(t,s))),e===1))throw n=Xa,Si(t,0),fr(t,r),Dt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:ai(t,St,Vn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=ug+500-Pe(),10<e)){if(hc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ip(ai.bind(null,t,St,Vn),e);break}ai(t,St,Vn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vk(r/1960))-r,10<r){t.timeoutHandle=ip(ai.bind(null,t,St,Vn),r);break}ai(t,St,Vn);break;case 5:ai(t,St,Vn);break;default:throw Error(R(329))}}}return Dt(t,Pe()),t.callbackNode===n?J0.bind(null,t):null}function Sp(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=kc(t,e),t!==2&&(e=St,St=n,e!==null&&Ap(e)),t}function Ap(t){St===null?St=t:St.push.apply(St,t)}function Ok(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~lg,e&=~vh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function Rv(t){if(Z&6)throw Error(R(327));Ms();var e=hc(t,0);if(!(e&1))return Dt(t,Pe()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var r=Yf(t);r!==0&&(e=r,n=Sp(t,r))}if(n===1)throw n=Xa,Si(t,0),fr(t,e),Dt(t,Pe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ai(t,St,Vn),Dt(t,Pe()),null}function cg(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(eo=Pe()+500,mh&&Hr())}}function Vi(t){_r!==null&&_r.tag===0&&!(Z&6)&&Ms();var e=Z;Z|=1;var n=Xt.transition,r=ne;try{if(Xt.transition=null,ne=1,t)return t()}finally{ne=r,Xt.transition=n,Z=e,!(Z&6)&&Hr()}}function hg(){Ot=ks.current,he(ks)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hk(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Wm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:Js(),he(kt),he(ct),eg();break;case 5:Zm(r);break;case 4:Js();break;case 13:he(me);break;case 19:he(me);break;case 10:Qm(r.type._context);break;case 22:case 23:hg()}n=n.return}if(je=t,be=t=Cr(t.current,null),Je=Ot=e,Le=0,Xa=null,lg=vh=bi=0,St=Ea=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function Z0(t,e){do{var n=be;try{if(Hm(),ju.current=Ac,Sc){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sc=!1}if(xi=0,$e=Oe=ge=null,wa=!1,Ha=0,ag.current=null,n===null||n.return===null){Le=1,Xa=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=fv(o);if(f!==null){f.flags&=-257,pv(f,o,a,s,e),f.mode&1&&dv(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){dv(s,u,e),dg();break e}l=Error(R(426))}}else if(de&&a.mode&1){var E=fv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),pv(E,o,a,s,e),Gm(Zs(l,a));break e}}s=l=Zs(l,a),Le!==4&&(Le=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=L0(s,l,e);sv(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Rr===null||!Rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=M0(s,a,e);sv(s,I);break e}}s=s.return}while(s!==null)}nT(n)}catch(A){e=A,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function eT(){var t=Rc.current;return Rc.current=Ac,t===null?Ac:t}function dg(){(Le===0||Le===3||Le===2)&&(Le=4),je===null||!(bi&268435455)&&!(vh&268435455)||fr(je,Je)}function kc(t,e){var n=Z;Z|=2;var r=eT();(je!==t||Je!==e)&&(Vn=null,Si(t,e));do try{Lk();break}catch(i){Z0(t,i)}while(1);if(Hm(),Z=n,Rc.current=r,be!==null)throw Error(R(261));return je=null,Je=0,Le}function Lk(){for(;be!==null;)tT(be)}function Mk(){for(;be!==null&&!lC();)tT(be)}function tT(t){var e=iT(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?nT(t):be=e,ag.current=null}function nT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nk(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,be=null;return}}else if(n=kk(n,e,Ot),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Le===0&&(Le=5)}function ai(t,e,n){var r=ne,i=Xt.transition;try{Xt.transition=null,ne=1,Fk(t,e,n,r)}finally{Xt.transition=i,ne=r}return null}function Fk(t,e,n,r){do Ms();while(_r!==null);if(Z&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yC(t,s),t===je&&(be=je=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,sT(cc,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=ne;ne=1;var a=Z;Z|=4,ag.current=null,xk(t,n),Y0(n,t),ik(np),dc=!!tp,np=tp=null,t.current=n,bk(n),uC(),Z=a,ne=o,Xt.transition=s}else t.current=n;if(Tu&&(Tu=!1,_r=t,Cc=i),s=t.pendingLanes,s===0&&(Rr=null),dC(n.stateNode),Dt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pc)throw Pc=!1,t=Ep,Ep=null,t;return Cc&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===Tp?Ta++:(Ta=0,Tp=t):Ta=0,Hr(),null}function Ms(){if(_r!==null){var t=OE(Cc),e=Xt.transition,n=ne;try{if(Xt.transition=null,ne=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Cc=0,Z&6)throw Error(R(331));var i=Z;for(Z|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Ia(8,c,s)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var d=c.sibling,f=c.return;if(K0(c),c===u){V=null;break}if(d!==null){d.return=f,V=d;break}V=f}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var p=t.current;for(V=p;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=p;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(A){we(a,a.return,A)}if(a===o){V=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,V=I;break e}V=a.return}}if(Z=i,Hr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ch,t)}catch{}r=!0}return r}finally{ne=n,Xt.transition=e}}return!1}function Pv(t,e,n){e=Zs(n,e),e=L0(t,e,1),t=Ar(t,e,1),e=mt(),t!==null&&(Cl(t,1,e),Dt(t,e))}function we(t,e,n){if(t.tag===3)Pv(t,t,n);else for(;e!==null;){if(e.tag===3){Pv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=Zs(n,t),t=M0(e,t,1),e=Ar(e,t,1),t=mt(),e!==null&&(Cl(e,1,t),Dt(e,t));break}}e=e.return}}function Uk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(Je&n)===n&&(Le===4||Le===3&&(Je&130023424)===Je&&500>Pe()-ug?Si(t,0):lg|=n),Dt(t,e)}function rT(t,e){e===0&&(t.mode&1?(e=fu,fu<<=1,!(fu&130023424)&&(fu=4194304)):e=1);var n=mt();t=Gn(t,e),t!==null&&(Cl(t,e,n),Dt(t,n))}function $k(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rT(t,n)}function Bk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),rT(t,n)}var iT;iT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,Ck(t,e,n);At=!!(t.flags&131072)}else At=!1,de&&e.flags&1048576&&a0(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=Qs(e,ct.current);Ls(e,n),i=ng(null,e,r,t,i,n);var s=rg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,_c(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xm(e),i.updater=gh,e.stateNode=i,i._reactInternals=e,hp(e,r,t,n),e=pp(null,e,r,!0,s,n)):(e.tag=0,de&&s&&qm(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zk(r),t=sn(r,t),i){case 0:e=fp(null,e,r,t,n);break e;case 1:e=_v(null,e,r,t,n);break e;case 11:e=mv(null,e,r,t,n);break e;case 14:e=gv(null,e,r,sn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),fp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),_v(t,e,r,i,n);case 3:e:{if(B0(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h0(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zs(Error(R(423)),e),e=yv(t,e,r,n,i);break e}else if(r!==i){i=Zs(Error(R(424)),e),e=yv(t,e,r,n,i);break e}else for(Mt=Sr(e.stateNode.containerInfo.firstChild),Ut=e,de=!0,an=null,n=m0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=Kn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return g0(e),t===null&&lp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rp(r,i)?o=null:s!==null&&rp(r,s)&&(e.flags|=32),$0(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&lp(e),null;case 13:return j0(t,e,n);case 4:return Jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),mv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(wc,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!kt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),up(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=Jt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),gv(t,e,r,i,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),qu(t,e),e.tag=1,Nt(r)?(t=!0,_c(e)):t=!1,Ls(e,n),f0(e,r,i),hp(e,r,i,n),pp(null,e,r,!0,t,n);case 19:return z0(t,e,n);case 22:return U0(t,e,n)}throw Error(R(156,e.tag))};function sT(t,e){return DE(t,e)}function jk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new jk(t,e,n,r)}function fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zk(t){if(typeof t=="function")return fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xm)return 11;if(t===bm)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Ai(n.children,i,s,e);case Dm:o=8,i|=8;break;case Of:return t=Qt(12,n,e,i|2),t.elementType=Of,t.lanes=s,t;case Lf:return t=Qt(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Mf:return t=Qt(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case pE:return wh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dE:o=10;break e;case fE:o=9;break e;case xm:o=11;break e;case bm:o=14;break e;case cr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function wh(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=pE,t.lanes=n,t.stateNode={isHidden:!1},t}function Jd(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Zd(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pg(t,e,n,r,i,s,o,a,l){return t=new qk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xm(s),t}function Wk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oT(t){if(!t)return br;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Nt(n))return s0(t,n,e)}return e}function aT(t,e,n,r,i,s,o,a,l){return t=pg(n,r,!0,t,i,s,o,a,l),t.context=oT(null),n=t.current,r=mt(),i=Pr(n),s=Bn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Cl(t,i,r),Dt(t,r),t}function Ih(t,e,n,r){var i=e.current,s=mt(),o=Pr(i);return n=oT(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(cn(t,i,o,s),Bu(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mg(t,e){Cv(t,e),(t=t.alternate)&&Cv(t,e)}function Gk(){return null}var lT=typeof reportError=="function"?reportError:function(t){console.error(t)};function gg(t){this._internalRoot=t}Eh.prototype.render=gg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Ih(t,e,null,null)};Eh.prototype.unmount=gg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Ih(null,t,null,null)}),e[Wn]=null}};function Eh(t){this._internalRoot=t}Eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=FE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&$E(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kv(){}function Kk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Nc(o);s.call(u)}}var o=aT(e,r,t,0,null,!1,!1,"",kv);return t._reactRootContainer=o,t[Wn]=o.current,za(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Nc(l);a.call(u)}}var l=pg(t,0,!1,null,null,!1,!1,"",kv);return t._reactRootContainer=l,t[Wn]=l.current,za(t.nodeType===8?t.parentNode:t),Vi(function(){Ih(e,l,n,r)}),l}function Sh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nc(o);a.call(l)}}Ih(e,o,t,i)}else o=Kk(n,e,t,i,r);return Nc(o)}LE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Lm(e,n|1),Dt(e,Pe()),!(Z&6)&&(eo=Pe()+500,Hr()))}break;case 13:Vi(function(){var r=Gn(t,1);if(r!==null){var i=mt();cn(r,t,1,i)}}),mg(t,1)}};Mm=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=mt();cn(e,t,134217728,n)}mg(t,134217728)}};ME=function(t){if(t.tag===13){var e=Pr(t),n=Gn(t,e);if(n!==null){var r=mt();cn(n,t,e,r)}mg(t,e)}};FE=function(){return ne};UE=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Kf=function(t,e,n){switch(e){case"input":if($f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ph(r);if(!i)throw Error(R(90));gE(r),$f(r,i)}}}break;case"textarea":yE(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};AE=cg;RE=Vi;var Hk={usingClientEntryPoint:!1,Events:[Nl,Ts,ph,TE,SE,cg]},Wo={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qk={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kE(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||Gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{ch=Su.inject(Qk),Cn=Su}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(R(200));return Wk(t,e,null,n)};qt.createRoot=function(t,e){if(!_g(t))throw Error(R(299));var n=!1,r="",i=lT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pg(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,za(t.nodeType===8?t.parentNode:t),new gg(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=kE(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Vi(t)};qt.hydrate=function(t,e,n){if(!Th(e))throw Error(R(200));return Sh(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aT(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eh(e)};qt.render=function(t,e,n){if(!Th(e))throw Error(R(200));return Sh(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Th(t))throw Error(R(40));return t._reactRootContainer?(Vi(function(){Sh(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};qt.unstable_batchedUpdates=cg;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Th(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Sh(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";function uT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT)}catch(t){console.error(t)}}uT(),aE.exports=qt;var Yk=aE.exports,Nv=Yk;bf.createRoot=Nv.createRoot,bf.hydrateRoot=Nv.hydrateRoot;/**
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
 */const cT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Jk;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zk=function(t){const e=cT(t);return hT.encodeByteArray(e,!0)},Dc=function(t){return Zk(t).replace(/\./g,"")},dT=function(t){try{return hT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eN(n)||(t[n]=xc(t[n],e[n]));return t}function eN(t){return t!=="__proto__"}/**
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
 */function tN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nN=()=>tN().__FIREBASE_DEFAULTS__,rN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dT(t[1]);return e&&JSON.parse(e)},Ah=()=>{try{return nN()||rN()||iN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sN=t=>{var e,n;return(n=(e=Ah())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oN=t=>{const e=sN(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fT=()=>{var t;return(t=Ah())===null||t===void 0?void 0:t.config},aN=t=>{var e;return(e=Ah())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dc(JSON.stringify(n)),Dc(JSON.stringify(o)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function yg(){var t;const e=(t=Ah())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hN(){return typeof self=="object"&&self.self===self}function vg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dN(){return!yg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function to(){try{return typeof indexedDB=="object"}catch{return!1}}function mT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function fN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pN="FirebaseError";class Ze extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pN,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ze(i,a,r)}}function mN(t,e){return t.replace(gN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gN=/\{\$([^}]+)}/g;/**
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
 */function Dv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xv(s)&&xv(o)){if(!bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gT(t,e){const n=new yN(t,e);return n.subscribe.bind(n)}class yN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ef),i.error===void 0&&(i.error=ef),i.complete===void 0&&(i.complete=ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ef(){}/**
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
 */const wN=1e3,IN=2,EN=4*60*60*1e3,TN=.5;function bv(t,e=wN,n=IN){const r=e*Math.pow(n,t),i=Math.round(TN*r*(Math.random()-.5)*2);return Math.min(EN,r+i)}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class SN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RN(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AN(t){return t===li?void 0:t}function RN(t){return t.instantiationMode==="EAGER"}/**
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
 */class PN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ig=[];var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const _T={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},CN=H.INFO,kN={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},NN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=CN,this._logHandler=NN,this._userLogHandler=null,Ig.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function DN(t){Ig.forEach(e=>{e.setLogLevel(t)})}function xN(t,e){for(const n of Ig){let r=null;e&&e.level&&(r=_T[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:H[s].toLowerCase(),message:a,args:o,type:i.name})}}}const bN=(t,e)=>e.some(n=>t instanceof n);let Vv,Ov;function VN(){return Vv||(Vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ON(){return Ov||(Ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yT=new WeakMap,Rp=new WeakMap,vT=new WeakMap,tf=new WeakMap,Eg=new WeakMap;function LN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yT.set(n,t)}).catch(()=>{}),Eg.set(e,t),e}function MN(t){if(Rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rp.set(t,e)}let Pp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FN(t){Pp=t(Pp)}function UN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nf(this),e,...n);return vT.set(r,e.sort?e.sort():[e]),kr(r)}:ON().includes(t)?function(...e){return t.apply(nf(this),e),kr(yT.get(this))}:function(...e){return kr(t.apply(nf(this),e))}}function $N(t){return typeof t=="function"?UN(t):(t instanceof IDBTransaction&&MN(t),bN(t,VN())?new Proxy(t,Pp):t)}function kr(t){if(t instanceof IDBRequest)return LN(t);if(tf.has(t))return tf.get(t);const e=$N(t);return e!==t&&(tf.set(t,e),Eg.set(e,t)),e}const nf=t=>Eg.get(t);function BN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jN=["get","getKey","getAll","getAllKeys","count"],zN=["put","add","delete","clear"],rf=new Map;function Lv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rf.get(e))return rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return rf.set(e,s),s}FN(t=>({...t,get:(e,n,r)=>Lv(e,n)||t.get(e,n,r),has:(e,n)=>!!Lv(e,n)||t.has(e,n)}));/**
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
 */class qN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",Mv="0.9.19";/**
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
 */const Oi=new xl("@firebase/app"),GN="@firebase/app-compat",KN="@firebase/analytics-compat",HN="@firebase/analytics",QN="@firebase/app-check-compat",YN="@firebase/app-check",XN="@firebase/auth",JN="@firebase/auth-compat",ZN="@firebase/database",eD="@firebase/database-compat",tD="@firebase/functions",nD="@firebase/functions-compat",rD="@firebase/installations",iD="@firebase/installations-compat",sD="@firebase/messaging",oD="@firebase/messaging-compat",aD="@firebase/performance",lD="@firebase/performance-compat",uD="@firebase/remote-config",cD="@firebase/remote-config-compat",hD="@firebase/storage",dD="@firebase/storage-compat",fD="@firebase/firestore",pD="@firebase/firestore-compat",mD="firebase",gD="10.4.0";/**
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
 */const Vr="[DEFAULT]",_D={[Cp]:"fire-core",[GN]:"fire-core-compat",[HN]:"fire-analytics",[KN]:"fire-analytics-compat",[YN]:"fire-app-check",[QN]:"fire-app-check-compat",[XN]:"fire-auth",[JN]:"fire-auth-compat",[ZN]:"fire-rtdb",[eD]:"fire-rtdb-compat",[tD]:"fire-fn",[nD]:"fire-fn-compat",[rD]:"fire-iid",[iD]:"fire-iid-compat",[sD]:"fire-fcm",[oD]:"fire-fcm-compat",[aD]:"fire-perf",[lD]:"fire-perf-compat",[uD]:"fire-rc",[cD]:"fire-rc-compat",[hD]:"fire-gcs",[dD]:"fire-gcs-compat",[fD]:"fire-fst",[pD]:"fire-fst-compat","fire-js":"fire-js",[mD]:"fire-js-all"};/**
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
 */const Or=new Map,Ja=new Map;function Vc(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wT(t,e){t.container.addOrOverwriteComponent(e)}function en(t){const e=t.name;if(Ja.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,t);for(const n of Or.values())Vc(n,t);return!0}function Ji(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yD(t,e,n=Vr){Ji(t,e).clearInstance(n)}function vD(){Ja.clear()}/**
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
 */const wD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Jn("app","Firebase",wD);/**
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
 */let ID=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}};/**
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
 */const Qr=gD;function Tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=fT()),!n)throw jn.create("no-options");const s=Or.get(i);if(s){if(bc(n,s.options)&&bc(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new PN(i);for(const l of Ja.values())o.addComponent(l);const a=new ID(n,r,o);return Or.set(i,a),a}function Sg(t=Vr){const e=Or.get(t);if(!e&&t===Vr&&fT())return Tg();if(!e)throw jn.create("no-app",{appName:t});return e}function ED(){return Array.from(Or.values())}async function IT(t){const e=t.name;Or.has(e)&&(Or.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function gt(t,e,n){var r;let i=(r=_D[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}en(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ET(t,e){if(t!==null&&typeof t!="function")throw jn.create("invalid-log-argument");xN(t,e)}function TT(t){DN(t)}/**
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
 */const TD="firebase-heartbeat-database",SD=1,Za="firebase-heartbeat-store";let sf=null;function ST(){return sf||(sf=BN(TD,SD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Za)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),sf}async function AD(t){try{return await(await ST()).transaction(Za).objectStore(Za).get(AT(t))}catch(e){if(e instanceof Ze)Oi.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function Fv(t,e){try{const r=(await ST()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,AT(t)),await r.done}catch(n){if(n instanceof Ze)Oi.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RD=1024,PD=30*24*60*60*1e3;class CD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ND(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=PD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uv(),{heartbeatsToSend:n,unsentEntries:r}=kD(this._heartbeatsCache.heartbeats),i=Dc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uv(){return new Date().toISOString().substring(0,10)}function kD(t,e=RD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$v(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$v(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ND{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return to()?mT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $v(t){return Dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DD(t){en(new bt("platform-logger",e=>new qN(e),"PRIVATE")),en(new bt("heartbeat",e=>new CD(e),"PRIVATE")),gt(Cp,Mv,t),gt(Cp,Mv,"esm2017"),gt("fire-js","")}DD("");const xD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ze,SDK_VERSION:Qr,_DEFAULT_ENTRY_NAME:Vr,_addComponent:Vc,_addOrOverwriteComponent:wT,_apps:Or,_clearComponents:vD,_components:Ja,_getProvider:Ji,_registerComponent:en,_removeServiceInstance:yD,deleteApp:IT,getApp:Sg,getApps:ED,initializeApp:Tg,onLog:ET,registerVersion:gt,setLogLevel:TT},Symbol.toStringTag,{value:"Module"}));var bD="firebase",VD="10.4.0";/**
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
 */gt(bD,VD,"app");const OD=(t,e)=>e.some(n=>t instanceof n);let Bv,jv;function LD(){return Bv||(Bv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MD(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RT=new WeakMap,kp=new WeakMap,PT=new WeakMap,of=new WeakMap,Ag=new WeakMap;function FD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RT.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function UD(t){if(kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kp.set(t,e)}let Np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $D(t){Np=t(Np)}function BD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return PT.set(r,e.sort?e.sort():[e]),Nr(r)}:MD().includes(t)?function(...e){return t.apply(af(this),e),Nr(RT.get(this))}:function(...e){return Nr(t.apply(af(this),e))}}function jD(t){return typeof t=="function"?BD(t):(t instanceof IDBTransaction&&UD(t),OD(t,LD())?new Proxy(t,Np):t)}function Nr(t){if(t instanceof IDBRequest)return FD(t);if(of.has(t))return of.get(t);const e=jD(t);return e!==t&&(of.set(t,e),Ag.set(e,t)),e}const af=t=>Ag.get(t);function zD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qD=["get","getKey","getAll","getAllKeys","count"],WD=["put","add","delete","clear"],lf=new Map;function zv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lf.set(e,s),s}$D(t=>({...t,get:(e,n,r)=>zv(e,n)||t.get(e,n,r),has:(e,n)=>!!zv(e,n)||t.has(e,n)}));const CT="@firebase/installations",Rg="0.6.4";/**
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
 */const kT=1e4,NT=`w:${Rg}`,DT="FIS_v2",GD="https://firebaseinstallations.googleapis.com/v1",KD=60*60*1e3,HD="installations",QD="Installations";/**
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
 */const YD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Li=new Jn(HD,QD,YD);function xT(t){return t instanceof Ze&&t.code.includes("request-failed")}/**
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
 */function bT({projectId:t}){return`${GD}/projects/${t}/installations`}function VT(t){return{token:t.token,requestStatus:2,expiresIn:JD(t.expiresIn),creationTime:Date.now()}}async function OT(t,e){const r=(await e.json()).error;return Li.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function XD(t,{refreshToken:e}){const n=LT(t);return n.append("Authorization",ZD(e)),n}async function MT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function JD(t){return Number(t.replace("s","000"))}function ZD(t){return`${DT} ${t}`}/**
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
 */async function ex({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bT(t),i=LT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:DT,appId:t.appId,sdkVersion:NT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await MT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:VT(u.authToken)}}else throw await OT("Create Installation",l)}/**
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
 */function FT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nx=/^[cdef][\w-]{21}$/,Dp="";function rx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ix(t);return nx.test(n)?n:Dp}catch{return Dp}}function ix(t){return tx(t).substr(0,22)}/**
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
 */function Rh(t){return`${t.appName}!${t.appId}`}/**
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
 */const UT=new Map;function $T(t,e){const n=Rh(t);BT(n,e),sx(n,e)}function BT(t,e){const n=UT.get(t);if(n)for(const r of n)r(e)}function sx(t,e){const n=ox();n&&n.postMessage({key:t,fid:e}),ax()}let yi=null;function ox(){return!yi&&"BroadcastChannel"in self&&(yi=new BroadcastChannel("[Firebase] FID Change"),yi.onmessage=t=>{BT(t.data.key,t.data.fid)}),yi}function ax(){UT.size===0&&yi&&(yi.close(),yi=null)}/**
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
 */const lx="firebase-installations-database",ux=1,Mi="firebase-installations-store";let uf=null;function Pg(){return uf||(uf=zD(lx,ux,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mi)}}})),uf}async function Oc(t,e){const n=Rh(t),i=(await Pg()).transaction(Mi,"readwrite"),s=i.objectStore(Mi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&$T(t,e.fid),e}async function jT(t){const e=Rh(t),r=(await Pg()).transaction(Mi,"readwrite");await r.objectStore(Mi).delete(e),await r.done}async function Ph(t,e){const n=Rh(t),i=(await Pg()).transaction(Mi,"readwrite"),s=i.objectStore(Mi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&$T(t,a.fid),a}/**
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
 */async function Cg(t){let e;const n=await Ph(t.appConfig,r=>{const i=cx(r),s=hx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cx(t){const e=t||{fid:rx(),registrationStatus:0};return zT(e)}function hx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fx(t)}:{installationEntry:e}}async function dx(t,e){try{const n=await ex(t,e);return Oc(t.appConfig,n)}catch(n){throw xT(n)&&n.customData.serverCode===409?await jT(t.appConfig):await Oc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fx(t){let e=await qv(t.appConfig);for(;e.registrationStatus===1;)await FT(100),e=await qv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cg(t);return r||n}return e}function qv(t){return Ph(t,e=>{if(!e)throw Li.create("installation-not-found");return zT(e)})}function zT(t){return px(t)?{fid:t.fid,registrationStatus:0}:t}function px(t){return t.registrationStatus===1&&t.registrationTime+kT<Date.now()}/**
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
 */async function mx({appConfig:t,heartbeatServiceProvider:e},n){const r=gx(t,n),i=XD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:NT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await MT(()=>fetch(r,a));if(l.ok){const u=await l.json();return VT(u)}else throw await OT("Generate Auth Token",l)}function gx(t,{fid:e}){return`${bT(t)}/${e}/authTokens:generate`}/**
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
 */async function kg(t,e=!1){let n;const r=await Ph(t.appConfig,s=>{if(!qT(s))throw Li.create("not-registered");const o=s.authToken;if(!e&&vx(o))return s;if(o.requestStatus===1)return n=_x(t,e),s;{if(!navigator.onLine)throw Li.create("app-offline");const a=Ix(s);return n=yx(t,a),a}});return n?await n:r.authToken}async function _x(t,e){let n=await Wv(t.appConfig);for(;n.authToken.requestStatus===1;)await FT(100),n=await Wv(t.appConfig);const r=n.authToken;return r.requestStatus===0?kg(t,e):r}function Wv(t){return Ph(t,e=>{if(!qT(e))throw Li.create("not-registered");const n=e.authToken;return Ex(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yx(t,e){try{const n=await mx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Oc(t.appConfig,r),n}catch(n){if(xT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oc(t.appConfig,r)}throw n}}function qT(t){return t!==void 0&&t.registrationStatus===2}function vx(t){return t.requestStatus===2&&!wx(t)}function wx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KD}function Ix(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ex(t){return t.requestStatus===1&&t.requestTime+kT<Date.now()}/**
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
 */async function Tx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cg(e);return r?r.catch(console.error):kg(e).catch(console.error),n.fid}/**
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
 */async function Sx(t,e=!1){const n=t;return await Ax(n),(await kg(n,e)).token}async function Ax(t){const{registrationPromise:e}=await Cg(t);e&&await e}/**
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
 */function Rx(t){if(!t||!t.options)throw cf("App Configuration");if(!t.name)throw cf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw cf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function cf(t){return Li.create("missing-app-config-values",{valueName:t})}/**
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
 */const WT="installations",Px="installations-internal",Cx=t=>{const e=t.getProvider("app").getImmediate(),n=Rx(e),r=Ji(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kx=t=>{const e=t.getProvider("app").getImmediate(),n=Ji(e,WT).getImmediate();return{getId:()=>Tx(n),getToken:i=>Sx(n,i)}};function Nx(){en(new bt(WT,Cx,"PUBLIC")),en(new bt(Px,kx,"PRIVATE"))}Nx();gt(CT,Rg);gt(CT,Rg,"esm2017");/**
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
 */const Lc="analytics",Dx="firebase_id",xx="origin",bx=60*1e3,Vx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ng="https://www.googletagmanager.com/gtag/js";/**
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
 */const xt=new xl("@firebase/analytics");/**
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
 */const Ox={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new Jn("analytics","Analytics",Ox);/**
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
 */function Lx(t){if(!t.startsWith(Ng)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function GT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Mx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Fx(t,e){const n=Mx("firebase-js-sdk-policy",{createScriptURL:Lx}),r=document.createElement("script"),i=`${Ng}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ux(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $x(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await GT(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){xt.error(a)}t("config",i,s)}async function Bx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await GT(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){xt.error(s)}}function jx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Bx(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await $x(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){xt.error(a)}}return i}function zx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=jx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function qx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ng)&&n.src.includes(t))return n;return null}/**
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
 */const Wx=30,Gx=1e3;class Kx{constructor(e={},n=Gx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const KT=new Kx;function Hx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Qx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Hx(r)},s=Vx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Yx(t,e=KT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zx;return setTimeout(async()=>{a.abort()},n!==void 0?n:bx),HT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function HT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=KT){var s;const{appId:o,measurementId:a}=t;try{await Xx(r,e)}catch(l){if(a)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Qx(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Jx(u)){if(i.deleteThrottleMetadata(o),a)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?bv(n,i.intervalMillis,Wx):bv(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),xt.debug(`Calling attemptFetch again in ${c} millis`),HT(t,h,r,i)}}function Xx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jx(t){if(!(t instanceof Ze)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Zx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function tb(){if(to())try{await mT()}catch(t){return xt.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nb(t,e,n,r,i,s,o){var a;const l=Yx(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>xt.error(f)),e.push(l);const u=tb().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);qx(s)||Fx(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[xx]="firebase",d.update=!0,h!=null&&(d[Dx]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class rb{constructor(e){this.app=e}_delete(){return delete Sa[this.app.options.appId],Promise.resolve()}}let Sa={},Gv=[];const Kv={};let hf="dataLayer",ib="gtag",Hv,QT,Qv=!1;function sb(){const t=[];if(vg()&&t.push("This is a browser extension environment."),fN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function ob(t,e,n){sb();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Sa[r]!=null)throw $t.create("already-exists",{id:r});if(!Qv){Ux(hf);const{wrappedGtag:s,gtagCore:o}=zx(Sa,Gv,Kv,hf,ib);QT=s,Hv=o,Qv=!0}return Sa[r]=nb(t,Gv,Kv,e,Hv,hf,n),new rb(t)}function ab(t=Sg()){t=$(t);const e=Ji(t,Lc);return e.isInitialized()?e.getImmediate():lb(t)}function lb(t,e={}){const n=Ji(t,Lc);if(n.isInitialized()){const i=n.getImmediate();if(bc(e,n.getOptions()))return i;throw $t.create("already-initialized")}return n.initialize({options:e})}function ub(t,e,n,r){t=$(t),eb(QT,Sa[t.app.options.appId],e,n,r).catch(i=>xt.error(i))}const Yv="@firebase/analytics",Xv="0.10.0";function cb(){en(new bt(Lc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ob(r,i,n)},"PUBLIC")),en(new bt("analytics-internal",t,"PRIVATE")),gt(Yv,Xv),gt(Yv,Xv,"esm2017");function t(e){try{const n=e.getProvider(Lc).getImmediate();return{logEvent:(r,i,s)=>ub(n,r,i,s)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}cb();/**
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
 */class hb{constructor(e,n){this._delegate=e,this.firebase=n,Vc(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),IT(this._delegate)))}_getService(e,n=Vr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Vr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Vc(this._delegate,e)}_addOrOverwriteComponent(e){wT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const db={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Jv=new Jn("app-compat","Firebase",db);/**
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
 */function fb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:gt,setLogLevel:TT,onLog:ET,apps:null,SDK_VERSION:Qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:xD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Vr,!Dv(e,u))throw Jv.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Tg(u,c);if(Dv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(en(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Jv.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&xc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function YT(){const t=fb(hb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:YT,extendNamespace:e,createSubscribe:gT,ErrorFactory:Jn,deepExtend:xc});function e(n){xc(t,n)}return t}const pb=YT();/**
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
 */const Zv=new xl("@firebase/app-compat"),mb="@firebase/app-compat",gb="0.2.19";/**
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
 */function _b(t){gt(mb,gb,t)}/**
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
 */if(hN()&&self.firebase!==void 0){Zv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Zv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Zn=pb;_b();var yb="firebase",vb="10.4.0";/**
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
 */Zn.registerVersion(yb,vb,"app-compat");function Dg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Go={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},as={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function ew(t){return t!==void 0&&t.getResponse!==void 0}function tw(t){return t!==void 0&&t.enterprise!==void 0}class wb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Ib(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function XT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eb=Ib,Tb=XT,JT=new Jn("auth","Firebase",XT());/**
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
 */const Mc=new xl("@firebase/auth");function Sb(t,...e){Mc.logLevel<=H.WARN&&Mc.warn(`Auth (${Qr}): ${t}`,...e)}function Hu(t,...e){Mc.logLevel<=H.ERROR&&Mc.error(`Auth (${Qr}): ${t}`,...e)}/**
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
 */function rt(t,...e){throw xg(t,...e)}function et(t,...e){return xg(t,...e)}function ZT(t,e,n){const r=Object.assign(Object.assign({},Tb()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function Eo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(t,"argument-error"),ZT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JT.create(t,...e)}function P(t,e,...n){if(!t)throw xg(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function dn(t,e){t||Tn(e)}/**
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
 */function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bg(){return nw()==="http:"||nw()==="https:"}function nw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bg()||vg()||"connection"in navigator)?navigator.onLine:!0}function Rb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=cN()||wg()}get(){return Ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vg(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cb=new bl(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ve(t,e,n,r,i={}){return tS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eS.fetch()(nS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pb),e);try{const i=new kb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw aa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ZT(t,c,u);rt(t,c)}}catch(i){if(i instanceof Ze)throw i;rt(t,"network-request-failed",{message:String(i)})}}async function er(t,e,n,r,i={}){const s=await Ve(t,e,n,r,i);return"mfaPendingCredential"in s&&rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vg(t.config,i):`${t.config.apiScheme}://${i}`}class kb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Cb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=et(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Nb(t){return(await Ve(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Db(t,e){return Ve(t,"GET","/v2/recaptchaConfig",Ne(t,e))}/**
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
 */async function xb(t,e){return Ve(t,"POST","/v1/accounts:delete",e)}async function bb(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function Vb(t,e){return Ve(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ob(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=Ch(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Aa(df(i.auth_time)),issuedAtTime:Aa(df(i.iat)),expirationTime:Aa(df(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function df(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=dT(n);return i?JSON.parse(i):(Hu("Failed to decode base64 JWT payload"),null)}catch(i){return Hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lb(t){const e=Ch(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ze&&Mb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hn(t,Vb(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Bb(s.providerUserInfo):[],a=$b(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Ub(t){const e=$(t);await tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $b(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bb(t){return t.map(e=>{var{providerId:n}=e,r=Dg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jb(t,e){const n=await tS(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nl;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function or(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ob(this,e)}reload(){return Ub(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,xb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:A,providerData:C,stsTokenManager:N}=n;P(g&&N,e,"internal-error");const L=nl.fromJSON(this.name,N);P(typeof g=="string",e,"internal-error"),or(h,e.name),or(d,e.name),P(typeof I=="boolean",e,"internal-error"),P(typeof A=="boolean",e,"internal-error"),or(f,e.name),or(y,e.name),or(_,e.name),or(E,e.name),or(m,e.name),or(p,e.name);const ie=new Ri({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:A,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:L,createdAt:m,lastLoginAt:p});return C&&Array.isArray(C)&&(ie.providerData=C.map(G=>Object.assign({},G))),E&&(ie._redirectEventId=E),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new nl;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tl(s),s}}/**
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
 */const rw=new Map;function Ft(t){dn(t instanceof Function,"Expected a class definition");let e=rw.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rw.set(t,e),e)}/**
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
 */class iS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iS.type="NONE";const no=iS;/**
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
 */function Pi(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(Ft(no),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(no);const o=Pi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fs(s,e,r))}}/**
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
 */function iw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lS(e))return"Blackberry";if(uS(e))return"Webos";if(Og(e))return"Safari";if((e.includes("chrome/")||oS(e))&&!e.includes("edge/"))return"Chrome";if(Vl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sS(t=ve()){return/firefox\//i.test(t)}function Og(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oS(t=ve()){return/crios\//i.test(t)}function aS(t=ve()){return/iemobile/i.test(t)}function Vl(t=ve()){return/android/i.test(t)}function lS(t=ve()){return/blackberry/i.test(t)}function uS(t=ve()){return/webos/i.test(t)}function To(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zb(t=ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function qb(t=ve()){var e;return To(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wb(){return pT()&&document.documentMode===10}function cS(t=ve()){return To(t)||Vl(t)||uS(t)||lS(t)||/windows phone/i.test(t)||aS(t)}function Gb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hS(t,e=[]){let n;switch(t){case"Browser":n=iw(ve());break;case"Worker":n=`${iw(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
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
 */class Kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hb(t,e={}){return Ve(t,"GET","/v2/passwordPolicy",Ne(t,e))}/**
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
 */const Qb=6;class Yb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Qb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Xb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sw(this),this.idTokenSubscription=new sw(this),this.beforeStateQueue=new Kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hb(this),n=new Yb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Te(t){return $(t)}class sw{constructor(e){this.auth=e,this.observer=null,this.addObserver=gT(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Jb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Lg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Jb().appendChild(r)})}function dS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zb="https://www.google.com/recaptcha/enterprise.js?render=",eV="recaptcha-enterprise",tV="NO_RECAPTCHA";class nV{constructor(e){this.type=eV,this.auth=Te(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Db(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new wb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;tw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(tV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&tw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Lg(Zb+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Lr(t,e,n,r=!1){const i=new nV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function rV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iV(t,e,n){const r=Te(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fS(e),{host:o,port:a}=sV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oV()}function fS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sV(t){const e=fS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ow(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ow(o)}}}function ow(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class So{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function pS(t,e){return Ve(t,"POST","/v1/accounts:resetPassword",Ne(t,e))}async function mS(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function aV(t,e){return Ve(t,"POST","/v1/accounts:update",Ne(t,e))}/**
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
 */async function ff(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function kh(t,e){return Ve(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function lV(t,e){return kh(t,e)}async function pf(t,e){return kh(t,e)}async function mf(t,e){return kh(t,e)}async function uV(t,e){return kh(t,e)}/**
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
 */async function cV(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function hV(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
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
 */class rl extends So{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Lr(e,r,"signInWithPassword");return ff(e,i)}else return ff(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Lr(e,r,"signInWithPassword");return ff(e,s)}else return Promise.reject(i)});case"emailLink":return cV(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hV(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const dV="http://localhost";class Dn extends So{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:dV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
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
 */async function fV(t,e){return Ve(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function pV(t,e){return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function mV(t,e){const n=await er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw aa(t,"account-exists-with-different-credential",n);return n}const gV={USER_NOT_FOUND:"user-not-found"};async function _V(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),gV)}/**
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
 */class Ci extends So{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ci({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ci({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return pV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return mV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _V(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ci({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function yV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vV(t){const e=Ns(oa(t)).link,n=e?Ns(oa(e)).deep_link_id:null,r=Ns(oa(t)).deep_link_id;return(r?Ns(oa(r)).link:null)||r||n||e||t}class Nh{constructor(e){var n,r,i,s,o,a;const l=Ns(oa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=yV((i=l.mode)!==null&&i!==void 0?i:null);P(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vV(e);try{return new Nh(n)}catch{return null}}}/**
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
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nh.parseLink(n);return P(r,"argument-error"),rl._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ao extends tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Us extends Ao{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),Dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),Dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Us.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Us.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Us(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class yn extends Ao{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class wn extends Ao{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */const wV="http://localhost";class ro extends So{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ro(r,s)}static _create(e,n){return new ro(e,n)}buildRequest(){return{requestUri:wV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const IV="saml.";class Fc extends tr{constructor(e){P(e.startsWith(IV),"argument-error"),super(e)}static credentialFromResult(e){return Fc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Fc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ro.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ro._create(r,n)}catch{return null}}}/**
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
 */class In extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function Qu(t,e){return er(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ri._fromIdTokenResponse(e,r,i),o=aw(r);return new tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=aw(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function aw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function EV(t){var e;const n=Te(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Qu(n,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Uc extends Ze{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uc(e,n,r,i)}}function gS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function _S(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function TV(t,e){const n=$(t);await Dh(!0,n,e);const{providerUserInfo:r}=await bb(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=_S(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Mg(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}async function Dh(t,e,n){await tl(e);const r=_S(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function yS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hn(t,gS(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Ch(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
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
 */async function vS(t,e,n=!1){const r="signIn",i=await gS(t,r,e),s=await tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xh(t,e){return vS(Te(t),e)}async function wS(t,e){const n=$(t);return await Dh(!1,n,e.providerId),Mg(n,e)}async function IS(t,e){return yS($(t),e)}/**
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
 */async function SV(t,e){return er(t,"POST","/v1/accounts:signInWithCustomToken",Ne(t,e))}/**
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
 */async function AV(t,e){const n=Te(t),r=await SV(n,{token:e,returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ol{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Fg._fromServerResponse(e,n):"totpInfo"in n?Ug._fromServerResponse(e,n):rt(e,"internal-error")}}class Fg extends Ol{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Fg(n)}}class Ug extends Ol{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Ug(n)}}/**
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
 */function $s(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function $g(t){const e=Te(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RV(t,e,n){var r;const i=Te(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Lr(i,s,"getOobCode",!0);n&&$s(i,o,n),await pf(i,o)}else n&&$s(i,s,n),await pf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Lr(i,s,"getOobCode",!0);n&&$s(i,a,n),await pf(i,a)}else return Promise.reject(o)})}async function PV(t,e,n){await pS($(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}async function CV(t,e){await aV($(t),{oobCode:e})}async function ES(t,e){const n=$(t),r=await pS(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ol._fromServerResponse(Te(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function kV(t,e){const{data:n}=await ES($(t),e);return n.email}async function NV(t,e,n){var r;const i=Te(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Lr(i,s,"signUpPassword");o=Qu(i,u)}else o=Qu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Lr(i,s,"signUpPassword");return Qu(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$g(t),u}),l=await tn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function DV(t,e,n){return xh($(t),Yr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}/**
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
 */async function xV(t,e,n){var r;const i=Te(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){P(l.handleCodeInApp,i,"argument-error"),l&&$s(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Lr(i,s,"getOobCode",!0);o(a,n),await mf(i,a)}else o(s,n),await mf(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Lr(i,s,"getOobCode",!0);o(l,n),await mf(i,l)}else return Promise.reject(a)})}function bV(t,e){const n=Nh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function VV(t,e,n){const r=$(t),i=Yr.credentialWithLink(e,n||el());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xh(r,i)}/**
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
 */async function OV(t,e){return Ve(t,"POST","/v1/accounts:createAuthUri",Ne(t,e))}/**
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
 */async function LV(t,e){const n=bg()?el():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await OV($(t),r);return i||[]}async function MV(t,e){const n=$(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&$s(n.auth,i,e);const{email:s}=await lV(n.auth,i);s!==t.email&&await t.reload()}async function FV(t,e,n){const r=$(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&$s(r.auth,s,n);const{email:o}=await uV(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function UV(t,e){return Ve(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $V(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hn(r,UV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function BV(t,e){return TS($(t),e,null)}function jV(t,e){return TS($(t),null,e)}async function TS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Hn(t,mS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function zV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ch(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Bs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new qV(s,i);case"github.com":return new WV(s,i);case"google.com":return new GV(s,i);case"twitter.com":return new KV(s,i,t.screenName||null);case"custom":case"anonymous":return new Bs(s,null);default:return new Bs(s,r,i)}}class Bs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class SS extends Bs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class qV extends Bs{constructor(e,n){super(e,"facebook.com",n)}}class WV extends SS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class GV extends Bs{constructor(e,n){super(e,"google.com",n)}}class KV extends SS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function HV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:zV(n)}/**
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
 */class Bg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Te(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ol._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=vi._fromMfaPendingCredential(i.mfaPendingCredential);return new Bg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await tn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return P(n.user,r,"internal-error"),tn._forOperation(n.user,n.operationType,u);default:rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function QV(t,e){var n;const r=$(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bg._fromError(r,i)}/**
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
 */function YV(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}function XV(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(t,e))}function JV(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(t,e))}class jg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ol._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new jg(e)}async getSession(){return vi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Hn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Hn(this.user,JV(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const gf=new WeakMap;function ZV(t){const e=$(t);return gf.has(e)||gf.set(e,jg._fromUser(e)),gf.get(e)}const $c="__sak";/**
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
 */class AS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function eO(){const t=ve();return Og(t)||To(t)}const tO=1e3,nO=10;class RS extends AS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eO()&&Gb(),this.fallbackToPolling=cS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Wb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RS.type="LOCAL";const zg=RS;/**
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
 */class PS extends AS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}PS.type="SESSION";const Fi=PS;/**
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
 */function rO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await rO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
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
 */function Ll(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ll("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xe(){return window}function sO(t){xe().location.href=t}/**
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
 */function qg(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function oO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lO(){return qg()?self:null}/**
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
 */const CS="firebaseLocalStorageDb",uO=1,Bc="firebaseLocalStorage",kS="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function cO(){const t=indexedDB.deleteDatabase(CS);return new Ml(t).toPromise()}function xp(){const t=indexedDB.open(CS,uO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:kS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await cO(),e(await xp()))})})}async function lw(t,e,n){const r=Vh(t,!0).put({[kS]:e,value:n});return new Ml(r).toPromise()}async function hO(t,e){const n=Vh(t,!1).get(e),r=await new Ml(n).toPromise();return r===void 0?null:r.value}function uw(t,e){const n=Vh(t,!0).delete(e);return new Ml(n).toPromise()}const dO=800,fO=3;class NS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(lO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oO(),!this.activeServiceWorker)return;this.sender=new iO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await lw(e,$c,"1"),await uw(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vh(i,!1).getAll();return new Ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NS.type="LOCAL";const il=NS;/**
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
 */function pO(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}function mO(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:finalize",Ne(t,e))}/**
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
 */const gO=500,_O=6e4,Au=1e12;class yO{constructor(e){this.auth=e,this.counter=Au,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new vO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Au;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Au;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Au;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class vO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},_O)},gO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const _f=dS("rcb"),IO=new bl(3e4,6e4),EO="https://www.google.com/recaptcha/api.js?";class TO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(SO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ew(xe().grecaptcha)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(et(e,"network-request-failed"))},IO.get());xe()[_f]=()=>{xe().clearTimeout(s),delete xe()[_f];const a=xe().grecaptcha;if(!a||!ew(a)){i(et(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${EO}?${Io({onload:_f,render:"explicit",hl:n})}`;Lg(o).catch(()=>{clearTimeout(s),i(et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function SO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class AO{async load(e){return new yO(e)}clearedOneInstance(){}}/**
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
 */const DS="recaptcha",RO={theme:"light",type:"image"};let PO=class{constructor(e,n,r=Object.assign({},RO)){this.parameters=r,this.type=DS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Te(e),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new AO:new TO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(bg()&&!qg(),this.auth,"internal-error"),await CO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Nb(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function CO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Wg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ci._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function kO(t,e,n){const r=Te(t),i=await Oh(r,e,$(n));return new Wg(i,s=>xh(r,s))}async function NO(t,e,n){const r=$(t);await Dh(!1,r,"phone");const i=await Oh(r.auth,e,$(n));return new Wg(i,s=>wS(r,s))}async function DO(t,e,n){const r=$(t),i=await Oh(r.auth,e,$(n));return new Wg(i,s=>IS(r,s))}async function Oh(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===DS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await YV(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await pO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await fV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function xO(t,e){await Mg($(t),e)}/**
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
 */let Ui=class Yu{constructor(e){this.providerId=Yu.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,n){return Oh(this.auth,e,$(n))}static credential(e,n){return Ci._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Yu.credentialFromTaggedObject(n)}static credentialFromError(e){return Yu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ci._fromTokenResponse(n,r):null}};Ui.PROVIDER_ID="phone";Ui.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Zi(t,e){return e?Ft(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gg extends So{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bO(t){return vS(t.auth,new Gg(t),t.bypassAuthState)}function VO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),yS(n,new Gg(t),t.bypassAuthState)}async function OO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Mg(n,new Gg(t),t.bypassAuthState)}/**
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
 */class xS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bO;case"linkViaPopup":case"linkViaRedirect":return OO;case"reauthViaPopup":case"reauthViaRedirect":return VO;default:rt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LO=new bl(2e3,1e4);async function MO(t,e,n){const r=Te(t);Eo(t,e,tr);const i=Zi(r,n);return new Fn(r,"signInViaPopup",e,i).executeNotNull()}async function FO(t,e,n){const r=$(t);Eo(r.auth,e,tr);const i=Zi(r.auth,n);return new Fn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function UO(t,e,n){const r=$(t);Eo(r.auth,e,tr);const i=Zi(r.auth,n);return new Fn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Fn extends xS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LO.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const $O="pendingRedirect",Ra=new Map;class BO extends xS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await jO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jO(t,e){const n=VS(e),r=bS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Kg(t,e){return bS(t)._set(VS(e),"true")}function zO(){Ra.clear()}function Hg(t,e){Ra.set(t._key(),e)}function bS(t){return Ft(t._redirectPersistence)}function VS(t){return Pi($O,t.config.apiKey,t.name)}/**
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
 */function qO(t,e,n){return WO(t,e,n)}async function WO(t,e,n){const r=Te(t);Eo(t,e,tr),await r._initializationPromise;const i=Zi(r,n);return await Kg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function GO(t,e,n){return KO(t,e,n)}async function KO(t,e,n){const r=$(t);Eo(r.auth,e,tr),await r.auth._initializationPromise;const i=Zi(r.auth,n);await Kg(i,r.auth);const s=await OS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function HO(t,e,n){return QO(t,e,n)}async function QO(t,e,n){const r=$(t);Eo(r.auth,e,tr),await r.auth._initializationPromise;const i=Zi(r.auth,n);await Dh(!1,r,e.providerId),await Kg(i,r.auth);const s=await OS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function YO(t,e){return await Te(t)._initializationPromise,Lh(t,e,!1)}async function Lh(t,e,n=!1){const r=Te(t),i=Zi(r,e),o=await new BO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function OS(t){const e=Ll(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const XO=10*60*1e3;class LS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XO&&this.cachedEventUids.clear(),this.cachedEventUids.has(cw(e))}saveEventToCache(e){this.cachedEventUids.add(cw(e)),this.lastProcessedEventTime=Date.now()}}function cw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MS(t);default:return!1}}/**
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
 */async function FS(t,e={}){return Ve(t,"GET","/v1/projects",e)}/**
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
 */const ZO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eL=/^https?/;async function tL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FS(t);for(const n of e)try{if(nL(n))return}catch{}rt(t,"unauthorized-domain")}function nL(t){const e=el(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eL.test(n))return!1;if(ZO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rL=new bl(3e4,6e4);function hw(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iL(t){return new Promise((e,n)=>{var r,i,s;function o(){hw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hw(),n(et(t,"network-request-failed"))},timeout:rL.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=dS("iframefcb");return xe()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},Lg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function sL(t){return Xu=Xu||iL(t),Xu}/**
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
 */const oL=new bl(5e3,15e3),aL="__/auth/iframe",lL="emulator/auth/iframe",uL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hL(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vg(e,lL):`https://${t.config.authDomain}/${aL}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=cL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function dL(t){const e=await sL(t),n=xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:hL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},oL.get());function l(){xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const fL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pL=500,mL=600,gL="_blank",_L="http://localhost";class dw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yL(t,e,n,r=pL,i=mL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ve().toLowerCase();n&&(a=oS(u)?gL:n),sS(u)&&(e=e||_L,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(qb(u)&&a!=="_self")return vL(e||"",a),new dw(null);const h=window.open(e||"",a,c);P(h,t,"popup-blocked");try{h.focus()}catch{}return new dw(h)}function vL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wL="__/auth/handler",IL="emulator/auth/handler",EL=encodeURIComponent("fac");async function bp(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_N(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ao){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${EL}=${encodeURIComponent(l)}`:"";return`${TL(t)}?${Io(a).slice(1)}${u}`}function TL({config:t}){return t.emulator?Vg(t,IL):`https://${t.authDomain}/${wL}`}/**
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
 */const yf="webStorageSupport";class SL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fi,this._completeRedirectFn=Lh,this._overrideRedirectResult=Hg}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bp(e,n,r,el(),i);return yL(e,o,Ll())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bp(e,n,r,el(),i);return sO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dL(e),r=new LS(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yf,{type:yf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yf];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cS()||Og()||To()}}const AL=SL;class RL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class Qg extends RL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qg(e)}_finalizeEnroll(e,n,r){return XV(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return mO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class US{constructor(){}static assertion(e){return Qg._fromCredential(e)}}US.FACTOR_ID="phone";var fw="@firebase/auth",pw="1.3.0";/**
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
 */class PL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kL(t){en(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hS(t)},u=new Xb(r,i,s,l);return rV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new bt("auth-internal",e=>{const n=Te(e.getProvider("auth").getImmediate());return(r=>new PL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(fw,pw,CL(t)),gt(fw,pw,"esm2017")}/**
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
 */const NL=5*60;aN("authIdTokenMaxAge");kL("Browser");/**
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
 */function $i(){return window}/**
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
 */const DL=2e3;async function xL(t,e,n){var r;const{BuildInfo:i}=$i();dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await ML(e.sessionId),o={};return To()?o.ibi=i.packageName:Vl()?o.apn=i.packageName:rt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,bp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function bL(t){const{BuildInfo:e}=$i(),n={};To()?n.iosBundleId=e.packageName:Vl()?n.androidPackageName=e.packageName:rt(t,"operation-not-supported-in-this-environment"),await FS(t,n)}function VL(t){const{cordova:e}=$i();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,zb()?"_blank":"_system","location=yes"),n(i)})})}async function OL(t,e,n){const{cordova:r}=$i();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(et(t,"redirect-cancelled-by-user"))},DL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Vl()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LL(t){var e,n,r,i,s,o,a,l,u,c;const h=$i();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ML(t){const e=FL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function FL(t){if(dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const UL=20;class $L extends LS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qL(),postBody:null,tenantId:t.tenantId,error:et(t,"no-auth-event")}}function jL(t,e){return Vp()._set(Op(t),e)}async function mw(t){const e=await Vp()._get(Op(t));return e&&await Vp()._remove(Op(t)),e}function zL(t,e){var n,r;const i=GL(e);if(i.includes("/__/auth/callback")){const s=Ju(i),o=s.firebaseError?WL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?et(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<UL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Vp(){return Ft(zg)}function Op(t){return Pi("authEvent",t.config.apiKey,t.name)}function WL(t){try{return JSON.parse(t)}catch{return null}}function GL(t){const e=Ju(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ju(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ju(i).link||i||r||n||t}function Ju(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ns(n.join("?"))}/**
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
 */const KL=500;class HL{constructor(){this._redirectPersistence=Fi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Lh,this._overrideRedirectResult=Hg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new $L(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){LL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),zO(),await this._originValidation(e);const o=BL(e,r,i);await jL(e,o);const a=await xL(e,o,n),l=await VL(a);return OL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=$i(),o=setTimeout(async()=>{await mw(e),n.onEvent(gw())},KL),a=async c=>{clearTimeout(o);const h=await mw(e);let d=null;h&&(c!=null&&c.url)&&(d=zL(h,c.url)),n.onEvent(d||gw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;$i().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const QL=HL;function gw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:et("no-auth-event")}}/**
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
 */function YL(t,e){Te(t)._logFramework(e)}var XL="@firebase/auth-compat",JL="0.4.6";/**
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
 */const ZL=1e3;function Pa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function eM(){return Pa()==="http:"||Pa()==="https:"}function $S(t=ve()){return!!((Pa()==="file:"||Pa()==="ionic:"||Pa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function tM(){return wg()||yg()}function nM(){return pT()&&(document==null?void 0:document.documentMode)===11}function rM(t=ve()){return/Edge\/\d+/.test(t)}function iM(t=ve()){return nM()||rM(t)}function BS(){try{const t=self.localStorage,e=Ll();if(t)return t.setItem(e,"1"),t.removeItem(e),iM()?to():!0}catch{return Yg()&&to()}return!1}function Yg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function vf(){return(eM()||vg()||$S())&&!tM()&&BS()&&!Yg()}function jS(){return $S()&&typeof document<"u"}async function sM(){return jS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},ZL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function oM(){return typeof window<"u"?window:null}/**
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
 */const Lt={LOCAL:"local",NONE:"none",SESSION:"session"},Ko=P,zS="persistence";function aM(t,e){if(Ko(Object.values(Lt).includes(e),t,"invalid-persistence-type"),wg()){Ko(e!==Lt.SESSION,t,"unsupported-persistence-type");return}if(yg()){Ko(e===Lt.NONE,t,"unsupported-persistence-type");return}if(Yg()){Ko(e===Lt.NONE||e===Lt.LOCAL&&to(),t,"unsupported-persistence-type");return}Ko(e===Lt.NONE||BS(),t,"unsupported-persistence-type")}async function Lp(t){await t._initializationPromise;const e=qS(),n=Pi(zS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function lM(t,e){const n=qS();if(!n)return[];const r=Pi(zS,t,e);switch(n.getItem(r)){case Lt.NONE:return[no];case Lt.LOCAL:return[il,Fi];case Lt.SESSION:return[Fi];default:return[]}}function qS(){var t;try{return((t=oM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const uM=P;class yr{constructor(){this.browserResolver=Ft(AL),this.cordovaResolver=Ft(QL),this.underlyingResolver=null,this._redirectPersistence=Fi,this._completeRedirectFn=Lh,this._overrideRedirectResult=Hg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return jS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return uM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function WS(t){return t.unwrap()}function cM(t){return t.wrapped()}/**
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
 */function hM(t){return GS(t)}function dM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new fM(t,QV(t,e))}else if(r){const i=GS(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function GS(t){const{_tokenResponse:e}=t instanceof Ze?t.customData:t;if(!e)return null;if(!(t instanceof Ze)&&"temporaryProof"in e&&"phoneNumber"in e)return Ui.credentialFromResult(t);const n=e.providerId;if(!n||n===Go.PASSWORD)return null;let r;switch(n){case Go.GOOGLE:r=vn;break;case Go.FACEBOOK:r=yn;break;case Go.GITHUB:r=wn;break;case Go.TWITTER:r=In;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ro._create(n,a):Dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Us(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Ze?r.credentialFromError(t):r.credentialFromResult(t)}function Et(t,e){return e.catch(n=>{throw n instanceof Ze&&dM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:hM(n),additionalUserInfo:HV(n),user:Mh.getOrCreate(i)}})}async function Mp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Et(t,n.confirm(r))}}class fM{constructor(e,n){this.resolver=n,this.auth=cM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Et(WS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Mh=class la{constructor(e){this._delegate=e,this.multiFactor=ZV(e)}static getOrCreate(e){return la.USER_MAP.has(e)||la.USER_MAP.set(e,new la(e)),la.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Et(this.auth,wS(this._delegate,e))}async linkWithPhoneNumber(e,n){return Mp(this.auth,NO(this._delegate,e,n))}async linkWithPopup(e){return Et(this.auth,UO(this._delegate,e,yr))}async linkWithRedirect(e){return await Lp(Te(this.auth)),HO(this._delegate,e,yr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Et(this.auth,IS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Mp(this.auth,DO(this._delegate,e,n))}reauthenticateWithPopup(e){return Et(this.auth,FO(this._delegate,e,yr))}async reauthenticateWithRedirect(e){return await Lp(Te(this.auth)),GO(this._delegate,e,yr)}sendEmailVerification(e){return MV(this._delegate,e)}async unlink(e){return await TV(this._delegate,e),this}updateEmail(e){return BV(this._delegate,e)}updatePassword(e){return jV(this._delegate,e)}updatePhoneNumber(e){return xO(this._delegate,e)}updateProfile(e){return $V(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return FV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Mh.USER_MAP=new WeakMap;/**
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
 */const Ho=P;class Fp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ho(r,"invalid-api-key",{appName:e.name}),Ho(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?yr:void 0;this._delegate=n.initialize({options:{persistence:pM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Eb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Mh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){iV(this._delegate,e,n)}applyActionCode(e){return CV(this._delegate,e)}checkActionCode(e){return ES(this._delegate,e)}confirmPasswordReset(e,n){return PV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Et(this._delegate,NV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return LV(this._delegate,e)}isSignInWithEmailLink(e){return bV(this._delegate,e)}async getRedirectResult(){Ho(vf(),this._delegate,"operation-not-supported-in-this-environment");const e=await YO(this._delegate,yr);return e?Et(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){YL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=_w(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=_w(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return xV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return RV(this._delegate,e,n||void 0)}async setPersistence(e){aM(this._delegate,e);let n;switch(e){case Lt.SESSION:n=Fi;break;case Lt.LOCAL:n=await Ft(il)._isAvailable()?il:zg;break;case Lt.NONE:n=no;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Et(this._delegate,EV(this._delegate))}signInWithCredential(e){return Et(this._delegate,xh(this._delegate,e))}signInWithCustomToken(e){return Et(this._delegate,AV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Et(this._delegate,DV(this._delegate,e,n))}signInWithEmailLink(e,n){return Et(this._delegate,VV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Mp(this._delegate,kO(this._delegate,e,n))}async signInWithPopup(e){return Ho(vf(),this._delegate,"operation-not-supported-in-this-environment"),Et(this._delegate,MO(this._delegate,e,yr))}async signInWithRedirect(e){return Ho(vf(),this._delegate,"operation-not-supported-in-this-environment"),await Lp(this._delegate),qO(this._delegate,e,yr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return kV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Fp.Persistence=Lt;function _w(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Mh.getOrCreate(o)),error:e,complete:n}}function pM(t,e){const n=lM(t,e);if(typeof self<"u"&&!n.includes(il)&&n.push(il),typeof window<"u")for(const r of[zg,Fi])n.includes(r)||n.push(r);return n.includes(no)||n.push(no),n}/**
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
 */class Xg{constructor(){this.providerId="phone",this._delegate=new Ui(WS(Zn.auth()))}static credential(e,n){return Ui.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Xg.PHONE_SIGN_IN_METHOD=Ui.PHONE_SIGN_IN_METHOD;Xg.PROVIDER_ID=Ui.PROVIDER_ID;/**
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
 */const mM=P;class gM{constructor(e,n,r=Zn.app()){var i;mM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new PO(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const _M="auth-compat";function yM(t){t.INTERNAL.registerComponent(new bt(_M,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Fp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:as.EMAIL_SIGNIN,PASSWORD_RESET:as.PASSWORD_RESET,RECOVER_EMAIL:as.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:as.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:as.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:as.VERIFY_EMAIL}},EmailAuthProvider:Yr,FacebookAuthProvider:yn,GithubAuthProvider:wn,GoogleAuthProvider:vn,OAuthProvider:Us,SAMLAuthProvider:Fc,PhoneAuthProvider:Xg,PhoneMultiFactorGenerator:US,RecaptchaVerifier:gM,TwitterAuthProvider:In,Auth:Fp,AuthCredential:So,Error:Ze}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(XL,JL)}yM(Zn);var vM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Jg=Jg||{},j=vM||self;function Fh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wM(t){return Object.prototype.hasOwnProperty.call(t,wf)&&t[wf]||(t[wf]=++IM)}var wf="closure_uid_"+(1e9*Math.random()>>>0),IM=0;function EM(t,e,n){return t.call.apply(t.bind,arguments)}function TM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=EM:lt=TM,lt.apply(null,arguments)}function Ru(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var SM=0;Xr.prototype.s=!1;Xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SM!=0)&&wM(this)};Xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const KS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var AM=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function sl(t){return/^[\s\xa0]*$/.test(t)}function Uh(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return Uh().indexOf(t)!=-1}function e_(t){return e_[" "](t),t}e_[" "]=function(){};function RM(t,e){var n=y2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PM=En("Opera"),io=En("Trident")||En("MSIE"),HS=En("Edge"),Up=HS||io,QS=En("Gecko")&&!(Uh().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),CM=Uh().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function YS(){var t=j.document;return t?t.documentMode:void 0}var $p;e:{var If="",Ef=function(){var t=Uh();if(QS)return/rv:([^\);]+)(\)|;)/.exec(t);if(HS)return/Edge\/([\d\.]+)/.exec(t);if(io)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CM)return/WebKit\/(\S+)/.exec(t);if(PM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ef&&(If=Ef?Ef[1]:""),io){var Tf=YS();if(Tf!=null&&Tf>parseFloat(If)){$p=String(Tf);break e}}$p=If}var Bp;if(j.document&&io){var vw=YS();Bp=vw||parseInt($p,10)||void 0}else Bp=void 0;var kM=Bp;function ol(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(QS){e:{try{e_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:NM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ol.$.h.call(this)}}We(ol,ut);var NM={2:"touch",3:"pen",4:"mouse"};ol.prototype.h=function(){ol.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ul="closure_listenable_"+(1e6*Math.random()|0),DM=0;function xM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++DM,this.fa=this.ia=!1}function $h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function t_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function XS(t){const e={};for(const n in t)e[n]=t[n];return e}const ww="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function JS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ww.length;s++)n=ww[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bh(t){this.src=t,this.g={},this.h=0}Bh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function jp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=KS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var n_="closure_lm_"+(1e6*Math.random()|0),Sf={};function ZS(t,e,n,r,i){if(r&&r.once)return tA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ZS(t,e[s],n,r,i);return null}return n=s_(n),t&&t[Ul]?t.O(e,n,Fl(r)?!!r.capture:!!r,i):eA(t,e,n,!1,r,i)}function eA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fl(i)?!!i.capture:!!i,a=i_(t);if(a||(t[n_]=a=new Bh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=VM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(rA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VM(){function t(n){return e.call(t.src,t.listener,n)}const e=OM;return t}function tA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tA(t,e[s],n,r,i);return null}return n=s_(n),t&&t[Ul]?t.P(e,n,Fl(r)?!!r.capture:!!r,i):eA(t,e,n,!0,r,i)}function nA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)nA(t,e[s],n,r,i);else r=Fl(r)?!!r.capture:!!r,n=s_(n),t&&t[Ul]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zp(s,n,r,i),-1<n&&($h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=i_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zp(e,n,r,i)),(n=-1<t?e[t]:null)&&r_(n))}function r_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ul])jp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(rA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=i_(e))?(jp(n,t),n.h==0&&(n.src=null,e[n_]=null)):$h(t)}}}function rA(t){return t in Sf?Sf[t]:Sf[t]="on"+t}function OM(t,e){if(t.fa)t=!0;else{e=new ol(e,this);var n=t.listener,r=t.la||t.src;t.ia&&r_(t),t=n.call(r,e)}return t}function i_(t){return t=t[n_],t instanceof Bh?t:null}var Af="__closure_events_fn_"+(1e9*Math.random()>>>0);function s_(t){return typeof t=="function"?t:(t[Af]||(t[Af]=function(e){return t.handleEvent(e)}),t[Af])}function qe(){Xr.call(this),this.i=new Bh(this),this.S=this,this.J=null}We(qe,Xr);qe.prototype[Ul]=!0;qe.prototype.removeEventListener=function(t,e,n,r){nA(this,t,e,n,r)};function tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),JS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Pu(o,r,!0,e)&&i}if(o=e.g=t,i=Pu(o,r,!0,e)&&i,i=Pu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Pu(o,r,!1,e)&&i}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$h(n[r]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&jp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var o_=j.JSON.stringify;class LM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function MM(){var t=a_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FM{constructor(){this.h=this.g=null}add(e,n){const r=iA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var iA=new LM(()=>new UM,t=>t.reset());class UM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $M(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function BM(t){j.setTimeout(()=>{throw t},0)}let al,ll=!1,a_=new FM,sA=()=>{const t=j.Promise.resolve(void 0);al=()=>{t.then(jM)}};var jM=()=>{for(var t;t=MM();){try{t.h.call(t.g)}catch(n){BM(n)}var e=iA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ll=!1};function jh(t,e){qe.call(this),this.h=t||1,this.g=e||j,this.j=lt(this.qb,this),this.l=Date.now()}We(jh,qe);x=jh.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(l_(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function l_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){jh.$.N.call(this),l_(this),delete this.g};function u_(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function oA(t){t.g=u_(()=>{t.g=null,t.i&&(t.i=!1,oA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zM extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oA(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ul(t){Xr.call(this),this.h=t,this.g={}}We(ul,Xr);var Iw=[];function aA(t,e,n,r){Array.isArray(n)||(n&&(Iw[0]=n.toString()),n=Iw);for(var i=0;i<n.length;i++){var s=ZS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lA(t){t_(t.g,function(e,n){this.g.hasOwnProperty(n)&&r_(e)},t),t.g={}}ul.prototype.N=function(){ul.$.N.call(this),lA(this)};ul.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zh(){this.g=!0}zh.prototype.Ea=function(){this.g=!1};function qM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KM(t,n)+(r?" "+r:"")})}function GM(t,e){t.info(function(){return"TIMEOUT: "+e})}zh.prototype.info=function(){};function KM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return o_(n)}catch{return e}}var es={},Ew=null;function qh(){return Ew=Ew||new qe}es.Ta="serverreachability";function uA(t){ut.call(this,es.Ta,t)}We(uA,ut);function cl(t){const e=qh();tt(e,new uA(e))}es.STAT_EVENT="statevent";function cA(t,e){ut.call(this,es.STAT_EVENT,t),this.stat=e}We(cA,ut);function pt(t){const e=qh();tt(e,new cA(e,t))}es.Ua="timingevent";function hA(t,e){ut.call(this,es.Ua,t),this.size=e}We(hA,ut);function $l(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Wh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function c_(){}c_.prototype.h=null;function Tw(t){return t.h||(t.h=t.i())}function fA(){}var Bl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function h_(){ut.call(this,"d")}We(h_,ut);function d_(){ut.call(this,"c")}We(d_,ut);var qp;function Gh(){}We(Gh,c_);Gh.prototype.g=function(){return new XMLHttpRequest};Gh.prototype.i=function(){return{}};qp=new Gh;function jl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ul(this),this.P=HM,t=Up?125:void 0,this.V=new jh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pA}function pA(){this.i=null,this.g="",this.h=!1}var HM=45e3,Wp={},jc={};x=jl.prototype;x.setTimeout=function(t){this.P=t};function Gp(t,e,n){t.L=1,t.v=Hh(Qn(e)),t.s=n,t.S=!0,mA(t,null)}function mA(t,e){t.G=Date.now(),zl(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),TA(n.i,"t",r),t.C=0,n=t.l.J,t.h=new pA,t.g=qA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zM(lt(t.Pa,t,t.g),t.O)),aA(t.U,t.g,"readystatechange",t.nb),e=t.I?XS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),cl(),qM(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Up||this.g&&(this.h.h||this.g.ja()||Pw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?cl(3):cl(2)),Kh(this);var n=this.g.da();this.ca=n;t:if(gA(this)){var r=Pw(this.g);t="";var i=r.length,s=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wi(this),Ca(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sl(a)){var u=a;break t}}u=null}if(n=u)Ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kp(this,n);else{this.i=!1,this.o=3,pt(12),wi(this),Ca(this);break e}}this.S?(_A(this,c,o),Up&&this.i&&c==3&&(aA(this.U,this.V,"tick",this.mb),this.V.start())):(Ds(this.j,this.m,o,null),Kp(this,o)),c==4&&wi(this),this.i&&!this.J&&(c==4?$A(this.l,this):(this.i=!1,zl(this)))}else m2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),wi(this),Ca(this)}}}catch{}finally{}};function gA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _A(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=QM(t,n),i==jc){e==4&&(t.o=4,pt(14),r=!1),Ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wp){t.o=4,pt(15),Ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ds(t.j,t.m,i,null),Kp(t,i);gA(t)&&i!=jc&&i!=Wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),y_(e),e.M=!0,pt(11))):(Ds(t.j,t.m,n,"[Invalid Chunked Response]"),wi(t),Ca(t))}x.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(Kh(this),_A(this,t,e),this.i&&t!=4&&zl(this))}};function QM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jc:(n=Number(e.substring(n,r)),isNaN(n)?Wp:(r+=1,r+n>e.length?jc:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,wi(this)};function zl(t){t.Y=Date.now()+t.P,yA(t,t.P)}function yA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$l(lt(t.lb,t),e)}function Kh(t){t.B&&(j.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(GM(this.j,this.A),this.L!=2&&(cl(),pt(17)),wi(this),this.o=2,Ca(this)):yA(this,this.Y-t)};function Ca(t){t.l.H==0||t.J||$A(t.l,t)}function wi(t){Kh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,l_(t.V),lA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Kp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hp(n.i,t))){if(!t.K&&Hp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wc(n),Jh(n);else break e;__(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=$l(lt(n.ib,n),6e3));if(1>=RA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ii(n,11)}else if((t.K||n.g==t)&&Wc(n),!sl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(f_(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ue(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zA(r,r.J?r.pa:null,r.Y),o.K){PA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Kh(a),zl(a)),r.g=o}else FA(r);0<n.j.length&&Zh(n)}else u[0]!="stop"&&u[0]!="close"||Ii(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ii(n,7):g_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}cl(4)}catch{}}function YM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function XM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=XM(t),r=YM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var wA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ki(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ki){this.h=t.h,zc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new hl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sw(this,n),this.o=t.o}else t&&(e=String(t).match(wA))?(this.h=!1,zc(this,e[1]||"",!0),this.s=ua(e[2]||""),this.g=ua(e[3]||"",!0),qc(this,e[4]),this.l=ua(e[5]||"",!0),Sw(this,e[6]||"",!0),this.o=ua(e[7]||"")):(this.h=!1,this.i=new hl(null,this.h))}ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ca(e,Aw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ca(e,Aw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ca(n,n.charAt(0)=="/"?t2:e2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ca(n,r2)),t.join("")};function Qn(t){return new ki(t)}function zc(t,e,n){t.j=n?ua(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sw(t,e,n){e instanceof hl?(t.i=e,i2(t.i,t.h)):(n||(e=ca(e,n2)),t.i=new hl(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Hh(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ua(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ca(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Aw=/[#\/\?@]/g,e2=/[#\?:]/g,t2=/[#\?]/g,n2=/[#\?@]/g,r2=/#/g;function hl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&JM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=hl.prototype;x.add=function(t,e){Jr(this),this.i=null,t=Ro(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function IA(t,e){Jr(t),e=Ro(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function EA(t,e){return Jr(t),e=Ro(t,e),t.g.has(e)}x.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){Jr(this);let e=[];if(typeof t=="string")EA(this,t)&&(e=e.concat(this.g.get(Ro(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Jr(this),this.i=null,t=Ro(this,t),EA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function TA(t,e,n){IA(t,e),0<n.length&&(t.i=null,t.g.set(Ro(t,e),Zg(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ro(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function i2(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(IA(this,r),TA(this,i,n))},t)),t.j=e}var s2=class{constructor(t,e){this.g=t,this.map=e}};function SA(t){this.l=t||o2,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var o2=10;function AA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function RA(t){return t.h?1:t.g?t.g.size:0}function Hp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function f_(t,e){t.g?t.g.add(e):t.h=e}function PA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SA.prototype.cancel=function(){if(this.i=CA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function CA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zg(t.i)}var a2=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function l2(){this.g=new a2}function u2(t,e,n){const r=n||"";try{vA(t,function(i,s){let o=i;Fl(i)&&(o=o_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function c2(t,e){const n=new zh;if(j.Image){const r=new Image;r.onload=Ru(Cu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ru(Cu,n,r,"TestLoadImage: error",!1,e),r.onabort=Ru(Cu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ru(Cu,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Cu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qh(t){this.l=t.ec||null,this.j=t.ob||!1}We(Qh,c_);Qh.prototype.g=function(){return new Yh(this.l,this.j)};Qh.prototype.i=function(t){return function(){return t}}({});function Yh(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=p_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Yh,qe);var p_=0;x=Yh.prototype;x.open=function(t,e){if(this.readyState!=p_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dl(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ql(this)),this.readyState=p_};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dl(this)),this.g&&(this.readyState=3,dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function kA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ql(this):dl(this),this.readyState==3&&kA(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,ql(this))};x.Ya=function(t){this.g&&(this.response=t,ql(this))};x.ka=function(){this.g&&ql(this)};function ql(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dl(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var h2=j.JSON.parse;function Se(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=NA,this.L=this.M=!1}We(Se,qe);var NA="",d2=/^https?$/i,f2=["POST","PUT"];x=Se.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qp.g(),this.C=this.u?Tw(this.u):Tw(qp),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Rw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=KS(f2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bA(this),0<this.B&&((this.L=p2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=u_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Rw(this,s)}};function p2(t){return io&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Jg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Rw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DA(t),Xh(t)}function DA(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),Xh(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xh(this,!0)),Se.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?xA(this):this.kb())};x.kb=function(){xA(this)};function xA(t){if(t.h&&typeof Jg<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)u_(t.La,0,t);else if(tt(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(wA)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!d2.test(i?i.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var s=2<Sn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",DA(t)}}finally{Xh(t)}}}}function Xh(t,e){if(t.g){bA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function bA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),h2(e)}};function Pw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case NA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function m2(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(sl(t[r]))continue;var n=$M(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}bM(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function VA(t){let e="";return t_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function m_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function OA(t){this.Ga=0,this.j=[],this.l=new zh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qo("baseRetryDelayMs",5e3,t),this.hb=Qo("retryDelaySeedMs",1e4,t),this.eb=Qo("forwardChannelMaxRetries",2,t),this.xa=Qo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new SA(t&&t.concurrentRequestLimit),this.Ja=new l2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=OA.prototype;x.ra=8;x.H=1;function g_(t){if(LA(t),t.H==3){var e=t.W++,n=Qn(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),Wl(t,n),e=new jl(t,t.l,e),e.L=2,e.v=Hh(Qn(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=qA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zl(e)}jA(t)}function Jh(t){t.g&&(y_(t),t.g.cancel(),t.g=null)}function LA(t){Jh(t),t.u&&(j.clearTimeout(t.u),t.u=null),Wc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Zh(t){if(!AA(t.i)&&!t.m){t.m=!0;var e=t.Na;al||sA(),ll||(al(),ll=!0),a_.add(e,t),t.C=0}}function g2(t,e){return RA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$l(lt(t.Na,t,e),BA(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new jl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=XS(s),JS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=MA(this,i,e),n=Qn(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Wl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(VA(s)))+"&"+e:this.o&&m_(n,this.o,s)),f_(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,Gp(i,n,null)):Gp(i,n,e),this.H=2}}else this.H==3&&(t?Cw(this,t):this.j.length==0||AA(this.i)||Cw(this))};function Cw(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),Wl(t,r),t.o&&t.s&&m_(r,t.o,t.s),n=new jl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=MA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),f_(t.i,n),Gp(n,r,e)}function Wl(t,e){t.na&&t_(t.na,function(n,r){ue(e,r,n)}),t.h&&vA({},function(n,r){ue(e,r,n)})}function MA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?lt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{u2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function FA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;al||sA(),ll||(al(),ll=!0),a_.add(e,t),t.A=0}}function __(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$l(lt(t.Ma,t),BA(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,UA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$l(lt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Jh(this),UA(this))};function y_(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function UA(t){t.g=new jl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),Wl(t,e),t.o&&t.s&&m_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hh(Qn(e)),n.s=null,n.S=!0,mA(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Jh(this),__(this),pt(19))};function Wc(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function $A(t,e){var n=null;if(t.g==e){Wc(t),y_(t),t.g=null;var r=2}else if(Hp(t.i,e))n=e.F,PA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=qh(),tt(r,new hA(r,n)),Zh(t)}else FA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&g2(t,e)||r==2&&__(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ii(t,5);break;case 4:Ii(t,10);break;case 3:Ii(t,6);break;default:Ii(t,2)}}}function BA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=lt(t.pb,t);n||(n=new ki("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||zc(n,"https"),Hh(n)),c2(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),jA(t),LA(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function jA(t){if(t.H=0,t.ma=[],t.h){const e=CA(t.i);(e.length!=0||t.j.length!=0)&&(yw(t.ma,e),yw(t.ma,t.j),t.i.i.length=0,Zg(t.j),t.j.length=0),t.h.ya()}}function zA(t,e,n){var r=n instanceof ki?Qn(n):new ki(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ki(null);r&&zc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),Wl(t,r),r}function qA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new Qh({ob:!0})):new Se(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function WA(){}x=WA.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Gc(){if(io&&!(10<=Number(kM)))throw Error("Environmental error: no available transport.")}Gc.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){qe.call(this),this.g=new OA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!sl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Po(this)}We(jt,qe);jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zA(t,null,t.Y),Zh(t)};jt.prototype.close=function(){g_(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=o_(t),t=n);e.j.push(new s2(e.fb++,t)),e.H==3&&Zh(e)};jt.prototype.N=function(){this.g.h=null,delete this.j,g_(this.g),delete this.g,jt.$.N.call(this)};function GA(t){h_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(GA,h_);function KA(){d_.call(this),this.status=1}We(KA,d_);function Po(t){this.g=t}We(Po,WA);Po.prototype.Ba=function(){tt(this.g,"a")};Po.prototype.Aa=function(t){tt(this.g,new GA(t))};Po.prototype.za=function(t){tt(this.g,new KA)};Po.prototype.ya=function(){tt(this.g,"b")};function _2(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(fn,_2);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Rf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Rf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Rf(this,r),i=0;break}}this.h=i,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var y2={};function v_(t){return-128<=t&&128>t?RM(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return js;if(0>t)return Ye(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qp;return new re(e,0)}function HA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ye(HA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=An(Math.pow(e,s)),r=r.R(s).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var Qp=4294967296,js=v_(0),Yp=v_(1),kw=v_(16777216);x=re.prototype;x.ea=function(){if(Ht(this))return-Ye(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qp+r)*e,e*=Qp}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Un(this))return"0";if(Ht(this))return"-"+Ye(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var i=Hc(n,e).g;n=Kc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Un(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}x.X=function(t){return t=Kc(this,t),Ht(t)?-1:Un(t)?0:1};function Ye(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Yp)}x.abs=function(){return Ht(this)?Ye(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Kc(t,e){return t.add(Ye(e))}x.R=function(t){if(Un(this)||Un(t))return js;if(Ht(this))return Ht(t)?Ye(this).R(Ye(t)):Ye(Ye(this).R(t));if(Ht(t))return Ye(this.R(Ye(t)));if(0>this.X(kw)&&0>t.X(kw))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ku(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ku(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ku(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ku(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function ku(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Yo(t,e){this.g=t,this.h=e}function Hc(t,e){if(Un(e))throw Error("division by zero");if(Un(t))return new Yo(js,js);if(Ht(t))return e=Hc(Ye(t),e),new Yo(Ye(e.g),Ye(e.h));if(Ht(e))return e=Hc(t,Ye(e)),new Yo(Ye(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yp,r=e;0>=r.X(t);)n=Nw(n),r=Nw(r);var i=ls(n,1),s=ls(r,1);for(r=ls(r,2),n=ls(n,2);!Un(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ls(r,1),n=ls(n,1)}return e=Kc(t,i.R(e)),new Yo(i,e)}for(i=js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=An(n),o=s.R(e);Ht(o)||0<o.X(t);)n-=r,s=An(n),o=s.R(e);Un(s)&&(s=Yp),i=i.add(s),t=Kc(t,o)}return new Yo(i,t)}x.gb=function(t){return Hc(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function Nw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function ls(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Gc.prototype.createWebChannel=Gc.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Wh.NO_ERROR=0;Wh.TIMEOUT=8;Wh.HTTP_ERROR=6;dA.COMPLETE="complete";fA.EventType=Bl;Bl.OPEN="a";Bl.CLOSE="b";Bl.ERROR="c";Bl.MESSAGE="d";qe.prototype.listen=qe.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=An;re.fromString=HA;var v2=function(){return new Gc},w2=function(){return qh()},Pf=Wh,I2=dA,E2=es,Dw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nu=fA,T2=Se,S2=fn,zs=re;const xw="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let Co="10.4.0";/**
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
 */const Mr=new xl("@firebase/firestore");function fs(){return Mr.logLevel}function A2(t){Mr.setLogLevel(t)}function S(t,...e){if(Mr.logLevel<=H.DEBUG){const n=e.map(w_);Mr.debug(`Firestore (${Co}): ${t}`,...n)}}function Ce(t,...e){if(Mr.logLevel<=H.ERROR){const n=e.map(w_);Mr.error(`Firestore (${Co}): ${t}`,...n)}}function pn(t,...e){if(Mr.logLevel<=H.WARN){const n=e.map(w_);Mr.warn(`Firestore (${Co}): ${t}`,...n)}}function w_(t){if(typeof t=="string")return t;try{/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw Ce(e),new Error(e)}function F(t,e){t||b()}function R2(t,e){t||b()}function D(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Ze{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class QA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class C2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class k2{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new QA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Be(e)}}class N2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class D2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new N2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new x2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function V2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class YA{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=V2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function z(t,e){return t<e?-1:t>e?1:0}function so(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function XA(t){return t+"\0"}/**
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
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new pe(0,0))}static max(){return new M(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fl{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends fl{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const O2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends fl{construct(e,n,r){return new Ee(e,n,r)}static isValidIdentifier(e){return O2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
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
 */class Qc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Xp(t){return t.fields.find(e=>e.kind===2)}function ui(t){return t.fields.filter(e=>e.kind!==2)}Qc.UNKNOWN_ID=-1;class Zu{constructor(e,n){this.fieldPath=e,this.kind=n}}class pl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new pl(0,zt.min())}}function JA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new zt(i,k.empty(),e)}function ZA(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zt(M.min(),k.empty(),-1)}static max(){return new zt(M.max(),k.empty(),-1)}}function I_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=k.comparator(t.documentKey,e.documentKey),n!==0?n:z(t.largestBatchId,e.largestBatchId))}/**
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
 */const e1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==e1)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class ed{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new ze,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new ka(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=E_(r.target.error);this.m.reject(new ka(e,i))}}static open(e,n,r,i){try{return new ed(n,e.transaction(i,r))}catch(s){throw new ka(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new M2(n)}}class ln{constructor(e,n,r){this.name=e,this.version=n,this.S=r,ln.D(ve())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),ci(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!to())return!1;if(ln.v())return!0;const e=ve(),n=ln.D(e),r=0<n&&n<10,i=ln.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ka(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ka(e,o))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=ed.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return l.catch(()=>{}),await a.g,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class L2{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return ci(this.q.delete())}}class ka extends T{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ei(t){return t.name==="IndexedDbTransactionError"}class M2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ci(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),ci(this.store.add(e))}get(e){return ci(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),ci(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),ci(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new v((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=E_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new v((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new L2(a),u=n(a.primaryKey,a.value,l);if(u instanceof v){const c=u.catch(h=>(l.done(),v.reject(h)));r.push(c)}l.isDone?i():l.U===null?a.continue():a.continue(l.U)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ci(t){return new v((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=E_(r.target.error);n(i)}})}let bw=!1;function E_(t){const e=ln.D(ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bw||(bw=!0,setTimeout(()=>{throw r},0)),r}}return t}class F2{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){ei(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zr(n)}await this.te(6e4)})}}class U2{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=ZA(s);I_(o,r)>0&&(r=o)}),new zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Rt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rt.ae=-1;function Gl(t){return t==null}function ml(t){return t===0&&1/t==-1/0}function n1(t){return typeof t=="number"&&Number.isInteger(t)&&!ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function _t(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vw(e)),e=$2(t.get(n),e);return Vw(e)}function $2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Vw(t){return t+""}function Rn(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),J.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&b(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:b()}s=o+2}return new J(r)}/**
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
 */const Ow=["userId","batchId"];/**
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
 */function ec(t,e){return[t,_t(e)]}function r1(t,e,n){return[t,_t(e),n]}const B2={},j2=["prefixPath","collectionGroup","readTime","documentId"],z2=["prefixPath","collectionGroup","documentId"],q2=["collectionGroup","readTime","prefixPath","documentId"],W2=["canonicalId","targetId"],G2=["targetId","path"],K2=["path","targetId"],H2=["collectionId","parent"],Q2=["indexId","uid"],Y2=["uid","sequenceNumber"],X2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],J2=["indexId","uid","orderedDocumentKey"],Z2=["userId","collectionPath","documentId"],eF=["userId","collectionPath","largestBatchId"],tF=["userId","collectionGroup","largestBatchId"],i1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nF=[...i1,"documentOverlays"],s1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],o1=s1,rF=[...o1,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Jp extends t1{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function Ge(t,e){const n=D(t);return ln.O(n.ue,e)}/**
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
 */function Lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function a1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ae{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mw(this.data.getIterator())}getIteratorFrom(e){return new Mw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class Mw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function us(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new oe(Ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class l1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function iF(){return typeof atob<"u"}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new l1("Invalid base64 string: "+s):s}}(e);return new Me(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const sF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(F(!!t),typeof t=="string"){let e=0;const n=sF.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
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
 */function td(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function T_(t){const e=t.mapValue.fields.__previous_value__;return td(e)?T_(e):e}function gl(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class oF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tc={nullValue:"NULL_VALUE"};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?td(t)?4:u1(t)?9007199254740991:10:b()}function xn(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),a=Fr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),a=Ie(s.doubleValue);return o===a?ml(o)===ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Lw(o)!==Lw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function _l(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Br(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ie(s.integerValue||s.doubleValue),l=Ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Fw(t.timestampValue,e.timestampValue);case 4:return Fw(gl(t),gl(e));case 5:return z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ur(s),l=Ur(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=z(a[u],l[u]);if(c!==0)return c}return z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=z(Ie(s.latitude),Ie(o.latitude));return a!==0?a:z(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Br(a[u],l[u]);if(c)return c}return z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===vr.mapValue&&o===vr.mapValue)return 0;if(s===vr.mapValue)return 1;if(o===vr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=z(l[h],c[h]);if(d!==0)return d;const f=Br(a[l[h]],u[c[h]]);if(f!==0)return f}return z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function Fw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z(t,e);const n=Fr(t),r=Fr(e),i=z(n.seconds,r.seconds);return i!==0?i:z(n.nanos,r.nanos)}function oo(t){return Zp(t)}function Zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return k.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zp(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function em(t){return!!t&&"integerValue"in t}function yl(t){return!!t&&"arrayValue"in t}function Uw(t){return!!t&&"nullValue"in t}function $w(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function u1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function aF(t){return"nullValue"in t?tc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ji($r.empty(),k.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:b()}function lF(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ji($r.empty(),k.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?vr:b()}function Bw(t,e){const n=Br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function jw(t,e){const n=Br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=Ee.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xe(Na(this.value))}}function c1(t){const e=[];return ts(t.fields,(n,r)=>{const i=new Ee([n]);if(nc(r)){const s=c1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
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
 */class ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,M.min(),M.min(),M.min(),Xe.empty(),0)}static newFoundDocument(e,n,r,i){return new ce(e,1,n,M.min(),r,i,0)}static newNoDocument(e,n){return new ce(e,2,n,M.min(),M.min(),Xe.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,M.min(),M.min(),Xe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jr{constructor(e,n){this.position=e,this.inclusive=n}}function zw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=k.comparator(k.fromName(o.referenceValue),n.key):r=Br(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function uF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class h1{}class Q extends h1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cF(e,n,r):n==="array-contains"?new fF(e,r):n==="in"?new _1(e,r):n==="not-in"?new pF(e,r):n==="array-contains-any"?new mF(e,r):new Q(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hF(e,r):new dF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Br(n,this.value)):n!==null&&Bi(this.value)===Bi(n)&&this.matchesComparison(Br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class te extends h1{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new te(e,n)}matches(e){return ao(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ao(t){return t.op==="and"}function tm(t){return t.op==="or"}function S_(t){return d1(t)&&ao(t)}function d1(t){for(const e of t.filters)if(e instanceof te)return!1;return!0}function nm(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(S_(t))return t.filters.map(e=>nm(e)).join(",");{const e=t.filters.map(n=>nm(n)).join(",");return`${t.op}(${e})`}}function f1(t,e){return t instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&f1(o,i.filters[a]),!0):!1}(t,e):void b()}function p1(t,e){const n=t.filters.concat(e);return te.create(n,t.op)}function m1(t){return t instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof te?function(n){return n.op.toString()+" {"+n.getFilters().map(m1).join(" ,")+"}"}(t):"Filter"}class cF extends Q{constructor(e,n,r){super(e,n,r),this.key=k.fromName(r.referenceValue)}matches(e){const n=k.comparator(e.key,this.key);return this.matchesComparison(n)}}class hF extends Q{constructor(e,n){super(e,"in",n),this.keys=g1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dF extends Q{constructor(e,n){super(e,"not-in",n),this.keys=g1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>k.fromName(r.referenceValue))}class fF extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yl(n)&&_l(n.arrayValue,this.value)}}class _1 extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_l(this.value.arrayValue,n)}}class pF extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_l(this.value.arrayValue,n)}}class mF extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_l(this.value.arrayValue,r))}}/**
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
 */class gF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function rm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gF(t,e,n,r,i,s,o)}function zi(t){const e=D(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.he=n}return e.he}function Kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!f1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qw(t.startAt,e.startAt)&&qw(t.endAt,e.endAt)}function Yc(t){return k.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Xc(t,e){return t.filters.filter(n=>n instanceof Q&&n.field.isEqual(e))}function Ww(t,e,n){let r=tc,i=!0;for(const s of Xc(t,e)){let o=tc,a=!0;switch(s.op){case"<":case"<=":o=aF(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=tc}Bw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Bw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Gw(t,e,n){let r=vr,i=!0;for(const s of Xc(t,e)){let o=vr,a=!0;switch(s.op){case">=":case">":o=lF(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=vr}jw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];jw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class nr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function y1(t,e,n,r,i,s,o,a){return new nr(t,e,n,r,i,s,o,a)}function ko(t){return new nr(t)}function Kw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function R_(t){return t.collectionGroup!==null}function Ws(t){const e=D(t);if(e.Pe===null){e.Pe=[];const n=nd(e),r=A_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new qs(n)),e.Pe.push(new qs(Ee.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new qs(Ee.keyField(),s))}}}return e.Pe}function yt(t){const e=D(t);return e.Ie||(e.Ie=_F(e,Ws(t))),e.Ie}function _F(t,e){if(t.limitType==="F")return rm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qs(i.field,s)});const n=t.endAt?new jr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jr(t.startAt.position,t.startAt.inclusive):null;return rm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function im(t,e){e.getFirstInequalityField(),nd(t);const n=t.filters.concat([e]);return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jc(t,e,n){return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hl(t,e){return Kl(yt(t),yt(e))&&t.limitType===e.limitType}function v1(t){return`${zi(yt(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>m1(i)).join(", ")}]`),Gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oo(i)).join(",")),`Target(${r})`}(yt(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):k.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=zw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,a,l){const u=zw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ws(r),i))}(t,e)}function w1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function I1(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=yF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yF(t,e,n){const r=t.field.isKeyField()?k.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Br(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return a1(this.inner)}size(){return this.innerSize}}/**
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
 */const vF=new ae(k.comparator);function Ct(){return vF}const E1=new ae(k.comparator);function ha(...t){let e=E1;for(const n of t)e=e.insert(n.key,n);return e}function T1(t){let e=E1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pn(){return Da()}function S1(){return Da()}function Da(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const wF=new ae(k.comparator),IF=new oe(k.comparator);function q(...t){let e=IF;for(const n of t)e=e.add(n);return e}const EF=new oe(z);function P_(){return EF}/**
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
 */function A1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ml(e)?"-0":e}}function R1(t){return{integerValue:""+t}}function P1(t,e){return n1(e)?R1(e):A1(t,e)}/**
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
 */class rd{constructor(){this._=void 0}}function TF(t,e,n){return t instanceof lo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&td(s)&&(s=T_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qi?k1(t,e):t instanceof Wi?N1(t,e):function(i,s){const o=C1(i,s),a=Hw(o)+Hw(i.Te);return em(o)&&em(i.Te)?R1(a):A1(i.serializer,a)}(t,e)}function SF(t,e,n){return t instanceof qi?k1(t,e):t instanceof Wi?N1(t,e):n}function C1(t,e){return t instanceof uo?function(r){return em(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lo extends rd{}class qi extends rd{constructor(e){super(),this.elements=e}}function k1(t,e){const n=D1(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends rd{constructor(e){super(),this.elements=e}}function N1(t,e){let n=D1(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class uo extends rd{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Hw(t){return Ie(t.integerValue||t.doubleValue)}function D1(t){return yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Yl{constructor(e,n){this.field=e,this.transform=n}}function AF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qi&&i instanceof qi||r instanceof Wi&&i instanceof Wi?so(r.elements,i.elements,xn):r instanceof uo&&i instanceof uo?xn(r.Te,i.Te):r instanceof lo&&i instanceof lo}(t.transform,e.transform)}class RF{constructor(e,n){this.version=e,this.transformResults=n}}class fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class id{}function x1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Do(t.key,fe.none()):new No(t.key,t.data,fe.none());{const n=t.data,r=Xe.empty();let i=new oe(Ee.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new rr(t.key,r,new Pt(i.toArray()),fe.none())}}function PF(t,e,n){t instanceof No?function(i,s,o){const a=i.value.clone(),l=Yw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Yw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(b1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xa(t,e,n,r){return t instanceof No?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=s.value.clone(),c=Xw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=Xw(s.fieldTransforms,l,o),c=o.data;return c.setAll(b1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=C1(r.transform,i||null);s!=null&&(n===null&&(n=Xe.empty()),n.set(r.field,s))}return n||null}function Qw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&so(r,i,(s,o)=>AF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class No extends id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function b1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yw(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SF(o,a,n[i]))}return r}function Xw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TF(s,o,e))}return r}class Do extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C_ extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class k_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=S1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=x1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>Qw(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>Qw(n,r))}}class N_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=function(){return wF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new N_(e,n,r,i)}}/**
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
 */class D_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,X;function V1(t){switch(t){default:return b();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function O1(t){if(t===void 0)return Ce("GRPC error has no .code"),w.UNKNOWN;switch(t){case De.OK:return w.OK;case De.CANCELLED:return w.CANCELLED;case De.UNKNOWN:return w.UNKNOWN;case De.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case De.INTERNAL:return w.INTERNAL;case De.UNAVAILABLE:return w.UNAVAILABLE;case De.UNAUTHENTICATED:return w.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case De.NOT_FOUND:return w.NOT_FOUND;case De.ALREADY_EXISTS:return w.ALREADY_EXISTS;case De.PERMISSION_DENIED:return w.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case De.ABORTED:return w.ABORTED;case De.OUT_OF_RANGE:return w.OUT_OF_RANGE;case De.UNIMPLEMENTED:return w.UNIMPLEMENTED;case De.DATA_LOSS:return w.DATA_LOSS;default:return b()}}(X=De||(De={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function L1(){return new TextEncoder}/**
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
 */const NF=new zs([4294967295,4294967295],0);function Jw(t){const e=L1().encode(t),n=new S2;return n.update(e),new Uint8Array(n.digest())}function Zw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zs([n,r],0),new zs([i,s],0)]}class x_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new da(`Invalid padding: ${n}`);if(r<0)throw new da(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new da(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=zs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(zs.fromNumber(r)));return i.compare(NF)===1&&(i=new zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Jw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new x_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Jw(e),[r,i]=Zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(M.min(),i,new ae(z),Ct(),q())}}class Jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jl(r,n,q(),q(),q())}}/**
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
 */class ic{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class M1{constructor(e,n){this.targetId=e,this.ye=n}}class F1{constructor(e,n,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class eI{constructor(){this.we=0,this.Se=nI(),this.be=Me.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=q(),n=q(),r=q();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Jl(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=nI()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class DF{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Ct(),this.Ue=tI(),this.We=new ae(z)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Yc(s))if(r===0){const o=new k(s.path);this.je(n,o,ce.newNoDocument(o,M.min()))}else F(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ur(r).toUint8Array()}catch(l){if(l instanceof l1)return pn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new x_(o,i,s)}catch(l){return pn(l instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Yc(a.target)){const l=new k(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,ce.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=q();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Xl(e,n,this.We,this.$e,r);return this.$e=Ct(),this.Ue=tI(),this.We=new ae(z),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new eI,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new oe(z),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new eI),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function tI(){return new ae(k.comparator)}function nI(){return new ae(k.comparator)}const xF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VF=(()=>({and:"AND",or:"OR"}))();class OF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sm(t,e){return t.useProto3Json||Gl(e)?e:{value:e}}function co(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LF(t,e){return co(t,e.toTimestamp())}function ke(t){return F(!!t),M.fromTimestamp(function(n){const r=Fr(n);return new pe(r.seconds,r.nanos)}(t))}function b_(t,e){return function(r){return new J(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function $1(t){const e=J.fromString(t);return F(Q1(e)),e}function vl(t,e){return b_(t.databaseId,e.path)}function Nn(t,e){const n=$1(e);if(n.get(1)!==t.databaseId.projectId)throw new T(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new k(j1(n))}function om(t,e){return b_(t.databaseId,e)}function B1(t){const e=$1(t);return e.length===4?J.emptyPath():j1(e)}function wl(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j1(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rI(t,e,n){return{name:vl(t,e),fields:n.value.mapValue.fields}}function z1(t,e,n){const r=Nn(t,e.name),i=ke(e.updateTime),s=e.createTime?ke(e.createTime):M.min(),o=new Xe({mapValue:{fields:e.fields}}),a=ce.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function MF(t,e){return"found"in e?function(r,i){F(!!i.found),i.found.name,i.found.updateTime;const s=Nn(r,i.found.name),o=ke(i.found.updateTime),a=i.found.createTime?ke(i.found.createTime):M.min(),l=new Xe({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){F(!!i.missing),F(!!i.readTime);const s=Nn(r,i.missing),o=ke(i.readTime);return ce.newNoDocument(s,o)}(t,e):b()}function FF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(F(c===void 0||typeof c=="string"),Me.fromBase64String(c||"")):(F(c===void 0||c instanceof Uint8Array),Me.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:O1(u.code);return new T(c,u.message||"")}(o);n=new F1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nn(t,r.document.name),s=ke(r.document.updateTime),o=r.document.createTime?ke(r.document.createTime):M.min(),a=new Xe({mapValue:{fields:r.document.fields}}),l=ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ic(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nn(t,r.document),s=r.readTime?ke(r.readTime):M.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nn(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kF(i,s),a=r.targetId;n=new M1(a,o)}}return n}function Il(t,e){let n;if(e instanceof No)n={update:rI(t,e.key,e.value)};else if(e instanceof Do)n={delete:vl(t,e.key)};else if(e instanceof rr)n={update:rI(t,e.key,e.data),updateMask:qF(e.fieldMask)};else{if(!(e instanceof C_))return b();n={verify:vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof uo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:LF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function am(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?fe.updateTime(ke(s.updateTime)):s.exists!==void 0?fe.exists(s.exists):fe.none()}(e.currentDocument):fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)F(a.setToServerValue==="REQUEST_TIME"),l=new lo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new qi(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Wi(c)}else"increment"in a?l=new uo(o,a.increment):b();const u=Ee.fromServerFormat(a.fieldPath);return new Yl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Nn(t,e.update.name),s=new Xe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Pt(u.map(c=>Ee.fromServerFormat(c)))}(e.updateMask);return new rr(i,s,o,n,r)}return new No(i,s,n,r)}if(e.delete){const i=Nn(t,e.delete);return new Do(i,n)}if(e.verify){const i=Nn(t,e.verify);return new C_(i,n)}return b()}function UF(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ke(i.updateTime):ke(s);return o.isEqual(M.min())&&(o=ke(s)),new RF(o,i.transformResults||[])}(n,e))):[]}function q1(t,e){return{documents:[om(t,e.path)]}}function W1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=om(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=om(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return H1(te.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ms(h.field),direction:BF(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=sm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function G1(t){let e=B1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=K1(h);return d instanceof te&&S_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new qs(gs(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Gl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new jr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new jr(f,d)}(n.endAt)),y1(e,i,o,s,a,"F",l,u)}function $F(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gs(n.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gs(n.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return Q.create(gs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return te.create(n.compositeFilter.filters.map(r=>K1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function BF(t){return xF[t]}function jF(t){return bF[t]}function zF(t){return VF[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return Ee.fromServerFormat(t.fieldPath)}function H1(t){return t instanceof Q?function(n){if(n.op==="=="){if($w(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(Uw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($w(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(Uw(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:jF(n.op),value:n.value}}}(t):t instanceof te?function(n){const r=n.getFilters().map(i=>H1(i));return r.length===1?r[0]:{compositeFilter:{op:zF(n.op),filters:r}}}(t):b()}function qF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,i,s=M.min(),o=M.min(),a=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Y1{constructor(e){this.ht=e}}function WF(t,e){let n;if(e.document)n=z1(t.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=k.fromSegments(e.noDocument.path),i=Ki(e.noDocument.readTime);n=ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=k.fromSegments(e.unknownDocument.path),i=Ki(e.unknownDocument.version);n=ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new pe(i[0],i[1]);return M.fromTimestamp(s)}(e.readTime)),n}function iI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:vl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:co(s,o.version.toTimestamp()),createTime:co(s,o.createTime.toTimestamp())}}(t.ht,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Gi(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:Gi(e.version)}}return r}function Zc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Gi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ki(t){const e=new pe(t.seconds,t.nanoseconds);return M.fromTimestamp(e)}function hi(t,e){const n=(e.baseMutations||[]).map(s=>am(t.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>am(t.ht,s)),i=pe.fromMillis(e.localWriteTimeMs);return new k_(e.batchId,i,n,r)}function fa(t){const e=Ki(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ki(t.lastLimboFreeSnapshotVersion):M.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return F(s.documents.length===1),yt(ko(B1(s.documents[0])))}(t.query):function(s){return yt(G1(s))}(t.query),new $n(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Me.fromBase64String(t.resumeToken))}function X1(t,e){const n=Gi(e.snapshotVersion),r=Gi(e.lastLimboFreeSnapshotVersion);let i;i=Yc(e.target)?q1(t.ht,e.target):W1(t.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:zi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function V_(t){const e=G1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jc(e,e.limit,"L"):e}function Cf(t,e){return new D_(e.largestBatchId,am(t.ht,e.overlayMutation))}function sI(t,e){const n=e.path.lastSegment();return[t,_t(e.path.popLast()),n]}function oI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Gi(r.readTime),documentKey:_t(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class GF{getBundleMetadata(e,n){return aI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ki(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return aI(e).put(function(i){return{bundleId:i.id,createTime:Gi(ke(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return lI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:V_(s.bundledQuery),readTime:Ki(s.readTime)}}(r)})}saveNamedQuery(e,n){return lI(e).put(function(i){return{name:i.name,readTime:Gi(ke(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function aI(t){return Ge(t,"bundles")}function lI(t){return Ge(t,"namedQueries")}/**
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
 */class sd{constructor(e,n){this.serializer=e,this.userId=n}static Pt(e,n){const r=n.uid||"";return new sd(e,r)}getOverlay(e,n){return Xo(e).get(sI(this.userId,n)).next(r=>r?Cf(this.serializer,r):null)}getOverlays(e,n){const r=Pn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new D_(n,o);i.push(this.It(e,a))}),v.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(_t(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xo(e).J("collectionPathOverlayIndex",a))}),v.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Pn(),s=_t(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xo(e).G("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Cf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Pn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Xo(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Cf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}It(e,n){return Xo(e).put(function(i,s,o){const[a,l,u]=sI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Il(i.ht,o.mutation)}}(this.serializer,this.userId,n))}}function Xo(t){return Ge(t,"documentOverlays")}/**
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
 */class di{constructor(){}dt(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.At(n,5);else if("booleanValue"in e)this.At(n,10),n.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(n,15),n.Rt(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.At(n,13):(this.At(n,15),ml(r)?n.Rt(0):n.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(n,20),typeof r=="string"?n.Vt(r):(n.Vt(`${r.seconds||""}`),n.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,n),this.gt(n);else if("bytesValue"in e)this.At(n,30),n.yt(Ur(e.bytesValue)),this.gt(n);else if("referenceValue"in e)this.wt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(n,45),n.Rt(r.latitude||0),n.Rt(r.longitude||0)}else"mapValue"in e?u1(e)?this.At(n,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,n),this.gt(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.gt(n)):b()}ft(e,n){this.At(n,25),this.Dt(e,n)}Dt(e,n){n.Vt(e)}St(e,n){const r=e.fields||{};this.At(n,55);for(const i of Object.keys(r))this.ft(i,n),this.Tt(r[i],n)}bt(e,n){const r=e.values||[];this.At(n,50);for(const i of r)this.Tt(i,n)}wt(e,n){this.At(n,37),k.fromName(e).path.forEach(r=>{this.At(n,60),this.Dt(r,n)})}At(e,n){e.Rt(n)}gt(e){e.Rt(2)}}di.Ct=new di;function KF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function uI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=KF(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class HF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=uI(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=uI(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class QF{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class YF{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Jo{constructor(){this.jt=new HF,this.Ht=new QF(this.jt),this.Jt=new YF(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fi(this.indexId,this.documentKey,this.arrayValue,r)}}function ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=cI(t.arrayValue,e.arrayValue),n!==0?n:(n=cI(t.directionalValue,e.directionalValue),n!==0?n:k.comparator(t.documentKey,e.documentKey)))}function cI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class hI{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const n of e.filters){const r=n;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){F(e.collectionGroup===this.collectionId);const n=Xp(e);if(n!==void 0&&!this.rn(n))return!1;const r=ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}_n(){let e=new oe(Ee.comparator);const n=[];for(const r of this.en)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Zu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Zu(r.field,0))}for(const r of this.Xt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Zu(r.field,r.dir==="asc"?0:1)));return new Qc(Qc.UNKNOWN_ID,this.collectionId,n,pl.empty())}rn(e){for(const n of this.en)if(this.sn(n,e))return!0;return!1}sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}on(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function J1(t){var e,n;if(F(t instanceof Q||t instanceof te),t instanceof Q){if(t instanceof _1){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Q.create(t.field,"==",s)))||[];return te.create(i,"or")}return t}const r=t.filters.map(i=>J1(i));return te.create(r,t.op)}function XF(t){if(t.getFilters().length===0)return[];const e=cm(J1(t));return F(Z1(e)),lm(e)||um(e)?[e]:e.getFilters()}function lm(t){return t instanceof Q}function um(t){return t instanceof te&&S_(t)}function Z1(t){return lm(t)||um(t)||function(n){if(n instanceof te&&tm(n)){for(const r of n.getFilters())if(!lm(r)&&!um(r))return!1;return!0}return!1}(t)}function cm(t){if(F(t instanceof Q||t instanceof te),t instanceof Q)return t;if(t.filters.length===1)return cm(t.filters[0]);const e=t.filters.map(r=>cm(r));let n=te.create(e,t.op);return n=eh(n),Z1(n)?n:(F(n instanceof te),F(ao(n)),F(n.filters.length>1),n.filters.reduce((r,i)=>O_(r,i)))}function O_(t,e){let n;return F(t instanceof Q||t instanceof te),F(e instanceof Q||e instanceof te),n=t instanceof Q?e instanceof Q?function(i,s){return te.create([i,s],"and")}(t,e):dI(t,e):e instanceof Q?dI(e,t):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),ao(i)&&ao(s))return p1(i,s.getFilters());const o=tm(i)?i:s,a=tm(i)?s:i,l=o.filters.map(u=>O_(u,a));return te.create(l,"or")}(t,e),eh(n)}function dI(t,e){if(ao(e))return p1(e,t.getFilters());{const n=e.filters.map(r=>O_(t,r));return te.create(n,"or")}}function eh(t){if(F(t instanceof Q||t instanceof te),t instanceof Q)return t;const e=t.getFilters();if(e.length===1)return eh(e[0]);if(d1(t))return t;const n=e.map(i=>eh(i)),r=[];return n.forEach(i=>{i instanceof Q?r.push(i):i instanceof te&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:te.create(r,t.op)}/**
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
 */class JF{constructor(){this.an=new L_}addToCollectionParentIndex(e,n){return this.an.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(zt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class L_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new oe(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(J.comparator)).toArray()}}/**
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
 */const xu=new Uint8Array(0);class ZF{constructor(e,n){this.user=e,this.databaseId=n,this.un=new L_,this.cn=new ti(r=>zi(r),(r,i)=>Kl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.un.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.un.add(n)});const s={collectionId:r,parent:_t(i)};return fI(e).put(s)}return v.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[XA(n),""],!1,!0);return fI(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Rn(o.parent))}return r})}addFieldIndex(e,n){const r=Zo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=hs(e);return s.next(a=>{o.put(oI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Zo(e),i=hs(e),s=cs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Zo(e),r=cs(e),i=hs(e);return n.J().next(()=>r.J()).next(()=>i.J())}createTargetIndexes(e,n){return v.forEach(this.ln(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new hI(r);return this.addFieldIndex(e,s._n())}}))}getDocumentsMatchingTarget(e,n){const r=cs(e);let i=!0;const s=new Map;return v.forEach(this.ln(n),o=>this.hn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=q();const a=[];return v.forEach(s,(l,u)=>{S("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`}(l)} to execute ${zi(n)}`);const c=function(g,I){const A=Xp(I);if(A===void 0)return null;for(const C of Xc(g,A.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),h=function(g,I){const A=new Map;for(const C of ui(I))for(const N of Xc(g,C.fieldPath))switch(N.op){case"==":case"in":A.set(C.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return A.set(C.fieldPath.canonicalString(),N.value),Array.from(A.values())}return null}(u,l),d=function(g,I){const A=[];let C=!0;for(const N of ui(I)){const L=N.kind===0?Ww(g,N.fieldPath,g.startAt):Gw(g,N.fieldPath,g.startAt);A.push(L.value),C&&(C=L.inclusive)}return new jr(A,C)}(u,l),f=function(g,I){const A=[];let C=!0;for(const N of ui(I)){const L=N.kind===0?Gw(g,N.fieldPath,g.endAt):Ww(g,N.fieldPath,g.endAt);A.push(L.value),C&&(C=L.inclusive)}return new jr(A,C)}(u,l),y=this.Pn(l,u,d),_=this.Pn(l,u,f),E=this.In(l,u,h),m=this.dn(l.indexId,c,y,d.inclusive,_,f.inclusive,E);return v.forEach(m,p=>r.H(p,n.limit).next(g=>{g.forEach(I=>{const A=k.fromSegments(I.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return v.resolve(null)})}ln(e){let n=this.cn.get(e);return n||(e.filters.length===0?n=[e]:n=XF(te.create(e.filters,"and")).map(r=>rm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,n),n)}dn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.Tn(n[h/u]):xu,f=this.En(e,d,r[h%u],i),y=this.An(e,d,s[h%u],o),_=a.map(E=>this.En(e,d,E,!0));c.push(...this.createRange(f,y,_))}return c}En(e,n,r,i){const s=new fi(e,k.empty(),n,r);return i?s:s.Zt()}An(e,n,r,i){const s=new fi(e,k.empty(),n,r);return i?s.Zt():s}hn(e,n){const r=new hI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.ln(n);return v.forEach(i,s=>this.hn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new oe(Ee.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Rn(e,n){const r=new Jo;for(const i of ui(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);di.Ct.dt(s,o)}return r.zt()}Tn(e){const n=new Jo;return di.Ct.dt(e,n.Yt(0)),n.zt()}Vn(e,n){const r=new Jo;return di.Ct.dt(ji(this.databaseId,n),r.Yt(function(s){const o=ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}In(e,n,r){if(r===null)return[];let i=[];i.push(new Jo);let s=0;for(const o of ui(e)){const a=r[s++];for(const l of i)if(this.mn(n,o.fieldPath)&&yl(a))i=this.fn(i,o,a);else{const u=l.Yt(o.kind);di.Ct.dt(a,u)}}return this.gn(i)}Pn(e,n,r){return this.In(e,n,r.position)}gn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Jo;l.seed(a.zt()),di.Ct.dt(o,l.Yt(n.kind)),s.push(l)}return s}mn(e,n){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Zo(e),i=hs(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return v.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new pl(h.sequenceNumber,new zt(Ki(h.readTime),new k(Rn(h.documentKey)),h.largestBatchId)):pl.empty(),f=c.fields.map(([y,_])=>new Zu(Ee.fromServerFormat(y),_));return new Qc(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Zo(e),s=hs(e);return this.pn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,l=>s.put(oI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),v.forEach(a,l=>this.yn(e,i,l).next(u=>{const c=this.wn(s,l);return u.isEqual(c)?v.resolve():this.Sn(e,s,l,u,c)}))))})}bn(e,n,r,i){return cs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(r,n.key),documentKey:n.key.path.toArray()})}Dn(e,n,r,i){return cs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(r,n.key),n.key.path.toArray()])}yn(e,n,r){const i=cs(e);let s=new oe(ar);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Vn(r,n)])},(o,a)=>{s=s.add(new fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new oe(ar);const i=this.Rn(n,e);if(i==null)return r;const s=Xp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(yl(o))for(const a of o.arrayValue.values||[])r=r.add(new fi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new fi(n.indexId,e.key,xu,i));return r}Sn(e,n,r,i,s){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),y=u.getIterator();let _=us(f),E=us(y);for(;_||E;){let m=!1,p=!1;if(_&&E){const g=c(_,E);g<0?p=!0:g>0&&(m=!0)}else _!=null?p=!0:m=!0;m?(h(E),E=us(y)):p?(d(_),_=us(f)):(_=us(f),E=us(y))}}(i,s,ar,a=>{o.push(this.bn(e,n,r,a))},a=>{o.push(this.Dn(e,n,r,a))}),v.waitFor(o)}pn(e){let n=1;return hs(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ar(o,a)).filter((o,a,l)=>!a||ar(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ar(o,e),l=ar(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,xu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,xu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return ar(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(pI)}getMinOffset(e,n){return v.mapArray(this.ln(n),r=>this.hn(e,r).next(i=>i||b())).next(pI)}}function fI(t){return Ge(t,"collectionParents")}function cs(t){return Ge(t,"indexEntries")}function Zo(t){return Ge(t,"indexConfiguration")}function hs(t){return Ge(t,"indexState")}function pI(t){F(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;I_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new zt(e.readTime,e.documentKey,n)}/**
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
 */const mI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function eR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{F(a===1)}));const u=[];for(const c of n.mutations){const h=r1(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return v.waitFor(s).next(()=>u)}function th(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw b();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class od{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new od(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=_s(e),o=lr(e);return o.add({}).next(a=>{F(typeof a=="number");const l=new k_(a,n,r,i),u=function(f,y,_){const E=_.baseMutations.map(p=>Il(f.ht,p)),m=_.mutations.map(p=>Il(f.ht,p));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:E,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new oe((d,f)=>z(d.canonicalString(),f.canonicalString()));for(const d of i){const f=r1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,B2))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=l.keys()}),v.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return lr(e).get(n).next(r=>r?(F(r.userId===this.userId),hi(this.serializer,r)):null)}Fn(e,n){return this.vn[n]?v.resolve(this.vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return lr(e).Z({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(F(a.batchId>=r),s=hi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return lr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).G("userMutationsIndex",n).next(r=>r.map(i=>hi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ec(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return _s(e).Z({range:i},(o,a,l)=>{const[u,c,h]=o,d=Rn(c);if(u===this.userId&&n.path.isEqual(d))return lr(e).get(h).next(f=>{if(!f)throw b();F(f.userId===this.userId),s.push(hi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(z);const i=[];return n.forEach(s=>{const o=ec(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=_s(e).Z({range:a},(u,c,h)=>{const[d,f,y]=u,_=Rn(f);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(l)}),v.waitFor(i).next(()=>this.Mn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ec(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new oe(z);return _s(e).Z({range:o},(l,u,c)=>{const[h,d,f]=l,y=Rn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Mn(e,a))}Mn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(lr(e).get(s).next(o=>{if(o===null)throw b();F(o.userId===this.userId),r.push(hi(this.serializer,o))}))}),v.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return eR(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.xn(n.batchId)}),v.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _s(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Rn(s[1]);i.push(l)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return tR(e,this.userId,n)}On(e){return nR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function tR(t,e,n){const r=ec(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _s(t).Z({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function lr(t){return Ge(t,"mutations")}function _s(t){return Ge(t,"documentMutations")}function nR(t){return Ge(t,"mutationQueues")}/**
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
 */class Hi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Hi(0)}static Ln(){return new Hi(-1)}}/**
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
 */class eU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.kn(e).next(n=>{const r=new Hi(n.highestTargetId);return n.highestTargetId=r.next(),this.qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(n=>M.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.kn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.qn(e,i)))}addTargetData(e,n){return this.Qn(e,n).next(()=>this.kn(e).next(r=>(r.targetCount+=1,this.Kn(n,r),this.qn(e,r))))}updateTargetData(e,n){return this.Qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ds(e).delete(n.targetId)).next(()=>this.kn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ds(e).Z((o,a)=>{const l=fa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ds(e).Z((r,i)=>{const s=fa(i);n(s)})}kn(e){return gI(e).get("targetGlobalKey").next(n=>(F(n!==null),n))}qn(e,n){return gI(e).put("targetGlobalKey",n)}Qn(e,n){return ds(e).put(X1(this.serializer,n))}Kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.kn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=zi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ds(e).Z({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=fa(a);Kl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=pr(e);return n.forEach(o=>{const a=_t(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(i)}removeMatchingKeys(e,n,r){const i=pr(e);return v.forEach(n,s=>{const o=_t(s.path);return v.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=pr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=pr(e);let s=q();return i.Z({range:r,Y:!0},(o,a,l)=>{const u=Rn(o[1]),c=new k(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=_t(n.path),i=IDBKeyRange.bound([r],[XA(r)],!1,!0);let s=0;return pr(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,n){return ds(e).get(n).next(r=>r?fa(r):null)}}function ds(t){return Ge(t,"targets")}function gI(t){return Ge(t,"targetGlobal")}function pr(t){return Ge(t,"targetDocuments")}/**
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
 */function _I([t,e],[n,r]){const i=z(t,n);return i===0?z(e,r):i}class tU{constructor(e){this.$n=e,this.buffer=new oe(_I),this.Un=0}Wn(){return++this.Un}Gn(e){const n=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_I(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.jn(3e5)})}}class rU{constructor(e,n){this.Hn=e,this.params=n}calculateTargetCount(e,n){return this.Hn.Jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Rt.ae);const r=new tU(n);return this.Hn.forEachTarget(e,i=>r.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>r.Gn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Hn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Hn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(mI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mI):this.Zn(e,n))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),fs()<=H.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function iU(t,e){return new rU(t,e)}/**
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
 */class sU{constructor(e,n){this.db=e,this.garbageCollector=iU(this,n)}Jn(e){const n=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Xn(e){let n=0;return this.Yn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Yn(e,n){return this.er(e,(r,i)=>n(i))}addReference(e,n,r){return bu(e,r)}removeReference(e,n,r){return bu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return bu(e,n)}tr(e,n){return function(i,s){let o=!1;return nR(i).X(a=>tR(i,a,s).next(l=>(l&&(o=!0),v.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,a)=>{if(a<=n){const l=this.tr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,M.min()),pr(e).delete(function(h){return[0,_t(h.path)]}(o))))});i.push(l)}}).next(()=>v.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return bu(e,n)}er(e,n){const r=pr(e);let i,s=Rt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Rt.ae&&n(new k(Rn(i)),s),s=u,i=l):s=Rt.ae}).next(()=>{s!==Rt.ae&&n(new k(Rn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function bu(t,e){return pr(t).put(function(r,i){return{targetId:0,path:_t(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class rR{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return si(e).put(r)}removeEntry(e,n,r){return si(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Zc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.nr(e,r)))}getEntry(e,n){let r=ce.newInvalidDocument(n);return si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ea(n))},(i,s)=>{r=this.rr(n,s)}).next(()=>r)}ir(e,n){let r={size:0,document:ce.newInvalidDocument(n)};return si(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ea(n))},(i,s)=>{r={document:this.rr(n,s),size:th(s)}}).next(()=>r)}getEntries(e,n){let r=Ct();return this.sr(e,n,(i,s)=>{const o=this.rr(i,s);r=r.insert(i,o)}).next(()=>r)}_r(e,n){let r=Ct(),i=new ae(k.comparator);return this.sr(e,n,(s,o)=>{const a=this.rr(s,o);r=r.insert(s,a),i=i.insert(s,th(o))}).next(()=>({documents:r,ar:i}))}sr(e,n,r){if(n.isEmpty())return v.resolve();let i=new oe(wI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ea(i.first()),ea(i.last())),o=i.getIterator();let a=o.getNext();return si(e).Z({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=k.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&wI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.W(ea(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Zc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return si(e).G(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Ct();for(const h of u){const d=this.rr(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ql(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Ct();const o=vI(n,r),a=vI(n,zt.max());return si(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.rr(k.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new aU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return yI(e).get("remoteDocumentGlobalKey").next(n=>(F(!!n),n))}nr(e,n){return yI(e).put("remoteDocumentGlobalKey",n)}rr(e,n){if(n){const r=WF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(M.min())))return r}return ce.newInvalidDocument(e)}}function iR(t){return new oU(t)}class aU extends rR{constructor(e,n){super(),this.ur=e,this.trackRemovals=n,this.cr=new ti(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new oe((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.cr.get(s);if(n.push(this.ur.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=iI(this.ur.serializer,o);i=i.add(s.path.popLast());const u=th(l);r+=u-a.size,n.push(this.ur.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=iI(this.ur.serializer,o.convertToNoDocument(M.min()));n.push(this.ur.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ur.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.ur.ir(e,n).next(r=>(this.cr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ur._r(e,n).next(({documents:r,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function yI(t){return Ge(t,"remoteDocumentGlobal")}function si(t){return Ge(t,"remoteDocumentsV14")}function ea(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vI(t,e){const n=e.documentKey.path.toArray();return[t,Zc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function wI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=z(n[s],r[s]),i)return i;return i=z(n.length,r.length),i||(i=z(n[n.length-2],r[r.length-2]),i||z(n[n.length-1],r[r.length-1]))}/**
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
 */class lU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xa(r.mutation,i,Pt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ha();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ct();const o=Da(),a=function(){return Da()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof rr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),xa(c.mutation,u,c.mutation.getFieldMask(),pe.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new lU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new ae((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=S1();c.forEach(d=>{if(!s.has(d)){const f=x1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return k.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):R_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(Pn());let a=-1,l=s;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:T1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new k(n)).next(r=>{let i=ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ha();return this.indexManager.getCollectionParents(e,s).next(a=>v.forEach(a,l=>{const u=function(h,d){return new nr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ce.newInvalidDocument(c)))});let a=ha();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&xa(c.mutation,u,Pt.empty(),pe.now()),Ql(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class uU{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return v.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ke(i.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:V_(i.bundledQuery),readTime:ke(i.readTime)}}(n)),v.resolve()}}/**
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
 */class cU{constructor(){this.overlays=new ae(k.comparator),this.Pr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=Pn(),s=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ae((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Pn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Pn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return v.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new D_(n,r));let s=this.Pr.get(n);s===void 0&&(s=q(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class M_{constructor(){this.Ir=new oe(Ue.dr),this.Tr=new oe(Ue.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ue(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new k(new J([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new k(new J([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return k.comparator(e.key,n.key)||z(e.yr,n.yr)}static Er(e,n){return z(e.yr,n.yr)||k.comparator(e.key,n.key)}}/**
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
 */class hU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new oe(Ue.dr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new k_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(z);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),v.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;k.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new k(s),0);let a=new oe(z);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),v.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return v.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Sr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dU{constructor(e){this.Fr=e,this.docs=function(){return new ae(k.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let r=Ct();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ct();const o=n.path,a=new k(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||I_(ZA(c),r)<=0||(i.has(c.key)||Ql(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Mr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fU(this)}getSize(e){return v.resolve(this.size)}}class fU extends rR{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class pU{constructor(e){this.persistence=e,this.Or=new ti(n=>zi(n),Kl),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Nr=0,this.Br=new M_,this.targetCount=0,this.Lr=Hi.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),v.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Qn(n),v.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Br.containsKey(n))}}/**
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
 */class oR{constructor(e,n){this.kr={},this.overlays={},this.qr=new Rt(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new pU(this),this.indexManager=new JF,this.remoteDocumentCache=function(i){return new dU(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Y1(n),this.Ur=new uU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new hU(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const i=new mU(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return v.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class mU extends t1{constructor(e){super(),this.currentSequenceNumber=e}}class ad{constructor(e){this.persistence=e,this.jr=new M_,this.Hr=null}static Jr(e){return new ad(e)}get Yr(){if(this.Hr)return this.Hr;throw b()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),v.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Yr,r=>{const i=k.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,M.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return v.or([()=>v.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class gU{constructor(e){this.serializer=e}B(e,n,r,i){const s=new ed("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ow,{unique:!0}),l.createObjectStore("documentMutations")}(e),II(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),II(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:M.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").G().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ow,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return v.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ei(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),r<7&&i>=7&&(o=o.next(()=>this.ni(s))),r<8&&i>=8&&(o=o.next(()=>this.ri(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ii(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:Z2});u.createIndex("collectionPathOverlayIndex",eF,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",tF,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:j2});u.createIndex("documentKeyIndex",z2),u.createIndex("collectionGroupIndex",q2)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.oi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Q2}).createIndex("sequenceNumberIndex",Y2,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:X2}).createIndex("documentKeyIndex",J2,{unique:!1})}(e))),o}ti(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=th(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ei(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>v.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>v.forEach(a,l=>{F(l.userId===s.userId);const u=hi(this.serializer,l);return eR(e,s.userId,u).next(()=>{})}))}))}ni(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const l=new J(o),u=function(h){return[0,_t(h)]}(l);s.push(n.get(u).next(c=>c?v.resolve():(h=>n.put({targetId:0,path:_t(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>v.waitFor(s))})}ri(e,n){e.createObjectStore("collectionParents",{keyPath:H2});const r=n.store("collectionParents"),i=new L_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:_t(l)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const l=new J(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,l],u)=>{const c=Rn(a);return s(c.popLast())}))}ii(e){const n=e.store("targets");return n.Z((r,i)=>{const s=fa(i),o=X1(this.serializer,s);return n.put(o)})}si(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new k(J.fromString(h.document.name).popFirst(5)):h.noDocument?k.fromSegments(h.noDocument.path):h.unknownDocument?k.fromSegments(h.unknownDocument.path):b()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>v.waitFor(i))}oi(e,n){const r=n.store("mutations"),i=iR(this.serializer),s=new oR(ad.Jr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:q();hi(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),v.forEach(a,(l,u)=>{const c=new Be(u),h=sd.Pt(this.serializer,c),d=s.getIndexManager(c),f=od.Pt(c,this.serializer,d,s.referenceDelegate);return new sR(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Jp(n,Rt.ae),l).next()})})}}function II(t){t.createObjectStore("targetDocuments",{keyPath:G2}).createIndex("documentTargetsIndex",K2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",W2,{unique:!0}),t.createObjectStore("targetGlobal")}const kf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class F_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this._i=s,this.window=o,this.document=a,this.ai=u,this.ui=c,this.ci=h,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!F_.C())throw new T(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sU(this,i),this.Ti=n+"main",this.serializer=new Y1(l),this.Ei=new ln(this.Ti,this.ci,new gU(this.serializer)),this.Kr=new eU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=iR(this.serializer),this.Ur=new GF,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,c===!1&&Ce("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(w.FAILED_PRECONDITION,kf);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new Rt(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Vu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(n=>{n||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(n=>this.isPrimary&&!n?this.wi(e).next(()=>!1):!!n&&this.Si(e).next(()=>!0))).catch(e=>{if(ei(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return ta(e).get("owner").next(n=>v.resolve(this.bi(n)))}Di(e){return Vu(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ge(n,"clientMetadata");return r.G().next(i=>{const s=this.Fi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ai)for(const n of e)this.Ai.removeItem(this.Mi(n.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?v.resolve(!0):ta(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)){if(this.bi(n)&&this.networkEnabled)return!0;if(!this.bi(n)){if(!n.allowTabSynchronization)throw new T(w.FAILED_PRECONDITION,kf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vu(e).G().next(r=>this.Fi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Jp(e,Rt.ae);return this.wi(n).next(()=>this.Di(n))}),this.Ei.close(),this.Li()}Fi(e,n){return e.filter(r=>this.vi(r.updateTimeMs,n)&&!this.xi(r.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>Vu(e).G().next(n=>this.Fi(n,18e5).map(r=>r.clientId)))}get started(){return this.Qr}getMutationQueue(e,n){return od.Pt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZF(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return sd.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?rF:l===14?o1:l===13?s1:l===12?nF:l===11?i1:void b()}(this.ci);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Jp(a,this.qr?this.qr.next():Rt.ae),n==="readwrite-primary"?this.pi(o).next(l=>!!l||this.yi(o)).next(l=>{if(!l)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new T(w.FAILED_PRECONDITION,e1);return r(o)}).next(l=>this.Si(o).next(()=>l)):this.qi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}qi(e){return ta(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)&&!this.bi(n)&&!(this.ui||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(w.FAILED_PRECONDITION,kf)})}Si(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ta(e).put("owner",n)}static C(){return ln.C()}wi(e){const n=ta(e);return n.get("owner").next(r=>this.bi(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ce(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Vi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.li=()=>{this.Oi();const n=/(?:Version|Mobile)\/1[456]/;dN()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var n;try{const r=((n=this.Ai)===null||n===void 0?void 0:n.getItem(this.Mi(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ce("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch{}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ta(t){return Ge(t,"owner")}function Vu(t){return Ge(t,"clientMetadata")}function U_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class $_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $_(e,n.fromCache,r,i)}}/**
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
 */class _U{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aR{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _U;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(fs()<=H.DEBUG&&S("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),v.resolve()):(fs()<=H.DEBUG&&S("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(fs()<=H.DEBUG&&S("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(n))):v.resolve())}Hi(e,n){if(Kw(n))return v.resolve(null);let r=yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jc(n,null,"F"),r=yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Jc(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return Kw(n)||i.isEqual(M.min())?v.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?v.resolve(null):(fs()<=H.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ps(n)),this.ts(e,o,n,JA(i,-1)).next(a=>a))})}Xi(e,n){let r=new oe(I1(e));return n.forEach((i,s)=>{Ql(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return fs()<=H.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",ps(n)),this.ji.getDocumentsMatchingQuery(e,n,zt.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class yU{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new ae(z),this.ss=new ti(s=>zi(s),Kl),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sR(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function lR(t,e,n,r){return new yU(t,e,n,r)}async function uR(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function vU(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=v.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(_=>{const E=u.docVersions.get(y);F(E!==null),_.version.compareTo(E)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cR(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function wU(t,e){const n=D(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Me.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(_,E,m){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.Kr.updateTargetData(s,f))});let l=Ct(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(hR(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(M.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function hR(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ct();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(M.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function IU(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ho(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function fo(t,e,n){const r=D(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ei(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function nh(t,e,n){const r=D(t);let i=M.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.ss.get(c);return d!==void 0?v.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?s:q())).next(a=>(pR(r,w1(e),a),{documents:a,Ps:s})))}function dR(t,e){const n=D(t),r=D(n.Kr),i=n.rs.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function fR(t,e){const n=D(t),r=n.os.get(e)||M.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n._s.getAllFromCollectionGroup(i,e,JA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(pR(n,e,i),i))}function pR(t,e,n){let r=t.os.get(e)||M.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}async function EU(t,e,n,r){const i=D(t);let s=q(),o=Ct();for(const u of n){const c=e.Is(u.metadata.name);u.document&&(s=s.add(c));const h=e.ds(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i._s.newChangeBuffer({trackRemovals:!0}),l=await ho(i,function(c){return yt(ko(J.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>hR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Kr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Kr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.ls,c.hs)).next(()=>c.ls)))}async function TU(t,e,n=q()){const r=await ho(t,yt(V_(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ur.saveNamedQuery(s,e);const a=r.withResumeToken(Me.EMPTY_BYTE_STRING,o);return i.rs=i.rs.insert(a.targetId,a),i.Kr.updateTargetData(s,a).next(()=>i.Kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ur.saveNamedQuery(s,e))})}function EI(t,e){return`firestore_clients_${t}_${e}`}function TI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Nf(t,e){return`firestore_targets_${t}_${e}`}class rh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new rh(e,n,i.state,s):(Ce("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ba{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new ba(e,r.state,i):(Ce("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ih{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=P_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=n1(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ih(e,s):(Ce("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class B_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new B_(n.clientId,n.onlineState):(Ce("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hm{constructor(){this.activeTargetIds=P_()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Df{constructor(e,n,r,i,s){this.window=e,this._i=n,this.persistenceKey=r,this.fs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new ae(z),this.started=!1,this.ws=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=EI(this.persistenceKey,this.fs),this.bs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ys=this.ys.insert(this.fs,new hm),this.Ds=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Fs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Ms=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const r of e){if(r===this.fs)continue;const i=this.getItem(EI(this.persistenceKey,r));if(i){const s=ih.Es(r,i);s&&(this.ys=this.ys.insert(s.clientId,s))}}this.xs();const n=this.storage.getItem(this.Fs);if(n){const r=this.Os(n);r&&this.Ns(r)}for(const r of this.ws)this.ps(r);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let n=!1;return this.ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.ks(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Nf(this.persistenceKey,e));if(r){const i=ba.Es(e,r);i&&(n=i.state)}}return this.qs.Rs(e),this.xs(),n}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Nf(this.persistenceKey,e))}updateQueryState(e,n,r){this.Qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ks(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return S("SharedClientState","READ",e,n),n}setItem(e,n){S("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const n=e;if(n.storageArea===this.storage){if(S("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ss)return void Ce("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ds.test(n.key)){if(n.newValue==null){const r=this.Us(n.key);return this.Ws(r,null)}{const r=this.Gs(n.key,n.newValue);if(r)return this.Ws(r.clientId,r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(this.vs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(n.key===this.Fs){if(n.newValue!==null){const r=this.Os(n.newValue);if(r)return this.Ns(r)}}else if(n.key===this.bs){const r=function(s){let o=Rt.ae;if(s!=null)try{const a=JSON.parse(s);F(typeof a=="number"),o=a}catch(a){Ce("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Rt.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.Ms){const r=this.Ys(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Zs(i)))}}}else this.ws.push(n)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,n,r){const i=new rh(this.currentUser,e,n,r),s=TI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.As())}ks(e){const n=TI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Ks(e){const n={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(n))}Qs(e,n,r){const i=Nf(this.persistenceKey,e),s=new ba(e,n,r);this.setItem(i,s.As())}$s(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Ms,n)}Us(e){const n=this.Ds.exec(e);return n?n[1]:null}Gs(e,n){const r=this.Us(e);return ih.Es(r,n)}zs(e,n){const r=this.Cs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rh.Es(new Be(s),i,n)}Hs(e,n){const r=this.vs.exec(e),i=Number(r[1]);return ba.Es(i,n)}Os(e){return B_.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,n){const r=n?this.ys.insert(e,n):this.ys.remove(e),i=this.Bs(this.ys),s=this.Bs(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.no(o,a).then(()=>{this.ys=r})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let n=P_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class mR{constructor(){this.ro=new hm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SU{so(e){}shutdown(){}}/**
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
 */class SI{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ou=null;function xf(){return Ou===null?Ou=function(){return 268435456+Math.round(2147483648*Math.random())}():Ou++,"0x"+Ou.toString(16)}/**
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
 */const AU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RU{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const ot="WebChannelConnection";class PU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=xf(),l=this.Do(n,r);S("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(S("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw pn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=AU[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=xf();return new Promise((o,a)=>{const l=new T2;l.setWithCredentials(!0),l.listenOnce(I2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pf.NO_ERROR:const c=l.getResponseJson();S(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Pf.TIMEOUT:S(ot,`RPC '${e}' ${s} timed out`),a(new T(w.DEADLINE_EXCEEDED,"Request time out"));break;case Pf.HTTP_ERROR:const h=l.getStatus();if(S(ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(f.status);a(new T(y,f.message))}else a(new T(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(w.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{S(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);S(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=xf(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v2(),a=w2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");S(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new RU({ho:E=>{f?S(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(S(ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),S(ot,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},Po:()=>h.close()}),_=(E,m,p)=>{E.listen(m,g=>{try{p(g)}catch(I){setTimeout(()=>{throw I},0)}})};return _(h,Nu.EventType.OPEN,()=>{f||S(ot,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Nu.EventType.CLOSE,()=>{f||(f=!0,S(ot,`RPC '${e}' stream ${i} transport closed`),y.mo())}),_(h,Nu.EventType.ERROR,E=>{f||(f=!0,pn(ot,`RPC '${e}' stream ${i} transport errored:`,E),y.mo(new T(w.UNAVAILABLE,"The operation could not be completed")))}),_(h,Nu.EventType.MESSAGE,E=>{var m;if(!f){const p=E.data[0];F(!!p);const g=p,I=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(I){S(ot,`RPC '${e}' stream ${i} received error:`,I);const A=I.status;let C=function(ie){const G=De[ie];if(G!==void 0)return O1(G)}(A),N=I.message;C===void 0&&(C=w.INTERNAL,N="Unknown error status: "+A+" with message "+I.message),f=!0,y.mo(new T(C,N)),h.close()}else S(ot,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),_(a,E2.STAT_EVENT,E=>{E.stat===Dw.PROXY?S(ot,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Dw.NOPROXY&&S(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}/**
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
 */function gR(){return typeof window<"u"?window:null}function sc(){return typeof document<"u"?document:null}/**
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
 */function Zl(t){return new OF(t,!0)}/**
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
 */class j_{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class _R{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new j_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Ce(n.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new T(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CU extends _R{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=FF(this.serializer,e),r=function(s){if(!("targetChange"in s))return M.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?M.min():o.readTime?ke(o.readTime):M.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=wl(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Yc(l)?{documents:q1(s,l)}:{query:W1(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=U1(s,o.resumeToken);const u=sm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(M.min())>0){a.readTime=co(s,o.snapshotVersion.toTimestamp());const u=sm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=$F(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=wl(this.serializer),n.removeTarget=e,this.n_(n)}}class kU extends _R{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=UF(e.writeResults,e.commitTime),r=ke(e.commitTime);return this.listener.T_(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=wl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Il(this.serializer,r))};this.n_(n)}}/**
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
 */class NU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new T(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(w.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(w.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class DU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class xU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{ni(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.F_.add(4),await xo(u),u.O_.set("Unknown"),u.F_.delete(4),await eu(u)}(this))})}),this.O_=new DU(r,i)}}async function eu(t){if(ni(t))for(const e of t.M_)await e(!0)}async function xo(t){for(const e of t.M_)await e(!1)}function ld(t,e){const n=D(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),W_(n)?q_(n):Vo(n).Yo()&&z_(n,e))}function El(t,e){const n=D(t),r=Vo(n);n.v_.delete(e),r.Yo()&&yR(n,e),n.v_.size===0&&(r.Yo()?r.e_():ni(n)&&n.O_.set("Unknown"))}function z_(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).l_(e)}function yR(t,e){t.N_.Le(e),Vo(t).h_(e)}function q_(t){t.N_=new DF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.O_.y_()}function W_(t){return ni(t)&&!Vo(t).Jo()&&t.v_.size>0}function ni(t){return D(t).F_.size===0}function vR(t){t.N_=void 0}async function bU(t){t.v_.forEach((e,n)=>{z_(t,e)})}async function VU(t,e){vR(t),W_(t)?(t.O_.b_(e),q_(t)):t.O_.set("Unknown")}async function OU(t,e,n){if(t.O_.set("Online"),e instanceof F1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sh(t,r)}else if(e instanceof ic?t.N_.Ge(e):e instanceof M1?t.N_.Xe(e):t.N_.He(e),!n.isEqual(M.min()))try{const r=await cR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(Me.EMPTY_BYTE_STRING,c.snapshotVersion)),yR(s,l);const h=new $n(c.target,l,u,c.sequenceNumber);z_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await sh(t,r)}}async function sh(t,e,n){if(!ei(e))throw e;t.F_.add(1),await xo(t),t.O_.set("Offline"),n||(n=()=>cR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await eu(t)})}function wR(t,e){return e().catch(n=>sh(t,n,e))}async function bo(t){const e=D(t),n=zr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;LU(e);)try{const i=await IU(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,MU(e,i)}catch(i){await sh(e,i)}IR(e)&&ER(e)}function LU(t){return ni(t)&&t.C_.length<10}function MU(t,e){t.C_.push(e);const n=zr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function IR(t){return ni(t)&&!zr(t).Jo()&&t.C_.length>0}function ER(t){zr(t).start()}async function FU(t){zr(t).A_()}async function UU(t){const e=zr(t);for(const n of t.C_)e.d_(n.mutations)}async function $U(t,e,n){const r=t.C_.shift(),i=N_.from(r,e,n);await wR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bo(t)}async function BU(t,e){e&&zr(t).I_&&await async function(r,i){if(function(o){return V1(o)&&o!==w.ABORTED}(i.code)){const s=r.C_.shift();zr(r).Xo(),await wR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bo(r)}}(t,e),IR(t)&&ER(t)}async function AI(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=ni(n);n.F_.add(3),await xo(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await eu(n)}async function dm(t,e){const n=D(t);e?(n.F_.delete(2),await eu(n)):e||(n.F_.add(2),await xo(n),n.O_.set("Unknown"))}function Vo(t){return t.B_||(t.B_=function(n,r,i){const s=D(n);return s.V_(),new CU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:bU.bind(null,t),Eo:VU.bind(null,t),c_:OU.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),W_(t)?q_(t):t.O_.set("Unknown")):(await t.B_.stop(),vR(t))})),t.B_}function zr(t){return t.L_||(t.L_=function(n,r,i){const s=D(n);return s.V_(),new kU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:FU.bind(null,t),Eo:BU.bind(null,t),E_:UU.bind(null,t),T_:$U.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await bo(t)):(await t.L_.stop(),t.C_.length>0&&(S("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class G_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new G_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oo(t,e){if(Ce("AsyncQueue",`${e}: ${t}`),ei(t))return new T(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||k.comparator(n.key,r.key):(n,r)=>k.comparator(n.key,r.key),this.keyedMap=ha(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class RI{constructor(){this.k_=new ae(k.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):b():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jU{constructor(){this.Q_=void 0,this.listeners=[]}}class zU{constructor(){this.queries=new ti(e=>v1(e),Hl),this.onlineState="Unknown",this.K_=new Set}}async function K_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jU),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Oo(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&Q_(n)}async function H_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qU(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Q_(n)}function WU(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Q_(t){t.K_.forEach(e=>{e.next()})}class Y_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class GU{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
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
 */class PI{constructor(e){this.serializer=e}Is(e){return Nn(this.serializer,e)}ds(e){return e.metadata.exists?z1(this.serializer,e.document,!1):ce.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ke(e)}}class KU{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=TR(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=J.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new PI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Is(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||q()).add(s);n.set(o,a)}}return n}async complete(){const e=await EU(this.localStore,new PI(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await TU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function TR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class SR{constructor(e){this.key=e}}class AR{constructor(e){this.key=e}}class RR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=q(),this.mutatedKeys=q(),this.ua=I1(e),this.ca=new Gs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new RI,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Ql(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),E=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,f){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(d)-y(f)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new po(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new RI,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=q(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new AR(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new SR(r))}),n}Ra(e){this.oa=e.Ps,this.aa=q();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return po.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class HU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QU{constructor(e){this.key=e,this.ma=!1}}class YU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ti(a=>v1(a),Hl),this.pa=new Map,this.ya=new Set,this.wa=new ae(k.comparator),this.Sa=new Map,this.ba=new M_,this.Da={},this.Ca=new Map,this.va=Hi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function XU(t,e){const n=ty(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await ho(n.localStore,yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await X_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ld(n.remoteStore,o)}return i}async function X_(t,e,n,r,i){t.Ma=(h,d,f)=>async function(_,E,m,p){let g=E.view.ha(m);g.es&&(g=await nh(_.localStore,E.query,!1).then(({documents:C})=>E.view.ha(C,g)));const I=p&&p.targetChanges.get(E.targetId),A=E.view.applyChanges(g,_.isPrimaryClient,I);return fm(_,E.targetId,A.Ea),A.snapshot}(t,h,d,f);const s=await nh(t.localStore,e,!0),o=new RR(e,s.Ps),a=o.ha(s.documents),l=Jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);fm(t,n,u.Ea);const c=new HU(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function JU(t,e){const n=D(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Hl(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),El(n.remoteStore,r.targetId),mo(n,r.targetId)}).catch(Zr)):(mo(n,r.targetId),await fo(n.localStore,r.targetId,!0))}async function ZU(t,e,n){const r=ny(t);try{const i=await function(o,a){const l=D(o),u=pe.now(),c=a.reduce((f,y)=>f.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Ct(),_=q();return l._s.getEntries(f,c).next(E=>{y=E,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const m=[];for(const p of a){const g=CF(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new rr(p.key,g,c1(g.value.mapValue),fe.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(E=>{d=E;const m=E.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,E.batchId,m)})}).then(()=>({batchId:d.batchId,changes:T1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ae(z)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await ir(r,i.changes),await bo(r.remoteStore)}catch(i){const s=Oo(i,"Failed to persist write");n.reject(s)}}async function PR(t,e){const n=D(t);try{const r=await wU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?F(o.ma):i.removedDocuments.size>0&&(F(o.ma),o.ma=!1))}),await ir(n,r,e)}catch(r){await Zr(r)}}function CI(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&Q_(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function e$(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ae(k.comparator);o=o.insert(s,ce.newNoDocument(s,M.min()));const a=q().add(s),l=new Xl(M.min(),new Map,new ae(z),o,a);await PR(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),ey(r)}else await fo(r.localStore,e,!1).then(()=>mo(r,e,n)).catch(Zr)}async function t$(t,e){const n=D(t),r=e.batch.batchId;try{const i=await vU(n.localStore,e);Z_(n,r,null),J_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ir(n,i)}catch(i){await Zr(i)}}async function n$(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Z_(r,e,n),J_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ir(r,i)}catch(i){await Zr(i)}}async function r$(t,e){const n=D(t);ni(n.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=Oo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function J_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Z_(t,e,n){const r=D(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function mo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||CR(t,r)})}function CR(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(El(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),ey(t))}function fm(t,e,n){for(const r of n)r instanceof SR?(t.ba.addReference(r.key,e),i$(t,r)):r instanceof AR?(S("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||CR(t,r.key)):b()}function i$(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(S("SyncEngine","New document in limbo: "+n),t.ya.add(r),ey(t))}function ey(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new k(J.fromString(e)),r=t.va.next();t.Sa.set(r,new QU(n)),t.wa=t.wa.insert(n,r),ld(t.remoteStore,new $n(yt(ko(n.path)),r,"TargetPurposeLimboResolution",Rt.ae))}}async function ir(t,e,n){const r=D(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=$_.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,d=>v.forEach(d.Qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>v.forEach(d.Ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ei(h))throw h;S("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.rs.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(d,_)}}}(r.localStore,s))}async function s$(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await uR(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new T(w.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ir(n,r.cs)}}function o$(t,e){const n=D(t),r=n.Sa.get(e);if(r&&r.ma)return q().add(r.key);{let i=q();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function a$(t,e){const n=D(t),r=await nh(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&fm(n,e.targetId,i.Ea),i}async function l$(t,e){const n=D(t);return fR(n.localStore,e).then(r=>ir(n,r))}async function u$(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Fn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):v.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await bo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Z_(i,e,r||null),J_(i,e),function(a,l){D(D(a).mutationQueue).xn(l)}(i.localStore,e)):b(),await ir(i,s)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function c$(t,e){const n=D(t);if(ty(n),ny(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await kI(n,r.toArray());n.Fa=!0,await dm(n.remoteStore,!0);for(const s of i)ld(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(mo(n,o),fo(n.localStore,o,!0))),El(n.remoteStore,o)}),await i,await kI(n,r),function(o){const a=D(o);a.Sa.forEach((l,u)=>{El(a.remoteStore,u)}),a.ba.gr(),a.Sa=new Map,a.wa=new ae(k.comparator)}(n),n.Fa=!1,await dm(n.remoteStore,!1)}}async function kI(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await ho(r.localStore,yt(l[0]));for(const u of l){const c=r.ga.get(u),h=await a$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await dR(r.localStore,o);a=await ho(r.localStore,u),await X_(r,kR(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.c_(s),i}function kR(t){return y1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function h$(t){return function(n){return D(D(n).persistence).ki()}(D(t).localStore)}async function d$(t,e,n,r){const i=D(t);if(i.Fa)return void S("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await fR(i.localStore,w1(s[0])),a=Xl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Me.EMPTY_BYTE_STRING);await ir(i,o,a);break}case"rejected":await fo(i.localStore,e,!0),mo(i,e,r);break;default:b()}}async function f$(t,e,n){const r=ty(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){S("SyncEngine","Adding an already active target "+i);continue}const s=await dR(r.localStore,i),o=await ho(r.localStore,s);await X_(r,kR(s),o.targetId,!1,o.resumeToken),ld(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await fo(r.localStore,i,!1).then(()=>{El(r.remoteStore,i),mo(r,i)}).catch(Zr)}}function ty(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e$.bind(null,e),e.fa.c_=qU.bind(null,e.eventManager),e.fa.xa=WU.bind(null,e.eventManager),e}function ny(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n$.bind(null,e),e}function p$(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,y){const _=D(f),E=ke(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",m=>_.Ur.getBundleMetadata(m,y.id)).then(m=>!!m&&m.createTime.compareTo(E)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(TR(l));const u=new KU(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const d=await u.na(c);d&&a._updateProgress(d),c=await o.Oa()}const h=await u.complete();return await ir(s,h.sa,void 0),await function(f,y){const _=D(f);return _.persistence.runTransaction("Save bundle","readwrite",E=>_.Ur.saveBundleMetadata(E,y))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(l){return pn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lR(this.persistence,new aR,e.initialUser,this.serializer)}createPersistence(e){return new oR(ad.Jr,this.serializer)}createSharedClientState(e){return new mR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NR extends pm{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await ny(this.Na.syncEngine),await bo(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return lR(this.persistence,new aR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new nU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new U2(n,this.persistence);return new F2(e.asyncQueue,r)}createPersistence(e){const n=U_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new F_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,gR(),sc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new mR}}class m$ extends NR{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Df&&(this.sharedClientState.syncEngine={Xs:u$.bind(null,n),eo:d$.bind(null,n),no:f$.bind(null,n),ki:h$.bind(null,n),Zs:l$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.gi(async r=>{await c$(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=gR();if(!Df.C(n))throw new T(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=U_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Df(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ry{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>CI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s$.bind(null,this.syncEngine),await dm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zU}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(s){return new PU(s)}(e.databaseInfo);return function(s,o,a,l){return new NU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>CI(this.syncEngine,n,0),function(){return SI.C()?new SI:new SU}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new YU(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);S("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await xo(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */function NI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class g${constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new ze,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new GU(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class _${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=D(i),a=wl(o.serializer)+"/documents",l={documents:s.map(d=>vl(o.serializer,d))},u=await o.Fo("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=MF(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());F(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Do(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=k.fromPath(r);this.mutations.push(new C_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o=wl(s.serializer)+"/documents",a={writes:i.map(l=>Il(s.serializer,l))};await s.bo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw b();n=M.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(M.min())?fe.exists(!1):fe.updateTime(n):fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(M.min()))throw new T(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(n)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class y${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.Ho=new j_(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new _$(this.datastore),n=this.Ha(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ja(i)}))}).catch(r=>{this.Ja(r)})})}Ha(e){try{const n=this.updateFunction(e);return!Gl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!V1(n)}return!1}}/**
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
 */class v${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=YA.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{S("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(S("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Oo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iy(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>AI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>AI(e.remoteStore,s)),t._onlineComponents=e}function DR(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DR(n))throw n;pn("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new pm)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await oc(t,new pm);return t._offlineComponents}async function cd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await mm(t,t._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await mm(t,new ry))),t._onlineComponents}function xR(t){return iy(t).then(e=>e.persistence)}function sy(t){return iy(t).then(e=>e.localStore)}function bR(t){return cd(t).then(e=>e.remoteStore)}function oy(t){return cd(t).then(e=>e.syncEngine)}function w$(t){return cd(t).then(e=>e.datastore)}async function go(t){const e=await cd(t),n=e.eventManager;return n.onListen=XU.bind(null,e.syncEngine),n.onUnlisten=JU.bind(null,e.syncEngine),n}function I$(t){return t.asyncQueue.enqueue(async()=>{const e=await xR(t),n=await bR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.F_.delete(0),eu(s)}(n)})}function E$(t){return t.asyncQueue.enqueue(async()=>{const e=await xR(t),n=await bR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.F_.add(0),await xo(s),s.O_.set("Offline")}(n)})}function T$(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new T(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Oo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await sy(t),e,n)),n.promise}function VR(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ud({next:d=>{o.enqueueAndForget(()=>H_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new T(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Y_(ko(a.path),c,{includeMetadataChanges:!0,Z_:!0});return K_(s,h)}(await go(t),t.asyncQueue,e,n,r)),r.promise}function S$(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await nh(i,s,!0),l=new RR(s,a.Ps),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Oo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await sy(t),e,n)),n.promise}function OR(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ud({next:d=>{o.enqueueAndForget(()=>H_(s,h)),d.fromCache&&l.source==="server"?u.reject(new T(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Y_(a,c,{includeMetadataChanges:!0,Z_:!0});return K_(s,h)}(await go(t),t.asyncQueue,e,n,r)),r.promise}function A$(t,e){const n=new ud(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.add(s),s.next()}(await go(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.delete(s)}(await go(t),n))}}function R$(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?L1().encode(o):o,function(c,h){return new g$(c,h)}(function(c,h){if(c instanceof Uint8Array)return NI(c,h);if(c instanceof ArrayBuffer)return NI(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Zl(e));t.asyncQueue.enqueueAndForget(async()=>{p$(await oy(t),i,r)})}function P$(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ur.getNamedQuery(o,i))}(await sy(t),e))}/**
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
 */function LR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const DI=new Map;/**
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
 */function ay(t,e,n){if(!n)throw new T(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MR(t,e,n,r){if(e===!0&&r===!0)throw new T(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xI(t){if(!k.isDocumentKey(t))throw new T(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bI(t){if(k.isDocumentKey(t))throw new T(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hd(t);throw new T(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function FR(t,e){if(e<=0)throw new T(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class VI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new T(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new T(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new VI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new VI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new P2;switch(r.type){case"firstParty":return new D2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=DI.get(n);r&&(S("ComponentProvider","Removing Datastore"),DI.delete(n),r.terminate())}(this),Promise.resolve()}}function UR(t,e,n,r={}){var i;const s=(t=ee(t,tu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=uN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}t._authCredentials=new C2(new QA(a,l))}}/**
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
 */let vt=class $R{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $R(this.firestore,e,this._query)}},_e=class BR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new BR(this.firestore,e,this._key)}},Dr=class jR extends vt{constructor(e,n,r){super(e,n,ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new k(e))}withConverter(e){return new jR(this.firestore,e,this._path)}};function zR(t,e,...n){if(t=$(t),ay("collection","path",e),t instanceof tu){const r=J.fromString(e,...n);return bI(r),new Dr(t,null,r)}{if(!(t instanceof _e||t instanceof Dr))throw new T(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return bI(r),new Dr(t.firestore,null,r)}}function C$(t,e){if(t=ee(t,tu),ay("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new vt(t,null,function(r){return new nr(J.emptyPath(),r)}(e))}function oh(t,e,...n){if(t=$(t),arguments.length===1&&(e=YA.V()),ay("doc","path",e),t instanceof tu){const r=J.fromString(e,...n);return xI(r),new _e(t,null,new k(r))}{if(!(t instanceof _e||t instanceof Dr))throw new T(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return xI(r),new _e(t.firestore,t instanceof Dr?t.converter:null,new k(r))}}function qR(t,e){return t=$(t),e=$(e),(t instanceof _e||t instanceof Dr)&&(e instanceof _e||e instanceof Dr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function WR(t,e){return t=$(t),e=$(e),t instanceof vt&&e instanceof vt&&t.firestore===e.firestore&&Hl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class k${constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new j_(this,"async_queue_retry"),this.ou=()=>{const n=sc();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new ze;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ei(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ce("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=G_.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&b()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function gm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class N${constructor(){this._progressObserver={},this._taskCompletionResolver=new ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const D$=-1;let Ae=class extends tu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new k$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GR(this),this._firestoreClient.terminate()}};function x$(t,e){const n=typeof t=="object"?t:Sg(),r=typeof t=="string"?t:e||"(default)",i=Ji(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oN("firestore");s&&UR(i,...s)}return i}function Ke(t){return t._firestoreClient||GR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function GR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new oF(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,LR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new v$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function b$(t,e){HR(t=ee(t,Ae));const n=Ke(t);if(n._uninitializedComponentsProvider)throw new T(w.FAILED_PRECONDITION,"SDK cache is already specified.");pn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new ry;return KR(n,i,new NR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function V$(t){HR(t=ee(t,Ae));const e=Ke(t);if(e._uninitializedComponentsProvider)throw new T(w.FAILED_PRECONDITION,"SDK cache is already specified.");pn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new ry;return KR(e,r,new m$(r,n.cacheSizeBytes))}function KR(t,e,n){const r=new ze;return t.asyncQueue.enqueue(async()=>{try{await oc(t,n),await mm(t,e),r.resolve()}catch(i){const s=i;if(!DR(s))throw s;pn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function O$(t){if(t._initialized&&!t._terminated)throw new T(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ln.C())return Promise.resolve();const i=r+"main";await ln.delete(i)}(U_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function L$(t){return function(n){const r=new ze;return n.asyncQueue.enqueueAndForget(async()=>r$(await oy(n),r)),r.promise}(Ke(t=ee(t,Ae)))}function M$(t){return I$(Ke(t=ee(t,Ae)))}function F$(t){return E$(Ke(t=ee(t,Ae)))}function U$(t,e){const n=Ke(t=ee(t,Ae)),r=new N$;return R$(n,t._databaseId,e,r),r}function $$(t,e){return P$(Ke(t=ee(t,Ae)),e).then(n=>n?new vt(t,null,n.query):null)}function HR(t){if(t._initialized||t._terminated)throw new T(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Me.fromBase64String(e))}catch(n){throw new T(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ns=class{constructor(e){this._methodName=e}};/**
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
 */class dd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
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
 */const B$=/^__.*__$/;class j${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}class QR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function YR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class fd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return ah(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(YR(this.Tu)&&B$.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class z${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}wu(e,n,r,i=!1){return new fd({Tu:e,methodName:n,yu:r,path:Ee.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rs(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new z$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pd(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=ZR(r,o);let l,u;if(s.merge)l=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=_m(e,h,n);if(!o.contains(d))throw new T(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tP(c,d)||c.push(d)}l=new Pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new j$(new Xe(a),l,u)}class nu extends ns{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nu}}function XR(t,e,n){return new fd({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ly extends ns{_toFieldTransform(e){return new Yl(e.path,new lo)}isEqual(e){return e instanceof ly}}class q$ extends ns{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=XR(this,e,!0),r=this.Su.map(s=>is(s,n)),i=new qi(r);return new Yl(e.path,i)}isEqual(e){return this===e}}class W$ extends ns{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=XR(this,e,!0),r=this.Su.map(s=>is(s,n)),i=new Wi(r);return new Yl(e.path,i)}isEqual(e){return this===e}}class G$ extends ns{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=new uo(e.serializer,P1(e.serializer,this.bu));return new Yl(e.path,n)}isEqual(e){return this===e}}function uy(t,e,n,r){const i=t.wu(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=Xe.empty();ts(r,(l,u)=>{const c=dy(e,l,n);u=$(u);const h=i.mu(c);if(u instanceof nu)s.push(c);else{const d=is(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Pt(s);return new QR(o,a,i.fieldTransforms)}function cy(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[_m(e,r,n)],l=[i];if(s.length%2!=0)throw new T(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(_m(e,s[d])),l.push(s[d+1]);const u=[],c=Xe.empty();for(let d=a.length-1;d>=0;--d)if(!tP(u,a[d])){const f=a[d];let y=l[d];y=$(y);const _=o.mu(f);if(y instanceof nu)u.push(f);else{const E=is(y,_);E!=null&&(u.push(f),c.set(f,E))}}const h=new Pt(u);return new QR(c,h,o.fieldTransforms)}function JR(t,e,n,r=!1){return is(n,t.wu(r?4:3,e))}function is(t,e){if(eP(t=$(t)))return hy("Unsupported field value:",e,t),ZR(t,e);if(t instanceof ns)return function(r,i){if(!YR(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=is(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:co(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:co(i.serializer,s)}}if(r instanceof dd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:U1(i.serializer,r._byteString)};if(r instanceof _e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:b_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${hd(r)}`)}(t,e)}function ZR(t,e){const n={};return a1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=is(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof dd||t instanceof bn||t instanceof _e||t instanceof ns)}function hy(t,e,n){if(!eP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=hd(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function _m(t,e,n){if((e=$(e))instanceof qr)return e._internalPath;if(typeof e=="string")return dy(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const K$=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(K$)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qr(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(w.INVALID_ARGUMENT,a+t+l)}function tP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Tl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(md("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H$ extends Tl{data(){return super.data()}}function md(t,e){return typeof e=="string"?dy(t,e):e instanceof qr?e._internalPath:e._delegate._internalPath}/**
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
 */function nP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}class ru extends fy{}function ur(t,e,...n){let r=[];e instanceof fy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof py).length,a=s.filter(l=>l instanceof gd).length;if(o>1||o>0&&a>0)throw new T(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class gd extends ru{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gd(e,n,r)}_apply(e){const n=this._parse(e);return iP(e._query,n),new vt(e.firestore,e.converter,im(e._query,n))}_parse(e){const n=rs(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){LI(h,c);const f=[];for(const y of h)f.push(OI(l,s,y));d={arrayValue:{values:f}}}else d=OI(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||LI(h,c),d=JR(a,o,h,c==="in"||c==="not-in");return Q.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Q$(t,e,n){const r=e,i=md("where",t);return gd._create(i,r,n)}class py extends fy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new py(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:te.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)iP(o,l),o=im(o,l)}(e._query,n),new vt(e.firestore,e.converter,im(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class my extends ru{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new my(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new T(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new T(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new qs(s,o);return function(u,c){if(A_(u)===null){const h=nd(u);h!==null&&sP(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new nr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Y$(t,e="asc"){const n=e,r=md("orderBy",t);return my._create(r,n)}class _d extends ru{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _d(e,n,r)}_apply(e){return new vt(e.firestore,e.converter,Jc(e._query,this._limit,this._limitType))}}function X$(t){return FR("limit",t),_d._create("limit",t,"F")}function J$(t){return FR("limitToLast",t),_d._create("limitToLast",t,"L")}class yd extends ru{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new yd(e,n,r)}_apply(e){const n=rP(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(i,s){return new nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Z$(...t){return yd._create("startAt",t,!0)}function e4(...t){return yd._create("startAfter",t,!1)}class vd extends ru{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new vd(e,n,r)}_apply(e){const n=rP(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(i,s){return new nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function t4(...t){return vd._create("endBefore",t,!1)}function n4(...t){return vd._create("endAt",t,!0)}function rP(t,e,n,r){if(n[0]=$(n[0]),n[0]instanceof Tl)return function(s,o,a,l,u){if(!l)throw new T(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Ws(s))if(h.field.isKeyField())c.push(ji(o,l.key));else{const d=l.data.field(h.field);if(td(d))throw new T(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new T(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new jr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=rs(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new T(w.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<c.length;y++){const _=c[y];if(d[y].field.isKeyField()){if(typeof _!="string")throw new T(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!R_(o)&&_.indexOf("/")!==-1)throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const E=o.path.child(J.fromString(_));if(!k.isDocumentKey(E))throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const m=new k(E);f.push(ji(a,m))}else{const E=JR(l,u,_);f.push(E)}}return new jr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function OI(t,e,n){if(typeof(n=$(n))=="string"){if(n==="")throw new T(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R_(e)&&n.indexOf("/")!==-1)throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!k.isDocumentKey(r))throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ji(t,new k(r))}if(n instanceof _e)return ji(t,n._key);throw new T(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hd(n)}.`)}function LI(t,e){if(!Array.isArray(t)||t.length===0)throw new T(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iP(t,e){if(e.isInequality()){const r=nd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new T(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=A_(t);s!==null&&sP(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new T(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sP(t,e,n){if(!n.isEqual(e))throw new T(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class gy{convertValue(e,n="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dd(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=T_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);F(Q1(r));const i=new $r(r.get(1),r.get(3)),s=new k(r.popFirst(5));return i.isEqual(n)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class r4 extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}/**
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
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Yn=class extends Tl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(md("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Va=class extends Yn{data(e={}){return super.data(e)}},Wr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ei(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ei(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ei(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:i4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function i4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function oP(t,e){return t instanceof Yn&&e instanceof Yn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Wr&&e instanceof Wr&&t._firestore===e._firestore&&WR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function s4(t){t=ee(t,_e);const e=ee(t.firestore,Ae);return VR(Ke(e),t._key).then(n=>_y(e,t,n))}class ss extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function o4(t){t=ee(t,_e);const e=ee(t.firestore,Ae),n=Ke(e),r=new ss(e);return T$(n,t._key).then(i=>new Yn(e,r,t._key,i,new Ei(i!==null&&i.hasLocalMutations,!0),t.converter))}function a4(t){t=ee(t,_e);const e=ee(t.firestore,Ae);return VR(Ke(e),t._key,{source:"server"}).then(n=>_y(e,t,n))}function l4(t){t=ee(t,vt);const e=ee(t.firestore,Ae),n=Ke(e),r=new ss(e);return nP(t._query),OR(n,t._query).then(i=>new Wr(e,r,t,i))}function u4(t){t=ee(t,vt);const e=ee(t.firestore,Ae),n=Ke(e),r=new ss(e);return S$(n,t._query).then(i=>new Wr(e,r,t,i))}function c4(t){t=ee(t,vt);const e=ee(t.firestore,Ae),n=Ke(e),r=new ss(e);return OR(n,t._query,{source:"server"}).then(i=>new Wr(e,r,t,i))}function MI(t,e,n){t=ee(t,_e);const r=ee(t.firestore,Ae),i=wd(t.converter,e,n);return iu(r,[pd(rs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fe.none())])}function FI(t,e,n,...r){t=ee(t,_e);const i=ee(t.firestore,Ae),s=rs(i);let o;return o=typeof(e=$(e))=="string"||e instanceof qr?cy(s,"updateDoc",t._key,e,n,r):uy(s,"updateDoc",t._key,e),iu(i,[o.toMutation(t._key,fe.exists(!0))])}function h4(t){return iu(ee(t.firestore,Ae),[new Do(t._key,fe.none())])}function d4(t,e){const n=ee(t.firestore,Ae),r=oh(t),i=wd(t.converter,e);return iu(n,[pd(rs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then(()=>r)}function aP(t,...e){var n,r,i;t=$(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof _e)u=ee(t.firestore,Ae),c=ko(t._key.path),l={next:h=>{e[o]&&e[o](_y(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(t,vt);u=ee(h.firestore,Ae),c=h._query;const d=new ss(u);l={next:f=>{e[o]&&e[o](new Wr(u,d,h,f))},error:e[o+1],complete:e[o+2]},nP(t._query)}return function(d,f,y,_){const E=new ud(_),m=new Y_(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>K_(await go(d),m)),()=>{E.La(),d.asyncQueue.enqueueAndForget(async()=>H_(await go(d),m))}}(Ke(u),c,a,l)}function f4(t,e){return A$(Ke(t=ee(t,Ae)),gm(e)?e:{next:e})}function iu(t,e){return function(r,i){const s=new ze;return r.asyncQueue.enqueueAndForget(async()=>ZU(await oy(r),i,s)),s.promise}(Ke(t),e)}function _y(t,e,n){const r=n.docs.get(e._key),i=new ss(t);return new Yn(t,i,e._key,r,new Ei(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const p4={maxAttempts:5};/**
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
 */let m4=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=rs(e)}set(e,n,r){this._verifyNotCommitted();const i=mr(e,this._firestore),s=wd(i.converter,n,r),o=pd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=mr(e,this._firestore);let o;return o=typeof(n=$(n))=="string"||n instanceof qr?cy(this._dataReader,"WriteBatch.update",s._key,n,r,i):uy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=mr(e,this._firestore);return this._mutations=this._mutations.concat(new Do(n._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function mr(t,e){if((t=$(t)).firestore!==e)throw new T(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let g4=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=rs(n)}get(n){const r=mr(n,this._firestore),i=new r4(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return b();const o=s[0];if(o.isFoundDocument())return new Tl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Tl(this._firestore,i,r._key,null,r.converter);throw b()})}set(n,r,i){const s=mr(n,this._firestore),o=wd(s.converter,r,i),a=pd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=mr(n,this._firestore);let a;return a=typeof(r=$(r))=="string"||r instanceof qr?cy(this._dataReader,"Transaction.update",o._key,r,i,s):uy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=mr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=mr(e,this._firestore),r=new ss(this._firestore);return super.get(e).then(i=>new Yn(this._firestore,r,n._key,i._document,new Ei(!1,!1),n.converter))}};function _4(t,e,n){t=ee(t,Ae);const r=Object.assign(Object.assign({},p4),n);return function(s){if(s.maxAttempts<1)throw new T(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new ze;return s.asyncQueue.enqueueAndForget(async()=>{const u=await w$(s);new y$(s.asyncQueue,u,a,o,l).run()}),l.promise}(Ke(t),i=>e(new g4(t,i)),r)}/**
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
 */function y4(){return new nu("deleteField")}function v4(){return new ly("serverTimestamp")}function w4(...t){return new q$("arrayUnion",t)}function I4(...t){return new W$("arrayRemove",t)}function E4(t){return new G$("increment",t)}(function(e,n=!0){(function(i){Co=i})(Qr),en(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ae(new k2(r.getProvider("auth-internal")),new b2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gt(xw,"4.2.0",e),gt(xw,"4.2.0","esm2017")})();const T4="@firebase/firestore-compat",S4="0.3.18";/**
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
 */function yy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function UI(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function $I(){if(!iF())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Sl{constructor(e){this._delegate=e}static fromBase64String(e){return $I(),new Sl(bn.fromBase64String(e))}static fromUint8Array(e){return UI(),new Sl(bn.fromUint8Array(e))}toBase64(){return $I(),this._delegate.toBase64()}toUint8Array(){return UI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function ym(t){return A4(t,["next","error","complete"])}function A4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class R4{enableIndexedDbPersistence(e,n){return b$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return V$(e._delegate)}clearIndexedDbPersistence(e){return O$(e._delegate)}}class lP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof $r||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&pn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){UR(this._delegate,e,n,r)}enableNetwork(){return M$(this._delegate)}disableNetwork(){return F$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,MR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return L$(this._delegate)}onSnapshotsInSync(e){return f4(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _o(this,zR(this._delegate,e))}catch(n){throw ft(n,"collection()","Firestore.collection()")}}doc(e){try{return new Yt(this,oh(this._delegate,e))}catch(n){throw ft(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new dt(this,C$(this._delegate,e))}catch(n){throw ft(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return _4(this._delegate,n=>e(new uP(this,n)))}batch(){return Ke(this._delegate),new cP(new m4(this._delegate,e=>iu(this._delegate,e)))}loadBundle(e){return U$(this._delegate,e)}namedQuery(e){return $$(this._delegate,e).then(n=>n?new dt(this,n):null)}}class Id extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sl(new bn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Yt.forKey(n,this.firestore,null)}}function P4(t){A2(t)}class uP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}get(e){const n=Ti(e);return this._delegate.get(n).then(r=>new Al(this._firestore,new Yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ti(e);return r?(yy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ti(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ti(e);return this._delegate.delete(n),this}}class cP{constructor(e){this._delegate=e}set(e,n,r){const i=Ti(e);return r?(yy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ti(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ti(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Qi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Va(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Qi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Qi(e,new Id(e),n),i.set(n,s)),s}}Qi.INSTANCES=new WeakMap;class Yt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}static forPath(e,n,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Yt(n,new _e(n._delegate,r,new k(e)))}static forKey(e,n,r){return new Yt(n,new _e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _o(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _o(this.firestore,zR(this._delegate,e))}catch(n){throw ft(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=$(e),e instanceof _e?qR(this._delegate,e):!1}set(e,n){n=yy("DocumentReference.set",n);try{return n?MI(this._delegate,e,n):MI(this._delegate,e)}catch(r){throw ft(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?FI(this._delegate,e):FI(this._delegate,e,n,...r)}catch(i){throw ft(i,"updateDoc()","DocumentReference.update()")}}delete(){return h4(this._delegate)}onSnapshot(...e){const n=hP(e),r=dP(e,i=>new Al(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return aP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=o4(this._delegate):(e==null?void 0:e.source)==="server"?n=a4(this._delegate):n=s4(this._delegate),n.then(r=>new Al(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Yt(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ft(t,e,n){return t.message=t.message.replace(e,n),t}function hP(t){for(const e of t)if(typeof e=="object"&&!ym(e))return e;return{}}function dP(t,e){var n,r;let i;return ym(t[0])?i=t[0]:ym(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Al{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Yt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return oP(this._delegate,e._delegate)}}class Rl extends Al{data(e){const n=this._delegate.data(e);return R2(n!==void 0),n}}class dt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Id(e)}where(e,n,r){try{return new dt(this.firestore,ur(this._delegate,Q$(e,n,r)))}catch(i){throw ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new dt(this.firestore,ur(this._delegate,Y$(e,n)))}catch(r){throw ft(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new dt(this.firestore,ur(this._delegate,X$(e)))}catch(n){throw ft(n,"limit()","Query.limit()")}}limitToLast(e){try{return new dt(this.firestore,ur(this._delegate,J$(e)))}catch(n){throw ft(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new dt(this.firestore,ur(this._delegate,Z$(...e)))}catch(n){throw ft(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new dt(this.firestore,ur(this._delegate,e4(...e)))}catch(n){throw ft(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new dt(this.firestore,ur(this._delegate,t4(...e)))}catch(n){throw ft(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new dt(this.firestore,ur(this._delegate,n4(...e)))}catch(n){throw ft(n,"endAt()","Query.endAt()")}}isEqual(e){return WR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=u4(this._delegate):(e==null?void 0:e.source)==="server"?n=c4(this._delegate):n=l4(this._delegate),n.then(r=>new vm(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=hP(e),r=dP(e,i=>new vm(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return aP(this._delegate,n,r)}withConverter(e){return new dt(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Rl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class vm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Rl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new C4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Rl(this._firestore,r))})}isEqual(e){return oP(this._delegate,e._delegate)}}class _o extends dt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Yt(this.firestore,e):null}doc(e){try{return e===void 0?new Yt(this.firestore,oh(this._delegate)):new Yt(this.firestore,oh(this._delegate,e))}catch(n){throw ft(n,"doc()","CollectionReference.doc()")}}add(e){return d4(this._delegate,e).then(n=>new Yt(this.firestore,n))}isEqual(e){return qR(this._delegate,e._delegate)}withConverter(e){return new _o(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ti(t){return ee(t,_e)}/**
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
 */class vy{constructor(...e){this._delegate=new qr(...e)}static documentId(){return new vy(Ee.keyField().canonicalString())}isEqual(e){return e=$(e),e instanceof qr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class pi{constructor(e){this._delegate=e}static serverTimestamp(){const e=v4();return e._methodName="FieldValue.serverTimestamp",new pi(e)}static delete(){const e=y4();return e._methodName="FieldValue.delete",new pi(e)}static arrayUnion(...e){const n=w4(...e);return n._methodName="FieldValue.arrayUnion",new pi(n)}static arrayRemove(...e){const n=I4(...e);return n._methodName="FieldValue.arrayRemove",new pi(n)}static increment(e){const n=E4(e);return n._methodName="FieldValue.increment",new pi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const k4={Firestore:lP,GeoPoint:dd,Timestamp:pe,Blob:Sl,Transaction:uP,WriteBatch:cP,DocumentReference:Yt,DocumentSnapshot:Al,Query:dt,QueryDocumentSnapshot:Rl,QuerySnapshot:vm,CollectionReference:_o,FieldPath:vy,FieldValue:pi,setLogLevel:P4,CACHE_SIZE_UNLIMITED:D$};function N4(t,e){t.INTERNAL.registerComponent(new bt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},k4)))}/**
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
 */function D4(t){N4(t,(e,n)=>new lP(e,n,new R4)),t.registerVersion(T4,S4)}D4(Zn);const x4={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},fP=Zn.initializeApp(x4);ab(fP);Zn.auth();const BI=Zn.firestore();x$(fP);Zn.firestore();function b4({name:t,setName:e,setMiddle:n}){const r=async()=>{try{return BI.collection("TempName").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));e(a)})}catch(s){console.error("Error fetching message data:",s)}};U.useEffect(()=>{r()},[]);const i=async()=>{try{return BI.collection("Temp").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));n(a)})}catch(s){console.error("Error fetching message data:",s)}};U.useEffect(()=>{i()},[])}const V4="https://Balanss.github.io/Bot/assets/useLogo-9ef383ff.png";function pP(){return B.jsx("img",{onClick:()=>{localStorage.setItem("password",""),setTimeout(()=>{window.location.href="/#/"},1e3)},src:V4,className:"w-[100px] mt-4 ml-4 hover:scale-105  cursor-pointer"})}function jI(){const[t,e]=U.useState([]),[n,r]=U.useState([]);U.useEffect(()=>{const o=document.createElement("script");return o.src="https://cdn.voiceflow.com/widget/bundle.mjs",o.type="text/javascript",o.async=!0,o.onload=()=>{window.voiceflow.chat.load({verify:{projectID:"64ee23419c1d720007cc0d3a"},url:"https://general-runtime.voiceflow.com",versionID:"production"})},document.body.appendChild(o),()=>{document.body.removeChild(o)}},[]);const[i,s]=U.useState("");return U.useEffect(()=>{s(localStorage.getItem("password"))},[]),B.jsxs(B.Fragment,{children:[B.jsx(pP,{}),i==="meds"&&B.jsxs("div",{className:"w-1/2 m-auto",children:[B.jsx(b4,{name:t,setName:e,setMiddle:r}),B.jsxs("section",{className:"mt-10 mb-10 ml-5 text-white drop-shadow-xl ",children:[B.jsx("h1",{children:" "}),t.map((o,a)=>B.jsxs("h1",{className:"text-2xl  drop-shadow-xl",children:[" ","Hello, ",o.Name===0?"":o.Name," "]},a))]}),B.jsx("br",{}),B.jsx("hr",{className:"w-[50vw] border-yellow-500 border-b-4"}),B.jsx("section",{className:"mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl",children:n.map((o,a)=>B.jsxs("div",{className:"text-2xl",children:[B.jsxs("li",{className:" drop-shadow-xl",children:[o.Name," "]}),B.jsx("li",{className:" drop-shadow-xl",children:o.Location}),B.jsx("li",{className:" drop-shadow-xl",children:o.description})]},a))})]})]})}const O4="https://Balanss.github.io/Bot/assets/animation-41cc76e6.gif";function L4(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(!1);function o(){s(!0),localStorage.setItem("password",t),setTimeout(()=>{localStorage.getItem("password")==="aimigo"&&(window.location.href="/#/foodbot"),localStorage.getItem("password")==="meds"?window.location.href="/#/meds":r("wrong password")},2e3)}return B.jsxs("div",{className:"text-center",children:[B.jsxs("section",{className:"mt-10 mb-10 ml-5 text-white drop-shadow-xl ",children:[B.jsx("h1",{children:" "}),B.jsx("h1",{className:"text-6xl  drop-shadow-xl",children:" Welcome Project Aimigo "})]}),B.jsx("br",{}),B.jsxs("section",{className:"mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl",children:[B.jsxs("h1",{className:"text-xl  drop-shadow-lg",children:[" ","enter password to continue"," "]}),B.jsx("input",{className:"text-2xl text-black drop-shadow-xl mt-2",type:"password",onChange:a=>e(a.target.value)}),B.jsx("br",{}),B.jsxs("button",{className:"  text-2xl text-white drop-shadow-xl mt-2 bg-sky-600 hover:bg-sky-700 rounded-xl p-2",onClick:o,children:[" ","Submit"," "]}),B.jsx("span",{className:"text-center flex items-center justify-center mt-[20px]",children:i?B.jsxs(B.Fragment,{children:[" ",B.jsx("img",{src:O4})," "]}):""}),B.jsx("br",{})]})]})}/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lh(){return lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lh.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const zI="popstate";function M4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=su(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),wm("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:mP(s))}function r(i,s){Ed(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return U4(e,n,r,t)}function Vt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ed(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F4(){return Math.random().toString(36).substr(2,8)}function qI(t,e){return{usr:t.state,key:t.key,idx:e}}function wm(t,e,n,r){return n===void 0&&(n=null),lh({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?su(e):e,{state:n,key:e&&e.key||r||F4()})}function mP(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function su(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function U4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(lh({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=wr.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:m})}function d(E,m){a=wr.Push;let p=wm(_.location,E,m);n&&n(p,E),u=c()+1;let g=qI(p,u),I=_.createHref(p);try{o.pushState(g,"",I)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(I)}s&&l&&l({action:a,location:_.location,delta:1})}function f(E,m){a=wr.Replace;let p=wm(_.location,E,m);n&&n(p,E),u=c();let g=qI(p,u),I=_.createHref(p);o.replaceState(g,"",I),s&&l&&l({action:a,location:_.location,delta:0})}function y(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:mP(E);return Vt(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zI,h),l=E,()=>{i.removeEventListener(zI,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let m=y(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(E){return o.go(E)}};return _}var WI;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(WI||(WI={}));function $4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?su(e):e,i=yP(r.pathname||"/",n);if(i==null)return null;let s=gP(t);B4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Y4(s[a],Z4(i));return o}function gP(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Vt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ks([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Vt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gP(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:H4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _P(s.path))i(s,o,l)}),e}function _P(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_P(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function B4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j4=/^:\w+$/,z4=3,q4=2,W4=1,G4=10,K4=-2,GI=t=>t==="*";function H4(t,e){let n=t.split("/"),r=n.length;return n.some(GI)&&(r+=K4),e&&(r+=q4),n.filter(i=>!GI(i)).reduce((i,s)=>i+(j4.test(s)?z4:s===""?W4:G4),r)}function Q4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Y4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=X4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Ks([i,c.pathname]),pathnameBase:tB(Ks([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ks([i,c.pathnameBase]))}return s}function X4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=J4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=eB(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function J4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ed(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Z4(t){try{return decodeURI(t)}catch(e){return Ed(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function eB(t,e){try{return decodeURIComponent(t)}catch(n){return Ed(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function yP(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Ks=t=>t.join("/").replace(/\/\/+/g,"/"),tB=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function nB(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vP=["post","put","patch","delete"];new Set(vP);const rB=["get",...vP];new Set(rB);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Im(){return Im=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Im.apply(this,arguments)}const iB=U.createContext(null),sB=U.createContext(null),wP=U.createContext(null),Td=U.createContext(null),Sd=U.createContext({outlet:null,matches:[],isDataRoute:!1}),IP=U.createContext(null);function wy(){return U.useContext(Td)!=null}function oB(){return wy()||Vt(!1),U.useContext(Td).location}function aB(t,e){return lB(t,e)}function lB(t,e,n){wy()||Vt(!1);let{navigator:r}=U.useContext(wP),{matches:i}=U.useContext(Sd),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=oB(),u;if(e){var c;let _=typeof e=="string"?su(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Vt(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=$4(t,{pathname:d}),y=fB(f&&f.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ks([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Ks([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?U.createElement(Td.Provider,{value:{location:Im({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wr.Pop}},y):y}function uB(){let t=_B(),e=nB(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,s)}const cB=U.createElement(uB,null);class hB extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?U.createElement(Sd.Provider,{value:this.props.routeContext},U.createElement(IP.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dB(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(iB);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Sd.Provider,{value:e},r)}function fB(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Vt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||cB);let d=e.concat(s.slice(0,u+1)),f=()=>{let y;return c?y=h:l.route.Component?y=U.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,U.createElement(dB,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?U.createElement(hB,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Em=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Em||{});function pB(t){let e=U.useContext(sB);return e||Vt(!1),e}function mB(t){let e=U.useContext(Sd);return e||Vt(!1),e}function gB(t){let e=mB(),n=e.matches[e.matches.length-1];return n.route.id||Vt(!1),n.route.id}function _B(){var t;let e=U.useContext(IP),n=pB(Em.UseRouteError),r=gB(Em.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function pa(t){Vt(!1)}function yB(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1}=t;wy()&&Vt(!1);let a=e.replace(/^\/*/,"/"),l=U.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=su(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,y=U.useMemo(()=>{let _=yP(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return y==null?null:U.createElement(wP.Provider,{value:l},U.createElement(Td.Provider,{children:n,value:y}))}function vB(t){let{children:e,location:n}=t;return aB(Tm(e),n)}new Promise(()=>{});function Tm(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Tm(r.props.children,s));return}r.type!==pa&&Vt(!1),!r.props.index||!r.props.children||Vt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wB="startTransition",KI=$P[wB];function IB(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=M4({window:i,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=U.useCallback(h=>{u&&KI?KI(()=>l(h)):l(h)},[l,u]);return U.useLayoutEffect(()=>o.listen(c),[o,c]),U.createElement(yB,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var HI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(HI||(HI={}));var QI;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(QI||(QI={}));function EB(){const[t,e]=U.useState("");return U.useEffect(()=>{e(localStorage.getItem("password"))},[]),U.useEffect(()=>{const n=document.createElement("script");return n.src="https://cdn.voiceflow.com/widget/bundle.mjs",n.type="text/javascript",n.async=!0,n.onload=()=>{window.voiceflow.chat.load({verify:{projectID:"651b2a5e4c2fe90007147e86"},url:"https://general-runtime.voiceflow.com",versionID:"production"}),setTimeout(()=>{window.voiceflow.chat.open()},2e3)},document.body.appendChild(n),()=>{document.body.removeChild(n)}},[]),B.jsxs(B.Fragment,{children:[B.jsx(pP,{}),t==="651b2a5e4c2fe90007147e86"&&B.jsx("div",{className:"bot text-center"})]})}function TB(){return B.jsx("div",{children:B.jsx(IB,{children:B.jsxs(vB,{children:[B.jsx(pa,{path:"/",element:B.jsx(L4,{})}),B.jsx(pa,{path:"/foodbot",element:B.jsx(EB,{})}),B.jsx(pa,{path:"/main",element:B.jsx(jI,{})}),B.jsx(pa,{path:"/meds",element:B.jsx(jI,{})})]})})})}bf.createRoot(document.getElementById("root")).render(B.jsx(sE.StrictMode,{children:B.jsx(TB,{})}));
