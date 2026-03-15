// INFORMACIÓN DEL APP 
export let id = 'wtaype'
export let app = 'Portafolio de Wilder Taype'
export let lanzamiento = 2024;
export let autor = '@wilder.taype';
export let ipdev = import.meta.env.VITE_DEV;
export let link = 'https://wtaype.github.io/';
export let version = 'v23';

/** Actualizar main luego esto, pero si es mucho, solo esto. (1)
git tag v23 -m "Version v23" ; git push origin v23 

//  ACTUALIZACIÓN PRINCIPAL ONE DEV [START] (2)
git add . ; git commit -m "Actualizacion Principal v23.10.10" ; git push origin main

// En caso de emergencia, para actualizar el Tag existente. (3)
git tag -d v23 ; git tag v23 -m "Version v23 actualizada" ; git push origin v23 --force
 ACTUALIZACION TAG[END]  */ 

