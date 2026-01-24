import './proyectos.css';
import $ from 'jquery';
import { wiVista, wicopy } from '../widev.js';

// Datos locales (más adelante desde Firebase)
const proyectosData = [
  {
    id: 1,
    titulo: 'DSCTO - Calculadora Móvil',
    descripcion: 'Aplicación móvil para calcular descuentos, ajustes en recibos, tiempos de beneficios y más, con bloc de notas integrado.',
    img: 'https://i.postimg.cc/dq8nVhCx/Dscto.png',
    url: 'https://dscto.blogspot.com/',
    categoria: 'mobile',
    tecnologias: ['JavaScript', 'PWA', 'Firebase', 'CSS3'],
    fecha: '2024-01-15',
    destacado: true
  },
  {
    id: 2,
    titulo: 'CODEWIL - Optimizador de Código',
    descripcion: 'Herramienta profesional para convertir XML, optimizar formatos, cambiar mayúsculas y minificar código de forma eficiente.',
    img: 'https://i.postimg.cc/CSQcPTYm/Codewil.png',
    url: 'https://codewil.blogspot.com/',
    categoria: 'tools',
    tecnologias: ['React', 'Node.js', 'API', 'TypeScript'],
    fecha: '2023-11-20',
    destacado: true
  },
  {
    id: 3,
    titulo: 'CODESBE - Convertidor de Texto',
    descripcion: 'Programa eficiente que permite realizar cambios de palabras entre minúsculas y mayúsculas de manera instantánea.',
    img: 'https://i.postimg.cc/FNRPVstY/Codesbe.png',
    url: 'https://codesbe.blogspot.com/',
    categoria: 'tools',
    tecnologias: ['JavaScript', 'HTML5', 'CSS3'],
    fecha: '2023-09-10',
    destacado: false
  },
  {
    id: 4,
    titulo: 'WIIHOPE - Plataforma Educativa',
    descripcion: 'Plataforma interactiva diseñada para facilitar el aprendizaje y compartir conocimientos de manera colaborativa.',
    img: 'https://i.postimg.cc/YrMRGtfq/Wiihope.png',
    url: 'https://wiihope.blogspot.com/',
    categoria: 'web',
    tecnologias: ['Vue.js', 'Firebase', 'WebRTC', 'Sass'],
    fecha: '2024-03-05',
    destacado: true
  },
  {
    id: 5,
    titulo: 'WICOLORS - Paleta de Colores',
    descripcion: 'Generador inteligente de paletas de colores con exportación en múltiples formatos para diseñadores.',
    img: 'https://i.postimg.cc/FhkDwWHm/Wiicolors.png',
    url: 'https://wicolors.blogspot.com/',
    categoria: 'web',
    tecnologias: ['Vue.js', 'Canvas API', 'Design', 'CSS3'],
    fecha: '2023-07-22',
    destacado: false
  },
  {
    id: 6,
    titulo: 'SUVEMY - Gestión de Ventas',
    descripcion: 'Sistema completo para gestionar ventas, inventario y clientes de pequeños negocios de forma eficiente.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://suvemy.blogspot.com/',
    categoria: 'web',
    tecnologias: ['Angular', 'Firebase', 'Material UI', 'Charts.js'],
    fecha: '2023-12-18',
    destacado: false
  },
  {
    id: 7,
    titulo: 'MEEXPO - Portfolio Showcase',
    descripcion: 'Plataforma para crear portfolios profesionales y exhibir proyectos de manera atractiva con animaciones.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://meexpo.blogspot.com/',
    categoria: 'web',
    tecnologias: ['Next.js', 'Tailwind', 'Framer Motion', 'MDX'],
    fecha: '2024-02-10',
    destacado: false
  },
  {
    id: 8,
    titulo: 'CLAUQI - App Financiera',
    descripcion: 'Aplicación móvil para control de gastos personales y planificación financiera inteligente con gráficos.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://clauqi.blogspot.com/',
    categoria: 'mobile',
    tecnologias: ['Flutter', 'Dart', 'SQLite', 'Charts'],
    fecha: '2023-10-30',
    destacado: false
  },
  {
    id: 9,
    titulo: 'WINOTAS - Bloc de Notas Inteligente',
    descripcion: 'Bloc de notas con sincronización en la nube, markdown y organización por etiquetas y carpetas.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://winotas.blogspot.com/',
    categoria: 'tools',
    tecnologias: ['Electron', 'React', 'Firebase', 'Markdown'],
    fecha: '2024-04-12',
    destacado: false
  },
  {
    id: 10,
    titulo: 'TASKFLOW - Gestor de Tareas',
    descripcion: 'Aplicación de gestión de tareas con tableros kanban, recordatorios y colaboración en tiempo real.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://taskflow.example.com/',
    categoria: 'web',
    tecnologias: ['React', 'Redux', 'Socket.io', 'MongoDB'],
    fecha: '2024-05-20',
    destacado: false
  },
  {
    id: 11,
    titulo: 'FITNESSPAL - App de Ejercicios',
    descripcion: 'Aplicación móvil para seguimiento de ejercicios, rutinas personalizadas y progreso físico.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://fitnesspal.example.com/',
    categoria: 'mobile',
    tecnologias: ['React Native', 'Firebase', 'Health Kit', 'Redux'],
    fecha: '2024-06-15',
    destacado: false
  },
  {
    id: 12,
    titulo: 'RECIPEBOOK - Recetas de Cocina',
    descripcion: 'Plataforma para compartir, descubrir y guardar recetas de cocina con videos y valoraciones.',
    img: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://recipebook.example.com/',
    categoria: 'web',
    tecnologias: ['Next.js', 'PostgreSQL', 'Cloudinary', 'Tailwind'],
    fecha: '2024-07-10',
    destacado: false
  }
];

