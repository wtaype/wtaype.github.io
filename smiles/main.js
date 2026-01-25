import $ from 'jquery';
import { wiLoad } from './widev.js';

['inicio', 'proyectos', 'skills', 'logros', 'contacto'].forEach(v => {
  wiLoad(`#${v}`, async () => {
    const { [v]: fn } = await import(`./web/${v}.js`); fn();
  });
});

import './footer.js';