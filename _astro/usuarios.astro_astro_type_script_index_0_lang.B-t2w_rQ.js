import{db as S}from"./firebase.jMtcLrnx.js";import{q as U,c as R,o as k,aA as H,a as M,d as z,u as O,ad as N}from"./ClientRouter.astro_astro_type_script_index_0_lang.CqDypmqg.js";import{p as j}from"./auth.D52MYMpF.js";import{getls as J,savels as w,Notificacion as y}from"./widev.BLk-9U7U.js";let D=null,c=[],I="todos",h="",p=null,g=null;const $="/smile.avif",C=.5,L="us_cache_list";let q=!1;const x=e=>{if(!e)return"Inactivo";const a=new Date(e);return a.toLocaleDateString("es-ES",{day:"numeric",month:"short"})+" "+a.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})},F=()=>c.filter(e=>{if(I!=="todos"&&e.rol!==I)return!1;if(h.trim()){const a=h.toLowerCase().trim(),s=`${e.nombre||""} ${e.apellidos||""}`.toLowerCase(),n=(e.usuario||"").toLowerCase(),t=(e.email||"").toLowerCase();if(!s.includes(a)&&!n.includes(a)&&!t.includes(a))return!1}return!0}),m=()=>{const e=F(),a=document.getElementById("us_table_body"),s=document.getElementById("us_mobile_list"),n=document.getElementById("us_empty");if(e.length===0){a&&(a.innerHTML=""),s&&(s.innerHTML=""),n&&n.classList.remove("dpn");return}n&&n.classList.add("dpn"),a&&(a.innerHTML=e.map(t=>{const i=`${t.nombre||""} ${t.apellidos||""}`.trim()||t.usuario||"Usuario",r=t.avatar||$,l=x(t.actualizado),o=t.estado||(t.activo?"activo":"bloqueado");return`
          <tr>
            <td>
              <div class="us_profile_cell">
                <img class="us_avatar" src="${r}" alt="${t.usuario}" onerror="this.src='${$}'" />
                <div class="us_user_meta">
                  <span class="us_name">${i}</span>
                  <span class="us_sub">@${t.usuario} • ${t.email}</span>
                </div>
              </div>
            </td>
            <td>
              <span class="us_badge_tag ${t.rol}">${t.rol}</span>
            </td>
            <td>
              <span class="us_status_dot">
                <span class="us_dot ${o}"></span>
                ${o==="activo"?"Activo":"Bloqueado"}
              </span>
            </td>
            <td style="color:var(--tx3); font-size:0.82rem; font-weight:600;">
              ${l}
            </td>
            <td>
              <div class="us_actions">
                <button class="us_btn_action btn_edit" data-id="${t.id}" title="Editar Cuenta"><i class="fas fa-edit"></i></button>
                <button class="us_btn_action btn_delete" data-id="${t.id}" title="Eliminar Cuenta"><i class="fas fa-trash-alt"></i></button>
              </div>
            </td>
          </tr>
        `}).join("")),s&&(s.innerHTML=e.map(t=>{const i=`${t.nombre||""} ${t.apellidos||""}`.trim()||t.usuario||"Usuario",r=t.avatar||$,l=x(t.actualizado),o=t.estado||(t.activo?"activo":"bloqueado");return`
          <div class="us_card_item">
            <div style="display:flex; gap:1.5vh; align-items:center;">
              <img class="us_avatar" src="${r}" alt="${t.usuario}" onerror="this.src='${$}'" />
              <div class="us_user_meta">
                <span class="us_name">${i}</span>
                <span class="us_sub">@${t.usuario} • ${t.email}</span>
              </div>
            </div>
            <div class="us_card_row" style="border-top:1px solid var(--brd); padding-top:1rem; margin-top:0.2rem">
              <span class="us_badge_tag ${t.rol}">${t.rol}</span>
              <span class="us_status_dot">
                <span class="us_dot ${o}"></span>
                ${o==="activo"?"Activo":"Bloqueado"}
              </span>
            </div>
            <div class="us_card_row">
              <small style="color:var(--tx3); font-size:0.75rem; font-weight:600;">Actividad: ${l}</small>
              <div class="us_actions">
                <button class="us_btn_action btn_edit" data-id="${t.id}"><i class="fas fa-edit"></i></button>
                <button class="us_btn_action btn_delete" data-id="${t.id}"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
        `}).join(""))},K=async()=>{if(!p)return;const e=p,a=document.getElementById("modal_select_role"),s=document.getElementById("modal_select_status"),n=a?a.value:e.rol,t=s?s.value:e.estado,i=t==="activo",r=document.getElementById("edit_modal");r&&r.classList.add("dpn");try{const l=z(S,"smiles",e.id);await O(l,{rol:n,estado:t,activo:i,actualizado:new Date().toISOString()}),c=c.map(o=>o.id===e.id?{...o,rol:n,estado:t,activo:i,actualizado:new Date().toISOString()}:o),w(L,c,C),m(),y(`Cuenta @${e.usuario} actualizada`,"success")}catch(l){console.error(l),y("Error al actualizar la cuenta","error")}finally{p=null}},G=async()=>{if(!g)return;const e=g,a=document.getElementById("delete_modal");a&&a.classList.add("dpn");try{const s=z(S,"smiles",e.id);await N(s),c=c.filter(n=>n.id!==e.id),w(L,c,C),m(),y(`Cuenta @${e.usuario} eliminada permanentemente`,"info")}catch(s){console.error(s),y("Error al eliminar la cuenta","error")}finally{g=null}},T=()=>{if(q)return;q=!0,document.addEventListener("click",o=>{const b=o.target,f=b.closest(".btn_edit");if(f){const B=f.getAttribute("data-id"),d=c.find(u=>u.id===B);if(d){p=d;const u=document.getElementById("modal_username"),_=document.getElementById("modal_select_role"),v=document.getElementById("modal_select_status"),A=document.getElementById("edit_modal");u&&(u.textContent=d.usuario),_&&(_.value=d.rol),v&&(v.value=d.estado||(d.activo?"activo":"bloqueado")),A&&A.classList.remove("dpn")}}const E=b.closest(".btn_delete");if(E){const B=E.getAttribute("data-id"),d=c.find(u=>u.id===B);if(d){g=d;const u=document.getElementById("delete_user_display"),_=document.getElementById("delete_username"),v=document.getElementById("delete_modal");u&&(u.textContent=`${d.nombre||""} ${d.apellidos||""}`.trim()||d.usuario),_&&(_.textContent=d.usuario),v&&v.classList.remove("dpn")}}});const e=document.getElementById("us_search");e&&e.addEventListener("input",o=>{h=o.target.value,m()});const a=document.querySelectorAll(".us_filter_btn");a.forEach(o=>{o.addEventListener("click",b=>{a.forEach(E=>E.classList.remove("active"));const f=b.currentTarget;f.classList.add("active"),I=f.getAttribute("data-role")||"todos",m()})});const s=document.getElementById("modal_btn_cancel"),n=document.getElementById("modal_btn_save"),t=document.getElementById("delete_btn_cancel"),i=document.getElementById("delete_btn_confirm"),r=document.getElementById("edit_modal"),l=document.getElementById("delete_modal");s&&s.addEventListener("click",()=>{r&&r.classList.add("dpn"),p=null}),n&&n.addEventListener("click",K),t&&t.addEventListener("click",()=>{l&&l.classList.add("dpn"),g=null}),i&&i.addEventListener("click",G)},P=async()=>{if(window.location.pathname.replace(/\/$/,"")!=="/usuarios")return;if(sessionStorage.getItem("vault_unlocked")!=="true"){window.location.replace("/verificar");return}if(D=await j(["admin"]),!D)return;const e=document.getElementById("us_loader"),a=document.getElementById("us_card"),s=J(L);s&&Array.isArray(s)&&(c=s,e&&(e.style.display="none"),a&&(a.style.display="flex"),m(),T());try{const n=U(R(S,"smiles"),k("actualizado","desc"),H(10)),i=(await M(n)).docs.map(l=>({id:l.id,...l.data()}));w(L,i,C),(JSON.stringify(c)!==JSON.stringify(i)||!s)&&(c=i,e&&(e.style.display="none"),a&&(a.style.display="flex"),m(),s||T())}catch(n){console.error(n),s||(e&&(e.style.display="none"),y("Error de conexión al obtener la lista de usuarios","error"))}};document.addEventListener("astro:page-load",P);
