import { db } from '../firebase.js';
import { collection, doc, setDoc, deleteDoc, serverTimestamp, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { getls, savels, wiSpin, Notificacion, abrirModal, cerrarModal, wiDate, wiSuma, Mensaje } from '../widev.js';

const CACHE_KEY = 'proyectosls';
const fechadb = wiDate(Timestamp);

const normaliza = s => (s || '').toString().toLowerCase();
const buildTechs = s => s.split(',').map(t => t.trim()).filter(Boolean);

const fechaInput = v => {
  const g = fechadb?.get?.(v, 'date') || fechadb?.get?.(v, 'full') || '';
  if (/^\d{4}-\d{2}-\d{2}/.test(g)) return g.slice(0, 10);
  const d = v?.toDate?.() || (typeof v === 'string' && new Date(v));
  return d && !isNaN(d) ? d.toISOString().slice(0, 10) : '';
};

const fechaSave = v => fechadb?.save?.(v) || Timestamp.fromDate(new Date(v ? `${v}T00:00:00` : Date.now()));

let clickListener = null;
let submitListener = null;
let urlInputListener = null;
let idInputListener = null;

export function initGestionar(state, renderizar) {
  // ⚠️ Validación de rol estricta: SOLO editor, gestor o admin pueden gestionar
  const wi = getls('wiSmile');
  state.autenticado = !!(wi && ['editor', 'gestor', 'admin'].includes(wi.rol));

  // Traer proyectos actualizados desde Firestore (para uso interno de gestionar)
  const traerProyectos = async (forzar = false) => {
    if (!forzar) {
      const cache = (getls(CACHE_KEY) || {}).data || [];
      if (cache.length) {
        state.todos = cache;
        return;
      }
    }
    try {
      let snap;
      try {
        snap = await getDocs(query(collection(db, 'proyectos'), orderBy('creadoEn', 'desc')));
      } catch {
        snap = await getDocs(collection(db, 'proyectos'));
      }
      state.todos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      savels(CACHE_KEY, { data: state.todos, ts: Date.now() }, 24);
      savels('destacadospj', { data: state.todos.filter(p => p.destacado), ts: Date.now() }, 24);
      const buscarInput = document.getElementById('buscarProyecto');
      if (buscarInput) buscarInput.placeholder = `Buscar en ${state.todos.length} proyectos...`;
    } catch (e) {
      console.error('❌ proyectos (cliente):', e);
    }
  };

  // Trigger secreto: 7 clics en el título de la sección
  wiSuma('.h1pro', () => {
    state.autenticado = true;
    renderizar(0, true); // re-renderiza con la tarjeta de agregar
    Mensaje('¡Modo de gestión activado!', 'success');
  }, 7);

  // --- Helper de limpieza de feedback de ID ---
  const limpiarFeedback = () => {
    const feed = document.getElementById('idFeedback');
    if (feed) {
      feed.innerHTML = '';
      feed.className = 'id-feedback';
    }
    const btn = document.getElementById('btnGuardar');
    if (btn) btn.removeAttribute('disabled');
  };

  // --- Eventos Administrativos (Vanilla JS) ---

  const handleClicks = async (e) => {
    const target = e.target;

    // 1. Click Agregar Proyecto
    const cardAgregar = target.closest('#cardAgregar');
    if (cardAgregar) {
      limpiarFeedback();
      const form = document.getElementById('formProyecto');
      if (form) {
        form.reset();
        delete form.dataset.editId;
      }
      const tituloModal = document.getElementById('modalTitulo');
      if (tituloModal) tituloModal.textContent = 'Agregar Nuevo Proyecto';

      const inputFecha = document.getElementById('inputFecha');
      if (inputFecha) inputFecha.value = new Date().toISOString().split('T')[0];

      const inputDestacado = document.getElementById('inputDestacado');
      if (inputDestacado) inputDestacado.checked = false;

      const inputId = document.getElementById('inputId');
      if (inputId) {
        inputId.value = '';
        inputId.readOnly = false;
      }
      abrirModal('modalProyecto');
      return;
    }

    // 2. Click Editar Proyecto
    const btnEditar = target.closest('.btn_editar');
    if (btnEditar) {
      e.stopPropagation();
      limpiarFeedback();
      const id = btnEditar.getAttribute('data-id');
      const p = state.todos.find(x => x.id === id);
      if (!p) return Notificacion('Proyecto no encontrado', 'error');

      const tituloModal = document.getElementById('modalTitulo');
      if (tituloModal) tituloModal.textContent = 'Editar Proyecto';

      const inputTitulo = document.getElementById('inputTitulo');
      if (inputTitulo) inputTitulo.value = p.titulo || '';

      const inputDescripcion = document.getElementById('inputDescripcion');
      if (inputDescripcion) inputDescripcion.value = p.descripcion || '';

      const inputImg = document.getElementById('inputImg');
      if (inputImg) inputImg.value = p.img || '';

      const inputUrl = document.getElementById('inputUrl');
      if (inputUrl) inputUrl.value = p.url || '';

      const inputCategoria = document.getElementById('inputCategoria');
      if (inputCategoria) inputCategoria.value = p.categoria || '';

      const inputFecha = document.getElementById('inputFecha');
      if (inputFecha) inputFecha.value = fechaInput(p.fechaProyecto || p.creadoEn);

      const inputTecnologias = document.getElementById('inputTecnologias');
      if (inputTecnologias) inputTecnologias.value = (p.tecnologias || []).join(', ');

      const inputId = document.getElementById('inputId');
      if (inputId) {
        inputId.value = p.id || '';
        inputId.readOnly = true;
      }

      const inputDestacado = document.getElementById('inputDestacado');
      if (inputDestacado) inputDestacado.checked = !!p.destacado;

      const form = document.getElementById('formProyecto');
      if (form) form.dataset.editId = p.id;

      abrirModal('modalProyecto');
      return;
    }

    // 3. Click Eliminar Proyecto
    const btnEliminar = target.closest('.btn_eliminar');
    if (btnEliminar) {
      e.stopPropagation();
      const id = btnEliminar.getAttribute('data-id');
      if (!confirm('¿Seguro que deseas eliminar este proyecto de forma permanente?')) return;

      try {
        await deleteDoc(doc(db, 'proyectos', id));
        Notificacion('Proyecto eliminado ✓', 'success');
        await traerProyectos(true);
        state.filtrados = [...state.todos];
        renderizar(0, true);
      } catch (er) {
        console.error('❌ Error al eliminar proyecto:', er);
        Notificacion('Error al eliminar', 'error');
      }
      return;
    }
  };

  const handleSubmit = async (e) => {
    const form = e.target.closest('#formProyecto');
    if (!form) return;
    e.preventDefault();

    const editId = form.dataset.editId;
    const btn = document.getElementById('btnGuardar');

    const inputTitulo = document.getElementById('inputTitulo');
    const inputDescripcion = document.getElementById('inputDescripcion');
    const inputImg = document.getElementById('inputImg');
    const inputUrl = document.getElementById('inputUrl');
    const inputCategoria = document.getElementById('inputCategoria');
    const inputTecnologias = document.getElementById('inputTecnologias');
    const inputFecha = document.getElementById('inputFecha');
    const inputDestacado = document.getElementById('inputDestacado');
    const inputId = document.getElementById('inputId');

    const docId = editId || `${(inputId?.value || '').trim().toLowerCase().replace(/\s+/g, '-')}_${Date.now()}`;

    const datos = {
      titulo: (inputTitulo?.value || '').trim(),
      descripcion: (inputDescripcion?.value || '').trim(),
      img: (inputImg?.value || '').trim(),
      url: (inputUrl?.value || '').trim(),
      categoria: inputCategoria?.value || '',
      tecnologias: buildTechs(inputTecnologias?.value || ''),
      destacado: !!inputDestacado?.checked,
      fechaProyecto: fechaSave(inputFecha?.value || ''),
    };

    if (!datos.titulo || !datos.descripcion || !docId) {
      return Notificacion('Completa los campos obligatorios', 'warning');
    }

    wiSpin(btn);
    const now = serverTimestamp();
    const payload = { ...datos, UpdateEn: now };
    if (!editId) payload.creadoEn = now;

    try {
      await setDoc(doc(db, 'proyectos', docId), payload, { merge: true });
      Notificacion(editId ? 'Proyecto actualizado ✓' : 'Proyecto creado ✓', 'success');
      await traerProyectos(true);
      state.filtrados = [...state.todos];
      cerrarModal('modalProyecto');
      renderizar(0, true);
    } catch (er) {
      console.error('❌ Error al guardar proyecto:', er);
      Notificacion('Error al guardar en la base de datos', 'error');
    } finally {
      wiSpin(btn, false);
    }
  };

  // --- Smart ID automático ---
  const handleUrlInput = (e) => {
    const target = e.target;
    if (target.id !== 'inputUrl') return;

    const inputId = document.getElementById('inputId');
    // Solo auto-sugerir si el ID está vacío y es editable (Agregar Proyecto)
    if (inputId && !inputId.readOnly && !inputId.value.trim()) {
      const url = target.value.trim();
      if (!url) return;

      try {
        let host = '';
        if (/^https?:\/\//i.test(url)) {
          host = new URL(url).hostname;
        } else {
          const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/:]+)/i);
          host = match ? match[1] : url;
        }

        let suggestedId = '';
        if (host.includes('github.com')) {
          const pathParts = url.split('?')[0].split('/').filter(Boolean);
          suggestedId = pathParts[pathParts.length - 1] || '';
        } else {
          const dots = host.split('.');
          suggestedId = dots[0] === 'www' ? dots[1] : dots[0];
        }

        suggestedId = suggestedId.toLowerCase().replace(/[^a-z0-9_-]/g, '');

        if (suggestedId && suggestedId !== 'github') {
          inputId.value = suggestedId;
          validarIdDisponibilidad(suggestedId);
        }
      } catch (err) {}
    }
  };

  // --- Validación en tiempo real ---
  const handleIdInput = (e) => {
    const target = e.target;
    if (target.id !== 'inputId') return;

    // Auto-sanitizar espacios y caracteres raros al escribir
    const val = target.value.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-]/g, '');
    target.value = val;
    validarIdDisponibilidad(val);
  };

  const validarIdDisponibilidad = (id) => {
    const feed = document.getElementById('idFeedback');
    const btn = document.getElementById('btnGuardar');
    if (!feed) return;

    if (!id) {
      feed.innerHTML = '';
      feed.className = 'id-feedback';
      if (btn) btn.removeAttribute('disabled');
      return;
    }

    // Comprobar disponibilidad en memoria (0 reads de Firebase)
    const existe = state.todos.some(p => p.id === id);
    if (existe) {
      feed.innerHTML = `<i class="fas fa-times-circle" title="ID ya registrado"></i>`;
      feed.className = 'id-feedback ocupado';
      if (btn) btn.setAttribute('disabled', 'true');
    } else {
      feed.innerHTML = `<i class="fas fa-check-circle" title="ID disponible"></i>`;
      feed.className = 'id-feedback disponible';
      if (btn) btn.removeAttribute('disabled');
    }
  };

  // Registrar listeners y guardarlos para limpieza
  clickListener = handleClicks;
  submitListener = handleSubmit;
  urlInputListener = handleUrlInput;
  idInputListener = handleIdInput;

  document.addEventListener('click', clickListener);
  document.addEventListener('submit', submitListener);
  document.addEventListener('input', urlInputListener);
  document.addEventListener('input', idInputListener);
}

