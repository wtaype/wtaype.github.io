// === wiQuery v2.0 — Mi super jQuery ===
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const toEl = x => x instanceof wi$ ? x[0] : x?.nodeType ? x : typeof x === 'string' ? document.querySelector(x) : null;
const _each = (els, fn) => { els.forEach(fn); }; // internal iterator (el, i)
const _noPx = new Set('animationIterationCount,columnCount,fillOpacity,flexGrow,flexShrink,fontWeight,lineHeight,opacity,order,orphans,widows,zIndex,zoom'.split(','));
const _px = (k, v) => typeof v === 'number' && !_noPx.has(k) ? v + 'px' : v;

class wi$ {
  constructor(els) { this.els = els; this.length = els.length; els.forEach((el, i) => this[i] = el); }

  // TRAVERSAL — public each is jQuery-compatible: fn(index, element), this = element
  each(fn) { this.els.forEach((el, i) => fn.call(el, i, el)); return this; }
  eq(i) { return new wi$(this.els[i] ? [this.els[i]] : []); }
  first() { return this.eq(0); }
  last() { return this.eq(this.els.length - 1); }
  find(s) { return new wi$(this.els.flatMap(el => qsa(s, el))); }
  filter(s) {
    if (typeof s === 'function') return new wi$(this.els.filter(s));
    let els = [...this.els];
    const sel = s.replace(/:(?:first|last|visible)\b/g, '').trim();
    if (sel) els = els.filter(el => el.matches(sel));
    if (s.includes(':visible')) els = els.filter(el => el.offsetParent !== null);
    if (s.includes(':first')) els = els.slice(0, 1);
    if (s.includes(':last')) els = els.slice(-1);
    return new wi$(els);
  }
  not(s) { const exclude = typeof s === 'string' ? this.els.filter(el => !el.matches(s)) : s instanceof wi$ ? this.els.filter(el => !s.els.includes(el)) : this.els.filter(el => el !== s); return new wi$(exclude); }
  closest(s) { const el = this.els[0]?.closest(s); return new wi$(el ? [el] : []); }
  parent() { const p = this.els[0]?.parentElement; return new wi$(p ? [p] : []); }
  children(s) { const c = this.els.flatMap(el => [...el.children]); return new wi$(s ? c.filter(el => el.matches(s)) : c); }
  siblings(s) { const el = this.els[0]; const sibs = el ? [...el.parentElement.children].filter(c => c !== el) : []; return new wi$(s ? sibs.filter(c => c.matches(s)) : sibs); }
  next() { const n = this.els[0]?.nextElementSibling; return new wi$(n ? [n] : []); }
  prev() { const p = this.els[0]?.previousElementSibling; return new wi$(p ? [p] : []); }

  // CONTENT
  html(v) { if (v === undefined) return this.els[0]?.innerHTML ?? ''; _each(this.els, el => el.innerHTML = v); return this; }
  text(v) { if (v === undefined) return this.els[0]?.textContent ?? ''; _each(this.els, el => el.textContent = v); return this; }
  val(v) { if (v === undefined) return this.els[0]?.value ?? ''; _each(this.els, el => el.value = v); return this; }

  // CLASSES
  addClass(c) { _each(this.els, el => el.classList.add(...c.split(' ').filter(Boolean))); return this; }
  removeClass(c) { _each(this.els, el => el.classList.remove(...c.split(' ').filter(Boolean))); return this; }
  hasClass(c) { return this.els[0]?.classList.contains(c) ?? false; }
  toggleClass(c) { _each(this.els, el => c.split(' ').forEach(cl => el.classList.toggle(cl))); return this; }
  is(s) { return this.els[0]?.matches(s) ?? false; }

  // ATTRIBUTES
  attr(k, v) {
    if (v === undefined) return this.els[0]?.getAttribute(k);
    if (typeof v === 'function') { _each(this.els, (el, i) => el.setAttribute(k, v(i, el.getAttribute(k)))); return this; }
    _each(this.els, el => el.setAttribute(k, v)); return this;
  }
  removeAttr(k) { _each(this.els, el => el.removeAttribute(k)); return this; }
  data(k, v) { if (v === undefined) return this.els[0]?.dataset[k]; _each(this.els, el => el.dataset[k] = v); return this; }
  removeData(k) { _each(this.els, el => delete el.dataset[k]); return this; }
  prop(k, v) { if (v === undefined) return this.els[0]?.[k]; _each(this.els, el => el[k] = v); return this; }

