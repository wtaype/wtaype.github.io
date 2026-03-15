// === Jesus es mi Padre, amoo a el===
import $ from './src/wiquery.js';
export { $ }; // DOM READY

// === 🧠 LOADER SECUENCIAL v14 ===
export const wiLoad = (() => {
  const carga = new Set(), opt = { rootMargin: '0px 0px -40% 0px', threshold: 0.15 };
  return (id, fn) => {
    const sel = id[0] === '#' ? id : `#${id}`; if (!$(sel).length) $('#wimain').append(`<div id="${id.replace('#','')}" style="min-height:86vh"></div>`);
    const el = $(sel)[0];
    el && new IntersectionObserver(([x]) => x.isIntersecting && (history.replaceState(null,'',sel), 
    import('./wii.js').then(({ app }) => document.title = `${sel.slice(1).charAt(0).toUpperCase() + sel.slice(2)} - ${app}`), carga.has(sel) 
    || (carga.add(sel), fn())), opt).observe(el);
  };
})(); 

// wiCode v1.0 - Bloque de código con copy + highlight __________________________
export const wiCode = (sel) => {
  $(sel).each(function() {
    $(this).wrap('<div class="wiCode-box"/>');
  });
};

// OBSERVER v12_________________________________
export const wiVista = (sel, fn, { stagger=0, anim='', threshold=0.1, once=true, root=null, onExit=null, delay=0 } = {}) => {
  const els = [...document.querySelectorAll(sel)];
  if (!els.length) return null;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    const i = els.indexOf(e.target);
    if (e.isIntersecting) {
      setTimeout(() => { anim && e.target.classList.add('wi_visible'); fn?.(e.target, i); }, delay + stagger * i);
      once && obs.unobserve(e.target);
    } else onExit?.(e.target, i);
  }), { rootMargin: '20px', threshold, root });
  els.forEach(el => { anim && el.classList.add(anim); obs.observe(el); });
  return obs;
};

// CARGANDO V10.2_________________________________
export const wiSpin = (btn, act = true, txt = '') => {
  const $btn = $(btn);
  if (act) {
    const texto = txt || $btn.text().trim();
    $btn.data('txt', texto).prop('disabled', true).html(`${texto} <i class="fas fa-spinner fa-spin"></i>`);
  } else {
    $btn.prop('disabled', false).text($btn.data('txt') || txt || 'Continuar');
  }
};

// SCROLL SPY V10.0_________________________________
export const wiScroll = (ids, navSel, opts = {}) => {
  const { margin = '-20% 0px -70% 0px', cls = 'active' } = opts;
  const obs = new IntersectionObserver(
    es => es.filter(e => e.isIntersecting).forEach(e => {
      $(navSel).removeClass(cls);
      $(`${navSel}[href="#${e.target.id}"]`).addClass(cls);
    }),
    { rootMargin: margin }
  );
  ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
  return obs;
};

// AUTH SIGNAL v2.0_________________________________
const bus = new Set();
export const wiAuth = Object.assign((load, render) => bus.add(async () => { await load(true); render(); }), {
  on(fn)   { bus.add(fn); },
  emit(wi) { bus.forEach(fn => { try { fn(wi); } catch(e) { console.error('wiAuth:', e); } }); },
  login(wi, h = 24) { savels('wiSmile', wi, h); this.emit(wi); },
  logout(keep = []) { removels.except(keep); this.emit(null); },
  get user() { return getls('wiSmile'); },
  get logged() { return !!this.user?.usuario; }
});

// CARGA INTELIGENTE v15_________________________________
export const wiSmart = (() => {
  const ok = new Set(), c = getls('wiSmart'), im = {};
  const obs = new MutationObserver(() => { for (const s in im) { const e = document.querySelector(s); if (e) { e.outerHTML = im[s]; delete im[s]; } } if (!Object.keys(im).length) obs.disconnect(); });
  const run = o => { Object.entries(o).forEach(([t, v]) => {
    if (t === 'img') { Object.assign(im, v); obs.observe(document.body, { childList: true, subtree: true }); return; }
    [].concat(v).forEach(it => { const k = `${t}:${it}`; if (ok.has(k)) return; ok.add(k);
      t === 'css' ? !$(`link[href="${it}"]`).length && $('<link>', { rel: 'stylesheet', href: it }).appendTo('head')
        : typeof it === 'function' && it().catch?.(e => console.error('wiSmart:', e));
    });
  }); savels('wiSmart', 1); };
  return o => c ? run(o) : $(document).one('touchstart scroll click mousemove', () => run(o));
})();

