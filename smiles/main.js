import('./header.js');
import $ from 'jquery';
import { getls } from './widev.js';
import { rutas } from './rutas/ruta.js';

rutas.register('/inicio', () => import('./web/inicio.js')); // Página pública

const pages = ['acerca'];
pages.forEach(pg => rutas.register(`/${pg}`, () => import(`./pages/${pg}.js`))); // Páginas generales

rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./smile/descubre.js')); //Con Auth 

rutas.init(); // Rutas registrados y go excelente app. 