import{y as o,j as i,z as c}from"./index.05cb437e.js";const u=n=>o(i(n)),f=n=>o(n);function s(n,t){return n!==void 0&&n()||t}function d(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function v(n,t){return n!==void 0?t.concat(n()):t}function m(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function p(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=c(n);if(t)return t.$el||t}export{s as a,v as b,u as c,m as d,f as e,p as g,d as h};