// SALUDO V10.1_________________________________
export const Saludar = () => {
  const hrs = new Date().getHours();
  return hrs >= 5 && hrs < 12 ? 'Buenos días, ' : hrs >= 12 && hrs < 18 ? 'Buenas tardes, ' : 'Buenas noches, ';
};

// NOTIFICACIONES V10.1_________________________________
export function Notificacion(msg, tipo = 'error', tiempo = 3000) {
  const ico = {success:'fa-check-circle',error:'fa-times-circle',warning:'fa-exclamation-triangle',info:'fa-info-circle'}[tipo];
  if (!$('#notificationsContainer').length) $('body').append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');
  const $not = $(`<div class="notification notif-${tipo}" style="background:var(--F);border-left:4px solid var(--${tipo});box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;"><i class="fas ${ico}" style="color:var(--${tipo});"></i><span style="flex:1;color:var(--tx);">${msg}</span><button style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--tx);">&times;</button></div>`);
  $('#notificationsContainer').append($not);requestAnimationFrame(() => $not.css({opacity:1,transform:'translateX(0)'}));
  const cerrar = () => {$not.css({opacity:0,transform:'translateX(20px)'});setTimeout(() => $not.remove(), 300);};
  $not.find('button').on('click', cerrar);
  setTimeout(cerrar, tiempo);
}

// MENSAJE V10.1_________________________________
export function Mensaje(msg, tipo = 'success') {
  $('.alert-box').remove();
  const ico = {success:'fa-circle-check',error:'fa-circle-exclamation',warning:'fa-exclamation-triangle',info:'fa-info-circle'}[tipo];
  const $alerta = $(`<div class="alert-box" style="position:fixed;top:20px;left:50%;transform:translateX(-50%);padding:15px 20px;border-radius:8px;background:var(--${tipo}-bg,var(--F));color:var(--${tipo});border-left:4px solid var(--${tipo});box-shadow:0 4px 12px rgba(0,0,0,.1);z-index:1000;display:flex;align-items:center;gap:10px;min-width:300px;max-width:90%;"><i class="fas ${ico}" style="color:var(--${tipo});"></i><span>${msg}</span></div>`).appendTo('body').hide().fadeIn(300);
  setTimeout(() => $alerta.fadeOut(300, () => $alerta.remove()), 3000);
}

// SAVE LOCAL v11_________________________________
export function savels(clave, valor, horas = 24) {
  try {
    if (!clave || typeof clave !== 'string') return false;
    localStorage.setItem(clave, JSON.stringify({ value: valor, expiry: Date.now() + horas * 3600000 }));
    return true;
  } catch(e) { console.error('esv:', e); return false; }
}

// GET LOCAL v10.1_________________________________
export function getls(clave) {
  try {
    if (!clave || typeof clave !== 'string') return null;
    const item = localStorage.getItem(clave);
    if (!item) return null;
    const parsed = JSON.parse(item);
    if (!parsed || Date.now() > parsed.expiry) return localStorage.removeItem(clave), null;
    return parsed.value;
  } catch(e) { console.error('egt:', e); localStorage.removeItem(clave); return null; }
}

// REMOVE LOCAL v10.3_________________________________
export function removels(...claves) {
  claves.flat().flatMap(c => typeof c === 'string' ? c.split(/[,\s]+/).filter(Boolean) : c)
    .forEach(clave => localStorage.removeItem(clave));
}
removels.except = (keep = []) => {
  const saved = keep.map(k => [k, localStorage.getItem(k)]);
  localStorage.clear();
  saved.forEach(([k, v]) => v !== null && localStorage.setItem(k, v));
}; 

