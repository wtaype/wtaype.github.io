import{j as o}from"./vendor-gzd0YkcT.js";import{b as n,a as u,c as f}from"./main-BFZHHXAL.js";import"./main-CtT-V47T.js";const t=[{id:1,titulo:"Certificación Full Stack Developer",descripcion:"Certificación completa en desarrollo web moderno con React, Node.js y bases de datos",tipo:"certificado",institucion:"Platzi",fecha:"2024-01-15",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://platzi.com/certificado",destacado:!0,icono:"fas fa-graduation-cap",color:"#4CAF50"},{id:2,titulo:"Primer Lugar Hackathon 2023",descripcion:"Ganador del primer lugar en hackathon nacional con proyecto de IA para educación",tipo:"premio",institucion:"Tech Summit Peru",fecha:"2023-11-20",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"",destacado:!0,icono:"fas fa-trophy",color:"#FFD700"},{id:3,titulo:"50+ Proyectos Completados",descripcion:"Desarrollé y desplegué más de 50 proyectos web profesionales para clientes de todo el mundo",tipo:"hito",institucion:"Freelance",fecha:"2023-12-31",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"/proyectos",destacado:!1,icono:"fas fa-rocket",color:"#2196F3"},{id:4,titulo:"Curso Avanzado de Firebase",descripcion:"Especialización en Firebase: Authentication, Firestore, Cloud Functions y Hosting",tipo:"certificado",institucion:"Google Cloud",fecha:"2023-09-10",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://google.com/certificado",destacado:!1,icono:"fas fa-certificate",color:"#FF9800"},{id:5,titulo:"Contribuidor Open Source",descripcion:"Más de 100 contribuciones a proyectos open source en GitHub",tipo:"hito",institucion:"GitHub",fecha:"2024-03-05",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://github.com/wtaype",destacado:!0,icono:"fab fa-github",color:"#6e5494"},{id:6,titulo:"Mentor de Programación",descripcion:"Mentoría a más de 30 estudiantes en desarrollo web full stack",tipo:"reconocimiento",institucion:"Dev.to Community",fecha:"2023-07-22",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"",destacado:!1,icono:"fas fa-chalkboard-teacher",color:"#9C27B0"},{id:7,titulo:"JavaScript Expert",descripcion:"Certificación avanzada en JavaScript ES6+, TypeScript y frameworks modernos",tipo:"certificado",institucion:"freeCodeCamp",fecha:"2023-05-18",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://freecodecamp.org/certificado",destacado:!1,icono:"fab fa-js",color:"#F7DF1E"},{id:8,titulo:"Top 10 Developer del Año",descripcion:"Reconocido como uno de los 10 mejores desarrolladores emergentes del país",tipo:"premio",institucion:"Dev Awards 2023",fecha:"2023-12-15",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"",destacado:!0,icono:"fas fa-medal",color:"#E91E63"}],h=()=>{let e=[...t];const d=a=>{const s=new Date(a+"T00:00:00");return["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][s.getMonth()]+" "+s.getFullYear()},p=a=>{const s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],i=new Date(a+"T00:00:00");return`${i.getDate()} de ${s[i.getMonth()]} de ${i.getFullYear()}`},c=a=>({certificado:"Certificado",premio:"Premio",hito:"Hito",reconocimiento:"Reconocimiento"})[a]||a;o("#logros").html(`
    <div class="logros_container">
      <section class="logros_hero">
        <div class="hero_content">
          <h1 class="hero_title">Mis <span class="gradient_text">Logros</span></h1>
          <p class="hero_subtitle">Cada logro representa un desafío superado, un aprendizaje adquirido y un paso más hacia la excelencia. Aquí está mi trayectoria de crecimiento profesional.</p>
          <div class="hero_stats_logros">
            <div class="stat_logro"><i class="fas fa-trophy"></i><div class="stat_data"><span class="stat_numero">${t.length}</span><span class="stat_texto">Logros Totales</span></div></div>
            <div class="stat_logro"><i class="fas fa-certificate"></i><div class="stat_data"><span class="stat_numero">${t.filter(a=>a.tipo==="certificado").length}</span><span class="stat_texto">Certificaciones</span></div></div>
            <div class="stat_logro"><i class="fas fa-medal"></i><div class="stat_data"><span class="stat_numero">${t.filter(a=>a.tipo==="premio").length}</span><span class="stat_texto">Premios</span></div></div>
            <div class="stat_logro"><i class="fas fa-star"></i><div class="stat_data"><span class="stat_numero">${t.filter(a=>a.destacado).length}</span><span class="stat_texto">Destacados</span></div></div>
          </div>
        </div>
      </section>
      <section class="logros_filtros">
        <div class="filtros_tipos">
          <button class="tipo_btn active" data-tipo="all"><i class="fas fa-layer-group"></i><span>Todos</span></button>
          <button class="tipo_btn" data-tipo="certificado"><i class="fas fa-certificate"></i><span>Certificados</span></button>
          <button class="tipo_btn" data-tipo="premio"><i class="fas fa-trophy"></i><span>Premios</span></button>
          <button class="tipo_btn" data-tipo="hito"><i class="fas fa-rocket"></i><span>Hitos</span></button>
          <button class="tipo_btn" data-tipo="reconocimiento"><i class="fas fa-award"></i><span>Reconocimientos</span></button>
        </div>
      </section>
      <section class="logros_grid_section"><div class="logros_grid" id="logrosGrid"></div></section>
      <section class="stats_anuales">
        <h2 class="section_title">Progreso Anual</h2>
        <div class="stats_grid">
          <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-code"></i></div><h3>2024</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width: 85%"></div></div><p class="stat_anual_numero">${t.filter(a=>a.fecha.startsWith("2024")).length} logros</p></div>
          <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-fire"></i></div><h3>2023</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width: 70%"></div></div><p class="stat_anual_numero">${t.filter(a=>a.fecha.startsWith("2023")).length} logros</p></div>
          <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-chart-line"></i></div><h3>Total</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width: 100%"></div></div><p class="stat_anual_numero">${t.length} logros</p></div>
        </div>
      </section>
    </div>
    <div class="wiModal" id="modalLogro">
      <div class="modalBody modal_logro_body">
        <button class="modalX"><i class="fas fa-times"></i></button>
        <div class="modal_logro_content"></div>
      </div>
    </div>
  `);const l=a=>{o(".modal_logro_content").html(`
      <div class="modal_logro_header">
        <div class="modal_logro_icon_wrapper" style="background: ${a.color}15"><div class="modal_logro_icon" style="background: ${a.color}"><i class="${a.icono}"></i></div></div>
        ${a.destacado?'<div class="modal_logro_destacado"><i class="fas fa-star"></i> Logro Destacado</div>':""}
      </div>
      <div class="modal_logro_body_content">
        <span class="modal_logro_tipo" style="background: ${a.color}">${c(a.tipo)}</span>
        <h2 class="modal_logro_titulo">${a.titulo}</h2>
        <p class="modal_logro_descripcion">${a.descripcion}</p>
        <div class="modal_logro_detalles">
          <div class="detalle_item"><i class="fas fa-building"></i><div><span class="detalle_label">Institución</span><span class="detalle_valor">${a.institucion}</span></div></div>
          <div class="detalle_item"><i class="fas fa-calendar"></i><div><span class="detalle_label">Fecha de obtención</span><span class="detalle_valor">${p(a.fecha)}</span></div></div>
          <div class="detalle_item"><i class="fas fa-tag"></i><div><span class="detalle_label">Categoría</span><span class="detalle_valor">${c(a.tipo)}</span></div></div>
        </div>
        ${a.url?`<div class="modal_logro_acciones"><a href="${a.url}" target="_blank" class="btn_logro btn_verificar"><i class="fas fa-external-link-alt"></i> Verificar Logro</a><button class="btn_logro btn_compartir" data-url="${a.url}"><i class="fas fa-share-alt"></i> Compartir</button></div>`:""}
      </div>
    `),o(".btn_compartir").on("click",function(){u(o(this).data("url"),this,"¡Enlace copiado!")}),f("modalLogro")},g=()=>{o(".btn_ver_logro").on("click",function(a){a.stopPropagation(),l(t.find(s=>s.id===parseInt(o(this).data("id"))))}),o(".logro_card").on("click",function(){l(t.find(a=>a.id===parseInt(o(this).data("logro"))))}),n(".logro_card",()=>o(".logro_card").each((a,s)=>setTimeout(()=>o(s).addClass("visible"),a*80)))},r=()=>{const a=o("#logrosGrid").empty();[...e].sort((s,i)=>new Date(i.fecha)-new Date(s.fecha)).forEach((s,i)=>{a.append(`
        <div class="logro_card" data-logro="${s.id}" style="animation-delay: ${i*.08}s">
          <div class="logro_icon_wrapper" style="background: ${s.color}15"><div class="logro_icon" style="background: ${s.color}"><i class="${s.icono}"></i></div></div>
          <div class="logro_badges">
            <span class="logro_tipo" style="background: ${s.color}">${c(s.tipo)}</span>
            ${s.destacado?'<span class="logro_destacado"><i class="fas fa-star"></i> Destacado</span>':""}
          </div>
          <h3 class="logro_titulo">${s.titulo}</h3>
          <p class="logro_descripcion">${s.descripcion}</p>
          <div class="logro_footer">
            <div class="logro_info">
              <div class="info_item"><i class="fas fa-building"></i><span>${s.institucion}</span></div>
              <div class="info_item"><i class="fas fa-calendar"></i><span>${d(s.fecha)}</span></div>
            </div>
            <button class="btn_ver_logro" data-id="${s.id}"><i class="fas fa-eye"></i> Ver más</button>
          </div>
        </div>
      `)}),g()};o(".tipo_btn").on("click",function(){const a=o(this).data("tipo");o(".tipo_btn").removeClass("active"),o(this).addClass("active"),e=a==="all"?[...t]:t.filter(s=>s.tipo===a),r()}),n(".stats_anuales",()=>o(".stat_bar_fill").each((a,s)=>setTimeout(()=>o(s).addClass("animate"),a*200))),r(),console.log("✅ Logros completado")};export{h as logros};
