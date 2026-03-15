import{$ as o,b as n,S as v,c as p,y as _}from"./main-Cj2tq69v.js";const u=["Desarrollador Full Stack","Ingeniero de Sistemas","Creador de Soluciones"],f=[[6,"Años de Experiencia"],[60,"Proyectos Entregados"],[30,"Tecnologías"]],h=[["React","fab fa-react"],["JavaScript","fab fa-js"],["Node.js","fab fa-node"],["Firebase","fas fa-fire"]],m=["Desarrollo Full Stack","Optimización de Rendimiento","UI/UX Intuitivo","Soluciones Escalables"],b=[[_(),"Creando proyectos innovadores con tecnologías modernas"],["2025","Graduado de Ingeniería de Sistemas · +40 proyectos completados"],["2021","Universidad San Ignacio de Loyola — Ingeniería Empresarial"],["2017","Inicio del camino en la programación"]];let t=null,l=[];const $=()=>`
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
        ${u.map((a,s)=>`<span class="role${s?"":" active"}">${a}</span>`).join("")}
      </div>
      <p class="hero_subtitle">
        Transformo ideas en experiencias digitales excepcionales.
        Especializado en construir aplicaciones web rápidas, intuitivas y escalables.
      </p>
      <div class="hero_stats">
        ${f.map(([a,s])=>`
        <div class="stat_card">
          <div class="stat_number" data-target="${a}">0</div>
          <div class="stat_label">${s}</div>
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
      ${h.map(([a,s],e)=>`<div class="floating_tech tech${e+1}" ${p(a)}><i class="${s}"></i></div>`).join("")}
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
          ${m.map(a=>`<li><i class="fas fa-check-circle"></i>${a}</li>`).join("")}
        </ul>
      </div>

      <div class="about_card card_timeline">
        <div class="card_icon"><i class="fas fa-route"></i></div>
        <h3>Mi Trayectoria</h3>
        <div class="timeline">
          ${b.map(([a,s])=>`
          <div class="timeline_item">
            <div class="timeline_dot"></div>
            <div class="timeline_content">
              <span class="timeline_year">${a}</span>
              <p>${s}</p>
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

</div>`,y=()=>{let a=0;const s=o(".hero_roles .role");t=setInterval(()=>{s.eq(a).removeClass("active"),a=(a+1)%s.length,s.eq(a).addClass("active")},3e3),l.push(n(".hero_stats",()=>{o(".stat_number").each(function(){const e=o(this),i=+e.data("target"),r=i/50;let c=0;const d=setInterval(()=>{c=Math.min(c+r,i),e.text(c<i?Math.floor(c):`${i}+`),c>=i&&clearInterval(d)},30)})})),l.push(n(".about_card",(e,i)=>setTimeout(()=>o(e).addClass("visible"),i*150)))},S=()=>{clearInterval(t),t=null,l.forEach(a=>a?.disconnect?.()),l=[]};export{S as cleanup,y as init,$ as render};
