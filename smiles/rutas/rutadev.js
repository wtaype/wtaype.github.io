import $ from 'jquery';

// === RUTA LIMPIA V11 ===
export const wiPath = {
  limpiar(ruta) {
    const base = import.meta?.env?.BASE_URL || '/';
    const guar = sessionStorage.ghPath;
    if (guar) { sessionStorage.removeItem('ghPath'); return guar.replace(/^\/wiiprime(\/v\d+)?/, '') || '/'; }
    return base !== '/' && ruta?.startsWith(base) ? ruta.slice(base.length - 1) || '/' : ruta || '/';
  },
  poner(ruta, titulo = '') {
    history.pushState({ ruta }, titulo, ruta);
    titulo && (document.title = titulo);
  },
  params: () => Object.fromEntries(new URLSearchParams(location.search)),
  get actual() { return this.limpiar(location.pathname); }
};

// === FADE SUAVE V11 ===
export const wiFade = async (sel, html, dur = 120) => {
  const $el = $(sel);
  await $el.animate({ opacity: 0 }, dur).promise();
  $el.html(html);
  await $el.animate({ opacity: 1 }, dur).promise();
};