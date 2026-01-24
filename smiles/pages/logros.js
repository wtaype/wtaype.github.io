import './logros.css';
import $ from 'jquery';
import { wiVista, abrirModal, cerrarModal, wicopy } from '../widev.js';

// Datos locales (más adelante desde Firebase)
const logrosData = [
  {
    id: 1,
    titulo: 'Certificación Full Stack Developer',
    descripcion: 'Certificación completa en desarrollo web moderno con React, Node.js y bases de datos',
    tipo: 'certificado',
    institucion: 'Platzi',
    fecha: '2024-01-15',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://platzi.com/certificado',
    destacado: true,
    icono: 'fas fa-graduation-cap',
    color: '#4CAF50'
  },
  {
    id: 2,
    titulo: 'Primer Lugar Hackathon 2023',
    descripcion: 'Ganador del primer lugar en hackathon nacional con proyecto de IA para educación',
    tipo: 'premio',
    institucion: 'Tech Summit Peru',
    fecha: '2023-11-20',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: '',
    destacado: true,
    icono: 'fas fa-trophy',
    color: '#FFD700'
  },
  {
    id: 3,
    titulo: '50+ Proyectos Completados',
    descripcion: 'Desarrollé y desplegué más de 50 proyectos web profesionales para clientes de todo el mundo',
    tipo: 'hito',
    institucion: 'Freelance',
    fecha: '2023-12-31',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: '/proyectos',
    destacado: false,
    icono: 'fas fa-rocket',
    color: '#2196F3'
  },
  {
    id: 4,
    titulo: 'Curso Avanzado de Firebase',
    descripcion: 'Especialización en Firebase: Authentication, Firestore, Cloud Functions y Hosting',
    tipo: 'certificado',
    institucion: 'Google Cloud',
    fecha: '2023-09-10',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://google.com/certificado',
    destacado: false,
    icono: 'fas fa-certificate',
    color: '#FF9800'
  },
  {
    id: 5,
    titulo: 'Contribuidor Open Source',
    descripcion: 'Más de 100 contribuciones a proyectos open source en GitHub',
    tipo: 'hito',
    institucion: 'GitHub',
    fecha: '2024-03-05',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://github.com/wtaype',
    destacado: true,
    icono: 'fab fa-github',
    color: '#6e5494'
  },
  {
    id: 6,
    titulo: 'Mentor de Programación',
    descripcion: 'Mentoría a más de 30 estudiantes en desarrollo web full stack',
    tipo: 'reconocimiento',
    institucion: 'Dev.to Community',
    fecha: '2023-07-22',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: '',
    destacado: false,
    icono: 'fas fa-chalkboard-teacher',
    color: '#9C27B0'
  },
  {
    id: 7,
    titulo: 'JavaScript Expert',
    descripcion: 'Certificación avanzada en JavaScript ES6+, TypeScript y frameworks modernos',
    tipo: 'certificado',
    institucion: 'freeCodeCamp',
    fecha: '2023-05-18',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: 'https://freecodecamp.org/certificado',
    destacado: false,
    icono: 'fab fa-js',
    color: '#F7DF1E'
  },
  {
    id: 8,
    titulo: 'Top 10 Developer del Año',
    descripcion: 'Reconocido como uno de los 10 mejores desarrolladores emergentes del país',
    tipo: 'premio',
    institucion: 'Dev Awards 2023',
    fecha: '2023-12-15',
    imagen: 'https://i.postimg.cc/GL5RgcrL/dscto-orig.png',
    url: '',
    destacado: true,
    icono: 'fas fa-medal',
    color: '#E91E63'
  }
];

