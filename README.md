# 🚀 Wilder Taype — Portafolio Profesional

Bienvenidos a mi repositorio del portafolio personal. Esta es una plataforma web moderna de alto rendimiento y optimización SEO extrema, diseñada con una arquitectura híbrida de generación estática (SSG) y consumo asíncrono optimizado.

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)](#)

---

## 🌟 Características Principales

- **Arquitectura de Alto Rendimiento**: Puesta a punto con Astro para lograr tiempos de carga instantáneos y la máxima puntuación en Lighthouse.
- **Consumo Inteligente de Datos (REST API)**: Migración del cliente a peticiones HTTP nativas con la API REST de Firestore en áreas públicas, eliminando la carga inicial del pesado SDK de Firebase en el navegador.
- **Carga Diferida de Recursos (Lazy-loading)**: Uso de técnicas de hidratación selectiva y carga asíncrona de dependencias solo tras la interacción del usuario.
- **Caché SWR Avanzada**: Mecanismo de persistencia local (`localStorage`) que reduce a cero (0) las lecturas recurrentes de base de datos al recargar páginas (F5) o navegar entre rutas.
- **Diseño UI/UX Premium**: Interfaz responsive construida con Vanilla CSS, transiciones suaves, tipografías cuidadas y skeletons animados para una experiencia premium.

---

## 🛠️ Stack Tecnológico

- **Frontend**: Astro, TypeScript, HTML5 semantic markup, CSS3 nativo.
- **Bases de Datos & Backend**: Firebase Firestore (API REST y SDK dinámico).
- **Herramientas de Build & Deploy**: Vite, PNPM, Vercel / Firebase Hosting.

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura limpia y orientada a componentes:

```text
/
├── public/              # Recursos estáticos (imágenes, iconos, fuentes)
├── src/
│   ├── components/      # Componentes reutilizables (.astro)
│   ├── layouts/         # Plantillas de diseño base (.astro)
│   ├── lib/             # Lógica de negocio, Firebase y utilidades JS/TS
│   └── pages/           # Rutas del sitio (Index, Blog, Artículos)
├── package.json         # Dependencias y scripts de construcción
└── tsconfig.json        # Configuración de TypeScript
```

---

## ⚡ Comandos del Proyecto

Todos los comandos se ejecutan desde la terminal utilizando `pnpm`:

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala las dependencias del proyecto. |
| `pnpm dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `pnpm build` | Compila el sitio estático para producción en la carpeta `dist/`. |
| `pnpm preview` | Previsualiza localmente el build de producción antes del despliegue. |

---

## 📬 Contacto y Redes

Si quieres saber más sobre mis proyectos o charlar sobre desarrollo de software, puedes encontrarme en:

- **Sitio Web**: [wtaype.com](https://wtaype.com)
- **LinkedIn**: [Wilder Taype](https://www.linkedin.com/in/wildertaype/)
- **GitHub**: [@wtaype](https://github.com/wtaype)

Hecho con ❤️ por Wilder Taype.
