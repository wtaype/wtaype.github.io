import './descubre.css';
import $ from 'jquery';
import { app, version } from '../wii.js';
import { abrirModal, cerrarModal } from '../widev.js';

export const render = () => `
  <div class="descubre_container">
    <!-- HERO CON CTA PRINCIPAL -->
    <div class="descubre_hero">
      <div class="hero_badge_top">
        <i class="fas fa-fire"></i>
        <span>Más de 10,000 archivos multimedia procesados</span>
      </div>
      <div class="hero_icon">
        <i class="fas fa-play-circle"></i>
      </div>
      <h1 class="hero_title">Tu Centro Multimedia Completo con ${app}</h1>
      <p class="hero_subtitle">Videos, Audios e Imágenes en un solo lugar. <strong>100% Gratis. 100% Privado.</strong></p>
      <div class="hero_cta">
        <a href="/videos" class="btn_primary">
          <i class="fas fa-rocket"></i> Comenzar Ahora
        </a>
        <button class="btn_secondary" data-modal="modalDemo">
          <i class="fas fa-video"></i> Ver Demo
        </button>
      </div>
      <div class="hero_badges">
        <div class="badge_item">
          <i class="fas fa-shield-check"></i>
          <span>100% Privado</span>
        </div>
        <div class="badge_item">
          <i class="fas fa-infinity"></i>
          <span>Uso Ilimitado</span>
        </div>
        <div class="badge_item">
          <i class="fas fa-bolt"></i>
          <span>Ultra Rápido</span>
        </div>
      </div>
    </div>

    <!-- BENEFICIOS CLAVE -->
    <div class="benefits_quick">
      <h2 class="section_title_center">
        <i class="fas fa-star"></i> ¿Por qué elegir ${app}?
      </h2>
      <div class="benefits_grid">
        <div class="benefit_quick">
          <div class="benefit_number">01</div>
          <div class="benefit_icon_quick">
            <i class="fas fa-video"></i>
          </div>
          <h3>Reproductor de Videos</h3>
          <p>Reproduce <strong>MP4, WebM, OGG</strong> con controles avanzados: velocidad, loop, PiP y más</p>
          <a href="/videos" class="btn_learn">Probar ahora →</a>
        </div>

        <div class="benefit_quick">
          <div class="benefit_number">02</div>
          <div class="benefit_icon_quick">
            <i class="fas fa-music"></i>
          </div>
          <h3>Reproductor de Audios</h3>
          <p><strong>Visualización de ondas en tiempo real</strong> con Web Audio API, lista y modo aleatorio</p>
          <a href="/audios" class="btn_learn">Probar ahora →</a>
        </div>

        <div class="benefit_quick">
          <div class="benefit_number">03</div>
          <div class="benefit_icon_quick">
            <i class="fas fa-images"></i>
          </div>
          <h3>Visor de Imágenes</h3>
          <p><strong>Zoom inteligente, slideshow</strong> y galería de miniaturas para todas tus fotos</p>
          <a href="/images" class="btn_learn">Probar ahora →</a>
        </div>
      </div>
    </div>

    <!-- PRUEBA SOCIAL -->
    <div class="social_proof">
      <div class="proof_stats">
        <div class="stat_box">
          <div class="stat_number" data-count="2500">0</div>
          <div class="stat_label">Usuarios Activos</div>
        </div>
        <div class="stat_box">
          <div class="stat_number" data-count="10000">0</div>
          <div class="stat_label">Archivos Procesados</div>
        </div>
        <div class="stat_box">
          <div class="stat_number" data-count="8500">0</div>
          <div class="stat_label">Sesiones Multimedia</div>
        </div>
        <div class="stat_box">
          <div class="stat_number" data-count="99">0</div>
          <div class="stat_label">% Satisfacción</div>
        </div>
      </div>
    </div>

    <!-- CTA REGISTRO/LOGIN -->
    <div class="auth_cta_section">
      <div class="auth_cta_content">
        <div class="auth_icon">
          <i class="fas fa-user-plus"></i>
        </div>
        <h2>¿Quieres guardar tus listas de reproducción?</h2>
        <p>Crea una cuenta <strong>gratuita</strong> y sincroniza tus archivos multimedia en todos tus dispositivos</p>
        <div class="auth_benefits">
          <div class="auth_benefit">
            <i class="fas fa-cloud"></i>
            <span>Sincronización en la nube</span>
          </div>
          <div class="auth_benefit">
            <i class="fas fa-list"></i>
            <span>Listas personalizadas</span>
          </div>
          <div class="auth_benefit">
            <i class="fas fa-history"></i>
            <span>Historial de reproducción</span>
          </div>
        </div>
        <div class="auth_buttons">
          <button class="btn_register" data-modal="modalRegister">
            <i class="fas fa-user-plus"></i> Crear Cuenta Gratis
          </button>
          <button class="btn_login" data-modal="modalLogin">
            <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
          </button>
        </div>
        <p class="auth_note">
          <i class="fas fa-info-circle"></i> También puedes usar ${app} sin cuenta, todas las funciones están disponibles
        </p>
      </div>
    </div>

    <!-- CARACTERÍSTICAS DESTACADAS -->
    <div class="features_showcase">
      <h2 class="section_title_center">
        <i class="fas fa-magic"></i> Todo lo que necesitas en un solo lugar
      </h2>
      <div class="showcase_grid">
        <div class="showcase_card">
          <div class="showcase_visual">
            <i class="fas fa-upload"></i>
          </div>
          <h3>Drag & Drop</h3>
          <p>Arrastra archivos multimedia directamente. Sin límites de tamaño</p>
          <ul class="showcase_list">
            <li><i class="fas fa-check"></i> Múltiples formatos soportados</li>
            <li><i class="fas fa-check"></i> Carga instantánea</li>
            <li><i class="fas fa-check"></i> Sin restricciones</li>
          </ul>
        </div>

        <div class="showcase_card">
          <div class="showcase_visual">
            <i class="fas fa-cogs"></i>
          </div>
          <h3>Controles Avanzados</h3>
          <p>Velocidad ajustable, loop, shuffle y más funciones profesionales</p>
          <ul class="showcase_list">
            <li><i class="fas fa-check"></i> Picture in Picture</li>
            <li><i class="fas fa-check"></i> Atajos de teclado</li>
            <li><i class="fas fa-check"></i> Pantalla completa</li>
          </ul>
        </div>

        <div class="showcase_card">
          <div class="showcase_visual">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Visualización en Tiempo Real</h3>
          <p>Ondas de audio animadas con Web Audio API</p>
          <ul class="showcase_list">
            <li><i class="fas fa-check"></i> Canvas interactivo</li>
            <li><i class="fas fa-check"></i> 40 barras de frecuencia</li>
            <li><i class="fas fa-check"></i> Gradientes personalizables</li>
          </ul>
        </div>

        <div class="showcase_card">
          <div class="showcase_visual">
            <i class="fas fa-palette"></i>
          </div>
          <h3>5 Temas Visuales</h3>
          <p>Diseño moderno con transiciones suaves</p>
          <ul class="showcase_list">
            <li><i class="fas fa-check"></i> Cielo, Dulce, Paz, Mora, Futuro</li>
            <li><i class="fas fa-check"></i> Cambio instantáneo</li>
            <li><i class="fas fa-check"></i> Persistencia automática</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- COMPARACIÓN -->
    <div class="comparison_section">
      <h2 class="section_title_center">
        <i class="fas fa-balance-scale"></i> ${app} vs Reproductores Tradicionales
      </h2>
      <div class="comparison_table_wrapper">
        <table class="comparison_table">
          <thead>
            <tr>
              <th>Característica</th>
              <th class="highlight">${app}</th>
              <th>Otros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i class="fas fa-dollar-sign"></i> Precio</td>
              <td class="highlight"><strong>GRATIS</strong></td>
              <td>$4.99-$19.99</td>
            </tr>
            <tr>
              <td><i class="fas fa-infinity"></i> Límites</td>
              <td class="highlight"><strong>Ilimitado</strong></td>
              <td>Límites de archivos</td>
            </tr>
            <tr>
              <td><i class="fas fa-shield-alt"></i> Privacidad</td>
              <td class="highlight"><strong>100% Local</strong></td>
              <td>Envío a servidores</td>
            </tr>
            <tr>
              <td><i class="fas fa-ad"></i> Publicidad</td>
              <td class="highlight"><strong>Sin anuncios</strong></td>
              <td>Anuncios molestos</td>
            </tr>
            <tr>
              <td><i class="fas fa-video"></i> Reproductores</td>
              <td class="highlight"><strong>3 en 1</strong></td>
              <td>1 función</td>
            </tr>
            <tr>
              <td><i class="fas fa-palette"></i> Temas</td>
              <td class="highlight"><strong>5 temas</strong></td>
              <td>1 tema fijo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- TESTIMONIOS -->
    <div class="testimonials_section">
      <h2 class="section_title_center">
        <i class="fas fa-quote-left"></i> Lo que dicen nuestros usuarios
      </h2>
      <div class="testimonials_grid">
        <div class="testimonial_card">
          <div class="stars">★★★★★</div>
          <p class="testimonial_text">"El mejor reproductor web que he usado. Las ondas de audio son impresionantes"</p>
          <div class="testimonial_author">
            <div class="author_avatar">C</div>
            <div>
              <div class="author_name">Carlos Ruiz</div>
              <div class="author_role">DJ Profesional</div>
            </div>
          </div>
        </div>

        <div class="testimonial_card">
          <div class="stars">★★★★★</div>
          <p class="testimonial_text">"Perfecto para presentaciones. El slideshow funciona sin problemas"</p>
          <div class="testimonial_author">
            <div class="author_avatar">L</div>
            <div>
              <div class="author_name">Laura Méndez</div>
              <div class="author_role">Diseñadora</div>
            </div>
          </div>
        </div>

        <div class="testimonial_card">
          <div class="stars">★★★★★</div>
          <p class="testimonial_text">"Simple, rápido y privado. Todo lo que necesito en un reproductor"</p>
          <div class="testimonial_author">
            <div class="author_avatar">M</div>
            <div>
              <div class="author_name">Miguel Ángel</div>
              <div class="author_role">Fotógrafo</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA FINAL -->
    <div class="cta_final">
      <div class="cta_content">
        <h2>¿Listo para disfrutar de tus archivos multimedia?</h2>
        <p>Únete a <strong>+2,500 usuarios</strong> que ya usan ${app} diariamente</p>
        <div class="cta_buttons">
          <a href="/videos" class="btn_cta_large">
            <i class="fas fa-rocket"></i> Comenzar Gratis Ahora
          </a>
          <button class="btn_outline_large" data-modal="modalFeatures">
            <i class="fas fa-list"></i> Ver todas las características
          </button>
        </div>
        <p class="cta_note">
          <i class="fas fa-check-circle"></i> Sin instalación 
          <i class="fas fa-check-circle"></i> Sin registro obligatorio 
          <i class="fas fa-check-circle"></i> 100% gratis
        </p>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faq_section">
      <h2 class="section_title_center">
        <i class="fas fa-question-circle"></i> Preguntas Frecuentes
      </h2>
      <div class="faq_grid">
        <div class="faq_item">
          <h4><i class="fas fa-chevron-right"></i> ¿Es realmente gratis?</h4>
          <p>Sí, 100% gratis. Sin límites, sin anuncios, sin costos ocultos. Siempre.</p>
        </div>
        <div class="faq_item">
          <h4><i class="fas fa-chevron-right"></i> ¿Necesito cuenta?</h4>
          <p>No es obligatorio. Todas las funciones están disponibles sin registro. La cuenta es opcional para sincronizar listas.</p>
        </div>
        <div class="faq_item">
          <h4><i class="fas fa-chevron-right"></i> ¿Mis archivos están seguros?</h4>
          <p>Todo se procesa localmente. Tus archivos nunca salen de tu navegador.</p>
        </div>
        <div class="faq_item">
          <h4><i class="fas fa-chevron-right"></i> ¿Qué formatos soporta?</h4>
          <p>Videos: MP4, WebM, OGG. Audios: MP3, WAV, OGG, M4A. Imágenes: JPG, PNG, GIF, WebP, SVG.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- MODALES -->
  <div id="modalDemo" class="wiModal">
    <div class="modalBody" style="background:var(--wb);max-width:800px">
      <button class="modalX"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;font-family:var(--ff_P)">
        <h2 style="color:var(--tx);margin-bottom:2vh;text-align:center">
          <i class="fas fa-video" style="color:var(--mco)"></i> Demo de ${app}
        </h2>
        <div style="background:var(--bg1);padding:4vh 2vw;border-radius:12px;text-align:center">
          <i class="fas fa-play-circle" style="font-size:5rem;color:var(--mco);margin-bottom:2vh"></i>
          <h3 style="color:var(--tx);margin-bottom:1vh">Video demostrativo próximamente</h3>
          <p style="color:var(--txe);margin-bottom:3vh">Mientras tanto, prueba directamente los reproductores:</p>
          <a href="/videos" class="btn_primary" style="display:inline-flex;margin:0.5vh">
            <i class="fas fa-video"></i> Videos
          </a>
          <a href="/audios" class="btn_secondary" style="display:inline-flex;margin:0.5vh">
            <i class="fas fa-music"></i> Audios
          </a>
          <a href="/images" class="btn_secondary" style="display:inline-flex;margin:0.5vh">
            <i class="fas fa-images"></i> Imágenes
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modalRegister" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;font-family:var(--ff_P)">
        <div style="text-align:center;margin-bottom:2vh">
          <i class="fas fa-user-plus" style="font-size:4rem;color:var(--mco)"></i>
        </div>
        <h2 style="color:var(--tx);margin-bottom:2vh;text-align:center">Crear Cuenta Gratis</h2>
        <p style="color:var(--txe);text-align:center;margin-bottom:3vh">Sincroniza tus listas en todos tus dispositivos</p>
        <form style="display:flex;flex-direction:column;gap:2vh">
          <input type="text" placeholder="Nombre completo" style="padding:1.5vh 2vw;border-radius:0.8vh;border:1px solid var(--bg5);background:var(--bg1);color:var(--tx);font-size:var(--fz_m3)">
          <input type="email" placeholder="Email" style="padding:1.5vh 2vw;border-radius:0.8vh;border:1px solid var(--bg5);background:var(--bg1);color:var(--tx);font-size:var(--fz_m3)">
          <input type="password" placeholder="Contraseña (mín. 6 caracteres)" style="padding:1.5vh 2vw;border-radius:0.8vh;border:1px solid var(--bg5);background:var(--bg1);color:var(--tx);font-size:var(--fz_m3)">
          <button type="submit" class="btn_primary" style="width:100%;padding:1.5vh;font-size:var(--fz_m4)">
            <i class="fas fa-user-plus"></i> Crear Cuenta
          </button>
        </form>
        <p style="text-align:center;margin-top:2vh;color:var(--txe);font-size:var(--fz_m2)">
          ¿Ya tienes cuenta? <button data-modal="modalLogin" style="background:none;border:none;color:var(--mco);cursor:pointer;font-weight:600">Inicia sesión</button>
        </p>
      </div>
    </div>
  </div>

  <div id="modalLogin" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;font-family:var(--ff_P)">
        <div style="text-align:center;margin-bottom:2vh">
          <i class="fas fa-sign-in-alt" style="font-size:4rem;color:var(--mco)"></i>
        </div>
        <h2 style="color:var(--tx);margin-bottom:2vh;text-align:center">Iniciar Sesión</h2>
        <p style="color:var(--txe);text-align:center;margin-bottom:3vh">Accede a tus listas sincronizadas</p>
        <form style="display:flex;flex-direction:column;gap:2vh">
          <input type="email" placeholder="Email" style="padding:1.5vh 2vw;border-radius:0.8vh;border:1px solid var(--bg5);background:var(--bg1);color:var(--tx);font-size:var(--fz_m3)">
          <input type="password" placeholder="Contraseña" style="padding:1.5vh 2vw;border-radius:0.8vh;border:1px solid var(--bg5);background:var(--bg1);color:var(--tx);font-size:var(--fz_m3)">
          <button type="submit" class="btn_primary" style="width:100%;padding:1.5vh;font-size:var(--fz_m4)">
            <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
          </button>
        </form>
        <p style="text-align:center;margin-top:2vh;color:var(--txe);font-size:var(--fz_m2)">
          ¿No tienes cuenta? <button data-modal="modalRegister" style="background:none;border:none;color:var(--mco);cursor:pointer;font-weight:600">Regístrate gratis</button>
        </p>
      </div>
    </div>
  </div>

  <div id="modalFeatures" class="wiModal">
    <div class="modalBody" style="background:var(--wb);max-width:900px">
      <button class="modalX"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;font-family:var(--ff_P)">
        <h2 style="color:var(--tx);margin-bottom:3vh;text-align:center">
          <i class="fas fa-list" style="color:var(--mco)"></i> Todas las Características
        </h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2vh">
          <div style="background:var(--bg1);padding:2vh;border-radius:12px">
            <h4 style="color:var(--mco);margin-bottom:1vh"><i class="fas fa-video"></i> Videos</h4>
            <ul style="font-size:var(--fz_m2);color:var(--tx);line-height:1.8">
              <li>MP4, WebM, OGG</li>
              <li>Velocidad ajustable</li>
              <li>Picture in Picture</li>
              <li>Pantalla completa</li>
            </ul>
          </div>
          <div style="background:var(--bg1);padding:2vh;border-radius:12px">
            <h4 style="color:var(--mco);margin-bottom:1vh"><i class="fas fa-music"></i> Audios</h4>
            <ul style="font-size:var(--fz_m2);color:var(--tx);line-height:1.8">
              <li>MP3, WAV, OGG, M4A</li>
              <li>Ondas en tiempo real</li>
              <li>Lista de reproducción</li>
              <li>Modo aleatorio</li>
            </ul>
          </div>
          <div style="background:var(--bg1);padding:2vh;border-radius:12px">
            <h4 style="color:var(--mco);margin-bottom:1vh"><i class="fas fa-images"></i> Imágenes</h4>
            <ul style="font-size:var(--fz_m2);color:var(--tx);line-height:1.8">
              <li>JPG, PNG, GIF, WebP, SVG</li>
              <li>Zoom con scroll</li>
              <li>Slideshow automático</li>
              <li>Galería de miniaturas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const init = () => {
  // Abrir modales
  $('[data-modal]').on('click', function() {
    const modalId = $(this).data('modal');
    cerrarModal('modalRegister');
    cerrarModal('modalLogin');
    abrirModal(modalId);
  });

  // Cerrar modales
  $('.modalX').on('click', function() {
    $(this).closest('.wiModal').attr('id', (i, id) => (cerrarModal(id), id));
  });

  // Animación de números
  const animarNumeros = () => {
    $('.stat_number').each(function() {
      const $this = $(this);
      const objetivo = parseInt($this.data('count'));
      const duracion = 2000;
      const pasos = 60;
      const incremento = objetivo / pasos;
      let actual = 0;
      
      const temporizador = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          $this.text(objetivo.toLocaleString());
          clearInterval(temporizador);
        } else {
          $this.text(Math.floor(actual).toLocaleString());
        }
      }, duracion / pasos);
    });
  };

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        animarNumeros();
        observador.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const seccionStats = document.querySelector('.social_proof');
  if (seccionStats) observador.observe(seccionStats);

  console.log(`✅ Descubre ${app} ${version} cargado - Marketing multimedia activado`);
};

export const cleanup = () => {
  $('[data-modal], .modalX').off();
  console.log('🧹 Descubre limpiado');
};