  // STYLES
  css(k, v) {
    if (typeof k === 'object') { _each(this.els, el => { for (const p in k) el.style[p] = _px(p, k[p]); }); return this; }
    if (v === undefined) return getComputedStyle(this.els[0])?.[k];
    _each(this.els, el => el.style[k] = _px(k, v)); return this;
  }

  // DOM MANIPULATION
  append(c) { _each(this.els, el => { if (typeof c === 'string') { const t = document.createElement('template'); t.innerHTML = c; el.append(...t.content.childNodes); } else if (c instanceof wi$) c.els.forEach(ch => el.append(ch)); else el.append(c); }); return this; }
  prepend(c) { _each(this.els, el => { if (typeof c === 'string') { const t = document.createElement('template'); t.innerHTML = c; el.prepend(...t.content.childNodes); } else if (c instanceof wi$) c.els.forEach(ch => el.prepend(ch)); else el.prepend(c); }); return this; }
  appendTo(t) { const p = toEl(t); this.els.forEach(el => p?.append(el)); return this; }
  prependTo(t) { const p = toEl(t); this.els.forEach(el => p?.prepend(el)); return this; }
  wrap(h) { _each(this.els, el => { const t = document.createElement('template'); t.innerHTML = h.trim(); const w = t.content.firstElementChild; el.parentNode.insertBefore(w, el); w.append(el); }); return this; }
  empty() { _each(this.els, el => el.innerHTML = ''); return this; }
  remove() { _each(this.els, el => el.remove()); return this; }

  // DISPLAY
  show(d = 'block') { _each(this.els, el => el.style.display = d); return this; }
  hide() { _each(this.els, el => el.style.display = 'none'); return this; }
  toggle(v) { _each(this.els, el => el.style.display = (v !== undefined ? v : el.style.display === 'none' || !el.offsetHeight) ? '' : 'none'); return this; }
  fadeIn(ms = 300) { _each(this.els, el => { el.style.display = 'block'; el.style.opacity = 0; el.style.transition = `opacity ${ms}ms`; requestAnimationFrame(() => el.style.opacity = 1); }); return this; }
  fadeOut(ms = 300, fn) { _each(this.els, el => { el.style.transition = `opacity ${ms}ms`; el.style.opacity = 0; setTimeout(() => { el.style.display = 'none'; fn?.call(el); }, ms); }); return this; }
  slideDown(ms = 300) { _each(this.els, el => { el.style.display = 'block'; el.style.overflow = 'hidden'; const h = el.scrollHeight; el.style.height = '0'; el.style.transition = `height ${ms}ms ease`; requestAnimationFrame(() => { requestAnimationFrame(() => el.style.height = h + 'px'); }); setTimeout(() => { el.style.height = 'auto'; el.style.overflow = ''; el.style.transition = ''; }, ms); }); return this; }
  slideUp(ms = 300, fn) { _each(this.els, el => { el.style.overflow = 'hidden'; el.style.height = el.scrollHeight + 'px'; el.style.transition = `height ${ms}ms ease`; requestAnimationFrame(() => { requestAnimationFrame(() => el.style.height = '0'); }); setTimeout(() => { el.style.display = 'none'; el.style.height = ''; el.style.overflow = ''; el.style.transition = ''; fn?.call(el); }, ms); }); return this; }
  slideToggle(ms = 300) { _each(this.els, el => el.style.display === 'none' || !el.offsetHeight ? $(el).slideDown(ms) : $(el).slideUp(ms)); return this; }

  // DIMENSIONS
  outerWidth(m) { const el = this.els[0]; if (!el) return 0; const w = el.offsetWidth; if (!m) return w; const s = getComputedStyle(el); return w + parseFloat(s.marginLeft) + parseFloat(s.marginRight); }
  outerHeight(m) { const el = this.els[0]; if (!el) return 0; const h = el.offsetHeight; if (!m) return h; const s = getComputedStyle(el); return h + parseFloat(s.marginTop) + parseFloat(s.marginBottom); }
  width() { return this.els[0]?.getBoundingClientRect().width ?? 0; }
  height() { return this.els[0]?.getBoundingClientRect().height ?? 0; }
  offset() { const r = this.els[0]?.getBoundingClientRect(); return r ? { top: r.top + scrollY, left: r.left + scrollX } : { top: 0, left: 0 }; }
  scrollTop(v) { if (v === undefined) return this.els[0]?.scrollTop ?? 0; _each(this.els, el => el.scrollTop = v); return this; }

