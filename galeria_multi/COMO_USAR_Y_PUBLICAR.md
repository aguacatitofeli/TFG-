# Galería de varios enjambres — cómo funciona y cómo añadir más

Tienes una web con una PORTADA que lista los enjambres, y una página de galería
por cada uno. Pero la página de galería es UNA SOLA (enjambre.html) que vale
para todos: cada enjambre solo aporta sus datos y sus imágenes.


## Estructura de archivos

    galeria_multi/
    ├── index.html              ← portada (lista de enjambres)
    ├── enjambre.html           ← plantilla de galería (NO se toca)
    └── enjambres/
        ├── enjambre1/
        │   ├── datos.js        ← config de ESTE enjambre
        │   └── sismogramas/    ← PNG de ESTE enjambre
        └── enjambre2/
            ├── datos.js
            └── sismogramas/

Solo tocas dos tipos de archivo:
  - index.html  → para listar los enjambres en la portada.
  - cada datos.js → para los datos de cada enjambre.
La plantilla enjambre.html no se toca nunca.


## Para AÑADIR un enjambre nuevo (p.ej. el 3)

1. Copia una carpeta de enjambre existente y renómbrala:
       enjambres/enjambre2/  ->  enjambres/enjambre3/

2. Mete en su carpeta sismogramas/ los PNG de ese enjambre
   (borra los que vinieran de la copia).

3. Abre enjambres/enjambre3/datos.js y edita:
       - eyebrow, titulo, desc     (los textos de arriba)
       - referencia (f, code, desc)  (la estacion patron de ese enjambre)
       - estaciones                  (la lista, con su grupo g: ok/mid/no)
   Los nombres en f deben coincidir con los PNG (sin la extension .png).

4. Abre index.html y añade una linea a la lista ENJAMBRES:
       {carpeta:"enjambre3", titulo:"Enjambre de ...", desc:"...", n:00},

¡Ya está! La portada lo mostrará y al pulsar entrará a su galería.


## Clasificar las estaciones de un enjambre

En cada datos.js, cada estacion tiene  g:"..."  con tres valores:
   "ok"  = óptima, seleccionada (verde)
   "mid" = aceptable, condicional (ámbar)
   "no"  = deficiente, descartada (rojo)
La referencia va aparte, en el bloque "referencia", y se muestra destacada arriba.


## IMPORTANTE antes de publicar

Las imágenes que vienen ahora son de PRUEBA. En cada enjambres/X/sismogramas/
pon los PNG reales de ese enjambre.


## Publicar en GitHub Pages

Igual que la galería de un solo enjambre:
1. Sube TODA la carpeta galeria_multi a un repositorio público en GitHub
   (puedes subir su contenido a la raíz del repo).
2. Settings > Pages > Branch "main" / "(root)" > Save.
3. Tu enlace será  https://TU_USUARIO.github.io/NOMBRE_REPO
4. Pégalo en el TFG con \url{...}

NOTA TÉCNICA: esta web carga los datos con archivos .js, así que NECESITA estar
en un servidor (como GitHub Pages) para funcionar. Si abres index.html con doble
clic desde tu ordenador (file://) puede que las galerías no carguen por seguridad
del navegador — es normal. En GitHub Pages funcionará perfectamente. Si quieres
probarla en local, abre una terminal en la carpeta y ejecuta:
       python -m http.server
y entra en  http://localhost:8000
