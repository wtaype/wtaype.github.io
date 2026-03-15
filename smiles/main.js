import { rutas } from './rutas/ruta.js';
import { getls, wiSmart} from './widev.js';

['inicio','proyectos','skills','logros','contacto'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
import('./header.js'); rutas.init();

wiSmart({
css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
],
js: [() => import('https://kit.fontawesome.com/a8c6571af4.js'), () => import('./footer.js')]
});
