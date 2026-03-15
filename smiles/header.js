import { $, getls, removels, Mensaje } from './widev.js';

export function personal(wi) {
  Mensaje?.('Bienvenido '+wi.nombre);
  $('.wiauth').html(`
    <div class="sesion">
      <img src="${wi.imagen||'./smile.avif'}" alt="${wi.nombre}"><span>${wi.nombre}</span>
    </div>
    <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> <span> Salir </span></button>
  `);
} // Funcion para Auth personal 

export const header = (() => {
  let wi = getls('wiSmile'); wi ? cargandoPersonal(wi) : publico(); //Cache Primero

  function publico() {
    $('.wiauth').html(`
      <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
      <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `);
  }
  
  async function cargandoPersonal(wi) {
    personal(wi);
//ACTUALIZAR CAMBIOS EN TIEMPO REAL
    const { auth, onAuthStateChanged } = await import('./auth/wiauth.js');
    onAuthStateChanged(auth, user => {
      if (!user) return removels('wiSmile'), publico();
    });
  }

  window.addEventListener('wiFresh', (e) => cargandoPersonal(e.detail));

  // Login/Registrar → carga wiauth lazy y abre modal
  $(document).on('click', '.login,.registrar', async function(e) {
    e.preventDefault();
    const tipo = $(this).hasClass('registrar') ? 'registrar' : 'login';
    const { abrirLogin } = await import('./auth/wiauth.js');
    abrirLogin(tipo);
  });

  $(document).on('click', '.bt_salir', async () => {
    const { salir } = await import('./auth/wiauth.js');
    await salir(['wiflash', 'wiTema']);
    location.reload();
  });

})();