// Tecnologías principales
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

export const render = () => `
  <div class="proyectos_container">
    <!-- BUSCADOR PRINCIPAL -->
    <section class="search_section">
      <div class="search_wrapper">
        <i class="fas fa-search search_icon"></i>
        <input 
          type="text" 
          id="buscarProyecto" 
          class="search_input" 
          placeholder="Buscar proyectos por nombre, descripción o tecnología..."
        >
        <button class="search_clear" id="clearSearch" style="display:none;">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </section>

    <!-- FILTROS -->
    <section class="filtros_section">
      <div class="filtros_wrapper">
        <button class="filtro_btn active" data-categoria="all">
          <i class="fas fa-layer-group"></i> Todos
        </button>
        <button class="filtro_btn" data-categoria="web">
          <i class="fas fa-globe"></i> Web Apps
        </button>
        <button class="filtro_btn" data-categoria="mobile">
          <i class="fas fa-mobile-alt"></i> Mobile
        </button>
        <button class="filtro_btn" data-categoria="tools">
          <i class="fas fa-tools"></i> Herramientas
        </button>
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

    <!-- GRID PROYECTOS -->
    <section class="proyectos_grid_section">
      <div class="proyectos_grid" id="proyectosGrid">
        <!-- Proyectos se cargan dinámicamente -->
      </div>
      <div class="no_resultados" style="display:none;">
        <i class="fas fa-search"></i>
        <h3>No se encontraron proyectos</h3>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    </section>

    <!-- PAGINACIÓN -->
    <section class="paginacion_section" id="paginacionSection" style="display:none;">
      <button class="paginacion_btn" id="btnAnterior" disabled>
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="paginacion_paginas" id="paginacionPaginas">
        <!-- Números de página -->
      </div>
      <button class="paginacion_btn" id="btnSiguiente">
        <i class="fas fa-chevron-right"></i>
      </button>
    </section>

    <!-- TECNOLOGÍAS PRINCIPALES -->
    <section class="tech_principales">
      <h2 class="section_title">Tecnologías Principales</h2>
      <div class="tech_grid">
        ${techPrincipales.map(tech => `
          <div class="tech_card" style="--tech-color: ${tech.color}">
            <i class="${tech.icono}"></i>
            <span>${tech.nombre}</span>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
