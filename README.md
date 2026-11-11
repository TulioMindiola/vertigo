# Vértigo Fashion Store · página web

Landing de una sola página construida a partir de `DESIGN.md` (concepto «La caída»).
HTML, CSS y JavaScript puros, sin dependencias ni proceso de compilación.

```
index.html        estructura y contenido (secciones C1 a C13)
styles.css        sistema de diseño (variables de la sección D) y estilos, móvil primero
main.js           fotos, catálogo, filtros, hilo, menú, perchero y WhatsApp
assets/img/       fotos WebP (480 y 720 px), imagen para compartir, favicon e icono iOS
DESIGN.md         documento del director creativo
```

**Ver la página:** servir la carpeta con cualquier servidor estático (o subirla al hosting) y abrir `index.html`.

## Fotos

Todas las fotos salen de publicaciones de **@vertigofashionctg** (20 publicaciones, ninguna compartida con otra cuenta). Cada foto está declarada en `main.js` (`FOTOS` y `PRODUCTOS`) con el código de su publicación.

- Las fotos de los carruseles llevan la ficha de precio sobreimpresa en **todas** las diapositivas, no solo en la primera. Por eso las fotos de calle, estudio y boutique se tomaron de **fotogramas limpios de los reels**. Las de catálogo de carrusel se recortaron desde el 25–31 % del ancho, lo que deja fuera la ficha y el logo de abajo a la derecha sin cortar la cabeza. El kimono se usa entero (su carrusel no lleva ficha).
- Instagram entrega como máximo 1080 px (fotos) y 720 px (reels), así que se exportan a **480 y 720 px** (`ANCHOS` en `main.js`).
- Galería D: el reel del Vestido Kamile tiene texto encima en todos los fotogramas, así que se usa el **Vestido Kissis en el estudio malva**.
- Categoría «Playa»: se usa el **Kimono** (foto limpia) en lugar de la salida de baño.

**Cambiar una foto:** exportarla en WebP como `assets/img/<archivo>-480.webp` y `assets/img/<archivo>-720.webp` con el mismo nombre de la que reemplaza. Si llegan originales en alta resolución, se puede subir `ANCHOS` (por ejemplo a `[800, 1600]`) y exportar todas en esos anchos.

## Catálogo y datos

- `PRODUCTOS` en `main.js`: precios, tallas, telas y códigos tomados del texto de cada publicación. `destacado: true` = aparece en «Todo».
- Tienda (historias destacadas «UBICACIÓN» y «HORARIO»): **Calle de la Cruz, local #9-33**. Lunes a sábado de 8:30 a. m. a 7:00 p. m.; domingos y festivos de 9:45 a. m. a 3:30 p. m. «Cómo llegar» abre Google Maps con esa dirección.
- WhatsApp: `WHATSAPP` y `MENSAJES` al inicio de `main.js`.

## Para revisar con la clienta

- **Código del Set Lucero:** el texto de la publicación dice **36643**, pero la ficha de la foto dice **Ref 37163** (que es el código del Vestido Sofy). En la web va 36643.
- **Telas sin publicar:** Set Madisón, Salida de baño y Kimono (en la web no se muestra la tela).
- **Logo en vector** (SVG/PDF): el de la página es un redibujado fiel del avatar. Si el oficial no tiene el asta de la T en su centro, ajustar `--logo-desfase` en `styles.css`.
- **Dominio:** al publicar, activar `og:image` y `canonical` en el `<head>`. La imagen para compartir ya está en `assets/img/compartir.jpg`.
- Opcional: fotos originales sin ficha (más nitidez en pantallas retina) y fotos de la fachada de la tienda.

## Decisiones de implementación

- **Hero:** la foto principal conserva 4:5 y se ancla al borde derecho. El H1 crece hasta 84 px según el espacio libre. Párrafo de unos 42 caracteres. «Ver la colección» baja bajo el botón si no cabe al lado de la foto colgante.
- **Hero en tablet:** H1 de 35–48 px (a 48 px no cabe en media pantalla de 768 px). El texto va arriba y la foto colgante baja 100 px.
- **Contraste AA:** antetítulos en Oliva hondo y textos secundarios en Tinta al 72 %.
- **Enlaces:** «Ver la colección ↓» lleva a «Recién llegadas»; el menú «Colección» lleva a «Siempre Tú».
- **Catálogo:** la Falda Lucero no entra porque no tiene categoría de filtro. Sí aparece en la galería.
- **El hilo:** animación ligada al scroll en CSS, con JavaScript como alternativa. Con «reducir movimiento» se dibuja completo.
