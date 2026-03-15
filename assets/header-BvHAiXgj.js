const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-D79Ktz8a.js","assets/firebase-CQb8C-KK.js","assets/main-CZT0fVeq.js","assets/firebase-CZCOw9IU.js","assets/login-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{M as c,$ as s,i as n,r as l,_ as r}from"./main-CZT0fVeq.js";const o=a=>{c?.("Bienvenido "+a.nombre),s(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)},e=()=>{s(".wiauth").html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `)};n.on(a=>a?o(a):(e(),l.navigate("/")));const i=n.user;i?o(i):e();const u=["wiTema","wiSmart","wiFresh"];s(document).on("click",".bt_salir",async()=>{const{salir:a}=await r(async()=>{const{salir:t}=await import("./login-D79Ktz8a.js");return{salir:t}},__vite__mapDeps([0,1,2,3,4]));a(u)});s(document).on("click",".login",async function(){const{abrirLogin:a}=await r(async()=>{const{abrirLogin:t}=await import("./login-D79Ktz8a.js");return{abrirLogin:t}},__vite__mapDeps([0,1,2,3,4]));a(s(this).hasClass("registrar")?"registrar":"login")});export{o as personal};
