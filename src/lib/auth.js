import { auth } from './firebase-auth.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getls } from './widev.js';

/**
 * Espera a obtener el usuario autenticado de Firebase.
 * @returns {Promise<any>} Usuario de Firebase o null.
 */
export function waitAuth() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

/**
 * Valida la sesión del usuario en Firebase y localStorage.
 * Redirige a '/' si no hay sesión válida o si el rol no está permitido.
 * @param {string[]} rolesPermitidos - Roles autorizados (ej: ['usuario', 'editor', 'gestor', 'admin'])
 * @returns {Promise<any>} Datos del usuario autenticado guardados en localStorage.
 */
export async function protegerRuta(rolesPermitidos = []) {
  const localUser = getls('wiSmile');
  if (!localUser) {
    window.location.replace('/');
    return null;
  }

  // Verificar si el rol de la sesión local está autorizado
  if (rolesPermitidos.length && !rolesPermitidos.includes(localUser.rol)) {
    window.location.replace('/');
    return null;
  }

  // Validación asíncrona de Firebase Auth en segundo plano para no bloquear el renderizado inicial
  waitAuth().then((user) => {
    if (!user) {
      localStorage.removeItem('wiSmile');
      window.location.replace('/');
    }
  });

  return localUser;
}

