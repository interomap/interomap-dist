function v(){}const ot=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function E(t){t.forEach(Q)}function F(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function zt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Ft(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const s=U(e,n,i,u);t.p(s,r)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const V=typeof window<"u";let dt=V?()=>window.performance.now():()=>Date.now(),H=V?t=>requestAnimationFrame(t):v;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&H(X)}function _t(t){let e;return x.size===0&&H(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const d=e[o];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=o?r+1:pt(1,r,h=>e[n[h]].claim_order,o))-1;i[c]=n[d]+1;const a=d+1;n[a]=c,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const d=o<u.length?u[o]:null;t.insertBefore(s[c],d)}}function gt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=tt("style");return $t(Y(t),e),e.sheet}function $t(t,e){return gt(t.head||t,e),e.sheet}function xt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){P&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Qt(){return I(" ")}function Ut(){return I("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return nt(t,e,n,tt)}function te(t,e,n){return nt(t,e,n,wt)}function Nt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function ee(t){return Nt(t," ")}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function ie(t,e){t.value=e??""}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e){return new t(e)}const M=new Map;let D=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function J(t,e,n,i,r,u,s,l=0){const c=16.666/i;let o=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);o+=y*100+`%{${s(g,1-g)}}
`}const d=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(d)}_${l}`,h=Y(t),{stylesheet:f,rules:_}=M.get(h)||At(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Ct())}function Ct(){H(()=>{D||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),M.clear())})}let A;function k(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function ce(t){W().$$.on_mount.push(t)}function oe(t){W().$$.after_update.push(t)}function ue(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const $=[],K=[];let w=[];const z=[],rt=Promise.resolve();let B=!1;function st(){B||(B=!0,rt.then(lt))}function ae(){return st(),rt}function O(t){w.push(t)}function fe(t){z.push(t)}const L=new Set;let b=0;function lt(){if(b!==0)return;const t=A;do{try{for(;b<$.length;){const e=$[b];b++,k(e),jt(e.$$)}}catch(e){throw $.length=0,b=0,e}for(k(null),$.length=0,b=0;K.length;)K.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while($.length);for(;z.length;)z.pop()();B=!1,L.clear(),k(t)}function jt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Mt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let N;function Dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function R(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function de(){p={r:0,c:[],p}}function _e(){p.r||E(p.c),p=p.p}function Ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function he(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function me(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,l=null,c=null,o=null;function d(){o&&St(t,o)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=ot,tick:g=v,css:T}=u||Pt,q={start:dt()+_,b:f};f||(q.group=p,p.r+=1),l||c?c=q:(T&&(d(),o=J(t,s,f,m,_,y,T)),f&&g(0,1),l=a(q,m),O(()=>R(t,f,"start")),_t(S=>{if(c&&S>c.start&&(l=a(c,m),c=null,R(t,l.b,"start"),T&&(d(),o=J(t,s,l.b,l.duration,0,y,u.css))),l){if(S>=l.end)g(s=l.b,1-s),R(t,l.b,"end"),c||(l.b?d():--l.group.r||E(l.group.c)),l=null;else if(S>=l.start){const ct=S-l.start;s=l.a+l.d*y(ct/l.duration),g(s,1-s)}}return!!(l||c)}))}return{run(f){F(u)?Dt().then(()=>{u=u(r),h(f)}):h(f)},end(){d(),l=c=null}}}const pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ye(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ge(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(Q).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),u.forEach(O)}function qt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&($.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,r,u,s,l=[-1]){const c=A;k(t);const o=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return o.ctx&&r(o.ctx[a],o.ctx[a]=_)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](_),d&&Lt(t,a)),h}):[],o.update(),d=!0,E(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ht();const a=vt(e.target);o.fragment&&o.fragment.l(a),a.forEach(Z)}else o.fragment&&o.fragment.c();e.intro&&Ot(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),mt(),lt()}k(c)}class xe{$destroy(){qt(this,1),this.$destroy=v}$on(e,n){if(!F(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ie as $,Tt as A,qt as B,Ft as C,It as D,Wt as E,Ht as F,xt as G,v as H,Bt as I,lt as J,Vt as K,E as L,ue as M,ut as N,Gt as O,O as P,me as Q,Kt as R,xe as S,Xt as T,se as U,ye as V,fe as W,pe as X,wt as Y,te as Z,zt as _,Qt as a,Jt as b,ee as c,he as d,Ut as e,_e as f,Ot as g,Z as h,$e as i,oe as j,tt as k,Zt as l,vt as m,Yt as n,ce as o,re as p,I as q,Nt as r,Rt as s,ae as t,ne as u,de as v,K as w,le as x,ge as y,be as z};