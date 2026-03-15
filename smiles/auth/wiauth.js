import './login.css';
import { auth, db } from '../smile/firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,
         sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import { setDoc, getDoc, getDocs, doc, collection, query, where, serverTimestamp } from 'firebase/firestore';
import { $, wiTip, Mensaje, savels, getls, wiSpin, wiAuth, abrirModal, cerrarTodos } from '../widev.js';
import { rutas } from '../rutas/ruta.js';

export { auth, onAuthStateChanged, signOut };

// ==================== CONFIG ====================
const cfg = { db: 'smiles', rol: 'smile' };
let modal = 'si', link = 'no', restablecer = 'no', login = 'si', registrar = 'no';
let pagina = 'actual'; // 'actual' = quedarse, '/proyectos', '/smile', '/'
let registrando = false;

const err = {
  'auth/email-already-in-use':'Email ya registrado', 'auth/weak-password':'Contraseña débil',
  'auth/invalid-credential':'Contraseña incorrecta', 'auth/invalid-email':'Email no válido',
  'auth/missing-email':'Usuario no registrado',      'auth/too-many-requests':'Demasiados intentos'
};

const reglas = {
  regEmail:     [v => v.toLowerCase().trim(),                            v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Email inválido'],
  regUsuario:   [v => v.toLowerCase().replace(/[^a-z0-9_]/g,'').trim(), v => v.length >= 4 || 'Mínimo 4 caracteres'],
  regNombre:    [v => v.trim(),                                           v => v.length > 0 || 'Ingresa tu nombre'],
  regApellidos: [v => v.trim(),                                           v => v.length > 0 || 'Ingresa tus apellidos'],
  regPassword:  [v => v,                                                  v => v.length >= 6 || 'Mínimo 6 caracteres'],
  regPassword1: [v => v,                                                  v => v === $('#regPassword').val() || 'No coinciden']
};

// ==================== TEMPLATES ====================
const campo = (ico, tipo, id, place, ojo = false) =>
  `<div class="wilg_grupo"><i class="fas fa-${ico}"></i><input type="${tipo}" id="${id}" placeholder="${place}" autocomplete="off">${ojo ? '<i class="fas fa-eye wilg_ojo"></i>' : ''}</div>`;

const tpl = {
  login: () => `
    <div class="wilg_head">
      <div class="wilg_logo"><img src="./smile.avif" alt="Awonbe"></div>
      <h2>Bienvenido</h2><p>Inicia sesión en tu cuenta</p>
    </div>
    ${campo('envelope','text','email','Email o usuario')}
    ${campo('lock','password','password','Contraseña',true)}
    <button type="button" id="Login" class="wilg_btn inactivo"><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</button>
    ${(restablecer==='si'||registrar==='si') ? `<div class="wilg_links">
      ${restablecer==='si' ? '<span class="wilg_rec">¿Olvidaste tu contraseña?</span>' : ''}
      ${registrar==='si'   ? '<span class="wilg_reg">Crear cuenta <i class="fas fa-arrow-right"></i></span>' : ''}
    </div>` : ''}`,

  registrar: () => `
    <div class="wilg_head">
      <div class="wilg_logo"><img src="./smile.avif" alt="Awonbe"></div>
      <h2>Crear Cuenta</h2><p>Únete a la comunidad</p>
    </div>
    <div class="wilg_grid">
      ${[['envelope','email','regEmail','Email'],['user','text','regUsuario','Usuario'],
         ['user-tie','text','regNombre','Nombre'],['user-tie','text','regApellidos','Apellidos']]
        .map(([i,t,id,p]) => campo(i,t,id,p)).join('')}
      ${campo('lock','password','regPassword','Contraseña',true)}
      ${campo('lock','password','regPassword1','Confirmar contraseña',true)}
    </div>
    <div class="wilg_check">
      <label><input type="checkbox" id="regTerminos">
      <span>Acepto los <a href="/terminos.html" target="_blank">términos y condiciones</a></span></label>
    </div>
    <button type="button" id="Registrar" class="wilg_btn inactivo"><i class="fas fa-user-plus"></i> Registrarme</button>
    <div class="wilg_links"><span class="wilg_log"><i class="fas fa-arrow-left"></i> Ya tengo cuenta</span></div>`,

  restablecer: () => `
    <div class="wilg_head">
      <div class="wilg_logo wilg_logo_sm"><img src="./smile.avif" alt="Awonbe"></div>
      <h2>Restablecer</h2><p>Te enviaremos un enlace a tu email</p>
    </div>
    ${campo('envelope','text','recEmail','Email o usuario')}
    <button type="button" id="Recuperar" class="wilg_btn inactivo"><i class="fas fa-paper-plane"></i> Enviar enlace</button>
    <div class="wilg_links"><span class="wilg_log"><i class="fas fa-arrow-left"></i> Volver</span></div>`
};

// ==================== MODAL ====================
const modalHTML = (vista, cls = '') =>
  `<div id="wilg_modal" class="wiModal wilg_mod ${cls}"><div class="modalBody"><button class="modalX">&times;</button>
   <form id="liForm">${tpl[vista]()}</form></div></div>`;

const inyectarModal = (vista = 'login') => {
  $('#wilg_modal').remove();
  const cls = vista === 'registrar' ? 'wilg_mod_reg' : '';
  $('body').append(modalHTML(vista, cls));
  setTimeout(() => { abrirModal('wilg_modal'); $('#liForm input:first').focus(); }, 50);
};

const mostrarModal = v => {
  const cls = v === 'registrar' ? 'wilg_mod_reg' : '';
  $('#wilg_modal').removeClass('wilg_mod_reg').addClass(cls);
  $('#liForm').html(tpl[v]()).attr('data-vista', v);
  $('#liForm input:first').focus();
};

// ==================== RENDER (PÁGINA) ====================
export const render = () => (link !== 'si' || wiAuth.user)
  ? ''
  : `<div class="wilg_wrap"><div class="wilg_card"><form id="liForm"></form></div></div>`;

export const init = () => {
  if (link !== 'si') { setTimeout(() => rutas.navigate('/'), 0); return; }
  if (wiAuth.user) { setTimeout(() => { entrar(wiAuth.user); rutas.navigate('/smile'); }, 0); return; }
  mostrar('login');
};

const mostrar = v => { $('#liForm').html(tpl[v]()).attr('data-vista', v); $('#liForm input:first').focus(); };

// ==================== UTILS ====================
const val    = id => $(`#${id}`).val().trim();
const esModal = () => $('#wilg_modal.active').length > 0;
const swap   = v  => esModal() ? mostrarModal(v) : mostrar(v);
const accion = async (btn, txt, fn) => {
  wiSpin(btn, true, txt);
  try { await fn(); } catch(e) { Mensaje(err[e.code] || e.message, 'error'); }
  finally { wiSpin(btn, false); }
};
const correo = async v => {
  if (v.includes('@')) return v;
  const snap = await getDoc(doc(db, cfg.db, v));
  if (!snap.exists()) throw new Error('Usuario no encontrado');
  return snap.data().email;
};
const tema = t => {
  if (!t) return;
  const [n, c] = t.split('|');
  document.documentElement.dataset.theme = n;
  $('meta[name="theme-color"]').attr('content', c);
  $('.tema').removeClass('mtha').filter(`[data-ths="${t}"]`).addClass('mtha');
};
const redir = () => pagina === 'actual' ? null : rutas.navigate(pagina);
const entrar = wi => {
  wiAuth.login(wi, 7);
  if (wi?.tema) { localStorage.wiTema = wi.tema; tema(wi.tema); }
  if (esModal()) cerrarTodos();
  redir();
};

// ==================== EVENTOS ====================
$(document)
  .on('click.wi', '.wilg_ojo', function () {
    const $i = $(this).siblings('input');
    $i.attr('type', $i.attr('type') === 'password' ? 'text' : 'password');
    $(this).toggleClass('fa-eye fa-eye-slash');
  })
  .on('input.wi', '#email,#recEmail,#regEmail,#regUsuario', function () { $(this).val($(this).val().toLowerCase()); })
  .on('click.wi', '.wilg_reg', () => { registrar === 'si' && swap('registrar'); })
  .on('click.wi', '.wilg_rec', () => swap('restablecer'))
  .on('click.wi', '.wilg_log', () => swap('login'))
  .on('input.wi keyup.wi', '#password',     e => { $('#Login').removeClass('inactivo');     e.key === 'Enter' && $('#Login').click(); })
  .on('input.wi keyup.wi', '#regPassword1', e => { $('#Registrar').removeClass('inactivo'); e.key === 'Enter' && $('#Registrar').click(); })
  .on('input.wi keyup.wi', '#recEmail',     e => { $('#Recuperar').removeClass('inactivo'); e.key === 'Enter' && $('#Recuperar').click(); })
  .on('blur.wi', Object.keys(reglas).map(id => `#${id}`).join(','), function () {
    const raw = $(this).val(); if (!raw) return;
    const [trans, vld] = reglas[this.id];
    const v = trans(raw); $(this).val(v);
    const r = vld(v); r !== true && wiTip(this, r, 'error', 2500);
  })
  .on('blur.wi', '#regUsuario', async function () {
    const u = val('regUsuario'); if (!u) return;
    if (u.includes('@')) return ($(this).data('ok', false), wiTip(this, 'No puede contener @', 'error', 2500));
    if (u.length < 3) return;
    const libre = !(await getDoc(doc(db, cfg.db, u))).exists();
    $(this).data('ok', libre);
    wiTip(this, `Usuario ${libre ? 'disponible <i class="fa-solid fa-check-circle"></i>' : 'no disponible <i class="fa-solid fa-times-circle"></i>'}`, libre ? 'success' : 'error', 3000);
  })
  .on('blur.wi', '#regEmail', async function () {
    const e = val('regEmail'); if (!e || !e.includes('@')) return;
    const libre = (await getDocs(query(collection(db, cfg.db), where('email','==',e)))).empty;
    $(this).data('ok', libre);
    wiTip(this, `Email ${libre ? 'disponible <i class="fa-solid fa-check-circle"></i>' : 'no disponible <i class="fa-solid fa-times-circle"></i>'}`, libre ? 'success' : 'error', 3000);
  })
  .on('click.wi', '#Login', async function () {
    await accion(this, 'Iniciando', async () => {
      await signInWithEmailAndPassword(auth, await correo(val('email')), val('password'));
      const wi = (await getDoc(doc(db, cfg.db, auth.currentUser.displayName || val('email')))).data();
      entrar(wi);
    });
  })
  .on('click.wi', '#Registrar', async function () {
    if (registrando) return;
    const chk = [
      [!$('#regTerminos').is(':checked'), '#regTerminos', 'Acepta los términos'],
      [!$('#regUsuario').data('ok'),      '#regUsuario',  'Verifica el usuario'],
      [!$('#regEmail').data('ok'),        '#regEmail',    'Verifica el email']
    ];
    const fallo = chk.find(([c]) => c);
    if (fallo) return wiTip($(fallo[1])[0], fallo[2], 'error', 2500);
    registrando = true;
    await accion(this, 'Registrando', async () => {
      const d = { email: val('regEmail'), usuario: val('regUsuario'), nombre: val('regNombre'), apellidos: val('regApellidos'), password: val('regPassword') };
      const { user } = await createUserWithEmailAndPassword(auth, d.email, d.password);
      await Promise.all([updateProfile(user, { displayName: d.usuario }), sendEmailVerification(user)]);
      const wi = { usuario: d.usuario, email: d.email, nombre: d.nombre, apellidos: d.apellidos, rol: cfg.rol, uid: user.uid, terminos: true, tema: localStorage.wiTema };
      await setDoc(doc(db, cfg.db, d.usuario), { ...wi, creado: serverTimestamp() });
      entrar(wi); Mensaje('<i class="fa-solid fa-check-circle"></i> Cuenta creada. Verifica tu email', 'success');
    });
    registrando = false;
  })
  .on('click.wi', '#Recuperar', async function () {
    await accion(this, 'Enviando', async () => {
      await sendPasswordResetEmail(auth, await correo(val('recEmail')));
      Mensaje('<i class="fa-solid fa-check-circle"></i> Email enviado, revisa tu bandeja', 'success');
      setTimeout(() => swap('login'), 2000);
    });
  })
  .on('click.wi', '.tema', async function () {
    const wi = getls('wiSmile'); if (!wi?.usuario) return;
    setTimeout(async () => {
      const t = localStorage.wiTema; if (!t) return;
      try {
        await setDoc(doc(db, cfg.db, wi.usuario), { tema: t, actualizado: serverTimestamp() }, { merge: true });
        savels('wiSmile', { ...wi, tema: t }, 7);
        Mensaje(`Tema ${t.split('|')[0]} guardado <i class="fas fa-check-circle"></i>`, 'success');
      } catch (e) { console.error('<i class="fa-solid fa-times-circle"></i> tema:', e); }
    }, 0);
  });

// ==================== AUTH MODAL ====================
export const abrirLogin = (tipo = 'login') => {
  if (modal === 'si') {
    const vista = tipo === 'registrar' && registrar === 'si' ? 'registrar' : 'login';
    inyectarModal(vista);
  } else {
    rutas.navigate('/login');
  }
};

export const salir = async (keep = []) => {
  try { await signOut(auth); } catch(e) { console.error('signOut:', e); }
  wiAuth.logout(keep);
};

export const cleanup = () => { $(document).off('.wi'); };