export const render = () => `
  <div class="logros_container">
    <!-- HERO LOGROS -->
    <section class="logros_hero">
      <div class="hero_content">
        <h1 class="hero_title">
          Mis <span class="gradient_text">Logros</span>
        </h1>
        <p class="hero_subtitle">
          Cada logro representa un desafío superado, un aprendizaje adquirido y un paso más 
          hacia la excelencia. Aquí está mi trayectoria de crecimiento profesional.
        </p>
        <div class="hero_stats_logros">
          <div class="stat_logro">
            <i class="fas fa-trophy"></i>
            <div class="stat_data">
              <span class="stat_numero">${logrosData.length}</span>
              <span class="stat_texto">Logros Totales</span>
            </div>
          </div>
          <div class="stat_logro">
            <i class="fas fa-certificate"></i>
            <div class="stat_data">
              <span class="stat_numero">${logrosData.filter(l => l.tipo === 'certificado').length}</span>
              <span class="stat_texto">Certificaciones</span>
            </div>
          </div>
          <div class="stat_logro">
            <i class="fas fa-medal"></i>
            <div class="stat_data">
              <span class="stat_numero">${logrosData.filter(l => l.tipo === 'premio').length}</span>
              <span class="stat_texto">Premios</span>
            </div>
          </div>
          <div class="stat_logro">
            <i class="fas fa-star"></i>
            <div class="stat_data">
              <span class="stat_numero">${logrosData.filter(l => l.destacado).length}</span>
              <span class="stat_texto">Destacados</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FILTROS -->
    <section class="logros_filtros">
      <div class="filtros_tipos">
        <button class="tipo_btn active" data-tipo="all">
          <i class="fas fa-layer-group"></i>
          <span>Todos</span>
        </button>
        <button class="tipo_btn" data-tipo="certificado">
          <i class="fas fa-certificate"></i>
          <span>Certificados</span>
        </button>
        <button class="tipo_btn" data-tipo="premio">
          <i class="fas fa-trophy"></i>
          <span>Premios</span>
        </button>
        <button class="tipo_btn" data-tipo="hito">
          <i class="fas fa-rocket"></i>
          <span>Hitos</span>
        </button>
        <button class="tipo_btn" data-tipo="reconocimiento">
          <i class="fas fa-award"></i>
          <span>Reconocimientos</span>
        </button>
      </div>
    </section>

    <!-- GRID LOGROS -->
    <section class="logros_grid_section">
      <div class="logros_grid" id="logrosGrid">
        <!-- Logros se cargan dinámicamente -->
      </div>
    </section>

    <!-- ESTADÍSTICAS ANUALES -->
    <section class="stats_anuales">
      <h2 class="section_title">Progreso Anual</h2>
      <div class="stats_grid">
        <div class="stat_anual_card">
          <div class="stat_anual_icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>2024</h3>
          <div class="stat_anual_bar">
            <div class="stat_bar_fill" style="--width: 85%"></div>
          </div>
          <p class="stat_anual_numero">${logrosData.filter(l => l.fecha.startsWith('2024')).length} logros</p>
        </div>
        <div class="stat_anual_card">
          <div class="stat_anual_icon">
            <i class="fas fa-fire"></i>
          </div>
          <h3>2023</h3>
          <div class="stat_anual_bar">
            <div class="stat_bar_fill" style="--width: 70%"></div>
          </div>
          <p class="stat_anual_numero">${logrosData.filter(l => l.fecha.startsWith('2023')).length} logros</p>
        </div>
        <div class="stat_anual_card">
          <div class="stat_anual_icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Total</h3>
          <div class="stat_anual_bar">
            <div class="stat_bar_fill" style="--width: 100%"></div>
          </div>
          <p class="stat_anual_numero">${logrosData.length} logros</p>
        </div>
      </div>
    </section>
  </div>

  <!-- MODAL DETALLE LOGRO -->
  <div class="wiModal" id="modalLogro">
    <div class="modalBody modal_logro_body">
      <button class="modalX"><i class="fas fa-times"></i></button>
      <div class="modal_logro_content">
        <!-- Contenido dinámico -->
      </div>
    </div>
  </div>
`;

let logrosFiltrados = [...logrosData];

export const init = () => {
  cargarLogros();
  setupFiltros();
  animarBarras();
  
  console.log('✅ Logros cargados');
};

// Cargar logros en grid
const cargarLogros = () => {
  const grid = $('#logrosGrid');
  grid.empty();

  // Ordenar por fecha descendente
  const logrosOrdenados = [...logrosFiltrados].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  logrosOrdenados.forEach((logro, index) => {
    const card = `
      <div class="logro_card" data-logro="${logro.id}" style="animation-delay: ${index * 0.08}s">
        <div class="logro_icon_wrapper" style="background: ${logro.color}15">
          <div class="logro_icon" style="background: ${logro.color}">
            <i class="${logro.icono}"></i>
          </div>
        </div>
        
        <div class="logro_badges">
          <span class="logro_tipo" style="background: ${logro.color}">${tipoNombre(logro.tipo)}</span>
          ${logro.destacado ? '<span class="logro_destacado"><i class="fas fa-star"></i> Destacado</span>' : ''}
        </div>

        <h3 class="logro_titulo">${logro.titulo}</h3>
        <p class="logro_descripcion">${logro.descripcion}</p>

        <div class="logro_footer">
          <div class="logro_info">
            <div class="info_item">
              <i class="fas fa-building"></i>
              <span>${logro.institucion}</span>
            </div>
            <div class="info_item">
              <i class="fas fa-calendar"></i>
              <span>${formatearFecha(logro.fecha)}</span>
            </div>
          </div>
          <button class="btn_ver_logro" data-id="${logro.id}">
            <i class="fas fa-eye"></i>
            Ver más
          </button>
        </div>
      </div>
    `;
    grid.append(card);
  });

  setupEventosCards();
};

