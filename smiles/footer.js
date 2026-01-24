import $ from 'jquery';
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

const mstyles = `
:root{--bgim:url("https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg")}.wicontainer{background: var(--bgim),linear-gradient(to bottom,var(--bg),var(--wb));}
`;$('head').append(`<style>${mstyles}</style> `);
