import{j as a}from"./vendor-gzd0YkcT.js";import{b as f}from"./main-Bee2Gl2E.js";import"./main-BKAeKaWz.js";import"./firebase-xYuwcABI.js";const d=[{id:1,titulo:"DSCTO - Calculadora Móvil",descripcion:"Aplicación móvil para calcular descuentos, ajustes en recibos, tiempos de beneficios y más, con bloc de notas integrado.",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",url:"https://dscto.blogspot.com/",categoria:"mobile",tecnologias:["JavaScript","PWA","Firebase","CSS3"],fecha:"2024-01-15",destacado:!0},{id:2,titulo:"CODEWIL - Optimizador de Código",descripcion:"Herramienta profesional para convertir XML, optimizar formatos, cambiar mayúsculas y minificar código de forma eficiente.",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",url:"https://codewil.blogspot.com/",categoria:"tools",tecnologias:["React","Node.js","API","TypeScript"],fecha:"2023-11-20",destacado:!0},{id:3,titulo:"CODESBE - Convertidor de Texto",descripcion:"Programa eficiente que permite realizar cambios de palabras entre minúsculas y mayúsculas de manera instantánea.",img:"https://i.postimg.cc/FNRPVstY/Codesbe.png",url:"https://codesbe.blogspot.com/",categoria:"tools",tecnologias:["JavaScript","HTML5","CSS3"],fecha:"2023-09-10",destacado:!1},{id:4,titulo:"WIIHOPE - Plataforma Educativa",descripcion:"Plataforma interactiva diseñada para facilitar el aprendizaje y compartir conocimientos de manera colaborativa.",img:"https://i.postimg.cc/YrMRGtfq/Wiihope.png",url:"https://wiihope.blogspot.com/",categoria:"web",tecnologias:["Vue.js","Firebase","WebRTC","Sass"],fecha:"2024-03-05",destacado:!0},{id:5,titulo:"WICOLORS - Paleta de Colores",descripcion:"Generador inteligente de paletas de colores con exportación en múltiples formatos para diseñadores.",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",url:"https://wicolors.blogspot.com/",categoria:"web",tecnologias:["Vue.js","Canvas API","Design","CSS3"],fecha:"2023-07-22",destacado:!1},{id:6,titulo:"SUVEMY - Gestión de Ventas",descripcion:"Sistema completo para gestionar ventas, inventario y clientes de pequeños negocios de forma eficiente.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://suvemy.blogspot.com/",categoria:"web",tecnologias:["Angular","Firebase","Material UI","Charts.js"],fecha:"2023-12-18",destacado:!1},{id:7,titulo:"MEEXPO - Portfolio Showcase",descripcion:"Plataforma para crear portfolios profesionales y exhibir proyectos de manera atractiva con animaciones.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://meexpo.blogspot.com/",categoria:"web",tecnologias:["Next.js","Tailwind","Framer Motion","MDX"],fecha:"2024-02-10",destacado:!1},{id:8,titulo:"CLAUQI - App Financiera",descripcion:"Aplicación móvil para control de gastos personales y planificación financiera inteligente con gráficos.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://clauqi.blogspot.com/",categoria:"mobile",tecnologias:["Flutter","Dart","SQLite","Charts"],fecha:"2023-10-30",destacado:!1},{id:9,titulo:"WINOTAS - Bloc de Notas Inteligente",descripcion:"Bloc de notas con sincronización en la nube, markdown y organización por etiquetas y carpetas.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://winotas.blogspot.com/",categoria:"tools",tecnologias:["Electron","React","Firebase","Markdown"],fecha:"2024-04-12",destacado:!1},{id:10,titulo:"TASKFLOW - Gestor de Tareas",descripcion:"Aplicación de gestión de tareas con tableros kanban, recordatorios y colaboración en tiempo real.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://taskflow.example.com/",categoria:"web",tecnologias:["React","Redux","Socket.io","MongoDB"],fecha:"2024-05-20",destacado:!1},{id:11,titulo:"FITNESSPAL - App de Ejercicios",descripcion:"Aplicación móvil para seguimiento de ejercicios, rutinas personalizadas y progreso físico.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://fitnesspal.example.com/",categoria:"mobile",tecnologias:["React Native","Firebase","Health Kit","Redux"],fecha:"2024-06-15",destacado:!1},{id:12,titulo:"RECIPEBOOK - Recetas de Cocina",descripcion:"Plataforma para compartir, descubrir y guardar recetas de cocina con videos y valoraciones.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://recipebook.example.com/",categoria:"web",tecnologias:["Next.js","PostgreSQL","Cloudinary","Tailwind"],fecha:"2024-07-10",destacado:!1}],b=[{nombre:"JavaScript",icono:"fab fa-js",color:"#F7DF1E"},{nombre:"Node.js",icono:"fab fa-node",color:"#339933"},{nombre:"React",icono:"fab fa-react",color:"#61DAFB"},{nombre:"Vue.js",icono:"fab fa-vuejs",color:"#4FC08D"},{nombre:"Firebase",icono:"fas fa-fire",color:"#FFCA28"},{nombre:"HTML5",icono:"fab fa-html5",color:"#E34F26"},{nombre:"CSS3",icono:"fab fa-css3-alt",color:"#1572B6"},{nombre:"VS Code",icono:"fas fa-code",color:"#007ACC"}],R=()=>`
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
        ${b.map(t=>`
          <div class="tech_card" style="--tech-color: ${t.color}">
            <i class="${t.icono}"></i>
            <span>${t.nombre}</span>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
`;let r=[...d],n=1;const p=8,T=()=>{l(),h(),v(),y(),C(),console.log("✅ Proyectos cargados - Vista renovada")},l=()=>{const t=a("#proyectosGrid");if(t.empty(),r.length===0){a(".no_resultados").fadeIn(300),a("#paginacionSection").hide();return}a(".no_resultados").hide();const o=(n-1)*p,e=o+p;r.slice(o,e).forEach((i,c)=>{const g=`
      <a href="${i.url}" target="_blank" class="proyecto_card" data-proyecto="${i.id}" style="animation-delay: ${c*.05}s">
        <div class="proyecto_imagen">
          <img src="${i.img}" alt="${i.titulo}" loading="lazy">
          <div class="proyecto_overlay">
            <i class="fas fa-external-link-alt"></i>
          </div>
          ${i.destacado?'<div class="badge_destacado"><i class="fas fa-star"></i></div>':""}
        </div>
        <div class="proyecto_info">
          <h3 class="proyecto_titulo">${i.titulo}</h3>
          <p class="proyecto_descripcion">${i.descripcion}</p>
          <div class="proyecto_tecnologias">
            ${i.tecnologias.slice(0,3).map(m=>`<span class="tech_tag">${m}</span>`).join("")}
          </div>
          <div class="proyecto_footer">
            <span class="proyecto_fecha">
              <i class="fas fa-calendar"></i> ${S(i.fecha)}
            </span>
            <button class="btn_copy_link" data-copy="${i.url}" title="Copiar enlace">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
      </a>
    `;t.append(g)}),setTimeout(()=>{a(".proyecto_card").each((i,c)=>{setTimeout(()=>a(c).addClass("visible"),i*50)})},10),_(),P()},h=()=>{let t;const o=a("#buscarProyecto"),e=a("#clearSearch");o.on("input",function(){const s=a(this).val().trim();e.toggle(s.length>0),clearTimeout(t),t=setTimeout(()=>{if(s==="")r=[...d];else{const i=s.toLowerCase();r=d.filter(c=>c.titulo.toLowerCase().includes(i)||c.descripcion.toLowerCase().includes(i)||c.tecnologias.some(g=>g.toLowerCase().includes(i)))}n=1,l()},300)}),e.on("click",()=>{o.val("").trigger("input").focus()})},v=()=>{a(".filtro_btn").on("click",function(){const t=a(this).data("categoria");a(".filtro_btn").removeClass("active"),a(this).addClass("active");const o=a("#buscarProyecto").val().toLowerCase().trim();t==="all"?r=o?d.filter(e=>e.titulo.toLowerCase().includes(o)||e.descripcion.toLowerCase().includes(o)||e.tecnologias.some(s=>s.toLowerCase().includes(o))):[...d]:r=d.filter(e=>{const s=e.categoria===t,i=!o||e.titulo.toLowerCase().includes(o)||e.descripcion.toLowerCase().includes(o)||e.tecnologias.some(c=>c.toLowerCase().includes(o));return s&&i}),n=1,l()})},y=()=>{a("#ordenarProyectos").on("change",function(){switch(a(this).val()){case"reciente":r.sort((o,e)=>new Date(e.fecha)-new Date(o.fecha));break;case"antiguo":r.sort((o,e)=>new Date(o.fecha)-new Date(e.fecha));break;case"nombre":r.sort((o,e)=>o.titulo.localeCompare(e.titulo));break;case"destacado":r.sort((o,e)=>e.destacado-o.destacado);break}l()})},_=()=>{a(".btn_copy_link").on("click",function(t){t.preventDefault(),t.stopPropagation();const o=a(this).data("copy");f(o,this,"¡Copiado!")})},C=()=>{a("#btnAnterior").on("click",()=>{n>1&&(n--,l(),u())}),a("#btnSiguiente").on("click",()=>{const t=Math.ceil(r.length/p);n<t&&(n++,l(),u())})},P=()=>{const t=Math.ceil(r.length/p);if(t<=1){a("#paginacionSection").hide();return}a("#paginacionSection").show(),a("#btnAnterior").prop("disabled",n===1),a("#btnSiguiente").prop("disabled",n===t);const o=a("#paginacionPaginas");o.empty();const e=5;let s=Math.max(1,n-Math.floor(e/2)),i=Math.min(t,s+e-1);i-s<e-1&&(s=Math.max(1,i-e+1)),s>1&&(o.append('<button class="paginacion_numero" data-pagina="1">1</button>'),s>2&&o.append('<span class="paginacion_dots">...</span>'));for(let c=s;c<=i;c++)o.append(`
      <button class="paginacion_numero ${c===n?"active":""}" data-pagina="${c}">
        ${c}
      </button>
    `);i<t&&(i<t-1&&o.append('<span class="paginacion_dots">...</span>'),o.append(`<button class="paginacion_numero" data-pagina="${t}">${t}</button>`)),a(".paginacion_numero").on("click",function(){n=parseInt(a(this).data("pagina")),l(),u()})},u=()=>{a("html, body").animate({scrollTop:a(".proyectos_container").offset().top-80},300)},S=t=>{const o=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],e=new Date(t+"T00:00:00");return`${o[e.getMonth()]} ${e.getFullYear()}`},$=()=>{a(".filtro_btn, #buscarProyecto, #clearSearch, #ordenarProyectos, .btn_copy_link, #btnAnterior, #btnSiguiente, .paginacion_numero").off(),console.log("🧹 Proyectos limpiado")};export{$ as cleanup,T as init,R as render};
