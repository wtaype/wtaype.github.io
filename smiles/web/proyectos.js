import './proyectos.css';
import $ from 'jquery';
import { wiVista, wicopy } from '../widev.js';

const proyectosData = [
  { id: 1, titulo: 'DSCTO - Calculadora Móvil', descripcion: 'Aplicación móvil para calcular descuentos, ajustes en recibos, tiempos de beneficios y más, con bloc de notas integrado.', img: 'https://i.postimg.cc/dq8nVhCx/Dscto.png', url: 'https://dscto.blogspot.com/', categoria: 'mobile', tecnologias: ['JavaScript', 'PWA', 'Firebase', 'CSS3'], fecha: '2024-01-15', destacado: true },
  { id: 2, titulo: 'CODEWIL - Optimizador de Código', descripcion: 'Herramienta profesional para convertir XML, optimizar formatos, cambiar mayúsculas y minificar código de forma eficiente.', img: 'https://i.postimg.cc/CSQcPTYm/Codewil.png', url: 'https://codewil.blogspot.com/', categoria: 'tools', tecnologias: ['React', 'Node.js', 'API', 'TypeScript'], fecha: '2023-11-20', destacado: true },
  { id: 3, titulo: 'CODESBE - Convertidor de Texto', descripcion: 'Programa eficiente que permite realizar cambios de palabras entre minúsculas y mayúsculas de manera instantánea.', img: 'https://i.postimg.cc/FNRPVstY/Codesbe.png', url: 'https://codesbe.blogspot.com/', categoria: 'tools', tecnologias: ['JavaScript', 'HTML5', 'CSS3'], fecha: '2023-09-10', destacado: false },
  { id: 4, titulo: 'WIIHOPE - Plataforma Educativa', descripcion: 'Plataforma interactiva diseñada para facilitar el aprendizaje y compartir conocimientos de manera colaborativa.', img: 'https://i.postimg.cc/YrMRGtfq/Wiihope.png', url: 'https://wiihope.blogspot.com/', categoria: 'web', tecnologias: ['Vue.js', 'Firebase', 'WebRTC', 'Sass'], fecha: '2024-03-05', destacado: true },
  { id: 5, titulo: 'WICOLORS - Paleta de Colores', descripcion: 'Generador inteligente de paletas de colores con exportación en múltiples formatos para diseñadores.', img: 'https://i.postimg.cc/FhkDwWHm/Wiicolors.png', url: 'https://wicolors.blogspot.com/', categoria: 'web', tecnologias: ['Vue.js', 'Canvas API', 'Design', 'CSS3'], fecha: '2023-07-22', destacado: false },
  { id: 6, titulo: 'SUVEMY - Gestión de Ventas', descripcion: 'Sistema completo para gestionar ventas, inventario y clientes de pequeños negocios de forma eficiente.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://suvemy.blogspot.com/', categoria: 'web', tecnologias: ['Angular', 'Firebase', 'Material UI', 'Charts.js'], fecha: '2023-12-18', destacado: false },
  { id: 7, titulo: 'MEEXPO - Portfolio Showcase', descripcion: 'Plataforma para crear portfolios profesionales y exhibir proyectos de manera atractiva con animaciones.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://meexpo.blogspot.com/', categoria: 'web', tecnologias: ['Next.js', 'Tailwind', 'Framer Motion', 'MDX'], fecha: '2024-02-10', destacado: false },
  { id: 8, titulo: 'CLAUQI - App Financiera', descripcion: 'Aplicación móvil para control de gastos personales y planificación financiera inteligente con gráficos.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://clauqi.blogspot.com/', categoria: 'mobile', tecnologias: ['Flutter', 'Dart', 'SQLite', 'Charts'], fecha: '2023-10-30', destacado: false },
  { id: 9, titulo: 'WINOTAS - Bloc de Notas Inteligente', descripcion: 'Bloc de notas con sincronización en la nube, markdown y organización por etiquetas y carpetas.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://winotas.blogspot.com/', categoria: 'tools', tecnologias: ['Electron', 'React', 'Firebase', 'Markdown'], fecha: '2024-04-12', destacado: false },
  { id: 10, titulo: 'TASKFLOW - Gestor de Tareas', descripcion: 'Aplicación de gestión de tareas con tableros kanban, recordatorios y colaboración en tiempo real.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://taskflow.example.com/', categoria: 'web', tecnologias: ['React', 'Redux', 'Socket.io', 'MongoDB'], fecha: '2024-05-20', destacado: false },
  { id: 11, titulo: 'FITNESSPAL - App de Ejercicios', descripcion: 'Aplicación móvil para seguimiento de ejercicios, rutinas personalizadas y progreso físico.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://fitnesspal.example.com/', categoria: 'mobile', tecnologias: ['React Native', 'Firebase', 'Health Kit', 'Redux'], fecha: '2024-06-15', destacado: false },
  { id: 12, titulo: 'RECIPEBOOK - Recetas de Cocina', descripcion: 'Plataforma para compartir, descubrir y guardar recetas de cocina con videos y valoraciones.', img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png', url: 'https://recipebook.example.com/', categoria: 'web', tecnologias: ['Next.js', 'PostgreSQL', 'Cloudinary', 'Tailwind'], fecha: '2024-07-10', destacado: false }
];

const techPrincipales = [
  { nombre: 'JavaScript', icono: 'fab fa-js', color: '#F7DF1E' },
  { nombre: 'Node.js', icono: 'fab fa-node', color: '#339933' },
  { nombre: 'React', icono: 'fab fa-react', color: '#61DAFB' },
  { nombre: 'Vue.js', icono: 'fab fa-vuejs', color: '#4FC08D' },
  { nombre: 'Firebase', icono: 'fas fa-fire', color: '#FFCA28' },
  { nombre: 'HTML5', icono: 'fab fa-html5', color: '#E34F26' },
  { nombre: 'CSS3', icono: 'fab fa-css3-alt', color: '#1572B6' },
  { nombre: 'VS Code', icono: 'fas fa-code', color: '#007ACC' }
];

export const proyectos = () => {
  let filtrados = [...proyectosData];
  let pagina = 1;
  const porPagina = 8;

  $('#proyectos').html(`
    <div class="proyectos_container">
      <section class="search_section">
        <div class="search_wrapper">
          <i class="fas fa-search search_icon"></i>
          <input type="text" id="buscarProyecto" class="search_input" placeholder="Buscar proyectos por nombre, descripción o tecnología...">
          <button class="search_clear" id="clearSearch" style="display:none;"><i class="fas fa-times"></i></button>
        </div>
      </section>
      <section class="filtros_section">
        <div class="filtros_wrapper">
          <button class="filtro_btn active" data-categoria="all"><i class="fas fa-layer-group"></i> Todos</button>
          <button class="filtro_btn" data-categoria="web"><i class="fas fa-globe"></i> Web Apps</button>
          <button class="filtro_btn" data-categoria="mobile"><i class="fas fa-mobile-alt"></i> Mobile</button>
          <button class="filtro_btn" data-categoria="tools"><i class="fas fa-tools"></i> Herramientas</button>
        </div>
        <div class="filtros_orden">
          <select id="ordenarProyectos" class="orden_select">
            <option value="reciente">Más reciente</option>
            <option value="antiguo">Más antiguo</option>
            <option value="nombre">Por nombre</option>
            <option value="destacado">Destacados primero</option>
          </select>
        </div>
      </section>
      <section class="proyectos_grid_section">
        <div class="proyectos_grid" id="proyectosGrid"></div>
        <div class="no_resultados" style="display:none;">
          <i class="fas fa-search"></i>
          <h3>No se encontraron proyectos</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </div>
      </section>
      <section class="paginacion_section" id="paginacionSection" style="display:none;">
        <button class="paginacion_btn" id="btnAnterior" disabled><i class="fas fa-chevron-left"></i></button>
        <div class="paginacion_paginas" id="paginacionPaginas"></div>
        <button class="paginacion_btn" id="btnSiguiente"><i class="fas fa-chevron-right"></i></button>
      </section>
      <section class="tech_principales">
        <h2 class="section_title">Tecnologías Principales</h2>
        <div class="tech_grid">
          ${techPrincipales.map(t => `<div class="tech_card" style="--tech-color: ${t.color}"><i class="${t.icono}"></i><span>${t.nombre}</span></div>`).join('')}
        </div>
      </section>
    </div>
  `);

  const fmt = f => { const d = new Date(f + 'T00:00:00'); return ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'][d.getMonth()] + ' ' + d.getFullYear(); };
  const scroll = () => $('html, body').animate({ scrollTop: $('.proyectos_container').offset().top - 80 }, 300);

  const actualizarPag = () => {
    const total = Math.ceil(filtrados.length / porPagina);
    if (total <= 1) return $('#paginacionSection').hide();
    $('#paginacionSection').show();
    $('#btnAnterior').prop('disabled', pagina === 1);
    $('#btnSiguiente').prop('disabled', pagina === total);
    const $pag = $('#paginacionPaginas').empty();
    const max = 5, ini = Math.max(1, pagina - Math.floor(max / 2)), fin = Math.min(total, ini + max - 1);
    if (ini > 1) { $pag.append(`<button class="paginacion_numero" data-pagina="1">1</button>`); if (ini > 2) $pag.append(`<span class="paginacion_dots">...</span>`); }
    for (let i = ini; i <= fin; i++) $pag.append(`<button class="paginacion_numero ${i === pagina ? 'active' : ''}" data-pagina="${i}">${i}</button>`);
    if (fin < total) { if (fin < total - 1) $pag.append(`<span class="paginacion_dots">...</span>`); $pag.append(`<button class="paginacion_numero" data-pagina="${total}">${total}</button>`); }
    $('.paginacion_numero').on('click', function() { pagina = parseInt($(this).data('pagina')); cargar(); scroll(); });
  };

  const cargar = () => {
    const grid = $('#proyectosGrid').empty();
    if (!filtrados.length) { $('.no_resultados').fadeIn(300); return $('#paginacionSection').hide(); }
    $('.no_resultados').hide();
    const ini = (pagina - 1) * porPagina, pag = filtrados.slice(ini, ini + porPagina);
    pag.forEach((p, i) => {
      grid.append(`
        <a href="${p.url}" target="_blank" class="proyecto_card" data-proyecto="${p.id}" style="animation-delay: ${i * 0.05}s">
          <div class="proyecto_imagen">
            <img src="${p.img}" alt="${p.titulo}" loading="lazy">
            <div class="proyecto_overlay"><i class="fas fa-external-link-alt"></i></div>
            ${p.destacado ? '<div class="badge_destacado"><i class="fas fa-star"></i></div>' : ''}
          </div>
          <div class="proyecto_info">
            <h3 class="proyecto_titulo">${p.titulo}</h3>
            <p class="proyecto_descripcion">${p.descripcion}</p>
            <div class="proyecto_tecnologias">${p.tecnologias.slice(0, 3).map(t => `<span class="tech_tag">${t}</span>`).join('')}</div>
            <div class="proyecto_footer">
              <span class="proyecto_fecha"><i class="fas fa-calendar"></i> ${fmt(p.fecha)}</span>
              <button class="btn_copy_link" data-copy="${p.url}" title="Copiar enlace"><i class="fas fa-copy"></i></button>
            </div>
          </div>
        </a>
      `);
    });
    setTimeout(() => $('.proyecto_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 50)), 10);
    $('.btn_copy_link').on('click', function(e) { e.preventDefault(); e.stopPropagation(); wicopy($(this).data('copy'), this, '¡Copiado!'); });
    actualizarPag();
  };

  let timeout;
  $('#buscarProyecto').on('input', function() {
    const term = $(this).val().trim();
    $('#clearSearch').toggle(term.length > 0);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      filtrados = term ? proyectosData.filter(p => p.titulo.toLowerCase().includes(term.toLowerCase()) || p.descripcion.toLowerCase().includes(term.toLowerCase()) || p.tecnologias.some(t => t.toLowerCase().includes(term.toLowerCase()))) : [...proyectosData];
      pagina = 1; cargar();
    }, 300);
  });
  $('#clearSearch').on('click', () => $('#buscarProyecto').val('').trigger('input').focus());

  $('.filtro_btn').on('click', function() {
    const cat = $(this).data('categoria');
    $('.filtro_btn').removeClass('active'); $(this).addClass('active');
    const term = $('#buscarProyecto').val().toLowerCase().trim();
    filtrados = cat === 'all' ? (term ? proyectosData.filter(p => p.titulo.toLowerCase().includes(term) || p.descripcion.toLowerCase().includes(term) || p.tecnologias.some(t => t.toLowerCase().includes(term))) : [...proyectosData]) : proyectosData.filter(p => p.categoria === cat && (!term || p.titulo.toLowerCase().includes(term) || p.descripcion.toLowerCase().includes(term) || p.tecnologias.some(t => t.toLowerCase().includes(term))));
    pagina = 1; cargar();
  });

  $('#ordenarProyectos').on('change', function() {
    const ord = $(this).val();
    if (ord === 'reciente') filtrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    else if (ord === 'antiguo') filtrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    else if (ord === 'nombre') filtrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
    else filtrados.sort((a, b) => b.destacado - a.destacado);
    cargar();
  });

  $('#btnAnterior').on('click', () => { if (pagina > 1) { pagina--; cargar(); scroll(); } });
  $('#btnSiguiente').on('click', () => { if (pagina < Math.ceil(filtrados.length / porPagina)) { pagina++; cargar(); scroll(); } });

  cargar();
  console.log('✅ Proyectos cargados');
};