import{$ as i,d as v}from"./main-B7WXqboh.js";const s=[{id:1,nombre:"HTML5",porcentaje:99,categoria:"frontend",icono:"html5/html5-original.svg",color:"#E34F26",experiencia:"5 años",proyectos:50},{id:2,nombre:"CSS3",porcentaje:99,categoria:"frontend",icono:"css3/css3-original.svg",color:"#1572B6",experiencia:"5 años",proyectos:50},{id:4,nombre:"jQuery",porcentaje:98,categoria:"frontend",icono:"jquery/jquery-original.svg",color:"#0769AD",experiencia:"4 años",proyectos:40},{id:3,nombre:"JavaScript",porcentaje:96,categoria:"frontend",icono:"javascript/javascript-original.svg",color:"#F7DF1E",experiencia:"4 años",proyectos:45},{id:13,nombre:"Firebase",porcentaje:95,categoria:"backend",icono:"firebase/firebase-original.svg",color:"#FFCA28",experiencia:"3 años",proyectos:28},{id:10,nombre:"Node.js",porcentaje:90,categoria:"backend",icono:"nodejs/nodejs-original.svg",color:"#339933",experiencia:"3 años",proyectos:22},{id:15,nombre:"Git",porcentaje:95,categoria:"tools",icono:"git/git-original.svg",color:"#F05032",experiencia:"4 años",proyectos:50},{id:18,nombre:"Flutter",porcentaje:95,categoria:"mobile",icono:"flutter/flutter-original.svg",color:"#02569B",experiencia:"2 años",proyectos:10},{id:16,nombre:"GitHub",porcentaje:96,categoria:"tools",icono:"github/github-original.svg",color:"#181717",experiencia:"4 años",proyectos:50},{id:17,nombre:"VS Code",porcentaje:98,categoria:"tools",icono:"vscode/vscode-original.svg",color:"#007ACC",experiencia:"5 años",proyectos:50},{id:20,nombre:"Kotlin",porcentaje:85,categoria:"mobile",icono:"kotlin/kotlin-original.svg",color:"#7F52FF",experiencia:"2 años",proyectos:10},{id:5,nombre:"React",porcentaje:80,categoria:"frontend",icono:"react/react-original.svg",color:"#61DAFB",experiencia:"3 años",proyectos:25},{id:6,nombre:"Vue.js",porcentaje:60,categoria:"frontend",icono:"vuejs/vuejs-original.svg",color:"#4FC08D",experiencia:"2 años",proyectos:15},{id:7,nombre:"Angular",porcentaje:50,categoria:"frontend",icono:"angular/angular-original.svg",color:"#DD0031",experiencia:"3 años",proyectos:18},{id:8,nombre:"Tailwind CSS",porcentaje:92,categoria:"frontend",icono:"tailwindcss/tailwindcss-original.svg",color:"#06B6D4",experiencia:"2 años",proyectos:20},{id:9,nombre:"Bootstrap",porcentaje:85,categoria:"frontend",icono:"bootstrap/bootstrap-original.svg",color:"#7952B3",experiencia:"4 años",proyectos:35},{id:11,nombre:"PHP",porcentaje:82,categoria:"backend",icono:"php/php-original.svg",color:"#777BB4",experiencia:"3 años",proyectos:20},{id:12,nombre:"Python",porcentaje:75,categoria:"backend",icono:"python/python-original.svg",color:"#3776AB",experiencia:"2 años",proyectos:12},{id:14,nombre:"MySQL",porcentaje:85,categoria:"backend",icono:"mysql/mysql-original.svg",color:"#4479A1",experiencia:"4 años",proyectos:25},{id:19,nombre:"Android Studio",porcentaje:85,categoria:"mobile",icono:"androidstudio/androidstudio-original.svg",color:"#3DDC84",experiencia:"2 años",proyectos:12},{id:21,nombre:"Photoshop",porcentaje:95,categoria:"design",icono:"photoshop/photoshop-original.svg",color:"#31A8FF",experiencia:"5 años",proyectos:40},{id:22,nombre:"Premiere Pro",porcentaje:90,categoria:"design",icono:"premierepro/premierepro-original.svg",color:"#9999FF",experiencia:"3 años",proyectos:20},{id:23,nombre:"Canva",porcentaje:96,categoria:"design",icono:"canva/canva-original.svg",color:"#00C4CC",experiencia:"4 años",proyectos:45},{id:24,nombre:"WordPress",porcentaje:90,categoria:"cms",icono:"wordpress/wordpress-original.svg",color:"#21759B",experiencia:"4 años",proyectos:30}],f=[{nombre:"JavaScript",icono:"fab fa-js",color:"#F7DF1E"},{nombre:"jQuery",icono:"fas fa-dollar-sign",color:"#0769AD"},{nombre:"Node.js",icono:"fab fa-node",color:"#339933"},{nombre:"GitHub",icono:"fab fa-github",color:"#181717"},{nombre:"Railway",icono:"fas fa-train",color:"#0B0D0E"},{nombre:"Blogger",icono:"fab fa-blogger",color:"#FF5722"},{nombre:"Git",icono:"fab fa-git-alt",color:"#F05032"},{nombre:"Vite",icono:"fas fa-bolt",color:"#646CFF"},{nombre:"Firebase",icono:"fas fa-fire",color:"#FFCA28"},{nombre:"HTML5",icono:"fab fa-html5",color:"#E34F26"},{nombre:"CSS3",icono:"fab fa-css3-alt",color:"#1572B6"},{nombre:"VS Code",icono:"fas fa-code",color:"#007ACC"}],m=[["all","fas fa-layer-group","Todas"],["frontend","fab fa-html5","Frontend"],["backend","fas fa-server","Backend"],["mobile","fas fa-mobile-alt","Mobile"],["tools","fas fa-tools","Herramientas"],["design","fas fa-palette","Diseño"],["cms","fab fa-wordpress","CMS"]],_=[{ico:"fas fa-laptop-code",titulo:"Frontend Development",num:"+70",label:"Proyectos completados"},{ico:"fas fa-database",titulo:"Backend & Databases",num:"+20",label:"Proyectos completados"},{ico:"fas fa-mobile-screen",titulo:"Mobile Apps",num:"+3",label:"Proyectos completados"},{ico:"fas fa-paintbrush",titulo:"Diseño & Creatividad",num:"+30",label:"Proyectos completados"}],g=s.length,h=Math.round(s.reduce((o,a)=>o+a.porcentaje,0)/g),u=new Set(s.map(o=>o.categoria)).size,y="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";let t=[];const k=()=>`
<div class="skills_container">

  <!-- ★ HERO ─────────────────────────────────────────────────────────────── -->
  <section class="skills_hero">
    <div class="hero_content">
      <h1 class="hero_title">Mis <span class="gradient_text">Habilidades</span></h1>
      <p class="hero_subtitle">Tecnologías y herramientas que domino para crear soluciones innovadoras. Cada habilidad representa horas de práctica, proyectos reales y aprendizaje continuo.</p>
      <div class="hero_stats_row">
        <div class="stat_hero"><i class="fas fa-code"></i><div class="stat_info"><span class="stat_number">${g}</span><span class="stat_label">Tecnologías</span></div></div>
        <div class="stat_hero"><i class="fas fa-chart-line"></i><div class="stat_info"><span class="stat_number">${h}%</span><span class="stat_label">Promedio</span></div></div>
        <div class="stat_hero"><i class="fas fa-layer-group"></i><div class="stat_info"><span class="stat_number">${u}</span><span class="stat_label">Categorías</span></div></div>
      </div>
    </div>
  </section>

  <!-- ★ FILTROS ───────────────────────────────────────────────────────────── -->
  <section class="skills_filtros">
    <div class="filtros_wrapper">
      ${m.map(([o,a,e])=>`<button class="categoria_btn${o==="all"?" active":""}" data-categoria="${o}"><i class="${a}"></i><span>${e}</span></button>`).join("")}
    </div>
  </section>

  <!-- ★ GRID ──────────────────────────────────────────────────────────────── -->
  <section class="skills_grid_section">
    <div class="skills_grid" id="skillsGrid"></div>
  </section>

  <!-- ★ EXPERIENCIA ───────────────────────────────────────────────────────── -->
  <section class="experiencia_section">
    <h2 class="section_title">Experiencia en Proyectos</h2>
    <div class="experiencia_grid">
      ${_.map(o=>`<div class="experiencia_card"><i class="${o.ico}"></i><h3>${o.titulo}</h3><p class="exp_numero">${o.num}</p><p class="exp_label">${o.label}</p></div>`).join("")}
    </div>
  </section>

  <!-- ★ TECH ICONS ─────────────────────────────────────────────────────────── -->
  <section class="tech_principales">
    <h2 class="section_title">Tecnologías Principales</h2>
    <div class="tech_grid">
      ${f.map(o=>`<div class="tech_card" style="--tech-color:${o.color}"><i class="${o.icono}"></i><span>${o.nombre}</span></div>`).join("")}
    </div>
  </section>

</div>`,C=()=>{p(s),i(document).on("click.skills",".categoria_btn",function(){const o=i(this).data("categoria");i(".categoria_btn").removeClass("active"),i(this).addClass("active");const a=o==="all"?s:s.filter(e=>e.categoria===o);p(a)})},$=()=>{i(document).off(".skills"),t.forEach(o=>o?.disconnect?.()),t=[]},p=o=>{const a=i("#skillsGrid").empty();o.forEach((e,c)=>{a.append(`
      <div class="skill_card" data-skill="${e.id}" data-categoria="${e.categoria}" style="animation-delay:${c*.05}s">
        <div class="skill_header">
          <img src="${y}${e.icono}" alt="${e.nombre}" class="skill_icon" loading="lazy">
        </div>
        <div class="skill_body">
          <h3 class="skill_nombre">${e.nombre}</h3>
          <div class="skill_progress_container">
            <svg class="skill_circle" viewBox="0 0 100 100">
              <circle class="circle_bg" cx="50" cy="50" r="45"></circle>
              <circle class="circle_progress" cx="50" cy="50" r="45" data-porcentaje="${e.porcentaje}" style="stroke:${e.color}"></circle>
              <text class="skill_porcentaje" x="50" y="50" text-anchor="middle" dy="7"><tspan class="porcentaje_numero">0</tspan>%</text>
            </svg>
          </div>
          <div class="skill_info">
            <div class="info_row"><i class="fas fa-clock"></i><span>${e.experiencia}</span></div>
            <div class="info_row"><i class="fas fa-project-diagram"></i><span>${e.proyectos} proyectos</span></div>
          </div>
        </div>
      </div>`)}),j()},j=()=>{const o=v(".skills_grid",()=>{i(".skill_card").each(function(a){const e=i(this),c=e.find(".circle_progress"),l=e.find(".porcentaje_numero"),r=parseInt(c.data("porcentaje"));setTimeout(()=>{e.addClass("visible");const d=2*Math.PI*45;c.css("stroke-dashoffset",d-r/100*d);let n=0;const b=setInterval(()=>{n+=r/60,n>=r?(l.text(r),clearInterval(b)):l.text(Math.floor(n))},25)},a*50)})});t.push(o)};export{$ as cleanup,C as init,k as render};
