const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/firebase-JeH8I1oc.js","assets/main-qyQQpVbY.js","assets/firebase-Csb9F686.js"])))=>i.map(i=>d[i]);
import{$ as o,N as d,w,_ as j,a as D,c as A,d as k}from"./main-qyQQpVbY.js";class p{constructor(a=0,t="Network Error"){this.status=a,this.text=t}}const H=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,a)=>Promise.resolve(localStorage.setItem(e,a)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:H()},y=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},O=(e,a="https://api.emailjs.com")=>{if(!e)return;const t=y(e);s.publicKey=t.publicKey,s.blockHeadless=t.blockHeadless,s.storageProvider=t.storageProvider,s.blockList=t.blockList,s.limitRate=t.limitRate,s.origin=t.origin||a},q=async(e,a,t={})=>{const i=await fetch(s.origin+e,{method:"POST",headers:t,body:a}),n=await i.text(),r=new p(i.status,n);if(i.ok)return r;throw r},T=(e,a,t)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||typeof a!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},x=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},C=e=>e.webdriver||!e.languages||e.languages.length===0,E=()=>new p(451,"Unavailable For Headless Browser"),M=(e,a)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof a!="string")throw"The BlockList watchVariable has to be a string"},V=e=>!e.list?.length||!e.watchVariable,z=(e,a)=>e instanceof FormData?e.get(a):e[a],P=(e,a)=>{if(V(e))return!1;M(e.list,e.watchVariable);const t=z(a,e.watchVariable);return typeof t!="string"?!1:e.list.includes(t)},R=()=>new p(403,"Forbidden"),N=(e,a)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(a&&typeof a!="string")throw"The LimitRate ID has to be a non-empty string"},B=async(e,a,t)=>{const i=Number(await t.get(e)||0);return a-Date.now()+i},L=async(e,a,t)=>{if(!a.throttle||!t)return!1;N(a.throttle,a.id);const i=a.id||e;return await B(i,a.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},F=()=>new p(429,"Too Many Requests"),K=async(e,a,t,i)=>{const n=y(i),r=n.publicKey||s.publicKey,m=n.blockHeadless||s.blockHeadless,b=n.storageProvider||s.storageProvider,l={...s.blockList,...n.blockList},u={...s.limitRate,...n.limitRate};return m&&C(navigator)?Promise.reject(E()):(T(r,e,a),x(t),t&&P(l,t)?Promise.reject(R()):await L(location.pathname,u,b)?Promise.reject(F()):q("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:r,service_id:e,template_id:a,template_params:t}),{"Content-type":"application/json"}))},U=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},G=e=>typeof e=="string"?document.querySelector(e):e,J=async(e,a,t,i)=>{const n=y(i),r=n.publicKey||s.publicKey,m=n.blockHeadless||s.blockHeadless,b=s.storageProvider||n.storageProvider,l={...s.blockList,...n.blockList},u={...s.limitRate,...n.limitRate};if(m&&C(navigator))return Promise.reject(E());const v=G(t);T(r,e,a),U(v);const c=new FormData(v);return P(l,c)?Promise.reject(R()):await L(location.pathname,u,b)?Promise.reject(F()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",a),c.append("user_id",r),q("/api/v1.0/email/send-form",c))},W={init:O,send:K,sendForm:J,EmailJSResponseStatus:p},f={email:"wilder.taype16@mail.com",telefono:"+51 972696775",ubicacion:"Lima, Perú",horario:"Lun - Vie: 9:00 AM - 6:00 PM"},Q=[{nombre:"GitHub",icono:"fab fa-github",url:"https://github.com/wtaype",color:"#181717"},{nombre:"LinkedIn",icono:"fab fa-linkedin",url:"https://linkedin.com/in/wildertaype",color:"#0A66C2"},{nombre:"Twitter",icono:"fab fa-twitter",url:"https://twitter.com/wilder_taype",color:"#1DA1F2"},{nombre:"Instagram",icono:"fab fa-instagram",url:"https://instagram.com/wilder.taype",color:"#E4405F"},{nombre:"WhatsApp",icono:"fab fa-whatsapp",url:"https://wa.me/51972696775",color:"#25D366"}],X=[{label:"Email",value:f.email,color:"#4285F4",icono:"fas fa-envelope",copiable:!0},{label:"Teléfono",value:f.telefono,color:"#25D366",icono:"fas fa-phone",copiable:!0},{label:"Ubicación",value:f.ubicacion,color:"#EA4335",icono:"fas fa-map-marker-alt",copiable:!1},{label:"Horario",value:f.horario,color:"#FBBC04",icono:"fas fa-clock",copiable:!1}],Y=[{q:"¿Cuánto tiempo toma desarrollar un proyecto?",r:"Depende de la complejidad. Un sitio web básico puede tomar 2-3 semanas, mientras que una aplicación compleja puede requerir 2-3 meses."},{q:"¿Trabajas con clientes internacionales?",r:"Sí, trabajo con clientes de todo el mundo. Utilizo herramientas de colaboración remota para garantizar una comunicación fluida."},{q:"¿Ofreces soporte después de la entrega?",r:"Sí, ofrezco 30 días de soporte gratuito post-lanzamiento y planes de mantenimiento mensual."},{q:"¿Cuáles son tus métodos de pago?",r:"Acepto transferencias bancarias, PayPal y criptomonedas. Generalmente trabajo con un 50% de adelanto y 50% al finalizar."}],h=500;let _=[];const ae=()=>`
<div class="contacto_container">

  <!-- ★ HERO ─────────────────────────────────────────────────────────────── -->
  <section class="contacto_hero">
    <div class="hero_content">
      <h1 class="hero_title">Contáctame <span class="gradient_text">💬</span></h1>
      <p class="hero_subtitle">¿Tienes un proyecto en mente o quieres colaborar? Estoy aquí para ayudarte. Completa el formulario y te responderé lo antes posible.</p>
      <div class="cta_box">
        <h2 class="cta_title">¿Tienes un proyecto en mente?</h2>
        <p class="cta_text">Trabajemos juntos para convertir tu idea en realidad. Estoy disponible para nuevos proyectos y colaboraciones.</p>
        <button class="cta_btn" id="ctaIniciar"><i class="fas fa-paper-plane"></i><span>Iniciar Conversación</span></button>
      </div>
      <div class="hero_badges">
        <div class="badge_hero"><i class="fas fa-clock"></i><span>Respuesta en 24h</span></div>
        <div class="badge_hero"><i class="fas fa-shield-alt"></i><span>100% Confidencial</span></div>
        <div class="badge_hero"><i class="fas fa-handshake"></i><span>Compromiso Total</span></div>
      </div>
    </div>
  </section>

  <!-- ★ GRID: FORMULARIO + INFO ───────────────────────────────────────────── -->
  <section class="contacto_main">
    <div class="contacto_grid">

      <!-- Formulario -->
      <div class="form_section">
        <div class="form_header">
          <h2 class="form_title">Envíame un mensaje</h2>
          <p class="form_subtitle">Completa el formulario y me pondré en contacto contigo</p>
        </div>
        <form id="contactoForm" class="contacto_form" novalidate>
          <div class="form_row">
            <div class="form_group">
              <label for="nombre" class="form_label"><i class="fas fa-user"></i> Nombre Completo</label>
              <input type="text" id="nombre" name="nombre" class="form_input" placeholder="Tu nombre completo" required>
            </div>
          </div>
          <div class="form_row">
            <div class="form_group">
              <label for="email" class="form_label"><i class="fas fa-envelope"></i> Email</label>
              <input type="email" id="email" name="email" class="form_input" placeholder="tu@email.com" required>
            </div>
            <div class="form_group">
              <label for="telefono" class="form_label"><i class="fas fa-phone"></i> Teléfono (opcional)</label>
              <input type="tel" id="telefono" name="telefono" class="form_input" placeholder="${f.telefono}">
            </div>
          </div>
          <div class="form_row">
            <div class="form_group">
              <label for="asunto" class="form_label"><i class="fas fa-tag"></i> Asunto</label>
              <select id="asunto" name="asunto" class="form_select" required>
                <option value="">Selecciona una opción</option>
                <option value="desarrollo">Desarrollo Web</option>
                <option value="mobile">Aplicación Móvil</option>
                <option value="consultoria">Consultoría</option>
                <option value="optimizacion">Optimización</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          <div class="form_row">
            <div class="form_group">
              <label for="mensaje" class="form_label"><i class="fas fa-comment-dots"></i> Mensaje</label>
              <textarea id="mensaje" name="mensaje" class="form_textarea" rows="6" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
              <div class="char_counter"><span id="charCount">0</span> / ${h} caracteres</div>
            </div>
          </div>
          <div class="form_actions">
            <button type="submit" class="btn_submit"><i class="fas fa-paper-plane"></i><span>Enviar Mensaje</span></button>
            <button type="reset"  class="btn_reset"><i class="fas fa-redo"></i><span>Limpiar</span></button>
          </div>
        </form>
      </div>

      <!-- Info + Redes -->
      <div class="info_section">
        <div class="info_card">
          <h3 class="info_title"><i class="fas fa-address-card"></i> Información de Contacto</h3>
          <div class="info_items">
            ${X.map(e=>`
            <div class="info_item">
              <div class="info_icon" style="background:${e.color}"><i class="${e.icono}"></i></div>
              <div class="info_data">
                <span class="info_label">${e.label}</span>
                <span class="info_value">${e.value}</span>
                ${e.copiable?`<button class="btn_copy" data-copy="${e.value}"><i class="fas fa-copy"></i></button>`:""}
              </div>
            </div>`).join("")}
          </div>
        </div>
        <div class="info_card">
          <h3 class="info_title"><i class="fas fa-share-alt"></i> Redes Sociales</h3>
          <div class="redes_grid">
            ${Q.map(e=>`<a href="${e.url}" target="_blank" rel="noopener" class="red_social" style="--color:${e.color}"><i class="${e.icono}"></i><span>${e.nombre}</span></a>`).join("")}
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ★ FAQ ────────────────────────────────────────────────────────────────── -->
  <section class="faq_section">
    <h2 class="section_title">Preguntas Frecuentes</h2>
    <div class="faq_grid">
      ${Y.map(e=>`
      <div class="faq_item">
        <div class="faq_question">
          <i class="fas fa-question-circle"></i>
          <h3>${e.q}</h3>
          <i class="fas fa-chevron-down faq_toggle"></i>
        </div>
        <div class="faq_answer"><p>${e.r}</p></div>
      </div>`).join("")}
    </div>
  </section>

</div>`,te=()=>{W.init(void 0),o(document).on("click.contacto","#ctaIniciar",()=>{o("#nombre").trigger("focus"),o("html,body").animate({scrollTop:o("#contactoForm").offset()?.top-80},400)}),o(document).on("input.contacto","#mensaje",function(){const e=Math.min(o(this).val().length,h);o(this).val().length>h&&o(this).val(o(this).val().slice(0,h)),o("#charCount").text(e)}),o(document).on("reset.contacto","#contactoForm",()=>{o("#charCount").text("0")}),o(document).on("submit.contacto","#contactoForm",async function(e){e.preventDefault();const a={nombre:o("#nombre").val().trim(),email:o("#email").val().trim(),telefono:o("#telefono").val().trim(),asunto:o("#asunto").val(),mensaje:o("#mensaje").val().trim()};if(a.nombre.length<3)return d("El nombre debe tener al menos 3 caracteres","error");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))return d("Ingresa un email válido","error");if(!a.asunto)return d("Selecciona un asunto","error");if(a.mensaje.length<10)return d("El mensaje debe tener al menos 10 caracteres","error");const t=o(".btn_submit");w(t,!0,"Enviando...");try{const{db:i}=await j(async()=>{const{db:g}=await import("./firebase-JeH8I1oc.js");return{db:g}},__vite__mapDeps([0,1,2])),{doc:n,setDoc:r,serverTimestamp:m}=await j(async()=>{const{doc:g,setDoc:S,serverTimestamp:$}=await import("./firebase-Csb9F686.js").then(I=>I.p);return{doc:g,setDoc:S,serverTimestamp:$}},[]),b=D.user,l=`bz${Date.now()}`,u={asunto:a.asunto,correo:a.email,fecha:m(),id:l,leido:!1,mensaje:a.mensaje,telefono:a.telefono};await r(n(i,"buzon",l),u);const v=void 0,c=void 0;c&&c!=="template_id_aqui"||console.warn("EmailJS: Template ID no configurado"),d("¡Mensaje enviado con éxito! Te responderé pronto.","success",4e3),this.reset(),o("#charCount").text("0")}catch(i){console.error("Error contacto:",i),d("Error al enviar el mensaje. Intenta nuevamente.","error")}finally{w(t,!1,"Enviar Mensaje")}}),o(document).on("click.contacto",".btn_copy",function(){A(o(this).data("copy"),this,"¡Copiado!")}),o(document).on("click.contacto",".faq_question",function(){const e=o(this).closest(".faq_item"),a=e.hasClass("active");o(".faq_item").not(e[0]).removeClass("active").find(".faq_answer").slideUp(300),o(".faq_item").not(e[0]).find(".faq_toggle").removeClass("rotated"),a?(e.removeClass("active").find(".faq_answer").slideUp(300),o(this).find(".faq_toggle").removeClass("rotated")):(e.addClass("active").find(".faq_answer").slideDown(300),o(this).find(".faq_toggle").addClass("rotated"))}),_.push(k(".info_card",(e,a)=>setTimeout(()=>o(e).addClass("visible"),a*150))),_.push(k(".faq_item",(e,a)=>setTimeout(()=>o(e).addClass("visible"),a*100)))},oe=()=>{o(document).off(".contacto"),_.forEach(e=>e?.disconnect?.()),_=[]};export{oe as cleanup,te as init,ae as render};
