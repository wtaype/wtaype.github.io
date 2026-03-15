import{db as g}from"./firebase-CXd9tzyA.js";import{s as x,d as P,a as L,g as C,q as O,c as T,o as q,T as k,b as G}from"./firebase-CjGnDnSb.js";import{$ as a,g as b,b as N,e as R,d as j,N as p,w as E,f as U,s as z,h as B,M as F}from"./main-Dq2v4x8O.js";const I="proyectos",H=4,d=8,M=["web|Web Apps|globe","mobile|Mobile|mobile-alt","windows|Windows|tools","educacion|Educación|graduation-cap","diseno|Diseño|palette","devs|Devs|user-astronaut","tools|Herramientas|tools","camino|Camino|hourglass-half"],W=["destacado|Destacados","reciente|Más reciente","antiguo|Más antiguo","nombre|Por nombre"],J=[{titulo:"Lovewi — Mensajes de Amor",img:"https://lovewi.web.app/poster.webp",descripcion:"Crea mensajes de amor únicos y personalizados para San Valentín y fechas especiales",url:"https://lovewi.web.app/",tags:["Canvas","JavaScript","CSS3"]},{titulo:"Love Eye — Cuida tus Ojitos",img:"https://loveye.web.app/poster.webp",descripcion:"Guía completa para el cuidado de la visión. Prevención, diagnóstico y ejercicios",url:"https://loveye.web.app/",tags:["jQuery","JS","CSS3"]},{titulo:"WiiHope — Confía en Dios",img:"https://wiihope.web.app/poster.webp",descripcion:"Plataforma cristiana para orar, leer frases bíblicas y escuchar la Biblia en audio",url:"https://wiihope.web.app/",tags:["Web","jQuery","HTML"]}],w=B(k);let r=[],l=[],u=0,y=!1,h=null,$=[];const f=e=>(e||"").toString().toLowerCase(),Q=e=>e.split(",").map(s=>s.trim()).filter(Boolean),v=e=>+(e.fechaProyecto?.toDate?.()||e.UpdateEn?.toDate?.()||0),V=e=>{const s=w?.get?.(e,"date")||w?.get?.(e,"full")||"";if(/^\d{4}-\d{2}-\d{2}/.test(s))return s.slice(0,10);const o=e?.toDate?.()||typeof e=="string"&&new Date(e);return o&&!isNaN(o)?o.toISOString().slice(0,10):""},K=e=>w?.save?.(e)||k.fromDate(new Date(e?`${e}T00:00:00`:Date.now())),aa=()=>`
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
      ${[1,2,3].map(()=>'<div class="skeleton_card"><div class="skeleton_img shimmer"></div><div class="skeleton_text shimmer"></div><div class="skeleton_text short shimmer"></div></div>').join("")}
    </div>
  </section>

  <!-- ★ TODOS ─────────────────────────────────────────────────────────────── -->
  <section class="todos_proyectos_section">
    <div class="section_header">
      <h2 class="section_title h1pro">Todos mis Proyectos</h2>
      <div class="section_line"></div>
      <p class="section_descripcion">Cada proyecto representa un desafío superado, una tecnología dominada y una solución creada con pasión por el desarrollo</p>
      <div class="wiauth dpn"></div>
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
        ${M.map(e=>{const[s,o,t]=e.split("|");return`<button class="filtro_btn" data-categoria="${s}"><i class="fas fa-${t}"></i> ${o}</button>`}).join("")}
      </div>
      <div class="filtros_orden">
        <select id="ordenarProyectos" class="orden_select">
          ${W.map(e=>{const[s,o]=e.split("|");return`<option value="${s}">${o}</option>`}).join("")}
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
            ${M.map(e=>{const[s,o]=e.split("|");return`<option value="${s}">${o}</option>`}).join("")}
          </select>
        </div>
        <div class="form_group"><label class="destacado"><span><input type="checkbox" id="inputDestacado"> Destacado <i class="fas fa-star"></i></span></label></div>
      </div>
      <div class="modal_acciones">
        <button type="submit" class="btn_modal btn_guardar" id="btnGuardar"><i class="fas fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>`,ta=()=>{r=[],l=[],u=0,y=!!b("wiSmile");const e=b("wiSmile");a(".todos_proyectos_section .wiauth").html(e?`<div class="sesion"><img src="${e.imagen||"./smile.avif"}" alt="${e.nombre}"><span>${e.nombre}</span></div><button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>`:'<button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>'),setTimeout(()=>{a("#destacadosGrid").html(J.map((o,t)=>`
      <a href="${o.url}" target="_blank" rel="noopener" class="proyecto_card" style="animation-delay:${t*.1}s">
        <div class="project_img"><img src="${o.img}" alt="${o.titulo}" loading="lazy"><div class="project_overlay"><i class="fas fa-external-link-alt"></i></div></div>
        <div class="project_info"><h3 class="project_title">${o.titulo}</h3><p class="project_desc">${o.descripcion}</p><div class="project_tags">${o.tags.slice(0,3).map(i=>`<span class="tag">${i}</span>`).join("")}</div></div>
      </a>`).join("")),setTimeout(()=>a(".proyecto_card").addClass("visible"),50)},800),_().then(()=>{l.sort((o,t)=>(t.destacado|0)-(o.destacado|0)),n(d,!0)}),$.push(N(".proyectos_hero",o=>a(o).addClass("visible"))),R(".h1pro",()=>{y=!0,a(".wiauth").removeClass("dpn").addClass("dfc"),n(d,!0),F("¡Dios te Ama!","success")},7),a(document).on("click.proy","#cardAgregar",()=>{a("#formProyecto")[0].reset(),a("#formProyecto").removeData("editId"),a("#modalTitulo").text("Agregar Nuevo Proyecto"),a("#inputFecha").val(new Date().toISOString().split("T")[0]),a("#inputDestacado").prop("checked",!1),a("#inputId").prop("readonly",!1),j("modalProyecto")}),a(document).on("click.proy",".btn_editar",function(o){o.stopPropagation();const t=r.find(i=>i.id===a(this).data("id"));if(!t)return p("No encontrado","error");a("#modalTitulo").text("Editar Proyecto"),a("#inputTitulo").val(t.titulo),a("#inputDescripcion").val(t.descripcion),a("#inputImg").val(t.img),a("#inputUrl").val(t.url),a("#inputCategoria").val(t.categoria),a("#inputFecha").val(V(t.fechaProyecto||t.creadoEn)),a("#inputTecnologias").val((t.tecnologias||[]).join(", ")),a("#inputId").val(t.id).prop("readonly",!0),a("#inputDestacado").prop("checked",!!t.destacado),a("#formProyecto").data("editId",t.id),j("modalProyecto")}),a(document).on("submit.proy","#formProyecto",async function(o){o.preventDefault();const t=a(this).data("editId"),i=a("#btnGuardar"),c=t||`${a("#inputId").val().trim().toLowerCase().replace(/\s+/g,"-")}_${Date.now()}`,m={titulo:a("#inputTitulo").val().trim(),descripcion:a("#inputDescripcion").val().trim(),img:a("#inputImg").val().trim(),url:a("#inputUrl").val().trim(),categoria:a("#inputCategoria").val(),tecnologias:Q(a("#inputTecnologias").val()),destacado:a("#inputDestacado").is(":checked"),fechaProyecto:K(a("#inputFecha").val())};if(!m.titulo||!m.descripcion||!c)return p("Completa los campos","warning");E(i);const D=G(),S={...m,UpdateEn:D};t||(S.creadoEn=D);try{await x(P(g,"proyectos",c),S,{merge:!0}),p(t?"Actualizado ✓":"Creado ✓","success"),await _(!0),U("modalProyecto")}catch(A){console.error("❌",A),p("Error al guardar","error")}finally{E(i,!1)}}),a(document).on("click.proy",".btn_eliminar",async function(o){if(o.stopPropagation(),!!confirm("¿Eliminar este proyecto?"))try{await L(P(g,"proyectos",a(this).data("id"))),p("Eliminado ✓","success"),await _(!0)}catch{p("Error al eliminar","error")}}),a(document).on("input.proy","#buscarProyecto",function(){const o=f(a(this).val().trim());a("#clearSearch").toggle(!!o),clearTimeout(h),h=setTimeout(()=>{l=o?r.filter(t=>[t.titulo,t.descripcion,...t.tecnologias||[]].some(i=>f(i).includes(o))):[...r],n(d,!0)},220)}),a(document).on("click.proy","#clearSearch",()=>a("#buscarProyecto").val("").trigger("input").focus()),a(document).on("click.proy",".filtro_btn",function(){const o=a(this).data("categoria"),t=f(a("#buscarProyecto").val().trim());a(".filtro_btn").removeClass("active"),a(this).addClass("active");let i=o==="all"?r:r.filter(c=>c.categoria===o);l=t?i.filter(c=>[c.titulo,c.descripcion,...c.tecnologias||[]].some(m=>f(m).includes(t))):i,n(d,!0)}),a(document).on("change.proy","#ordenarProyectos",function(){const o={reciente:(t,i)=>v(i)-v(t),antiguo:(t,i)=>v(t)-v(i),nombre:(t,i)=>t.titulo.localeCompare(i.titulo),destacado:(t,i)=>(i.destacado|0)-(t.destacado|0)};l.sort(o[a(this).val()]||(()=>0)),n(d,!0)}),a(document).on("click.proy","#btnLoadMore",()=>{n(H);const o=a("#proyectosGrid .proyecto_card").last();o.length&&o.offset()&&a("html,body").animate({scrollTop:o.offset().top-100},350)})},oa=()=>{a(document).off(".proy"),clearTimeout(h),h=null,$.forEach(e=>e?.disconnect?.()),$=[]},n=(e=d,s=!1)=>{const o=a("#proyectosGrid");if(s&&(o.empty(),u=0,y&&o.append('<div class="proyecto_card card_agregar" id="cardAgregar"><div class="agregar_content"><div class="agregar_icon"><i class="fas fa-plus"></i></div><h3>Agregar</h3><p>Nuevo proyecto</p></div></div>')),!l.length){a(".no_resultados").fadeIn(200),a("#loadMoreSection").hide();return}a(".no_resultados").hide(),l.slice(u,u+e).forEach((t,i)=>{o.append(`
      <div class="proyecto_card" data-id="${t.id}" style="animation-delay:${i*.05}s">
        <div class="project_img">
          <img src="${t.img}" alt="${t.titulo}" loading="lazy">
          <div class="project_overlay">
            <a href="${t.url}" target="_blank" rel="noopener" class="btn_overlay" title="Abrir"><i class="fas fa-external-link-alt"></i></a>
            ${y?`<button class="btn_overlay btn_editar" data-id="${t.id}" title="Editar"><i class="fas fa-edit"></i></button><button class="btn_overlay btn_eliminar" data-id="${t.id}" title="Eliminar"><i class="fas fa-trash"></i></button>`:""}
          </div>
          ${t.destacado?'<div class="badge_destacado"><i class="fas fa-star"></i></div>':""}
        </div>
        <div class="project_info">
          <h3 class="project_title">${t.titulo}</h3>
          <p class="project_desc">${t.descripcion}</p>
          <div class="project_tags">${(t.tecnologias||[]).slice(0,3).map(c=>`<span class="tag">${c}</span>`).join("")}</div>
        </div>
      </div>`)}),setTimeout(()=>o.find(".proyecto_card:not(.visible)").addClass("visible"),50),u+=e,u<l.length?a("#loadMoreSection").fadeIn(200):a("#loadMoreSection").fadeOut(200)},_=async(e=!1)=>{if(!e){const s=(b(I)||{}).data||[];if(s.length){r=l=s,n(d,!0);return}}try{let s;try{s=await C(O(T(g,"proyectos"),q("creadoEn","desc")))}catch{s=await C(T(g,"proyectos"))}r=l=s.docs.map(o=>({id:o.id,...o.data()})),n(d,!0),z(I,{data:r,ts:Date.now()},24),a("#buscarProyecto").attr("placeholder",`Buscar en ${r.length} proyectos...`)}catch(s){r.length||a(".loading_grid").html('<i class="fas fa-exclamation-triangle"></i><p>Error al cargar</p>'),console.error("❌ proyectos:",s)}};export{oa as cleanup,ta as init,aa as render};
