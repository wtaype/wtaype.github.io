import{$ as i,c as p,d as n,f as _}from"./main-DoHmbnf0.js";const t=[{id:1,titulo:"Bachiller en Ingeniería Empresarial y de Sistemas",descripcion:"Graduado con formación integral en gestión empresarial y desarrollo tecnológico. Especializado en diseño web y programación de aplicaciones.",tipo:"academico",institucion:"Universidad San Ignacio de Loyola",fecha:"2025-07-02",imagen:"https://media.licdn.com/dms/image/v2/D4E2DAQH59UQuEfdISA/profile-treasury-image-shrink_800_800/B4EZjK6S9_HIAc-/0/1755750937389?e=1777770000&v=beta&t=wJ6_Oqgx9ObgCGilnHvPxHwf_hT1tnQjj3dt1hydbCw",url:"https://www.linkedin.com/in/wildertaype/",destacado:!0,icono:"fas fa-user-graduate",color:"#4CAF50"},{id:2,titulo:"60+ Proyectos Completados",descripcion:"Desarrollé y desplegué más de 60 proyectos web y móviles profesionales para diversos clientes y plataformas.",tipo:"hito",institucion:"Freelance / Personal",fecha:"2025-12-31",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"/proyectos",destacado:!0,icono:"fas fa-rocket",color:"#2196F3"},{id:3,titulo:"Certificación de Udemy",descripcion:"Certificación que avala conocimientos sólidos y habilidades prácticas en desarrollo.",tipo:"certificado",institucion:"Udemy",fecha:"2023-10-15",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://www.udemy.com/certificate/UC-a377f9f2-e979-442a-b0bf-05affc89c734/",destacado:!1,icono:"fas fa-certificate",color:"#FF9800"},{id:4,titulo:"Perfil Profesional en GitHub",descripcion:"Desarrollador activo compartiendo código, proyectos reales y contribuyendo al ecosistema open source.",tipo:"hito",institucion:"GitHub",fecha:"2024-05-10",imagen:"https://i.postimg.cc/GL5RgcrL/dscto-orig.png",url:"https://github.com/wtaype",destacado:!1,icono:"fab fa-github",color:"#6e5494"}],f=[["all","fas fa-layer-group","Todos"],["academico","fas fa-user-graduate","Académico"],["certificado","fas fa-certificate","Certificados"],["hito","fas fa-rocket","Hitos"]],d=t.length,g=t.filter(a=>a.tipo==="certificado"||a.tipo==="academico").length,v=t.filter(a=>a.tipo==="hito").length,u=t.filter(a=>a.destacado).length,m=t.filter(a=>a.fecha.startsWith("2025")).length,h=t.filter(a=>a.fecha.startsWith("2024")).length,b=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],$=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],y=a=>{const o=new Date(a+"T00:00:00");return`${b[o.getMonth()]} ${o.getFullYear()}`},w=a=>{const o=new Date(a+"T00:00:00");return`${o.getDate()} de ${$[o.getMonth()]} de ${o.getFullYear()}`},e=a=>({certificado:"Certificado",academico:"Académico",hito:"Hito"})[a]||a;let l=[];const E=()=>`
<div class="logros_container">

  <!-- ★ HERO ─────────────────────────────────────────────────────────────── -->
  <section class="logros_hero">
    <div class="hero_content">
      <h1 class="hero_title">Mis <span class="gradient_text">Logros</span></h1>
      <p class="hero_subtitle">Cada logro representa un desafío superado, un aprendizaje adquirido y un paso más hacia la excelencia. Aquí está mi trayectoria de crecimiento profesional.</p>
      <div class="hero_stats_logros">
        <div class="stat_logro"><i class="fas fa-trophy"></i>    <div class="stat_data"><span class="stat_numero">${d}</span>    <span class="stat_texto">Logros Totales</span></div></div>
        <div class="stat_logro"><i class="fas fa-certificate"></i><div class="stat_data"><span class="stat_numero">${g}</span>  <span class="stat_texto">Certificaciones</span></div></div>
        <div class="stat_logro"><i class="fas fa-rocket"></i>     <div class="stat_data"><span class="stat_numero">${v}</span> <span class="stat_texto">Hitos</span></div></div>
        <div class="stat_logro"><i class="fas fa-star"></i>      <div class="stat_data"><span class="stat_numero">${u}</span>   <span class="stat_texto">Destacados</span></div></div>
      </div>
    </div>
  </section>

  <!-- ★ FILTROS ───────────────────────────────────────────────────────────── -->
  <section class="logros_filtros">
    <div class="filtros_tipos">
      ${f.map(([a,o,s])=>`<button class="tipo_btn${a==="all"?" active":""}" data-tipo="${a}"><i class="${o}"></i><span>${s}</span></button>`).join("")}
    </div>
  </section>

  <!-- ★ GRID ──────────────────────────────────────────────────────────────── -->
  <section class="logros_grid_section">
    <div class="logros_grid" id="logrosGrid"></div>
  </section>

  <!-- ★ PROGRESO ANUAL ────────────────────────────────────────────────────── -->
  <section class="stats_anuales">
    <h2 class="section_title">Progreso Anual</h2>
    <div class="stats_grid">
      <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-code"></i></div>      <h3>2025</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width:85%"></div></div> <p class="stat_anual_numero">${m} logros</p></div>
      <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-fire"></i></div>      <h3>2024</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width:70%"></div></div> <p class="stat_anual_numero">${h} logros</p></div>
      <div class="stat_anual_card"><div class="stat_anual_icon"><i class="fas fa-chart-line"></i></div><h3>Total</h3><div class="stat_anual_bar"><div class="stat_bar_fill" style="--width:100%"></div></div><p class="stat_anual_numero">${d} logros</p></div>
    </div>
  </section>

</div>

<!-- ★ MODAL ──────────────────────────────────────────────────────────────────── -->
<div class="wiModal" id="modalLogro">
  <div class="modalBody modal_logro_body">
    <button class="modalX"><i class="fas fa-times"></i></button>
    <div class="modal_logro_content"></div>
  </div>
</div>`,D=()=>{r(t),i(document).on("click.logros",".tipo_btn",function(){const a=i(this).data("tipo");i(".tipo_btn").removeClass("active"),i(this).addClass("active"),r(a==="all"?t:t.filter(o=>o.tipo===a))}),i(document).on("click.logros",".logro_card, .btn_ver_logro",function(a){a.stopPropagation();const o=parseInt(i(this).data("logro")||i(this).data("id")),s=t.find(c=>c.id===o);s&&L(s)}),i(document).on("click.logros",".btn_compartir",function(){p(i(this).data("url"),this,"¡Enlace copiado!")}),l.push(n(".stats_anuales",()=>i(".stat_bar_fill").each((a,o)=>setTimeout(()=>i(o).addClass("animate"),a*200))))},S=()=>{i(document).off(".logros"),l.forEach(a=>a?.disconnect?.()),l=[]},r=a=>{const o=i("#logrosGrid").empty();[...a].sort((s,c)=>new Date(c.fecha)-new Date(s.fecha)).forEach((s,c)=>{o.append(`
      <div class="logro_card" data-logro="${s.id}" style="animation-delay:${c*.08}s">
        <div class="logro_icon_wrapper" style="background:${s.color}15">
          <div class="logro_icon" style="background:${s.color}"><i class="${s.icono}"></i></div>
        </div>
        <div class="logro_badges">
          <span class="logro_tipo" style="background:${s.color}">${e(s.tipo)}</span>
          ${s.destacado?'<span class="logro_destacado"><i class="fas fa-star"></i> Destacado</span>':""}
        </div>
        <h3 class="logro_titulo">${s.titulo}</h3>
        <p class="logro_descripcion">${s.descripcion}</p>
        <div class="logro_footer">
          <div class="logro_info">
            <div class="info_item"><i class="fas fa-building"></i><span>${s.institucion}</span></div>
            <div class="info_item"><i class="fas fa-calendar"></i><span>${y(s.fecha)}</span></div>
          </div>
          <button class="btn_ver_logro" data-id="${s.id}"><i class="fas fa-eye"></i> Ver más</button>
        </div>
      </div>`)}),l.push(n(".logro_card",(s,c)=>setTimeout(()=>i(s).addClass("visible"),c*80)))},L=a=>{i(".modal_logro_content").html(`
    <div class="modal_logro_header">
      <div class="modal_logro_icon_wrapper" style="background:${a.color}15">
        <div class="modal_logro_icon" style="background:${a.color}"><i class="${a.icono}"></i></div>
      </div>
      ${a.destacado?'<div class="modal_logro_destacado"><i class="fas fa-star"></i> Logro Destacado</div>':""}
    </div>
    <div class="modal_logro_body_content">
      <span class="modal_logro_tipo" style="background:${a.color}">${e(a.tipo)}</span>
      <h2 class="modal_logro_titulo">${a.titulo}</h2>
      <p class="modal_logro_descripcion">${a.descripcion}</p>
      <div class="modal_logro_detalles">
        <div class="detalle_item"><i class="fas fa-building"></i><div><span class="detalle_label">Institución</span>       <span class="detalle_valor">${a.institucion}</span></div></div>
        <div class="detalle_item"><i class="fas fa-calendar"></i><div><span class="detalle_label">Fecha de obtención</span><span class="detalle_valor">${w(a.fecha)}</span></div></div>
        <div class="detalle_item"><i class="fas fa-tag"></i>     <div><span class="detalle_label">Categoría</span>         <span class="detalle_valor">${e(a.tipo)}</span></div></div>
      </div>
      ${a.url?`
      <div class="modal_logro_acciones">
        <a href="${a.url}" target="_blank" class="btn_logro btn_verificar"><i class="fas fa-external-link-alt"></i> Verificar Logro</a>
        <button class="btn_logro btn_compartir" data-url="${a.url}"><i class="fas fa-share-alt"></i> Compartir</button>
      </div>`:""}
    </div>`),_("modalLogro")};export{S as cleanup,D as init,E as render};