// TOOLTIP V11.0_________________________________
export function wiTip(elmOrTxt, txt, tipo = 'top', tiempo = 1800) {
  if (!wiTip.CSS) {
    $('head').append('<style id="wiTip-css">.wiTip{position:fixed;color:var(--txa);z-index:99999;padding:.8vh 1.2vh;border-radius:.6vh;font-size:var(--fz_s4);font-weight:500;max-width:25vh;box-shadow:0 .4vh 1.2vh rgba(0,0,0,.2);opacity:0;transform:translateY(-.3vh);transition:all .2s cubic-bezier(.4,0,.2,1);pointer-events:none;backdrop-filter:blur(.4vh)}.wiTip.show{opacity:1;transform:translateY(0)}.wiTip::after{content:"";position:absolute;top:100%;left:50%;margin-left:-.6vh;border:.6vh solid transparent;border-top-color:inherit}</style>');
    let t; $(document).on('mouseenter.wiTip', '[data-witip]', function () {
      clearTimeout(t); wiTip.ver(this, $(this).data('witip'), $(this).data('wtipo') || 'top', $(this).data('wtiempo') || 1800);
    }).on('mouseleave.wiTip', '[data-witip]', () => { $('.wiTip').removeClass('show'); clearTimeout(t); t = setTimeout(() => $('.wiTip').remove(), 200) });
    wiTip.CSS = true;
  }
  if (typeof elmOrTxt === 'string' && !txt) return `data-witip="${elmOrTxt}" data-wtipo="${tipo}" data-wtiempo="${tiempo}"`;
  return wiTip.ver(elmOrTxt, txt, tipo, tiempo), $(elmOrTxt);
}
wiTip.ver = (elm, txt, tipo, tiempo) => {
  $('.wiTip').remove();
  const c = ({success:'var(--success)',error:'var(--error)',warning:'var(--warning)',info:'var(--info)'}[tipo] || 'var(--mco)');
  const $tip = $(`<div class="wiTip" style="background:${c};border-top-color:${c}"><span>${txt}</span></div>`).appendTo('body');
  const {left, top, width} = $(elm)[0].getBoundingClientRect(), tipW = $tip.outerWidth(), tipH = $tip.outerHeight();
  $tip.css({left: Math.max(8, Math.min(left + width/2 - tipW/2, innerWidth - tipW - 8)), top: top - tipH - 8});
  requestAnimationFrame(() => {$tip.addClass('show'); if (tiempo > 0) setTimeout(() => {$tip.removeClass('show'); setTimeout(() => $tip.remove(), 200)}, tiempo)});
};

// SISTEMA IP V10.1_________________________________
export const wiIp = (geo) => {
  return fetch('https://ipinfo.io/json?token=' + import.meta.env.VITE_IP_TOKEN)
    .then(r => r.json())
    .then(data => {
      const ua = navigator.userAgent;
      const [lat, lng] = (data.loc || '0,0').split(',').map(Number);
      const ipData = {
        ip: data.ip, city: data.city, region: data.region, country: data.country, postal: data.postal, lat, lng,
        browser: /Edg/i.test(ua) ? 'Edge' : /Chrome/i.test(ua) ? 'Chrome' : /Firefox/i.test(ua) ? 'Firefox' : /Safari/i.test(ua) && !/Chrome/i.test(ua) ? 'Safari' : 'Otro',
        os: /Windows/i.test(ua) ? 'Windows' : /Android/i.test(ua) ? 'Android' : /iPhone|iPad/i.test(ua) ? 'iOS' : /Mac/i.test(ua) ? 'macOS' : 'Linux',
        device: /Mobile|Android|iPhone|iPad/i.test(ua) ? 'Móvil' : /Tablet|iPad/i.test(ua) ? 'Tablet' : 'Escritorio',
        screen: `${screen.width}×${screen.height}`, language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, utcOffset: new Date().getTimezoneOffset() / -60, online: navigator.onLine
      };
      return typeof geo === 'function' ? geo(ipData) : geo === 'ciudad' ? `${ipData.city}, ${ipData.country}` : ipData[geo];
    }).catch(() => null);
};

