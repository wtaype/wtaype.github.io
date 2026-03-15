import './proyectos.css';
import { db } from '../smile/firebase.js';
import { collection, doc, setDoc, getDocs, deleteDoc, serverTimestamp, Timestamp, query, orderBy } from 'firebase/firestore';
import { $, Mensaje, wiSuma, wiVista, getls, savels, wiSpin, Notificacion, abrirModal, cerrarModal, wiDate } from '../widev.js';

// ── Constantes ────────────────────────────────────────────────────────────────
const CACHE_KEY = 'proyectos';
const POR_CARGA = 4, INICIAL = 8;
const CATS = ['web|Web Apps|globe','mobile|Mobile|mobile-alt','windows|Windows|tools','educacion|Educación|graduation-cap','diseno|Diseño|palette','devs|Devs|user-astronaut','tools|Herramientas|tools','camino|Camino|hourglass-half'];
const ORDEN = ['destacado|Destacados','reciente|Más reciente','antiguo|Más antiguo','nombre|Por nombre'];
const DESTACADOS = [
  { titulo: 'DSCTO - Calculadora Móvil',      img: 'https://i.postimg.cc/dq8nVhCx/Dscto.png',    descripcion: 'App para cálculos rápidos de descuentos y ajustes',  url: 'https://dscto.blogspot.com/',    tags: ['JavaScript','PWA','Firebase'] },
  { titulo: 'CODEWIL - Optimizador de Código', img: 'https://i.postimg.cc/CSQcPTYm/Codewil.png',  descripcion: 'Herramienta para optimizar y embellecer código',         url: 'https://codewil.blogspot.com/',  tags: ['React','Node.js','API'] },
  { titulo: 'WICOLORS - Paleta de Colores',    img: 'https://i.postimg.cc/FhkDwWHm/Wiicolors.png',descripcion: 'Generador inteligente de paletas de colores',             url: 'https://wicolors.blogspot.com/', tags: ['Vue.js','Design','CSS'] },
];

// ── Estado del módulo ─────────────────────────────────────────────────────────
const fechadb = wiDate(Timestamp);
let todos = [], filtrados = [], mostrados = 0, autenticado = false;
let _buscarTo = null, _obs = [];

// ── Helpers ───────────────────────────────────────────────────────────────────
const normaliza  = s => (s || '').toString().toLowerCase();
const buildTechs = s => s.split(',').map(t => t.trim()).filter(Boolean);
const ts         = p => +(p.fechaProyecto?.toDate?.() || p.UpdateEn?.toDate?.() || 0);
const fechaInput = v => {
  const g = fechadb?.get?.(v, 'date') || fechadb?.get?.(v, 'full') || '';
  if (/^\d{4}-\d{2}-\d{2}/.test(g)) return g.slice(0, 10);
  const d = v?.toDate?.() || (typeof v === 'string' && new Date(v));
  return d && !isNaN(d) ? d.toISOString().slice(0, 10) : '';
};
const fechaSave  = v => fechadb?.save?.(v) || Timestamp.fromDate(new Date(v ? `${v}T00:00:00` : Date.now()));

