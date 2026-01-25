import{j as a}from"./vendor-gzd0YkcT.js";import{N as o,w as d,a as m,b as f}from"./main-DVgHNtcu.js";import"./main-W0KekFlZ.js";const i={email:"wilder.taype16@mail.com",telefono:"+51 972696775",ubicacion:"Lima, Perú",horario:"Lun - Vie: 9:00 AM - 6:00 PM",redes:[{nombre:"GitHub",icono:"fab fa-github",url:"https://github.com/wtaype",color:"#181717"},{nombre:"LinkedIn",icono:"fab fa-linkedin",url:"https://linkedin.com/in/wildertaype",color:"#0A66C2"},{nombre:"Twitter",icono:"fab fa-twitter",url:"https://twitter.com/wilder_taype",color:"#1DA1F2"},{nombre:"Instagram",icono:"fab fa-instagram",url:"https://instagram.com/wilder.taype",color:"#E4405F"},{nombre:"WhatsApp",icono:"fab fa-whatsapp",url:"https://wa.me/51972696775",color:"#25D366"}],servicios:[{id:1,nombre:"Desarrollo Web",icono:"fas fa-globe",descripcion:"Aplicaciones web modernas y responsivas"},{id:2,nombre:"Aplicaciones Móviles",icono:"fas fa-mobile-alt",descripcion:"Apps nativas y multiplataforma"},{id:3,nombre:"Optimización",icono:"fas fa-rocket",descripcion:"Mejora de rendimiento y SEO"},{id:4,nombre:"Consultoría",icono:"fas fa-lightbulb",descripcion:"Asesoría técnica y arquitectura"}]},_=()=>{a("#contacto").html(`
    <div class="contacto_container">
      <section class="contacto_hero">
        <div class="hero_content">
          <h1 class="hero_title">Contáctame <span class="gradient_text">💬</span></h1>
          <p class="hero_subtitle">¿Tienes un proyecto en mente o quieres colaborar? Estoy aquí para ayudarte. Completa el formulario y te responderé lo antes posible.</p>
          <div class="hero_badges">
            <div class="badge_hero"><i class="fas fa-clock"></i><span>Respuesta en 24h</span></div>
            <div class="badge_hero"><i class="fas fa-shield-alt"></i><span>100% Confidencial</span></div>
            <div class="badge_hero"><i class="fas fa-handshake"></i><span>Compromiso Total</span></div>
          </div>
        </div>
      </section>
      <section class="contacto_main">
        <div class="contacto_grid">
          <div class="form_section">
            <div class="form_header">
              <h2 class="form_title">Envíame un mensaje</h2>
              <p class="form_subtitle">Completa el formulario y me pondré en contacto contigo</p>
            </div>
            <form id="contactoForm" class="contacto_form">
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
                  <input type="tel" id="telefono" name="telefono" class="form_input" placeholder="+51 972696775">
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
                  <div class="char_counter"><span id="charCount">0</span> / 500 caracteres</div>
                </div>
              </div>
              <div class="form_actions">
                <button type="submit" class="btn_submit"><i class="fas fa-paper-plane"></i><span>Enviar Mensaje</span></button>
                <button type="reset" class="btn_reset"><i class="fas fa-redo"></i><span>Limpiar</span></button>
              </div>
            </form>
          </div>
          <div class="info_section">
            <div class="info_card">
              <h3 class="info_title"><i class="fas fa-address-card"></i> Información de Contacto</h3>
              <div class="info_items">
                <div class="info_item">
                  <div class="info_icon" style="background: #4285F4"><i class="fas fa-envelope"></i></div>
                  <div class="info_data"><span class="info_label">Email</span><span class="info_value">${i.email}</span><button class="btn_copy" data-copy="${i.email}"><i class="fas fa-copy"></i></button></div>
                </div>
                <div class="info_item">
                  <div class="info_icon" style="background: #25D366"><i class="fas fa-phone"></i></div>
                  <div class="info_data"><span class="info_label">Teléfono</span><span class="info_value">${i.telefono}</span><button class="btn_copy" data-copy="${i.telefono}"><i class="fas fa-copy"></i></button></div>
                </div>
                <div class="info_item">
                  <div class="info_icon" style="background: #EA4335"><i class="fas fa-map-marker-alt"></i></div>
                  <div class="info_data"><span class="info_label">Ubicación</span><span class="info_value">${i.ubicacion}</span></div>
                </div>
                <div class="info_item">
                  <div class="info_icon" style="background: #FBBC04"><i class="fas fa-clock"></i></div>
                  <div class="info_data"><span class="info_label">Horario</span><span class="info_value">${i.horario}</span></div>
                </div>
              </div>
            </div>
            <div class="info_card">
              <h3 class="info_title"><i class="fas fa-share-alt"></i> Redes Sociales</h3>
              <div class="redes_grid">${i.redes.map(s=>`<a href="${s.url}" target="_blank" class="red_social" style="--color: ${s.color}"><i class="${s.icono}"></i><span>${s.nombre}</span></a>`).join("")}</div>
            </div>
            <div class="info_card">
              <h3 class="info_title"><i class="fas fa-briefcase"></i> Servicios Disponibles</h3>
              <div class="servicios_list">${i.servicios.map(s=>`<div class="servicio_item"><div class="servicio_icon"><i class="${s.icono}"></i></div><div class="servicio_info"><h4>${s.nombre}</h4><p>${s.descripcion}</p></div></div>`).join("")}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="mapa_section">
        <h2 class="section_title">Ubicación</h2>
        <div class="mapa_container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124410.76215066034!2d-77.11271038343119!3d-12.046373702177318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" class="mapa_iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </section>
      <section class="faq_section">
        <h2 class="section_title">Preguntas Frecuentes</h2>
        <div class="faq_grid">
          <div class="faq_item"><div class="faq_question"><i class="fas fa-question-circle"></i><h3>¿Cuánto tiempo toma desarrollar un proyecto?</h3><i class="fas fa-chevron-down faq_toggle"></i></div><div class="faq_answer"><p>Depende de la complejidad. Un sitio web básico puede tomar 2-3 semanas, mientras que una aplicación compleja puede requerir 2-3 meses.</p></div></div>
          <div class="faq_item"><div class="faq_question"><i class="fas fa-question-circle"></i><h3>¿Trabajas con clientes internacionales?</h3><i class="fas fa-chevron-down faq_toggle"></i></div><div class="faq_answer"><p>Sí, trabajo con clientes de todo el mundo. Utilizo herramientas de colaboración remota para garantizar una comunicación fluida.</p></div></div>
          <div class="faq_item"><div class="faq_question"><i class="fas fa-question-circle"></i><h3>¿Ofreces soporte después de la entrega?</h3><i class="fas fa-chevron-down faq_toggle"></i></div><div class="faq_answer"><p>Sí, ofrezco 30 días de soporte gratuito post-lanzamiento y planes de mantenimiento mensual.</p></div></div>
          <div class="faq_item"><div class="faq_question"><i class="fas fa-question-circle"></i><h3>¿Cuáles son tus métodos de pago?</h3><i class="fas fa-chevron-down faq_toggle"></i></div><div class="faq_answer"><p>Acepto transferencias bancarias, PayPal y criptomonedas. Generalmente trabajo con un 50% de adelanto y 50% al finalizar.</p></div></div>
        </div>
      </section>
    </div>
  `);const c=a("#contactoForm"),r=a("#mensaje"),t=a("#charCount");r.on("input",function(){const s=a(this).val().length;s>500?(a(this).val(a(this).val().substring(0,500)),t.text(500)):t.text(s)}),c.on("submit",async function(s){s.preventDefault();const e={nombre:a("#nombre").val().trim(),email:a("#email").val().trim(),telefono:a("#telefono").val().trim(),asunto:a("#asunto").val(),mensaje:r.val().trim(),fecha:new Date().toISOString()};if(e.nombre.length<3)return o("El nombre debe tener al menos 3 caracteres","error");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))return o("Ingresa un email válido","error");if(e.mensaje.length<10)return o("El mensaje debe tener al menos 10 caracteres","error");const n=a(".btn_submit");d(n,!0,"Enviando...");try{await new Promise(l=>setTimeout(l,2e3)),o("¡Mensaje enviado con éxito! Te responderé pronto.","success",4e3),c[0].reset(),t.text("0"),console.log("Mensaje enviado:",e)}catch(l){console.error("Error:",l),o("Error al enviar el mensaje. Intenta nuevamente.","error")}finally{d(n,!1,"Enviar Mensaje")}}),a(".btn_reset").on("click",()=>{t.text("0"),o("Formulario limpiado","info",2e3)}),a(".btn_copy").on("click",function(){m(a(this).data("copy"),this,"¡Copiado!")}),a(".faq_question").on("click",function(){const s=a(this).closest(".faq_item"),e=s.find(".faq_answer"),n=a(this).find(".faq_toggle");a(".faq_item").not(s).removeClass("active").find(".faq_answer").slideUp(300),a(".faq_toggle").not(n).removeClass("rotated"),s.toggleClass("active"),e.slideToggle(300),n.toggleClass("rotated")}),f(".info_card",()=>a(".info_card").each((s,e)=>setTimeout(()=>a(e).addClass("visible"),s*150))),f(".faq_item",()=>a(".faq_item").each((s,e)=>setTimeout(()=>a(e).addClass("visible"),s*100))),console.log("✅ Contacto cargado")};export{_ as contacto};
