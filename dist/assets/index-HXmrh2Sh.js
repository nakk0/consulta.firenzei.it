var ee=Object.defineProperty;var te=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>(te(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function v(){}function k(e){return e()}function B(){return Object.create(null)}function j(e){e.forEach(k)}function G(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function ne(e,t){return e===t?!0:(P||(P=document.createElement("a")),P.href=t,e===P.href)}function ie(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function oe(e){return document.createTextNode(e)}function z(){return oe(" ")}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}let F;function C(e){F=e}const y=[],M=[];let b=[];const R=[],re=Promise.resolve();let L=!1;function se(){L||(L=!0,re.then(J))}function N(e){b.push(e)}const A=new Set;let $=0;function J(){if($!==0)return;const e=F;do{try{for(;$<y.length;){const t=y[$];$++,C(t),ae(t.$$)}}catch(t){throw y.length=0,$=0,t}for(C(null),y.length=0,$=0;M.length;)M.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];A.has(n)||(A.add(n),n())}b.length=0}while(y.length);for(;R.length;)R.pop()();L=!1,A.clear(),C(e)}function ae(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function ce(e){const t=[],n=[];b.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),b=t}const E=new Set;let ue;function Y(e,t){e&&e.i&&(E.delete(e),e.i(t))}function fe(e,t,n,i){if(e&&e.o){if(E.has(e))return;E.add(e),ue.c.push(()=>{E.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function S(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function de(e){e&&e.c()}function Z(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),N(()=>{const s=e.$$.on_mount.map(k).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...s):j(s),e.$$.on_mount=[]}),o.forEach(N)}function Q(e,t){const n=e.$$;n.fragment!==null&&(ce(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(y.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,i,o,s,c=null,x=[-1]){const h=F;C(e);const a=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:o,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:B(),dirty:x,skip_bound:!1,root:t.target||h.$$.root};c&&c(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(d,f,...r)=>{const _=r.length?r[0]:f;return a.ctx&&o(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),u&&pe(e,d)),f}):[],a.update(),u=!0,j(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const d=le(t.target);a.fragment&&a.fragment.l(d),d.forEach(O)}else a.fragment&&a.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),J()}C(h)}class X{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){Q(this,1),this.$destroy=v}$on(t,n){if(!G(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ge="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ge);const me="/assets/instagram-y5Zd3PKq.webp",he="/assets/gmail-6VUlIIdJ.webp",_e="/assets/consulta-wRDodwGF.jpeg",ve="/assets/facebook-poCYdx3c.png",xe="/assets/pegaso-onzynSIu.jpg";function T(e,t,n){const i=e.slice();return i[2]=t[n].src,i[3]=t[n].alt,i[4]=t[n].url,i}function K(e,t,n){const i=e.slice();return i[7]=t[n].title,i[8]=t[n].p,i}function U(e){let t,n,i,o;return{c(){t=m("div"),n=m("p"),n.textContent=`${e[7]}`,i=z(),o=m("p"),o.textContent=`${e[8]}`,p(n,"class","text-2xl font-[600] text-start my-2"),p(t,"class","sm:w-5/6 text-center bg-[#e2e2e2] my-5 px-1 rounded-xl text-pretty")},m(s,c){I(s,t,c),g(t,n),g(t,i),g(t,o)},p:v,d(s){s&&O(t)}}}function V(e){let t,n,i,o,s;return{c(){t=m("div"),n=m("a"),i=m("img"),s=z(),ne(i.src,o=e[2])||p(i,"src",o),p(i,"alt",e[3]),p(i,"class","w-1/4 my-5 object-contain"),p(n,"href",e[4]),p(n,"target","_blank"),p(n,"class","flex justify-center"),p(t,"class","flex justify-center bg-[#e2e2e2] rounded-xl w-full min-h-full")},m(c,x){I(c,t,x),g(t,n),g(n,i),g(t,s)},p:v,d(c){c&&O(t)}}}function $e(e){let t,n,i,o,s,c,x,h,a=S(e[0]),u=[];for(let r=0;r<a.length;r+=1)u[r]=U(K(e,a,r));let d=S(e[1]),f=[];for(let r=0;r<d.length;r+=1)f[r]=V(T(e,d,r));return{c(){t=m("div"),n=m("p"),n.textContent="Consulta Provinciale Degli Studenti Firenze",i=z(),o=m("div"),o.innerHTML=`<img src="${xe}" alt="foto palazzo pegaso" class="rounded-3xl sm:w-5/6"/>`,s=z(),c=m("div");for(let r=0;r<u.length;r+=1)u[r].c();x=z(),h=m("div");for(let r=0;r<f.length;r+=1)f[r].c();p(n,"class","md:text-5xl sm:text-4xl text-3xl font-bold text-center pt-5"),p(o,"class","flex justify-center my-5 mx-2 max-w-5/6"),p(h,"class","grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 sm:w-5/6 my-5"),p(c,"class","grid grid-cols-1 place-items-center mx-2 sm:mx-0"),p(t,"class","min-h-screen xl:w-2/3 lg:w-3/4 sm:w-5/6 mx-auto sm:my-2 bg-[#fffbff] sm:rounded-3xl")},m(r,_){I(r,t,_),g(t,n),g(t,i),g(t,o),g(t,s),g(t,c);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(c,null);g(c,x),g(c,h);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(h,null)},p(r,[_]){if(_&1){a=S(r[0]);let l;for(l=0;l<a.length;l+=1){const w=K(r,a,l);u[l]?u[l].p(w,_):(u[l]=U(w),u[l].c(),u[l].m(c,x))}for(;l<u.length;l+=1)u[l].d(1);u.length=a.length}if(_&2){d=S(r[1]);let l;for(l=0;l<d.length;l+=1){const w=T(r,d,l);f[l]?f[l].p(w,_):(f[l]=V(w),f[l].c(),f[l].m(h,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=d.length}},i:v,o:v,d(r){r&&O(t),D(u,r),D(f,r)}}}function ye(e){return[[{title:"Rappresentanza Studenti",p:"La Consulta Provinciale degli Studenti di Firenze è un organismo rappresentativo che svolge un ruolo fondamentale nell'ambito della partecipazione studentesca e nella promozione degli interessi degli studenti a livello locale. Fondata con l'obiettivo di favorire il coinvolgimento attivo degli studenti nelle decisioni che riguardano il mondo scolastico e universitario, la Consulta funge da ponte tra gli studenti e le istituzioni educative."},{title:"Partecipazione Attiva",p:"Composta da rappresentanti eletti dagli studenti stessi, la Consulta Provinciale di Firenze si impegna a rappresentare in modo efficace le varie esigenze e opinioni degli studenti, contribuendo così a creare un dialogo costruttivo con le istituzioni scolastiche, universitarie e locali. Attraverso la partecipazione attiva, la Consulta cerca di affrontare le problematiche quotidiane che gli studenti possono incontrare nel loro percorso educativo, promuovendo al contempo iniziative e progetti che possano migliorare la qualità dell'istruzione e della vita studentesca."},{title:"Iniziative Studentesche",p:"Oltre a svolgere un ruolo di advocacy, la Consulta Provinciale degli Studenti di Firenze organizza anche eventi, incontri e campagne informative, al fine di sensibilizzare la comunità studentesca su questioni rilevanti e incoraggiare la partecipazione attiva. In questo modo, la Consulta diventa un punto di riferimento per gli studenti che desiderano essere coinvolti nella costruzione di un ambiente educativo più inclusivo, equo e partecipativo."}],[{src:me,alt:"instagram logo",url:"https://www.instagram.com/cps_firenze/"},{src:he,alt:"gmail logo",url:"mailto:consultadifirenze@gmail.com"},{src:_e,alt:"website consulta",url:"https://cms.csa.fi.it/Consulta/tabid/259/Default.aspx"},{src:ve,alt:"facebook logo",url:"https://www.facebook.com/cpsfi/?locale=it_IT"}]]}class be extends X{constructor(t){super(),W(this,t,ye,$e,H,{})}}function we(e){let t,n,i;return n=new be({}),{c(){t=m("main"),de(n.$$.fragment)},m(o,s){I(o,t,s),Z(n,t,null),i=!0},p:v,i(o){i||(Y(n.$$.fragment,o),i=!0)},o(o){fe(n.$$.fragment,o),i=!1},d(o){o&&O(t),Q(n)}}}class ze extends X{constructor(t){super(),W(this,t,null,we,H,{})}}new ze({target:document.getElementById("app")});
