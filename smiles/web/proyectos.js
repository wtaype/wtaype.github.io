import './proyectos.css';
import $ from 'jquery';
import '../header.js';
import { db } from '../smile/firebase.js';
import { collection, doc, setDoc, getDocs, deleteDoc, serverTimestamp, Timestamp, query, orderBy } from 'firebase/firestore';
import { Mensaje, wiSuma, wiVista, getls, savels, wiSpin, Notificacion, abrirModal, cerrarModal, wiDate } from '../widev.js';

export const proyectos = () => {
  const CACHE_KEY = 'proyectos';
  const fechadb = wiDate(Timestamp);
  const porCarga = 4, inicial = 8;
  let todos = [], filtrados = [], mostrados = 0, autenticado = !!getls('wiSmile');

  const destacados = [
    { titulo: 'DSCTO - Calculadora Móvil', img: 'https://i.postimg.cc/dq8nVhCx/Dscto.png', descripcion: 'App para cálculos rápidos de descuentos y ajustes', url: 'https://dscto.blogspot.com/', tags: ['JavaScript', 'PWA', 'Firebase'] },
    { titulo: 'CODEWIL - Optimizador de Código', img: 'https://i.postimg.cc/CSQcPTYm/Codewil.png', descripcion: 'Herramienta para optimizar y embellecer código', url: 'https://codewil.blogspot.com/', tags: ['React', 'Node.js', 'API'] },
    { titulo: 'WICOLORS - Paleta de Colores', img: 'https://i.postimg.cc/FhkDwWHm/Wiicolors.png', descripcion: 'Generador inteligente de paletas de colores', url: 'https://wicolors.blogspot.com/', tags: ['Vue.js', 'Design', 'CSS'] }
  ];

  const fechaInput = v => {
    const g = fechadb?.get?.(v, 'date') || fechadb?.get?.(v, 'full') || '';
    if (/^\d{4}-\d{2}-\d{2}/.test(g)) return g.slice(0, 10);
    const d = v?.toDate?.() || (typeof v === 'string' && new Date(v));
    return d && !isNaN(d) ? d.toISOString().slice(0, 10) : '';
  };
  const fechaSave = v => fechadb?.save?.(v) || Timestamp.fromDate(new Date(v ? `${v}T00:00:00` : Date.now()));
  const normaliza = s => (s || '').toString().toLowerCase();
  const buildTechs = str => str.split(',').map(t => t.trim()).filter(Boolean);

  $('#proyectos').html(`
    <div class="proyectos_container">
      <section class="proyectos_hero">
        <h1 class="hero_title">Mis <span class="gradient_text">Proyectos</span></h1>
        <p class="hero_subtitle">Explora mi colección de proyectos web, móviles y herramientas desarrolladas con las últimas tecnologías</p>
      </section>
      <section class="proyectos_destacados">
        <div class="section_header"><h2 class="section_title">Proyectos Destacados</h2><div class="section_line"></div></div>
        <div class="destacados_grid" id="destacadosGrid">${[1,2,3].map(() => '<div class="skeleton_card"><div class="skeleton_img shimmer"></div><div class="skeleton_text shimmer"></div><div class="skeleton_text short shimmer"></div></div>').join('')}</div>
      </section>
      <section class="todos_proyectos_section">
        <div class="section_header">
          <h2 class="section_title h1pro">Todos mis Proyectos</h2><div class="section_line"></div>
          <p class="section_descripcion">Cada proyecto representa un desafío superado, una tecnología dominada y una solución creada con pasión por el desarrollo</p>
          <div class="wiauth dpn"><div class="login">Login</div><div class="bt_salir">Salir</div></div>
        </div>
        <div class="search_section">
          <div class="search_wrapper">
            <i class="fas fa-search search_icon"></i>
            <input type="text" id="buscarProyecto" class="search_input">
            <button class="search_clear" id="clearSearch" style="display:none;"><i class="fas fa-times"></i></button>
          </div>
        </div>
        <div class="filtros_section">
          <div class="filtros_wrapper">
        ${[{cat:'all',ico:'layer-group',txt:'Todos los Proyectos',type:'s'},
          {cat:'web',ico:'globe',txt:'Web Apps',type:'s'},
          {cat:'mobile',ico:'mobile-alt',txt:'Mobile',type:'s'},
          {cat:'windows',ico:'windows',txt:'Windows',type:'b'},
          {cat:'educacion',ico:'graduation-cap',txt:'Educación',type:'s'},
          {cat:'diseno',ico:'palette',txt:'Diseño',type:'s'},
          {cat:'devs',ico:'user-astronaut',txt:'Devs',type:'s'},
          {cat:'tools',ico:'tools',txt:'Herramientas',type:'s'},
          {cat:'camino',ico:'hourglass-half',txt:'Camino',type:'s'},
        ].map(f => `<button class="filtro_btn ${f.cat==='all'?'active':''}" data-categoria="${f.cat}"><i class="fa${f.type} fa-${f.ico}"></i> ${f.txt}</button>`).join('')}
          </div>
          <div class="filtros_orden">
            <select id="ordenarProyectos" class="orden_select">
              ${['destacado|Destacados','reciente|Más reciente','antiguo|Más antiguo','nombre|Por nombre'].map(o => {const [val, txt] = o.split('|'); return `<option value="${val}">${txt}</option>`;}).join('')}
            </select>
          </div>
        </div>
        <div class="proyectos_grid" id="proyectosGrid"><div class="loading_grid"><i class="fas fa-spinner fa-spin"></i><p>Cargando proyectos...</p></div></div>
        <div class="no_resultados" style="display:none;"><i class="fas fa-search"></i><h3>No se encontraron proyectos</h3><p>Intenta con otros términos de búsqueda</p></div>
        <div class="load_more_section" id="loadMoreSection" style="display:none;">
          <button class="btn_load_more" id="btnLoadMore"><i class="fas fa-plus-circle"></i><span>Mostrar Más</span></button>
        </div>
      </section>
    </div>
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
          <div class="form_group"><label><i class="fas fa-align-left"></i> Descripción</label><textarea id="inputDescripcion" class="form_textarea" placeholder="Describe..." rows="3" required></textarea></div>
          <div class="form_row">
            <div class="form_group"><label><i class="fas fa-code"></i> Tecnologías</label><input type="text" id="inputTecnologias" class="form_input" placeholder="JS, React, CSS" required></div>
            <div class="form_group"><label><i class="fas fa-calendar"></i> Fecha</label><input type="date" id="inputFecha" class="form_input" required></div>
          </div>
          <div class="form_row">
            <div class="form_group">
              <label><i class="fas fa-folder"></i> Categoría</label>
              <select id="inputCategoria" class="form_select" required>
                <option value="">Seleccionar...</option>
                  ${['web|Web Apps',
                    'mobile|Mobile',
                    'windows|Windows',
                    'educacion|Educación',
                    'diseno|Diseño',
                    'devs|Devs',
                    'tools|Herramientas',
                    'camino|Camino',
                  ].map(c => {const [val, txt] = c.split('|'); return `<option value="${val}">${txt}</option>`;}).join('')}
              </select>
            </div>
            <div class="form_group"><label class="destacado"><span><input type="checkbox" id="inputDestacado"> Destacado <i class="fas fa-star"></i></span></label></div>
          </div>
          <div class="modal_acciones">
            <button type="submit" class="btn_modal btn_guardar" id="btnGuardar"><i class="fas fa-save"></i> Guardar</button>
          </div>
        </form>
      </div>
    </div>
  `);

  // RENDER: Destacados (local)
  const renderDestacados = () => {
    setTimeout(() => {
      $('#destacadosGrid').html(destacados.map((p, i) => `
        <a href="${p.url}" target="_blank" rel="noopener" class="proyecto_card" style="animation-delay:${i*0.1}s">
          <div class="project_img"><img src="${p.img}" alt="${p.titulo}" loading="lazy"><div class="project_overlay"><i class="fas fa-external-link-alt"></i></div></div>
          <div class="project_info"><h3 class="project_title">${p.titulo}</h3><p class="project_desc">${p.descripcion}</p><div class="project_tags">${p.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}</div></div>
        </a>
      `).join(''));
      setTimeout(() => $('.proyecto_card').addClass('visible'), 50);
    }, 800);
  };

  // RENDER: Todos (Firebase)
  const renderizar = (cant = inicial, reset = false) => {
    const grid = $('#proyectosGrid');
    if (reset) {
      grid.empty();
      mostrados = 0;
      if (autenticado) grid.append(`<div class="proyecto_card card_agregar" id="cardAgregar"><div class="agregar_content"><div class="agregar_icon"><i class="fas fa-plus"></i></div><h3>Agregar</h3><p>Nuevo proyecto</p></div></div>`);
    }
    if (!filtrados.length) {
      $('.no_resultados').fadeIn(200);
      $('#loadMoreSection').hide();
      return;
    }
    $('.no_resultados').hide();
    filtrados.slice(mostrados, mostrados + cant).forEach((p, i) => {
      grid.append(`
        <div class="proyecto_card" data-id="${p.id}" style="animation-delay:${i*0.05}s">
          <div class="project_img">
            <img src="${p.img}" alt="${p.titulo}" loading="lazy">
            <div class="project_overlay">
              <a href="${p.url}" target="_blank" rel="noopener" class="btn_overlay" title="Abrir"><i class="fas fa-external-link-alt"></i></a>
              ${autenticado ? `<button class="btn_overlay btn_editar" data-id="${p.id}" title="Editar"><i class="fas fa-edit"></i></button><button class="btn_overlay btn_eliminar" data-id="${p.id}" title="Eliminar"><i class="fas fa-trash"></i></button>` : ''}
            </div>
            ${p.destacado ? '<div class="badge_destacado"><i class="fas fa-star"></i></div>' : ''}
          </div>
          <div class="project_info"><h3 class="project_title">${p.titulo}</h3><p class="project_desc">${p.descripcion}</p><div class="project_tags">${(p.tecnologias||[]).slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}</div></div>
        </div>
      `);
    });
    setTimeout(() => grid.find('.proyecto_card:not(.visible)').addClass('visible'), 50);
    mostrados += cant;
    mostrados < filtrados.length ? $('#loadMoreSection').fadeIn(200) : $('#loadMoreSection').fadeOut(200);
  };

  // FIREBASE: Traer proyectos
  const traerProyectos = async (forzar = false) => {
    if (!forzar) {
      const cache = (getls(CACHE_KEY) || {}).data || [];
      if (cache.length) {
        todos = filtrados = cache;
        renderizar(inicial, true);
        return;
      }
    }
    try {
      const snap = await (async () => {
        try {
          return await getDocs(query(collection(db, 'proyectos'), orderBy('creadoEn', 'desc')));
        } catch {
          return await getDocs(collection(db, 'proyectos'));
        }
      })();
      todos = filtrados = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      renderizar(inicial, true);
      savels(CACHE_KEY, { data: todos, ts: Date.now() }, 24);
      $('#buscarProyecto').attr('placeholder', `Buscar en ${todos.length} proyectos...`);
    } catch (e) {
      if (!todos.length) $('.loading_grid').html('<i class="fas fa-exclamation-triangle"></i><p>Error al cargar</p>');
      console.error('❌', e);
    }
  };

  // EVENTOS: Auth (7 clicks)
  wiSuma('.h1pro', () => {
    autenticado = true;
    $('.wiauth').removeClass('dpn').addClass('dfc');
    renderizar(inicial, true);
    Mensaje('¡Dios te Ama!', 'success');
  }, 7);

  // EVENTOS: Agregar
  $(document).on('click', '#cardAgregar', () => {
    $('#formProyecto')[0].reset();
    $('#formProyecto').removeData('editId');
    $('#modalTitulo').text('Agregar Nuevo Proyecto');
    $('#inputFecha').val(new Date().toISOString().split('T')[0]);
    $('#inputDestacado').prop('checked', false);
    $('#inputId').prop('readonly', false);
    abrirModal('modalProyecto');
  });

  // EVENTOS: Editar
  $(document).on('click', '.btn_editar', function(e) {
    e.stopPropagation();
    const p = todos.find(x => x.id === $(this).data('id'));
    if (!p) return Notificacion('No encontrado', 'error');
    $('#modalTitulo').text('Editar Proyecto');
    $('#inputTitulo').val(p.titulo);
    $('#inputDescripcion').val(p.descripcion);
    $('#inputImg').val(p.img);
    $('#inputUrl').val(p.url);
    $('#inputCategoria').val(p.categoria);
    $('#inputFecha').val(fechaInput(p.fechaProyecto || p.creadoEn));
    $('#inputTecnologias').val((p.tecnologias || []).join(', '));
    $('#inputId').val(p.id).prop('readonly', true);
    $('#inputDestacado').prop('checked', !!p.destacado);
    $('#formProyecto').data('editId', p.id);
    abrirModal('modalProyecto');
  });

  // EVENTOS: Guardar (crear/actualizar)
  $('#formProyecto').on('submit', async function(e) {
    e.preventDefault();
    const editId = $(this).data('editId');
    const btn = $('#btnGuardar');
    const docId = editId || `${$('#inputId').val().trim().toLowerCase().replace(/\s+/g, '-')}_${Date.now()}`;
    const datos = {
      titulo: $('#inputTitulo').val().trim(),
      descripcion: $('#inputDescripcion').val().trim(),
      img: $('#inputImg').val().trim(),
      url: $('#inputUrl').val().trim(),
      categoria: $('#inputCategoria').val(),
      tecnologias: buildTechs($('#inputTecnologias').val()),
      destacado: $('#inputDestacado').is(':checked'),
      fechaProyecto: fechaSave($('#inputFecha').val())
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
    } catch (er) {
      console.error('❌', er);
      Notificacion('Error al guardar', 'error');
    } finally {
      wiSpin(btn, false);
    }
  });

  // EVENTOS: Eliminar
  $(document).on('click', '.btn_eliminar', async function(e) {
    e.stopPropagation();
    if (!confirm('¿Eliminar este proyecto?')) return;
    try {
      await deleteDoc(doc(db, 'proyectos', $(this).data('id')));
      Notificacion('Eliminado ✓', 'success');
      await traerProyectos(true);
    } catch {
      Notificacion('Error al eliminar', 'error');
    }
  });

  // EVENTOS: Buscar
  let to;
  $('#buscarProyecto').on('input', function() {
    const term = normaliza($(this).val().trim());
    $('#clearSearch').toggle(!!term);
    clearTimeout(to);
    to = setTimeout(() => {
      filtrados = term ? todos.filter(p => [p.titulo, p.descripcion, ...(p.tecnologias||[])].some(x => normaliza(x).includes(term))) : [...todos];
      renderizar(inicial, true);
    }, 220);
  });
  $('#clearSearch').on('click', () => $('#buscarProyecto').val('').trigger('input').focus());

  // EVENTOS: Filtro categoría
  $('.filtro_btn').on('click', function() {
    const cat = $(this).data('categoria');
    const term = normaliza($('#buscarProyecto').val().trim());
    $('.filtro_btn').removeClass('active');
    $(this).addClass('active');
    let f = cat === 'all' ? todos : todos.filter(p => p.categoria === cat);
    filtrados = term ? f.filter(p => [p.titulo, p.descripcion, ...(p.tecnologias||[])].some(x => normaliza(x).includes(term))) : f;
    renderizar(inicial, true);
  });

  // EVENTOS: Ordenar
  $('#ordenarProyectos').on('change', function() {
    const sorters = {
      reciente: (a,b) => new Date(b.fechaProyecto?.toDate?.() || b.UpdateEn?.toDate?.() || 0) - new Date(a.fechaProyecto?.toDate?.() || a.UpdateEn?.toDate?.() || 0),
      antiguo: (a,b) => new Date(a.fechaProyecto?.toDate?.() || a.UpdateEn?.toDate?.() || 0) - new Date(b.fechaProyecto?.toDate?.() || b.UpdateEn?.toDate?.() || 0),
      nombre: (a,b) => a.titulo.localeCompare(b.titulo),
      destacado: (a,b) => (b.destacado|0) - (a.destacado|0)
    };
    filtrados.sort(sorters[$(this).val()] || (() => 0));
    renderizar(inicial, true);
  });

  // EVENTOS: Cargar más
  $('#btnLoadMore').on('click', () => {
    renderizar(porCarga);
    const lastCard = $('#proyectosGrid .proyecto_card').last();
    if (lastCard.length && lastCard.offset()) $('html, body').animate({ scrollTop: lastCard.offset().top - 100 }, 350);
  });

  // INIT
  wiVista('.proyectos_hero', () => $('.proyectos_hero').addClass('visible'));
  renderDestacados();
  traerProyectos().then(() => {
    filtrados.sort((a,b) => (b.destacado|0) - (a.destacado|0));
    renderizar(inicial, true);
  });

  console.log('✅ Proyectos completado');
};