import './smile.css';
import $ from 'jquery';
import { db } from './firebase.js';
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { savels, getls, Saludar, wiSpin, wiDate, Notificacion } from '../widev.js';

export let smile = getls('wiSmile');
const CACHE = 'wiNotas';

export const render = async () => {
  const cache = getls(CACHE);
  const fecha = cache?.fechaUpdate ? wiDate(Timestamp).get(cache.fechaUpdate, 'DD/MM/YYYY HH:mm') : 'Sin notas';
  return `
   <div class="miweb">
    <div class="mhead"><h1 class="mh1"><i class="fas fa-sticky-note"></i> ${Saludar()} ${smile.nombre}</h1></div>
    <div class="mibody">
     <textarea class="nota-text" placeholder="Empieza escribir tus notas">${cache?.notas || ''}</textarea>
     <div class="nota-footer">
      <span class="nota-fecha"><i class="far fa-clock"></i> ${cache?.fechaCreacion ? 'Actualizado' : 'Nota creada'}: ${fecha}</span>
      <div class="nota-btns">
       <button class="btn btn-save"><i class="fas fa-save"></i> Guardar</button>
       <button class="btn btn-delete"><i class="fas fa-trash"></i> Eliminar</button>
      </div>
     </div>
    </div>
   </div>`;
};

export const init = async () => {
  const cache = getls(CACHE);
  
  // Cargar desde Firebase si no hay cache
  if (!cache) {
    try {
      const busq = await getDoc(doc(db, 'misnotas', smile.usuario));
      if (busq.exists()) {
        const data = busq.data();
        $('.nota-text').val(data.notas);
        savels(CACHE, data);
        $('.nota-fecha').html(`<i class="far fa-clock"></i> Actualizado: ${wiDate(Timestamp).get(data.fechaUpdate, 'DD/MM/YYYY HH:mm')}`);
        Notificacion('✅ Notas cargadas', 'success');
      }
    } catch(e) { console.error(e); Notificacion('❌ Error al cargar', 'error'); }
  }

  // Guardar
  $('.btn-save').click(async function(){
    const texto = $('.nota-text').val().trim();
    if (!texto) return Notificacion('⚠️ Escribe algo primero', 'warning');
    wiSpin(this, true);
    try {
      const cache = getls(CACHE);
      await setDoc(doc(db, 'misnotas', smile.usuario), { email: smile.email, usuario: smile.nombre, notas: texto, fechaUpdate: serverTimestamp(), ...(!cache?.fechaCreacion && { fechaCreacion: serverTimestamp() }) }, { merge: true });
      const ahora = Date.now();
      savels(CACHE, { email: smile.email, usuario: smile.nombre, notas: texto, fechaUpdate: ahora, fechaCreacion: cache?.fechaCreacion || ahora });
      $('.nota-fecha').html(`<i class="far fa-clock"></i> Actualizado: ${wiDate(Timestamp).get(ahora, 'DD/MM/YYYY HH:mm')}`);
      Notificacion('✅ Guardado exitosamente!', 'success');
    } catch(e) { console.error(e); Notificacion('❌ Error al guardar', 'error'); }
    finally { wiSpin(this, false); }
  });

  // Eliminar
  $('.btn-delete').click(function(){ if (!confirm('¿Eliminar todas las notas?')) return; $('.nota-text').val(''); $('.nota-fecha').html(`<i class="far fa-clock"></i> Nota creada: Sin notas`); Notificacion('🗑️ Notas eliminadas', 'info'); });
};

export const cleanup = () => { console.log('😊 Smile limpiado'); };