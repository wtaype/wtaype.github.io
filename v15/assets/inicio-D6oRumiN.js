import{j as i}from"./vendor-gzd0YkcT.js";import{S as r,b as o}from"./main-DOF7dJao.js";import"./main-D9U-esLl.js";const m=()=>{i("#inicio").html(`
    <div class="inicio_container">
      <!-- HERO SECTION -->
      <section class="hero">
        <div class="hero_content">
          <div class="hero_saludo">
            <span class="saludo_texto">${r()} Tigre!</span>
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

      <!-- PROYECTOS DESTACADOS -->
      <section class="featured_projects">
        <div class="section_header">
          <h2 class="section_title">Proyectos Destacados</h2>
          <div class="section_line"></div>
          <a href="#proyectos" class="ver_todos">
            Ver todos <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="projects_grid">
          <div class="project_card skeleton" data-project="1">
            <div class="skeleton_img shimmer"></div>
            <div class="skeleton_text shimmer"></div>
            <div class="skeleton_text short shimmer"></div>
          </div>
          <div class="project_card skeleton" data-project="2">
            <div class="skeleton_img shimmer"></div>
            <div class="skeleton_text shimmer"></div>
            <div class="skeleton_text short shimmer"></div>
          </div>
          <div class="project_card skeleton" data-project="3">
            <div class="skeleton_img shimmer"></div>
            <div class="skeleton_text shimmer"></div>
            <div class="skeleton_text short shimmer"></div>
          </div>
        </div>
      </section>
    </div>
  `);const t=i(".hero_roles .role");let c=0;setInterval(()=>{t.removeClass("active"),c=(c+1)%t.length,t.eq(c).addClass("active")},3e3),o(".hero_stats",()=>{i(".stat_number").each(function(){const a=i(this),e=parseInt(a.data("target"));let s=0;const l=e/50,d=setInterval(()=>{s+=l,s>=e?(a.text(e+"+"),clearInterval(d)):a.text(Math.floor(s))},30)})}),setTimeout(()=>{const a=[{id:1,titulo:"DSCTO - Calculadora Móvil",img:"https://i.postimg.cc/dq8nVhCx/Dscto.png",descripcion:"App para cálculos rápidos de descuentos y ajustes",url:"https://dscto.blogspot.com/",tags:["JavaScript","PWA","Firebase"]},{id:2,titulo:"CODEWIL - Optimizador de Código",img:"https://i.postimg.cc/CSQcPTYm/Codewil.png",descripcion:"Herramienta para optimizar y embellecer código",url:"https://codewil.blogspot.com/",tags:["React","Node.js","API"]},{id:3,titulo:"WICOLORS - Paleta de Colores",img:"https://i.postimg.cc/FhkDwWHm/Wiicolors.png",descripcion:"Generador inteligente de paletas de colores",url:"https://wicolors.blogspot.com/",tags:["Vue.js","Design","CSS"]}];i(".project_card").each(function(e){const s=a[e];i(this).removeClass("skeleton").html(`
        <a href="${s.url}" target="_blank" class="project_link">
          <div class="project_img">
            <img src="${s.img}" alt="${s.titulo}" loading="lazy">
            <div class="project_overlay"><i class="fas fa-external-link-alt"></i></div>
          </div>
          <div class="project_info">
            <h3 class="project_title">${s.titulo}</h3>
            <p class="project_desc">${s.descripcion}</p>
            <div class="project_tags">${s.tags.map(l=>`<span class="tag">${l}</span>`).join("")}</div>
          </div>
        </a>
      `)})},800),o(".about_card",()=>{i(".about_card").each((a,e)=>{setTimeout(()=>i(e).addClass("visible"),a*150)})}),console.log("✅ Inicio cargado")};export{m as inicio};
