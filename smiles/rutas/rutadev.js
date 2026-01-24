import $ from 'jquery'; 

// === PATH VELOCIDAD V10.2 
export const wiPath = {
  clean(pth) {const bas = import.meta?.env?.BASE_URL || '/'; const sav = sessionStorage.ghPath; if (sav) {sessionStorage.removeItem('ghPath'); return sav.replace(/^\/wiiprime(\/v\d+)?/, '') || '/';} return bas !== '/' && pth?.startsWith(bas) ? pth.slice(bas.length - 1) || '/' : pth || '/';},
  update(pth, ttl = '', def = '/') {history.pushState({ path: pth }, ttl, pth === def ? '/' : pth); ttl && (document.title = ttl);},
  params: () => Object.fromEntries(new URLSearchParams(location.search)),
  setParams(prm) {const url = new URL(location); Object.entries(prm).forEach(([key, val]) => url.searchParams.set(key, val)); history.pushState({}, '', url);},
  get current() {return this.clean(location.pathname);}
};

// === ANIMACIÓN CARGA V10.1 
export const wiAnimate = {
  async fade(s, c, d = 150) {const $e = $(s); await $e.animate({ opacity: 0 }, d).promise(); $e.html(c); await $e.animate({ opacity: 1 }, d).promise()},
  async slide(s, sh = null) {const $e = $(s); if (sh === null) sh = !$e.is(':visible'); return sh ? $e.slideDown().promise() : $e.slideUp().promise()},
  shake(s) {$(s).addClass('shake'); setTimeout(() => $(s).removeClass('shake'), 500)},
  pulse(s) {$(s).addClass('pulse'); setTimeout(() => $(s).removeClass('pulse'), 500)}
};

// NOTIFICACIONES V10.1
export function Notificacion(msg, tipo = 'error', tiempo = 3000) {
  const ico = {success:'fa-check-circle',error:'fa-times-circle',warning:'fa-exclamation-triangle',info:'fa-info-circle'}[tipo];
  if (!$('#notificationsContainer').length) $('body').append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');
  const $not = $(`<div class="notification notif-${tipo}" style="background:var(--F);border-left:4px solid var(--${tipo});box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;"><i class="fas ${ico}" style="color:var(--${tipo});"></i><span style="flex:1;color:var(--tx);">${msg}</span><button style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--tx);">&times;</button></div>`);
  $('#notificationsContainer').append($not);requestAnimationFrame(() => $not.css({opacity:1,transform:'translateX(0)'}));
  const cerrar = () => {$not.css({opacity:0,transform:'translateX(20px)'});setTimeout(() => $not.remove(), 300);};
  $not.find('button').on('click', cerrar);
  setTimeout(cerrar, tiempo);
}