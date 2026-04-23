import{l,k as e,m as i,b as n,v as r,$ as a}from"./main-qyQQpVbY.js";function t(){const o=new Date;return`
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${l}" target="_blank">${e}</a></span>
    <span>${i} - <span class="wty">${o.getFullYear()}</span></span>
    <span class="abw"> | ${n} ${r} | actualizado:
    <span class="wtu">${o.toLocaleString()}</span></span>
  </footer>
  `}a("body").append(t());a("head").append('<style>:root{--bgim:url("/wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>');a("body").append(`
  <div class="movil_overlay"></div>
  <nav class="movil_drawer" role="navigation" aria-label="Menú móvil">
    <button class="movil_close" aria-label="Cerrar menú"><i class="fas fa-times" aria-hidden="true"></i></button>
    <div class="movil_logo"><i class="fas fa-code" aria-hidden="true"></i> Wilder Taype</div>
    <div class="movil_nav">${a(".winav").html()}</div>
  </nav>
`);const s=()=>a("body").removeClass("movil_open");a(".wimenu").on("click",()=>a("body").addClass("movil_open"));a(".movil_close, .movil_overlay").on("click",s);a(document).on("click",".movil_nav .nv_item",s);export{t as footer};
