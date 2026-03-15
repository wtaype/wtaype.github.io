// === WIDEV — Utilidades Core (Vanilla JS) ===
// Helpers internos
const qs = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const toEl = x => x?.jquery ? x[0] : typeof x === 'string' ? qs(x) : x;

// === Mini $() — jQuery-compatible API (~1KB) ===
class wi$ {
  constructor(els) { this.els = els; this.length = els.length; els.forEach((el, i) => this[i] = el); }
  each(fn) { this.els.forEach((el, i) => fn.call(el, el, i)); return this; }
  eq(i) { return new wi$(this.els[i] ? [this.els[i]] : []); }
  first() { return this.eq(0); }
  last() { return this.eq(this.els.length - 1); }
  filter(s) { return new wi$(typeof s === 'function' ? this.els.filter(s) : this.els.filter(el => el.matches(s))); }
  find(s) { return new wi$(this.els.flatMap(el => [...el.querySelectorAll(s)])); }
  html(v) { if (v === undefined) return this.els[0]?.innerHTML ?? ''; return this.each(el => el.innerHTML = v); }
  text(v) { if (v === undefined) return this.els[0]?.textContent ?? ''; return this.each(el => el.textContent = v); }
  val(v) { if (v === undefined) return this.els[0]?.value ?? ''; return this.each(el => el.value = v); }
  addClass(c) { return this.each(el => el.classList.add(...c.split(' '))); }
  removeClass(c) { return this.each(el => el.classList.remove(...c.split(' '))); }
  hasClass(c) { return this.els[0]?.classList.contains(c) ?? false; }
  toggleClass(c) { return this.each(el => c.split(' ').forEach(cl => el.classList.toggle(cl))); }
  attr(k, v) { if (v === undefined) return this.els[0]?.getAttribute(k); return this.each(el => el.setAttribute(k, v)); }
  data(k, v) { if (v === undefined) return this.els[0]?.dataset[k]; return this.each(el => el.dataset[k] = v); }
  removeData(k) { return this.each(el => delete el.dataset[k]); }
  prop(k, v) { if (v === undefined) return this.els[0]?.[k]; return this.each(el => el[k] = v); }
  css(k, v) { if (typeof k === 'object') return this.each(el => Object.assign(el.style, k)); if (v === undefined) return getComputedStyle(this.els[0])?.[k]; return this.each(el => el.style[k] = v); }
  append(c) { return this.each(el => typeof c === 'string' ? el.insertAdjacentHTML('beforeend', c) : el.append(c)); }
  prepend(c) { return this.each(el => typeof c === 'string' ? el.insertAdjacentHTML('afterbegin', c) : el.prepend(c)); }
  empty() { return this.each(el => el.innerHTML = ''); }
  remove() { return this.each(el => el.remove()); }
  show(d = 'block') { return this.each(el => el.style.display = d); }
  hide() { return this.each(el => el.style.display = 'none'); }
  fadeIn(ms = 300) { return this.each(el => { el.style.display = 'block'; el.style.opacity = 0; el.style.transition = `opacity ${ms}ms`; requestAnimationFrame(() => el.style.opacity = 1); }); }
  fadeOut(ms = 300, fn) { return this.each(el => { el.style.transition = `opacity ${ms}ms`; el.style.opacity = 0; setTimeout(() => { el.style.display = 'none'; fn?.call(el); }, ms); }); }
  on(ev, selOrFn, fn) {
    const deleg = typeof selOrFn === 'string';
    const handler = deleg ? fn : selOrFn;
    return this.each(el => {
      el._wi = el._wi || {};
      ev.split(' ').forEach(e => {
        const [type, ns] = e.split('.');
        const wrap = deleg
          ? evt => { const t = evt.target.closest?.(selOrFn); if (t && el.contains(t)) { Object.defineProperty(evt, 'currentTarget', { value: t }); handler.call(t, evt); } }
          : evt => handler.call(el, evt);
        const key = ns ? `${type}.${ns}` : type;
        (el._wi[key] = el._wi[key] || []).push(wrap);
        el.addEventListener(type, wrap);
      });
    });
  }
  off(ev, selOrFn) {
    return this.each(el => {
      if (!el._wi) return;
      ev.split(' ').forEach(e => {
        const [type, ns] = e.split('.');
        const key = ns ? `${type}.${ns}` : type;
        const keys = ns ? [key] : Object.keys(el._wi).filter(k => k === type || k.startsWith(type + '.'));
        keys.forEach(k => { (el._wi[k] || []).forEach(fn => el.removeEventListener(k.split('.')[0], fn)); delete el._wi[k]; });
      });
    });
  }
  animate(props, ms = 400, fn) { const p = new Promise(r => this.each(el => { Object.assign(el.style, { transition: Object.keys(props).map(k => `${k} ${ms}ms ease`).join(',') }); Object.assign(el.style, props); setTimeout(() => { el.style.transition = ''; fn?.call(el); r(); }, ms); })); const w = this; w.promise = () => p; return w; }
  trigger(ev) { return this.each(el => el.dispatchEvent(new Event(ev, { bubbles: true }))); }
  click(fn) { return fn ? this.on('click', fn) : this.each(el => el.click()); }
  focus() { this.els[0]?.focus(); return this; }
  siblings() { const el = this.els[0]; return new wi$(el ? [...el.parentElement.children].filter(c => c !== el) : []); }
}

