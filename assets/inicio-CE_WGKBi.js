import{j as s}from"./vendor-gzd0YkcT.js";import{w as o,S as n}from"./main-CklyeP-P.js";import"./main-N5LZZj1C.js";import"./firebase-xYuwcABI.js";const f=()=>`
  <div class="inicio_container">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero_content">
        <div class="hero_saludo">
          <span class="saludo_texto">${n()}</span>
          <span class="saludo_emoji">👋</span>
        </div>
        <h1 class="hero_title">
          Soy <span class="gradient_text">Wilder Taype</span>
        </h1>
        <div class="hero_roles">
          <span class="role active">Desarrollador Full Stack</span>
          <span class="role">Ingeniero de Sistemas</span>
          <span class="role">Creador de Soluciones</span>
        </div>
        <p class="hero_subtitle">
          Transformo ideas en experiencias digitales excepcionales. 
          Especializado en crear aplicaciones web rápidas, intuitivas y escalables.
        </p>
        <div class="hero_stats">
          <div class="stat_card">
            <div class="stat_number" data-target="5">0</div>
            <div class="stat_label">Años Experiencia</div>
          </div>
          <div class="stat_card">
            <div class="stat_number" data-target="50">0</div>
            <div class="stat_label">Proyectos</div>
          </div>
          <div class="stat_card">
            <div class="stat_number" data-target="25">0</div>
            <div class="stat_label">Tecnologías</div>
          </div>
        </div>
        <div class="hero_actions">
          <a href="/proyectos" class="btn_primary">
            <i class="fas fa-rocket"></i>
            <span>Ver Proyectos</span>
          </a>
          <a href="/contacto" class="btn_secondary">
            <i class="fas fa-envelope"></i>
            <span>Contactar</span>
          </a>
        </div>
      </div>
      <div class="hero_visual">
        <div class="profile_container">
          <div class="profile_ring"></div>
          <div class="profile_ring ring2"></div>
          <img src="https://i.postimg.cc/gJb8QnJb/Wilder-Taype-Foto1.webp" 
               alt="Wilder Taype" 
               class="profile_img"
               loading="lazy">
          <div class="profile_badge">
            <i class="fas fa-circle"></i>
            <span>Disponible</span>
          </div>
        </div>
        <div class="floating_tech tech1" data-tech="React">
          <i class="fab fa-react"></i>
        </div>
        <div class="floating_tech tech2" data-tech="JavaScript">
          <i class="fab fa-js"></i>
        </div>
        <div class="floating_tech tech3" data-tech="Node.js">
          <i class="fab fa-node"></i>
        </div>
        <div class="floating_tech tech4" data-tech="Firebase">
          <i class="fas fa-fire"></i>
        </div>
      </div>
    </section>

    <!-- ACERCA DE MI -->
    <section class="about" id="acerca">
      <div class="section_header">
        <h2 class="section_title">Acerca de Mí</h2>
        <div class="section_line"></div>
      </div>
      <div class="about_grid">
        <div class="about_card card_fortalezas">
          <div class="card_icon">
            <i class="fas fa-brain"></i>
          </div>
          <h3>Mis Fortalezas</h3>
          <ul class="fortalezas_list">
            <li><i class="fas fa-check-circle"></i>Desarrollo Full Stack</li>
            <li><i class="fas fa-check-circle"></i>Optimización de Rendimiento</li>
            <li><i class="fas fa-check-circle"></i>UI/UX Intuitivo</li>
            <li><i class="fas fa-check-circle"></i>Soluciones Escalables</li>
          </ul>
        </div>
        <div class="about_card card_timeline">
          <div class="card_icon">
            <i class="fas fa-route"></i>
          </div>
          <h3>Mi Trayectoria</h3>
          <div class="timeline">
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <span class="timeline_year">2024</span>
                <p>Ingeniero de Sistemas Senior</p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <span class="timeline_year">2022</span>
                <p>Desarrollador Full Stack</p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <span class="timeline_year">2020</span>
                <p>Inicio en Desarrollo Web</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about_card card_mision">
          <div class="card_icon">
            <i class="fas fa-rocket"></i>
          </div>
          <h3>Mi Misión</h3>
          <p class="mision_text">
            Crear aplicaciones web que no solo cumplan con los requisitos técnicos, 
            sino que superen las expectativas en velocidad, usabilidad y experiencia 
            del usuario. Cada proyecto es una oportunidad para innovar y aprender.
          </p>
        </div>
      </div>
    </section>

    <!-- PROYECTOS DESTACADOS -->
    <section class="featured_projects">
      <div class="section_header">
        <h2 class="section_title">Proyectos Destacados</h2>
        <div class="section_line"></div>
        <a href="/proyectos" class="ver_todos">
          Ver todos <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="projects_grid">
        <div class="project_card skeleton" data-project="1">
          <div class="skeleton_img"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text short"></div>
        </div>
        <div class="project_card skeleton" data-project="2">
          <div class="skeleton_img"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text short"></div>
        </div>
        <div class="project_card skeleton" data-project="3">
          <div class="skeleton_img"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text short"></div>
        </div>
      </div>
      <div class="tech_filter">
        <button class="filter_btn active" data-filter="all">
          <i class="fas fa-layer-group"></i> Todos
        </button>
        <button class="filter_btn" data-filter="web">
          <i class="fas fa-globe"></i> Web Apps
        </button>
        <button class="filter_btn" data-filter="mobile">
          <i class="fas fa-mobile-alt"></i> Mobile
        </button>
        <button class="filter_btn" data-filter="tools">
          <i class="fas fa-tools"></i> Herramientas
        </button>
      </div>
    </section>

    <!-- FRASE MOTIVACIONAL -->
    <section class="quote_section">
      <div class="quote_container">
        <i class="fas fa-quote-left quote_icon"></i>
        <p class="quote_text">El código limpio no se escribe siguiendo reglas. Se escribe con pasión.</p>
        <span class="quote_author">— Wilder Taype</span>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta_section">
      <div class="cta_content">
        <h2 class="cta_title">¿Tienes un proyecto en mente?</h2>
        <p class="cta_text">
          Trabajemos juntos para convertir tu idea en realidad. 
          Estoy disponible para nuevos proyectos y colaboraciones.
        </p>
        <a href="/contacto" class="cta_btn">
          <i class="fas fa-paper-plane"></i>
          <span>Iniciar Conversación</span>
        </a>
      </div>
      <div class="cta_stats">
        <div class="cta_stat">
          <i class="fas fa-clock"></i>
          <span>Respuesta en 24h</span>
        </div>
        <div class="cta_stat">
          <i class="fas fa-shield-alt"></i>
          <span>100% Confidencial</span>
        </div>
        <div class="cta_stat">
          <i class="fas fa-handshake"></i>
          <span>Compromiso Total</span>
        </div>
      </div>
    </section>
  </div>
`,h=()=>{const t=s(".hero_roles .role");let c=0;setInterval(()=>{t.removeClass("active"),c=(c+1)%t.length,t.eq(c).addClass("active")},3e3),o(".hero_stats",()=>{s(".stat_number").each(function(){const a=s(this),e=parseInt(a.data("target"));let i=0;const l=e/50,d=setInterval(()=>{i+=l,i>=e?(a.text(e+"+"),clearInterval(d)):a.text(Math.floor(i))},30)})}),setTimeout(()=>{const a=[{id:1,titulo:"DSCTO - Calculadora Móvil",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",descripcion:"App para cálculos rápidos de descuentos y ajustes",url:"https://dscto.blogspot.com/",tags:["JavaScript","PWA","Firebase"],categoria:"mobile"},{id:2,titulo:"CODEWIL - Optimizador de Código",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",descripcion:"Herramienta para optimizar y embellecer código",url:"https://codewil.blogspot.com/",tags:["React","Node.js","API"],categoria:"tools"},{id:3,titulo:"WICOLORS - Paleta de Colores",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",descripcion:"Generador inteligente de paletas de colores",url:"https://wicolors.blogspot.com/",tags:["Vue.js","Design","CSS"],categoria:"web"}];s(".project_card").each(function(e){const i=a[e];s(this).removeClass("skeleton").html(`
        <a href="${i.url}" target="_blank" class="project_link">
          <div class="project_img">
            <img src="${i.img}" alt="${i.titulo}" loading="lazy">
            <div class="project_overlay">
              <i class="fas fa-external-link-alt"></i>
            </div>
          </div>
          <div class="project_info">
            <h3 class="project_title">${i.titulo}</h3>
            <p class="project_desc">${i.descripcion}</p>
            <div class="project_tags">
              ${i.tags.map(l=>`<span class="tag">${l}</span>`).join("")}
            </div>
          </div>
        </a>
      `)})},800),s(".filter_btn").on("click",function(){const a=s(this).data("filter");s(".filter_btn").removeClass("active"),s(this).addClass("active"),a==="all"?s(".project_card").fadeIn(300):s(".project_card").each(function(){s(this).find(".project_link").data("categoria")===a?s(this).fadeIn(300):s(this).fadeOut(300)})}),o(".about_card",()=>{s(".about_card").each((a,e)=>{setTimeout(()=>s(e).addClass("visible"),a*150)})}),console.log("✅ Inicio cargado - Portafolio Profesional")},u=()=>{s(".filter_btn, .hero_actions a").off(),console.log("🧹 Inicio limpiado")};export{u as cleanup,h as init,f as render};
