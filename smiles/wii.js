// INFORMACIÓN DEL APP 
export let id = 'wtaype'
export let app = 'Portafolio de Wilder Taype'
export let lanzamiento = 2024;
export let autor = '@wilder.taype';
export let ipdev = import.meta.env.VITE_DEV;
export let link = 'https://wtaype.me/';
export let version = 'v28';

/** Actualizar main luego esto, pero si es mucho, solo esto. (1)
git tag v28 -m "Version v28" ; git push origin v28 

//  ACTUALIZACIÓN PRINCIPAL ONE DEV [START] (2)
git add . ; git commit -m "Actualizacion Principal v28.10.10" ; git push origin main

// En caso de emergencia, para actualizar el Tag existente. (3)
git tag -d v28 ; git tag v28 -m "Version v28 actualizada" ; git push origin v28 --force
 ACTUALIZACION TAG[END]  */ 

