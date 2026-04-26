import{$ as o,d as n,S as v,e as r,y as u}from"./main-B7WXqboh.js";const f=["Desarrollador Full Stack","Ingeniero de Sistemas","Creador de Soluciones"],_=[[6,"Años de Experiencia"],[60,"Proyectos Entregados"],[30,"Tecnologías"]],m=[["JavaScript","fab fa-js"],["Node.js","fab fa-node"],["Firebase","fas fa-fire"],["React","fab fa-react"]],h=["Desarrollo Full Stack","Optimización de Rendimiento","UI/UX Intuitivo","Soluciones Escalables"],b=[[u(),"Creando proyectos innovadores con tecnologías modernas"],["2025","Graduado de Ingeniería de Sistemas · +40 proyectos completados"],["2021","Universidad San Ignacio de Loyola — Ingeniería Empresarial"],["2017","Inicio del camino en la programación"]],g=[{titulo:"Lovewi — Mensajes de Amor",img:"https://lovewi.web.app/poster.webp",descripcion:"Crea mensajes de amor únicos y personalizados para San Valentín y fechas especiales",url:"https://lovewi.web.app/",tags:["Canvas","JavaScript","CSS3"]},{titulo:"Love Eye — Cuida tus Ojitos",img:"https://loveye.web.app/poster.webp",descripcion:"Guía completa para el cuidado de la visión. Prevención, diagnóstico y ejercicios",url:"https://loveye.web.app/",tags:["jQuery","JS","CSS3"]},{titulo:"WiiHope — Confía en Dios",img:"https://wiihope.web.app/poster.webp",descripcion:"Plataforma cristiana para orar, leer frases bíblicas y escuchar la Biblia en audio",url:"https://wiihope.web.app/",tags:["Web","jQuery","HTML"]}],y=[{icon:"fas fa-globe",titulo:"Aplicaciones Web",desc:"SPAs modernas con React, Vite y Firebase. Rápidas, accesibles y con diseño premium."},{icon:"fas fa-mobile-alt",titulo:"Apps Responsivas",desc:"Interfaces que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla."},{icon:"fas fa-database",titulo:"Backend & APIs",desc:"Arquitecturas con Node.js, Firebase y REST APIs escalables para proyectos en crecimiento."},{icon:"fas fa-paint-brush",titulo:"UI/UX Profesional",desc:"Diseños intuitivos y atractivos que convierten visitantes en usuarios comprometidos."},{icon:"fas fa-bolt",titulo:"Optimización Web",desc:"Auditorías Lighthouse, lazy loading y técnicas avanzadas para máxima velocidad."},{icon:"fas fa-graduation-cap",titulo:"Plataformas Edu",desc:"Sistemas de aprendizaje interactivos como TypingWii, con gestión de alumnos y progreso."}],S=[["JavaScript","fab fa-js-square","#F7DF1E"],["Node.js","fab fa-node-js","#68A063"],["Firebase","fas fa-fire","#FFA611"],["Supabase","fas fa-database","#3ECF8E"],["React","fab fa-react","#61DAFB"],["Next.js","fas fa-bolt","#000000"],["Vite","fas fa-bolt","#646CFF"],["Vercel","fas fa-bolt","#000000"],["Wordpress","fab fa-wordpress","#21759b"],["HTML5","fab fa-html5","#E34F26"],["CSS3","fab fa-css3-alt","#1572B6"],["Git","fab fa-git-alt","#F05032"],["GitHub","fab fa-github","#6e40c9"]];let d=null,t=[];const C=()=>`
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
        ${_.map(([a,i])=>`
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
      ${m.map(([a,i],s)=>`<div class="floating_tech tech${s+1}" ${r(a)}><i class="${i}"></i></div>`).join("")}
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
  <section class="pdin_section">
    <div class="section_header">
      <h2 class="section_title">Proyectos Destacados</h2>
      <div class="section_line"></div>
      <p class="section_desc">Una selección de los trabajos que mejor representan mi manera de crear</p>
      <a href="/proyectos" class="ver_todos"><span>Ver todos</span><i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="pdin_grid" id="pdin_lista">
      ${[1,2,3].map(()=>'<div class="pdin_skeleton"><div class="pdin_skeleton_img shimmer"></div><div class="pdin_skeleton_text shimmer"></div><div class="pdin_skeleton_text short shimmer"></div></div>').join("")}
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
      ${y.map((a,i)=>`
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
      <div class="stack_pill" ${r(a)} style="--pill-color:${s}">
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

</div>`,T=()=>{let a=0;const i=o(".hero_roles .role");d=setInterval(()=>{i.eq(a).removeClass("active"),a=(a+1)%i.length,i.eq(a).addClass("active")},3e3),t.push(n(".hero_stats",()=>{o(".stat_number").each(function(){const s=o(this),e=+s.data("target"),l=e/50;let c=0;const p=setInterval(()=>{c=Math.min(c+l,e),s.text(c<e?Math.floor(c):`${e}+`),c>=e&&clearInterval(p)},30)})})),t.push(n(".about_card",(s,e)=>setTimeout(()=>o(s).addClass("visible"),e*150))),setTimeout(()=>{o("#pdin_lista").html(g.map((s,e)=>`
      <a href="${s.url}" target="_blank" rel="noopener" class="pdin_card pdin_item" style="animation-delay:${e*.1}s">
        <div class="pdin_img_box">
          <img src="${s.img}" alt="${s.titulo}" loading="lazy">
          <div class="pdin_overlay"><i class="fas fa-external-link-alt"></i></div>
        </div>
        <div class="pdin_info">
          <h3 class="pdin_title">${s.titulo}</h3>
          <p class="pdin_desc">${s.descripcion}</p>
          <div class="pdin_tags">${s.tags.slice(0,3).map(l=>`<span class="pdin_tag">${l}</span>`).join("")}</div>
        </div>
      </a>`).join("")),setTimeout(()=>o(".pdin_item").addClass("visible"),50)},600),t.push(n(".servicio_card",(s,e)=>setTimeout(()=>o(s).addClass("visible"),e*100))),t.push(n(".stack_pill",(s,e)=>setTimeout(()=>o(s).addClass("visible"),e*60))),t.push(n(".cta_section",s=>o(s).addClass("visible")))},j=()=>{clearInterval(d),d=null,t.forEach(a=>a?.disconnect?.()),t=[]};export{j as cleanup,T as init,C as render};
