import{d as v}from"./firebase-B1Kxns0x.js";import{s as k,d as w,a as M,g as $,q as x,c as C,o as O,T as I,b as q}from"./firebase-CeLE8b8J.js";import{$ as a,g as E,b as L,e as N,d as P,N as n,w as S,f as G,s as R,h as z,M as F}from"./main-DMu7slPF.js";const T="proyectos",U=4,l=8,j=["web|Web Apps|globe","mobile|Mobile|mobile-alt","windows|Windows|tools","educacion|Educación|graduation-cap","diseno|Diseño|palette","devs|Devs|user-astronaut","tools|Herramientas|tools","camino|Camino|hourglass-half"],W=["destacado|Destacados","reciente|Más reciente","antiguo|Más antiguo","nombre|Por nombre"],B=[{titulo:"DSCTO - Calculadora Móvil",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",descripcion:"App para cálculos rápidos de descuentos y ajustes",url:"https://dscto.blogspot.com/",tags:["JavaScript","PWA","Firebase"]},{titulo:"CODEWIL - Optimizador de Código",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",descripcion:"Herramienta para optimizar y embellecer código",url:"https://codewil.blogspot.com/",tags:["React","Node.js","API"]},{titulo:"WICOLORS - Paleta de Colores",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",descripcion:"Generador inteligente de paletas de colores",url:"https://wicolors.blogspot.com/",tags:["Vue.js","Design","CSS"]}],_=z(I);let i=[],r=[],p=0,g=!1,y=null,b=[];const m=o=>(o||"").toString().toLowerCase(),H=o=>o.split(",").map(t=>t.trim()).filter(Boolean),f=o=>+(o.fechaProyecto?.toDate?.()||o.UpdateEn?.toDate?.()||0),V=o=>{const t=_?.get?.(o,"date")||_?.get?.(o,"full")||"";if(/^\d{4}-\d{2}-\d{2}/.test(t))return t.slice(0,10);const e=o?.toDate?.()||typeof o=="string"&&new Date(o);return e&&!isNaN(e)?e.toISOString().slice(0,10):""},J=o=>_?.save?.(o)||I.fromDate(new Date(o?`${o}T00:00:00`:Date.now())),X=()=>`
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
        ${j.map(o=>{const[t,e,s]=o.split("|");return`<button class="filtro_btn" data-categoria="${t}"><i class="fas fa-${s}"></i> ${e}</button>`}).join("")}
      </div>
      <div class="filtros_orden">
        <select id="ordenarProyectos" class="orden_select">
          ${W.map(o=>{const[t,e]=o.split("|");return`<option value="${t}">${e}</option>`}).join("")}
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
            ${j.map(o=>{const[t,e]=o.split("|");return`<option value="${t}">${e}</option>`}).join("")}
          </select>
        </div>
        <div class="form_group"><label class="destacado"><span><input type="checkbox" id="inputDestacado"> Destacado <i class="fas fa-star"></i></span></label></div>
      </div>
      <div class="modal_acciones">
        <button type="submit" class="btn_modal btn_guardar" id="btnGuardar"><i class="fas fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>`,Z=()=>{i=[],r=[],p=0,g=!!E("wiSmile"),setTimeout(()=>{a("#destacadosGrid").html(B.map((o,t)=>`
      <a href="${o.url}" target="_blank" rel="noopener" class="proyecto_card" style="animation-delay:${t*.1}s">
        <div class="project_img"><img src="${o.img}" alt="${o.titulo}" loading="lazy"><div class="project_overlay"><i class="fas fa-external-link-alt"></i></div></div>
        <div class="project_info"><h3 class="project_title">${o.titulo}</h3><p class="project_desc">${o.descripcion}</p><div class="project_tags">${o.tags.slice(0,3).map(e=>`<span class="tag">${e}</span>`).join("")}</div></div>
      </a>`).join("")),setTimeout(()=>a(".proyecto_card").addClass("visible"),50)},800),h().then(()=>{r.sort((o,t)=>(t.destacado|0)-(o.destacado|0)),c(l,!0)}),b.push(L(".proyectos_hero",o=>a(o).addClass("visible"))),N(".h1pro",()=>{g=!0,a(".wiauth").removeClass("dpn").addClass("dfc"),c(l,!0),F("¡Dios te Ama!","success")},7),a(document).on("click.proy","#cardAgregar",()=>{a("#formProyecto")[0].reset(),a("#formProyecto").removeData("editId"),a("#modalTitulo").text("Agregar Nuevo Proyecto"),a("#inputFecha").val(new Date().toISOString().split("T")[0]),a("#inputDestacado").prop("checked",!1),a("#inputId").prop("readonly",!1),P("modalProyecto")}),a(document).on("click.proy",".btn_editar",function(o){o.stopPropagation();const t=i.find(e=>e.id===a(this).data("id"));if(!t)return n("No encontrado","error");a("#modalTitulo").text("Editar Proyecto"),a("#inputTitulo").val(t.titulo),a("#inputDescripcion").val(t.descripcion),a("#inputImg").val(t.img),a("#inputUrl").val(t.url),a("#inputCategoria").val(t.categoria),a("#inputFecha").val(V(t.fechaProyecto||t.creadoEn)),a("#inputTecnologias").val((t.tecnologias||[]).join(", ")),a("#inputId").val(t.id).prop("readonly",!0),a("#inputDestacado").prop("checked",!!t.destacado),a("#formProyecto").data("editId",t.id),P("modalProyecto")}),a(document).on("submit.proy","#formProyecto",async function(o){o.preventDefault();const t=a(this).data("editId"),e=a("#btnGuardar"),s=t||`${a("#inputId").val().trim().toLowerCase().replace(/\s+/g,"-")}_${Date.now()}`,d={titulo:a("#inputTitulo").val().trim(),descripcion:a("#inputDescripcion").val().trim(),img:a("#inputImg").val().trim(),url:a("#inputUrl").val().trim(),categoria:a("#inputCategoria").val(),tecnologias:H(a("#inputTecnologias").val()),destacado:a("#inputDestacado").is(":checked"),fechaProyecto:J(a("#inputFecha").val())};if(!d.titulo||!d.descripcion||!s)return n("Completa los campos","warning");S(e);const u=q(),D={...d,UpdateEn:u};t||(D.creadoEn=u);try{await k(w(v,"proyectos",s),D,{merge:!0}),n(t?"Actualizado ✓":"Creado ✓","success"),await h(!0),G("modalProyecto")}catch(A){console.error("❌",A),n("Error al guardar","error")}finally{S(e,!1)}}),a(document).on("click.proy",".btn_eliminar",async function(o){if(o.stopPropagation(),!!confirm("¿Eliminar este proyecto?"))try{await M(w(v,"proyectos",a(this).data("id"))),n("Eliminado ✓","success"),await h(!0)}catch{n("Error al eliminar","error")}}),a(document).on("input.proy","#buscarProyecto",function(){const o=m(a(this).val().trim());a("#clearSearch").toggle(!!o),clearTimeout(y),y=setTimeout(()=>{r=o?i.filter(t=>[t.titulo,t.descripcion,...t.tecnologias||[]].some(e=>m(e).includes(o))):[...i],c(l,!0)},220)}),a(document).on("click.proy","#clearSearch",()=>a("#buscarProyecto").val("").trigger("input").focus()),a(document).on("click.proy",".filtro_btn",function(){const o=a(this).data("categoria"),t=m(a("#buscarProyecto").val().trim());a(".filtro_btn").removeClass("active"),a(this).addClass("active");let e=o==="all"?i:i.filter(s=>s.categoria===o);r=t?e.filter(s=>[s.titulo,s.descripcion,...s.tecnologias||[]].some(d=>m(d).includes(t))):e,c(l,!0)}),a(document).on("change.proy","#ordenarProyectos",function(){const o={reciente:(t,e)=>f(e)-f(t),antiguo:(t,e)=>f(t)-f(e),nombre:(t,e)=>t.titulo.localeCompare(e.titulo),destacado:(t,e)=>(e.destacado|0)-(t.destacado|0)};r.sort(o[a(this).val()]||(()=>0)),c(l,!0)}),a(document).on("click.proy","#btnLoadMore",()=>{c(U);const o=a("#proyectosGrid .proyecto_card").last();o.length&&o.offset()&&a("html,body").animate({scrollTop:o.offset().top-100},350)})},aa=()=>{a(document).off(".proy"),clearTimeout(y),y=null,b.forEach(o=>o?.disconnect?.()),b=[]},c=(o=l,t=!1)=>{const e=a("#proyectosGrid");if(t&&(e.empty(),p=0,g&&e.append('<div class="proyecto_card card_agregar" id="cardAgregar"><div class="agregar_content"><div class="agregar_icon"><i class="fas fa-plus"></i></div><h3>Agregar</h3><p>Nuevo proyecto</p></div></div>')),!r.length){a(".no_resultados").fadeIn(200),a("#loadMoreSection").hide();return}a(".no_resultados").hide(),r.slice(p,p+o).forEach((s,d)=>{e.append(`
      <div class="proyecto_card" data-id="${s.id}" style="animation-delay:${d*.05}s">
        <div class="project_img">
          <img src="${s.img}" alt="${s.titulo}" loading="lazy">
          <div class="project_overlay">
            <a href="${s.url}" target="_blank" rel="noopener" class="btn_overlay" title="Abrir"><i class="fas fa-external-link-alt"></i></a>
            ${g?`<button class="btn_overlay btn_editar" data-id="${s.id}" title="Editar"><i class="fas fa-edit"></i></button><button class="btn_overlay btn_eliminar" data-id="${s.id}" title="Eliminar"><i class="fas fa-trash"></i></button>`:""}
          </div>
          ${s.destacado?'<div class="badge_destacado"><i class="fas fa-star"></i></div>':""}
        </div>
        <div class="project_info">
          <h3 class="project_title">${s.titulo}</h3>
          <p class="project_desc">${s.descripcion}</p>
          <div class="project_tags">${(s.tecnologias||[]).slice(0,3).map(u=>`<span class="tag">${u}</span>`).join("")}</div>
        </div>
      </div>`)}),setTimeout(()=>e.find(".proyecto_card:not(.visible)").addClass("visible"),50),p+=o,p<r.length?a("#loadMoreSection").fadeIn(200):a("#loadMoreSection").fadeOut(200)},h=async(o=!1)=>{if(!o){const t=(E(T)||{}).data||[];if(t.length){i=r=t,c(l,!0);return}}try{let t;try{t=await $(x(C(v,"proyectos"),O("creadoEn","desc")))}catch{t=await $(C(v,"proyectos"))}i=r=t.docs.map(e=>({id:e.id,...e.data()})),c(l,!0),R(T,{data:i,ts:Date.now()},24),a("#buscarProyecto").attr("placeholder",`Buscar en ${i.length} proyectos...`)}catch(t){i.length||a(".loading_grid").html('<i class="fas fa-exclamation-triangle"></i><p>Error al cargar</p>'),console.error("❌ proyectos:",t)}};export{aa as cleanup,Z as init,X as render};
