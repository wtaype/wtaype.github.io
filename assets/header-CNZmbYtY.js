const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-BOnXufvT.js","assets/firebase-C5W6sN5P.js","assets/main-Br3JbTCu.js","assets/firebase-CeLE8b8J.js","assets/wiauth-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{g as u,$ as s,_ as r,r as _,M as g}from"./main-Br3JbTCu.js";function m(a){g?.("Bienvenido "+a.nombre),s(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const p=(()=>{let a=u("wiSmile");a?l(a):e();function e(){s(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function l(t){m(t);const{auth:n,onAuthStateChanged:o}=await r(async()=>{const{auth:i,onAuthStateChanged:c}=await import("./wiauth-BOnXufvT.js");return{auth:i,onAuthStateChanged:c}},__vite__mapDeps([0,1,2,3,4]));o(n,i=>{if(!i)return _("wiSmile"),e()})}window.addEventListener("wiFresh",t=>l(t.detail)),s(document).on("click",".login,.registrar",async function(t){t.preventDefault();const n=s(this).hasClass("registrar")?"registrar":"login",{abrirLogin:o}=await r(async()=>{const{abrirLogin:i}=await import("./wiauth-BOnXufvT.js");return{abrirLogin:i}},__vite__mapDeps([0,1,2,3,4]));o(n)}),s(document).on("click",".bt_salir",async()=>{const{salir:t}=await r(async()=>{const{salir:n}=await import("./wiauth-BOnXufvT.js");return{salir:n}},__vite__mapDeps([0,1,2,3,4]));await t(["wiflash","wiTema"]),location.reload()})})();export{p as header,m as personal};
