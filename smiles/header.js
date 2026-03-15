import { rutas } from './rutas/ruta.js';
import { $, Mensaje, wiSmart, wiAuth } from './widev.js';

// VISTA PERSONAL_________________________________
export const personal = wi => {
  Mensaje?.('Bienvenido '+wi.nombre);
  $('.wiauth').html(`
    <div class="sesion">
      <img src="${wi.imagen||'./smile.avif'}" alt="${wi.nombre}"><span>${wi.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `);
};

// VISTA PUBLICA_________________________________
const publico = () => {
    $('.wiauth').html(`
      <button class="wibtn_auth registrar" aria-label="Crear cuenta"><i class="fas fa-user-plus" aria-hidden="true"></i><span>Registrar</span></button>
      <button class="wibtn_auth login" aria-label="Iniciar sesión"><i class="fas fa-sign-in-alt" aria-hidden="true"></i><span>Login</span></button>
  `);
};

// MI AUTH_________________________________
wiAuth.on(wi => wi ? personal(wi) : (publico(), rutas.navigate('/')));
const wi = wiAuth.user; wi ? personal(wi) : publico();

// SALIR_________________________________
const KEEP_KEYS = ['wiTema', 'wiSmart', 'wiFresh'];
$(document).on('click', '.bt_salir', async () => {
  const { salir } = await import('./smile/login.js');
  salir(KEEP_KEYS);
});

// LOGIN / REGISTRAR — Firebase se carga solo al hacer click
$(document).on('click', '.wibtn_auth', async function () {
  const { abrirLogin } = await import('./smile/login.js');
  abrirLogin($(this).hasClass('registrar') ? 'registrar' : 'login');
});