// Setup filtros
const setupFiltros = () => {
  $('.tipo_btn').on('click', function() {
    const tipo = $(this).data('tipo');
    
    $('.tipo_btn').removeClass('active');
    $(this).addClass('active');
    
    if (tipo === 'all') {
      logrosFiltrados = [...logrosData];
    } else {
      logrosFiltrados = logrosData.filter(l => l.tipo === tipo);
    }
    
    cargarLogros();
  });
};

// Setup eventos de las cards
const setupEventosCards = () => {
  // Ver más detalles
  $('.btn_ver_logro').on('click', function(e) {
    e.stopPropagation();
    const id = parseInt($(this).data('id'));
    const logro = logrosData.find(l => l.id === id);
    mostrarDetalleLogro(logro);
  });

  // Click en card completa
  $('.logro_card').on('click', function() {
    const id = parseInt($(this).data('logro'));
    const logro = logrosData.find(l => l.id === id);
    mostrarDetalleLogro(logro);
  });

  // Animación al aparecer
  wiVista('.logro_card', () => {
    $('.logro_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 80);
    });
  });
};

// Mostrar detalle del logro en modal
const mostrarDetalleLogro = (logro) => {
  const modalContent = `
    <div class="modal_logro_header">
      <div class="modal_logro_icon_wrapper" style="background: ${logro.color}15">
        <div class="modal_logro_icon" style="background: ${logro.color}">
          <i class="${logro.icono}"></i>
        </div>
      </div>
      ${logro.destacado ? '<div class="modal_logro_destacado"><i class="fas fa-star"></i> Logro Destacado</div>' : ''}
    </div>
    
    <div class="modal_logro_body_content">
      <span class="modal_logro_tipo" style="background: ${logro.color}">${tipoNombre(logro.tipo)}</span>
      <h2 class="modal_logro_titulo">${logro.titulo}</h2>
      <p class="modal_logro_descripcion">${logro.descripcion}</p>
      
      <div class="modal_logro_detalles">
        <div class="detalle_item">
          <i class="fas fa-building"></i>
          <div>
            <span class="detalle_label">Institución</span>
            <span class="detalle_valor">${logro.institucion}</span>
          </div>
        </div>
        <div class="detalle_item">
          <i class="fas fa-calendar"></i>
          <div>
            <span class="detalle_label">Fecha de obtención</span>
            <span class="detalle_valor">${formatearFechaCompleta(logro.fecha)}</span>
          </div>
        </div>
        <div class="detalle_item">
          <i class="fas fa-tag"></i>
          <div>
            <span class="detalle_label">Categoría</span>
            <span class="detalle_valor">${tipoNombre(logro.tipo)}</span>
          </div>
        </div>
      </div>
      
      ${logro.url ? `
        <div class="modal_logro_acciones">
          <a href="${logro.url}" target="_blank" class="btn_logro btn_verificar">
            <i class="fas fa-external-link-alt"></i> Verificar Logro
          </a>
          <button class="btn_logro btn_compartir" data-url="${logro.url}">
            <i class="fas fa-share-alt"></i> Compartir
          </button>
        </div>
      ` : ''}
    </div>
  `;
  
  $('.modal_logro_content').html(modalContent);
  
  // Evento compartir
  $('.btn_compartir').on('click', function() {
    const url = $(this).data('url');
    wicopy(url, this, '¡Enlace copiado!');
  });
  
  abrirModal('modalLogro');
};

// Animar barras de progreso
const animarBarras = () => {
  wiVista('.stats_anuales', () => {
    $('.stat_bar_fill').each(function(index) {
      const $bar = $(this);
      setTimeout(() => {
        $bar.addClass('animate');
      }, index * 200);
    });
  });
};

// Utilidades
const formatearFecha = (fecha) => {
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const d = new Date(fecha + 'T00:00:00');
  return `${meses[d.getMonth()]} ${d.getFullYear()}`;
};

const formatearFechaCompleta = (fecha) => {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const d = new Date(fecha + 'T00:00:00');
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
};

const tipoNombre = (tipo) => {
  const nombres = {
    certificado: 'Certificado',
    premio: 'Premio',
    hito: 'Hito',
    reconocimiento: 'Reconocimiento'
  };
  return nombres[tipo] || tipo;
};

export const cleanup = () => {
  $('.tipo_btn, .btn_ver_logro, .btn_compartir, .logro_card').off();
  console.log('🧹 Logros limpiado');
};