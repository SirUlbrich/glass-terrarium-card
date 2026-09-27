var Rt=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var v=(s,t,e,i)=>{for(var n=i>1?void 0:i?Lt(t,e):t,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=(i?a(t,e,n):a(n))||n);return i&&n&&Rt(t,e,n),n};var I=globalThis,Z=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),pt=new WeakMap,z=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pt.set(e,t))}return t}toString(){return this.cssText}},dt=s=>new z(typeof s=="string"?s:s+"",void 0,X),g=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new z(e,s,X)},ht=(s,t)=>{if(Z)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=I.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},Y=Z?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return dt(e)})(s):s;var{is:Vt,defineProperty:jt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:qt,getOwnPropertySymbols:It,getPrototypeOf:Zt}=Object,W=globalThis,ut=W.trustedTypes,Wt=ut?ut.emptyScript:"",Kt=W.reactiveElementPolyfillSupport,N=(s,t)=>s,M={toAttribute(s,t){switch(t){case Boolean:s=s?Wt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},K=(s,t)=>!Vt(s,t),mt={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&jt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:r}=Bt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:n,set(a){let l=n?.call(this);r?.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let e=this.properties,i=[...qt(e),...It(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(Y(n))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:M;this._$Em=n;let l=a.fromAttribute(e,r.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(t!==void 0){let a=this.constructor;if(n===!1&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??K)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,r]of i){let{wrapped:a}=r,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[N("elementProperties")]=new Map,y[N("finalized")]=new Map,Kt?.({ReactiveElement:y}),(W.reactiveElementVersions??=[]).push("2.1.2");var at=globalThis,gt=s=>s,F=at.trustedTypes,bt=F?F.createPolicy("lit-html",{createHTML:s=>s}):void 0,xt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+x,Ft=`<${At}>`,w=document,L=()=>w.createComment(""),V=s=>s===null||typeof s!="object"&&typeof s!="function",ot=Array.isArray,Jt=s=>ot(s)||typeof s?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,$t=/>/g,A=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,vt=/"/g,St=/^(?:script|style|textarea|title)$/i,lt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=lt(1),ae=lt(2),oe=lt(3),C=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),yt=new WeakMap,S=w.createTreeWalker(w,129);function wt(s,t){if(!ot(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}var Gt=(s,t)=>{let e=s.length-1,i=[],n,r=t===2?"<svg>":t===3?"<math>":"",a=R;for(let l=0;l<e;l++){let o=s[l],d,h,p=-1,m=0;for(;m<o.length&&(a.lastIndex=m,h=a.exec(o),h!==null);)m=a.lastIndex,a===R?h[1]==="!--"?a=ft:h[1]!==void 0?a=$t:h[2]!==void 0?(St.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=A):h[3]!==void 0&&(a=A):a===A?h[0]===">"?(a=n??R,p=-1):h[1]===void 0?p=-2:(p=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?A:h[3]==='"'?vt:_t):a===vt||a===_t?a=A:a===ft||a===$t?a=R:(a=A,n=void 0);let _=a===A&&s[l+1].startsWith("/>")?" ":"";r+=a===R?o+Ft:p>=0?(i.push(d),o.slice(0,p)+xt+o.slice(p)+x+_):o+x+(p===-2?l:_)}return[wt(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},j=class s{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,a=0,l=t.length-1,o=this.parts,[d,h]=Gt(t,e);if(this.el=s.createElement(d,i),S.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=S.nextNode())!==null&&o.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(xt)){let m=h[a++],_=n.getAttribute(p).split(x),O=/([.?@])?(.*)/.exec(m);o.push({type:1,index:r,name:O[2],strings:_,ctor:O[1]==="."?st:O[1]==="?"?it:O[1]==="@"?nt:U}),n.removeAttribute(p)}else p.startsWith(x)&&(o.push({type:6,index:r}),n.removeAttribute(p));if(St.test(n.tagName)){let p=n.textContent.split(x),m=p.length-1;if(m>0){n.textContent=F?F.emptyScript:"";for(let _=0;_<m;_++)n.append(p[_],L()),S.nextNode(),o.push({type:2,index:++r});n.append(p[m],L())}}}else if(n.nodeType===8)if(n.data===At)o.push({type:2,index:r});else{let p=-1;for(;(p=n.data.indexOf(x,p+1))!==-1;)o.push({type:7,index:r}),p+=x.length-1}r++}}static createElement(t,e){let i=w.createElement("template");return i.innerHTML=t,i}};function H(s,t,e=s,i){if(t===C)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,r=V(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=H(s,n._$AS(s,t.values),n,i)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??w).importNode(e,!0);S.currentNode=n;let r=S.nextNode(),a=0,l=0,o=i[0];for(;o!==void 0;){if(a===o.index){let d;o.type===2?d=new B(r,r.nextSibling,this,t):o.type===1?d=new o.ctor(r,o.name,o.strings,this,t):o.type===6&&(d=new rt(r,this,t)),this._$AV.push(d),o=i[++l]}a!==o?.index&&(r=S.nextNode(),a++)}return S.currentNode=w,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},B=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),V(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let r=new et(n,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new j(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let r of t)n===e.length?e.push(i=new s(this.O(L()),this.O(L()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=gt(t).nextSibling;gt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,n){let r=this.strings,a=!1;if(r===void 0)t=H(this,t,e,0),a=!V(t)||t!==this._$AH&&t!==C,a&&(this._$AH=t);else{let l=t,o,d;for(t=r[0],o=0;o<r.length-1;o++)d=H(this,l[i+o],e,o),d===C&&(d=this._$AH[o]),a||=!V(d)||d!==this._$AH[o],d===u?t=u:t!==u&&(t+=(d??"")+r[o+1]),this._$AH[o]=d}a&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},it=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},nt=class extends U{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??u)===C)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}};var Qt=at.litHtmlPolyfillSupport;Qt?.(j,B),(at.litHtmlVersions??=[]).push("3.3.3");var Ct=(s,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let r=e?.renderBefore??null;i._$litPart$=n=new B(t.insertBefore(L(),r),r,void 0,e??{})}return n._$AI(s),n};var ct=globalThis,f=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};f._$litElement$=!0,f.finalized=!0,ct.litElementHydrateSupport?.({LitElement:f});var Xt=ct.litElementPolyfillSupport;Xt?.({LitElement:f});(ct.litElementVersions??=[]).push("4.2.2");var J=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};var Yt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:K},te=(s=Yt,t,e)=>{let{kind:i,metadata:n}=e,r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),i==="accessor"){let{name:a}=e;return{set(l){let o=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,o,s,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,s,l),l}}}if(i==="setter"){let{name:a}=e;return function(l){let o=this[a];t.call(this,l),this.requestUpdate(a,o,s,!0,l)}}throw Error("Unsupported decorator location: "+i)};function P(s){return(t,e)=>typeof e=="object"?te(s,t,e):((i,n,r)=>{let a=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),a?Object.getOwnPropertyDescriptor(n,r):void 0})(s,t,e)}function q(s){return P({...s,state:!0,attribute:!1})}var Et=g`
  :host {
    display: block;
    max-width: 480px;
    margin: 0 auto;
    --glass-blur: 1px;
  }

  ha-card {
    background-color: rgba(255, 255, 255, 0.22);
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    padding: 20px;
    font-family: system-ui, -apple-system, Roboto, sans-serif;
  }

  .header {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Bottom Navigation Bar */
  .tab-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    gap: 8px;
  }

  .tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    padding: 6px 4px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .tab-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .tab-btn:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  .tab-btn.active {
    color: #ffb74d;
    font-weight: bold;
    background: rgba(255, 183, 77, 0.15);
  }
`;var kt=g`
  .grid-sun {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }

  .sun-box {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 14px;
    text-align: center;
  }

  .sun-title {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  .sun-value {
    font-size: 2.2rem;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .zones-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    margin-bottom: 16px;
  }

  .zone-row {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9rem;
  }

  .zone-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .zone-label {
    opacity: 0.9;
  }

  .zone-value {
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .combined-box {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    text-align: center;
  }

  .item-box {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 6px;
  }

  .box-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
    
  .item-label {
    opacity: 0.9;
  }

  .box-divider {
    width: 1px;
    height: 70%;
    background: rgba(255, 255, 255, 0.3);
  }

  .sub-title {
    font-size: 0.8rem;
    opacity: 0.85;
    margin-bottom: 4px;
  }

  .sub-value {
    font-size: 1.0rem;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .sub-value.orange {
    color: #ffb74d;
    text-shadow: 0 0 10px rgba(255, 183, 77, 0.6);
  }
`;var Tt=g`
  
  .controls-layout {
    display: flex;
    gap: 12px;
    align-items: stretch;
  }

  .btn-stack {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btn-stack-2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    max-width: 50%;
  }

  .btn {
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .badge {
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 0.75rem;
    background: rgba(0, 0, 0, 0.3);
    color: #ccc;
  }

  .badge.on {
    background: #e2f7ed;
    color: #1b5e20;
  }

  .mode-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 8px;
  }

  .mode-title {
    font-size: 1.0rem;
    opacity: 0.85;
    margin-bottom: 6px;
    text-align: center;
  }

  .mode-dropdown {
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }

  .mode-dropdown option {
    background-color: #1e1e1e;
    color: #ffffff;
  }

  .date-picker-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;
  }

  .date-label {
    font-size: 0.8rem;
    opacity: 0.85;
    text-align: center;
  }

  .date-input {
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    color: #ffffff;
  }

  .date-input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  .date-input:focus {
    border-color: #ffb74d;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.4);
  }

`;var Ot=g`
  .times-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 12px;
    align-items: start;
    margin: 0 auto;
    width: fit-content;
    max-width: 80%;
    box-sizing: border-box;
  }

  .time-item {
  display: flex;
  align-items: center;
  gap: 0.4ch; 
  justify-content: flex-end;
  text-align: right;
  }

  .time-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    gap: 0.5ch;
    width: 100%;
  }

  .time-label {
    opacity: 0.85;
    text-align: left;
    white-space: nowrap;
  }

  .time-val {
    font-weight: 600;
  }
`;var Ht=g`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  ha-textfield,
  ha-entity-picker {
    width: 100%;
  }
`;var Ut=[Et,kt,Tt,Ot];var D=class extends f{setConfig(t){this._config=t}static get styles(){return Ht}_valueChanged(t){if(!this._config||!this.hass)return;let e=t.target,i=e.configValue,n=e.value;if(i&&this._config[i]!==n){this._config={...this._config,[i]:n};let r=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(r)}}render(){return!this.hass||!this._config?c``:c`
      <div class="card-config">
        <ha-textfield
          label="Titel"
          .value=${this._config.title||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>

        <h3>Sonnenplätze</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_sun_1||""}
          .configValue=${"temp_sun_1"}
          .label=${"Sonnenplatz 1 Temperatur"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_sun_2||""}
          .configValue=${"temp_sun_2"}
          .label=${"Sonnenplatz 2 Temperatur"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Umgebung</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_1||""}
          .configValue=${"temp_env_1"}
          .label=${"Umgebungstemperatur Zone 1"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_2||""}
          .configValue=${"temp_env_2"}
          .label=${"Umgebungstemperatur Zone 2"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_3||""}
          .configValue=${"temp_env_3"}
          .label=${"Umgebungstemperatur Zone 3"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.humidity||""}
          .configValue=${"humidity"}
          .label=${"Luftfeuchtigkeit"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Schalter & Aktoren</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main||""}
          .configValue=${"light_main"}
          .label=${"Grundbeleuchtung (Optional)"}
          .includeDomains=${["switch","light"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1||""}
          .configValue=${"hid1"}
          .label=${"UV-Beleuchtung (Optional)"}
          .includeDomains=${["switch","light"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2||""}
          .configValue=${"hid2"}
          .label=${"L\xFCfter (Optional)"}
          .includeDomains=${["switch","light"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main_sperre||""}
          .configValue=${"light_main_sperre"}
          .label=${"Grundbel. Dauer-An (Optional)"}
          .includeDomains=${["switch","input_boolean"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1_sperre||""}
          .configValue=${"hid1_sperre"}
          .label=${"HID 1 Dauer-An (Optional)"}
          .includeDomains=${["switch","input_boolean"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2_sperre||""}
          .configValue=${"hid2_sperre"}
          .label=${"HID 2 Dauer-An (Optional)"}
          .includeDomains=${["switch","input_boolean"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Steuerung & Modus</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.mode_select||""}
          .configValue=${"mode_select"}
          .label=${"Betriebsmodus (input_select)"}
          .includeDomains=${["input_select"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.winter_date||""}
          .configValue=${"winter_date"}
          .label=${"Beginn Einwinterung (input_datetime)"}
          .includeDomains=${["input_datetime"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main_time||""}
          .configValue=${"light_main_time"}
          .label=${"Grundbeleuchtung Zeiten-Entit\xE4t (Optional)"}
          .includeDomains=${["binary_sensor","sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1_time||""}
          .configValue=${"hid1_time"}
          .label=${"HID 1 Zeiten-Entit\xE4t (Optional)"}
          .includeDomains=${["binary_sensor","sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2_time||""}
          .configValue=${"hid2_time"}
          .label=${"HID 2 Zeiten-Entit\xE4t (Optional)"}
          .includeDomains=${["binary_sensor","sensor"]}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
      </div>
    `}};v([P({attribute:!1})],D.prototype,"hass",2),v([q()],D.prototype,"_config",2),D=v([J("glass-terrarium-card-editor")],D);function E(s,t){if(!t||!s?.states[t])return{state:"--",unit:""};let e=s.states[t];return{state:e.state,unit:e.attributes?.unit_of_measurement||""}}function k(s,t){if(!t||!s)return;let e=t.split(".")[0];s.callService(e,"toggle",{entity_id:t})}function Pt(s,t,e){!t||!e||!s||s.callService("input_select","select_option",{entity_id:t,option:e})}function Dt(s,t,e){!t||!e||!s||s.callService("input_datetime","set_datetime",{entity_id:t,date:e})}function b(s,t){return!t||!s?.states[t]?!1:s.states[t].state==="on"}function $(s,t,e){return!t||!e||!s?.states[t]?"--:--":s.states[t].attributes?.[e]||"--:--"}function zt(s,t){let e=E(s,t.temp_sun_1),i=E(s,t.temp_sun_2),n=E(s,t.temp_env_1),r=E(s,t.temp_env_2),a=E(s,t.temp_env_3),l=E(s,t.humidity),o=b(s,t.light_main),d=b(s,t.hid1),h=b(s,t.hid2);return c`
    <!-- Sonnenplätze -->
    <div class="grid-sun">
    ${t.temp_sun_1?c`
        <div class="sun-box">
          <div class="sun-title">Sonnenplatz 1</div>
          <div class="sun-value">${e.state}${e.unit||"\xB0C"}</div>
        </div>`:""}
    ${t.temp_sun_2?c`
      <div class="sun-box">
        <div class="sun-title">Sonnenplatz 2</div>
        <div class="sun-value">${i.state}${i.unit||"\xB0C"}</div>
      </div>`:""}
    </div>
    <div class="zones-list">
      <div class="zone-row">
        ${t.temp_env_1?c`
        <div class="zone-item">
          <span class="zone-label">Zone 1</span>
          <span class="zone-value">${n.state}${n.unit||"\xB0C"}</span>
        </div>`:""}
        ${t.temp_env_2?c`
        <div class="zone-item">
          <span class="zone-label">Zone 2</span>
          <span class="zone-value">${r.state}${r.unit||"\xB0C"}</span>
        </div>`:""}
        ${t.temp_env_3?c`
        <div class="zone-item">
          <span class="zone-label">Zone 3</span>
          <span class="zone-value">${a.state}${a.unit||"\xB0C"}</span>
        </div>`:""}
      </div>
    </div>

    <div class="combined-box">
      ${t.humidity?c`
      <div>
        <div class="sub-title">Luftfeuchtigkeit</div>
        <div class="sub-value">${l.state}${l.unit||"%"}</div>
      </div>`:""}
      <div class="box-divider"></div>
      <div>
        <div class="sub-title">Lampen</div>
        <div class="item-box">
          ${t.light_main?c`
          <div class="box-item">
            <span class="item-label">Licht:</span>
            <span class="sub-value orange">${o?"AN":"AUS"}</span>
          </div>`:""}
          ${t.hid1?c`
          <div class="box-item">
            <span class="item-label">HID 1:</span>
            <span class="sub-value orange">${d?"AN":"AUS"}</span>
          </div>`:""}
          ${t.hid2?c`
          <div class="box-item">
            <span class="item-label">HID 2:</span>
            <span class="sub-value orange">${h?"AN":"AUS"}</span>
          </div>`:""}
        </div>
      </div>
    </div>
  `}function Nt(s,t,e,i){let n=t.mode_select?s.states[t.mode_select]:void 0,r=n?.state,a=n?.attributes?.options||[],l=b(s,t.light_main),o=b(s,t.hid1),d=b(s,t.hid2),h=b(s,t.light_main_sperre),p=b(s,t.hid1_sperre),m=b(s,t.hid2_sperre),O=(t.winter_date?s.states[t.winter_date]:void 0)?.state||"";return c`
		<!-- Schalter/Aktoren -->
		<div class="controls-layout">
			<div class="btn-stack">
				<div class="mode-title">Lampen</div>
				
				${t.light_main?c`<button class="btn" @click=${()=>k(s,t?.light_main)}>
							<span>Licht</span>
							<span class="badge ${l?"on":""}">${l?"AN":"AUS"}</span>
						</button>`:""}
				
					${t.hid1?c`<button class="btn" @click=${()=>k(s,t?.hid1)}>
							<span>HID 1</span>
							<span class="badge ${o?"on":""}">${o?"AN":"AUS"}</span>
						</button>`:""}
				
					${t.hid2?c`<button class="btn" @click=${()=>k(s,t?.hid2)}>
							<span>HID 2</span>
							<span class="badge ${d?"on":""}">${d?"AN":"AUS"}</span>
						</button>`:""}
			</div>

			
			<!-- Betriebsmodus -->	
			
			${t.mode_select?c`
					<div class="mode-section">
						<div class="mode-title">Betriebsmodus</div>
						<select
							class="mode-dropdown"
							.value=${r||""}
							@change=${e}
						>
							${a.map(Q=>c`
									<option value=${Q} ?selected=${r===Q}>
										${Q}
									</option>
								`)}
						</select>
						
						${t.winter_date&&r?.toLowerCase()==="einwinterung"?c`
								<div class="date-picker-wrapper">
									<label class="date-label">Start Datum</label>
									<input
										type="date"
										class="date-input"
										.value=${O}
										@change=${i}
									/>
								</div>
							`:""}
					</div>
				`:""}
		</div>
		${t.light_main_sperre||t.hid1_sperre||t.hid2_sperre?c`
			<div class="btn-stack-2">
				<div class="mode-title">Zeiten ignorieren</div>
				
				${t.light_main_sperre?c`<button class="btn" @click=${()=>k(s,t?.light_main_sperre)}>
							<span>Licht</span>
							<span class="badge ${h?"on":""}">${h?"AN":"AUS"}</span>
						</button>`:""}
				
					${t.hid1_sperre?c`<button class="btn" @click=${()=>k(s,t?.hid1_sperre)}>
							<span>HID 1</span>
							<span class="badge ${p?"on":""}">${p?"AN":"AUS"}</span>
						</button>`:""}
				
					${t.hid2_sperre?c`<button class="btn" @click=${()=>k(s,t?.hid2_sperre)}>
							<span>HID 2</span>
							<span class="badge ${m?"on":""}">${m?"AN":"AUS"}</span>
						</button>`:""}
			</div>`:""}
	`}function Mt(s,t){let e=$(s,t.light_main_time,"einschalten_uhr")||"--:--",i=$(s,t.light_main_time,"ausschalten_uhr")||"--:--",n=$(s,t.hid1_time,"einschalten_uhr")||"--:--",r=$(s,t.hid1_time,"ausschalten_uhr")||"--:--",a=$(s,t.hid2_time,"einschalten_uhr")||"--:--",l=$(s,t.hid2_time,"ausschalten_uhr")||"--:--",o=$(s,t.light_main_time,"leuchtdauer")||"--:--",d=$(s,t.light_main_time,"zieldatum")||"--.--.----",h=$(s,t.light_main_time,"verbleibende_tage")||"--",m=(t.mode_select?s.states[t.mode_select]:void 0)?.state;return c`
    <div class="times-section">
      <div class="time-row">
        <span class="time-label">Hauptlicht: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${e} | AUS: ${i}</span>
        </span>
        </div>
      <div class="time-row">
        <span class="time-label">HID 1: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${n} | AUS: ${r}</span>
        </span>
      </div>
      <div class="time-row">
        <span class="time-label">HID 2: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${a} | AUS: ${l}</span>
        </span>
      </div>
      <div class="time-row">
        <span class="time-label">Leuchtdauer: </span>
        <span class="time-item">
          <span class="time-val">${o}</span>
          <span class="time-label">Std</span>
        </span>
      </div>
      ${t.winter_date&&m?.toLowerCase()==="einwinterung"?c`
                <div class="time-row">
                  <span class="time-label">Einwinterung am: </span>
                  <span class="time-item">
                    <span class="time-val">${d}</span>
                  </span>
                </div>
                <div class="time-row">
                  <span class="time-label">verbl. Tage: </span>
                  <span class="time-item">
                    <span class="time-val">${h}</span>
                    <span class="time-label">${Number(h)===1?"Tag":"Tage"}</span>
                  </span>
                  </div>
              `:""}
    </div>
  `}window.customCards=window.customCards||[];window.customCards.push({type:"glass-terrarium-card",name:"Glass Terrarium Card (Mockup Style)",description:"Glass Card f\xFCr Terrarien"});var T=class extends f{constructor(){super(...arguments);this._activeTab="overview"}static get styles(){return Ut}static async getConfigElement(){return document.createElement("glass-terrarium-card-editor")}static getStubConfig(){return{title:"W\xFCstenterrarium"}}setConfig(e){if(!e)throw new Error("Ung\xFCltige Konfiguration!");this._config=e}_handleModeChange(e){let i=e.target;Pt(this.hass,this._config?.mode_select,i.value)}_handleDateChange(e){let i=e.target;Dt(this.hass,this._config?.winter_date,i.value)}_setTab(e){this._activeTab=e}render(){if(!this.hass||!this._config)return c``;let e=this._config.bg_image?`background-image: url('${this._config.bg_image}'); background-size: cover; background-position: center;`:"";return c`
      <ha-card style=${e}>
        <div class="header">
          <span>${this._config.title||"Terrarium"}</span>
        </div>
        <div class="tab-content">
          ${this._activeTab==="overview"?zt(this.hass,this._config):""}
          ${this._activeTab==="controls"?Nt(this.hass,this._config,this._handleModeChange,this._handleDateChange):""}
          ${this._activeTab==="times"?Mt(this.hass,this._config):""}
        </div>
        <!-- Bottom Navigation Bar -->
        <div class="tab-bar">
          <button class="tab-btn ${this._activeTab==="overview"?"active":""}" @click=${()=>this._setTab("overview")}>
            <ha-icon icon="mdi:home-thermometer-outline"></ha-icon>
            <span>Übersicht</span>
          </button>

          <button class="tab-btn ${this._activeTab==="controls"?"active":""}" @click=${()=>this._setTab("controls")}>
            <ha-icon icon="mdi:tune"></ha-icon>
            <span>Steuerung</span>
          </button>

          <button class="tab-btn ${this._activeTab==="times"?"active":""}" @click=${()=>this._setTab("times")}>
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            <span>Zeiten</span>
          </button>
      </ha-card>
    `}};v([P({attribute:!1})],T.prototype,"hass",2),v([q()],T.prototype,"_config",2),v([q()],T.prototype,"_activeTab",2),T=v([J("glass-terrarium-card")],T);export{T as GlassTerrariumCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