export const $ = (s, ctx) => {
  if (s instanceof wi$) return s;
  if (typeof s === 'function') return document.addEventListener('DOMContentLoaded', s);
  if (s?.nodeType || s === document || s === window) return new wi$([s]);
  if (typeof s === 'string' && s[0] === '<') {
    const t = document.createElement('template'); t.innerHTML = s.trim(); return new wi$([...t.content.children]);
  }
  if (typeof s === 'string') {
    let filter = null;
    const clean = s.replace(/:first\b/, () => (filter = 'first', '')).replace(/:last\b/, () => (filter = 'last', '')).replace(/:visible\b/, () => (filter = 'visible', ''));
    let els = qsa(clean, ctx);
    if (filter === 'first') els = els.slice(0, 1);
    else if (filter === 'last') els = els.slice(-1);
    else if (filter === 'visible') els = els.filter(el => el.offsetParent !== null);
    return new wi$(els);
  }
  return new wi$(qsa(s, ctx));
};

// LOADER SECUENCIAL ___________________________________________________________
export const wiLoad = (() => {
  const loaded = new Set(), opt = { rootMargin: '0px 0px -40% 0px', threshold: 0.15 };
  return (id, fn) => {
    const sel = id[0] === '#' ? id : `#${id}`;
    if (!qs(sel)) {
      const div = document.createElement('div');
      div.id = id.replace('#', '');
      div.style.minHeight = '86vh';
      qs('#wimain').append(div);
    }
    const el = qs(sel);
    el && new IntersectionObserver(([x]) => x.isIntersecting && (
      history.replaceState(null, '', sel),
      import('./wii.js').then(({ app }) => document.title = `${sel.slice(1).charAt(0).toUpperCase() + sel.slice(2)} - ${app}`),
      loaded.has(sel) || (loaded.add(sel), fn())
    ), opt).observe(el);
  };
})();

// BLOQUE DE CÓDIGO ____________________________________________________________
export const wiCode = (sel) => {
  qsa(sel).forEach(el => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wiCode-box';
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
};

// OBSERVER ____________________________________________________________________
export const wiVista = (sel, fn, { stagger = 0, anim = '', threshold = 0.1, once = true, root = null, onExit = null, delay = 0 } = {}) => {
  const elements = qsa(sel);
  if (!elements.length) return null;
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    const i = elements.indexOf(e.target);
    if (e.isIntersecting) {
      setTimeout(() => { anim && e.target.classList.add('wi_visible'); fn?.(e.target, i); }, delay + stagger * i);
      once && obs.unobserve(e.target);
    } else onExit?.(e.target, i);
  }), { rootMargin: '20px', threshold, root });
  elements.forEach(el => { anim && el.classList.add(anim); obs.observe(el); });
  return obs;
};

// SPINNER BOTÓN _______________________________________________________________
export const wiSpin = (btn, act = true, txt = '') => {
  const el = toEl(btn);
  if (!el) return;
  if (act) {
    const texto = txt || el.textContent.trim();
    el.dataset.txt = texto;
    el.disabled = true;
    el.innerHTML = `${texto} <i class="fas fa-spinner fa-spin"></i>`;
  } else {
    el.disabled = false;
    el.textContent = el.dataset.txt || txt || 'Continuar';
  }
};

