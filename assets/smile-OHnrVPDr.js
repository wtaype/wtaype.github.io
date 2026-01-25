import{j as t}from"./vendor-gzd0YkcT.js";import{g as r,d as f,s as d,e as l,N as c,a as h,S as p}from"./main-CklyeP-P.js";import{c as v,d as u,T as m,s as g,b}from"./firebase-xYuwcABI.js";import"./main-N5LZZj1C.js";let e=r("wiSmile");const i="wiNotas",y=async()=>{const o=r(i),a=o?.fechaUpdate?l(m).get(o.fechaUpdate,"DD/MM/YYYY HH:mm"):"Sin notas";return`
   <div class="miweb">
    <div class="mhead"><h1 class="mh1"><i class="fas fa-sticky-note"></i> ${p()} ${e.nombre}</h1></div>
    <div class="mibody">
     <textarea class="nota-text" placeholder="Empieza escribir tus notas">${o?.notas||""}</textarea>
     <div class="nota-footer">
      <span class="nota-fecha"><i class="far fa-clock"></i> ${o?.fechaCreacion?"Actualizado":"Nota creada"}: ${a}</span>
      <div class="nota-btns">
       <button class="btn btn-save"><i class="fas fa-save"></i> Guardar</button>
       <button class="btn btn-delete"><i class="fas fa-trash"></i> Eliminar</button>
      </div>
     </div>
    </div>
   </div>`},k=async()=>{if(!r(i))try{const a=await v(u(f,"misnotas",e.usuario));if(a.exists()){const s=a.data();t(".nota-text").val(s.notas),d(i,s),t(".nota-fecha").html(`<i class="far fa-clock"></i> Actualizado: ${l(m).get(s.fechaUpdate,"DD/MM/YYYY HH:mm")}`),c("✅ Notas cargadas","success")}}catch(a){console.error(a),c("❌ Error al cargar","error")}t(".btn-save").click(async function(){const a=t(".nota-text").val().trim();if(!a)return c("⚠️ Escribe algo primero","warning");h(this,!0);try{const s=r(i);await g(u(f,"misnotas",e.usuario),{email:e.email,usuario:e.nombre,notas:a,fechaUpdate:b(),...!s?.fechaCreacion&&{fechaCreacion:b()}},{merge:!0});const n=Date.now();d(i,{email:e.email,usuario:e.nombre,notas:a,fechaUpdate:n,fechaCreacion:s?.fechaCreacion||n}),t(".nota-fecha").html(`<i class="far fa-clock"></i> Actualizado: ${l(m).get(n,"DD/MM/YYYY HH:mm")}`),c("✅ Guardado exitosamente!","success")}catch(s){console.error(s),c("❌ Error al guardar","error")}finally{h(this,!1)}}),t(".btn-delete").click(function(){confirm("¿Eliminar todas las notas?")&&(t(".nota-text").val(""),t(".nota-fecha").html('<i class="far fa-clock"></i> Nota creada: Sin notas'),c("🗑️ Notas eliminadas","info"))})},C=()=>{console.log("😊 Smile limpiado")};export{C as cleanup,k as init,y as render,e as smile};
