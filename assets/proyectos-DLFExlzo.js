import{j as a}from"./vendor-gzd0YkcT.js";import{a as b}from"./main-yAO_zRDm.js";import"./main-Bp5ij3OE.js";const d=[{id:1,titulo:"DSCTO - Calculadora Móvil",descripcion:"Aplicación móvil para calcular descuentos, ajustes en recibos, tiempos de beneficios y más, con bloc de notas integrado.",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",url:"https://dscto.blogspot.com/",categoria:"mobile",tecnologias:["JavaScript","PWA","Firebase","CSS3"],fecha:"2024-01-15",destacado:!0},{id:2,titulo:"CODEWIL - Optimizador de Código",descripcion:"Herramienta profesional para convertir XML, optimizar formatos, cambiar mayúsculas y minificar código de forma eficiente.",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",url:"https://codewil.blogspot.com/",categoria:"tools",tecnologias:["React","Node.js","API","TypeScript"],fecha:"2023-11-20",destacado:!0},{id:3,titulo:"CODESBE - Convertidor de Texto",descripcion:"Programa eficiente que permite realizar cambios de palabras entre minúsculas y mayúsculas de manera instantánea.",img:"https://i.postimg.cc/FNRPVstY/Codesbe.png",url:"https://codesbe.blogspot.com/",categoria:"tools",tecnologias:["JavaScript","HTML5","CSS3"],fecha:"2023-09-10",destacado:!1},{id:4,titulo:"WIIHOPE - Plataforma Educativa",descripcion:"Plataforma interactiva diseñada para facilitar el aprendizaje y compartir conocimientos de manera colaborativa.",img:"https://i.postimg.cc/YrMRGtfq/Wiihope.png",url:"https://wiihope.blogspot.com/",categoria:"web",tecnologias:["Vue.js","Firebase","WebRTC","Sass"],fecha:"2024-03-05",destacado:!0},{id:5,titulo:"WICOLORS - Paleta de Colores",descripcion:"Generador inteligente de paletas de colores con exportación en múltiples formatos para diseñadores.",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",url:"https://wicolors.blogspot.com/",categoria:"web",tecnologias:["Vue.js","Canvas API","Design","CSS3"],fecha:"2023-07-22",destacado:!1},{id:6,titulo:"SUVEMY - Gestión de Ventas",descripcion:"Sistema completo para gestionar ventas, inventario y clientes de pequeños negocios de forma eficiente.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://suvemy.blogspot.com/",categoria:"web",tecnologias:["Angular","Firebase","Material UI","Charts.js"],fecha:"2023-12-18",destacado:!1},{id:7,titulo:"MEEXPO - Portfolio Showcase",descripcion:"Plataforma para crear portfolios profesionales y exhibir proyectos de manera atractiva con animaciones.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://meexpo.blogspot.com/",categoria:"web",tecnologias:["Next.js","Tailwind","Framer Motion","MDX"],fecha:"2024-02-10",destacado:!1},{id:8,titulo:"CLAUQI - App Financiera",descripcion:"Aplicación móvil para control de gastos personales y planificación financiera inteligente con gráficos.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://clauqi.blogspot.com/",categoria:"mobile",tecnologias:["Flutter","Dart","SQLite","Charts"],fecha:"2023-10-30",destacado:!1},{id:9,titulo:"WINOTAS - Bloc de Notas Inteligente",descripcion:"Bloc de notas con sincronización en la nube, markdown y organización por etiquetas y carpetas.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://winotas.blogspot.com/",categoria:"tools",tecnologias:["Electron","React","Firebase","Markdown"],fecha:"2024-04-12",destacado:!1},{id:10,titulo:"TASKFLOW - Gestor de Tareas",descripcion:"Aplicación de gestión de tareas con tableros kanban, recordatorios y colaboración en tiempo real.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://taskflow.example.com/",categoria:"web",tecnologias:["React","Redux","Socket.io","MongoDB"],fecha:"2024-05-20",destacado:!1},{id:11,titulo:"FITNESSPAL - App de Ejercicios",descripcion:"Aplicación móvil para seguimiento de ejercicios, rutinas personalizadas y progreso físico.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://fitnesspal.example.com/",categoria:"mobile",tecnologias:["React Native","Firebase","Health Kit","Redux"],fecha:"2024-06-15",destacado:!1},{id:12,titulo:"RECIPEBOOK - Recetas de Cocina",descripcion:"Plataforma para compartir, descubrir y guardar recetas de cocina con videos y valoraciones.",img:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://recipebook.example.com/",categoria:"web",tecnologias:["Next.js","PostgreSQL","Cloudinary","Tailwind"],fecha:"2024-07-10",destacado:!1}],h=[{nombre:"JavaScript",icono:"fab fa-js",color:"#F7DF1E"},{nombre:"Node.js",icono:"fab fa-node",color:"#339933"},{nombre:"React",icono:"fab fa-react",color:"#61DAFB"},{nombre:"Vue.js",icono:"fab fa-vuejs",color:"#4FC08D"},{nombre:"Firebase",icono:"fas fa-fire",color:"#FFCA28"},{nombre:"HTML5",icono:"fab fa-html5",color:"#E34F26"},{nombre:"CSS3",icono:"fab fa-css3-alt",color:"#1572B6"},{nombre:"VS Code",icono:"fas fa-code",color:"#007ACC"}],C=()=>{let c=[...d],s=1;const p=8;a("#proyectos").html(`
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
          ${h.map(e=>`<div class="tech_card" style="--tech-color: ${e.color}"><i class="${e.icono}"></i><span>${e.nombre}</span></div>`).join("")}
        </div>
      </section>
    </div>
  `);const m=e=>{const o=new Date(e+"T00:00:00");return["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][o.getMonth()]+" "+o.getFullYear()},g=()=>a("html, body").animate({scrollTop:a(".proyectos_container").offset().top-80},300),f=()=>{const e=Math.ceil(c.length/p);if(e<=1)return a("#paginacionSection").hide();a("#paginacionSection").show(),a("#btnAnterior").prop("disabled",s===1),a("#btnSiguiente").prop("disabled",s===e);const o=a("#paginacionPaginas").empty(),i=5,t=Math.max(1,s-Math.floor(i/2)),r=Math.min(e,t+i-1);t>1&&(o.append('<button class="paginacion_numero" data-pagina="1">1</button>'),t>2&&o.append('<span class="paginacion_dots">...</span>'));for(let l=t;l<=r;l++)o.append(`<button class="paginacion_numero ${l===s?"active":""}" data-pagina="${l}">${l}</button>`);r<e&&(r<e-1&&o.append('<span class="paginacion_dots">...</span>'),o.append(`<button class="paginacion_numero" data-pagina="${e}">${e}</button>`)),a(".paginacion_numero").on("click",function(){s=parseInt(a(this).data("pagina")),n(),g()})},n=()=>{const e=a("#proyectosGrid").empty();if(!c.length)return a(".no_resultados").fadeIn(300),a("#paginacionSection").hide();a(".no_resultados").hide();const o=(s-1)*p;c.slice(o,o+p).forEach((t,r)=>{e.append(`
        <a href="${t.url}" target="_blank" class="proyecto_card" data-proyecto="${t.id}" style="animation-delay: ${r*.05}s">
          <div class="proyecto_imagen">
            <img src="${t.img}" alt="${t.titulo}" loading="lazy">
            <div class="proyecto_overlay"><i class="fas fa-external-link-alt"></i></div>
            ${t.destacado?'<div class="badge_destacado"><i class="fas fa-star"></i></div>':""}
          </div>
          <div class="proyecto_info">
            <h3 class="proyecto_titulo">${t.titulo}</h3>
            <p class="proyecto_descripcion">${t.descripcion}</p>
            <div class="proyecto_tecnologias">${t.tecnologias.slice(0,3).map(l=>`<span class="tech_tag">${l}</span>`).join("")}</div>
            <div class="proyecto_footer">
              <span class="proyecto_fecha"><i class="fas fa-calendar"></i> ${m(t.fecha)}</span>
              <button class="btn_copy_link" data-copy="${t.url}" title="Copiar enlace"><i class="fas fa-copy"></i></button>
            </div>
          </div>
        </a>
      `)}),setTimeout(()=>a(".proyecto_card").each((t,r)=>setTimeout(()=>a(r).addClass("visible"),t*50)),10),a(".btn_copy_link").on("click",function(t){t.preventDefault(),t.stopPropagation(),b(a(this).data("copy"),this,"¡Copiado!")}),f()};let u;a("#buscarProyecto").on("input",function(){const e=a(this).val().trim();a("#clearSearch").toggle(e.length>0),clearTimeout(u),u=setTimeout(()=>{c=e?d.filter(o=>o.titulo.toLowerCase().includes(e.toLowerCase())||o.descripcion.toLowerCase().includes(e.toLowerCase())||o.tecnologias.some(i=>i.toLowerCase().includes(e.toLowerCase()))):[...d],s=1,n()},300)}),a("#clearSearch").on("click",()=>a("#buscarProyecto").val("").trigger("input").focus()),a(".filtro_btn").on("click",function(){const e=a(this).data("categoria");a(".filtro_btn").removeClass("active"),a(this).addClass("active");const o=a("#buscarProyecto").val().toLowerCase().trim();c=e==="all"?o?d.filter(i=>i.titulo.toLowerCase().includes(o)||i.descripcion.toLowerCase().includes(o)||i.tecnologias.some(t=>t.toLowerCase().includes(o))):[...d]:d.filter(i=>i.categoria===e&&(!o||i.titulo.toLowerCase().includes(o)||i.descripcion.toLowerCase().includes(o)||i.tecnologias.some(t=>t.toLowerCase().includes(o)))),s=1,n()}),a("#ordenarProyectos").on("change",function(){const e=a(this).val();e==="reciente"?c.sort((o,i)=>new Date(i.fecha)-new Date(o.fecha)):e==="antiguo"?c.sort((o,i)=>new Date(o.fecha)-new Date(i.fecha)):e==="nombre"?c.sort((o,i)=>o.titulo.localeCompare(i.titulo)):c.sort((o,i)=>i.destacado-o.destacado),n()}),a("#btnAnterior").on("click",()=>{s>1&&(s--,n(),g())}),a("#btnSiguiente").on("click",()=>{s<Math.ceil(c.length/p)&&(s++,n(),g())}),n(),console.log("✅ Proyectos cargados")};export{C as proyectos};