`;

let proyectosFiltrados = [...proyectosData];
let paginaActual = 1;
const proyectosPorPagina = 8;

export const init = () => {
  cargarProyectos();
  setupBusqueda();
  setupFiltros();
  setupOrdenamiento();
  setupPaginacion();
  
  console.log('✅ Proyectos cargados - Vista renovada');
};

// Cargar proyectos con animación suave
const cargarProyectos = () => {
  const grid = $('#proyectosGrid');
  grid.empty();

  if (proyectosFiltrados.length === 0) {
    $('.no_resultados').fadeIn(300);
    $('#paginacionSection').hide();
    return;
  }

  $('.no_resultados').hide();

  // Calcular proyectos de la página actual
  const inicio = (paginaActual - 1) * proyectosPorPagina;
  const fin = inicio + proyectosPorPagina;
  const proyectosPagina = proyectosFiltrados.slice(inicio, fin);

  proyectosPagina.forEach((proyecto, index) => {
    const card = `
      <a href="${proyecto.url}" target="_blank" class="proyecto_card" data-proyecto="${proyecto.id}" style="animation-delay: ${index * 0.05}s">
        <div class="proyecto_imagen">
          <img src="${proyecto.img}" alt="${proyecto.titulo}" loading="lazy">
          <div class="proyecto_overlay">
            <i class="fas fa-external-link-alt"></i>
          </div>
          ${proyecto.destacado ? '<div class="badge_destacado"><i class="fas fa-star"></i></div>' : ''}
        </div>
        <div class="proyecto_info">
          <h3 class="proyecto_titulo">${proyecto.titulo}</h3>
          <p class="proyecto_descripcion">${proyecto.descripcion}</p>
          <div class="proyecto_tecnologias">
            ${proyecto.tecnologias.slice(0, 3).map(tech => `<span class="tech_tag">${tech}</span>`).join('')}
          </div>
          <div class="proyecto_footer">
            <span class="proyecto_fecha">
              <i class="fas fa-calendar"></i> ${formatearFecha(proyecto.fecha)}
            </span>
            <button class="btn_copy_link" data-copy="${proyecto.url}" title="Copiar enlace">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
      </a>
    `;
    grid.append(card);
  });

  // Animación de entrada
  setTimeout(() => {
    $('.proyecto_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 50);
    });
  }, 10);

  // Setup eventos
  setupEventosCards();
  actualizarPaginacion();
};

// Setup búsqueda con debounce
const setupBusqueda = () => {
  let timeoutBusqueda;
  const $input = $('#buscarProyecto');
  const $clear = $('#clearSearch');
  
  $input.on('input', function() {
    const termino = $(this).val().trim();
    
    $clear.toggle(termino.length > 0);
    
    clearTimeout(timeoutBusqueda);
    timeoutBusqueda = setTimeout(() => {
      if (termino === '') {
        proyectosFiltrados = [...proyectosData];
      } else {
        const buscar = termino.toLowerCase();
        proyectosFiltrados = proyectosData.filter(p => 
          p.titulo.toLowerCase().includes(buscar) ||
          p.descripcion.toLowerCase().includes(buscar) ||
          p.tecnologias.some(t => t.toLowerCase().includes(buscar))
        );
      }
      
      paginaActual = 1;
      cargarProyectos();
    }, 300);
  });

  $clear.on('click', () => {
    $input.val('').trigger('input').focus();
  });
};

// Setup filtros
const setupFiltros = () => {
  $('.filtro_btn').on('click', function() {
    const categoria = $(this).data('categoria');
    
    $('.filtro_btn').removeClass('active');
    $(this).addClass('active');
    
    const terminoBusqueda = $('#buscarProyecto').val().toLowerCase().trim();
    
    if (categoria === 'all') {
      proyectosFiltrados = terminoBusqueda ? 
        proyectosData.filter(p => 
          p.titulo.toLowerCase().includes(terminoBusqueda) ||
          p.descripcion.toLowerCase().includes(terminoBusqueda) ||
          p.tecnologias.some(t => t.toLowerCase().includes(terminoBusqueda))
        ) : [...proyectosData];
    } else {
      proyectosFiltrados = proyectosData.filter(p => {
        const coincideCategoria = p.categoria === categoria;
        const coincideBusqueda = !terminoBusqueda || 
          p.titulo.toLowerCase().includes(terminoBusqueda) ||
          p.descripcion.toLowerCase().includes(terminoBusqueda) ||
          p.tecnologias.some(t => t.toLowerCase().includes(terminoBusqueda));
        return coincideCategoria && coincideBusqueda;
      });
    }
    
    paginaActual = 1;
    cargarProyectos();
  });
};

// Setup ordenamiento
const setupOrdenamiento = () => {
  $('#ordenarProyectos').on('change', function() {
    const orden = $(this).val();
    
    switch(orden) {
      case 'reciente':
        proyectosFiltrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        break;
      case 'antiguo':
        proyectosFiltrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        break;
      case 'nombre':
        proyectosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'destacado':
        proyectosFiltrados.sort((a, b) => b.destacado - a.destacado);
        break;
    }
    
    cargarProyectos();
  });
};

// Setup eventos de las cards
const setupEventosCards = () => {
  // Prevenir navegación al copiar
  $('.btn_copy_link').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const url = $(this).data('copy');
    wicopy(url, this, '¡Copiado!');
  });
};

// Setup paginación
const setupPaginacion = () => {
  $('#btnAnterior').on('click', () => {
    if (paginaActual > 1) {
      paginaActual--;
      cargarProyectos();
      scrollToTop();
    }
  });
  
  $('#btnSiguiente').on('click', () => {
    const totalPaginas = Math.ceil(proyectosFiltrados.length / proyectosPorPagina);
    if (paginaActual < totalPaginas) {
      paginaActual++;
      cargarProyectos();
      scrollToTop();
    }
  });
};

// Actualizar paginación
const actualizarPaginacion = () => {
  const totalPaginas = Math.ceil(proyectosFiltrados.length / proyectosPorPagina);
  
  if (totalPaginas <= 1) {
    $('#paginacionSection').hide();
    return;
  }
  
  $('#paginacionSection').show();
  
  // Actualizar botones
  $('#btnAnterior').prop('disabled', paginaActual === 1);
  $('#btnSiguiente').prop('disabled', paginaActual === totalPaginas);
  
  // Generar números de página
  const $paginas = $('#paginacionPaginas');
  $paginas.empty();
  
  const maxVisible = 5;
  let inicio = Math.max(1, paginaActual - Math.floor(maxVisible / 2));
  let fin = Math.min(totalPaginas, inicio + maxVisible - 1);
  
  if (fin - inicio < maxVisible - 1) {
    inicio = Math.max(1, fin - maxVisible + 1);
  }
  
  if (inicio > 1) {
    $paginas.append(`<button class="paginacion_numero" data-pagina="1">1</button>`);
    if (inicio > 2) {
      $paginas.append(`<span class="paginacion_dots">...</span>`);
    }
  }
  
  for (let i = inicio; i <= fin; i++) {
    $paginas.append(`
      <button class="paginacion_numero ${i === paginaActual ? 'active' : ''}" data-pagina="${i}">
        ${i}
      </button>
    `);
  }
  
  if (fin < totalPaginas) {
    if (fin < totalPaginas - 1) {
      $paginas.append(`<span class="paginacion_dots">...</span>`);
    }
    $paginas.append(`<button class="paginacion_numero" data-pagina="${totalPaginas}">${totalPaginas}</button>`);
  }
  
  // Eventos de números de página
  $('.paginacion_numero').on('click', function() {
    paginaActual = parseInt($(this).data('pagina'));
    cargarProyectos();
    scrollToTop();
  });
};

// Scroll suave al inicio
const scrollToTop = () => {
  $('html, body').animate({ 
    scrollTop: $('.proyectos_container').offset().top - 80 
  }, 300);
};

// Utilidades
const formatearFecha = (fecha) => {
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const d = new Date(fecha + 'T00:00:00');
  return `${meses[d.getMonth()]} ${d.getFullYear()}`;
};

export const cleanup = () => {
  $('.filtro_btn, #buscarProyecto, #clearSearch, #ordenarProyectos, .btn_copy_link, #btnAnterior, #btnSiguiente, .paginacion_numero').off();
  console.log('🧹 Proyectos limpiado');
};