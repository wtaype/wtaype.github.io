import{a as E}from"./wii.QxhGZP-6.js";import{db as $}from"./firebase.g_s2ueK2.js";import{q as L,c as I,o as x,g as k,a9 as w,ad as C}from"./ClientRouter.astro_astro_type_script_index_0_lang.DWLFGNMp.js";import{p as S}from"./auth.ioqwRJnw.js";import{Saludar as H,getNombre as T,Notificacion as b,wiDate as y}from"./widev.BLk-9U7U.js";let c=null,m=[],p="todos",_="",u=null;const h=e=>{const s=(e||"").toLowerCase();return s==="cv"?"#ff3849":s==="ats"?"#0EBEFF":s==="entrevistas"?"#25b62a":s==="teletrabajo"?"#6a00f5":s==="marca personal"||s==="buscar trabajo"||s==="empleo"?"#ffa726":"var(--mco)"},P=()=>m.filter(e=>{if(p==="activo"){if(e.activo!==!0)return!1}else if(p==="borrador"&&e.activo===!0)return!1;if(_.trim()){const s=_.toLowerCase().trim();if(!(e.titulo||"").toLowerCase().includes(s))return!1}return!0}),B=()=>{const e=m.length,s=m.filter(i=>i.activo===!0).length,a=m.filter(i=>i.activo!==!0).length,o=m.filter(i=>!!i.pin).length,r=document.getElementById("kpi_total"),t=document.getElementById("kpi_active"),d=document.getElementById("kpi_drafts"),n=document.getElementById("kpi_pins");r&&(r.textContent=String(e)),t&&(t.textContent=String(s)),d&&(d.textContent=String(a)),n&&(n.textContent=String(o))},g=()=>{const e=P(),s=document.getElementById("ed_table_body"),a=document.getElementById("ed_mobile_list"),o=document.getElementById("ed_empty"),r=document.getElementById("list_count_lbl");if(r&&(r.textContent=`${e.length} artículo${e.length===1?"":"s"} encontrado${e.length===1?"":"s"}`),e.length===0){if(s&&(s.innerHTML=""),a&&(a.innerHTML=""),o){o.classList.remove("dpn");const t=document.getElementById("ed_empty_desc");t&&(_.trim()?t.textContent="Ninguna de tus historias coincide con la búsqueda.":t.textContent="Aún no has redactado ninguna historia en "+E+". ¡Crea tu primer post!")}return}o&&o.classList.add("dpn"),s&&(s.innerHTML=e.map(t=>{const d=t.imagen||"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300",n=y(null).get(t.creado,"completo"),i=h(t.categoria);let l="";t.pin?l='<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>':t.activo?l='<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>':l='<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>';const f=`
          <div class="ed_metrics_cell">
            <span class="ed_metric_item views" title="Vistas">
              <i class="fas fa-eye"></i> ${t.vistas||0}
            </span>
            <span class="ed_metric_item likes" title="Me encanta">
              <i class="fas fa-heart"></i> ${t.likes||0}
            </span>
          </div>
        `;return`
          <tr id="row_${t.id}">
            <td>
              <div class="ed_post_cell">
                <div class="ed_post_thumb" style="background-image: url('${d}')"></div>
                <div class="ed_post_title_info">
                  <a href="/${t.slug||t.id}" target="_blank" class="ed_post_title">${t.titulo||"Sin título"}</a>
                  <span class="ed_post_url">/${t.slug||t.id}</span>
                </div>
              </div>
            </td>
            <td>
              <span class="ed_badge_cat" style="background: color-mix(in srgb, ${i} 10%, transparent); color: ${i}; border: 1px solid color-mix(in srgb, ${i} 20%, transparent);">${t.categoria||"General"}</span>
            </td>
            <td>
              ${f}
            </td>
            <td>
              ${l}
            </td>
            <td>
              <span style="font-size:0.82rem;color:var(--tx2);font-weight:700;font-family:monospace;">${n}</span>
            </td>
            <td>
              <div class="ed_actions_col">
                <a href="/nuevo?edit=${t.slug||t.id}" class="ed_btn_icon btn_edit" title="Editar historia"><i class="fas fa-pen"></i></a>
                <button class="ed_btn_icon btn_delete" data-id="${t.id}" title="Eliminar historia"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `}).join("")),a&&(a.innerHTML=e.map(t=>{const d=t.imagen||"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300",n=y(null).get(t.creado,"completo"),i=h(t.categoria);let l="";return t.pin?l='<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>':t.activo?l='<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>':l='<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>',`
          <div class="ed_card_item" id="row_mob_${t.id}">
            <div class="ed_mob_header">
              <div class="ed_mob_thumb" style="background-image: url('${d}')"></div>
              <div class="ed_mob_title_box">
                <a href="/${t.slug||t.id}" target="_blank" class="ed_mob_title">${t.titulo||"Sin título"}</a>
                <div style="display:flex; gap:1vh; margin-top:0.35rem; flex-wrap:wrap; align-items:center;">
                  <span class="ed_badge_cat" style="background: color-mix(in srgb, ${i} 10%, transparent); color: ${i}; border: 1px solid color-mix(in srgb, ${i} 20%, transparent);">${t.categoria||"General"}</span>
                  ${l}
                </div>
              </div>
            </div>
            
            <div class="ed_mob_metrics" style="display:flex; gap:1vh; margin-top:0.5rem; border-top:1px dashed var(--brd); padding-top:0.5rem;">
              <span class="ed_metric_item views" style="font-size:0.75rem;"><i class="fas fa-eye"></i> ${t.vistas||0}</span>
              <span class="ed_metric_item likes" style="font-size:0.75rem;"><i class="fas fa-heart"></i> ${t.likes||0}</span>
            </div>

            <div class="ed_mob_meta">
              <div>
                <small style="font-size:0.75rem;color:var(--tx3);display:block;">Publicado:</small>
                <small style="font-size:0.78rem;color:var(--tx2);font-weight:700;display:block;font-family:monospace;">${n}</small>
              </div>
              <div class="ed_actions_col">
                <a href="/nuevo?edit=${t.slug||t.id}" class="ed_btn_icon btn_edit"><i class="fas fa-pen"></i></a>
                <button class="ed_btn_icon btn_delete" data-id="${t.id}"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        `}).join(""))},M=async()=>{if(!u)return;const e=u,s=document.getElementById("delete_modal");s&&s.classList.add("dpn");try{await w(C($,"blog",e.id)),typeof localStorage<"u"&&(localStorage.removeItem(`wi_post_${e.slug||e.id}`),Object.keys(localStorage).filter(a=>a.startsWith("wi_blogs")||a.startsWith("wi_draft_edit_"+(e.slug||e.id))).forEach(a=>localStorage.removeItem(a))),m=m.filter(a=>a.id!==e.id),B(),g(),b("Artículo eliminado permanentemente","success")}catch(a){console.error(a),b("Error al intentar eliminar el artículo","error")}finally{u=null}},q=()=>{document.addEventListener("click",t=>{const n=t.target.closest(".btn_delete");if(n){const i=n.getAttribute("data-id"),l=m.find(f=>f.id===i);if(l){u=l;const f=document.getElementById("delete_post_title"),v=document.getElementById("delete_modal");f&&(f.textContent=`"${l.titulo||"Sin título"}"`),v&&v.classList.remove("dpn")}}});const e=document.getElementById("delete_btn_cancel"),s=document.getElementById("delete_btn_confirm"),a=document.getElementById("delete_modal");e&&a&&e.addEventListener("click",()=>{a.classList.add("dpn"),u=null}),s&&s.addEventListener("click",M);const o=document.getElementById("ed_search");o&&o.addEventListener("input",t=>{_=t.target.value,g()});const r=document.querySelectorAll(".ed_filter_btn");r.forEach(t=>{t.addEventListener("click",d=>{r.forEach(i=>i.classList.remove("active"));const n=d.currentTarget;n.classList.add("active"),p=n.getAttribute("data-filter")||"todos",g()})})},A=async()=>{if(c=await S(["editor","gestor","admin"]),!c)return;const e=`${(c.nombre||"?")[0]}${(c.apellidos||"")[0]||""}`.toUpperCase(),s=document.getElementById("ed_av");s&&(s.textContent=e);const a=document.getElementById("ed_saludo");a&&(a.innerHTML=`${H()} <strong>${T(c.nombre||c.usuario||"")}</strong>`);const o=document.getElementById("ed_role_lbl");o&&(c.rol==="admin"?o.innerHTML='<i class="fas fa-crown"></i> Administrador':c.rol==="gestor"?o.innerHTML='<i class="fas fa-shield-alt"></i> Gestor Editorial':o.innerHTML='<i class="fas fa-pen-fancy"></i> Editor de '+E);const r=document.getElementById("ed_btn_gestor");r&&(c.rol==="gestor"||c.rol==="admin")&&r.classList.remove("dpn"),document.getElementById("ed_loader"),document.getElementById("ed_card");try{const t=L(I($,"blog"),x("creado","desc"));m=(await k(t)).docs.map(n=>{const i=n.data();return{id:n.id,...i,creado:i.creado}}),B(),g(),q()}catch(t){console.error(t),b("Error cargando base de datos","error")}};document.addEventListener("astro:page-load",A);
