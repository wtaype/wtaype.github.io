import{j as a}from"./vendor-gzd0YkcT.js";import{S as n,b as t}from"./main-VqqcHQ5F.js";import"./main-CBdQb9Ds.js";const _=()=>{a("#inicio").html(`
    <div class="inicio_container">
      <!-- HERO SECTION -->
      <section class="hero">
        <div class="hero_content">
          <div class="hero_saludo">
            <span class="saludo_texto">${n()} Tigre!</span>
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
              <div class="stat_number" data-target="6">0</div>
              <div class="stat_label">Años Experiencia</div>
            </div>
            <div class="stat_card">
              <div class="stat_number" data-target="60">0</div>
              <div class="stat_label">Proyectos</div>
            </div>
            <div class="stat_card">
              <div class="stat_number" data-target="30">0</div>
              <div class="stat_label">Tecnologías</div>
            </div>
          </div>
          <div class="hero_actions">
            <a href="#proyectos" class="btn_primary">
              <i class="fas fa-rocket"></i>
              <span>Ver Proyectos</span>
            </a>
            <a href="#contacto" class="btn_secondary">
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
          <div class="floating_tech tech1" title="React">
            <i class="fab fa-react"></i>
          </div>
          <div class="floating_tech tech2" title="JavaScript">
            <i class="fab fa-js"></i>
          </div>
          <div class="floating_tech tech3" title="Node.js">
            <i class="fab fa-node"></i>
          </div>
          <div class="floating_tech tech4" title="Firebase">
            <i class="fas fa-fire"></i>
          </div>
        </div>
      </section>

      <!-- ACERCA DE MI -->
      <section class="about">
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
                  <span class="timeline_year">2026</span>
                  <p>Creando proyectos innovadores con tecnologías modernas</p>
                </div>
              </div>
              <div class="timeline_item">
                <div class="timeline_dot"></div>
                <div class="timeline_content">
                  <span class="timeline_year">2025</span>
                  <p>Graduado de Ingeniería de Sistemas | +40 proyectos completados</p>
                </div>
              </div>
              <div class="timeline_item">
                <div class="timeline_dot"></div>
                <div class="timeline_content">
                  <span class="timeline_year">2021</span>
                  <p>Universidad San Ignacio de Loyola - Ingeniería Empresarial</p>
                </div>
              </div>
              <div class="timeline_item">
                <div class="timeline_dot"></div>
                <div class="timeline_content">
                  <span class="timeline_year">2017</span>
                  <p>Inicio del interés por la programación</p>
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
    </div>
  `);const e=a(".hero_roles .role");let l=0;setInterval(()=>{e.removeClass("active"),l=(l+1)%e.length,e.eq(l).addClass("active")},3e3),t(".hero_stats",()=>{a(".stat_number").each(function(){const i=a(this),s=parseInt(i.data("target"));let c=0;const o=s/50,d=setInterval(()=>{c+=o,c>=s?(i.text(s+"+"),clearInterval(d)):i.text(Math.floor(c))},30)})}),t(".about_card",()=>{a(".about_card").each((i,s)=>{setTimeout(()=>a(s).addClass("visible"),i*150)})}),console.log("✅ Inicio completado")};export{_ as inicio};
