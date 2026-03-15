const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiauth-BPd7HkNa.js","assets/firebase-DEDllJPm.js","assets/main-2eNhE177.js","assets/firebase-CeLE8b8J.js","assets/wiauth-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{g as s,$ as e,_ as r,r as m,M as g}from"./main-2eNhE177.js";function _(a){g?.("Bienvenido "+a.nombre),e(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)}const h=(()=>{let a=s("wiSmile");a?c(a):l();function l(){e(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)}async function c(t){_(t);const{auth:o,onAuthStateChanged:i}=await r(async()=>{const{auth:n,onAuthStateChanged:u}=await import("./wiauth-BPd7HkNa.js");return{auth:n,onAuthStateChanged:u}},__vite__mapDeps([0,1,2,3,4]));i(o,n=>{if(!n)return m("wiSmile"),l()})}window.addEventListener("wiFresh",t=>c(t.detail)),e(document).on("click",".login,.registrar",async function(t){t.preventDefault(),await r(()=>import("./wiauth-BPd7HkNa.js"),__vite__mapDeps([0,1,2,3,4]))}),e(document).on("click",".bt_salir",async()=>{const{auth:t,signOut:o}=await r(async()=>{const{auth:i,signOut:n}=await import("./wiauth-BPd7HkNa.js");return{auth:i,signOut:n}},__vite__mapDeps([0,1,2,3,4]));await o(t),["wiflash","wiTema"].map(i=>[i,s(i)]).concat(localStorage.clear())&&localStorage.setItem("wiflash",JSON.stringify(s("wiflash")))&&localStorage.setItem("wiTema",JSON.stringify(s("wiTema"))),location.reload()})})();export{h as header,_ as personal};