// ── render() — solo HTML ──────────────────────────────────────────────────────
export const render = () => `
<div class="proyectos_container">

  <!-- ★ HERO ─────────────────────────────────────────────────────────────── -->
  <section class="proyectos_hero">
    <h1 class="hero_title">Mis <span class="gradient_text">Proyectos</span></h1>
    <p class="hero_subtitle">Explora mi colección de proyectos web, móviles y herramientas construidas con las últimas tecnologías</p>
  </section>

  <!-- ★ DESTACADOS ────────────────────────────────────────────────────────── -->
  <section class="proyectos_destacados">
    <div class="section_header"><h2 class="section_title">Proyectos Destacados</h2><div class="section_line"></div></div>
    <div class="destacados_grid" id="destacadosGrid">
      ${[1,2,3].map(()=>'<div class="skeleton_card"><div class="skeleton_img shimmer"></div><div class="skeleton_text shimmer"></div><div class="skeleton_text short shimmer"></div></div>').join('')}
    </div>
  </section>

  <!-- ★ TODOS ─────────────────────────────────────────────────────────────── -->
  <section class="todos_proyectos_section">
    <div class="section_header">
      <h2 class="section_title h1pro">Todos mis Proyectos</h2>
      <div class="section_line"></div>
      <p class="section_descripcion">Cada proyecto representa un desafío superado, una tecnología dominada y una solución creada con pasión por el desarrollo</p>
      <div class="wiauth dpn"><div class="login">Login</div><div class="bt_salir">Salir</div></div>
    </div>

    <div class="search_section">
      <div class="search_wrapper">
        <i class="fas fa-search search_icon"></i>
        <input type="text" id="buscarProyecto" class="search_input" placeholder="Buscar proyectos...">
        <button class="search_clear" id="clearSearch" style="display:none;"><i class="fas fa-times"></i></button>
      </div>
    </div>

    <div class="filtros_section">
      <div class="filtros_wrapper">
        <button class="filtro_btn active" data-categoria="all"><i class="fas fa-layer-group"></i> Todos</button>
        ${CATS.map(c => { const [v,t,i] = c.split('|'); return `<button class="filtro_btn" data-categoria="${v}"><i class="fas fa-${i}"></i> ${t}</button>`; }).join('')}
      </div>
      <div class="filtros_orden">
        <select id="ordenarProyectos" class="orden_select">
          ${ORDEN.map(o => { const [v,t] = o.split('|'); return `<option value="${v}">${t}</option>`; }).join('')}
        </select>
      </div>
    </div>

    <div class="proyectos_grid" id="proyectosGrid">
      <div class="loading_grid"><i class="fas fa-spinner fa-spin"></i><p>Cargando proyectos...</p></div>
    </div>
    <div class="no_resultados" style="display:none;">
      <i class="fas fa-search"></i><h3>No se encontraron proyectos</h3><p>Intenta con otros términos de búsqueda</p>
    </div>
    <div class="load_more_section" id="loadMoreSection" style="display:none;">
      <button class="btn_load_more" id="btnLoadMore"><i class="fas fa-plus-circle"></i><span>Mostrar Más</span></button>
    </div>
  </section>

</div>

<!-- ★ MODAL ──────────────────────────────────────────────────────────────────── -->
<div class="wiModal" id="modalProyecto">
  <div class="modalBody modal_proyecto_body">
    <button class="modalX"><i class="fas fa-times"></i></button>
    <div class="modal_proyecto_header"><h2 class="modal_titulo" id="modalTitulo">Agregar Proyecto</h2></div>
    <form class="modal_proyecto_form" id="formProyecto">
      <div class="form_row">
        <div class="form_group"><label><i class="fas fa-heading"></i> Título</label><input type="text" id="inputTitulo" class="form_input" placeholder="Ej: Mi Proyecto" required></div>
        <div class="form_group"><label><i class="fas fa-key"></i> ID</label><input type="text" id="inputId" class="form_input" placeholder="ej: mi-proyecto" required></div>
      </div>
      <div class="form_group"><label><i class="fas fa-link"></i> URL Proyecto</label><input type="url" id="inputUrl" class="form_input" placeholder="https://..." required></div>
      <div class="form_group"><label><i class="fas fa-image"></i> Imagen URL</label><input type="url" id="inputImg" class="form_input" placeholder="https://..." required></div>
      <div class="form_group"><label><i class="fas fa-align-left"></i> Descripción</label><textarea id="inputDescripcion" class="form_textarea" placeholder="Describe tu proyecto..." rows="3" required></textarea></div>
      <div class="form_row">
        <div class="form_group"><label><i class="fas fa-code"></i> Tecnologías</label><input type="text" id="inputTecnologias" class="form_input" placeholder="JS, React, CSS" required></div>
        <div class="form_group"><label><i class="fas fa-calendar"></i> Fecha</label><input type="date" id="inputFecha" class="form_input" required></div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <label><i class="fas fa-folder"></i> Categoría</label>
          <select id="inputCategoria" class="form_select" required>
            <option value="">Seleccionar...</option>
            ${CATS.map(c => { const [v,t] = c.split('|'); return `<option value="${v}">${t}</option>`; }).join('')}
          </select>
        </div>
        <div class="form_group"><label class="destacado"><span><input type="checkbox" id="inputDestacado"> Destacado <i class="fas fa-star"></i></span></label></div>
      </div>
      <div class="modal_acciones">
        <button type="submit" class="btn_modal btn_guardar" id="btnGuardar"><i class="fas fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>`;

