const COMUN = [
  { href: '/proyectos', ico: 'fa-folder-open', txt: 'Proyectos' },
  { href: '/skills', ico: 'fa-code', txt: 'Skills' },
  { href: '/logros', ico: 'fa-trophy', txt: 'Logros' },
  { href: '/blog', ico: 'fa-blog', txt: 'Blog' },
  { href: '/contacto', ico: 'fa-envelope', txt: 'Contacto' }
];

export const NAV_CONFIG = {
  todos: {
    left: [
      { href: '/', ico: 'fa-house', txt: 'Bienvenido' },
      ...COMUN
    ],
    right: []
  },
  usuario: {
    left: [
      { href: '/smile', ico: 'fa-house', txt: 'Dashboard' },
      ...COMUN
    ],
    right: [{ isPerfil: true }, { isSalir: true }]
  },
  editor: {
    left: [
      { href: '/editor', ico: 'fa-house', txt: 'Dashboard' },
      ...COMUN
    ],
    right: [
      { href: '/nuevo', ico: 'fa-plus', txt: 'Nuevo Post' },
      { href: '/notas', ico: 'fa-note-sticky', txt: 'Mis Notas' },
      { href: '/mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  gestor: {
    left: [
      { href: '/gestor', ico: 'fa-house', txt: 'Dashboard' },
      ...COMUN
    ],
    right: [
      { href: '/nuevo', ico: 'fa-plus', txt: 'Nuevo Post' },
      { href: '/mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { href: '/notas', ico: 'fa-note-sticky', txt: 'Mis Notas' },
      { isPerfil: true }, { isSalir: true }
    ]
  },
  admin: {
    left: [
      { href: '/admin', ico: 'fa-house', txt: 'Dashboard' },
      { href: 'usuarios', ico: 'fa-users', txt: 'Gestionar Usuarios' }
    ],
    right: [
      { isPerfil: true }, { isSalir: true }
    ]
  }
};

export function rutaRoles() {
  const roles = {};
  
  // Obtener lista de rutas públicas del menú 'todos'
  const publicPaths = [];
  const todosItems = [...(NAV_CONFIG.todos.left || []), ...(NAV_CONFIG.todos.right || [])];
  todosItems.forEach(item => {
    if (item.href) publicPaths.push(item.href);
  });
  
  // Construir dinámicamente el mapeo inspeccionando NAV_CONFIG
  Object.entries(NAV_CONFIG).forEach(([rol, cfg]) => {
    if (rol === 'todos') return;
    const items = [...(cfg.left || []), ...(cfg.right || [])];
    items.forEach(item => {
      if (item.href) {
        if (publicPaths.includes(item.href)) return; // Omitir rutas públicas
        if (!roles[item.href]) roles[item.href] = [];
        if (!roles[item.href].includes(rol)) roles[item.href].push(rol);
      }
    });
  });
  
  
  
  // Asegurar accesos correctos por rol
  const allRoles = ['usuario', 'editor', 'gestor', 'admin'];
  roles['/perfil'] = allRoles;
  roles['/notas'] = ['usuario', 'editor', 'admin'];
  roles['/mensajes'] = ['editor', 'gestor', 'admin'];
  roles['/nuevo'] = ['editor', 'admin'];
  roles['/aprobar'] = ['gestor', 'admin'];

  const require2FA = ['admin', 'usuarios'];
  return { roles, require2FA };
}