// MODALES V10.4_________________________________
export const abrirModal = id => {
  const $m = $(`#${id}`); if (!$m.length) return console.warn(`Modal #${id} no existe`);
  $m.addClass('active'); $('body').addClass('modal-open');
  setTimeout(() => $m.find('input,select,textarea,button').filter(':visible:first').trigger('focus'), 20);
};
export const cerrarModal = id => {
  $(`#${id}`).removeClass('active'); if (!$('.wiModal.active').length) $('body').removeClass('modal-open');
};
export const cerrarTodos = () => {
  $('.wiModal').removeClass('active');  $('body').removeClass('modal-open');
};
(() => {
  $('.wiModalCss').length ? $('.wiModalCss').text('.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}') : $('head').append('<style class="wiModalCss">.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}</style>');
  $(document).on('click', '.modalX', cerrarTodos)
    .on('click', '.wiModal.active', function(e) { if (e.target === this) cerrarTodos(); })
    .on('keydown', e => { if (e.key === 'Escape' && $('.wiModal.active').length) cerrarTodos(); });
})();


// FECHA FIREBASE + CACHE V12_________________________________
export const wiDate = (tm) => ({
  save: val => {
    if (!val) return null;
    if (val.length === 10) val = `${val}T${new Date().toTimeString().split(' ')[0]}`;
    return tm.fromDate(new Date(val));
  },
  get: (val, fmt) => {
    const sec = val?.seconds ?? (val?.type?.includes?.('timestamp') ? val.seconds : null);
    const fec = val?.toDate?.() || (sec && new Date(sec * 1000)) || (typeof val === 'number' && new Date(val * 1000));
    if (!fec) return '';
    const ajustada = new Date(fec - fec.getTimezoneOffset() * 6e4);
    if (fmt === 'full') return ajustada.toISOString().slice(0, 16);
    if (fmt === 'local') return fec.toLocaleDateString();
    return ajustada.toISOString().split('T')[0];
  }
});

// COPIAR TEXTOS V10.2_________________________________
export const wicopy = (txt, elm = null, msg = '¡Copiado!') => {
  const getCnt = () => txt instanceof $ ? txt.text() || txt.val() || '' : txt?.nodeType ? txt.textContent || txt.value || '' : typeof txt === 'string' && txt.trim().match(/^[.#\[]/) && $(txt).length ? $(txt).text() || $(txt).val() || '' : String(txt ?? '');
  const cnt = getCnt();
  const fin = () => elm ? wiTip(elm, msg, 'mco', 1500) : console.log(`${msg}: ${cnt}`);
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(cnt).then(fin).catch(() => {
      const $t = $('<textarea>').val(cnt).css({position:'absolute',left:'-9999px'}).appendTo('body');
      $t[0].select(); document.execCommand('copy'); $t.remove(); fin();
    });
  } else {
    const $t = $('<textarea>').val(cnt).css({position:'absolute',left:'-9999px'}).appendTo('body');
    $t[0].select(); document.execCommand('copy'); $t.remove(); fin();
  }
};

// CLICK SUMA V10.1_________________________________
export const wiSuma = (sel, fn, num = 5) => {
  let cont = 0; $(document).on('click', sel, () => ++cont === num && (fn(), cont = 0));
};

// FUNCIONES GENIALES V10.1_________________________________
export const year = () => new Date().getFullYear();
export const Mayu = (ltr) => ltr.toUpperCase();
export const Capi = (ltr) => ltr[0].toUpperCase() + ltr.slice(1);
export const adrm = (a, b) => $(a).addClass(b).siblings().removeClass(b);
export const mis10 = (txt) => txt.length <= 10 ? txt : txt.substring(0, 10) + '...';
export const adtm = (se, cl, ti, tf) => $(se).text(ti).addClass(cl).delay(1800).queue(q => $(se).text(tf).removeClass(cl).dequeue());
export const adup = (x, y) => ($(x).addClass('updating').text(y), setTimeout(() => $(x).removeClass('updating'), 500));