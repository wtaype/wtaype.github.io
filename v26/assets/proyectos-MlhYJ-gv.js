import{db as g}from"./firebase-xqvMKleI.js";import{s as x,d as P,a as O,g as S,q,c as T,o as L,T as k,b as N}from"./firebase-CjGnDnSb.js";import{$ as a,g as b,b as G,e as R,d as j,N as p,w as I,f as z,s as F,h as U,M as W}from"./main-uIF90dyG.js";const E="proyectos",B=4,d=8,A=["web|Web Apps|globe","mobile|Mobile|mobile-alt","windows|Windows|tools","educacion|Educación|graduation-cap","diseno|Diseño|palette","devs|Devs|user-astronaut","tools|Herramientas|tools","camino|Camino|hourglass-half"],H=["destacado|Destacados","reciente|Más reciente","antiguo|Más antiguo","nombre|Por nombre"],V=[{titulo:"DSCTO - Calculadora Móvil",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",descripcion:"App para cálculos rápidos de descuentos y ajustes",url:"https://dscto.blogspot.com/",tags:["JavaScript","PWA","Firebase"]},{titulo:"CODEWIL - Optimizador de Código",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",descripcion:"Herramienta para optimizar y embellecer código",url:"https://codewil.blogspot.com/",tags:["React","Node.js","API"]},{titulo:"WICOLORS - Paleta de Colores",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",descripcion:"Generador inteligente de paletas de colores",url:"https://wicolors.blogspot.com/",tags:["Vue.js","Design","CSS"]}],w=U(k);let c=[],l=[],u=0,y=!1,h=null,D=[];const f=s=>(s||"").toString().toLowerCase(),J=s=>s.split(",").map(e=>e.trim()).filter(Boolean),v=s=>+(s.fechaProyecto?.toDate?.()||s.UpdateEn?.toDate?.()||0),Y=s=>{const e=w?.get?.(s,"date")||w?.get?.(s,"full")||"";if(/^\d{4}-\d{2}-\d{2}/.test(e))return e.slice(0,10);const o=s?.toDate?.()||typeof s=="string"&&new Date(s);return o&&!isNaN(o)?o.toISOString().slice(0,10):""},K=s=>w?.save?.(s)||k.fromDate(new Date(s?`${s}T00:00:00`:Date.now())),aa=()=>`
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
        ${A.map(s=>{const[e,o,t]=s.split("|");return`<button class="filtro_btn" data-categoria="${e}"><i class="fas fa-${t}"></i> ${o}</button>`}).join("")}
      </div>
      <div class="filtros_orden">
        <select id="ordenarProyectos" class="orden_select">
          ${H.map(s=>{const[e,o]=s.split("|");return`<option value="${e}">${o}</option>`}).join("")}
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
            ${A.map(s=>{const[e,o]=s.split("|");return`<option value="${e}">${o}</option>`}).join("")}
          </select>
        </div>
        <div class="form_group"><label class="destacado"><span><input type="checkbox" id="inputDestacado"> Destacado <i class="fas fa-star"></i></span></label></div>
      </div>
      <div class="modal_acciones">
        <button type="submit" class="btn_modal btn_guardar" id="btnGuardar"><i class="fas fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>`,ta=()=>{c=[],l=[],u=0,y=!!b("wiSmile");const s=b("wiSmile");a(".todos_proyectos_section .wiauth").html(s?`<div class="sesion"><img src="${s.imagen||"./smile.avif"}" alt="${s.nombre}"><span>${s.nombre}</span></div><button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>`:'<button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>'),setTimeout(()=>{a("#destacadosGrid").html(V.map((o,t)=>`
      <a href="${o.url}" target="_blank" rel="noopener" class="proyecto_card" style="animation-delay:${t*.1}s">
        <div class="project_img"><img src="${o.img}" alt="${o.titulo}" loading="lazy"><div class="project_overlay"><i class="fas fa-external-link-alt"></i></div></div>
        <div class="project_info"><h3 class="project_title">${o.titulo}</h3><p class="project_desc">${o.descripcion}</p><div class="project_tags">${o.tags.slice(0,3).map(i=>`<span class="tag">${i}</span>`).join("")}</div></div>
      </a>`).join("")),setTimeout(()=>a(".proyecto_card").addClass("visible"),50)},800),_().then(()=>{l.sort((o,t)=>(t.destacado|0)-(o.destacado|0)),n(d,!0)}),D.push(G(".proyectos_hero",o=>a(o).addClass("visible"))),R(".h1pro",()=>{y=!0,a(".wiauth").removeClass("dpn").addClass("dfc"),n(d,!0),W("¡Dios te Ama!","success")},7),a(document).on("click.proy","#cardAgregar",()=>{a("#formProyecto")[0].reset(),a("#formProyecto").removeData("editId"),a("#modalTitulo").text("Agregar Nuevo Proyecto"),a("#inputFecha").val(new Date().toISOString().split("T")[0]),a("#inputDestacado").prop("checked",!1),a("#inputId").prop("readonly",!1),j("modalProyecto")}),a(document).on("click.proy",".btn_editar",function(o){o.stopPropagation();const t=c.find(i=>i.id===a(this).data("id"));if(!t)return p("No encontrado","error");a("#modalTitulo").text("Editar Proyecto"),a("#inputTitulo").val(t.titulo),a("#inputDescripcion").val(t.descripcion),a("#inputImg").val(t.img),a("#inputUrl").val(t.url),a("#inputCategoria").val(t.categoria),a("#inputFecha").val(Y(t.fechaProyecto||t.creadoEn)),a("#inputTecnologias").val((t.tecnologias||[]).join(", ")),a("#inputId").val(t.id).prop("readonly",!0),a("#inputDestacado").prop("checked",!!t.destacado),a("#formProyecto").data("editId",t.id),j("modalProyecto")}),a(document).on("submit.proy","#formProyecto",async function(o){o.preventDefault();const t=a(this).data("editId"),i=a("#btnGuardar"),r=t||`${a("#inputId").val().trim().toLowerCase().replace(/\s+/g,"-")}_${Date.now()}`,m={titulo:a("#inputTitulo").val().trim(),descripcion:a("#inputDescripcion").val().trim(),img:a("#inputImg").val().trim(),url:a("#inputUrl").val().trim(),categoria:a("#inputCategoria").val(),tecnologias:J(a("#inputTecnologias").val()),destacado:a("#inputDestacado").is(":checked"),fechaProyecto:K(a("#inputFecha").val())};if(!m.titulo||!m.descripcion||!r)return p("Completa los campos","warning");I(i);const $=N(),C={...m,UpdateEn:$};t||(C.creadoEn=$);try{await x(P(g,"proyectos",r),C,{merge:!0}),p(t?"Actualizado ✓":"Creado ✓","success"),await _(!0),z("modalProyecto")}catch(M){console.error("❌",M),p("Error al guardar","error")}finally{I(i,!1)}}),a(document).on("click.proy",".btn_eliminar",async function(o){if(o.stopPropagation(),!!confirm("¿Eliminar este proyecto?"))try{await O(P(g,"proyectos",a(this).data("id"))),p("Eliminado ✓","success"),await _(!0)}catch{p("Error al eliminar","error")}}),a(document).on("input.proy","#buscarProyecto",function(){const o=f(a(this).val().trim());a("#clearSearch").toggle(!!o),clearTimeout(h),h=setTimeout(()=>{l=o?c.filter(t=>[t.titulo,t.descripcion,...t.tecnologias||[]].some(i=>f(i).includes(o))):[...c],n(d,!0)},220)}),a(document).on("click.proy","#clearSearch",()=>a("#buscarProyecto").val("").trigger("input").focus()),a(document).on("click.proy",".filtro_btn",function(){const o=a(this).data("categoria"),t=f(a("#buscarProyecto").val().trim());a(".filtro_btn").removeClass("active"),a(this).addClass("active");let i=o==="all"?c:c.filter(r=>r.categoria===o);l=t?i.filter(r=>[r.titulo,r.descripcion,...r.tecnologias||[]].some(m=>f(m).includes(t))):i,n(d,!0)}),a(document).on("change.proy","#ordenarProyectos",function(){const o={reciente:(t,i)=>v(i)-v(t),antiguo:(t,i)=>v(t)-v(i),nombre:(t,i)=>t.titulo.localeCompare(i.titulo),destacado:(t,i)=>(i.destacado|0)-(t.destacado|0)};l.sort(o[a(this).val()]||(()=>0)),n(d,!0)}),a(document).on("click.proy","#btnLoadMore",()=>{n(B);const o=a("#proyectosGrid .proyecto_card").last();o.length&&o.offset()&&a("html,body").animate({scrollTop:o.offset().top-100},350)})},oa=()=>{a(document).off(".proy"),clearTimeout(h),h=null,D.forEach(s=>s?.disconnect?.()),D=[]},n=(s=d,e=!1)=>{const o=a("#proyectosGrid");if(e&&(o.empty(),u=0,y&&o.append('<div class="proyecto_card card_agregar" id="cardAgregar"><div class="agregar_content"><div class="agregar_icon"><i class="fas fa-plus"></i></div><h3>Agregar</h3><p>Nuevo proyecto</p></div></div>')),!l.length){a(".no_resultados").fadeIn(200),a("#loadMoreSection").hide();return}a(".no_resultados").hide(),l.slice(u,u+s).forEach((t,i)=>{o.append(`
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
          <div class="project_tags">${(t.tecnologias||[]).slice(0,3).map(r=>`<span class="tag">${r}</span>`).join("")}</div>
        </div>
      </div>`)}),setTimeout(()=>o.find(".proyecto_card:not(.visible)").addClass("visible"),50),u+=s,u<l.length?a("#loadMoreSection").fadeIn(200):a("#loadMoreSection").fadeOut(200)},_=async(s=!1)=>{if(!s){const e=(b(E)||{}).data||[];if(e.length){c=l=e,n(d,!0);return}}try{let e;try{e=await S(q(T(g,"proyectos"),L("creadoEn","desc")))}catch{e=await S(T(g,"proyectos"))}c=l=e.docs.map(o=>({id:o.id,...o.data()})),n(d,!0),F(E,{data:c,ts:Date.now()},24),a("#buscarProyecto").attr("placeholder",`Buscar en ${c.length} proyectos...`)}catch(e){c.length||a(".loading_grid").html('<i class="fas fa-exclamation-triangle"></i><p>Error al cargar</p>'),console.error("❌ proyectos:",e)}};export{oa as cleanup,ta as init,aa as render};
