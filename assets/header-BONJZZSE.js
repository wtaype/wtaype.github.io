const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-DZQMAGmF.js","assets/firebase-BhrArFy3.js","assets/main-B7WXqboh.js","assets/firebase-Csb9F686.js","assets/login-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{M as l,$ as s,a as n,r as c,_ as r}from"./main-B7WXqboh.js";const o=a=>{l?.("Bienvenido "+a.nombre),s(".wiauth").html(`
    <div class="sesion">
      <img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `)},e=()=>{s(".wiauth").html(`
      <button class="wibtn_auth registrar" aria-label="Crear cuenta"><i class="fas fa-user-plus" aria-hidden="true"></i><span>Registrar</span></button>
      <button class="wibtn_auth login" aria-label="Iniciar sesión"><i class="fas fa-sign-in-alt" aria-hidden="true"></i><span>Login</span></button>
  `)};n.on(a=>a?o(a):(e(),c.navigate("/")));const t=n.user;t?o(t):e();const u=["wiTema","wiSmart","wiFresh"];s(document).on("click",".bt_salir",async()=>{const{salir:a}=await r(async()=>{const{salir:i}=await import("./login-DZQMAGmF.js");return{salir:i}},__vite__mapDeps([0,1,2,3,4]));a(u)});s(document).on("click",".wibtn_auth",async function(){const{abrirLogin:a}=await r(async()=>{const{abrirLogin:i}=await import("./login-DZQMAGmF.js");return{abrirLogin:i}},__vite__mapDeps([0,1,2,3,4]));a(s(this).hasClass("registrar")?"registrar":"login")});export{o as personal};