// SCROLL SPY __________________________________________________________________
export const wiScroll = (ids, navSel, opts = {}) => {
  const { margin = '-20% 0px -70% 0px', cls = 'active' } = opts;
  const obs = new IntersectionObserver(
    entries => entries.filter(e => e.isIntersecting).forEach(e => {
      qsa(navSel).forEach(n => n.classList.remove(cls));
      qs(`${navSel}[href="#${e.target.id}"]`)?.classList.add(cls);
    }),
    { rootMargin: margin }
  );
  ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
  return obs;
};

// AUTH SIGNAL _________________________________________________________________
const bus = new Set();
export const wiAuth = Object.assign((load, render) => bus.add(async () => { await load(true); render(); }), {
  on(fn)   { bus.add(fn); },
  emit(wi) { bus.forEach(fn => { try { fn(wi); } catch (e) { console.error('wiAuth:', e); } }); },
  login(wi, h = 24) { savels('wiSmile', wi, h); this.emit(wi); },
  logout(keep = []) { removels.except(keep); this.emit(null); },
  get user() { return getls('wiSmile'); },
  get logged() { return !!this.user?.usuario; }
});

// CARGA INTELIGENTE ___________________________________________________________
export const wiSmart = (() => {
  const ok = new Set(), cached = getls('wiSmart');
  const run = (o) => {
    Object.entries(o).forEach(([type, items]) => [].concat(items).forEach(it => {
      const key = `${type}:${it}`;
      if (ok.has(key)) return;
      ok.add(key);
      if (type === 'css' && !qs(`link[href="${it}"]`)) {
        const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: it });
        document.head.append(link);
      } else if (typeof it === 'function') {
        it().catch?.(e => console.error('wiSmart:', e));
      }
    }));
    savels('wiSmart', 1);
  };
  return (o) => {
    if (cached) return run(o);
    const handler = () => run(o);
    ['touchstart', 'scroll', 'click', 'mousemove'].forEach(ev =>
      document.addEventListener(ev, handler, { once: true, passive: true })
    );
  };
})();

// SALUDO ______________________________________________________________________
export const Saludar = () => {
  const h = new Date().getHours();
  return h >= 5 && h < 12 ? 'Buenos días, ' : h >= 12 && h < 18 ? 'Buenas tardes, ' : 'Buenas noches, ';
};

