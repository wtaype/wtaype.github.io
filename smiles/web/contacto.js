import './contacto.css';
import { $, wiSpin, Notificacion, wiVista, wicopy, wiAuth } from '../widev.js';
import { app } from '../wii.js';
import emailjs from '@emailjs/browser';


// ── Datos ─────────────────────────────────────────────────────────────────────
const INFO = {
  email:     'wilder.taype16@mail.com',
  telefono:  '+51 972696775',
  ubicacion: 'Lima, Perú',
  horario:   'Lun - Vie: 9:00 AM - 6:00 PM',
};

const REDES = [
  { nombre: 'GitHub',    icono: 'fab fa-github',    url: 'https://github.com/wtaype',              color: '#181717' },
  { nombre: 'LinkedIn',  icono: 'fab fa-linkedin',  url: 'https://linkedin.com/in/wildertaype',    color: '#0A66C2' },
  { nombre: 'Twitter',   icono: 'fab fa-twitter',   url: 'https://twitter.com/wilder_taype',       color: '#1DA1F2' },
  { nombre: 'Instagram', icono: 'fab fa-instagram', url: 'https://instagram.com/wilder.taype',     color: '#E4405F' },
  { nombre: 'WhatsApp',  icono: 'fab fa-whatsapp',  url: 'https://wa.me/51972696775',              color: '#25D366' },
];

const INFO_ITEMS = [
  { label: 'Email',     value: INFO.email,     color: '#4285F4', icono: 'fas fa-envelope',     copiable: true  },
  { label: 'Teléfono',  value: INFO.telefono,  color: '#25D366', icono: 'fas fa-phone',        copiable: true  },
  { label: 'Ubicación', value: INFO.ubicacion, color: '#EA4335', icono: 'fas fa-map-marker-alt',copiable: false },
  { label: 'Horario',   value: INFO.horario,   color: '#FBBC04', icono: 'fas fa-clock',        copiable: false },
];

const FAQ = [
  { q: '¿Cuánto tiempo toma desarrollar un proyecto?',   r: 'Depende de la complejidad. Un sitio web básico puede tomar 2-3 semanas, mientras que una aplicación compleja puede requerir 2-3 meses.' },
  { q: '¿Trabajas con clientes internacionales?',         r: 'Sí, trabajo con clientes de todo el mundo. Utilizo herramientas de colaboración remota para garantizar una comunicación fluida.' },
  { q: '¿Ofreces soporte después de la entrega?',         r: 'Sí, ofrezco 30 días de soporte gratuito post-lanzamiento y planes de mantenimiento mensual.' },
  { q: '¿Cuáles son tus métodos de pago?',                r: 'Acepto transferencias bancarias, PayPal y criptomonedas. Generalmente trabajo con un 50% de adelanto y 50% al finalizar.' },
];

const MAX_CHARS = 500;

// ── Estado ────────────────────────────────────────────────────────────────────
let _obs = [];

// ── render() — solo HTML ──────────────────────────────────────────────────────
export const render = () => `
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
              <input type="tel" id="telefono" name="telefono" class="form_input" placeholder="${INFO.telefono}">
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
              <div class="char_counter"><span id="charCount">0</span> / ${MAX_CHARS} caracteres</div>
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
            ${INFO_ITEMS.map(it => `
            <div class="info_item">
              <div class="info_icon" style="background:${it.color}"><i class="${it.icono}"></i></div>
              <div class="info_data">
                <span class="info_label">${it.label}</span>
                <span class="info_value">${it.value}</span>
                ${it.copiable ? `<button class="btn_copy" data-copy="${it.value}"><i class="fas fa-copy"></i></button>` : ''}
              </div>
            </div>`).join('')}
          </div>
        </div>
        <div class="info_card">
          <h3 class="info_title"><i class="fas fa-share-alt"></i> Redes Sociales</h3>
          <div class="redes_grid">
            ${REDES.map(r => `<a href="${r.url}" target="_blank" rel="noopener" class="red_social" style="--color:${r.color}"><i class="${r.icono}"></i><span>${r.nombre}</span></a>`).join('')}
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ★ FAQ ────────────────────────────────────────────────────────────────── -->
  <section class="faq_section">
    <h2 class="section_title">Preguntas Frecuentes</h2>
    <div class="faq_grid">
      ${FAQ.map(f => `
      <div class="faq_item">
        <div class="faq_question">
          <i class="fas fa-question-circle"></i>
          <h3>${f.q}</h3>
          <i class="fas fa-chevron-down faq_toggle"></i>
        </div>
        <div class="faq_answer"><p>${f.r}</p></div>
      </div>`).join('')}
    </div>
  </section>

</div>`;

