import { app, descri } from '../wii.js';

export const seo = {
  inicio: {
    title: 'Wilder Taype Portafolio - Desarrollador Web Full Stack Pro',
    description: 'Wilder Taype, esto es mi portafolio, Soy desarrollador Full Stack experto en JavaScript, Firebase y webs modernas. +60 proyectos reales y 6 años de experiencia.',
    path: '/',
    keywords: [
      'javascript',
      'firebase',
      'full stack',
      'wilder taype',
      'portafolio web'
    ],
    audience: ['reclutadores', 'clientes de software', 'desarrolladores', 'estudiantes'],
    intent: 'conocer la experiencia y contratar a Wilder Taype'
  },
  proyectos: {
    title: 'Proyectos de Desarrollo Web de Wilder Taype Pro',
    description: 'Explora el portafolio de proyectos reales de Wilder Taype: aplicaciones modernas de JavaScript y bases de datos Firebase listas para usar en sus webs.',
    path: '/proyectos',
    keywords: [
      'proyectos web',
      'javascript',
      'firebase',
      'portafolio proyectos',
      'desarrollo de apps'
    ],
    audience: ['reclutadores', 'clientes interesados en proyectos', 'desarrolladores'],
    intent: 'ver y analizar el portafolio de proyectos de Wilder'
  },
  skills: {
    title: 'Stack Tecnológico y Habilidades de Wilder Taype',
    description: 'Conoce el stack de tecnologías y herramientas que Wilder Taype domina para construir aplicaciones web y Full-Stack escalables y veloces en producción.',
    path: '/skills',
    keywords: [
      'habilidades programacion',
      'react js',
      'node js',
      'firebase database',
      'tecnologias full stack'
    ],
    audience: ['reclutadores tecnicos', 'desarrolladores', 'clientes'],
    intent: 'conocer las habilidades y el stack tecnologico de Wilder'
  },
  logros: {
    title: 'Certificaciones y Logros de Wilder Taype - Webs',
    description: 'Trayectoria profesional, certificaciones de estudios y logros de Wilder Taype a lo largo de su carrera como Ingeniero de Sistemas y desarrollador web.',
    path: '/logros',
    keywords: [
      'certificaciones programacion',
      'carrera profesional',
      'logros TI',
      'ingeniero de sistemas',
      'wilder taype'
    ],
    audience: ['reclutadores', 'instituciones academicas', 'clientes'],
    intent: 'validar los logros academicos y profesionales de Wilder'
  },
  blog: {
    title: `Blog de tecnología y programación: Consejos y Guías | ${app}`,
    description: "Guías y consejos prácticos para optimizar tu CV con IA, superar filtros ATS y preparar tus entrevistas de trabajo. Potencia tu perfil profesional hoy.",
    path: '/blog',
    keywords: [
      'blog de empleo',
      'consejos curriculum',
      'superar filtros ats',
      'preparar entrevistas',
      'ia para empleo'
    ],
    audience: ['personas buscando guías de empleo', 'candidatos en búsqueda de trabajo', 'lectores que quieren optimizar su trayectoria'],
    intent: 'leer guías y reflexiones sobre búsqueda de empleo'
  },
  contacto: {
    title: 'Contacto y Consultas de Negocios | Wilder Taype',
    description: '¿Deseas contratar un desarrollador Full Stack? Ponte en contacto con Wilder Taype para colaboraciones en el desarrollo de software y sus aplicaciones.',
    path: '/contacto',
    keywords: [
      'contratar desarrollador',
      'contacto programador',
      'desarrollo de software',
      'colaboracion web',
      'wilder taype'
    ],
    audience: ['clientes', 'reclutadores', 'colaboradores'],
    intent: 'enviar un mensaje de contacto o propuesta de trabajo a Wilder'
  },
  acerca: {
    title: `Acerca de ${app}: Tu Mentor de Carrera con IA.`,
    description: "Conoce el propósito de nuestra plataforma web diseñada para democratizar herramientas de reclutamiento gratuitas y guiar a profesionales en su empleo.",
    path: '/acerca',
    keywords: [
      'sobre portafolio',
      'creador de la app',
      'mision de portafolio',
      'desarrollo profesional',
      'empleabilidad ia'
    ],
    audience: ['candidatos', 'reclutadores'],
    intent: 'acerca del creador y la mision del proyecto'
  },
  descubre: {
    title: `Descubre todas nuestras herramientas | ${app}.`,
    description: "Explora el ecosistema de herramientas de preparación laboral: editor, simulador de entrevistas y analizador de CV. Todo lo que necesitas para destacar",
    path: '/descubre',
    keywords: [
      'herramientas de empleo',
      'simulador entrevista ia',
      'analizador curriculum',
      'escribir cv online',
      'recursos profesionales'
    ],
    audience: ['candidatos', 'estudiantes'],
    intent: 'descubrir herramientas de la plataforma'
  },
  cookies: {
    title: `Política de Cookies de la Plataforma | ${app}.`,
    description: "Transparencia y claridad sobre cómo usamos las cookies y el almacenamiento local para optimizar tu experiencia y tus preferencias en nuestro editor...",
    path: '/cookies',
    keywords: [
      'politica de cookies',
      'cookies de supabase',
      'almacenamiento local cv',
      'cookies de adsense',
      'privacidad de cookies'
    ],
    audience: ['usuarios preocupados por cookies'],
    intent: 'ver politica de cookies'
  },
  privacidad: {
    title: `Política de Privacidad: Tus Datos | ${app} Web`,
    description: "Tus datos personales, notas y borradores de CV están protegidos de forma segura. Conoce nuestro compromiso con la confidencialidad de tu información..",
    path: '/privacidad',
    keywords: [
      'politica de privacidad',
      'seguridad de datos cv',
      'privacidad de candidatos',
      'proteccion de datos ia',
      'cuenta segura portafolio'
    ],
    audience: ['usuarios preocupados por privacidad'],
    intent: 'ver politica de privacidad'
  },
  terminos: {
    title: `Términos y Condiciones de Uso | ${app} Portal.`,
    description: "Reglas, responsabilidades, propiedad intelectual y condiciones de uso bajo las cuales ofrecemos nuestras herramientas gratuitas de preparación laboral",
    path: '/terminos',
    keywords: [
      'terminos de servicio',
      'condiciones de uso',
      'reglas de la plataforma',
      'propiedad intelectual cv',
      'derechos del candidato'
    ],
    audience: ['usuarios de la plataforma'],
    intent: 'ver terminos de servicio'
  },
  feedback: {
    title: `Feedback: Ayúdanos a Mejorar esta Web | ${app}`,
    description: "Tu opinión y reportes de errores nos ayudan a perfeccionar el editor de CV y simulador de entrevistas. Participa activamente en la mejora de la web...",
    path: '/feedback',
    keywords: [
      'feedback portafolio',
      'opinar sobre editor',
      'sugerir nuevas funciones',
      'mejorar simulador ia',
      'comunidad de candidatos'
    ],
    audience: ['candidatos', 'usuarios activos'],
    intent: 'dejar feedback'
  }
};