// NOTIFICACIONES ______________________________________________________________
export function Notificacion(msg, tipo = 'error', tiempo = 3000) {
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
  let container = qs('#notificationsContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notificationsContainer';
    Object.assign(container.style, { position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '.5rem' });
    document.body.append(container);
  }
  const notif = document.createElement('div');
  notif.className = `notification notif-${tipo}`;
  Object.assign(notif.style, { background: 'var(--F)', borderLeft: `4px solid var(--${tipo})`, boxShadow: '0 4px 12px rgba(0,0,0,.1)', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem', opacity: 0, transform: 'translateX(20px)', transition: 'all .3s ease' });
  notif.innerHTML = `<i class="fas ${icons[tipo]}" style="color:var(--${tipo})"></i><span style="flex:1;color:var(--tx)">${msg}</span><button style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--tx)">&times;</button>`;
  container.append(notif);
  requestAnimationFrame(() => Object.assign(notif.style, { opacity: 1, transform: 'translateX(0)' }));
  const close = () => { Object.assign(notif.style, { opacity: 0, transform: 'translateX(20px)' }); setTimeout(() => notif.remove(), 300); };
  notif.querySelector('button').addEventListener('click', close);
  setTimeout(close, tiempo);
}

// MENSAJE _____________________________________________________________________
export function Mensaje(msg, tipo = 'success') {
  qsa('.alert-box').forEach(el => el.remove());
  const icons = { success: 'fa-circle-check', error: 'fa-circle-exclamation', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
  const alerta = document.createElement('div');
  alerta.className = 'alert-box';
  Object.assign(alerta.style, { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%) translateY(-10px)', padding: '15px 20px', borderRadius: '8px', background: `var(--${tipo}-bg, var(--F))`, color: `var(--${tipo})`, borderLeft: `4px solid var(--${tipo})`, boxShadow: '0 4px 12px rgba(0,0,0,.1)', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px', minWidth: '300px', maxWidth: '90%', opacity: 0, transition: 'all .3s ease' });
  alerta.innerHTML = `<i class="fas ${icons[tipo]}" style="color:var(--${tipo})"></i><span>${msg}</span>`;
  document.body.append(alerta);
  requestAnimationFrame(() => Object.assign(alerta.style, { opacity: 1, transform: 'translateX(-50%) translateY(0)' }));
  setTimeout(() => { Object.assign(alerta.style, { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' }); setTimeout(() => alerta.remove(), 300); }, 3000);
}

// SAVE LOCAL __________________________________________________________________
export function savels(clave, valor, horas = 24) {
  try {
    if (!clave || typeof clave !== 'string') return false;
    localStorage.setItem(clave, JSON.stringify({ value: valor, expiry: Date.now() + horas * 3600000 }));
    return true;
  } catch (e) { console.error('savels:', e); return false; }
}

// GET LOCAL ___________________________________________________________________
export function getls(clave) {
  try {
    if (!clave || typeof clave !== 'string') return null;
    const item = localStorage.getItem(clave);
    if (!item) return null;
    const parsed = JSON.parse(item);
    if (!parsed || Date.now() > parsed.expiry) return localStorage.removeItem(clave), null;
    return parsed.value;
  } catch (e) { console.error('getls:', e); localStorage.removeItem(clave); return null; }
}

// REMOVE LOCAL ________________________________________________________________
export function removels(...claves) {
  claves.flat().flatMap(c => typeof c === 'string' ? c.split(/[,\s]+/).filter(Boolean) : c)
    .forEach(clave => localStorage.removeItem(clave));
}
removels.except = (keep = []) => {
  const saved = keep.map(k => [k, localStorage.getItem(k)]);
  localStorage.clear();
  saved.forEach(([k, v]) => v !== null && localStorage.setItem(k, v));
};

// TOOLTIP _____________________________________________________________________
export function wiTip(elmOrTxt, txt, tipo = 'top', tiempo = 1800) {
  if (!wiTip.CSS) {
    document.head.insertAdjacentHTML('beforeend', '<style id="wiTip-css">.wiTip{position:fixed;color:var(--txa);z-index:99999;padding:.8vh 1.2vh;border-radius:.6vh;font-size:var(--fz_s4);font-weight:500;max-width:25vh;box-shadow:0 .4vh 1.2vh rgba(0,0,0,.2);opacity:0;transform:translateY(-.3vh);transition:all .2s cubic-bezier(.4,0,.2,1);pointer-events:none;backdrop-filter:blur(.4vh)}.wiTip.show{opacity:1;transform:translateY(0)}.wiTip::after{content:"";position:absolute;top:100%;left:50%;margin-left:-.6vh;border:.6vh solid transparent;border-top-color:inherit}</style>');
    let t;
    document.addEventListener('mouseenter', e => {
      const target = e.target.closest?.('[data-witip]');
      if (!target) return;
      clearTimeout(t);
      wiTip.ver(target, target.dataset.witip, target.dataset.wtipo || 'top', +target.dataset.wtiempo || 1800);
    }, true);
    document.addEventListener('mouseleave', e => {
      if (!e.target.closest?.('[data-witip]')) return;
      qsa('.wiTip').forEach(el => el.classList.remove('show'));
      clearTimeout(t);
      t = setTimeout(() => qsa('.wiTip').forEach(el => el.remove()), 200);
    }, true);
    wiTip.CSS = true;
  }
  if (typeof elmOrTxt === 'string' && !txt) return `data-witip="${elmOrTxt}" data-wtipo="${tipo}" data-wtiempo="${tiempo}"`;
  wiTip.ver(toEl(elmOrTxt), txt, tipo, tiempo);
  return toEl(elmOrTxt);
}
wiTip.ver = (elm, txt, tipo, tiempo) => {
  qsa('.wiTip').forEach(el => el.remove());
  const colors = { success: 'var(--success)', error: 'var(--error)', warning: 'var(--warning)', info: 'var(--info)' };
  const c = colors[tipo] || 'var(--mco)';
  const tip = document.createElement('div');
  tip.className = 'wiTip';
  Object.assign(tip.style, { background: c, borderTopColor: c });
  tip.innerHTML = `<span>${txt}</span>`;
  document.body.append(tip);
  const rect = toEl(elm).getBoundingClientRect(), tipW = tip.offsetWidth, tipH = tip.offsetHeight;
  Object.assign(tip.style, { left: `${Math.max(8, Math.min(rect.left + rect.width / 2 - tipW / 2, innerWidth - tipW - 8))}px`, top: `${rect.top - tipH - 8}px` });
  requestAnimationFrame(() => { tip.classList.add('show'); if (tiempo > 0) setTimeout(() => { tip.classList.remove('show'); setTimeout(() => tip.remove(), 200); }, tiempo); });
};

// SISTEMA IP __________________________________________________________________
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

// MODALES _____________________________________________________________________
const MODAL_CSS = '.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}';

export const abrirModal = id => {
  const m = document.getElementById(id);
  if (!m) return console.warn(`Modal #${id} no existe`);
  m.classList.add('active');
  document.body.classList.add('modal-open');
  setTimeout(() => m.querySelector('input,select,textarea,button')?.focus(), 20);
};

export const cerrarModal = id => {
  document.getElementById(id)?.classList.remove('active');
  if (!qs('.wiModal.active')) document.body.classList.remove('modal-open');
};

export const cerrarTodos = () => {
  qsa('.wiModal').forEach(m => m.classList.remove('active'));
  document.body.classList.remove('modal-open');
};

(() => {
  if (!qs('.wiModalCss')) document.head.insertAdjacentHTML('beforeend', `<style class="wiModalCss">${MODAL_CSS}</style>`);
  document.addEventListener('click', e => {
    if (e.target.closest?.('.modalX')) return cerrarTodos();
    if (e.target.classList.contains('wiModal') && e.target.classList.contains('active')) cerrarTodos();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && qs('.wiModal.active')) cerrarTodos(); });
})();

// FECHA FIREBASE ______________________________________________________________
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

// COPIAR TEXTOS _______________________________________________________________
export const wicopy = (txt, elm = null, msg = '¡Copiado!') => {
  const cnt = txt?.nodeType ? (txt.textContent || txt.value || '')
    : txt?.jquery ? (txt.text?.() || txt.val?.() || '')
    : (() => { const s = String(txt ?? ''); if (s.match(/^[.#\[]/)) { const el = qs(s); if (el) return el.textContent || el.value || ''; } return s; })();
  const done = () => elm ? wiTip(toEl(elm), msg, 'mco', 1500) : null;
  navigator.clipboard?.writeText(cnt).then(done).catch(() => {
    const ta = Object.assign(document.createElement('textarea'), { value: cnt });
    Object.assign(ta.style, { position: 'absolute', left: '-9999px' });
    document.body.append(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    done();
  });
};

// CLICK SUMA __________________________________________________________________
export const wiSuma = (sel, fn, num = 5) => {
  let count = 0;
  document.addEventListener('click', e => {
    if (e.target.closest?.(sel) && ++count === num) { fn(); count = 0; }
  });
};

// UTILIDADES __________________________________________________________________
export const year = () => new Date().getFullYear();
export const Mayu = s => s.toUpperCase();
export const Capi = s => s[0].toUpperCase() + s.slice(1);
export const mis10 = txt => txt.length <= 10 ? txt : txt.substring(0, 10) + '...';

export const adrm = (sel, cls) => {
  const el = toEl(sel);
  if (!el) return;
  el.classList.add(cls);
  [...el.parentElement.children].filter(s => s !== el).forEach(s => s.classList.remove(cls));
};

export const adtm = (sel, cls, textIn, textOut) => {
  const el = toEl(sel);
  if (!el) return;
  el.textContent = textIn;
  el.classList.add(cls);
  setTimeout(() => { el.textContent = textOut; el.classList.remove(cls); }, 1800);
};

export const adup = (sel, text) => {
  const el = toEl(sel);
  if (!el) return;
  el.classList.add('updating');
  el.textContent = text;
  setTimeout(() => el.classList.remove('updating'), 500);
};