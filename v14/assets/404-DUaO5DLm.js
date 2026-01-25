import{j as t}from"./vendor-gzd0YkcT.js";const n=async()=>`
    <div class="wi404">
      <div class="wi404_icon">
        <i class="fas fa-robot"></i>
        <div class="wi404_glitch">404</div>
      </div>
      <h2 class="wi404_title">¡Oops! Página no encontrada</h2>
      <p class="wi404_text">Parece que esta ruta no existe en el espacio-tiempo</p>
      <button class="wibtn wi404_btn">
        <i class="fas fa-home"></i> Volver al inicio
      </button>
    </div>
  `,a=()=>{t("#wi404-styles").length||t("head").append(`<style id="wi404-styles">
.wi404{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:70vh;gap:2vh;}
.wi404_icon{position:relative;font-size:10rem;color:var(--mco);animation:float 3s ease-in-out infinite;}
.wi404_glitch{font-size:8rem;font-weight:900;color:var(--bg2);animation:glitch 1s infinite;}
.wi404_title{font-size:2rem;color:var(--tx);margin-top:2vh;}
.wi404_text{font-size:1.2rem;color:var(--txe);margin-bottom:3vh;}
.wi404_btn{padding:1.5vh 3vw!important;font-size:1.1rem!important;}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-2vh)}}
@keyframes glitch{0%,100%{transform:translate(0)}25%{transform:translate(-2px,2px)}75%{transform:translate(2px,-2px)}}
    </style>`),t(".wi404_btn").on("click",()=>location.href="/")};export{a as init,n as render};
