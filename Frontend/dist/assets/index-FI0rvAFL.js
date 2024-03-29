function w3(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var VS={exports:{}},yf={},US={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc=Symbol.for("react.element"),S3=Symbol.for("react.portal"),_3=Symbol.for("react.fragment"),k3=Symbol.for("react.strict_mode"),C3=Symbol.for("react.profiler"),E3=Symbol.for("react.provider"),T3=Symbol.for("react.context"),P3=Symbol.for("react.forward_ref"),I3=Symbol.for("react.suspense"),R3=Symbol.for("react.memo"),A3=Symbol.for("react.lazy"),t1=Symbol.iterator;function j3(e){return e===null||typeof e!="object"?null:(e=t1&&e[t1]||e["@@iterator"],typeof e=="function"?e:null)}var WS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HS=Object.assign,GS={};function na(e,t,r){this.props=e,this.context=t,this.refs=GS,this.updater=r||WS}na.prototype.isReactComponent={};na.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qS(){}qS.prototype=na.prototype;function v0(e,t,r){this.props=e,this.context=t,this.refs=GS,this.updater=r||WS}var y0=v0.prototype=new qS;y0.constructor=v0;HS(y0,na.prototype);y0.isPureReactComponent=!0;var r1=Array.isArray,KS=Object.prototype.hasOwnProperty,b0={current:null},YS={key:!0,ref:!0,__self:!0,__source:!0};function XS(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)KS.call(t,n)&&!YS.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:oc,type:e,key:o,ref:s,props:i,_owner:b0.current}}function $3(e,t){return{$$typeof:oc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function x0(e){return typeof e=="object"&&e!==null&&e.$$typeof===oc}function O3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var n1=/\/+/g;function Bh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O3(""+e.key):t.toString(36)}function Su(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case oc:case S3:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Bh(s,0):n,r1(i)?(r="",e!=null&&(r=e.replace(n1,"$&/")+"/"),Su(i,t,r,"",function(c){return c})):i!=null&&(x0(i)&&(i=$3(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(n1,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",r1(e))for(var a=0;a<e.length;a++){o=e[a];var l=n+Bh(o,a);s+=Su(o,t,r,l,i)}else if(l=j3(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=n+Bh(o,a++),s+=Su(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fc(e,t,r){if(e==null)return e;var n=[],i=0;return Su(e,n,"","",function(o){return t.call(r,o,i++)}),n}function N3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zt={current:null},_u={transition:null},L3={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:_u,ReactCurrentOwner:b0};ae.Children={map:Fc,forEach:function(e,t,r){Fc(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Fc(e,function(){t++}),t},toArray:function(e){return Fc(e,function(t){return t})||[]},only:function(e){if(!x0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=na;ae.Fragment=_3;ae.Profiler=C3;ae.PureComponent=v0;ae.StrictMode=k3;ae.Suspense=I3;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L3;ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=HS({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=b0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)KS.call(t,l)&&!YS.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:oc,type:e.type,key:i,ref:o,props:n,_owner:s}};ae.createContext=function(e){return e={$$typeof:T3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E3,_context:e},e.Consumer=e};ae.createElement=XS;ae.createFactory=function(e){var t=XS.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:P3,render:e}};ae.isValidElement=x0;ae.lazy=function(e){return{$$typeof:A3,_payload:{_status:-1,_result:e},_init:N3}};ae.memo=function(e,t){return{$$typeof:R3,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=_u.transition;_u.transition={};try{e()}finally{_u.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return zt.current.useCallback(e,t)};ae.useContext=function(e){return zt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return zt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return zt.current.useEffect(e,t)};ae.useId=function(){return zt.current.useId()};ae.useImperativeHandle=function(e,t,r){return zt.current.useImperativeHandle(e,t,r)};ae.useInsertionEffect=function(e,t){return zt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return zt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return zt.current.useMemo(e,t)};ae.useReducer=function(e,t,r){return zt.current.useReducer(e,t,r)};ae.useRef=function(e){return zt.current.useRef(e)};ae.useState=function(e){return zt.current.useState(e)};ae.useSyncExternalStore=function(e,t,r){return zt.current.useSyncExternalStore(e,t,r)};ae.useTransition=function(){return zt.current.useTransition()};ae.version="18.2.0";US.exports=ae;var w=US.exports;const X=g0(w),hm=w3({__proto__:null,default:X},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z3=w,D3=Symbol.for("react.element"),M3=Symbol.for("react.fragment"),F3=Object.prototype.hasOwnProperty,B3=z3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V3={key:!0,ref:!0,__self:!0,__source:!0};function QS(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)F3.call(t,n)&&!V3.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:D3,type:e,key:o,ref:s,props:i,_owner:B3.current}}yf.Fragment=M3;yf.jsx=QS;yf.jsxs=QS;VS.exports=yf;var d=VS.exports,pm={},JS={exports:{}},cr={},ZS={exports:{}},e2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,A){var O=L.length;L.push(A);e:for(;0<O;){var z=O-1>>>1,B=L[z];if(0<i(B,A))L[z]=A,L[O]=B,O=z;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var A=L[0],O=L.pop();if(O!==A){L[0]=O;e:for(var z=0,B=L.length,V=B>>>1;z<V;){var ne=2*(z+1)-1,xe=L[ne],se=ne+1,De=L[se];if(0>i(xe,O))se<B&&0>i(De,xe)?(L[z]=De,L[se]=O,z=se):(L[z]=xe,L[ne]=O,z=ne);else if(se<B&&0>i(De,O))L[z]=De,L[se]=O,z=se;else break e}}return A}function i(L,A){var O=L.sortIndex-A.sortIndex;return O!==0?O:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var A=r(c);A!==null;){if(A.callback===null)n(c);else if(A.startTime<=L)n(c),A.sortIndex=A.expirationTime,t(l,A);else break;A=r(c)}}function S(L){if(y=!1,b(L),!v)if(r(l)!==null)v=!0,F(C);else{var A=r(c);A!==null&&G(S,A.startTime-L)}}function C(L,A){v=!1,y&&(y=!1,g(P),P=-1),p=!0;var O=h;try{for(b(A),f=r(l);f!==null&&(!(f.expirationTime>A)||L&&!M());){var z=f.callback;if(typeof z=="function"){f.callback=null,h=f.priorityLevel;var B=z(f.expirationTime<=A);A=e.unstable_now(),typeof B=="function"?f.callback=B:f===r(l)&&n(l),b(A)}else n(l);f=r(l)}if(f!==null)var V=!0;else{var ne=r(c);ne!==null&&G(S,ne.startTime-A),V=!1}return V}finally{f=null,h=O,p=!1}}var E=!1,k=null,P=-1,$=5,j=-1;function M(){return!(e.unstable_now()-j<$)}function q(){if(k!==null){var L=e.unstable_now();j=L;var A=!0;try{A=k(!0,L)}finally{A?K():(E=!1,k=null)}}else E=!1}var K;if(typeof m=="function")K=function(){m(q)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ee=Y.port2;Y.port1.onmessage=q,K=function(){ee.postMessage(null)}}else K=function(){x(q,0)};function F(L){k=L,E||(E=!0,K())}function G(L,A){P=x(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,F(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var O=h;h=A;try{return L()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=h;h=L;try{return A()}finally{h=O}},e.unstable_scheduleCallback=function(L,A,O){var z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,L){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,L={id:u++,callback:A,priorityLevel:L,startTime:O,expirationTime:B,sortIndex:-1},O>z?(L.sortIndex=O,t(c,L),r(l)===null&&L===r(c)&&(y?(g(P),P=-1):y=!0,G(S,O-z))):(L.sortIndex=B,t(l,L),v||p||(v=!0,F(C))),L},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(L){var A=h;return function(){var O=h;h=A;try{return L.apply(this,arguments)}finally{h=O}}}})(e2);ZS.exports=e2;var U3=ZS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t2=w,or=U3;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r2=new Set,bl={};function Lo(e,t){js(e,t),js(e+"Capture",t)}function js(e,t){for(bl[e]=t,e=0;e<t.length;e++)r2.add(t[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mm=Object.prototype.hasOwnProperty,W3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i1={},o1={};function H3(e){return mm.call(o1,e)?!0:mm.call(i1,e)?!1:W3.test(e)?o1[e]=!0:(i1[e]=!0,!1)}function G3(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q3(e,t,r,n){if(t===null||typeof t>"u"||G3(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var w0=/[\-:]([a-z])/g;function S0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(w0,S0);vt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(w0,S0);vt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(w0,S0);vt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _0(e,t,r,n){var i=vt.hasOwnProperty(t)?vt[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q3(t,r,i,n)&&(r=null),n||i===null?H3(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Gn=t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bc=Symbol.for("react.element"),Yo=Symbol.for("react.portal"),Xo=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),gm=Symbol.for("react.profiler"),n2=Symbol.for("react.provider"),i2=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),ym=Symbol.for("react.suspense_list"),E0=Symbol.for("react.memo"),si=Symbol.for("react.lazy"),o2=Symbol.for("react.offscreen"),s1=Symbol.iterator;function ya(e){return e===null||typeof e!="object"?null:(e=s1&&e[s1]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,Vh;function Oa(e){if(Vh===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vh=t&&t[1]||""}return`
`+Vh+e}var Uh=!1;function Wh(e,t){if(!e||Uh)return"";Uh=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Uh=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Oa(e):""}function K3(e){switch(e.tag){case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return e=Wh(e.type,!1),e;case 11:return e=Wh(e.type.render,!1),e;case 1:return e=Wh(e.type,!0),e;default:return""}}function bm(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xo:return"Fragment";case Yo:return"Portal";case gm:return"Profiler";case k0:return"StrictMode";case vm:return"Suspense";case ym:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case i2:return(e.displayName||"Context")+".Consumer";case n2:return(e._context.displayName||"Context")+".Provider";case C0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E0:return t=e.displayName||null,t!==null?t:bm(e.type)||"Memo";case si:t=e._payload,e=e._init;try{return bm(e(t))}catch{}}return null}function Y3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bm(t);case 8:return t===k0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Oi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X3(e){var t=s2(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vc(e){e._valueTracker||(e._valueTracker=X3(e))}function a2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=s2(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function cd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xm(e,t){var r=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function a1(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Oi(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l2(e,t){t=t.checked,t!=null&&_0(e,"checked",t,!1)}function wm(e,t){l2(e,t);var r=Oi(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sm(e,t.type,r):t.hasOwnProperty("defaultValue")&&Sm(e,t.type,Oi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function l1(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Sm(e,t,r){(t!=="number"||cd(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Na=Array.isArray;function ys(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Oi(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _m(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function c1(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(D(92));if(Na(r)){if(1<r.length)throw Error(D(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Oi(r)}}function c2(e,t){var r=Oi(t.value),n=Oi(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function u1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function u2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function km(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?u2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uc,d2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Uc=Uc||document.createElement("div"),Uc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Uc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xl(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q3=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(e){Q3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qa[t]=qa[e]})});function f2(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||qa.hasOwnProperty(e)&&qa[e]?(""+t).trim():t+"px"}function h2(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=f2(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var J3=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cm(e,t){if(t){if(J3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Em(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=null;function T0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pm=null,bs=null,xs=null;function d1(e){if(e=lc(e)){if(typeof Pm!="function")throw Error(D(280));var t=e.stateNode;t&&(t=_f(t),Pm(e.stateNode,e.type,t))}}function p2(e){bs?xs?xs.push(e):xs=[e]:bs=e}function m2(){if(bs){var e=bs,t=xs;if(xs=bs=null,d1(e),t)for(e=0;e<t.length;e++)d1(t[e])}}function g2(e,t){return e(t)}function v2(){}var Hh=!1;function y2(e,t,r){if(Hh)return e(t,r);Hh=!0;try{return g2(e,t,r)}finally{Hh=!1,(bs!==null||xs!==null)&&(v2(),m2())}}function wl(e,t){var r=e.stateNode;if(r===null)return null;var n=_f(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(D(231,t,typeof r));return r}var Im=!1;if(Dn)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Im=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Im=!1}function Z3(e,t,r,n,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ka=!1,ud=null,dd=!1,Rm=null,e4={onError:function(e){Ka=!0,ud=e}};function t4(e,t,r,n,i,o,s,a,l){Ka=!1,ud=null,Z3.apply(e4,arguments)}function r4(e,t,r,n,i,o,s,a,l){if(t4.apply(this,arguments),Ka){if(Ka){var c=ud;Ka=!1,ud=null}else throw Error(D(198));dd||(dd=!0,Rm=c)}}function zo(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function b2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f1(e){if(zo(e)!==e)throw Error(D(188))}function n4(e){var t=e.alternate;if(!t){if(t=zo(e),t===null)throw Error(D(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return f1(i),e;if(o===n)return f1(i),t;o=o.sibling}throw Error(D(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(r.alternate!==n)throw Error(D(190))}if(r.tag!==3)throw Error(D(188));return r.stateNode.current===r?e:t}function x2(e){return e=n4(e),e!==null?w2(e):null}function w2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=w2(e);if(t!==null)return t;e=e.sibling}return null}var S2=or.unstable_scheduleCallback,h1=or.unstable_cancelCallback,i4=or.unstable_shouldYield,o4=or.unstable_requestPaint,Ke=or.unstable_now,s4=or.unstable_getCurrentPriorityLevel,P0=or.unstable_ImmediatePriority,_2=or.unstable_UserBlockingPriority,fd=or.unstable_NormalPriority,a4=or.unstable_LowPriority,k2=or.unstable_IdlePriority,bf=null,rn=null;function l4(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(bf,e,void 0,(e.current.flags&128)===128)}catch{}}var Mr=Math.clz32?Math.clz32:d4,c4=Math.log,u4=Math.LN2;function d4(e){return e>>>=0,e===0?32:31-(c4(e)/u4|0)|0}var Wc=64,Hc=4194304;function La(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hd(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~i;a!==0?n=La(a):(o&=s,o!==0&&(n=La(o)))}else s=r&~i,s!==0?n=La(s):o!==0&&(n=La(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Mr(t),i=1<<r,n|=e[r],t&=~i;return n}function f4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h4(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Mr(o),a=1<<s,l=i[s];l===-1?(!(a&r)||a&n)&&(i[s]=f4(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Am(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function C2(){var e=Wc;return Wc<<=1,!(Wc&4194240)&&(Wc=64),e}function Gh(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function sc(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mr(t),e[t]=r}function p4(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Mr(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function I0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Mr(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var we=0;function E2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var T2,R0,P2,I2,R2,jm=!1,Gc=[],bi=null,xi=null,wi=null,Sl=new Map,_l=new Map,ci=[],m4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function p1(e,t){switch(e){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Sl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function xa(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=lc(t),t!==null&&R0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function g4(e,t,r,n,i){switch(t){case"focusin":return bi=xa(bi,e,t,r,n,i),!0;case"dragenter":return xi=xa(xi,e,t,r,n,i),!0;case"mouseover":return wi=xa(wi,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Sl.set(o,xa(Sl.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,_l.set(o,xa(_l.get(o)||null,e,t,r,n,i)),!0}return!1}function A2(e){var t=lo(e.target);if(t!==null){var r=zo(t);if(r!==null){if(t=r.tag,t===13){if(t=b2(r),t!==null){e.blockedOn=t,R2(e.priority,function(){P2(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=$m(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Tm=n,r.target.dispatchEvent(n),Tm=null}else return t=lc(r),t!==null&&R0(t),e.blockedOn=r,!1;t.shift()}return!0}function m1(e,t,r){ku(e)&&r.delete(t)}function v4(){jm=!1,bi!==null&&ku(bi)&&(bi=null),xi!==null&&ku(xi)&&(xi=null),wi!==null&&ku(wi)&&(wi=null),Sl.forEach(m1),_l.forEach(m1)}function wa(e,t){e.blockedOn===t&&(e.blockedOn=null,jm||(jm=!0,or.unstable_scheduleCallback(or.unstable_NormalPriority,v4)))}function kl(e){function t(i){return wa(i,e)}if(0<Gc.length){wa(Gc[0],e);for(var r=1;r<Gc.length;r++){var n=Gc[r];n.blockedOn===e&&(n.blockedOn=null)}}for(bi!==null&&wa(bi,e),xi!==null&&wa(xi,e),wi!==null&&wa(wi,e),Sl.forEach(t),_l.forEach(t),r=0;r<ci.length;r++)n=ci[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ci.length&&(r=ci[0],r.blockedOn===null);)A2(r),r.blockedOn===null&&ci.shift()}var ws=Gn.ReactCurrentBatchConfig,pd=!0;function y4(e,t,r,n){var i=we,o=ws.transition;ws.transition=null;try{we=1,A0(e,t,r,n)}finally{we=i,ws.transition=o}}function b4(e,t,r,n){var i=we,o=ws.transition;ws.transition=null;try{we=4,A0(e,t,r,n)}finally{we=i,ws.transition=o}}function A0(e,t,r,n){if(pd){var i=$m(e,t,r,n);if(i===null)rp(e,t,n,md,r),p1(e,n);else if(g4(i,e,t,r,n))n.stopPropagation();else if(p1(e,n),t&4&&-1<m4.indexOf(e)){for(;i!==null;){var o=lc(i);if(o!==null&&T2(o),o=$m(e,t,r,n),o===null&&rp(e,t,n,md,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else rp(e,t,n,null,r)}}var md=null;function $m(e,t,r,n){if(md=null,e=T0(n),e=lo(e),e!==null)if(t=zo(e),t===null)e=null;else if(r=t.tag,r===13){if(e=b2(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return md=e,null}function j2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s4()){case P0:return 1;case _2:return 4;case fd:case a4:return 16;case k2:return 536870912;default:return 16}default:return 16}}var mi=null,j0=null,Cu=null;function $2(){if(Cu)return Cu;var e,t=j0,r=t.length,n,i="value"in mi?mi.value:mi.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return Cu=i.slice(e,1<n?1-n:void 0)}function Eu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qc(){return!0}function g1(){return!1}function ur(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qc:g1,this.isPropagationStopped=g1,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qc)},persist:function(){},isPersistent:qc}),t}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$0=ur(ia),ac=Ue({},ia,{view:0,detail:0}),x4=ur(ac),qh,Kh,Sa,xf=Ue({},ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:O0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sa&&(Sa&&e.type==="mousemove"?(qh=e.screenX-Sa.screenX,Kh=e.screenY-Sa.screenY):Kh=qh=0,Sa=e),qh)},movementY:function(e){return"movementY"in e?e.movementY:Kh}}),v1=ur(xf),w4=Ue({},xf,{dataTransfer:0}),S4=ur(w4),_4=Ue({},ac,{relatedTarget:0}),Yh=ur(_4),k4=Ue({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),C4=ur(k4),E4=Ue({},ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T4=ur(E4),P4=Ue({},ia,{data:0}),y1=ur(P4),I4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A4[e])?!!t[e]:!1}function O0(){return j4}var $4=Ue({},ac,{key:function(e){if(e.key){var t=I4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:O0,charCode:function(e){return e.type==="keypress"?Eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O4=ur($4),N4=Ue({},xf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b1=ur(N4),L4=Ue({},ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:O0}),z4=ur(L4),D4=Ue({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),M4=ur(D4),F4=Ue({},xf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B4=ur(F4),V4=[9,13,27,32],N0=Dn&&"CompositionEvent"in window,Ya=null;Dn&&"documentMode"in document&&(Ya=document.documentMode);var U4=Dn&&"TextEvent"in window&&!Ya,O2=Dn&&(!N0||Ya&&8<Ya&&11>=Ya),x1=" ",w1=!1;function N2(e,t){switch(e){case"keyup":return V4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qo=!1;function W4(e,t){switch(e){case"compositionend":return L2(t);case"keypress":return t.which!==32?null:(w1=!0,x1);case"textInput":return e=t.data,e===x1&&w1?null:e;default:return null}}function H4(e,t){if(Qo)return e==="compositionend"||!N0&&N2(e,t)?(e=$2(),Cu=j0=mi=null,Qo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return O2&&t.locale!=="ko"?null:t.data;default:return null}}var G4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G4[e.type]:t==="textarea"}function z2(e,t,r,n){p2(n),t=gd(t,"onChange"),0<t.length&&(r=new $0("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Xa=null,Cl=null;function q4(e){K2(e,0)}function wf(e){var t=es(e);if(a2(t))return e}function K4(e,t){if(e==="change")return t}var D2=!1;if(Dn){var Xh;if(Dn){var Qh="oninput"in document;if(!Qh){var _1=document.createElement("div");_1.setAttribute("oninput","return;"),Qh=typeof _1.oninput=="function"}Xh=Qh}else Xh=!1;D2=Xh&&(!document.documentMode||9<document.documentMode)}function k1(){Xa&&(Xa.detachEvent("onpropertychange",M2),Cl=Xa=null)}function M2(e){if(e.propertyName==="value"&&wf(Cl)){var t=[];z2(t,Cl,e,T0(e)),y2(q4,t)}}function Y4(e,t,r){e==="focusin"?(k1(),Xa=t,Cl=r,Xa.attachEvent("onpropertychange",M2)):e==="focusout"&&k1()}function X4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wf(Cl)}function Q4(e,t){if(e==="click")return wf(t)}function J4(e,t){if(e==="input"||e==="change")return wf(t)}function Z4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ur=typeof Object.is=="function"?Object.is:Z4;function El(e,t){if(Ur(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!mm.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function C1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E1(e,t){var r=C1(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=C1(r)}}function F2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?F2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function B2(){for(var e=window,t=cd();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=cd(e.document)}return t}function L0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function eI(e){var t=B2(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&F2(r.ownerDocument.documentElement,r)){if(n!==null&&L0(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=E1(r,o);var s=E1(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tI=Dn&&"documentMode"in document&&11>=document.documentMode,Jo=null,Om=null,Qa=null,Nm=!1;function T1(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nm||Jo==null||Jo!==cd(n)||(n=Jo,"selectionStart"in n&&L0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qa&&El(Qa,n)||(Qa=n,n=gd(Om,"onSelect"),0<n.length&&(t=new $0("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Jo)))}function Kc(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zo={animationend:Kc("Animation","AnimationEnd"),animationiteration:Kc("Animation","AnimationIteration"),animationstart:Kc("Animation","AnimationStart"),transitionend:Kc("Transition","TransitionEnd")},Jh={},V2={};Dn&&(V2=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function Sf(e){if(Jh[e])return Jh[e];if(!Zo[e])return e;var t=Zo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in V2)return Jh[e]=t[r];return e}var U2=Sf("animationend"),W2=Sf("animationiteration"),H2=Sf("animationstart"),G2=Sf("transitionend"),q2=new Map,P1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(e,t){q2.set(e,t),Lo(t,[e])}for(var Zh=0;Zh<P1.length;Zh++){var ep=P1[Zh],rI=ep.toLowerCase(),nI=ep[0].toUpperCase()+ep.slice(1);Mi(rI,"on"+nI)}Mi(U2,"onAnimationEnd");Mi(W2,"onAnimationIteration");Mi(H2,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(G2,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iI=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function I1(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,r4(n,t,void 0,e),e.currentTarget=null}function K2(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;I1(i,a,c),o=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;I1(i,a,c),o=l}}}if(dd)throw e=Rm,dd=!1,Rm=null,e}function Re(e,t){var r=t[Fm];r===void 0&&(r=t[Fm]=new Set);var n=e+"__bubble";r.has(n)||(Y2(t,e,2,!1),r.add(n))}function tp(e,t,r){var n=0;t&&(n|=4),Y2(r,e,n,t)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function Tl(e){if(!e[Yc]){e[Yc]=!0,r2.forEach(function(r){r!=="selectionchange"&&(iI.has(r)||tp(r,!1,e),tp(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yc]||(t[Yc]=!0,tp("selectionchange",!1,t))}}function Y2(e,t,r,n){switch(j2(t)){case 1:var i=y4;break;case 4:i=b4;break;default:i=A0}r=i.bind(null,t,r,e),i=void 0,!Im||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function rp(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=lo(a),s===null)return;if(l=s.tag,l===5||l===6){n=o=s;continue e}a=a.parentNode}}n=n.return}y2(function(){var c=o,u=T0(r),f=[];e:{var h=q2.get(e);if(h!==void 0){var p=$0,v=e;switch(e){case"keypress":if(Eu(r)===0)break e;case"keydown":case"keyup":p=O4;break;case"focusin":v="focus",p=Yh;break;case"focusout":v="blur",p=Yh;break;case"beforeblur":case"afterblur":p=Yh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=v1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=S4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=z4;break;case U2:case W2:case H2:p=C4;break;case G2:p=M4;break;case"scroll":p=x4;break;case"wheel":p=B4;break;case"copy":case"cut":case"paste":p=T4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=b1}var y=(t&4)!==0,x=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,b;m!==null;){b=m;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,g!==null&&(S=wl(m,g),S!=null&&y.push(Pl(m,S,b)))),x)break;m=m.return}0<y.length&&(h=new p(h,v,null,r,u),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&r!==Tm&&(v=r.relatedTarget||r.fromElement)&&(lo(v)||v[Mn]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=r.relatedTarget||r.toElement,p=c,v=v?lo(v):null,v!==null&&(x=zo(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=v1,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=b1,S="onPointerLeave",g="onPointerEnter",m="pointer"),x=p==null?h:es(p),b=v==null?h:es(v),h=new y(S,m+"leave",p,r,u),h.target=x,h.relatedTarget=b,S=null,lo(u)===c&&(y=new y(g,m+"enter",v,r,u),y.target=b,y.relatedTarget=x,S=y),x=S,p&&v)t:{for(y=p,g=v,m=0,b=y;b;b=Wo(b))m++;for(b=0,S=g;S;S=Wo(S))b++;for(;0<m-b;)y=Wo(y),m--;for(;0<b-m;)g=Wo(g),b--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Wo(y),g=Wo(g)}y=null}else y=null;p!==null&&R1(f,h,p,y,!1),v!==null&&x!==null&&R1(f,x,v,y,!0)}}e:{if(h=c?es(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=K4;else if(S1(h))if(D2)C=J4;else{C=X4;var E=Y4}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Q4);if(C&&(C=C(e,c))){z2(f,C,r,u);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Sm(h,"number",h.value)}switch(E=c?es(c):window,e){case"focusin":(S1(E)||E.contentEditable==="true")&&(Jo=E,Om=c,Qa=null);break;case"focusout":Qa=Om=Jo=null;break;case"mousedown":Nm=!0;break;case"contextmenu":case"mouseup":case"dragend":Nm=!1,T1(f,r,u);break;case"selectionchange":if(tI)break;case"keydown":case"keyup":T1(f,r,u)}var k;if(N0)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qo?N2(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(O2&&r.locale!=="ko"&&(Qo||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qo&&(k=$2()):(mi=u,j0="value"in mi?mi.value:mi.textContent,Qo=!0)),E=gd(c,P),0<E.length&&(P=new y1(P,e,null,r,u),f.push({event:P,listeners:E}),k?P.data=k:(k=L2(r),k!==null&&(P.data=k)))),(k=U4?W4(e,r):H4(e,r))&&(c=gd(c,"onBeforeInput"),0<c.length&&(u=new y1("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=k))}K2(f,t)})}function Pl(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gd(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wl(e,r),o!=null&&n.unshift(Pl(e,o,i)),o=wl(e,t),o!=null&&n.push(Pl(e,o,i))),e=e.return}return n}function Wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function R1(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,i?(l=wl(r,o),l!=null&&s.unshift(Pl(r,l,a))):i||(l=wl(r,o),l!=null&&s.push(Pl(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var oI=/\r\n?/g,sI=/\u0000|\uFFFD/g;function A1(e){return(typeof e=="string"?e:""+e).replace(oI,`
`).replace(sI,"")}function Xc(e,t,r){if(t=A1(t),A1(e)!==t&&r)throw Error(D(425))}function vd(){}var Lm=null,zm=null;function Dm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mm=typeof setTimeout=="function"?setTimeout:void 0,aI=typeof clearTimeout=="function"?clearTimeout:void 0,j1=typeof Promise=="function"?Promise:void 0,lI=typeof queueMicrotask=="function"?queueMicrotask:typeof j1<"u"?function(e){return j1.resolve(null).then(e).catch(cI)}:Mm;function cI(e){setTimeout(function(){throw e})}function np(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),kl(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);kl(t)}function Si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var oa=Math.random().toString(36).slice(2),Zr="__reactFiber$"+oa,Il="__reactProps$"+oa,Mn="__reactContainer$"+oa,Fm="__reactEvents$"+oa,uI="__reactListeners$"+oa,dI="__reactHandles$"+oa;function lo(e){var t=e[Zr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mn]||r[Zr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$1(e);e!==null;){if(r=e[Zr])return r;e=$1(e)}return t}e=r,r=e.parentNode}return null}function lc(e){return e=e[Zr]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function es(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function _f(e){return e[Il]||null}var Bm=[],ts=-1;function Fi(e){return{current:e}}function $e(e){0>ts||(e.current=Bm[ts],Bm[ts]=null,ts--)}function Te(e,t){ts++,Bm[ts]=e.current,e.current=t}var Ni={},Pt=Fi(Ni),Ut=Fi(!1),Co=Ni;function $s(e,t){var r=e.type.contextTypes;if(!r)return Ni;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(e){return e=e.childContextTypes,e!=null}function yd(){$e(Ut),$e(Pt)}function O1(e,t,r){if(Pt.current!==Ni)throw Error(D(168));Te(Pt,t),Te(Ut,r)}function X2(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(D(108,Y3(e)||"Unknown",i));return Ue({},r,n)}function bd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ni,Co=Pt.current,Te(Pt,e),Te(Ut,Ut.current),!0}function N1(e,t,r){var n=e.stateNode;if(!n)throw Error(D(169));r?(e=X2(e,t,Co),n.__reactInternalMemoizedMergedChildContext=e,$e(Ut),$e(Pt),Te(Pt,e)):$e(Ut),Te(Ut,r)}var wn=null,kf=!1,ip=!1;function Q2(e){wn===null?wn=[e]:wn.push(e)}function fI(e){kf=!0,Q2(e)}function Bi(){if(!ip&&wn!==null){ip=!0;var e=0,t=we;try{var r=wn;for(we=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}wn=null,kf=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),S2(P0,Bi),i}finally{we=t,ip=!1}}return null}var rs=[],ns=0,xd=null,wd=0,br=[],xr=0,Eo=null,En=1,Tn="";function Zi(e,t){rs[ns++]=wd,rs[ns++]=xd,xd=e,wd=t}function J2(e,t,r){br[xr++]=En,br[xr++]=Tn,br[xr++]=Eo,Eo=e;var n=En;e=Tn;var i=32-Mr(n)-1;n&=~(1<<i),r+=1;var o=32-Mr(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,En=1<<32-Mr(t)+i|r<<i|n,Tn=o+e}else En=1<<o|r<<i|n,Tn=e}function z0(e){e.return!==null&&(Zi(e,1),J2(e,1,0))}function D0(e){for(;e===xd;)xd=rs[--ns],rs[ns]=null,wd=rs[--ns],rs[ns]=null;for(;e===Eo;)Eo=br[--xr],br[xr]=null,Tn=br[--xr],br[xr]=null,En=br[--xr],br[xr]=null}var rr=null,tr=null,Le=!1,Lr=null;function Z2(e,t){var r=wr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function L1(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rr=e,tr=Si(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rr=e,tr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Eo!==null?{id:En,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,rr=e,tr=null,!0):!1;default:return!1}}function Vm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Um(e){if(Le){var t=tr;if(t){var r=t;if(!L1(e,t)){if(Vm(e))throw Error(D(418));t=Si(r.nextSibling);var n=rr;t&&L1(e,t)?Z2(n,r):(e.flags=e.flags&-4097|2,Le=!1,rr=e)}}else{if(Vm(e))throw Error(D(418));e.flags=e.flags&-4097|2,Le=!1,rr=e}}}function z1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rr=e}function Qc(e){if(e!==rr)return!1;if(!Le)return z1(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dm(e.type,e.memoizedProps)),t&&(t=tr)){if(Vm(e))throw e_(),Error(D(418));for(;t;)Z2(e,t),t=Si(t.nextSibling)}if(z1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){tr=Si(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}tr=null}}else tr=rr?Si(e.stateNode.nextSibling):null;return!0}function e_(){for(var e=tr;e;)e=Si(e.nextSibling)}function Os(){tr=rr=null,Le=!1}function M0(e){Lr===null?Lr=[e]:Lr.push(e)}var hI=Gn.ReactCurrentBatchConfig;function Or(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Sd=Fi(null),_d=null,is=null,F0=null;function B0(){F0=is=_d=null}function V0(e){var t=Sd.current;$e(Sd),e._currentValue=t}function Wm(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ss(e,t){_d=e,F0=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function Er(e){var t=e._currentValue;if(F0!==e)if(e={context:e,memoizedValue:t,next:null},is===null){if(_d===null)throw Error(D(308));is=e,_d.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return t}var co=null;function U0(e){co===null?co=[e]:co.push(e)}function t_(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,U0(t)):(r.next=i.next,i.next=r),t.interleaved=r,Fn(e,n)}function Fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ai=!1;function W0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _i(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,fe&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Fn(e,r)}return i=n.interleaved,i===null?(t.next=t,U0(n)):(t.next=i.next,i.next=t),n.interleaved=t,Fn(e,r)}function Tu(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,I0(e,r)}}function D1(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function kd(e,t,r,n){var i=e.updateQueue;ai=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((n&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,p=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=Ue({},f,h);break e;case 2:ai=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Po|=s,e.lanes=s,e.memoizedState=f}}function M1(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(D(191,i));i.call(n)}}}var n_=new t2.Component().refs;function Hm(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Cf={isMounted:function(e){return(e=e._reactInternals)?zo(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Nt(),i=Ci(e),o=$n(n,i);o.payload=t,r!=null&&(o.callback=r),t=_i(e,o,i),t!==null&&(Fr(t,e,i,n),Tu(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Nt(),i=Ci(e),o=$n(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=_i(e,o,i),t!==null&&(Fr(t,e,i,n),Tu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nt(),n=Ci(e),i=$n(r,n);i.tag=2,t!=null&&(i.callback=t),t=_i(e,i,n),t!==null&&(Fr(t,e,n,r),Tu(t,e,n))}};function F1(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!El(r,n)||!El(i,o):!0}function i_(e,t,r){var n=!1,i=Ni,o=t.contextType;return typeof o=="object"&&o!==null?o=Er(o):(i=Wt(t)?Co:Pt.current,n=t.contextTypes,o=(n=n!=null)?$s(e,i):Ni),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cf,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function B1(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Cf.enqueueReplaceState(t,t.state,null)}function Gm(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=n_,W0(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Er(o):(o=Wt(t)?Co:Pt.current,i.context=$s(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hm(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cf.enqueueReplaceState(i,i.state,null),kd(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _a(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(D(309));var n=r.stateNode}if(!n)throw Error(D(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===n_&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!r._owner)throw Error(D(290,e))}return e}function Jc(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function V1(e){var t=e._init;return t(e._payload)}function o_(e){function t(g,m){if(e){var b=g.deletions;b===null?(g.deletions=[m],g.flags|=16):b.push(m)}}function r(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function n(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ei(g,m),g.index=0,g.sibling=null,g}function o(g,m,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<m?(g.flags|=2,m):b):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,b,S){return m===null||m.tag!==6?(m=dp(b,g.mode,S),m.return=g,m):(m=i(m,b),m.return=g,m)}function l(g,m,b,S){var C=b.type;return C===Xo?u(g,m,b.props.children,S,b.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===si&&V1(C)===m.type)?(S=i(m,b.props),S.ref=_a(g,m,b),S.return=g,S):(S=$u(b.type,b.key,b.props,null,g.mode,S),S.ref=_a(g,m,b),S.return=g,S)}function c(g,m,b,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=fp(b,g.mode,S),m.return=g,m):(m=i(m,b.children||[]),m.return=g,m)}function u(g,m,b,S,C){return m===null||m.tag!==7?(m=vo(b,g.mode,S,C),m.return=g,m):(m=i(m,b),m.return=g,m)}function f(g,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=dp(""+m,g.mode,b),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bc:return b=$u(m.type,m.key,m.props,null,g.mode,b),b.ref=_a(g,null,m),b.return=g,b;case Yo:return m=fp(m,g.mode,b),m.return=g,m;case si:var S=m._init;return f(g,S(m._payload),b)}if(Na(m)||ya(m))return m=vo(m,g.mode,b,null),m.return=g,m;Jc(g,m)}return null}function h(g,m,b,S){var C=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:a(g,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bc:return b.key===C?l(g,m,b,S):null;case Yo:return b.key===C?c(g,m,b,S):null;case si:return C=b._init,h(g,m,C(b._payload),S)}if(Na(b)||ya(b))return C!==null?null:u(g,m,b,S,null);Jc(g,b)}return null}function p(g,m,b,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(b)||null,a(m,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bc:return g=g.get(S.key===null?b:S.key)||null,l(m,g,S,C);case Yo:return g=g.get(S.key===null?b:S.key)||null,c(m,g,S,C);case si:var E=S._init;return p(g,m,b,E(S._payload),C)}if(Na(S)||ya(S))return g=g.get(b)||null,u(m,g,S,C,null);Jc(m,S)}return null}function v(g,m,b,S){for(var C=null,E=null,k=m,P=m=0,$=null;k!==null&&P<b.length;P++){k.index>P?($=k,k=null):$=k.sibling;var j=h(g,k,b[P],S);if(j===null){k===null&&(k=$);break}e&&k&&j.alternate===null&&t(g,k),m=o(j,m,P),E===null?C=j:E.sibling=j,E=j,k=$}if(P===b.length)return r(g,k),Le&&Zi(g,P),C;if(k===null){for(;P<b.length;P++)k=f(g,b[P],S),k!==null&&(m=o(k,m,P),E===null?C=k:E.sibling=k,E=k);return Le&&Zi(g,P),C}for(k=n(g,k);P<b.length;P++)$=p(k,g,P,b[P],S),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?P:$.key),m=o($,m,P),E===null?C=$:E.sibling=$,E=$);return e&&k.forEach(function(M){return t(g,M)}),Le&&Zi(g,P),C}function y(g,m,b,S){var C=ya(b);if(typeof C!="function")throw Error(D(150));if(b=C.call(b),b==null)throw Error(D(151));for(var E=C=null,k=m,P=m=0,$=null,j=b.next();k!==null&&!j.done;P++,j=b.next()){k.index>P?($=k,k=null):$=k.sibling;var M=h(g,k,j.value,S);if(M===null){k===null&&(k=$);break}e&&k&&M.alternate===null&&t(g,k),m=o(M,m,P),E===null?C=M:E.sibling=M,E=M,k=$}if(j.done)return r(g,k),Le&&Zi(g,P),C;if(k===null){for(;!j.done;P++,j=b.next())j=f(g,j.value,S),j!==null&&(m=o(j,m,P),E===null?C=j:E.sibling=j,E=j);return Le&&Zi(g,P),C}for(k=n(g,k);!j.done;P++,j=b.next())j=p(k,g,P,j.value,S),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?P:j.key),m=o(j,m,P),E===null?C=j:E.sibling=j,E=j);return e&&k.forEach(function(q){return t(g,q)}),Le&&Zi(g,P),C}function x(g,m,b,S){if(typeof b=="object"&&b!==null&&b.type===Xo&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Bc:e:{for(var C=b.key,E=m;E!==null;){if(E.key===C){if(C=b.type,C===Xo){if(E.tag===7){r(g,E.sibling),m=i(E,b.props.children),m.return=g,g=m;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===si&&V1(C)===E.type){r(g,E.sibling),m=i(E,b.props),m.ref=_a(g,E,b),m.return=g,g=m;break e}r(g,E);break}else t(g,E);E=E.sibling}b.type===Xo?(m=vo(b.props.children,g.mode,S,b.key),m.return=g,g=m):(S=$u(b.type,b.key,b.props,null,g.mode,S),S.ref=_a(g,m,b),S.return=g,g=S)}return s(g);case Yo:e:{for(E=b.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){r(g,m.sibling),m=i(m,b.children||[]),m.return=g,g=m;break e}else{r(g,m);break}else t(g,m);m=m.sibling}m=fp(b,g.mode,S),m.return=g,g=m}return s(g);case si:return E=b._init,x(g,m,E(b._payload),S)}if(Na(b))return v(g,m,b,S);if(ya(b))return y(g,m,b,S);Jc(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(r(g,m.sibling),m=i(m,b),m.return=g,g=m):(r(g,m),m=dp(b,g.mode,S),m.return=g,g=m),s(g)):r(g,m)}return x}var Ns=o_(!0),s_=o_(!1),cc={},nn=Fi(cc),Rl=Fi(cc),Al=Fi(cc);function uo(e){if(e===cc)throw Error(D(174));return e}function H0(e,t){switch(Te(Al,t),Te(Rl,e),Te(nn,cc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:km(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=km(t,e)}$e(nn),Te(nn,t)}function Ls(){$e(nn),$e(Rl),$e(Al)}function a_(e){uo(Al.current);var t=uo(nn.current),r=km(t,e.type);t!==r&&(Te(Rl,e),Te(nn,r))}function G0(e){Rl.current===e&&($e(nn),$e(Rl))}var Fe=Fi(0);function Cd(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var op=[];function q0(){for(var e=0;e<op.length;e++)op[e]._workInProgressVersionPrimary=null;op.length=0}var Pu=Gn.ReactCurrentDispatcher,sp=Gn.ReactCurrentBatchConfig,To=0,Ve=null,tt=null,at=null,Ed=!1,Ja=!1,jl=0,pI=0;function St(){throw Error(D(321))}function K0(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ur(e[r],t[r]))return!1;return!0}function Y0(e,t,r,n,i,o){if(To=o,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pu.current=e===null||e.memoizedState===null?yI:bI,e=r(n,i),Ja){o=0;do{if(Ja=!1,jl=0,25<=o)throw Error(D(301));o+=1,at=tt=null,t.updateQueue=null,Pu.current=xI,e=r(n,i)}while(Ja)}if(Pu.current=Td,t=tt!==null&&tt.next!==null,To=0,at=tt=Ve=null,Ed=!1,t)throw Error(D(300));return e}function X0(){var e=jl!==0;return jl=0,e}function Kr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Ve.memoizedState=at=e:at=at.next=e,at}function Tr(){if(tt===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=at===null?Ve.memoizedState:at.next;if(t!==null)at=t,tt=e;else{if(e===null)throw Error(D(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},at===null?Ve.memoizedState=at=e:at=at.next=e}return at}function $l(e,t){return typeof t=="function"?t(e):t}function ap(e){var t=Tr(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var n=tt,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((To&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,Ve.lanes|=u,Po|=u}c=c.next}while(c!==null&&c!==o);l===null?s=n:l.next=a,Ur(n,t.memoizedState)||(Bt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Ve.lanes|=o,Po|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function lp(e){var t=Tr(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ur(o,t.memoizedState)||(Bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function l_(){}function c_(e,t){var r=Ve,n=Tr(),i=t(),o=!Ur(n.memoizedState,i);if(o&&(n.memoizedState=i,Bt=!0),n=n.queue,Q0(f_.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||at!==null&&at.memoizedState.tag&1){if(r.flags|=2048,Ol(9,d_.bind(null,r,n,i,t),void 0,null),ut===null)throw Error(D(349));To&30||u_(r,t,i)}return i}function u_(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function d_(e,t,r,n){t.value=r,t.getSnapshot=n,h_(t)&&p_(e)}function f_(e,t,r){return r(function(){h_(t)&&p_(e)})}function h_(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ur(e,r)}catch{return!0}}function p_(e){var t=Fn(e,1);t!==null&&Fr(t,e,1,-1)}function U1(e){var t=Kr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$l,lastRenderedState:e},t.queue=e,e=e.dispatch=vI.bind(null,Ve,e),[t.memoizedState,e]}function Ol(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function m_(){return Tr().memoizedState}function Iu(e,t,r,n){var i=Kr();Ve.flags|=e,i.memoizedState=Ol(1|t,r,void 0,n===void 0?null:n)}function Ef(e,t,r,n){var i=Tr();n=n===void 0?null:n;var o=void 0;if(tt!==null){var s=tt.memoizedState;if(o=s.destroy,n!==null&&K0(n,s.deps)){i.memoizedState=Ol(t,r,o,n);return}}Ve.flags|=e,i.memoizedState=Ol(1|t,r,o,n)}function W1(e,t){return Iu(8390656,8,e,t)}function Q0(e,t){return Ef(2048,8,e,t)}function g_(e,t){return Ef(4,2,e,t)}function v_(e,t){return Ef(4,4,e,t)}function y_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function b_(e,t,r){return r=r!=null?r.concat([e]):null,Ef(4,4,y_.bind(null,t,e),r)}function J0(){}function x_(e,t){var r=Tr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&K0(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function w_(e,t){var r=Tr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&K0(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function S_(e,t,r){return To&21?(Ur(r,t)||(r=C2(),Ve.lanes|=r,Po|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=r)}function mI(e,t){var r=we;we=r!==0&&4>r?r:4,e(!0);var n=sp.transition;sp.transition={};try{e(!1),t()}finally{we=r,sp.transition=n}}function __(){return Tr().memoizedState}function gI(e,t,r){var n=Ci(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},k_(e))C_(t,r);else if(r=t_(e,t,r,n),r!==null){var i=Nt();Fr(r,e,n,i),E_(r,t,n)}}function vI(e,t,r){var n=Ci(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(k_(e))C_(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,r);if(i.hasEagerState=!0,i.eagerState=a,Ur(a,s)){var l=t.interleaved;l===null?(i.next=i,U0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=t_(e,t,i,n),r!==null&&(i=Nt(),Fr(r,e,n,i),E_(r,t,n))}}function k_(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function C_(e,t){Ja=Ed=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function E_(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,I0(e,r)}}var Td={readContext:Er,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},yI={readContext:Er,useCallback:function(e,t){return Kr().memoizedState=[e,t===void 0?null:t],e},useContext:Er,useEffect:W1,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Iu(4194308,4,y_.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Iu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Iu(4,2,e,t)},useMemo:function(e,t){var r=Kr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Kr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=gI.bind(null,Ve,e),[n.memoizedState,e]},useRef:function(e){var t=Kr();return e={current:e},t.memoizedState=e},useState:U1,useDebugValue:J0,useDeferredValue:function(e){return Kr().memoizedState=e},useTransition:function(){var e=U1(!1),t=e[0];return e=mI.bind(null,e[1]),Kr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ve,i=Kr();if(Le){if(r===void 0)throw Error(D(407));r=r()}else{if(r=t(),ut===null)throw Error(D(349));To&30||u_(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,W1(f_.bind(null,n,o,e),[e]),n.flags|=2048,Ol(9,d_.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Kr(),t=ut.identifierPrefix;if(Le){var r=Tn,n=En;r=(n&~(1<<32-Mr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=jl++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=pI++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bI={readContext:Er,useCallback:x_,useContext:Er,useEffect:Q0,useImperativeHandle:b_,useInsertionEffect:g_,useLayoutEffect:v_,useMemo:w_,useReducer:ap,useRef:m_,useState:function(){return ap($l)},useDebugValue:J0,useDeferredValue:function(e){var t=Tr();return S_(t,tt.memoizedState,e)},useTransition:function(){var e=ap($l)[0],t=Tr().memoizedState;return[e,t]},useMutableSource:l_,useSyncExternalStore:c_,useId:__,unstable_isNewReconciler:!1},xI={readContext:Er,useCallback:x_,useContext:Er,useEffect:Q0,useImperativeHandle:b_,useInsertionEffect:g_,useLayoutEffect:v_,useMemo:w_,useReducer:lp,useRef:m_,useState:function(){return lp($l)},useDebugValue:J0,useDeferredValue:function(e){var t=Tr();return tt===null?t.memoizedState=e:S_(t,tt.memoizedState,e)},useTransition:function(){var e=lp($l)[0],t=Tr().memoizedState;return[e,t]},useMutableSource:l_,useSyncExternalStore:c_,useId:__,unstable_isNewReconciler:!1};function zs(e,t){try{var r="",n=t;do r+=K3(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cp(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function qm(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var wI=typeof WeakMap=="function"?WeakMap:Map;function T_(e,t,r){r=$n(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Id||(Id=!0,ng=n),qm(e,t)},r}function P_(e,t,r){r=$n(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){qm(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){qm(e,t),typeof n!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function H1(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new wI;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=NI.bind(null,e,t,r),t.then(e,e))}function G1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function q1(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=$n(-1,1),t.tag=2,_i(r,t,1))),r.lanes|=1),e)}var SI=Gn.ReactCurrentOwner,Bt=!1;function $t(e,t,r,n){t.child=e===null?s_(t,null,r,n):Ns(t,e.child,r,n)}function K1(e,t,r,n,i){r=r.render;var o=t.ref;return Ss(t,i),n=Y0(e,t,r,n,o,i),r=X0(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(Le&&r&&z0(t),t.flags|=1,$t(e,t,n,i),t.child)}function Y1(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!sv(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,I_(e,t,o,n,i)):(e=$u(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:El,r(s,n)&&e.ref===t.ref)return Bn(e,t,i)}return t.flags|=1,e=Ei(o,n),e.ref=t.ref,e.return=t,t.child=e}function I_(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(El(o,n)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,Bn(e,t,i)}return Km(e,t,r,n,i)}function R_(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(ss,er),er|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(ss,er),er|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Te(ss,er),er|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,Te(ss,er),er|=n;return $t(e,t,i,r),t.child}function A_(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Km(e,t,r,n,i){var o=Wt(r)?Co:Pt.current;return o=$s(t,o),Ss(t,i),r=Y0(e,t,r,n,o,i),n=X0(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(Le&&n&&z0(t),t.flags|=1,$t(e,t,r,i),t.child)}function X1(e,t,r,n,i){if(Wt(r)){var o=!0;bd(t)}else o=!1;if(Ss(t,i),t.stateNode===null)Ru(e,t),i_(t,r,n),Gm(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=Er(c):(c=Wt(r)?Co:Pt.current,c=$s(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==c)&&B1(t,s,n,c),ai=!1;var h=t.memoizedState;s.state=h,kd(t,n,s,i),l=t.memoizedState,a!==n||h!==l||Ut.current||ai?(typeof u=="function"&&(Hm(t,r,u,n),l=t.memoizedState),(a=ai||F1(t,r,a,n,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,r_(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Or(t.type,a),s.props=c,f=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Er(l):(l=Wt(r)?Co:Pt.current,l=$s(t,l));var p=r.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&B1(t,s,n,l),ai=!1,h=t.memoizedState,s.state=h,kd(t,n,s,i);var v=t.memoizedState;a!==f||h!==v||Ut.current||ai?(typeof p=="function"&&(Hm(t,r,p,n),v=t.memoizedState),(c=ai||F1(t,r,c,n,h,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=l,n=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Ym(e,t,r,n,o,i)}function Ym(e,t,r,n,i,o){A_(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&N1(t,r,!1),Bn(e,t,o);n=t.stateNode,SI.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Ns(t,e.child,null,o),t.child=Ns(t,null,a,o)):$t(e,t,a,o),t.memoizedState=n.state,i&&N1(t,r,!0),t.child}function j_(e){var t=e.stateNode;t.pendingContext?O1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&O1(e,t.context,!1),H0(e,t.containerInfo)}function Q1(e,t,r,n,i){return Os(),M0(i),t.flags|=256,$t(e,t,r,n),t.child}var Xm={dehydrated:null,treeContext:null,retryLane:0};function Qm(e){return{baseLanes:e,cachePool:null,transitions:null}}function $_(e,t,r){var n=t.pendingProps,i=Fe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Fe,i&1),e===null)return Um(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=If(s,n,0,null),e=vo(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qm(r),t.memoizedState=Xm,e):Z0(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _I(e,t,s,n,a,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Ei(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ei(a,o):(o=vo(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?Qm(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=Xm,n}return o=e.child,e=o.sibling,n=Ei(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Z0(e,t){return t=If({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zc(e,t,r,n){return n!==null&&M0(n),Ns(t,e.child,null,r),e=Z0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _I(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=cp(Error(D(422))),Zc(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=If({mode:"visible",children:n.children},i,0,null),o=vo(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ns(t,e.child,null,s),t.child.memoizedState=Qm(s),t.memoizedState=Xm,o);if(!(t.mode&1))return Zc(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,o=Error(D(419)),n=cp(o,n,void 0),Zc(e,t,s,n)}if(a=(s&e.childLanes)!==0,Bt||a){if(n=ut,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Fn(e,i),Fr(n,e,i,-1))}return ov(),n=cp(Error(D(421))),Zc(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=LI.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tr=Si(i.nextSibling),rr=t,Le=!0,Lr=null,e!==null&&(br[xr++]=En,br[xr++]=Tn,br[xr++]=Eo,En=e.id,Tn=e.overflow,Eo=t),t=Z0(t,n.children),t.flags|=4096,t)}function J1(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wm(e.return,t,r)}function up(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function O_(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if($t(e,t,n.children,r),n=Fe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&J1(e,r,t);else if(e.tag===19)J1(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Te(Fe,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Cd(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),up(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cd(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}up(t,!0,r,null,o);break;case"together":up(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ru(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Po|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,r=Ei(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ei(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function kI(e,t,r){switch(t.tag){case 3:j_(t),Os();break;case 5:a_(t);break;case 1:Wt(t.type)&&bd(t);break;case 4:H0(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Te(Sd,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Te(Fe,Fe.current&1),t.flags|=128,null):r&t.child.childLanes?$_(e,t,r):(Te(Fe,Fe.current&1),e=Bn(e,t,r),e!==null?e.sibling:null);Te(Fe,Fe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return O_(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Fe,Fe.current),n)break;return null;case 22:case 23:return t.lanes=0,R_(e,t,r)}return Bn(e,t,r)}var N_,Jm,L_,z_;N_=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Jm=function(){};L_=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,uo(nn.current);var o=null;switch(r){case"input":i=xm(e,i),n=xm(e,n),o=[];break;case"select":i=Ue({},i,{value:void 0}),n=Ue({},n,{value:void 0}),o=[];break;case"textarea":i=_m(e,i),n=_m(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=vd)}Cm(r,n);var s;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var l=n[c];if(a=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(o||(o=[]),o.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};z_=function(e,t,r,n){r!==n&&(t.flags|=4)};function ka(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _t(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function CI(e,t,r){var n=t.pendingProps;switch(D0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(t),null;case 1:return Wt(t.type)&&yd(),_t(t),null;case 3:return n=t.stateNode,Ls(),$e(Ut),$e(Pt),q0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lr!==null&&(sg(Lr),Lr=null))),Jm(e,t),_t(t),null;case 5:G0(t);var i=uo(Al.current);if(r=t.type,e!==null&&t.stateNode!=null)L_(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(D(166));return _t(t),null}if(e=uo(nn.current),Qc(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Zr]=t,n[Il]=o,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(i=0;i<za.length;i++)Re(za[i],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":a1(n,o),Re("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Re("invalid",n);break;case"textarea":c1(n,o),Re("invalid",n)}Cm(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?n.textContent!==a&&(o.suppressHydrationWarning!==!0&&Xc(n.textContent,a,e),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Xc(n.textContent,a,e),i=["children",""+a]):bl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",n)}switch(r){case"input":Vc(n),l1(n,o,!0);break;case"textarea":Vc(n),u1(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=vd)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=u2(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Zr]=t,e[Il]=n,N_(e,t,!1,!1),t.stateNode=e;e:{switch(s=Em(r,n),r){case"dialog":Re("cancel",e),Re("close",e),i=n;break;case"iframe":case"object":case"embed":Re("load",e),i=n;break;case"video":case"audio":for(i=0;i<za.length;i++)Re(za[i],e);i=n;break;case"source":Re("error",e),i=n;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=n;break;case"details":Re("toggle",e),i=n;break;case"input":a1(e,n),i=xm(e,n),Re("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Ue({},n,{value:void 0}),Re("invalid",e);break;case"textarea":c1(e,n),i=_m(e,n),Re("invalid",e);break;default:i=n}Cm(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h2(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d2(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&xl(e,l):typeof l=="number"&&xl(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Re("scroll",e):l!=null&&_0(e,o,l,s))}switch(r){case"input":Vc(e),l1(e,n,!1);break;case"textarea":Vc(e),u1(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Oi(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?ys(e,!!n.multiple,o,!1):n.defaultValue!=null&&ys(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vd)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _t(t),null;case 6:if(e&&t.stateNode!=null)z_(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(D(166));if(r=uo(Al.current),uo(nn.current),Qc(t)){if(n=t.stateNode,r=t.memoizedProps,n[Zr]=t,(o=n.nodeValue!==r)&&(e=rr,e!==null))switch(e.tag){case 3:Xc(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xc(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Zr]=t,t.stateNode=n}return _t(t),null;case 13:if($e(Fe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&tr!==null&&t.mode&1&&!(t.flags&128))e_(),Os(),t.flags|=98560,o=!1;else if(o=Qc(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Zr]=t}else Os(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_t(t),o=!1}else Lr!==null&&(sg(Lr),Lr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?nt===0&&(nt=3):ov())),t.updateQueue!==null&&(t.flags|=4),_t(t),null);case 4:return Ls(),Jm(e,t),e===null&&Tl(t.stateNode.containerInfo),_t(t),null;case 10:return V0(t.type._context),_t(t),null;case 17:return Wt(t.type)&&yd(),_t(t),null;case 19:if($e(Fe),o=t.memoizedState,o===null)return _t(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)ka(o,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Cd(e),s!==null){for(t.flags|=128,ka(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Te(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ke()>Ds&&(t.flags|=128,n=!0,ka(o,!1),t.lanes=4194304)}else{if(!n)if(e=Cd(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Le)return _t(t),null}else 2*Ke()-o.renderingStartTime>Ds&&r!==1073741824&&(t.flags|=128,n=!0,ka(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,r=Fe.current,Te(Fe,n?r&1|2:r&1),t):(_t(t),null);case 22:case 23:return iv(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?er&1073741824&&(_t(t),t.subtreeFlags&6&&(t.flags|=8192)):_t(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function EI(e,t){switch(D0(t),t.tag){case 1:return Wt(t.type)&&yd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ls(),$e(Ut),$e(Pt),q0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return G0(t),null;case 13:if($e(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Os()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Fe),null;case 4:return Ls(),null;case 10:return V0(t.type._context),null;case 22:case 23:return iv(),null;case 24:return null;default:return null}}var eu=!1,Et=!1,TI=typeof WeakSet=="function"?WeakSet:Set,H=null;function os(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){He(e,t,n)}else r.current=null}function Zm(e,t,r){try{r()}catch(n){He(e,t,n)}}var Z1=!1;function PI(e,t){if(Lm=pd,e=B2(),L0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=e,h=null;t:for(;;){for(var p;f!==r||i!==0&&f.nodeType!==3||(a=s+i),f!==o||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===r&&++c===i&&(a=s),h===o&&++u===n&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(zm={focusedElem:e,selectionRange:r},pd=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Or(t.type,y),x);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(S){He(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return v=Z1,Z1=!1,v}function Za(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zm(t,r,o)}i=i.next}while(i!==n)}}function Tf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function eg(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function D_(e){var t=e.alternate;t!==null&&(e.alternate=null,D_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zr],delete t[Il],delete t[Fm],delete t[uI],delete t[dI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M_(e){return e.tag===5||e.tag===3||e.tag===4}function eb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tg(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=vd));else if(n!==4&&(e=e.child,e!==null))for(tg(e,t,r),e=e.sibling;e!==null;)tg(e,t,r),e=e.sibling}function rg(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(rg(e,t,r),e=e.sibling;e!==null;)rg(e,t,r),e=e.sibling}var ht=null,Nr=!1;function Xn(e,t,r){for(r=r.child;r!==null;)F_(e,t,r),r=r.sibling}function F_(e,t,r){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(bf,r)}catch{}switch(r.tag){case 5:Et||os(r,t);case 6:var n=ht,i=Nr;ht=null,Xn(e,t,r),ht=n,Nr=i,ht!==null&&(Nr?(e=ht,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ht.removeChild(r.stateNode));break;case 18:ht!==null&&(Nr?(e=ht,r=r.stateNode,e.nodeType===8?np(e.parentNode,r):e.nodeType===1&&np(e,r),kl(e)):np(ht,r.stateNode));break;case 4:n=ht,i=Nr,ht=r.stateNode.containerInfo,Nr=!0,Xn(e,t,r),ht=n,Nr=i;break;case 0:case 11:case 14:case 15:if(!Et&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zm(r,t,s),i=i.next}while(i!==n)}Xn(e,t,r);break;case 1:if(!Et&&(os(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){He(r,t,a)}Xn(e,t,r);break;case 21:Xn(e,t,r);break;case 22:r.mode&1?(Et=(n=Et)||r.memoizedState!==null,Xn(e,t,r),Et=n):Xn(e,t,r);break;default:Xn(e,t,r)}}function tb(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new TI),t.forEach(function(n){var i=zI.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ar(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,Nr=!1;break e;case 3:ht=a.stateNode.containerInfo,Nr=!0;break e;case 4:ht=a.stateNode.containerInfo,Nr=!0;break e}a=a.return}if(ht===null)throw Error(D(160));F_(o,s,i),ht=null,Nr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){He(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B_(t,e),t=t.sibling}function B_(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ar(t,e),Gr(e),n&4){try{Za(3,e,e.return),Tf(3,e)}catch(y){He(e,e.return,y)}try{Za(5,e,e.return)}catch(y){He(e,e.return,y)}}break;case 1:Ar(t,e),Gr(e),n&512&&r!==null&&os(r,r.return);break;case 5:if(Ar(t,e),Gr(e),n&512&&r!==null&&os(r,r.return),e.flags&32){var i=e.stateNode;try{xl(i,"")}catch(y){He(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&l2(i,o),Em(a,s);var c=Em(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?h2(i,f):u==="dangerouslySetInnerHTML"?d2(i,f):u==="children"?xl(i,f):_0(i,u,f,c)}switch(a){case"input":wm(i,o);break;case"textarea":c2(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ys(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ys(i,!!o.multiple,o.defaultValue,!0):ys(i,!!o.multiple,o.multiple?[]:"",!1))}i[Il]=o}catch(y){He(e,e.return,y)}}break;case 6:if(Ar(t,e),Gr(e),n&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){He(e,e.return,y)}}break;case 3:if(Ar(t,e),Gr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(y){He(e,e.return,y)}break;case 4:Ar(t,e),Gr(e);break;case 13:Ar(t,e),Gr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rv=Ke())),n&4&&tb(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Et=(c=Et)||u,Ar(t,e),Et=c):Ar(t,e),Gr(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(h=H,p=h.child,h.tag){case 0:case 11:case 14:case 15:Za(4,h,h.return);break;case 1:os(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){He(n,r,y)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){nb(f);continue}}p!==null?(p.return=h,H=p):nb(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f2("display",s))}catch(y){He(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){He(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ar(t,e),Gr(e),n&4&&tb(e);break;case 21:break;default:Ar(t,e),Gr(e)}}function Gr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(M_(r)){var n=r;break e}r=r.return}throw Error(D(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(xl(i,""),n.flags&=-33);var o=eb(e);rg(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,a=eb(e);tg(e,a,s);break;default:throw Error(D(161))}}catch(l){He(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function II(e,t,r){H=e,V_(e)}function V_(e,t,r){for(var n=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||eu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=eu;var c=Et;if(eu=s,(Et=l)&&!c)for(H=i;H!==null;)s=H,l=s.child,s.tag===22&&s.memoizedState!==null?ib(i):l!==null?(l.return=s,H=l):ib(i);for(;o!==null;)H=o,V_(o),o=o.sibling;H=i,eu=a,Et=c}rb(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):rb(e)}}function rb(e){for(;H!==null;){var t=H;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Et||Tf(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Et)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Or(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&M1(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}M1(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&kl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Et||t.flags&512&&eg(t)}catch(h){He(t,t.return,h)}}if(t===e){H=null;break}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function nb(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var r=t.sibling;if(r!==null){r.return=t.return,H=r;break}H=t.return}}function ib(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Tf(4,t)}catch(l){He(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){He(t,i,l)}}var o=t.return;try{eg(t)}catch(l){He(t,o,l)}break;case 5:var s=t.return;try{eg(t)}catch(l){He(t,s,l)}}}catch(l){He(t,t.return,l)}if(t===e){H=null;break}var a=t.sibling;if(a!==null){a.return=t.return,H=a;break}H=t.return}}var RI=Math.ceil,Pd=Gn.ReactCurrentDispatcher,ev=Gn.ReactCurrentOwner,_r=Gn.ReactCurrentBatchConfig,fe=0,ut=null,et=null,mt=0,er=0,ss=Fi(0),nt=0,Nl=null,Po=0,Pf=0,tv=0,el=null,Mt=null,rv=0,Ds=1/0,yn=null,Id=!1,ng=null,ki=null,tu=!1,gi=null,Rd=0,tl=0,ig=null,Au=-1,ju=0;function Nt(){return fe&6?Ke():Au!==-1?Au:Au=Ke()}function Ci(e){return e.mode&1?fe&2&&mt!==0?mt&-mt:hI.transition!==null?(ju===0&&(ju=C2()),ju):(e=we,e!==0||(e=window.event,e=e===void 0?16:j2(e.type)),e):1}function Fr(e,t,r,n){if(50<tl)throw tl=0,ig=null,Error(D(185));sc(e,r,n),(!(fe&2)||e!==ut)&&(e===ut&&(!(fe&2)&&(Pf|=r),nt===4&&ui(e,mt)),Ht(e,n),r===1&&fe===0&&!(t.mode&1)&&(Ds=Ke()+500,kf&&Bi()))}function Ht(e,t){var r=e.callbackNode;h4(e,t);var n=hd(e,e===ut?mt:0);if(n===0)r!==null&&h1(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&h1(r),t===1)e.tag===0?fI(ob.bind(null,e)):Q2(ob.bind(null,e)),lI(function(){!(fe&6)&&Bi()}),r=null;else{switch(E2(n)){case 1:r=P0;break;case 4:r=_2;break;case 16:r=fd;break;case 536870912:r=k2;break;default:r=fd}r=X_(r,U_.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function U_(e,t){if(Au=-1,ju=0,fe&6)throw Error(D(327));var r=e.callbackNode;if(_s()&&e.callbackNode!==r)return null;var n=hd(e,e===ut?mt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ad(e,n);else{t=n;var i=fe;fe|=2;var o=H_();(ut!==e||mt!==t)&&(yn=null,Ds=Ke()+500,go(e,t));do try{$I();break}catch(a){W_(e,a)}while(!0);B0(),Pd.current=o,fe=i,et!==null?t=0:(ut=null,mt=0,t=nt)}if(t!==0){if(t===2&&(i=Am(e),i!==0&&(n=i,t=og(e,i))),t===1)throw r=Nl,go(e,0),ui(e,n),Ht(e,Ke()),r;if(t===6)ui(e,n);else{if(i=e.current.alternate,!(n&30)&&!AI(i)&&(t=Ad(e,n),t===2&&(o=Am(e),o!==0&&(n=o,t=og(e,o))),t===1))throw r=Nl,go(e,0),ui(e,n),Ht(e,Ke()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(D(345));case 2:eo(e,Mt,yn);break;case 3:if(ui(e,n),(n&130023424)===n&&(t=rv+500-Ke(),10<t)){if(hd(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mm(eo.bind(null,e,Mt,yn),t);break}eo(e,Mt,yn);break;case 4:if(ui(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-Mr(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=Ke()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*RI(n/1960))-n,10<n){e.timeoutHandle=Mm(eo.bind(null,e,Mt,yn),n);break}eo(e,Mt,yn);break;case 5:eo(e,Mt,yn);break;default:throw Error(D(329))}}}return Ht(e,Ke()),e.callbackNode===r?U_.bind(null,e):null}function og(e,t){var r=el;return e.current.memoizedState.isDehydrated&&(go(e,t).flags|=256),e=Ad(e,t),e!==2&&(t=Mt,Mt=r,t!==null&&sg(t)),e}function sg(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function AI(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ur(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ui(e,t){for(t&=~tv,t&=~Pf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Mr(t),n=1<<r;e[r]=-1,t&=~n}}function ob(e){if(fe&6)throw Error(D(327));_s();var t=hd(e,0);if(!(t&1))return Ht(e,Ke()),null;var r=Ad(e,t);if(e.tag!==0&&r===2){var n=Am(e);n!==0&&(t=n,r=og(e,n))}if(r===1)throw r=Nl,go(e,0),ui(e,t),Ht(e,Ke()),r;if(r===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,eo(e,Mt,yn),Ht(e,Ke()),null}function nv(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(Ds=Ke()+500,kf&&Bi())}}function Io(e){gi!==null&&gi.tag===0&&!(fe&6)&&_s();var t=fe;fe|=1;var r=_r.transition,n=we;try{if(_r.transition=null,we=1,e)return e()}finally{we=n,_r.transition=r,fe=t,!(fe&6)&&Bi()}}function iv(){er=ss.current,$e(ss)}function go(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,aI(r)),et!==null)for(r=et.return;r!==null;){var n=r;switch(D0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&yd();break;case 3:Ls(),$e(Ut),$e(Pt),q0();break;case 5:G0(n);break;case 4:Ls();break;case 13:$e(Fe);break;case 19:$e(Fe);break;case 10:V0(n.type._context);break;case 22:case 23:iv()}r=r.return}if(ut=e,et=e=Ei(e.current,null),mt=er=t,nt=0,Nl=null,tv=Pf=Po=0,Mt=el=null,co!==null){for(t=0;t<co.length;t++)if(r=co[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}co=null}return e}function W_(e,t){do{var r=et;try{if(B0(),Pu.current=Td,Ed){for(var n=Ve.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ed=!1}if(To=0,at=tt=Ve=null,Ja=!1,jl=0,ev.current=null,r===null||r.return===null){nt=1,Nl=t,et=null;break}e:{var o=e,s=r.return,a=r,l=t;if(t=mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=G1(s);if(p!==null){p.flags&=-257,q1(p,s,a,o,t),p.mode&1&&H1(o,c,t),t=p,l=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){H1(o,c,t),ov();break e}l=Error(D(426))}}else if(Le&&a.mode&1){var x=G1(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),q1(x,s,a,o,t),M0(zs(l,a));break e}}o=l=zs(l,a),nt!==4&&(nt=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=T_(o,l,t);D1(o,g);break e;case 1:a=l;var m=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ki===null||!ki.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=P_(o,a,t);D1(o,S);break e}}o=o.return}while(o!==null)}q_(r)}catch(C){t=C,et===r&&r!==null&&(et=r=r.return);continue}break}while(!0)}function H_(){var e=Pd.current;return Pd.current=Td,e===null?Td:e}function ov(){(nt===0||nt===3||nt===2)&&(nt=4),ut===null||!(Po&268435455)&&!(Pf&268435455)||ui(ut,mt)}function Ad(e,t){var r=fe;fe|=2;var n=H_();(ut!==e||mt!==t)&&(yn=null,go(e,t));do try{jI();break}catch(i){W_(e,i)}while(!0);if(B0(),fe=r,Pd.current=n,et!==null)throw Error(D(261));return ut=null,mt=0,nt}function jI(){for(;et!==null;)G_(et)}function $I(){for(;et!==null&&!i4();)G_(et)}function G_(e){var t=Y_(e.alternate,e,er);e.memoizedProps=e.pendingProps,t===null?q_(e):et=t,ev.current=null}function q_(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=EI(r,t),r!==null){r.flags&=32767,et=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,et=null;return}}else if(r=CI(r,t,er),r!==null){et=r;return}if(t=t.sibling,t!==null){et=t;return}et=t=e}while(t!==null);nt===0&&(nt=5)}function eo(e,t,r){var n=we,i=_r.transition;try{_r.transition=null,we=1,OI(e,t,r,n)}finally{_r.transition=i,we=n}return null}function OI(e,t,r,n){do _s();while(gi!==null);if(fe&6)throw Error(D(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(p4(e,o),e===ut&&(et=ut=null,mt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||tu||(tu=!0,X_(fd,function(){return _s(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=_r.transition,_r.transition=null;var s=we;we=1;var a=fe;fe|=4,ev.current=null,PI(e,r),B_(r,e),eI(zm),pd=!!Lm,zm=Lm=null,e.current=r,II(r),o4(),fe=a,we=s,_r.transition=o}else e.current=r;if(tu&&(tu=!1,gi=e,Rd=i),o=e.pendingLanes,o===0&&(ki=null),l4(r.stateNode),Ht(e,Ke()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Id)throw Id=!1,e=ng,ng=null,e;return Rd&1&&e.tag!==0&&_s(),o=e.pendingLanes,o&1?e===ig?tl++:(tl=0,ig=e):tl=0,Bi(),null}function _s(){if(gi!==null){var e=E2(Rd),t=_r.transition,r=we;try{if(_r.transition=null,we=16>e?16:e,gi===null)var n=!1;else{if(e=gi,gi=null,Rd=0,fe&6)throw Error(D(331));var i=fe;for(fe|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Za(8,u,o)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var h=u.sibling,p=u.return;if(D_(u),u===c){H=null;break}if(h!==null){h.return=p,H=h;break}H=p}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Za(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,H=g;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){s=H;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,H=b;else e:for(s=m;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tf(9,a)}}catch(C){He(a,a.return,C)}if(a===s){H=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,H=S;break e}H=a.return}}if(fe=i,Bi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(bf,e)}catch{}n=!0}return n}finally{we=r,_r.transition=t}}return!1}function sb(e,t,r){t=zs(r,t),t=T_(e,t,1),e=_i(e,t,1),t=Nt(),e!==null&&(sc(e,1,t),Ht(e,t))}function He(e,t,r){if(e.tag===3)sb(e,e,r);else for(;t!==null;){if(t.tag===3){sb(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ki===null||!ki.has(n))){e=zs(r,e),e=P_(t,e,1),t=_i(t,e,1),e=Nt(),t!==null&&(sc(t,1,e),Ht(t,e));break}}t=t.return}}function NI(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&r,ut===e&&(mt&r)===r&&(nt===4||nt===3&&(mt&130023424)===mt&&500>Ke()-rv?go(e,0):tv|=r),Ht(e,t)}function K_(e,t){t===0&&(e.mode&1?(t=Hc,Hc<<=1,!(Hc&130023424)&&(Hc=4194304)):t=1);var r=Nt();e=Fn(e,t),e!==null&&(sc(e,t,r),Ht(e,r))}function LI(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),K_(e,r)}function zI(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(D(314))}n!==null&&n.delete(t),K_(e,r)}var Y_;Y_=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Bt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Bt=!1,kI(e,t,r);Bt=!!(e.flags&131072)}else Bt=!1,Le&&t.flags&1048576&&J2(t,wd,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ru(e,t),e=t.pendingProps;var i=$s(t,Pt.current);Ss(t,r),i=Y0(null,t,n,e,i,r);var o=X0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wt(n)?(o=!0,bd(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,W0(t),i.updater=Cf,t.stateNode=i,i._reactInternals=t,Gm(t,n,e,r),t=Ym(null,t,n,!0,o,r)):(t.tag=0,Le&&o&&z0(t),$t(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ru(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=MI(n),e=Or(n,e),i){case 0:t=Km(null,t,n,e,r);break e;case 1:t=X1(null,t,n,e,r);break e;case 11:t=K1(null,t,n,e,r);break e;case 14:t=Y1(null,t,n,Or(n.type,e),r);break e}throw Error(D(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Or(n,i),Km(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Or(n,i),X1(e,t,n,i,r);case 3:e:{if(j_(t),e===null)throw Error(D(387));n=t.pendingProps,o=t.memoizedState,i=o.element,r_(e,t),kd(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zs(Error(D(423)),t),t=Q1(e,t,n,r,i);break e}else if(n!==i){i=zs(Error(D(424)),t),t=Q1(e,t,n,r,i);break e}else for(tr=Si(t.stateNode.containerInfo.firstChild),rr=t,Le=!0,Lr=null,r=s_(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Os(),n===i){t=Bn(e,t,r);break e}$t(e,t,n,r)}t=t.child}return t;case 5:return a_(t),e===null&&Um(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Dm(n,i)?s=null:o!==null&&Dm(n,o)&&(t.flags|=32),A_(e,t),$t(e,t,s,r),t.child;case 6:return e===null&&Um(t),null;case 13:return $_(e,t,r);case 4:return H0(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ns(t,null,n,r):$t(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Or(n,i),K1(e,t,n,i,r);case 7:return $t(e,t,t.pendingProps,r),t.child;case 8:return $t(e,t,t.pendingProps.children,r),t.child;case 12:return $t(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Te(Sd,n._currentValue),n._currentValue=s,o!==null)if(Ur(o.value,s)){if(o.children===i.children&&!Ut.current){t=Bn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=$n(-1,r&-r),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Wm(o.return,r,t),a.lanes|=r;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Wm(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ss(t,r),i=Er(i),n=n(i),t.flags|=1,$t(e,t,n,r),t.child;case 14:return n=t.type,i=Or(n,t.pendingProps),i=Or(n.type,i),Y1(e,t,n,i,r);case 15:return I_(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Or(n,i),Ru(e,t),t.tag=1,Wt(n)?(e=!0,bd(t)):e=!1,Ss(t,r),i_(t,n,i),Gm(t,n,i,r),Ym(null,t,n,!0,e,r);case 19:return O_(e,t,r);case 22:return R_(e,t,r)}throw Error(D(156,t.tag))};function X_(e,t){return S2(e,t)}function DI(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wr(e,t,r,n){return new DI(e,t,r,n)}function sv(e){return e=e.prototype,!(!e||!e.isReactComponent)}function MI(e){if(typeof e=="function")return sv(e)?1:0;if(e!=null){if(e=e.$$typeof,e===C0)return 11;if(e===E0)return 14}return 2}function Ei(e,t){var r=e.alternate;return r===null?(r=wr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $u(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")sv(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Xo:return vo(r.children,i,o,t);case k0:s=8,i|=8;break;case gm:return e=wr(12,r,t,i|2),e.elementType=gm,e.lanes=o,e;case vm:return e=wr(13,r,t,i),e.elementType=vm,e.lanes=o,e;case ym:return e=wr(19,r,t,i),e.elementType=ym,e.lanes=o,e;case o2:return If(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case n2:s=10;break e;case i2:s=9;break e;case C0:s=11;break e;case E0:s=14;break e;case si:s=16,n=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=wr(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function vo(e,t,r,n){return e=wr(7,e,n,t),e.lanes=r,e}function If(e,t,r,n){return e=wr(22,e,n,t),e.elementType=o2,e.lanes=r,e.stateNode={isHidden:!1},e}function dp(e,t,r){return e=wr(6,e,null,t),e.lanes=r,e}function fp(e,t,r){return t=wr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function FI(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gh(0),this.expirationTimes=Gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gh(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function av(e,t,r,n,i,o,s,a,l){return e=new FI(e,t,r,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wr(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},W0(o),e}function BI(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yo,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Q_(e){if(!e)return Ni;e=e._reactInternals;e:{if(zo(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var r=e.type;if(Wt(r))return X2(e,r,t)}return t}function J_(e,t,r,n,i,o,s,a,l){return e=av(r,n,!0,e,i,o,s,a,l),e.context=Q_(null),r=e.current,n=Nt(),i=Ci(r),o=$n(n,i),o.callback=t??null,_i(r,o,i),e.current.lanes=i,sc(e,i,n),Ht(e,n),e}function Rf(e,t,r,n){var i=t.current,o=Nt(),s=Ci(i);return r=Q_(r),t.context===null?t.context=r:t.pendingContext=r,t=$n(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=_i(i,t,s),e!==null&&(Fr(e,i,s,o),Tu(e,i,s)),s}function jd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ab(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function lv(e,t){ab(e,t),(e=e.alternate)&&ab(e,t)}function VI(){return null}var Z_=typeof reportError=="function"?reportError:function(e){console.error(e)};function cv(e){this._internalRoot=e}Af.prototype.render=cv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Rf(e,t,null,null)};Af.prototype.unmount=cv.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Io(function(){Rf(null,e,null,null)}),t[Mn]=null}};function Af(e){this._internalRoot=e}Af.prototype.unstable_scheduleHydration=function(e){if(e){var t=I2();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ci.length&&t!==0&&t<ci[r].priority;r++);ci.splice(r,0,e),r===0&&A2(e)}};function uv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lb(){}function UI(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=jd(s);o.call(c)}}var s=J_(t,n,e,0,null,!1,!1,"",lb);return e._reactRootContainer=s,e[Mn]=s.current,Tl(e.nodeType===8?e.parentNode:e),Io(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var c=jd(l);a.call(c)}}var l=av(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[Mn]=l.current,Tl(e.nodeType===8?e.parentNode:e),Io(function(){Rf(t,l,r,n)}),l}function $f(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=jd(s);a.call(l)}}Rf(t,s,e,i)}else s=UI(r,t,e,i,n);return jd(s)}T2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=La(t.pendingLanes);r!==0&&(I0(t,r|1),Ht(t,Ke()),!(fe&6)&&(Ds=Ke()+500,Bi()))}break;case 13:Io(function(){var n=Fn(e,1);if(n!==null){var i=Nt();Fr(n,e,1,i)}}),lv(e,1)}};R0=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var r=Nt();Fr(t,e,134217728,r)}lv(e,134217728)}};P2=function(e){if(e.tag===13){var t=Ci(e),r=Fn(e,t);if(r!==null){var n=Nt();Fr(r,e,t,n)}lv(e,t)}};I2=function(){return we};R2=function(e,t){var r=we;try{return we=e,t()}finally{we=r}};Pm=function(e,t,r){switch(t){case"input":if(wm(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=_f(n);if(!i)throw Error(D(90));a2(n),wm(n,i)}}}break;case"textarea":c2(e,r);break;case"select":t=r.value,t!=null&&ys(e,!!r.multiple,t,!1)}};g2=nv;v2=Io;var WI={usingClientEntryPoint:!1,Events:[lc,es,_f,p2,m2,nv]},Ca={findFiberByHostInstance:lo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HI={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=x2(e),e===null?null:e.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||VI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{bf=ru.inject(HI),rn=ru}catch{}}cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WI;cr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uv(t))throw Error(D(200));return BI(e,t,null,r)};cr.createRoot=function(e,t){if(!uv(e))throw Error(D(299));var r=!1,n="",i=Z_;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=av(e,1,!1,null,null,r,!1,n,i),e[Mn]=t.current,Tl(e.nodeType===8?e.parentNode:e),new cv(t)};cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=x2(t),e=e===null?null:e.stateNode,e};cr.flushSync=function(e){return Io(e)};cr.hydrate=function(e,t,r){if(!jf(t))throw Error(D(200));return $f(null,e,t,!0,r)};cr.hydrateRoot=function(e,t,r){if(!uv(e))throw Error(D(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Z_;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=J_(t,null,e,1,r??null,i,!1,o,s),e[Mn]=t.current,Tl(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Af(t)};cr.render=function(e,t,r){if(!jf(t))throw Error(D(200));return $f(null,e,t,!1,r)};cr.unmountComponentAtNode=function(e){if(!jf(e))throw Error(D(40));return e._reactRootContainer?(Io(function(){$f(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};cr.unstable_batchedUpdates=nv;cr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!jf(r))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return $f(e,t,r,!1,n)};cr.version="18.2.0-next-9e3b772b8-20220608";function ek(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ek)}catch(e){console.error(e)}}ek(),JS.exports=cr;var dv=JS.exports,cb=dv;pm.createRoot=cb.createRoot,pm.hydrateRoot=cb.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ll.apply(this,arguments)}var vi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vi||(vi={}));const ub="popstate";function GI(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:s,hash:a}=n.location;return ag("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:$d(i)}return KI(t,r,null,e)}function Ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qI(){return Math.random().toString(36).substr(2,8)}function db(e,t){return{usr:e.state,key:e.key,idx:t}}function ag(e,t,r,n){return r===void 0&&(r=null),Ll({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sa(t):t,{state:r,key:t&&t.key||n||qI()})}function $d(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function sa(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function KI(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,a=vi.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Ll({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){a=vi.Pop;let x=u(),g=x==null?null:x-c;c=x,l&&l({action:a,location:y.location,delta:g})}function h(x,g){a=vi.Push;let m=ag(y.location,x,g);r&&r(m,x),c=u()+1;let b=db(m,c),S=y.createHref(m);try{s.pushState(b,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:a,location:y.location,delta:1})}function p(x,g){a=vi.Replace;let m=ag(y.location,x,g);r&&r(m,x),c=u();let b=db(m,c),S=y.createHref(m);s.replaceState(b,"",S),o&&l&&l({action:a,location:y.location,delta:0})}function v(x){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof x=="string"?x:$d(x);return Ge(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return a},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ub,f),l=x,()=>{i.removeEventListener(ub,f),l=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let g=v(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(x){return s.go(x)}};return y}var fb;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fb||(fb={}));function YI(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?sa(t):t,i=zl(n.pathname||"/",r);if(i==null)return null;let o=tk(e);XI(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=oR(o[a],aR(i));return s}function tk(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ge(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=Ti([n,l.relativePath]),u=r.concat(l);o.children&&o.children.length>0&&(Ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tk(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:nR(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of rk(o.path))i(o,s,l)}),t}function rk(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=rk(n.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function XI(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:iR(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const QI=/^:\w+$/,JI=3,ZI=2,eR=1,tR=10,rR=-2,hb=e=>e==="*";function nR(e,t){let r=e.split("/"),n=r.length;return r.some(hb)&&(n+=rR),t&&(n+=ZI),r.filter(i=>!hb(i)).reduce((i,o)=>i+(QI.test(o)?JI:o===""?eR:tR),n)}function iR(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function oR(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],l=s===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=lg({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(n,u.params);let f=a.route;o.push({params:n,pathname:Ti([i,u.pathname]),pathnameBase:fR(Ti([i,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(i=Ti([i,u.pathnameBase]))}return o}function lg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=sR(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((c,u,f)=>{let{paramName:h,isOptional:p}=u;if(h==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[f];return p&&!v?c[h]=void 0:c[h]=lR(v||"",h),c},{}),pathname:o,pathnameBase:s,pattern:e}}function sR(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),fv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function aR(e){try{return decodeURI(e)}catch(t){return fv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lR(e,t){try{return decodeURIComponent(e)}catch(r){return fv(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function zl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function cR(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?sa(e):e;return{pathname:r?r.startsWith("/")?r:uR(r,t):t,search:hR(n),hash:pR(i)}}function uR(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function hp(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dR(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function nk(e,t){let r=dR(e);return t?r.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ik(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=sa(e):(i=Ll({},e),Ge(!i.pathname||!i.pathname.includes("?"),hp("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),hp("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),hp("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=cR(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ti=e=>e.join("/").replace(/\/\/+/g,"/"),fR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ok=["post","put","patch","delete"];new Set(ok);const gR=["get",...ok];new Set(gR);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Dl.apply(this,arguments)}const Of=w.createContext(null),sk=w.createContext(null),Vi=w.createContext(null),Nf=w.createContext(null),Ui=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ak=w.createContext(null);function vR(e,t){let{relative:r}=t===void 0?{}:t;uc()||Ge(!1);let{basename:n,navigator:i}=w.useContext(Vi),{hash:o,pathname:s,search:a}=Lf(e,{relative:r}),l=s;return n!=="/"&&(l=s==="/"?n:Ti([n,s])),i.createHref({pathname:l,search:a,hash:o})}function uc(){return w.useContext(Nf)!=null}function dc(){return uc()||Ge(!1),w.useContext(Nf).location}function lk(e){w.useContext(Vi).static||w.useLayoutEffect(e)}function Wr(){let{isDataRoute:e}=w.useContext(Ui);return e?AR():yR()}function yR(){uc()||Ge(!1);let e=w.useContext(Of),{basename:t,future:r,navigator:n}=w.useContext(Vi),{matches:i}=w.useContext(Ui),{pathname:o}=dc(),s=JSON.stringify(nk(i,r.v7_relativeSplatPath)),a=w.useRef(!1);return lk(()=>{a.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let f=ik(c,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ti([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,s,o,e])}function bR(){let{matches:e}=w.useContext(Ui),t=e[e.length-1];return t?t.params:{}}function Lf(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(Vi),{matches:i}=w.useContext(Ui),{pathname:o}=dc(),s=JSON.stringify(nk(i,n.v7_relativeSplatPath));return w.useMemo(()=>ik(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function xR(e,t){return wR(e,t)}function wR(e,t,r,n){uc()||Ge(!1);let{navigator:i}=w.useContext(Vi),{matches:o}=w.useContext(Ui),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=dc(),u;if(t){var f;let x=typeof t=="string"?sa(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||Ge(!1),u=x}else u=c;let h=u.pathname||"/",p=l==="/"?h:h.slice(l.length)||"/",v=YI(e,{pathname:p}),y=ER(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Ti([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Ti([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,r,n);return t&&y?w.createElement(Nf.Provider,{value:{location:Dl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:vi.Pop}},y):y}function SR(){let e=RR(),t=mR(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:i},r):null,null)}const _R=w.createElement(SR,null);class kR extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Ui.Provider,{value:this.props.routeContext},w.createElement(ak.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CR(e){let{routeContext:t,match:r,children:n}=e,i=w.useContext(Of);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Ui.Provider,{value:t},n)}function ER(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let s=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));u>=0||Ge(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<s.length;u++){let f=s[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:h,errors:p}=r,v=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,f,h)=>{let p,v=!1,y=null,x=null;r&&(p=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||_R,l&&(c<0&&h===0?(jR("route-fallback",!1),v=!0,x=null):c===h&&(v=!0,x=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),m=()=>{let b;return p?b=y:v?b=x:f.route.Component?b=w.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=u,w.createElement(CR,{match:f,routeContext:{outlet:u,matches:g,isDataRoute:r!=null},children:b})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(kR,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var ck=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ck||{}),Od=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Od||{});function TR(e){let t=w.useContext(Of);return t||Ge(!1),t}function PR(e){let t=w.useContext(sk);return t||Ge(!1),t}function IR(e){let t=w.useContext(Ui);return t||Ge(!1),t}function uk(e){let t=IR(),r=t.matches[t.matches.length-1];return r.route.id||Ge(!1),r.route.id}function RR(){var e;let t=w.useContext(ak),r=PR(Od.UseRouteError),n=uk(Od.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function AR(){let{router:e}=TR(ck.UseNavigateStable),t=uk(Od.UseNavigateStable),r=w.useRef(!1);return lk(()=>{r.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Dl({fromRouteId:t},o)))},[e,t])}const pb={};function jR(e,t,r){!t&&!pb[e]&&(pb[e]=!0)}function At(e){Ge(!1)}function $R(e){let{basename:t="/",children:r=null,location:n,navigationType:i=vi.Pop,navigator:o,static:s=!1,future:a}=e;uc()&&Ge(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:o,static:s,future:Dl({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof n=="string"&&(n=sa(n));let{pathname:u="/",search:f="",hash:h="",state:p=null,key:v="default"}=n,y=w.useMemo(()=>{let x=zl(u,l);return x==null?null:{location:{pathname:x,search:f,hash:h,state:p,key:v},navigationType:i}},[l,u,f,h,p,v,i]);return y==null?null:w.createElement(Vi.Provider,{value:c},w.createElement(Nf.Provider,{children:r,value:y}))}function OR(e){let{children:t,location:r}=e;return xR(cg(t),r)}new Promise(()=>{});function cg(e,t){t===void 0&&(t=[]);let r=[];return w.Children.forEach(e,(n,i)=>{if(!w.isValidElement(n))return;let o=[...t,i];if(n.type===w.Fragment){r.push.apply(r,cg(n.props.children,o));return}n.type!==At&&Ge(!1),!n.props.index||!n.props.children||Ge(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=cg(n.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Nd.apply(this,arguments)}function dk(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function NR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LR(e,t){return e.button===0&&(!t||t==="_self")&&!NR(e)}const zR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],DR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],MR=w.createContext({isTransitioning:!1}),FR="startTransition",mb=hm[FR];function BR(e){let{basename:t,children:r,future:n,window:i}=e,o=w.useRef();o.current==null&&(o.current=GI({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=n||{},u=w.useCallback(f=>{c&&mb?mb(()=>l(f)):l(f)},[l,c]);return w.useLayoutEffect(()=>s.listen(u),[s,u]),w.createElement($R,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:s,future:n})}const VR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WR=w.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,h=dk(t,zR),{basename:p}=w.useContext(Vi),v,y=!1;if(typeof c=="string"&&UR.test(c)&&(v=c,VR))try{let b=new URL(window.location.href),S=c.startsWith("//")?new URL(b.protocol+c):new URL(c),C=zl(S.pathname,p);S.origin===b.origin&&C!=null?c=C+S.search+S.hash:y=!0}catch{}let x=vR(c,{relative:i}),g=GR(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:f});function m(b){n&&n(b),b.defaultPrevented||g(b)}return w.createElement("a",Nd({},h,{href:v||x,onClick:y||o?n:m,ref:r,target:l}))}),rt=w.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,unstable_viewTransition:c,children:u}=t,f=dk(t,DR),h=Lf(l,{relative:f.relative}),p=dc(),v=w.useContext(sk),{navigator:y}=w.useContext(Vi),x=v!=null&&qR(h)&&c===!0,g=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,m=p.pathname,b=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),b=b?b.toLowerCase():null,g=g.toLowerCase());const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=m===g||!s&&m.startsWith(g)&&m.charAt(S)==="/",E=b!=null&&(b===g||!s&&b.startsWith(g)&&b.charAt(g.length)==="/"),k={isActive:C,isPending:E,isTransitioning:x},P=C?n:void 0,$;typeof o=="function"?$=o(k):$=[o,C?"active":null,E?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let j=typeof a=="function"?a(k):a;return w.createElement(WR,Nd({},f,{"aria-current":P,className:$,ref:r,style:j,to:l,unstable_viewTransition:c}),typeof u=="function"?u(k):u)});var ug;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ug||(ug={}));var gb;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gb||(gb={}));function HR(e){let t=w.useContext(Of);return t||Ge(!1),t}function GR(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Wr(),c=dc(),u=Lf(e,{relative:s});return w.useCallback(f=>{if(LR(f,r)){f.preventDefault();let h=n!==void 0?n:$d(c)===$d(u);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,u,n,i,r,e,o,s,a])}function qR(e,t){t===void 0&&(t={});let r=w.useContext(MR);r==null&&Ge(!1);let{basename:n}=HR(ug.useViewTransitionState),i=Lf(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=zl(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=zl(r.nextLocation.pathname,n)||r.nextLocation.pathname;return lg(i.pathname,s)!=null||lg(i.pathname,o)!=null}var ct=function(){return ct=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ct.apply(this,arguments)};function Ms(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function fk(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var KR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,YR=fk(function(e){return KR.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ae="-ms-",rl="-moz-",be="-webkit-",hk="comm",zf="rule",hv="decl",XR="@import",pk="@keyframes",QR="@layer",mk=Math.abs,pv=String.fromCharCode,dg=Object.assign;function JR(e,t){return lt(e,0)^45?(((t<<2^lt(e,0))<<2^lt(e,1))<<2^lt(e,2))<<2^lt(e,3):0}function gk(e){return e.trim()}function bn(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,r){return e.replace(t,r)}function Ou(e,t,r){return e.indexOf(t,r)}function lt(e,t){return e.charCodeAt(t)|0}function Fs(e,t,r){return e.slice(t,r)}function Xr(e){return e.length}function vk(e){return e.length}function Da(e,t){return t.push(e),e}function ZR(e,t){return e.map(t).join("")}function vb(e,t){return e.filter(function(r){return!bn(r,t)})}var Df=1,Bs=1,yk=0,Pr=0,Je=0,aa="";function Mf(e,t,r,n,i,o,s,a){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Df,column:Bs,length:s,return:"",siblings:a}}function ri(e,t){return dg(Mf("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ho(e){for(;e.root;)e=ri(e.root,{children:[e]});Da(e,e.siblings)}function eA(){return Je}function tA(){return Je=Pr>0?lt(aa,--Pr):0,Bs--,Je===10&&(Bs=1,Df--),Je}function Br(){return Je=Pr<yk?lt(aa,Pr++):0,Bs++,Je===10&&(Bs=1,Df++),Je}function yo(){return lt(aa,Pr)}function Nu(){return Pr}function Ff(e,t){return Fs(aa,e,t)}function fg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rA(e){return Df=Bs=1,yk=Xr(aa=e),Pr=0,[]}function nA(e){return aa="",e}function pp(e){return gk(Ff(Pr-1,hg(e===91?e+2:e===40?e+1:e)))}function iA(e){for(;(Je=yo())&&Je<33;)Br();return fg(e)>2||fg(Je)>3?"":" "}function oA(e,t){for(;--t&&Br()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Ff(e,Nu()+(t<6&&yo()==32&&Br()==32))}function hg(e){for(;Br();)switch(Je){case e:return Pr;case 34:case 39:e!==34&&e!==39&&hg(Je);break;case 40:e===41&&hg(e);break;case 92:Br();break}return Pr}function sA(e,t){for(;Br()&&e+Je!==57;)if(e+Je===84&&yo()===47)break;return"/*"+Ff(t,Pr-1)+"*"+pv(e===47?e:Br())}function aA(e){for(;!fg(yo());)Br();return Ff(e,Pr)}function lA(e){return nA(Lu("",null,null,null,[""],e=rA(e),0,[0],e))}function Lu(e,t,r,n,i,o,s,a,l){for(var c=0,u=0,f=s,h=0,p=0,v=0,y=1,x=1,g=1,m=0,b="",S=i,C=o,E=n,k=b;x;)switch(v=m,m=Br()){case 40:if(v!=108&&lt(k,f-1)==58){Ou(k+=ie(pp(m),"&","&\f"),"&\f",mk(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=pp(m);break;case 9:case 10:case 13:case 32:k+=iA(v);break;case 92:k+=oA(Nu()-1,7);continue;case 47:switch(yo()){case 42:case 47:Da(cA(sA(Br(),Nu()),t,r,l),l);break;default:k+="/"}break;case 123*y:a[c++]=Xr(k)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:x=0;case 59+u:g==-1&&(k=ie(k,/\f/g,"")),p>0&&Xr(k)-f&&Da(p>32?bb(k+";",n,r,f-1,l):bb(ie(k," ","")+";",n,r,f-2,l),l);break;case 59:k+=";";default:if(Da(E=yb(k,t,r,c,u,i,a,b,S=[],C=[],f,o),o),m===123)if(u===0)Lu(k,t,E,E,S,o,f,a,C);else switch(h===99&&lt(k,3)===110?100:h){case 100:case 108:case 109:case 115:Lu(e,E,E,n&&Da(yb(e,E,E,0,0,i,a,b,i,S=[],f,C),C),i,C,f,a,n?S:C);break;default:Lu(k,E,E,E,[""],C,0,a,C)}}c=u=p=0,y=g=1,b=k="",f=s;break;case 58:f=1+Xr(k),p=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&tA()==125)continue}switch(k+=pv(m),m*y){case 38:g=u>0?1:(k+="\f",-1);break;case 44:a[c++]=(Xr(k)-1)*g,g=1;break;case 64:yo()===45&&(k+=pp(Br())),h=yo(),u=f=Xr(b=k+=aA(Nu())),m++;break;case 45:v===45&&Xr(k)==2&&(y=0)}}return o}function yb(e,t,r,n,i,o,s,a,l,c,u,f){for(var h=i-1,p=i===0?o:[""],v=vk(p),y=0,x=0,g=0;y<n;++y)for(var m=0,b=Fs(e,h+1,h=mk(x=s[y])),S=e;m<v;++m)(S=gk(x>0?p[m]+" "+b:ie(b,/&\f/g,p[m])))&&(l[g++]=S);return Mf(e,t,r,i===0?zf:a,l,c,u,f)}function cA(e,t,r,n){return Mf(e,t,r,hk,pv(eA()),Fs(e,2,-2),0,n)}function bb(e,t,r,n,i){return Mf(e,t,r,hv,Fs(e,0,n),Fs(e,n+1,-1),n,i)}function bk(e,t,r){switch(JR(e,t)){case 5103:return be+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+e+e;case 4789:return rl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return be+e+rl+e+Ae+e+e;case 5936:switch(lt(e,t+11)){case 114:return be+e+Ae+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return be+e+Ae+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return be+e+Ae+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return be+e+Ae+e+e;case 6165:return be+e+Ae+"flex-"+e+e;case 5187:return be+e+ie(e,/(\w+).+(:[^]+)/,be+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return be+e+Ae+"flex-item-"+ie(e,/flex-|-self/g,"")+(bn(e,/flex-|baseline/)?"":Ae+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return be+e+Ae+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return be+e+Ae+ie(e,"shrink","negative")+e;case 5292:return be+e+Ae+ie(e,"basis","preferred-size")+e;case 6060:return be+"box-"+ie(e,"-grow","")+be+e+Ae+ie(e,"grow","positive")+e;case 4554:return be+ie(e,/([^-])(transform)/g,"$1"+be+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+e+e;case 4200:if(!bn(e,/flex-|baseline/))return Ae+"grid-column-align"+Fs(e,t)+e;break;case 2592:case 3360:return Ae+ie(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,bn(n.props,/grid-\w+-end/)})?~Ou(e+(r=r[t].value),"span",0)?e:Ae+ie(e,"-start","")+e+Ae+"grid-row-span:"+(~Ou(r,"span",0)?bn(r,/\d+/):+bn(r,/\d+/)-+bn(e,/\d+/))+";":Ae+ie(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return bn(n.props,/grid-\w+-start/)})?e:Ae+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,be+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xr(e)-1-t>6)switch(lt(e,t+1)){case 109:if(lt(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+rl+(lt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ou(e,"stretch",0)?bk(ie(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,s,a,l,c){return Ae+i+":"+o+c+(s?Ae+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(lt(e,t+6)===121)return ie(e,":",":"+be)+e;break;case 6444:switch(lt(e,lt(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(lt(e,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Ae+"$2box$3")+e;case 100:return ie(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function Ld(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function uA(e,t,r,n){switch(e.type){case QR:if(e.children.length)break;case XR:case hv:return e.return=e.return||e.value;case hk:return"";case pk:return e.return=e.value+"{"+Ld(e.children,n)+"}";case zf:if(!Xr(e.value=e.props.join(",")))return""}return Xr(r=Ld(e.children,n))?e.return=e.value+"{"+r+"}":""}function dA(e){var t=vk(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}function fA(e){return function(t){t.root||(t=t.return)&&e(t)}}function hA(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case hv:e.return=bk(e.value,e.length,r);return;case pk:return Ld([ri(e,{value:ie(e.value,"@","@"+be)})],n);case zf:if(e.length)return ZR(r=e.props,function(i){switch(bn(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ho(ri(e,{props:[ie(i,/:(read-\w+)/,":"+rl+"$1")]})),Ho(ri(e,{props:[i]})),dg(e,{props:vb(r,n)});break;case"::placeholder":Ho(ri(e,{props:[ie(i,/:(plac\w+)/,":"+be+"input-$1")]})),Ho(ri(e,{props:[ie(i,/:(plac\w+)/,":"+rl+"$1")]})),Ho(ri(e,{props:[ie(i,/:(plac\w+)/,Ae+"input-$1")]})),Ho(ri(e,{props:[i]})),dg(e,{props:vb(r,n)});break}return""})}}var pA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},Vs=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",xk="active",wk="data-styled-version",Bf="6.1.6",mv=`/*!sc*/
`,gv=typeof window<"u"&&"HTMLElement"in window,mA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),gA={},Vf=Object.freeze([]),Us=Object.freeze({});function Sk(e,t,r){return r===void 0&&(r=Us),e.theme!==r.theme&&e.theme||t||r.theme}var _k=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yA=/(^-|-$)/g;function xb(e){return e.replace(vA,"-").replace(yA,"")}var bA=/(a)(d)/gi,nu=52,wb=function(e){return String.fromCharCode(e+(e>25?39:97))};function pg(e){var t,r="";for(t=Math.abs(e);t>nu;t=t/nu|0)r=wb(t%nu)+r;return(wb(t%nu)+r).replace(bA,"$1-$2")}var mp,kk=5381,as=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ck=function(e){return as(kk,e)};function vv(e){return pg(Ck(e)>>>0)}function xA(e){return e.displayName||e.name||"Component"}function gp(e){return typeof e=="string"&&!0}var Ek=typeof Symbol=="function"&&Symbol.for,Tk=Ek?Symbol.for("react.memo"):60115,wA=Ek?Symbol.for("react.forward_ref"):60112,SA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_A={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kA=((mp={})[wA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mp[Tk]=Pk,mp);function Sb(e){return("type"in(t=e)&&t.type.$$typeof)===Tk?Pk:"$$typeof"in e?kA[e.$$typeof]:SA;var t}var CA=Object.defineProperty,EA=Object.getOwnPropertyNames,_b=Object.getOwnPropertySymbols,TA=Object.getOwnPropertyDescriptor,PA=Object.getPrototypeOf,kb=Object.prototype;function Ik(e,t,r){if(typeof t!="string"){if(kb){var n=PA(t);n&&n!==kb&&Ik(e,n,r)}var i=EA(t);_b&&(i=i.concat(_b(t)));for(var o=Sb(e),s=Sb(t),a=0;a<i.length;++a){var l=i[a];if(!(l in _A||r&&r[l]||s&&l in s||o&&l in o)){var c=TA(t,l);try{CA(e,l,c)}catch{}}}}return e}function Ro(e){return typeof e=="function"}function yv(e){return typeof e=="object"&&"styledComponentId"in e}function fo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zd(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ml(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mg(e,t,r){if(r===void 0&&(r=!1),!r&&!Ml(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=mg(e[n],t[n]);else if(Ml(t))for(var n in t)e[n]=mg(e[n],t[n]);return e}function bv(e,t){Object.defineProperty(e,"toString",{value:t})}function Ao(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var IA=function(){function e(t){this.groupsizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupsizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupsizes.length){for(var n=this.groupsizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw Ao(16,"".concat(t));this.groupsizes=new Uint32Array(o),this.groupsizes.set(n),this.length=o;for(var s=i;s<o;s++)this.groupsizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupsizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupsizes[t],n=this.indexOfGroup(t),i=n+r;this.groupsizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupsizes[t]===0)return r;for(var n=this.groupsizes[t],i=this.indexOfGroup(t),o=i+n,s=i;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(mv);return r},e}(),zu=new Map,Dd=new Map,Du=1,iu=function(e){if(zu.has(e))return zu.get(e);for(;Dd.has(Du);)Du++;var t=Du++;return zu.set(e,t),Dd.set(t,e),t},RA=function(e,t){Du=t+1,zu.set(e,t),Dd.set(t,e)},AA="style[".concat(Vs,"][").concat(wk,'="').concat(Bf,'"]'),jA=new RegExp("^".concat(Vs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$A=function(e,t,r){for(var n,i=r.split(","),o=0,s=i.length;o<s;o++)(n=i[o])&&e.registerName(t,n)},OA=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(mv),i=[],o=0,s=n.length;o<s;o++){var a=n[o].trim();if(a){var l=a.match(jA);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(RA(u,c),$A(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function NA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rk=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vs,"]")));return l[l.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Vs,xk),n.setAttribute(wk,Bf);var s=NA();return s&&n.setAttribute("nonce",s),r.insertBefore(n,o),n},LA=function(){function e(t){this.element=Rk(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var s=n[i];if(s.ownerNode===r)return s}throw Ao(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),zA=function(){function e(t){this.element=Rk(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),DA=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cb=gv,MA={isServer:!gv,useCSSOMInjection:!mA},Md=function(){function e(t,r,n){t===void 0&&(t=Us),r===void 0&&(r={});var i=this;this.options=ct(ct({},MA),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&gv&&Cb&&(Cb=!1,function(o){for(var s=document.querySelectorAll(AA),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(Vs)!==xk&&(OA(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),bv(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(f){var h=function(g){return Dd.get(g)}(f);if(h===void 0)return"continue";var p=o.names.get(h),v=s.getGroup(f);if(p===void 0||v.length===0)return"continue";var y="".concat(Vs,".g").concat(f,'[id="').concat(h,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),l+="".concat(v).concat(y,'{content:"').concat(x,'"}').concat(mv)},u=0;u<a;u++)c(u);return l}(i)})}return e.registerId=function(t){return iu(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ct(ct({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new DA(i):n?new LA(i):new zA(i)}(this.options),new IA(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(iu(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(iu(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(iu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),FA=/&/g,BA=/^\s*\/\/.*$/gm;function Ak(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ak(r.children,t)),r})}function VA(e){var t,r,n,i=e===void 0?Us:e,o=i.options,s=o===void 0?Us:o,a=i.plugins,l=a===void 0?Vf:a,c=function(h,p,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):h},u=l.slice();u.push(function(h){h.type===zf&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(FA,r).replace(n,c))}),s.prefix&&u.push(hA),u.push(uA);var f=function(h,p,v,y){p===void 0&&(p=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var x=h.replace(BA,""),g=lA(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);s.namespace&&(g=Ak(g,s.namespace));var m=[];return Ld(g,dA(u.concat(fA(function(b){return m.push(b)})))),m};return f.hash=l.length?l.reduce(function(h,p){return p.name||Ao(15),as(h,p.name)},kk).toString():"",f}var UA=new Md,gg=VA(),jk=X.createContext({shouldForwardProp:void 0,styleSheet:UA,stylis:gg});jk.Consumer;X.createContext(void 0);function vg(){return w.useContext(jk)}var $k=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=gg);var s=n.name+o.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,bv(this,function(){throw Ao(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=gg),this.name+t.hash},e}(),WA=function(e){return e>="A"&&e<="Z"};function Eb(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;WA(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ok=function(e){return e==null||e===!1||e===""},Nk=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ok(o)&&(Array.isArray(o)&&o.isCss||Ro(o)?n.push("".concat(Eb(i),":"),o,";"):Ml(o)?n.push.apply(n,Ms(Ms(["".concat(i," {")],Nk(o),!1),["}"],!1)):n.push("".concat(Eb(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in pA||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Pi(e,t,r,n){if(Ok(e))return[];if(yv(e))return[".".concat(e.styledComponentId)];if(Ro(e)){if(!Ro(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Pi(i,t,r,n)}var o;return e instanceof $k?r?(e.inject(r,n),[e.getName(n)]):[e]:Ml(e)?Nk(e):Array.isArray(e)?Array.prototype.concat.apply(Vf,e.map(function(s){return Pi(s,t,r,n)})):[e.toString()]}function Lk(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ro(r)&&!yv(r))return!1}return!0}var HA=Ck(Bf),GA=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Lk(t),this.componentId=r,this.baseHash=as(HA,r),this.baseStyle=n,Md.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=fo(i,this.staticRulesId);else{var o=zd(Pi(this.rules,t,r,n)),s=pg(as(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}i=fo(i,s),this.staticRulesId=s}else{for(var l=as(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var h=zd(Pi(f,t,r,n));l=as(l,h+u),c+=h}}if(c){var p=pg(l>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),i=fo(i,p)}}return i},e}(),Fl=X.createContext(void 0);Fl.Consumer;function qA(e){var t=X.useContext(Fl),r=w.useMemo(function(){return function(n,i){if(!n)throw Ao(14);if(Ro(n)){var o=n(i);return o}if(Array.isArray(n)||typeof n!="object")throw Ao(8);return i?ct(ct({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?X.createElement(Fl.Provider,{value:r},e.children):null}var vp={};function KA(e,t,r){var n=yv(e),i=e,o=!gp(e),s=t.attrs,a=s===void 0?Vf:s,l=t.componentId,c=l===void 0?function(S,C){var E=typeof S!="string"?"sc":xb(S);vp[E]=(vp[E]||0)+1;var k="".concat(E,"-").concat(vv(Bf+E+vp[E]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(S){return gp(S)?"styled.".concat(S):"Styled(".concat(xA(S),")")}(e):u,h=t.displayName&&t.componentId?"".concat(xb(t.displayName),"-").concat(t.componentId):t.componentId||c,p=n&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;v=function(S,C){return y(S,C)&&x(S,C)}}else v=y}var g=new GA(r,h,n?i.componentStyle:void 0);function m(S,C){return function(E,k,P){var $=E.attrs,j=E.componentStyle,M=E.defaultProps,q=E.foldedComponentIds,K=E.styledComponentId,Y=E.target,ee=X.useContext(Fl),F=vg(),G=E.shouldForwardProp||F.shouldForwardProp,L=Sk(k,ee,M)||Us,A=function(xe,se,De){for(var Me,Ee=ct(ct({},se),{className:void 0,theme:De}),st=0;st<xe.length;st+=1){var We=Ro(Me=xe[st])?Me(Ee):Me;for(var bt in We)Ee[bt]=bt==="className"?fo(Ee[bt],We[bt]):bt==="style"?ct(ct({},Ee[bt]),We[bt]):We[bt]}return se.className&&(Ee.className=fo(Ee.className,se.className)),Ee}($,k,L),O=A.as||Y,z={};for(var B in A)A[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&A.theme===L||(B==="forwardedAs"?z.as=A.forwardedAs:G&&!G(B,O)||(z[B]=A[B]));var V=function(xe,se){var De=vg(),Me=xe.generateAndInjectStyles(se,De.styleSheet,De.stylis);return Me}(j,A),ne=fo(q,K);return V&&(ne+=" "+V),A.className&&(ne+=" "+A.className),z[gp(O)&&!_k.has(O)?"class":"className"]=ne,z.ref=P,w.createElement(O,z)}(b,S,C)}m.displayName=f;var b=X.forwardRef(m);return b.attrs=p,b.componentStyle=g,b.displayName=f,b.shouldForwardProp=v,b.foldedComponentIds=n?fo(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=h,b.target=n?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(C){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var P=0,$=E;P<$.length;P++)mg(C,$[P],!0);return C}({},i.defaultProps,S):S}}),bv(b,function(){return".".concat(b.styledComponentId)}),o&&Ik(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Tb(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Pb=function(e){return Object.assign(e,{isCss:!0})};function xv(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ro(e)||Ml(e))return Pb(Pi(Tb(Vf,Ms([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Pi(n):Pb(Pi(Tb(n,t)))}function yg(e,t,r){if(r===void 0&&(r=Us),!t)throw Ao(1,t);var n=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,xv.apply(void 0,Ms([i],o,!1)))};return n.attrs=function(i){return yg(e,t,ct(ct({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return yg(e,t,ct(ct({},r),i))},n}var zk=function(e){return yg(KA,e)},oe=zk;_k.forEach(function(e){oe[e]=zk(e)});var YA=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Lk(t),Md.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var o=i(zd(Pi(this.rules,r,n,i)),""),s=this.componentId+t;n.insertRules(s,s,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&Md.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function XA(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=xv.apply(void 0,Ms([e],t,!1)),i="sc-global-".concat(vv(JSON.stringify(n))),o=new YA(n,i),s=function(l){var c=vg(),u=X.useContext(Fl),f=X.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,u,c.stylis),X.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,f,h){if(o.isStatic)o.renderStyles(l,gA,u,h);else{var p=ct(ct({},c),{theme:Sk(c,f,s.defaultProps)});o.renderStyles(l,p,u,h)}}return X.memo(s)}function wv(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=zd(xv.apply(void 0,Ms([e],t,!1))),i=vv(n);return new $k(i,n)}const it=oe.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme:e})=>e.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;function Uf(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(c){try{l(n.next(c))}catch(u){o(u)}}function a(c){try{l(n.throw(c))}catch(u){o(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof r?u:new r(function(f){f(u)})).then(s,a)}l((n=n.apply(e,t||[])).next())})}function Ii(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!((i=i.length>0&&i[i.length-1])||u[0]!==6&&u[0]!==2)){s=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){s.label=u[1];break}if(u[0]===6&&s.label<i[1]){s.label=i[1],i=u;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(u);break}i[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(f){u=[6,f],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([l,c])}}}function bg(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function zr(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function en(e,t,r){if(r||arguments.length===2)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function Ib(e,t,r,n,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];return Uf(this,void 0,void 0,function(){var a,l,c,u,f,h;return Ii(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),a=bg(o),l=a.next(),p.label=1;case 1:if(l.done)return[3,11];switch(c=l.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,QA(e,t,c,r,n,i)];case 3:return p.sent(),[3,10];case 4:return[4,Dk(c)];case 5:return p.sent(),[3,10];case 6:return[4,c.apply(void 0,en([e,t,r,n,i],zr(o),!1))];case 7:return p.sent(),[3,10];case 8:return[4,c];case 9:p.sent(),p.label=10;case 10:return l=a.next(),[3,1];case 11:return[3,14];case 12:return u=p.sent(),f={error:u},[3,14];case 13:try{l&&!l.done&&(h=a.return)&&h.call(a)}finally{if(f)throw f.error}return[7];case 14:return[2]}})})}function QA(e,t,r,n,i,o){return Uf(this,void 0,void 0,function(){var s,a;return Ii(this,function(l){switch(l.label){case 0:return s=e.textContent||"",a=function(c,u){var f=zr(u).slice(0);return en(en([],zr(c),!1),[NaN],!1).findIndex(function(h,p){return f[p]!==h})}(s,r),[4,JA(e,en(en([],zr(ej(s,t,a)),!1),zr(ZA(r,t,a)),!1),n,i,o)];case 1:return l.sent(),[2]}})})}function Dk(e){return Uf(this,void 0,void 0,function(){return Ii(this,function(t){switch(t.label){case 0:return[4,new Promise(function(r){return setTimeout(r,e)})];case 1:return t.sent(),[2]}})})}function JA(e,t,r,n,i){return Uf(this,void 0,void 0,function(){var o,s,a,l,c,u,f,h,p,v,y,x,g;return Ii(this,function(m){switch(m.label){case 0:if(o=t,i){for(s=0,a=1;a<t.length;a++)if(l=zr([t[a-1],t[a]],2),c=l[0],(u=l[1]).length>c.length||u===""){s=a;break}o=t.slice(s,t.length)}m.label=1;case 1:m.trys.push([1,6,7,8]),f=bg(function(b){var S,C,E,k,P,$,j;return Ii(this,function(M){switch(M.label){case 0:S=function(q){return Ii(this,function(K){switch(K.label){case 0:return[4,{op:function(Y){return requestAnimationFrame(function(){return Y.textContent=q})},opCode:function(Y){var ee=Y.textContent||"";return q===""||ee.length>q.length?"DELETE":"WRITING"}}];case 1:return K.sent(),[2]}})},M.label=1;case 1:M.trys.push([1,6,7,8]),C=bg(b),E=C.next(),M.label=2;case 2:return E.done?[3,5]:(k=E.value,[5,S(k)]);case 3:M.sent(),M.label=4;case 4:return E=C.next(),[3,2];case 5:return[3,8];case 6:return P=M.sent(),$={error:P},[3,8];case 7:try{E&&!E.done&&(j=C.return)&&j.call(C)}finally{if($)throw $.error}return[7];case 8:return[2]}})}(o)),h=f.next(),m.label=2;case 2:return h.done?[3,5]:(p=h.value,v=p.opCode(e)==="WRITING"?r+r*(Math.random()-.5):n+n*(Math.random()-.5),p.op(e),[4,Dk(v)]);case 3:m.sent(),m.label=4;case 4:return h=f.next(),[3,2];case 5:return[3,8];case 6:return y=m.sent(),x={error:y},[3,8];case 7:try{h&&!h.done&&(g=f.return)&&g.call(f)}finally{if(x)throw x.error}return[7];case 8:return[2]}})})}function ZA(e,t,r){var n,i;return r===void 0&&(r=0),Ii(this,function(o){switch(o.label){case 0:n=t(e),i=n.length,o.label=1;case 1:return r<i?[4,n.slice(0,++r).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function ej(e,t,r){var n,i;return r===void 0&&(r=0),Ii(this,function(o){switch(o.label){case 0:n=t(e),i=n.length,o.label=1;case 1:return i>r?[4,n.slice(0,--i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var tj="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var rj=w.memo(w.forwardRef(function(e,t){var r=e.sequence,n=e.repeat,i=e.className,o=e.speed,s=o===void 0?40:o,a=e.deletionSpeed,l=e.omitDeletionAnimation,c=l!==void 0&&l,u=e.preRenderFirstString,f=u!==void 0&&u,h=e.wrapper,p=h===void 0?"span":h,v=e.splitter,y=v===void 0?function(O){return en([],zr(O),!1)}:v,x=e.cursor,g=x===void 0||x,m=e.style,b=function(O,z){var B={};for(var V in O)Object.prototype.hasOwnProperty.call(O,V)&&z.indexOf(V)<0&&(B[V]=O[V]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function"){var ne=0;for(V=Object.getOwnPropertySymbols(O);ne<V.length;ne++)z.indexOf(V[ne])<0&&Object.prototype.propertyIsEnumerable.call(O,V[ne])&&(B[V[ne]]=O[V[ne]])}return B}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),S=b["aria-label"],C=b["aria-hidden"],E=b.role;a||(a=s);var k=new Array(2).fill(40);[s,a].forEach(function(O,z){switch(typeof O){case"number":k[z]=Math.abs(O-100);break;case"object":var B=O.type,V=O.value;if(typeof V!="number")break;B==="keyStrokeDelayInMs"&&(k[z]=V)}});var P,$,j,M,q,K,Y=k[0],ee=k[1],F=function(O,z){z===void 0&&(z=null);var B=w.useRef(z);return w.useEffect(function(){O&&(typeof O=="function"?O(B.current):O.current=B.current)},[O]),B}(t),G=tj;P=i?"".concat(g?G+" ":"").concat(i):g?G:"",$=w.useRef(function(){var O,z=r;n===1/0?O=Ib:typeof n=="number"&&(z=Array(1+n).fill(r).flat());var B=O?en(en([],zr(z),!1),[O],!1):en([],zr(z),!1);return Ib.apply(void 0,en([F.current,y,Y,ee,c],zr(B),!1)),function(){F.current}}),j=w.useRef(),M=w.useRef(!1),q=w.useRef(!1),K=zr(w.useState(0),2)[1],M.current&&(q.current=!0),w.useEffect(function(){return M.current||(j.current=$.current(),M.current=!0),K(function(O){return O+1}),function(){q.current&&j.current&&j.current()}},[]);var L=p,A=f?r.find(function(O){return typeof O=="string"})||"":null;return X.createElement(L,{"aria-hidden":C,"aria-label":S,role:E,style:m,className:P,children:S?X.createElement("span",{"aria-hidden":"true",ref:F,children:A}):A,ref:S?void 0:F})}),function(e,t){return!0});const nj=({myData:e})=>{const{name:t,link:r}=e;return w.useState("Fashion Start Here"),d.jsx(ij,{children:d.jsx("div",{className:"background-opa",children:d.jsx("div",{className:"main",children:d.jsx("div",{className:"grid grid-two-column",children:d.jsxs("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"1000",className:"hero-section-data",children:[d.jsxs("p",{className:"intro-data",children:[d.jsx("b",{children:"Welcome to"})," "]}),d.jsx("h1",{"data-aos":"flip-up","data-aos-delay":"900",style:{letterSpacing:"0.3rem"},children:t}),d.jsx(rj,{sequence:["Fashion Start Here",2e3,""],wrapper:"span",speed:30,style:{fontSize:"2em",display:"inline-block"},repeat:1/0}),d.jsx("p",{children:d.jsx("b",{children:"Discover handpicked selections of clothing that reflect the season's hottest looks. Our team of fashion enthusiasts scours the globe to bring you the most coveted pieces, ensuring you're always ahead of the curve."})}),d.jsx(rt,{to:"/products",children:d.jsx(it,{children:"Show now"})})]})})})})})},ij=oe.section`

${""}

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {

  padding-left : 1rem;
  
  p {
    margin: 2rem 0;
    font-size : 2rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}



@media (max-width: ${({theme:e})=>e.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  .hero-section-data {
    padding-left : 0rem;
  }

  .main{
    padding : 7rem 9rem;
  }
}
`;var Mk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rb=X.createContext&&X.createContext(Mk),Ri=function(){return Ri=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ri.apply(this,arguments)},oj=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function Fk(e){return e&&e.map(function(t,r){return X.createElement(t.tag,Ri({key:r},t.attr),Fk(t.child))})}function ze(e){return function(t){return X.createElement(sj,Ri({attr:Ri({},e.attr)},t),Fk(e.child))}}function sj(e){var t=function(r){var n=e.attr,i=e.size,o=e.title,s=oj(e,["attr","size","title"]),a=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),X.createElement("svg",Ri({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:l,style:Ri(Ri({color:e.color||r.color},r.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&X.createElement("title",null,o),e.children)};return Rb!==void 0?X.createElement(Rb.Consumer,null,function(r){return t(r)}):t(Mk)}function aj(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"}},{tag:"path",attr:{d:"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"}}]})(e)}function xg(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"}},{tag:"path",attr:{d:"M3 9l4 0"}}]})(e)}function Fd(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}}]})(e)}function lj(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}}]})(e)}function cj(e){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"}}]})(e)}function uj(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"}}]})(e)}const dj=()=>d.jsx(d.Fragment,{children:d.jsx(fj,{children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"grid grid-three-column",children:[d.jsx("div",{"data-aos":"fade-up","data-aos-duration":"800","data-aos-anchor-placement":"center-bottom","data-aos-offset":"150","data-aos-easing":"ease-in-sine",className:"services-1",children:d.jsxs("div",{children:[d.jsx(xg,{className:"icon1"}),d.jsx("h3",{children:"Super Fast and Free Delivery"})]})}),d.jsxs("div",{"data-aos":"fade-up","data-aos-duration":"800","data-aos-anchor-placement":"center-bottom","data-aos-offset":"150","data-aos-easing":"ease-in-sine",className:"services-2",children:[d.jsx("div",{className:"services-colum-2",children:d.jsxs("div",{children:[d.jsx(lj,{className:"icon"}),d.jsx("h3",{children:"Non-contact Shipping"})]})}),d.jsx("div",{"data-aos":"fade-up","data-aos-duration":"800","data-aos-anchor-placement":"center-bottom","data-aos-offset":"150","data-aos-easing":"ease-in-sine",className:"services-colum-2",children:d.jsxs("div",{children:[d.jsx(cj,{className:"icon"}),d.jsx("h3",{children:"Guaranteed Refund"})]})})]}),d.jsx("div",{"data-aos":"fade-up","data-aos-duration":"800","data-aos-anchor-placement":"center-bottom","data-aos-offset":"150","data-aos-easing":"ease-in-sine",className:"services-3",children:d.jsxs("div",{children:[d.jsx(uj,{className:"icon1"}),d.jsx("h3",{children:"Secure Payment System"})]})})]})})})}),fj=oe.section`
  padding: 9rem 0;
  background-color: white;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({theme:e})=>e.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({theme:e})=>e.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  .icon1 {
    margin-left : 15rem;
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`,hj=()=>d.jsx(pj,{"data-aos":"zoom-in","data-aos-duration":"1000",className:"brand-section",children:d.jsxs("div",{className:"container",children:[d.jsx("h3",{children:"Trusted By 500+ Companies"}),d.jsxs("div",{className:"brand-section-slider",children:[d.jsx("div",{className:"slide",children:d.jsx("img",{src:"images/trust1.png",alt:"trusted-brands"})}),d.jsx("div",{className:"slide",children:d.jsx("img",{src:"images/trust2.png",alt:"trusted-brands"})}),d.jsx("div",{className:"slide",children:d.jsx("img",{src:"images/trust3.png",alt:"trusted-brands"})}),d.jsx("div",{className:"slide",children:d.jsx("img",{src:"images/trust4.png",alt:"trusted-brands"})}),d.jsx("div",{className:"slide",children:d.jsx("img",{src:"images/trust5.png",alt:"trusted-brands"})})]})]})}),pj=oe.section`
  padding: 9rem 0;
  background-color: ${({theme:e})=>e.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({theme:e})=>e.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;function Bk(e,t){return function(){return e.apply(t,arguments)}}const{toString:mj}=Object.prototype,{getPrototypeOf:Sv}=Object,Wf=(e=>t=>{const r=mj.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),hn=e=>(e=e.toLowerCase(),t=>Wf(t)===e),Hf=e=>t=>typeof t===e,{isArray:la}=Array,Bl=Hf("undefined");function gj(e){return e!==null&&!Bl(e)&&e.constructor!==null&&!Bl(e.constructor)&&kr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Vk=hn("ArrayBuffer");function vj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Vk(e.buffer),t}const yj=Hf("string"),kr=Hf("function"),Uk=Hf("number"),Gf=e=>e!==null&&typeof e=="object",bj=e=>e===!0||e===!1,Mu=e=>{if(Wf(e)!=="object")return!1;const t=Sv(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xj=hn("Date"),wj=hn("File"),Sj=hn("Blob"),_j=hn("FileList"),kj=e=>Gf(e)&&kr(e.pipe),Cj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kr(e.append)&&((t=Wf(e))==="formdata"||t==="object"&&kr(e.toString)&&e.toString()==="[object FormData]"))},Ej=hn("URLSearchParams"),Tj=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fc(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),la(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(n=0;n<s;n++)a=o[n],t.call(null,e[a],a,e)}}function Wk(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Hk=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gk=e=>!Bl(e)&&e!==Hk;function wg(){const{caseless:e}=Gk(this)&&this||{},t={},r=(n,i)=>{const o=e&&Wk(t,i)||i;Mu(t[o])&&Mu(n)?t[o]=wg(t[o],n):Mu(n)?t[o]=wg({},n):la(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&fc(arguments[n],r);return t}const Pj=(e,t,r,{allOwnKeys:n}={})=>(fc(t,(i,o)=>{r&&kr(i)?e[o]=Bk(i,r):e[o]=i},{allOwnKeys:n}),e),Ij=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rj=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Aj=(e,t,r,n)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=r!==!1&&Sv(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},jj=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},$j=e=>{if(!e)return null;if(la(e))return e;let t=e.length;if(!Uk(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Oj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sv(Uint8Array)),Nj=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Lj=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},zj=hn("HTMLFormElement"),Dj=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Ab=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Mj=hn("RegExp"),qk=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};fc(r,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(n[o]=s||i)}),Object.defineProperties(e,n)},Fj=e=>{qk(e,(t,r)=>{if(kr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(kr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Bj=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return la(e)?n(e):n(String(e).split(t)),r},Vj=()=>{},Uj=(e,t)=>(e=+e,Number.isFinite(e)?e:t),yp="abcdefghijklmnopqrstuvwxyz",jb="0123456789",Kk={DIGIT:jb,ALPHA:yp,ALPHA_DIGIT:yp+yp.toUpperCase()+jb},Wj=(e=16,t=Kk.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Hj(e){return!!(e&&kr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Gj=e=>{const t=new Array(10),r=(n,i)=>{if(Gf(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=la(n)?[]:{};return fc(n,(s,a)=>{const l=r(s,i+1);!Bl(l)&&(o[a]=l)}),t[i]=void 0,o}}return n};return r(e,0)},qj=hn("AsyncFunction"),Kj=e=>e&&(Gf(e)||kr(e))&&kr(e.then)&&kr(e.catch),N={isArray:la,isArrayBuffer:Vk,isBuffer:gj,isFormData:Cj,isArrayBufferView:vj,isString:yj,isNumber:Uk,isBoolean:bj,isObject:Gf,isPlainObject:Mu,isUndefined:Bl,isDate:xj,isFile:wj,isBlob:Sj,isRegExp:Mj,isFunction:kr,isStream:kj,isURLSearchParams:Ej,isTypedArray:Oj,isFileList:_j,forEach:fc,merge:wg,extend:Pj,trim:Tj,stripBOM:Ij,inherits:Rj,toFlatObject:Aj,kindOf:Wf,kindOfTest:hn,endsWith:jj,toArray:$j,forEachEntry:Nj,matchAll:Lj,isHTMLForm:zj,hasOwnProperty:Ab,hasOwnProp:Ab,reduceDescriptors:qk,freezeMethods:Fj,toObjectSet:Bj,toCamelCase:Dj,noop:Vj,toFiniteNumber:Uj,findKey:Wk,global:Hk,isContextDefined:Gk,ALPHABET:Kk,generateString:Wj,isSpecCompliantForm:Hj,toJSONObject:Gj,isAsyncFn:qj,isThenable:Kj};function de(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}N.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yk=de.prototype,Xk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Xk[e]={value:e}});Object.defineProperties(de,Xk);Object.defineProperty(Yk,"isAxiosError",{value:!0});de.from=(e,t,r,n,i,o)=>{const s=Object.create(Yk);return N.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),de.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Yj=null;function Sg(e){return N.isPlainObject(e)||N.isArray(e)}function Qk(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function $b(e,t,r){return e?e.concat(t).map(function(i,o){return i=Qk(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function Xj(e){return N.isArray(e)&&!e.some(Sg)}const Qj=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function qf(e,t,r){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=N.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!N.isUndefined(x[y])});const n=r.metaTokens,i=r.visitor||u,o=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(N.isDate(v))return v.toISOString();if(!l&&N.isBlob(v))throw new de("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(v)||N.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function u(v,y,x){let g=v;if(v&&!x&&typeof v=="object"){if(N.endsWith(y,"{}"))y=n?y:y.slice(0,-2),v=JSON.stringify(v);else if(N.isArray(v)&&Xj(v)||(N.isFileList(v)||N.endsWith(y,"[]"))&&(g=N.toArray(v)))return y=Qk(y),g.forEach(function(b,S){!(N.isUndefined(b)||b===null)&&t.append(s===!0?$b([y],S,o):s===null?y:y+"[]",c(b))}),!1}return Sg(v)?!0:(t.append($b(x,y,o),c(v)),!1)}const f=[],h=Object.assign(Qj,{defaultVisitor:u,convertValue:c,isVisitable:Sg});function p(v,y){if(!N.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),N.forEach(v,function(g,m){(!(N.isUndefined(g)||g===null)&&i.call(t,g,N.isString(m)?m.trim():m,y,h))===!0&&p(g,y?y.concat(m):[m])}),f.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Ob(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function _v(e,t){this._pairs=[],e&&qf(e,this,t)}const Jk=_v.prototype;Jk.append=function(t,r){this._pairs.push([t,r])};Jk.toString=function(t){const r=t?function(n){return t.call(this,n,Ob)}:Ob;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function Jj(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zk(e,t,r){if(!t)return e;const n=r&&r.encode||Jj,i=r&&r.serialize;let o;if(i?o=i(t,r):o=N.isURLSearchParams(t)?t.toString():new _v(t,r).toString(n),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Nb{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(n){n!==null&&t(n)})}}const eC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zj=typeof URLSearchParams<"u"?URLSearchParams:_v,e$=typeof FormData<"u"?FormData:null,t$=typeof Blob<"u"?Blob:null,r$={isBrowser:!0,classes:{URLSearchParams:Zj,FormData:e$,Blob:t$},protocols:["http","https","file","blob","url","data"]},tC=typeof window<"u"&&typeof document<"u",n$=(e=>tC&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),i$=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",o$=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tC,hasStandardBrowserEnv:n$,hasStandardBrowserWebWorkerEnv:i$},Symbol.toStringTag,{value:"Module"})),tn={...o$,...r$};function s$(e,t){return qf(e,new tn.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,o){return tn.isNode&&N.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function a$(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function l$(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function rC(e){function t(r,n,i,o){let s=r[o++];const a=Number.isFinite(+s),l=o>=r.length;return s=!s&&N.isArray(i)?i.length:s,l?(N.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!a):((!i[s]||!N.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&N.isArray(i[s])&&(i[s]=l$(i[s])),!a)}if(N.isFormData(e)&&N.isFunction(e.entries)){const r={};return N.forEachEntry(e,(n,i)=>{t(a$(n),i,r,0)}),r}return null}function c$(e,t,r){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const kv={transitional:eC,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=N.isObject(t);if(o&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return i&&i?JSON.stringify(rC(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return s$(t,this.formSerializer).toString();if((a=N.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return qf(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),c$(t)):t}],transformResponse:[function(t){const r=this.transitional||kv.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&N.isString(t)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?de.from(a,de.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{kv.headers[e]={}});const Cv=kv,u$=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),d$=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&u$[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Lb=Symbol("internals");function Ea(e){return e&&String(e).trim().toLowerCase()}function Fu(e){return e===!1||e==null?e:N.isArray(e)?e.map(Fu):String(e)}function f$(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const h$=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function bp(e,t,r,n,i){if(N.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!N.isString(t)){if(N.isString(n))return t.indexOf(n)!==-1;if(N.isRegExp(n))return n.test(t)}}function p$(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function m$(e,t){const r=N.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}class Kf{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(a,l,c){const u=Ea(l);if(!u)throw new Error("header name must be a non-empty string");const f=N.findKey(i,u);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=Fu(a))}const s=(a,l)=>N.forEach(a,(c,u)=>o(c,u,l));return N.isPlainObject(t)||t instanceof this.constructor?s(t,r):N.isString(t)&&(t=t.trim())&&!h$(t)?s(d$(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=Ea(t),t){const n=N.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return f$(i);if(N.isFunction(r))return r.call(this,i,n);if(N.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Ea(t),t){const n=N.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||bp(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=Ea(s),s){const a=N.findKey(n,s);a&&(!r||bp(n,n[a],a,r))&&(delete n[a],i=!0)}}return N.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!t||bp(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,n={};return N.forEach(this,(i,o)=>{const s=N.findKey(n,o);if(s){r[s]=Fu(i),delete r[o];return}const a=t?p$(o):String(o).trim();a!==o&&delete r[o],r[a]=Fu(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return N.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&N.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Lb]=this[Lb]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Ea(s);n[a]||(m$(i,s),n[a]=!0)}return N.isArray(t)?t.forEach(o):o(t),this}}Kf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Kf.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});N.freezeMethods(Kf);const On=Kf;function xp(e,t){const r=this||Cv,n=t||r,i=On.from(n.headers);let o=n.data;return N.forEach(e,function(a){o=a.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function nC(e){return!!(e&&e.__CANCEL__)}function hc(e,t,r){de.call(this,e??"canceled",de.ERR_CANCELED,t,r),this.name="CanceledError"}N.inherits(hc,de,{__CANCEL__:!0});function g$(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new de("Request failed with status code "+r.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const v$=tn.hasStandardBrowserEnv?{write(e,t,r,n,i,o){const s=[e+"="+encodeURIComponent(t)];N.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),N.isString(n)&&s.push("path="+n),N.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function y$(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function b$(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function iC(e,t){return e&&!y$(t)?b$(e,t):t}const x$=tn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(o){let s=o;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(s){const a=N.isString(s)?i(s):s;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function w$(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function S$(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=n[o];s||(s=c),r[i]=l,n[i]=c;let f=o,h=0;for(;f!==i;)h+=r[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function zb(e,t){let r=0;const n=S$(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,l=n(a),c=o<=s;r=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const _$=typeof XMLHttpRequest<"u",k$=_$&&function(e){return new Promise(function(r,n){let i=e.data;const o=On.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let u;if(N.isFormData(i)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[y,...x]=u?u.split(";").map(g=>g.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...x].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+x))}const h=iC(e.baseURL,e.url);f.open(e.method.toUpperCase(),Zk(h,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function p(){if(!f)return;const y=On.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),g={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:y,config:e,request:f};g$(function(b){r(b),c()},function(b){n(b),c()},g),f=null}if("onloadend"in f?f.onloadend=p:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(p)},f.onabort=function(){f&&(n(new de("Request aborted",de.ECONNABORTED,e,f)),f=null)},f.onerror=function(){n(new de("Network Error",de.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||eC;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),n(new de(x,g.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,f)),f=null},tn.hasStandardBrowserEnv&&(a&&N.isFunction(a)&&(a=a(e)),a||a!==!1&&x$(h))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&v$.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&N.forEach(o.toJSON(),function(x,g){f.setRequestHeader(g,x)}),N.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",zb(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",zb(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{f&&(n(!y||y.type?new hc(null,e,f):y),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=w$(h);if(v&&tn.protocols.indexOf(v)===-1){n(new de("Unsupported protocol "+v+":",de.ERR_BAD_REQUEST,e));return}f.send(i||null)})},_g={http:Yj,xhr:k$};N.forEach(_g,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Db=e=>`- ${e}`,C$=e=>N.isFunction(e)||e===null||e===!1,oC={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let o=0;o<t;o++){r=e[o];let s;if(n=r,!C$(r)&&(n=_g[(s=String(r)).toLowerCase()],n===void 0))throw new de(`Unknown adapter '${s}'`);if(n)break;i[s||"#"+o]=n}if(!n){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Db).join(`
`):" "+Db(o[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:_g};function wp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hc(null,e)}function Mb(e){return wp(e),e.headers=On.from(e.headers),e.data=xp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),oC.getAdapter(e.adapter||Cv.adapter)(e).then(function(n){return wp(e),n.data=xp.call(e,e.transformResponse,n),n.headers=On.from(n.headers),n},function(n){return nC(n)||(wp(e),n&&n.response&&(n.response.data=xp.call(e,e.transformResponse,n.response),n.response.headers=On.from(n.response.headers))),Promise.reject(n)})}const Fb=e=>e instanceof On?e.toJSON():e;function Ws(e,t){t=t||{};const r={};function n(c,u,f){return N.isPlainObject(c)&&N.isPlainObject(u)?N.merge.call({caseless:f},c,u):N.isPlainObject(u)?N.merge({},u):N.isArray(u)?u.slice():u}function i(c,u,f){if(N.isUndefined(u)){if(!N.isUndefined(c))return n(void 0,c,f)}else return n(c,u,f)}function o(c,u){if(!N.isUndefined(u))return n(void 0,u)}function s(c,u){if(N.isUndefined(u)){if(!N.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function a(c,u,f){if(f in t)return n(c,u);if(f in e)return n(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,u)=>i(Fb(c),Fb(u),!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||i,h=f(e[u],t[u],u);N.isUndefined(h)&&f!==a||(r[u]=h)}),r}const sC="1.6.3",Ev={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ev[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Bb={};Ev.transitional=function(t,r,n){function i(o,s){return"[Axios v"+sC+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,a)=>{if(t===!1)throw new de(i(s," has been removed"+(r?" in "+r:"")),de.ERR_DEPRECATED);return r&&!Bb[s]&&(Bb[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,a):!0}};function E$(e,t,r){if(typeof e!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new de("option "+o+" must be "+l,de.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new de("Unknown option "+o,de.ERR_BAD_OPTION)}}const kg={assertOptions:E$,validators:Ev},Qn=kg.validators;class Bd{constructor(t){this.defaults=t,this.interceptors={request:new Nb,response:new Nb}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Ws(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&kg.assertOptions(n,{silentJSONParsing:Qn.transitional(Qn.boolean),forcedJSONParsing:Qn.transitional(Qn.boolean),clarifyTimeoutError:Qn.transitional(Qn.boolean)},!1),i!=null&&(N.isFunction(i)?r.paramsSerializer={serialize:i}:kg.assertOptions(i,{encode:Qn.function,serialize:Qn.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&N.merge(o.common,o[r.method]);o&&N.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),r.headers=On.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,f=0,h;if(!l){const v=[Mb.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),h=v.length,u=Promise.resolve(r);f<h;)u=u.then(v[f++],v[f++]);return u}h=a.length;let p=r;for(f=0;f<h;){const v=a[f++],y=a[f++];try{p=v(p)}catch(x){y.call(this,x);break}}try{u=Mb.call(this,p)}catch(v){return Promise.reject(v)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=Ws(this.defaults,t);const r=iC(t.baseURL,t.url);return Zk(r,t.params,t.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(t){Bd.prototype[t]=function(r,n){return this.request(Ws(n||{},{method:t,url:r,data:(n||{}).data}))}});N.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,a){return this.request(Ws(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Bd.prototype[t]=r(),Bd.prototype[t+"Form"]=r(!0)});const Bu=Bd;class Tv{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{n.subscribe(a),o=a}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,a){n.reason||(n.reason=new hc(o,s,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Tv(function(i){t=i}),cancel:t}}}const T$=Tv;function P$(e){return function(r){return e.apply(null,r)}}function I$(e){return N.isObject(e)&&e.isAxiosError===!0}const Cg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cg).forEach(([e,t])=>{Cg[t]=e});const R$=Cg;function aC(e){const t=new Bu(e),r=Bk(Bu.prototype.request,t);return N.extend(r,Bu.prototype,t,{allOwnKeys:!0}),N.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return aC(Ws(e,i))},r}const re=aC(Cv);re.Axios=Bu;re.CanceledError=hc;re.CancelToken=T$;re.isCancel=nC;re.VERSION=sC;re.toFormData=qf;re.AxiosError=de;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=P$;re.isAxiosError=I$;re.mergeConfig=Ws;re.AxiosHeaders=On;re.formToJSON=e=>rC(N.isHTMLForm(e)?new FormData(e):e);re.getAdapter=oC.getAdapter;re.HttpStatusCode=R$;re.default=re;const A$=(e,t)=>{switch(t.type){case"SET_LOADING":return{...e,isLoading:!0};case"API_ERROR":return{...e,isLoading:!1,isError:!0};case"SET_API_DATA":let r=1;const n=t==null?void 0:t.payload.filter(s=>r++<=3);return{...e,isLoading:!1,products:t.payload,featureProducts:n};case"SET_SINGLE_LOADING":return{...e,isSingleLoading:!0};case"SET_SINGLE_PRODUCT":const{products:i}=e,o=i.filter(s=>s.pId===parseInt(t.payload));return{...e,isSingleLoading:!1,singleProduct:o[0]};case"SET_SINGLE_ERROR":return{...e,isSingleLoading:!1,isError:!0};default:return e}},lC=w.createContext(),Vb="http://localhost:8080/product/getProduct",j$={isLoading:!1,isError:!1,products:[],featureProducts:[],isSingleLoading:!1,singleProduct:{}},$$=({children:e})=>{const[t,r]=w.useReducer(A$,j$),n=async o=>{r({type:"SET_LOADING"});try{const a=await(await re.get(o)).data;r({type:"SET_API_DATA",payload:a})}catch{r({type:"API_ERROR"})}},i=async o=>{r({type:"SET_SINGLE_LOADING"}),await n(Vb),r({type:"SET_SINGLE_PRODUCT",payload:o})};return w.useEffect(()=>{n(Vb)},[]),d.jsx(d.Fragment,{children:d.jsx(lC.Provider,{value:{...t,getSingleProduct:i,getProduct:n},children:e})})},Yf=()=>w.useContext(lC);function gt({price:e}){return Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2}).format(e/100)}const cC="#4fa94d",uC={"aria-busy":!0,role:"progressbar"},O$=oe.div`
  display: ${e=>e.$visible?"flex":"none"};
`,dC="http://www.w3.org/2000/svg",$r=242.776657104492,N$=1.6,L$=wv`
12.5% {
  stroke-dasharray: ${$r*.14}px, ${$r}px;
  stroke-dashoffset: -${$r*.11}px;
}
43.75% {
  stroke-dasharray: ${$r*.35}px, ${$r}px;
  stroke-dashoffset: -${$r*.35}px;
}
100% {
  stroke-dasharray: ${$r*.01}px, ${$r}px;
  stroke-dashoffset: -${$r*.99}px;
}
`;oe.path`
  stroke-dasharray: ${$r*.01}px, ${$r};
  stroke-dashoffset: 0;
  animation: ${L$} ${N$}s linear infinite;
`;const z$=[0,30,60,90,120,150,180,210,240,270,300,330],D$=wv`
to {
   transform: rotate(360deg);
 }
`,M$=oe.svg`
  animation: ${D$} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,F$=oe.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,Eg=({strokeColor:e=cC,strokeWidth:t="5",animationDuration:r="0.75",width:n="96",visible:i=!0,ariaLabel:o="rotating-lines-loading"})=>{const s=w.useCallback(()=>z$.map(a=>d.jsx(F$,{points:"24,12 24,4",width:t,transform:`rotate(${a}, 24, 24)`},a)),[t]);return i?d.jsx(M$,{xmlns:dC,viewBox:"0 0 48 48",width:n,stroke:e,speed:r,"data-testid":"rotating-lines-svg","aria-label":o,...uC,children:s()}):null},B$=({height:e=80,width:t=80,strokeWidth:r=2,radius:n=1,color:i=cC,ariaLabel:o="tail-spin-loading",wrapperStyle:s,wrapperClass:a,visible:l=!0})=>{const c=parseInt(String(r)),u=c+36,f=c/2,h=f+parseInt(String(n))-1;return d.jsx(O$,{style:s,$visible:l,className:a,"data-testid":"tail-spin-loading","aria-label":o,...uC,children:d.jsxs("svg",{width:t,height:e,viewBox:`0 0 ${u} ${u}`,xmlns:dC,"data-testid":"tail-spin-svg",children:[d.jsx("defs",{children:d.jsxs("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[d.jsx("stop",{stopColor:i,stopOpacity:"0",offset:"0%"}),d.jsx("stop",{stopColor:i,stopOpacity:".631",offset:"63.146%"}),d.jsx("stop",{stopColor:i,offset:"100%"})]})}),d.jsx("g",{fill:"none",fillRule:"evenodd",children:d.jsxs("g",{transform:`translate(${f} ${f})`,children:[d.jsx("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:i,strokeWidth:r,children:d.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),d.jsx("circle",{fill:"#fff",cx:"36",cy:"18",r:h,children:d.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})},V$=wv`
to {
   stroke-dashoffset: 136;
 }
`;oe.polygon`
  stroke-dasharray: 17;
  animation: ${V$} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;oe.svg`
  transform-origin: 50% 65%;
`;const fC=e=>{const{pId:t,name:r,image:n,price:i,category:o,product_sizes:s}=e;if(n.length===0)return d.jsx(d.Fragment,{children:d.jsx(rt,{"data-aos":"zoom-in-up",to:`/singleproduct/${t}`,children:d.jsxs("div",{className:"card",children:[d.jsx("figure",{style:{height:"15rem"},children:d.jsx(Eg,{visible:!0,height:"80",width:"80",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})}),d.jsx("div",{className:"card-data",children:d.jsxs("div",{className:"card-data-flex",children:[d.jsx("h3",{children:r}),d.jsx("p",{className:"card-data--price",children:d.jsx(gt,{price:s[0].price})})]})})]})})});let a=n.filter(l=>l.imgView==="front");return a.length===0&&(a=n),d.jsx(d.Fragment,{children:d.jsx(rt,{"data-aos":"zoom-in-up",to:`/singleproduct/${t}`,children:d.jsxs("div",{className:"card",children:[d.jsx("figure",{children:d.jsx("img",{src:a[0].imgUrl,alt:r})}),d.jsx("div",{className:"card-data",children:d.jsxs("div",{className:"card-data-flex",children:[d.jsx("h3",{children:r}),d.jsx("p",{className:"card-data--price",children:d.jsx(gt,{price:s[0].price})})]})})]})})})};function U$(){const{isLoading:e,featureProducts:t}=Yf();return e?d.jsx("div",{children:"....Loading"}):d.jsx(d.Fragment,{children:d.jsx(W$,{"data-aos":"zoom-out",className:"section",children:d.jsxs("div",{className:"container",children:[d.jsx("div",{className:"intro-data",children:"Check Now!"}),d.jsx("div",{className:"common-heading",children:"Revolutionize Your Wardrobe"}),d.jsx("div",{className:"grid grid-three-column",children:t.map((r,n)=>d.jsx(fC,{...r},n))})]})})})}const W$=oe.section`
  padding: 9rem 0;
  background-color: ${({theme:e})=>e.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({theme:e})=>e.colors.bg};
      color: ${({theme:e})=>e.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .intro-data{
    font-size : 1.5rem;
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({theme:e})=>e.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({theme:e})=>e.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`,H$=()=>{const e={name:"Trendloom",link:"images/hero.jpg"};return w.useEffect(()=>{window.scrollTo({top:0})},[]),d.jsxs(d.Fragment,{children:[d.jsx(nj,{myData:e}),d.jsx(U$,{}),d.jsx(dj,{}),d.jsx(hj,{})]})},G$=()=>{const e={name:"Discover Our Story"};return d.jsx(d.Fragment,{children:d.jsx(q$,{children:d.jsx("div",{className:"background-opa",children:d.jsx("div",{className:"main",children:d.jsx("div",{className:"grid grid-two-column",children:d.jsxs("div",{"data-aos":"flip-down","data-aos-duration":"1000",className:"hero-section-data",children:[d.jsx("h1",{children:e.name}),d.jsx("p",{children:d.jsx("b",{children:"TrendLoom's Epic Tale of Style and Sophistication. Dive into our legacy, where every stitch tells a story of passion, innovation, and timeless fashion.Learn more about Trendloom and our commitment to style, quality, and you."})}),d.jsx(rt,{to:"/products",children:d.jsx(it,{children:"Show now"})})]})})})})})})},q$=oe.section`

${""}

img {
  min-width: 10rem;
  height: 10rem;
}

${""}
.hero-section-data {
  p {
    margin: 2rem 0;
    font-size : 2rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({theme:e})=>e.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  .main{
    margin-bottom : 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;function K$(e){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"}}]})(e)}function Y$(e){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}}]})(e)}const X$=(e,t)=>{switch(t.type){case"LOAD_FILTER_PRODUCTS":let r=t.payload.map(g=>g.product_sizes[0].price),n=Math.max(...r);return{...e,filter_products:[...t.payload],all_products:[...t.payload],filters:{...e.filters,maxPrice:n,price:n}};case"SET_GRIDVIEW":return{...e,grid_view:!0};case"SET_LISTVIEW":return{...e,grid_view:!1};case"GET_SORT_VALUE":return{...e,sorting_value:t.payload};case"SORTING_PRODUCTS":let i;const{filter_products:o}=e;let s=[...o];const a=(g,m)=>{if(e.sorting_value==="lowest")return g.product_sizes[0].price-m.product_sizes[0].price;if(e.sorting_value==="highest")return m.product_sizes[0].price-g.product_sizes[0].price;if(e.sorting_value==="a-z")return g.name.localeCompare(m.name);if(e.sorting_value==="z-a")return m.name.localeCompare(g.name)};return i=s.sort(a),{...e,filter_products:i};case"UPDATE_FILTERS_VALUE":const{name:l,value:c}=t.payload;return{...e,filters:{...e.filters,[l]:c}};case"FILTER_PRODUCTS":let{all_products:u}=e,f=[...u];const{text:h,category:p,company:v,color:y,price:x}=e.filters;return h&&(f=f.filter(g=>g.name.toLowerCase().includes(h.toLowerCase()))),p!=="all"&&(f=f.filter(g=>g.category===p)),v!=="all"&&(f=f.filter(g=>g.company.toLowerCase()===v.toLowerCase())),y!=="all"&&(f=f.filter(g=>g.color.includes(y))),x===0?f=f.filter(g=>g.price==x):f=f.filter(g=>parseInt(g.product_sizes[0].price)<=x),{...e,filter_products:f};case"CLEAR_FILTERS":return{...e,filters:{...e.filters,text:"",category:"all",company:"all",color:"all",maxPrice:0,price:0,minPrice:0}};default:return e}},hC=w.createContext(),Q$={filter_products:[],all_products:[],grid_view:!0,sorting_value:"lowest",filters:{text:"",category:"all",company:"all",color:"all",maxPrice:0,price:0,minPrice:0}},J$=({children:e})=>{const{products:t,getProduct:r}=Yf(),[n,i]=w.useReducer(X$,Q$),o=()=>i({type:"SET_GRIDVIEW"}),s=()=>i({type:"SET_LISTVIEW"}),a=u=>{let f=u.target.value;i({type:"GET_SORT_VALUE",payload:f})},l=u=>{let f=u.target.name,h=u.target.value;return i({type:"UPDATE_FILTERS_VALUE",payload:{name:f,value:h}})},c=()=>{i({type:"CLEAR_FILTERS"}),i({type:"LOAD_FILTER_PRODUCTS",payload:t})};return w.useEffect(()=>{i({type:"FILTER_PRODUCTS"}),i({type:"SORTING_PRODUCTS"})},[t,n.sorting_value,n.filters]),w.useEffect(()=>{i({type:"LOAD_FILTER_PRODUCTS",payload:t})},[t]),d.jsx(hC.Provider,{value:{...n,setGridView:o,setListView:s,sorting:a,updateFilterValue:l,clearFilters:c},children:e})},Pv=()=>w.useContext(hC),Z$=()=>{const{grid_view:e,setGridView:t,setListView:r,filter_products:n,sorting:i}=Pv();return d.jsxs(eO,{className:"sort-section",children:[d.jsxs("div",{className:"sorting-list--grid",children:[d.jsx("button",{className:e?"active sort-btn":"sort-btn",onClick:t,children:d.jsx(K$,{className:"icon"})}),d.jsx("button",{className:e?"sort-btn":"active sort-btn",onClick:r,children:d.jsx(Y$,{className:"icon"})})]}),d.jsx("div",{className:"product-data",children:d.jsx("p",{children:`${n.length} Product Availabel`})}),d.jsx("div",{className:"sort-selection",children:d.jsxs("form",{action:"#",children:[d.jsx("label",{htmlFor:"sort"}),d.jsxs("select",{name:"sort",id:"sort",className:"sort-selection--style",onClick:i,children:[d.jsx("option",{value:"null",children:"Sort By"}),d.jsx("option",{value:"lowest",children:"Price(lowest)"}),d.jsx("option",{value:"highest",children:"Price(highest)"}),d.jsx("option",{value:"a-z",children:"Sort(a-z)"}),d.jsx("option",{value:"z-a",children:"Sort(z-a)"})]})]})})]})},eO=oe.section`
  display: flex;
  justify-content: space-between;
  
  margin-top: 5rem;

  select{
    font-size : 1.5rem;
  }


  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({theme:e})=>e.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;function tO(e){return ze({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"}}]})(e)}function rO(e){return ze({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function pC(e){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function mC(e){return ze({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function gC(e){return ze({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function nO(e){return ze({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"}}]})(e)}function iO(e){return ze({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function oO(e){return ze({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}const sO=()=>{const{filters:{text:e,category:t,color:r,price:n,maxPrice:i,minPrice:o},updateFilterValue:s,all_products:a,clearFilters:l}=Pv(),c=(h,p)=>{let v=h.map(y=>y[p]);return v=["all",...new Set(v)]},u=c(a,"category");c(a,"company");const f=c(a,"color");return d.jsx(d.Fragment,{children:d.jsxs(aO,{children:[d.jsx("div",{className:"filter-search",children:d.jsx("form",{onSubmit:h=>h.preventDefault(),children:d.jsx("input",{type:"text",name:"text",value:e,onChange:s,placeholder:"SEARCH"})})}),d.jsxs("div",{className:"filter-category",children:[d.jsx("h3",{children:"Category"}),d.jsx("div",{children:u.map((h,p)=>d.jsx("button",{type:"button",name:"category",value:h,className:h===t?"active":"",onClick:s,children:h},p))})]}),d.jsx("hr",{}),d.jsxs("div",{className:"filter-colors colors",children:[d.jsx("h3",{children:"Colors"}),d.jsx("div",{className:"filter-color-style",children:f.map((h,p)=>h==="all"?d.jsx("button",{type:"button",className:"color-all--style",onClick:s,value:h,name:"color",children:"All"},p):d.jsx("button",{type:"button",style:{backgroundColor:h},className:r===h?"btnStyle active":"btnStyle",onClick:s,value:h,name:"color",children:r===h?d.jsx(pC,{className:"checkStyle"}):null},p))}),d.jsx("hr",{style:{marginTop:"2rem"}}),d.jsxs("div",{className:"filter_price",children:[d.jsx("h3",{children:"Price"}),d.jsx("p",{children:d.jsx(gt,{price:n})}),d.jsx("input",{type:"range",min:o,max:i,value:n,onChange:s,name:"price"})]}),d.jsx("div",{className:"filter-clear",children:d.jsx(it,{className:"btn",onClick:l,children:" Clear Filter"})})]})]})})},aO=oe.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  input{
    font-size : 1.4rem;
    text-transform : none;
  }

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({theme:e})=>e.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({theme:e})=>e.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({theme:e})=>e.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({theme:e})=>e.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    margin-left : 0.5rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`,lO=({products:e})=>d.jsx(cO,{className:"section",children:d.jsx("div",{className:"grid grid-three-column",children:e.map((t,r)=>d.jsx(fC,{...t},r))})}),cO=oe.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({theme:e})=>e.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({theme:e})=>e.colors.helper};
    }

    h3 {
      color: ${({theme:e})=>e.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }


@media (max-width: ${({theme:e})=>e.media.mobile}) {

  

  .card{
    width : 20rem;
  }

  .grid-three-column{
    grid-template-columns: repeat(2, 1fr);
  }

  .grid {    
    grid-gap: 2rem;
  }

}
`,uO=({products:e})=>d.jsx(dO,{className:"section",children:d.jsx("div",{className:"container grid",children:e.map(t=>{const{pId:r,name:n,image:i,product_sizes:o,description:s}=t;return d.jsxs("div",{className:"card grid grid-two-column",children:[d.jsx("figure",{children:d.jsx("img",{src:i[0].imgUrl,alt:n})}),d.jsxs("div",{className:"card-data",children:[d.jsx("h3",{children:n}),d.jsx("p",{children:d.jsx(gt,{price:o[0].price})}),d.jsxs("p",{children:[s.slice(0,90),"..."]}),d.jsx(rt,{to:`/singleproduct/${r}`,className:"btn-main",children:d.jsx(it,{className:"btn",children:"Read More"})})]})]})})})}),dO=oe.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`,fO=()=>{const{filter_products:e,grid_view:t}=Pv();if(t===!0)return d.jsx(lO,{products:e});if(t===!1)return d.jsx(uO,{products:e})},hO=()=>(w.useEffect(()=>{window.scrollTo({top:0})},[]),d.jsx(d.Fragment,{children:d.jsx(pO,{children:d.jsxs("div",{className:"container grid grid-filter-column",children:[d.jsx("div",{children:d.jsx(sO,{})}),d.jsxs("section",{className:"product-view--sort",children:[d.jsx("div",{className:"sort-filter",children:d.jsx(Z$,{})}),d.jsx("div",{className:"main-product",children:d.jsx(fO,{})})]})]})})})),pO=oe.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`,mO=()=>(w.useEffect(()=>{window.scrollTo({top:0})},[]),d.jsx(d.Fragment,{children:d.jsxs(gO,{children:[d.jsx("h2",{className:"common-heading",children:"Contact page"}),d.jsx("div",{"data-aos":"fade-up","data-aos-duration":"700",children:d.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.36246167877!2d72.88241160000003!3d22.677546999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b3c654679bd%3A0x7fec0936b8b30f97!2sBlossom%20Aura!5e0!3m2!1sen!2sin!4v1703018630032!5m2!1sen!2sin",width:"100%",height:"400",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),d.jsx("div",{className:"container",children:d.jsx("div",{className:"contact-form",children:d.jsxs("form",{action:"https://formspree.io/f/moqgawpg",method:"post",className:"contact-inputs",children:[d.jsx("input",{"data-aos":"fade-up","data-aos-duration":"700",type:"text",placeholder:"USERNAME",name:"username",required:!0,autoComplete:"off"}),d.jsx("input",{"data-aos":"fade-up","data-aos-duration":"700",type:"email",name:"Email",placeholder:"EMAIL",autoComplete:"off",required:!0}),d.jsx("textarea",{"data-aos":"fade-up","data-aos-duration":"700",name:"Messages",cols:"30",rows:"10",autoComplete:"off",placeholder:"ENTER YOUR MESSAGE",required:!0}),d.jsx("input",{type:"submit",value:"send"})]})})})]})})),gO=oe.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    input{
      font-size : 1.4rem;
      text-transform : none;
    }

    textarea{
      font-size : 1.4rem;
      text-transform : none;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            font-size : 1.6rem;
            letter-spacing : 1px;
            transition: all 0.2s;

            &:hover {
              background-color: ${({theme:e})=>e.colors.white};
              border: 1px solid ${({theme:e})=>e.colors.btn};
              color: ${({theme:e})=>e.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;oe.section`
  height: 10rem;
  background-color: ${({theme:e})=>e.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`;const vO=({imgs:e=[{imgUrl:""}]})=>{const[t,r]=w.useState(e[0]);return e.length===0?d.jsxs(Ub,{children:[d.jsx("div",{className:"grid grid-four-column",children:d.jsx("figure",{children:d.jsx(Eg,{visible:!0,height:"60",width:"60",color:"blue",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})})}),d.jsx("div",{className:"main-screen",children:d.jsx(Eg,{visible:!0,height:"96",width:"96",color:"blue",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})})]}):d.jsxs(Ub,{children:[d.jsx("div",{className:"grid grid-four-column",children:e.map((n,i)=>d.jsx("figure",{children:d.jsx("img",{"data-aos":"zoom-in-up",src:n.imgUrl,alt:n.filename,className:"box-image--style",onClick:()=>r(n)},i)}))}),d.jsx("div",{className:"main-screen",children:d.jsx("img",{"data-aos":"zoom-in-up",src:t.imgUrl})})]})},Ub=oe.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({theme:e})=>e.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({theme:e})=>e.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`,yO=oe.div`
  width: 100%;
  padding: 0rem 12rem;
`;function bO(e){return ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}const xO=({stars:e,reviews:t})=>{const r=Array.from({length:5},(n,i)=>{let o=i+.5;return d.jsx("span",{children:e>=i+1?d.jsx(iO,{className:"icon"}):e>=o?d.jsx(nO,{className:"icon"}):d.jsx(bO,{className:"icon"})},i)});return d.jsx(wO,{children:d.jsxs("div",{className:"icon-style",children:[r,d.jsxs("p",{children:["(",t," customer reviews)"]})]})})},wO=oe.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;function sr(){const e=localStorage.getItem("ACCESS_TOKEN"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`,"Access-Control-Allow-Origin":"*"};return e?t:{}}const SO=({amount:e,setDecrease:t,setIncrease:r,id:n,cartpId:i,max:o})=>{const s=async()=>{if(!(e<=1))try{const l=sr();(await re.put(`http://localhost:8080/cart/decQyt/${i}`,null,{headers:l})).data==="OK"&&t()}catch(l){console.log(l)}},a=async()=>{if(!(e>=o))try{const l=sr();(await re.put(`http://localhost:8080/cart/incQyt/${i}`,null,{headers:l})).data==="OK"&&r()}catch(l){console.log(l)}};return d.jsx("div",{className:"cart-button",children:d.jsxs("div",{className:"amount-toggle",children:[d.jsx("button",{onClick:s,children:d.jsx(mC,{})}),d.jsx("div",{className:"amount-style",children:e}),d.jsx("button",{onClick:a,children:d.jsx(gC,{})})]})})},_O=(e,t)=>{if(t.type==="ADD_TO_CART"){let{id:r,color:n,amount:i,price1:o,stock:s,size:a,product:l,cartpId:c}=t.payload,u=l.image.filter(h=>h.imgView==="front");if(e.cart.find(h=>h.id===r&&h.size===a)){let h=e.cart.map(p=>{if(p.id===r){let v=p.amount+i;return v>=p.max&&(v=p.max),{...p,amount:v}}else return p});return{...e,cart:h}}else{let h={id:r,cartpId:c,name:l.name,color:n,amount:i,size:a,image:u[0].imgUrl,price:o,max:s};return{...e,cart:[...e.cart,h]}}}if(t.type==="SET_DECREMENT"){console.log(e.cart);let{id:r,size:n}=t.payload,i=e.cart.map(o=>{if(o.id===r&&o.size===n){let s=o.amount-1;return s<=1&&(s=1),{...o,amount:s}}else return o});return{...e,cart:i}}if(t.type==="SET_INCREMENT"){let{id:r,size:n}=t.payload,i=e.cart.map(o=>{if(o.id===r&&o.size===n){let s=o.amount+1;return s>=o.max&&(s=o.max),{...o,amount:s}}else return o});return{...e,cart:i}}if(t.type==="REMOVE_ITEM"){let{id:r,size:n}=t.payload,i=e.cart.filter(o=>{if(o.id!==r)return o;if(o.id===r&&o.size!==n)return o});return{...e,cart:i}}if(t.type==="CLEAR_CART")return{...e,cart:[]};if(t.type==="CART_ITEM_PRICE_TOTAL"){let{total_item:r,total_price:n}=e.cart.reduce((i,o)=>{let{price:s,amount:a}=o;return i.total_item+=a,i.total_price+=s*a,i},{total_item:0,total_price:0});return{...e,total_item:r,total_price:n}}return e},vC=w.createContext(),kO=({children:e})=>{const[t,r]=w.useState(!1),[n,i]=w.useState(""),[o,s]=w.useState("");return d.jsx(d.Fragment,{children:d.jsx(vC.Provider,{value:{isLogin:t,setIsLogin:r,uname:n,setUname:i,uemail:o,setUemail:s},children:e})})},qn=()=>w.useContext(vC),yC=w.createContext(),CO={cart:[],total_item:"",total_price:"",shipping_fee:5e3},EO=({children:e})=>{const[t,r]=w.useReducer(_O,CO);qn();const n=(l,c,u,f,h,p,v,y)=>{r({type:"ADD_TO_CART",payload:{id:l,color:c,amount:u,price1:f,stock:h,size:p,product:v,cartpId:y}})},i=(l,c)=>{r({type:"SET_DECREMENT",payload:{id:l,size:c}})},o=(l,c)=>{r({type:"SET_INCREMENT",payload:{id:l,size:c}})},s=(l,c)=>{r({type:"REMOVE_ITEM",payload:{id:l,size:c}})},a=()=>{r({type:"CLEAR_CART"})};return w.useEffect(()=>{(async()=>{if(localStorage.getItem("ACCESS_TOKEN")){const u=sr(),h=(await re.get("http://localhost:8080/cart/viewCart",{headers:u})).data;console.log(h),h.map(p=>{const v=p.product[0].product_sizes.filter(y=>y.psize===p.size);n(p.product[0].pId,p.product[0].color,p.quty,v[0].price,v[0].pstock,p.size,p.product[0],p.id)})}})()},[]),w.useEffect(()=>{r({type:"CART_ITEM_PRICE_TOTAL"}),localStorage.setItem("akshayCart",JSON.stringify(t.cart))},[t.cart]),d.jsx(yC.Provider,{value:{...t,addToCart:n,removeItem:s,clearCart:a,setDecrease:i,setIncrement:o},children:e})},Li=()=>w.useContext(yC);function TO(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(e)}function PO(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"}}]})(e)}function bC(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=bC(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function yi(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=bC(e))&&(n&&(n+=" "),n+=t);return n}const nl=e=>typeof e=="number"&&!isNaN(e),jo=e=>typeof e=="string",Vt=e=>typeof e=="function",Vu=e=>jo(e)||Vt(e)?e:null,Sp=e=>w.isValidElement(e)||jo(e)||Vt(e)||nl(e);function IO(e,t,r){r===void 0&&(r=300);const{scrollHeight:n,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=n+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,r)})})}function Xf(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:f,isIn:h}=s;const p=n?`${t}--${l}`:t,v=n?`${r}--${l}`:r,y=w.useRef(0);return w.useLayoutEffect(()=>{const x=f.current,g=p.split(" "),m=b=>{b.target===f.current&&(x.dispatchEvent(new Event("d")),x.removeEventListener("animationend",m),x.removeEventListener("animationcancel",m),y.current===0&&b.type!=="animationcancel"&&x.classList.remove(...g))};x.classList.add(...g),x.addEventListener("animationend",m),x.addEventListener("animationcancel",m)},[]),w.useEffect(()=>{const x=f.current,g=()=>{x.removeEventListener("animationend",g),i?IO(x,u,o):u()};h||(c?g():(y.current=1,x.className+=` ${v}`,x.addEventListener("animationend",g)))},[h]),X.createElement(X.Fragment,null,a)}}function Wb(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const yr={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(n=>n!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},ou=e=>{let{theme:t,type:r,...n}=e;return X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...n})},_p={info:function(e){return X.createElement(ou,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return X.createElement(ou,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return X.createElement(ou,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return X.createElement(ou,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return X.createElement("div",{className:"Toastify__spinner"})}};function RO(e){const[,t]=w.useReducer(p=>p+1,0),[r,n]=w.useState([]),i=w.useRef(null),o=w.useRef(new Map).current,s=p=>r.indexOf(p)!==-1,a=w.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:p=>o.get(p)}).current;function l(p){let{containerId:v}=p;const{limit:y}=a.props;!y||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function c(p){n(v=>p==null?[]:v.filter(y=>y!==p))}function u(){const{toastContent:p,toastProps:v,staleId:y}=a.queue.shift();h(p,v,y)}function f(p,v){let{delay:y,staleId:x,...g}=v;if(!Sp(p)||function(q){return!i.current||a.props.enableMultiContainer&&q.containerId!==a.props.containerId||o.has(q.toastId)&&q.updateId==null}(g))return;const{toastId:m,updateId:b,data:S}=g,{props:C}=a,E=()=>c(m),k=b==null;k&&a.count++;const P={...C,style:C.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(g).filter(q=>{let[K,Y]=q;return Y!=null})),toastId:m,updateId:b,data:S,closeToast:E,isIn:!1,className:Vu(g.className||C.toastClassName),bodyClassName:Vu(g.bodyClassName||C.bodyClassName),progressClassName:Vu(g.progressClassName||C.progressClassName),autoClose:!g.isLoading&&($=g.autoClose,j=C.autoClose,$===!1||nl($)&&$>0?$:j),deleteToast(){const q=Wb(o.get(m),"removed");o.delete(m),yr.emit(4,q);const K=a.queue.length;if(a.count=m==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),K>0){const Y=m==null?a.props.limit:1;if(K===1||Y===1)a.displayedToast++,u();else{const ee=Y>K?K:Y;a.displayedToast=ee;for(let F=0;F<ee;F++)u()}}else t()}};var $,j;P.iconOut=function(q){let{theme:K,type:Y,isLoading:ee,icon:F}=q,G=null;const L={theme:K,type:Y};return F===!1||(Vt(F)?G=F(L):w.isValidElement(F)?G=w.cloneElement(F,L):jo(F)||nl(F)?G=F:ee?G=_p.spinner():(A=>A in _p)(Y)&&(G=_p[Y](L))),G}(P),Vt(g.onOpen)&&(P.onOpen=g.onOpen),Vt(g.onClose)&&(P.onClose=g.onClose),P.closeButton=C.closeButton,g.closeButton===!1||Sp(g.closeButton)?P.closeButton=g.closeButton:g.closeButton===!0&&(P.closeButton=!Sp(C.closeButton)||C.closeButton);let M=p;w.isValidElement(p)&&!jo(p.type)?M=w.cloneElement(p,{closeToast:E,toastProps:P,data:S}):Vt(p)&&(M=p({closeToast:E,toastProps:P,data:S})),C.limit&&C.limit>0&&a.count>C.limit&&k?a.queue.push({toastContent:M,toastProps:P,staleId:x}):nl(y)?setTimeout(()=>{h(M,P,x)},y):h(M,P,x)}function h(p,v,y){const{toastId:x}=v;y&&o.delete(y);const g={content:p,props:v};o.set(x,g),n(m=>[...m,x].filter(b=>b!==y)),yr.emit(4,Wb(g,g.props.updateId==null?"added":"updated"))}return w.useEffect(()=>(a.containerId=e.containerId,yr.cancelEmit(3).on(0,f).on(1,p=>i.current&&c(p)).on(5,l).emit(2,a),()=>{o.clear(),yr.emit(3,a)}),[]),w.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=r.length}),{getToastToRender:function(p){const v=new Map,y=Array.from(o.values());return e.newestOnTop&&y.reverse(),y.forEach(x=>{const{position:g}=x.props;v.has(g)||v.set(g,[]),v.get(g).push(x)}),Array.from(v,x=>p(x[0],x[1]))},containerRef:i,isToastActive:s}}function Hb(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Gb(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function AO(e){const[t,r]=w.useState(!1),[n,i]=w.useState(!1),o=w.useRef(null),s=w.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=w.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:f,closeOnClick:h}=e;function p(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",g),document.addEventListener("mouseup",m),document.addEventListener("touchmove",g),document.addEventListener("touchend",m);const C=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=C.getBoundingClientRect(),C.style.transition="",s.x=Hb(S.nativeEvent),s.y=Gb(S.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=C.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(S){if(s.boundingRect){const{top:C,bottom:E,left:k,right:P}=s.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=k&&s.x<=P&&s.y>=C&&s.y<=E?x():y()}}function y(){r(!0)}function x(){r(!1)}function g(S){const C=o.current;s.canDrag&&C&&(s.didMove=!0,t&&x(),s.x=Hb(S),s.y=Gb(S),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),C.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,C.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",m);const S=o.current;if(s.canDrag&&s.didMove&&S){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}w.useEffect(()=>{a.current=e}),w.useEffect(()=>(o.current&&o.current.addEventListener("d",y,{once:!0}),Vt(e.onOpen)&&e.onOpen(w.isValidElement(e.children)&&e.children.props),()=>{const S=a.current;Vt(S.onClose)&&S.onClose(w.isValidElement(S.children)&&S.children.props)}),[]),w.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",y),window.addEventListener("blur",x)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",x))}),[e.pauseOnFocusLoss]);const b={onMouseDown:p,onTouchStart:p,onMouseUp:v,onTouchEnd:v};return l&&c&&(b.onMouseEnter=x,b.onMouseLeave=y),h&&(b.onClick=S=>{f&&f(S),s.canCloseOnClick&&u()}),{playToast:y,pauseToast:x,isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:b}}function xC(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":n},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function jO(e){let{delay:t,isRunning:r,closeToast:n,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:c,rtl:u,isIn:f,theme:h}=e;const p=o||l&&c===0,v={...a,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:p?0:1};l&&(v.transform=`scaleX(${c})`);const y=yi("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=Vt(s)?s({rtl:u,type:i,defaultClassName:y}):yi(y,s);return X.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:x,style:v,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{f&&n()}})}const $O=e=>{const{isRunning:t,preventExitTransition:r,toastRef:n,eventHandlers:i}=AO(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:f,transition:h,position:p,className:v,style:y,bodyClassName:x,bodyStyle:g,progressClassName:m,progressStyle:b,updateId:S,role:C,progress:E,rtl:k,toastId:P,deleteToast:$,isIn:j,isLoading:M,iconOut:q,closeOnClick:K,theme:Y}=e,ee=yi("Toastify__toast",`Toastify__toast-theme--${Y}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":K}),F=Vt(v)?v({rtl:k,position:p,type:c,defaultClassName:ee}):yi(ee,v),G=!!E||!a,L={closeToast:f,type:c,theme:Y};let A=null;return o===!1||(A=Vt(o)?o(L):w.isValidElement(o)?w.cloneElement(o,L):xC(L)),X.createElement(h,{isIn:j,done:$,position:p,preventExitTransition:r,nodeRef:n},X.createElement("div",{id:P,onClick:l,className:F,...i,style:y,ref:n},X.createElement("div",{...j&&{role:C},className:Vt(x)?x({type:c}):yi("Toastify__toast-body",x),style:g},q!=null&&X.createElement("div",{className:yi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},q),X.createElement("div",null,s)),A,X.createElement(jO,{...S&&!G?{key:`pb-${S}`}:{},rtl:k,theme:Y,delay:a,isRunning:t,isIn:j,closeToast:f,hide:u,type:c,style:b,className:m,controlledProgress:G,progress:E||0})))},Qf=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},OO=Xf(Qf("bounce",!0));Xf(Qf("slide",!0));Xf(Qf("zoom"));Xf(Qf("flip"));const Tg=w.forwardRef((e,t)=>{const{getToastToRender:r,containerRef:n,isToastActive:i}=RO(e),{className:o,style:s,rtl:a,containerId:l}=e;function c(u){const f=yi("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return Vt(o)?o({position:u,rtl:a,defaultClassName:f}):yi(f,Vu(o))}return w.useEffect(()=>{t&&(t.current=n.current)},[]),X.createElement("div",{ref:n,className:"Toastify",id:l},r((u,f)=>{const h=f.length?{...s}:{...s,pointerEvents:"none"};return X.createElement("div",{className:c(u),style:h,key:`container-${u}`},f.map((p,v)=>{let{content:y,props:x}=p;return X.createElement($O,{...x,isIn:i(x.toastId),style:{...x.style,"--nth":v+1,"--len":f.length},key:`toast-${x.key}`},y)}))}))});Tg.displayName="ToastContainer",Tg.defaultProps={position:"top-right",transition:OO,autoClose:5e3,closeButton:xC,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let kp,to=new Map,Ma=[],NO=1;function wC(){return""+NO++}function LO(e){return e&&(jo(e.toastId)||nl(e.toastId))?e.toastId:wC()}function il(e,t){return to.size>0?yr.emit(0,e,t):Ma.push({content:e,options:t}),t.toastId}function Vd(e,t){return{...t,type:t&&t.type||e,toastId:LO(t)}}function su(e){return(t,r)=>il(t,Vd(e,r))}function U(e,t){return il(e,Vd("default",t))}U.loading=(e,t)=>il(e,Vd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),U.promise=function(e,t,r){let n,{pending:i,error:o,success:s}=t;i&&(n=jo(i)?U.loading(i,r):U.loading(i.render,{...r,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,f,h)=>{if(f==null)return void U.dismiss(n);const p={type:u,...a,...r,data:h},v=jo(f)?{render:f}:f;return n?U.update(n,{...p,...v}):U(v.render,{...p,...v}),h},c=Vt(e)?e():e;return c.then(u=>l("success",s,u)).catch(u=>l("error",o,u)),c},U.success=su("success"),U.info=su("info"),U.error=su("error"),U.warning=su("warning"),U.warn=U.warning,U.dark=(e,t)=>il(e,Vd("default",{theme:"dark",...t})),U.dismiss=e=>{to.size>0?yr.emit(1,e):Ma=Ma.filter(t=>e!=null&&t.options.toastId!==e)},U.clearWaitingQueue=function(e){return e===void 0&&(e={}),yr.emit(5,e)},U.isActive=e=>{let t=!1;return to.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},U.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const r=function(n,i){let{containerId:o}=i;const s=to.get(o||kp);return s&&s.getToast(n)}(e,t);if(r){const{props:n,content:i}=r,o={delay:100,...n,...t,toastId:t.toastId||e,updateId:wC()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,il(s,o)}},0)},U.done=e=>{U.update(e,{progress:1})},U.onChange=e=>(yr.on(4,e),()=>{yr.off(4,e)}),U.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},U.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},yr.on(2,e=>{kp=e.containerId||e,to.set(kp,e),Ma.forEach(t=>{yr.emit(0,t.content,t.options)}),Ma=[]}).on(3,e=>{to.delete(e.containerId||e),to.size===0&&yr.off(0).off(1).off(5)});const zO=({product:e})=>{const{addToCart:t}=Li(),r=Wr();let{pId:n,color:i,product_sizes:o}=e.singleProduct,[s,a]=w.useState(1),[l,c]=w.useState(""),[u,f]=w.useState([]),[h,p]=w.useState(2),v=[{size:"S",available:!1},{size:"M",available:!1},{size:"L",available:!1},{size:"XL",available:!1},{size:"XXL",available:!1}];w.useEffect(()=>{let m=o.map(b=>b.psize);m&&(p(o[0].pstock),c(o[0].psize),e.setPrice1(o[0].price)),f(v.map(b=>(m.includes(b.size)&&(b.available=!0),b)))},[]);const y=()=>{s>1?a(s-1):a(1)},x=()=>{s<h?a(s+1):a(h)},g=async()=>{if(localStorage.getItem("ACCESS_TOKEN")===null){U.error("login first"),r("/login");return}else{let m={pid:n,size:l,quty:s};try{const b=sr();let S=await re.post("http://localhost:8080/cart/addToCart",m,{headers:b});console.log(S.data),S.data!==null?(t(n,i,s,e.price1,h,l,e.singleProduct,S.data.id),r("/cart")):U.error("Please try again")}catch(b){U.error("Please try again"),console.log(b)}}};return d.jsxs(DO,{children:[d.jsx("div",{className:"colors",children:d.jsxs("p",{children:["Colors :",d.jsx("button",{style:{backgroundColor:i},className:"btnStyle active",children:d.jsx(pC,{className:"checkStyle"})})]})}),d.jsx("div",{className:"size",children:u.map((m,b)=>m.available===!0?d.jsx("button",{className:l===m.size?"size-button1":"size-button",value:m.size,onClick:()=>{c(m.size);let S=o.filter(C=>C.psize===m.size);s>S[0].pstock&&a(S[0].pstock),p(S[0].pstock),e.setPrice1(S[0].price)},children:m.size},b):d.jsx("button",{className:"size-button-not-show",children:m.size}))}),d.jsx("div",{className:"cart-button",children:d.jsxs("div",{className:"amount-toggle",children:[d.jsx("button",{onClick:y,children:d.jsx(mC,{})}),d.jsx("div",{className:"amount-style",children:s}),d.jsx("button",{onClick:x,children:d.jsx(gC,{})})]})}),d.jsx(it,{className:"btn",onClick:g,children:"Add to Cart"})]})},DO=oe.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    margin-left : 0.5rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left : 1.5rem;
    display: flex;
    gap : 4rem;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({theme:e})=>e.colors.btn};
    }
  }

.size{
  margin-top : 5rem;
  margin-bottom : 3rem;
  display : flex;
  gap : 2rem;
}

.size-button{
  height : 6rem;
  width : 6rem;
  background-color : white;
  border-radius : 50%;
  color : black;
  font-weight: bold;  
  cursor: pointer;
  border-width: 1px;
}

.size-button:hover{
  border-color : ${({theme:e})=>e.colors.btn};
  border-width: 1.7px;
}

.size-button1
{
  height : 6rem;
  width : 6rem;
  font-weight: bold;
  border-radius : 50%;
  background-color : white;
   color : ${({theme:e})=>e.colors.btn};
   border-color : ${({theme:e})=>e.colors.btn};
   cursor: pointer;
   border-width: 2.3px;
}

.size-button-not-show{
  height : 6rem;
  width : 6rem;
  border-width: 1px;
  background-color : white;
  border-radius : 50%;
  color : rgb(0,0,0,0.3);
  font-weight: bold;
  border-color : rgb(0,0,0,0.3);
  display : block;
  
}


`,MO=()=>{const{getSingleProduct:e,isSingleLoading:t,singleProduct:r}=Yf(),{id:n}=bR(),[i,o]=w.useState(100);w.useEffect(()=>{window.scrollTo({top:0}),e(n)},[]);const{pId:s,name:a,price:l,company:c,description:u,category:f,reviews:h,stars:p,image:v,product_sizes:y}=r;let x=0;return y!==void 0&&(x=y[0].pstock),t?d.jsx("div",{className:"page_loading",children:"Loading...."}):d.jsx(d.Fragment,{children:d.jsx(FO,{children:d.jsx(yO,{className:"container",children:d.jsxs("div",{className:"grid grid-two-column",children:[d.jsx("div",{className:"product_images",children:d.jsx(vO,{imgs:v},Math.random())}),d.jsxs("div",{className:"product-data",children:[d.jsx("h2",{children:a}),d.jsx(xO,{stars:4,reviews:45}),d.jsxs("p",{className:"product-data-price",children:["MRP :",d.jsx("del",{children:d.jsx(gt,{price:i+25e3})})]}),d.jsxs("p",{className:"product-data-price product-data-real-price",children:["Deal of the Day : ",d.jsx(gt,{price:i})]}),d.jsx("p",{children:u}),d.jsxs("div",{className:"product-data-warranty",children:[d.jsxs("div",{className:"product-warranty-data",children:[d.jsx(xg,{className:"warranty-icon"}),d.jsx("p",{children:"Free Delivery"})]}),d.jsxs("div",{className:"product-warranty-data",children:[d.jsx(aj,{className:"warranty-icon"}),d.jsx("p",{children:"7 Days Replacement"})]}),d.jsxs("div",{className:"product-warranty-data",children:[d.jsx(xg,{className:"warranty-icon"}),d.jsx("p",{children:"Delivered "})]})]}),d.jsxs("div",{className:"product-data-info",children:[d.jsxs("p",{children:["Availabel :",d.jsxs("span",{children:[" ",x>0?"In Stock":"Not Available"]})]}),d.jsxs("p",{children:["ID : ",d.jsxs("span",{children:[" ",s," "]})]}),d.jsxs("p",{children:["Brand :",d.jsxs("span",{children:[" ",c," "]})]})]}),d.jsx("hr",{}),x>0&&d.jsx(zO,{product:{singleProduct:r,setPrice1:o,price1:i}})]})]})})})})},FO=oe.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;


      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
          margin-left : 1rem; 
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({theme:e})=>e.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    padding: 0 2.4rem;
  }
`,BO=({id:e,name:t,image:r,color:n,price:i,size:o,amount:s,max:a,cartpId:l})=>{const{removeItem:c,setDecrease:u,setIncrement:f}=Li(),h=async()=>{try{const p=sr();(await re.put(`http://localhost:8080/cart/deleteCartProduct/${e}`,null,{headers:p})).data==="OK"&&c(e,o)}catch(p){console.log(p)}};return d.jsx(d.Fragment,{children:d.jsxs("div",{"data-aos":"fade-right",className:"cart_heading grid grid-five-column",children:[d.jsxs("div",{className:"cart-image--name",children:[d.jsx("div",{children:d.jsx("figure",{children:d.jsx("img",{src:r,alt:e})})}),d.jsxs("div",{children:[d.jsx("p",{children:t}),d.jsxs("div",{className:"color-div",children:[d.jsx("p",{children:"color : "}),d.jsx("div",{className:"color-style",style:{backgroundColor:n,color:n}})]}),d.jsx("div",{children:d.jsxs("p",{children:["Size : ",o]})})]})]}),d.jsx("div",{className:"cart-hide",children:d.jsx("p",{children:d.jsx(gt,{price:i})})}),d.jsx(SO,{amount:s,setDecrease:()=>u(e,o),setIncrease:()=>f(e,o),id:e,cartpId:l,max:a}),d.jsx("div",{className:"cart-hide",children:d.jsx("p",{children:d.jsx(gt,{price:i*s})})}),d.jsx("div",{children:d.jsx(oO,{className:"remove_icon",onClick:h})})]})})};function VO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function UO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var WO=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(UO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=VO(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),kt="-ms-",Ud="-moz-",me="-webkit-",SC="comm",Iv="rule",Rv="decl",HO="@import",_C="@keyframes",GO="@layer",qO=Math.abs,Jf=String.fromCharCode,KO=Object.assign;function YO(e,t){return pt(e,0)^45?(((t<<2^pt(e,0))<<2^pt(e,1))<<2^pt(e,2))<<2^pt(e,3):0}function kC(e){return e.trim()}function XO(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,r){return e.replace(t,r)}function Pg(e,t){return e.indexOf(t)}function pt(e,t){return e.charCodeAt(t)|0}function Vl(e,t,r){return e.slice(t,r)}function Qr(e){return e.length}function Av(e){return e.length}function au(e,t){return t.push(e),e}function QO(e,t){return e.map(t).join("")}var Zf=1,Hs=1,CC=0,Kt=0,Ze=0,ca="";function eh(e,t,r,n,i,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Zf,column:Hs,length:s,return:""}}function Ta(e,t){return KO(eh("",null,null,"",null,null,0),e,{length:-e.length},t)}function JO(){return Ze}function ZO(){return Ze=Kt>0?pt(ca,--Kt):0,Hs--,Ze===10&&(Hs=1,Zf--),Ze}function nr(){return Ze=Kt<CC?pt(ca,Kt++):0,Hs++,Ze===10&&(Hs=1,Zf++),Ze}function on(){return pt(ca,Kt)}function Uu(){return Kt}function pc(e,t){return Vl(ca,e,t)}function Ul(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EC(e){return Zf=Hs=1,CC=Qr(ca=e),Kt=0,[]}function TC(e){return ca="",e}function Wu(e){return kC(pc(Kt-1,Ig(e===91?e+2:e===40?e+1:e)))}function eN(e){for(;(Ze=on())&&Ze<33;)nr();return Ul(e)>2||Ul(Ze)>3?"":" "}function tN(e,t){for(;--t&&nr()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return pc(e,Uu()+(t<6&&on()==32&&nr()==32))}function Ig(e){for(;nr();)switch(Ze){case e:return Kt;case 34:case 39:e!==34&&e!==39&&Ig(Ze);break;case 40:e===41&&Ig(e);break;case 92:nr();break}return Kt}function rN(e,t){for(;nr()&&e+Ze!==57;)if(e+Ze===84&&on()===47)break;return"/*"+pc(t,Kt-1)+"*"+Jf(e===47?e:nr())}function nN(e){for(;!Ul(on());)nr();return pc(e,Kt)}function iN(e){return TC(Hu("",null,null,null,[""],e=EC(e),0,[0],e))}function Hu(e,t,r,n,i,o,s,a,l){for(var c=0,u=0,f=s,h=0,p=0,v=0,y=1,x=1,g=1,m=0,b="",S=i,C=o,E=n,k=b;x;)switch(v=m,m=nr()){case 40:if(v!=108&&pt(k,f-1)==58){Pg(k+=ge(Wu(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Wu(m);break;case 9:case 10:case 13:case 32:k+=eN(v);break;case 92:k+=tN(Uu()-1,7);continue;case 47:switch(on()){case 42:case 47:au(oN(rN(nr(),Uu()),t,r),l);break;default:k+="/"}break;case 123*y:a[c++]=Qr(k)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:x=0;case 59+u:g==-1&&(k=ge(k,/\f/g,"")),p>0&&Qr(k)-f&&au(p>32?Kb(k+";",n,r,f-1):Kb(ge(k," ","")+";",n,r,f-2),l);break;case 59:k+=";";default:if(au(E=qb(k,t,r,c,u,i,a,b,S=[],C=[],f),o),m===123)if(u===0)Hu(k,t,E,E,S,o,f,a,C);else switch(h===99&&pt(k,3)===110?100:h){case 100:case 108:case 109:case 115:Hu(e,E,E,n&&au(qb(e,E,E,0,0,i,a,b,i,S=[],f),C),i,C,f,a,n?S:C);break;default:Hu(k,E,E,E,[""],C,0,a,C)}}c=u=p=0,y=g=1,b=k="",f=s;break;case 58:f=1+Qr(k),p=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&ZO()==125)continue}switch(k+=Jf(m),m*y){case 38:g=u>0?1:(k+="\f",-1);break;case 44:a[c++]=(Qr(k)-1)*g,g=1;break;case 64:on()===45&&(k+=Wu(nr())),h=on(),u=f=Qr(b=k+=nN(Uu())),m++;break;case 45:v===45&&Qr(k)==2&&(y=0)}}return o}function qb(e,t,r,n,i,o,s,a,l,c,u){for(var f=i-1,h=i===0?o:[""],p=Av(h),v=0,y=0,x=0;v<n;++v)for(var g=0,m=Vl(e,f+1,f=qO(y=s[v])),b=e;g<p;++g)(b=kC(y>0?h[g]+" "+m:ge(m,/&\f/g,h[g])))&&(l[x++]=b);return eh(e,t,r,i===0?Iv:a,l,c,u)}function oN(e,t,r){return eh(e,t,r,SC,Jf(JO()),Vl(e,2,-2),0)}function Kb(e,t,r,n){return eh(e,t,r,Rv,Vl(e,0,n),Vl(e,n+1,-1),n)}function ks(e,t){for(var r="",n=Av(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function sN(e,t,r,n){switch(e.type){case GO:if(e.children.length)break;case HO:case Rv:return e.return=e.return||e.value;case SC:return"";case _C:return e.return=e.value+"{"+ks(e.children,n)+"}";case Iv:e.value=e.props.join(",")}return Qr(r=ks(e.children,n))?e.return=e.value+"{"+r+"}":""}function aN(e){var t=Av(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}function lN(e){return function(t){t.root||(t=t.return)&&e(t)}}var Yb=function(t){var r=new WeakMap;return function(n){if(r.has(n))return r.get(n);var i=t(n);return r.set(n,i),i}},cN=function(t,r,n){for(var i=0,o=0;i=o,o=on(),i===38&&o===12&&(r[n]=1),!Ul(o);)nr();return pc(t,Kt)},uN=function(t,r){var n=-1,i=44;do switch(Ul(i)){case 0:i===38&&on()===12&&(r[n]=1),t[n]+=cN(Kt-1,r,n);break;case 2:t[n]+=Wu(i);break;case 4:if(i===44){t[++n]=on()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Jf(i)}while(i=nr());return t},dN=function(t,r){return TC(uN(EC(t),r))},Xb=new WeakMap,fN=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Xb.get(n))&&!i){Xb.set(t,!0);for(var o=[],s=dN(r,o),a=n.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},hN=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function PC(e,t){switch(YO(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Ud+e+kt+e+e;case 6828:case 4268:return me+e+kt+e+e;case 6165:return me+e+kt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+kt+"flex-$1$2")+e;case 5443:return me+e+kt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+kt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+kt+ge(e,"shrink","negative")+e;case 5292:return me+e+kt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+kt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qr(e)-1-t>6)switch(pt(e,t+1)){case 109:if(pt(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Ud+(pt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pg(e,"stretch")?PC(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pt(e,t+1)!==115)break;case 6444:switch(pt(e,Qr(e)-3-(~Pg(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(pt(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+kt+"$2box$3")+e}break;case 5936:switch(pt(e,t+11)){case 114:return me+e+kt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+kt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+kt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+kt+e+e}return e}var pN=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Rv:t.return=PC(t.value,t.length);break;case _C:return ks([Ta(t,{value:ge(t.value,"@","@"+me)})],i);case Iv:if(t.length)return QO(t.props,function(o){switch(XO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ks([Ta(t,{props:[ge(o,/:(read-\w+)/,":"+Ud+"$1")]})],i);case"::placeholder":return ks([Ta(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),Ta(t,{props:[ge(o,/:(plac\w+)/,":"+Ud+"$1")]}),Ta(t,{props:[ge(o,/:(plac\w+)/,kt+"input-$1")]})],i)}return""})}},mN=[pN],gN=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(y){var x=y.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||mN,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(y){for(var x=y.getAttribute("data-emotion").split(" "),g=1;g<x.length;g++)o[x[g]]=!0;a.push(y)});var l,c=[fN,hN];{var u,f=[sN,lN(function(y){u.insert(y)})],h=aN(c.concat(i,f)),p=function(x){return ks(iN(x),h)};l=function(x,g,m,b){u=m,p(x?x+"{"+g.styles+"}":g.styles),b&&(v.inserted[g.name]=!0)}}var v={key:r,sheet:new WO({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v};function Wd(){return Wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Wd.apply(this,arguments)}var IC={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,jv=dt?Symbol.for("react.element"):60103,$v=dt?Symbol.for("react.portal"):60106,th=dt?Symbol.for("react.fragment"):60107,rh=dt?Symbol.for("react.strict_mode"):60108,nh=dt?Symbol.for("react.profiler"):60114,ih=dt?Symbol.for("react.provider"):60109,oh=dt?Symbol.for("react.context"):60110,Ov=dt?Symbol.for("react.async_mode"):60111,sh=dt?Symbol.for("react.concurrent_mode"):60111,ah=dt?Symbol.for("react.forward_ref"):60112,lh=dt?Symbol.for("react.suspense"):60113,vN=dt?Symbol.for("react.suspense_list"):60120,ch=dt?Symbol.for("react.memo"):60115,uh=dt?Symbol.for("react.lazy"):60116,yN=dt?Symbol.for("react.block"):60121,bN=dt?Symbol.for("react.fundamental"):60117,xN=dt?Symbol.for("react.responder"):60118,wN=dt?Symbol.for("react.scope"):60119;function dr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jv:switch(e=e.type,e){case Ov:case sh:case th:case nh:case rh:case lh:return e;default:switch(e=e&&e.$$typeof,e){case oh:case ah:case uh:case ch:case ih:return e;default:return t}}case $v:return t}}}function RC(e){return dr(e)===sh}Se.AsyncMode=Ov;Se.ConcurrentMode=sh;Se.ContextConsumer=oh;Se.ContextProvider=ih;Se.Element=jv;Se.ForwardRef=ah;Se.Fragment=th;Se.Lazy=uh;Se.Memo=ch;Se.Portal=$v;Se.Profiler=nh;Se.StrictMode=rh;Se.Suspense=lh;Se.isAsyncMode=function(e){return RC(e)||dr(e)===Ov};Se.isConcurrentMode=RC;Se.isContextConsumer=function(e){return dr(e)===oh};Se.isContextProvider=function(e){return dr(e)===ih};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jv};Se.isForwardRef=function(e){return dr(e)===ah};Se.isFragment=function(e){return dr(e)===th};Se.isLazy=function(e){return dr(e)===uh};Se.isMemo=function(e){return dr(e)===ch};Se.isPortal=function(e){return dr(e)===$v};Se.isProfiler=function(e){return dr(e)===nh};Se.isStrictMode=function(e){return dr(e)===rh};Se.isSuspense=function(e){return dr(e)===lh};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===th||e===sh||e===nh||e===rh||e===lh||e===vN||typeof e=="object"&&e!==null&&(e.$$typeof===uh||e.$$typeof===ch||e.$$typeof===ih||e.$$typeof===oh||e.$$typeof===ah||e.$$typeof===bN||e.$$typeof===xN||e.$$typeof===wN||e.$$typeof===yN)};Se.typeOf=dr;IC.exports=Se;var SN=IC.exports,AC=SN,_N={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kN={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jC={};jC[AC.ForwardRef]=_N;jC[AC.Memo]=kN;var CN=!0;function EN(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var $C=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||CN===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},OC=function(t,r,n){$C(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function TN(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var PN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},IN=/[A-Z]|^ms/g,RN=/_EMO_([^_]+?)_([^]*?)_EMO_/g,NC=function(t){return t.charCodeAt(1)===45},Qb=function(t){return t!=null&&typeof t!="boolean"},Cp=fk(function(e){return NC(e)?e:e.replace(IN,"-$&").toLowerCase()}),Jb=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(RN,function(n,i,o){return Jr={name:i,styles:o,next:Jr},i})}return PN[t]!==1&&!NC(t)&&typeof r=="number"&&r!==0?r+"px":r};function Wl(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Jr={name:r.name,styles:r.styles,next:Jr},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)Jr={name:n.name,styles:n.styles,next:Jr},n=n.next;var i=r.styles+";";return i}return AN(e,t,r)}case"function":{if(e!==void 0){var o=Jr,s=r(e);return Jr=o,Wl(e,t,s)}break}}if(t==null)return r;var a=t[r];return a!==void 0?a:r}function AN(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Wl(e,t,r[i])+";";else for(var o in r){var s=r[o];if(typeof s!="object")t!=null&&t[s]!==void 0?n+=o+"{"+t[s]+"}":Qb(s)&&(n+=Cp(o)+":"+Jb(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)Qb(s[a])&&(n+=Cp(o)+":"+Jb(o,s[a])+";");else{var l=Wl(e,t,s);switch(o){case"animation":case"animationName":{n+=Cp(o)+":"+l+";";break}default:n+=o+"{"+l+"}"}}}return n}var Zb=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Jr,Nv=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Jr=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Wl(n,r,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=Wl(n,r,t[a]),i&&(o+=s[a]);Zb.lastIndex=0;for(var l="",c;(c=Zb.exec(o))!==null;)l+="-"+c[1];var u=TN(o)+l;return{name:u,styles:o,next:Jr}},jN=function(t){return t()},LC=hm.useInsertionEffect?hm.useInsertionEffect:!1,$N=LC||jN,ex=LC||w.useLayoutEffect,zC=w.createContext(typeof HTMLElement<"u"?gN({key:"css"}):null);zC.Provider;var DC=function(t){return w.forwardRef(function(r,n){var i=w.useContext(zC);return t(r,i,n)})},Hl=w.createContext({}),ON=function(t,r){if(typeof r=="function"){var n=r(t);return n}return Wd({},t,r)},NN=Yb(function(e){return Yb(function(t){return ON(e,t)})}),LN=function(t){var r=w.useContext(Hl);return t.theme!==r&&(r=NN(r)(t.theme)),w.createElement(Hl.Provider,{value:r},t.children)},dh=DC(function(e,t){var r=e.styles,n=Nv([r],void 0,w.useContext(Hl)),i=w.useRef();return ex(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+n.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),i.current=[s,a],function(){s.flush()}},[t]),ex(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(n.next!==void 0&&OC(t,n.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",n,s,!1)},[t,n.name]),null});function zN(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Nv(t)}var DN=function(){var t=zN.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},MC=String.raw,FC=MC`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,MN=()=>d.jsx(dh,{styles:FC}),FN=({scope:e=""})=>d.jsx(dh,{styles:MC`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${FC}
    `});function BN(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function pn(e={}){const{name:t,strict:r=!0,hookName:n="useContext",providerName:i="Provider",errorMessage:o,defaultValue:s}=e,a=w.createContext(s);a.displayName=t;function l(){var c;const u=w.useContext(a);if(!u&&r){const f=new Error(o??BN(n,i));throw f.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,f,l),f}return u}return[a.Provider,l,a]}var[VN,UN]=pn({strict:!1,name:"PortalManagerContext"});function BC(e){const{children:t,zIndex:r}=e;return d.jsx(VN,{value:{zIndex:r},children:t})}BC.displayName="PortalManager";var Gs=globalThis!=null&&globalThis.document?w.useLayoutEffect:w.useEffect,[VC,WN]=pn({strict:!1,name:"PortalContext"}),Lv="chakra-portal",HN=".chakra-portal",GN=e=>d.jsx("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),qN=e=>{const{appendToParentPortal:t,children:r}=e,[n,i]=w.useState(null),o=w.useRef(null),[,s]=w.useState({});w.useEffect(()=>s({}),[]);const a=WN(),l=UN();Gs(()=>{if(!n)return;const u=n.ownerDocument,f=t?a??u.body:u.body;if(!f)return;o.current=u.createElement("div"),o.current.className=Lv,f.appendChild(o.current),s({});const h=o.current;return()=>{f.contains(h)&&f.removeChild(h)}},[n]);const c=l!=null&&l.zIndex?d.jsx(GN,{zIndex:l==null?void 0:l.zIndex,children:r}):r;return o.current?dv.createPortal(d.jsx(VC,{value:o.current,children:c}),o.current):d.jsx("span",{ref:u=>{u&&i(u)}})},KN=e=>{const{children:t,containerRef:r,appendToParentPortal:n}=e,i=r.current,o=i??(typeof window<"u"?document.body:void 0),s=w.useMemo(()=>{const l=i==null?void 0:i.ownerDocument.createElement("div");return l&&(l.className=Lv),l},[i]),[,a]=w.useState({});return Gs(()=>a({}),[]),Gs(()=>{if(!(!s||!o))return o.appendChild(s),()=>{o.removeChild(s)}},[s,o]),o&&s?dv.createPortal(d.jsx(VC,{value:n?s:null,children:t}),s):null};function fh(e){const t={appendToParentPortal:!0,...e},{containerRef:r,...n}=t;return r?d.jsx(KN,{containerRef:r,...n}):d.jsx(qN,{...n})}fh.className=Lv;fh.selector=HN;fh.displayName="Portal";function UC(){const e=w.useContext(Hl);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}var zv=w.createContext({});zv.displayName="ColorModeContext";function Dv(){const e=w.useContext(zv);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var lu={light:"chakra-ui-light",dark:"chakra-ui-dark"};function YN(e={}){const{preventTransition:t=!0}=e,r={setDataset:n=>{const i=t?r.preventTransition():void 0;document.documentElement.dataset.theme=n,document.documentElement.style.colorScheme=n,i==null||i()},setClassName(n){document.body.classList.add(n?lu.dark:lu.light),document.body.classList.remove(n?lu.light:lu.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(n){var i;return((i=r.query().matches)!=null?i:n==="dark")?"dark":"light"},addListener(n){const i=r.query(),o=s=>{n(s.matches?"dark":"light")};return typeof i.addListener=="function"?i.addListener(o):i.addEventListener("change",o),()=>{typeof i.removeListener=="function"?i.removeListener(o):i.removeEventListener("change",o)}},preventTransition(){const n=document.createElement("style");return n.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(n),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(n)})})}}};return r}var XN="chakra-ui-color-mode";function QN(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let r;try{r=localStorage.getItem(e)||t}catch{}return r||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var JN=QN(XN),tx=()=>{};function rx(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function WC(e){const{value:t,children:r,options:{useSystemColorMode:n,initialColorMode:i,disableTransitionOnChange:o}={},colorModeManager:s=JN}=e,a=i==="dark"?"dark":"light",[l,c]=w.useState(()=>rx(s,a)),[u,f]=w.useState(()=>rx(s)),{getSystemTheme:h,setClassName:p,setDataset:v,addListener:y}=w.useMemo(()=>YN({preventTransition:o}),[o]),x=i==="system"&&!l?u:l,g=w.useCallback(S=>{const C=S==="system"?h():S;c(C),p(C==="dark"),v(C),s.set(C)},[s,h,p,v]);Gs(()=>{i==="system"&&f(h())},[]),w.useEffect(()=>{const S=s.get();if(S){g(S);return}if(i==="system"){g("system");return}g(a)},[s,a,i,g]);const m=w.useCallback(()=>{g(x==="dark"?"light":"dark")},[x,g]);w.useEffect(()=>{if(n)return y(g)},[n,y,g]);const b=w.useMemo(()=>({colorMode:t??x,toggleColorMode:t?tx:m,setColorMode:t?tx:g,forced:t!==void 0}),[x,m,g,t]);return d.jsx(zv.Provider,{value:b,children:r})}WC.displayName="ColorModeProvider";function ZN(){const e=Dv(),t=UC();return{...e,theme:t}}var yt=(...e)=>e.filter(Boolean).join(" ");function Vr(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Pn(e,...t){return e6(e)?e(...t):e}var e6=e=>typeof e=="function",vn=e=>e?"":void 0,Ep=e=>e?!0:void 0;function Zt(...e){return function(r){e.some(n=>(n==null||n(r),r==null?void 0:r.defaultPrevented))}}function t6(...e){return function(r){e.forEach(n=>{n==null||n(r)})}}var Hd={exports:{}};Hd.exports;(function(e,t){var r=200,n="__lodash_hash_undefined__",i=800,o=16,s=9007199254740991,a="[object Arguments]",l="[object Array]",c="[object AsyncFunction]",u="[object Boolean]",f="[object Date]",h="[object Error]",p="[object Function]",v="[object GeneratorFunction]",y="[object Map]",x="[object Number]",g="[object Null]",m="[object Object]",b="[object Proxy]",S="[object RegExp]",C="[object Set]",E="[object String]",k="[object Undefined]",P="[object WeakMap]",$="[object ArrayBuffer]",j="[object DataView]",M="[object Float32Array]",q="[object Float64Array]",K="[object Int8Array]",Y="[object Int16Array]",ee="[object Int32Array]",F="[object Uint8Array]",G="[object Uint8ClampedArray]",L="[object Uint16Array]",A="[object Uint32Array]",O=/[\\^$.*+?()[\]{}|]/g,z=/^\[object .+?Constructor\]$/,B=/^(?:0|[1-9]\d*)$/,V={};V[M]=V[q]=V[K]=V[Y]=V[ee]=V[F]=V[G]=V[L]=V[A]=!0,V[a]=V[l]=V[$]=V[u]=V[j]=V[f]=V[h]=V[p]=V[y]=V[x]=V[m]=V[S]=V[C]=V[E]=V[P]=!1;var ne=typeof Mc=="object"&&Mc&&Mc.Object===Object&&Mc,xe=typeof self=="object"&&self&&self.Object===Object&&self,se=ne||xe||Function("return this")(),De=t&&!t.nodeType&&t,Me=De&&!0&&e&&!e.nodeType&&e,Ee=Me&&Me.exports===De,st=Ee&&ne.process,We=function(){try{var _=Me&&Me.require&&Me.require("util").types;return _||st&&st.binding&&st.binding("util")}catch{}}(),bt=We&&We.isTypedArray;function Fo(_,T,R){switch(R.length){case 0:return _.call(T);case 1:return _.call(T,R[0]);case 2:return _.call(T,R[0],R[1]);case 3:return _.call(T,R[0],R[1],R[2])}return _.apply(T,R)}function ha(_,T){for(var R=-1,W=Array(_);++R<_;)W[R]=T(R);return W}function he(_){return function(T){return _(T)}}function xt(_,T){return _==null?void 0:_[T]}function qe(_,T){return function(R){return _(T(R))}}var Xt=Array.prototype,Kn=Function.prototype,wt=Object.prototype,Hr=se["__core-js_shared__"],Yn=Kn.toString,fr=wt.hasOwnProperty,Bo=function(){var _=/[^.]+$/.exec(Hr&&Hr.keys&&Hr.keys.IE_PROTO||"");return _?"Symbol(src)_1."+_:""}(),pa=wt.toString,jc=Yn.call(Object),$c=RegExp("^"+Yn.call(fr).replace(O,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ki=Ee?se.Buffer:void 0,Dy=se.Symbol,My=se.Uint8Array,Fy=Ki?Ki.allocUnsafe:void 0,By=qe(Object.getPrototypeOf,Object),Vy=Object.create,vP=wt.propertyIsEnumerable,yP=Xt.splice,Yi=Dy?Dy.toStringTag:void 0,Oc=function(){try{var _=$h(Object,"defineProperty");return _({},"",{}),_}catch{}}(),bP=Ki?Ki.isBuffer:void 0,Uy=Math.max,xP=Date.now,Wy=$h(se,"Map"),ma=$h(Object,"create"),wP=function(){function _(){}return function(T){if(!Qi(T))return{};if(Vy)return Vy(T);_.prototype=T;var R=new _;return _.prototype=void 0,R}}();function Xi(_){var T=-1,R=_==null?0:_.length;for(this.clear();++T<R;){var W=_[T];this.set(W[0],W[1])}}function SP(){this.__data__=ma?ma(null):{},this.size=0}function _P(_){var T=this.has(_)&&delete this.__data__[_];return this.size-=T?1:0,T}function kP(_){var T=this.__data__;if(ma){var R=T[_];return R===n?void 0:R}return fr.call(T,_)?T[_]:void 0}function CP(_){var T=this.__data__;return ma?T[_]!==void 0:fr.call(T,_)}function EP(_,T){var R=this.__data__;return this.size+=this.has(_)?0:1,R[_]=ma&&T===void 0?n:T,this}Xi.prototype.clear=SP,Xi.prototype.delete=_P,Xi.prototype.get=kP,Xi.prototype.has=CP,Xi.prototype.set=EP;function mn(_){var T=-1,R=_==null?0:_.length;for(this.clear();++T<R;){var W=_[T];this.set(W[0],W[1])}}function TP(){this.__data__=[],this.size=0}function PP(_){var T=this.__data__,R=Nc(T,_);if(R<0)return!1;var W=T.length-1;return R==W?T.pop():yP.call(T,R,1),--this.size,!0}function IP(_){var T=this.__data__,R=Nc(T,_);return R<0?void 0:T[R][1]}function RP(_){return Nc(this.__data__,_)>-1}function AP(_,T){var R=this.__data__,W=Nc(R,_);return W<0?(++this.size,R.push([_,T])):R[W][1]=T,this}mn.prototype.clear=TP,mn.prototype.delete=PP,mn.prototype.get=IP,mn.prototype.has=RP,mn.prototype.set=AP;function Vo(_){var T=-1,R=_==null?0:_.length;for(this.clear();++T<R;){var W=_[T];this.set(W[0],W[1])}}function jP(){this.size=0,this.__data__={hash:new Xi,map:new(Wy||mn),string:new Xi}}function $P(_){var T=zc(this,_).delete(_);return this.size-=T?1:0,T}function OP(_){return zc(this,_).get(_)}function NP(_){return zc(this,_).has(_)}function LP(_,T){var R=zc(this,_),W=R.size;return R.set(_,T),this.size+=R.size==W?0:1,this}Vo.prototype.clear=jP,Vo.prototype.delete=$P,Vo.prototype.get=OP,Vo.prototype.has=NP,Vo.prototype.set=LP;function Uo(_){var T=this.__data__=new mn(_);this.size=T.size}function zP(){this.__data__=new mn,this.size=0}function DP(_){var T=this.__data__,R=T.delete(_);return this.size=T.size,R}function MP(_){return this.__data__.get(_)}function FP(_){return this.__data__.has(_)}function BP(_,T){var R=this.__data__;if(R instanceof mn){var W=R.__data__;if(!Wy||W.length<r-1)return W.push([_,T]),this.size=++R.size,this;R=this.__data__=new Vo(W)}return R.set(_,T),this.size=R.size,this}Uo.prototype.clear=zP,Uo.prototype.delete=DP,Uo.prototype.get=MP,Uo.prototype.has=FP,Uo.prototype.set=BP;function VP(_,T){var R=Lh(_),W=!R&&Nh(_),ue=!R&&!W&&Yy(_),_e=!R&&!W&&!ue&&Qy(_),Oe=R||W||ue||_e,le=Oe?ha(_.length,String):[],Ne=le.length;for(var hr in _)(T||fr.call(_,hr))&&!(Oe&&(hr=="length"||ue&&(hr=="offset"||hr=="parent")||_e&&(hr=="buffer"||hr=="byteLength"||hr=="byteOffset")||qy(hr,Ne)))&&le.push(hr);return le}function Ah(_,T,R){(R!==void 0&&!Dc(_[T],R)||R===void 0&&!(T in _))&&jh(_,T,R)}function UP(_,T,R){var W=_[T];(!(fr.call(_,T)&&Dc(W,R))||R===void 0&&!(T in _))&&jh(_,T,R)}function Nc(_,T){for(var R=_.length;R--;)if(Dc(_[R][0],T))return R;return-1}function jh(_,T,R){T=="__proto__"&&Oc?Oc(_,T,{configurable:!0,enumerable:!0,value:R,writable:!0}):_[T]=R}var WP=n3();function Lc(_){return _==null?_===void 0?k:g:Yi&&Yi in Object(_)?i3(_):u3(_)}function Hy(_){return ga(_)&&Lc(_)==a}function HP(_){if(!Qi(_)||l3(_))return!1;var T=Dh(_)?$c:z;return T.test(p3(_))}function GP(_){return ga(_)&&Xy(_.length)&&!!V[Lc(_)]}function qP(_){if(!Qi(_))return c3(_);var T=Ky(_),R=[];for(var W in _)W=="constructor"&&(T||!fr.call(_,W))||R.push(W);return R}function Gy(_,T,R,W,ue){_!==T&&WP(T,function(_e,Oe){if(ue||(ue=new Uo),Qi(_e))KP(_,T,Oe,R,Gy,W,ue);else{var le=W?W(Oh(_,Oe),_e,Oe+"",_,T,ue):void 0;le===void 0&&(le=_e),Ah(_,Oe,le)}},Jy)}function KP(_,T,R,W,ue,_e,Oe){var le=Oh(_,R),Ne=Oh(T,R),hr=Oe.get(Ne);if(hr){Ah(_,R,hr);return}var Qt=_e?_e(le,Ne,R+"",_,T,Oe):void 0,va=Qt===void 0;if(va){var Mh=Lh(Ne),Fh=!Mh&&Yy(Ne),e1=!Mh&&!Fh&&Qy(Ne);Qt=Ne,Mh||Fh||e1?Lh(le)?Qt=le:m3(le)?Qt=e3(le):Fh?(va=!1,Qt=QP(Ne,!0)):e1?(va=!1,Qt=ZP(Ne,!0)):Qt=[]:g3(Ne)||Nh(Ne)?(Qt=le,Nh(le)?Qt=v3(le):(!Qi(le)||Dh(le))&&(Qt=o3(Ne))):va=!1}va&&(Oe.set(Ne,Qt),ue(Qt,Ne,W,_e,Oe),Oe.delete(Ne)),Ah(_,R,Qt)}function YP(_,T){return f3(d3(_,T,Zy),_+"")}var XP=Oc?function(_,T){return Oc(_,"toString",{configurable:!0,enumerable:!1,value:b3(T),writable:!0})}:Zy;function QP(_,T){if(T)return _.slice();var R=_.length,W=Fy?Fy(R):new _.constructor(R);return _.copy(W),W}function JP(_){var T=new _.constructor(_.byteLength);return new My(T).set(new My(_)),T}function ZP(_,T){var R=T?JP(_.buffer):_.buffer;return new _.constructor(R,_.byteOffset,_.length)}function e3(_,T){var R=-1,W=_.length;for(T||(T=Array(W));++R<W;)T[R]=_[R];return T}function t3(_,T,R,W){var ue=!R;R||(R={});for(var _e=-1,Oe=T.length;++_e<Oe;){var le=T[_e],Ne=W?W(R[le],_[le],le,R,_):void 0;Ne===void 0&&(Ne=_[le]),ue?jh(R,le,Ne):UP(R,le,Ne)}return R}function r3(_){return YP(function(T,R){var W=-1,ue=R.length,_e=ue>1?R[ue-1]:void 0,Oe=ue>2?R[2]:void 0;for(_e=_.length>3&&typeof _e=="function"?(ue--,_e):void 0,Oe&&s3(R[0],R[1],Oe)&&(_e=ue<3?void 0:_e,ue=1),T=Object(T);++W<ue;){var le=R[W];le&&_(T,le,W,_e)}return T})}function n3(_){return function(T,R,W){for(var ue=-1,_e=Object(T),Oe=W(T),le=Oe.length;le--;){var Ne=Oe[_?le:++ue];if(R(_e[Ne],Ne,_e)===!1)break}return T}}function zc(_,T){var R=_.__data__;return a3(T)?R[typeof T=="string"?"string":"hash"]:R.map}function $h(_,T){var R=xt(_,T);return HP(R)?R:void 0}function i3(_){var T=fr.call(_,Yi),R=_[Yi];try{_[Yi]=void 0;var W=!0}catch{}var ue=pa.call(_);return W&&(T?_[Yi]=R:delete _[Yi]),ue}function o3(_){return typeof _.constructor=="function"&&!Ky(_)?wP(By(_)):{}}function qy(_,T){var R=typeof _;return T=T??s,!!T&&(R=="number"||R!="symbol"&&B.test(_))&&_>-1&&_%1==0&&_<T}function s3(_,T,R){if(!Qi(R))return!1;var W=typeof T;return(W=="number"?zh(R)&&qy(T,R.length):W=="string"&&T in R)?Dc(R[T],_):!1}function a3(_){var T=typeof _;return T=="string"||T=="number"||T=="symbol"||T=="boolean"?_!=="__proto__":_===null}function l3(_){return!!Bo&&Bo in _}function Ky(_){var T=_&&_.constructor,R=typeof T=="function"&&T.prototype||wt;return _===R}function c3(_){var T=[];if(_!=null)for(var R in Object(_))T.push(R);return T}function u3(_){return pa.call(_)}function d3(_,T,R){return T=Uy(T===void 0?_.length-1:T,0),function(){for(var W=arguments,ue=-1,_e=Uy(W.length-T,0),Oe=Array(_e);++ue<_e;)Oe[ue]=W[T+ue];ue=-1;for(var le=Array(T+1);++ue<T;)le[ue]=W[ue];return le[T]=R(Oe),Fo(_,this,le)}}function Oh(_,T){if(!(T==="constructor"&&typeof _[T]=="function")&&T!="__proto__")return _[T]}var f3=h3(XP);function h3(_){var T=0,R=0;return function(){var W=xP(),ue=o-(W-R);if(R=W,ue>0){if(++T>=i)return arguments[0]}else T=0;return _.apply(void 0,arguments)}}function p3(_){if(_!=null){try{return Yn.call(_)}catch{}try{return _+""}catch{}}return""}function Dc(_,T){return _===T||_!==_&&T!==T}var Nh=Hy(function(){return arguments}())?Hy:function(_){return ga(_)&&fr.call(_,"callee")&&!vP.call(_,"callee")},Lh=Array.isArray;function zh(_){return _!=null&&Xy(_.length)&&!Dh(_)}function m3(_){return ga(_)&&zh(_)}var Yy=bP||x3;function Dh(_){if(!Qi(_))return!1;var T=Lc(_);return T==p||T==v||T==c||T==b}function Xy(_){return typeof _=="number"&&_>-1&&_%1==0&&_<=s}function Qi(_){var T=typeof _;return _!=null&&(T=="object"||T=="function")}function ga(_){return _!=null&&typeof _=="object"}function g3(_){if(!ga(_)||Lc(_)!=m)return!1;var T=By(_);if(T===null)return!0;var R=fr.call(T,"constructor")&&T.constructor;return typeof R=="function"&&R instanceof R&&Yn.call(R)==jc}var Qy=bt?he(bt):GP;function v3(_){return t3(_,Jy(_))}function Jy(_){return zh(_)?VP(_,!0):qP(_)}var y3=r3(function(_,T,R,W){Gy(_,T,R,W)});function b3(_){return function(){return _}}function Zy(_){return _}function x3(){return!1}e.exports=y3})(Hd,Hd.exports);var r6=Hd.exports;const Sr=g0(r6);var n6=e=>/!(important)?$/.test(e),nx=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,i6=(e,t)=>r=>{const n=String(t),i=n6(n),o=nx(n),s=e?`${e}.${o}`:o;let a=Vr(r.__cssMap)&&s in r.__cssMap?r.__cssMap[s].varRef:t;return a=nx(a),i?`${a} !important`:a};function Mv(e){const{scale:t,transform:r,compose:n}=e;return(o,s)=>{var a;const l=i6(t,o)(s);let c=(a=r==null?void 0:r(l,s))!=null?a:l;return n&&(c=n(c,s)),c}}var cu=(...e)=>t=>e.reduce((r,n)=>n(r),t);function pr(e,t){return r=>{const n={property:r,scale:e};return n.transform=Mv({scale:e,transform:t}),n}}var o6=({rtl:e,ltr:t})=>r=>r.direction==="rtl"?e:t;function s6(e){const{property:t,scale:r,transform:n}=e;return{scale:r,property:o6(t),transform:r?Mv({scale:r,compose:n}):n}}var HC=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function a6(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...HC].join(" ")}function l6(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...HC].join(" ")}var c6={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},u6={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function d6(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var f6={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},Rg={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},h6=new Set(Object.values(Rg)),Ag=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),p6=e=>e.trim();function m6(e,t){if(e==null||Ag.has(e))return e;if(!(jg(e)||Ag.has(e)))return`url('${e}')`;const i=/(^[a-z-A-Z]+)\((.*)\)/g.exec(e),o=i==null?void 0:i[1],s=i==null?void 0:i[2];if(!o||!s)return e;const a=o.includes("-gradient")?o:`${o}-gradient`,[l,...c]=s.split(",").map(p6).filter(Boolean);if((c==null?void 0:c.length)===0)return e;const u=l in Rg?Rg[l]:l;c.unshift(u);const f=c.map(h=>{if(h6.has(h))return h;const p=h.indexOf(" "),[v,y]=p!==-1?[h.substr(0,p),h.substr(p+1)]:[h],x=jg(y)?y:y&&y.split(" "),g=`colors.${v}`,m=g in t.__cssMap?t.__cssMap[g].varRef:v;return x?[m,...Array.isArray(x)?x:[x]].join(" "):m});return`${a}(${f.join(", ")})`}var jg=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),g6=(e,t)=>m6(e,t??{});function v6(e){return/^var\(--.+\)$/.test(e)}var y6=e=>{const t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}},qr=e=>t=>`${e}(${t})`,ce={filter(e){return e!=="auto"?e:c6},backdropFilter(e){return e!=="auto"?e:u6},ring(e){return d6(ce.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?a6():e==="auto-gpu"?l6():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=y6(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const r={left:"right",right:"left"};return t.direction==="rtl"?r[e]:e},degree(e){if(v6(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:g6,blur:qr("blur"),opacity:qr("opacity"),brightness:qr("brightness"),contrast:qr("contrast"),dropShadow:qr("drop-shadow"),grayscale:qr("grayscale"),hueRotate:e=>qr("hue-rotate")(ce.degree(e)),invert:qr("invert"),saturate:qr("saturate"),sepia:qr("sepia"),bgImage(e){return e==null||jg(e)||Ag.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var t;const{space:r,divide:n}=(t=f6[e])!=null?t:{},i={flexDirection:e};return r&&(i[r]=1),n&&(i[n]=1),i}},I={borderWidths:pr("borderWidths"),borderStyles:pr("borderStyles"),colors:pr("colors"),borders:pr("borders"),gradients:pr("gradients",ce.gradient),radii:pr("radii",ce.px),space:pr("space",cu(ce.vh,ce.px)),spaceT:pr("space",cu(ce.vh,ce.px)),degreeT(e){return{property:e,transform:ce.degree}},prop(e,t,r){return{property:e,scale:t,...t&&{transform:Mv({scale:t,transform:r})}}},propT(e,t){return{property:e,transform:t}},sizes:pr("sizes",cu(ce.vh,ce.px)),sizesT:pr("sizes",cu(ce.vh,ce.fraction)),shadows:pr("shadows"),logical:s6,blur:pr("blur",ce.blur)},Gu={background:I.colors("background"),backgroundColor:I.colors("backgroundColor"),backgroundImage:I.gradients("backgroundImage"),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:ce.bgClip},bgSize:I.prop("backgroundSize"),bgPosition:I.prop("backgroundPosition"),bg:I.colors("background"),bgColor:I.colors("backgroundColor"),bgPos:I.prop("backgroundPosition"),bgRepeat:I.prop("backgroundRepeat"),bgAttachment:I.prop("backgroundAttachment"),bgGradient:I.gradients("backgroundImage"),bgClip:{transform:ce.bgClip}};Object.assign(Gu,{bgImage:Gu.backgroundImage,bgImg:Gu.backgroundImage});var pe={border:I.borders("border"),borderWidth:I.borderWidths("borderWidth"),borderStyle:I.borderStyles("borderStyle"),borderColor:I.colors("borderColor"),borderRadius:I.radii("borderRadius"),borderTop:I.borders("borderTop"),borderBlockStart:I.borders("borderBlockStart"),borderTopLeftRadius:I.radii("borderTopLeftRadius"),borderStartStartRadius:I.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:I.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:I.radii("borderTopRightRadius"),borderStartEndRadius:I.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:I.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:I.borders("borderRight"),borderInlineEnd:I.borders("borderInlineEnd"),borderBottom:I.borders("borderBottom"),borderBlockEnd:I.borders("borderBlockEnd"),borderBottomLeftRadius:I.radii("borderBottomLeftRadius"),borderBottomRightRadius:I.radii("borderBottomRightRadius"),borderLeft:I.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:I.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:I.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:I.borders(["borderLeft","borderRight"]),borderInline:I.borders("borderInline"),borderY:I.borders(["borderTop","borderBottom"]),borderBlock:I.borders("borderBlock"),borderTopWidth:I.borderWidths("borderTopWidth"),borderBlockStartWidth:I.borderWidths("borderBlockStartWidth"),borderTopColor:I.colors("borderTopColor"),borderBlockStartColor:I.colors("borderBlockStartColor"),borderTopStyle:I.borderStyles("borderTopStyle"),borderBlockStartStyle:I.borderStyles("borderBlockStartStyle"),borderBottomWidth:I.borderWidths("borderBottomWidth"),borderBlockEndWidth:I.borderWidths("borderBlockEndWidth"),borderBottomColor:I.colors("borderBottomColor"),borderBlockEndColor:I.colors("borderBlockEndColor"),borderBottomStyle:I.borderStyles("borderBottomStyle"),borderBlockEndStyle:I.borderStyles("borderBlockEndStyle"),borderLeftWidth:I.borderWidths("borderLeftWidth"),borderInlineStartWidth:I.borderWidths("borderInlineStartWidth"),borderLeftColor:I.colors("borderLeftColor"),borderInlineStartColor:I.colors("borderInlineStartColor"),borderLeftStyle:I.borderStyles("borderLeftStyle"),borderInlineStartStyle:I.borderStyles("borderInlineStartStyle"),borderRightWidth:I.borderWidths("borderRightWidth"),borderInlineEndWidth:I.borderWidths("borderInlineEndWidth"),borderRightColor:I.colors("borderRightColor"),borderInlineEndColor:I.colors("borderInlineEndColor"),borderRightStyle:I.borderStyles("borderRightStyle"),borderInlineEndStyle:I.borderStyles("borderInlineEndStyle"),borderTopRadius:I.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:I.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:I.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:I.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(pe,{rounded:pe.borderRadius,roundedTop:pe.borderTopRadius,roundedTopLeft:pe.borderTopLeftRadius,roundedTopRight:pe.borderTopRightRadius,roundedTopStart:pe.borderStartStartRadius,roundedTopEnd:pe.borderStartEndRadius,roundedBottom:pe.borderBottomRadius,roundedBottomLeft:pe.borderBottomLeftRadius,roundedBottomRight:pe.borderBottomRightRadius,roundedBottomStart:pe.borderEndStartRadius,roundedBottomEnd:pe.borderEndEndRadius,roundedLeft:pe.borderLeftRadius,roundedRight:pe.borderRightRadius,roundedStart:pe.borderInlineStartRadius,roundedEnd:pe.borderInlineEndRadius,borderStart:pe.borderInlineStart,borderEnd:pe.borderInlineEnd,borderTopStartRadius:pe.borderStartStartRadius,borderTopEndRadius:pe.borderStartEndRadius,borderBottomStartRadius:pe.borderEndStartRadius,borderBottomEndRadius:pe.borderEndEndRadius,borderStartRadius:pe.borderInlineStartRadius,borderEndRadius:pe.borderInlineEndRadius,borderStartWidth:pe.borderInlineStartWidth,borderEndWidth:pe.borderInlineEndWidth,borderStartColor:pe.borderInlineStartColor,borderEndColor:pe.borderInlineEndColor,borderStartStyle:pe.borderInlineStartStyle,borderEndStyle:pe.borderInlineEndStyle});var b6={color:I.colors("color"),textColor:I.colors("color"),fill:I.colors("fill"),stroke:I.colors("stroke")},$g={boxShadow:I.shadows("boxShadow"),mixBlendMode:!0,blendMode:I.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:I.prop("backgroundBlendMode"),opacity:!0};Object.assign($g,{shadow:$g.boxShadow});var x6={filter:{transform:ce.filter},blur:I.blur("--chakra-blur"),brightness:I.propT("--chakra-brightness",ce.brightness),contrast:I.propT("--chakra-contrast",ce.contrast),hueRotate:I.propT("--chakra-hue-rotate",ce.hueRotate),invert:I.propT("--chakra-invert",ce.invert),saturate:I.propT("--chakra-saturate",ce.saturate),dropShadow:I.propT("--chakra-drop-shadow",ce.dropShadow),backdropFilter:{transform:ce.backdropFilter},backdropBlur:I.blur("--chakra-backdrop-blur"),backdropBrightness:I.propT("--chakra-backdrop-brightness",ce.brightness),backdropContrast:I.propT("--chakra-backdrop-contrast",ce.contrast),backdropHueRotate:I.propT("--chakra-backdrop-hue-rotate",ce.hueRotate),backdropInvert:I.propT("--chakra-backdrop-invert",ce.invert),backdropSaturate:I.propT("--chakra-backdrop-saturate",ce.saturate)},Gd={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:ce.flexDirection},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:I.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:I.space("gap"),rowGap:I.space("rowGap"),columnGap:I.space("columnGap")};Object.assign(Gd,{flexDir:Gd.flexDirection});var GC={gridGap:I.space("gridGap"),gridColumnGap:I.space("gridColumnGap"),gridRowGap:I.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},w6={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:ce.outline},outlineOffset:!0,outlineColor:I.colors("outlineColor")},gr={width:I.sizesT("width"),inlineSize:I.sizesT("inlineSize"),height:I.sizes("height"),blockSize:I.sizes("blockSize"),boxSize:I.sizes(["width","height"]),minWidth:I.sizes("minWidth"),minInlineSize:I.sizes("minInlineSize"),minHeight:I.sizes("minHeight"),minBlockSize:I.sizes("minBlockSize"),maxWidth:I.sizes("maxWidth"),maxInlineSize:I.sizes("maxInlineSize"),maxHeight:I.sizes("maxHeight"),maxBlockSize:I.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,aspectRatio:!0,hideFrom:{scale:"breakpoints",transform:(e,t)=>{var r,n,i;return{[`@media screen and (min-width: ${(i=(n=(r=t.__breakpoints)==null?void 0:r.get(e))==null?void 0:n.minW)!=null?i:e})`]:{display:"none"}}}},hideBelow:{scale:"breakpoints",transform:(e,t)=>{var r,n,i;return{[`@media screen and (max-width: ${(i=(n=(r=t.__breakpoints)==null?void 0:r.get(e))==null?void 0:n._minW)!=null?i:e})`]:{display:"none"}}}},verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:I.propT("float",ce.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(gr,{w:gr.width,h:gr.height,minW:gr.minWidth,maxW:gr.maxWidth,minH:gr.minHeight,maxH:gr.maxHeight,overscroll:gr.overscrollBehavior,overscrollX:gr.overscrollBehaviorX,overscrollY:gr.overscrollBehaviorY});var S6={listStyleType:!0,listStylePosition:!0,listStylePos:I.prop("listStylePosition"),listStyleImage:!0,listStyleImg:I.prop("listStyleImage")};function _6(e,t,r,n){const i=typeof t=="string"?t.split("."):[t];for(n=0;n<i.length&&e;n+=1)e=e[i[n]];return e===void 0?r:e}var k6=e=>{const t=new WeakMap;return(n,i,o,s)=>{if(typeof n>"u")return e(n,i,o);t.has(n)||t.set(n,new Map);const a=t.get(n);if(a.has(i))return a.get(i);const l=e(n,i,o,s);return a.set(i,l),l}},C6=k6(_6),E6={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},T6={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},Tp=(e,t,r)=>{const n={},i=C6(e,t,{});for(const o in i)o in r&&r[o]!=null||(n[o]=i[o]);return n},P6={srOnly:{transform(e){return e===!0?E6:e==="focusable"?T6:{}}},layerStyle:{processResult:!0,transform:(e,t,r)=>Tp(t,`layerStyles.${e}`,r)},textStyle:{processResult:!0,transform:(e,t,r)=>Tp(t,`textStyles.${e}`,r)},apply:{processResult:!0,transform:(e,t,r)=>Tp(t,e,r)}},ol={position:!0,pos:I.prop("position"),zIndex:I.prop("zIndex","zIndices"),inset:I.spaceT("inset"),insetX:I.spaceT(["left","right"]),insetInline:I.spaceT("insetInline"),insetY:I.spaceT(["top","bottom"]),insetBlock:I.spaceT("insetBlock"),top:I.spaceT("top"),insetBlockStart:I.spaceT("insetBlockStart"),bottom:I.spaceT("bottom"),insetBlockEnd:I.spaceT("insetBlockEnd"),left:I.spaceT("left"),insetInlineStart:I.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:I.spaceT("right"),insetInlineEnd:I.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(ol,{insetStart:ol.insetInlineStart,insetEnd:ol.insetInlineEnd});var I6={ring:{transform:ce.ring},ringColor:I.colors("--chakra-ring-color"),ringOffset:I.prop("--chakra-ring-offset-width"),ringOffsetColor:I.colors("--chakra-ring-offset-color"),ringInset:I.prop("--chakra-ring-inset")},je={margin:I.spaceT("margin"),marginTop:I.spaceT("marginTop"),marginBlockStart:I.spaceT("marginBlockStart"),marginRight:I.spaceT("marginRight"),marginInlineEnd:I.spaceT("marginInlineEnd"),marginBottom:I.spaceT("marginBottom"),marginBlockEnd:I.spaceT("marginBlockEnd"),marginLeft:I.spaceT("marginLeft"),marginInlineStart:I.spaceT("marginInlineStart"),marginX:I.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:I.spaceT("marginInline"),marginY:I.spaceT(["marginTop","marginBottom"]),marginBlock:I.spaceT("marginBlock"),padding:I.space("padding"),paddingTop:I.space("paddingTop"),paddingBlockStart:I.space("paddingBlockStart"),paddingRight:I.space("paddingRight"),paddingBottom:I.space("paddingBottom"),paddingBlockEnd:I.space("paddingBlockEnd"),paddingLeft:I.space("paddingLeft"),paddingInlineStart:I.space("paddingInlineStart"),paddingInlineEnd:I.space("paddingInlineEnd"),paddingX:I.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:I.space("paddingInline"),paddingY:I.space(["paddingTop","paddingBottom"]),paddingBlock:I.space("paddingBlock")};Object.assign(je,{m:je.margin,mt:je.marginTop,mr:je.marginRight,me:je.marginInlineEnd,marginEnd:je.marginInlineEnd,mb:je.marginBottom,ml:je.marginLeft,ms:je.marginInlineStart,marginStart:je.marginInlineStart,mx:je.marginX,my:je.marginY,p:je.padding,pt:je.paddingTop,py:je.paddingY,px:je.paddingX,pb:je.paddingBottom,pl:je.paddingLeft,ps:je.paddingInlineStart,paddingStart:je.paddingInlineStart,pr:je.paddingRight,pe:je.paddingInlineEnd,paddingEnd:je.paddingInlineEnd});var R6={textDecorationColor:I.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:I.shadows("textShadow")},A6={clipPath:!0,transform:I.propT("transform",ce.transform),transformOrigin:!0,translateX:I.spaceT("--chakra-translate-x"),translateY:I.spaceT("--chakra-translate-y"),skewX:I.degreeT("--chakra-skew-x"),skewY:I.degreeT("--chakra-skew-y"),scaleX:I.prop("--chakra-scale-x"),scaleY:I.prop("--chakra-scale-y"),scale:I.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:I.degreeT("--chakra-rotate")},j6={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:I.prop("transitionDuration","transition.duration"),transitionProperty:I.prop("transitionProperty","transition.property"),transitionTimingFunction:I.prop("transitionTimingFunction","transition.easing")},$6={fontFamily:I.prop("fontFamily","fonts"),fontSize:I.prop("fontSize","fontSizes",ce.px),fontWeight:I.prop("fontWeight","fontWeights"),lineHeight:I.prop("lineHeight","lineHeights"),letterSpacing:I.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,isTruncated:{transform(e){if(e===!0)return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},O6={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:I.spaceT("scrollMargin"),scrollMarginTop:I.spaceT("scrollMarginTop"),scrollMarginBottom:I.spaceT("scrollMarginBottom"),scrollMarginLeft:I.spaceT("scrollMarginLeft"),scrollMarginRight:I.spaceT("scrollMarginRight"),scrollMarginX:I.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:I.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:I.spaceT("scrollPadding"),scrollPaddingTop:I.spaceT("scrollPaddingTop"),scrollPaddingBottom:I.spaceT("scrollPaddingBottom"),scrollPaddingLeft:I.spaceT("scrollPaddingLeft"),scrollPaddingRight:I.spaceT("scrollPaddingRight"),scrollPaddingX:I.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:I.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function qC(e){return Vr(e)&&e.reference?e.reference:String(e)}var hh=(e,...t)=>t.map(qC).join(` ${e} `).replace(/calc/g,""),ix=(...e)=>`calc(${hh("+",...e)})`,ox=(...e)=>`calc(${hh("-",...e)})`,Og=(...e)=>`calc(${hh("*",...e)})`,sx=(...e)=>`calc(${hh("/",...e)})`,ax=e=>{const t=qC(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Og(t,-1)},so=Object.assign(e=>({add:(...t)=>so(ix(e,...t)),subtract:(...t)=>so(ox(e,...t)),multiply:(...t)=>so(Og(e,...t)),divide:(...t)=>so(sx(e,...t)),negate:()=>so(ax(e)),toString:()=>e.toString()}),{add:ix,subtract:ox,multiply:Og,divide:sx,negate:ax});function N6(e,t="-"){return e.replace(/\s+/g,t)}function L6(e){const t=N6(e.toString());return D6(z6(t))}function z6(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function D6(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function M6(e,t=""){return[t,e].filter(Boolean).join("-")}function F6(e,t){return`var(${e}${t?`, ${t}`:""})`}function B6(e,t=""){return L6(`--${M6(e,t)}`)}function J(e,t,r){const n=B6(e,r);return{variable:n,reference:F6(n,t)}}function V6(e,t){const r={};for(const n of t){if(Array.isArray(n)){const[i,o]=n;r[i]=J(`${e}-${i}`,o);continue}r[n]=J(`${e}-${n}`)}return r}function U6(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function W6(e){const t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}}function Ng(e){if(e==null)return e;const{unitless:t}=W6(e);return t||typeof e=="number"?`${e}px`:e}var KC=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Fv=e=>Object.fromEntries(Object.entries(e).sort(KC));function lx(e){const t=Fv(e);return Object.assign(Object.values(t),t)}function H6(e){const t=Object.keys(Fv(e));return new Set(t)}function cx(e){var t;if(!e)return e;e=(t=Ng(e))!=null?t:e;const r=-.02;return typeof e=="number"?`${e+r}`:e.replace(/(\d+\.?\d*)/u,n=>`${parseFloat(n)+r}`)}function Fa(e,t){const r=["@media screen"];return e&&r.push("and",`(min-width: ${Ng(e)})`),t&&r.push("and",`(max-width: ${Ng(t)})`),r.join(" ")}function G6(e){var t;if(!e)return null;e.base=(t=e.base)!=null?t:"0px";const r=lx(e),n=Object.entries(e).sort(KC).map(([s,a],l,c)=>{var u;let[,f]=(u=c[l+1])!=null?u:[];return f=parseFloat(f)>0?cx(f):void 0,{_minW:cx(a),breakpoint:s,minW:a,maxW:f,maxWQuery:Fa(null,f),minWQuery:Fa(a),minMaxQuery:Fa(a,f)}}),i=H6(e),o=Array.from(i.values());return{keys:i,normalized:r,isResponsive(s){const a=Object.keys(s);return a.length>0&&a.every(l=>i.has(l))},asObject:Fv(e),asArray:lx(e),details:n,get(s){return n.find(a=>a.breakpoint===s)},media:[null,...r.map(s=>Fa(s)).slice(1)],toArrayValue(s){if(!Vr(s))throw new Error("toArrayValue: value must be an object");const a=o.map(l=>{var c;return(c=s[l])!=null?c:null});for(;U6(a)===null;)a.pop();return a},toObjectValue(s){if(!Array.isArray(s))throw new Error("toObjectValue: value must be an array");return s.reduce((a,l,c)=>{const u=o[c];return u!=null&&l!=null&&(a[u]=l),a},{})}}}var ft={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Jn=e=>YC(t=>e(t,"&"),"[role=group]","[data-group]",".group"),gn=e=>YC(t=>e(t,"~ &"),"[data-peer]",".peer"),YC=(e,...t)=>t.map(e).join(", "),ph={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:Jn(ft.hover),_peerHover:gn(ft.hover),_groupFocus:Jn(ft.focus),_peerFocus:gn(ft.focus),_groupFocusVisible:Jn(ft.focusVisible),_peerFocusVisible:gn(ft.focusVisible),_groupActive:Jn(ft.active),_peerActive:gn(ft.active),_groupDisabled:Jn(ft.disabled),_peerDisabled:gn(ft.disabled),_groupInvalid:Jn(ft.invalid),_peerInvalid:gn(ft.invalid),_groupChecked:Jn(ft.checked),_peerChecked:gn(ft.checked),_groupFocusWithin:Jn(ft.focusWithin),_peerFocusWithin:gn(ft.focusWithin),_peerPlaceholderShown:gn(ft.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",_horizontal:"&[data-orientation=horizontal]",_vertical:"&[data-orientation=vertical]"},XC=Object.keys(ph);function ux(e,t){return J(String(e).replace(/\./g,"-"),void 0,t)}function q6(e,t){let r={};const n={};for(const[i,o]of Object.entries(e)){const{isSemantic:s,value:a}=o,{variable:l,reference:c}=ux(i,t==null?void 0:t.cssVarPrefix);if(!s){if(i.startsWith("space")){const h=i.split("."),[p,...v]=h,y=`${p}.-${v.join(".")}`,x=so.negate(a),g=so.negate(c);n[y]={value:x,var:l,varRef:g}}r[l]=a,n[i]={value:a,var:l,varRef:c};continue}const u=h=>{const v=[String(i).split(".")[0],h].join(".");if(!e[v])return h;const{reference:x}=ux(v,t==null?void 0:t.cssVarPrefix);return x},f=Vr(a)?a:{default:a};r=Sr(r,Object.entries(f).reduce((h,[p,v])=>{var y,x;if(!v)return h;const g=u(`${v}`);if(p==="default")return h[l]=g,h;const m=(x=(y=ph)==null?void 0:y[p])!=null?x:p;return h[m]={[l]:g},h},{})),n[i]={value:c,var:l,varRef:c}}return{cssVars:r,cssMap:n}}function K6(e,t=[]){const r=Object.assign({},e);for(const n of t)n in r&&delete r[n];return r}function Y6(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function X6(e){return typeof e=="object"&&e!=null&&!Array.isArray(e)}function dx(e,t,r={}){const{stop:n,getKey:i}=r;function o(s,a=[]){var l;if(X6(s)||Array.isArray(s)){const c={};for(const[u,f]of Object.entries(s)){const h=(l=i==null?void 0:i(u))!=null?l:u,p=[...a,h];if(n!=null&&n(s,p))return t(s,a);c[h]=o(f,p)}return c}return t(s,a)}return o(e)}var Q6=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function J6(e){return Y6(e,Q6)}function Z6(e){return e.semanticTokens}function e8(e){const{__cssMap:t,__cssVars:r,__breakpoints:n,...i}=e;return i}var t8=e=>XC.includes(e)||e==="default";function r8({tokens:e,semanticTokens:t}){const r={};return dx(e,(n,i)=>{n!=null&&(r[i.join(".")]={isSemantic:!1,value:n})}),dx(t,(n,i)=>{n!=null&&(r[i.join(".")]={isSemantic:!0,value:n})},{stop:n=>Object.keys(n).every(t8)}),r}function n8(e){var t;const r=e8(e),n=J6(r),i=Z6(r),o=r8({tokens:n,semanticTokens:i}),s=(t=r.config)==null?void 0:t.cssVarPrefix,{cssMap:a,cssVars:l}=q6(o,{cssVarPrefix:s});return Object.assign(r,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:a,__breakpoints:G6(r.breakpoints)}),r}var Bv=Sr({},Gu,pe,b6,Gd,gr,x6,I6,w6,GC,P6,ol,$g,je,O6,$6,R6,A6,S6,j6);Object.assign({},je,gr,Gd,GC,ol);var i8=[...Object.keys(Bv),...XC],o8={...Bv,...ph},s8=e=>e in o8,a8=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:r,toArrayValue:n,media:i}=t.__breakpoints,o={};for(const s in e){let a=Pn(e[s],t);if(a==null)continue;if(a=Vr(a)&&r(a)?n(a):a,!Array.isArray(a)){o[s]=a;continue}const l=a.slice(0,i.length).length;for(let c=0;c<l;c+=1){const u=i==null?void 0:i[c];if(!u){o[s]=a[c];continue}o[u]=o[u]||{},a[c]!=null&&(o[u][s]=a[c])}}return o};function l8(e){const t=[];let r="",n=!1;for(let i=0;i<e.length;i++){const o=e[i];o==="("?(n=!0,r+=o):o===")"?(n=!1,r+=o):o===","&&!n?(t.push(r),r=""):r+=o}return r=r.trim(),r&&t.push(r),t}function c8(e){return/^var\(--.+\)$/.test(e)}var u8=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!c8(t),d8=(e,t)=>{var r,n;if(t==null)return t;const i=l=>{var c,u;return(u=(c=e.__cssMap)==null?void 0:c[l])==null?void 0:u.varRef},o=l=>{var c;return(c=i(l))!=null?c:l},[s,a]=l8(t);return t=(n=(r=i(s))!=null?r:o(a))!=null?n:o(t),t};function f8(e){const{configs:t={},pseudos:r={},theme:n}=e,i=(o,s=!1)=>{var a,l,c;const u=Pn(o,n),f=a8(u)(n);let h={};for(let p in f){const v=f[p];let y=Pn(v,n);p in r&&(p=r[p]),u8(p,y)&&(y=d8(n,y));let x=t[p];if(x===!0&&(x={property:p}),Vr(y)){h[p]=(a=h[p])!=null?a:{},h[p]=Sr({},h[p],i(y,!0));continue}let g=(c=(l=x==null?void 0:x.transform)==null?void 0:l.call(x,y,n,u))!=null?c:y;g=x!=null&&x.processResult?i(g,!0):g;const m=Pn(x==null?void 0:x.property,n);if(!s&&(x!=null&&x.static)){const b=Pn(x.static,n);h=Sr({},h,b)}if(m&&Array.isArray(m)){for(const b of m)h[b]=g;continue}if(m){m==="&"&&Vr(g)?h=Sr({},h,g):h[m]=g;continue}if(Vr(g)){h=Sr({},h,g);continue}h[p]=g}return h};return i}var QC=e=>t=>f8({theme:t,pseudos:ph,configs:Bv})(e);function Ie(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function h8(e,t){if(Array.isArray(e))return e;if(Vr(e))return t(e);if(e!=null)return[e]}function p8(e,t){for(let r=t+1;r<e.length;r++)if(e[r]!=null)return r;return-1}function m8(e){const t=e.__breakpoints;return function(n,i,o,s){var a,l;if(!t)return;const c={},u=h8(o,t.toArrayValue);if(!u)return c;const f=u.length,h=f===1,p=!!n.parts;for(let v=0;v<f;v++){const y=t.details[v],x=t.details[p8(u,v)],g=Fa(y.minW,x==null?void 0:x._minW),m=Pn((a=n[i])==null?void 0:a[u[v]],s);if(m){if(p){(l=n.parts)==null||l.forEach(b=>{Sr(c,{[b]:h?m[b]:{[g]:m[b]}})});continue}if(!p){h?Sr(c,m):c[g]=m;continue}c[g]=m}}return c}}function g8(e){return t=>{var r;const{variant:n,size:i,theme:o}=t,s=m8(o);return Sr({},Pn((r=e.baseStyle)!=null?r:{},t),s(e,"sizes",i,t),s(e,"variants",n,t))}}function Wi(e){return K6(e,["styleConfig","size","variant","colorScheme"])}var v8=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function y8(e){return Vr(e)?v8.every(t=>Object.prototype.hasOwnProperty.call(e,t)):!1}var b8={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},x8={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},w8={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},S8={property:b8,easing:x8,duration:w8},_8=S8,k8={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},C8=k8,E8={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},T8=E8,P8={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},I8=P8,R8={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},A8=R8,j8={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},$8=j8,O8={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},N8=O8,L8={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},z8=L8,D8={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},JC=D8,ZC={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},M8={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},F8={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},B8={...ZC,...M8,container:F8},eE=B8,V8={breakpoints:I8,zIndices:C8,radii:$8,blur:z8,colors:A8,...JC,sizes:eE,shadows:N8,space:ZC,borders:T8,transition:_8},{defineMultiStyleConfig:U8,definePartsStyle:Ba}=Ie(["stepper","step","title","description","indicator","separator","icon","number"]),Sn=J("stepper-indicator-size"),ls=J("stepper-icon-size"),cs=J("stepper-title-font-size"),Va=J("stepper-description-font-size"),Pa=J("stepper-accent-color"),W8=Ba(({colorScheme:e})=>({stepper:{display:"flex",justifyContent:"space-between",gap:"4","&[data-orientation=vertical]":{flexDirection:"column",alignItems:"flex-start"},"&[data-orientation=horizontal]":{flexDirection:"row",alignItems:"center"},[Pa.variable]:`colors.${e}.500`,_dark:{[Pa.variable]:`colors.${e}.200`}},title:{fontSize:cs.reference,fontWeight:"medium"},description:{fontSize:Va.reference,color:"chakra-subtle-text"},number:{fontSize:cs.reference},step:{flexShrink:0,position:"relative",display:"flex",gap:"2","&[data-orientation=horizontal]":{alignItems:"center"},flex:"1","&:last-of-type:not([data-stretch])":{flex:"initial"}},icon:{flexShrink:0,width:ls.reference,height:ls.reference},indicator:{flexShrink:0,borderRadius:"full",width:Sn.reference,height:Sn.reference,display:"flex",justifyContent:"center",alignItems:"center","&[data-status=active]":{borderWidth:"2px",borderColor:Pa.reference},"&[data-status=complete]":{bg:Pa.reference,color:"chakra-inverse-text"},"&[data-status=incomplete]":{borderWidth:"2px"}},separator:{bg:"chakra-border-color",flex:"1","&[data-status=complete]":{bg:Pa.reference},"&[data-orientation=horizontal]":{width:"100%",height:"2px",marginStart:"2"},"&[data-orientation=vertical]":{width:"2px",position:"absolute",height:"100%",maxHeight:`calc(100% - ${Sn.reference} - 8px)`,top:`calc(${Sn.reference} + 4px)`,insetStart:`calc(${Sn.reference} / 2 - 1px)`}}})),H8=U8({baseStyle:W8,sizes:{xs:Ba({stepper:{[Sn.variable]:"sizes.4",[ls.variable]:"sizes.3",[cs.variable]:"fontSizes.xs",[Va.variable]:"fontSizes.xs"}}),sm:Ba({stepper:{[Sn.variable]:"sizes.6",[ls.variable]:"sizes.4",[cs.variable]:"fontSizes.sm",[Va.variable]:"fontSizes.xs"}}),md:Ba({stepper:{[Sn.variable]:"sizes.8",[ls.variable]:"sizes.5",[cs.variable]:"fontSizes.md",[Va.variable]:"fontSizes.sm"}}),lg:Ba({stepper:{[Sn.variable]:"sizes.10",[ls.variable]:"sizes.6",[cs.variable]:"fontSizes.lg",[Va.variable]:"fontSizes.md"}})},defaultProps:{size:"md",colorScheme:"blue"}});function ye(e,t={}){let r=!1;function n(){if(!r){r=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function i(...u){n();for(const f of u)t[f]=l(f);return ye(e,t)}function o(...u){for(const f of u)f in t||(t[f]=l(f));return ye(e,t)}function s(){return Object.fromEntries(Object.entries(t).map(([f,h])=>[f,h.selector]))}function a(){return Object.fromEntries(Object.entries(t).map(([f,h])=>[f,h.className]))}function l(u){const p=`chakra-${(["container","root"].includes(u??"")?[e]:[e,u]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>u}}return{parts:i,toPart:l,extend:o,selectors:s,classnames:a,get keys(){return Object.keys(t)},__type:{}}}var G8=ye("accordion").parts("root","container","button","panel").extend("icon"),q8=ye("alert").parts("title","description","container").extend("icon","spinner"),K8=ye("avatar").parts("label","badge","container").extend("excessLabel","group"),Y8=ye("breadcrumb").parts("link","item","container").extend("separator");ye("button").parts();var X8=ye("checkbox").parts("control","icon","container").extend("label");ye("progress").parts("track","filledTrack").extend("label");var Q8=ye("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),J8=ye("editable").parts("preview","input","textarea"),Z8=ye("form").parts("container","requiredIndicator","helperText"),eL=ye("formError").parts("text","icon"),tL=ye("input").parts("addon","field","element","group"),rL=ye("list").parts("container","item","icon"),nL=ye("menu").parts("button","list","item").extend("groupTitle","icon","command","divider"),iL=ye("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),oL=ye("numberinput").parts("root","field","stepperGroup","stepper");ye("pininput").parts("field");var sL=ye("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),aL=ye("progress").parts("label","filledTrack","track"),lL=ye("radio").parts("container","control","label"),cL=ye("select").parts("field","icon"),uL=ye("slider").parts("container","track","thumb","filledTrack","mark"),dL=ye("stat").parts("container","label","helpText","number","icon"),fL=ye("switch").parts("container","track","thumb","label"),hL=ye("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),pL=ye("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),mL=ye("tag").parts("container","label","closeButton"),gL=ye("card").parts("container","header","body","footer");ye("stepper").parts("stepper","step","title","description","indicator","separator","icon","number");function ho(e,t,r){return Math.min(Math.max(e,r),t)}class vL extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var Ua=vL;function Vv(e){if(typeof e!="string")throw new Ua(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=CL.test(e)?xL(e):e;const r=wL.exec(t);if(r){const s=Array.from(r).slice(1);return[...s.slice(0,3).map(a=>parseInt(Gl(a,2),16)),parseInt(Gl(s[3]||"f",2),16)/255]}const n=SL.exec(t);if(n){const s=Array.from(n).slice(1);return[...s.slice(0,3).map(a=>parseInt(a,16)),parseInt(s[3]||"ff",16)/255]}const i=_L.exec(t);if(i){const s=Array.from(i).slice(1);return[...s.slice(0,3).map(a=>parseInt(a,10)),parseFloat(s[3]||"1")]}const o=kL.exec(t);if(o){const[s,a,l,c]=Array.from(o).slice(1).map(parseFloat);if(ho(0,100,a)!==a)throw new Ua(e);if(ho(0,100,l)!==l)throw new Ua(e);return[...EL(s,a,l),Number.isNaN(c)?1:c]}throw new Ua(e)}function yL(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0)%2341}const fx=e=>parseInt(e.replace(/_/g,""),36),bL="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const r=fx(t.substring(0,3)),n=fx(t.substring(3)).toString(16);let i="";for(let o=0;o<6-n.length;o++)i+="0";return e[r]=`${i}${n}`,e},{});function xL(e){const t=e.toLowerCase().trim(),r=bL[yL(t)];if(!r)throw new Ua(e);return`#${r}`}const Gl=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),wL=new RegExp(`^#${Gl("([a-f0-9])",3)}([a-f0-9])?$`,"i"),SL=new RegExp(`^#${Gl("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),_L=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Gl(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),kL=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,CL=/^[a-z]+$/i,hx=e=>Math.round(e*255),EL=(e,t,r)=>{let n=r/100;if(t===0)return[n,n,n].map(hx);const i=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*(t/100),s=o*(1-Math.abs(i%2-1));let a=0,l=0,c=0;i>=0&&i<1?(a=o,l=s):i>=1&&i<2?(a=s,l=o):i>=2&&i<3?(l=o,c=s):i>=3&&i<4?(l=s,c=o):i>=4&&i<5?(a=s,c=o):i>=5&&i<6&&(a=o,c=s);const u=n-o/2,f=a+u,h=l+u,p=c+u;return[f,h,p].map(hx)};function TL(e,t,r,n){return`rgba(${ho(0,255,e).toFixed()}, ${ho(0,255,t).toFixed()}, ${ho(0,255,r).toFixed()}, ${parseFloat(ho(0,1,n).toFixed(3))})`}function PL(e,t){const[r,n,i,o]=Vv(e);return TL(r,n,i,o-t)}function IL(e){const[t,r,n,i]=Vv(e);let o=s=>{const a=ho(0,255,s).toString(16);return a.length===1?`0${a}`:a};return`#${o(t)}${o(r)}${o(n)}${i<1?o(Math.round(i*255)):""}`}function RL(e,t,r,n,i){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:i;return e===i?r:e}var AL=e=>Object.keys(e).length===0,Ot=(e,t,r)=>{const n=RL(e,`colors.${t}`,t);try{return IL(n),n}catch{return r??"#000000"}},jL=e=>{const[t,r,n]=Vv(e);return(t*299+r*587+n*114)/1e3},$L=e=>t=>{const r=Ot(t,e);return jL(r)<128?"dark":"light"},OL=e=>t=>$L(e)(t)==="dark",qs=(e,t)=>r=>{const n=Ot(r,e);return PL(n,1-t)};function px(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var NL=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function LL(e){const t=NL();return!e||AL(e)?t:e.string&&e.colors?DL(e.string,e.colors):e.string&&!e.colors?zL(e.string):e.colors&&!e.string?ML(e.colors):t}function zL(e){let t=0;if(e.length===0)return t.toString();for(let n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t),t=t&t;let r="#";for(let n=0;n<3;n+=1){const i=t>>n*8&255;r+=`00${i.toString(16)}`.substr(-2)}return r}function DL(e,t){let r=0;if(e.length===0)return t[0];for(let n=0;n<e.length;n+=1)r=e.charCodeAt(n)+((r<<5)-r),r=r&r;return r=(r%t.length+t.length)%t.length,t[r]}function ML(e){return e[Math.floor(Math.random()*e.length)]}function Q(e,t){return r=>r.colorMode==="dark"?t:e}function Uv(e){const{orientation:t,vertical:r,horizontal:n}=e;return t?t==="vertical"?r:n:{}}function tE(e){return Vr(e)&&e.reference?e.reference:String(e)}var mh=(e,...t)=>t.map(tE).join(` ${e} `).replace(/calc/g,""),mx=(...e)=>`calc(${mh("+",...e)})`,gx=(...e)=>`calc(${mh("-",...e)})`,Lg=(...e)=>`calc(${mh("*",...e)})`,vx=(...e)=>`calc(${mh("/",...e)})`,yx=e=>{const t=tE(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Lg(t,-1)},_n=Object.assign(e=>({add:(...t)=>_n(mx(e,...t)),subtract:(...t)=>_n(gx(e,...t)),multiply:(...t)=>_n(Lg(e,...t)),divide:(...t)=>_n(vx(e,...t)),negate:()=>_n(yx(e)),toString:()=>e.toString()}),{add:mx,subtract:gx,multiply:Lg,divide:vx,negate:yx});function FL(e){return!Number.isInteger(parseFloat(e.toString()))}function BL(e,t="-"){return e.replace(/\s+/g,t)}function rE(e){const t=BL(e.toString());return t.includes("\\.")?e:FL(e)?t.replace(".","\\."):e}function VL(e,t=""){return[t,rE(e)].filter(Boolean).join("-")}function UL(e,t){return`var(${rE(e)}${t?`, ${t}`:""})`}function WL(e,t=""){return`--${VL(e,t)}`}function ot(e,t){const r=WL(e,t==null?void 0:t.prefix);return{variable:r,reference:UL(r,HL(t==null?void 0:t.fallback))}}function HL(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{defineMultiStyleConfig:GL,definePartsStyle:qu}=Ie(fL.keys),sl=ot("switch-track-width"),bo=ot("switch-track-height"),Pp=ot("switch-track-diff"),qL=_n.subtract(sl,bo),zg=ot("switch-thumb-x"),Ia=ot("switch-bg"),KL=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[sl.reference],height:[bo.reference],transitionProperty:"common",transitionDuration:"fast",[Ia.variable]:"colors.gray.300",_dark:{[Ia.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[Ia.variable]:`colors.${t}.500`,_dark:{[Ia.variable]:`colors.${t}.200`}},bg:Ia.reference}},YL={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[bo.reference],height:[bo.reference],_checked:{transform:`translateX(${zg.reference})`}},XL=qu(e=>({container:{[Pp.variable]:qL,[zg.variable]:Pp.reference,_rtl:{[zg.variable]:_n(Pp).negate().toString()}},track:KL(e),thumb:YL})),QL={sm:qu({container:{[sl.variable]:"1.375rem",[bo.variable]:"sizes.3"}}),md:qu({container:{[sl.variable]:"1.875rem",[bo.variable]:"sizes.4"}}),lg:qu({container:{[sl.variable]:"2.875rem",[bo.variable]:"sizes.6"}})},JL=GL({baseStyle:XL,sizes:QL,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:ZL,definePartsStyle:Cs}=Ie(hL.keys),ez=Cs({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),qd={"&[data-is-numeric=true]":{textAlign:"end"}},tz=Cs(e=>{const{colorScheme:t}=e;return{th:{color:Q("gray.600","gray.400")(e),borderBottom:"1px",borderColor:Q(`${t}.100`,`${t}.700`)(e),...qd},td:{borderBottom:"1px",borderColor:Q(`${t}.100`,`${t}.700`)(e),...qd},caption:{color:Q("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),rz=Cs(e=>{const{colorScheme:t}=e;return{th:{color:Q("gray.600","gray.400")(e),borderBottom:"1px",borderColor:Q(`${t}.100`,`${t}.700`)(e),...qd},td:{borderBottom:"1px",borderColor:Q(`${t}.100`,`${t}.700`)(e),...qd},caption:{color:Q("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:Q(`${t}.100`,`${t}.700`)(e)},td:{background:Q(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),nz={simple:tz,striped:rz,unstyled:{}},iz={sm:Cs({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:Cs({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:Cs({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},oz=ZL({baseStyle:ez,variants:nz,sizes:iz,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),Ft=J("tabs-color"),Dr=J("tabs-bg"),uu=J("tabs-border-color"),{defineMultiStyleConfig:sz,definePartsStyle:sn}=Ie(pL.keys),az=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},lz=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},cz=e=>{const{align:t="start",orientation:r}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:r==="vertical"?"column":"row"}},uz={p:4},dz=sn(e=>({root:az(e),tab:lz(e),tablist:cz(e),tabpanel:uz})),fz={sm:sn({tab:{py:1,px:4,fontSize:"sm"}}),md:sn({tab:{fontSize:"md",py:2,px:4}}),lg:sn({tab:{fontSize:"lg",py:3,px:4}})},hz=sn(e=>{const{colorScheme:t,orientation:r}=e,n=r==="vertical",i=n?"borderStart":"borderBottom",o=n?"marginStart":"marginBottom";return{tablist:{[i]:"2px solid",borderColor:"inherit"},tab:{[i]:"2px solid",borderColor:"transparent",[o]:"-2px",_selected:{[Ft.variable]:`colors.${t}.600`,_dark:{[Ft.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Dr.variable]:"colors.gray.200",_dark:{[Dr.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:Ft.reference,bg:Dr.reference}}}),pz=sn(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[uu.variable]:"transparent",_selected:{[Ft.variable]:`colors.${t}.600`,[uu.variable]:"colors.white",_dark:{[Ft.variable]:`colors.${t}.300`,[uu.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:uu.reference},color:Ft.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),mz=sn(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Dr.variable]:"colors.gray.50",_dark:{[Dr.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Dr.variable]:"colors.white",[Ft.variable]:`colors.${t}.600`,_dark:{[Dr.variable]:"colors.gray.800",[Ft.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:Ft.reference,bg:Dr.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),gz=sn(e=>{const{colorScheme:t,theme:r}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Ot(r,`${t}.700`),bg:Ot(r,`${t}.100`)}}}}),vz=sn(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[Ft.variable]:"colors.gray.600",_dark:{[Ft.variable]:"inherit"},_selected:{[Ft.variable]:"colors.white",[Dr.variable]:`colors.${t}.600`,_dark:{[Ft.variable]:"colors.gray.800",[Dr.variable]:`colors.${t}.300`}},color:Ft.reference,bg:Dr.reference}}}),yz=sn({}),bz={line:hz,enclosed:pz,"enclosed-colored":mz,"soft-rounded":gz,"solid-rounded":vz,unstyled:yz},xz=sz({baseStyle:dz,sizes:fz,variants:bz,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),Xe=V6("badge",["bg","color","shadow"]),wz={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",bg:Xe.bg.reference,color:Xe.color.reference,boxShadow:Xe.shadow.reference},Sz=e=>{const{colorScheme:t,theme:r}=e,n=qs(`${t}.500`,.6)(r);return{[Xe.bg.variable]:`colors.${t}.500`,[Xe.color.variable]:"colors.white",_dark:{[Xe.bg.variable]:n,[Xe.color.variable]:"colors.whiteAlpha.800"}}},_z=e=>{const{colorScheme:t,theme:r}=e,n=qs(`${t}.200`,.16)(r);return{[Xe.bg.variable]:`colors.${t}.100`,[Xe.color.variable]:`colors.${t}.800`,_dark:{[Xe.bg.variable]:n,[Xe.color.variable]:`colors.${t}.200`}}},kz=e=>{const{colorScheme:t,theme:r}=e,n=qs(`${t}.200`,.8)(r);return{[Xe.color.variable]:`colors.${t}.500`,_dark:{[Xe.color.variable]:n},[Xe.shadow.variable]:`inset 0 0 0px 1px ${Xe.color.reference}`}},Cz={solid:Sz,subtle:_z,outline:kz},al={baseStyle:wz,variants:Cz,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:Ez,definePartsStyle:xo}=Ie(mL.keys),bx=J("tag-bg"),xx=J("tag-color"),Ip=J("tag-shadow"),Ku=J("tag-min-height"),Yu=J("tag-min-width"),Xu=J("tag-font-size"),Qu=J("tag-padding-inline"),Tz={fontWeight:"medium",lineHeight:1.2,outline:0,[xx.variable]:Xe.color.reference,[bx.variable]:Xe.bg.reference,[Ip.variable]:Xe.shadow.reference,color:xx.reference,bg:bx.reference,boxShadow:Ip.reference,borderRadius:"md",minH:Ku.reference,minW:Yu.reference,fontSize:Xu.reference,px:Qu.reference,_focusVisible:{[Ip.variable]:"shadows.outline"}},Pz={lineHeight:1.2,overflow:"visible"},Iz={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},Rz=xo({container:Tz,label:Pz,closeButton:Iz}),Az={sm:xo({container:{[Ku.variable]:"sizes.5",[Yu.variable]:"sizes.5",[Xu.variable]:"fontSizes.xs",[Qu.variable]:"space.2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:xo({container:{[Ku.variable]:"sizes.6",[Yu.variable]:"sizes.6",[Xu.variable]:"fontSizes.sm",[Qu.variable]:"space.2"}}),lg:xo({container:{[Ku.variable]:"sizes.8",[Yu.variable]:"sizes.8",[Xu.variable]:"fontSizes.md",[Qu.variable]:"space.3"}})},jz={subtle:xo(e=>{var t;return{container:(t=al.variants)==null?void 0:t.subtle(e)}}),solid:xo(e=>{var t;return{container:(t=al.variants)==null?void 0:t.solid(e)}}),outline:xo(e=>{var t;return{container:(t=al.variants)==null?void 0:t.outline(e)}})},$z=Ez({variants:jz,baseStyle:Rz,sizes:Az,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),{definePartsStyle:In,defineMultiStyleConfig:Oz}=Ie(tL.keys),us=J("input-height"),ds=J("input-font-size"),fs=J("input-padding"),hs=J("input-border-radius"),Nz=In({addon:{height:us.reference,fontSize:ds.reference,px:fs.reference,borderRadius:hs.reference},field:{width:"100%",height:us.reference,fontSize:ds.reference,px:fs.reference,borderRadius:hs.reference,minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),Zn={lg:{[ds.variable]:"fontSizes.lg",[fs.variable]:"space.4",[hs.variable]:"radii.md",[us.variable]:"sizes.12"},md:{[ds.variable]:"fontSizes.md",[fs.variable]:"space.4",[hs.variable]:"radii.md",[us.variable]:"sizes.10"},sm:{[ds.variable]:"fontSizes.sm",[fs.variable]:"space.3",[hs.variable]:"radii.sm",[us.variable]:"sizes.8"},xs:{[ds.variable]:"fontSizes.xs",[fs.variable]:"space.2",[hs.variable]:"radii.sm",[us.variable]:"sizes.6"}},Lz={lg:In({field:Zn.lg,group:Zn.lg}),md:In({field:Zn.md,group:Zn.md}),sm:In({field:Zn.sm,group:Zn.sm}),xs:In({field:Zn.xs,group:Zn.xs})};function Wv(e){const{focusBorderColor:t,errorBorderColor:r}=e;return{focusBorderColor:t||Q("blue.500","blue.300")(e),errorBorderColor:r||Q("red.500","red.300")(e)}}var zz=In(e=>{const{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=Wv(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:Q("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ot(t,n),boxShadow:`0 0 0 1px ${Ot(t,n)}`},_focusVisible:{zIndex:1,borderColor:Ot(t,r),boxShadow:`0 0 0 1px ${Ot(t,r)}`}},addon:{border:"1px solid",borderColor:Q("inherit","whiteAlpha.50")(e),bg:Q("gray.100","whiteAlpha.300")(e)}}}),Dz=In(e=>{const{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=Wv(e);return{field:{border:"2px solid",borderColor:"transparent",bg:Q("gray.100","whiteAlpha.50")(e),_hover:{bg:Q("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ot(t,n)},_focusVisible:{bg:"transparent",borderColor:Ot(t,r)}},addon:{border:"2px solid",borderColor:"transparent",bg:Q("gray.100","whiteAlpha.50")(e)}}}),Mz=In(e=>{const{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=Wv(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ot(t,n),boxShadow:`0px 1px 0px 0px ${Ot(t,n)}`},_focusVisible:{borderColor:Ot(t,r),boxShadow:`0px 1px 0px 0px ${Ot(t,r)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),Fz=In({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),Bz={outline:zz,filled:Dz,flushed:Mz,unstyled:Fz},ve=Oz({baseStyle:Nz,sizes:Lz,variants:Bz,defaultProps:{size:"md",variant:"outline"}}),wx,Vz={...(wx=ve.baseStyle)==null?void 0:wx.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},Sx,_x,Uz={outline:e=>{var t,r;return(r=(t=ve.variants)==null?void 0:t.outline(e).field)!=null?r:{}},flushed:e=>{var t,r;return(r=(t=ve.variants)==null?void 0:t.flushed(e).field)!=null?r:{}},filled:e=>{var t,r;return(r=(t=ve.variants)==null?void 0:t.filled(e).field)!=null?r:{}},unstyled:(_x=(Sx=ve.variants)==null?void 0:Sx.unstyled.field)!=null?_x:{}},kx,Cx,Ex,Tx,Px,Ix,Rx,Ax,Wz={xs:(Cx=(kx=ve.sizes)==null?void 0:kx.xs.field)!=null?Cx:{},sm:(Tx=(Ex=ve.sizes)==null?void 0:Ex.sm.field)!=null?Tx:{},md:(Ix=(Px=ve.sizes)==null?void 0:Px.md.field)!=null?Ix:{},lg:(Ax=(Rx=ve.sizes)==null?void 0:Rx.lg.field)!=null?Ax:{}},Hz={baseStyle:Vz,sizes:Wz,variants:Uz,defaultProps:{size:"md",variant:"outline"}},du=ot("tooltip-bg"),Rp=ot("tooltip-fg"),Gz=ot("popper-arrow-bg"),qz={bg:du.reference,color:Rp.reference,[du.variable]:"colors.gray.700",[Rp.variable]:"colors.whiteAlpha.900",_dark:{[du.variable]:"colors.gray.300",[Rp.variable]:"colors.gray.900"},[Gz.variable]:du.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},Kz={baseStyle:qz},{defineMultiStyleConfig:Yz,definePartsStyle:Wa}=Ie(aL.keys),Xz=e=>{const{colorScheme:t,theme:r,isIndeterminate:n,hasStripe:i}=e,o=Q(px(),px("1rem","rgba(0,0,0,0.1)"))(e),s=Q(`${t}.500`,`${t}.200`)(e),a=`linear-gradient(
    to right,
    transparent 0%,
    ${Ot(r,s)} 50%,
    transparent 100%
  )`;return{...!n&&i&&o,...n?{bgImage:a}:{bgColor:s}}},Qz={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},Jz=e=>({bg:Q("gray.100","whiteAlpha.300")(e)}),Zz=e=>({transitionProperty:"common",transitionDuration:"slow",...Xz(e)}),eD=Wa(e=>({label:Qz,filledTrack:Zz(e),track:Jz(e)})),tD={xs:Wa({track:{h:"1"}}),sm:Wa({track:{h:"2"}}),md:Wa({track:{h:"3"}}),lg:Wa({track:{h:"4"}})},rD=Yz({sizes:tD,baseStyle:eD,defaultProps:{size:"md",colorScheme:"blue"}}),nD=e=>typeof e=="function";function Lt(e,...t){return nD(e)?e(...t):e}var{definePartsStyle:Ju,defineMultiStyleConfig:iD}=Ie(X8.keys),ll=J("checkbox-size"),oD=e=>{const{colorScheme:t}=e;return{w:ll.reference,h:ll.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:Q(`${t}.500`,`${t}.200`)(e),borderColor:Q(`${t}.500`,`${t}.200`)(e),color:Q("white","gray.900")(e),_hover:{bg:Q(`${t}.600`,`${t}.300`)(e),borderColor:Q(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:Q("gray.200","transparent")(e),bg:Q("gray.200","whiteAlpha.300")(e),color:Q("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:Q(`${t}.500`,`${t}.200`)(e),borderColor:Q(`${t}.500`,`${t}.200`)(e),color:Q("white","gray.900")(e)},_disabled:{bg:Q("gray.100","whiteAlpha.100")(e),borderColor:Q("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:Q("red.500","red.300")(e)}}},sD={_disabled:{cursor:"not-allowed"}},aD={userSelect:"none",_disabled:{opacity:.4}},lD={transitionProperty:"transform",transitionDuration:"normal"},cD=Ju(e=>({icon:lD,container:sD,control:Lt(oD,e),label:aD})),uD={sm:Ju({control:{[ll.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:Ju({control:{[ll.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:Ju({control:{[ll.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},Kd=iD({baseStyle:cD,sizes:uD,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:dD,definePartsStyle:Zu}=Ie(lL.keys),fD=e=>{var t;const r=(t=Lt(Kd.baseStyle,e))==null?void 0:t.control;return{...r,borderRadius:"full",_checked:{...r==null?void 0:r._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},hD=Zu(e=>{var t,r,n,i;return{label:(r=(t=Kd).baseStyle)==null?void 0:r.call(t,e).label,container:(i=(n=Kd).baseStyle)==null?void 0:i.call(n,e).container,control:fD(e)}}),pD={md:Zu({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:Zu({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:Zu({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},mD=dD({baseStyle:hD,sizes:pD,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:gD,definePartsStyle:vD}=Ie(cL.keys),fu=J("select-bg"),jx,yD={...(jx=ve.baseStyle)==null?void 0:jx.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:fu.reference,[fu.variable]:"colors.white",_dark:{[fu.variable]:"colors.gray.700"},"> option, > optgroup":{bg:fu.reference}},bD={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},xD=vD({field:yD,icon:bD}),hu={paddingInlineEnd:"8"},$x,Ox,Nx,Lx,zx,Dx,Mx,Fx,wD={lg:{...($x=ve.sizes)==null?void 0:$x.lg,field:{...(Ox=ve.sizes)==null?void 0:Ox.lg.field,...hu}},md:{...(Nx=ve.sizes)==null?void 0:Nx.md,field:{...(Lx=ve.sizes)==null?void 0:Lx.md.field,...hu}},sm:{...(zx=ve.sizes)==null?void 0:zx.sm,field:{...(Dx=ve.sizes)==null?void 0:Dx.sm.field,...hu}},xs:{...(Mx=ve.sizes)==null?void 0:Mx.xs,field:{...(Fx=ve.sizes)==null?void 0:Fx.xs.field,...hu},icon:{insetEnd:"1"}}},SD=gD({baseStyle:xD,sizes:wD,variants:ve.variants,defaultProps:ve.defaultProps}),Ap=J("skeleton-start-color"),jp=J("skeleton-end-color"),_D={[Ap.variable]:"colors.gray.100",[jp.variable]:"colors.gray.400",_dark:{[Ap.variable]:"colors.gray.800",[jp.variable]:"colors.gray.600"},background:Ap.reference,borderColor:jp.reference,opacity:.7,borderRadius:"sm"},kD={baseStyle:_D},$p=J("skip-link-bg"),CD={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[$p.variable]:"colors.white",_dark:{[$p.variable]:"colors.gray.700"},bg:$p.reference}},ED={baseStyle:CD},{defineMultiStyleConfig:TD,definePartsStyle:gh}=Ie(uL.keys),ql=J("slider-thumb-size"),Kl=J("slider-track-size"),di=J("slider-bg"),PD=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...Uv({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},ID=e=>({...Uv({orientation:e.orientation,horizontal:{h:Kl.reference},vertical:{w:Kl.reference}}),overflow:"hidden",borderRadius:"sm",[di.variable]:"colors.gray.200",_dark:{[di.variable]:"colors.whiteAlpha.200"},_disabled:{[di.variable]:"colors.gray.300",_dark:{[di.variable]:"colors.whiteAlpha.300"}},bg:di.reference}),RD=e=>{const{orientation:t}=e;return{...Uv({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:ql.reference,h:ql.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},AD=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[di.variable]:`colors.${t}.500`,_dark:{[di.variable]:`colors.${t}.200`},bg:di.reference}},jD=gh(e=>({container:PD(e),track:ID(e),thumb:RD(e),filledTrack:AD(e)})),$D=gh({container:{[ql.variable]:"sizes.4",[Kl.variable]:"sizes.1"}}),OD=gh({container:{[ql.variable]:"sizes.3.5",[Kl.variable]:"sizes.1"}}),ND=gh({container:{[ql.variable]:"sizes.2.5",[Kl.variable]:"sizes.0.5"}}),LD={lg:$D,md:OD,sm:ND},zD=TD({baseStyle:jD,sizes:LD,defaultProps:{size:"md",colorScheme:"blue"}}),ao=ot("spinner-size"),DD={width:[ao.reference],height:[ao.reference]},MD={xs:{[ao.variable]:"sizes.3"},sm:{[ao.variable]:"sizes.4"},md:{[ao.variable]:"sizes.6"},lg:{[ao.variable]:"sizes.8"},xl:{[ao.variable]:"sizes.12"}},FD={baseStyle:DD,sizes:MD,defaultProps:{size:"md"}},{defineMultiStyleConfig:BD,definePartsStyle:nE}=Ie(dL.keys),VD={fontWeight:"medium"},UD={opacity:.8,marginBottom:"2"},WD={verticalAlign:"baseline",fontWeight:"semibold"},HD={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},GD=nE({container:{},label:VD,helpText:UD,number:WD,icon:HD}),qD={md:nE({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},KD=BD({baseStyle:GD,sizes:qD,defaultProps:{size:"md"}}),Op=J("kbd-bg"),YD={[Op.variable]:"colors.gray.100",_dark:{[Op.variable]:"colors.whiteAlpha.100"},bg:Op.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},XD={baseStyle:YD},QD={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},JD={baseStyle:QD},{defineMultiStyleConfig:ZD,definePartsStyle:e9}=Ie(rL.keys),t9={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},r9=e9({icon:t9}),n9=ZD({baseStyle:r9}),{defineMultiStyleConfig:i9,definePartsStyle:o9}=Ie(nL.keys),Yr=J("menu-bg"),Np=J("menu-shadow"),s9={[Yr.variable]:"#fff",[Np.variable]:"shadows.sm",_dark:{[Yr.variable]:"colors.gray.700",[Np.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:Yr.reference,boxShadow:Np.reference},a9={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[Yr.variable]:"colors.gray.100",_dark:{[Yr.variable]:"colors.whiteAlpha.100"}},_active:{[Yr.variable]:"colors.gray.200",_dark:{[Yr.variable]:"colors.whiteAlpha.200"}},_expanded:{[Yr.variable]:"colors.gray.100",_dark:{[Yr.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:Yr.reference},l9={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},c9={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},u9={opacity:.6},d9={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},f9={transitionProperty:"common",transitionDuration:"normal"},h9=o9({button:f9,list:s9,item:a9,groupTitle:l9,icon:c9,command:u9,divider:d9}),p9=i9({baseStyle:h9}),{defineMultiStyleConfig:m9,definePartsStyle:Dg}=Ie(iL.keys),Lp=J("modal-bg"),zp=J("modal-shadow"),g9={bg:"blackAlpha.600",zIndex:"modal"},v9=e=>{const{isCentered:t,scrollBehavior:r}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:r==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},y9=e=>{const{isCentered:t,scrollBehavior:r}=e;return{borderRadius:"md",color:"inherit",my:t?"auto":"16",mx:t?"auto":void 0,zIndex:"modal",maxH:r==="inside"?"calc(100% - 7.5rem)":void 0,[Lp.variable]:"colors.white",[zp.variable]:"shadows.lg",_dark:{[Lp.variable]:"colors.gray.700",[zp.variable]:"shadows.dark-lg"},bg:Lp.reference,boxShadow:zp.reference}},b9={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},x9={position:"absolute",top:"2",insetEnd:"3"},w9=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},S9={px:"6",py:"4"},_9=Dg(e=>({overlay:g9,dialogContainer:Lt(v9,e),dialog:Lt(y9,e),header:b9,closeButton:x9,body:Lt(w9,e),footer:S9}));function jr(e){return Dg(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var k9={xs:jr("xs"),sm:jr("sm"),md:jr("md"),lg:jr("lg"),xl:jr("xl"),"2xl":jr("2xl"),"3xl":jr("3xl"),"4xl":jr("4xl"),"5xl":jr("5xl"),"6xl":jr("6xl"),full:jr("full")},C9=m9({baseStyle:_9,sizes:k9,defaultProps:{size:"md"}}),{defineMultiStyleConfig:E9,definePartsStyle:iE}=Ie(oL.keys),Hv=ot("number-input-stepper-width"),oE=ot("number-input-input-padding"),T9=_n(Hv).add("0.5rem").toString(),Dp=ot("number-input-bg"),Mp=ot("number-input-color"),Fp=ot("number-input-border-color"),P9={[Hv.variable]:"sizes.6",[oE.variable]:T9},I9=e=>{var t,r;return(r=(t=Lt(ve.baseStyle,e))==null?void 0:t.field)!=null?r:{}},R9={width:Hv.reference},A9={borderStart:"1px solid",borderStartColor:Fp.reference,color:Mp.reference,bg:Dp.reference,[Mp.variable]:"colors.chakra-body-text",[Fp.variable]:"colors.chakra-border-color",_dark:{[Mp.variable]:"colors.whiteAlpha.800",[Fp.variable]:"colors.whiteAlpha.300"},_active:{[Dp.variable]:"colors.gray.200",_dark:{[Dp.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},j9=iE(e=>{var t;return{root:P9,field:(t=Lt(I9,e))!=null?t:{},stepperGroup:R9,stepper:A9}});function pu(e){var t,r,n;const i=(t=ve.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},s=(n=(r=i.field)==null?void 0:r.fontSize)!=null?n:"md",a=JC.fontSizes[s];return iE({field:{...i.field,paddingInlineEnd:oE.reference,verticalAlign:"top"},stepper:{fontSize:_n(a).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var $9={xs:pu("xs"),sm:pu("sm"),md:pu("md"),lg:pu("lg")},O9=E9({baseStyle:j9,sizes:$9,variants:ve.variants,defaultProps:ve.defaultProps}),Bx,N9={...(Bx=ve.baseStyle)==null?void 0:Bx.field,textAlign:"center"},L9={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Vx,Ux,z9={outline:e=>{var t,r,n;return(n=(r=Lt((t=ve.variants)==null?void 0:t.outline,e))==null?void 0:r.field)!=null?n:{}},flushed:e=>{var t,r,n;return(n=(r=Lt((t=ve.variants)==null?void 0:t.flushed,e))==null?void 0:r.field)!=null?n:{}},filled:e=>{var t,r,n;return(n=(r=Lt((t=ve.variants)==null?void 0:t.filled,e))==null?void 0:r.field)!=null?n:{}},unstyled:(Ux=(Vx=ve.variants)==null?void 0:Vx.unstyled.field)!=null?Ux:{}},D9={baseStyle:N9,sizes:L9,variants:z9,defaultProps:ve.defaultProps},{defineMultiStyleConfig:M9,definePartsStyle:F9}=Ie(sL.keys),mu=ot("popper-bg"),B9=ot("popper-arrow-bg"),Wx=ot("popper-arrow-shadow-color"),V9={zIndex:10},U9={[mu.variable]:"colors.white",bg:mu.reference,[B9.variable]:mu.reference,[Wx.variable]:"colors.gray.200",_dark:{[mu.variable]:"colors.gray.700",[Wx.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},W9={px:3,py:2,borderBottomWidth:"1px"},H9={px:3,py:2},G9={px:3,py:2,borderTopWidth:"1px"},q9={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},K9=F9({popper:V9,content:U9,header:W9,body:H9,footer:G9,closeButton:q9}),Y9=M9({baseStyle:K9}),{definePartsStyle:Mg,defineMultiStyleConfig:X9}=Ie(Q8.keys),Bp=J("drawer-bg"),Vp=J("drawer-box-shadow");function Go(e){return Mg(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var Q9={bg:"blackAlpha.600",zIndex:"modal"},J9={display:"flex",zIndex:"modal",justifyContent:"center"},Z9=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[Bp.variable]:"colors.white",[Vp.variable]:"shadows.lg",_dark:{[Bp.variable]:"colors.gray.700",[Vp.variable]:"shadows.dark-lg"},bg:Bp.reference,boxShadow:Vp.reference}},eM={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},tM={position:"absolute",top:"2",insetEnd:"3"},rM={px:"6",py:"2",flex:"1",overflow:"auto"},nM={px:"6",py:"4"},iM=Mg(e=>({overlay:Q9,dialogContainer:J9,dialog:Lt(Z9,e),header:eM,closeButton:tM,body:rM,footer:nM})),oM={xs:Go("xs"),sm:Go("md"),md:Go("lg"),lg:Go("2xl"),xl:Go("4xl"),full:Go("full")},sM=X9({baseStyle:iM,sizes:oM,defaultProps:{size:"xs"}}),{definePartsStyle:aM,defineMultiStyleConfig:lM}=Ie(J8.keys),cM={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},uM={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},dM={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},fM=aM({preview:cM,input:uM,textarea:dM}),hM=lM({baseStyle:fM}),{definePartsStyle:pM,defineMultiStyleConfig:mM}=Ie(Z8.keys),Es=J("form-control-color"),gM={marginStart:"1",[Es.variable]:"colors.red.500",_dark:{[Es.variable]:"colors.red.300"},color:Es.reference},vM={mt:"2",[Es.variable]:"colors.gray.600",_dark:{[Es.variable]:"colors.whiteAlpha.600"},color:Es.reference,lineHeight:"normal",fontSize:"sm"},yM=pM({container:{width:"100%",position:"relative"},requiredIndicator:gM,helperText:vM}),bM=mM({baseStyle:yM}),{definePartsStyle:xM,defineMultiStyleConfig:wM}=Ie(eL.keys),Ts=J("form-error-color"),SM={[Ts.variable]:"colors.red.500",_dark:{[Ts.variable]:"colors.red.300"},color:Ts.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},_M={marginEnd:"0.5em",[Ts.variable]:"colors.red.500",_dark:{[Ts.variable]:"colors.red.300"},color:Ts.reference},kM=xM({text:SM,icon:_M}),CM=wM({baseStyle:kM}),EM={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},TM={baseStyle:EM},PM={fontFamily:"heading",fontWeight:"bold"},IM={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},RM={baseStyle:PM,sizes:IM,defaultProps:{size:"xl"}},{defineMultiStyleConfig:AM,definePartsStyle:jM}=Ie(Y8.keys),Up=J("breadcrumb-link-decor"),$M={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",outline:"none",color:"inherit",textDecoration:Up.reference,[Up.variable]:"none","&:not([aria-current=page])":{cursor:"pointer",_hover:{[Up.variable]:"underline"},_focusVisible:{boxShadow:"outline"}}},OM=jM({link:$M}),NM=AM({baseStyle:OM}),LM={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},sE=e=>{const{colorScheme:t,theme:r}=e;if(t==="gray")return{color:Q("gray.800","whiteAlpha.900")(e),_hover:{bg:Q("gray.100","whiteAlpha.200")(e)},_active:{bg:Q("gray.200","whiteAlpha.300")(e)}};const n=qs(`${t}.200`,.12)(r),i=qs(`${t}.200`,.24)(r);return{color:Q(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:Q(`${t}.50`,n)(e)},_active:{bg:Q(`${t}.100`,i)(e)}}},zM=e=>{const{colorScheme:t}=e,r=Q("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?r:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Lt(sE,e)}},DM={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},MM=e=>{var t;const{colorScheme:r}=e;if(r==="gray"){const l=Q("gray.100","whiteAlpha.200")(e);return{bg:l,color:Q("gray.800","whiteAlpha.900")(e),_hover:{bg:Q("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:Q("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${r}.500`,color:i="white",hoverBg:o=`${r}.600`,activeBg:s=`${r}.700`}=(t=DM[r])!=null?t:{},a=Q(n,`${r}.200`)(e);return{bg:a,color:Q(i,"gray.800")(e),_hover:{bg:Q(o,`${r}.300`)(e),_disabled:{bg:a}},_active:{bg:Q(s,`${r}.400`)(e)}}},FM=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:Q(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:Q(`${t}.700`,`${t}.500`)(e)}}},BM={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},VM={ghost:sE,outline:zM,solid:MM,link:FM,unstyled:BM},UM={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},WM={baseStyle:LM,variants:VM,sizes:UM,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:wo,defineMultiStyleConfig:HM}=Ie(gL.keys),Yd=J("card-bg"),Nn=J("card-padding"),aE=J("card-shadow"),ed=J("card-radius"),lE=J("card-border-width","0"),cE=J("card-border-color"),GM=wo({container:{[Yd.variable]:"colors.chakra-body-bg",backgroundColor:Yd.reference,boxShadow:aE.reference,borderRadius:ed.reference,color:"chakra-body-text",borderWidth:lE.reference,borderColor:cE.reference},body:{padding:Nn.reference,flex:"1 1 0%"},header:{padding:Nn.reference},footer:{padding:Nn.reference}}),qM={sm:wo({container:{[ed.variable]:"radii.base",[Nn.variable]:"space.3"}}),md:wo({container:{[ed.variable]:"radii.md",[Nn.variable]:"space.5"}}),lg:wo({container:{[ed.variable]:"radii.xl",[Nn.variable]:"space.7"}})},KM={elevated:wo({container:{[aE.variable]:"shadows.base",_dark:{[Yd.variable]:"colors.gray.700"}}}),outline:wo({container:{[lE.variable]:"1px",[cE.variable]:"colors.chakra-border-color"}}),filled:wo({container:{[Yd.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{[Nn.variable]:0},header:{[Nn.variable]:0},footer:{[Nn.variable]:0}}},YM=HM({baseStyle:GM,variants:KM,sizes:qM,defaultProps:{variant:"elevated",size:"md"}}),cl=ot("close-button-size"),Ra=ot("close-button-bg"),XM={w:[cl.reference],h:[cl.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Ra.variable]:"colors.blackAlpha.100",_dark:{[Ra.variable]:"colors.whiteAlpha.100"}},_active:{[Ra.variable]:"colors.blackAlpha.200",_dark:{[Ra.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Ra.reference},QM={lg:{[cl.variable]:"sizes.10",fontSize:"md"},md:{[cl.variable]:"sizes.8",fontSize:"xs"},sm:{[cl.variable]:"sizes.6",fontSize:"2xs"}},JM={baseStyle:XM,sizes:QM,defaultProps:{size:"md"}},{variants:ZM,defaultProps:e7}=al,t7={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm",bg:Xe.bg.reference,color:Xe.color.reference,boxShadow:Xe.shadow.reference},r7={baseStyle:t7,variants:ZM,defaultProps:e7},n7={w:"100%",mx:"auto",maxW:"prose",px:"4"},i7={baseStyle:n7},o7={opacity:.6,borderColor:"inherit"},s7={borderStyle:"solid"},a7={borderStyle:"dashed"},l7={solid:s7,dashed:a7},c7={baseStyle:o7,variants:l7,defaultProps:{variant:"solid"}},{definePartsStyle:u7,defineMultiStyleConfig:d7}=Ie(G8.keys),f7={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},h7={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},p7={pt:"2",px:"4",pb:"5"},m7={fontSize:"1.25em"},g7=u7({container:f7,button:h7,panel:p7,icon:m7}),v7=d7({baseStyle:g7}),{definePartsStyle:mc,defineMultiStyleConfig:y7}=Ie(q8.keys),ir=J("alert-fg"),Vn=J("alert-bg"),b7=mc({container:{bg:Vn.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:ir.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:ir.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function Gv(e){const{theme:t,colorScheme:r}=e,n=qs(`${r}.200`,.16)(t);return{light:`colors.${r}.100`,dark:n}}var x7=mc(e=>{const{colorScheme:t}=e,r=Gv(e);return{container:{[ir.variable]:`colors.${t}.600`,[Vn.variable]:r.light,_dark:{[ir.variable]:`colors.${t}.200`,[Vn.variable]:r.dark}}}}),w7=mc(e=>{const{colorScheme:t}=e,r=Gv(e);return{container:{[ir.variable]:`colors.${t}.600`,[Vn.variable]:r.light,_dark:{[ir.variable]:`colors.${t}.200`,[Vn.variable]:r.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:ir.reference}}}),S7=mc(e=>{const{colorScheme:t}=e,r=Gv(e);return{container:{[ir.variable]:`colors.${t}.600`,[Vn.variable]:r.light,_dark:{[ir.variable]:`colors.${t}.200`,[Vn.variable]:r.dark},pt:"2",borderTopWidth:"4px",borderTopColor:ir.reference}}}),_7=mc(e=>{const{colorScheme:t}=e;return{container:{[ir.variable]:"colors.white",[Vn.variable]:`colors.${t}.600`,_dark:{[ir.variable]:"colors.gray.900",[Vn.variable]:`colors.${t}.200`},color:ir.reference}}}),k7={subtle:x7,"left-accent":w7,"top-accent":S7,solid:_7},C7=y7({baseStyle:b7,variants:k7,defaultProps:{variant:"subtle",colorScheme:"blue"}}),{definePartsStyle:uE,defineMultiStyleConfig:E7}=Ie(K8.keys),Ps=J("avatar-border-color"),ul=J("avatar-bg"),Yl=J("avatar-font-size"),Ks=J("avatar-size"),T7={borderRadius:"full",border:"0.2em solid",borderColor:Ps.reference,[Ps.variable]:"white",_dark:{[Ps.variable]:"colors.gray.800"}},P7={bg:ul.reference,fontSize:Yl.reference,width:Ks.reference,height:Ks.reference,lineHeight:"1",[ul.variable]:"colors.gray.200",_dark:{[ul.variable]:"colors.whiteAlpha.400"}},I7=e=>{const{name:t,theme:r}=e,n=t?LL({string:t}):"colors.gray.400",i=OL(n)(r);let o="white";return i||(o="gray.800"),{bg:ul.reference,fontSize:Yl.reference,color:o,borderColor:Ps.reference,verticalAlign:"top",width:Ks.reference,height:Ks.reference,"&:not([data-loaded])":{[ul.variable]:n},[Ps.variable]:"colors.white",_dark:{[Ps.variable]:"colors.gray.800"}}},R7={fontSize:Yl.reference,lineHeight:"1"},A7=uE(e=>({badge:Lt(T7,e),excessLabel:Lt(P7,e),container:Lt(I7,e),label:R7}));function ei(e){const t=e!=="100%"?eE[e]:void 0;return uE({container:{[Ks.variable]:t??e,[Yl.variable]:`calc(${t??e} / 2.5)`},excessLabel:{[Ks.variable]:t??e,[Yl.variable]:`calc(${t??e} / 2.5)`}})}var j7={"2xs":ei(4),xs:ei(6),sm:ei(8),md:ei(12),lg:ei(16),xl:ei(24),"2xl":ei(32),full:ei("100%")},$7=E7({baseStyle:A7,sizes:j7,defaultProps:{size:"md"}}),O7={Accordion:v7,Alert:C7,Avatar:$7,Badge:al,Breadcrumb:NM,Button:WM,Checkbox:Kd,CloseButton:JM,Code:r7,Container:i7,Divider:c7,Drawer:sM,Editable:hM,Form:bM,FormError:CM,FormLabel:TM,Heading:RM,Input:ve,Kbd:XD,Link:JD,List:n9,Menu:p9,Modal:C9,NumberInput:O9,PinInput:D9,Popover:Y9,Progress:rD,Radio:mD,Select:SD,Skeleton:kD,SkipLink:ED,Slider:zD,Spinner:FD,Stat:KD,Switch:JL,Table:oz,Tabs:xz,Tag:$z,Textarea:Hz,Tooltip:Kz,Card:YM,Stepper:H8},N7={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-inverse-text":{_light:"white",_dark:"gray.800"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-subtle-text":{_light:"gray.600",_dark:"gray.400"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},L7={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color"}}},z7="ltr",D7={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},dE={semanticTokens:N7,direction:z7,...V8,components:O7,styles:L7,config:D7};function Ha(e){return typeof e=="function"}function M7(...e){return t=>e.reduce((r,n)=>n(r),t)}var F7=e=>function(...r){let n=[...r],i=r[r.length-1];return y8(i)&&n.length>1?n=n.slice(0,n.length-1):i=e,M7(...n.map(o=>s=>Ha(o)?o(s):V7(s,o)))(i)},B7=F7(dE);function V7(...e){return Sr({},...e,fE)}function fE(e,t,r,n){if((Ha(e)||Ha(t))&&Object.prototype.hasOwnProperty.call(n,r))return(...i)=>{const o=Ha(e)?e(...i):e,s=Ha(t)?t(...i):t;return Sr({},o,s,fE)}}function U7(e,t){const r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}function W7(e,t,r,n){const i=typeof t=="string"?t.split("."):[t];for(n=0;n<i.length&&e;n+=1)e=e[i[n]];return e===void 0?r:e}var H7=e=>{const t=new WeakMap;return(n,i,o,s)=>{if(typeof n>"u")return e(n,i,o);t.has(n)||t.set(n,new Map);const a=t.get(n);if(a.has(i))return a.get(i);const l=e(n,i,o,s);return a.set(i,l),l}},hE=H7(W7);function pE(e,t){const r={};return Object.keys(e).forEach(n=>{const i=e[n];t(i,n,e)&&(r[n]=i)}),r}var mE=e=>pE(e,t=>t!=null);function G7(e){return typeof e=="function"}function gE(e,...t){return G7(e)?e(...t):e}var q7=typeof Element<"u",K7=typeof Map=="function",Y7=typeof Set=="function",X7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function td(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,i;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!td(e[n],t[n]))return!1;return!0}var o;if(K7&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!td(n.value[1],t.get(n.value[0])))return!1;return!0}if(Y7&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(X7&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;if(q7&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((i[n]==="_owner"||i[n]==="__v"||i[n]==="__o")&&e.$$typeof)&&!td(e[i[n]],t[i[n]]))return!1;return!0}return e!==e&&t!==t}var Q7=function(t,r){try{return td(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const J7=g0(Q7);function vE(e,t={}){var r;const{styleConfig:n,...i}=t,{theme:o,colorMode:s}=ZN(),a=e?hE(o,`components.${e}`):void 0,l=n||a,c=Sr({theme:o,colorMode:s},(r=l==null?void 0:l.defaultProps)!=null?r:{},mE(U7(i,["children"]))),u=w.useRef({});if(l){const h=g8(l)(c);J7(u.current,h)||(u.current=h)}return u.current}function vh(e,t={}){return vE(e,t)}function gc(e,t={}){return vE(e,t)}var Z7=new Set([...i8,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),eF=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function tF(e){return eF.has(e)||!Z7.has(e)}function rF(e,...t){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const r={...e};for(const n of t)if(n!=null)for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(i in r&&delete r[i],r[i]=n[i]);return r}var nF=YR,iF=function(t){return t!=="theme"},Hx=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?nF:iF},Gx=function(t,r,n){var i;if(r){var o=r.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},oF=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return $C(r,n,i),$N(function(){return OC(r,n,i)}),null},sF=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,o,s;r!==void 0&&(o=r.label,s=r.target);var a=Gx(t,r,n),l=a||Hx(i),c=!l("as");return function(){var u=arguments,f=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)f.push.apply(f,u);else{f.push(u[0][0]);for(var h=u.length,p=1;p<h;p++)f.push(u[p],u[0][p])}var v=DC(function(y,x,g){var m=c&&y.as||i,b="",S=[],C=y;if(y.theme==null){C={};for(var E in y)C[E]=y[E];C.theme=w.useContext(Hl)}typeof y.className=="string"?b=EN(x.registered,S,y.className):y.className!=null&&(b=y.className+" ");var k=Nv(f.concat(S),x.registered,C);b+=x.key+"-"+k.name,s!==void 0&&(b+=" "+s);var P=c&&a===void 0?Hx(m):l,$={};for(var j in y)c&&j==="as"||P(j)&&($[j]=y[j]);return $.className=b,$.ref=g,w.createElement(w.Fragment,null,w.createElement(oF,{cache:x,serialized:k,isStringTag:typeof m=="string"}),w.createElement(m,$))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=f,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(y,x){return e(y,Wd({},r,x,{shouldForwardProp:Gx(v,x,!0)})).apply(void 0,f)},v}},aF=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Xd=sF.bind();aF.forEach(function(e){Xd[e]=Xd(e)});var qx,lF=(qx=Xd.default)!=null?qx:Xd,cF=({baseStyle:e})=>t=>{const{theme:r,css:n,__css:i,sx:o,...s}=t,a=pE(s,(f,h)=>s8(h)),l=gE(e,t),c=rF({},i,l,mE(a),o),u=QC(c)(t.theme);return n?[u,n]:u};function Wp(e,t){const{baseStyle:r,...n}=t??{};n.shouldForwardProp||(n.shouldForwardProp=tF);const i=cF({baseStyle:r}),o=lF(e,n)(i);return X.forwardRef(function(l,c){const{colorMode:u,forced:f}=Dv();return X.createElement(o,{ref:c,"data-theme":f?u:void 0,...l})})}function uF(){const e=new Map;return new Proxy(Wp,{apply(t,r,n){return Wp(...n)},get(t,r){return e.has(r)||e.set(r,Wp(r)),e.get(r)}})}var Ce=uF();function Rt(e){return w.forwardRef(e)}function dF(e={}){const{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:n}=e,i=w.createContext(void 0);i.displayName=n;function o(){var s;const a=w.useContext(i);if(!a&&t){const l=new Error(r);throw l.name="ContextError",(s=Error.captureStackTrace)==null||s.call(Error,l,o),l}return a}return[i.Provider,o,i]}function fF(e){const{cssVarsRoot:t,theme:r,children:n}=e,i=w.useMemo(()=>n8(r),[r]);return d.jsxs(LN,{theme:i,children:[d.jsx(hF,{root:t}),n]})}function hF({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return d.jsx(dh,{styles:r=>({[t]:r.__cssVars})})}dF({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function pF(){const{colorMode:e}=Dv();return d.jsx(dh,{styles:t=>{const r=hE(t,"styles.global"),n=gE(r,{theme:t,colorMode:e});return n?QC(n)(t):void 0}})}var yE=w.createContext({getDocument(){return document},getWindow(){return window}});yE.displayName="EnvironmentContext";function bE(e){const{children:t,environment:r,disabled:n}=e,i=w.useRef(null),o=w.useMemo(()=>r||{getDocument:()=>{var a,l;return(l=(a=i.current)==null?void 0:a.ownerDocument)!=null?l:document},getWindow:()=>{var a,l;return(l=(a=i.current)==null?void 0:a.ownerDocument.defaultView)!=null?l:window}},[r]),s=!n||!r;return d.jsxs(yE.Provider,{value:o,children:[t,s&&d.jsx("span",{id:"__chakra_env",hidden:!0,ref:i})]})}bE.displayName="EnvironmentProvider";var mF=e=>{const{children:t,colorModeManager:r,portalZIndex:n,resetScope:i,resetCSS:o=!0,theme:s={},environment:a,cssVarsRoot:l,disableEnvironment:c,disableGlobalStyle:u}=e,f=d.jsx(bE,{environment:a,disabled:c,children:t});return d.jsx(fF,{theme:s,cssVarsRoot:l,children:d.jsxs(WC,{colorModeManager:r,options:s.config,children:[o?d.jsx(FN,{scope:i}):d.jsx(MN,{}),!u&&d.jsx(pF,{}),n?d.jsx(BC,{zIndex:n,children:f}):f]})})},gF=(e,t)=>e.find(r=>r.id===t);function Kx(e,t){const r=xE(e,t),n=r?e[r].findIndex(i=>i.id===t):-1;return{position:r,index:n}}function xE(e,t){for(const[r,n]of Object.entries(e))if(gF(n,t))return r}function vF(e){const t=e.includes("right"),r=e.includes("left");let n="center";return t&&(n="flex-end"),r&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}}function yF(e){const r=e==="top"||e==="bottom"?"0 auto":void 0,n=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,i=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,o=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",s=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:r,top:n,bottom:i,right:o,left:s}}function Qd(e,t=[]){const r=w.useRef(e);return w.useEffect(()=>{r.current=e}),w.useCallback((...n)=>{var i;return(i=r.current)==null?void 0:i.call(r,...n)},t)}function bF(e,t){const r=Qd(e);w.useEffect(()=>{if(t==null)return;let n=null;return n=window.setTimeout(()=>{r()},t),()=>{n&&window.clearTimeout(n)}},[t,r])}function Jd(e,t){const r=w.useRef(!1),n=w.useRef(!1);w.useEffect(()=>{if(r.current&&n.current)return e();n.current=!0},t),w.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[])}const wE=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),yh=w.createContext({}),vc=w.createContext(null),bh=typeof document<"u",qv=bh?w.useLayoutEffect:w.useEffect,SE=w.createContext({strict:!1}),Kv=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),xF="framerAppearId",_E="data-"+Kv(xF);function wF(e,t,r,n){const{visualElement:i}=w.useContext(yh),o=w.useContext(SE),s=w.useContext(vc),a=w.useContext(wE).reducedMotion,l=w.useRef();n=n||o.renderer,!l.current&&n&&(l.current=n(e,{visualState:t,parent:i,props:r,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;w.useInsertionEffect(()=>{c&&c.update(r,s)});const u=w.useRef(!!(r[_E]&&!window.HandoffComplete));return qv(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),w.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function ps(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function SF(e,t,r){return w.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&(typeof r=="function"?r(n):ps(r)&&(r.current=n))},[t])}function Xl(e){return typeof e=="string"||Array.isArray(e)}function xh(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Yv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xv=["initial",...Yv];function wh(e){return xh(e.animate)||Xv.some(t=>Xl(e[t]))}function kE(e){return!!(wh(e)||e.variants)}function _F(e,t){if(wh(e)){const{initial:r,animate:n}=e;return{initial:r===!1||Xl(r)?r:void 0,animate:Xl(n)?n:void 0}}return e.inherit!==!1?t:{}}function kF(e){const{initial:t,animate:r}=_F(e,w.useContext(yh));return w.useMemo(()=>({initial:t,animate:r}),[Yx(t),Yx(r)])}function Yx(e){return Array.isArray(e)?e.join(" "):e}const Xx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ql={};for(const e in Xx)Ql[e]={isEnabled:t=>Xx[e].some(r=>!!t[r])};function CF(e){for(const t in e)Ql[t]={...Ql[t],...e[t]}}const Qv=w.createContext({}),CE=w.createContext({}),EF=Symbol.for("motionComponentSymbol");function TF({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:i}){e&&CF(e);function o(a,l){let c;const u={...w.useContext(wE),...a,layoutId:PF(a)},{isStatic:f}=u,h=kF(a),p=n(a,f);if(!f&&bh){h.visualElement=wF(i,p,u,t);const v=w.useContext(CE),y=w.useContext(SE).strict;h.visualElement&&(c=h.visualElement.loadFeatures(u,y,e,v))}return w.createElement(yh.Provider,{value:h},c&&h.visualElement?w.createElement(c,{visualElement:h.visualElement,...u}):null,r(i,a,SF(p,h.visualElement,l),p,f,h.visualElement))}const s=w.forwardRef(o);return s[EF]=i,s}function PF({layoutId:e}){const t=w.useContext(Qv).id;return t&&e!==void 0?t+"-"+e:e}function IF(e){function t(n,i={}){return TF(e(n,i))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(n,i)=>(r.has(i)||r.set(i,t(i)),r.get(i))})}const RF=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jv(e){return typeof e!="string"||e.includes("-")?!1:!!(RF.indexOf(e)>-1||/[A-Z]/.test(e))}const Zd={};function AF(e){Object.assign(Zd,e)}const yc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Do=new Set(yc);function EE(e,{layout:t,layoutId:r}){return Do.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Zd[e]||e==="opacity")}const Yt=e=>!!(e&&e.getVelocity),jF={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$F=yc.length;function OF(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,i){let o="";for(let s=0;s<$F;s++){const a=yc[s];if(e[a]!==void 0){const l=jF[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,n?"":o):r&&n&&(o="none"),o}const TE=e=>t=>typeof t=="string"&&t.startsWith(e),PE=TE("--"),Fg=TE("var(--"),NF=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,LF=(e,t)=>t&&typeof e=="number"?t.transform(e):e,zi=(e,t,r)=>Math.min(Math.max(r,e),t),Mo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},dl={...Mo,transform:e=>zi(0,1,e)},gu={...Mo,default:1},fl=e=>Math.round(e*1e5)/1e5,Sh=/(-)?([\d]*\.?[\d])+/g,IE=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,zF=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bc(e){return typeof e=="string"}const xc=e=>({test:t=>bc(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ni=xc("deg"),an=xc("%"),Z=xc("px"),DF=xc("vh"),MF=xc("vw"),Qx={...an,parse:e=>an.parse(e)/100,transform:e=>an.transform(e*100)},Jx={...Mo,transform:Math.round},RE={borderWidth:Z,borderTopWidth:Z,borderRightWidth:Z,borderBottomWidth:Z,borderLeftWidth:Z,borderRadius:Z,radius:Z,borderTopLeftRadius:Z,borderTopRightRadius:Z,borderBottomRightRadius:Z,borderBottomLeftRadius:Z,width:Z,maxWidth:Z,height:Z,maxHeight:Z,size:Z,top:Z,right:Z,bottom:Z,left:Z,padding:Z,paddingTop:Z,paddingRight:Z,paddingBottom:Z,paddingLeft:Z,margin:Z,marginTop:Z,marginRight:Z,marginBottom:Z,marginLeft:Z,rotate:ni,rotateX:ni,rotateY:ni,rotateZ:ni,scale:gu,scaleX:gu,scaleY:gu,scaleZ:gu,skew:ni,skewX:ni,skewY:ni,distance:Z,translateX:Z,translateY:Z,translateZ:Z,x:Z,y:Z,z:Z,perspective:Z,transformPerspective:Z,opacity:dl,originX:Qx,originY:Qx,originZ:Z,zIndex:Jx,fillOpacity:dl,strokeOpacity:dl,numOctaves:Jx};function Zv(e,t,r,n){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,c=!1,u=!0;for(const f in t){const h=t[f];if(PE(f)){o[f]=h;continue}const p=RE[f],v=LF(h,p);if(Do.has(f)){if(l=!0,s[f]=v,!u)continue;h!==(p.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,a[f]=v):i[f]=v}if(t.transform||(l||n?i.transform=OF(e.transform,r,u,n):i.transform&&(i.transform="none")),c){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${f} ${h} ${p}`}}const ey=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function AE(e,t,r){for(const n in t)!Yt(t[n])&&!EE(n,r)&&(e[n]=t[n])}function FF({transformTemplate:e},t,r){return w.useMemo(()=>{const n=ey();return Zv(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}function BF(e,t,r){const n=e.style||{},i={};return AE(i,n,e),Object.assign(i,FF(e,t,r)),e.transformValues?e.transformValues(i):i}function VF(e,t,r){const n={},i=BF(e,t,r);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const UF=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ef(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||UF.has(e)}let jE=e=>!ef(e);function WF(e){e&&(jE=t=>t.startsWith("on")?!ef(t):e(t))}try{WF(require("@emotion/is-prop-valid").default)}catch{}function HF(e,t,r){const n={};for(const i in e)i==="values"&&typeof e.values=="object"||(jE(i)||r===!0&&ef(i)||!t&&!ef(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}function Zx(e,t,r){return typeof e=="string"?e:Z.transform(t+r*e)}function GF(e,t,r){const n=Zx(t,e.x,e.width),i=Zx(r,e.y,e.height);return`${n} ${i}`}const qF={offset:"stroke-dashoffset",array:"stroke-dasharray"},KF={offset:"strokeDashoffset",array:"strokeDasharray"};function YF(e,t,r=1,n=0,i=!0){e.pathLength=1;const o=i?qF:KF;e[o.offset]=Z.transform(-n);const s=Z.transform(t),a=Z.transform(r);e[o.array]=`${s} ${a}`}function ty(e,{attrX:t,attrY:r,attrScale:n,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},u,f,h){if(Zv(e,c,u,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=GF(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),r!==void 0&&(p.y=r),n!==void 0&&(p.scale=n),s!==void 0&&YF(p,s,a,l,!1)}const $E=()=>({...ey(),attrs:{}}),ry=e=>typeof e=="string"&&e.toLowerCase()==="svg";function XF(e,t,r,n){const i=w.useMemo(()=>{const o=$E();return ty(o,t,{enableHardwareAcceleration:!1},ry(n),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};AE(o,e.style,e),i.style={...o,...i.style}}return i}function QF(e=!1){return(r,n,i,{latestValues:o},s)=>{const l=(Jv(r)?XF:VF)(n,o,s,r),u={...HF(n,typeof r=="string",e),...l,ref:i},{children:f}=n,h=w.useMemo(()=>Yt(f)?f.get():f,[f]);return w.createElement(r,{...u,children:h})}}function OE(e,{style:t,vars:r},n,i){Object.assign(e.style,t,i&&i.getProjectionStyles(n));for(const o in r)e.style.setProperty(o,r[o])}const NE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function LE(e,t,r,n){OE(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(NE.has(i)?i:Kv(i),t.attrs[i])}function ny(e,t){const{style:r}=e,n={};for(const i in r)(Yt(r[i])||t.style&&Yt(t.style[i])||EE(i,e))&&(n[i]=r[i]);return n}function zE(e,t){const r=ny(e,t);for(const n in e)if(Yt(e[n])||Yt(t[n])){const i=yc.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[i]=e[n]}return r}function iy(e,t,r,n={},i={}){return typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),t}function DE(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const tf=e=>Array.isArray(e),JF=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),ZF=e=>tf(e)?e[e.length-1]||0:e;function rd(e){const t=Yt(e)?e.get():e;return JF(t)?t.toValue():t}function eB({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,i,o){const s={latestValues:tB(n,i,o,e),renderState:t()};return r&&(s.mount=a=>r(n,a,s)),s}const ME=e=>(t,r)=>{const n=w.useContext(yh),i=w.useContext(vc),o=()=>eB(e,t,n,i);return r?o():DE(o)};function tB(e,t,r,n){const i={},o=n(e,{});for(const h in o)i[h]=rd(o[h]);let{initial:s,animate:a}=e;const l=wh(e),c=kE(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let u=r?r.initial===!1:!1;u=u||s===!1;const f=u?a:s;return f&&typeof f!="boolean"&&!xh(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const v=iy(e,p);if(!v)return;const{transitionEnd:y,transition:x,...g}=v;for(const m in g){let b=g[m];if(Array.isArray(b)){const S=u?b.length-1:0;b=b[S]}b!==null&&(i[m]=b)}for(const m in y)i[m]=y[m]}),i}const Ye=e=>e;class ew{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function rB(e){let t=new ew,r=new ew,n=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&i,h=f?t:r;return c&&s.add(l),h.add(l)&&f&&i&&(n=t.order.length),l},cancel:l=>{r.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let c=0;c<n;c++){const u=t.order[c];u(l),s.has(u)&&(a.schedule(u),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const vu=["prepare","read","update","preRender","render","postRender"],nB=40;function iB(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=vu.reduce((f,h)=>(f[h]=rB(()=>r=!0),f),{}),s=f=>o[f].process(i),a=()=>{const f=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(f-i.timestamp,nB),1),i.timestamp=f,i.isProcessing=!0,vu.forEach(s),i.isProcessing=!1,r&&t&&(n=!1,e(a))},l=()=>{r=!0,n=!0,i.isProcessing||e(a)};return{schedule:vu.reduce((f,h)=>{const p=o[h];return f[h]=(v,y=!1,x=!1)=>(r||l(),p.schedule(v,y,x)),f},{}),cancel:f=>vu.forEach(h=>o[h].cancel(f)),state:i,steps:o}}const{schedule:Pe,cancel:Un,state:Ct,steps:Hp}=iB(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0),oB={useVisualState:ME({scrapeMotionValuesFromProps:zE,createRenderState:$E,onMount:(e,t,{renderState:r,latestValues:n})=>{Pe.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),Pe.render(()=>{ty(r,n,{enableHardwareAcceleration:!1},ry(t.tagName),e.transformTemplate),LE(t,r)})}})},sB={useVisualState:ME({scrapeMotionValuesFromProps:ny,createRenderState:ey})};function aB(e,{forwardMotionProps:t=!1},r,n){return{...Jv(e)?oB:sB,preloadedFeatures:r,useRender:QF(t),createVisualElement:n,Component:e}}function Rn(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const FE=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function _h(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const lB=e=>t=>FE(t)&&e(t,_h(t));function Ln(e,t,r,n){return Rn(e,t,lB(r),n)}const cB=(e,t)=>r=>t(e(r)),Ai=(...e)=>e.reduce(cB);function BE(e){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=e,r):!1}}const tw=BE("dragHorizontal"),rw=BE("dragVertical");function VE(e){let t=!1;if(e==="y")t=rw();else if(e==="x")t=tw();else{const r=tw(),n=rw();r&&n?t=()=>{r(),n()}:(r&&r(),n&&n())}return t}function UE(){const e=VE(!0);return e?(e(),!1):!0}class Hi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function nw(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||UE())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[n]&&Pe.update(()=>a[n](o,s))};return Ln(e.current,r,i,{passive:!e.getProps()[n]})}class uB extends Hi{mount(){this.unmount=Ai(nw(this.node,!0),nw(this.node,!1))}unmount(){}}class dB extends Hi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ai(Rn(this.node.current,"focus",()=>this.onFocus()),Rn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const WE=(e,t)=>t?e===t?!0:WE(e,t.parentElement):!1;function Gp(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,_h(r))}class fB extends Hi{constructor(){super(...arguments),this.removeStartListeners=Ye,this.removeEndListeners=Ye,this.removeAccessibleListeners=Ye,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),o=Ln(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps();Pe.update(()=>{!f&&!WE(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(n.onTap||n.onPointerUp)}),s=Ln(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Ai(o,s),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Gp("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&Pe.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Rn(this.node.current,"keyup",s),Gp("down",(a,l)=>{this.startPress(a,l)})},r=Rn(this.node.current,"keydown",t),n=()=>{this.isPressing&&Gp("cancel",(o,s)=>this.cancelPress(o,s))},i=Rn(this.node.current,"blur",n);this.removeAccessibleListeners=Ai(r,i)}}startPress(t,r){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&Pe.update(()=>n(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!UE()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&Pe.update(()=>n(t,r))}mount(){const t=this.node.getProps(),r=Ln(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=Rn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ai(r,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Bg=new WeakMap,qp=new WeakMap,hB=e=>{const t=Bg.get(e.target);t&&t(e)},pB=e=>{e.forEach(hB)};function mB({root:e,...t}){const r=e||document;qp.has(r)||qp.set(r,{});const n=qp.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(pB,{root:e,...t})),n[i]}function gB(e,t,r){const n=mB(t);return Bg.set(e,r),n.observe(e),()=>{Bg.delete(e),n.unobserve(e)}}const vB={some:0,all:1};class yB extends Hi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:i="some",once:o}=t,s={root:r?r.current:void 0,rootMargin:n,threshold:typeof i=="number"?i:vB[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return gB(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(bB(t,r))&&this.startObserver()}unmount(){}}function bB({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const xB={inView:{Feature:yB},tap:{Feature:fB},focus:{Feature:dB},hover:{Feature:uB}};function HE(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function wB(e){const t={};return e.values.forEach((r,n)=>t[n]=r.get()),t}function SB(e){const t={};return e.values.forEach((r,n)=>t[n]=r.getVelocity()),t}function kh(e,t,r){const n=e.getProps();return iy(n,t,r!==void 0?r:n.custom,wB(e),SB(e))}let oy=Ye;const So=e=>e*1e3,zn=e=>e/1e3,_B={current:!1},GE=e=>Array.isArray(e)&&typeof e[0]=="number";function qE(e){return!!(!e||typeof e=="string"&&KE[e]||GE(e)||Array.isArray(e)&&e.every(qE))}const Ga=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,KE={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function YE(e){if(e)return GE(e)?Ga(e):Array.isArray(e)?e.map(YE):KE[e]}function kB(e,t,r,{delay:n=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:r};l&&(c.offset=l);const u=YE(a);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:n,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function CB(e,{repeat:t,repeatType:r="loop"}){const n=t&&r!=="loop"&&t%2===1?0:e.length-1;return e[n]}const XE=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,EB=1e-7,TB=12;function PB(e,t,r,n,i){let o,s,a=0;do s=t+(r-t)/2,o=XE(s,n,i)-e,o>0?r=s:t=s;while(Math.abs(o)>EB&&++a<TB);return s}function wc(e,t,r,n){if(e===t&&r===n)return Ye;const i=o=>PB(o,0,1,e,r);return o=>o===0||o===1?o:XE(i(o),t,n)}const IB=wc(.42,0,1,1),RB=wc(0,0,.58,1),QE=wc(.42,0,.58,1),AB=e=>Array.isArray(e)&&typeof e[0]!="number",JE=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ZE=e=>t=>1-e(1-t),sy=e=>1-Math.sin(Math.acos(e)),eT=ZE(sy),jB=JE(sy),tT=wc(.33,1.53,.69,.99),ay=ZE(tT),$B=JE(ay),OB=e=>(e*=2)<1?.5*ay(e):.5*(2-Math.pow(2,-10*(e-1))),NB={linear:Ye,easeIn:IB,easeInOut:QE,easeOut:RB,circIn:sy,circInOut:jB,circOut:eT,backIn:ay,backInOut:$B,backOut:tT,anticipate:OB},iw=e=>{if(Array.isArray(e)){oy(e.length===4);const[t,r,n,i]=e;return wc(t,r,n,i)}else if(typeof e=="string")return NB[e];return e},ly=(e,t)=>r=>!!(bc(r)&&zF.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),rT=(e,t,r)=>n=>{if(!bc(n))return n;const[i,o,s,a]=n.match(Sh);return{[e]:parseFloat(i),[t]:parseFloat(o),[r]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},LB=e=>zi(0,255,e),Kp={...Mo,transform:e=>Math.round(LB(e))},po={test:ly("rgb","red"),parse:rT("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+Kp.transform(e)+", "+Kp.transform(t)+", "+Kp.transform(r)+", "+fl(dl.transform(n))+")"};function zB(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const Vg={test:ly("#"),parse:zB,transform:po.transform},ms={test:ly("hsl","hue"),parse:rT("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+an.transform(fl(t))+", "+an.transform(fl(r))+", "+fl(dl.transform(n))+")"},jt={test:e=>po.test(e)||Vg.test(e)||ms.test(e),parse:e=>po.test(e)?po.parse(e):ms.test(e)?ms.parse(e):Vg.parse(e),transform:e=>bc(e)?e:e.hasOwnProperty("red")?po.transform(e):ms.transform(e)},Be=(e,t,r)=>-r*e+r*t+e;function Yp(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function DB({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let i=0,o=0,s=0;if(!t)i=o=s=r;else{const a=r<.5?r*(1+t):r+t-r*t,l=2*r-a;i=Yp(l,a,e+1/3),o=Yp(l,a,e),s=Yp(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:n}}const Xp=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},MB=[Vg,po,ms],FB=e=>MB.find(t=>t.test(e));function ow(e){const t=FB(e);let r=t.parse(e);return t===ms&&(r=DB(r)),r}const nT=(e,t)=>{const r=ow(e),n=ow(t),i={...r};return o=>(i.red=Xp(r.red,n.red,o),i.green=Xp(r.green,n.green,o),i.blue=Xp(r.blue,n.blue,o),i.alpha=Be(r.alpha,n.alpha,o),po.transform(i))};function BB(e){var t,r;return isNaN(e)&&bc(e)&&(((t=e.match(Sh))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(IE))===null||r===void 0?void 0:r.length)||0)>0}const iT={regex:NF,countKey:"Vars",token:"${v}",parse:Ye},oT={regex:IE,countKey:"Colors",token:"${c}",parse:jt.parse},sT={regex:Sh,countKey:"Numbers",token:"${n}",parse:Mo.parse};function Qp(e,{regex:t,countKey:r,token:n,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...o.map(i)))}function rf(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&Qp(r,iT),Qp(r,oT),Qp(r,sT),r}function aT(e){return rf(e).values}function lT(e){const{values:t,numColors:r,numVars:n,tokenised:i}=rf(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<n?a=a.replace(iT.token,s[l]):l<n+r?a=a.replace(oT.token,jt.transform(s[l])):a=a.replace(sT.token,fl(s[l]));return a}}const VB=e=>typeof e=="number"?0:e;function UB(e){const t=aT(e);return lT(e)(t.map(VB))}const Di={test:BB,parse:aT,createTransformer:lT,getAnimatableNone:UB},cT=(e,t)=>r=>`${r>0?t:e}`;function uT(e,t){return typeof e=="number"?r=>Be(e,t,r):jt.test(e)?nT(e,t):e.startsWith("var(")?cT(e,t):fT(e,t)}const dT=(e,t)=>{const r=[...e],n=r.length,i=e.map((o,s)=>uT(o,t[s]));return o=>{for(let s=0;s<n;s++)r[s]=i[s](o);return r}},WB=(e,t)=>{const r={...e,...t},n={};for(const i in r)e[i]!==void 0&&t[i]!==void 0&&(n[i]=uT(e[i],t[i]));return i=>{for(const o in n)r[o]=n[o](i);return r}},fT=(e,t)=>{const r=Di.createTransformer(t),n=rf(e),i=rf(t);return n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers?Ai(dT(n.values,i.values),r):cT(e,t)},Jl=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n},sw=(e,t)=>r=>Be(e,t,r);function HB(e){return typeof e=="number"?sw:typeof e=="string"?jt.test(e)?nT:fT:Array.isArray(e)?dT:typeof e=="object"?WB:sw}function GB(e,t,r){const n=[],i=r||HB(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Ye:t;a=Ai(l,a)}n.push(a)}return n}function hT(e,t,{clamp:r=!0,ease:n,mixer:i}={}){const o=e.length;if(oy(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=GB(t,n,i),a=s.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const f=Jl(e[u],e[u+1],c);return s[u](f)};return r?c=>l(zi(e[0],e[o-1],c)):l}function qB(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=Jl(0,t,n);e.push(Be(r,1,i))}}function KB(e){const t=[0];return qB(t,e.length-1),t}function YB(e,t){return e.map(r=>r*t)}function XB(e,t){return e.map(()=>t||QE).splice(0,e.length-1)}function nf({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){const i=AB(n)?n.map(iw):iw(n),o={done:!1,value:t[0]},s=YB(r&&r.length===t.length?r:KB(t),e),a=hT(s,t,{ease:Array.isArray(i)?i:XB(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function pT(e,t){return t?e*(1e3/t):0}const QB=5;function mT(e,t,r){const n=Math.max(t-QB,0);return pT(r-e(n),t-n)}const Jp=.001,JB=.01,ZB=10,eV=.05,tV=1;function rV({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let i,o,s=1-t;s=zi(eV,tV,s),e=zi(JB,ZB,zn(e)),s<1?(i=c=>{const u=c*s,f=u*e,h=u-r,p=Ug(c,s),v=Math.exp(-f);return Jp-h/p*v},o=c=>{const f=c*s*e,h=f*r+r,p=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-f),y=Ug(Math.pow(c,2),s);return(-i(c)+Jp>0?-1:1)*((h-p)*v)/y}):(i=c=>{const u=Math.exp(-c*e),f=(c-r)*e+1;return-Jp+u*f},o=c=>{const u=Math.exp(-c*e),f=(r-c)*(e*e);return u*f});const a=5/e,l=iV(i,o,a);if(e=So(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:s*2*Math.sqrt(n*c),duration:e}}}const nV=12;function iV(e,t,r){let n=r;for(let i=1;i<nV;i++)n=n-e(n)/t(n);return n}function Ug(e,t){return e*Math.sqrt(1-t*t)}const oV=["duration","bounce"],sV=["stiffness","damping","mass"];function aw(e,t){return t.some(r=>e[r]!==void 0)}function aV(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!aw(e,sV)&&aw(e,oV)){const r=rV(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function gT({keyframes:e,restDelta:t,restSpeed:r,...n}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:h}=aV({...n,velocity:-zn(n.velocity||0)}),p=f||0,v=l/(2*Math.sqrt(a*c)),y=o-i,x=zn(Math.sqrt(a/c)),g=Math.abs(y)<5;r||(r=g?.01:2),t||(t=g?.005:.5);let m;if(v<1){const b=Ug(x,v);m=S=>{const C=Math.exp(-v*x*S);return o-C*((p+v*x*y)/b*Math.sin(b*S)+y*Math.cos(b*S))}}else if(v===1)m=b=>o-Math.exp(-x*b)*(y+(p+x*y)*b);else{const b=x*Math.sqrt(v*v-1);m=S=>{const C=Math.exp(-v*x*S),E=Math.min(b*S,300);return o-C*((p+v*x*y)*Math.sinh(E)+b*y*Math.cosh(E))/b}}return{calculatedDuration:h&&u||null,next:b=>{const S=m(b);if(h)s.done=b>=u;else{let C=p;b!==0&&(v<1?C=mT(m,b,S):C=0);const E=Math.abs(C)<=r,k=Math.abs(o-S)<=t;s.done=E&&k}return s.value=s.done?o:S,s}}}function lw({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=e[0],h={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,v=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=r*t;const x=f+y,g=s===void 0?x:s(x);g!==x&&(y=g-f);const m=P=>-y*Math.exp(-P/n),b=P=>g+m(P),S=P=>{const $=m(P),j=b(P);h.done=Math.abs($)<=c,h.value=h.done?g:j};let C,E;const k=P=>{p(h.value)&&(C=P,E=gT({keyframes:[h.value,v(h.value)],velocity:mT(b,P,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:u}))};return k(0),{calculatedDuration:null,next:P=>{let $=!1;return!E&&C===void 0&&($=!0,S(P),k(P)),C!==void 0&&P>C?E.next(P-C):(!$&&S(P),h)}}}const lV=e=>{const t=({timestamp:r})=>e(r);return{start:()=>Pe.update(t,!0),stop:()=>Un(t),now:()=>Ct.isProcessing?Ct.timestamp:performance.now()}},cw=2e4;function uw(e){let t=0;const r=50;let n=e.next(t);for(;!n.done&&t<cw;)t+=r,n=e.next(t);return t>=cw?1/0:t}const cV={decay:lw,inertia:lw,tween:nf,keyframes:nf,spring:gT};function of({autoplay:e=!0,delay:t=0,driver:r=lV,keyframes:n,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:f,...h}){let p=1,v=!1,y,x;const g=()=>{x=new Promise(z=>{y=z})};g();let m;const b=cV[i]||nf;let S;b!==nf&&typeof n[0]!="number"&&(S=hT([0,100],n,{clamp:!1}),n=[0,100]);const C=b({...h,keyframes:n});let E;a==="mirror"&&(E=b({...h,keyframes:[...n].reverse(),velocity:-(h.velocity||0)}));let k="idle",P=null,$=null,j=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=uw(C));const{calculatedDuration:M}=C;let q=1/0,K=1/0;M!==null&&(q=M+s,K=q*(o+1)-s);let Y=0;const ee=z=>{if($===null)return;p>0&&($=Math.min($,z)),p<0&&($=Math.min(z-K/p,$)),P!==null?Y=P:Y=Math.round(z-$)*p;const B=Y-t*(p>=0?1:-1),V=p>=0?B<0:B>K;Y=Math.max(B,0),k==="finished"&&P===null&&(Y=K);let ne=Y,xe=C;if(o){const Ee=Math.min(Y,K)/q;let st=Math.floor(Ee),We=Ee%1;!We&&Ee>=1&&(We=1),We===1&&st--,st=Math.min(st,o+1),!!(st%2)&&(a==="reverse"?(We=1-We,s&&(We-=s/q)):a==="mirror"&&(xe=E)),ne=zi(0,1,We)*q}const se=V?{done:!1,value:n[0]}:xe.next(ne);S&&(se.value=S(se.value));let{done:De}=se;!V&&M!==null&&(De=p>=0?Y>=K:Y<=0);const Me=P===null&&(k==="finished"||k==="running"&&De);return f&&f(se.value),Me&&L(),se},F=()=>{m&&m.stop(),m=void 0},G=()=>{k="idle",F(),y(),g(),$=j=null},L=()=>{k="finished",u&&u(),F(),y()},A=()=>{if(v)return;m||(m=r(ee));const z=m.now();l&&l(),P!==null?$=z-P:(!$||k==="finished")&&($=z),k==="finished"&&g(),j=$,P=null,k="running",m.start()};e&&A();const O={then(z,B){return x.then(z,B)},get time(){return zn(Y)},set time(z){z=So(z),Y=z,P!==null||!m||p===0?P=z:$=m.now()-z/p},get duration(){const z=C.calculatedDuration===null?uw(C):C.calculatedDuration;return zn(z)},get speed(){return p},set speed(z){z===p||!m||(p=z,O.time=zn(Y))},get state(){return k},play:A,pause:()=>{k="paused",P=Y},stop:()=>{v=!0,k!=="idle"&&(k="idle",c&&c(),G())},cancel:()=>{j!==null&&ee(j),G()},complete:()=>{k="finished"},sample:z=>($=0,ee(z))};return O}function uV(e){let t;return()=>(t===void 0&&(t=e()),t)}const dV=uV(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fV=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),yu=10,hV=2e4,pV=(e,t)=>t.type==="spring"||e==="backgroundColor"||!qE(t.ease);function mV(e,t,{onUpdate:r,onComplete:n,...i}){if(!(dV()&&fV.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const u=()=>{l=new Promise(b=>{a=b})};u();let{keyframes:f,duration:h=300,ease:p,times:v}=i;if(pV(t,i)){const b=of({...i,repeat:0,delay:0});let S={done:!1,value:f[0]};const C=[];let E=0;for(;!S.done&&E<hV;)S=b.sample(E),C.push(S.value),E+=yu;v=void 0,f=C,h=E-yu,p="linear"}const y=kB(e.owner.current,t,f,{...i,duration:h,ease:p,times:v}),x=()=>{c=!1,y.cancel()},g=()=>{c=!0,Pe.update(x),a(),u()};return y.onfinish=()=>{c||(e.set(CB(f,i)),n&&n(),g())},{then(b,S){return l.then(b,S)},attachTimeline(b){return y.timeline=b,y.onfinish=null,Ye},get time(){return zn(y.currentTime||0)},set time(b){y.currentTime=So(b)},get speed(){return y.playbackRate},set speed(b){y.playbackRate=b},get duration(){return zn(h)},play:()=>{s||(y.play(),Un(x))},pause:()=>y.pause(),stop:()=>{if(s=!0,y.playState==="idle")return;const{currentTime:b}=y;if(b){const S=of({...i,autoplay:!1});e.setWithVelocity(S.sample(b-yu).value,S.sample(b).value,yu)}g()},complete:()=>{c||y.finish()},cancel:g}}function gV({keyframes:e,delay:t,onUpdate:r,onComplete:n}){const i=()=>(r&&r(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:Ye,pause:Ye,stop:Ye,then:o=>(o(),Promise.resolve()),cancel:Ye,complete:Ye});return t?of({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const vV={type:"spring",stiffness:500,damping:25,restSpeed:10},yV=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bV={type:"keyframes",duration:.8},xV={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wV=(e,{keyframes:t})=>t.length>2?bV:Do.has(e)?e.startsWith("scale")?yV(t[1]):vV:xV,Wg=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Di.test(t)||t==="0")&&!t.startsWith("url(")),SV=new Set(["brightness","contrast","saturate","opacity"]);function _V(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=r.match(Sh)||[];if(!n)return e;const i=r.replace(n,"");let o=SV.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+i+")"}const kV=/([a-z-]*)\(.*?\)/g,Hg={...Di,getAnimatableNone:e=>{const t=e.match(kV);return t?t.map(_V).join(" "):e}},CV={...RE,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:Hg,WebkitFilter:Hg},cy=e=>CV[e];function vT(e,t){let r=cy(e);return r!==Hg&&(r=Di),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const yT=e=>/^0[^.\s]+$/.test(e);function EV(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||yT(e)}function TV(e,t,r,n){const i=Wg(t,r);let o;Array.isArray(r)?o=[...r]:o=[null,r];const s=n.from!==void 0?n.from:e.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?s:o[c-1]),EV(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];o[u]=vT(t,a)}return o}function PV({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function uy(e,t){return e[t]||e.default||e}const IV={skipAnimations:!1},dy=(e,t,r,n={})=>i=>{const o=uy(n,e)||{},s=o.delay||n.delay||0;let{elapsed:a=0}=n;a=a-So(s);const l=TV(t,e,r,o),c=l[0],u=l[l.length-1],f=Wg(e,c),h=Wg(e,u);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(PV(o)||(p={...p,...wV(e,p)}),p.duration&&(p.duration=So(p.duration)),p.repeatDelay&&(p.repeatDelay=So(p.repeatDelay)),!f||!h||_B.current||o.type===!1||IV.skipAnimations)return gV(p);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=mV(t,e,p);if(v)return v}return of(p)};function sf(e){return!!(Yt(e)&&e.add)}const bT=e=>/^\-?\d*\.?\d+$/.test(e);function fy(e,t){e.indexOf(t)===-1&&e.push(t)}function hy(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class py{constructor(){this.subscriptions=[]}add(t){return fy(this.subscriptions,t),()=>hy(this.subscriptions,t)}notify(t,r,n){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,r,n);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const RV=e=>!isNaN(parseFloat(e));class AV{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,i=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=Ct;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,Pe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Pe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=RV(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new py);const n=this.events[t].add(r);return t==="change"?()=>{n(),Pe.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,n){this.set(r),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?pT(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ys(e,t){return new AV(e,t)}const xT=e=>t=>t.test(e),jV={test:e=>e==="auto",parse:e=>e},wT=[Mo,Z,an,ni,MF,DF,jV],Aa=e=>wT.find(xT(e)),$V=[...wT,jt,Di],OV=e=>$V.find(xT(e));function NV(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Ys(r))}function LV(e,t){const r=kh(e,t);let{transitionEnd:n={},transition:i={},...o}=r?e.makeTargetAnimatable(r,!1):{};o={...o,...n};for(const s in o){const a=ZF(o[s]);NV(e,s,a)}}function zV(e,t,r){var n,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(n=r[l])!==null&&n!==void 0?n:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(bT(u)||yT(u))?u=parseFloat(u):!OV(u)&&Di.test(c)&&(u=vT(l,c)),e.addValue(l,Ys(u,{owner:e})),r[l]===void 0&&(r[l]=u),u!==null&&e.setBaseTarget(l,u))}}function DV(e,t){return t?(t[e]||t.default||t).from:void 0}function MV(e,t,r){const n={};for(const i in e){const o=DV(i,t);if(o!==void 0)n[i]=o;else{const s=r.getValue(i);s&&(n[i]=s.get())}}return n}function FV({protectedKeys:e,needsAnimating:t},r){const n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function BV(e,t){const r=e.get();if(Array.isArray(t)){for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}else return r!==t}function ST(e,t,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");n&&(o=n);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),p=a[f];if(!h||p===void 0||u&&FV(u,f))continue;const v={delay:r,elapsed:0,...uy(o||{},f)};if(window.HandoffAppearAnimations){const g=e.getProps()[_E];if(g){const m=window.HandoffAppearAnimations(g,f,h,Pe);m!==null&&(v.elapsed=m,v.isHandoff=!0)}}let y=!v.isHandoff&&!BV(h,p);if(v.type==="spring"&&(h.getVelocity()||v.velocity)&&(y=!1),h.animation&&(y=!1),y)continue;h.start(dy(f,h,p,e.shouldReduceMotion&&Do.has(f)?{type:!1}:v));const x=h.animation;sf(l)&&(l.add(f),x.then(()=>l.remove(f))),c.push(x)}return s&&Promise.all(c).then(()=>{s&&LV(e,s)}),c}function Gg(e,t,r={}){const n=kh(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const o=n?()=>Promise.all(ST(e,n,r)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=i;return VV(e,t,c+l,u,f,r)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>c())}else return Promise.all([o(),s(r.delay)])}function VV(e,t,r=0,n=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*n,l=i===1?(c=0)=>c*n:(c=0)=>a-c*n;return Array.from(e.variantChildren).sort(UV).forEach((c,u)=>{c.notify("AnimationStart",t),s.push(Gg(c,t,{...o,delay:r+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function UV(e,t){return e.sortNodePosition(t)}function WV(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const i=t.map(o=>Gg(e,o,r));n=Promise.all(i)}else if(typeof t=="string")n=Gg(e,t,r);else{const i=typeof t=="function"?kh(e,t,r.custom):t;n=Promise.all(ST(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}const HV=[...Yv].reverse(),GV=Yv.length;function qV(e){return t=>Promise.all(t.map(({animation:r,options:n})=>WV(e,r,n)))}function KV(e){let t=qV(e);const r=XV();let n=!0;const i=(l,c)=>{const u=kh(e,c);if(u){const{transition:f,transitionEnd:h,...p}=u;l={...l,...p,...h}}return l};function o(l){t=l(e)}function s(l,c){const u=e.getProps(),f=e.getVariantContext(!0)||{},h=[],p=new Set;let v={},y=1/0;for(let g=0;g<GV;g++){const m=HV[g],b=r[m],S=u[m]!==void 0?u[m]:f[m],C=Xl(S),E=m===c?b.isActive:null;E===!1&&(y=g);let k=S===f[m]&&S!==u[m]&&C;if(k&&n&&e.manuallyAnimateOnMount&&(k=!1),b.protectedKeys={...v},!b.isActive&&E===null||!S&&!b.prevProp||xh(S)||typeof S=="boolean")continue;let $=YV(b.prevProp,S)||m===c&&b.isActive&&!k&&C||g>y&&C,j=!1;const M=Array.isArray(S)?S:[S];let q=M.reduce(i,{});E===!1&&(q={});const{prevResolvedValues:K={}}=b,Y={...K,...q},ee=F=>{$=!0,p.has(F)&&(j=!0,p.delete(F)),b.needsAnimating[F]=!0};for(const F in Y){const G=q[F],L=K[F];if(v.hasOwnProperty(F))continue;let A=!1;tf(G)&&tf(L)?A=!HE(G,L):A=G!==L,A?G!==void 0?ee(F):p.add(F):G!==void 0&&p.has(F)?ee(F):b.protectedKeys[F]=!0}b.prevProp=S,b.prevResolvedValues=q,b.isActive&&(v={...v,...q}),n&&e.blockInitialAnimation&&($=!1),$&&(!k||j)&&h.push(...M.map(F=>({animation:F,options:{type:m,...l}})))}if(p.size){const g={};p.forEach(m=>{const b=e.getBaseTarget(m);b!==void 0&&(g[m]=b)}),h.push({animation:g})}let x=!!h.length;return n&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),n=!1,x?t(h):Promise.resolve()}function a(l,c,u){var f;if(r[l].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),r[l].isActive=c;const h=s(u,l);for(const p in r)r[p].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>r}}function YV(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!HE(t,e):!1}function Ji(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function XV(){return{animate:Ji(!0),whileInView:Ji(),whileHover:Ji(),whileTap:Ji(),whileDrag:Ji(),whileFocus:Ji(),exit:Ji()}}class QV extends Hi{constructor(t){super(t),t.animationState||(t.animationState=KV(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),xh(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let JV=0;class ZV extends Hi{constructor(){super(...arguments),this.id=JV++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:n??this.node.getProps().custom});r&&!t&&o.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const eU={animation:{Feature:QV},exit:{Feature:ZV}},dw=(e,t)=>Math.abs(e-t);function tU(e,t){const r=dw(e.x,t.x),n=dw(e.y,t.y);return Math.sqrt(r**2+n**2)}class _T{constructor(t,r,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=em(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=tU(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:v}=f,{timestamp:y}=Ct;this.history.push({...v,timestamp:y});const{onStart:x,onMove:g}=this.handlers;h||(x&&x(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Zp(h,this.transformPagePoint),Pe.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=em(f.type==="pointercancel"?this.lastMoveEventInfo:Zp(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,x),v&&v(f,x)},!FE(t))return;this.dragSnapToOrigin=o,this.handlers=r,this.transformPagePoint=n,this.contextWindow=i||window;const s=_h(t),a=Zp(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ct;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=r;u&&u(t,em(a,this.history)),this.removeListeners=Ai(Ln(this.contextWindow,"pointermove",this.handlePointerMove),Ln(this.contextWindow,"pointerup",this.handlePointerUp),Ln(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Un(this.updatePoint)}}function Zp(e,t){return t?{point:t(e.point)}:e}function fw(e,t){return{x:e.x-t.x,y:e.y-t.y}}function em({point:e},t){return{point:e,delta:fw(e,kT(t)),offset:fw(e,rU(t)),velocity:nU(t,.1)}}function rU(e){return e[0]}function kT(e){return e[e.length-1]}function nU(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=kT(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>So(t)));)r--;if(!n)return{x:0,y:0};const o=zn(i.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-n.x)/o,y:(i.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ar(e){return e.max-e.min}function qg(e,t=0,r=.01){return Math.abs(e-t)<=r}function hw(e,t,r,n=.5){e.origin=n,e.originPoint=Be(t.min,t.max,e.origin),e.scale=ar(r)/ar(t),(qg(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Be(r.min,r.max,e.origin)-e.originPoint,(qg(e.translate)||isNaN(e.translate))&&(e.translate=0)}function hl(e,t,r,n){hw(e.x,t.x,r.x,n?n.originX:void 0),hw(e.y,t.y,r.y,n?n.originY:void 0)}function pw(e,t,r){e.min=r.min+t.min,e.max=e.min+ar(t)}function iU(e,t,r){pw(e.x,t.x,r.x),pw(e.y,t.y,r.y)}function mw(e,t,r){e.min=t.min-r.min,e.max=e.min+ar(t)}function pl(e,t,r){mw(e.x,t.x,r.x),mw(e.y,t.y,r.y)}function oU(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?Be(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?Be(r,e,n.max):Math.min(e,r)),e}function gw(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function sU(e,{top:t,left:r,bottom:n,right:i}){return{x:gw(e.x,r,i),y:gw(e.y,t,n)}}function vw(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function aU(e,t){return{x:vw(e.x,t.x),y:vw(e.y,t.y)}}function lU(e,t){let r=.5;const n=ar(e),i=ar(t);return i>n?r=Jl(t.min,t.max-n,e.min):n>i&&(r=Jl(e.min,e.max-i,t.min)),zi(0,1,r)}function cU(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Kg=.35;function uU(e=Kg){return e===!1?e=0:e===!0&&(e=Kg),{x:yw(e,"left","right"),y:yw(e,"top","bottom")}}function yw(e,t,r){return{min:bw(e,t),max:bw(e,r)}}function bw(e,t){return typeof e=="number"?e:e[t]||0}const xw=()=>({translate:0,scale:1,origin:0,originPoint:0}),gs=()=>({x:xw(),y:xw()}),ww=()=>({min:0,max:0}),Qe=()=>({x:ww(),y:ww()});function vr(e){return[e("x"),e("y")]}function CT({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function dU({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function fU(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function tm(e){return e===void 0||e===1}function Yg({scale:e,scaleX:t,scaleY:r}){return!tm(e)||!tm(t)||!tm(r)}function ro(e){return Yg(e)||ET(e)||e.z||e.rotate||e.rotateX||e.rotateY}function ET(e){return Sw(e.x)||Sw(e.y)}function Sw(e){return e&&e!=="0%"}function af(e,t,r){const n=e-r,i=t*n;return r+i}function _w(e,t,r,n,i){return i!==void 0&&(e=af(e,i,n)),af(e,r,n)+t}function Xg(e,t=0,r=1,n,i){e.min=_w(e.min,t,r,n,i),e.max=_w(e.max,t,r,n,i)}function TT(e,{x:t,y:r}){Xg(e.x,t.translate,t.scale,t.originPoint),Xg(e.y,r.translate,r.scale,r.originPoint)}function hU(e,t,r,n=!1){const i=r.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=r[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&vs(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,TT(e,s)),n&&ro(o.latestValues)&&vs(e,o.latestValues))}t.x=kw(t.x),t.y=kw(t.y)}function kw(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function li(e,t){e.min=e.min+t,e.max=e.max+t}function Cw(e,t,[r,n,i]){const o=t[i]!==void 0?t[i]:.5,s=Be(e.min,e.max,o);Xg(e,t[r],t[n],s,t.scale)}const pU=["x","scaleX","originX"],mU=["y","scaleY","originY"];function vs(e,t){Cw(e.x,t,pU),Cw(e.y,t,mU)}function PT(e,t){return CT(fU(e.getBoundingClientRect(),t))}function gU(e,t,r){const n=PT(e,r),{scroll:i}=t;return i&&(li(n.x,i.offset.x),li(n.y,i.offset.y)),n}const IT=({current:e})=>e?e.ownerDocument.defaultView:null,vU=new WeakMap;class yU{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(_h(u,"page").point)},o=(u,f)=>{const{drag:h,dragPropagation:p,onDragStart:v}=this.getProps();if(h&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=VE(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vr(x=>{let g=this.getAxisMotionValue(x).get()||0;if(an.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const b=m.layout.layoutBox[x];b&&(g=ar(b)*(parseFloat(g)/100))}}this.originPoint[x]=g}),v&&Pe.update(()=>v(u,f),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},s=(u,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:x}=f;if(p&&this.currentDirection===null){this.currentDirection=bU(x),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,x),this.updateAxis("y",f.point,x),this.visualElement.render(),y&&y(u,f)},a=(u,f)=>this.stop(u,f),l=()=>vr(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new _T(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:IT(this.visualElement)})}stop(t,r){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=r;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&Pe.update(()=>o(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,n){const{drag:i}=this.getProps();if(!n||!bu(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(s=oU(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;r&&ps(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&i?this.constraints=sU(i.layoutBox,r):this.constraints=!1,this.elastic=uU(n),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&vr(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=cU(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!ps(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=gU(n,i.root,this.visualElement.getTransformPagePoint());let s=aU(i.layout.layoutBox,o);if(r){const a=r(dU(s));this.hasMutatedConstraints=!!a,a&&(s=CT(a))}return s}startAnimation(t){const{drag:r,dragMomentum:n,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=vr(u=>{if(!bu(u,r,this.currentDirection))return;let f=l&&l[u]||{};s&&(f={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,v={type:"inertia",velocity:n?t[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,r){const n=this.getAxisMotionValue(t);return n.start(dy(t,n,0,r))}stopAnimation(){vr(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){vr(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),i=n[r];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){vr(r=>{const{drag:n}=this.getProps();if(!bu(r,n,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(r);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[r];o.set(t[r]-Be(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!ps(r)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};vr(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=lU({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),vr(s=>{if(!bu(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(Be(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;vU.set(this.visualElement,this);const t=this.visualElement.current,r=Ln(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();ps(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",n);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),n();const s=Rn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(vr(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),r(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Kg,dragMomentum:a=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function bu(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function bU(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class xU extends Hi{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new yU(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ew=e=>(t,r)=>{e&&Pe.update(()=>e(t,r))};class wU extends Hi{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new _T(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:IT(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ew(t),onStart:Ew(r),onMove:n,onEnd:(o,s)=>{delete this.session,i&&Pe.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ln(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function SU(){const e=w.useContext(vc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:n}=e,i=w.useId();return w.useEffect(()=>n(i),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}function _U(){return kU(w.useContext(vc))}function kU(e){return e===null?!0:e.isPresent}const nd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tw(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ja={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Z.test(e))e=parseFloat(e);else return e;const r=Tw(e,t.target.x),n=Tw(e,t.target.y);return`${r}% ${n}%`}},CU={correct:(e,{treeScale:t,projectionDelta:r})=>{const n=e,i=Di.parse(e);if(i.length>5)return n;const o=Di.createTransformer(e),s=typeof i[0]!="number"?1:0,a=r.x.scale*t.x,l=r.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=Be(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}};class EU extends X.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:i}=this.props,{projection:o}=t;AF(TU),o&&(r.group&&r.group.add(o),n&&n.register&&i&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),nd.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:n,drag:i,isPresent:o}=this.props,s=n.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==r||r===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Pe.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function RT(e){const[t,r]=SU(),n=w.useContext(Qv);return X.createElement(EU,{...e,layoutGroup:n,switchLayoutGroup:w.useContext(CE),isPresent:t,safeToRemove:r})}const TU={borderRadius:{...ja,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ja,borderTopRightRadius:ja,borderBottomLeftRadius:ja,borderBottomRightRadius:ja,boxShadow:CU},AT=["TopLeft","TopRight","BottomLeft","BottomRight"],PU=AT.length,Pw=e=>typeof e=="string"?parseFloat(e):e,Iw=e=>typeof e=="number"||Z.test(e);function IU(e,t,r,n,i,o){i?(e.opacity=Be(0,r.opacity!==void 0?r.opacity:1,RU(n)),e.opacityExit=Be(t.opacity!==void 0?t.opacity:1,0,AU(n))):o&&(e.opacity=Be(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,n));for(let s=0;s<PU;s++){const a=`border${AT[s]}Radius`;let l=Rw(t,a),c=Rw(r,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Iw(l)===Iw(c)?(e[a]=Math.max(Be(Pw(l),Pw(c),n),0),(an.test(c)||an.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||r.rotate)&&(e.rotate=Be(t.rotate||0,r.rotate||0,n))}function Rw(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const RU=jT(0,.5,eT),AU=jT(.5,.95,Ye);function jT(e,t,r){return n=>n<e?0:n>t?1:r(Jl(e,t,n))}function Aw(e,t){e.min=t.min,e.max=t.max}function mr(e,t){Aw(e.x,t.x),Aw(e.y,t.y)}function jw(e,t,r,n,i){return e-=t,e=af(e,1/r,n),i!==void 0&&(e=af(e,1/i,n)),e}function jU(e,t=0,r=1,n=.5,i,o=e,s=e){if(an.test(t)&&(t=parseFloat(t),t=Be(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=Be(o.min,o.max,n);e===o&&(a-=t),e.min=jw(e.min,t,r,a,i),e.max=jw(e.max,t,r,a,i)}function $w(e,t,[r,n,i],o,s){jU(e,t[r],t[n],t[i],t.scale,o,s)}const $U=["x","scaleX","originX"],OU=["y","scaleY","originY"];function Ow(e,t,r,n){$w(e.x,t,$U,r?r.x:void 0,n?n.x:void 0),$w(e.y,t,OU,r?r.y:void 0,n?n.y:void 0)}function Nw(e){return e.translate===0&&e.scale===1}function $T(e){return Nw(e.x)&&Nw(e.y)}function NU(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function OT(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Lw(e){return ar(e.x)/ar(e.y)}class LU{constructor(){this.members=[]}add(t){fy(this.members,t),t.scheduleRender()}remove(t){if(hy(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(i=>t===i);if(r===0)return!1;let n;for(let i=r;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){n=o;break}}return n?(this.promote(n),!0):!1}promote(t,r){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,r&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:n}=t;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zw(e,t,r){let n="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(n=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:l,rotateX:c,rotateY:u}=r;l&&(n+=`rotate(${l}deg) `),c&&(n+=`rotateX(${c}deg) `),u&&(n+=`rotateY(${u}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(n+=`scale(${s}, ${a})`),n||"none"}const zU=(e,t)=>e.depth-t.depth;class DU{constructor(){this.children=[],this.isDirty=!1}add(t){fy(this.children,t),this.isDirty=!0}remove(t){hy(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(zU),this.isDirty=!1,this.children.forEach(t)}}function MU(e,t){const r=performance.now(),n=({timestamp:i})=>{const o=i-r;o>=t&&(Un(n),e(o-t))};return Pe.read(n,!0),()=>Un(n)}function FU(e){window.MotionDebug&&window.MotionDebug.record(e)}function BU(e){return e instanceof SVGElement&&e.tagName!=="svg"}function VU(e,t,r){const n=Yt(e)?e:Ys(e);return n.start(dy("",n,t,r)),n.animation}const Dw=["","X","Y","Z"],UU={visibility:"hidden"},Mw=1e3;let WU=0;const no={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function NT({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=WU++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,no.totalNodes=no.resolvedTargetDeltas=no.recalculatedProjection=0,this.nodes.forEach(qU),this.nodes.forEach(JU),this.nodes.forEach(ZU),this.nodes.forEach(KU),FU(no)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new DU)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new py),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=BU(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=MU(h,250),nd.hasAnimatedSinceResize&&(nd.hasAnimatedSinceResize=!1,this.nodes.forEach(Bw))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||iW,{onLayoutAnimationStart:x,onLayoutAnimationComplete:g}=u.getProps(),m=!this.targetLayout||!OT(this.targetLayout,v)||p,b=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,b);const S={...uy(y,"layout"),onPlay:x,onComplete:g};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else h||Bw(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Un(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(eW),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fw);return}this.isUpdating||this.nodes.forEach(XU),this.isUpdating=!1,this.nodes.forEach(QU),this.nodes.forEach(HU),this.nodes.forEach(GU),this.clearAllSnapshots();const a=performance.now();Ct.delta=zi(0,1e3/60,a-Ct.timestamp),Ct.timestamp=a,Ct.isProcessing=!0,Hp.update.process(Ct),Hp.preRender.process(Ct),Hp.render.process(Ct),Ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(YU),this.sharedNodes.forEach(tW)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Pe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Pe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!$T(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&(a||ro(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),oW(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Qe();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(li(a.x,l.offset.x),li(a.y,l.offset.y)),a}removeElementScroll(s){const a=Qe();mr(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){mr(a,s);const{scroll:h}=this.root;h&&(li(a.x,-h.offset.x),li(a.y,-h.offset.y))}li(a.x,u.offset.x),li(a.y,u.offset.y)}}return a}applyTransform(s,a=!1){const l=Qe();mr(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ro(u.latestValues)&&vs(l,u.latestValues)}return ro(this.latestValues)&&vs(l,this.latestValues),l}removeTransform(s){const a=Qe();mr(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ro(c.latestValues))continue;Yg(c.latestValues)&&c.updateSnapshot();const u=Qe(),f=c.measurePageBox();mr(u,f),Ow(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ro(this.latestValues)&&Ow(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Ct.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),pl(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),mr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iU(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mr(this.target,this.layout.layoutBox),TT(this.target,this.targetDelta)):mr(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),pl(this.relativeTargetOrigin,this.target,p.target),mr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}no.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yg(this.parent.latestValues)||ET(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ct.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;mr(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;hU(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=gs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=gs(),this.projectionDeltaWithTransform=gs());const y=this.projectionTransform;hl(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=zw(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==h||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),no.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=gs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Qe(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,x=this.getStack(),g=!x||x.members.length<=1,m=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(nW));this.animationProgress=0;let b;this.mixTargetDelta=S=>{const C=S/1e3;Vw(f.x,s.x,C),Vw(f.y,s.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pl(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),rW(this.relativeTarget,this.relativeTargetOrigin,h,C),b&&NU(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Qe()),mr(b,this.relativeTarget)),y&&(this.animationValues=u,IU(u,c,this.latestValues,C,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Un(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Pe.update(()=>{nd.hasAnimatedSinceResize=!0,this.currentAnimation=VU(0,Mw,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&LT(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Qe();const f=ar(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=ar(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}mr(a,l),vs(a,u),hl(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new LU),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<Dw.length;u++){const f="rotate"+Dw[u];l[f]&&(c[f]=l[f],s.setStaticValue(f,0))}s.render();for(const u in c)s.setStaticValue(u,c[u]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return UU;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=rd(s==null?void 0:s.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=rd(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!ro(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=zw(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Zd){if(h[y]===void 0)continue;const{correct:x,applyTo:g}=Zd[y],m=c.transform==="none"?h[y]:x(h[y],f);if(g){const b=g.length;for(let S=0;S<b;S++)c[g[S]]=m}else c[y]=m}return this.options.layoutId&&(c.pointerEvents=f===this?rd(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Fw),this.root.sharedNodes.clear()}}}function HU(e){e.updateLayout()}function GU(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:o}=e.options,s=r.source!==e.layout.source;o==="size"?vr(f=>{const h=s?r.measuredBox[f]:r.layoutBox[f],p=ar(h);h.min=n[f].min,h.max=h.min+p}):LT(o,r.layoutBox,n)&&vr(f=>{const h=s?r.measuredBox[f]:r.layoutBox[f],p=ar(n[f]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=gs();hl(a,n,r.layoutBox);const l=gs();s?hl(l,e.applyTransform(i,!0),r.measuredBox):hl(l,n,r.layoutBox);const c=!$T(a);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const v=Qe();pl(v,r.layoutBox,h.layoutBox);const y=Qe();pl(y,n,p.layoutBox),OT(v,y)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:r,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function qU(e){no.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function KU(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function YU(e){e.clearSnapshot()}function Fw(e){e.clearMeasurements()}function XU(e){e.isLayoutDirty=!1}function QU(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Bw(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function JU(e){e.resolveTargetDelta()}function ZU(e){e.calcProjection()}function eW(e){e.resetRotation()}function tW(e){e.removeLeadSnapshot()}function Vw(e,t,r){e.translate=Be(t.translate,0,r),e.scale=Be(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Uw(e,t,r,n){e.min=Be(t.min,r.min,n),e.max=Be(t.max,r.max,n)}function rW(e,t,r,n){Uw(e.x,t.x,r.x,n),Uw(e.y,t.y,r.y,n)}function nW(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const iW={duration:.45,ease:[.4,0,.1,1]},Ww=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Hw=Ww("applewebkit/")&&!Ww("chrome/")?Math.round:Ye;function Gw(e){e.min=Hw(e.min),e.max=Hw(e.max)}function oW(e){Gw(e.x),Gw(e.y)}function LT(e,t,r){return e==="position"||e==="preserve-aspect"&&!qg(Lw(t),Lw(r),.2)}const sW=NT({attachResizeListener:(e,t)=>Rn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rm={current:void 0},zT=NT({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rm.current){const e=new sW({});e.mount(window),e.setOptions({layoutScroll:!0}),rm.current=e}return rm.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),aW={pan:{Feature:wU},drag:{Feature:xU,ProjectionNode:zT,MeasureLayout:RT}},lW=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function cW(e){const t=lW.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}function Qg(e,t,r=1){const[n,i]=cW(e);if(!n)return;const o=window.getComputedStyle(t).getPropertyValue(n);if(o){const s=o.trim();return bT(s)?parseFloat(s):s}else return Fg(i)?Qg(i,t,r+1):i}function uW(e,{...t},r){const n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),e.values.forEach(i=>{const o=i.get();if(!Fg(o))return;const s=Qg(o,n);s&&i.set(s)});for(const i in t){const o=t[i];if(!Fg(o))continue;const s=Qg(o,n);s&&(t[i]=s,r||(r={}),r[i]===void 0&&(r[i]=o))}return{target:t,transitionEnd:r}}const dW=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),DT=e=>dW.has(e),fW=e=>Object.keys(e).some(DT),qw=e=>e===Mo||e===Z,Kw=(e,t)=>parseFloat(e.split(", ")[t]),Yw=(e,t)=>(r,{transform:n})=>{if(n==="none"||!n)return 0;const i=n.match(/^matrix3d\((.+)\)$/);if(i)return Kw(i[1],t);{const o=n.match(/^matrix\((.+)\)$/);return o?Kw(o[1],e):0}},hW=new Set(["x","y","z"]),pW=yc.filter(e=>!hW.has(e));function mW(e){const t=[];return pW.forEach(r=>{const n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Xs={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Yw(4,13),y:Yw(5,14)};Xs.translateX=Xs.x;Xs.translateY=Xs.y;const gW=(e,t,r)=>{const n=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),r.forEach(c=>{a[c]=Xs[c](n,o)}),t.render();const l=t.measureViewportBox();return r.forEach(c=>{const u=t.getValue(c);u&&u.jump(a[c]),e[c]=Xs[c](l,o)}),e},vW=(e,t,r={},n={})=>{t={...t},n={...n};const i=Object.keys(t).filter(DT);let o=[],s=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=r[l],f=Aa(u);const h=t[l];let p;if(tf(h)){const v=h.length,y=h[0]===null?1:0;u=h[y],f=Aa(u);for(let x=y;x<v&&h[x]!==null;x++)p?oy(Aa(h[x])===p):p=Aa(h[x])}else p=Aa(h);if(f!==p)if(qw(f)&&qw(p)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&p===Z&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(u===0||h===0)?u===0?c.set(p.transform(u)):t[l]=f.transform(h):(s||(o=mW(e),s=!0),a.push(l),n[l]=n[l]!==void 0?n[l]:t[l],c.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=gW(t,e,a);return o.length&&o.forEach(([u,f])=>{e.getValue(u).set(f)}),e.render(),bh&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:n}}else return{target:t,transitionEnd:n}};function yW(e,t,r,n){return fW(t)?vW(e,t,r,n):{target:t,transitionEnd:n}}const bW=(e,t,r,n)=>{const i=uW(e,t,n);return t=i.target,n=i.transitionEnd,yW(e,t,r,n)},Jg={current:null},MT={current:!1};function xW(){if(MT.current=!0,!!bh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Jg.current=e.matches;e.addListener(t),t()}else Jg.current=!1}function wW(e,t,r){const{willChange:n}=t;for(const i in t){const o=t[i],s=r[i];if(Yt(o))e.addValue(i,o),sf(n)&&n.add(i);else if(Yt(s))e.addValue(i,Ys(o,{owner:e})),sf(n)&&n.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Ys(a!==void 0?a:o,{owner:e}))}}for(const i in r)t[i]===void 0&&e.removeValue(i);return t}const Xw=new WeakMap,FT=Object.keys(Ql),SW=FT.length,Qw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],_W=Xv.length;class kW{constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Pe.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=r.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=wh(r),this.isVariantNode=kE(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(r,{});for(const f in u){const h=u[f];a[f]!==void 0&&Yt(h)&&(h.set(a[f],!1),sf(c)&&c.add(f))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,Xw.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),MT.current||xW(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xw.delete(this.current),this.projection&&this.projection.unmount(),Un(this.notifyUpdate),Un(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const n=Do.has(t),i=r.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Pe.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},n,i,o){let s,a;for(let l=0;l<SW;l++){const c=FT[l],{isEnabled:u,Feature:f,ProjectionNode:h,MeasureLayout:p}=Ql[c];h&&(s=h),u(r)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:h,layoutRoot:p}=r;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&ps(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:p})}return a}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Qw.length;n++){const i=Qw[n];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=wW(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const r={};for(let n=0;n<_W;n++){const i=Xv[n],o=this.props[i];(Xl(o)||o===!1)&&(r[i]=o)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=Ys(r,{owner:this}),this.addValue(t,n)),n}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:n}=this.props,i=typeof n=="string"||typeof n=="object"?(r=iy(this.props,n))===null||r===void 0?void 0:r[t]:void 0;if(n&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Yt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new py),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class BT extends kW{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...n},{transformValues:i},o){let s=MV(n,t||{},this);if(i&&(r&&(r=i(r)),n&&(n=i(n)),s&&(s=i(s))),o){zV(this,n,s);const a=bW(this,n,s,r);r=a.transitionEnd,n=a.target}return{transition:t,transitionEnd:r,...n}}}function CW(e){return window.getComputedStyle(e)}class EW extends BT{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(Do.has(r)){const n=cy(r);return n&&n.default||0}else{const n=CW(t),i=(PE(r)?n.getPropertyValue(r):n[r])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:r}){return PT(t,r)}build(t,r,n,i){Zv(t,r,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,r){return ny(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Yt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,n,i){OE(t,r,n,i)}}class TW extends BT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Do.has(r)){const n=cy(r);return n&&n.default||0}return r=NE.has(r)?r:Kv(r),t.getAttribute(r)}measureInstanceViewportBox(){return Qe()}scrapeMotionValuesFromProps(t,r){return zE(t,r)}build(t,r,n,i){ty(t,r,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,r,n,i){LE(t,r,n,i)}mount(t){this.isSVGTag=ry(t.tagName),super.mount(t)}}const PW=(e,t)=>Jv(e)?new TW(t,{enableHardwareAcceleration:!1}):new EW(t,{enableHardwareAcceleration:!0}),IW={layout:{ProjectionNode:zT,MeasureLayout:RT}},RW={...eU,...xB,...aW,...IW},VT=IF((e,t)=>aB(e,t,RW,PW));function UT(){const e=w.useRef(!1);return qv(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function AW(){const e=UT(),[t,r]=w.useState(0),n=w.useCallback(()=>{e.current&&r(t+1)},[t]);return[w.useCallback(()=>Pe.postRender(n),[n]),t]}class jW extends w.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=r.offsetHeight||0,n.width=r.offsetWidth||0,n.top=r.offsetTop,n.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function $W({children:e,isPresent:t}){const r=w.useId(),n=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0});return w.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!n.current||!o||!s)return;n.current.dataset.motionPopId=r;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),w.createElement(jW,{isPresent:t,childRef:n,sizeRef:i},w.cloneElement(e,{ref:n}))}const nm=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=DE(OW),l=w.useId(),c=w.useMemo(()=>({id:l,initial:t,isPresent:r,custom:i,onExitComplete:u=>{a.set(u,!0);for(const f of a.values())if(!f)return;n&&n()},register:u=>(a.set(u,!1),()=>a.delete(u))}),o?void 0:[r]);return w.useMemo(()=>{a.forEach((u,f)=>a.set(f,!1))},[r]),w.useEffect(()=>{!r&&!a.size&&n&&n()},[r]),s==="popLayout"&&(e=w.createElement($W,{isPresent:r},e)),w.createElement(vc.Provider,{value:c},e)};function OW(){return new Map}function NW(e){return w.useEffect(()=>()=>e(),[])}const io=e=>e.key||"";function LW(e,t){e.forEach(r=>{const n=io(r);t.set(n,r)})}function zW(e){const t=[];return w.Children.forEach(e,r=>{w.isValidElement(r)&&t.push(r)}),t}const DW=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=w.useContext(Qv).forceRender||AW()[0],l=UT(),c=zW(e);let u=c;const f=w.useRef(new Map).current,h=w.useRef(u),p=w.useRef(new Map).current,v=w.useRef(!0);if(qv(()=>{v.current=!1,LW(c,p),h.current=u}),NW(()=>{v.current=!0,p.clear(),f.clear()}),v.current)return w.createElement(w.Fragment,null,u.map(m=>w.createElement(nm,{key:io(m),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:o,mode:s},m)));u=[...u];const y=h.current.map(io),x=c.map(io),g=y.length;for(let m=0;m<g;m++){const b=y[m];x.indexOf(b)===-1&&!f.has(b)&&f.set(b,void 0)}return s==="wait"&&f.size&&(u=[]),f.forEach((m,b)=>{if(x.indexOf(b)!==-1)return;const S=p.get(b);if(!S)return;const C=y.indexOf(b);let E=m;if(!E){const k=()=>{f.delete(b);const P=Array.from(p.keys()).filter($=>!x.includes($));if(P.forEach($=>p.delete($)),h.current=c.filter($=>{const j=io($);return j===b||P.includes(j)}),!f.size){if(l.current===!1)return;a(),n&&n()}};E=w.createElement(nm,{key:io(S),isPresent:!1,onExitComplete:k,custom:t,presenceAffectsLayout:o,mode:s},S),f.set(b,E)}u.splice(C,0,E)}),u=u.map(m=>{const b=m.key;return f.has(b)?m:w.createElement(nm,{key:io(m),isPresent:!0,presenceAffectsLayout:o,mode:s},m)}),w.createElement(w.Fragment,null,f.size?u:u.map(m=>w.cloneElement(m)))};var MW={initial:e=>{const{position:t}=e,r=["top","bottom"].includes(t)?"y":"x";let n=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(n=1),{opacity:0,[r]:n*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},WT=w.memo(e=>{const{id:t,message:r,onCloseComplete:n,onRequestRemove:i,requestClose:o=!1,position:s="bottom",duration:a=5e3,containerStyle:l,motionVariants:c=MW,toastSpacing:u="0.5rem"}=e,[f,h]=w.useState(a),p=_U();Jd(()=>{p||n==null||n()},[p]),Jd(()=>{h(a)},[a]);const v=()=>h(null),y=()=>h(a),x=()=>{p&&i()};w.useEffect(()=>{p&&o&&i()},[p,o,i]),bF(x,f);const g=w.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:u,...l}),[l,u]),m=w.useMemo(()=>vF(s),[s]);return d.jsx(VT.div,{layout:!0,className:"chakra-toast",variants:c,initial:"initial",animate:"animate",exit:"exit",onHoverStart:v,onHoverEnd:y,custom:{position:s},style:m,children:d.jsx(Ce.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g,children:Pn(r,{id:t,onClose:x})})})});WT.displayName="ToastComponent";var Jw={path:d.jsxs("g",{stroke:"currentColor",strokeWidth:"1.5",children:[d.jsx("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),d.jsx("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),d.jsx("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Sc=Rt((e,t)=>{const{as:r,viewBox:n,color:i="currentColor",focusable:o=!1,children:s,className:a,__css:l,...c}=e,u=yt("chakra-icon",a),f=vh("Icon",e),h={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i,...l,...f},p={ref:t,focusable:o,className:u,__css:h},v=n??Jw.viewBox;if(r&&typeof r!="string")return d.jsx(Ce.svg,{as:r,...p,...c});const y=s??Jw.path;return d.jsx(Ce.svg,{verticalAlign:"middle",viewBox:v,...p,...c,children:y})});Sc.displayName="Icon";function FW(e){return d.jsx(Sc,{viewBox:"0 0 24 24",...e,children:d.jsx("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function BW(e){return d.jsx(Sc,{viewBox:"0 0 24 24",...e,children:d.jsx("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function Zw(e){return d.jsx(Sc,{viewBox:"0 0 24 24",...e,children:d.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var VW=DN({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),HT=Rt((e,t)=>{const r=vh("Spinner",e),{label:n="Loading...",thickness:i="2px",speed:o="0.45s",emptyColor:s="transparent",className:a,...l}=Wi(e),c=yt("chakra-spinner",a),u={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:s,borderLeftColor:s,animation:`${VW} ${o} linear infinite`,...r};return d.jsx(Ce.div,{ref:t,__css:u,className:c,...l,children:n&&d.jsx(Ce.span,{srOnly:!0,children:n})})});HT.displayName="Spinner";var[UW,my]=pn({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[WW,gy]=pn({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),GT={info:{icon:BW,colorScheme:"blue"},warning:{icon:Zw,colorScheme:"orange"},success:{icon:FW,colorScheme:"green"},error:{icon:Zw,colorScheme:"red"},loading:{icon:HT,colorScheme:"blue"}};function HW(e){return GT[e].colorScheme}function GW(e){return GT[e].icon}var qT=Rt(function(t,r){const n=gy(),{status:i}=my(),o={display:"inline",...n.description};return d.jsx(Ce.div,{ref:r,"data-status":i,...t,className:yt("chakra-alert__desc",t.className),__css:o})});qT.displayName="AlertDescription";function KT(e){const{status:t}=my(),r=GW(t),n=gy(),i=t==="loading"?n.spinner:n.icon;return d.jsx(Ce.span,{display:"inherit","data-status":t,...e,className:yt("chakra-alert__icon",e.className),__css:i,children:e.children||d.jsx(r,{h:"100%",w:"100%"})})}KT.displayName="AlertIcon";var YT=Rt(function(t,r){const n=gy(),{status:i}=my();return d.jsx(Ce.div,{ref:r,"data-status":i,...t,className:yt("chakra-alert__title",t.className),__css:n.title})});YT.displayName="AlertTitle";var XT=Rt(function(t,r){var n;const{status:i="info",addRole:o=!0,...s}=Wi(t),a=(n=t.colorScheme)!=null?n:HW(i),l=gc("Alert",{...t,colorScheme:a}),c={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...l.container};return d.jsx(UW,{value:{status:i},children:d.jsx(WW,{value:l,children:d.jsx(Ce.div,{"data-status":i,role:o?"alert":void 0,ref:r,...s,className:yt("chakra-alert",t.className),__css:c})})})});XT.displayName="Alert";function qW(e){return d.jsx(Sc,{focusable:"false","aria-hidden":!0,...e,children:d.jsx("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var QT=Rt(function(t,r){const n=vh("CloseButton",t),{children:i,isDisabled:o,__css:s,...a}=Wi(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return d.jsx(Ce.button,{type:"button","aria-label":"Close",ref:r,disabled:o,__css:{...l,...n,...s},...a,children:i||d.jsx(qW,{width:"1em",height:"1em"})})});QT.displayName="CloseButton";var KW={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},ml=YW(KW);function YW(e){let t=e;const r=new Set,n=i=>{t=i(t),r.forEach(o=>o())};return{getState:()=>t,subscribe:i=>(r.add(i),()=>{n(()=>e),r.delete(i)}),removeToast:(i,o)=>{n(s=>({...s,[o]:s[o].filter(a=>a.id!=i)}))},notify:(i,o)=>{const s=XW(i,o),{position:a,id:l}=s;return n(c=>{var u,f;const p=a.includes("top")?[s,...(u=c[a])!=null?u:[]]:[...(f=c[a])!=null?f:[],s];return{...c,[a]:p}}),l},update:(i,o)=>{i&&n(s=>{const a={...s},{position:l,index:c}=Kx(a,i);return l&&c!==-1&&(a[l][c]={...a[l][c],...o,message:JW(o)}),a})},closeAll:({positions:i}={})=>{n(o=>(i??["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce((l,c)=>(l[c]=o[c].map(u=>({...u,requestClose:!0})),l),{...o}))},close:i=>{n(o=>{const s=xE(o,i);return s?{...o,[s]:o[s].map(a=>a.id==i?{...a,requestClose:!0}:a)}:o})},isActive:i=>!!Kx(ml.getState(),i).position}}var eS=0;function XW(e,t={}){var r,n;eS+=1;const i=(r=t.id)!=null?r:eS,o=(n=t.position)!=null?n:"bottom";return{id:i,message:e,position:o,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>ml.removeToast(String(i),o),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var QW=e=>{const{status:t,variant:r="solid",id:n,title:i,isClosable:o,onClose:s,description:a,colorScheme:l,icon:c}=e,u=n?{root:`toast-${n}`,title:`toast-${n}-title`,description:`toast-${n}-description`}:void 0;return d.jsxs(XT,{addRole:!1,status:t,variant:r,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:l,children:[d.jsx(KT,{children:c}),d.jsxs(Ce.div,{flex:"1",maxWidth:"100%",children:[i&&d.jsx(YT,{id:u==null?void 0:u.title,children:i}),a&&d.jsx(qT,{id:u==null?void 0:u.description,display:"block",children:a})]}),o&&d.jsx(QT,{size:"sm",onClick:s,position:"absolute",insetEnd:1,top:1})]})};function JW(e={}){const{render:t,toastComponent:r=QW}=e;return i=>typeof t=="function"?t({...i,...e}):d.jsx(r,{...i,...e})}var[ZW,AQ]=pn({name:"ToastOptionsContext",strict:!1}),eH=e=>{const t=w.useSyncExternalStore(ml.subscribe,ml.getState,ml.getState),{motionVariants:r,component:n=WT,portalProps:i}=e,s=Object.keys(t).map(a=>{const l=t[a];return d.jsx("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${a}`,id:`chakra-toast-manager-${a}`,style:yF(a),children:d.jsx(DW,{initial:!1,children:l.map(c=>d.jsx(n,{motionVariants:r,...c},c.id))})},a)});return d.jsx(fh,{...i,children:s})},tH=e=>function({children:r,theme:n=e,toastOptions:i,...o}){return d.jsxs(mF,{theme:n,...o,children:[d.jsx(ZW,{value:i==null?void 0:i.defaultOptions,children:r}),d.jsx(eH,{...i})]})},rH=tH(dE);function nH(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function kn(...e){return t=>{e.forEach(r=>{nH(r,t)})}}var[iH,oH]=pn({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function sH(e){var t;const r=e.split(" "),n=(t=r[0])!=null?t:"",i=r.length>1?r[r.length-1]:"";return n&&i?`${n.charAt(0)}${i.charAt(0)}`:n.charAt(0)}function JT(e){const{name:t,getInitials:r,...n}=e,i=oH();return d.jsx(Ce.div,{role:"img","aria-label":t,...n,__css:i.label,children:t?r==null?void 0:r(t):null})}JT.displayName="AvatarName";var ZT=e=>d.jsxs(Ce.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[d.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),d.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function aH(e){const{loading:t,src:r,srcSet:n,onLoad:i,onError:o,crossOrigin:s,sizes:a,ignoreFallback:l}=e,[c,u]=w.useState("pending");w.useEffect(()=>{u(r?"loading":"pending")},[r]);const f=w.useRef(),h=w.useCallback(()=>{if(!r)return;p();const v=new Image;v.src=r,s&&(v.crossOrigin=s),n&&(v.srcset=n),a&&(v.sizes=a),t&&(v.loading=t),v.onload=y=>{p(),u("loaded"),i==null||i(y)},v.onerror=y=>{p(),u("failed"),o==null||o(y)},f.current=v},[r,s,n,a,i,o,t]),p=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return Gs(()=>{if(!l)return c==="loading"&&h(),()=>{p()}},[c,h,l]),l?"loaded":c}function e5(e){const{src:t,srcSet:r,onError:n,onLoad:i,getInitials:o,name:s,borderRadius:a,loading:l,iconLabel:c,icon:u=d.jsx(ZT,{}),ignoreFallback:f,referrerPolicy:h,crossOrigin:p}=e,y=aH({src:t,onError:n,crossOrigin:p,ignoreFallback:f})==="loaded";return!t||!y?s?d.jsx(JT,{className:"chakra-avatar__initials",getInitials:o,name:s}):w.cloneElement(u,{role:"img","aria-label":c}):d.jsx(Ce.img,{src:t,srcSet:r,alt:s,onLoad:i,referrerPolicy:h,crossOrigin:p??void 0,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:a}})}e5.displayName="AvatarImage";var lH={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},Zg=Rt((e,t)=>{const r=gc("Avatar",e),[n,i]=w.useState(!1),{src:o,srcSet:s,name:a,showBorder:l,borderRadius:c="full",onError:u,onLoad:f,getInitials:h=sH,icon:p=d.jsx(ZT,{}),iconLabel:v=" avatar",loading:y,children:x,borderColor:g,ignoreFallback:m,crossOrigin:b,referrerPolicy:S,...C}=Wi(e),E={borderRadius:c,borderWidth:l?"2px":void 0,...lH,...r.container};return g&&(E.borderColor=g),d.jsx(Ce.span,{ref:t,...C,className:yt("chakra-avatar",e.className),"data-loaded":vn(n),__css:E,children:d.jsxs(iH,{value:r,children:[d.jsx(e5,{src:o,srcSet:s,loading:y,onLoad:Zt(f,()=>{i(!0)}),onError:u,getInitials:h,name:a,borderRadius:c,icon:p,iconLabel:v,ignoreFallback:m,crossOrigin:b,referrerPolicy:S}),x]})})});Zg.displayName="Avatar";var[cH,t5]=pn({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[uH,Ch]=pn({strict:!1,name:"FormControlContext"});function dH(e){const{id:t,isRequired:r,isInvalid:n,isDisabled:i,isReadOnly:o,...s}=e,a=w.useId(),l=t||`field-${a}`,c=`${l}-label`,u=`${l}-feedback`,f=`${l}-helptext`,[h,p]=w.useState(!1),[v,y]=w.useState(!1),[x,g]=w.useState(!1),m=w.useCallback((k={},P=null)=>({id:f,...k,ref:kn(P,$=>{$&&y(!0)})}),[f]),b=w.useCallback((k={},P=null)=>({...k,ref:P,"data-focus":vn(x),"data-disabled":vn(i),"data-invalid":vn(n),"data-readonly":vn(o),id:k.id!==void 0?k.id:c,htmlFor:k.htmlFor!==void 0?k.htmlFor:l}),[l,i,x,n,o,c]),S=w.useCallback((k={},P=null)=>({id:u,...k,ref:kn(P,$=>{$&&p(!0)}),"aria-live":"polite"}),[u]),C=w.useCallback((k={},P=null)=>({...k,...s,ref:P,role:"group","data-focus":vn(x),"data-disabled":vn(i),"data-invalid":vn(n),"data-readonly":vn(o)}),[s,i,x,n,o]),E=w.useCallback((k={},P=null)=>({...k,ref:P,role:"presentation","aria-hidden":!0,children:k.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!o,isDisabled:!!i,isFocused:!!x,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:h,setHasFeedbackText:p,hasHelpText:v,setHasHelpText:y,id:l,labelId:c,feedbackId:u,helpTextId:f,htmlProps:s,getHelpTextProps:m,getErrorMessageProps:S,getRootProps:C,getLabelProps:b,getRequiredIndicatorProps:E}}var ii=Rt(function(t,r){const n=gc("Form",t),i=Wi(t),{getRootProps:o,htmlProps:s,...a}=dH(i),l=yt("chakra-form-control",t.className);return d.jsx(uH,{value:a,children:d.jsx(cH,{value:n,children:d.jsx(Ce.div,{...o({},r),className:l,__css:n.container})})})});ii.displayName="FormControl";var fH=Rt(function(t,r){const n=Ch(),i=t5(),o=yt("chakra-form__helper-text",t.className);return d.jsx(Ce.div,{...n==null?void 0:n.getHelpTextProps(t,r),__css:i.helperText,className:o})});fH.displayName="FormHelperText";var oi=Rt(function(t,r){var n;const i=vh("FormLabel",t),o=Wi(t),{className:s,children:a,requiredIndicator:l=d.jsx(r5,{}),optionalIndicator:c=null,...u}=o,f=Ch(),h=(n=f==null?void 0:f.getLabelProps(u,r))!=null?n:{ref:r,...u};return d.jsxs(Ce.label,{...h,className:yt("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...i},children:[a,f!=null&&f.isRequired?l:c]})});oi.displayName="FormLabel";var r5=Rt(function(t,r){const n=Ch(),i=t5();if(!(n!=null&&n.isRequired))return null;const o=yt("chakra-form__required-indicator",t.className);return d.jsx(Ce.span,{...n==null?void 0:n.getRequiredIndicatorProps(t,r),__css:i.requiredIndicator,className:o})});r5.displayName="RequiredIndicator";function hH(e){const{isDisabled:t,isInvalid:r,isReadOnly:n,isRequired:i,...o}=pH(e);return{...o,disabled:t,readOnly:n,required:i,"aria-invalid":Ep(r),"aria-required":Ep(i),"aria-readonly":Ep(n)}}function pH(e){var t,r,n;const i=Ch(),{id:o,disabled:s,readOnly:a,required:l,isRequired:c,isInvalid:u,isReadOnly:f,isDisabled:h,onFocus:p,onBlur:v,...y}=e,x=e["aria-describedby"]?[e["aria-describedby"]]:[];return i!=null&&i.hasFeedbackText&&(i!=null&&i.isInvalid)&&x.push(i.feedbackId),i!=null&&i.hasHelpText&&x.push(i.helpTextId),{...y,"aria-describedby":x.join(" ")||void 0,id:o??(i==null?void 0:i.id),isDisabled:(t=s??h)!=null?t:i==null?void 0:i.isDisabled,isReadOnly:(r=a??f)!=null?r:i==null?void 0:i.isReadOnly,isRequired:(n=l??c)!=null?n:i==null?void 0:i.isRequired,isInvalid:u??(i==null?void 0:i.isInvalid),onFocus:Zt(i==null?void 0:i.onFocus,p),onBlur:Zt(i==null?void 0:i.onBlur,v)}}function vy(e,t,r,n){const i=Qd(r);return w.useEffect(()=>{const o=typeof e=="function"?e():e??document;if(!(!r||!o))return o.addEventListener(t,i,n),()=>{o.removeEventListener(t,i,n)}},[t,e,n,i,r]),()=>{const o=typeof e=="function"?e():e??document;o==null||o.removeEventListener(t,i,n)}}function mH(e){return"current"in e}var n5=()=>typeof window<"u";function gH(){var e;const t=navigator.userAgentData;return(e=t==null?void 0:t.platform)!=null?e:navigator.platform}var vH=e=>n5()&&e.test(navigator.vendor),yH=e=>n5()&&e.test(gH()),bH=()=>yH(/mac|iphone|ipad|ipod/i),xH=()=>bH()&&vH(/apple/i);function wH(e){const{ref:t,elements:r,enabled:n}=e,i=()=>{var o,s;return(s=(o=t.current)==null?void 0:o.ownerDocument)!=null?s:document};vy(i,"pointerdown",o=>{if(!xH()||!n)return;const s=o.target,l=(r??[t]).some(c=>{const u=mH(c)?c.current:c;return(u==null?void 0:u.contains(s))||u===s});i().activeElement!==s&&l&&(o.preventDefault(),s.focus())})}function yy(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function i5(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function o5(e){var t;if(!i5(e))return!1;const r=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof r.HTMLElement}function SH(e){var t,r;return(r=(t=s5(e))==null?void 0:t.defaultView)!=null?r:window}function s5(e){return i5(e)?e.ownerDocument:document}function _H(e){return s5(e).activeElement}var a5=e=>e.hasAttribute("tabindex"),kH=e=>a5(e)&&e.tabIndex===-1;function CH(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function l5(e){return e.parentElement&&l5(e.parentElement)?!0:e.hidden}function EH(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function c5(e){if(!o5(e)||l5(e)||CH(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():EH(e)?!0:a5(e)}function TH(e){return e?o5(e)&&c5(e)&&!kH(e):!1}var PH=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],IH=PH.join(),RH=e=>e.offsetWidth>0&&e.offsetHeight>0;function AH(e){const t=Array.from(e.querySelectorAll(IH));return t.unshift(e),t.filter(r=>c5(r)&&RH(r))}var xn=Rt(function(t,r){const{htmlSize:n,...i}=t,o=gc("Input",i),s=Wi(i),a=hH(s),l=yt("chakra-input",t.className);return d.jsx(Ce.input,{size:n,...a,__css:o.field,ref:r,className:l})});xn.displayName="Input";xn.id="Input";function jH(e){const t=e.current;if(!t)return!1;const r=_H(t);return!r||t.contains(r)?!1:!!TH(r)}function $H(e,t){const{shouldFocus:r,visible:n,focusRef:i}=t,o=r&&!n;Jd(()=>{if(!o||jH(e))return;const s=(i==null?void 0:i.current)||e.current;let a;if(s)return a=requestAnimationFrame(()=>{s.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(a)}},[o,e,i])}var OH={preventScroll:!0,shouldFocus:!1};function NH(e,t=OH){const{focusRef:r,preventScroll:n,shouldFocus:i,visible:o}=t,s=LH(e)?e.current:e,a=i&&o,l=w.useRef(a),c=w.useRef(o);Gs(()=>{!c.current&&o&&(l.current=a),c.current=o},[o,a]);const u=w.useCallback(()=>{if(!(!o||!s||!l.current)&&(l.current=!1,!s.contains(document.activeElement)))if(r!=null&&r.current)requestAnimationFrame(()=>{var f;(f=r.current)==null||f.focus({preventScroll:n})});else{const f=AH(s);f.length>0&&requestAnimationFrame(()=>{f[0].focus({preventScroll:n})})}},[o,n,s,r]);Jd(()=>{u()},[u]),vy(s,"transitionend",u)}function LH(e){return"current"in e}var qo=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),Tt={arrowShadowColor:qo("--popper-arrow-shadow-color"),arrowSize:qo("--popper-arrow-size","8px"),arrowSizeHalf:qo("--popper-arrow-size-half"),arrowBg:qo("--popper-arrow-bg"),transformOrigin:qo("--popper-transform-origin"),arrowOffset:qo("--popper-arrow-offset")};function zH(e){if(e.includes("top"))return"1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 0px 0 var(--popper-arrow-shadow-color)"}var DH={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},MH=e=>DH[e],tS={scroll:!0,resize:!0};function FH(e){let t;return typeof e=="object"?t={enabled:!0,options:{...tS,...e}}:t={enabled:e,options:tS},t}var BH={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},VH={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{rS(e)},effect:({state:e})=>()=>{rS(e)}},rS=e=>{e.elements.popper.style.setProperty(Tt.transformOrigin.var,MH(e.placement))},UH={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{WH(e)}},WH=e=>{var t;if(!e.placement)return;const r=HH(e.placement);if((t=e.elements)!=null&&t.arrow&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:Tt.arrowSize.varRef,height:Tt.arrowSize.varRef,zIndex:-1});const n={[Tt.arrowSizeHalf.var]:`calc(${Tt.arrowSize.varRef} / 2 - 1px)`,[Tt.arrowOffset.var]:`calc(${Tt.arrowSizeHalf.varRef} * -1)`};for(const i in n)e.elements.arrow.style.setProperty(i,n[i])}},HH=e=>{if(e.startsWith("top"))return{property:"bottom",value:Tt.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:Tt.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:Tt.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:Tt.arrowOffset.varRef}},GH={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{nS(e)},effect:({state:e})=>()=>{nS(e)}},nS=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const r=zH(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:Tt.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},qH={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},KH={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function YH(e,t="ltr"){var r,n;const i=((r=qH[e])==null?void 0:r[t])||e;return t==="ltr"?i:(n=KH[e])!=null?n:i}var Gt="top",Ir="bottom",Rr="right",qt="left",by="auto",_c=[Gt,Ir,Rr,qt],Qs="start",Zl="end",XH="clippingParents",u5="viewport",$a="popper",QH="reference",iS=_c.reduce(function(e,t){return e.concat([t+"-"+Qs,t+"-"+Zl])},[]),d5=[].concat(_c,[by]).reduce(function(e,t){return e.concat([t,t+"-"+Qs,t+"-"+Zl])},[]),JH="beforeRead",ZH="read",eG="afterRead",tG="beforeMain",rG="main",nG="afterMain",iG="beforeWrite",oG="write",sG="afterWrite",aG=[JH,ZH,eG,tG,rG,nG,iG,oG,sG];function dn(e){return e?(e.nodeName||"").toLowerCase():null}function lr(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $o(e){var t=lr(e).Element;return e instanceof t||e instanceof Element}function Cr(e){var t=lr(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function xy(e){if(typeof ShadowRoot>"u")return!1;var t=lr(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function lG(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},i=t.attributes[r]||{},o=t.elements[r];!Cr(o)||!dn(o)||(Object.assign(o.style,n),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function cG(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],o=t.attributes[n]||{},s=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),a=s.reduce(function(l,c){return l[c]="",l},{});!Cr(i)||!dn(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const uG={name:"applyStyles",enabled:!0,phase:"write",fn:lG,effect:cG,requires:["computeStyles"]};function ln(e){return e.split("-")[0]}var _o=Math.max,lf=Math.min,Js=Math.round;function e0(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function f5(){return!/^((?!chrome|android).)*safari/i.test(e0())}function Zs(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),i=1,o=1;t&&Cr(e)&&(i=e.offsetWidth>0&&Js(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Js(n.height)/e.offsetHeight||1);var s=$o(e)?lr(e):window,a=s.visualViewport,l=!f5()&&r,c=(n.left+(l&&a?a.offsetLeft:0))/i,u=(n.top+(l&&a?a.offsetTop:0))/o,f=n.width/i,h=n.height/o;return{width:f,height:h,top:u,right:c+f,bottom:u+h,left:c,x:c,y:u}}function wy(e){var t=Zs(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function h5(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&xy(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Wn(e){return lr(e).getComputedStyle(e)}function dG(e){return["table","td","th"].indexOf(dn(e))>=0}function Gi(e){return(($o(e)?e.ownerDocument:e.document)||window.document).documentElement}function Eh(e){return dn(e)==="html"?e:e.assignedSlot||e.parentNode||(xy(e)?e.host:null)||Gi(e)}function oS(e){return!Cr(e)||Wn(e).position==="fixed"?null:e.offsetParent}function fG(e){var t=/firefox/i.test(e0()),r=/Trident/i.test(e0());if(r&&Cr(e)){var n=Wn(e);if(n.position==="fixed")return null}var i=Eh(e);for(xy(i)&&(i=i.host);Cr(i)&&["html","body"].indexOf(dn(i))<0;){var o=Wn(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function kc(e){for(var t=lr(e),r=oS(e);r&&dG(r)&&Wn(r).position==="static";)r=oS(r);return r&&(dn(r)==="html"||dn(r)==="body"&&Wn(r).position==="static")?t:r||fG(e)||t}function Sy(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function gl(e,t,r){return _o(e,lf(t,r))}function hG(e,t,r){var n=gl(e,t,r);return n>r?r:n}function p5(){return{top:0,right:0,bottom:0,left:0}}function m5(e){return Object.assign({},p5(),e)}function g5(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var pG=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,m5(typeof t!="number"?t:g5(t,_c))};function mG(e){var t,r=e.state,n=e.name,i=e.options,o=r.elements.arrow,s=r.modifiersData.popperOffsets,a=ln(r.placement),l=Sy(a),c=[qt,Rr].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!s)){var f=pG(i.padding,r),h=wy(o),p=l==="y"?Gt:qt,v=l==="y"?Ir:Rr,y=r.rects.reference[u]+r.rects.reference[l]-s[l]-r.rects.popper[u],x=s[l]-r.rects.reference[l],g=kc(o),m=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,b=y/2-x/2,S=f[p],C=m-h[u]-f[v],E=m/2-h[u]/2+b,k=gl(S,E,C),P=l;r.modifiersData[n]=(t={},t[P]=k,t.centerOffset=k-E,t)}}function gG(e){var t=e.state,r=e.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||h5(t.elements.popper,i)&&(t.elements.arrow=i))}const vG={name:"arrow",enabled:!0,phase:"main",fn:mG,effect:gG,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ea(e){return e.split("-")[1]}var yG={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bG(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Js(r*i)/i||0,y:Js(n*i)/i||0}}function sS(e){var t,r=e.popper,n=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,f=e.isFixed,h=s.x,p=h===void 0?0:h,v=s.y,y=v===void 0?0:v,x=typeof u=="function"?u({x:p,y}):{x:p,y};p=x.x,y=x.y;var g=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),b=qt,S=Gt,C=window;if(c){var E=kc(r),k="clientHeight",P="clientWidth";if(E===lr(r)&&(E=Gi(r),Wn(E).position!=="static"&&a==="absolute"&&(k="scrollHeight",P="scrollWidth")),E=E,i===Gt||(i===qt||i===Rr)&&o===Zl){S=Ir;var $=f&&E===C&&C.visualViewport?C.visualViewport.height:E[k];y-=$-n.height,y*=l?1:-1}if(i===qt||(i===Gt||i===Ir)&&o===Zl){b=Rr;var j=f&&E===C&&C.visualViewport?C.visualViewport.width:E[P];p-=j-n.width,p*=l?1:-1}}var M=Object.assign({position:a},c&&yG),q=u===!0?bG({x:p,y},lr(r)):{x:p,y};if(p=q.x,y=q.y,l){var K;return Object.assign({},M,(K={},K[S]=m?"0":"",K[b]=g?"0":"",K.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",K))}return Object.assign({},M,(t={},t[S]=m?y+"px":"",t[b]=g?p+"px":"",t.transform="",t))}function xG(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=n===void 0?!0:n,o=r.adaptive,s=o===void 0?!0:o,a=r.roundOffsets,l=a===void 0?!0:a,c={placement:ln(t.placement),variation:ea(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,sS(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,sS(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const wG={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xG,data:{}};var xu={passive:!0};function SG(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=i===void 0?!0:i,s=n.resize,a=s===void 0?!0:s,l=lr(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",r.update,xu)}),a&&l.addEventListener("resize",r.update,xu),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",r.update,xu)}),a&&l.removeEventListener("resize",r.update,xu)}}const _G={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:SG,data:{}};var kG={left:"right",right:"left",bottom:"top",top:"bottom"};function id(e){return e.replace(/left|right|bottom|top/g,function(t){return kG[t]})}var CG={start:"end",end:"start"};function aS(e){return e.replace(/start|end/g,function(t){return CG[t]})}function _y(e){var t=lr(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ky(e){return Zs(Gi(e)).left+_y(e).scrollLeft}function EG(e,t){var r=lr(e),n=Gi(e),i=r.visualViewport,o=n.clientWidth,s=n.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var c=f5();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+ky(e),y:l}}function TG(e){var t,r=Gi(e),n=_y(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=_o(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=_o(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+ky(e),l=-n.scrollTop;return Wn(i||r).direction==="rtl"&&(a+=_o(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function Cy(e){var t=Wn(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function v5(e){return["html","body","#document"].indexOf(dn(e))>=0?e.ownerDocument.body:Cr(e)&&Cy(e)?e:v5(Eh(e))}function vl(e,t){var r;t===void 0&&(t=[]);var n=v5(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=lr(n),s=i?[o].concat(o.visualViewport||[],Cy(n)?n:[]):n,a=t.concat(s);return i?a:a.concat(vl(Eh(s)))}function t0(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function PG(e,t){var r=Zs(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function lS(e,t,r){return t===u5?t0(EG(e,r)):$o(t)?PG(t,r):t0(TG(Gi(e)))}function IG(e){var t=vl(Eh(e)),r=["absolute","fixed"].indexOf(Wn(e).position)>=0,n=r&&Cr(e)?kc(e):e;return $o(n)?t.filter(function(i){return $o(i)&&h5(i,n)&&dn(i)!=="body"}):[]}function RG(e,t,r,n){var i=t==="clippingParents"?IG(e):[].concat(t),o=[].concat(i,[r]),s=o[0],a=o.reduce(function(l,c){var u=lS(e,c,n);return l.top=_o(u.top,l.top),l.right=lf(u.right,l.right),l.bottom=lf(u.bottom,l.bottom),l.left=_o(u.left,l.left),l},lS(e,s,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function y5(e){var t=e.reference,r=e.element,n=e.placement,i=n?ln(n):null,o=n?ea(n):null,s=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,l;switch(i){case Gt:l={x:s,y:t.y-r.height};break;case Ir:l={x:s,y:t.y+t.height};break;case Rr:l={x:t.x+t.width,y:a};break;case qt:l={x:t.x-r.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?Sy(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case Qs:l[c]=l[c]-(t[u]/2-r[u]/2);break;case Zl:l[c]=l[c]+(t[u]/2-r[u]/2);break}}return l}function ec(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=n===void 0?e.placement:n,o=r.strategy,s=o===void 0?e.strategy:o,a=r.boundary,l=a===void 0?XH:a,c=r.rootBoundary,u=c===void 0?u5:c,f=r.elementContext,h=f===void 0?$a:f,p=r.altBoundary,v=p===void 0?!1:p,y=r.padding,x=y===void 0?0:y,g=m5(typeof x!="number"?x:g5(x,_c)),m=h===$a?QH:$a,b=e.rects.popper,S=e.elements[v?m:h],C=RG($o(S)?S:S.contextElement||Gi(e.elements.popper),l,u,s),E=Zs(e.elements.reference),k=y5({reference:E,element:b,strategy:"absolute",placement:i}),P=t0(Object.assign({},b,k)),$=h===$a?P:E,j={top:C.top-$.top+g.top,bottom:$.bottom-C.bottom+g.bottom,left:C.left-$.left+g.left,right:$.right-C.right+g.right},M=e.modifiersData.offset;if(h===$a&&M){var q=M[i];Object.keys(j).forEach(function(K){var Y=[Rr,Ir].indexOf(K)>=0?1:-1,ee=[Gt,Ir].indexOf(K)>=0?"y":"x";j[K]+=q[ee]*Y})}return j}function AG(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,s=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,c=l===void 0?d5:l,u=ea(n),f=u?a?iS:iS.filter(function(v){return ea(v)===u}):_c,h=f.filter(function(v){return c.indexOf(v)>=0});h.length===0&&(h=f);var p=h.reduce(function(v,y){return v[y]=ec(e,{placement:y,boundary:i,rootBoundary:o,padding:s})[ln(y)],v},{});return Object.keys(p).sort(function(v,y){return p[v]-p[y]})}function jG(e){if(ln(e)===by)return[];var t=id(e);return[aS(e),t,aS(t)]}function $G(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,a=s===void 0?!0:s,l=r.fallbackPlacements,c=r.padding,u=r.boundary,f=r.rootBoundary,h=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,y=r.allowedAutoPlacements,x=t.options.placement,g=ln(x),m=g===x,b=l||(m||!v?[id(x)]:jG(x)),S=[x].concat(b).reduce(function(ne,xe){return ne.concat(ln(xe)===by?AG(t,{placement:xe,boundary:u,rootBoundary:f,padding:c,flipVariations:v,allowedAutoPlacements:y}):xe)},[]),C=t.rects.reference,E=t.rects.popper,k=new Map,P=!0,$=S[0],j=0;j<S.length;j++){var M=S[j],q=ln(M),K=ea(M)===Qs,Y=[Gt,Ir].indexOf(q)>=0,ee=Y?"width":"height",F=ec(t,{placement:M,boundary:u,rootBoundary:f,altBoundary:h,padding:c}),G=Y?K?Rr:qt:K?Ir:Gt;C[ee]>E[ee]&&(G=id(G));var L=id(G),A=[];if(o&&A.push(F[q]<=0),a&&A.push(F[G]<=0,F[L]<=0),A.every(function(ne){return ne})){$=M,P=!1;break}k.set(M,A)}if(P)for(var O=v?3:1,z=function(xe){var se=S.find(function(De){var Me=k.get(De);if(Me)return Me.slice(0,xe).every(function(Ee){return Ee})});if(se)return $=se,"break"},B=O;B>0;B--){var V=z(B);if(V==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}const OG={name:"flip",enabled:!0,phase:"main",fn:$G,requiresIfExists:["offset"],data:{_skip:!1}};function cS(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function uS(e){return[Gt,Rr,Ir,qt].some(function(t){return e[t]>=0})}function NG(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ec(t,{elementContext:"reference"}),a=ec(t,{altBoundary:!0}),l=cS(s,n),c=cS(a,i,o),u=uS(l),f=uS(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const LG={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:NG};function zG(e,t,r){var n=ln(e),i=[qt,Gt].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[qt,Rr].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}function DG(e){var t=e.state,r=e.options,n=e.name,i=r.offset,o=i===void 0?[0,0]:i,s=d5.reduce(function(u,f){return u[f]=zG(f,t.rects,o),u},{}),a=s[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=s}const MG={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:DG};function FG(e){var t=e.state,r=e.name;t.modifiersData[r]=y5({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const BG={name:"popperOffsets",enabled:!0,phase:"read",fn:FG,data:{}};function VG(e){return e==="x"?"y":"x"}function UG(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,a=s===void 0?!1:s,l=r.boundary,c=r.rootBoundary,u=r.altBoundary,f=r.padding,h=r.tether,p=h===void 0?!0:h,v=r.tetherOffset,y=v===void 0?0:v,x=ec(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),g=ln(t.placement),m=ea(t.placement),b=!m,S=Sy(g),C=VG(S),E=t.modifiersData.popperOffsets,k=t.rects.reference,P=t.rects.popper,$=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,j=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(E){if(o){var K,Y=S==="y"?Gt:qt,ee=S==="y"?Ir:Rr,F=S==="y"?"height":"width",G=E[S],L=G+x[Y],A=G-x[ee],O=p?-P[F]/2:0,z=m===Qs?k[F]:P[F],B=m===Qs?-P[F]:-k[F],V=t.elements.arrow,ne=p&&V?wy(V):{width:0,height:0},xe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:p5(),se=xe[Y],De=xe[ee],Me=gl(0,k[F],ne[F]),Ee=b?k[F]/2-O-Me-se-j.mainAxis:z-Me-se-j.mainAxis,st=b?-k[F]/2+O+Me+De+j.mainAxis:B+Me+De+j.mainAxis,We=t.elements.arrow&&kc(t.elements.arrow),bt=We?S==="y"?We.clientTop||0:We.clientLeft||0:0,Fo=(K=M==null?void 0:M[S])!=null?K:0,ha=G+Ee-Fo-bt,he=G+st-Fo,xt=gl(p?lf(L,ha):L,G,p?_o(A,he):A);E[S]=xt,q[S]=xt-G}if(a){var qe,Xt=S==="x"?Gt:qt,Kn=S==="x"?Ir:Rr,wt=E[C],Hr=C==="y"?"height":"width",Yn=wt+x[Xt],fr=wt-x[Kn],Bo=[Gt,qt].indexOf(g)!==-1,pa=(qe=M==null?void 0:M[C])!=null?qe:0,jc=Bo?Yn:wt-k[Hr]-P[Hr]-pa+j.altAxis,$c=Bo?wt+k[Hr]+P[Hr]-pa-j.altAxis:fr,Ki=p&&Bo?hG(jc,wt,$c):gl(p?jc:Yn,wt,p?$c:fr);E[C]=Ki,q[C]=Ki-wt}t.modifiersData[n]=q}}const WG={name:"preventOverflow",enabled:!0,phase:"main",fn:UG,requiresIfExists:["offset"]};function HG(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function GG(e){return e===lr(e)||!Cr(e)?_y(e):HG(e)}function qG(e){var t=e.getBoundingClientRect(),r=Js(t.width)/e.offsetWidth||1,n=Js(t.height)/e.offsetHeight||1;return r!==1||n!==1}function KG(e,t,r){r===void 0&&(r=!1);var n=Cr(t),i=Cr(t)&&qG(t),o=Gi(t),s=Zs(e,i,r),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((dn(t)!=="body"||Cy(o))&&(a=GG(t)),Cr(t)?(l=Zs(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=ky(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function YG(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function i(o){r.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!r.has(a)){var l=t.get(a);l&&i(l)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||i(o)}),n}function XG(e){var t=YG(e);return aG.reduce(function(r,n){return r.concat(t.filter(function(i){return i.phase===n}))},[])}function QG(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function JG(e){var t=e.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var dS={placement:"bottom",modifiers:[],strategy:"absolute"};function fS(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ZG(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,o=i===void 0?dS:i;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},dS,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],h=!1,p={state:u,setOptions:function(g){var m=typeof g=="function"?g(u.options):g;y(),u.options=Object.assign({},o,u.options,m),u.scrollParents={reference:$o(a)?vl(a):a.contextElement?vl(a.contextElement):[],popper:vl(l)};var b=XG(JG([].concat(n,u.options.modifiers)));return u.orderedModifiers=b.filter(function(S){return S.enabled}),v(),p.update()},forceUpdate:function(){if(!h){var g=u.elements,m=g.reference,b=g.popper;if(fS(m,b)){u.rects={reference:KG(m,kc(b),u.options.strategy==="fixed"),popper:wy(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(j){return u.modifiersData[j.name]=Object.assign({},j.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var C=u.orderedModifiers[S],E=C.fn,k=C.options,P=k===void 0?{}:k,$=C.name;typeof E=="function"&&(u=E({state:u,options:P,name:$,instance:p})||u)}}}},update:QG(function(){return new Promise(function(x){p.forceUpdate(),x(u)})}),destroy:function(){y(),h=!0}};if(!fS(a,l))return p;p.setOptions(c).then(function(x){!h&&c.onFirstUpdate&&c.onFirstUpdate(x)});function v(){u.orderedModifiers.forEach(function(x){var g=x.name,m=x.options,b=m===void 0?{}:m,S=x.effect;if(typeof S=="function"){var C=S({state:u,name:g,instance:p,options:b}),E=function(){};f.push(C||E)}})}function y(){f.forEach(function(x){return x()}),f=[]}return p}}var eq=[_G,BG,wG,uG,MG,OG,WG,vG,LG],tq=ZG({defaultModifiers:eq});function rq(e={}){const{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:i="absolute",arrowPadding:o=8,eventListeners:s=!0,offset:a,gutter:l=8,flip:c=!0,boundary:u="clippingParents",preventOverflow:f=!0,matchWidth:h,direction:p="ltr"}=e,v=w.useRef(null),y=w.useRef(null),x=w.useRef(null),g=YH(n,p),m=w.useRef(()=>{}),b=w.useCallback(()=>{var j;!t||!v.current||!y.current||((j=m.current)==null||j.call(m),x.current=tq(v.current,y.current,{placement:g,modifiers:[GH,UH,VH,{...BH,enabled:!!h},{name:"eventListeners",...FH(s)},{name:"arrow",options:{padding:o}},{name:"offset",options:{offset:a??[0,l]}},{name:"flip",enabled:!!c,options:{padding:8}},{name:"preventOverflow",enabled:!!f,options:{boundary:u}},...r??[]],strategy:i}),x.current.forceUpdate(),m.current=x.current.destroy)},[g,t,r,h,s,o,a,l,c,f,u,i]);w.useEffect(()=>()=>{var j;!v.current&&!y.current&&((j=x.current)==null||j.destroy(),x.current=null)},[]);const S=w.useCallback(j=>{v.current=j,b()},[b]),C=w.useCallback((j={},M=null)=>({...j,ref:kn(S,M)}),[S]),E=w.useCallback(j=>{y.current=j,b()},[b]),k=w.useCallback((j={},M=null)=>({...j,ref:kn(E,M),style:{...j.style,position:i,minWidth:h?void 0:"max-content",inset:"0 auto auto 0"}}),[i,E,h]),P=w.useCallback((j={},M=null)=>{const{size:q,shadowColor:K,bg:Y,style:ee,...F}=j;return{...F,ref:M,"data-popper-arrow":"",style:nq(j)}},[]),$=w.useCallback((j={},M=null)=>({...j,ref:M,"data-popper-arrow-inner":""}),[]);return{update(){var j;(j=x.current)==null||j.update()},forceUpdate(){var j;(j=x.current)==null||j.forceUpdate()},transformOrigin:Tt.transformOrigin.varRef,referenceRef:S,popperRef:E,getPopperProps:k,getArrowProps:P,getArrowInnerProps:$,getReferenceProps:C}}function nq(e){const{size:t,shadowColor:r,bg:n,style:i}=e,o={...i,position:"absolute"};return t&&(o["--popper-arrow-size"]=t),r&&(o["--popper-arrow-shadow-color"]=r),n&&(o["--popper-arrow-bg"]=n),o}function iq(e={}){const{onClose:t,onOpen:r,isOpen:n,id:i}=e,o=Qd(r),s=Qd(t),[a,l]=w.useState(e.defaultIsOpen||!1),c=n!==void 0?n:a,u=n!==void 0,f=w.useId(),h=i??`disclosure-${f}`,p=w.useCallback(()=>{u||l(!1),s==null||s()},[u,s]),v=w.useCallback(()=>{u||l(!0),o==null||o()},[u,o]),y=w.useCallback(()=>{c?p():v()},[c,v,p]);function x(m={}){return{...m,"aria-expanded":c,"aria-controls":h,onClick(b){var S;(S=m.onClick)==null||S.call(m,b),y()}}}function g(m={}){return{...m,hidden:!c,id:h}}return{isOpen:c,onOpen:v,onClose:p,onToggle:y,isControlled:u,getButtonProps:x,getDisclosureProps:g}}function oq(e){const{isOpen:t,ref:r}=e,[n,i]=w.useState(t),[o,s]=w.useState(!1);return w.useEffect(()=>{o||(i(t),s(!0))},[t,o,n]),vy(()=>r.current,"animationend",()=>{i(t)}),{present:!(t?!1:!n),onComplete(){var l;const c=SH(r.current),u=new c.CustomEvent("animationend",{bubbles:!0});(l=r.current)==null||l.dispatchEvent(u)}}}function sq(e){const{wasSelected:t,enabled:r,isSelected:n,mode:i="unmount"}=e;return!!(!r||n||i==="keepMounted"&&t)}var[aq,ua]=pn({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[lq,Cc]=pn({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),r0=Rt(function(t,r){const{getHeaderProps:n}=ua(),i=Cc();return d.jsx(Ce.header,{...n(t,r),className:yt("chakra-popover__header",t.className),__css:i.header})});r0.displayName="PopoverHeader";function n0(e){const t=w.Children.only(e.children),{getTriggerProps:r}=ua();return w.cloneElement(t,r(t.props,t.ref))}n0.displayName="PopoverTrigger";var Ko={click:"click",hover:"hover"};function cq(e={}){const{closeOnBlur:t=!0,closeOnEsc:r=!0,initialFocusRef:n,id:i,returnFocusOnClose:o=!0,autoFocus:s=!0,arrowSize:a,arrowShadowColor:l,trigger:c=Ko.click,openDelay:u=200,closeDelay:f=200,isLazy:h,lazyBehavior:p="unmount",computePositionOnMount:v,...y}=e,{isOpen:x,onClose:g,onOpen:m,onToggle:b}=iq(e),S=w.useRef(null),C=w.useRef(null),E=w.useRef(null),k=w.useRef(!1),P=w.useRef(!1);x&&(P.current=!0);const[$,j]=w.useState(!1),[M,q]=w.useState(!1),K=w.useId(),Y=i??K,[ee,F,G,L]=["popover-trigger","popover-content","popover-header","popover-body"].map(he=>`${he}-${Y}`),{referenceRef:A,getArrowProps:O,getPopperProps:z,getArrowInnerProps:B,forceUpdate:V}=rq({...y,enabled:x||!!v}),ne=oq({isOpen:x,ref:E});wH({enabled:x,ref:C}),$H(E,{focusRef:C,visible:x,shouldFocus:o&&c===Ko.click}),NH(E,{focusRef:n,visible:x,shouldFocus:s&&c===Ko.click});const xe=sq({wasSelected:P.current,enabled:h,mode:p,isSelected:ne.present}),se=w.useCallback((he={},xt=null)=>{const qe={...he,style:{...he.style,transformOrigin:Tt.transformOrigin.varRef,[Tt.arrowSize.var]:a?`${a}px`:void 0,[Tt.arrowShadowColor.var]:l},ref:kn(E,xt),children:xe?he.children:null,id:F,tabIndex:-1,role:"dialog",onKeyDown:Zt(he.onKeyDown,Xt=>{r&&Xt.key==="Escape"&&g()}),onBlur:Zt(he.onBlur,Xt=>{const Kn=hS(Xt),wt=im(E.current,Kn),Hr=im(C.current,Kn);x&&t&&(!wt&&!Hr)&&g()}),"aria-labelledby":$?G:void 0,"aria-describedby":M?L:void 0};return c===Ko.hover&&(qe.role="tooltip",qe.onMouseEnter=Zt(he.onMouseEnter,()=>{k.current=!0}),qe.onMouseLeave=Zt(he.onMouseLeave,Xt=>{Xt.nativeEvent.relatedTarget!==null&&(k.current=!1,setTimeout(()=>g(),f))})),qe},[xe,F,$,G,M,L,c,r,g,x,t,f,l,a]),De=w.useCallback((he={},xt=null)=>z({...he,style:{visibility:x?"visible":"hidden",...he.style}},xt),[x,z]),Me=w.useCallback((he,xt=null)=>({...he,ref:kn(xt,S,A)}),[S,A]),Ee=w.useRef(),st=w.useRef(),We=w.useCallback(he=>{S.current==null&&A(he)},[A]),bt=w.useCallback((he={},xt=null)=>{const qe={...he,ref:kn(C,xt,We),id:ee,"aria-haspopup":"dialog","aria-expanded":x,"aria-controls":F};return c===Ko.click&&(qe.onClick=Zt(he.onClick,b)),c===Ko.hover&&(qe.onFocus=Zt(he.onFocus,()=>{Ee.current===void 0&&m()}),qe.onBlur=Zt(he.onBlur,Xt=>{const Kn=hS(Xt),wt=!im(E.current,Kn);x&&t&&wt&&g()}),qe.onKeyDown=Zt(he.onKeyDown,Xt=>{Xt.key==="Escape"&&g()}),qe.onMouseEnter=Zt(he.onMouseEnter,()=>{k.current=!0,Ee.current=window.setTimeout(()=>m(),u)}),qe.onMouseLeave=Zt(he.onMouseLeave,()=>{k.current=!1,Ee.current&&(clearTimeout(Ee.current),Ee.current=void 0),st.current=window.setTimeout(()=>{k.current===!1&&g()},f)})),qe},[ee,x,F,c,We,b,m,t,g,u,f]);w.useEffect(()=>()=>{Ee.current&&clearTimeout(Ee.current),st.current&&clearTimeout(st.current)},[]);const Fo=w.useCallback((he={},xt=null)=>({...he,id:G,ref:kn(xt,qe=>{j(!!qe)})}),[G]),ha=w.useCallback((he={},xt=null)=>({...he,id:L,ref:kn(xt,qe=>{q(!!qe)})}),[L]);return{forceUpdate:V,isOpen:x,onAnimationComplete:ne.onComplete,onClose:g,getAnchorProps:Me,getArrowProps:O,getArrowInnerProps:B,getPopoverPositionerProps:De,getPopoverProps:se,getTriggerProps:bt,getHeaderProps:Fo,getBodyProps:ha}}function im(e,t){return e===t||(e==null?void 0:e.contains(t))}function hS(e){var t;const r=e.currentTarget.ownerDocument.activeElement;return(t=e.relatedTarget)!=null?t:r}function i0(e){const t=gc("Popover",e),{children:r,...n}=Wi(e),i=UC(),o=cq({...n,direction:i.direction});return d.jsx(aq,{value:o,children:d.jsx(lq,{value:t,children:Pn(r,{isOpen:o.isOpen,onClose:o.onClose,forceUpdate:o.forceUpdate})})})}i0.displayName="Popover";var om=(e,t)=>t?`${e}.${t}, ${t}`:void 0;function o0(e){var t;const{bg:r,bgColor:n,backgroundColor:i,shadow:o,boxShadow:s,shadowColor:a}=e,{getArrowProps:l,getArrowInnerProps:c}=ua(),u=Cc(),f=(t=r??n)!=null?t:i,h=o??s;return d.jsx(Ce.div,{...l(),className:"chakra-popover__arrow-positioner",children:d.jsx(Ce.div,{className:yt("chakra-popover__arrow",e.className),...c(e),__css:{"--popper-arrow-shadow-color":om("colors",a),"--popper-arrow-bg":om("colors",f),"--popper-arrow-shadow":om("shadows",h),...u.arrow}})})}o0.displayName="PopoverArrow";var s0=Rt(function(t,r){const{getBodyProps:n}=ua(),i=Cc();return d.jsx(Ce.div,{...n(t,r),className:yt("chakra-popover__body",t.className),__css:i.body})});s0.displayName="PopoverBody";function uq(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var dq={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},fq=Ce(VT.section),b5=Rt(function(t,r){const{variants:n=dq,...i}=t,{isOpen:o}=ua();return d.jsx(fq,{ref:r,variants:uq(n),initial:!1,animate:o?"enter":"exit",...i})});b5.displayName="PopoverTransition";var a0=Rt(function(t,r){const{rootProps:n,motionProps:i,...o}=t,{getPopoverProps:s,getPopoverPositionerProps:a,onAnimationComplete:l}=ua(),c=Cc(),u={position:"relative",display:"flex",flexDirection:"column",...c.content};return d.jsx(Ce.div,{...a(n),__css:c.popper,className:"chakra-popover__popper",children:d.jsx(b5,{...i,...s(o,r),onAnimationComplete:t6(l,o.onAnimationComplete),className:yt("chakra-popover__content",t.className),__css:u})})});a0.displayName="PopoverContent";function l0(e){const t=Cc();return d.jsx(Ce.footer,{...e,className:yt("chakra-popover__footer",e.className),__css:t.footer})}l0.displayName="PopoverFooter";const x5=w.createContext(),hq=({children:e})=>{const{isLogin:t}=qn(),[r,n]=w.useState(""),[i,o]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(""),[u,f]=w.useState(""),[h,p]=w.useState(""),[v,y]=w.useState(""),[x,g]=w.useState("home");let[m,b]=w.useState(0);return w.useEffect(()=>{(async()=>{try{const C=sr();let k=(await re.get("http://localhost:8080/addr/checkAddr",{headers:C})).data;k!==""?(b(k.id),n(k.name),o(k.mobile_no),a(k.pincode),c(k.addr),f(k.town),y(k.state),p(k.city)):b(0)}catch(C){console.log(C)}})()},[t]),d.jsx(d.Fragment,{children:d.jsx(x5.Provider,{value:{name:r,setName:n,mobileno:i,setMobileno:o,pincode:s,setPincode:a,address:l,setAddress:c,locality:u,setLocality:f,district:h,setDistrict:p,state:v,setState:y,saveaddress:x,setsaveaddress:g,id:m,setId:b},children:e})})},Ey=()=>w.useContext(x5),pq=()=>{const e=Wr(),{name:t,mobileno:r,pincode:n,address:i,locality:o,setName:s,setAddress:a,setLocality:l,setMobileno:c,setPincode:u,district:f,setDistrict:h,state:p,setState:v,setsaveaddress:y,saveaddress:x,id:g}=Ey(),{total_price:m,shipping_fee:b}=Li(),{isLogin:S}=qn();w.useEffect(()=>{S||e("/")},[]);const C=async E=>{if(E.preventDefault(),t===""){U.error("Please enter name",{position:"top-center"});return}else if(!/^[A-Za-z]+$/.test(t)){U.error("Please enter a valid name without numbers or special characters.",{position:"top-center"});return}if(r===""){U.error("Please enter mobile number",{position:"top-center"});return}if(r&&BigInt(r).toString().length!==10){U.error("Please enter a valid 10-digit mobile number",{position:"top-center"});return}if(n===""){U.error("Please enter pincode",{position:"top-center"});return}if(n)if(n.length===6){let k=n[1];if(n[0]==="0"&&k==="0"){U.error("Please enter valid pincode",{position:"top-center"});return}}else{U.error("Please enter valid pincode",{position:"top-center"});return}if(i===""){U.error("Please enter address",{position:"top-center"});return}if(o===""){U.error("Please enter locality",{position:"top-center"});return}if(p===""){U.error("Please enter state",{position:"top-center"});return}if(f===""){U.error("Please enter district",{position:"top-center"});return}try{const k={name:t,mobile_no:r,pincode:n,addr:i,town:o,city:f,state:p},P=sr(),$=await re.put(`http://localhost:8080/addr/addAddr/${g}`,k,{headers:P});e("/showaddress")}catch(k){U.error("Something went wrong"),console.log(k)}};return d.jsx(d.Fragment,{children:d.jsx(mq,{children:d.jsxs("div",{className:"main-div",children:[d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"sub-div",children:[d.jsx("p",{children:"CONTACT DETAILS"}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:" ",className:"input",value:t,onChange:E=>{s(E.target.value)}}),d.jsx(oi,{className:"label",children:"Name"})]}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",className:"input",value:r,onChange:E=>c(E.target.value),type:"number"}),d.jsx(oi,{className:"label",children:"Mobile No"})]})]}),d.jsxs("div",{className:"sub-div",children:[d.jsx("p",{children:"ADDRESS"}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",className:"input",value:n,onChange:E=>u(E.target.value),type:"number"}),d.jsx(oi,{children:"Pin Code"})]}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",className:"input",value:i,onChange:E=>a(E.target.value)}),d.jsx(oi,{children:"Address(House No, Building, Street,Area)"})]}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",className:"input",value:o,onChange:E=>l(E.target.value)}),d.jsx(oi,{children:"Locality / Town"})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"2rem"},children:[d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",style:{width:"19rem"},value:f,onChange:E=>h(E.target.value)}),d.jsx(oi,{children:"District"})]}),d.jsxs(ii,{variant:"floating",isRequired:!0,children:[d.jsx(xn,{placeholder:"  ",style:{width:"19rem"},value:p,onChange:E=>v(E.target.value)}),d.jsx(oi,{children:"State"})]})]})]}),d.jsxs("div",{className:"sub-div",children:[d.jsx("p",{children:"SAVE ADDRESS AS"}),d.jsxs("div",{className:"button-add",children:[d.jsx("button",{type:"button",className:x==="home"?"btn-select":"",onClick:()=>y("home"),children:"Home"}),d.jsx("button",{type:"button",className:x==="work"?"btn-select":"",onClick:()=>y("work"),children:"Work"})]})]}),d.jsx(it,{style:{margin:"1rem",borderRadius:"0.7rem",height:"5rem"},onClick:E=>C(E),children:"add address"})]}),d.jsx("div",{className:"order-total--amount",children:d.jsxs("div",{className:"order-total--subdata",children:[d.jsxs("p",{style:{color:"black",fontSize:"1.4rem"},children:["PRICE DETAILS (",3," items)"]}),d.jsx("hr",{}),d.jsxs("div",{children:[d.jsx("p",{children:"Total MRP:"}),d.jsx("p",{children:d.jsx(gt,{price:m})})]}),d.jsxs("div",{children:[d.jsx("p",{children:"shipping fee:"}),d.jsx("p",{children:d.jsx(gt,{price:b})})]}),d.jsx("hr",{}),d.jsxs("div",{children:[d.jsx("p",{children:"Total Amount:"}),d.jsx("p",{children:d.jsx(gt,{price:m+b})})]})]})})]})})})},mq=oe.section`


    background-color : white;
    height : 100%;

    input {
        box-shadow: none;
        text-transform: none;
        border : 0.1px solid rgb(0,0,0,0.25);
        border-radius : 0.4rem;
        width : 100%;
        font-size : 1.48rem;
        height : 4.7rem;
        font-weight : normal;
        font-family : system-ui;
        padding-left : 1.4rem;
    }

    input::placeholder{
        font-size : 1.2rem;
        color : rgb(0,0,0,0.4);
        text-transform: capitalize;
    }

.main-div{
    margin-top : 5rem;
    margin-left : 20rem;
    margin-right : 20rem;
    display : flex;
    justify-content: space-around;
    gap : 6rem; 
}

.card{

    width : 45rem;
    height : auto;
    border : 0.1px solid rgb(0,0,0,0.15);
    display : flex;
    flex-direction : column;
    justify-content: space-around;
}


.sub-div{
    display : flex;
    flex-direction : column;
    gap : 2rem;
    padding : 2rem;

}

.sub-div>p{
    font-size: 1.2rem;
    font-weight: 550;
    color: rgb(0,0,0,0.9);
}



.button-add button{
    margin-right : 2rem;
    background-color : white;
    padding : 0.6rem;
    padding-left : 2rem;
    padding-right : 2rem;
    border : 1px solid rgb(0,0,0,0.3);
    border-radius : 5rem;
    font-size : 1rem;
    font-weight : 550;
    cursor : pointer;
}

.button-add button:hover{
    border-color : ${({theme:e})=>e.colors.btn};
}

.button-add .btn-select{
    border-color : ${({theme:e})=>e.colors.btn};
    color : ${({theme:e})=>e.colors.btn};
}


.order-total--amount {
    
    width : 30rem;
    text-transform: capitalize;
    
    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
        
    }

    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div p{
        font-size : 1.35rem;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {    
      color: ${({theme:e})=>e.colors.heading};
    }
  }

  @media (max-width: 600px) 
  {
    .order-total--amount{
        display : none;  
    }

  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) 
  {
    .input{
        height : 5rem;
        font-size : 1.7rem;
        
    }


    .button-add button{
        height : 3.6rem;
        width : 8rem;
        font-size : 1.2rem;
    }

    .dis-btn::placeholder{
    font-size : 1.45rem;
    }

    .sub-div>p{
        font-size : 1.5rem;
    }
  }
  
`,gq=()=>{const{cart:e,clearCart:t,total_price:r,shipping_fee:n}=Li(),i=Wr();if(e.length===0)return d.jsx(vq,{children:d.jsx("h3",{children:"No Cart in Item "})});const o=async()=>{const s=sr();try{const a=await re.put("http://localhost:8080/cart/clearCart",null,{headers:s});t()}catch(a){console.log(a)}};return d.jsx(yq,{children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"cart_heading grid grid-five-column",children:[d.jsx("p",{children:"Item"}),d.jsx("p",{className:"cart-hide",children:"Price"}),d.jsx("p",{children:"Quantity"}),d.jsx("p",{className:"cart-hide",children:"Subtotal"}),d.jsx("p",{children:"Remove"})]}),d.jsx("hr",{}),d.jsx("div",{className:"cart-item",children:e.map((s,a)=>d.jsx(BO,{...s},a))}),d.jsx("hr",{}),d.jsxs("div",{className:"cart-two-button",children:[d.jsx(rt,{to:"/products",children:d.jsx(it,{children:" continue Shopping "})}),d.jsx(it,{className:"btn btn-clear",onClick:o,children:"clear cart"})]}),d.jsx("div",{className:"order-total--amount",children:d.jsxs("div",{className:"order-total--subdata",children:[d.jsxs("p",{style:{color:"black"},children:["PRICE DETAILS (",e.length," items)"]}),d.jsx("hr",{}),d.jsxs("div",{children:[d.jsx("p",{children:"subtotal:"}),d.jsx("p",{children:d.jsx(gt,{price:r})})]}),d.jsxs("div",{children:[d.jsx("p",{children:"shipping fee:"}),d.jsx("p",{children:d.jsx(gt,{price:n})})]}),d.jsx("hr",{}),d.jsxs("div",{children:[d.jsx("p",{children:"Total Amount :"}),d.jsx("p",{children:d.jsx(gt,{price:n+r})})]})]})}),d.jsx("div",{className:"order-button",children:d.jsx(it,{onClick:()=>{i("/address")},children:"Place order"})})]})})},vq=oe.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`,yq=oe.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({theme:e})=>e.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({theme:e})=>e.colors.heading};
    }
  }

  .order-button{
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`,bq=()=>d.jsx(xq,{children:d.jsx("div",{className:"container",children:d.jsxs("div",{children:[d.jsx("h2",{children:"404"}),d.jsx("h3",{children:"UH OH! You're lost."}),d.jsx("p",{children:"The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage."}),d.jsx(rt,{to:"/",children:d.jsx(it,{children:"Go Back to Home"})})]})})}),xq=oe.section`
.container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 5.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
  `,wq=XA`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({theme:e})=>e.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   color: ${({theme:e})=>e.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${""}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({theme:e})=>e.colors.bg};
      color: ${({theme:e})=>e.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({theme:e})=>e.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
    text-transform: uppercase;
   box-shadow: ${({theme:e})=>e.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme:e})=>e.colors.btn};
    color: ${({theme:e})=>e.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

@media (max-width: ${({theme:e})=>e.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({theme:e})=>e.media.mobile}) {
       html {
      font-size: 50%;
    } 

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;function Sq(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"}},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"}},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(e)}const w5=w.createContext(),_q=({children:e})=>{const[t,r]=w.useState([]),{isLogin:n}=qn();return w.useEffect(()=>{(async()=>{try{const o=sr(),s=await re.get("http://localhost:8080/order/fetchOrders",{headers:o});r(s.data),console.log(s.data)}catch(o){console.log(o)}})()},[n]),d.jsx(d.Fragment,{children:d.jsx(w5.Provider,{value:{orders:t,setOrders:r},children:e})})},Ty=()=>w.useContext(w5),kq=()=>{const e=Wr(),{isLogin:t,uname:r,setIsLogin:n,setUname:i,setUemail:o}=qn(),[s,a]=w.useState(!1),{total_item:l}=Li();w.useState(!1);const{clearCart:c}=Li(),{setId:u}=Ey(),{setOrders:f}=Ty();w.useEffect(()=>{localStorage.getItem("ACCESS_TOKEN")!==null&&(i(localStorage.getItem("USERNAME")),n(!0))},[]);const h=()=>{a(!1),i(""),o(""),localStorage.removeItem("ACCESS_TOKEN"),localStorage.removeItem("USERNAME"),n(!1),c(),u(0),f([])};return d.jsx(Cq,{children:d.jsxs("div",{className:s?"navbar active":"navbar",children:[d.jsxs("ul",{"data-aos":"fade-down",className:"navbar-lists",children:[d.jsx("li",{children:d.jsx(rt,{x:!0,to:"/",className:"navbar-link",onClick:()=>a(!1),children:"Home"})}),d.jsx("li",{children:d.jsx(rt,{to:"/about",className:"navbar-link",onClick:()=>a(!1),children:"About"})}),d.jsx("li",{children:d.jsx(rt,{to:"/products",className:"navbar-link",onClick:()=>a(!1),children:"Products"})}),d.jsx("li",{children:d.jsx(rt,{to:"/contact",className:"navbar-link",onClick:()=>a(!1),children:"Contact"})}),t?d.jsx(d.Fragment,{children:d.jsx("li",{children:s?d.jsx(d.Fragment,{}):d.jsxs(i0,{children:[d.jsx(n0,{children:d.jsx("button",{children:d.jsx(Zg,{bg:"blue.500",size:"lg"})})}),d.jsxs(a0,{children:[d.jsx(o0,{}),d.jsx(r0,{size:"xl",children:d.jsx("div",{className:"popup-header",children:d.jsx("p",{children:r})})}),d.jsx(s0,{children:d.jsx("div",{className:"popup-body",children:d.jsxs("div",{style:{display:"flex",alignItems:"center"},onClick:()=>e("/myorder"),children:[d.jsx("img",{src:"images/purchase-order.png",style:{width:"3rem",height:"3rem"}}),d.jsx("button",{children:"My Orders "})]})})}),d.jsx(l0,{children:d.jsx("div",{className:"popup-footer",children:d.jsx(it,{onClick:h,children:"Logout"})})})]})]})})}):d.jsx("li",{children:d.jsx(rt,{to:"/signup",onClick:()=>a(!1),children:d.jsx(it,{children:"Sign up"})})}),d.jsx("li",{children:d.jsxs(rt,{to:"/cart",className:"navbar-link cart-trolley--link",onClick:()=>a(!1),children:[d.jsx(Sq,{className:"cart-trolley"}),d.jsxs("span",{className:"cart-total--item",children:[" ",l," "]})]})})]}),d.jsxs("div",{className:"mobile-navbar-btn",children:[t?d.jsxs(i0,{children:[d.jsx(n0,{children:d.jsx("button",{children:d.jsx(Zg,{bg:"blue.500",size:"lg"})})}),d.jsxs(a0,{children:[d.jsx(o0,{}),d.jsx(r0,{size:"xl",children:d.jsx("div",{className:"popup-header",children:d.jsx("p",{children:r})})}),d.jsx(s0,{children:d.jsx("div",{className:"popup-body",children:d.jsxs("div",{style:{display:"flex",alignItems:"center"},onClick:()=>e("/myorder"),children:[d.jsx("img",{src:"images/purchase-order.png",style:{width:"3rem",height:"3rem"}}),d.jsx("button",{children:"My Orders "})]})})}),d.jsx(l0,{children:d.jsx("div",{className:"popup-footer",children:d.jsx(it,{onClick:h,children:"Logout"})})})]})]}):d.jsx(d.Fragment,{}),d.jsx(PO,{className:"mobile-nav-icon",name:"menu-outline",onClick:()=>a(!0)}),d.jsx(TO,{name:"menu-outline",className:"mobile-nav-icon close-outline",onClick:()=>a(!1)})]})]})})},Cq=oe.nav`

    .user_name{
        font-size : 2rem;
        color : rgb(0,0,0,0.5);
    }

    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({theme:e})=>e.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({theme:e})=>e.colors.helper};
        }
      }
    }

    ${""}


    .popup-header p{
      margin : 1rem 0.5rem;
        font-size : 2rem;
        color : black;
    }

    .popup-footer{
      display : flex;
      justify-content : center;
      align-items : center;
    }

    .popup-footer button{
      margin : 0.7rem 0;
      height : 5rem;
      border-radius : 0.7rem;
    }

    .popup-body button{
      margin : 0.5rem 0;
      width : 10rem;
    }

    .popup-body button{

      color : black;

      &:hover {
          color: ${({theme:e})=>e.colors.helper};
        }
    }

    .popup-body button img{
      width : 2rem;
    }


    .mobile-navbar-btn {
      display : none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({theme:e})=>e.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({theme:e})=>e.media.mobile}) {
      .mobile-navbar-btn {
        display: flex;
        z-index: 9999;
        border: ${({theme:e})=>e.colors.black};
        gap : 2rem;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({theme:e})=>e.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({theme:e})=>e.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 1s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 1s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `,Eq=()=>d.jsxs(Tq,{children:[d.jsx(rt,{"data-aos":"zoom-in-down",to:"/",children:d.jsx("img",{className:"logo",src:"images/logo2.png",alt:"my logo img"})}),d.jsx(kq,{})]}),Tq=oe.header`
  padding: 0 4.8rem;
  padding-left : 4rem;
  height: 10rem;
  background-color: ${({theme:e})=>e.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 9rem;

  }
`;function Pq(){return d.jsx(d.Fragment,{children:d.jsxs(Iq,{children:[d.jsx("section",{className:"contact-short",children:d.jsxs("div",{"data-aos":"fade-up","data-aos-duration":"800",className:"grid grid-two-column",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Ready to get started?"}),d.jsx("h3",{children:"Talk to us today"})]}),d.jsx("div",{children:d.jsx(it,{children:d.jsx(rt,{to:"/contact",children:"Get Started"})})})]})}),d.jsxs("footer",{children:[d.jsxs("div",{"data-aos":"fade-up","data-aos-duration":"700",className:"container grid grid-four-column",children:[d.jsxs("div",{className:"footer-about",children:[d.jsx("h3",{children:"TrendLoom"}),d.jsxs("p",{children:["Elevate your style with every click. Shop the latest trends seamlessly at ",d.jsx("b",{children:"Trendloom"}),". Fashion at your fingertips, delivered to your door!"]})]}),d.jsxs("div",{className:"footer-subscribe",children:[d.jsx("h3",{children:"Subscribe to get important updates"}),d.jsxs("form",{action:"#",children:[d.jsx("input",{type:"email",placeholder:"Your E-mail",className:"footer-email"}),d.jsx("input",{type:"submit",value:"subscribe"})]})]}),d.jsxs("div",{className:"footer-social",children:[d.jsx("h3",{children:"follow us"}),d.jsxs("div",{className:"footer-social--icons",children:[d.jsx("div",{children:d.jsx(tO,{className:"icons"})}),d.jsx("div",{children:d.jsx(rO,{className:"icons"})})]})]}),d.jsxs("div",{className:"footer-contact",children:[d.jsx("h3",{children:"Call Us"}),d.jsx("h3",{children:"+91 9726885385"})]})]}),d.jsxs("div",{className:"footer-bottom--section",children:[d.jsx("hr",{}),d.jsxs("div",{className:"container grid grid-two-column",children:[d.jsxs("p",{children:["@",new Date().getFullYear()," Trendloom. All Rights Reserved"]}),d.jsxs("div",{children:[d.jsx("p",{children:"PRIVACY POLICY"}),d.jsx("p",{children:"TERMS & CONDITION"})]})]})]})]})]})})}const Iq=oe.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme:e})=>e.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme:e})=>e.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({theme:e})=>e.colors.footer_bg};
    h3 {
      color: ${({theme:e})=>e.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({theme:e})=>e.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({theme:e})=>e.colors.white};

        .icons {
          color: ${({theme:e})=>e.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({theme:e})=>e.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

  .footer-email{
    text-transform : none;
    font-size : 1.4rem;
  }
`;function S5(e){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"}},{tag:"path",attr:{d:"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"}}]})(e)}function cf(e){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"}}]})(e)}function uf(e){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"}}]})(e)}var pS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},Rq=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[r++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[r++],s=e[r++],a=e[r++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const o=e[r++],s=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},k5={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,s||(h=64)),n.push(r[u],r[f],r[h],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_5(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rq(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0;++i;const c=i<e.length?r[e.charAt(i)]:64;++i;const f=i<e.length?r[e.charAt(i)]:64;if(++i,o==null||a==null||c==null||f==null)throw new Aq;const h=o<<2|a>>4;if(n.push(h),c!==64){const p=a<<4&240|c>>2;if(n.push(p),f!==64){const v=c<<6&192|f;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Aq extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jq=function(e){const t=_5(e);return k5.encodeByteArray(t,!0)},C5=function(e){return jq(e).replace(/\./g,"")},E5=function(e){try{return k5.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function $q(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oq=()=>$q().__FIREBASE_DEFAULTS__,Nq=()=>{if(typeof process>"u"||typeof pS>"u")return;const e=pS.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Lq=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&E5(e[1]);return t&&JSON.parse(t)},Py=()=>{try{return Oq()||Nq()||Lq()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zq=e=>{var t,r;return(r=(t=Py())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},T5=()=>{var e;return(e=Py())===null||e===void 0?void 0:e.config},P5=e=>{var t;return(t=Py())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dq{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mq(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Fq(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bq(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vq(){const e=It();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Uq(){try{return typeof indexedDB=="object"}catch{return!1}}function Wq(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hq="FirebaseError";class qi extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=Hq,Object.setPrototypeOf(this,qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ec.prototype.create)}}class Ec{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Gq(o,n):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new qi(i,a,n)}}function Gq(e,t){return e.replace(qq,(r,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const qq=/\{\$([^}]+)}/g;function Kq(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function df(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const o=e[i],s=t[i];if(mS(o)&&mS(s)){if(!df(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function mS(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(i=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Yq(e,t){const r=new Xq(e,t);return r.subscribe.bind(r)}class Xq{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let i;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Qq(t,["next","error","complete"])?i=t:i={next:t,error:r,complete:n},i.next===void 0&&(i.next=sm),i.error===void 0&&(i.error=sm),i.complete===void 0&&(i.complete=sm);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qq(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function sm(){}/**
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
 */function da(e){return e&&e._delegate?e._delegate:e}class ta{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const oo="[DEFAULT]";/**
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
 */class Jq{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new Dq;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(eK(t))try{this.getOrInitializeService({instanceIdentifier:oo})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=oo){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oo){return this.instances.has(t)}getOptions(t=oo){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);n===a&&s.resolve(i)}return i}onInit(t,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zq(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=oo){return this.component?this.component.multipleInstances?t:oo:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zq(e){return e===oo?void 0:e}function eK(e){return e.instantiationMode==="EAGER"}/**
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
 */class tK{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Jq(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ke||(ke={}));const rK={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},nK=ke.INFO,iK={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},oK=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),i=iK[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class I5{constructor(t){this.name=t,this._logLevel=nK,this._logHandler=oK,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ke))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rK[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...t),this._logHandler(this,ke.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...t),this._logHandler(this,ke.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...t),this._logHandler(this,ke.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...t),this._logHandler(this,ke.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...t),this._logHandler(this,ke.ERROR,...t)}}const sK=(e,t)=>t.some(r=>e instanceof r);let gS,vS;function aK(){return gS||(gS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lK(){return vS||(vS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R5=new WeakMap,c0=new WeakMap,A5=new WeakMap,am=new WeakMap,Iy=new WeakMap;function cK(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{r(ji(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(r=>{r instanceof IDBCursor&&R5.set(r,e)}).catch(()=>{}),Iy.set(t,e),t}function uK(e){if(c0.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});c0.set(e,t)}let u0={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return c0.get(e);if(t==="objectStoreNames")return e.objectStoreNames||A5.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ji(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dK(e){u0=e(u0)}function fK(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(lm(this),t,...r);return A5.set(n,t.sort?t.sort():[t]),ji(n)}:lK().includes(e)?function(...t){return e.apply(lm(this),t),ji(R5.get(this))}:function(...t){return ji(e.apply(lm(this),t))}}function hK(e){return typeof e=="function"?fK(e):(e instanceof IDBTransaction&&uK(e),sK(e,aK())?new Proxy(e,u0):e)}function ji(e){if(e instanceof IDBRequest)return cK(e);if(am.has(e))return am.get(e);const t=hK(e);return t!==e&&(am.set(e,t),Iy.set(t,e)),t}const lm=e=>Iy.get(e);function pK(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=ji(s);return n&&s.addEventListener("upgradeneeded",l=>{n(ji(s.result),l.oldVersion,l.newVersion,ji(s.transaction),l)}),r&&s.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mK=["get","getKey","getAll","getAllKeys","count"],gK=["put","add","delete","clear"],cm=new Map;function yS(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cm.get(t))return cm.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=gK.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||mK.includes(r)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[r](...a),i&&l.done]))[0]};return cm.set(t,o),o}dK(e=>({...e,get:(t,r,n)=>yS(t,r)||e.get(t,r,n),has:(t,r)=>!!yS(t,r)||e.has(t,r)}));/**
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
 */class vK{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(yK(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function yK(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const d0="@firebase/app",bS="0.9.26";/**
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
 */const Oo=new I5("@firebase/app"),bK="@firebase/app-compat",xK="@firebase/analytics-compat",wK="@firebase/analytics",SK="@firebase/app-check-compat",_K="@firebase/app-check",kK="@firebase/auth",CK="@firebase/auth-compat",EK="@firebase/database",TK="@firebase/database-compat",PK="@firebase/functions",IK="@firebase/functions-compat",RK="@firebase/installations",AK="@firebase/installations-compat",jK="@firebase/messaging",$K="@firebase/messaging-compat",OK="@firebase/performance",NK="@firebase/performance-compat",LK="@firebase/remote-config",zK="@firebase/remote-config-compat",DK="@firebase/storage",MK="@firebase/storage-compat",FK="@firebase/firestore",BK="@firebase/firestore-compat",VK="firebase",UK="10.7.2";/**
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
 */const f0="[DEFAULT]",WK={[d0]:"fire-core",[bK]:"fire-core-compat",[wK]:"fire-analytics",[xK]:"fire-analytics-compat",[_K]:"fire-app-check",[SK]:"fire-app-check-compat",[kK]:"fire-auth",[CK]:"fire-auth-compat",[EK]:"fire-rtdb",[TK]:"fire-rtdb-compat",[PK]:"fire-fn",[IK]:"fire-fn-compat",[RK]:"fire-iid",[AK]:"fire-iid-compat",[jK]:"fire-fcm",[$K]:"fire-fcm-compat",[OK]:"fire-perf",[NK]:"fire-perf-compat",[LK]:"fire-rc",[zK]:"fire-rc-compat",[DK]:"fire-gcs",[MK]:"fire-gcs-compat",[FK]:"fire-fst",[BK]:"fire-fst-compat","fire-js":"fire-js",[VK]:"fire-js-all"};/**
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
 */const ff=new Map,h0=new Map;function HK(e,t){try{e.container.addComponent(t)}catch(r){Oo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function tc(e){const t=e.name;if(h0.has(t))return Oo.debug(`There were multiple attempts to register component ${t}.`),!1;h0.set(t,e);for(const r of ff.values())HK(r,e);return!0}function j5(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const GK={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$i=new Ec("app","Firebase",GK);/**
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
 */class qK{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ta("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
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
 */const Pc=UK;function $5(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:f0,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw $i.create("bad-app-name",{appName:String(i)});if(r||(r=T5()),!r)throw $i.create("no-options");const o=ff.get(i);if(o){if(df(r,o.options)&&df(n,o.config))return o;throw $i.create("duplicate-app",{appName:i})}const s=new tK(i);for(const l of h0.values())s.addComponent(l);const a=new qK(r,n,s);return ff.set(i,a),a}function KK(e=f0){const t=ff.get(e);if(!t&&e===f0&&T5())return $5();if(!t)throw $i.create("no-app",{appName:e});return t}function Is(e,t,r){var n;let i=(n=WK[e])!==null&&n!==void 0?n:e;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Oo.warn(a.join(" "));return}tc(new ta(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const YK="firebase-heartbeat-database",XK=1,rc="firebase-heartbeat-store";let um=null;function O5(){return um||(um=pK(YK,XK,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rc)}catch(r){console.warn(r)}}}}).catch(e=>{throw $i.create("idb-open",{originalErrorMessage:e.message})})),um}async function QK(e){try{return await(await O5()).transaction(rc).objectStore(rc).get(N5(e))}catch(t){if(t instanceof qi)Oo.warn(t.message);else{const r=$i.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Oo.warn(r.message)}}}async function xS(e,t){try{const n=(await O5()).transaction(rc,"readwrite");await n.objectStore(rc).put(t,N5(e)),await n.done}catch(r){if(r instanceof qi)Oo.warn(r.message);else{const n=$i.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Oo.warn(n.message)}}}function N5(e){return`${e.name}!${e.options.appId}`}/**
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
 */const JK=1024,ZK=30*24*60*60*1e3;class eY{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new rY(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wS();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=ZK}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=wS(),{heartbeatsToSend:n,unsentEntries:i}=tY(this._heartbeatsCache.heartbeats),o=C5(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function wS(){return new Date().toISOString().substring(0,10)}function tY(e,t=JK){const r=[];let n=e.slice();for(const i of e){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),SS(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),SS(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class rY{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uq()?Wq().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await QK(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return xS(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return xS(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function SS(e){return C5(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nY(e){tc(new ta("platform-logger",t=>new vK(t),"PRIVATE")),tc(new ta("heartbeat",t=>new eY(t),"PRIVATE")),Is(d0,bS,e),Is(d0,bS,"esm2017"),Is("fire-js","")}nY("");var iY="firebase",oY="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Is(iY,oY,"app");function L5(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sY=L5,z5=new Ec("auth","Firebase",L5());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new I5("@firebase/auth");function aY(e,...t){hf.logLevel<=ke.WARN&&hf.warn(`Auth (${Pc}): ${e}`,...t)}function od(e,...t){hf.logLevel<=ke.ERROR&&hf.error(`Auth (${Pc}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,...t){throw Ry(e,...t)}function cn(e,...t){return Ry(e,...t)}function D5(e,t,r){const n=Object.assign(Object.assign({},sY()),{[t]:r});return new Ec("auth","Firebase",n).create(t,{appName:e.name})}function lY(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&fn(e,"argument-error"),D5(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ry(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return z5.create(e,...t)}function te(e,t,...r){if(!e)throw Ry(t,...r)}function An(e){const t="INTERNAL ASSERTION FAILED: "+e;throw od(t),new Error(t)}function Hn(e,t){e||An(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cY(){return _S()==="http:"||_S()==="https:"}function _S(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uY(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cY()||Fq()||"connection"in navigator)?navigator.onLine:!0}function dY(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,r){this.shortDelay=t,this.longDelay=r,Hn(r>t,"Short delay should be less than long delay!"),this.isMobile=Mq()||Bq()}get(){return uY()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(e,t){Hn(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fY={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hY=new Ic(3e4,6e4);function jy(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fa(e,t,r,n,i={}){return F5(e,i,async()=>{let o={},s={};n&&(t==="GET"?s=n:o={body:JSON.stringify(n)});const a=Tc(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),M5.fetch()(B5(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function F5(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},fY),t);try{const i=new mY(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw wu(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw wu(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw wu(e,"user-disabled",s);const u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw D5(e,u,c);fn(e,u)}}catch(i){if(i instanceof qi)throw i;fn(e,"network-request-failed",{message:String(i)})}}async function pY(e,t,r,n,i={}){const o=await fa(e,t,r,n,i);return"mfaPendingCredential"in o&&fn(e,"multi-factor-auth-required",{_serverResponse:o}),o}function B5(e,t,r,n){const i=`${t}${r}?${n}`;return e.config.emulator?Ay(e.config,i):`${e.config.apiScheme}://${i}`}class mY{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(cn(this.auth,"network-request-failed")),hY.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=cn(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gY(e,t){return fa(e,"POST","/v1/accounts:delete",t)}async function vY(e,t){return fa(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yY(e,t=!1){const r=da(e),n=await r.getIdToken(t),i=$y(n);te(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:yl(dm(i.auth_time)),issuedAtTime:yl(dm(i.iat)),expirationTime:yl(dm(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function dm(e){return Number(e)*1e3}function $y(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return od("JWT malformed, contained fewer than 3 sections"),null;try{const i=E5(r);return i?JSON.parse(i):(od("Failed to decode base64 JWT payload"),null)}catch(i){return od("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bY(e){const t=$y(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof qi&&xY(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function xY({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wY{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=yl(this.lastLoginAt),this.creationTime=yl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pf(e){var t;const r=e.auth,n=await e.getIdToken(),i=await nc(e,vY(r,{idToken:n}));te(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?kY(o.providerUserInfo):[],a=_Y(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new V5(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function SY(e){const t=da(e);await pf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _Y(e,t){return[...e.filter(n=>!t.some(i=>i.providerId===n.providerId)),...t]}function kY(e){return e.map(t=>{var{providerId:r}=t,n=yy(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CY(e,t){const r=await F5(e,{},async()=>{const n=Tc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=B5(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M5.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function EY(e,t){return fa(e,"POST","/v2/accounts:revokeToken",jy(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bY(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}async getToken(t,r=!1){return te(!this.accessToken||this.refreshToken,t,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await CY(t,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new ic;return n&&(te(typeof n=="string","internal-error",{appName:t}),s.refreshToken=n),i&&(te(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ic,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ko{constructor(t){var{uid:r,auth:n,stsTokenManager:i}=t,o=yy(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wY(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new V5(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const r=await nc(this,this.stsTokenManager.getToken(this.auth,t));return te(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return yY(this,t)}reload(){return SY(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new ko(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await pf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await nc(this,gY(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,i,o,s,a,l,c,u;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,h=(i=r.email)!==null&&i!==void 0?i:void 0,p=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=r.photoURL)!==null&&s!==void 0?s:void 0,y=(a=r.tenantId)!==null&&a!==void 0?a:void 0,x=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=r.createdAt)!==null&&c!==void 0?c:void 0,m=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:S,isAnonymous:C,providerData:E,stsTokenManager:k}=r;te(b&&k,t,"internal-error");const P=ic.fromJSON(this.name,k);te(typeof b=="string",t,"internal-error"),ti(f,t.name),ti(h,t.name),te(typeof S=="boolean",t,"internal-error"),te(typeof C=="boolean",t,"internal-error"),ti(p,t.name),ti(v,t.name),ti(y,t.name),ti(x,t.name),ti(g,t.name),ti(m,t.name);const $=new ko({uid:b,auth:t,email:h,emailVerified:S,displayName:f,isAnonymous:C,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:P,createdAt:g,lastLoginAt:m});return E&&Array.isArray(E)&&($.providerData=E.map(j=>Object.assign({},j))),x&&($._redirectEventId=x),$}static async _fromIdTokenResponse(t,r,n=!1){const i=new ic;i.updateFromServerResponse(r);const o=new ko({uid:r.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await pf(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new Map;function jn(e){Hn(e instanceof Function,"Expected a class definition");let t=kS.get(e);return t?(Hn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,kS.set(e,t),t)}/**
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
 */class U5{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}U5.type="NONE";const CS=U5;/**
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
 */function sd(e,t,r){return`firebase:${e}:${t}:${r}`}class Rs{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=sd(this.userKey,i.apiKey,o),this.fullPersistenceKey=sd("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ko._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new Rs(jn(CS),t,n);const i=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||jn(CS);const s=sd(n,t.config.apiKey,t.name);let a=null;for(const c of r)try{const u=await c._get(s);if(u){const f=ko._fromJSON(t,u);c!==o&&(a=f),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Rs(o,t,n):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(r.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Rs(o,t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(G5(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(W5(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(K5(t))return"Blackberry";if(Y5(t))return"Webos";if(Oy(t))return"Safari";if((t.includes("chrome/")||H5(t))&&!t.includes("edge/"))return"Chrome";if(q5(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function W5(e=It()){return/firefox\//i.test(e)}function Oy(e=It()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function H5(e=It()){return/crios\//i.test(e)}function G5(e=It()){return/iemobile/i.test(e)}function q5(e=It()){return/android/i.test(e)}function K5(e=It()){return/blackberry/i.test(e)}function Y5(e=It()){return/webos/i.test(e)}function Th(e=It()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function TY(e=It()){var t;return Th(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function PY(){return Vq()&&document.documentMode===10}function X5(e=It()){return Th(e)||q5(e)||Y5(e)||K5(e)||/windows phone/i.test(e)||G5(e)}function IY(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(e,t=[]){let r;switch(e){case"Browser":r=ES(It());break;case"Worker":r=`${ES(It())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Pc}/${n}`}/**
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
 */class RY{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function AY(e,t={}){return fa(e,"GET","/v2/passwordPolicy",jy(e,t))}/**
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
 */const jY=6;class $Y{constructor(t){var r,n,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:jY,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),i&&(r.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OY{constructor(t,r,n,i){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new TS(this),this.idTokenSubscription=new TS(this),this.beforeStateQueue=new RY(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z5,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=jn(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,t),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await pf(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dY()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const r=t?da(t):null;return r&&te(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await AY(this),r=new $Y(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ec("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await EY(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&jn(t)||this._popupRedirectResolver;te(r,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[jn(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,i);return()=>{s=!0,l()}}else{const l=t.addObserver(r);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Q5(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var t;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&aY(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Ph(e){return da(e)}class TS{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yq(r=>this.observer=r)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NY(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function LY(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=i=>{const o=cn("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",NY().appendChild(n)})}function zY(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DY(e,t){const r=j5(e,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(df(o,t??{}))return i;fn(i,"already-initialized")}return r.initialize({options:t})}function MY(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(jn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function FY(e,t,r){const n=Ph(e);te(n._canInitEmulator,n,"emulator-config-failed"),te(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),o=J5(t),{host:s,port:a}=BY(t),l=a===null?"":`:${a}`;n.config.emulator={url:`${o}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VY()}function J5(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function BY(e){const t=J5(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:PS(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:PS(s)}}}function PS(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function VY(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return An("not implemented")}_getIdTokenResponse(t){return An("not implemented")}_linkToIdToken(t,r){return An("not implemented")}_getReauthenticationResolver(t){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(e,t){return pY(e,"POST","/v1/accounts:signInWithIdp",jy(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UY="http://localhost";class No extends Z5{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new No(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):fn("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:i}=r,o=yy(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new No(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const r=this.buildRequest();return As(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,As(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,As(t,r)}buildRequest(){const t={requestUri:UY,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Tc(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rc extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Rc{constructor(){super("facebook.com")}static credential(t){return No._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Rc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return No._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return Cn.credential(r,n)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Rc{constructor(){super("github.com")}static credential(t){return No._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Rc{constructor(){super("twitter.com")}static credential(t,r){return No._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return pi.credential(r,n)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,i=!1){const o=await ko._fromIdTokenResponse(t,n,i),s=IS(n);return new ra({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const i=IS(n);return new ra({user:t,providerId:i,_tokenResponse:n,operationType:r})}}function IS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends qi{constructor(t,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,i){return new mf(t,r,n,i)}}function eP(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(e,o,t,n):o})}async function WY(e,t,r=!1){const n=await nc(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return ra._forOperation(e,"link",n)}/**
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
 */async function HY(e,t,r=!1){const{auth:n}=e,i="reauthenticate";try{const o=await nc(e,eP(n,i,t,e),r);te(o.idToken,n,"internal-error");const s=$y(o.idToken);te(s,n,"internal-error");const{sub:a}=s;return te(e.uid===a,n,"user-mismatch"),ra._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&fn(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GY(e,t,r=!1){const n="signIn",i=await eP(e,n,t),o=await ra._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function qY(e,t,r,n){return da(e).onIdTokenChanged(t,r,n)}function KY(e,t,r){return da(e).beforeAuthStateChanged(t,r)}const gf="__sak";/**
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
 */class tP{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YY(){const e=It();return Oy(e)||Th(e)}const XY=1e3,QY=10;class rP extends tP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YY()&&IY(),this.fallbackToPolling=X5(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&t(r,i,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const n=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);PY()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,QY):i()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},XY)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}rP.type="LOCAL";const JY=rP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends tP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}nP.type="SESSION";const iP=nP;/**
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
 */function ZY(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Ih{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(i=>i.isListeningto(t));if(r)return r;const n=new Ih(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map(async c=>c(r.origin,o)),l=await ZY(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
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
 */class eX{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Ly("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function tX(e){un().location.href=e}/**
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
 */function oP(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function rX(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nX(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function iX(){return oP()?self:null}/**
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
 */const sP="firebaseLocalStorageDb",oX=1,vf="firebaseLocalStorage",aP="fbase_key";class Ac{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Rh(e,t){return e.transaction([vf],t?"readwrite":"readonly").objectStore(vf)}function sX(){const e=indexedDB.deleteDatabase(sP);return new Ac(e).toPromise()}function m0(){const e=indexedDB.open(sP,oX);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(vf,{keyPath:aP})}catch(i){r(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(vf)?t(n):(n.close(),await sX(),t(await m0()))})})}async function RS(e,t,r){const n=Rh(e,!0).put({[aP]:t,value:r});return new Ac(n).toPromise()}async function aX(e,t){const r=Rh(e,!1).get(t),n=await new Ac(r).toPromise();return n===void 0?null:n.value}function AS(e,t){const r=Rh(e,!0).delete(t);return new Ac(r).toPromise()}const lX=800,cX=3;class lP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await m0(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>cX)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oP()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(iX()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await rX(),!this.activeServiceWorker)return;this.sender=new eX(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nX()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await m0();return await RS(t,gf,"1"),await AS(t,gf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>RS(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>aX(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>AS(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Rh(i,!1).getAll();return new Ac(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lX)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lP.type="LOCAL";const uX=lP;new Ic(3e4,6e4);/**
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
 */function cP(e,t){return t?jn(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zy extends Z5{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return As(t,this._buildIdpRequest())}_linkToIdToken(t,r){return As(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return As(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function dX(e){return GY(e.auth,new zy(e),e.bypassAuthState)}function fX(e){const{auth:t,user:r}=e;return te(r,t,"internal-error"),HY(r,new zy(e),e.bypassAuthState)}async function hX(e){const{auth:t,user:r}=e;return te(r,t,"internal-error"),WY(r,new zy(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(t,r,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dX;case"linkViaPopup":case"linkViaRedirect":return hX;case"reauthViaPopup":case"reauthViaRedirect":return fX;default:fn(this.auth,"internal-error")}}resolve(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pX=new Ic(2e3,1e4);async function dP(e,t,r){const n=Ph(e);lY(e,t,Ny);const i=cP(n,r);return new mo(n,"signInViaPopup",t,i).executeNotNull()}class mo extends uP{constructor(t,r,n,i,o){super(t,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const t=Ly();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pX.get())};t()}}mo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mX="pendingRedirect",ad=new Map;class gX extends uP{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=ad.get(this.auth._key());if(!t){try{const n=await vX(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}ad.set(this.auth._key(),t)}return this.bypassAuthState||ad.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vX(e,t){const r=xX(t),n=bX(e);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function yX(e,t){ad.set(e._key(),t)}function bX(e){return jn(e._redirectPersistence)}function xX(e){return sd(mX,e.config.apiKey,e.name)}async function wX(e,t,r=!1){const n=Ph(e),i=cP(n,t),s=await new gX(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SX=10*60*1e3;class _X{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kX(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!fP(t)){const i=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(cn(this.auth,i))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=SX&&this.cachedEventUids.clear(),this.cachedEventUids.has(jS(t))}saveEventToCache(t){this.cachedEventUids.add(jS(t)),this.lastProcessedEventTime=Date.now()}}function jS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fP({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kX(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fP(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CX(e,t={}){return fa(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TX=/^https?/;async function PX(e){if(e.config.emulator)return;const{authorizedDomains:t}=await CX(e);for(const r of t)try{if(IX(r))return}catch{}fn(e,"unauthorized-domain")}function IX(e){const t=p0(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!TX.test(r))return!1;if(EX.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const RX=new Ic(3e4,6e4);function $S(){const e=un().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function AX(e){return new Promise((t,r)=>{var n,i,o;function s(){$S(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$S(),r(cn(e,"network-request-failed"))},timeout:RX.get()})}if(!((i=(n=un().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=un().gapi)===null||o===void 0)&&o.load)s();else{const a=zY("iframefcb");return un()[a]=()=>{gapi.load?s():r(cn(e,"network-request-failed"))},LY(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>r(l))}}).catch(t=>{throw ld=null,t})}let ld=null;function jX(e){return ld=ld||AX(e),ld}/**
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
 */const $X=new Ic(5e3,15e3),OX="__/auth/iframe",NX="emulator/auth/iframe",LX={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zX=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DX(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Ay(t,NX):`https://${e.config.authDomain}/${OX}`,n={apiKey:t.apiKey,appName:e.name,v:Pc},i=zX.get(e.config.apiHost);i&&(n.eid=i);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Tc(n).slice(1)}`}async function MX(e){const t=await jX(e),r=un().gapi;return te(r,e,"internal-error"),t.open({where:document.body,url:DX(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LX,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=cn(e,"network-request-failed"),a=un().setTimeout(()=>{o(s)},$X.get());function l(){un().clearTimeout(a),i(n)}n.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const FX={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BX=500,VX=600,UX="_blank",WX="http://localhost";class OS{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HX(e,t,r,n=BX,i=VX){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FX),{width:n.toString(),height:i.toString(),top:o,left:s}),c=It().toLowerCase();r&&(a=H5(c)?UX:r),W5(c)&&(t=t||WX,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,v])=>`${h}${p}=${v},`,"");if(TY(c)&&a!=="_self")return GX(t||"",a),new OS(null);const f=window.open(t||"",a,u);te(f,e,"popup-blocked");try{f.focus()}catch{}return new OS(f)}function GX(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const qX="__/auth/handler",KX="emulator/auth/handler",YX=encodeURIComponent("fac");async function NS(e,t,r,n,i,o){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Pc,eventId:i};if(t instanceof Ny){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Kq(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(o||{}))s[u]=f}if(t instanceof Rc){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(s.scopes=u.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${YX}=${encodeURIComponent(l)}`:"";return`${XX(e)}?${Tc(a).slice(1)}${c}`}function XX({config:e}){return e.emulator?Ay(e,KX):`https://${e.authDomain}/${qX}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="webStorageSupport";class QX{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iP,this._completeRedirectFn=wX,this._overrideRedirectResult=yX}async _openPopup(t,r,n,i){var o;Hn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await NS(t,r,n,p0(),i);return HX(t,s,Ly())}async _openRedirect(t,r,n,i){await this._originValidation(t);const o=await NS(t,r,n,p0(),i);return tX(o),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(Hn(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await MX(t),n=new _X(t);return r.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(fm,{type:fm},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fm];s!==void 0&&r(!!s),fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=PX(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return X5()||Oy()||Th()}}const JX=QX;var LS="@firebase/auth",zS="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZX{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eQ(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tQ(e){tc(new ta("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q5(e)},c=new OY(n,i,o,l);return MY(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),tc(new ta("auth-internal",t=>{const r=Ph(t.getProvider("auth").getImmediate());return(n=>new ZX(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Is(LS,zS,eQ(e)),Is(LS,zS,"esm2017")}/**
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
 */const rQ=5*60,nQ=P5("authIdTokenMaxAge")||rQ;let DS=null;const iQ=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>nQ)return;const i=r==null?void 0:r.token;DS!==i&&(DS=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oQ(e=KK()){const t=j5(e,"auth");if(t.isInitialized())return t.getImmediate();const r=DY(e,{popupRedirectResolver:JX,persistence:[uX,JY,iP]}),n=P5("authTokenSyncURL");if(n){const o=iQ(n);KY(r,o,()=>o(r.currentUser)),qY(r,s=>o(s))}const i=zq("auth");return i&&FY(r,`http://${i}`),r}tQ("Browser");const sQ={apiKey:"AIzaSyBaZY568hO4K3l9ucLVyXgBoHNQRH6JfkI",authDomain:"trendloom-6998b.firebaseapp.com",projectId:"trendloom-6998b",storageBucket:"trendloom-6998b.appspot.com",messagingSenderId:"1092683176518",appId:"1:1092683176518:web:720f47a2d7c4c9713bc847",measurementId:"G-GZNFJLXVWD"},aQ=$5(sQ),hP=oQ(aQ),pP=new Cn,lQ=()=>{const e=Wr(),{isLogin:t,setIsLogin:r,setUname:n,setUemail:i,uemail:o}=qn(),{addToCart:s}=Li(),[a,l]=w.useState(""),[c,u]=w.useState(""),[f,h]=w.useState(""),[p,v]=w.useState(!1);w.useEffect(()=>{t&&e("/")},[]);const y=async m=>{if(t){U.info("You are already login");return}if(m.preventDefault(),!c&&!f){U.error("Please Enter Email and Password.");return}if(!c){U.error("Please Enter Email.");return}if(!f){U.error("Please Enter Password.");return}const b={name:a,email:c,password:f},C=(await re.post("http://localhost:8080/logIn/LogInCus",b)).data;if(C.jwtToken){n(C.username),i(c),localStorage.setItem("ACCESS_TOKEN",C.jwtToken),localStorage.setItem("USERNAME",C.username);const E=sr(),P=(await re.get("http://localhost:8080/cart/viewCart",{headers:E})).data;console.log(P),P.map($=>{const j=$.product[0].product_sizes.filter(M=>M.psize===$.size);s($.product[0].pId,$.product[0].color,$.quty,j[0].price,j[0].pstock,$.size,$.product[0],$.id)}),U.success("Login Successful.",{theme:"light"}),r(!0),e("/")}else C==="Account does not exist create new account"?(U.error("Account does not exist create new account."),e("/signup")):C==="Incorrect password try to LogIn with Google"?U.error("Incorrect password try to LogIn with Google."):C==="Incorrect password"&&U.error("Incorrect password.")},x=async()=>{dP(hP,pP).then(async m=>{try{const b={email:m.user.email},S=await re.post("http://localhost:8080/logIn/LogInAuth",b);if(S.data==="Account does not exist create new account"){U.error("Account does not exist create new account"),i(""),n("");return}else{localStorage.setItem("ACCESS_TOKEN",S.data.jwtToken),localStorage.setItem("USERNAME",S.data.username),i(m.user.email),n(S.data.username),r(!0),U.success("Login Successful.",{theme:"light"});const C=sr(),k=(await re.get("http://localhost:8080/cart/viewCart",{headers:C})).data;console.log(k),k.map(P=>{const $=P.product[0].product_sizes.filter(j=>j.psize===P.size);s(P.product[0].pId,P.product[0].color,P.quty,$[0].price,$[0].pstock,P.size,P.product[0],P.id)}),e("/")}}catch(b){console.log(b)}})},g=async()=>{if(c===""){U.error("Please enter email");return}let m=window.location.href;m=m.substring(0,m.length-5),m=m+"forgetpassword";const b={email:c,url:m};try{if((await re.post("http://localhost:8080/forgetP/forgotPassword",b)).data==="Account does not exists create new account")U.error("Account does not exists create new account.");else{U.success("Email varification link has been sent to your email account",{position:"top-center"});try{window.top.close(),console.log("yey!!!!!!!!!!!!")}catch(C){console.log(C)}}}catch(S){console.log(S)}};return d.jsx(d.Fragment,{children:d.jsx(cQ,{children:d.jsxs("form",{"data-aos":"zoom-in","data-aos-duration":"1000",action:"#",className:"main-form",onSubmit:m=>{m.preventDefault()},children:[d.jsx("img",{className:"image",src:"/images/logo2.png",alt:""}),d.jsx("p",{className:"title",children:"Welcome To Login"}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(S5,{})}),d.jsx("input",{className:"input-i1",type:"email",placeholder:"Enter your email",onChange:m=>{u(m.target.value)},value:c})]}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(Fd,{})}),d.jsx("input",{className:"pass-i input-i1",type:p?"text":"password",placeholder:"Enter your password",onChange:m=>{h(m.target.value)},value:f}),p===!0?d.jsx("div",{className:"pass-icon",onClick:()=>{v(!1)},children:d.jsx(cf,{})}):d.jsx("div",{className:"pass-icon",onClick:()=>{v(!0)},children:d.jsx(uf,{})})]}),d.jsx("div",{className:"forgot-pass",children:d.jsx(rt,{onClick:g,className:"linkset",children:"Forgot Password?"})}),d.jsx("div",{className:"btn-div",children:d.jsx(it,{type:"submit",className:"btn",onClick:y,children:" Continue"})}),d.jsxs("p",{className:"signup",children:["Don't have an account? ",d.jsx(rt,{className:"linkset",to:"/signup",children:"Sign Up"})]}),d.jsxs("div",{className:"divide",children:[d.jsx("span",{children:"________________"}),d.jsx("p",{children:"OR"}),d.jsx("span",{children:"________________"})]}),d.jsxs("div",{className:"signInButton",onClick:x,children:[d.jsx("img",{className:"google-logo",src:"images/google-logo.png",alt:" "}),d.jsx("button",{children:"Login With Google"})]})]})})})},cQ=oe.section`
                        height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303340;
    background-size: cover;

    .main-form{
    
    background-color: white;
    /* margin-left: 45rem; */

    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 40rem;
    height: 70rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
}

input{
    font-size: 1.7rem;
    height: 5.3rem;
    padding-left: 1rem;
    width: 30rem;
    /* border: 0.1px solid black; */
    text-transform: none;
    transition: border-color 0.3s;
    border-radius : 3px
}

input:focus{
    width: 30rem;
    height: 5rem;
    border: none;
    ${""}
    border-radius: 3px;
    
    text-align: start;
    font-size: 1.7rem;
    padding-left : 5rem;
}

.field{
    position : relative;
}


.icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    top : 1.2rem;
    left : 1rem;
}

.input-i1{
    padding-left : 5rem;
    padding-right : 4.7rem;
}

.pass-icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    right : 1rem;
    bottom : 1.3rem;
}

.sub-field{
    padding-left: 7px;
    display: flex;
    /* background-color: rgb(161, 90, 227); */
    border-radius: 30px;
    border: 1px solid black;
    width: 17rem;
    height: 2.5rem;
    flex-direction: column;
    /* align-items: start; */
}

.sub-field input{
    width: 10rem;
}

.image{
    width: 90px;
}

.password-icon{
    position: absolute;    
    padding: 0.75rem;
    right: 36px;
    z-index: 4;
}

.password-container{
    position: relative;
    width: 17rem;
    margin-left: 1rem;
}

.icon{
    z-index: 3;
}

.title{
    margin: 1.8rem;
    font-size: 2.7rem;
    font-family: sans-serif;
}

.btn-div{
    margin-top: 1.5rem;
}

.btn{
    background-color: #635dff;
    width: 30rem;
    height: 5rem;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1.8rem;
}

.btn:hover{
    cursor : pointer;
}

.setcontinue{
    color : #fff
}


.divide{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 17rem;
}

.divide p {
    padding: 5% 6% 0 6%;
    color: rgb(132, 132, 132);
    font-size: 13px;
    font-family: sans-serif;
}

.divide span{
    color: rgb(169, 169, 169);
}

.signup{
    font-family: sans-serif;
    font-size: 1.5rem;
    margin: 0;
}

.linkset{
    color : #635dff;
}

.forgot-pass{
    margin-left : 18rem;
    font-size : 1.5rem;
 }

 .signInButton{
    border-radius : 0.5rem;
    padding : 1rem;
    display : flex;
    gap : 1.4rem;
    align-items: center;
    cursor : pointer;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

.signInButton:hover{
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.google-logo{
    width : 2rem;
    height : 2rem;
    background-color : white;
}

                    `;function uQ(e){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"}}]})(e)}const mP=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:4,minLength:8},{id:3,value:"Strong",minDiversity:4,minLength:10}],dQ=(e,t=mP,r="!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~")=>{let n=e||"";t[0].minDiversity=0,t[0].minLength=0;const i=[{regex:"[a-z]",message:"lowercase"},{regex:"[A-Z]",message:"uppercase"},{regex:"[0-9]",message:"number"}];r&&i.push({regex:`[${r}]`,message:"symbol"});let o={};o.contains=i.filter(a=>new RegExp(`${a.regex}`).test(n)).map(a=>a.message),o.length=n.length;let s=t.filter(a=>o.contains.length>=a.minDiversity).filter(a=>o.length>=a.minLength).sort((a,l)=>l.id-a.id).map(a=>({id:a.id,value:a.value}));return Object.assign(o,s[0]),o};var gP={passwordStrength:dQ,defaultOptions:mP};const fQ=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(""),i=Wr(),{isLogin:o,setIsLogin:s,setUname:a,setUemail:l,uname:c,uemail:u}=qn(),[f,h]=w.useState(!1),[p,v]=w.useState(""),[y,x]=w.useState(""),[g,m]=w.useState(""),[b,S]=w.useState(!1);w.useEffect(()=>{o&&i("/")},[]),w.useEffect(()=>{g.length==0&&t(!1),g.length>0&&(t(!0),n(gP.passwordStrength(g).value))},[g]);const C=async k=>{if(h(!0),!p&&!y&&!g){U.error("Please enter name, email and password"),h(!1);return}else if(!p&&!y){U.error("Please enter name and email"),h(!1);return}else if(!y&&!g){U.error("Please enter password and email"),h(!1);return}else if(!p&&!g){U.error("Please enter name and password"),h(!1);return}else if(p)if(g){if(!y){U.error("Please enter email"),h(!1);return}}else{U.error("Please enter password"),h(!1);return}else{U.error("Please enter name"),h(!1);return}if(r!=="Strong"){U.error("Please enter Strong Password"),h(!1);return}k.preventDefault();try{const P={name:p,email:y,password:g};let j=(await re.post("http://localhost:8080/api/signup",P)).data;console.log(j),j==="OK"?(h(!1),l(y),i("/getotp")):(h(!1),U.warn("This email address already exist please login"),i("/login"))}catch(P){console.log(P)}},E=()=>{dP(hP,pP).then(async k=>{try{const P={name:k.user.displayName,email:k.user.email},$=await re.post("http://localhost:8080/api/signup/auth",P);if($.data==="Error"){console.log("in error"),U.error("User already exist please login"),l(""),a("");return}else localStorage.setItem("ACCESS_TOKEN",$.data.jwtToken),localStorage.setItem("USERNAME",$.data.username),l(k.user.email),a(k.user.displayName),s(!0),i("/")}catch(P){console.log(P)}})};return d.jsx(d.Fragment,{children:d.jsx(hQ,{children:d.jsxs("form",{"data-aos":"zoom-in","data-aos-duration":"1000",action:"#",className:"main-form",onSubmit:k=>{k.preventDefault()},children:[d.jsx("img",{className:"image",src:"/images/logo2.png",alt:""}),d.jsx("p",{className:"title",children:"Welcome To SignUp"}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(uQ,{})}),d.jsx("input",{className:"input-i1",type:"text",placeholder:"Enter name",onChange:k=>{v(k.target.value)},value:p})]}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(S5,{})}),d.jsx("input",{className:"input-i1",type:"email",placeholder:"Enter your email",onChange:k=>{x(k.target.value)},value:y})]}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(Fd,{})}),d.jsx("input",{className:"pass-i input-i1",type:b?"text":"password",placeholder:"Enter your password",onChange:k=>{m(k.target.value)},value:g}),b===!0?d.jsx("div",{className:"pass-icon",onClick:()=>{S(!1)},children:d.jsx(cf,{})}):d.jsx("div",{className:"pass-icon",onClick:()=>{S(!0)},children:d.jsx(uf,{})}),e?d.jsx("span",{className:"pass-strenght",children:`your password is ${r}`}):d.jsx("span",{})]}),d.jsx("div",{className:"btn-div",children:d.jsx(it,{type:"submit",className:"btn",onClick:C,children:f===!0?d.jsx("div",{className:"lodder",children:d.jsx(B$,{visible:!0,height:"30",width:"30",color:"white",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:""})}):"Continue"})}),d.jsxs("p",{className:"signup",children:["Already have an account? ",d.jsx(rt,{className:"linkset",to:"/login",children:" Log in"})]}),d.jsxs("div",{className:"divide",children:[d.jsx("span",{children:"________________"}),d.jsx("p",{children:"OR"}),d.jsx("span",{children:"________________"})]}),d.jsxs("div",{className:"signInButton",onClick:E,children:[d.jsx("img",{className:"google-logo",src:"images/google-logo.png",alt:" "}),d.jsx("button",{children:"Sign Up With Google"})]})]})})})},hQ=oe.section`
                        height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303340;
    background-size: cover;

    .main-form{
    
    background-color: white;
    /* margin-left: 45rem; */

    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 40rem;
    height: 66rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
}

input{
    font-size: 1.7rem;
    height: 5.3rem;
    padding-left: 1rem;
    width: 30rem;
    /* border: 0.1px solid black; */
    text-transform: none;
    transition: border-color 0.3s;
    border-radius : 3px
}

input:focus{
    width: 30rem;
    height: 5rem;
    border: none;
    ${""}
    border-radius: 3px;
    text-align: start;
    font-size: 1.7rem;
    padding-left : 5rem;
}

.field{
    position : relative;
}

.lodder{
    width : 4rem;
    height : 4rem;
    margin-top: 1.2rem;
}


.icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    top : 1.2rem;
    left : 1rem;
}

.input-i1{
    padding-left : 5rem;
    padding-right : 4.7rem;
}

.pass-icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    bottom : 1.3rem;
    right : 1rem;
    
}

.pass-strenght{
    color : rgb(0,0,0,0.6);
    position : absolute;
    bottom : 50px;
    right : 4px;
    font-size : 1.3rem;
}

.sub-field{
    padding-left: 7px;
    display: flex;
    /* background-color: rgb(161, 90, 227); */
    border-radius: 30px;
    border: 1px solid black;
    width: 17rem;
    height: 2.5rem;
    flex-direction: column;
    /* align-items: start; */
}

.sub-field input{
    width: 10rem;
}

.image{
    width: 90px;
}

.password-icon{
    position: absolute;    
    padding: 0.75rem;
    right: 36px;
    z-index: 4;
}

.password-container{
    position: relative;
    width: 17rem;
    margin-left: 1rem;
}

.icon{
    z-index: 3;
}

.title{
    margin: 1.8rem;
    font-size: 2.7rem;
    font-family: sans-serif;
}

.btn-div{
    margin-top: 1.5rem;
}

.btn{
    background-color: #635dff;
    width: 30rem;
    height: 5rem;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1.8rem;
    display : flex;
    justify-content : center;
    align-items : center;
}

.btn:hover{
    cursor : pointer;
}

.setcontinue{
    color : #fff
}

.divide{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 17rem;
}

.divide p {
    padding: 5% 6% 0 6%;
    color: rgb(132, 132, 132);
    font-size: 13px;
    font-family: sans-serif;
}

.divide span{
    color: rgb(169, 169, 169);
}

.signup{
    font-family: sans-serif;
    font-size: 1.5rem;
    margin: 0;
}

.signup a {
    text-decoration: none;
}

.linkset{
    color : #635dff;
}

.signInButton{
    border-radius : 0.5rem;
    padding : 1rem;
    display : flex;
    gap : 1.4rem;
    align-items: center;
    cursor : pointer;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

.signInButton:hover{
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.google-logo{
    width : 2rem;
    height : 2rem;
    background-color : white;
}


@media (max-width: ${({theme:e})=>e.media.tab}) {
    .pass-strenght{
        color : rgb(0,0,0,0.6);
        position : absolute;
        bottom : 39px;
        right : 4px;
        font-size : 1.3rem;
    } 

    .main-form{
        height : 75rem;
    }
  }



                    `;var MS=function(e){return typeof e=="object"&&e!==null},pQ=function(e){var t=e.value,r=t===void 0?"":t,n=e.numInputs,i=n===void 0?4:n,o=e.onChange,s=e.onPaste,a=e.renderInput,l=e.shouldAutoFocus,c=l===void 0?!1:l,u=e.inputType,f=u===void 0?"text":u,h=e.renderSeparator,p=e.placeholder,v=e.containerStyle,y=e.inputStyle,x=e.skipDefaultStyles,g=x===void 0?!1:x,m=X.useState(0),b=m[0],S=m[1],C=X.useRef([]),E=function(){return r?r.toString().split(""):[]},k=f==="number"||f==="tel";X.useEffect(function(){C.current=C.current.slice(0,i)},[i]),X.useEffect(function(){var A;c&&((A=C.current[0])===null||A===void 0||A.focus())},[c]);var P=function(){if(typeof p=="string"){if(p.length===i)return p;p.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},$=function(A){var O=k?!isNaN(Number(A)):typeof A=="string";return O&&A.trim().length===1},j=function(A){var O=A.target.value;$(O)&&(F(O),ee(b+1))},M=function(A){var O=A.nativeEvent,z=A.target.value;if(!$(z)){if(z.length===i){var B=z.split("").some(function(V){return!$(V)});B||(G(z.split("")),ee(i-1))}O.data===null&&O.inputType==="deleteContentBackward"&&(A.preventDefault(),F(""),ee(b-1)),A.target.value=""}},q=function(A){return function(O){S(O),A.target.select()}},K=function(){S(b-1)},Y=function(A){var O=E();[A.code,A.key].includes("Backspace")?(A.preventDefault(),F(""),ee(b-1)):A.code==="Delete"?(A.preventDefault(),F("")):A.code==="ArrowLeft"?(A.preventDefault(),ee(b-1)):A.code==="ArrowRight"||A.key===O[b]?(A.preventDefault(),ee(b+1)):(A.code==="Spacebar"||A.code==="Space"||A.code==="ArrowUp"||A.code==="ArrowDown")&&A.preventDefault()},ee=function(A){var O,z,B=Math.max(Math.min(i-1,A),0);C.current[B]&&((O=C.current[B])===null||O===void 0||O.focus(),(z=C.current[B])===null||z===void 0||z.select(),S(B))},F=function(A){var O=E();O[b]=A[0],G(O)},G=function(A){var O=A.join("");o(O)},L=function(A){var O;A.preventDefault();var z=E(),B=b,V=A.clipboardData.getData("text/plain").slice(0,i-b).split("");if(!(k&&V.some(function(xe){return isNaN(Number(xe))}))){for(var ne=0;ne<i;++ne)ne>=b&&V.length>0&&(z[ne]=(O=V.shift())!==null&&O!==void 0?O:"",B++);ee(B),G(z)}};return X.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},MS(v)&&v),className:typeof v=="string"?v:void 0,onPaste:s},Array.from({length:i},function(A,O){return O}).map(function(A){var O,z,B;return X.createElement(X.Fragment,{key:A},a({value:(O=E()[A])!==null&&O!==void 0?O:"",placeholder:(B=(z=P())===null||z===void 0?void 0:z[A])!==null&&B!==void 0?B:void 0,ref:function(V){return C.current[A]=V},onChange:j,onFocus:function(V){return q(V)(A)},onBlur:K,onKeyDown:Y,onPaste:L,autoComplete:"off","aria-label":"Please enter OTP character ".concat(A+1),style:Object.assign(g?{}:{width:"1em",textAlign:"center"},MS(y)?y:{}),className:typeof y=="string"?y:void 0,type:f,inputMode:k?"numeric":"text",onInput:M},A),A<i-1&&(typeof h=="function"?h(A):h))}))};const mQ=()=>{const[e,t]=w.useState(""),r=Wr(),{setUname:n,setUemail:i,setIsLogin:o,uemail:s}=qn(),a=async()=>{try{const l={email:s,token:e};console.log(l);const c=await re.post("http://localhost:8080/api/signup/email",l);console.log(c);const u=c.data;u==="Error"?U.error("Please Enter Valid OTP"):(U.success("Signup Successful"),n(u.username),localStorage.setItem("ACCESS_TOKEN",u.jwtToken),localStorage.setItem("USERNAME",u.username),o(!0),r("/"))}catch(l){console.log(l)}};return d.jsx(d.Fragment,{children:d.jsx(gQ,{children:d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("h2",{children:"Enter OTP"}),d.jsx("p",{children:"We have sent a varification code to your Email ID"})]}),d.jsx("div",{children:d.jsx(pQ,{inputStyle:{width:"5rem",height:"5rem",margin:"0.8rem 0.8rem",fontSize:"2rem",borderRadius:4,border:"2px solid rgba(0,0,0,0.3)",padding:"0"},inputType:"tel",value:e,onChange:t,numInputs:6,renderInput:l=>d.jsx("input",{...l})})}),d.jsxs("div",{className:"card-footer",children:[d.jsx(it,{onClick:a,children:"Verify"}),d.jsx("p",{children:"Don't receive the code?"}),d.jsx(rt,{className:"linkset",to:"/",children:" Resend Code"})]})]})})})},gQ=oe.section`
overflow: hidden;
  height: 100vh;
  width : 100vw;
  display: flex;
  justify-content: center;
  align-items: center;


.card{
  height: 54rem;
  width: 50rem;
  border-radius: 10px;
  background-color: white;
  /* border: 0.5px solid rgb(83, 83, 83); */
  box-shadow: 0 0px 30px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  font-family: sans-serif;
  font-size: 1.3rem;

  margin-bottom : 8rem;
}

.card-header{
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.9rem;
}

.card-header p {
  text-align: center;
  padding: 0 11rem;
  line-height: 3rem;
}


.card-footer{
    margin-top : 0.5rem;
    display : flex;
    flex-direction: column;
    align-items : center;
    gap : 1rem;
    font-size : 1.6rem;
}

.card-footer p {
    margin-top : 2.8rem;
}

.card-footer button{
  
  border-radius: 8px; 
  width : 25rem;
}

.linkset{
    color : #635dff;
}

`,vQ=()=>{const[e,t]=w.useState(!1),[r,n]=w.useState(""),[i,o]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(!1),[u,f]=w.useState(!1),h=Wr();w.useEffect(()=>{i.length==0&&t(!1),i.length>0&&(t(!0),n(gP.passwordStrength(i).value))},[i]);const p=async()=>{if(i===""&&s===""){U.error("Please enter new password");return}else if(i!==s){U.error("New password and Confirm password is not match");return}else if(r!=="Strong"){U.error("Your new password is not strong enough");return}const x={token:new URLSearchParams(window.location.search).get("token"),password:i};try{(await re.post("http://localhost:8080/forgetP/resetPassword",x)).data==="OK"?(U.success("Password updated successfully!"),h("/")):console.log("fail")}catch(g){console.log(g)}};return d.jsx(d.Fragment,{children:d.jsx(yQ,{children:d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("img",{className:"image",src:"/images/logo2.png",alt:""}),d.jsx("h2",{children:"Forget Password"})]}),d.jsxs("div",{className:"field",children:[d.jsx("div",{className:"icon",children:d.jsx(Fd,{})}),d.jsx("input",{className:"pass-i input-i1",type:l?"text":"password",placeholder:"Enter New Password",onChange:v=>{o(v.target.value)},value:i}),l===!0?d.jsx("div",{className:"pass-icon",onClick:()=>{c(!1)},children:d.jsx(cf,{})}):d.jsx("div",{className:"pass-icon",onClick:()=>{c(!0)},children:d.jsx(uf,{})}),e?d.jsx("span",{className:"pass-strenght",children:`your password is ${r}`}):d.jsx("span",{})]}),d.jsxs("div",{className:"field field1",children:[d.jsx("div",{className:"icon",children:d.jsx(Fd,{})}),d.jsx("input",{className:"pass-i input-i1",type:u?"text":"password",placeholder:"Confirm New Password",onChange:v=>{a(v.target.value)},value:s}),u===!0?d.jsx("div",{className:"pass-icon",onClick:()=>{f(!1)},children:d.jsx(cf,{})}):d.jsx("div",{className:"pass-icon",onClick:()=>{f(!0)},children:d.jsx(uf,{})})]}),d.jsx("div",{className:"card-footer",children:d.jsx(it,{onClick:p,children:"Update"})})]})})})},yQ=oe.section`
overflow: hidden;
  height: 100vh;
  width : 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    font-size: 1.7rem;
    height: 5.3rem;
    padding-left: 1rem;
    width: 30rem;
    /* border: 0.1px solid black; */
    text-transform: none;
    transition: border-color 0.3s;
    border-radius : 3px
}

input:focus{
    width: 30rem;
    height: 5rem;
    border: none;
    ${""}
    border-radius: 3px;
    text-align: start;
    font-size: 1.7rem;
    padding-left : 5rem;
}


.card{

    margin-top : 8rem;
  height: 55rem;
  width: 54rem;
  border-radius: 10px;
  background-color: white;
  /* border: 0.5px solid rgb(83, 83, 83); */
  box-shadow: 0 0px 30px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  font-family: sans-serif;
  font-size: 1.3rem;

  margin-bottom : 8rem;
}

.card-header{
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.9rem;
}

.card-header p {
  text-align: center;
  padding: 0 11rem;
  line-height: 3rem;

  margin-bottom : -2rem;
}


.card-footer{
    margin-top : 0.5rem;
    display : flex;
    flex-direction: column;
    align-items : center;
    gap : 1rem;
    font-size : 1.6rem;
}

.card-footer p {
    margin-top : 2.8rem;
}

.card-footer button{
  
  border-radius: 8px; 
  width : 25rem;
}

.image{
    width: 90px;
}

.field{
    position : relative;
    margin-top : 1rem;
}

.field1{
    margin-top : -1.5rem;
}


.icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    top : 1.2rem;
    left : 1rem;
}

.input-i1{
    padding-left : 5rem;
    padding-right : 4.7rem;
}

.pass-icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    bottom : 1.3rem;
    right : 1rem;
    
}

.pass-strenght{
    color : rgb(0,0,0,0.6);
    position : absolute;
    bottom : 53px;
    right : 4px;
    font-size : 1.3rem;
}

.linkset{
    color : #635dff;
}



@media (max-width: ${({theme:e})=>e.media.tab}) {
    .pass-strenght{
        color : rgb(0,0,0,0.6);
        position : absolute;
        bottom : 43px;
        right : 4px;
        font-size : 1.3rem;
    } 

    .card{
        margin-top : 0rem;
        height : 70rem;
    }
  }

`,bQ=()=>{const e=Wr(),{orders:t,setOrders:r}=Ty(),{cart:n,total_item:i,total_price:o,shipping_fee:s,clearCart:a}=Li(),{name:l,mobileno:c,pincode:u,address:f,locality:h,district:p,state:v,saveaddress:y,setName:x,setAddress:g,setLocality:m,setMobileno:b,setPincode:S,setState:C,setsaveaddress:E,setDistrict:k,id:P}=Ey(),{isLogin:$}=qn();let j=new Date,M=j.getFullYear(),q=j.getMonth(),K=j.getDate();w.useEffect(()=>{$||e("/")},[]);const Y=async()=>{g(""),x(""),k(""),S(""),b(""),C(""),m(""),E("home");try{const G={name:l,mobile_no:c,pincode:u,addr:f,town:h,city:p,state:v},L=sr(),A=await re.put(`http://localhost:8080/addr/addAddr/${P}`,G,{headers:L});e("/address")}catch(G){U.error("Something went wrong"),console.log(G)}},ee=()=>{e("/address")},F=async G=>{G.preventDefault();const L=parseFloat(o)+s,A=sr();try{const B={key:"rzp_test_2fB7s8LlAuJ7HT",amount:100,currency:"INR",name:"Trendloom",description:"Test Transaction",image:"images/logo2.png",order_id:(await re.post("http://localhost:8080/payment/makePayment",L,{headers:A})).data.id,handler:function(V){if(typeof V.razorpay_payment_id>"u"||V.razorpay_payment_id<1)console.log("fail");else{async function ne(){const xe={amount:L,paymentType:"netbanking"};try{const se=await re.post("http://localhost:8080/order/createOrder",xe,{headers:A});r([...t,se.data]);const De=await re.put("http://localhost:8080/cart/clearCart",null,{headers:A});a(),e("/myorder")}catch(se){console.log(se)}}ne()}},prefill:{name:"Trendloom",email:"akshayvaghasiya3636@gmail.com"},notes:{address:"Soumya Dey Corporate Office"},theme:{color:"#61dafb"}};var O=new Razorpay(B);O.open()}catch(z){console.log(z)}};return d.jsx(d.Fragment,{children:d.jsx(xQ,{children:d.jsxs("div",{className:"main-class",children:[d.jsxs("div",{className:"address-detail",children:[d.jsx("h3",{children:"Delivery Address"}),d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"name-detail",children:[d.jsx("h3",{children:l}),d.jsx("button",{type:"button",children:y})]}),d.jsxs("div",{className:"address",children:[d.jsx("p",{children:`${f}, ${h}`}),d.jsx("p",{children:`${p}, ${v} - ${u}`})]}),d.jsxs("p",{children:["Mobile : ",d.jsx("b",{children:c})]}),d.jsxs("div",{className:"edit-button",children:[d.jsx("button",{type:"button",onClick:Y,children:"REMOVE"}),d.jsx("button",{type:"button",onClick:ee,children:"EDIT"})]})]})]}),d.jsxs("div",{className:"order-datail",children:[d.jsxs("div",{className:"product-estimate",children:[d.jsx("h3",{children:"DELIVERY ESTIMATES"}),d.jsx("div",{className:"product-item",children:n.map(G=>{const O=Math.floor(Math.random()*5)+6;let z=new Date(M,q,K+O).toDateString();return d.jsx(d.Fragment,{children:d.jsxs("div",{className:"product",children:[d.jsx("img",{src:G.image,alt:"product image"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[d.jsxs("p",{children:["Estimated delivery by ",d.jsx("b",{children:z.substring(8,10)})," ",d.jsx("b",{children:z.substring(4,7)})," ",d.jsx("b",{children:z.substring(11,15)})]}),d.jsxs("p",{children:["Size ",d.jsxs("b",{children:[": ",G.size]})]}),d.jsxs("p",{children:["Quantity ",d.jsxs("b",{children:[": ",G.amount]})]})]})]})})})}),d.jsx("hr",{}),d.jsxs("div",{className:"pricing",children:[d.jsxs("h3",{children:["PRICE DETAILS (",i," Items)"]}),d.jsxs("div",{className:"price-item",children:[d.jsxs("div",{className:"price-datail",children:[d.jsx("p",{children:"Total MRP  "}),d.jsx("p",{children:d.jsx(gt,{price:o})})]}),d.jsxs("div",{className:"price-datail",children:[d.jsx("p",{children:"Shipping Fee  "}),d.jsx("p",{children:d.jsx(gt,{price:s})})]}),d.jsx("hr",{}),d.jsxs("div",{className:"price-datail",children:[d.jsx("p",{style:{fontWeight:"550"},children:"Total Amount  "}),d.jsx("p",{style:{fontWeight:"550"},children:d.jsx(gt,{price:s+o})})]})]})]})]}),d.jsx(it,{style:{borderRadius:"0.5rem",letterSpacing:"1.2px",height:"5rem"},onClick:F,children:"Make Payment"})]})]})})})},xQ=oe.section`

    height : 100%;

.main-class{
    margin-left : 20rem;
    display : flex;
    flex-direction : row;
    gap : 4rem;
}


.address-detail{
    margin-top : 4rem;
    width : 50%;
    display : flex;
    flex-direction : column;
    gap : 3rem;
}

.address-detail h3{
    font-weight : bold;
    font-size : 1.8rem;
}

.address p{
    font-size : 1.3rem;
}

.card{
    height : 23rem;
    border : 0.3px solid rgb(0,0,0,0.2);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius : 0.6rem;
    display : flex;
    flex-direction : column;
    padding-left : 5rem;
    justify-content : space-around;
}

.card h3{
    margin-top : 1.3rem;
    font-size : 1.4rem;
}

.card p{
    font-size : 1.3rem;
}

.name-detail{
    display : flex;
    justify-content : space-between;
}

.name-detail button{
    margin-right : 3rem;
    margin-top : 1rem;
    border : 0.2px solid green;
    font-size : 1.2rem;
    width : 6rem;
    height : 2.5rem;
    border-radius : 1.6rem;
    font-weight : 550;
    color : green;
    padding : -1px;
    text-transform: uppercase;
}

.order-datail{
    border-left : 0.3px solid rgb(0,0,0,0.2);
    width : 40%;
    display : flex;
    flex-direction : column;
    gap : 4rem;
    padding-left : 2rem;    
    padding-right : 15rem;   
}

.edit-button{
    display : flex;
    margin-bottom : 1.9rem;
    gap : 2.3rem;
}

.edit-button button {
    border : 1px solid rgb(0,0,0,1);
    padding : 0.8rem 2rem;
    border-radius : 0.6rem; 
    font-size : 1rem;
    font-weight : bold; 
    letter-spacing : 1px;
}

.edit-button button:hover {
    border : 0.3px solid ${({theme:e})=>e.colors.btn};
    color : ${({theme:e})=>e.colors.btn};
}

.product-estimate{
    display : flex;
    flex-direction : column;
    gap : 2rem;
    margin-top : 3rem;  
}

.product-estimate :first-child{
    border-top : none;
}

.product-estimate h3 {
    font-size : 1.3rem; 
    font-weight : bold;
    color : rgb(0,0,0,0.7)
}

.product-item{
    display : flex;
    flex-direction : column;
    gap : 0.2rem;
}

.product{
    display : flex;
    gap : 2rem;
    align-items : center; 
    border-top: 1.4px dashed rgb(0,0,0,0.1); 
    padding-top : 1rem;
    padding-bottom : 1rem;
}

.product :first-child{
    display : inline;
}

.product img{
    height : 6rem;
    width : 5rem;
}

.product p{
    font-size : 1.39rem;
}


.pricing{
    display : flex;
    flex-direction : column;
    gap : 2rem;
}

.price-item{
    display : flex;
    flex-direction : column;
    gap : 1rem;
    
}

.price-item p {
    font-size : 1.3rem;
}

.price-datail{
    width : 70%;
    display : flex;
    justify-content : space-between; 
}

.price-datail :last-child{
    color : rgb(0,0,0,1);
}

@media (max-width: ${({theme:e})=>e.media.mobile}) 
{

    height : 100rem;

    .main-class{
    margin-left : 2rem;
    margin-right : 2rem;
    flex-direction : column;
    justify-content: space-around;
    gap : 4rem;
    }

.address-detail{
    width : 100%;
}

.order-datail{
    margin-left : 1rem;
    margin-right : 3rem;
    width : 90%;
    border-left : none;
    padding-right : 0;
}

.card p{
    font-size : 1.5rem;
}

.card h3{
    margin-top : 1.3rem;
    font-size : 1.6rem;
}

.edit-button button {
    font-size : 1.3rem;
}

.product-estimate h3 {
    font-size : 1.6rem;
}

.product p{
    font-size : 1.7rem;
}

.price-item p {
    font-size : 1.6rem;
}

.price-datail{
    width : 70%;
   
}

}


`,wQ=()=>{let e=new Date().toDateString();const t=Wr(),{orders:r}=Ty(),{products:n}=Yf(),i=(s,a)=>{let l;return n.map(c=>{c.pId===s&&c.product_sizes.map(u=>{u.psize===a&&(l=u.price)})}),l};let o;return d.jsx(d.Fragment,{children:d.jsx(SQ,{children:d.jsxs("div",{className:"main-div",children:[d.jsx("div",{className:"header",children:d.jsx("h2",{children:"Your Orders"})}),d.jsx("div",{className:"blank"}),d.jsx("div",{className:"content",children:r.length!==0?r.map((s,a)=>(o=new Date(s.date.substring(0,10)).toDateString(),d.jsxs("div",{className:"item-division",children:[s.orderItems.map((l,c)=>d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"item",children:[d.jsx("img",{className:"item-pic",src:`${l.image}`,alt:"product pic"}),d.jsxs("div",{className:"order-detail",children:[d.jsxs("div",{className:"item-detail",children:[d.jsx("p",{style:{fontSize:"2rem"},children:l.name}),d.jsxs("p",{style:{fontSize:"1.5rem",color:"rgb(0,0,0,0.6)"},children:["Colour : ",l.color]}),d.jsxs("p",{style:{fontSize:"1.5rem",color:"rgb(0,0,0,0.6)"},children:["Item : ",l.qyt]}),d.jsxs("p",{style:{fontSize:"1.5rem",color:"rgb(0,0,0,0.6)"},children:["Size : ",l.size]})]}),d.jsx("p",{children:Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2}).format(i(l.pId,l.size)/100*l.qyt)}),d.jsxs("div",{className:"delivery-detail",children:[d.jsxs("p",{children:["Delivery expected by ",e.substring(8,10)," ",e.substring(4,7)," ",e.substring(11,15)]}),d.jsx("p",{style:{fontSize:"1.5rem",color:"rgb(0,0,0,0.6)"},children:"Your Order has been placed"})]}),d.jsxs("div",{className:"buttons",children:[d.jsx("button",{className:"view-product-button",onClick:()=>t(`/singleproduct/${l.pId}`),children:"View Product"}),d.jsx("button",{className:"view-product-button",children:"Track Order"})]})]})]}),d.jsx("hr",{})]})),d.jsxs("div",{className:"item-footer",children:[d.jsxs("p",{style:{color:"rgb(0,0,0,0.5)",fontSize:"1.6rem"},children:["Ordered On ",d.jsxs("span",{style:{color:"rgb(0,0,0,0.8)"},children:[o.substring(8,10)," ",o.substring(4,7)," ",o.substring(11,15)]})]}),d.jsxs("p",{style:{color:"rgb(0,0,0,0.5)",fontSize:"1.6rem"},children:["Order Total : ",d.jsx("span",{style:{color:"rgb(0,0,0,0.8)"},children:Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2}).format(s.totalAmount/100)})]})]}),d.jsx("hr",{}),d.jsx("div",{className:"item-footer",children:d.jsxs("p",{style:{color:"rgb(0,0,0,0.5)",fontSize:"1.6rem"},children:["Address : ",d.jsx("span",{style:{color:"rgb(0,0,0,0.8)"},children:s.addr})]})})]}))):d.jsx(d.Fragment,{})})]})})})},SQ=oe.section`

  padding : 4rem 10rem;
  height : 100%;

  .main-div{
    display : flex;
    flex-direction : column;
  }

  .header{
    padding-left : 3rem;
  }

  .header h2{
    font-weight : 550;
    letter-spacing : 0.1rem;
  }

  .blank{
    height : 6rem;
    background-color :  #F9F6F4;
  }

  .content{
    display : flex;
    flex-direction : column;
    box-shadow : 1px 1px 20px rgba(0,0,0,0.2);
    padding : 1rem;
  }

  .item{
    display : flex;
    
  }

  .item-division{
    display : flex;
    flex-direction : column;
    border : 0.1px solid rgb(0,0,0,0.2);
    margin : 1rem 0;
  }

  .item-pic{
    margin-left : 6rem; 
    margin-right : 6rem;
    padding : 2rem 0;
    width : 12rem;
   
  }

  .order-detail{
    width : 100%;
    margin-top : 1.5rem;
    display : grid;
    grid-template-columns : 3fr 1fr 3fr 1fr;

  }

  .item-detail{
    display : flex;
    flex-direction : column;
    gap : 0.5rem;
  }

  .item-footer{
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin : 1rem;
  }

  .delivery-detail{
    display : flex;
    flex-direction : column;
    gap : 3rem;
    margin-left : 1.5rem;
  }

  .view-product-button{
    margin-right : 2rem;
    height : 4rem;
    width : 18rem;
    border : 1px solid rgb(0,0,0,1)
  }

  .view-product-button:hover{
    box-shadow : 0.4px 0.4px 15px rgb(0,0,0,0.1);
  }

  .buttons{
    display : flex;
    flex-direction : column;

    gap : 5rem;
  }


  @media (max-width: ${({theme:e})=>e.media.mobile}) {
      padding : 0;

      .order-detail{
        grid-template-columns : 1fr;
        gap : 1rem;
      }

      .item-pic{
        width : 18rem;
        height : 30rem;
        margin : 0 2rem;
        margin-top : 1.6rem;
      }

      .view-product-button{
        margin-bottom : 2rem;
      }

      .delivery-detail{
        margin : 0;
      }

      .buttons{
        gap : 0rem;
      }
  }

`,_Q=()=>{const e={colors:{heading:"rgb(24 24 29)",text:"rgba(29 ,29, 29, .8)",white:"#fff",black:" #212529",helper:"#8490ff",bg:"#F6F8FA",footer_bg:"#0a1435",btn:"rgb(98 84 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",shadowSupport:" rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}};return d.jsx(qA,{theme:e,children:d.jsxs(BR,{children:[d.jsx(wq,{}),d.jsx(Eq,{}),d.jsxs(OR,{children:[d.jsx(At,{path:"/",element:d.jsx(H$,{})}),d.jsx(At,{path:"/about",element:d.jsx(G$,{})}),d.jsx(At,{path:"/products",element:d.jsx(hO,{})}),d.jsx(At,{path:"/contact",element:d.jsx(mO,{})}),d.jsx(At,{path:"/singleproduct/:id",element:d.jsx(MO,{})}),d.jsx(At,{path:"/cart",element:d.jsx(gq,{})}),d.jsx(At,{path:"/login",element:d.jsx(lQ,{})}),d.jsx(At,{path:"/signup",element:d.jsx(fQ,{})}),d.jsx(At,{path:"/getotp",element:d.jsx(mQ,{})}),d.jsx(At,{path:"/forgetpassword",element:d.jsx(vQ,{})}),d.jsx(At,{path:"/address",element:d.jsx(pq,{})}),d.jsx(At,{path:"/showaddress",element:d.jsx(bQ,{})}),d.jsx(At,{path:"/myorder",element:d.jsx(wQ,{})}),d.jsx(At,{path:"*",element:d.jsx(bq,{})})]}),d.jsx(Pq,{}),d.jsx(Tg,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored",style:{fontSize:"2rem"}})]})})},kQ="modulepreload",CQ=function(e){return"/"+e},FS={},EQ=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");i=Promise.all(r.map(s=>{if(s=CQ(s),s in FS)return;FS[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!n)for(let f=o.length-1;f>=0;f--){const h=o[f];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":kQ,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},TQ=e=>{e&&e instanceof Function&&EQ(()=>import("./web-vitals-BptxjviT.js"),__vite__mapDeps([])).then(({getCLS:t,getFID:r,getFCP:n,getLCP:i,getTTFB:o})=>{t(e),r(e),n(e),i(e),o(e)})},BS={transform:"scale(0.9) translateY(-24px)",fontSize:13},PQ=B7({components:{Form:{variants:{floating:{container:{_focusWithin:{label:{...BS,color:"rgb(0,0,0,1)"}},"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":{...BS,color:"rgb(0,0,0,0.5)"},label:{top:0,left:0,zIndex:2,position:"absolute",backgroundColor:"white",pointerEvents:"none",mx:4,px:2,my:6,transformOrigin:"left top",fontSize:12,color:"rgb(0,0,0,0.5)",letterSpacing:"0.4px"}}}}}}}),IQ=pm.createRoot(document.getElementById("root"));IQ.render(d.jsx(rH,{theme:PQ,children:d.jsx($$,{children:d.jsx(kO,{children:d.jsx(_q,{children:d.jsx(hq,{children:d.jsx(J$,{children:d.jsx(EO,{children:d.jsx(_Q,{})})})})})})})}));TQ();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}