import { $ } from './widev.js';
import {app, lanzamiento, autor, link, version} from './wii.js';

export { footer };
function footer(){
  const ahora = new Date();
  return `
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${link}" target="_blank">${autor}</a></span>
    <span>${lanzamiento} - <span class="wty">${ahora.getFullYear()}</span></span>
    <span class="abw"> | ${app} ${version} | actualizado:
    <span class="wtu">${ahora.toLocaleString()}</span></span>
  </footer>
  `;
}; $('body').append(footer());  //Actualizar 

$("head").append(`<style>:root{--bgim:url("${import.meta.env.BASE_URL}wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>`)

// MOBILE DRAWER v1.0
$('body').append(`
  <div class="movil_overlay"></div>
  <nav class="movil_drawer" role="navigation" aria-label="Menú móvil">
    <button class="movil_close" aria-label="Cerrar menú"><i class="fas fa-times" aria-hidden="true"></i></button>
    <div class="movil_logo"><i class="fas fa-code" aria-hidden="true"></i> Wilder Taype</div>
    <div class="movil_nav">${$('.winav').html()}</div>
  </nav>
`);
const cerrarMovil = () => $('body').removeClass('movil_open');
$('.wimenu').on('click', () => $('body').addClass('movil_open'));
$('.movil_close, .movil_overlay').on('click', cerrarMovil);
$(document).on('click', '.movil_nav .nv_item', cerrarMovil);