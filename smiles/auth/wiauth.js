import $ from 'jquery';
import { auth, db } from '../smile/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import { setDoc, getDoc, doc, query, where, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { wiTip, Mensaje, savels, getls, wiSpin, abrirModal, cerrarModal } from '../widev.js';

export { auth, onAuthStateChanged, signOut };
export function wiAuth() {
const cfg = { db: 'smiles', rol: 'smile' };

const crearModal = (id, titulo, campos) => `<div id="${id}" class="wiModal authMod"><div class="modalBody"><button class="modalX">&times;</button><div class="modalMain"><div class="logo"><img src="./smile.avif"></div><h2>${titulo}</h2><form id="${id.replace('Modal','Form')}">${campos}</form></div></div></div>`;

const crearCampo = (icono, tipo, idCmp, place, tgPass = false) => `<div class="grupo"><i class="fas fa-${icono}"></i><input type="${tipo}" id="${idCmp}" placeholder="${place}" required>${tgPass ? '<i class="fas fa-eye tgPass"></i>' : ''}</div>`;

const htmlMod = {
  login: crearModal('loginModal', 'Login', 
    crearCampo('envelope', 'text', 'email', 'Email o usuario') + 
    crearCampo('lock', 'password', 'password', 'Contraseña', true) + 
    '<button type="button" id="Login" class="btnAuth inactivo">Iniciar Sesión</button><div class="links"><span class="olvidastePass">¿Olvidaste tu contraseña?</span><span class="crearCuenta">Crear cuenta</span></div>'),
  
  registro: crearModal('registroModal', 'Crear Cuenta',
    crearCampo('envelope', 'email', 'regEmail', 'Email') +
    crearCampo('user', 'text', 'regUsuario', 'Usuario') +
    crearCampo('user-tie', 'text', 'regNombre', 'Nombre') +
    crearCampo('user-tie', 'text', 'regApellidos', 'Apellidos') +
    crearCampo('lock', 'password', 'regPassword', 'Contraseña', true) +
    crearCampo('lock', 'password', 'regPassword1', 'Confirmar', true) +
    '<div class="grupo grupoCheck"><label>' +
      '<input type="checkbox" id="regTerminos" required>' +
      '<span>Acepto los <a href="/terminos.html" target="_blank" rel="noopener noreferrer">términos y condiciones</a></span>' +
    '</label></div>' +
    '<button type="button" id="Registrar" class="btnAuth inactivo">Registrarme</button>' +
    '<div class="links"><span class="conCuenta">Ya tengo cuenta</span></div>'
  ).replace('authMod', 'authMod regMod'),
  
  reset: crearModal('recuperarModal', 'Restablecer', 
    '<p>Ingresa tu Email o usuario:</p>' + 
    crearCampo('envelope', 'text', 'recEmail', 'Email o usuario') + 
    '<button type="button" id="Recuperar" class="btnAuth inactivo">Enviar enlace</button><div class="links"><span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver</span></div>')
};

const estilo = `.authMod .modalBody{max-width:28vw;min-width:320px;padding:0;background:var(--bg);border-radius:1.5vh;box-shadow:0 10px 40px rgba(0,0,0,.15);animation:mIn .3s ease}@keyframes mIn{from{transform:translateY(-30px) scale(.9);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}.regMod .modalBody{max-width:40vw}.modalMain{padding:3vh 2.5vw;display:flex;flex-direction:column;align-items:center}.logo{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:2vh 0 1.5vh;box-shadow:0 8px 24px var(--bxs);background:linear-gradient(135deg,var(--mco),var(--hv));animation:lf 3s ease-in-out infinite}@keyframes lf{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.logo:hover{transform:scale(1.05) rotate(5deg)}.logo img{width:90%;transition:transform .3s}.logo:hover img{transform:scale(1.1)}h2{font:700 1.8rem var(--ff_P);color:var(--mco);margin:.5vh 0 2vh;text-align:center}form{width:100%;display:flex;flex-direction:column;gap:1.5vh}.grupo{position:relative;width:100%;animation:fiu .4s ease backwards}.grupo:nth-child(n){animation-delay:calc(var(--i, 0) * .05s)}@keyframes fiu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.grupo i{position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--mco);opacity:.8;font-size:1.1rem;z-index:2;pointer-events:none;transition:all .3s}.grupo:focus-within i{opacity:1;color:var(--hv);transform:translateY(-50%) scale(1.1)}.tgPass{left:auto!important;right:1rem!important;cursor:pointer;pointer-events:all!important;z-index:3!important;opacity:.6;color:var(--txe)}.tgPass:hover{opacity:1;color:var(--mco);transform:translateY(-50%) scale(1.15)!important}input{width:100%;padding:1.3vh 3.5rem 1.3vh 3rem;border-radius:.8vh;border:1.5px solid var(--bdr);background:var(--wb);color:var(--tx);font-size:.95rem;transition:all .3s;outline:0;box-sizing:border-box}input:hover{border-color:var(--mco);transform:translateY(-1px)}input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs),0 4px 12px rgba(0,0,0,.08);transform:translateY(-2px);background:var(--F)}input::placeholder{color:var(--txe);opacity:.6}.btnAuth{width:100%;padding:1.4vh 1.5vw;background:linear-gradient(135deg,var(--mco),var(--hv));color:var(--txa);border:0;border-radius:.8vh;font-weight:600;font-size:1rem;cursor:pointer;box-shadow:0 6px 20px var(--bxs);transition:all .3s;position:relative;overflow:hidden;animation:fiu .4s ease .4s backwards}.btnAuth::before{content:'';position:absolute;top:50%;left:50%;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.2);transform:translate(-50%,-50%);transition:width .6s,height .6s}.btnAuth:hover::before{width:300px;height:300px}.btnAuth:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 30px var(--bxs)}.btnAuth:active{transform:translateY(-1px) scale(.98)}.btnAuth.loading{opacity:.8;cursor:wait;pointer-events:none;animation:pul 1.5s ease-in-out infinite}@keyframes pul{0%,100%{opacity:.8}50%{opacity:.6}}.btnAuth.inactivo{opacity:.65;cursor:not-allowed;pointer-events:none;filter:grayscale(40%)}.btnAuth i{margin-right:.3vw;color:var(--bg7)!important}.links{width:100%;display:flex;justify-content:space-between;margin-top:1.5vh;gap:1vh;animation:fiu .4s ease .45s backwards}.links span{color:var(--mco);cursor:pointer;padding:.6vh .8vw;font-size:.95rem;font-weight:500;border-radius:.5vh;transition:all .25s;position:relative}.links span::after{content:'';position:absolute;bottom:0;left:50%;width:0;height:2px;background:var(--mco);transition:all .3s;transform:translateX(-50%)}.links span:hover{color:var(--hv);transform:translateY(-2px)}.links span:hover::after{width:100%}p{color:var(--tx);font-size:.95rem;margin:1.5vh 0 .8vh;opacity:.85;font-weight:500}#registroForm{display:grid;grid-template-columns:1fr 1fr;gap:1.5vh 1.5vw}#registroForm .btnAuth,#registroForm .links{grid-column:1/-1;margin-top:1vh}@media (max-width:1200px){.authMod .modalBody{max-width:35vw}.regMod .modalBody{max-width:50vw}}@media (max-width:768px){.authMod .modalBody{max-width:98vw}.regMod .modalBody{max-width:98vw}.modalMain{padding:2.5vh 5vw}h2{font-size:1.5rem}.logo{width:70px;height:70px}input{padding:1.2vh 3rem 1.2vh 2.5rem}.grupo i{left:.8rem}.tgPass{right:.8rem!important}.btnAuth{padding:1.5vh 4vw;font-size:.95rem}#registroForm{display:flex;flex-direction:column;gap:1.5vh}}.grupoCheck label{display:flex;align-items:center;gap:.8vh;font-size:.9rem;color:var(--tx);}.grupoCheck input[type="checkbox"]{width:16px;height:16px;accent-color:var(--mco);cursor:pointer;}.grupoCheck a{color:var(--mco);text-decoration:underline;}.authMod h2,.authMod a,.authMod input::placeholder,.authMod i,.authMod span{color:var(--bg2);}.authMod input:focus::placeholder,.authMod input:focus{color:var(--mco)}`;

let inyectado = false;
const inyectar = () => {
  if (inyectado) return;
  $('body').append(Object.values(htmlMod).join(''));
  inyectado = true;
  eventos();
};

!$('.wiAuthCss').length && $('head').append(`<style class="wiAuthCss">${estilo}</style>`);

const validar = {
  regEmail: [v => v.toLowerCase().trim(), v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Email inválido'],
  regUsuario: [v => v.toLowerCase().replace(/[^a-z0-9_]/g, '').trim(), v => v.length >= 4 || 'Usuario 4-20 caracteres'],
  regNombre: [v => v.trim(), v => v.length > 0 || 'Ingrese nombre'],
  regApellidos: [v => v.trim(), v => v.length > 0 || 'Ingrese apellidos'],
  regPassword: [v => v, v => v.length >= 6 || 'Mínimo 6 caracteres'],
  regPassword1: [v => v, v => v === $('#regPassword').val() || 'No coinciden']
};

const eventos = () => {
  let usuarioOk = false, emailOk = false, registrando = false;

  $(document).off('click.wa', '.tgPass').on('click.wa', '.tgPass', function() {
    const $inp = $(this).siblings('input');
    $inp.attr('type', $inp.attr('type') === 'password' ? 'text' : 'password');
    $(this).toggleClass('fa-eye fa-eye-slash');
  });

  // ✅ DESPUÉS (línea 75 - PERMITE ESCRIBIR):
  $(document).off('input.wa', '#regUsuario,#regEmail,#email,#recEmail').on('input.wa', '#regUsuario,#regEmail,#email,#recEmail', function() {
    $(this).val($(this).val().toLowerCase());  // ✅ Sin .trim() - permite escribir normal
  });

  [['#password','#Login'], ['#regPassword1','#Registrar'], ['#recEmail','#Recuperar']].forEach(([inp, btn]) => {
    $(document).off('input.wa keyup.wa', inp).on('input.wa keyup.wa', inp, e => {
      $(btn).removeClass('inactivo');
      e.key === 'Enter' && $(btn).click();
    });
  });

  Object.entries(validar).forEach(([id, [trans, vld]]) => {
    $(document).off('blur.wa', `#${id}`).on('blur.wa', `#${id}`, function() {
      const val = trans($(this).val());
      $(this).val(val);
      const res = vld(val);
      res !== true && wiTip(this, res, 'error', 2500);
    });
  });

  $(document).off('blur.wa focus.wa', '#regUsuario').on('blur.wa focus.wa', '#regUsuario', async function() {
    const usu = $(this).val().trim();  // ✅ .trim() solo aquí al validar
    if (usu.includes('@')) { wiTip(this, 'Usuario no puede contener @', 'error', 2500); usuarioOk = false; return; }
    if (usu.length >= 3) {
      try {
        const buscar = await getDoc(doc(db, cfg.db, usu));
        usuarioOk = !buscar.exists();
        wiTip(this, `Usuario ${buscar.exists() ? 'no disponible ❌' : 'disponible ✅'}`, usuarioOk ? 'success' : 'error', 3000);
      } catch (error) { console.error(error); }
    }
  });

  $(document).off('blur.wa focus.wa', '#regEmail').on('blur.wa focus.wa', '#regEmail', async function() {
    const correo = $(this).val().trim();  // ✅ .trim() solo aquí al validar
    if (correo.length > 0 && !correo.includes('@')) { wiTip(this, 'Debe ser un email válido', 'error', 2500); emailOk = false; return; }
    if (correo.length >= 3 && correo.includes('@')) {
      try {
        const buscar = await getDocs(query(collection(db, cfg.db), where('email', '==', correo)));
        emailOk = buscar.empty;
        wiTip(this, `Email ${buscar.empty ? 'disponible ✅' : 'no disponible ❌'}`, emailOk ? 'success' : 'error', 3000);
      } catch (error) { console.error(error); }
    }
  });

  $(document).off('click.wa', '#Registrar').on('click.wa', '#Registrar', async function() {
  if (registrando) return;
  if (!$('#regTerminos').is(':checked')) { 
    wiTip($('#regTerminos')[0], 'Debes aceptar los términos y condiciones', 'error', 2500);
    return;
  }
  registrando = true;
  wiSpin(this, true, 'Registrando');
    
    const vlds = [[usuarioOk, $('#regUsuario')[0], 'Usuario no disponible'], [emailOk, $('#regEmail')[0], 'Email no disponible'],
      ...Object.entries(validar).map(([id, [trans, vld]]) => {
        const $campo = $(`#${id}`), valor = trans($campo.val()), res = vld(valor);
        return [res === true, $campo[0], res !== true ? res : ''];
      })
    ];
    for (const [valido, elem, msj] of vlds) {
      if (!valido && msj) {
        wiSpin(this, false); wiTip(elem, msj, 'error', 2500); elem.focus(); registrando = false; return;
      }
    }
    try {
      const [correo, usuario, nombre, apellidos, password] = ['regEmail', 'regUsuario', 'regNombre', 'regApellidos', 'regPassword'].map(id => $(`#${id}`).val().trim());
      const { user } = await createUserWithEmailAndPassword(auth, correo, password);
      await Promise.all([updateProfile(user, { displayName: usuario }), sendEmailVerification(user)]);
      const widatos = { usuario, email: correo, nombre, apellidos, rol: cfg.rol, uid: user.uid, terminos: true, tema:localStorage.wiTema};
      await setDoc(doc(db, cfg.db, usuario), { ...widatos, creado: serverTimestamp() });
      (await import('../header.js')).personal(widatos); // Header personalizado
    } catch (error) {
      const errores = { 'auth/email-already-in-use': 'Email ya registrado', 'auth/weak-password': 'Contraseña débil' };
      Mensaje(errores[error.code] || error.message, 'error'); console.error(error);
    } finally { wiSpin(this, false); registrando = false; }
  });

  $(document).off('click.wa', '#Login').on('click.wa', '#Login', async function() {
    wiSpin(this, true, 'Iniciando');
    try {
      const [campo, password] = ['#email', '#password'].map(id => $(id).val().trim());
      let correo = campo;
      if (!campo.includes('@')) {
        const buscar = await getDoc(doc(db, cfg.db, campo));
        if (!buscar.exists()) throw new Error('Usuario no encontrado');
        correo = buscar.data().email;
      }
      await signInWithEmailAndPassword(auth, correo, password);
      const usuario = correo.includes('@') ? (await getDoc(doc(db, cfg.db, auth.currentUser.displayName))).data() : (await getDoc(doc(db, cfg.db, campo))).data();
      if (usuario.tema) { localStorage.wiTema = usuario.tema; aplicarTema(usuario.tema); }
      savels('wiSmile', usuario, 450); cerrarModal('loginModal'); // 💾 Guardamos Auht
    } catch (error) {
      const errores = { 'auth/invalid-credential': 'Contraseña incorrecta', 'auth/invalid-email': 'Email no válido', 'auth/missing-email': 'Usuario no registrado' };
      Mensaje(errores[error.code] || error.message, 'error'); console.error(error);
    } finally { wiSpin(this, false); }
  });

  $(document).off('click.wa', '#Recuperar').on('click.wa', '#Recuperar', async function() {
    wiSpin(this, true, 'Enviando');
    try {
      const campo = $('#recEmail').val().trim();
      let correo = campo;
      if (!campo.includes('@')) {
        const buscar = await getDoc(doc(db, cfg.db, campo));
        if (!buscar.exists()) throw new Error('Usuario no encontrado');
        correo = buscar.data().email;
      }
      await sendPasswordResetEmail(auth, correo); Mensaje('✅ Email enviado para restablecer contraseña', 'success');
    } catch (error) { Mensaje(error.message || 'Error al enviar email', 'error'); console.error(error); } 
    finally { wiSpin(this, false); }
  });

  const navegar = { 
    crearCuenta: () => { abrirModal('registroModal'); cerrarModal('loginModal'); }, 
    conCuenta: () => { abrirModal('loginModal'); cerrarModal('registroModal'); },
    olvidastePass: () => { abrirModal('recuperarModal'); cerrarModal('loginModal'); }, 
    volverLogin: () => { abrirModal('loginModal'); cerrarModal('recuperarModal'); } 
  };
  
  $(document).off('click.wa', '.crearCuenta,.conCuenta,.olvidastePass,.volverLogin').on('click.wa', '.crearCuenta,.conCuenta,.olvidastePass,.volverLogin', function() { 
    navegar[$(this).attr('class').split(' ')[0]](); 
  });
};

$(document).off('click.wa', '.login,.registrar').on('click.wa', '.login,.registrar', function(evento) {
  evento.preventDefault();
  inyectar();
  setTimeout(() => abrirModal($(this).hasClass('login') ? 'loginModal' : 'registroModal'), 100);
});

// ACTUALIZANDO Y SINCRONIZANDO TEMAS
function aplicarTema(tema) {
  if (!tema) return;
  const [nombre, color] = tema.split('|');
  document.documentElement.dataset.theme = nombre;
  $('meta[name="theme-color"]').attr('content', color);
  $('.tema').removeClass('mtha').filter(`[data-ths="${tema}"]`).addClass('mtha');
}

// 🔄 SINCRONIZACIÓN DE TEMA
$(document).off('click.wa', '.tema').on('click.wa', '.tema', async function() {
const tema =  localStorage.wiTema, usuario = getls('wiSmile'), nombreTema = tema.split('|')[0];
  if (usuario) {
    try {
      await setDoc(doc(db, cfg.db, usuario.usuario), { tema, actualizado: serverTimestamp() }, { merge: true });
      Mensaje(`Tema ${nombreTema} Guardado ✅`);
    } catch (e){ console.error(e); }
  }
});

} wiAuth();