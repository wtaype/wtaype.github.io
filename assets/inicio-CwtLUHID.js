import{$ as c,d as l,S as v,e as d,y as u}from"./main-D2LqAa63.js";const f=["Desarrollador Full Stack","Ingeniero de Sistemas","Creador de Soluciones"],m=[[6,"Años de Experiencia"],[60,"Proyectos Entregados"],[30,"Tecnologías"]],_=[["React","fab fa-react"],["JavaScript","fab fa-js"],["Node.js","fab fa-node"],["Firebase","fas fa-fire"]],h=["Desarrollo Full Stack","Optimización de Rendimiento","UI/UX Intuitivo","Soluciones Escalables"],b=[[u(),"Creando proyectos innovadores con tecnologías modernas"],["2025","Graduado de Ingeniería de Sistemas · +40 proyectos completados"],["2021","Universidad San Ignacio de Loyola — Ingeniería Empresarial"],["2017","Inicio del camino en la programación"]],y=[{titulo:"Lovewi — Mensajes de Amor",img:"https://lovewi.web.app/poster.webp",descripcion:"Crea mensajes de amor únicos y personalizados para San Valentín y fechas especiales",url:"https://lovewi.web.app/",tags:["Canvas","JavaScript","CSS3"]},{titulo:"Love Eye — Cuida tus Ojitos",img:"https://loveye.web.app/poster.webp",descripcion:"Guía completa para el cuidado de la visión. Prevención, diagnóstico y ejercicios",url:"https://loveye.web.app/",tags:["jQuery","JS","CSS3"]},{titulo:"WiiHope — Confía en Dios",img:"https://wiihope.web.app/poster.webp",descripcion:"Plataforma cristiana para orar, leer frases bíblicas y escuchar la Biblia en audio",url:"https://wiihope.web.app/",tags:["Web","jQuery","HTML"]}],g=[{icon:"fas fa-globe",titulo:"Aplicaciones Web",desc:"SPAs modernas con React, Vite y Firebase. Rápidas, accesibles y con diseño premium."},{icon:"fas fa-mobile-alt",titulo:"Apps Responsivas",desc:"Interfaces que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla."},{icon:"fas fa-database",titulo:"Backend & APIs",desc:"Arquitecturas con Node.js, Firebase y REST APIs escalables para proyectos en crecimiento."},{icon:"fas fa-paint-brush",titulo:"UI/UX Profesional",desc:"Diseños intuitivos y atractivos que convierten visitantes en usuarios comprometidos."},{icon:"fas fa-bolt",titulo:"Optimización Web",desc:"Auditorías Lighthouse, lazy loading y técnicas avanzadas para máxima velocidad."},{icon:"fas fa-graduation-cap",titulo:"Plataformas Edu",desc:"Sistemas de aprendizaje interactivos como TypingWii, con gestión de alumnos y progreso."}],S=[["React","fab fa-react","#61DAFB"],["JavaScript","fab fa-js-square","#F7DF1E"],["Node.js","fab fa-node-js","#68A063"],["Firebase","fas fa-fire","#FFA611"],["HTML5","fab fa-html5","#E34F26"],["CSS3","fab fa-css3-alt","#1572B6"],["Git","fab fa-git-alt","#F05032"],["GitHub","fab fa-github","#6e40c9"]];let r=null,o=[];const j=()=>`
<div class="inicio_container">

  <!-- ★ HERO ─────────────────────────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero_content">
      <div class="hero_saludo">
        <span class="saludo_texto">${v()} Tigre!</span>
        <span class="saludo_emoji">👋</span>
      </div>
      <h1 class="hero_title">Soy <span class="gradient_text">Wilder Taype</span></h1>
      <div class="hero_roles">
        ${f.map((a,i)=>`<span class="role${i?"":" active"}">${a}</span>`).join("")}
      </div>
      <p class="hero_subtitle">
        Transformo ideas en experiencias digitales excepcionales.
        Especializado en construir aplicaciones web rápidas, intuitivas y escalables.
      </p>
      <div class="hero_stats">
        ${m.map(([a,i])=>`
        <div class="stat_card">
          <div class="stat_number" data-target="${a}">0</div>
          <div class="stat_label">${i}</div>
        </div>`).join("")}
      </div>
      <div class="hero_actions">
        <a href="/proyectos" class="btn_primary"><i class="fas fa-rocket"></i><span>Ver Proyectos</span></a>
        <a href="/contacto"  class="btn_secondary"><i class="fas fa-envelope"></i><span>Contactar</span></a>
      </div>
    </div>

    <div class="hero_visual">
      <div class="profile_container">
        <div class="profile_ring"></div>
        <div class="profile_ring ring2"></div>
        <span class="profile_img"></span>
        <div class="profile_badge"><i class="fas fa-circle"></i><span>Disponible</span></div>
      </div>
      ${_.map(([a,i],s)=>`<div class="floating_tech tech${s+1}" ${d(a)}><i class="${i}"></i></div>`).join("")}
    </div>
  </section>

  <!-- ★ ACERCA DE MÍ ──────────────────────────────────────────────────────── -->
  <section class="about">
    <div class="section_header">
      <h2 class="section_title">Acerca de Mí</h2>
      <div class="section_line"></div>
    </div>
    <div class="about_grid">

      <div class="about_card card_fortalezas">
        <div class="card_icon"><i class="fas fa-brain"></i></div>
        <h3>Mis Fortalezas</h3>
        <ul class="fortalezas_list">
          ${h.map(a=>`<li><i class="fas fa-check-circle"></i>${a}</li>`).join("")}
        </ul>
      </div>

      <div class="about_card card_timeline">
        <div class="card_icon"><i class="fas fa-route"></i></div>
        <h3>Mi Trayectoria</h3>
        <div class="timeline">
          ${b.map(([a,i])=>`
          <div class="timeline_item">
            <div class="timeline_dot"></div>
            <div class="timeline_content">
              <span class="timeline_year">${a}</span>
              <p>${i}</p>
            </div>
          </div>`).join("")}
        </div>
      </div>

      <div class="about_card card_mision">
        <div class="card_icon"><i class="fas fa-rocket"></i></div>
        <h3>Mi Misión</h3>
        <p class="mision_text">
          Crear aplicaciones web que no solo cumplan los requisitos técnicos, sino que
          superen las expectativas en velocidad, usabilidad y experiencia de usuario.
          Cada proyecto es una oportunidad para innovar, aprender y dejar huella.
        </p>
      </div>

    </div>
  </section>

  <!-- ★ PROYECTOS DESTACADOS ──────────────────────────────────────────────── -->
  <section class="inicio_destacados">
    <div class="section_header">
      <h2 class="section_title">Proyectos Destacados</h2>
      <div class="section_line"></div>
      <p class="section_desc">Una selección de los trabajos que mejor representan mi manera de crear</p>
      <a href="/proyectos" class="ver_todos"><span>Ver todos</span><i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="destacados_grid" id="inicioDestacados">
      ${[1,2,3].map(()=>'<div class="skeleton_card"><div class="skeleton_img shimmer"></div><div class="skeleton_text shimmer"></div><div class="skeleton_text short shimmer"></div></div>').join("")}
    </div>
  </section>

  <!-- ★ SERVICIOS ─────────────────────────────────────────────────────────── -->
  <section class="servicios">
    <div class="section_header">
      <h2 class="section_title">¿Qué puedo hacer por ti?</h2>
      <div class="section_line"></div>
      <p class="section_desc">Soluciones completas desde la idea hasta el despliegue en producción</p>
    </div>
    <div class="servicios_grid">
      ${g.map((a,i)=>`
      <div class="servicio_card" style="animation-delay:${i*.08}s">
        <div class="servicio_icon"><i class="${a.icon}"></i></div>
        <h3>${a.titulo}</h3>
        <p>${a.desc}</p>
      </div>`).join("")}
    </div>
  </section>

  <!-- ★ TECH STACK ────────────────────────────────────────────────────────── -->
  <section class="stack_section">
    <div class="section_header">
      <h2 class="section_title">Mi Stack Tecnológico</h2>
      <div class="section_line"></div>
    </div>
    <div class="stack_grid">
      ${S.map(([a,i,s])=>`
      <div class="stack_pill" ${d(a)} style="--pill-color:${s}">
        <i class="${i}" style="color:${s}"></i>
        <span>${a}</span>
      </div>`).join("")}
    </div>
  </section>

  <!-- ★ CTA FINAL ─────────────────────────────────────────────────────────── -->
  <section class="cta_section">
    <div class="cta_content">
      <div class="cta_icon"><i class="fas fa-handshake"></i></div>
      <h2>¿Tienes un proyecto en mente?</h2>
      <p>Estoy listo para convertir tu visión en realidad. Hablemos sobre cómo puedo ayudarte.</p>
      <div class="cta_actions">
        <a href="/contacto" class="btn_primary"><i class="fas fa-paper-plane"></i><span>Empezar ahora</span></a>
        <a href="/proyectos" class="btn_secondary"><i class="fas fa-folder-open"></i><span>Ver portafolio</span></a>
      </div>
    </div>
  </section>

</div>`,C=()=>{let a=0;const i=c(".hero_roles .role");r=setInterval(()=>{i.eq(a).removeClass("active"),a=(a+1)%i.length,i.eq(a).addClass("active")},3e3),o.push(l(".hero_stats",()=>{c(".stat_number").each(function(){const s=c(this),e=+s.data("target"),n=e/50;let t=0;const p=setInterval(()=>{t=Math.min(t+n,e),s.text(t<e?Math.floor(t):`${e}+`),t>=e&&clearInterval(p)},30)})})),o.push(l(".about_card",(s,e)=>setTimeout(()=>c(s).addClass("visible"),e*150))),setTimeout(()=>{c("#inicioDestacados").html(y.map((s,e)=>`
      <a href="${s.url}" target="_blank" rel="noopener" class="proyecto_card dest_card" style="animation-delay:${e*.1}s">
        <div class="project_img">
          <img src="${s.img}" alt="${s.titulo}" loading="lazy">
          <div class="project_overlay"><i class="fas fa-external-link-alt"></i></div>
        </div>
        <div class="project_info">
          <h3 class="project_title">${s.titulo}</h3>
          <p class="project_desc">${s.descripcion}</p>
          <div class="project_tags">${s.tags.slice(0,3).map(n=>`<span class="tag">${n}</span>`).join("")}</div>
        </div>
      </a>`).join("")),setTimeout(()=>c(".dest_card").addClass("visible"),50)},600),o.push(l(".servicio_card",(s,e)=>setTimeout(()=>c(s).addClass("visible"),e*100))),o.push(l(".stack_pill",(s,e)=>setTimeout(()=>c(s).addClass("visible"),e*60))),o.push(l(".cta_section",s=>c(s).addClass("visible")))},T=()=>{clearInterval(r),r=null,o.forEach(a=>a?.disconnect?.()),o=[]};export{T as cleanup,C as init,j as render};
