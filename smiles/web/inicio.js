import './inicio.css';
import $ from 'jquery';

export const render = () => `
  <div class="inicio_container">
    <section class="hero">
      <div class="hero_content">
        <div class="hero_badge">
          <i class="fas fa-star"></i>
          <span>La #1 en Conversión de Video</span>
        </div>
        <h1 class="hero_title">
          Convierte Videos a MP3 en 
          <span class="gradient_text">Segundos</span>
        </h1>
        <p class="hero_subtitle">
          Rápido. Seguro. Ilimitado. Sin complicaciones.
        </p>
        <div class="hero_actions">
          <a href="/convertidor" class="btn_primary">
            <i class="fas fa-rocket"></i>
            <span>Convertir Ahora</span>
          </a>
          <button class="btn_secondary" id="btnDemo">
            <i class="fas fa-play"></i>
            <span>Ver Demo</span>
          </button>
        </div>
        <div class="hero_stats">
          <div class="stat_mini">
            <i class="fas fa-check"></i>
            <span>50K+ Conversiones</span>
          </div>
          <div class="stat_mini">
            <i class="fas fa-check"></i>
            <span>10K+ Usuarios</span>
          </div>
          <div class="stat_mini">
            <i class="fas fa-check"></i>
            <span>100% Gratis</span>
          </div>
        </div>
      </div>
      <div class="hero_visual">
        <div class="floating_card card_1">
          <div class="card_icon">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="card_text">
            <strong>3x</strong>
            <span>Más Rápido</span>
          </div>
        </div>
        <div class="floating_card card_2">
          <div class="card_icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div class="card_text">
            <strong>100%</strong>
            <span>Seguro</span>
          </div>
        </div>
        <div class="hero_circle"></div>
      </div>
    </section>

    <section class="features">
      <div class="feature_item">
        <div class="feature_icon">
          <i class="fas fa-bolt"></i>
        </div>
        <h3>Ultra Rápido</h3>
        <p>Conversión instantánea</p>
      </div>
      <div class="feature_item">
        <div class="feature_icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>Privado</h3>
        <p>Sin guardar archivos</p>
      </div>
      <div class="feature_item">
        <div class="feature_icon">
          <i class="fas fa-gem"></i>
        </div>
        <h3>Calidad Pro</h3>
        <p>Hasta 320 kbps</p>
      </div>
    </section>

    <section class="cta">
      <div class="cta_content">
        <h2>¿Listo para la mejor experiencia?</h2>
        <p>Únete a miles de usuarios que ya disfrutan de Wiimp3</p>
        <a href="/convertidor" class="cta_btn">
          <i class="fas fa-rocket"></i>
          <span>Comenzar Gratis</span>
        </a>
      </div>
    </section>
  </div>
`;

export const init = () => {
  $('#btnDemo').on('click', () => {
    window.location.href = '/convertidor';
  });

  console.log('✅ Inicio cargado');
};

export const cleanup = () => {
  $('#btnDemo').off();
  console.log('🧹 Inicio limpiado');
};