export function cleanupGestionar() {
  if (clickListener) {
    document.removeEventListener('click', clickListener);
    clickListener = null;
  }
  if (submitListener) {
    document.removeEventListener('submit', submitListener);
    submitListener = null;
  }
  if (urlInputListener) {
    document.removeEventListener('input', urlInputListener);
    urlInputListener = null;
  }
  if (idInputListener) {
    document.removeEventListener('input', idInputListener);
    idInputListener = null;
  }
}

/**
 * Carga proyectos frescos desde Firestore en background.
 * Si forzar=false, primero intenta usar la caché local (sin leer Firestore).
 * Si hay datos nuevos, actualiza state y re-renderiza silenciosamente.
 * @param {object} state - Estado compartido de proyectos
 * @param {function} renderizar - Función de render
 * @param {boolean} forzar - Si es true, ignora la caché y va a Firestore
 */
export async function traerProyectosCliente(state, renderizar, forzar = false) {
  try {
    const { db } = await import('../firebase.js');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const { getls, savels } = await import('../widev.js');

    const CACHE_KEY = 'proyectosls';
    if (!forzar) {
      const cache = (getls(CACHE_KEY) || {}).data || [];
      if (cache.length && cache.length >= state.todos.length) return;
    }

    let snap;
    try {
      snap = await getDocs(query(collection(db, 'proyectos'), orderBy('creadoEn', 'desc')));
    } catch {
      snap = await getDocs(collection(db, 'proyectos'));
    }

    const nuevos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (nuevos.length > state.todos.length) {
      savels(CACHE_KEY, { data: nuevos, ts: Date.now() }, 24);
      savels('destacadospj', { data: nuevos.filter(p => p.destacado), ts: Date.now() }, 24);
      state.todos = nuevos;
      state.filtrados = [...nuevos];
      const buscarInput = document.getElementById('buscarProyecto');
      if (buscarInput) buscarInput.placeholder = `Buscar en ${nuevos.length} proyectos...`;
    }
  } catch (e) {
    // Silencioso en background: no mostrar error al usuario
    console.warn('traerProyectosCliente (background):', e);
  }
}