// ── init() — lógica, eventos y carga de datos ─────────────────────────────────
export const init = () => {
  todos = []; filtrados = []; mostrados = 0; autenticado = !!getls('wiSmile');

  // Destacados: skeleton → real
  setTimeout(() => {
    $('#destacadosGrid').html(DESTACADOS.map((p, i) => `
      <a href="${p.url}" target="_blank" rel="noopener" class="proyecto_card" style="animation-delay:${i * 0.1}s">
        <div class="project_img"><img src="${p.img}" alt="${p.titulo}" loading="lazy"><div class="project_overlay"><i class="fas fa-external-link-alt"></i></div></div>
        <div class="project_info"><h3 class="project_title">${p.titulo}</h3><p class="project_desc">${p.descripcion}</p><div class="project_tags">${p.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
      </a>`).join(''));
    setTimeout(() => $('.proyecto_card').addClass('visible'), 50);
  }, 800);

  // Carga Firebase (con cache)
  traerProyectos().then(() => {
    filtrados.sort((a, b) => (b.destacado | 0) - (a.destacado | 0));
    renderizar(INICIAL, true);
  });

  // Hero animation
  _obs.push(wiVista('.proyectos_hero', el => $(el).addClass('visible')));

  // Auth secreto (7 clicks en el título)
  wiSuma('.h1pro', () => {
    autenticado = true;
    $('.wiauth').removeClass('dpn').addClass('dfc');
    renderizar(INICIAL, true);
    Mensaje('¡Dios te Ama!', 'success');
  }, 7);

  // ── Eventos (namespaced .proy para cleanup limpio) ────────────────────────

  $(document).on('click.proy', '#cardAgregar', () => {
    $('#formProyecto')[0].reset();
    $('#formProyecto').removeData('editId');
    $('#modalTitulo').text('Agregar Nuevo Proyecto');
    $('#inputFecha').val(new Date().toISOString().split('T')[0]);
    $('#inputDestacado').prop('checked', false);
    $('#inputId').prop('readonly', false);
    abrirModal('modalProyecto');
  });

  $(document).on('click.proy', '.btn_editar', function (e) {
    e.stopPropagation();
    const p = todos.find(x => x.id === $(this).data('id'));
    if (!p) return Notificacion('No encontrado', 'error');
    $('#modalTitulo').text('Editar Proyecto');
    $('#inputTitulo').val(p.titulo);         $('#inputDescripcion').val(p.descripcion);
    $('#inputImg').val(p.img);               $('#inputUrl').val(p.url);
    $('#inputCategoria').val(p.categoria);   $('#inputFecha').val(fechaInput(p.fechaProyecto || p.creadoEn));
    $('#inputTecnologias').val((p.tecnologias || []).join(', '));
    $('#inputId').val(p.id).prop('readonly', true);
    $('#inputDestacado').prop('checked', !!p.destacado);
    $('#formProyecto').data('editId', p.id);
    abrirModal('modalProyecto');
  });

  $(document).on('submit.proy', '#formProyecto', async function (e) {
    e.preventDefault();
    const editId = $(this).data('editId'), btn = $('#btnGuardar');
    const docId  = editId || `${$('#inputId').val().trim().toLowerCase().replace(/\s+/g,'-')}_${Date.now()}`;
    const datos  = {
      titulo:        $('#inputTitulo').val().trim(),
      descripcion:   $('#inputDescripcion').val().trim(),
      img:           $('#inputImg').val().trim(),
      url:           $('#inputUrl').val().trim(),
      categoria:     $('#inputCategoria').val(),
      tecnologias:   buildTechs($('#inputTecnologias').val()),
      destacado:     $('#inputDestacado').is(':checked'),
      fechaProyecto: fechaSave($('#inputFecha').val()),
    };
    if (!datos.titulo || !datos.descripcion || !docId) return Notificacion('Completa los campos', 'warning');
    wiSpin(btn);
    const now = serverTimestamp();
    const payload = { ...datos, UpdateEn: now };
    if (!editId) payload.creadoEn = now;
    try {
      await setDoc(doc(db, 'proyectos', docId), payload, { merge: true });
      Notificacion(editId ? 'Actualizado ✓' : 'Creado ✓', 'success');
      await traerProyectos(true);
      cerrarModal('modalProyecto');
    } catch (er) { console.error('❌', er); Notificacion('Error al guardar', 'error');
    } finally   { wiSpin(btn, false); }
  });

  $(document).on('click.proy', '.btn_eliminar', async function (e) {
    e.stopPropagation();
    if (!confirm('¿Eliminar este proyecto?')) return;
    try {
      await deleteDoc(doc(db, 'proyectos', $(this).data('id')));
      Notificacion('Eliminado ✓', 'success');
      await traerProyectos(true);
    } catch { Notificacion('Error al eliminar', 'error'); }
  });

  $(document).on('input.proy', '#buscarProyecto', function () {
    const term = normaliza($(this).val().trim());
    $('#clearSearch').toggle(!!term);
    clearTimeout(_buscarTo);
    _buscarTo = setTimeout(() => {
      filtrados = term ? todos.filter(p => [p.titulo, p.descripcion, ...(p.tecnologias||[])].some(x => normaliza(x).includes(term))) : [...todos];
      renderizar(INICIAL, true);
    }, 220);
  });

  $(document).on('click.proy',  '#clearSearch',      () => $('#buscarProyecto').val('').trigger('input').focus());

  $(document).on('click.proy', '.filtro_btn', function () {
    const cat = $(this).data('categoria'), term = normaliza($('#buscarProyecto').val().trim());
    $('.filtro_btn').removeClass('active'); $(this).addClass('active');
    let f = cat === 'all' ? todos : todos.filter(p => p.categoria === cat);
    filtrados = term ? f.filter(p => [p.titulo, p.descripcion, ...(p.tecnologias||[])].some(x => normaliza(x).includes(term))) : f;
    renderizar(INICIAL, true);
  });

  $(document).on('change.proy', '#ordenarProyectos', function () {
    const sorters = { reciente: (a,b)=>ts(b)-ts(a), antiguo: (a,b)=>ts(a)-ts(b), nombre: (a,b)=>a.titulo.localeCompare(b.titulo), destacado: (a,b)=>(b.destacado|0)-(a.destacado|0) };
    filtrados.sort(sorters[$(this).val()] || (()=>0));
    renderizar(INICIAL, true);
  });

  $(document).on('click.proy', '#btnLoadMore', () => {
    renderizar(POR_CARGA);
    const last = $('#proyectosGrid .proyecto_card').last();
    if (last.length && last.offset()) $('html,body').animate({ scrollTop: last.offset().top - 100 }, 350);
  });
};

