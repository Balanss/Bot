(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function GR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kI={exports:{}},rh={},CI={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=Symbol.for("react.element"),KR=Symbol.for("react.portal"),HR=Symbol.for("react.fragment"),QR=Symbol.for("react.strict_mode"),YR=Symbol.for("react.profiler"),XR=Symbol.for("react.provider"),JR=Symbol.for("react.context"),ZR=Symbol.for("react.forward_ref"),eP=Symbol.for("react.suspense"),tP=Symbol.for("react.memo"),nP=Symbol.for("react.lazy"),ly=Symbol.iterator;function rP(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var NI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},DI=Object.assign,bI={};function mo(t,e,n){this.props=t,this.context=e,this.refs=bI,this.updater=n||NI}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xI(){}xI.prototype=mo.prototype;function hm(t,e,n){this.props=t,this.context=e,this.refs=bI,this.updater=n||NI}var dm=hm.prototype=new xI;dm.constructor=hm;DI(dm,mo.prototype);dm.isPureReactComponent=!0;var uy=Array.isArray,VI=Object.prototype.hasOwnProperty,fm={current:null},OI={key:!0,ref:!0,__self:!0,__source:!0};function LI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)VI.call(e,r)&&!OI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Tl,type:t,key:s,ref:o,props:i,_owner:fm.current}}function iP(t,e){return{$$typeof:Tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Tl}function sP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cy=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sP(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Tl:case KR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vd(o,0):r,uy(i)?(n="",t!=null&&(n=t.replace(cy,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(pm(i)&&(i=iP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vd(s,a);o+=Du(s,e,n,l,i)}else if(l=rP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vd(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ru(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},bu={transition:null},aP={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:bu,ReactCurrentOwner:fm};H.Children={map:ru,forEach:function(t,e,n){ru(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ru(t,function(){e++}),e},toArray:function(t){return ru(t,function(e){return e})||[]},only:function(t){if(!pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=mo;H.Fragment=HR;H.Profiler=YR;H.PureComponent=hm;H.StrictMode=QR;H.Suspense=eP;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aP;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=DI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)VI.call(e,l)&&!OI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Tl,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:JR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XR,_context:t},t.Consumer=t};H.createElement=LI;H.createFactory=function(t){var e=LI.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:ZR,render:t}};H.isValidElement=pm;H.lazy=function(t){return{$$typeof:nP,_payload:{_status:-1,_result:t},_init:oP}};H.memo=function(t,e){return{$$typeof:tP,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=bu.transition;bu.transition={};try{t()}finally{bu.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return vt.current.useCallback(t,e)};H.useContext=function(t){return vt.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};H.useEffect=function(t,e){return vt.current.useEffect(t,e)};H.useId=function(){return vt.current.useId()};H.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return vt.current.useMemo(t,e)};H.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};H.useRef=function(t){return vt.current.useRef(t)};H.useState=function(t){return vt.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return vt.current.useTransition()};H.version="18.2.0";CI.exports=H;var Un=CI.exports;const lP=GR(Un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uP=Un,cP=Symbol.for("react.element"),hP=Symbol.for("react.fragment"),dP=Object.prototype.hasOwnProperty,fP=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pP={key:!0,ref:!0,__self:!0,__source:!0};function MI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dP.call(e,r)&&!pP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cP,type:t,key:s,ref:o,props:i,_owner:fP.current}}rh.Fragment=hP;rh.jsx=MI;rh.jsxs=MI;kI.exports=rh;var fe=kI.exports,Af={},FI={exports:{}},zt={},UI={exports:{}},$I={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,j){var W=O.length;O.push(j);e:for(;0<W;){var Se=W-1>>>1,Me=O[Se];if(0<i(Me,j))O[Se]=j,O[W]=Me,W=Se;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],W=O.pop();if(W!==j){O[0]=W;e:for(var Se=0,Me=O.length,tu=Me>>>1;Se<tu;){var ti=2*(Se+1)-1,yd=O[ti],ni=ti+1,nu=O[ni];if(0>i(yd,W))ni<Me&&0>i(nu,yd)?(O[Se]=nu,O[ni]=W,Se=ni):(O[Se]=yd,O[ti]=W,Se=ti);else if(ni<Me&&0>i(nu,W))O[Se]=nu,O[ni]=W,Se=ni;else break e}}return j}function i(O,j){var W=O.sortIndex-j.sortIndex;return W!==0?W:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=O)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function I(O){if(v=!1,g(O),!y)if(n(l)!==null)y=!0,gd(R);else{var j=n(u);j!==null&&_d(I,j.startTime-O)}}function R(O,j){y=!1,v&&(v=!1,m(L),L=-1),f=!0;var W=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||O&&!en());){var Se=h.callback;if(typeof Se=="function"){h.callback=null,d=h.priorityLevel;var Me=Se(h.expirationTime<=j);j=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var tu=!0;else{var ti=n(u);ti!==null&&_d(I,ti.startTime-j),tu=!1}return tu}finally{h=null,d=W,f=!1}}var k=!1,N=null,L=-1,ne=5,q=-1;function en(){return!(t.unstable_now()-q<ne)}function xo(){if(N!==null){var O=t.unstable_now();q=O;var j=!0;try{j=N(!0,O)}finally{j?Vo():(k=!1,N=null)}}else k=!1}var Vo;if(typeof p=="function")Vo=function(){p(xo)};else if(typeof MessageChannel<"u"){var ay=new MessageChannel,WR=ay.port2;ay.port1.onmessage=xo,Vo=function(){WR.postMessage(null)}}else Vo=function(){A(xo,0)};function gd(O){N=O,k||(k=!0,Vo())}function _d(O,j){L=A(function(){O(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,gd(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var W=d;d=j;try{return O()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=d;d=O;try{return j()}finally{d=W}},t.unstable_scheduleCallback=function(O,j,W){var Se=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Se+W:Se):W=Se,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=W+Me,O={id:c++,callback:j,priorityLevel:O,startTime:W,expirationTime:Me,sortIndex:-1},W>Se?(O.sortIndex=W,e(u,O),n(l)===null&&O===n(u)&&(v?(m(L),L=-1):v=!0,_d(I,W-Se))):(O.sortIndex=Me,e(l,O),y||f||(y=!0,gd(R))),O},t.unstable_shouldYield=en,t.unstable_wrapCallback=function(O){var j=d;return function(){var W=d;d=j;try{return O.apply(this,arguments)}finally{d=W}}}})($I);UI.exports=$I;var mP=UI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=Un,Ut=mP;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zI=new Set,Da={};function Hi(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Da[t]=e,t=0;t<e.length;t++)zI.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,gP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hy={},dy={};function _P(t){return Sf.call(dy,t)?!0:Sf.call(hy,t)?!1:gP.test(t)?dy[t]=!0:(hy[t]=!0,!1)}function yP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vP(t,e,n,r){if(e===null||typeof e>"u"||yP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mm=/[\-:]([a-z])/g;function gm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mm,gm);tt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mm,gm);tt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mm,gm);tt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _m(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vP(e,n,i,r)&&(n=null),r||i===null?_P(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,iu=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),jI=Symbol.for("react.provider"),qI=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),wm=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),WI=Symbol.for("react.offscreen"),fy=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,wd;function Zo(t){if(wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var Id=!1;function Ed(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function wP(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case Rf:return"Profiler";case ym:return"StrictMode";case Pf:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qI:return(t.displayName||"Context")+".Consumer";case jI:return(t._context.displayName||"Context")+".Provider";case vm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wm:return e=t.displayName||null,e!==null?e:Cf(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Cf(t(e))}catch{}}return null}function IP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cf(e);case 8:return e===ym?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function GI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EP(t){var e=GI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function su(t){t._valueTracker||(t._valueTracker=EP(t))}function KI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=GI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HI(t,e){e=e.checked,e!=null&&_m(t,"checked",e,!1)}function Df(t,e){HI(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&bf(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function my(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bf(t,e,n){(e!=="number"||nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ea(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function QI(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function YI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ou,XI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ou=ou||document.createElement("div"),ou.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ou.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TP=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){TP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function JI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function ZI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AP=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(AP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,Ds=null,bs=null;function yy(t){if(t=Rl(t)){if(typeof Ff!="function")throw Error(S(280));var e=t.stateNode;e&&(e=lh(e),Ff(t.stateNode,t.type,e))}}function eE(t){Ds?bs?bs.push(t):bs=[t]:Ds=t}function tE(){if(Ds){var t=Ds,e=bs;if(bs=Ds=null,yy(t),e)for(t=0;t<e.length;t++)yy(e[t])}}function nE(t,e){return t(e)}function rE(){}var Td=!1;function iE(t,e,n){if(Td)return t(e,n);Td=!0;try{return nE(t,e,n)}finally{Td=!1,(Ds!==null||bs!==null)&&(rE(),tE())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Uf=!1;if(jn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Uf=!1}function SP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var da=!1,rc=null,ic=!1,$f=null,RP={onError:function(t){da=!0,rc=t}};function PP(t,e,n,r,i,s,o,a,l){da=!1,rc=null,SP.apply(RP,arguments)}function kP(t,e,n,r,i,s,o,a,l){if(PP.apply(this,arguments),da){if(da){var u=rc;da=!1,rc=null}else throw Error(S(198));ic||(ic=!0,$f=u)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vy(t){if(Qi(t)!==t)throw Error(S(188))}function CP(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vy(i),t;if(s===r)return vy(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function oE(t){return t=CP(t),t!==null?aE(t):null}function aE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=aE(t);if(e!==null)return e;t=t.sibling}return null}var lE=Ut.unstable_scheduleCallback,wy=Ut.unstable_cancelCallback,NP=Ut.unstable_shouldYield,DP=Ut.unstable_requestPaint,Re=Ut.unstable_now,bP=Ut.unstable_getCurrentPriorityLevel,Em=Ut.unstable_ImmediatePriority,uE=Ut.unstable_UserBlockingPriority,sc=Ut.unstable_NormalPriority,xP=Ut.unstable_LowPriority,cE=Ut.unstable_IdlePriority,ih=null,Rn=null;function VP(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(ih,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:MP,OP=Math.log,LP=Math.LN2;function MP(t){return t>>>=0,t===0?32:31-(OP(t)/LP|0)|0}var au=64,lu=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ta(a):(s&=o,s!==0&&(r=ta(s)))}else o=n&~i,o!==0?r=ta(o):s!==0&&(r=ta(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function FP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hE(){var t=au;return au<<=1,!(au&4194240)&&(au=64),t}function Ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function $P(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function dE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fE,Am,pE,mE,gE,zf=!1,uu=[],vr=null,wr=null,Ir=null,Va=new Map,Oa=new Map,hr=[],BP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iy(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Rl(e),e!==null&&Am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zP(t,e,n,r,i){switch(e){case"focusin":return vr=Mo(vr,t,e,n,r,i),!0;case"dragenter":return wr=Mo(wr,t,e,n,r,i),!0;case"mouseover":return Ir=Mo(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Va.set(s,Mo(Va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oa.set(s,Mo(Oa.get(s)||null,t,e,n,r,i)),!0}return!1}function _E(t){var e=fi(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=sE(n),e!==null){t.blockedOn=e,gE(t.priority,function(){pE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mf=r,n.target.dispatchEvent(r),Mf=null}else return e=Rl(n),e!==null&&Am(e),t.blockedOn=n,!1;e.shift()}return!0}function Ey(t,e,n){xu(t)&&n.delete(e)}function jP(){zf=!1,vr!==null&&xu(vr)&&(vr=null),wr!==null&&xu(wr)&&(wr=null),Ir!==null&&xu(Ir)&&(Ir=null),Va.forEach(Ey),Oa.forEach(Ey)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,jP)))}function La(t){function e(i){return Fo(i,t)}if(0<uu.length){Fo(uu[0],t);for(var n=1;n<uu.length;n++){var r=uu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Fo(vr,t),wr!==null&&Fo(wr,t),Ir!==null&&Fo(Ir,t),Va.forEach(e),Oa.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)_E(n),n.blockedOn===null&&hr.shift()}var xs=Yn.ReactCurrentBatchConfig,ac=!0;function qP(t,e,n,r){var i=ee,s=xs.transition;xs.transition=null;try{ee=1,Sm(t,e,n,r)}finally{ee=i,xs.transition=s}}function WP(t,e,n,r){var i=ee,s=xs.transition;xs.transition=null;try{ee=4,Sm(t,e,n,r)}finally{ee=i,xs.transition=s}}function Sm(t,e,n,r){if(ac){var i=jf(t,e,n,r);if(i===null)Vd(t,e,r,lc,n),Iy(t,r);else if(zP(i,t,e,n,r))r.stopPropagation();else if(Iy(t,r),e&4&&-1<BP.indexOf(t)){for(;i!==null;){var s=Rl(i);if(s!==null&&fE(s),s=jf(t,e,n,r),s===null&&Vd(t,e,r,lc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var lc=null;function jf(t,e,n,r){if(lc=null,t=Im(r),t=fi(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lc=t,null}function yE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bP()){case Em:return 1;case uE:return 4;case sc:case xP:return 16;case cE:return 536870912;default:return 16}default:return 16}}var mr=null,Rm=null,Vu=null;function vE(){if(Vu)return Vu;var t,e=Rm,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vu=i.slice(t,1<r?1-r:void 0)}function Ou(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cu(){return!0}function Ty(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cu:Ty,this.isPropagationStopped=Ty,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cu)},persist:function(){},isPersistent:cu}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pm=jt(go),Sl=_e({},go,{view:0,detail:0}),GP=jt(Sl),Sd,Rd,Uo,sh=_e({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Sd=t.screenX-Uo.screenX,Rd=t.screenY-Uo.screenY):Rd=Sd=0,Uo=t),Sd)},movementY:function(t){return"movementY"in t?t.movementY:Rd}}),Ay=jt(sh),KP=_e({},sh,{dataTransfer:0}),HP=jt(KP),QP=_e({},Sl,{relatedTarget:0}),Pd=jt(QP),YP=_e({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),XP=jt(YP),JP=_e({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZP=jt(JP),ek=_e({},go,{data:0}),Sy=jt(ek),tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rk[t])?!!e[t]:!1}function km(){return ik}var sk=_e({},Sl,{key:function(t){if(t.key){var e=tk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ou(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(t){return t.type==="keypress"?Ou(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ou(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ok=jt(sk),ak=_e({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=jt(ak),lk=_e({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),uk=jt(lk),ck=_e({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),hk=jt(ck),dk=_e({},sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fk=jt(dk),pk=[9,13,27,32],Cm=jn&&"CompositionEvent"in window,fa=null;jn&&"documentMode"in document&&(fa=document.documentMode);var mk=jn&&"TextEvent"in window&&!fa,wE=jn&&(!Cm||fa&&8<fa&&11>=fa),Py=String.fromCharCode(32),ky=!1;function IE(t,e){switch(t){case"keyup":return pk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function EE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function gk(t,e){switch(t){case"compositionend":return EE(e);case"keypress":return e.which!==32?null:(ky=!0,Py);case"textInput":return t=e.data,t===Py&&ky?null:t;default:return null}}function _k(t,e){if(ys)return t==="compositionend"||!Cm&&IE(t,e)?(t=vE(),Vu=Rm=mr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wE&&e.locale!=="ko"?null:e.data;default:return null}}var yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yk[t.type]:e==="textarea"}function TE(t,e,n,r){eE(r),e=uc(e,"onChange"),0<e.length&&(n=new Pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pa=null,Ma=null;function vk(t){VE(t,0)}function oh(t){var e=Is(t);if(KI(e))return t}function wk(t,e){if(t==="change")return e}var AE=!1;if(jn){var kd;if(jn){var Cd="oninput"in document;if(!Cd){var Ny=document.createElement("div");Ny.setAttribute("oninput","return;"),Cd=typeof Ny.oninput=="function"}kd=Cd}else kd=!1;AE=kd&&(!document.documentMode||9<document.documentMode)}function Dy(){pa&&(pa.detachEvent("onpropertychange",SE),Ma=pa=null)}function SE(t){if(t.propertyName==="value"&&oh(Ma)){var e=[];TE(e,Ma,t,Im(t)),iE(vk,e)}}function Ik(t,e,n){t==="focusin"?(Dy(),pa=e,Ma=n,pa.attachEvent("onpropertychange",SE)):t==="focusout"&&Dy()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oh(Ma)}function Tk(t,e){if(t==="click")return oh(e)}function Ak(t,e){if(t==="input"||t==="change")return oh(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:Sk;function Fa(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sf.call(e,i)||!un(t[i],e[i]))return!1}return!0}function by(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xy(t,e){var n=by(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function RE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?RE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function PE(){for(var t=window,e=nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nc(t.document)}return e}function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=PE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&RE(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xy(n,s);var o=xy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pk=jn&&"documentMode"in document&&11>=document.documentMode,vs=null,qf=null,ma=null,Wf=!1;function Vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||vs==null||vs!==nc(r)||(r=vs,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ma&&Fa(ma,r)||(ma=r,r=uc(qf,"onSelect"),0<r.length&&(e=new Pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function hu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:hu("Animation","AnimationEnd"),animationiteration:hu("Animation","AnimationIteration"),animationstart:hu("Animation","AnimationStart"),transitionend:hu("Transition","TransitionEnd")},Nd={},kE={};jn&&(kE=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function ah(t){if(Nd[t])return Nd[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kE)return Nd[t]=e[n];return t}var CE=ah("animationend"),NE=ah("animationiteration"),DE=ah("animationstart"),bE=ah("transitionend"),xE=new Map,Oy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){xE.set(t,e),Hi(e,[t])}for(var Dd=0;Dd<Oy.length;Dd++){var bd=Oy[Dd],kk=bd.toLowerCase(),Ck=bd[0].toUpperCase()+bd.slice(1);qr(kk,"on"+Ck)}qr(CE,"onAnimationEnd");qr(NE,"onAnimationIteration");qr(DE,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(bE,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nk=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Ly(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kP(r,e,void 0,t),t.currentTarget=null}function VE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ly(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ly(i,a,u),s=l}}}if(ic)throw t=$f,ic=!1,$f=null,t}function oe(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(OE(e,t,2,!1),n.add(r))}function xd(t,e,n){var r=0;e&&(r|=4),OE(n,t,r,e)}var du="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[du]){t[du]=!0,zI.forEach(function(n){n!=="selectionchange"&&(Nk.has(n)||xd(n,!1,t),xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[du]||(e[du]=!0,xd("selectionchange",!1,e))}}function OE(t,e,n,r){switch(yE(e)){case 1:var i=qP;break;case 4:i=WP;break;default:i=Sm}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}iE(function(){var u=s,c=Im(n),h=[];e:{var d=xE.get(t);if(d!==void 0){var f=Pm,y=t;switch(t){case"keypress":if(Ou(n)===0)break e;case"keydown":case"keyup":f=ok;break;case"focusin":y="focus",f=Pd;break;case"focusout":y="blur",f=Pd;break;case"beforeblur":case"afterblur":f=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=HP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=uk;break;case CE:case NE:case DE:f=XP;break;case bE:f=hk;break;case"scroll":f=GP;break;case"wheel":f=fk;break;case"copy":case"cut":case"paste":f=ZP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Ry}var v=(e&4)!==0,A=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,g;p!==null;){g=p;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=xa(p,m),I!=null&&v.push($a(p,I,g)))),A)break;p=p.return}0<v.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Mf&&(y=n.relatedTarget||n.fromElement)&&(fi(y)||y[qn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?fi(y):null,y!==null&&(A=Qi(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(v=Ay,I="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ry,I="onPointerLeave",m="onPointerEnter",p="pointer"),A=f==null?d:Is(f),g=y==null?d:Is(y),d=new v(I,p+"leave",f,n,c),d.target=A,d.relatedTarget=g,I=null,fi(c)===u&&(v=new v(m,p+"enter",y,n,c),v.target=g,v.relatedTarget=A,I=v),A=I,f&&y)t:{for(v=f,m=y,p=0,g=v;g;g=is(g))p++;for(g=0,I=m;I;I=is(I))g++;for(;0<p-g;)v=is(v),p--;for(;0<g-p;)m=is(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=is(v),m=is(m)}v=null}else v=null;f!==null&&My(h,d,f,v,!1),y!==null&&A!==null&&My(h,A,y,v,!0)}}e:{if(d=u?Is(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var R=wk;else if(Cy(d))if(AE)R=Ak;else{R=Ek;var k=Ik}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Tk);if(R&&(R=R(t,u))){TE(h,R,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&bf(d,"number",d.value)}switch(k=u?Is(u):window,t){case"focusin":(Cy(k)||k.contentEditable==="true")&&(vs=k,qf=u,ma=null);break;case"focusout":ma=qf=vs=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Vy(h,n,c);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":Vy(h,n,c)}var N;if(Cm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ys?IE(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wE&&n.locale!=="ko"&&(ys||L!=="onCompositionStart"?L==="onCompositionEnd"&&ys&&(N=vE()):(mr=c,Rm="value"in mr?mr.value:mr.textContent,ys=!0)),k=uc(u,L),0<k.length&&(L=new Sy(L,t,null,n,c),h.push({event:L,listeners:k}),N?L.data=N:(N=EE(n),N!==null&&(L.data=N)))),(N=mk?gk(t,n):_k(t,n))&&(u=uc(u,"onBeforeInput"),0<u.length&&(c=new Sy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}VE(h,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xa(t,n),s!=null&&r.unshift($a(t,s,i)),s=xa(t,e),s!=null&&r.push($a(t,s,i))),t=t.return}return r}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function My(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xa(n,s),l!=null&&o.unshift($a(n,l,a))):i||(l=xa(n,s),l!=null&&o.push($a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dk=/\r\n?/g,bk=/\u0000|\uFFFD/g;function Fy(t){return(typeof t=="string"?t:""+t).replace(Dk,`
`).replace(bk,"")}function fu(t,e,n){if(e=Fy(e),Fy(t)!==e&&n)throw Error(S(425))}function cc(){}var Gf=null,Kf=null;function Hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,Vk=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(t){return Uy.resolve(null).then(t).catch(Ok)}:Qf;function Ok(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),La(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);La(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),mn="__reactFiber$"+_o,Ba="__reactProps$"+_o,qn="__reactContainer$"+_o,Yf="__reactEvents$"+_o,Lk="__reactListeners$"+_o,Mk="__reactHandles$"+_o;function fi(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$y(t);t!==null;){if(n=t[mn])return n;t=$y(t)}return e}t=n,n=t.parentNode}return null}function Rl(t){return t=t[mn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function lh(t){return t[Ba]||null}var Xf=[],Es=-1;function Wr(t){return{current:t}}function ue(t){0>Es||(t.current=Xf[Es],Xf[Es]=null,Es--)}function re(t,e){Es++,Xf[Es]=t.current,t.current=e}var Dr={},ut=Wr(Dr),kt=Wr(!1),ki=Dr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function hc(){ue(kt),ue(ut)}function By(t,e,n){if(ut.current!==Dr)throw Error(S(168));re(ut,e),re(kt,n)}function LE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,IP(t)||"Unknown",i));return _e({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ki=ut.current,re(ut,t),re(kt,kt.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=LE(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,ue(kt),ue(ut),re(ut,t)):ue(kt),re(kt,n)}var xn=null,uh=!1,Ld=!1;function ME(t){xn===null?xn=[t]:xn.push(t)}function Fk(t){uh=!0,ME(t)}function Gr(){if(!Ld&&xn!==null){Ld=!0;var t=0,e=ee;try{var n=xn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,uh=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),lE(Em,Gr),i}finally{ee=e,Ld=!1}}return null}var Ts=[],As=0,fc=null,pc=0,qt=[],Wt=0,Ci=null,Vn=1,On="";function ii(t,e){Ts[As++]=pc,Ts[As++]=fc,fc=t,pc=e}function FE(t,e,n){qt[Wt++]=Vn,qt[Wt++]=On,qt[Wt++]=Ci,Ci=t;var r=Vn;t=On;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-an(e)+i|n<<i|r,On=s+t}else Vn=1<<s|n<<i|r,On=t}function Dm(t){t.return!==null&&(ii(t,1),FE(t,1,0))}function bm(t){for(;t===fc;)fc=Ts[--As],Ts[As]=null,pc=Ts[--As],Ts[As]=null;for(;t===Ci;)Ci=qt[--Wt],qt[Wt]=null,On=qt[--Wt],qt[Wt]=null,Vn=qt[--Wt],qt[Wt]=null}var Mt=null,Ot=null,ce=!1,sn=null;function UE(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Vn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Ot=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(ce){var e=Ot;if(e){var n=e;if(!jy(t,e)){if(Jf(t))throw Error(S(418));e=Er(n.nextSibling);var r=Mt;e&&jy(t,e)?UE(r,n):(t.flags=t.flags&-4097|2,ce=!1,Mt=t)}}else{if(Jf(t))throw Error(S(418));t.flags=t.flags&-4097|2,ce=!1,Mt=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function pu(t){if(t!==Mt)return!1;if(!ce)return qy(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hf(t.type,t.memoizedProps)),e&&(e=Ot)){if(Jf(t))throw $E(),Error(S(418));for(;e;)UE(t,e),e=Er(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Mt?Er(t.stateNode.nextSibling):null;return!0}function $E(){for(var t=Ot;t;)t=Er(t.nextSibling)}function Ks(){Ot=Mt=null,ce=!1}function xm(t){sn===null?sn=[t]:sn.push(t)}var Uk=Yn.ReactCurrentBatchConfig;function nn(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var mc=Wr(null),gc=null,Ss=null,Vm=null;function Om(){Vm=Ss=gc=null}function Lm(t){var e=mc.current;ue(mc),t._currentValue=e}function ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){gc=t,Vm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Vm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(gc===null)throw Error(S(308));Ss=t,gc.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var pi=null;function Mm(t){pi===null?pi=[t]:pi.push(t)}function BE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Mm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tm(t,n)}}function Wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,r){var i=t.updateQueue;cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,f=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=_e({},h,d);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Di|=o,t.lanes=o,t.memoizedState=h}}function Gy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var jE=new BI.Component().refs;function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ch={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Sr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(ln(e,t,i,r),Lu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Sr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(ln(e,t,i,r),Lu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=Sr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(ln(e,t,r,n),Lu(e,t,r))}};function Ky(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,s):!0}function qE(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Ct(e)?ki:ut.current,r=e.contextTypes,s=(r=r!=null)?Gs(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ch.enqueueReplaceState(e,e.state,null)}function np(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=jE,Fm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Ct(e)?ki:ut.current,i.context=Gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ch.enqueueReplaceState(i,i.state,null),_c(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===jE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function mu(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qy(t){var e=t._init;return e(t._payload)}function WE(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Rr(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,I){return p===null||p.tag!==6?(p=jd(g,m.mode,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,I){var R=g.type;return R===_s?c(m,p,g.props.children,I,g.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ur&&Qy(R)===p.type)?(I=i(p,g.props),I.ref=$o(m,p,g),I.return=m,I):(I=zu(g.type,g.key,g.props,null,m.mode,I),I.ref=$o(m,p,g),I.return=m,I)}function u(m,p,g,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=qd(g,m.mode,I),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,I,R){return p===null||p.tag!==7?(p=Ti(g,m.mode,I,R),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=jd(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case iu:return g=zu(p.type,p.key,p.props,null,m.mode,g),g.ref=$o(m,null,p),g.return=m,g;case gs:return p=qd(p,m.mode,g),p.return=m,p;case ur:var I=p._init;return h(m,I(p._payload),g)}if(ea(p)||Oo(p))return p=Ti(p,m.mode,g,null),p.return=m,p;mu(m,p)}return null}function d(m,p,g,I){var R=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(m,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case iu:return g.key===R?l(m,p,g,I):null;case gs:return g.key===R?u(m,p,g,I):null;case ur:return R=g._init,d(m,p,R(g._payload),I)}if(ea(g)||Oo(g))return R!==null?null:c(m,p,g,I,null);mu(m,g)}return null}function f(m,p,g,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(p,m,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case iu:return m=m.get(I.key===null?g:I.key)||null,l(p,m,I,R);case gs:return m=m.get(I.key===null?g:I.key)||null,u(p,m,I,R);case ur:var k=I._init;return f(m,p,g,k(I._payload),R)}if(ea(I)||Oo(I))return m=m.get(g)||null,c(p,m,I,R,null);mu(p,I)}return null}function y(m,p,g,I){for(var R=null,k=null,N=p,L=p=0,ne=null;N!==null&&L<g.length;L++){N.index>L?(ne=N,N=null):ne=N.sibling;var q=d(m,N,g[L],I);if(q===null){N===null&&(N=ne);break}t&&N&&q.alternate===null&&e(m,N),p=s(q,p,L),k===null?R=q:k.sibling=q,k=q,N=ne}if(L===g.length)return n(m,N),ce&&ii(m,L),R;if(N===null){for(;L<g.length;L++)N=h(m,g[L],I),N!==null&&(p=s(N,p,L),k===null?R=N:k.sibling=N,k=N);return ce&&ii(m,L),R}for(N=r(m,N);L<g.length;L++)ne=f(N,m,L,g[L],I),ne!==null&&(t&&ne.alternate!==null&&N.delete(ne.key===null?L:ne.key),p=s(ne,p,L),k===null?R=ne:k.sibling=ne,k=ne);return t&&N.forEach(function(en){return e(m,en)}),ce&&ii(m,L),R}function v(m,p,g,I){var R=Oo(g);if(typeof R!="function")throw Error(S(150));if(g=R.call(g),g==null)throw Error(S(151));for(var k=R=null,N=p,L=p=0,ne=null,q=g.next();N!==null&&!q.done;L++,q=g.next()){N.index>L?(ne=N,N=null):ne=N.sibling;var en=d(m,N,q.value,I);if(en===null){N===null&&(N=ne);break}t&&N&&en.alternate===null&&e(m,N),p=s(en,p,L),k===null?R=en:k.sibling=en,k=en,N=ne}if(q.done)return n(m,N),ce&&ii(m,L),R;if(N===null){for(;!q.done;L++,q=g.next())q=h(m,q.value,I),q!==null&&(p=s(q,p,L),k===null?R=q:k.sibling=q,k=q);return ce&&ii(m,L),R}for(N=r(m,N);!q.done;L++,q=g.next())q=f(N,m,L,q.value,I),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?L:q.key),p=s(q,p,L),k===null?R=q:k.sibling=q,k=q);return t&&N.forEach(function(xo){return e(m,xo)}),ce&&ii(m,L),R}function A(m,p,g,I){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case iu:e:{for(var R=g.key,k=p;k!==null;){if(k.key===R){if(R=g.type,R===_s){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ur&&Qy(R)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=$o(m,k,g),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===_s?(p=Ti(g.props.children,m.mode,I,g.key),p.return=m,m=p):(I=zu(g.type,g.key,g.props,null,m.mode,I),I.ref=$o(m,p,g),I.return=m,m=I)}return o(m);case gs:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=qd(g,m.mode,I),p.return=m,m=p}return o(m);case ur:return k=g._init,A(m,p,k(g._payload),I)}if(ea(g))return y(m,p,g,I);if(Oo(g))return v(m,p,g,I);mu(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=jd(g,m.mode,I),p.return=m,m=p),o(m)):n(m,p)}return A}var Hs=WE(!0),GE=WE(!1),Pl={},Pn=Wr(Pl),za=Wr(Pl),ja=Wr(Pl);function mi(t){if(t===Pl)throw Error(S(174));return t}function Um(t,e){switch(re(ja,e),re(za,t),re(Pn,Pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vf(e,t)}ue(Pn),re(Pn,e)}function Qs(){ue(Pn),ue(za),ue(ja)}function KE(t){mi(ja.current);var e=mi(Pn.current),n=Vf(e,t.type);e!==n&&(re(za,t),re(Pn,n))}function $m(t){za.current===t&&(ue(Pn),ue(za))}var pe=Wr(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Bm(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Mu=Yn.ReactCurrentDispatcher,Fd=Yn.ReactCurrentBatchConfig,Ni=0,me=null,Ve=null,Ue=null,vc=!1,ga=!1,qa=0,$k=0;function rt(){throw Error(S(321))}function zm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function jm(t,e,n,r,i,s){if(Ni=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mu.current=t===null||t.memoizedState===null?qk:Wk,t=n(r,i),ga){s=0;do{if(ga=!1,qa=0,25<=s)throw Error(S(301));s+=1,Ue=Ve=null,e.updateQueue=null,Mu.current=Gk,t=n(r,i)}while(ga)}if(Mu.current=wc,e=Ve!==null&&Ve.next!==null,Ni=0,Ue=Ve=me=null,vc=!1,e)throw Error(S(300));return t}function qm(){var t=qa!==0;return qa=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?me.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Xt(){if(Ve===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ue===null?me.memoizedState:Ue.next;if(e!==null)Ue=e,Ve=t;else{if(t===null)throw Error(S(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ue===null?me.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Wa(t,e){return typeof e=="function"?e(t):e}function Ud(t){var e=Xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,me.lanes|=c,Di|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=Xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function HE(){}function QE(t,e){var n=me,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Wm(JE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ga(9,XE.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(S(349));Ni&30||YE(n,e,i)}return i}function YE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XE(t,e,n,r){e.value=n,e.getSnapshot=r,ZE(e)&&eT(t)}function JE(t,e,n){return n(function(){ZE(e)&&eT(t)})}function ZE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function eT(t){var e=Wn(t,1);e!==null&&ln(e,t,1,-1)}function Yy(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=jk.bind(null,me,t),[e.memoizedState,t]}function Ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tT(){return Xt().memoizedState}function Fu(t,e,n,r){var i=pn();me.flags|=t,i.memoizedState=Ga(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&zm(r,o.deps)){i.memoizedState=Ga(e,n,s,r);return}}me.flags|=t,i.memoizedState=Ga(1|e,n,s,r)}function Xy(t,e){return Fu(8390656,8,t,e)}function Wm(t,e){return hh(2048,8,t,e)}function nT(t,e){return hh(4,2,t,e)}function rT(t,e){return hh(4,4,t,e)}function iT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sT(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,iT.bind(null,e,t),n)}function Gm(){}function oT(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aT(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lT(t,e,n){return Ni&21?(un(n,e)||(n=hE(),me.lanes|=n,Di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function Bk(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Fd.transition;Fd.transition={};try{t(!1),e()}finally{ee=n,Fd.transition=r}}function uT(){return Xt().memoizedState}function zk(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cT(t))hT(e,n);else if(n=BE(t,e,n,r),n!==null){var i=pt();ln(n,t,r,i),dT(n,e,r)}}function jk(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cT(t))hT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,Mm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=BE(t,e,i,r),n!==null&&(i=pt(),ln(n,t,r,i),dT(n,e,r))}}function cT(t){var e=t.alternate;return t===me||e!==null&&e===me}function hT(t,e){ga=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tm(t,n)}}var wc={readContext:Yt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},qk={readContext:Yt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4194308,4,iT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fu(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zk.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:Yy,useDebugValue:Gm,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Yy(!1),e=t[0];return t=Bk.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=pn();if(ce){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Be===null)throw Error(S(349));Ni&30||YE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xy(JE.bind(null,r,s,t),[t]),r.flags|=2048,Ga(9,XE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Be.identifierPrefix;if(ce){var n=On,r=Vn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wk={readContext:Yt,useCallback:oT,useContext:Yt,useEffect:Wm,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:Ud,useRef:tT,useState:function(){return Ud(Wa)},useDebugValue:Gm,useDeferredValue:function(t){var e=Xt();return lT(e,Ve.memoizedState,t)},useTransition:function(){var t=Ud(Wa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:HE,useSyncExternalStore:QE,useId:uT,unstable_isNewReconciler:!1},Gk={readContext:Yt,useCallback:oT,useContext:Yt,useEffect:Wm,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:$d,useRef:tT,useState:function(){return $d(Wa)},useDebugValue:Gm,useDeferredValue:function(t){var e=Xt();return Ve===null?e.memoizedState=t:lT(e,Ve.memoizedState,t)},useTransition:function(){var t=$d(Wa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:HE,useSyncExternalStore:QE,useId:uT,unstable_isNewReconciler:!1};function Ys(t,e){try{var n="",r=e;do n+=wP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kk=typeof WeakMap=="function"?WeakMap:Map;function fT(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ec||(Ec=!0,fp=r),rp(t,e)},n}function pT(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rp(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aC.bind(null,t,e,n),e.then(t,t))}function Zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ev(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var Hk=Yn.ReactCurrentOwner,At=!1;function ct(t,e,n,r){e.child=t===null?GE(e,null,n,r):Hs(e,t.child,n,r)}function tv(t,e,n,r,i){n=n.render;var s=e.ref;return Vs(e,i),r=jm(t,e,n,r,s,i),n=qm(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(ce&&n&&Dm(e),e.flags|=1,ct(t,e,r,i),e.child)}function nv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!eg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mT(t,e,s,r,i)):(t=zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fa(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return ip(t,e,n,r,i)}function gT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ps,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Ps,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Ps,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Ps,xt),xt|=r;return ct(t,e,i,n),e.child}function _T(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ip(t,e,n,r,i){var s=Ct(n)?ki:ut.current;return s=Gs(e,s),Vs(e,i),n=jm(t,e,n,r,s,i),r=qm(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(ce&&r&&Dm(e),e.flags|=1,ct(t,e,n,i),e.child)}function rv(t,e,n,r,i){if(Ct(n)){var s=!0;dc(e)}else s=!1;if(Vs(e,i),e.stateNode===null)Uu(t,e),qE(e,n,r),np(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?ki:ut.current,u=Gs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hy(e,o,r,u),cr=!1;var d=e.memoizedState;o.state=d,_c(e,r,o,i),l=e.memoizedState,a!==r||d!==l||kt.current||cr?(typeof c=="function"&&(tp(e,n,c,r),l=e.memoizedState),(a=cr||Ky(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Ct(n)?ki:ut.current,l=Gs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Hy(e,o,r,l),cr=!1,d=e.memoizedState,o.state=d,_c(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||kt.current||cr?(typeof f=="function"&&(tp(e,n,f,r),y=e.memoizedState),(u=cr||Ky(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){_T(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),Gn(t,e,s);r=e.stateNode,Hk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function yT(t){var e=t.stateNode;e.pendingContext?By(t,e.pendingContext,e.pendingContext!==e.context):e.context&&By(t,e.context,!1),Um(t,e.containerInfo)}function iv(t,e,n,r,i){return Ks(),xm(i),e.flags|=256,ct(t,e,n,r),e.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function vT(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(pe,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ph(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ap(n),e.memoizedState=op,t):Km(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=op,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Km(t,e){return e=ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gu(t,e,n,r){return r!==null&&xm(r),Hs(e,t.child,null,n),t=Km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bd(Error(S(422))),gu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ph({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=op,s);if(!(e.mode&1))return gu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Bd(s,r,void 0),gu(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),ln(r,t,i,-1))}return Zm(),r=Bd(Error(S(421))),gu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=Er(i.nextSibling),Mt=e,ce=!0,sn=null,t!==null&&(qt[Wt++]=Vn,qt[Wt++]=On,qt[Wt++]=Ci,Vn=t.id,On=t.overflow,Ci=e),e=Km(e,r.children),e.flags|=4096,e)}function sv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ep(t.return,e,n)}function zd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sv(t,n,e);else if(t.tag===19)sv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zd(e,!0,n,null,s);break;case"together":zd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yk(t,e,n){switch(e.tag){case 3:yT(e),Ks();break;case 5:KE(e);break;case 1:Ct(e.type)&&dc(e);break;case 4:Um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?vT(t,e,n):(re(pe,pe.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,gT(t,e,n)}return Gn(t,e,n)}var IT,lp,ET,TT;IT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};ET=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(Pn.current);var s=null;switch(n){case"input":i=Nf(t,i),r=Nf(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=xf(t,i),r=xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cc)}Of(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Xk(t,e,n){var r=e.pendingProps;switch(bm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Ct(e.type)&&hc(),it(e),null;case 3:return r=e.stateNode,Qs(),ue(kt),ue(ut),Bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(gp(sn),sn=null))),lp(t,e),it(e),null;case 5:$m(e);var i=mi(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)ET(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return it(e),null}if(t=mi(Pn.current),pu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[Ba]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<na.length;i++)oe(na[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":py(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":gy(r,s),oe("invalid",r)}Of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":su(r),my(r,s,!0);break;case"textarea":su(r),_y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=YI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[Ba]=r,IT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lf(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<na.length;i++)oe(na[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":py(t,r),i=Nf(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),oe("invalid",t);break;case"textarea":gy(t,r),i=xf(t,r),oe("invalid",t);break;default:i=r}Of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&XI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&_m(t,s,l,o))}switch(n){case"input":su(t),my(t,r,!1);break;case"textarea":su(t),_y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)TT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=mi(ja.current),mi(Pn.current),pu(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:fu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return it(e),null;case 13:if(ue(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&Ot!==null&&e.mode&1&&!(e.flags&128))$E(),Ks(),e.flags|=98560,s=!1;else if(s=pu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[mn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else sn!==null&&(gp(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Oe===0&&(Oe=3):Zm())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Qs(),lp(t,e),t===null&&Ua(e.stateNode.containerInfo),it(e),null;case 10:return Lm(e.type._context),it(e),null;case 17:return Ct(e.type)&&hc(),it(e),null;case 19:if(ue(pe),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Xs&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return it(e),null}else 2*Re()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Jm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Jk(t,e){switch(bm(e),e.tag){case 1:return Ct(e.type)&&hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ue(kt),ue(ut),Bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(ue(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(pe),null;case 4:return Qs(),null;case 10:return Lm(e.type._context),null;case 22:case 23:return Jm(),null;case 24:return null;default:return null}}var _u=!1,ot=!1,Zk=typeof WeakSet=="function"?WeakSet:Set,V=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function up(t,e,n){try{n()}catch(r){ve(t,e,r)}}var ov=!1;function eC(t,e){if(Gf=ac,t=PE(),Nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},ac=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,A=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:nn(e.type,v),A);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(I){ve(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return y=ov,ov=!1,y}function _a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&up(e,n,s)}i=i.next}while(i!==r)}}function dh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AT(t){var e=t.alternate;e!==null&&(t.alternate=null,AT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[Ba],delete e[Yf],delete e[Lk],delete e[Mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ST(t){return t.tag===5||t.tag===3||t.tag===4}function av(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ST(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cc));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}var Ke=null,rn=!1;function ir(t,e,n){for(n=n.child;n!==null;)RT(t,e,n),n=n.sibling}function RT(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 5:ot||Rs(n,e);case 6:var r=Ke,i=rn;Ke=null,ir(t,e,n),Ke=r,rn=i,Ke!==null&&(rn?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(rn?(t=Ke,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),La(t)):Od(Ke,n.stateNode));break;case 4:r=Ke,i=rn,Ke=n.stateNode.containerInfo,rn=!0,ir(t,e,n),Ke=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ot&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,ir(t,e,n),ot=r):ir(t,e,n);break;default:ir(t,e,n)}}function lv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zk),e.forEach(function(r){var i=uC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,rn=!1;break e;case 3:Ke=a.stateNode.containerInfo,rn=!0;break e;case 4:Ke=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(Ke===null)throw Error(S(160));RT(s,o,i),Ke=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PT(e,t),e=e.sibling}function PT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),fn(t),r&4){try{_a(3,t,t.return),dh(3,t)}catch(v){ve(t,t.return,v)}try{_a(5,t,t.return)}catch(v){ve(t,t.return,v)}}break;case 1:tn(e,t),fn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(tn(e,t),fn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(v){ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HI(i,s),Lf(a,o);var u=Lf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ZI(i,h):c==="dangerouslySetInnerHTML"?XI(i,h):c==="children"?ba(i,h):_m(i,c,h,u)}switch(a){case"input":Df(i,s);break;case"textarea":QI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ns(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ba]=s}catch(v){ve(t,t.return,v)}}break;case 6:if(tn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ve(t,t.return,v)}}break;case 3:if(tn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(v){ve(t,t.return,v)}break;case 4:tn(e,t),fn(t);break;case 13:tn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ym=Re())),r&4&&lv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(u=ot)||c,tn(e,t),ot=u):tn(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(h=V=c;V!==null;){switch(d=V,f=d.child,d.tag){case 0:case 11:case 14:case 15:_a(4,d,d.return);break;case 1:Rs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:Rs(d,d.return);break;case 22:if(d.memoizedState!==null){cv(h);continue}}f!==null?(f.return=d,V=f):cv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=JI("display",o))}catch(v){ve(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ve(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tn(e,t),fn(t),r&4&&lv(t);break;case 21:break;default:tn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ST(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=av(t);dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=av(t);hp(t,a,o);break;default:throw Error(S(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tC(t,e,n){V=t,kT(t)}function kT(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_u;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ot;a=_u;var u=ot;if(_u=o,(ot=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?hv(i):l!==null?(l.return=o,V=l):hv(i);for(;s!==null;)V=s,kT(s),s=s.sibling;V=i,_u=a,ot=u}uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):uv(t)}}function uv(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||dh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&La(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ot||e.flags&512&&cp(e)}catch(d){ve(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function cv(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function hv(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dh(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{cp(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{cp(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var nC=Math.ceil,Ic=Yn.ReactCurrentDispatcher,Hm=Yn.ReactCurrentOwner,Qt=Yn.ReactCurrentBatchConfig,X=0,Be=null,be=null,Xe=0,xt=0,Ps=Wr(0),Oe=0,Ka=null,Di=0,fh=0,Qm=0,ya=null,Tt=null,Ym=0,Xs=1/0,bn=null,Ec=!1,fp=null,Ar=null,yu=!1,gr=null,Tc=0,va=0,pp=null,$u=-1,Bu=0;function pt(){return X&6?Re():$u!==-1?$u:$u=Re()}function Sr(t){return t.mode&1?X&2&&Xe!==0?Xe&-Xe:Uk.transition!==null?(Bu===0&&(Bu=hE()),Bu):(t=ee,t!==0||(t=window.event,t=t===void 0?16:yE(t.type)),t):1}function ln(t,e,n,r){if(50<va)throw va=0,pp=null,Error(S(185));Al(t,n,r),(!(X&2)||t!==Be)&&(t===Be&&(!(X&2)&&(fh|=n),Oe===4&&dr(t,Xe)),Nt(t,r),n===1&&X===0&&!(e.mode&1)&&(Xs=Re()+500,uh&&Gr()))}function Nt(t,e){var n=t.callbackNode;UP(t,e);var r=oc(t,t===Be?Xe:0);if(r===0)n!==null&&wy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wy(n),e===1)t.tag===0?Fk(dv.bind(null,t)):ME(dv.bind(null,t)),Vk(function(){!(X&6)&&Gr()}),n=null;else{switch(dE(r)){case 1:n=Em;break;case 4:n=uE;break;case 16:n=sc;break;case 536870912:n=cE;break;default:n=sc}n=LT(n,CT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function CT(t,e){if($u=-1,Bu=0,X&6)throw Error(S(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=oc(t,t===Be?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ac(t,r);else{e=r;var i=X;X|=2;var s=DT();(Be!==t||Xe!==e)&&(bn=null,Xs=Re()+500,Ei(t,e));do try{sC();break}catch(a){NT(t,a)}while(1);Om(),Ic.current=s,X=i,be!==null?e=0:(Be=null,Xe=0,e=Oe)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=mp(t,i))),e===1)throw n=Ka,Ei(t,0),dr(t,r),Nt(t,Re()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!rC(i)&&(e=Ac(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=mp(t,s))),e===1))throw n=Ka,Ei(t,0),dr(t,r),Nt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:si(t,Tt,bn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Ym+500-Re(),10<e)){if(oc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qf(si.bind(null,t,Tt,bn),e);break}si(t,Tt,bn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nC(r/1960))-r,10<r){t.timeoutHandle=Qf(si.bind(null,t,Tt,bn),r);break}si(t,Tt,bn);break;case 5:si(t,Tt,bn);break;default:throw Error(S(329))}}}return Nt(t,Re()),t.callbackNode===n?CT.bind(null,t):null}function mp(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=Ac(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&gp(e)),t}function gp(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function rC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Qm,e&=~fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function dv(t){if(X&6)throw Error(S(327));Os();var e=oc(t,0);if(!(e&1))return Nt(t,Re()),null;var n=Ac(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=mp(t,r))}if(n===1)throw n=Ka,Ei(t,0),dr(t,e),Nt(t,Re()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Tt,bn),Nt(t,Re()),null}function Xm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Xs=Re()+500,uh&&Gr())}}function bi(t){gr!==null&&gr.tag===0&&!(X&6)&&Os();var e=X;X|=1;var n=Qt.transition,r=ee;try{if(Qt.transition=null,ee=1,t)return t()}finally{ee=r,Qt.transition=n,X=e,!(X&6)&&Gr()}}function Jm(){xt=Ps.current,ue(Ps)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xk(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(bm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hc();break;case 3:Qs(),ue(kt),ue(ut),Bm();break;case 5:$m(r);break;case 4:Qs();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:Lm(r.type._context);break;case 22:case 23:Jm()}n=n.return}if(Be=t,be=t=Rr(t.current,null),Xe=xt=e,Oe=0,Ka=null,Qm=fh=Di=0,Tt=ya=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function NT(t,e){do{var n=be;try{if(Om(),Mu.current=wc,vc){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(Ni=0,Ue=Ve=me=null,ga=!1,qa=0,Hm.current=null,n===null||n.return===null){Oe=1,Ka=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Zy(o);if(f!==null){f.flags&=-257,ev(f,o,a,s,e),f.mode&1&&Jy(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Jy(s,u,e),Zm();break e}l=Error(S(426))}}else if(ce&&a.mode&1){var A=Zy(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),ev(A,o,a,s,e),xm(Ys(l,a));break e}}s=l=Ys(l,a),Oe!==4&&(Oe=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fT(s,l,e);Wy(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ar===null||!Ar.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=pT(s,a,e);Wy(s,I);break e}}s=s.return}while(s!==null)}xT(n)}catch(R){e=R,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function DT(){var t=Ic.current;return Ic.current=wc,t===null?wc:t}function Zm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Be===null||!(Di&268435455)&&!(fh&268435455)||dr(Be,Xe)}function Ac(t,e){var n=X;X|=2;var r=DT();(Be!==t||Xe!==e)&&(bn=null,Ei(t,e));do try{iC();break}catch(i){NT(t,i)}while(1);if(Om(),X=n,Ic.current=r,be!==null)throw Error(S(261));return Be=null,Xe=0,Oe}function iC(){for(;be!==null;)bT(be)}function sC(){for(;be!==null&&!NP();)bT(be)}function bT(t){var e=OT(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?xT(t):be=e,Hm.current=null}function xT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jk(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,be=null;return}}else if(n=Xk(n,e,xt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Oe===0&&(Oe=5)}function si(t,e,n){var r=ee,i=Qt.transition;try{Qt.transition=null,ee=1,oC(t,e,n,r)}finally{Qt.transition=i,ee=r}return null}function oC(t,e,n,r){do Os();while(gr!==null);if(X&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($P(t,s),t===Be&&(be=Be=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,LT(sc,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ee;ee=1;var a=X;X|=4,Hm.current=null,eC(t,n),PT(n,t),Rk(Kf),ac=!!Gf,Kf=Gf=null,t.current=n,tC(n),DP(),X=a,ee=o,Qt.transition=s}else t.current=n;if(yu&&(yu=!1,gr=t,Tc=i),s=t.pendingLanes,s===0&&(Ar=null),VP(n.stateNode),Nt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ec)throw Ec=!1,t=fp,fp=null,t;return Tc&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===pp?va++:(va=0,pp=t):va=0,Gr(),null}function Os(){if(gr!==null){var t=dE(Tc),e=Qt.transition,n=ee;try{if(Qt.transition=null,ee=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,Tc=0,X&6)throw Error(S(331));var i=X;for(X|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:_a(8,c,s)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var d=c.sibling,f=c.return;if(AT(c),c===u){V=null;break}if(d!==null){d.return=f,V=d;break}V=f}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,V=m;break e}V=s.return}}var p=t.current;for(V=p;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=p;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dh(9,a)}}catch(R){ve(a,a.return,R)}if(a===o){V=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,V=I;break e}V=a.return}}if(X=i,Gr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(ih,t)}catch{}r=!0}return r}finally{ee=n,Qt.transition=e}}return!1}function fv(t,e,n){e=Ys(n,e),e=fT(t,e,1),t=Tr(t,e,1),e=pt(),t!==null&&(Al(t,1,e),Nt(t,e))}function ve(t,e,n){if(t.tag===3)fv(t,t,n);else for(;e!==null;){if(e.tag===3){fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=Ys(n,t),t=pT(e,t,1),e=Tr(e,t,1),t=pt(),e!==null&&(Al(e,1,t),Nt(e,t));break}}e=e.return}}function aC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Xe&n)===n&&(Oe===4||Oe===3&&(Xe&130023424)===Xe&&500>Re()-Ym?Ei(t,0):Qm|=n),Nt(t,e)}function VT(t,e){e===0&&(t.mode&1?(e=lu,lu<<=1,!(lu&130023424)&&(lu=4194304)):e=1);var n=pt();t=Wn(t,e),t!==null&&(Al(t,e,n),Nt(t,n))}function lC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),VT(t,n)}function uC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),VT(t,n)}var OT;OT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,Yk(t,e,n);At=!!(t.flags&131072)}else At=!1,ce&&e.flags&1048576&&FE(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uu(t,e),t=e.pendingProps;var i=Gs(e,ut.current);Vs(e,n),i=jm(null,e,r,t,i,n);var s=qm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fm(e),i.updater=ch,e.stateNode=i,i._reactInternals=e,np(e,r,t,n),e=sp(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Dm(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hC(r),t=nn(r,t),i){case 0:e=ip(null,e,r,t,n);break e;case 1:e=rv(null,e,r,t,n);break e;case 11:e=tv(null,e,r,t,n);break e;case 14:e=nv(null,e,r,nn(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),rv(t,e,r,i,n);case 3:e:{if(yT(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zE(t,e),_c(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ys(Error(S(423)),e),e=iv(t,e,r,n,i);break e}else if(r!==i){i=Ys(Error(S(424)),e),e=iv(t,e,r,n,i);break e}else for(Ot=Er(e.stateNode.containerInfo.firstChild),Mt=e,ce=!0,sn=null,n=GE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===i){e=Gn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return KE(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hf(r,i)?o=null:s!==null&&Hf(r,s)&&(e.flags|=32),_T(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return vT(t,e,n);case 4:return Um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),tv(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(mc,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!kt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vs(e,n),i=Yt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),nv(t,e,r,i,n);case 15:return mT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Uu(t,e),e.tag=1,Ct(r)?(t=!0,dc(e)):t=!1,Vs(e,n),qE(e,r,i),np(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return wT(t,e,n);case 22:return gT(t,e,n)}throw Error(S(156,e.tag))};function LT(t,e){return lE(t,e)}function cC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new cC(t,e,n,r)}function eg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hC(t){if(typeof t=="function")return eg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vm)return 11;if(t===wm)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")eg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Ti(n.children,i,s,e);case ym:o=8,i|=8;break;case Rf:return t=Kt(12,n,e,i|2),t.elementType=Rf,t.lanes=s,t;case Pf:return t=Kt(13,n,e,i),t.elementType=Pf,t.lanes=s,t;case kf:return t=Kt(19,n,e,i),t.elementType=kf,t.lanes=s,t;case WI:return ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jI:o=10;break e;case qI:o=9;break e;case vm:o=11;break e;case wm:o=14;break e;case ur:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function ph(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=WI,t.lanes=n,t.stateNode={isHidden:!1},t}function jd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function qd(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ad(0),this.expirationTimes=Ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tg(t,e,n,r,i,s,o,a,l){return t=new dC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fm(s),t}function fC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function MT(t){if(!t)return Dr;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ct(n))return LE(t,n,e)}return e}function FT(t,e,n,r,i,s,o,a,l){return t=tg(n,r,!0,t,i,s,o,a,l),t.context=MT(null),n=t.current,r=pt(),i=Sr(n),s=$n(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Al(t,i,r),Nt(t,r),t}function mh(t,e,n,r){var i=e.current,s=pt(),o=Sr(i);return n=MT(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(ln(t,i,o,s),Lu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ng(t,e){pv(t,e),(t=t.alternate)&&pv(t,e)}function pC(){return null}var UT=typeof reportError=="function"?reportError:function(t){console.error(t)};function rg(t){this._internalRoot=t}gh.prototype.render=rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));mh(t,e,null,null)};gh.prototype.unmount=rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){mh(null,t,null,null)}),e[qn]=null}};function gh(t){this._internalRoot=t}gh.prototype.unstable_scheduleHydration=function(t){if(t){var e=mE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&_E(t)}};function ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mv(){}function mC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sc(o);s.call(u)}}var o=FT(e,r,t,0,null,!1,!1,"",mv);return t._reactRootContainer=o,t[qn]=o.current,Ua(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sc(l);a.call(u)}}var l=tg(t,0,!1,null,null,!1,!1,"",mv);return t._reactRootContainer=l,t[qn]=l.current,Ua(t.nodeType===8?t.parentNode:t),bi(function(){mh(e,l,n,r)}),l}function yh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sc(o);a.call(l)}}mh(e,o,t,i)}else o=mC(n,e,t,i,r);return Sc(o)}fE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(Tm(e,n|1),Nt(e,Re()),!(X&6)&&(Xs=Re()+500,Gr()))}break;case 13:bi(function(){var r=Wn(t,1);if(r!==null){var i=pt();ln(r,t,1,i)}}),ng(t,1)}};Am=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=pt();ln(e,t,134217728,n)}ng(t,134217728)}};pE=function(t){if(t.tag===13){var e=Sr(t),n=Wn(t,e);if(n!==null){var r=pt();ln(n,t,e,r)}ng(t,e)}};mE=function(){return ee};gE=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Ff=function(t,e,n){switch(e){case"input":if(Df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lh(r);if(!i)throw Error(S(90));KI(r),Df(r,i)}}}break;case"textarea":QI(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};nE=Xm;rE=bi;var gC={usingClientEntryPoint:!1,Events:[Rl,Is,lh,eE,tE,Xm]},zo={findFiberByHostInstance:fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_C={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oE(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||pC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{ih=vu.inject(_C),Rn=vu}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gC;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ig(e))throw Error(S(200));return fC(t,e,null,n)};zt.createRoot=function(t,e){if(!ig(t))throw Error(S(299));var n=!1,r="",i=UT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tg(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Ua(t.nodeType===8?t.parentNode:t),new rg(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=oE(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return bi(t)};zt.hydrate=function(t,e,n){if(!_h(e))throw Error(S(200));return yh(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!ig(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FT(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gh(e)};zt.render=function(t,e,n){if(!_h(e))throw Error(S(200));return yh(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!_h(t))throw Error(S(40));return t._reactRootContainer?(bi(function(){yh(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};zt.unstable_batchedUpdates=Xm;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return yh(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function $T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($T)}catch(t){console.error(t)}}$T(),FI.exports=zt;var yC=FI.exports,gv=yC;Af.createRoot=gv.createRoot,Af.hydrateRoot=gv.hydrateRoot;/**
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
 */const BT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new wC;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IC=function(t){const e=BT(t);return zT.encodeByteArray(e,!0)},Rc=function(t){return IC(t).replace(/\./g,"")},jT=function(t){try{return zT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Pc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!EC(n)||(t[n]=Pc(t[n],e[n]));return t}function EC(t){return t!=="__proto__"}/**
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
 */function TC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AC=()=>TC().__FIREBASE_DEFAULTS__,SC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jT(t[1]);return e&&JSON.parse(e)},vh=()=>{try{return AC()||SC()||RC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PC=t=>{var e,n;return(n=(e=vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kC=t=>{const e=PC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qT=()=>{var t;return(t=vh())===null||t===void 0?void 0:t.config},CC=t=>{var e;return(e=vh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rc(JSON.stringify(n)),Rc(JSON.stringify(o)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function sg(){var t;const e=(t=vh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xC(){return typeof self=="object"&&self.self===self}function og(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ag(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WT(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VC(){return!sg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Js(){try{return typeof indexedDB=="object"}catch{return!1}}function GT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function OC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LC="FirebaseError";class Je extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LC,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,r)}}function MC(t,e){return t.replace(FC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FC=/\{\$([^}]+)}/g;/**
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
 */function _v(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function UC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yv(s)&&yv(o)){if(!kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yv(t){return t!==null&&typeof t=="object"}/**
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
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ra(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KT(t,e){const n=new $C(t,e);return n.subscribe.bind(n)}class $C{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}/**
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
 */const zC=1e3,jC=2,qC=4*60*60*1e3,WC=.5;function vv(t,e=zC,n=jC){const r=e*Math.pow(n,t),i=Math.round(WC*r*(Math.random()-.5)*2);return Math.min(qC,r+i)}/**
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
 */function U(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class GC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HC(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KC(t){return t===oi?void 0:t}function HC(t){return t.instantiationMode==="EAGER"}/**
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
 */class QC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const lg=[];var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const HT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},YC=G.INFO,XC={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},JC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kl{constructor(e){this.name=e,this._logLevel=YC,this._logHandler=JC,this._userLogHandler=null,lg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function ZC(t){lg.forEach(e=>{e.setLogLevel(t)})}function eN(t,e){for(const n of lg){let r=null;e&&e.level&&(r=HT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:G[s].toLowerCase(),message:a,args:o,type:i.name})}}}const tN=(t,e)=>e.some(n=>t instanceof n);let wv,Iv;function nN(){return wv||(wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rN(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QT=new WeakMap,_p=new WeakMap,YT=new WeakMap,Gd=new WeakMap,ug=new WeakMap;function iN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QT.set(n,t)}).catch(()=>{}),ug.set(e,t),e}function sN(t){if(_p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_p.set(t,e)}let yp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oN(t){yp=t(yp)}function aN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return YT.set(r,e.sort?e.sort():[e]),Pr(r)}:rN().includes(t)?function(...e){return t.apply(Kd(this),e),Pr(QT.get(this))}:function(...e){return Pr(t.apply(Kd(this),e))}}function lN(t){return typeof t=="function"?aN(t):(t instanceof IDBTransaction&&sN(t),tN(t,nN())?new Proxy(t,yp):t)}function Pr(t){if(t instanceof IDBRequest)return iN(t);if(Gd.has(t))return Gd.get(t);const e=lN(t);return e!==t&&(Gd.set(t,e),ug.set(e,t)),e}const Kd=t=>ug.get(t);function uN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pr(o.result),l.oldVersion,l.newVersion,Pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cN=["get","getKey","getAll","getAllKeys","count"],hN=["put","add","delete","clear"],Hd=new Map;function Ev(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hd.get(e))return Hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Hd.set(e,s),s}oN(t=>({...t,get:(e,n,r)=>Ev(e,n)||t.get(e,n,r),has:(e,n)=>!!Ev(e,n)||t.has(e,n)}));/**
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
 */class dN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vp="@firebase/app",Tv="0.9.18";/**
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
 */const xi=new kl("@firebase/app"),pN="@firebase/app-compat",mN="@firebase/analytics-compat",gN="@firebase/analytics",_N="@firebase/app-check-compat",yN="@firebase/app-check",vN="@firebase/auth",wN="@firebase/auth-compat",IN="@firebase/database",EN="@firebase/database-compat",TN="@firebase/functions",AN="@firebase/functions-compat",SN="@firebase/installations",RN="@firebase/installations-compat",PN="@firebase/messaging",kN="@firebase/messaging-compat",CN="@firebase/performance",NN="@firebase/performance-compat",DN="@firebase/remote-config",bN="@firebase/remote-config-compat",xN="@firebase/storage",VN="@firebase/storage-compat",ON="@firebase/firestore",LN="@firebase/firestore-compat",MN="firebase",FN="10.3.1";/**
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
 */const br="[DEFAULT]",UN={[vp]:"fire-core",[pN]:"fire-core-compat",[gN]:"fire-analytics",[mN]:"fire-analytics-compat",[yN]:"fire-app-check",[_N]:"fire-app-check-compat",[vN]:"fire-auth",[wN]:"fire-auth-compat",[IN]:"fire-rtdb",[EN]:"fire-rtdb-compat",[TN]:"fire-fn",[AN]:"fire-fn-compat",[SN]:"fire-iid",[RN]:"fire-iid-compat",[PN]:"fire-fcm",[kN]:"fire-fcm-compat",[CN]:"fire-perf",[NN]:"fire-perf-compat",[DN]:"fire-rc",[bN]:"fire-rc-compat",[xN]:"fire-gcs",[VN]:"fire-gcs-compat",[ON]:"fire-fst",[LN]:"fire-fst-compat","fire-js":"fire-js",[MN]:"fire-js-all"};/**
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
 */const xr=new Map,Ha=new Map;function Cc(t,e){try{t.container.addComponent(e)}catch(n){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function XT(t,e){t.container.addOrOverwriteComponent(e)}function Jt(t){const e=t.name;if(Ha.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;Ha.set(e,t);for(const n of xr.values())Cc(n,t);return!0}function Yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $N(t,e,n=br){Yi(t,e).clearInstance(n)}function BN(){Ha.clear()}/**
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
 */const zN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Xn("app","Firebase",zN);/**
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
 */let jN=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}};/**
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
 */const Kr=FN;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=qT()),!n)throw Bn.create("no-options");const s=xr.get(i);if(s){if(kc(n,s.options)&&kc(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new QC(i);for(const l of Ha.values())o.addComponent(l);const a=new jN(n,r,o);return xr.set(i,a),a}function hg(t=br){const e=xr.get(t);if(!e&&t===br&&qT())return cg();if(!e)throw Bn.create("no-app",{appName:t});return e}function qN(){return Array.from(xr.values())}async function JT(t){const e=t.name;xr.has(e)&&(xr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function mt(t,e,n){var r;let i=(r=UN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(a.join(" "));return}Jt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ZT(t,e){if(t!==null&&typeof t!="function")throw Bn.create("invalid-log-argument");eN(t,e)}function e0(t){ZC(t)}/**
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
 */const WN="firebase-heartbeat-database",GN=1,Qa="firebase-heartbeat-store";let Qd=null;function t0(){return Qd||(Qd=uN(WN,GN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qa)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function KN(t){try{return await(await t0()).transaction(Qa).objectStore(Qa).get(n0(t))}catch(e){if(e instanceof Je)xi.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(n.message)}}}async function Av(t,e){try{const r=(await t0()).transaction(Qa,"readwrite");await r.objectStore(Qa).put(e,n0(t)),await r.done}catch(n){if(n instanceof Je)xi.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xi.warn(r.message)}}}function n0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HN=1024,QN=30*24*60*60*1e3;class YN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sv(),{heartbeatsToSend:n,unsentEntries:r}=XN(this._heartbeatsCache.heartbeats),i=Rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sv(){return new Date().toISOString().substring(0,10)}function XN(t,e=HN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Js()?GT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rv(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ZN(t){Jt(new bt("platform-logger",e=>new dN(e),"PRIVATE")),Jt(new bt("heartbeat",e=>new YN(e),"PRIVATE")),mt(vp,Tv,t),mt(vp,Tv,"esm2017"),mt("fire-js","")}ZN("");const eD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Je,SDK_VERSION:Kr,_DEFAULT_ENTRY_NAME:br,_addComponent:Cc,_addOrOverwriteComponent:XT,_apps:xr,_clearComponents:BN,_components:Ha,_getProvider:Yi,_registerComponent:Jt,_removeServiceInstance:$N,deleteApp:JT,getApp:hg,getApps:qN,initializeApp:cg,onLog:ZT,registerVersion:mt,setLogLevel:e0},Symbol.toStringTag,{value:"Module"}));var tD="firebase",nD="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(tD,nD,"app");const rD=(t,e)=>e.some(n=>t instanceof n);let Pv,kv;function iD(){return Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sD(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,wp=new WeakMap,i0=new WeakMap,Yd=new WeakMap,dg=new WeakMap;function oD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&r0.set(n,t)}).catch(()=>{}),dg.set(e,t),e}function aD(t){if(wp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wp.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lD(t){Ip=t(Ip)}function uD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return i0.set(r,e.sort?e.sort():[e]),kr(r)}:sD().includes(t)?function(...e){return t.apply(Xd(this),e),kr(r0.get(this))}:function(...e){return kr(t.apply(Xd(this),e))}}function cD(t){return typeof t=="function"?uD(t):(t instanceof IDBTransaction&&aD(t),rD(t,iD())?new Proxy(t,Ip):t)}function kr(t){if(t instanceof IDBRequest)return oD(t);if(Yd.has(t))return Yd.get(t);const e=cD(t);return e!==t&&(Yd.set(t,e),dg.set(e,t)),e}const Xd=t=>dg.get(t);function hD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dD=["get","getKey","getAll","getAllKeys","count"],fD=["put","add","delete","clear"],Jd=new Map;function Cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jd.set(e,s),s}lD(t=>({...t,get:(e,n,r)=>Cv(e,n)||t.get(e,n,r),has:(e,n)=>!!Cv(e,n)||t.has(e,n)}));const s0="@firebase/installations",fg="0.6.4";/**
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
 */const o0=1e4,a0=`w:${fg}`,l0="FIS_v2",pD="https://firebaseinstallations.googleapis.com/v1",mD=60*60*1e3,gD="installations",_D="Installations";/**
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
 */const yD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vi=new Xn(gD,_D,yD);function u0(t){return t instanceof Je&&t.code.includes("request-failed")}/**
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
 */function c0({projectId:t}){return`${pD}/projects/${t}/installations`}function h0(t){return{token:t.token,requestStatus:2,expiresIn:wD(t.expiresIn),creationTime:Date.now()}}async function d0(t,e){const r=(await e.json()).error;return Vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function f0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vD(t,{refreshToken:e}){const n=f0(t);return n.append("Authorization",ID(e)),n}async function p0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wD(t){return Number(t.replace("s","000"))}function ID(t){return`${l0} ${t}`}/**
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
 */async function ED({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=c0(t),i=f0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:l0,appId:t.appId,sdkVersion:a0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await p0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:h0(u.authToken)}}else throw await d0("Create Installation",l)}/**
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
 */function m0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AD=/^[cdef][\w-]{21}$/,Ep="";function SD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RD(t);return AD.test(n)?n:Ep}catch{return Ep}}function RD(t){return TD(t).substr(0,22)}/**
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
 */function wh(t){return`${t.appName}!${t.appId}`}/**
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
 */const g0=new Map;function _0(t,e){const n=wh(t);y0(n,e),PD(n,e)}function y0(t,e){const n=g0.get(t);if(n)for(const r of n)r(e)}function PD(t,e){const n=kD();n&&n.postMessage({key:t,fid:e}),CD()}let gi=null;function kD(){return!gi&&"BroadcastChannel"in self&&(gi=new BroadcastChannel("[Firebase] FID Change"),gi.onmessage=t=>{y0(t.data.key,t.data.fid)}),gi}function CD(){g0.size===0&&gi&&(gi.close(),gi=null)}/**
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
 */const ND="firebase-installations-database",DD=1,Oi="firebase-installations-store";let Zd=null;function pg(){return Zd||(Zd=hD(ND,DD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oi)}}})),Zd}async function Nc(t,e){const n=wh(t),i=(await pg()).transaction(Oi,"readwrite"),s=i.objectStore(Oi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&_0(t,e.fid),e}async function v0(t){const e=wh(t),r=(await pg()).transaction(Oi,"readwrite");await r.objectStore(Oi).delete(e),await r.done}async function Ih(t,e){const n=wh(t),i=(await pg()).transaction(Oi,"readwrite"),s=i.objectStore(Oi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&_0(t,a.fid),a}/**
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
 */async function mg(t){let e;const n=await Ih(t.appConfig,r=>{const i=bD(r),s=xD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ep?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bD(t){const e=t||{fid:SD(),registrationStatus:0};return w0(e)}function xD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:OD(t)}:{installationEntry:e}}async function VD(t,e){try{const n=await ED(t,e);return Nc(t.appConfig,n)}catch(n){throw u0(n)&&n.customData.serverCode===409?await v0(t.appConfig):await Nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function OD(t){let e=await Nv(t.appConfig);for(;e.registrationStatus===1;)await m0(100),e=await Nv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mg(t);return r||n}return e}function Nv(t){return Ih(t,e=>{if(!e)throw Vi.create("installation-not-found");return w0(e)})}function w0(t){return LD(t)?{fid:t.fid,registrationStatus:0}:t}function LD(t){return t.registrationStatus===1&&t.registrationTime+o0<Date.now()}/**
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
 */async function MD({appConfig:t,heartbeatServiceProvider:e},n){const r=FD(t,n),i=vD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:a0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await p0(()=>fetch(r,a));if(l.ok){const u=await l.json();return h0(u)}else throw await d0("Generate Auth Token",l)}function FD(t,{fid:e}){return`${c0(t)}/${e}/authTokens:generate`}/**
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
 */async function gg(t,e=!1){let n;const r=await Ih(t.appConfig,s=>{if(!I0(s))throw Vi.create("not-registered");const o=s.authToken;if(!e&&BD(o))return s;if(o.requestStatus===1)return n=UD(t,e),s;{if(!navigator.onLine)throw Vi.create("app-offline");const a=jD(s);return n=$D(t,a),a}});return n?await n:r.authToken}async function UD(t,e){let n=await Dv(t.appConfig);for(;n.authToken.requestStatus===1;)await m0(100),n=await Dv(t.appConfig);const r=n.authToken;return r.requestStatus===0?gg(t,e):r}function Dv(t){return Ih(t,e=>{if(!I0(e))throw Vi.create("not-registered");const n=e.authToken;return qD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $D(t,e){try{const n=await MD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Nc(t.appConfig,r),n}catch(n){if(u0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await v0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nc(t.appConfig,r)}throw n}}function I0(t){return t!==void 0&&t.registrationStatus===2}function BD(t){return t.requestStatus===2&&!zD(t)}function zD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mD}function jD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function qD(t){return t.requestStatus===1&&t.requestTime+o0<Date.now()}/**
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
 */async function WD(t){const e=t,{installationEntry:n,registrationPromise:r}=await mg(e);return r?r.catch(console.error):gg(e).catch(console.error),n.fid}/**
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
 */async function GD(t,e=!1){const n=t;return await KD(n),(await gg(n,e)).token}async function KD(t){const{registrationPromise:e}=await mg(t);e&&await e}/**
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
 */function HD(t){if(!t||!t.options)throw ef("App Configuration");if(!t.name)throw ef("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ef(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ef(t){return Vi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="installations",QD="installations-internal",YD=t=>{const e=t.getProvider("app").getImmediate(),n=HD(e),r=Yi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XD=t=>{const e=t.getProvider("app").getImmediate(),n=Yi(e,E0).getImmediate();return{getId:()=>WD(n),getToken:i=>GD(n,i)}};function JD(){Jt(new bt(E0,YD,"PUBLIC")),Jt(new bt(QD,XD,"PRIVATE"))}JD();mt(s0,fg);mt(s0,fg,"esm2017");/**
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
 */const Dc="analytics",ZD="firebase_id",eb="origin",tb=60*1e3,nb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_g="https://www.googletagmanager.com/gtag/js";/**
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
 */const Dt=new kl("@firebase/analytics");/**
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
 */const rb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new Xn("analytics","Analytics",rb);/**
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
 */function ib(t){if(!t.startsWith(_g)){const e=Ft.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function T0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ob(t,e){const n=sb("firebase-js-sdk-policy",{createScriptURL:ib}),r=document.createElement("script"),i=`${_g}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ab(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await T0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Dt.error(a)}t("config",i,s)}async function ub(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await T0(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Dt.error(s)}}function cb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await ub(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await lb(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Dt.error(a)}}return i}function hb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=cb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function db(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_g)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=30,pb=1e3;class mb{constructor(e={},n=pb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const A0=new mb;function gb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _b(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gb(r)},s=nb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yb(t,e=A0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ib;return setTimeout(async()=>{a.abort()},n!==void 0?n:tb),S0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function S0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=A0){var s;const{appId:o,measurementId:a}=t;try{await vb(r,e)}catch(l){if(a)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _b(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!wb(u)){if(i.deleteThrottleMetadata(o),a)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?vv(n,i.intervalMillis,fb):vv(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Dt.debug(`Calling attemptFetch again in ${c} millis`),S0(t,h,r,i)}}function vb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wb(t){if(!(t instanceof Je)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ib{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Eb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(){if(Js())try{await GT()}catch(t){return Dt.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ab(t,e,n,r,i,s,o){var a;const l=yb(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Dt.error(f)),e.push(l);const u=Tb().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);db(s)||ob(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[eb]="firebase",d.update=!0,h!=null&&(d[ZD]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class Sb{constructor(e){this.app=e}_delete(){return delete wa[this.app.options.appId],Promise.resolve()}}let wa={},bv=[];const xv={};let tf="dataLayer",Rb="gtag",Vv,R0,Ov=!1;function Pb(){const t=[];if(og()&&t.push("This is a browser extension environment."),OC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function kb(t,e,n){Pb();const r=t.options.appId;if(!r)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(wa[r]!=null)throw Ft.create("already-exists",{id:r});if(!Ov){ab(tf);const{wrappedGtag:s,gtagCore:o}=hb(wa,bv,xv,tf,Rb);R0=s,Vv=o,Ov=!0}return wa[r]=Ab(t,bv,xv,e,Vv,tf,n),new Sb(t)}function Cb(t=hg()){t=U(t);const e=Yi(t,Dc);return e.isInitialized()?e.getImmediate():Nb(t)}function Nb(t,e={}){const n=Yi(t,Dc);if(n.isInitialized()){const i=n.getImmediate();if(kc(e,n.getOptions()))return i;throw Ft.create("already-initialized")}return n.initialize({options:e})}function Db(t,e,n,r){t=U(t),Eb(R0,wa[t.app.options.appId],e,n,r).catch(i=>Dt.error(i))}const Lv="@firebase/analytics",Mv="0.10.0";function bb(){Jt(new bt(Dc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return kb(r,i,n)},"PUBLIC")),Jt(new bt("analytics-internal",t,"PRIVATE")),mt(Lv,Mv),mt(Lv,Mv,"esm2017");function t(e){try{const n=e.getProvider(Dc).getImmediate();return{logEvent:(r,i,s)=>Db(n,r,i,s)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}bb();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this._delegate=e,this.firebase=n,Cc(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),JT(this._delegate)))}_getService(e,n=br){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=br){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Cc(this._delegate,e)}_addOrOverwriteComponent(e){XT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Vb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fv=new Xn("app-compat","Firebase",Vb);/**
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
 */function Ob(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:mt,setLogLevel:e0,onLog:ZT,apps:null,SDK_VERSION:Kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:eD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||br,!_v(e,u))throw Fv.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=cg(u,c);if(_v(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(Jt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Fv.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Pc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function P0(){const t=Ob(xb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:P0,extendNamespace:e,createSubscribe:KT,ErrorFactory:Xn,deepExtend:Pc});function e(n){Pc(t,n)}return t}const Lb=P0();/**
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
 */const Uv=new kl("@firebase/app-compat"),Mb="@firebase/app-compat",Fb="0.2.18";/**
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
 */function Ub(t){mt(Mb,Fb,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(xC()&&self.firebase!==void 0){Uv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Uv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Jn=Lb;Ub();var $b="firebase",Bb="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn.registerVersion($b,Bb,"app-compat");function yg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const jo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ss={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){return t!==void 0&&t.getResponse!==void 0}function Bv(t){return t!==void 0&&t.enterprise!==void 0}class zb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function k0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qb=jb,Wb=k0,C0=new Xn("auth","Firebase",k0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new kl("@firebase/auth");function Gb(t,...e){bc.logLevel<=G.WARN&&bc.warn(`Auth (${Kr}): ${t}`,...e)}function ju(t,...e){bc.logLevel<=G.ERROR&&bc.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,...e){throw vg(t,...e)}function Ze(t,...e){return vg(t,...e)}function N0(t,e,n){const r=Object.assign(Object.assign({},Wb()),{[e]:n});return new Xn("auth","Firebase",r).create(e,{appName:t.name})}function vo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nt(t,"argument-error"),N0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return C0.create(t,...e)}function P(t,e,...n){if(!t)throw vg(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ju(e),new Error(e)}function cn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wg(){return zv()==="http:"||zv()==="https:"}function zv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||og()||"connection"in navigator)?navigator.onLine:!0}function Hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=bC()||ag()}get(){return Kb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Cl(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xe(t,e,n,r,i={}){return b0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D0.fetch()(x0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function b0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qb),e);try{const i=new Xb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ia(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw N0(t,c,u);nt(t,c)}}catch(i){if(i instanceof Je)throw i;nt(t,"network-request-failed",{message:String(i)})}}async function Zn(t,e,n,r,i={}){const s=await xe(t,e,n,r,i);return"mfaPendingCredential"in s&&nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function x0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ig(t.config,i):`${t.config.apiScheme}://${i}`}class Xb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),Yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ze(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t){return(await xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Zb(t,e){return xe(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){return xe(t,"POST","/v1/accounts:delete",e)}async function tx(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function nx(t,e){return xe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Eh(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ia(nf(i.auth_time)),issuedAtTime:Ia(nf(i.iat)),expirationTime:Ia(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function Eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=jT(n);return i?JSON.parse(i):(ju("Failed to decode base64 JWT payload"),null)}catch(i){return ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ix(t){const e=Eh(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Je&&sx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kn(t,nx(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ux(s.providerUserInfo):[],a=lx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ax(t){const e=U(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ux(t){return t.map(e=>{var{providerId:n}=e,r=yg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){const n=await b0(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=x0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ix(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ja;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ai{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rx(this,e)}reload(){return ax(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:R,providerData:k,stsTokenManager:N}=n;P(g&&N,e,"internal-error");const L=Ja.fromJSON(this.name,N);P(typeof g=="string",e,"internal-error"),sr(h,e.name),sr(d,e.name),P(typeof I=="boolean",e,"internal-error"),P(typeof R=="boolean",e,"internal-error"),sr(f,e.name),sr(y,e.name),sr(v,e.name),sr(A,e.name),sr(m,e.name),sr(p,e.name);const ne=new Ai({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:L,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(ne.providerData=k.map(q=>Object.assign({},q))),A&&(ne._redirectEventId=A),ne}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ja;i.updateFromServerResponse(n);const s=new Ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;function Lt(t){cn(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
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
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const Zs=O0;/**
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
 */function Si(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Lt(Zs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Lt(Zs);const o=Si(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ai._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U0(e))return"Blackberry";if($0(e))return"Webos";if(Eg(e))return"Safari";if((e.includes("chrome/")||M0(e))&&!e.includes("edge/"))return"Chrome";if(Nl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L0(t=ye()){return/firefox\//i.test(t)}function Eg(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M0(t=ye()){return/crios\//i.test(t)}function F0(t=ye()){return/iemobile/i.test(t)}function Nl(t=ye()){return/android/i.test(t)}function U0(t=ye()){return/blackberry/i.test(t)}function $0(t=ye()){return/webos/i.test(t)}function wo(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hx(t=ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function dx(t=ye()){var e;return wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fx(){return WT()&&document.documentMode===10}function B0(t=ye()){return wo(t)||Nl(t)||$0(t)||U0(t)||/windows phone/i.test(t)||F0(t)}function px(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e=[]){let n;switch(t){case"Browser":n=qv(ye());break;case"Worker":n=`${qv(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gx(t,e={}){return xe(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
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
 */const _x=6;class yx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_x,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wv(this),this.idTokenSubscription=new Wv(this),this.beforeStateQueue=new mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gx(this),n=new yx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ee(t){return U(t)}class Wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=KT(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wx().appendChild(r)})}function j0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ix="https://www.google.com/recaptcha/enterprise.js?render=",Ex="recaptcha-enterprise",Tx="NO_RECAPTCHA";class Ax{constructor(e){this.type=Ex,this.auth=Ee(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Zb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Bv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Tx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Bv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tg(Ix+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vr(t,e,n,r=!1){const i=new Ax(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function Sx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Rx(t,e,n){const r=Ee(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=q0(e),{host:o,port:a}=Px(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kx()}function q0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Px(t){const e=q0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gv(o)}}}function Gv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e){return xe(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function G0(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function Cx(t,e){return xe(t,"POST","/v1/accounts:update",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(t,e){return Zn(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function Th(t,e){return xe(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function Nx(t,e){return Th(t,e)}async function sf(t,e){return Th(t,e)}async function of(t,e){return Th(t,e)}async function Dx(t,e){return Th(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){return Zn(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function xx(t,e){return Zn(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Io{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Vr(e,r,"signInWithPassword");return rf(e,i)}else return rf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Vr(e,r,"signInWithPassword");return rf(e,s)}else return Promise.reject(i)});case"emailLink":return bx(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return G0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xx(e,{idToken:n,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e){return Zn(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="http://localhost";class Cn extends Io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return xe(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function Lx(t,e){return Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function Mx(t,e){const n=await Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw ia(t,"account-exists-with-different-credential",n);return n}const Fx={USER_NOT_FOUND:"user-not-found"};async function Ux(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),Fx)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Io{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ri({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ri({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Lx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Mx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ux(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ri({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bx(t){const e=ks(ra(t)).link,n=e?ks(ra(e)).deep_link_id:null,r=ks(ra(t)).deep_link_id;return(r?ks(ra(r)).link:null)||r||n||e||t}class Ah{constructor(e){var n,r,i,s,o,a;const l=ks(ra(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=$x((i=l.mode)!==null&&i!==void 0?i:null);P(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bx(e);try{return new Ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,n){return Za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ah.parseLink(n);return P(r,"argument-error"),Za._fromEmailAndCode(e,r.code,r.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ms extends Eo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),Cn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),Cn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ms.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ms.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ms(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Eo{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Eo{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="http://localhost";class eo extends Io{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new eo(r,s)}static _create(e,n){return new eo(e,n)}buildRequest(){return{requestUri:zx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="saml.";class xc extends er{constructor(e){P(e.startsWith(jx),"argument-error"),super(e)}static credentialFromResult(e){return xc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return xc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=eo.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return eo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(t,e){return Zn(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ai._fromIdTokenResponse(e,r,i),o=Kv(r);return new Zt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kv(r);return new Zt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t){var e;const n=Ee(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Zt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await qu(n,{returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Je{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vc(e,n,r,i)}}function K0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Wx(t,e){const n=U(t);await Sh(!0,n,e);const{providerUserInfo:r}=await tx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=H0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ag(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}async function Sh(t,e,n){await Xa(e);const r=H0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function Q0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Kn(t,K0(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Eh(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(t,e,n=!1){const r="signIn",i=await K0(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Rh(t,e){return Y0(Ee(t),e)}async function X0(t,e){const n=U(t);return await Sh(!1,n,e.providerId),Ag(n,e)}async function J0(t,e){return Q0(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){return Zn(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e){const n=Ee(t),r=await Gx(n,{token:e,returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Sg._fromServerResponse(e,n):"totpInfo"in n?Rg._fromServerResponse(e,n):nt(e,"internal-error")}}class Sg extends Dl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Sg(n)}}class Rg extends Dl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Rg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t){const e=Ee(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hx(t,e,n){var r;const i=Ee(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Vr(i,s,"getOobCode",!0);n&&Fs(i,o,n),await sf(i,o)}else n&&Fs(i,s,n),await sf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Vr(i,s,"getOobCode",!0);n&&Fs(i,a,n),await sf(i,a)}else return Promise.reject(o)})}async function Qx(t,e,n){await W0(U(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}async function Yx(t,e){await Cx(U(t),{oobCode:e})}async function Z0(t,e){const n=U(t),r=await W0(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Dl._fromServerResponse(Ee(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Xx(t,e){const{data:n}=await Z0(U(t),e);return n.email}async function Jx(t,e,n){var r;const i=Ee(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Vr(i,s,"signUpPassword");o=qu(i,u)}else o=qu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Vr(i,s,"signUpPassword");return qu(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Pg(t),u}),l=await Zt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Zx(t,e,n){return Rh(U(t),Hr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(t,e,n){var r;const i=Ee(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){P(l.handleCodeInApp,i,"argument-error"),l&&Fs(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Vr(i,s,"getOobCode",!0);o(a,n),await of(i,a)}else o(s,n),await of(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Vr(i,s,"getOobCode",!0);o(l,n),await of(i,l)}else return Promise.reject(a)})}function tV(t,e){const n=Ah.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function nV(t,e,n){const r=U(t),i=Hr.credentialWithLink(e,n||Ya());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rV(t,e){return xe(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iV(t,e){const n=wg()?Ya():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await rV(U(t),r);return i||[]}async function sV(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Fs(n.auth,i,e);const{email:s}=await Nx(n.auth,i);s!==t.email&&await t.reload()}async function oV(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Fs(r.auth,s,n);const{email:o}=await Dx(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aV(t,e){return xe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kn(r,aV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function uV(t,e){return eA(U(t),e,null)}function cV(t,e){return eA(U(t),null,e)}async function eA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Kn(t,G0(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function hV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Eh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Us(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new dV(s,i);case"github.com":return new fV(s,i);case"google.com":return new pV(s,i);case"twitter.com":return new mV(s,i,t.screenName||null);case"custom":case"anonymous":return new Us(s,null);default:return new Us(s,r,i)}}class Us{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class tA extends Us{constructor(e,n,r,i){super(e,n,r),this.username=i}}class dV extends Us{constructor(e,n){super(e,"facebook.com",n)}}class fV extends tA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class pV extends Us{constructor(e,n){super(e,"google.com",n)}}class mV extends tA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function gV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:hV(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new _i("enroll",e,n)}static _fromMfaPendingCredential(e){return new _i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ee(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Dl._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=_i._fromMfaPendingCredential(i.mfaPendingCredential);return new kg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Zt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return P(n.user,r,"internal-error"),Zt._forOperation(n.user,n.operationType,u);default:nt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function _V(t,e){var n;const r=U(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),kg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function vV(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function wV(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class Cg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Dl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Cg(e)}async getSession(){return _i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Kn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Kn(this.user,wV(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const af=new WeakMap;function IV(t){const e=U(t);return af.has(e)||af.set(e,Cg._fromUser(e)),af.get(e)}const Oc="__sak";/**
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
 */class nA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(){const t=ye();return Eg(t)||wo(t)}const TV=1e3,AV=10;class rA extends nA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EV()&&px(),this.fallbackToPolling=B0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rA.type="LOCAL";const Ng=rA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA extends nA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iA.type="SESSION";const Li=iA;/**
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
 */function SV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=bl("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function PV(t){De().location.href=t}/**
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
 */function Dg(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function kV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NV(){return Dg()?self:null}/**
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
 */const sA="firebaseLocalStorageDb",DV=1,Lc="firebaseLocalStorage",oA="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(t,e){return t.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function bV(){const t=indexedDB.deleteDatabase(sA);return new xl(t).toPromise()}function Tp(){const t=indexedDB.open(sA,DV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lc,{keyPath:oA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await bV(),e(await Tp()))})})}async function Hv(t,e,n){const r=kh(t,!0).put({[oA]:e,value:n});return new xl(r).toPromise()}async function xV(t,e){const n=kh(t,!1).get(e),r=await new xl(n).toPromise();return r===void 0?null:r.value}function Qv(t,e){const n=kh(t,!0).delete(e);return new xl(n).toPromise()}const VV=800,OV=3;class aA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(NV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kV(),!this.activeServiceWorker)return;this.sender=new RV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await Hv(e,Oc,"1"),await Qv(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kh(i,!1).getAll();return new xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aA.type="LOCAL";const el=aA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function MV(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=500,UV=6e4,wu=1e12;class $V{constructor(e){this.auth=e,this.counter=wu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new BV(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class BV{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=zV(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},UV)},FV))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function zV(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=j0("rcb"),jV=new Cl(3e4,6e4),qV="https://www.google.com/recaptcha/api.js?";class WV{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=De().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(GV(n),e,"argument-error"),this.shouldResolveImmediately(n)&&$v(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,i)=>{const s=De().setTimeout(()=>{i(Ze(e,"network-request-failed"))},jV.get());De()[lf]=()=>{De().clearTimeout(s),delete De()[lf];const a=De().grecaptcha;if(!a||!$v(a)){i(Ze(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${qV}?${yo({onload:lf,render:"explicit",hl:n})}`;Tg(o).catch(()=>{clearTimeout(s),i(Ze(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=De().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function GV(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class KV{async load(e){return new $V(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="recaptcha",HV={theme:"light",type:"image"};let QV=class{constructor(e,n,r=Object.assign({},HV)){this.parameters=r,this.type=lA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ee(e),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new KV:new WV,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(wg()&&!Dg(),this.auth,"internal-error"),await YV(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Jb(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function YV(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ri._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function XV(t,e,n){const r=Ee(t),i=await Ch(r,e,U(n));return new bg(i,s=>Rh(r,s))}async function JV(t,e,n){const r=U(t);await Sh(!1,r,"phone");const i=await Ch(r.auth,e,U(n));return new bg(i,s=>X0(r,s))}async function ZV(t,e,n){const r=U(t),i=await Ch(r.auth,e,U(n));return new bg(i,s=>J0(r,s))}async function Ch(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===lA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await yV(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await LV(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Ox(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function eO(t,e){await Ag(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi=class Wu{constructor(e){this.providerId=Wu.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,n){return Ch(this.auth,e,U(n))}static credential(e,n){return Ri._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Wu.credentialFromTaggedObject(n)}static credentialFromError(e){return Wu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ri._fromTokenResponse(n,r):null}};Mi.PROVIDER_ID="phone";Mi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Xi(t,e){return e?Lt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xg extends Io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tO(t){return Y0(t.auth,new xg(t),t.bypassAuthState)}function nO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Q0(n,new xg(t),t.bypassAuthState)}async function rO(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Ag(n,new xg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tO;case"linkViaPopup":case"linkViaRedirect":return rO;case"reauthViaPopup":case"reauthViaRedirect":return nO;default:nt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Cl(2e3,1e4);async function sO(t,e,n){const r=Ee(t);vo(t,e,er);const i=Xi(r,n);return new Ln(r,"signInViaPopup",e,i).executeNotNull()}async function oO(t,e,n){const r=U(t);vo(r.auth,e,er);const i=Xi(r.auth,n);return new Ln(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function aO(t,e,n){const r=U(t);vo(r.auth,e,er);const i=Xi(r.auth,n);return new Ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ln extends uA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iO.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="pendingRedirect",Ea=new Map;class uO extends uA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ea.get(this.auth._key());if(!e){try{const r=await cO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ea.set(this.auth._key(),e)}return this.bypassAuthState||Ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cO(t,e){const n=hA(e),r=cA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Vg(t,e){return cA(t)._set(hA(e),"true")}function hO(){Ea.clear()}function Og(t,e){Ea.set(t._key(),e)}function cA(t){return Lt(t._redirectPersistence)}function hA(t){return Si(lO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t,e,n){return fO(t,e,n)}async function fO(t,e,n){const r=Ee(t);vo(t,e,er),await r._initializationPromise;const i=Xi(r,n);return await Vg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function pO(t,e,n){return mO(t,e,n)}async function mO(t,e,n){const r=U(t);vo(r.auth,e,er),await r.auth._initializationPromise;const i=Xi(r.auth,n);await Vg(i,r.auth);const s=await dA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function gO(t,e,n){return _O(t,e,n)}async function _O(t,e,n){const r=U(t);vo(r.auth,e,er),await r.auth._initializationPromise;const i=Xi(r.auth,n);await Sh(!1,r,e.providerId),await Vg(i,r.auth);const s=await dA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function yO(t,e){return await Ee(t)._initializationPromise,Nh(t,e,!1)}async function Nh(t,e,n=!1){const r=Ee(t),i=Xi(r,e),o=await new uO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function dA(t){const e=bl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yv(e))}saveEventToCache(e){this.cachedEventUids.add(Yv(e)),this.lastProcessedEventTime=Date.now()}}function Yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e={}){return xe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EO=/^https?/;async function TO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mA(t);for(const n of e)try{if(AO(n))return}catch{}nt(t,"unauthorized-domain")}function AO(t){const e=Ya(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EO.test(n))return!1;if(IO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SO=new Cl(3e4,6e4);function Xv(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RO(t){return new Promise((e,n)=>{var r,i,s;function o(){Xv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xv(),n(Ze(t,"network-request-failed"))},timeout:SO.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const a=j0("iframefcb");return De()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Tg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function PO(t){return Gu=Gu||RO(t),Gu}/**
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
 */const kO=new Cl(5e3,15e3),CO="__/auth/iframe",NO="emulator/auth/iframe",DO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xO(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ig(e,NO):`https://${t.config.authDomain}/${CO}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=bO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yo(r).slice(1)}`}async function VO(t){const e=await PO(t),n=De().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:xO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=De().setTimeout(()=>{s(o)},kO.get());function l(){De().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const OO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LO=500,MO=600,FO="_blank",UO="http://localhost";class Jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $O(t,e,n,r=LO,i=MO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ye().toLowerCase();n&&(a=M0(u)?FO:n),L0(u)&&(e=e||UO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(dx(u)&&a!=="_self")return BO(e||"",a),new Jv(null);const h=window.open(e||"",a,c);P(h,t,"popup-blocked");try{h.focus()}catch{}return new Jv(h)}function BO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zO="__/auth/handler",jO="emulator/auth/handler",qO=encodeURIComponent("fac");async function Ap(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof er){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Eo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qO}=${encodeURIComponent(l)}`:"";return`${WO(t)}?${yo(a).slice(1)}${u}`}function WO({config:t}){return t.emulator?Ig(t,jO):`https://${t.authDomain}/${zO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="webStorageSupport";class GO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Li,this._completeRedirectFn=Nh,this._overrideRedirectResult=Og}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ap(e,n,r,Ya(),i);return $O(e,o,bl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ap(e,n,r,Ya(),i);return PV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VO(e),r=new fA(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uf,{type:uf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uf];o!==void 0&&n(!!o),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B0()||Eg()||wo()}}const KO=GO;class HO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return In("unexpected MultiFactorSessionType")}}}class Lg extends HO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lg(e)}_finalizeEnroll(e,n,r){return vV(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return MV(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gA{constructor(){}static assertion(e){return Lg._fromCredential(e)}}gA.FACTOR_ID="phone";var Zv="@firebase/auth",ew="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XO(t){Jt(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z0(t)},u=new vx(r,i,s,l);return Sx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new bt("auth-internal",e=>{const n=Ee(e.getProvider("auth").getImmediate());return(r=>new QO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Zv,ew,YO(t)),mt(Zv,ew,"esm2017")}/**
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
 */const JO=5*60;CC("authIdTokenMaxAge");XO("Browser");/**
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
 */function Fi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=2e3;async function eL(t,e,n){var r;const{BuildInfo:i}=Fi();cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await sL(e.sessionId),o={};return wo()?o.ibi=i.packageName:Nl()?o.apn=i.packageName:nt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ap(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function tL(t){const{BuildInfo:e}=Fi(),n={};wo()?n.iosBundleId=e.packageName:Nl()?n.androidPackageName=e.packageName:nt(t,"operation-not-supported-in-this-environment"),await mA(t,n)}function nL(t){const{cordova:e}=Fi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,hx()?"_blank":"_system","location=yes"),n(i)})})}async function rL(t,e,n){const{cordova:r}=Fi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ze(t,"redirect-cancelled-by-user"))},ZO))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Nl()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function iL(t){var e,n,r,i,s,o,a,l,u,c;const h=Fi();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function sL(t){const e=oL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function oL(t){if(cn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=20;class lL extends fA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function uL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:dL(),postBody:null,tenantId:t.tenantId,error:Ze(t,"no-auth-event")}}function cL(t,e){return Sp()._set(Rp(t),e)}async function tw(t){const e=await Sp()._get(Rp(t));return e&&await Sp()._remove(Rp(t)),e}function hL(t,e){var n,r;const i=pL(e);if(i.includes("/__/auth/callback")){const s=Ku(i),o=s.firebaseError?fL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ze(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function dL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<aL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Sp(){return Lt(Ng)}function Rp(t){return Si("authEvent",t.config.apiKey,t.name)}function fL(t){try{return JSON.parse(t)}catch{return null}}function pL(t){const e=Ku(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ku(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ku(i).link||i||r||n||t}function Ku(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ks(n.join("?"))}/**
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
 */const mL=500;class gL{constructor(){this._redirectPersistence=Li,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nh,this._overrideRedirectResult=Og}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new lL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){iL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),hO(),await this._originValidation(e);const o=uL(e,r,i);await cL(e,o);const a=await eL(e,o,n),l=await nL(a);return rL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Fi(),o=setTimeout(async()=>{await tw(e),n.onEvent(nw())},mL),a=async c=>{clearTimeout(o);const h=await tw(e);let d=null;h&&(c!=null&&c.url)&&(d=hL(h,c.url)),n.onEvent(d||nw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Fi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const _L=gL;function nw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ze("no-auth-event")}}/**
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
 */function yL(t,e){Ee(t)._logFramework(e)}var vL="@firebase/auth-compat",wL="0.4.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=1e3;function Ta(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function EL(){return Ta()==="http:"||Ta()==="https:"}function _A(t=ye()){return!!((Ta()==="file:"||Ta()==="ionic:"||Ta()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function TL(){return ag()||sg()}function AL(){return WT()&&(document==null?void 0:document.documentMode)===11}function SL(t=ye()){return/Edge\/\d+/.test(t)}function RL(t=ye()){return AL()||SL(t)}function yA(){try{const t=self.localStorage,e=bl();if(t)return t.setItem(e,"1"),t.removeItem(e),RL()?Js():!0}catch{return Mg()&&Js()}return!1}function Mg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cf(){return(EL()||og()||_A())&&!TL()&&yA()&&!Mg()}function vA(){return _A()&&typeof document<"u"}async function PL(){return vA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},IL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function kL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt={LOCAL:"local",NONE:"none",SESSION:"session"},qo=P,wA="persistence";function CL(t,e){if(qo(Object.values(Vt).includes(e),t,"invalid-persistence-type"),ag()){qo(e!==Vt.SESSION,t,"unsupported-persistence-type");return}if(sg()){qo(e===Vt.NONE,t,"unsupported-persistence-type");return}if(Mg()){qo(e===Vt.NONE||e===Vt.LOCAL&&Js(),t,"unsupported-persistence-type");return}qo(e===Vt.NONE||yA(),t,"unsupported-persistence-type")}async function Pp(t){await t._initializationPromise;const e=IA(),n=Si(wA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function NL(t,e){const n=IA();if(!n)return[];const r=Si(wA,t,e);switch(n.getItem(r)){case Vt.NONE:return[Zs];case Vt.LOCAL:return[el,Li];case Vt.SESSION:return[Li];default:return[]}}function IA(){var t;try{return((t=kL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=P;class _r{constructor(){this.browserResolver=Lt(KO),this.cordovaResolver=Lt(_L),this.underlyingResolver=null,this._redirectPersistence=Li,this._completeRedirectFn=Nh,this._overrideRedirectResult=Og}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return vA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return DL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await PL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){return t.unwrap()}function bL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(t){return TA(t)}function VL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new OL(t,_V(t,e))}else if(r){const i=TA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function TA(t){const{_tokenResponse:e}=t instanceof Je?t.customData:t;if(!e)return null;if(!(t instanceof Je)&&"temporaryProof"in e&&"phoneNumber"in e)return Mi.credentialFromResult(t);const n=e.providerId;if(!n||n===jo.PASSWORD)return null;let r;switch(n){case jo.GOOGLE:r=_n;break;case jo.FACEBOOK:r=gn;break;case jo.GITHUB:r=yn;break;case jo.TWITTER:r=vn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?eo._create(n,a):Cn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ms(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Je?r.credentialFromError(t):r.credentialFromResult(t)}function It(t,e){return e.catch(n=>{throw n instanceof Je&&VL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:xL(n),additionalUserInfo:gV(n),user:Dh.getOrCreate(i)}})}async function kp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>It(t,n.confirm(r))}}class OL{constructor(e,n){this.resolver=n,this.auth=bL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return It(EA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh=class sa{constructor(e){this._delegate=e,this.multiFactor=IV(e)}static getOrCreate(e){return sa.USER_MAP.has(e)||sa.USER_MAP.set(e,new sa(e)),sa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return It(this.auth,X0(this._delegate,e))}async linkWithPhoneNumber(e,n){return kp(this.auth,JV(this._delegate,e,n))}async linkWithPopup(e){return It(this.auth,aO(this._delegate,e,_r))}async linkWithRedirect(e){return await Pp(Ee(this.auth)),gO(this._delegate,e,_r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return It(this.auth,J0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return kp(this.auth,ZV(this._delegate,e,n))}reauthenticateWithPopup(e){return It(this.auth,oO(this._delegate,e,_r))}async reauthenticateWithRedirect(e){return await Pp(Ee(this.auth)),pO(this._delegate,e,_r)}sendEmailVerification(e){return sV(this._delegate,e)}async unlink(e){return await Wx(this._delegate,e),this}updateEmail(e){return uV(this._delegate,e)}updatePassword(e){return cV(this._delegate,e)}updatePhoneNumber(e){return eO(this._delegate,e)}updateProfile(e){return lV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return oV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Dh.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=P;class Cp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wo(r,"invalid-api-key",{appName:e.name}),Wo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?_r:void 0;this._delegate=n.initialize({options:{persistence:LL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Rx(this._delegate,e,n)}applyActionCode(e){return Yx(this._delegate,e)}checkActionCode(e){return Z0(this._delegate,e)}confirmPasswordReset(e,n){return Qx(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return It(this._delegate,Jx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return iV(this._delegate,e)}isSignInWithEmailLink(e){return tV(this._delegate,e)}async getRedirectResult(){Wo(cf(),this._delegate,"operation-not-supported-in-this-environment");const e=await yO(this._delegate,_r);return e?It(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){yL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=rw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=rw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return eV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Hx(this._delegate,e,n||void 0)}async setPersistence(e){CL(this._delegate,e);let n;switch(e){case Vt.SESSION:n=Li;break;case Vt.LOCAL:n=await Lt(el)._isAvailable()?el:Ng;break;case Vt.NONE:n=Zs;break;default:return nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return It(this._delegate,qx(this._delegate))}signInWithCredential(e){return It(this._delegate,Rh(this._delegate,e))}signInWithCustomToken(e){return It(this._delegate,Kx(this._delegate,e))}signInWithEmailAndPassword(e,n){return It(this._delegate,Zx(this._delegate,e,n))}signInWithEmailLink(e,n){return It(this._delegate,nV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return kp(this._delegate,XV(this._delegate,e,n))}async signInWithPopup(e){return Wo(cf(),this._delegate,"operation-not-supported-in-this-environment"),It(this._delegate,sO(this._delegate,e,_r))}async signInWithRedirect(e){return Wo(cf(),this._delegate,"operation-not-supported-in-this-environment"),await Pp(this._delegate),dO(this._delegate,e,_r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Xx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cp.Persistence=Vt;function rw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Dh.getOrCreate(o)),error:e,complete:n}}function LL(t,e){const n=NL(t,e);if(typeof self<"u"&&!n.includes(el)&&n.push(el),typeof window<"u")for(const r of[Ng,Li])n.includes(r)||n.push(r);return n.includes(Zs)||n.push(Zs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.providerId="phone",this._delegate=new Mi(EA(Jn.auth()))}static credential(e,n){return Mi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Fg.PHONE_SIGN_IN_METHOD=Mi.PHONE_SIGN_IN_METHOD;Fg.PROVIDER_ID=Mi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=P;class FL{constructor(e,n,r=Jn.app()){var i;ML((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new QV(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL="auth-compat";function $L(t){t.INTERNAL.registerComponent(new bt(UL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Cp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ss.EMAIL_SIGNIN,PASSWORD_RESET:ss.PASSWORD_RESET,RECOVER_EMAIL:ss.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ss.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ss.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ss.VERIFY_EMAIL}},EmailAuthProvider:Hr,FacebookAuthProvider:gn,GithubAuthProvider:yn,GoogleAuthProvider:_n,OAuthProvider:Ms,SAMLAuthProvider:xc,PhoneAuthProvider:Fg,PhoneMultiFactorGenerator:gA,RecaptchaVerifier:FL,TwitterAuthProvider:vn,Auth:Cp,AuthCredential:Io,Error:Je}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(vL,wL)}$L(Jn);var BL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Ug=Ug||{},$=BL||self;function bh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zL(t){return Object.prototype.hasOwnProperty.call(t,hf)&&t[hf]||(t[hf]=++jL)}var hf="closure_uid_"+(1e9*Math.random()>>>0),jL=0;function qL(t,e,n){return t.call.apply(t.bind,arguments)}function WL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=qL:at=WL,at.apply(null,arguments)}function Iu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qr(){this.s=this.s,this.o=this.o}var GL=0;Qr.prototype.s=!1;Qr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GL!=0)&&zL(this)};Qr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const AA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $g(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function iw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(bh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var KL=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return t}();function tl(t){return/^[\s\xa0]*$/.test(t)}function xh(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return xh().indexOf(t)!=-1}function Bg(t){return Bg[" "](t),t}Bg[" "]=function(){};function HL(t,e){var n=$M;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QL=wn("Opera"),to=wn("Trident")||wn("MSIE"),SA=wn("Edge"),Np=SA||to,RA=wn("Gecko")&&!(xh().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),YL=xh().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function PA(){var t=$.document;return t?t.documentMode:void 0}var Dp;e:{var df="",ff=function(){var t=xh();if(RA)return/rv:([^\);]+)(\)|;)/.exec(t);if(SA)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YL)return/WebKit\/(\S+)/.exec(t);if(QL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ff&&(df=ff?ff[1]:""),to){var pf=PA();if(pf!=null&&pf>parseFloat(df)){Dp=String(pf);break e}}Dp=df}var bp;if($.document&&to){var sw=PA();bp=sw||parseInt(Dp,10)||void 0}else bp=void 0;var XL=bp;function nl(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(RA){e:{try{Bg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.$.h.call(this)}}qe(nl,lt);var JL={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ol="closure_listenable_"+(1e6*Math.random()|0),ZL=0;function eM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++ZL,this.fa=this.ia=!1}function Vh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function kA(t){const e={};for(const n in t)e[n]=t[n];return e}const ow="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function CA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ow.length;s++)n=ow[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oh(t){this.src=t,this.g={},this.h=0}Oh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Vp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new eM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function xp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=AA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var jg="closure_lm_"+(1e6*Math.random()|0),mf={};function NA(t,e,n,r,i){if(r&&r.once)return bA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)NA(t,e[s],n,r,i);return null}return n=Gg(n),t&&t[Ol]?t.O(e,n,Vl(r)?!!r.capture:!!r,i):DA(t,e,n,!1,r,i)}function DA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vl(i)?!!i.capture:!!i,a=Wg(t);if(a||(t[jg]=a=new Oh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(VA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nM(){function t(n){return e.call(t.src,t.listener,n)}const e=rM;return t}function bA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bA(t,e[s],n,r,i);return null}return n=Gg(n),t&&t[Ol]?t.P(e,n,Vl(r)?!!r.capture:!!r,i):DA(t,e,n,!0,r,i)}function xA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xA(t,e[s],n,r,i);else r=Vl(r)?!!r.capture:!!r,n=Gg(n),t&&t[Ol]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Vp(s,n,r,i),-1<n&&(Vh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vp(e,n,r,i)),(n=-1<t?e[t]:null)&&qg(n))}function qg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ol])xp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(VA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wg(e))?(xp(n,t),n.h==0&&(n.src=null,e[jg]=null)):Vh(t)}}}function VA(t){return t in mf?mf[t]:mf[t]="on"+t}function rM(t,e){if(t.fa)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&qg(t),t=n.call(r,e)}return t}function Wg(t){return t=t[jg],t instanceof Oh?t:null}var gf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gg(t){return typeof t=="function"?t:(t[gf]||(t[gf]=function(e){return t.handleEvent(e)}),t[gf])}function je(){Qr.call(this),this.i=new Oh(this),this.S=this,this.J=null}qe(je,Qr);je.prototype[Ol]=!0;je.prototype.removeEventListener=function(t,e,n,r){xA(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var i=e;e=new lt(r,t),CA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Eu(o,r,!0,e)&&i}if(o=e.g=t,i=Eu(o,r,!0,e)&&i,i=Eu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Eu(o,r,!1,e)&&i}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vh(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&xp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kg=$.JSON.stringify;class iM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sM(){var t=Hg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oM{constructor(){this.h=this.g=null}add(e,n){const r=OA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var OA=new iM(()=>new aM,t=>t.reset());class aM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uM(t){$.setTimeout(()=>{throw t},0)}let rl,il=!1,Hg=new oM,LA=()=>{const t=$.Promise.resolve(void 0);rl=()=>{t.then(cM)}};var cM=()=>{for(var t;t=sM();){try{t.h.call(t.g)}catch(n){uM(n)}var e=OA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1};function Lh(t,e){je.call(this),this.h=t||1,this.g=e||$,this.j=at(this.qb,this),this.l=Date.now()}qe(Lh,je);b=Lh.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Qg(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){Lh.$.N.call(this),Qg(this),delete this.g};function Yg(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function MA(t){t.g=Yg(()=>{t.g=null,t.i&&(t.i=!1,MA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hM extends Qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:MA(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sl(t){Qr.call(this),this.h=t,this.g={}}qe(sl,Qr);var aw=[];function FA(t,e,n,r){Array.isArray(n)||(n&&(aw[0]=n.toString()),n=aw);for(var i=0;i<n.length;i++){var s=NA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function UA(t){zg(t.g,function(e,n){this.g.hasOwnProperty(n)&&qg(e)},t),t.g={}}sl.prototype.N=function(){sl.$.N.call(this),UA(this)};sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mh(){this.g=!0}Mh.prototype.Ea=function(){this.g=!1};function dM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mM(t,n)+(r?" "+r:"")})}function pM(t,e){t.info(function(){return"TIMEOUT: "+e})}Mh.prototype.info=function(){};function mM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kg(n)}catch{return e}}var Ji={},lw=null;function Fh(){return lw=lw||new je}Ji.Ta="serverreachability";function $A(t){lt.call(this,Ji.Ta,t)}qe($A,lt);function ol(t){const e=Fh();et(e,new $A(e))}Ji.STAT_EVENT="statevent";function BA(t,e){lt.call(this,Ji.STAT_EVENT,t),this.stat=e}qe(BA,lt);function ft(t){const e=Fh();et(e,new BA(e,t))}Ji.Ua="timingevent";function zA(t,e){lt.call(this,Ji.Ua,t),this.size=e}qe(zA,lt);function Ll(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Uh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xg(){}Xg.prototype.h=null;function uw(t){return t.h||(t.h=t.i())}function qA(){}var Ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jg(){lt.call(this,"d")}qe(Jg,lt);function Zg(){lt.call(this,"c")}qe(Zg,lt);var Op;function $h(){}qe($h,Xg);$h.prototype.g=function(){return new XMLHttpRequest};$h.prototype.i=function(){return{}};Op=new $h;function Fl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sl(this),this.P=gM,t=Np?125:void 0,this.V=new Lh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new WA}function WA(){this.i=null,this.g="",this.h=!1}var gM=45e3,Lp={},Mc={};b=Fl.prototype;b.setTimeout=function(t){this.P=t};function Mp(t,e,n){t.L=1,t.v=zh(Hn(e)),t.s=n,t.S=!0,GA(t,null)}function GA(t,e){t.G=Date.now(),Ul(t),t.A=Hn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),eS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new WA,t.g=IS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new hM(at(t.Pa,t,t.g),t.O)),FA(t.U,t.g,"readystatechange",t.nb),e=t.I?kA(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ol(),dM(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&En(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Np||this.g&&(this.h.h||this.g.ja()||fw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ol(3):ol(2)),Bh(this);var n=this.g.da();this.ca=n;t:if(KA(this)){var r=fw(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Aa(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tl(a)){var u=a;break t}}u=null}if(n=u)Cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fp(this,n);else{this.i=!1,this.o=3,ft(12),yi(this),Aa(this);break e}}this.S?(HA(this,c,o),Np&&this.i&&c==3&&(FA(this.U,this.V,"tick",this.mb),this.V.start())):(Cs(this.j,this.m,o,null),Fp(this,o)),c==4&&yi(this),this.i&&!this.J&&(c==4?_S(this.l,this):(this.i=!1,Ul(this)))}else MM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),yi(this),Aa(this)}}}catch{}finally{}};function KA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function HA(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=_M(t,n),i==Mc){e==4&&(t.o=4,ft(14),r=!1),Cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Lp){t.o=4,ft(15),Cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Cs(t.j,t.m,i,null),Fp(t,i);KA(t)&&i!=Mc&&i!=Lp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),s_(e),e.M=!0,ft(11))):(Cs(t.j,t.m,n,"[Invalid Chunked Response]"),yi(t),Aa(t))}b.mb=function(){if(this.g){var t=En(this.g),e=this.g.ja();this.C<e.length&&(Bh(this),HA(this,t,e),this.i&&t!=4&&Ul(this))}};function _M(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Mc:(n=Number(e.substring(n,r)),isNaN(n)?Lp:(r+=1,r+n>e.length?Mc:(e=e.slice(r,r+n),t.C=r+n,e)))}b.cancel=function(){this.J=!0,yi(this)};function Ul(t){t.Y=Date.now()+t.P,QA(t,t.P)}function QA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ll(at(t.lb,t),e)}function Bh(t){t.B&&($.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pM(this.j,this.A),this.L!=2&&(ol(),ft(17)),yi(this),this.o=2,Aa(this)):QA(this,this.Y-t)};function Aa(t){t.l.H==0||t.J||_S(t.l,t)}function yi(t){Bh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qg(t.V),UA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Up(n.i,t))){if(!t.K&&Up(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$c(n),Gh(n);else break e;i_(n),ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ll(at(n.ib,n),6e3));if(1>=rS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vi(n,11)}else if((t.K||n.g==t)&&$c(n),!tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(e_(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=wS(r,r.J?r.pa:null,r.Y),o.K){iS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Bh(a),Ul(a)),r.g=o}else mS(r);0<n.j.length&&Kh(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):r_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ol(4)}catch{}}function yM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function YA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vM(t),r=yM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var XA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pi){this.h=t.h,Fc(this,t.j),this.s=t.s,this.g=t.g,Uc(this,t.m),this.l=t.l;var e=t.i,n=new al;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cw(this,n),this.o=t.o}else t&&(e=String(t).match(XA))?(this.h=!1,Fc(this,e[1]||"",!0),this.s=oa(e[2]||""),this.g=oa(e[3]||"",!0),Uc(this,e[4]),this.l=oa(e[5]||"",!0),cw(this,e[6]||"",!0),this.o=oa(e[7]||"")):(this.h=!1,this.i=new al(null,this.h))}Pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(aa(e,hw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(aa(e,hw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(aa(n,n.charAt(0)=="/"?TM:EM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",aa(n,SM)),t.join("")};function Hn(t){return new Pi(t)}function Fc(t,e,n){t.j=n?oa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Uc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cw(t,e,n){e instanceof al?(t.i=e,RM(t.i,t.h)):(n||(e=aa(e,AM)),t.i=new al(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function zh(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function aa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hw=/[#\/\?@]/g,EM=/[#\?:]/g,TM=/[#\?]/g,AM=/[#\?@]/g,SM=/#/g;function al(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yr(t){t.g||(t.g=new Map,t.h=0,t.i&&wM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=al.prototype;b.add=function(t,e){Yr(this),this.i=null,t=To(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function JA(t,e){Yr(t),e=To(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ZA(t,e){return Yr(t),e=To(t,e),t.g.has(e)}b.forEach=function(t,e){Yr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){Yr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){Yr(this);let e=[];if(typeof t=="string")ZA(this,t)&&(e=e.concat(this.g.get(To(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Yr(this),this.i=null,t=To(this,t),ZA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function eS(t,e,n){JA(t,e),0<n.length&&(t.i=null,t.g.set(To(t,e),$g(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function To(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RM(t,e){e&&!t.j&&(Yr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(JA(this,r),eS(this,i,n))},t)),t.j=e}var PM=class{constructor(t,e){this.g=t,this.map=e}};function tS(t){this.l=t||kM,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kM=10;function nS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rS(t){return t.h?1:t.g?t.g.size:0}function Up(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function e_(t,e){t.g?t.g.add(e):t.h=e}function iS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tS.prototype.cancel=function(){if(this.i=sS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $g(t.i)}var CM=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function NM(){this.g=new CM}function DM(t,e,n){const r=n||"";try{YA(t,function(i,s){let o=i;Vl(i)&&(o=Kg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function bM(t,e){const n=new Mh;if($.Image){const r=new Image;r.onload=Iu(Tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Iu(Tu,n,r,"TestLoadImage: error",!1,e),r.onabort=Iu(Tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Iu(Tu,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Tu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function jh(t){this.l=t.fc||null,this.j=t.ob||!1}qe(jh,Xg);jh.prototype.g=function(){return new qh(this.l,this.j)};jh.prototype.i=function(t){return function(){return t}}({});function qh(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=t_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(qh,je);var t_=0;b=qh.prototype;b.open=function(t,e){if(this.readyState!=t_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$l(this)),this.readyState=t_};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function oS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$l(this):ll(this),this.readyState==3&&oS(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,$l(this))};b.Ya=function(t){this.g&&(this.response=t,$l(this))};b.ka=function(){this.g&&$l(this)};function $l(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xM=$.JSON.parse;function Te(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aS,this.L=this.M=!1}qe(Te,je);var aS="",VM=/^https?$/i,OM=["POST","PUT"];b=Te.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Op.g(),this.C=this.u?uw(this.u):uw(Op),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){dw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=AA(OM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cS(this),0<this.B&&((this.L=LM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=Yg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dw(this,s)}};function LM(t){return to&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Ug<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function dw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lS(t),Wh(t)}function lS(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Wh(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wh(this,!0)),Te.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?uS(this):this.kb())};b.kb=function(){uS(this)};function uS(t){if(t.h&&typeof Ug<"u"&&(!t.C[1]||En(t)!=4||t.da()!=2)){if(t.v&&En(t)==4)Yg(t.La,0,t);else if(et(t,"readystatechange"),En(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(XA)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!VM.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var s=2<En(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",lS(t)}}finally{Wh(t)}}}}function Wh(t,e){if(t.g){cS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function cS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function En(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xM(e)}};function fw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case aS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MM(t){const e={};t=(t.g&&2<=En(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(tl(t[r]))continue;var n=lM(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}tM(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hS(t){let e="";return zg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function n_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Go(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dS(t){this.Ga=0,this.j=[],this.l=new Mh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Go("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Go("baseRetryDelayMs",5e3,t),this.hb=Go("retryDelaySeedMs",1e4,t),this.eb=Go("forwardChannelMaxRetries",2,t),this.xa=Go("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new tS(t&&t.concurrentRequestLimit),this.Ja=new NM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=dS.prototype;b.ra=8;b.H=1;function r_(t){if(fS(t),t.H==3){var e=t.W++,n=Hn(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Bl(t,n),e=new Fl(t,t.l,e),e.L=2,e.v=zh(Hn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=IS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ul(e)}vS(t)}function Gh(t){t.g&&(s_(t),t.g.cancel(),t.g=null)}function fS(t){Gh(t),t.u&&($.clearTimeout(t.u),t.u=null),$c(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Kh(t){if(!nS(t.i)&&!t.m){t.m=!0;var e=t.Na;rl||LA(),il||(rl(),il=!0),Hg.add(e,t),t.C=0}}function FM(t,e){return rS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ll(at(t.Na,t,e),yS(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=kA(s),CA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pS(this,i,e),n=Hn(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Bl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(hS(s)))+"&"+e:this.o&&n_(n,this.o,s)),e_(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,Mp(i,n,null)):Mp(i,n,e),this.H=2}}else this.H==3&&(t?pw(this,t):this.j.length==0||nS(this.i)||pw(this))};function pw(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Bl(t,r),t.o&&t.s&&n_(r,t.o,t.s),n=new Fl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=pS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),e_(t.i,n),Mp(n,r,e)}function Bl(t,e){t.na&&zg(t.na,function(n,r){ae(e,r,n)}),t.h&&YA({},function(n,r){ae(e,r,n)})}function pS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?at(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{DM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function mS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rl||LA(),il||(rl(),il=!0),Hg.add(e,t),t.A=0}}function i_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ll(at(t.Ma,t),yS(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,gS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ll(at(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Gh(this),gS(this))};function s_(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function gS(t){t.g=new Fl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Bl(t,e),t.o&&t.s&&n_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zh(Hn(e)),n.s=null,n.S=!0,GA(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Gh(this),i_(this),ft(19))};function $c(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function _S(t,e){var n=null;if(t.g==e){$c(t),s_(t),t.g=null;var r=2}else if(Up(t.i,e))n=e.F,iS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Fh(),et(r,new zA(r,n)),Kh(t)}else mS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&FM(t,e)||r==2&&i_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function yS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=at(t.pb,t);n||(n=new Pi("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Fc(n,"https"),zh(n)),bM(n.toString(),r)}else ft(2);t.H=0,t.h&&t.h.za(e),vS(t),fS(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function vS(t){if(t.H=0,t.ma=[],t.h){const e=sS(t.i);(e.length!=0||t.j.length!=0)&&(iw(t.ma,e),iw(t.ma,t.j),t.i.i.length=0,$g(t.j),t.j.length=0),t.h.ya()}}function wS(t,e,n){var r=n instanceof Pi?Hn(n):new Pi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Uc(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pi(null);r&&Fc(s,r),e&&(s.g=e),i&&Uc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Bl(t,r),r}function IS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Te(new jh({ob:!0})):new Te(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function ES(){}b=ES.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Bc(){if(to&&!(10<=Number(XL)))throw Error("Environmental error: no available transport.")}Bc.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){je.call(this),this.g=new dS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ao(this)}qe($t,je);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=wS(t,null,t.Y),Kh(t)};$t.prototype.close=function(){r_(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kg(t),t=n);e.j.push(new PM(e.fb++,t)),e.H==3&&Kh(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,r_(this.g),delete this.g,$t.$.N.call(this)};function TS(t){Jg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(TS,Jg);function AS(){Zg.call(this),this.status=1}qe(AS,Zg);function Ao(t){this.g=t}qe(Ao,ES);Ao.prototype.Ba=function(){et(this.g,"a")};Ao.prototype.Aa=function(t){et(this.g,new TS(t))};Ao.prototype.za=function(t){et(this.g,new AS)};Ao.prototype.ya=function(){et(this.g,"b")};function UM(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(hn,UM);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _f(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_f(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_f(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_f(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var $M={};function o_(t){return-128<=t&&128>t?HL(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function Tn(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return Qe(Tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$p;return new te(e,0)}function SS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(SS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tn(Math.pow(e,8)),r=$s,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Tn(Math.pow(e,s)),r=r.R(s).add(Tn(o))):(r=r.R(n),r=r.add(Tn(o)))}return r}var $p=4294967296,$s=o_(0),Bp=o_(1),mw=o_(16777216);b=te.prototype;b.ea=function(){if(Gt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$p+r)*e,e*=$p}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Mn(this))return"0";if(Gt(this))return"-"+Qe(this).toString(t);for(var e=Tn(Math.pow(t,6)),n=this,r="";;){var i=jc(n,e).g;n=zc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Mn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Gt(t){return t.h==-1}b.X=function(t){return t=zc(this,t),Gt(t)?-1:Mn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(Bp)}b.abs=function(){return Gt(this)?Qe(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function zc(t,e){return t.add(Qe(e))}b.R=function(t){if(Mn(this)||Mn(t))return $s;if(Gt(this))return Gt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Gt(t))return Qe(this.R(Qe(t)));if(0>this.X(mw)&&0>t.X(mw))return Tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Au(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Au(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Au(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Au(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Au(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ko(t,e){this.g=t,this.h=e}function jc(t,e){if(Mn(e))throw Error("division by zero");if(Mn(t))return new Ko($s,$s);if(Gt(t))return e=jc(Qe(t),e),new Ko(Qe(e.g),Qe(e.h));if(Gt(e))return e=jc(t,Qe(e)),new Ko(Qe(e.g),e.h);if(30<t.g.length){if(Gt(t)||Gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bp,r=e;0>=r.X(t);)n=gw(n),r=gw(r);var i=os(n,1),s=os(r,1);for(r=os(r,2),n=os(n,2);!Mn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=os(r,1),n=os(n,1)}return e=zc(t,i.R(e)),new Ko(i,e)}for(i=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tn(n),o=s.R(e);Gt(o)||0<o.X(t);)n-=r,s=Tn(n),o=s.R(e);Mn(s)&&(s=Bp),i=i.add(s),t=zc(t,o)}return new Ko(i,t)}b.gb=function(t){return jc(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function gw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function os(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Bc.prototype.createWebChannel=Bc.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Uh.NO_ERROR=0;Uh.TIMEOUT=8;Uh.HTTP_ERROR=6;jA.COMPLETE="complete";qA.EventType=Ml;Ml.OPEN="a";Ml.CLOSE="b";Ml.ERROR="c";Ml.MESSAGE="d";je.prototype.listen=je.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=Tn;te.fromString=SS;var BM=function(){return new Bc},zM=function(){return Fh()},yf=Uh,jM=jA,qM=Ji,_w={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Su=qA,WM=Te,GM=hn,Bs=te;const yw="@firebase/firestore";/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let So="10.3.1";/**
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
 */const Or=new kl("@firebase/firestore");function hs(){return Or.logLevel}function KM(t){Or.setLogLevel(t)}function T(t,...e){if(Or.logLevel<=G.DEBUG){const n=e.map(a_);Or.debug(`Firestore (${So}): ${t}`,...n)}}function Pe(t,...e){if(Or.logLevel<=G.ERROR){const n=e.map(a_);Or.error(`Firestore (${So}): ${t}`,...n)}}function dn(t,...e){if(Or.logLevel<=G.WARN){const n=e.map(a_);Or.warn(`Firestore (${So}): ${t}`,...n)}}function a_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function x(t="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+t;throw Pe(e),new Error(e)}function F(t,e){t||x()}function HM(t,e){t||x()}function D(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Je{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class RS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class YM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XM{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new RS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new $e(e)}}class JM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new e2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class PS{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=n2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function kS(t){return t+"\0"}/**
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
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new de(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new de(0,0))}static max(){return new M(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&x(),r===void 0?r=e.length-n:r>e.length-n&&x(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends ul{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const r2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends ul{construct(e,n,r){return new Ie(e,n,r)}static isValidIdentifier(e){return r2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
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
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(Y.fromString(e))}static fromName(e){return new C(Y.fromString(e).popFirst(5))}static empty(){return new C(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new Y(e.slice()))}}/**
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
 */class qc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function zp(t){return t.fields.find(e=>e.kind===2)}function ai(t){return t.fields.filter(e=>e.kind!==2)}qc.UNKNOWN_ID=-1;class Hu{constructor(e,n){this.fieldPath=e,this.kind=n}}class cl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new cl(0,Bt.min())}}function CS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new Bt(i,C.empty(),e)}function NS(t){return new Bt(t.readTime,t.key,-1)}class Bt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bt(M.min(),C.empty(),-1)}static max(){return new Bt(M.max(),C.empty(),-1)}}function l_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=C.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==DS)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Hh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new ze,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Sa(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=u_(r.target.error);this.m.reject(new Sa(e,i))}}static open(e,n,r,i){try{return new Hh(n,e.transaction(i,r))}catch(s){throw new Sa(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(T("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new s2(n)}}class on{constructor(e,n,r){this.name=e,this.version=n,this.S=r,on.D(ye())===12.2&&Pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return T("SimpleDb","Removing database:",e),li(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Js())return!1;if(on.v())return!0;const e=ye(),n=on.D(e),r=0<n&&n<10,i=on.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Sa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new E(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Sa(e,o))},i.onupgradeneeded=s=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Hh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return l.catch(()=>{}),await a.g,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class i2{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return li(this.q.delete())}}class Sa extends E{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Jr(t){return t.name==="IndexedDbTransactionError"}class s2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(T("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),li(r)}add(e){return T("SimpleDb","ADD",this.store.name,e,e),li(this.store.add(e))}get(e){return li(this.store.get(e)).next(n=>(n===void 0&&(n=null),T("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return T("SimpleDb","DELETE",this.store.name,e),li(this.store.delete(e))}count(){return T("SimpleDb","COUNT",this.store.name),li(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=u_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new i2(a),u=n(a.primaryKey,a.value,l);if(u instanceof _){const c=u.catch(h=>(l.done(),_.reject(h)));r.push(c)}l.isDone?i():l.U===null?a.continue():a.continue(l.U)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function li(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=u_(r.target.error);n(i)}})}let vw=!1;function u_(t){const e=on.D(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vw||(vw=!0,setTimeout(()=>{throw r},0)),r}}return t}class o2{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){T("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{T("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Jr(n)?T("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Xr(n)}await this.te(6e4)})}}class a2{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return T("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(T("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=NS(s);l_(o,r)>0&&(r=o)}),new Bt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class St{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}St.ae=-1;function zl(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function xS(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ww(e)),e=l2(t.get(n),e);return ww(e)}function l2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ww(t){return t+""}function An(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&x(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:x()}s=o+2}return new Y(r)}/**
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
 */const Iw=["userId","batchId"];/**
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
 */function Qu(t,e){return[t,gt(e)]}function VS(t,e,n){return[t,gt(e),n]}const u2={},c2=["prefixPath","collectionGroup","readTime","documentId"],h2=["prefixPath","collectionGroup","documentId"],d2=["collectionGroup","readTime","prefixPath","documentId"],f2=["canonicalId","targetId"],p2=["targetId","path"],m2=["path","targetId"],g2=["collectionId","parent"],_2=["indexId","uid"],y2=["uid","sequenceNumber"],v2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],w2=["indexId","uid","orderedDocumentKey"],I2=["userId","collectionPath","documentId"],E2=["userId","collectionPath","largestBatchId"],T2=["userId","collectionGroup","largestBatchId"],OS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],A2=[...OS,"documentOverlays"],LS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],MS=LS,S2=[...MS,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends bS{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function We(t,e){const n=D(t);return on.O(n.ue,e)}/**
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
 */function Ew(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tw(this.data.getIterator())}getIteratorFrom(e){return new Tw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ie(this.comparator);return n.data=e,n}}class Tw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function as(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new ie(Ie.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class US extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new US("Invalid base64 string: "+s):s}}(e);return new Le(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const P2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(F(!!t),typeof t=="string"){let e=0;const n=P2.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function c_(t){const e=t.mapValue.fields.__previous_value__;return Qh(e)?c_(e):e}function dl(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class k2{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Fr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yu={nullValue:"NULL_VALUE"};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qh(t)?4:$S(t)?9007199254740991:10:x()}function Nn(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),a=Lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?hl(o)===hl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ew(o)!==Ew(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Nn(o[l],a[l])))return!1;return!0}(t,e);default:return x()}}function fl(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Aw(t.timestampValue,e.timestampValue);case 4:return Aw(dl(t),dl(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mr(s),l=Mr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=B(a[u],l[u]);if(c!==0)return c}return B(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=B(we(s.latitude),we(o.latitude));return a!==0?a:B(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ur(a[u],l[u]);if(c)return c}return B(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===yr.mapValue&&o===yr.mapValue)return 0;if(s===yr.mapValue)return 1;if(o===yr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=B(l[h],c[h]);if(d!==0)return d;const f=Ur(a[l[h]],u[c[h]]);if(f!==0)return f}return B(l.length,c.length)}(t.mapValue,e.mapValue);default:throw x()}}function Aw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=Lr(t),r=Lr(e),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function ro(t){return qp(t)}function qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return C.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qp(n.fields[o])}`;return i+"}"}(t.mapValue):x()}function $i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wp(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function Sw(t){return!!t&&"nullValue"in t}function Rw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xu(t){return!!t&&"mapValue"in t}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function C2(t){return"nullValue"in t?Yu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?$i(Fr.empty(),C.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:x()}function N2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?$i(Fr.empty(),C.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?yr:x()}function Pw(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function kw(t,e){const n=Ur(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=Ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ra(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ye(Ra(this.value))}}function BS(t){const e=[];return Zi(t.fields,(n,r)=>{const i=new Ie([n]);if(Xu(r)){const s=BS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
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
 */class le{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new le(e,0,M.min(),M.min(),M.min(),Ye.empty(),0)}static newFoundDocument(e,n,r,i){return new le(e,1,n,M.min(),r,i,0)}static newNoDocument(e,n){return new le(e,2,n,M.min(),M.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new le(e,3,n,M.min(),M.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $r{constructor(e,n){this.position=e,this.inclusive=n}}function Cw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=C.comparator(C.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function D2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zS{}class K extends zS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new b2(e,n,r):n==="array-contains"?new O2(e,r):n==="in"?new HS(e,r):n==="not-in"?new L2(e,r):n==="array-contains-any"?new M2(e,r):new K(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x2(e,r):new V2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ur(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(Ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Z extends zS{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Z(e,n)}matches(e){return io(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function io(t){return t.op==="and"}function Gp(t){return t.op==="or"}function h_(t){return jS(t)&&io(t)}function jS(t){for(const e of t.filters)if(e instanceof Z)return!1;return!0}function Kp(t){if(t instanceof K)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(h_(t))return t.filters.map(e=>Kp(e)).join(",");{const e=t.filters.map(n=>Kp(n)).join(",");return`${t.op}(${e})`}}function qS(t,e){return t instanceof K?function(r,i){return i instanceof K&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof Z?function(r,i){return i instanceof Z&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&qS(o,i.filters[a]),!0):!1}(t,e):void x()}function WS(t,e){const n=t.filters.concat(e);return Z.create(n,t.op)}function GS(t){return t instanceof K?function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`}(t):t instanceof Z?function(n){return n.op.toString()+" {"+n.getFilters().map(GS).join(" ,")+"}"}(t):"Filter"}class b2 extends K{constructor(e,n,r){super(e,n,r),this.key=C.fromName(r.referenceValue)}matches(e){const n=C.comparator(e.key,this.key);return this.matchesComparison(n)}}class x2 extends K{constructor(e,n){super(e,"in",n),this.keys=KS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class V2 extends K{constructor(e,n){super(e,"not-in",n),this.keys=KS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>C.fromName(r.referenceValue))}class O2 extends K{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&fl(n.arrayValue,this.value)}}class HS extends K{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class L2 extends K{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class M2 extends K{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
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
 */class F2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Hp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new F2(t,e,n,r,i,s,o)}function Bi(t){const e=D(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.he=n}return e.he}function jl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!D2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nw(t.startAt,e.startAt)&&Nw(t.endAt,e.endAt)}function Wc(t){return C.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Gc(t,e){return t.filters.filter(n=>n instanceof K&&n.field.isEqual(e))}function Dw(t,e,n){let r=Yu,i=!0;for(const s of Gc(t,e)){let o=Yu,a=!0;switch(s.op){case"<":case"<=":o=C2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Yu}Pw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Pw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function bw(t,e,n){let r=yr,i=!0;for(const s of Gc(t,e)){let o=yr,a=!0;switch(s.op){case">=":case">":o=N2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=yr}kw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class tr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function QS(t,e,n,r,i,s,o,a){return new tr(t,e,n,r,i,s,o,a)}function Ro(t){return new tr(t)}function xw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function d_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function f_(t){return t.collectionGroup!==null}function js(t){const e=D(t);if(e.Pe===null){e.Pe=[];const n=Yh(e),r=d_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new zs(n)),e.Pe.push(new zs(Ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new zs(Ie.keyField(),s))}}}return e.Pe}function _t(t){const e=D(t);return e.Ie||(e.Ie=U2(e,js(t))),e.Ie}function U2(t,e){if(t.limitType==="F")return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zs(i.field,s)});const n=t.endAt?new $r(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $r(t.startAt.position,t.startAt.inclusive):null;return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qp(t,e){e.getFirstInequalityField(),Yh(t);const n=t.filters.concat([e]);return new tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kc(t,e,n){return new tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ql(t,e){return jl(_t(t),_t(e))&&t.limitType===e.limitType}function YS(t){return`${Bi(_t(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GS(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ro(i)).join(",")),`Target(${r})`}(_t(t))}; limitType=${t.limitType})`}function Wl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):C.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Cw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,js(r),i)||r.endAt&&!function(o,a,l){const u=Cw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,js(r),i))}(t,e)}function XS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JS(t){return(e,n)=>{let r=!1;for(const i of js(t)){const s=$2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $2(t,e,n){const r=t.field.isKeyField()?C.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ur(l,u):x()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FS(this.inner)}size(){return this.innerSize}}/**
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
 */const B2=new se(C.comparator);function Pt(){return B2}const ZS=new se(C.comparator);function la(...t){let e=ZS;for(const n of t)e=e.insert(n.key,n);return e}function e1(t){let e=ZS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sn(){return Pa()}function t1(){return Pa()}function Pa(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const z2=new se(C.comparator),j2=new ie(C.comparator);function z(...t){let e=j2;for(const n of t)e=e.add(n);return e}const q2=new ie(B);function p_(){return q2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function r1(t){return{integerValue:""+t}}function i1(t,e){return xS(e)?r1(e):n1(t,e)}/**
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
 */class Xh{constructor(){this._=void 0}}function W2(t,e,n){return t instanceof so?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qh(s)&&(s=c_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof zi?o1(t,e):t instanceof ji?a1(t,e):function(i,s){const o=s1(i,s),a=Vw(o)+Vw(i.Te);return Wp(o)&&Wp(i.Te)?r1(a):n1(i.serializer,a)}(t,e)}function G2(t,e,n){return t instanceof zi?o1(t,e):t instanceof ji?a1(t,e):n}function s1(t,e){return t instanceof oo?function(r){return Wp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class so extends Xh{}class zi extends Xh{constructor(e){super(),this.elements=e}}function o1(t,e){const n=l1(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ji extends Xh{constructor(e){super(),this.elements=e}}function a1(t,e){let n=l1(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class oo extends Xh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Vw(t){return we(t.integerValue||t.doubleValue)}function l1(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Gl{constructor(e,n){this.field=e,this.transform=n}}function K2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zi&&i instanceof zi||r instanceof ji&&i instanceof ji?no(r.elements,i.elements,Nn):r instanceof oo&&i instanceof oo?Nn(r.Te,i.Te):r instanceof so&&i instanceof so}(t.transform,e.transform)}class H2{constructor(e,n){this.version=e,this.transformResults=n}}class he{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new he}static exists(e){return new he(void 0,e)}static updateTime(e){return new he(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jh{}function u1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ko(t.key,he.none()):new Po(t.key,t.data,he.none());{const n=t.data,r=Ye.empty();let i=new ie(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new nr(t.key,r,new Rt(i.toArray()),he.none())}}function Q2(t,e,n){t instanceof Po?function(i,s,o){const a=i.value.clone(),l=Lw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(i,s,o){if(!Ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Lw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(c1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof Po?function(s,o,a,l){if(!Ju(s.precondition,o))return a;const u=s.value.clone(),c=Mw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(s,o,a,l){if(!Ju(s.precondition,o))return a;const u=Mw(s.fieldTransforms,l,o),c=o.data;return c.setAll(c1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Y2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=s1(r.transform,i||null);s!=null&&(n===null&&(n=Ye.empty()),n.set(r.field,s))}return n||null}function Ow(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&no(r,i,(s,o)=>K2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends Jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends Jh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function c1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lw(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,G2(o,a,n[i]))}return r}function Mw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,W2(s,o,e))}return r}class ko extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m_ extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Q2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=u1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>Ow(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>Ow(n,r))}}class __{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=function(){return z2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new __(e,n,r,i)}}/**
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
 */class y_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class X2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,Q;function h1(t){switch(t){default:return x();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function d1(t){if(t===void 0)return Pe("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ne.OK:return w.OK;case Ne.CANCELLED:return w.CANCELLED;case Ne.UNKNOWN:return w.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return w.INTERNAL;case Ne.UNAVAILABLE:return w.UNAVAILABLE;case Ne.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ne.NOT_FOUND:return w.NOT_FOUND;case Ne.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ne.ABORTED:return w.ABORTED;case Ne.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ne.DATA_LOSS:return w.DATA_LOSS;default:return x()}}(Q=Ne||(Ne={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function f1(){return new TextEncoder}/**
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
 */const J2=new Bs([4294967295,4294967295],0);function Fw(t){const e=f1().encode(t),n=new GM;return n.update(e),new Uint8Array(n.digest())}function Uw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Bs([n,r],0),new Bs([i,s],0)]}class v_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ua(`Invalid padding: ${n}`);if(r<0)throw new ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ua(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Bs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Bs.fromNumber(r)));return i.compare(J2)===1&&(i=new Bs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Fw(e),[r,i]=Uw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new v_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Fw(e),[r,i]=Uw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(M.min(),i,new se(B),Pt(),z())}}class Hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hl(r,n,z(),z(),z())}}/**
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
 */class Zu{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class p1{constructor(e,n){this.targetId=e,this.ye=n}}class m1{constructor(e,n,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $w{constructor(){this.we=0,this.Se=zw(),this.be=Le.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=z(),n=z(),r=z();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:x()}}),new Hl(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=zw()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Z2{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Pt(),this.Ue=Bw(),this.We=new se(B)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:x()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Wc(s))if(r===0){const o=new C(s.path);this.je(n,o,le.newNoDocument(o,M.min()))}else F(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mr(r).toUint8Array()}catch(l){if(l instanceof US)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new v_(o,i,s)}catch(l){return dn(l instanceof ua?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Wc(a.target)){const l=new C(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,le.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=z();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,n,this.We,this.$e,r);return this.$e=Pt(),this.Ue=Bw(),this.We=new se(B),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new $w,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ie(B),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new $w),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Bw(){return new se(C.comparator)}function zw(){return new se(C.comparator)}const eF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nF=(()=>({and:"AND",or:"OR"}))();class rF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yp(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function ao(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function g1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iF(t,e){return ao(t,e.toTimestamp())}function ke(t){return F(!!t),M.fromTimestamp(function(n){const r=Lr(n);return new de(r.seconds,r.nanos)}(t))}function w_(t,e){return function(r){return new Y(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function _1(t){const e=Y.fromString(t);return F(R1(e)),e}function ml(t,e){return w_(t.databaseId,e.path)}function kn(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new C(v1(n))}function Xp(t,e){return w_(t.databaseId,e)}function y1(t){const e=_1(t);return e.length===4?Y.emptyPath():v1(e)}function gl(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function v1(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jw(t,e,n){return{name:ml(t,e),fields:n.value.mapValue.fields}}function w1(t,e,n){const r=kn(t,e.name),i=ke(e.updateTime),s=e.createTime?ke(e.createTime):M.min(),o=new Ye({mapValue:{fields:e.fields}}),a=le.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function sF(t,e){return"found"in e?function(r,i){F(!!i.found),i.found.name,i.found.updateTime;const s=kn(r,i.found.name),o=ke(i.found.updateTime),a=i.found.createTime?ke(i.found.createTime):M.min(),l=new Ye({mapValue:{fields:i.found.fields}});return le.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){F(!!i.missing),F(!!i.readTime);const s=kn(r,i.missing),o=ke(i.readTime);return le.newNoDocument(s,o)}(t,e):x()}function oF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(F(c===void 0||typeof c=="string"),Le.fromBase64String(c||"")):(F(c===void 0||c instanceof Uint8Array),Le.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:d1(u.code);return new E(c,u.message||"")}(o);n=new m1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(t,r.document.name),s=ke(r.document.updateTime),o=r.document.createTime?ke(r.document.createTime):M.min(),a=new Ye({mapValue:{fields:r.document.fields}}),l=le.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Zu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kn(t,r.document),s=r.readTime?ke(r.readTime):M.min(),o=le.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Zu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kn(t,r.document),s=r.removedTargetIds||[];n=new Zu([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new X2(i,s),a=r.targetId;n=new p1(a,o)}}return n}function _l(t,e){let n;if(e instanceof Po)n={update:jw(t,e.key,e.value)};else if(e instanceof ko)n={delete:ml(t,e.key)};else if(e instanceof nr)n={update:jw(t,e.key,e.data),updateMask:dF(e.fieldMask)};else{if(!(e instanceof m_))return x();n={verify:ml(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof so)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw x()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x()}(t,e.precondition)),n}function Jp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?he.updateTime(ke(s.updateTime)):s.exists!==void 0?he.exists(s.exists):he.none()}(e.currentDocument):he.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)F(a.setToServerValue==="REQUEST_TIME"),l=new so;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new zi(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new ji(c)}else"increment"in a?l=new oo(o,a.increment):x();const u=Ie.fromServerFormat(a.fieldPath);return new Gl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=kn(t,e.update.name),s=new Ye({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Rt(u.map(c=>Ie.fromServerFormat(c)))}(e.updateMask);return new nr(i,s,o,n,r)}return new Po(i,s,n,r)}if(e.delete){const i=kn(t,e.delete);return new ko(i,n)}if(e.verify){const i=kn(t,e.verify);return new m_(i,n)}return x()}function aF(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ke(i.updateTime):ke(s);return o.isEqual(M.min())&&(o=ke(s)),new H2(o,i.transformResults||[])}(n,e))):[]}function I1(t,e){return{documents:[Xp(t,e.path)]}}function E1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return S1(Z.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:fs(h.field),direction:uF(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Yp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function T1(t){let e=y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=A1(h);return d instanceof Z&&h_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new zs(ps(y.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,zl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new $r(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new $r(f,d)}(n.endAt)),QS(e,i,o,s,a,"F",l,u)}function lF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function A1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ps(n.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return K.create(o,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):t.fieldFilter!==void 0?function(n){return K.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Z.create(n.compositeFilter.filters.map(r=>A1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(n.compositeFilter.op))}(t):x()}function uF(t){return eF[t]}function cF(t){return tF[t]}function hF(t){return nF[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return Ie.fromServerFormat(t.fieldPath)}function S1(t){return t instanceof K?function(n){if(n.op==="=="){if(Rw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Sw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Sw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:cF(n.op),value:n.value}}}(t):t instanceof Z?function(n){const r=n.getFilters().map(i=>S1(i));return r.length===1?r[0]:{compositeFilter:{op:hF(n.op),filters:r}}}(t):x()}function dF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,i,s=M.min(),o=M.min(),a=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class P1{constructor(e){this.ht=e}}function fF(t,e){let n;if(e.document)n=w1(t.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=C.fromSegments(e.noDocument.path),i=Wi(e.noDocument.readTime);n=le.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return x();{const r=C.fromSegments(e.unknownDocument.path),i=Wi(e.unknownDocument.version);n=le.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new de(i[0],i[1]);return M.fromTimestamp(s)}(e.readTime)),n}function qw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Hc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ml(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ao(s,o.version.toTimestamp()),createTime:ao(s,o.createTime.toTimestamp())}}(t.ht,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:qi(e.version)};else{if(!e.isUnknownDocument())return x();r.unknownDocument={path:n.path.toArray(),version:qi(e.version)}}return r}function Hc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wi(t){const e=new de(t.seconds,t.nanoseconds);return M.fromTimestamp(e)}function ui(t,e){const n=(e.baseMutations||[]).map(s=>Jp(t.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Jp(t.ht,s)),i=de.fromMillis(e.localWriteTimeMs);return new g_(e.batchId,i,n,r)}function ca(t){const e=Wi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wi(t.lastLimboFreeSnapshotVersion):M.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return F(s.documents.length===1),_t(Ro(y1(s.documents[0])))}(t.query):function(s){return _t(T1(s))}(t.query),new Fn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Le.fromBase64String(t.resumeToken))}function k1(t,e){const n=qi(e.snapshotVersion),r=qi(e.lastLimboFreeSnapshotVersion);let i;i=Wc(e.target)?I1(t.ht,e.target):E1(t.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function I_(t){const e=T1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kc(e,e.limit,"L"):e}function vf(t,e){return new y_(e.largestBatchId,Jp(t.ht,e.overlayMutation))}function Ww(t,e){const n=e.path.lastSegment();return[t,gt(e.path.popLast()),n]}function Gw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:qi(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{getBundleMetadata(e,n){return Kw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Wi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Kw(e).put(function(i){return{bundleId:i.id,createTime:qi(ke(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Hw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:I_(s.bundledQuery),readTime:Wi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Hw(e).put(function(i){return{name:i.name,readTime:qi(ke(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Kw(t){return We(t,"bundles")}function Hw(t){return We(t,"namedQueries")}/**
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
 */class Zh{constructor(e,n){this.serializer=e,this.userId=n}static Pt(e,n){const r=n.uid||"";return new Zh(e,r)}getOverlay(e,n){return Ho(e).get(Ww(this.userId,n)).next(r=>r?vf(this.serializer,r):null)}getOverlays(e,n){const r=Sn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new y_(n,o);i.push(this.It(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ho(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Sn(),s=gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ho(e).G("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=vf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Sn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ho(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=vf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}It(e,n){return Ho(e).put(function(i,s,o){const[a,l,u]=Ww(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:_l(i.ht,o.mutation)}}(this.serializer,this.userId,n))}}function Ho(t){return We(t,"documentOverlays")}/**
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
 */class ci{constructor(){}dt(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.At(n,5);else if("booleanValue"in e)this.At(n,10),n.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(n,15),n.Rt(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.At(n,13):(this.At(n,15),hl(r)?n.Rt(0):n.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(n,20),typeof r=="string"?n.Vt(r):(n.Vt(`${r.seconds||""}`),n.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,n),this.gt(n);else if("bytesValue"in e)this.At(n,30),n.yt(Mr(e.bytesValue)),this.gt(n);else if("referenceValue"in e)this.wt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(n,45),n.Rt(r.latitude||0),n.Rt(r.longitude||0)}else"mapValue"in e?$S(e)?this.At(n,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,n),this.gt(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.gt(n)):x()}ft(e,n){this.At(n,25),this.Dt(e,n)}Dt(e,n){n.Vt(e)}St(e,n){const r=e.fields||{};this.At(n,55);for(const i of Object.keys(r))this.ft(i,n),this.Tt(r[i],n)}bt(e,n){const r=e.values||[];this.At(n,50);for(const i of r)this.Tt(i,n)}wt(e,n){this.At(n,37),C.fromName(e).path.forEach(r=>{this.At(n,60),this.Dt(r,n)})}At(e,n){e.Rt(n)}gt(e){e.Rt(2)}}ci.Ct=new ci;function mF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Qw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=mF(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class gF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Qw(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Qw(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class _F{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class yF{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Qo{constructor(){this.jt=new gF,this.Ht=new _F(this.jt),this.Jt=new yF(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class hi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new hi(this.indexId,this.documentKey,this.arrayValue,r)}}function or(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Yw(t.arrayValue,e.arrayValue),n!==0?n:(n=Yw(t.directionalValue,e.directionalValue),n!==0?n:C.comparator(t.documentKey,e.documentKey)))}function Yw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Xw{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const n of e.filters){const r=n;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){F(e.collectionGroup===this.collectionId);const n=zp(e);if(n!==void 0&&!this.rn(n))return!1;const r=ai(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}_n(){let e=new ie(Ie.comparator);const n=[];for(const r of this.en)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Hu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Hu(r.field,0))}for(const r of this.Xt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Hu(r.field,r.dir==="asc"?0:1)));return new qc(qc.UNKNOWN_ID,this.collectionId,n,cl.empty())}rn(e){for(const n of this.en)if(this.sn(n,e))return!0;return!1}sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}on(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function C1(t){var e,n;if(F(t instanceof K||t instanceof Z),t instanceof K){if(t instanceof HS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>K.create(t.field,"==",s)))||[];return Z.create(i,"or")}return t}const r=t.filters.map(i=>C1(i));return Z.create(r,t.op)}function vF(t){if(t.getFilters().length===0)return[];const e=tm(C1(t));return F(N1(e)),Zp(e)||em(e)?[e]:e.getFilters()}function Zp(t){return t instanceof K}function em(t){return t instanceof Z&&h_(t)}function N1(t){return Zp(t)||em(t)||function(n){if(n instanceof Z&&Gp(n)){for(const r of n.getFilters())if(!Zp(r)&&!em(r))return!1;return!0}return!1}(t)}function tm(t){if(F(t instanceof K||t instanceof Z),t instanceof K)return t;if(t.filters.length===1)return tm(t.filters[0]);const e=t.filters.map(r=>tm(r));let n=Z.create(e,t.op);return n=Qc(n),N1(n)?n:(F(n instanceof Z),F(io(n)),F(n.filters.length>1),n.filters.reduce((r,i)=>E_(r,i)))}function E_(t,e){let n;return F(t instanceof K||t instanceof Z),F(e instanceof K||e instanceof Z),n=t instanceof K?e instanceof K?function(i,s){return Z.create([i,s],"and")}(t,e):Jw(t,e):e instanceof K?Jw(e,t):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),io(i)&&io(s))return WS(i,s.getFilters());const o=Gp(i)?i:s,a=Gp(i)?s:i,l=o.filters.map(u=>E_(u,a));return Z.create(l,"or")}(t,e),Qc(n)}function Jw(t,e){if(io(e))return WS(e,t.getFilters());{const n=e.filters.map(r=>E_(t,r));return Z.create(n,"or")}}function Qc(t){if(F(t instanceof K||t instanceof Z),t instanceof K)return t;const e=t.getFilters();if(e.length===1)return Qc(e[0]);if(jS(t))return t;const n=e.map(i=>Qc(i)),r=[];return n.forEach(i=>{i instanceof K?r.push(i):i instanceof Z&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Z.create(r,t.op)}/**
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
 */class wF{constructor(){this.an=new T_}addToCollectionParentIndex(e,n){return this.an.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}deleteAllFieldIndexes(e){return _.resolve()}createTargetIndexes(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Bt.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class T_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ie(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ie(Y.comparator)).toArray()}}/**
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
 */const Pu=new Uint8Array(0);class IF{constructor(e,n){this.user=e,this.databaseId=n,this.un=new T_,this.cn=new Zr(r=>Bi(r),(r,i)=>jl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.un.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.un.add(n)});const s={collectionId:r,parent:gt(i)};return Zw(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[kS(n),""],!1,!0);return Zw(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(An(o.parent))}return r})}addFieldIndex(e,n){const r=Yo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=us(e);return s.next(a=>{o.put(Gw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Yo(e),i=us(e),s=ls(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Yo(e),r=ls(e),i=us(e);return n.J().next(()=>r.J()).next(()=>i.J())}createTargetIndexes(e,n){return _.forEach(this.ln(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Xw(r);return this.addFieldIndex(e,s._n())}}))}getDocumentsMatchingTarget(e,n){const r=ls(e);let i=!0;const s=new Map;return _.forEach(this.ln(n),o=>this.hn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=z();const a=[];return _.forEach(s,(l,u)=>{T("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`}(l)} to execute ${Bi(n)}`);const c=function(g,I){const R=zp(I);if(R===void 0)return null;for(const k of Gc(g,R.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,l),h=function(g,I){const R=new Map;for(const k of ai(I))for(const N of Gc(g,k.fieldPath))switch(N.op){case"==":case"in":R.set(k.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return R.set(k.fieldPath.canonicalString(),N.value),Array.from(R.values())}return null}(u,l),d=function(g,I){const R=[];let k=!0;for(const N of ai(I)){const L=N.kind===0?Dw(g,N.fieldPath,g.startAt):bw(g,N.fieldPath,g.startAt);R.push(L.value),k&&(k=L.inclusive)}return new $r(R,k)}(u,l),f=function(g,I){const R=[];let k=!0;for(const N of ai(I)){const L=N.kind===0?bw(g,N.fieldPath,g.endAt):Dw(g,N.fieldPath,g.endAt);R.push(L.value),k&&(k=L.inclusive)}return new $r(R,k)}(u,l),y=this.Pn(l,u,d),v=this.Pn(l,u,f),A=this.In(l,u,h),m=this.dn(l.indexId,c,y,d.inclusive,v,f.inclusive,A);return _.forEach(m,p=>r.H(p,n.limit).next(g=>{g.forEach(I=>{const R=C.fromSegments(I.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return _.resolve(null)})}ln(e){let n=this.cn.get(e);return n||(e.filters.length===0?n=[e]:n=vF(Z.create(e.filters,"and")).map(r=>Hp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,n),n)}dn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.Tn(n[h/u]):Pu,f=this.En(e,d,r[h%u],i),y=this.An(e,d,s[h%u],o),v=a.map(A=>this.En(e,d,A,!0));c.push(...this.createRange(f,y,v))}return c}En(e,n,r,i){const s=new hi(e,C.empty(),n,r);return i?s:s.Zt()}An(e,n,r,i){const s=new hi(e,C.empty(),n,r);return i?s.Zt():s}hn(e,n){const r=new Xw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.ln(n);return _.forEach(i,s=>this.hn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ie(Ie.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Rn(e,n){const r=new Qo;for(const i of ai(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);ci.Ct.dt(s,o)}return r.zt()}Tn(e){const n=new Qo;return ci.Ct.dt(e,n.Yt(0)),n.zt()}Vn(e,n){const r=new Qo;return ci.Ct.dt($i(this.databaseId,n),r.Yt(function(s){const o=ai(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}In(e,n,r){if(r===null)return[];let i=[];i.push(new Qo);let s=0;for(const o of ai(e)){const a=r[s++];for(const l of i)if(this.mn(n,o.fieldPath)&&pl(a))i=this.fn(i,o,a);else{const u=l.Yt(o.kind);ci.Ct.dt(a,u)}}return this.gn(i)}Pn(e,n,r){return this.In(e,n,r.position)}gn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Qo;l.seed(a.zt()),ci.Ct.dt(o,l.Yt(n.kind)),s.push(l)}return s}mn(e,n){return!!e.filters.find(r=>r instanceof K&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Yo(e),i=us(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new cl(h.sequenceNumber,new Bt(Wi(h.readTime),new C(An(h.documentKey)),h.largestBatchId)):cl.empty(),f=c.fields.map(([y,v])=>new Hu(Ie.fromServerFormat(y),v));return new qc(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:B(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Yo(e),s=us(e);return this.pn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,l=>s.put(Gw(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,l=>this.yn(e,i,l).next(u=>{const c=this.wn(s,l);return u.isEqual(c)?_.resolve():this.Sn(e,s,l,u,c)}))))})}bn(e,n,r,i){return ls(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(r,n.key),documentKey:n.key.path.toArray()})}Dn(e,n,r,i){return ls(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(r,n.key),n.key.path.toArray()])}yn(e,n,r){const i=ls(e);let s=new ie(or);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Vn(r,n)])},(o,a)=>{s=s.add(new hi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new ie(or);const i=this.Rn(n,e);if(i==null)return r;const s=zp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(pl(o))for(const a of o.arrayValue.values||[])r=r.add(new hi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new hi(n.indexId,e.key,Pu,i));return r}Sn(e,n,r,i,s){T("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),y=u.getIterator();let v=as(f),A=as(y);for(;v||A;){let m=!1,p=!1;if(v&&A){const g=c(v,A);g<0?p=!0:g>0&&(m=!0)}else v!=null?p=!0:m=!0;m?(h(A),A=as(y)):p?(d(v),v=as(f)):(v=as(f),A=as(y))}}(i,s,or,a=>{o.push(this.bn(e,n,r,a))},a=>{o.push(this.Dn(e,n,r,a))}),_.waitFor(o)}pn(e){let n=1;return us(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>or(o,a)).filter((o,a,l)=>!a||or(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=or(o,e),l=or(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Pu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Pu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return or(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(eI)}getMinOffset(e,n){return _.mapArray(this.ln(n),r=>this.hn(e,r).next(i=>i||x())).next(eI)}}function Zw(t){return We(t,"collectionParents")}function ls(t){return We(t,"indexEntries")}function Yo(t){return We(t,"indexConfiguration")}function us(t){return We(t,"indexState")}function eI(t){F(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;l_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Bt(e.readTime,e.documentKey,n)}/**
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
 */const tI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{F(a===1)}));const u=[];for(const c of n.mutations){const h=VS(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return _.waitFor(s).next(()=>u)}function Yc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw x();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class ed{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ed(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ar(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ms(e),o=ar(e);return o.add({}).next(a=>{F(typeof a=="number");const l=new g_(a,n,r,i),u=function(f,y,v){const A=v.baseMutations.map(p=>_l(f.ht,p)),m=v.mutations.map(p=>_l(f.ht,p));return{userId:y,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:A,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new ie((d,f)=>B(d.canonicalString(),f.canonicalString()));for(const d of i){const f=VS(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,u2))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=l.keys()}),_.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return ar(e).get(n).next(r=>r?(F(r.userId===this.userId),ui(this.serializer,r)):null)}Fn(e,n){return this.vn[n]?_.resolve(this.vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ar(e).Z({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(F(a.batchId>=r),s=ui(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ar(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ar(e).G("userMutationsIndex",n).next(r=>r.map(i=>ui(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Qu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ms(e).Z({range:i},(o,a,l)=>{const[u,c,h]=o,d=An(c);if(u===this.userId&&n.path.isEqual(d))return ar(e).get(h).next(f=>{if(!f)throw x();F(f.userId===this.userId),s.push(ui(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(B);const i=[];return n.forEach(s=>{const o=Qu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ms(e).Z({range:a},(u,c,h)=>{const[d,f,y]=u,v=An(f);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),_.waitFor(i).next(()=>this.Mn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Qu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ie(B);return ms(e).Z({range:o},(l,u,c)=>{const[h,d,f]=l,y=An(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Mn(e,a))}Mn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ar(e).get(s).next(o=>{if(o===null)throw x();F(o.userId===this.userId),r.push(ui(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return D1(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.xn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ms(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=An(s[1]);i.push(l)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return b1(e,this.userId,n)}On(e){return x1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function b1(t,e,n){const r=Qu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ms(t).Z({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ar(t){return We(t,"mutations")}function ms(t){return We(t,"documentMutations")}function x1(t){return We(t,"mutationQueues")}/**
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
 */class Gi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Gi(0)}static Ln(){return new Gi(-1)}}/**
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
 */class EF{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.kn(e).next(n=>{const r=new Gi(n.highestTargetId);return n.highestTargetId=r.next(),this.qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(n=>M.fromTimestamp(new de(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.kn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.qn(e,i)))}addTargetData(e,n){return this.Qn(e,n).next(()=>this.kn(e).next(r=>(r.targetCount+=1,this.Kn(n,r),this.qn(e,r))))}updateTargetData(e,n){return this.Qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>cs(e).delete(n.targetId)).next(()=>this.kn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return cs(e).Z((o,a)=>{const l=ca(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return cs(e).Z((r,i)=>{const s=ca(i);n(s)})}kn(e){return nI(e).get("targetGlobalKey").next(n=>(F(n!==null),n))}qn(e,n){return nI(e).put("targetGlobalKey",n)}Qn(e,n){return cs(e).put(k1(this.serializer,n))}Kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.kn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Bi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return cs(e).Z({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ca(a);jl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=fr(e);return n.forEach(o=>{const a=gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=fr(e);return _.forEach(n,s=>{const o=gt(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=fr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=fr(e);let s=z();return i.Z({range:r,Y:!0},(o,a,l)=>{const u=An(o[1]),c=new C(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=gt(n.path),i=IDBKeyRange.bound([r],[kS(r)],!1,!0);let s=0;return fr(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,n){return cs(e).get(n).next(r=>r?ca(r):null)}}function cs(t){return We(t,"targets")}function nI(t){return We(t,"targetGlobal")}function fr(t){return We(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI([t,e],[n,r]){const i=B(t,n);return i===0?B(e,r):i}class TF{constructor(e){this.$n=e,this.buffer=new ie(rI),this.Un=0}Wn(){return++this.Un}Gn(e){const n=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){T("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Jr(n)?T("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Xr(n)}await this.jn(3e5)})}}class SF{constructor(e,n){this.Hn=e,this.params=n}calculateTargetCount(e,n){return this.Hn.Jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(St.ae);const r=new TF(n);return this.Hn.forEachTarget(e,i=>r.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>r.Gn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Hn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Hn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(T("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(tI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(T("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tI):this.Zn(e,n))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(T("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),hs()<=G.DEBUG&&T("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function RF(t,e){return new SF(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n){this.db=e,this.garbageCollector=RF(this,n)}Jn(e){const n=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Xn(e){let n=0;return this.Yn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Yn(e,n){return this.er(e,(r,i)=>n(i))}addReference(e,n,r){return ku(e,r)}removeReference(e,n,r){return ku(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ku(e,n)}tr(e,n){return function(i,s){let o=!1;return x1(i).X(a=>b1(i,a,s).next(l=>(l&&(o=!0),_.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,a)=>{if(a<=n){const l=this.tr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,M.min()),fr(e).delete(function(h){return[0,gt(h.path)]}(o))))});i.push(l)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ku(e,n)}er(e,n){const r=fr(e);let i,s=St.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==St.ae&&n(new C(An(i)),s),s=u,i=l):s=St.ae}).next(()=>{s!==St.ae&&n(new C(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ku(t,e){return fr(t).put(function(r,i){return{targetId:0,path:gt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class V1{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ri(e).put(r)}removeEntry(e,n,r){return ri(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Hc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.nr(e,r)))}getEntry(e,n){let r=le.newInvalidDocument(n);return ri(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xo(n))},(i,s)=>{r=this.rr(n,s)}).next(()=>r)}ir(e,n){let r={size:0,document:le.newInvalidDocument(n)};return ri(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xo(n))},(i,s)=>{r={document:this.rr(n,s),size:Yc(s)}}).next(()=>r)}getEntries(e,n){let r=Pt();return this.sr(e,n,(i,s)=>{const o=this.rr(i,s);r=r.insert(i,o)}).next(()=>r)}_r(e,n){let r=Pt(),i=new se(C.comparator);return this.sr(e,n,(s,o)=>{const a=this.rr(s,o);r=r.insert(s,a),i=i.insert(s,Yc(o))}).next(()=>({documents:r,ar:i}))}sr(e,n,r){if(n.isEmpty())return _.resolve();let i=new ie(oI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Xo(i.first()),Xo(i.last())),o=i.getIterator();let a=o.getNext();return ri(e).Z({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=C.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&oI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.W(Xo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Hc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ri(e).G(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Pt();for(const h of u){const d=this.rr(C.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Wl(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Pt();const o=sI(n,r),a=sI(n,Bt.max());return ri(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.rr(C.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new CF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return iI(e).get("remoteDocumentGlobalKey").next(n=>(F(!!n),n))}nr(e,n){return iI(e).put("remoteDocumentGlobalKey",n)}rr(e,n){if(n){const r=fF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(M.min())))return r}return le.newInvalidDocument(e)}}function O1(t){return new kF(t)}class CF extends V1{constructor(e,n){super(),this.ur=e,this.trackRemovals=n,this.cr=new Zr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ie((s,o)=>B(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.cr.get(s);if(n.push(this.ur.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=qw(this.ur.serializer,o);i=i.add(s.path.popLast());const u=Yc(l);r+=u-a.size,n.push(this.ur.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=qw(this.ur.serializer,o.convertToNoDocument(M.min()));n.push(this.ur.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ur.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.ur.ir(e,n).next(r=>(this.cr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ur._r(e,n).next(({documents:r,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function iI(t){return We(t,"remoteDocumentGlobal")}function ri(t){return We(t,"remoteDocumentsV14")}function Xo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sI(t,e){const n=e.documentKey.path.toArray();return[t,Hc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function oI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=B(n[s],r[s]),i)return i;return i=B(n.length,r.length),i||(i=B(n[n.length-2],r[r.length-2]),i||B(n[n.length-1],r[r.length-1]))}/**
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
 */class NF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class L1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ka(r.mutation,i,Rt.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){const i=Sn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pt();const o=Pa(),a=function(){return Pa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof nr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ka(c.mutation,u,c.mutation.getFieldMask(),de.now())):o.set(u.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new NF(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pa();let i=new se((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Rt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=t1();c.forEach(d=>{if(!s.has(d)){const f=u1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return C.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Sn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,z())).next(c=>({batchId:a,changes:e1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new C(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=la();return this.indexManager.getCollectionParents(e,s).next(a=>_.forEach(a,l=>{const u=function(h,d){return new tr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,le.newInvalidDocument(c)))});let a=la();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ka(c.mutation,u,Rt.empty(),de.now()),Wl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return _.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ke(i.createTime)}}(n)),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:I_(i.bundledQuery),readTime:ke(i.readTime)}}(n)),_.resolve()}}/**
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
 */class bF{constructor(){this.overlays=new se(C.comparator),this.Pr=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Sn(),s=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Sn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Sn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y_(n,r));let s=this.Pr.get(n);s===void 0&&(s=z(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class A_{constructor(){this.Ir=new ie(Fe.dr),this.Tr=new ie(Fe.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Fe(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new C(new Y([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new C(new Y([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=z();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return C.comparator(e.key,n.key)||B(e.yr,n.yr)}static Er(e,n){return B(e.yr,n.yr)||C.comparator(e.key,n.key)}}/**
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
 */class xF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ie(Fe.dr)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(B);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),_.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;C.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new C(s),0);let a=new ie(B);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),_.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return _.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Sr.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class VF{constructor(e){this.Fr=e,this.docs=function(){return new se(C.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():le.newInvalidDocument(n))}getEntries(e,n){let r=Pt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():le.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pt();const o=n.path,a=new C(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||l_(NS(c),r)<=0||(i.has(c.key)||Wl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){x()}Mr(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OF(this)}getSize(e){return _.resolve(this.size)}}class OF extends V1{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class LF{constructor(e){this.persistence=e,this.Or=new Zr(n=>Bi(n),jl),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Nr=0,this.Br=new A_,this.targetCount=0,this.Lr=Gi.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),_.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Qn(n),_.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Br.containsKey(n))}}/**
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
 */class M1{constructor(e,n){this.kr={},this.overlays={},this.qr=new St(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new LF(this),this.indexManager=new wF,this.remoteDocumentCache=function(i){return new VF(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new P1(n),this.Ur=new DF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new xF(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){T("MemoryPersistence","Starting transaction:",e);const i=new MF(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return _.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class MF extends bS{constructor(e){super(),this.currentSequenceNumber=e}}class td{constructor(e){this.persistence=e,this.jr=new A_,this.Hr=null}static Jr(e){return new td(e)}get Yr(){if(this.Hr)return this.Hr;throw x()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),_.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Yr,r=>{const i=C.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,M.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return _.or([()=>_.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e){this.serializer=e}B(e,n,r,i){const s=new Hh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0}),l.createObjectStore("documentMutations")}(e),aI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),aI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:M.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").G().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return _.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ei(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),r<7&&i>=7&&(o=o.next(()=>this.ni(s))),r<8&&i>=8&&(o=o.next(()=>this.ri(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ii(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:I2});u.createIndex("collectionPathOverlayIndex",E2,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",T2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:c2});u.createIndex("documentKeyIndex",h2),u.createIndex("collectionGroupIndex",d2)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.oi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:_2}).createIndex("sequenceNumberIndex",y2,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:v2}).createIndex("documentKeyIndex",w2,{unique:!1})}(e))),o}ti(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Yc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ei(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>_.forEach(a,l=>{F(l.userId===s.userId);const u=ui(this.serializer,l);return D1(e,s.userId,u).next(()=>{})}))}))}ni(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const l=new Y(o),u=function(h){return[0,gt(h)]}(l);s.push(n.get(u).next(c=>c?_.resolve():(h=>n.put({targetId:0,path:gt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>_.waitFor(s))})}ri(e,n){e.createObjectStore("collectionParents",{keyPath:g2});const r=n.store("collectionParents"),i=new T_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:gt(l)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const l=new Y(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,l],u)=>{const c=An(a);return s(c.popLast())}))}ii(e){const n=e.store("targets");return n.Z((r,i)=>{const s=ca(i),o=k1(this.serializer,s);return n.put(o)})}si(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new C(Y.fromString(h.document.name).popFirst(5)):h.noDocument?C.fromSegments(h.noDocument.path):h.unknownDocument?C.fromSegments(h.unknownDocument.path):x()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>_.waitFor(i))}oi(e,n){const r=n.store("mutations"),i=O1(this.serializer),s=new M1(td.Jr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:z();ui(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),_.forEach(a,(l,u)=>{const c=new $e(u),h=Zh.Pt(this.serializer,c),d=s.getIndexManager(c),f=ed.Pt(c,this.serializer,d,s.referenceDelegate);return new L1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new jp(n,St.ae),l).next()})})}}function aI(t){t.createObjectStore("targetDocuments",{keyPath:p2}).createIndex("documentTargetsIndex",m2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",f2,{unique:!0}),t.createObjectStore("targetGlobal")}const wf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class S_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this._i=s,this.window=o,this.document=a,this.ai=u,this.ui=c,this.ci=h,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!S_.C())throw new E(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new PF(this,i),this.Ti=n+"main",this.serializer=new P1(l),this.Ei=new on(this.Ti,this.ci,new FF(this.serializer)),this.Kr=new EF(this.referenceDelegate,this.serializer),this.remoteDocumentCache=O1(this.serializer),this.Ur=new pF,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,c===!1&&Pe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(w.FAILED_PRECONDITION,wf);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new St(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Cu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(n=>{n||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(n=>this.isPrimary&&!n?this.wi(e).next(()=>!1):!!n&&this.Si(e).next(()=>!0))).catch(e=>{if(Jr(e))return T("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return T("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return Jo(e).get("owner").next(n=>_.resolve(this.bi(n)))}Di(e){return Cu(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=We(n,"clientMetadata");return r.G().next(i=>{const s=this.Fi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ai)for(const n of e)this.Ai.removeItem(this.Mi(n.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?_.resolve(!0):Jo(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)){if(this.bi(n)&&this.networkEnabled)return!0;if(!this.bi(n)){if(!n.allowTabSynchronization)throw new E(w.FAILED_PRECONDITION,wf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cu(e).G().next(r=>this.Fi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&T("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new jp(e,St.ae);return this.wi(n).next(()=>this.Di(n))}),this.Ei.close(),this.Li()}Fi(e,n){return e.filter(r=>this.vi(r.updateTimeMs,n)&&!this.xi(r.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>Cu(e).G().next(n=>this.Fi(n,18e5).map(r=>r.clientId)))}get started(){return this.Qr}getMutationQueue(e,n){return ed.Pt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new IF(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return Zh.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,n,r){T("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?S2:l===14?MS:l===13?LS:l===12?A2:l===11?OS:void x()}(this.ci);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new jp(a,this.qr?this.qr.next():St.ae),n==="readwrite-primary"?this.pi(o).next(l=>!!l||this.yi(o)).next(l=>{if(!l)throw Pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new E(w.FAILED_PRECONDITION,DS);return r(o)}).next(l=>this.Si(o).next(()=>l)):this.qi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}qi(e){return Jo(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.xi(n.ownerId)&&!this.bi(n)&&!(this.ui||this.allowTabSynchronization&&n.allowTabSynchronization))throw new E(w.FAILED_PRECONDITION,wf)})}Si(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Jo(e).put("owner",n)}static C(){return on.C()}wi(e){const n=Jo(e);return n.get("owner").next(r=>this.bi(r)?(T("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Pe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Vi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.li=()=>{this.Oi();const n=/(?:Version|Mobile)\/1[456]/;VC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var n;try{const r=((n=this.Ai)===null||n===void 0?void 0:n.getItem(this.Mi(e)))!==null;return T("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Pe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){Pe("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch{}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Jo(t){return We(t,"owner")}function Cu(t){return We(t,"clientMetadata")}function R_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class P_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new P_(e,n.fromCache,r,i)}}/**
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
 */class UF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class F1{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new UF;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(hs()<=G.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),_.resolve()):(hs()<=G.DEBUG&&T("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(hs()<=G.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(n))):_.resolve())}Hi(e,n){if(xw(n))return _.resolve(null);let r=_t(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kc(n,null,"F"),r=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Kc(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return xw(n)||i.isEqual(M.min())?_.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?_.resolve(null):(hs()<=G.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ds(n)),this.ts(e,o,n,CS(i,-1)).next(a=>a))})}Xi(e,n){let r=new ie(JS(e));return n.forEach((i,s)=>{Wl(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return hs()<=G.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ji.getDocumentsMatchingQuery(e,n,Bt.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new se(B),this.ss=new Zr(s=>Bi(s),jl),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function U1(t,e,n,r){return new $F(t,e,n,r)}async function $1(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function BF(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=_.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(v=>{const A=u.docVersions.get(y);F(A!==null),v.version.compareTo(A)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function B1(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function zF(t,e){const n=D(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Le.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(v,A,m){return v.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.Kr.updateTargetData(s,f))});let l=Pt(),u=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(z1(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(M.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function z1(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(M.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function jF(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function uo(t,e,n){const r=D(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jr(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Xc(t,e,n){const r=D(t);let i=M.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.ss.get(c);return d!==void 0?_.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,_t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?s:z())).next(a=>(W1(r,XS(e),a),{documents:a,Ps:s})))}function j1(t,e){const n=D(t),r=D(n.Kr),i=n.rs.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function q1(t,e){const n=D(t),r=n.os.get(e)||M.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n._s.getAllFromCollectionGroup(i,e,CS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(W1(n,e,i),i))}function W1(t,e,n){let r=t.os.get(e)||M.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}async function qF(t,e,n,r){const i=D(t);let s=z(),o=Pt();for(const u of n){const c=e.Is(u.metadata.name);u.document&&(s=s.add(c));const h=e.ds(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i._s.newChangeBuffer({trackRemovals:!0}),l=await lo(i,function(c){return _t(Ro(Y.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>z1(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Kr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Kr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.ls,c.hs)).next(()=>c.ls)))}async function WF(t,e,n=z()){const r=await lo(t,_t(I_(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ur.saveNamedQuery(s,e);const a=r.withResumeToken(Le.EMPTY_BYTE_STRING,o);return i.rs=i.rs.insert(a.targetId,a),i.Kr.updateTargetData(s,a).next(()=>i.Kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ur.saveNamedQuery(s,e))})}function lI(t,e){return`firestore_clients_${t}_${e}`}function uI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function If(t,e){return`firestore_targets_${t}_${e}`}class Jc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new E(i.error.code,i.error.message))),o?new Jc(e,n,i.state,s):(Pe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ca{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new E(r.error.code,r.error.message))),s?new Ca(e,r.state,i):(Pe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=p_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=xS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Zc(e,s):(Pe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class k_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new k_(n.clientId,n.onlineState):(Pe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class nm{constructor(){this.activeTargetIds=p_()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ef{constructor(e,n,r,i,s){this.window=e,this._i=n,this.persistenceKey=r,this.fs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new se(B),this.started=!1,this.ws=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=lI(this.persistenceKey,this.fs),this.bs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ys=this.ys.insert(this.fs,new nm),this.Ds=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Fs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Ms=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const r of e){if(r===this.fs)continue;const i=this.getItem(lI(this.persistenceKey,r));if(i){const s=Zc.Es(r,i);s&&(this.ys=this.ys.insert(s.clientId,s))}}this.xs();const n=this.storage.getItem(this.Fs);if(n){const r=this.Os(n);r&&this.Ns(r)}for(const r of this.ws)this.ps(r);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let n=!1;return this.ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.ks(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(If(this.persistenceKey,e));if(r){const i=Ca.Es(e,r);i&&(n=i.state)}}return this.qs.Rs(e),this.xs(),n}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(If(this.persistenceKey,e))}updateQueryState(e,n,r){this.Qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ks(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return T("SharedClientState","READ",e,n),n}setItem(e,n){T("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){T("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const n=e;if(n.storageArea===this.storage){if(T("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ss)return void Pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ds.test(n.key)){if(n.newValue==null){const r=this.Us(n.key);return this.Ws(r,null)}{const r=this.Gs(n.key,n.newValue);if(r)return this.Ws(r.clientId,r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(this.vs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(n.key===this.Fs){if(n.newValue!==null){const r=this.Os(n.newValue);if(r)return this.Ns(r)}}else if(n.key===this.bs){const r=function(s){let o=St.ae;if(s!=null)try{const a=JSON.parse(s);F(typeof a=="number"),o=a}catch(a){Pe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==St.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.Ms){const r=this.Ys(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Zs(i)))}}}else this.ws.push(n)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,n,r){const i=new Jc(this.currentUser,e,n,r),s=uI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.As())}ks(e){const n=uI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Ks(e){const n={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(n))}Qs(e,n,r){const i=If(this.persistenceKey,e),s=new Ca(e,n,r);this.setItem(i,s.As())}$s(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Ms,n)}Us(e){const n=this.Ds.exec(e);return n?n[1]:null}Gs(e,n){const r=this.Us(e);return Zc.Es(r,n)}zs(e,n){const r=this.Cs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Jc.Es(new $e(s),i,n)}Hs(e,n){const r=this.vs.exec(e),i=Number(r[1]);return Ca.Es(i,n)}Os(e){return k_.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);T("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,n){const r=n?this.ys.insert(e,n):this.ys.remove(e),i=this.Bs(this.ys),s=this.Bs(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.no(o,a).then(()=>{this.ys=r})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let n=p_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class G1{constructor(){this.ro=new nm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new nm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GF{so(e){}shutdown(){}}/**
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
 */class cI{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function Tf(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class HF{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const st="WebChannelConnection";class QF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Tf(),l=this.Do(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(T("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw dn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=KF[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Tf();return new Promise((o,a)=>{const l=new WM;l.setWithCredentials(!0),l.listenOnce(jM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yf.NO_ERROR:const c=l.getResponseJson();T(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case yf.TIMEOUT:T(st,`RPC '${e}' ${s} timed out`),a(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const h=l.getStatus();if(T(st,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(A){const m=A.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(f.status);a(new E(y,f.message))}else a(new E(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new E(w.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{T(st,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);T(st,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Tf(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BM(),a=zM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");T(st,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new HF({ho:A=>{f?T(st,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(d||(T(st,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),T(st,`RPC '${e}' stream ${i} sending:`,A),h.send(A))},Po:()=>h.close()}),v=(A,m,p)=>{A.listen(m,g=>{try{p(g)}catch(I){setTimeout(()=>{throw I},0)}})};return v(h,Su.EventType.OPEN,()=>{f||T(st,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Su.EventType.CLOSE,()=>{f||(f=!0,T(st,`RPC '${e}' stream ${i} transport closed`),y.mo())}),v(h,Su.EventType.ERROR,A=>{f||(f=!0,dn(st,`RPC '${e}' stream ${i} transport errored:`,A),y.mo(new E(w.UNAVAILABLE,"The operation could not be completed")))}),v(h,Su.EventType.MESSAGE,A=>{var m;if(!f){const p=A.data[0];F(!!p);const g=p,I=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(I){T(st,`RPC '${e}' stream ${i} received error:`,I);const R=I.status;let k=function(ne){const q=Ne[ne];if(q!==void 0)return d1(q)}(R),N=I.message;k===void 0&&(k=w.INTERNAL,N="Unknown error status: "+R+" with message "+I.message),f=!0,y.mo(new E(k,N)),h.close()}else T(st,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),v(a,qM.STAT_EVENT,A=>{A.stat===_w.PROXY?T(st,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===_w.NOPROXY&&T(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function K1(){return typeof window<"u"?window:null}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){return new rF(t,!0)}/**
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
 */class C_{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class H1{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new C_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Pe(n.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new E(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YF extends H1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=oF(this.serializer,e),r=function(s){if(!("targetChange"in s))return M.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?M.min():o.readTime?ke(o.readTime):M.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=gl(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wc(l)?{documents:I1(s,l)}:{query:E1(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=g1(s,o.resumeToken);const u=Yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(M.min())>0){a.readTime=ao(s,o.snapshotVersion.toTimestamp());const u=Yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=lF(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=gl(this.serializer),n.removeTarget=e,this.n_(n)}}class XF extends H1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=aF(e.writeResults,e.commitTime),r=ke(e.commitTime);return this.listener.T_(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=gl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_l(this.serializer,r))};this.n_(n)}}/**
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
 */class JF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(w.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(w.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class ZF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Pe(n),this.p_=!1):T("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class eU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{ei(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.F_.add(4),await Co(u),u.O_.set("Unknown"),u.F_.delete(4),await Yl(u)}(this))})}),this.O_=new ZF(r,i)}}async function Yl(t){if(ei(t))for(const e of t.M_)await e(!0)}async function Co(t){for(const e of t.M_)await e(!1)}function nd(t,e){const n=D(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),b_(n)?D_(n):Do(n).Yo()&&N_(n,e))}function yl(t,e){const n=D(t),r=Do(n);n.v_.delete(e),r.Yo()&&Q1(n,e),n.v_.size===0&&(r.Yo()?r.e_():ei(n)&&n.O_.set("Unknown"))}function N_(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).l_(e)}function Q1(t,e){t.N_.Le(e),Do(t).h_(e)}function D_(t){t.N_=new Z2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.O_.y_()}function b_(t){return ei(t)&&!Do(t).Jo()&&t.v_.size>0}function ei(t){return D(t).F_.size===0}function Y1(t){t.N_=void 0}async function tU(t){t.v_.forEach((e,n)=>{N_(t,e)})}async function nU(t,e){Y1(t),b_(t)?(t.O_.b_(e),D_(t)):t.O_.set("Unknown")}async function rU(t,e,n){if(t.O_.set("Online"),e instanceof m1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eh(t,r)}else if(e instanceof Zu?t.N_.Ge(e):e instanceof p1?t.N_.Xe(e):t.N_.He(e),!n.isEqual(M.min()))try{const r=await B1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Q1(s,l);const h=new Fn(c.target,l,u,c.sequenceNumber);N_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await eh(t,r)}}async function eh(t,e,n){if(!Jr(e))throw e;t.F_.add(1),await Co(t),t.O_.set("Offline"),n||(n=()=>B1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Yl(t)})}function X1(t,e){return e().catch(n=>eh(t,n,e))}async function No(t){const e=D(t),n=Br(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;iU(e);)try{const i=await jF(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,sU(e,i)}catch(i){await eh(e,i)}J1(e)&&Z1(e)}function iU(t){return ei(t)&&t.C_.length<10}function sU(t,e){t.C_.push(e);const n=Br(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function J1(t){return ei(t)&&!Br(t).Jo()&&t.C_.length>0}function Z1(t){Br(t).start()}async function oU(t){Br(t).A_()}async function aU(t){const e=Br(t);for(const n of t.C_)e.d_(n.mutations)}async function lU(t,e,n){const r=t.C_.shift(),i=__.from(r,e,n);await X1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await No(t)}async function uU(t,e){e&&Br(t).I_&&await async function(r,i){if(function(o){return h1(o)&&o!==w.ABORTED}(i.code)){const s=r.C_.shift();Br(r).Xo(),await X1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await No(r)}}(t,e),J1(t)&&Z1(t)}async function hI(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=ei(n);n.F_.add(3),await Co(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Yl(n)}async function rm(t,e){const n=D(t);e?(n.F_.delete(2),await Yl(n)):e||(n.F_.add(2),await Co(n),n.O_.set("Unknown"))}function Do(t){return t.B_||(t.B_=function(n,r,i){const s=D(n);return s.V_(),new YF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:tU.bind(null,t),Eo:nU.bind(null,t),c_:rU.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),b_(t)?D_(t):t.O_.set("Unknown")):(await t.B_.stop(),Y1(t))})),t.B_}function Br(t){return t.L_||(t.L_=function(n,r,i){const s=D(n);return s.V_(),new XF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:oU.bind(null,t),Eo:uU.bind(null,t),E_:aU.bind(null,t),T_:lU.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await No(t)):(await t.L_.stop(),t.C_.length>0&&(T("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class x_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new x_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(t,e){if(Pe("AsyncQueue",`${e}: ${t}`),Jr(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||C.comparator(n.key,r.key):(n,r)=>C.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dI{constructor(){this.k_=new se(C.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):x():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class co{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new co(e,n,qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cU{constructor(){this.Q_=void 0,this.listeners=[]}}class hU{constructor(){this.queries=new Zr(e=>YS(e),ql),this.onlineState="Unknown",this.K_=new Set}}async function V_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cU),i)try{s.Q_=await n.onListen(r)}catch(o){const a=bo(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&L_(n)}async function O_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function dU(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&L_(n)}function fU(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function L_(t){t.K_.forEach(e=>{e.next()})}class M_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.serializer=e}Is(e){return kn(this.serializer,e)}ds(e){return e.metadata.exists?w1(this.serializer,e.document,!1):le.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ke(e)}}class mU{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=eR(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=Y.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new fI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Is(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||z()).add(s);n.set(o,a)}}return n}async complete(){const e=await qF(this.localStore,new fI(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await WF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function eR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class tR{constructor(e){this.key=e}}class nR{constructor(e){this.key=e}}class rR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=z(),this.mutatedKeys=z(),this.ua=JS(e),this.ca=new qs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new dI,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Wl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let A=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),A=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),A=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),A=!0):d&&!f&&(r.track({type:1,doc:d}),A=!0,(l||u)&&(a=!0)),A&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return y(d)-y(f)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new co(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new dI,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=z(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new nR(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new tR(r))}),n}Ra(e){this.oa=e.Ps,this.aa=z();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return co.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class gU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _U{constructor(e){this.key=e,this.ma=!1}}class yU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Zr(a=>YS(a),ql),this.pa=new Map,this.ya=new Set,this.wa=new se(C.comparator),this.Sa=new Map,this.ba=new A_,this.Da={},this.Ca=new Map,this.va=Gi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function vU(t,e){const n=z_(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await lo(n.localStore,_t(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await F_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&nd(n.remoteStore,o)}return i}async function F_(t,e,n,r,i){t.Ma=(h,d,f)=>async function(v,A,m,p){let g=A.view.ha(m);g.es&&(g=await Xc(v.localStore,A.query,!1).then(({documents:k})=>A.view.ha(k,g)));const I=p&&p.targetChanges.get(A.targetId),R=A.view.applyChanges(g,v.isPrimaryClient,I);return im(v,A.targetId,R.Ea),R.snapshot}(t,h,d,f);const s=await Xc(t.localStore,e,!0),o=new rR(e,s.Ps),a=o.ha(s.documents),l=Hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);im(t,n,u.Ea);const c=new gU(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function wU(t,e){const n=D(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!ql(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yl(n.remoteStore,r.targetId),ho(n,r.targetId)}).catch(Xr)):(ho(n,r.targetId),await uo(n.localStore,r.targetId,!0))}async function IU(t,e,n){const r=j_(t);try{const i=await function(o,a){const l=D(o),u=de.now(),c=a.reduce((f,y)=>f.add(y.key),z());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Pt(),v=z();return l._s.getEntries(f,c).next(A=>{y=A,y.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(A=>{h=A;const m=[];for(const p of a){const g=Y2(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new nr(p.key,g,BS(g.value.mapValue),he.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(A=>{d=A;const m=A.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,A.batchId,m)})}).then(()=>({batchId:d.batchId,changes:e1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new se(B)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await rr(r,i.changes),await No(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");n.reject(s)}}async function iR(t,e){const n=D(t);try{const r=await zF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?F(o.ma):i.removedDocuments.size>0&&(F(o.ma),o.ma=!1))}),await rr(n,r,e)}catch(r){await Xr(r)}}function pI(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&L_(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EU(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new se(C.comparator);o=o.insert(s,le.newNoDocument(s,M.min()));const a=z().add(s),l=new Kl(M.min(),new Map,new se(B),o,a);await iR(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),B_(r)}else await uo(r.localStore,e,!1).then(()=>ho(r,e,n)).catch(Xr)}async function TU(t,e){const n=D(t),r=e.batch.batchId;try{const i=await BF(n.localStore,e);$_(n,r,null),U_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rr(n,i)}catch(i){await Xr(i)}}async function AU(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);$_(r,e,n),U_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rr(r,i)}catch(i){await Xr(i)}}async function SU(t,e){const n=D(t);ei(n.remoteStore)||T("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function U_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function $_(t,e,n){const r=D(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function ho(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||sR(t,r)})}function sR(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(yl(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),B_(t))}function im(t,e,n){for(const r of n)r instanceof tR?(t.ba.addReference(r.key,e),RU(t,r)):r instanceof nR?(T("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||sR(t,r.key)):x()}function RU(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(T("SyncEngine","New document in limbo: "+n),t.ya.add(r),B_(t))}function B_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new C(Y.fromString(e)),r=t.va.next();t.Sa.set(r,new _U(n)),t.wa=t.wa.insert(n,r),nd(t.remoteStore,new Fn(_t(Ro(n.path)),r,"TargetPurposeLimboResolution",St.ae))}}async function rr(t,e,n){const r=D(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=P_.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(u,d=>_.forEach(d.Qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>_.forEach(d.Ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Jr(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.rs.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(d,v)}}}(r.localStore,s))}async function PU(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const r=await $1(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new E(w.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rr(n,r.cs)}}function kU(t,e){const n=D(t),r=n.Sa.get(e);if(r&&r.ma)return z().add(r.key);{let i=z();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function CU(t,e){const n=D(t),r=await Xc(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&im(n,e.targetId,i.Ea),i}async function NU(t,e){const n=D(t);return q1(n.localStore,e).then(r=>rr(n,r))}async function DU(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Fn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await No(i.remoteStore):n==="acknowledged"||n==="rejected"?($_(i,e,r||null),U_(i,e),function(a,l){D(D(a).mutationQueue).xn(l)}(i.localStore,e)):x(),await rr(i,s)):T("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bU(t,e){const n=D(t);if(z_(n),j_(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await mI(n,r.toArray());n.Fa=!0,await rm(n.remoteStore,!0);for(const s of i)nd(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ho(n,o),uo(n.localStore,o,!0))),yl(n.remoteStore,o)}),await i,await mI(n,r),function(o){const a=D(o);a.Sa.forEach((l,u)=>{yl(a.remoteStore,u)}),a.ba.gr(),a.Sa=new Map,a.wa=new se(C.comparator)}(n),n.Fa=!1,await rm(n.remoteStore,!1)}}async function mI(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await lo(r.localStore,_t(l[0]));for(const u of l){const c=r.ga.get(u),h=await CU(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await j1(r.localStore,o);a=await lo(r.localStore,u),await F_(r,oR(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.c_(s),i}function oR(t){return QS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function xU(t){return function(n){return D(D(n).persistence).ki()}(D(t).localStore)}async function VU(t,e,n,r){const i=D(t);if(i.Fa)return void T("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await q1(i.localStore,XS(s[0])),a=Kl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Le.EMPTY_BYTE_STRING);await rr(i,o,a);break}case"rejected":await uo(i.localStore,e,!0),ho(i,e,r);break;default:x()}}async function OU(t,e,n){const r=z_(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){T("SyncEngine","Adding an already active target "+i);continue}const s=await j1(r.localStore,i),o=await lo(r.localStore,s);await F_(r,oR(s),o.targetId,!1,o.resumeToken),nd(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await uo(r.localStore,i,!1).then(()=>{yl(r.remoteStore,i),ho(r,i)}).catch(Xr)}}function z_(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EU.bind(null,e),e.fa.c_=dU.bind(null,e.eventManager),e.fa.xa=fU.bind(null,e.eventManager),e}function j_(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AU.bind(null,e),e}function LU(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,y){const v=D(f),A=ke(y.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",m=>v.Ur.getBundleMetadata(m,y.id)).then(m=>!!m&&m.createTime.compareTo(A)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(eR(l));const u=new mU(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const d=await u.na(c);d&&a._updateProgress(d),c=await o.Oa()}const h=await u.complete();return await rr(s,h.sa,void 0),await function(f,y){const v=D(f);return v.persistence.runTransaction("Save bundle","readwrite",A=>v.Ur.saveBundleMetadata(A,y))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(l){return dn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class sm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return U1(this.persistence,new F1,e.initialUser,this.serializer)}createPersistence(e){return new M1(td.Jr,this.serializer)}createSharedClientState(e){return new G1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aR extends sm{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await j_(this.Na.syncEngine),await No(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return U1(this.persistence,new F1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new AF(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new a2(n,this.persistence);return new o2(e.asyncQueue,r)}createPersistence(e){const n=R_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new S_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,K1(),ec(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new G1}}class MU extends aR{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Ef&&(this.sharedClientState.syncEngine={Xs:DU.bind(null,n),eo:VU.bind(null,n),no:OU.bind(null,n),ki:xU.bind(null,n),Zs:NU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.gi(async r=>{await bU(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=K1();if(!Ef.C(n))throw new E(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=R_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ef(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class q_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PU.bind(null,this.syncEngine),await rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hU}()}createDatastore(e){const n=Ql(e.databaseInfo.databaseId),r=function(s){return new QF(s)}(e.databaseInfo);return function(s,o,a,l){return new JF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new eU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pI(this.syncEngine,n,0),function(){return cI.C()?new cI:new GF}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new yU(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);T("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Co(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new ze,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new pU(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class UU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=D(i),a=gl(o.serializer)+"/documents",l={documents:s.map(d=>ml(o.serializer,d))},u=await o.Fo("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=sF(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());F(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=C.fromPath(r);this.mutations.push(new m_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o=gl(s.serializer)+"/documents",a={writes:i.map(l=>_l(s.serializer,l))};await s.bo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw x();n=M.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new E(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(M.min())?he.exists(!1):he.updateTime(n):he.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(M.min()))throw new E(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return he.updateTime(n)}return he.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class $U{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.Ho=new C_(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new UU(this.datastore),n=this.Ha(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ja(i)}))}).catch(r=>{this.Ja(r)})})}Ha(e){try{const n=this.updateFunction(e);return!zl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!h1(n)}return!1}}/**
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
 */class BU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=PS.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await W_(t);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>hI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>hI(e.remoteStore,s)),t._onlineComponents=e}function lR(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function W_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lR(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new sm)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new sm);return t._offlineComponents}async function id(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await om(t,t._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await om(t,new q_))),t._onlineComponents}function uR(t){return W_(t).then(e=>e.persistence)}function G_(t){return W_(t).then(e=>e.localStore)}function cR(t){return id(t).then(e=>e.remoteStore)}function K_(t){return id(t).then(e=>e.syncEngine)}function zU(t){return id(t).then(e=>e.datastore)}async function fo(t){const e=await id(t),n=e.eventManager;return n.onListen=vU.bind(null,e.syncEngine),n.onUnlisten=wU.bind(null,e.syncEngine),n}function jU(t){return t.asyncQueue.enqueue(async()=>{const e=await uR(t),n=await cR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.F_.delete(0),Yl(s)}(n)})}function qU(t){return t.asyncQueue.enqueue(async()=>{const e=await uR(t),n=await cR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.F_.add(0),await Co(s),s.O_.set("Offline")}(n)})}function WU(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new E(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=bo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await G_(t),e,n)),n.promise}function hR(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new rd({next:d=>{o.enqueueAndForget(()=>O_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new E(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new E(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new M_(Ro(a.path),c,{includeMetadataChanges:!0,Z_:!0});return V_(s,h)}(await fo(t),t.asyncQueue,e,n,r)),r.promise}function GU(t,e){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Xc(i,s,!0),l=new rR(s,a.Ps),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=bo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await G_(t),e,n)),n.promise}function dR(t,e,n={}){const r=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new rd({next:d=>{o.enqueueAndForget(()=>O_(s,h)),d.fromCache&&l.source==="server"?u.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new M_(a,c,{includeMetadataChanges:!0,Z_:!0});return V_(s,h)}(await fo(t),t.asyncQueue,e,n,r)),r.promise}function KU(t,e){const n=new rd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.add(s),s.next()}(await fo(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.delete(s)}(await fo(t),n))}}function HU(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?f1().encode(o):o,function(c,h){return new FU(c,h)}(function(c,h){if(c instanceof Uint8Array)return gI(c,h);if(c instanceof ArrayBuffer)return gI(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Ql(e));t.asyncQueue.enqueueAndForget(async()=>{LU(await K_(t),i,r)})}function QU(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ur.getNamedQuery(o,i))}(await G_(t),e))}/**
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
 */function fR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Map;/**
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
 */function H_(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pR(t,e,n,r){if(e===!0&&r===!0)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yI(t){if(!C.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vI(t){if(C.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":x()}function J(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mR(t,e){if(e<=0)throw new E(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QM;switch(r.type){case"firstParty":return new ZM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_I.get(n);r&&(T("ComponentProvider","Removing Datastore"),_I.delete(n),r.terminate())}(this),Promise.resolve()}}function gR(t,e,n,r={}){var i;const s=(t=J(t,Xl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$e.MOCK_USER;else{a=DC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $e(u)}t._authCredentials=new YM(new RS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt=class _R{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _R(this.firestore,e,this._query)}},ge=class yR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yR(this.firestore,e,this._key)}},Cr=class vR extends yt{constructor(e,n,r){super(e,n,Ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new C(e))}withConverter(e){return new vR(this.firestore,e,this._path)}};function wR(t,e,...n){if(t=U(t),H_("collection","path",e),t instanceof Xl){const r=Y.fromString(e,...n);return vI(r),new Cr(t,null,r)}{if(!(t instanceof ge||t instanceof Cr))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return vI(r),new Cr(t.firestore,null,r)}}function YU(t,e){if(t=J(t,Xl),H_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new yt(t,null,function(r){return new tr(Y.emptyPath(),r)}(e))}function th(t,e,...n){if(t=U(t),arguments.length===1&&(e=PS.V()),H_("doc","path",e),t instanceof Xl){const r=Y.fromString(e,...n);return yI(r),new ge(t,null,new C(r))}{if(!(t instanceof ge||t instanceof Cr))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return yI(r),new ge(t.firestore,t instanceof Cr?t.converter:null,new C(r))}}function IR(t,e){return t=U(t),e=U(e),(t instanceof ge||t instanceof Cr)&&(e instanceof ge||e instanceof Cr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ER(t,e){return t=U(t),e=U(e),t instanceof yt&&e instanceof yt&&t.firestore===e.firestore&&ql(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new C_(this,"async_queue_retry"),this.ou=()=>{const n=ec();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new ze;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Jr(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=x_.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&x()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function am(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class JU{constructor(){this._progressObserver={},this._taskCompletionResolver=new ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU=-1;let Ae=class extends Xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new XU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TR(this),this._firestoreClient.terminate()}};function e$(t,e){const n=typeof t=="object"?t:hg(),r=typeof t=="string"?t:e||"(default)",i=Yi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kC("firestore");s&&gR(i,...s)}return i}function Ge(t){return t._firestoreClient||TR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new k2(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function t$(t,e){SR(t=J(t,Ae));const n=Ge(t);if(n._uninitializedComponentsProvider)throw new E(w.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new q_;return AR(n,i,new aR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function n$(t){SR(t=J(t,Ae));const e=Ge(t);if(e._uninitializedComponentsProvider)throw new E(w.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new q_;return AR(e,r,new MU(r,n.cacheSizeBytes))}function AR(t,e,n){const r=new ze;return t.asyncQueue.enqueue(async()=>{try{await tc(t,n),await om(t,e),r.resolve()}catch(i){const s=i;if(!lR(s))throw s;dn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function r$(t){if(t._initialized&&!t._terminated)throw new E(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!on.C())return Promise.resolve();const i=r+"main";await on.delete(i)}(R_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function i$(t){return function(n){const r=new ze;return n.asyncQueue.enqueueAndForget(async()=>SU(await K_(n),r)),r.promise}(Ge(t=J(t,Ae)))}function s$(t){return jU(Ge(t=J(t,Ae)))}function o$(t){return qU(Ge(t=J(t,Ae)))}function a$(t,e){const n=Ge(t=J(t,Ae)),r=new JU;return HU(n,t._databaseId,e,r),r}function l$(t,e){return QU(Ge(t=J(t,Ae)),e).then(n=>n?new yt(t,null,n.query):null)}function SR(t){if(t._initialized||t._terminated)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(Le.fromBase64String(e))}catch(n){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es=class{constructor(e){this._methodName=e}};/**
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
 */class od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
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
 */const u$=/^__.*__$/;class c${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class RR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ad{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return nh(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(PR(this.Tu)&&u$.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class h${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ql(e)}wu(e,n,r,i=!1){return new ad({Tu:e,methodName:n,yu:r,path:Ie.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ts(t){const e=t._freezeSettings(),n=Ql(t._databaseId);return new h$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ld(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);J_("Data must be an object, but it was:",o,r);const a=NR(r,o);let l,u;if(s.merge)l=new Rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=lm(e,h,n);if(!o.contains(d))throw new E(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bR(c,d)||c.push(d)}l=new Rt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new c$(new Ye(a),l,u)}class Jl extends es{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jl}}function kR(t,e,n){return new ad({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Q_ extends es{_toFieldTransform(e){return new Gl(e.path,new so)}isEqual(e){return e instanceof Q_}}class d$ extends es{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=kR(this,e,!0),r=this.Su.map(s=>ns(s,n)),i=new zi(r);return new Gl(e.path,i)}isEqual(e){return this===e}}class f$ extends es{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=kR(this,e,!0),r=this.Su.map(s=>ns(s,n)),i=new ji(r);return new Gl(e.path,i)}isEqual(e){return this===e}}class p$ extends es{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=new oo(e.serializer,i1(e.serializer,this.bu));return new Gl(e.path,n)}isEqual(e){return this===e}}function Y_(t,e,n,r){const i=t.wu(1,e,n);J_("Data must be an object, but it was:",i,r);const s=[],o=Ye.empty();Zi(r,(l,u)=>{const c=Z_(e,l,n);u=U(u);const h=i.mu(c);if(u instanceof Jl)s.push(c);else{const d=ns(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Rt(s);return new RR(o,a,i.fieldTransforms)}function X_(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[lm(e,r,n)],l=[i];if(s.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(lm(e,s[d])),l.push(s[d+1]);const u=[],c=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!bR(u,a[d])){const f=a[d];let y=l[d];y=U(y);const v=o.mu(f);if(y instanceof Jl)u.push(f);else{const A=ns(y,v);A!=null&&(u.push(f),c.set(f,A))}}const h=new Rt(u);return new RR(c,h,o.fieldTransforms)}function CR(t,e,n,r=!1){return ns(n,t.wu(r?4:3,e))}function ns(t,e){if(DR(t=U(t)))return J_("Unsupported field value:",e,t),NR(t,e);if(t instanceof es)return function(r,i){if(!PR(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ns(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=U(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:ao(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ao(i.serializer,s)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:g1(i.serializer,r._byteString)};if(r instanceof ge){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:w_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${sd(r)}`)}(t,e)}function NR(t,e){const n={};return FS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(r,i)=>{const s=ns(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function DR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof od||t instanceof Dn||t instanceof ge||t instanceof es)}function J_(t,e,n){if(!DR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sd(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function lm(t,e,n){if((e=U(e))instanceof zr)return e._internalPath;if(typeof e=="string")return Z_(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const m$=new RegExp("[~\\*/\\[\\]]");function Z_(t,e,n){if(e.search(m$)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zr(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new E(w.INVALID_ARGUMENT,a+t+l)}function bR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new g$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ud("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class g$ extends vl{data(){return super.data()}}function ud(t,e){return typeof e=="string"?Z_(t,e):e instanceof zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class Zl extends ey{}function lr(t,e,...n){let r=[];e instanceof ey&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ty).length,a=s.filter(l=>l instanceof cd).length;if(o>1||o>0&&a>0)throw new E(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cd extends Zl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=this._parse(e);return OR(e._query,n),new yt(e.firestore,e.converter,Qp(e._query,n))}_parse(e){const n=ts(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){EI(h,c);const f=[];for(const y of h)f.push(II(l,s,y));d={arrayValue:{values:f}}}else d=II(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||EI(h,c),d=CR(a,o,h,c==="in"||c==="not-in");return K.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _$(t,e,n){const r=e,i=ud("where",t);return cd._create(i,r,n)}class ty extends ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ty(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Z.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)OR(o,l),o=Qp(o,l)}(e._query,n),new yt(e.firestore,e.converter,Qp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ny extends Zl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ny(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new E(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new E(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new zs(s,o);return function(u,c){if(d_(u)===null){const h=Yh(u);h!==null&&LR(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new yt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new tr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function y$(t,e="asc"){const n=e,r=ud("orderBy",t);return ny._create(r,n)}class hd extends Zl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new hd(e,n,r)}_apply(e){return new yt(e.firestore,e.converter,Kc(e._query,this._limit,this._limitType))}}function v$(t){return mR("limit",t),hd._create("limit",t,"F")}function w$(t){return mR("limitToLast",t),hd._create("limitToLast",t,"L")}class dd extends Zl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new dd(e,n,r)}_apply(e){const n=VR(e,this.type,this._docOrFields,this._inclusive);return new yt(e.firestore,e.converter,function(i,s){return new tr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function I$(...t){return dd._create("startAt",t,!0)}function E$(...t){return dd._create("startAfter",t,!1)}class fd extends Zl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=VR(e,this.type,this._docOrFields,this._inclusive);return new yt(e.firestore,e.converter,function(i,s){return new tr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function T$(...t){return fd._create("endBefore",t,!1)}function A$(...t){return fd._create("endAt",t,!0)}function VR(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof vl)return function(s,o,a,l,u){if(!l)throw new E(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of js(s))if(h.field.isKeyField())c.push($i(o,l.key));else{const d=l.data.field(h.field);if(Qh(d))throw new E(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new E(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new $r(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ts(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new E(w.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<c.length;y++){const v=c[y];if(d[y].field.isKeyField()){if(typeof v!="string")throw new E(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!f_(o)&&v.indexOf("/")!==-1)throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const A=o.path.child(Y.fromString(v));if(!C.isDocumentKey(A))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${A}' is not because it contains an odd number of segments.`);const m=new C(A);f.push($i(a,m))}else{const A=CR(l,u,v);f.push(A)}}return new $r(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function II(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f_(e)&&n.indexOf("/")!==-1)throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!C.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $i(t,new C(r))}if(n instanceof ge)return $i(t,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(n)}.`)}function EI(t,e){if(!Array.isArray(t)||t.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OR(t,e){if(e.isInequality()){const r=Yh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=d_(t);s!==null&&LR(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function LR(t,e,n){if(!n.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ry{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw x()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new od(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=c_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);F(R1(r));const i=new Fr(r.get(1),r.get(3)),s=new C(r.popFirst(5));return i.isEqual(n)||Pe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class S$ extends ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Qn=class extends vl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ud("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Na=class extends Qn{data(e={}){return super.data(e)}},jr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Na(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Na(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:R$(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function R$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}function MR(t,e){return t instanceof Qn&&e instanceof Qn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof jr&&e instanceof jr&&t._firestore===e._firestore&&ER(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P$(t){t=J(t,ge);const e=J(t.firestore,Ae);return hR(Ge(e),t._key).then(n=>iy(e,t,n))}class rs extends ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,n)}}function k$(t){t=J(t,ge);const e=J(t.firestore,Ae),n=Ge(e),r=new rs(e);return WU(n,t._key).then(i=>new Qn(e,r,t._key,i,new wi(i!==null&&i.hasLocalMutations,!0),t.converter))}function C$(t){t=J(t,ge);const e=J(t.firestore,Ae);return hR(Ge(e),t._key,{source:"server"}).then(n=>iy(e,t,n))}function N$(t){t=J(t,yt);const e=J(t.firestore,Ae),n=Ge(e),r=new rs(e);return xR(t._query),dR(n,t._query).then(i=>new jr(e,r,t,i))}function D$(t){t=J(t,yt);const e=J(t.firestore,Ae),n=Ge(e),r=new rs(e);return GU(n,t._query).then(i=>new jr(e,r,t,i))}function b$(t){t=J(t,yt);const e=J(t.firestore,Ae),n=Ge(e),r=new rs(e);return dR(n,t._query,{source:"server"}).then(i=>new jr(e,r,t,i))}function TI(t,e,n){t=J(t,ge);const r=J(t.firestore,Ae),i=pd(t.converter,e,n);return eu(r,[ld(ts(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,he.none())])}function AI(t,e,n,...r){t=J(t,ge);const i=J(t.firestore,Ae),s=ts(i);let o;return o=typeof(e=U(e))=="string"||e instanceof zr?X_(s,"updateDoc",t._key,e,n,r):Y_(s,"updateDoc",t._key,e),eu(i,[o.toMutation(t._key,he.exists(!0))])}function x$(t){return eu(J(t.firestore,Ae),[new ko(t._key,he.none())])}function V$(t,e){const n=J(t.firestore,Ae),r=th(t),i=pd(t.converter,e);return eu(n,[ld(ts(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,he.exists(!1))]).then(()=>r)}function FR(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||am(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(am(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ge)u=J(t.firestore,Ae),c=Ro(t._key.path),l={next:h=>{e[o]&&e[o](iy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=J(t,yt);u=J(h.firestore,Ae),c=h._query;const d=new rs(u);l={next:f=>{e[o]&&e[o](new jr(u,d,h,f))},error:e[o+1],complete:e[o+2]},xR(t._query)}return function(d,f,y,v){const A=new rd(v),m=new M_(f,A,y);return d.asyncQueue.enqueueAndForget(async()=>V_(await fo(d),m)),()=>{A.La(),d.asyncQueue.enqueueAndForget(async()=>O_(await fo(d),m))}}(Ge(u),c,a,l)}function O$(t,e){return KU(Ge(t=J(t,Ae)),am(e)?e:{next:e})}function eu(t,e){return function(r,i){const s=new ze;return r.asyncQueue.enqueueAndForget(async()=>IU(await K_(r),i,s)),s.promise}(Ge(t),e)}function iy(t,e,n){const r=n.docs.get(e._key),i=new rs(t);return new Qn(t,i,e._key,r,new wi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const L$={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M$=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ts(e)}set(e,n,r){this._verifyNotCommitted();const i=pr(e,this._firestore),s=pd(i.converter,n,r),o=ld(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,he.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=pr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof zr?X_(this._dataReader,"WriteBatch.update",s._key,n,r,i):Y_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,he.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pr(e,this._firestore);return this._mutations=this._mutations.concat(new ko(n._key,he.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function pr(t,e){if((t=U(t)).firestore!==e)throw new E(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let F$=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ts(n)}get(n){const r=pr(n,this._firestore),i=new S$(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return x();const o=s[0];if(o.isFoundDocument())return new vl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new vl(this._firestore,i,r._key,null,r.converter);throw x()})}set(n,r,i){const s=pr(n,this._firestore),o=pd(s.converter,r,i),a=ld(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=pr(n,this._firestore);let a;return a=typeof(r=U(r))=="string"||r instanceof zr?X_(this._dataReader,"Transaction.update",o._key,r,i,s):Y_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=pr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=pr(e,this._firestore),r=new rs(this._firestore);return super.get(e).then(i=>new Qn(this._firestore,r,n._key,i._document,new wi(!1,!1),n.converter))}};function U$(t,e,n){t=J(t,Ae);const r=Object.assign(Object.assign({},L$),n);return function(s){if(s.maxAttempts<1)throw new E(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new ze;return s.asyncQueue.enqueueAndForget(async()=>{const u=await zU(s);new $U(s.asyncQueue,u,a,o,l).run()}),l.promise}(Ge(t),i=>e(new F$(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $$(){return new Jl("deleteField")}function B$(){return new Q_("serverTimestamp")}function z$(...t){return new d$("arrayUnion",t)}function j$(...t){return new f$("arrayRemove",t)}function q$(t){return new p$("increment",t)}(function(e,n=!0){(function(i){So=i})(Kr),Jt(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ae(new XM(r.getProvider("auth-internal")),new t2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),mt(yw,"4.1.3",e),mt(yw,"4.1.3","esm2017")})();const W$="@firebase/firestore-compat",G$="0.3.17";/**
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
 */function sy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function SI(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function RI(){if(!R2())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class wl{constructor(e){this._delegate=e}static fromBase64String(e){return RI(),new wl(Dn.fromBase64String(e))}static fromUint8Array(e){return SI(),new wl(Dn.fromUint8Array(e))}toBase64(){return RI(),this._delegate.toBase64()}toUint8Array(){return SI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function um(t){return K$(t,["next","error","complete"])}function K$(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class H${enableIndexedDbPersistence(e,n){return t$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return n$(e._delegate)}clearIndexedDbPersistence(e){return r$(e._delegate)}}class UR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&dn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){gR(this._delegate,e,n,r)}enableNetwork(){return s$(this._delegate)}disableNetwork(){return o$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,pR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return i$(this._delegate)}onSnapshotsInSync(e){return O$(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new po(this,wR(this._delegate,e))}catch(n){throw dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Ht(this,th(this._delegate,e))}catch(n){throw dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ht(this,YU(this._delegate,e))}catch(n){throw dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return U$(this._delegate,n=>e(new $R(this,n)))}batch(){return Ge(this._delegate),new BR(new M$(this._delegate,e=>eu(this._delegate,e)))}loadBundle(e){return a$(this._delegate,e)}namedQuery(e){return l$(this._delegate,e).then(n=>n?new ht(this,n):null)}}class md extends ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new wl(new Dn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Ht.forKey(n,this.firestore,null)}}function Q$(t){KM(t)}class $R{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new md(e)}get(e){const n=Ii(e);return this._delegate.get(n).then(r=>new Il(this._firestore,new Qn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ii(e);return r?(sy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ii(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ii(e);return this._delegate.delete(n),this}}class BR{constructor(e){this._delegate=e}set(e,n,r){const i=Ii(e);return r?(sy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ii(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ii(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ki{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Na(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new El(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ki.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ki(e,new md(e),n),i.set(n,s)),s}}Ki.INSTANCES=new WeakMap;class Ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new md(e)}static forPath(e,n,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ht(n,new ge(n._delegate,r,new C(e)))}static forKey(e,n,r){return new Ht(n,new ge(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new po(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new po(this.firestore,wR(this._delegate,e))}catch(n){throw dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ge?IR(this._delegate,e):!1}set(e,n){n=sy("DocumentReference.set",n);try{return n?TI(this._delegate,e,n):TI(this._delegate,e)}catch(r){throw dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?AI(this._delegate,e):AI(this._delegate,e,n,...r)}catch(i){throw dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return x$(this._delegate)}onSnapshot(...e){const n=zR(e),r=jR(e,i=>new Il(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return FR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=k$(this._delegate):(e==null?void 0:e.source)==="server"?n=C$(this._delegate):n=P$(this._delegate),n.then(r=>new Il(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ht(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function dt(t,e,n){return t.message=t.message.replace(e,n),t}function zR(t){for(const e of t)if(typeof e=="object"&&!um(e))return e;return{}}function jR(t,e){var n,r;let i;return um(t[0])?i=t[0]:um(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Il{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Ht(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return MR(this._delegate,e._delegate)}}class El extends Il{data(e){const n=this._delegate.data(e);return HM(n!==void 0),n}}class ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new md(e)}where(e,n,r){try{return new ht(this.firestore,lr(this._delegate,_$(e,n,r)))}catch(i){throw dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ht(this.firestore,lr(this._delegate,y$(e,n)))}catch(r){throw dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ht(this.firestore,lr(this._delegate,v$(e)))}catch(n){throw dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ht(this.firestore,lr(this._delegate,w$(e)))}catch(n){throw dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ht(this.firestore,lr(this._delegate,I$(...e)))}catch(n){throw dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ht(this.firestore,lr(this._delegate,E$(...e)))}catch(n){throw dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ht(this.firestore,lr(this._delegate,T$(...e)))}catch(n){throw dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ht(this.firestore,lr(this._delegate,A$(...e)))}catch(n){throw dt(n,"endAt()","Query.endAt()")}}isEqual(e){return ER(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=D$(this._delegate):(e==null?void 0:e.source)==="server"?n=b$(this._delegate):n=N$(this._delegate),n.then(r=>new cm(this.firestore,new jr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=zR(e),r=jR(e,i=>new cm(this.firestore,new jr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return FR(this._delegate,n,r)}withConverter(e){return new ht(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Y${constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new El(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class cm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ht(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new El(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Y$(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new El(this._firestore,r))})}isEqual(e){return MR(this._delegate,e._delegate)}}class po extends ht{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ht(this.firestore,e):null}doc(e){try{return e===void 0?new Ht(this.firestore,th(this._delegate)):new Ht(this.firestore,th(this._delegate,e))}catch(n){throw dt(n,"doc()","CollectionReference.doc()")}}add(e){return V$(this._delegate,e).then(n=>new Ht(this.firestore,n))}isEqual(e){return IR(this._delegate,e._delegate)}withConverter(e){return new po(this.firestore,e?this._delegate.withConverter(Ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ii(t){return J(t,ge)}/**
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
 */class oy{constructor(...e){this._delegate=new zr(...e)}static documentId(){return new oy(Ie.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof zr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class di{constructor(e){this._delegate=e}static serverTimestamp(){const e=B$();return e._methodName="FieldValue.serverTimestamp",new di(e)}static delete(){const e=$$();return e._methodName="FieldValue.delete",new di(e)}static arrayUnion(...e){const n=z$(...e);return n._methodName="FieldValue.arrayUnion",new di(n)}static arrayRemove(...e){const n=j$(...e);return n._methodName="FieldValue.arrayRemove",new di(n)}static increment(e){const n=q$(e);return n._methodName="FieldValue.increment",new di(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const X$={Firestore:UR,GeoPoint:od,Timestamp:de,Blob:wl,Transaction:$R,WriteBatch:BR,DocumentReference:Ht,DocumentSnapshot:Il,Query:ht,QueryDocumentSnapshot:El,QuerySnapshot:cm,CollectionReference:po,FieldPath:oy,FieldValue:di,setLogLevel:Q$,CACHE_SIZE_UNLIMITED:ZU};function J$(t,e){t.INTERNAL.registerComponent(new bt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},X$)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z$(t){J$(t,(e,n)=>new UR(e,n,new H$)),t.registerVersion(W$,G$)}Z$(Jn);const e4={apiKey:"AIzaSyDmeCKj1u6joV57Opj22FUUvQCbgaW7qtI",authDomain:"squarelion-43d29.firebaseapp.com",projectId:"squarelion-43d29",storageBucket:"squarelion-43d29.appspot.com",messagingSenderId:"171439211836",appId:"1:171439211836:web:5aba3918d87876d0d84a39",measurementId:"G-9S8TZFG63M"},qR=Jn.initializeApp(e4);Cb(qR);Jn.auth();const PI=Jn.firestore();e$(qR);Jn.firestore();function t4({name:t,setName:e,setMiddle:n}){const r=async()=>{try{return PI.collection("TempName").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));e(a)})}catch(s){console.error("Error fetching message data:",s)}};Un.useEffect(()=>{r()},[]);const i=async()=>{try{return PI.collection("Temp").orderBy("timestamp","desc").limit(1).onSnapshot(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));n(a)})}catch(s){console.error("Error fetching message data:",s)}};Un.useEffect(()=>{i()},[])}function n4(){const[t,e]=Un.useState([]),[n,r]=Un.useState([]);return Un.useEffect(()=>{const i=document.createElement("script");return i.src="https://cdn.voiceflow.com/widget/bundle.mjs",i.type="text/javascript",i.async=!0,i.onload=()=>{window.voiceflow.chat.load({verify:{projectID:"64ee23419c1d720007cc0d3a"},url:"https://general-runtime.voiceflow.com",versionID:"production"}),setTimeout(()=>{window.voiceflow.chat.open()},3e3)},document.body.appendChild(i),()=>{document.body.removeChild(i)}},[]),fe.jsxs("div",{className:"w-1/2",children:[fe.jsx(t4,{name:t,setName:e,setMiddle:r}),fe.jsxs("section",{className:"mt-10 mb-10 ml-5 text-white drop-shadow-xl ",children:[fe.jsx("h1",{children:"  "}),t.map((i,s)=>fe.jsxs("h1",{className:"text-6xl  drop-shadow-xl",children:[" Hello,  ",i.Name===0?"":i.Name," "]},s))]}),fe.jsx("br",{}),fe.jsx("hr",{className:"w-[50vw] border-yellow-500 border-b-4"}),fe.jsx("section",{className:"mt-10 mb-10 ml-5 pb-10 text-white drop-shadow-xl",children:n.map((i,s)=>fe.jsxs("div",{className:"text-2xl",children:[fe.jsxs("li",{className:" drop-shadow-xl",children:[i.Name," "]}),fe.jsx("li",{className:" drop-shadow-xl",children:i.Location}),fe.jsx("li",{className:" drop-shadow-xl",children:i.description})]},s))})]})}const r4="https://Balanss.github.io/Bot/assets/Lionbot-913218f9.png";function i4(){return fe.jsx("div",{className:"bg-white border-b-4 border-yellow-500 dark:bg-gray-900 ",children:fe.jsxs("div",{className:"",children:[fe.jsxs("div",{className:"pt-2 pl-2",children:[fe.jsx("img",{src:r4,alt:"Lion",className:"w-16 h-16 rounded-2xl"})," "]}),fe.jsx("div",{className:"text-center text-3xl text-white",children:fe.jsx("h1",{children:"SQUARELION AGENCY"})})]})})}function s4(){return Un.useState(0),fe.jsxs("div",{children:[fe.jsx(i4,{}),fe.jsx(n4,{})]})}Af.createRoot(document.getElementById("root")).render(fe.jsx(lP.StrictMode,{children:fe.jsx(s4,{})}));
