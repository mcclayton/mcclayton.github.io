(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uqSU:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return Rt}));var r=e("phZJ"),o=e.n(r),i=e("lFqo"),a=e.n(i),c=e("IVAY"),u=e.n(c),s=e("Jmq7"),f=e.n(s),l=e("aDmP"),d=e.n(l),p=e("q1tI"),m=e.n(p);var v={data:""},y=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||v},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,g=/\/\*[^]*?\*\/|\s\s+|\n/g,h=function t(n,e){var r,o="",i="",a="",c=function(c){var s=n[c];"object"==typeof s?(r=e?e.replace(/([^,])+/g,(function(t){return c.replace(/([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):c,i+="@"==c[0]?"f"==c[1]?t(s,c):c+"{"+t(s,"k"==c[1]?"":e)+"}":t(s,r)):"@"==c[0]&&"i"==c[1]?o=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(c,s):c+":"+s+";"),u=c};for(var u in n)c(u);return a[0]?o+(r=e?e+"{"+a+"}":a)+i:o+i},T={},x=function(t,n,e,r,o){var i,a,c,u="object"==typeof t?function t(n){var e="";for(var r in n)e+=r+("object"==typeof n[r]?t(n[r]):n[r]);return e}(t):t,s=T[u]||(T[u]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(u));if(!T[s]){var f="object"==typeof t?t:function(t){for(var n,e=[{}];n=b.exec(t.replace(g,""));)n[4]&&e.shift(),n[3]?e.unshift(e[0][n[3]]=e[0][n[3]]||{}):n[4]||(e[0][n[1]]=n[2]);return e[0]}(t);T[s]=h(o?(c=f,(a="@keyframes "+s)in(i={})?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,i):f,e?"":"."+s)}return function(t,n,e){-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(T[s],n,r),s},E=function(t,n,e){return t.reduce((function(t,r,o){var i=n[o];if(i&&i.call){var a=i(e),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=c?"."+c:a&&"object"==typeof a?a.props?"":h(a,""):a}return t+r+(null==i?"":i)}),"")};function O(t){var n=this||{},e=t.call?t(n.p):t;return x(e.unshift?e.raw?E(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return e?Object.assign(t,e.call?e(n.p):e):t}),{}):e,y(n.target),n.g,n.o,n.k)}O.bind({g:1});var S,A,w,j=O.bind({k:1});function _(t,n){var e=this||{};return function(){var r=arguments;function o(i,a){var c=Object.assign({},i),u=c.className||o.className;e.p=Object.assign({theme:A&&A()},c),e.o=/ *go\d+/.test(u),c.className=O.apply(e,r)+(u?" "+u:""),n&&(c.ref=a);var s=c.as||t;return w&&s[0]&&w(c),S(s,c)}return n?n(o):o}}function D(){return(D=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function P(t,n){return n||(n=t.slice(0)),t.raw=n,t}var R,I=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},M=function(){var t=0;return function(){return(++t).toString()}}(),U=function(){var t=void 0;return function(){if(void 0===t){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(R||(R={}));var k=new Map,C=function(t){if(!k.has(t)){var n=setTimeout((function(){k.delete(t),F({type:R.REMOVE_TOAST,toastId:t})}),1e3);k.set(t,n)}},N=function t(n,e){switch(e.type){case R.ADD_TOAST:return D({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case R.UPDATE_TOAST:return e.toast.id&&function(t){var n=k.get(t);n&&clearTimeout(n)}(e.toast.id),D({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?D({},t,e.toast):t}))});case R.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:R.UPDATE_TOAST,toast:r}):t(n,{type:R.ADD_TOAST,toast:r});case R.DISMISS_TOAST:var o=e.toastId;return o?C(o):n.toasts.forEach((function(t){C(t.id)})),D({},n,{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?D({},t,{visible:!1}):t}))});case R.REMOVE_TOAST:return void 0===e.toastId?D({},n,{toasts:[]}):D({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case R.START_PAUSE:return D({},n,{pausedAt:e.time});case R.END_PAUSE:var i=e.time-(n.pausedAt||0);return D({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return D({},t,{pauseDuration:t.pauseDuration+i})}))})}},z=[],V={toasts:[],pausedAt:void 0},F=function(t){V=N(V,t),z.forEach((function(t){t(V)}))},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),D({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||M()})}(n,t,e);return F({type:R.UPSERT_TOAST,toast:r}),r.id}},B=function(t,n){return J("blank")(t,n)};B.error=J("error"),B.success=J("success"),B.loading=J("loading"),B.custom=J("custom"),B.dismiss=function(t){F({type:R.DISMISS_TOAST,toastId:t})},B.remove=function(t){return F({type:R.REMOVE_TOAST,toastId:t})},B.promise=function(t,n,e){var r=B.loading(n.loading,D({},e,null==e?void 0:e.loading));return t.then((function(t){return B.success(I(n.success,t),D({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){B.error(I(n.error,t),D({id:r},e,null==e?void 0:e.error))})),t};var L=function(t){var n=function(t){void 0===t&&(t={});var n=Object(p.useState)(V),e=n[0],r=n[1];Object(p.useEffect)((function(){return z.push(r),function(){var t=z.indexOf(r);t>-1&&z.splice(t,1)}}),[e]);var o=e.toasts.map((function(n){var e,r,o;return D({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||q[n.type],style:D({},t.style,null==(o=t[n.type])?void 0:o.style,n.style)})}));return D({},e,{toasts:o})}(t),e=n.toasts,r=n.pausedAt;Object(p.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return B.dismiss(n.id)}),e);n.visible&&B.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var o=Object(p.useMemo)((function(){return{startPause:function(){F({type:R.START_PAUSE,time:Date.now()})},endPause:function(){r&&F({type:R.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return F({type:R.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,o=n||{},i=o.reverseOrder,a=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,s=o.defaultPosition,f=e.filter((function(n){return(n.position||s)===(t.position||s)&&n.height})),l=f.findIndex((function(n){return n.id===t.id})),d=f.filter((function(t,n){return n<l&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,a?[d+1]:[0,d]).reduce((function(t,n){return t+(n.height||0)+u}),0)}}}),[e,r]);return{toasts:e,handlers:o}};function H(){var t=P(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return H=function(){return t},t}function Y(){var t=P(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return Y=function(){return t},t}function Z(){var t=P(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return Z=function(){return t},t}function $(){var t=P(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return $=function(){return t},t}var G=j($()),K=j(Z()),Q=j(Y()),W=_("div")(H(),(function(t){return t.primary||"#ff4b4b"}),G,K,(function(t){return t.secondary||"#fff"}),Q);function X(){var t=P(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return X=function(){return t},t}function tt(){var t=P(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return tt=function(){return t},t}var nt=j(tt()),et=_("div")(X(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),nt);function rt(){var t=P(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return rt=function(){return t},t}function ot(){var t=P(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return ot=function(){return t},t}function it(){var t=P(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return it=function(){return t},t}var at=j(it()),ct=j(ot()),ut=_("div")(rt(),(function(t){return t.primary||"#61d345"}),at,ct,(function(t){return t.secondary||"#fff"}));function st(){var t=P(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return st=function(){return t},t}function ft(){var t=P(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return ft=function(){return t},t}function lt(){var t=P(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return lt=function(){return t},t}function dt(){var t=P(["\n  position: absolute;\n"]);return dt=function(){return t},t}var pt=_("div")(dt()),mt=_("div")(lt()),vt=j(ft()),yt=_("div")(st(),vt),bt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?Object(p.createElement)(yt,null,e):e:"blank"===r?null:Object(p.createElement)(mt,null,Object(p.createElement)(et,Object.assign({},o)),"loading"!==r&&Object(p.createElement)(pt,null,"error"===r?Object(p.createElement)(W,Object.assign({},o)):Object(p.createElement)(ut,Object.assign({},o))))};function gt(){var t=P(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return gt=function(){return t},t}function ht(){var t=P(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return ht=function(){return t},t}var Tt=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},xt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},Et=_("div",p.forwardRef)(ht()),Ot=_("div")(gt()),St=Object(p.memo)((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,i=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=U()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Tt(e),xt(e)],o=r[1];return{animation:n?j(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":j(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},a=Object(p.createElement)(bt,{toast:n}),c=Object(p.createElement)(Ot,Object.assign({},n.ariaProps),I(n.message,n));return Object(p.createElement)(Et,{className:n.className,style:D({},i,r,n.style)},"function"==typeof o?o({icon:a,message:c}):Object(p.createElement)(p.Fragment,null,a,c))}));function At(){var t=P(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return At=function(){return t},t}!function(t,n,e,r){h.p=n,S=t,A=e,w=r}(p.createElement);var wt=O(At()),jt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,i=t.gutter,a=t.children,c=t.containerStyle,u=t.containerClassName,s=L(o),f=s.toasts,l=s.handlers;return Object(p.createElement)("div",{style:D({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:l.startPause,onMouseLeave:l.endPause},f.map((function(t){var e,o=t.position||r,c=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return D({left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,o)}(o,l.calculateOffset(t,{reverseOrder:n,gutter:i,defaultPosition:r})),u=t.height?void 0:(e=function(n){l.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return Object(p.createElement)("div",{ref:u,className:t.visible?wt:"",key:t.id,style:c},"custom"===t.type?I(t.message,t):a?a(t):Object(p.createElement)(St,{toast:t,position:o}))})))},_t=B,Dt=e("Bl7J");function Pt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)}}var Rt=function(t){u()(e,t);var n=Pt(e);function e(){return o()(this,e),n.apply(this,arguments)}return a()(e,[{key:"render",value:function(){var t=this.props.location,n='/bin/bash -c "$(curl -fsSL '.concat(t.origin,'/mac.sh)"');return m.a.createElement(Dt.a,null,m.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},m.a.createElement("img",{style:{height:"12rem"},src:"/mac.png"}),m.a.createElement("h2",null,"Mac Setup"),m.a.createElement("p",null,"Run the following command in your terminal to fully configure/setup your Mac."),m.a.createElement("p",{style:{cursor:"pointer",borderRadius:"5px",border:"1px solid #2E333E",padding:"5px"},onClick:function(){(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.target,r=void 0===e?document.body:e,o=document.createElement("textarea"),i=document.activeElement;o.value=t,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=t.length;var u=!1;try{u=document.execCommand("copy")}catch(s){}return o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),i&&i.focus(),u})(n)&&_t.success("Copied Script")}},n),m.a.createElement("a",{href:"https://github.com/mcclayton/MacSetup",className:"icon fa-github"},m.a.createElement("span",{style:{padding:"5px"}}," View MacSetup On Github")),m.a.createElement(jt,null)))}}]),e}(p.Component)}}]);
//# sourceMappingURL=component---src-pages-mac-js-1961632cac9206cf950f.js.map