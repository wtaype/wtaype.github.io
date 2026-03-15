import { app } from '../wii.js';
import { $, Notificacion } from '../widev.js';
import { wiPath, wiFade } from './rutadev.js';

class WiRutas {
  constructor() {
    this.rutas   = {};          // mapa de rutas
    this.actual  = null;        // ruta activa
    this.modActual = null;
    this.cargand = false;       // flag navegación
    this.precach = new Set();   // rutas precargadas
    this.HOME    = 'inicio';    // ruta por defecto
    this.main    = '#wimain';   // contenedor principal
  }

  register(ruta, mod) { this.rutas[ruta] = mod; }

  async navigate(ruta, historial = true) {
    if (this.cargand) return;
    this.cargand = true;

    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;

    const cargar = this.rutas[norm] ?? (() => import(`../web/404.js`));
    try {
      // Cleanup módulo anterior
      this.modActual?.cleanup?.();

      const mod   = typeof cargar === 'function' ? await cargar() : cargar;
      const html  = await mod.render();
      const titulo = `${norm.slice(1).replace(/^(\w)/, c => c.toUpperCase()) || 'Inicio'} - ${app}`;

      this.marcarNav(norm); await wiFade(this.main, html);

      document.title = titulo; mod.init?.();
      if (historial) wiPath.poner(norm === `/${this.HOME}` ? '/' : norm, titulo);
      this.actual = norm;
      this.modActual = mod;
    } catch (err) { Notificacion('Error en la ruta'); console.error('Error navegando:', err);
    } finally {
      this.cargand = false;
    }
  }

  marcarNav(norm) {
    const pag = norm.slice(1) || this.HOME;
    $('.nv_item').removeClass('active');
    $(`.nv_item[data-page="${pag}"]`).addClass('active');
  }

  async prefetch(ruta) {
    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;
    if (this.precach.has(norm) || typeof this.rutas[norm] !== 'function') return;
    try { this.rutas[norm] = await this.rutas[norm](); this.precach.add(norm); }
    catch (e) { console.warn('Prefetch:', norm); }
  }

  init() {
    const rActual = wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual);
    this.marcarNav(rActual); // Nav activo desde ruta actual — sin parpadeo

    // Clicks en nav
    $(document).on('click', '.nv_item', (e) => {
      e.preventDefault();
      const pag = $(e.currentTarget).data('page');
      this.navigate(pag === this.HOME ? '/' : `/${pag}`);
    });
    
    window.addEventListener('popstate', (e) => {
      this.navigate(e.state?.ruta || wiPath.actual, false);
    }); // Botón atrás/adelante    
    this.navigate(wiPath.actual, false); // Carga inicial
  }
}
export const rutas = new WiRutas();