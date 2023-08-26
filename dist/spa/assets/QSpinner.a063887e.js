import{c as z,a as Q,b as h,e as D,d as N}from"./dom.065eefe7.js";import{c as m,h as c,g as T,D as F,M as I,S as P,Q as L,R as U}from"./index.05cb437e.js";const $={xs:18,sm:24,md:32,lg:38,xl:46},K={size:String};function V(e,s=$){return m(()=>e.size!==void 0?{fontSize:e.size in s?`${s[e.size]}px`:e.size}:null)}const S="0 0 24 24",w=e=>e,x=e=>`ionicons ${e}`,C={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":x,"ion-ios":x,"ion-logo":x,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},B={o_:"-outlined",r_:"-round",s_:"-sharp"},M={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},A=new RegExp("^("+Object.keys(C).join("|")+")"),H=new RegExp("^("+Object.keys(B).join("|")+")"),R=new RegExp("^("+Object.keys(M).join("|")+")"),X=/^[Mm]\s?[-+]?\.?\d/,Y=/^img:/,G=/^svguse:/,J=/^ion-/,W=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var re=z({name:"QIcon",props:{...K,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:s}){const{proxy:{$q:n}}=T(),o=V(e),i=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),l=m(()=>{let r,t=e.name;if(t==="none"||!t)return{none:!0};if(n.iconMapFn!==null){const a=n.iconMapFn(t);if(a!==void 0)if(a.icon!==void 0){if(t=a.icon,t==="none"||!t)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(X.test(t)===!0){const[a,u=S]=t.split("|");return{svg:!0,viewBox:u,nodes:a.split("&&").map(f=>{const[p,g,y]=f.split("@@");return c("path",{style:g,d:p,transform:y})})}}if(Y.test(t)===!0)return{img:!0,src:t.substring(4)};if(G.test(t)===!0){const[a,u=S]=t.split("|");return{svguse:!0,src:a.substring(7),viewBox:u}}let d=" ";const v=t.match(A);if(v!==null)r=C[v[1]](t);else if(W.test(t)===!0)r=t;else if(J.test(t)===!0)r=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(R.test(t)===!0){r="notranslate material-symbols";const a=t.match(R);a!==null&&(t=t.substring(6),r+=M[a[1]]),d=t}else{r="notranslate material-icons";const a=t.match(H);a!==null&&(t=t.substring(2),r+=B[a[1]]),d=t}return{cls:r,content:d}});return()=>{const r={class:i.value,style:o.value,"aria-hidden":"true",role:"presentation"};return l.value.none===!0?c(e.tag,r,Q(s.default)):l.value.img===!0?c("span",r,h(s.default,[c("img",{src:l.value.src})])):l.value.svg===!0?c("span",r,h(s.default,[c("svg",{viewBox:l.value.viewBox||"0 0 24 24"},l.value.nodes)])):l.value.svguse===!0?c("span",r,h(s.default,[c("svg",{viewBox:l.value.viewBox},[c("use",{"xlink:href":l.value.src})])])):(l.value.cls!==void 0&&(r.class+=" "+l.value.cls),c(e.tag,r,h(s.default,[l.value.content])))}}});function Z(e,s=250){let n=!1,o;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},s),o=e.apply(this,arguments)),o}}function q(e,s,n,o){n.modifiers.stop===!0&&L(e);const i=n.modifiers.color;let l=n.modifiers.center;l=l===!0||o===!0;const r=document.createElement("span"),t=document.createElement("span"),d=U(e),{left:v,top:a,width:u,height:f}=s.getBoundingClientRect(),p=Math.sqrt(u*u+f*f),g=p/2,y=`${(u-p)/2}px`,j=l?y:`${d.left-v-g}px`,_=`${(f-p)/2}px`,O=l?_:`${d.top-a-g}px`;t.className="q-ripple__inner",N(t,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${j},${O},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${i?" text-"+i:""}`,r.setAttribute("dir","ltr"),r.appendChild(t),s.appendChild(r);const k=()=>{r.remove(),clearTimeout(b)};n.abort.push(k);let b=setTimeout(()=>{t.classList.add("q-ripple__inner--enter"),t.style.transform=`translate3d(${y},${_},0) scale3d(1,1,1)`,t.style.opacity=.2,b=setTimeout(()=>{t.classList.remove("q-ripple__inner--enter"),t.classList.add("q-ripple__inner--leave"),t.style.opacity=0,b=setTimeout(()=>{r.remove(),n.abort.splice(n.abort.indexOf(k),1)},275)},250)},50)}function E(e,{modifiers:s,value:n,arg:o}){const i=Object.assign({},e.cfg.ripple,s,n);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||o,keyCodes:[].concat(i.keyCodes||13)}}var ie=D({name:"ripple",beforeMount(e,s){const n=s.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const o={cfg:n,enabled:s.value!==!1,modifiers:{},abort:[],start(i){o.enabled===!0&&i.qSkipRipple!==!0&&i.type===(o.modifiers.early===!0?"pointerdown":"click")&&q(i,e,o,i.qKeyEvent===!0)},keystart:Z(i=>{o.enabled===!0&&i.qSkipRipple!==!0&&F(i,o.modifiers.keyCodes)===!0&&i.type===`key${o.modifiers.early===!0?"down":"up"}`&&q(i,e,o,!0)},300)};E(o,s),e.__qripple=o,I(o,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,s){if(s.oldValue!==s.value){const n=e.__qripple;n!==void 0&&(n.enabled=s.value!==!1,n.enabled===!0&&Object(s.value)===s.value&&E(n,s))}},beforeUnmount(e){const s=e.__qripple;s!==void 0&&(s.abort.forEach(n=>{n()}),P(s,"main"),delete e._qripple)}});function oe(e){return e.appContext.config.globalProperties.$router!==void 0}function ae(e){return e.isUnmounted===!0||e.isDeactivated===!0}const ee={size:{type:[Number,String],default:"1em"},color:String};function te(e){return{cSize:m(()=>e.size in $?`${$[e.size]}px`:e.size),classes:m(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var le=z({name:"QSpinner",props:{...ee,thickness:{type:Number,default:5}},setup(e){const{cSize:s,classes:n}=te(e);return()=>c("svg",{class:n.value+" q-spinner-mat",width:s.value,height:s.value,viewBox:"25 25 50 50"},[c("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{re as Q,ie as R,le as a,oe as b,V as c,K as u,ae as v};
