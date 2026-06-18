import{a as M}from"./wii.QxhGZP-6.js";import{db as x}from"./firebase.jMtcLrnx.js";import{q as N,c as O,o as q,a as P,d as I,u as L}from"./ClientRouter.astro_astro_type_script_index_0_lang.CqDypmqg.js";import{p as U}from"./auth.D52MYMpF.js";import{getNombre as F,getls as G,savels as B,Notificacion as g}from"./widev.BLk-9U7U.js";let h=null,c=[],f="pendientes",S="todos",k="",v=null;const w=.5,$="ge_cache_solicitudes";let T=!1;const R=t=>{if(!t)return"—";const a=new Date(t);return isNaN(a.getTime())?"—":a.toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})+" a las "+a.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})},J=()=>c.filter(t=>{if(f==="pendientes"){if(t.estado!=="pendiente")return!1}else if(t.estado==="pendiente"||S!=="todos"&&t.estado!==S)return!1;if(k.trim()){const a=k.toLowerCase().trim(),o=`${t.nombre||""} ${t.apellidos||""}`.toLowerCase(),s=(t.usuario||"").toLowerCase(),n=(t.email||"").toLowerCase();if(!o.includes(a)&&!s.includes(a)&&!n.includes(a))return!1}return!0}),E=()=>{const t=c.filter(i=>i.estado==="pendiente").length,a=c.filter(i=>i.estado==="aprobado").length,o=c.filter(i=>i.estado==="rechazado").length,s=document.getElementById("stat_pending"),n=document.getElementById("stat_approved"),e=document.getElementById("stat_rejected"),r=document.getElementById("badge_pending"),d=document.getElementById("badge_history");s&&(s.textContent=String(t)),n&&(n.textContent=String(a)),e&&(e.textContent=String(o)),r&&(r.textContent=String(t)),d&&(d.textContent=String(a+o))},u=()=>{const t=J(),a=document.getElementById("gestor_table_body"),o=document.getElementById("gestor_mobile_list"),s=document.getElementById("gestor_empty"),n=document.getElementById("table_actions_header");if(n&&(n.textContent=f==="pendientes"?"Acciones":"Resolución"),t.length===0){if(a&&(a.innerHTML=""),o&&(o.innerHTML=""),s){s.classList.remove("dpn");const e=document.getElementById("empty_title"),r=document.getElementById("empty_desc");e&&r&&(f==="pendientes"?(e.textContent="No hay solicitudes pendientes",r.textContent="No tienes postulaciones pendientes de evaluar por el momento."):(e.textContent="Historial vacío",r.textContent="No se registran postulaciones evaluadas bajo los filtros actuales."))}return}s&&s.classList.add("dpn"),a&&(a.innerHTML=t.map(e=>{const r=`${e.nombre||""} ${e.apellidos||""}`.trim()||e.usuario||"Usuario",d=R(e.creado);let i="";return f==="pendientes"?i=`
            <div style="display:flex; flex-direction:column; gap:0.5rem">
              <div class="gestor_actions_group">
                <button class="gestor_btn_action btn_approve" data-id="${e.id}" title="Aprobar Solicitud"><i class="fas fa-check"></i></button>
                <button class="gestor_btn_action btn_reject" data-id="${e.id}" title="Rechazar Solicitud"><i class="fas fa-xmark"></i></button>
              </div>
              <div class="gestor_reject_box dpn" id="reject_box_${e.id}">
                <span class="gestor_label_min">Motivo de Rechazo *</span>
                <textarea class="gestor_feedback_input" id="feedback_${e.id}" placeholder="Escribe el motivo del rechazo de forma constructiva..."></textarea>
                <div class="gestor_reject_confirm_row">
                  <button class="gestor_btn_sm btn_cancel" data-id="${e.id}">Cancelar</button>
                  <button class="gestor_btn_sm btn_confirm" data-id="${e.id}">Rechazar</button>
                </div>
              </div>
            </div>
          `:i=`
            <div style="display:flex; flex-direction:column; gap:0.3rem">
              <span class="gestor_status_tag ${e.estado}">
                <i class="fas ${e.estado==="aprobado"?"fa-check-circle":e.estado==="pendiente"?"fa-hourglass-half":"fa-times-circle"}"></i>
                ${e.estado}
              </span>
              ${e.respuesta?`<span style="font-size:0.78rem;color:var(--tx3);display:block;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${e.respuesta}">"${e.respuesta}"</span>`:""}
            </div>
          `,`
          <tr>
            <td>
              <div class="gestor_user_info">
                <span class="gestor_user_name">${r}</span>
                <span class="gestor_user_sub">
                  <span>@${e.usuario}</span>
                  <span>•</span>
                  <span>${e.email}</span>
                </span>
              </div>
            </td>
            <td>
              <div class="gestor_text_block">${e.motivo||"—"}</div>
            </td>
            <td>
              <span style="font-size:0.82rem;font-weight:600;color:var(--mco);display:block;max-width:180px;overflow-wrap:break-word">${e.ejemplos||"General"}</span>
              <small style="font-size:0.75rem;color:var(--tx3);display:block;margin-top:0.3rem">${d}</small>
            </td>
            <td>
              ${i}
            </td>
          </tr>
        `}).join("")),o&&(o.innerHTML=t.map(e=>{const r=`${e.nombre||""} ${e.apellidos||""}`.trim()||e.usuario||"Usuario",d=R(e.creado);let i="";return f==="pendientes"?i=`
            <div style="border-top:1px solid var(--brd);padding-top:1rem;margin-top:0.5rem;display:flex;flex-direction:column;gap:0.5rem">
              <div style="display:flex;gap:0.75rem">
                <button class="gestor_btn_secondary btn_approve" data-id="${e.id}" style="flex-grow:1;justify-content:center;background:rgba(40,167,69,0.08);border-color:rgba(40,167,69,0.15);color:var(--success)"><i class="fas fa-check"></i> Aprobar</button>
                <button class="gestor_btn_secondary btn_reject" data-id="${e.id}" style="flex-grow:1;justify-content:center;background:rgba(220,53,69,0.08);border-color:rgba(220,53,69,0.15);color:var(--error)"><i class="fas fa-xmark"></i> Rechazar</button>
              </div>
              <div class="gestor_reject_box dpn" id="reject_box_mob_${e.id}">
                <span class="gestor_label_min">Motivo de Rechazo *</span>
                <textarea class="gestor_feedback_input" id="feedback_mob_${e.id}" placeholder="Escribe el motivo del rechazo..."></textarea>
                <div class="gestor_reject_confirm_row">
                  <button class="gestor_btn_sm btn_cancel" data-id="${e.id}">Cancelar</button>
                  <button class="gestor_btn_sm btn_confirm" data-id="${e.id}">Rechazar</button>
                </div>
              </div>
            </div>
          `:i=`
            <div style="border-top:1px solid var(--brd);padding-top:1rem;margin-top:0.5rem;display:flex;flex-direction:column;gap:0.4rem">
              <span class="gestor_status_tag ${e.estado}">
                <i class="fas ${e.estado==="aprobado"?"fa-check-circle":e.estado==="pendiente"?"fa-hourglass-half":"fa-times-circle"}"></i>
                ${e.estado}
              </span>
              ${e.respuesta?`<div class="gestor_text_block" style="font-style:italic;background:var(--bg4);padding:0.5rem;border-radius:6px;margin-top:0.2rem">"${e.respuesta}"</div>`:""}
            </div>
          `,`
          <div class="gestor_card_item">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div class="gestor_user_info">
                <span class="gestor_user_name">${r}</span>
                <span class="gestor_user_sub">@${e.usuario} • ${e.email}</span>
              </div>
            </div>
            <div>
              <span class="gestor_label_min">Motivo</span>
              <div class="gestor_text_block">${e.motivo||"—"}</div>
            </div>
            <div>
              <span class="gestor_label_min">Temática y Envío</span>
              <span style="font-size:0.85rem;font-weight:600;color:var(--mco);display:block">${e.ejemplos||"General"}</span>
              <small style="font-size:0.75rem;color:var(--tx3);display:block;margin-top:0.15rem">${d}</small>
            </div>
            ${i}
          </div>
        `}).join(""))},K=async()=>{if(!v)return;const t=v,a=document.getElementById("approve_modal");a&&a.classList.add("dpn");const o="¡Felicidades! Tu postulación ha sido evaluada y aprobada con éxito. Ahora cuentas con el rol de Editor oficial de "+M+". Comienza a escribir artílos profesionales de empleo.";try{const s=I(x,"solicitudes",t.id);await L(s,{estado:"aprobado",respuesta:o,actualizado:new Date().toISOString()});const n=I(x,"smiles",t.userId);await L(n,{rol:"editor",actualizado:new Date().toISOString()}),c=c.map(e=>e.id===t.id?{...e,estado:"aprobado",respuesta:o,actualizado:new Date().toISOString()}:e),B($,c,w),E(),u(),g(`@${t.usuario} ha sido ascendido a Editor 🎉`,"success")}catch(s){console.error(s),g("Error al procesar la aprobación","error")}finally{v=null}},Q=async(t,a)=>{const o=a?`feedback_mob_${t}`:`feedback_${t}`,s=document.getElementById(o),n=s?s.value.trim():"";if(!n){g("Por favor, escribe una retroalimentación formativa.","warning");return}const e=c.find(r=>r.id===t);if(e)try{const r=I(x,"solicitudes",t);await L(r,{estado:"rechazado",respuesta:n,actualizado:new Date().toISOString()}),c=c.map(d=>d.id===t?{...d,estado:"rechazado",respuesta:n,actualizado:new Date().toISOString()}:d),B($,c,w),E(),u(),g(`Postulación de @${e.usuario} rechazada con comentarios.`,"info")}catch(r){console.error(r),g("Error al procesar el rechazo","error")}},H=(t,a)=>{const o=a?`reject_box_mob_${t}`:`reject_box_${t}`,s=document.getElementById(o);if(s&&(s.classList.toggle("dpn"),!s.classList.contains("dpn"))){const n=document.getElementById(a?`feedback_mob_${t}`:`feedback_${t}`);n&&n.focus()}},D=()=>{if(T)return;T=!0,document.addEventListener("click",i=>{const p=i.target,b=p.closest(".btn_approve");if(b){const m=b.getAttribute("data-id"),l=c.find(y=>y.id===m);if(l){v=l;const y=document.getElementById("approve_user_name"),j=document.getElementById("approve_username"),A=document.getElementById("approve_modal");y&&(y.textContent=`${l.nombre||""} ${l.apellidos||""}`.trim()||l.usuario),j&&(j.textContent=l.usuario),A&&A.classList.remove("dpn")}}const _=p.closest(".btn_reject");if(_){const m=_.getAttribute("data-id");if(m){const l=_.classList.contains("gestor_btn_secondary");H(m,l)}}const C=p.closest(".btn_cancel");if(C){const m=C.getAttribute("data-id");if(m){const l=p.closest(".gestor_mobile_only")!==null;H(m,l)}}const z=p.closest(".btn_confirm");if(z){const m=z.getAttribute("data-id");if(m){const l=p.closest(".gestor_mobile_only")!==null;Q(m,l)}}});const t=document.getElementById("gestor_search");t&&t.addEventListener("input",i=>{k=i.target.value,u()});const a=document.querySelectorAll(".gestor_filter_tag");a.forEach(i=>{i.addEventListener("click",p=>{a.forEach(_=>_.classList.remove("active"));const b=p.currentTarget;b.classList.add("active"),S=b.getAttribute("data-filter")||"todos",u()})});const o=document.getElementById("tab_pending_btn"),s=document.getElementById("tab_history_btn"),n=document.getElementById("history_filters");o&&s&&(o.addEventListener("click",()=>{o.classList.add("active"),s.classList.remove("active"),n&&n.classList.add("dpn"),f="pendientes",u()}),s.addEventListener("click",()=>{s.classList.add("active"),o.classList.remove("active"),n&&n.classList.remove("dpn"),f="historial",u()}));const e=document.getElementById("approve_btn_cancel"),r=document.getElementById("approve_btn_confirm"),d=document.getElementById("approve_modal");e&&e.addEventListener("click",()=>{d&&d.classList.add("dpn"),v=null}),r&&r.addEventListener("click",K)},V=async()=>{if(h=await U(["gestor","admin"]),!h)return;const t=document.getElementById("gestor_name");t&&(t.textContent=F(h.nombre||h.usuario||"Gestor"));const a=G($);a&&Array.isArray(a)&&(c=a,E(),u(),D());try{const o=N(O(x,"solicitudes"),q("creado","desc")),n=(await P(o)).docs.map(r=>({id:r.id,...r.data()}));B($,n,w),(JSON.stringify(c)!==JSON.stringify(n)||!a)&&(c=n,E(),u(),a||D())}catch(o){console.error(o),a||g("Error de conexión con la base de datos","error")}};document.addEventListener("astro:page-load",V);