// ── cleanup() — libera todos los recursos ─────────────────────────────────────
export const cleanup = () => {
  $(document).off('.proy');
  clearTimeout(_buscarTo); _buscarTo = null;
  _obs.forEach(o => o?.disconnect?.()); _obs = [];
};

// ── Funciones privadas ────────────────────────────────────────────────────────
const renderizar = (cant = INICIAL, reset = false) => {
  const $grid = $('#proyectosGrid');
  if (reset) {
    $grid.empty(); mostrados = 0;
    if (autenticado) $grid.append(`<div class="proyecto_card card_agregar" id="cardAgregar"><div class="agregar_content"><div class="agregar_icon"><i class="fas fa-plus"></i></div><h3>Agregar</h3><p>Nuevo proyecto</p></div></div>`);
  }
  if (!filtrados.length) { $('.no_resultados').fadeIn(200); $('#loadMoreSection').hide(); return; }
  $('.no_resultados').hide();
  filtrados.slice(mostrados, mostrados + cant).forEach((p, i) => {
    $grid.append(`
      <div class="proyecto_card" data-id="${p.id}" style="animation-delay:${i * 0.05}s">
        <div class="project_img">
          <img src="${p.img}" alt="${p.titulo}" loading="lazy">
          <div class="project_overlay">
            <a href="${p.url}" target="_blank" rel="noopener" class="btn_overlay" title="Abrir"><i class="fas fa-external-link-alt"></i></a>
            ${autenticado ? `<button class="btn_overlay btn_editar" data-id="${p.id}" title="Editar"><i class="fas fa-edit"></i></button><button class="btn_overlay btn_eliminar" data-id="${p.id}" title="Eliminar"><i class="fas fa-trash"></i></button>` : ''}
          </div>
          ${p.destacado ? '<div class="badge_destacado"><i class="fas fa-star"></i></div>' : ''}
        </div>
        <div class="project_info">
          <h3 class="project_title">${p.titulo}</h3>
          <p class="project_desc">${p.descripcion}</p>
          <div class="project_tags">${(p.tecnologias||[]).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>`);
  });
  setTimeout(() => $grid.find('.proyecto_card:not(.visible)').addClass('visible'), 50);
  mostrados += cant;
  mostrados < filtrados.length ? $('#loadMoreSection').fadeIn(200) : $('#loadMoreSection').fadeOut(200);
};

const traerProyectos = async (forzar = false) => {
  if (!forzar) {
    const cache = (getls(CACHE_KEY) || {}).data || [];
    if (cache.length) { todos = filtrados = cache; renderizar(INICIAL, true); return; }
  }
  try {
    let snap;
    try   { snap = await getDocs(query(collection(db, 'proyectos'), orderBy('creadoEn', 'desc'))); }
    catch { snap = await getDocs(collection(db, 'proyectos')); }
    todos = filtrados = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    renderizar(INICIAL, true);
    savels(CACHE_KEY, { data: todos, ts: Date.now() }, 24);
    $('#buscarProyecto').attr('placeholder', `Buscar en ${todos.length} proyectos...`);
  } catch (e) {
    if (!todos.length) $('.loading_grid').html('<i class="fas fa-exclamation-triangle"></i><p>Error al cargar</p>');
    console.error('❌ proyectos:', e);
  }
};