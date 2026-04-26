// INFORMACIÓN DEL APP 
export let id = 'wtaype'
export let app = 'Portafolio de Wilder Taype'
export let lanzamiento = 2024;
export let autor = '@wilder.taype';
export let ipdev = import.meta.env.VITE_DEV;
export let link = 'https://wtaype.me/';
export let version = 'v29';

/** ACTUALIZAR AL TAG POR SEGURIDAD [TAG NUEVO] (1)
git tag v29 -m "Version v29" ; git push origin v29

ACTUALIZACIÓN AL MAIN PRINCIPAL DEL PROYECTO [MAIN] (2)
git add . ; git commit -m "Actualizacion Principal v29.10.10" ; git push origin main

// REEMPLAZAR TAG DE SEGURIDAD EXISTENTE [TAG REMPLAZO] (3)
git tag -d v29 ; git tag v29 -m "Version v29 actualizada" ; git push origin v29 --force

// Actualizar versiones de seguridad [ELIMINAR CARPETA - ARCHIVO ONLINE] (4)
git rm --cached skills-lock.json ; git commit -m "Archivo Eliminado" ; git push origin main
git rm -r --cached .claude/ ; git commit -m "Carpeta Eliminada" ; git push origin main
 ACTUALIZACION TAG[END] */