  // EVENTS
  on(ev, selOrFn, fn) {
    const deleg = typeof selOrFn === 'string';
    const handler = deleg ? fn : selOrFn;
    _each(this.els, el => {
      el._wi = el._wi || {};
      ev.split(' ').forEach(e => {
        const [type, ns] = e.split('.');
        const wrap = deleg
          ? evt => { const t = evt.target.closest?.(selOrFn); if (t && el.contains(t)) { Object.defineProperty(evt, 'currentTarget', { value: t, configurable: true }); handler.call(t, evt); } }
          : evt => handler.call(el, evt);
        const key = ns ? `${type}.${ns}` : type;
        (el._wi[key] = el._wi[key] || []).push(wrap);
        const cap = type === 'mouseenter' || type === 'mouseleave';
        el.addEventListener(type, wrap, cap);
      });
    });
    return this;
  }
  one(ev, selOrFn, fn) {
    const deleg = typeof selOrFn === 'string', handler = deleg ? fn : selOrFn;
    _each(this.els, el => {
      ev.split(' ').forEach(e => {
        const [type] = e.split('.');
        const cap = type === 'mouseenter' || type === 'mouseleave';
        if (deleg) {
          const w = evt => { const t = evt.target.closest?.(selOrFn); if (t && el.contains(t)) { el.removeEventListener(type, w, cap); handler.call(t, evt); } };
          el.addEventListener(type, w, cap);
        } else el.addEventListener(type, evt => handler.call(el, evt), { once: true, passive: true });
      });
    });
    return this;
  }
  off(ev) {
    _each(this.els, el => {
      if (!el._wi) return;
      ev.split(' ').forEach(e => {
        const [type, ns] = e.split('.');
        const key = ns ? `${type}.${ns}` : type;
        const keys = ns ? [key] : Object.keys(el._wi).filter(k => k === type || k.startsWith(type + '.'));
        keys.forEach(k => { const tp = k.split('.')[0]; (el._wi[k] || []).forEach(fn => el.removeEventListener(tp, fn, tp === 'mouseenter' || tp === 'mouseleave')); delete el._wi[k]; });
      });
    });
    return this;
  }
  trigger(ev) { _each(this.els, el => el.dispatchEvent(new Event(ev, { bubbles: true }))); return this; }
  click(fn) { return fn ? this.on('click', fn) : (_each(this.els, el => el.click()), this); }
  focus() { this.els[0]?.focus(); return this; }

  // ANIMATION
  animate(props, ms = 400, fn) { const p = new Promise(r => _each(this.els, el => { Object.assign(el.style, { transition: Object.keys(props).map(k => `${k} ${ms}ms ease`).join(',') }); Object.assign(el.style, props); setTimeout(() => { el.style.transition = ''; fn?.call(el); r(); }, ms); })); const w = this; w.promise = () => p; return w; }
  delay(ms) { this._delay = (this._delay || 0) + ms; return this; }
  queue(fn) { setTimeout(() => fn.call(this.els[0], () => {}), this._delay || 0); return this; }
  dequeue() { this._delay = 0; return this; }
}

// FACTORY
const $ = (s, ctx) => {
  if (s instanceof wi$) return s;
  if (typeof s === 'function') return void document.addEventListener('DOMContentLoaded', s);
  if (s?.nodeType || s === document || s === window) return new wi$([s]);
  if (typeof s === 'string' && s[0] === '<') {
    const tag = s.match(/^<(\w+)\s*\/?>$/);
    if (tag) {
      const el = document.createElement(tag[1]);
      if (ctx && typeof ctx === 'object' && !ctx.nodeType) Object.entries(ctx).forEach(([k, v]) => el.setAttribute(k, v));
      return new wi$([el]);
    }
    const t = document.createElement('template'); t.innerHTML = s.trim();
    return new wi$([...t.content.children]);
  }
  if (typeof s === 'string') {
    let filter = null;
    const clean = s.replace(/:first\b/, () => (filter = 'first', '')).replace(/:last\b/, () => (filter = 'last', '')).replace(/:visible\b/, () => (filter = 'visible', ''));
    let els = qsa(clean, ctx || document);
    if (filter === 'first') els = els.slice(0, 1);
    else if (filter === 'last') els = els.slice(-1);
    else if (filter === 'visible') els = els.filter(el => el.offsetParent !== null);
    return new wi$(els);
  }
  return new wi$(qsa(s, ctx || document));
};

export default $;
