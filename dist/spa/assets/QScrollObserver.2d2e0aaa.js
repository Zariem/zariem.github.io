import{r as V,b as D,t as v,o as g,u as H,v as E,h as Q,g as W,x as h,w as L}from"./index.05cb437e.js";import{c as R,g as q,d as O}from"./dom.065eefe7.js";function A(){const e=V(!D.value);return e.value===!1&&v(()=>{e.value=!0}),e}const M=typeof ResizeObserver!="undefined",P=M===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var G=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let t=null,n,i={width:-1,height:-1};function c(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:s,offsetHeight:l}=n;(s!==i.width||l!==i.height)&&(i={width:s,height:l},o("resize",i))}}const{proxy:a}=W();if(M===!0){let s;const l=d=>{n=a.$el.parentNode,n?(s=new ResizeObserver(c),s.observe(n),r()):d!==!0&&E(()=>{l(!0)})};return v(()=>{l()}),g(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():n&&s.unobserve(n))}),H}else{let d=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,h.passive),l=void 0)},f=function(){d(),n&&n.contentDocument&&(l=n.contentDocument.defaultView,l.addEventListener("resize",c,h.passive),r())};const s=A();let l;return v(()=>{E(()=>{n=a.$el,n&&f()})}),g(d),a.trigger=c,()=>{if(s.value===!0)return Q("object",{style:P.style,tabindex:-1,type:"text/html",data:P.url,"aria-hidden":"true",onLoad:f})}}}});const F=[null,document,document.body,document.scrollingElement,document.documentElement];function N(e,o){let t=q(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return F.includes(t)?window:t}function X(e){return(e===window?document.body:e).scrollHeight}function Y(e){return(e===window?document.body:e).scrollWidth}function y(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function S(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function T(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=y(e);if(t<=0){i!==o&&p(e,o);return}requestAnimationFrame(c=>{const r=c-n,a=i+(o-i)/Math.max(r,t)*r;p(e,a),a!==o&&T(e,o,t-r,c)})}function x(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=S(e);if(t<=0){i!==o&&b(e,o);return}requestAnimationFrame(c=>{const r=c-n,a=i+(o-i)/Math.max(r,t)*r;b(e,a),a!==o&&x(e,o,t-r,c)})}function p(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function b(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function $(e,o,t){if(t){T(e,o,t);return}p(e,o)}function j(e,o,t){if(t){x(e,o,t);return}b(e,o)}let w;function k(){if(w!==void 0)return w;const e=document.createElement("p"),o=document.createElement("div");O(e,{width:"100%",height:"200px"}),O(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),w=t-n,w}function B(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}var J={getScrollTarget:N,getScrollHeight:X,getScrollWidth:Y,getVerticalScrollPosition:y,getHorizontalScrollPosition:S,animVerticalScrollTo:T,animHorizontalScrollTo:x,setVerticalScrollPosition:$,setHorizontalScrollPosition:j,getScrollbarWidth:k,hasScrollbar:B};const{passive:C}=h,I=["both","horizontal","vertical"];var K=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>I.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,i,c;L(()=>e.scrollTarget,()=>{s(),a()});function r(){n!==null&&n();const f=Math.max(0,y(i)),m=S(i),u={top:f-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const z=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:f,left:m},t.directionChanged=t.direction!==z,t.delta=u,t.directionChanged===!0&&(t.direction=z,t.inflectionPoint=t.position),o("scroll",{...t})}function a(){i=N(c,e.scrollTarget),i.addEventListener("scroll",l,C),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,C),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")r();else if(n===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];n=()=>{u(m),n=null}}}const{proxy:d}=W();return L(()=>d.$q.lang.rtl,r),v(()=>{c=d.$el.parentNode,a()}),g(()=>{n!==null&&n(),s()}),Object.assign(d,{trigger:l,getPosition:()=>t}),H}});export{G as Q,K as a,j as b,N as c,J as d,k as g,$ as s};
