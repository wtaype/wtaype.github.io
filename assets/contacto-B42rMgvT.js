import{$ as a,N as s,w as r,a as m,b as d}from"./main-DMu7slPF.js";const i={email:"wilder.taype16@mail.com",telefono:"+51 972696775",ubicacion:"Lima, Perú",horario:"Lun - Vie: 9:00 AM - 6:00 PM"},p=[{nombre:"GitHub",icono:"fab fa-github",url:"https://github.com/wtaype",color:"#181717"},{nombre:"LinkedIn",icono:"fab fa-linkedin",url:"https://linkedin.com/in/wildertaype",color:"#0A66C2"},{nombre:"Twitter",icono:"fab fa-twitter",url:"https://twitter.com/wilder_taype",color:"#1DA1F2"},{nombre:"Instagram",icono:"fab fa-instagram",url:"https://instagram.com/wilder.taype",color:"#E4405F"},{nombre:"WhatsApp",icono:"fab fa-whatsapp",url:"https://wa.me/51972696775",color:"#25D366"}],f=[{label:"Email",value:i.email,color:"#4285F4",icono:"fas fa-envelope",copiable:!0},{label:"Teléfono",value:i.telefono,color:"#25D366",icono:"fas fa-phone",copiable:!0},{label:"Ubicación",value:i.ubicacion,color:"#EA4335",icono:"fas fa-map-marker-alt",copiable:!1},{label:"Horario",value:i.horario,color:"#FBBC04",icono:"fas fa-clock",copiable:!1}],u=[{q:"¿Cuánto tiempo toma desarrollar un proyecto?",r:"Depende de la complejidad. Un sitio web básico puede tomar 2-3 semanas, mientras que una aplicación compleja puede requerir 2-3 meses."},{q:"¿Trabajas con clientes internacionales?",r:"Sí, trabajo con clientes de todo el mundo. Utilizo herramientas de colaboración remota para garantizar una comunicación fluida."},{q:"¿Ofreces soporte después de la entrega?",r:"Sí, ofrezco 30 días de soporte gratuito post-lanzamiento y planes de mantenimiento mensual."},{q:"¿Cuáles son tus métodos de pago?",r:"Acepto transferencias bancarias, PayPal y criptomonedas. Generalmente trabajo con un 50% de adelanto y 50% al finalizar."}],t=500;let n=[];const b=()=>`
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
              <input type="tel" id="telefono" name="telefono" class="form_input" placeholder="${i.telefono}">
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
              <div class="char_counter"><span id="charCount">0</span> / ${t} caracteres</div>
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
            ${f.map(o=>`
            <div class="info_item">
              <div class="info_icon" style="background:${o.color}"><i class="${o.icono}"></i></div>
              <div class="info_data">
                <span class="info_label">${o.label}</span>
                <span class="info_value">${o.value}</span>
                ${o.copiable?`<button class="btn_copy" data-copy="${o.value}"><i class="fas fa-copy"></i></button>`:""}
              </div>
            </div>`).join("")}
          </div>
        </div>
        <div class="info_card">
          <h3 class="info_title"><i class="fas fa-share-alt"></i> Redes Sociales</h3>
          <div class="redes_grid">
            ${p.map(o=>`<a href="${o.url}" target="_blank" rel="noopener" class="red_social" style="--color:${o.color}"><i class="${o.icono}"></i><span>${o.nombre}</span></a>`).join("")}
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ★ FAQ ────────────────────────────────────────────────────────────────── -->
  <section class="faq_section">
    <h2 class="section_title">Preguntas Frecuentes</h2>
    <div class="faq_grid">
      ${u.map(o=>`
      <div class="faq_item">
        <div class="faq_question">
          <i class="fas fa-question-circle"></i>
          <h3>${o.q}</h3>
          <i class="fas fa-chevron-down faq_toggle"></i>
        </div>
        <div class="faq_answer"><p>${o.r}</p></div>
      </div>`).join("")}
    </div>
  </section>

</div>`,_=()=>{a(document).on("click.contacto","#ctaIniciar",()=>{a("#nombre").trigger("focus"),a("html,body").animate({scrollTop:a("#contactoForm").offset()?.top-80},400)}),a(document).on("input.contacto","#mensaje",function(){const o=Math.min(a(this).val().length,t);a(this).val().length>t&&a(this).val(a(this).val().slice(0,t)),a("#charCount").text(o)}),a(document).on("reset.contacto","#contactoForm",()=>{a("#charCount").text("0"),s("Formulario limpiado","info",2e3)}),a(document).on("submit.contacto","#contactoForm",async function(o){o.preventDefault();const e={nombre:a("#nombre").val().trim(),email:a("#email").val().trim(),telefono:a("#telefono").val().trim(),asunto:a("#asunto").val(),mensaje:a("#mensaje").val().trim(),fecha:new Date().toISOString()};if(e.nombre.length<3)return s("El nombre debe tener al menos 3 caracteres","error");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))return s("Ingresa un email válido","error");if(e.mensaje.length<10)return s("El mensaje debe tener al menos 10 caracteres","error");const c=a(".btn_submit");r(c,!0,"Enviando...");try{await new Promise(l=>setTimeout(l,2e3)),s("¡Mensaje enviado con éxito! Te responderé pronto.","success",4e3),this.reset(),a("#charCount").text("0")}catch(l){console.error("Error contacto:",l),s("Error al enviar el mensaje. Intenta nuevamente.","error")}finally{r(c,!1,"Enviar Mensaje")}}),a(document).on("click.contacto",".btn_copy",function(){m(a(this).data("copy"),this,"¡Copiado!")}),a(document).on("click.contacto",".faq_question",function(){const o=a(this).closest(".faq_item"),e=o.hasClass("active");a(".faq_item").removeClass("active").find(".faq_answer").slideUp(300),a(".faq_toggle").removeClass("rotated"),e||(o.addClass("active").find(".faq_answer").slideDown(300),a(this).find(".faq_toggle").addClass("rotated"))}),n.push(d(".info_card",(o,e)=>setTimeout(()=>a(o).addClass("visible"),e*150))),n.push(d(".faq_item",(o,e)=>setTimeout(()=>a(o).addClass("visible"),e*100)))},h=()=>{a(document).off(".contacto"),n.forEach(o=>o?.disconnect?.()),n=[]};export{h as cleanup,_ as init,b as render};
