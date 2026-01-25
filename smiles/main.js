import $ from 'jquery';
import { wiVista } from './widev.js';

$('#wimain').children().css('opacity', 0).animate({ opacity: 1 }, 400);

['inicio', 'proyectos', 'skills', 'logros', 'contacto'].forEach(vista => {
  wiVista(`#${vista}`, async () => {
    const { [vista]: fn } = await import(`./web/${vista}.js`);
    fn();
  });
});

export const cleanup = () => $('#wimain').empty();
import './footer.js';