// ── init() — lógica y eventos ─────────────────────────────────────────────────
export const init = () => {
  // Inicializar EmailJS con variables de entorno de Vite
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  // CTA → foco en el campo nombre
  $(document).on('click.contacto', '#ctaIniciar', () => {
    $('#nombre').trigger('focus');
    $('html,body').animate({ scrollTop: $('#contactoForm').offset()?.top - 80 }, 400);
  });

  // Contador de caracteres
  $(document).on('input.contacto', '#mensaje', function () {
    const len = Math.min($(this).val().length, MAX_CHARS);
    if ($(this).val().length > MAX_CHARS) $(this).val($(this).val().slice(0, MAX_CHARS));
    $('#charCount').text(len);
  });

  // Reset → limpiar contador
  $(document).on('reset.contacto', '#contactoForm', () => {
    $('#charCount').text('0');
  });

  // Envío del formulario → Firestore
  $(document).on('submit.contacto', '#contactoForm', async function (e) {
    e.preventDefault();
    const datos = {
      nombre:   $('#nombre').val().trim(),
      email:    $('#email').val().trim(),
      telefono: $('#telefono').val().trim(),
      asunto:   $('#asunto').val(),
      mensaje:  $('#mensaje').val().trim(),
    };
    if (datos.nombre.length < 3)                                  return Notificacion('El nombre debe tener al menos 3 caracteres', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email))         return Notificacion('Ingresa un email válido', 'error');
    if (!datos.asunto)                                            return Notificacion('Selecciona un asunto', 'error');
    if (datos.mensaje.length < 10)                                return Notificacion('El mensaje debe tener al menos 10 caracteres', 'error');

    const $btn = $('.btn_submit');
    wiSpin($btn, true, 'Enviando...');
    try {
      // 1. Guardar en Firestore (buzon con ID personalizado)
      const { db } = await import('../smile/firebase.js');
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      const wi = wiAuth.user;
      const bzId = `bz${Date.now()}`;
      
      const buzonDoc = {
        asunto:  datos.asunto,
        correo:  datos.email,
        fecha:   serverTimestamp(),
        id:      bzId,
        leido:   false,
        mensaje: datos.mensaje,
        telefono:datos.telefono,
      };

      await setDoc(doc(db, 'buzon', bzId), buzonDoc);

      // 2. Enviar email con EmailJS
      const sid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      if (tid && tid !== 'template_id_aqui') {
        await emailjs.send(sid, tid, { 
          ...datos, 
          app_name: app,
          reply_to: datos.email 
        });
      } else {
        console.warn('EmailJS: Template ID no configurado');
      }

      Notificacion('¡Mensaje enviado con éxito! Te responderé pronto.', 'success', 4000);
      this.reset(); $('#charCount').text('0');
    } catch (err) {
      console.error('Error contacto:', err);
      Notificacion('Error al enviar el mensaje. Intenta nuevamente.', 'error');
    } finally {
      wiSpin($btn, false, 'Enviar Mensaje');
    }
  });

  // Copiar email/teléfono
  $(document).on('click.contacto', '.btn_copy', function () {
    wicopy($(this).data('copy'), this, '¡Copiado!');
  });

  // FAQ acordeón
  $(document).on('click.contacto', '.faq_question', function () {
    const $item = $(this).closest('.faq_item');
    const isOpen = $item.hasClass('active');
    $('.faq_item').not($item[0]).removeClass('active').find('.faq_answer').slideUp(300);
    $('.faq_item').not($item[0]).find('.faq_toggle').removeClass('rotated');
    if (!isOpen) { $item.addClass('active').find('.faq_answer').slideDown(300); $(this).find('.faq_toggle').addClass('rotated'); }
    else { $item.removeClass('active').find('.faq_answer').slideUp(300); $(this).find('.faq_toggle').removeClass('rotated'); }
  });

  // Animaciones de entrada
  _obs.push(wiVista('.info_card', (el, i) => setTimeout(() => $(el).addClass('visible'), i * 150)));
  _obs.push(wiVista('.faq_item',  (el, i) => setTimeout(() => $(el).addClass('visible'), i * 100)));
};

// ── cleanup() ─────────────────────────────────────────────────────────────────
export const cleanup = () => {
  $(document).off('.contacto');
  _obs.forEach(o => o?.disconnect?.()); _obs = [];
};