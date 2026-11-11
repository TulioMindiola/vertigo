# VÉRTIGO — Documento de diseño web

Cliente: **Vértigo Fashion Store** · Cartagena, Colombia · Instagram `@vertigofashionctg`
Fuente del análisis: perfil de Instagram revisado el 10-nov-2026 (1.063 publicaciones, 35,1 mil seguidores, cuenta verificada, ~180 publicaciones leídas).
Objetivo de la página: conseguir clientas nuevas, vender por WhatsApp, generar contactos y transmitir profesionalismo.

> Datos verificados en el perfil: lema «Diseñado para mujeres que inspiran 🤎», «Hecho en Colombia», «📍 Cartagena», «Envíos nacionales e internacionales», pedidos por WhatsApp **+57 300 598 9482** (`wa.me/573005989482`).
> No verificado (no se abrieron las historias destacadas «UBICACIÓN» y «HORARIO»): dirección exacta y horario. Ver sección E.

---

## A. Resumen de identidad visual

### Colores (medidos sobre el logo y las fotos del perfil)

| Rol | Nombre | HEX | Origen |
|---|---|---|---|
| Fondo de marca | Crema | `#F4E4CC` | Fondo del logo |
| Fondo claro de página | Papel | `#FBF3E6` | Crema aclarado |
| Color de marca | Oliva | `#5C7444` | Letras del logo |
| Oliva de botón | Oliva hondo | `#46592F` | Oliva oscurecido para contraste AA |
| Texto y secciones oscuras | Oliva tinta | `#2B3323` | — |
| Contraste fotográfico | Malva estudio | `#8A7A7D` | Pared con molduras del estudio (solo líneas y detalles) |
| Fondo de sección oscura | Malva hondo | `#5E4F54` | Malva oscurecido para que el texto crema cumpla AA |
| Acento | Cacao | `#6B4A3A` | Lunares de la colección «Siempre Tú» y el 🤎 de la bio |
| Solo colección | Celeste raya | `#CFE0E6` | Rayas del arte «Siempre Tú» |
| Solo colección | Mantequilla | `#F3E9B8` | Rayas del arte «Siempre Tú» |

### Tipografías

- **Logo**: palo seco geométrico muy fino, en mayúsculas, con la **T de asta larga que baja por debajo de la línea** y un filete horizontal; debajo «fashion store» en minúsculas pequeñas. Usar siempre el archivo del logo, nunca escribirlo con una fuente.
- **Titulares → Josefin Sans** (300 y 400, mayúsculas, tracking amplio). Es la más cercana al trazo del logo.
- **Texto e interfaz → Jost** (400, 500, 600). El 600 reproduce los precios en negrita de las fichas de Instagram.
- **Un solo acento caligráfico → Pinyon Script**, exclusivamente para el nombre de la colección «Siempre Tú» (así aparece en su arte).

### Estilo fotográfico

1. **Estudio malva**: modelo de cuerpo entero frente a pared malva con molduras y arco, planta monstera, piso de cemento pulido. Es el fondo más repetido y más reconocible.
2. **Boutique**: interior claro con nichos iluminados en luz cálida, espejo dorado, perchero con prendas.
3. **Centro histórico de Cartagena**: muro azul con balaustrada blanca, portones coloniales, reja de hierro sobre muro amarillo. Luz de día, modelo caminando.
4. Todas las fotos son verticales (4:5), con modelo real, bolso de mimbre o cuero y accesorios dorados.
5. **Ficha sobreimpresa**: arriba a la izquierda, en blanco: nombre de la prenda, filete fino, tallas, referencia, tela y precio en negrita. Abajo a la derecha, el logo en blanco.

### Personalidad y tono

Femenina, cercana, cálida y segura. Habla de tú, celebra a la mujer en todas las edades («la moda no tiene edad: tiene actitud, esencia y la libertad de ser quien eres»). Nada de lujo distante: elegancia accesible.

### Producto y público

- **Qué vende**: ropa femenina de diseño propio hecha en Colombia. Vestidos, sets (conjuntos de dos piezas), camisas y blusas, línea de crochet y ojalillo, faldas, salidas de baño, pantalones, enterizos, kimonos.
- **Lo más importante**: vestidos y sets con nombre propio (Zuny, Kissis, Lucero, Aussi, Mildred, Madisón) entre $110.000 y $200.000; línea de crochet entre $50.000 y $120.000; camisas entre $60.000 y $80.000.
- **Tallas**: S a XXL en prendas con nombre; S/M y L/XL en crochet.
- **Telas que nombra**: apariencia lino, popelina, crochet, ojalillo, rayón, chalis, microfibra.
- **Público aparente**: mujeres de 25 a 60 años, de Cartagena y de todo el país, que compran por WhatsApp desde Instagram y buscan prendas frescas, coloridas y de talla amplia.

### Elementos gráficos propios

La T de asta larga del logo · el filete fino bajo el nombre · la ficha de prenda (nombre / filete / tallas / ref / tela / precio) · las rayas celeste-mantequilla con lunares cacao de «Siempre Tú» · el texto en círculo «COLECCIÓN».

---

## B. Concepto creativo — «La caída»

*Vértigo* es altura, y en costura **la caída** es cómo cuelga una tela. La página une las dos cosas con un solo gesto tomado del logo: **el asta de la T baja y se convierte en un hilo** que recorre toda la página de arriba abajo.

- El hilo nace del logo del encabezado y desciende por el eje central.
- Las fotos y las fichas **cuelgan** de ese hilo, alternando a izquierda y derecha (composición editorial asimétrica).
- En la sección de categorías el hilo se vuelve horizontal y pasa a ser **un perchero** del que cuelgan las prendas.
- Todo lo que aparece en pantalla **cae a su sitio desde arriba** (nunca sube desde abajo).
- El hilo termina en el pie de página con una plomada: un lunar cacao.

Resultado: una página clara, crema y oliva, de aire editorial, con mucha fotografía vertical y un único motivo reconocible que nadie más tiene porque sale del logo de la marca.

---

## C. Diseño de cada sección

Retícula de escritorio: 12 columnas, ancho máximo 1320 px, medianil 24 px, margen lateral 48 px. El **eje central** (50 % del ancho) es donde vive el hilo.

### C0. Hilo (elemento transversal)

- Línea vertical de 1,5 px, color Oliva `#5C7444`, sobre el eje central, desde el borde inferior del encabezado hasta el pie.
- Se dibuja con el scroll (crece desde arriba). En su extremo viaja **la plomada**: círculo cacao de 9 px.
- Pasa por detrás de las fotos; donde una foto o ficha «cuelga», hay un nudo: círculo de 5 px oliva en el borde superior del elemento.
- Se interrumpe en las secciones de fondo completo (C5, C7, C8, C10) y retoma después.
- **Tablet**: igual, eje central. **Móvil**: no hay línea continua; el hilo aparece como **conectores verticales de 64 px centrados entre sección y sección**, más el tramo inicial bajo el logo.

### C1. Barra de anuncio

- Fondo Oliva tinta, texto Crema, Jost 500 de 12 px, mayúsculas, tracking 0,14 em, alto 36 px.
- Texto corrido en marquesina lenta (40 s por vuelta, se detiene al pasar el cursor): «Hecho en Colombia · Envíos nacionales e internacionales · Tallas de la S a la XXL · Pedidos por WhatsApp».
- Móvil: misma marquesina, 11 px, alto 32 px.

### C2. Encabezado y navegación

- Fondo Crema, alto 76 px, fijo arriba. Al bajar 80 px: alto 60 px, fondo Crema al 92 % con desenfoque de 12 px y filete inferior de 1 px Oliva al 20 %.
- **Logo centrado**, alto 34 px (28 px al encoger), colocado de modo que **el asta de la T quede exactamente sobre el eje central** (desplazar el logo lo necesario): de ahí nace el hilo.
- Izquierda: enlaces «Colección», «Categorías», «Cartagena», «La tienda». Jost 500, 13 px, mayúsculas, tracking 0,12 em, color Oliva tinta. Al pasar el cursor, un filete de 1 px crece de izquierda a derecha bajo el texto (200 ms).
- Derecha: icono de Instagram (enlace al perfil) y botón primario pequeño «Pedir por WhatsApp».
- **Tablet (≤1024)**: se ocultan los enlaces de la izquierda; aparece un botón de menú (dos líneas) a la izquierda; a la derecha queda solo el botón de WhatsApp reducido a icono.
- **Móvil**: logo centrado, menú a la izquierda, icono de WhatsApp a la derecha. El menú abre un panel a pantalla completa en Crema que **cae desde arriba** (450 ms), con los enlaces en Josefin Sans 300 de 32 px y el botón de WhatsApp al final.

### C3. Hero

- Fondo Crema. Alto: `min(100vh − 112px, 720px)`; debe verse completo en 1536×735.
- **Mitad izquierda (columnas 2–6)**, alineada a la izquierda, centrada en vertical:
  - Antetítulo: «Fashion store · Cartagena de Indias», Jost 500, 12 px, mayúsculas, tracking 0,18 em, Oliva, precedido de un filete de 32 px.
  - H1: **«Diseñado para mujeres que inspiran»** en tres líneas (DISEÑADO PARA / MUJERES / QUE INSPIRAN). Josefin Sans 300, mayúsculas, `clamp(44px, 5.4vw, 84px)`, interlineado 1,02, tracking 0,04 em, Oliva tinta. La palabra «INSPIRAN» en Oliva `#5C7444`.
  - Párrafo: «Vestidos, sets y camisas hechos en Colombia, de la S a la XXL. Pídelos por WhatsApp y los enviamos a todo el país y al exterior.» Jost 400, 18 px, máximo 42 caracteres por línea.
  - Botones: primario «Pedir por WhatsApp» + enlace de texto «Ver la colección ↓».
- **Mitad derecha (columnas 7–12)**: foto principal vertical 4:5 que **sangra hasta el borde derecho** de la ventana y ocupa todo el alto del hero. Imagen: *Set Luna* caminando frente al portón colonial.
- **Foto colgante**: una segunda foto 3:4 de 230 px de ancho, **centrada sobre el eje**, colgando del hilo en el tercio inferior del hero y sobresaliendo 80 px hacia la sección siguiente. Imagen: *Vestido Aussi* frente a la reja. Borde de 6 px Crema, sombra de tarjeta colgante. Lleva debajo una **ficha** pequeña (ver sistema) con nombre y precio.
- Entrada: el hilo baja desde el logo (900 ms); la foto principal se descubre de arriba abajo (recorte, 900 ms); el H1 cae línea a línea (desfase de 90 ms); la foto colgante baja y hace un vaivén de péndulo de 2° que se amortigua en 1,2 s.
- **Tablet**: mismas dos mitades (texto 6 col, foto 6 col), H1 a 48 px, foto colgante de 180 px.
- **Móvil**: una columna. Orden: antetítulo, H1 (38–42 px, tres líneas, centrado), foto principal 4:5 a todo el ancho con 16 px de margen, párrafo, botón primario a todo el ancho. La foto colgante pasa a ser una miniatura de 120 px superpuesta en la esquina inferior izquierda de la foto principal, con su ficha. El hilo: tramo de 40 px entre el logo y el antetítulo.

### C4. Presentación — «Mujeres que inspiran»

- Fondo Papel. Relleno vertical 160 px (la foto colgante del hero invade los primeros 80 px).
- **Izquierda del eje (columnas 1–5)**: foto vertical 4:5 de estudio malva (*Vestido Zuny*), colgada del hilo por su esquina superior derecha mediante un tramo horizontal corto de 48 px.
- **Derecha del eje (columnas 8–12)**:
  - Antetítulo «La marca».
  - Frase grande, Josefin Sans 300, 40 px, sin mayúsculas, interlineado 1,2: «La moda no tiene edad: tiene actitud, esencia y la libertad de ser quien eres.» (cita textual de su publicación).
  - Párrafo Jost 18 px: «En Vértigo diseñamos y confeccionamos en Colombia prendas frescas, con color y con buena caída, pensadas para acompañarte en cada etapa.»
  - Tres cifras en fila separadas por filetes verticales: **35 mil** seguidoras en Instagram · **S–XXL** tallas · **100 %** hecho en Colombia. Número en Josefin Sans 300 de 44 px Oliva; etiqueta Jost 13 px mayúsculas.
- **Tablet**: foto 5 col, texto 6 col. **Móvil**: texto primero, foto después a todo el ancho; cifras en tres columnas compactas (número 30 px).

### C5. Categorías — «El perchero»

- Fondo Crema, relleno 120 px. Título a la izquierda: antetítulo «Categorías» + H2 «Elige por dónde empezar».
- El hilo vertical llega al borde superior y **gira**: una línea horizontal de 1,5 px Oliva cruza toda la ventana (el perchero) y se dibuja de izquierda a derecha al entrar (900 ms).
- Del perchero cuelgan **5 tarjetas de categoría**, cada una de un hilo de 28 px con su nudo:
  1. **Vestidos** — «desde $80.000»
  2. **Sets** — «desde $80.000»
  3. **Camisas y blusas** — «desde $50.000»
  4. **Crochet y ojalillo** — «desde $50.000»
  5. **Playa** (salidas de baño y kimonos) — «desde $70.000»
- Tarjeta: foto 3:4 (ancho 264 px), debajo el nombre en Josefin Sans 400 de 20 px mayúsculas y el «desde» en Jost 14 px. Alturas de hilo alternas (28 / 56 px) para que el conjunto no quede alineado como plantilla.
- Interacción: fila arrastrable en horizontal; al arrastrar o pasar el cursor, cada tarjeta **se mece** como prenda en perchero (rotación de hasta 3° con origen en el nudo, vuelve en 600 ms). Clic: baja a C6 con el filtro de esa categoría activo.
- **Tablet**: fila deslizable con ajuste por tarjeta; se ven 3,5 tarjetas. **Móvil**: igual, tarjetas de 200 px, se ven 1,6; el perchero queda fijo arriba de la fila; sin vaivén al tocar, solo al deslizar.

### C6. Productos destacados — «Recién llegadas»

- Fondo Papel, relleno 120 px. Cabecera en dos columnas: a la izquierda antetítulo «Lo nuevo» + H2 «Recién llegadas»; a la derecha los **filtros** en fila (Todo · Vestidos · Sets · Camisas y blusas · Crochet · Playa).
- Filtro: texto Jost 500 de 13 px mayúsculas; el activo lleva filete inferior de 1,5 px Oliva y color Oliva tinta; los demás Oliva tinta al 55 %.
- Retícula de **4 columnas**, 8 productos, medianil 24 px horizontal y 56 px vertical. Las columnas 2 y 4 bajan 40 px respecto a la 1 y la 3 (ritmo asimétrico).
- **Tarjeta de producto** (ver sistema): foto 4:5; al pasar el cursor cambia con fundido a la segunda foto y aparece en la base un botón «Pedir por WhatsApp» que cae desde el borde superior de la foto (250 ms). Debajo, la **ficha**: nombre, filete, tallas · tela, código y precio.
- Cada botón abre WhatsApp con mensaje ya escrito con nombre y código de la prenda.
- Bajo la retícula, centrado: botón secundario «Ver todo el catálogo en Instagram».
- Al cambiar de filtro: las tarjetas salen con fundido (150 ms) y las nuevas caen escalonadas (40 ms entre una y otra).
- **Tablet**: 3 columnas, sin desfase. **Móvil**: 2 columnas, medianil 12 px, ficha reducida (nombre, precio y tallas); el botón de WhatsApp queda siempre visible como icono circular de 40 px en la esquina inferior derecha de la foto; filtros en fila deslizable.

Productos iniciales (datos tomados de las publicaciones; confirmar precios con la clienta):

| # | Prenda | Precio | Tallas | Tela | Código | Categoría |
|---|---|---|---|---|---|---|
| 1 | Vestido Zuny | $200.000 | S–XXL | Apariencia lino | 37320 | Vestidos |
| 2 | Vestido Kissis | $200.000 | S–XXL | Ojalillo bordado | 32233 | Vestidos |
| 3 | Set Lucero | $150.000 | confirmar | Apariencia lino | confirmar | Sets |
| 4 | Vestido Aussi | $130.000 | confirmar | Apariencia lino | confirmar | Vestidos |
| 5 | Set Luna | $120.000 | confirmar | confirmar | confirmar | Sets |
| 6 | Set crochet | $120.000 | S/M – L/XL | Crochet | REF 0308 | Crochet |
| 7 | Blusa Merlina | $80.000 | S–XXL | Apariencia lino | 37318 | Camisas y blusas |
| 8 | Camisa Lauris | $80.000 | S–XXL | Popelina | 28022 | Camisas y blusas |

Reserva para completar filtros: Falda Lucero $100.000 · Vestido Mildred $140.000 (S–XXL, microfibra, 34548) · Set Madisón $140.000 (35549) · Camisa Indira $70.000 (S–XXL, popelina, 28164) · Camisa Gala $80.000 (velino bordado, 38063) · Blusa crochet $50.000 (0568) · Falda crochet $90.000 · Salida de baño $90.000 (REF 0513) · Kimono $70.000 (1027).

### C7. Colección — «Siempre Tú»

- Sección a ancho completo con el **fondo del arte original**: rayas verticales alternas Celeste raya y Mantequilla de 28 px (hechas con CSS, no con imagen), y lunares Cacao de 10–22 px dispersos solo en las franjas superior e inferior.
- Centro: bloque Crema de 720 px de ancho, relleno 72 px, borde de 1 px Cacao al 30 %:
  - «SIEMPRE» en Pinyon Script, 96 px, Cacao, y «TÚ» en Josefin Sans 300 de 72 px, pegados como en el arte.
  - Alrededor de «TÚ», la palabra «COLECCIÓN» en círculo (texto sobre trazo SVG, Jost 500, 12 px, tracking 0,3 em), girando muy despacio (60 s por vuelta).
  - Lema en mayúsculas espaciadas: «El tiempo pasa. Tu esencia permanece.» Jost 500, 13 px, tracking 0,3 em.
  - Párrafo (texto de su publicación, resumido): «Una colección creada para celebrar a la mujer en cada etapa de su vida: colores que alegran, estampados con personalidad y prendas que acompañan momentos.»
  - Botón primario «Pedir la colección por WhatsApp».
- A ambos lados del bloque, dos fotos verticales de la colección que se superponen 60 px sobre él, una más alta que la otra (izquierda arriba, derecha abajo).
- **Tablet**: bloque de 560 px, fotos de 200 px. **Móvil**: rayas de 18 px; bloque Crema a todo el ancho con 16 px de margen; «Siempre» a 60 px y «TÚ» a 44 px; las dos fotos pasan debajo del bloque en fila de dos.

### C8. Galería — «Hecho en Cartagena»

- Fondo Malva hondo `#5E4F54`, texto Crema. Relleno 140 px. Es la sección oscura que da contraste y recuerda la pared del estudio.
- Cabecera a la izquierda (columnas 1–5): antetítulo «📍 Cartagena de Indias» (sin emoji en la web: usar icono de línea), H2 «Nacimos entre balcones y portones» y una línea: «Diseñamos en Cartagena para el calor, el color y el paseo.»
- **Galería editorial de 5 fotos** en mosaico asimétrico de 12 columnas:
  - Fila 1: foto A (col 1–4, 4:5), foto B (col 6–9, 4:5, baja 80 px), foto C (col 10–12, 3:4).
  - Fila 2: foto D (col 2–5, 3:4), foto E (col 7–12, 16:10, interior de la boutique).
  - A, B, C = centro histórico (muro azul, portón, reja). D = estudio malva. E = boutique.
- Cada foto lleva en su esquina inferior izquierda un pie de 12 px en mayúsculas: lugar o prenda (p. ej. «Falda Lucero · Centro histórico»).
- Movimiento: cada foto se descubre de arriba abajo al entrar; B y D se desplazan en vertical más lento que el resto (paralaje de 40 px máximo).
- Sin visor emergente: las fotos enlazan a su publicación de Instagram en pestaña nueva.
- **Tablet**: 2 columnas con desfase de 48 px. **Móvil**: carrusel horizontal con ajuste, fotos de 78 % del ancho, indicador «1 / 5» en Jost 12 px.

### C9. Beneficios — «Por qué Vértigo»

- Fondo Crema, relleno 120 px. Sin tarjetas ni cajas: **cuatro columnas separadas por filetes verticales de 1 px**, cada una colgando del hilo horizontal superior por un nudo.
- Cada columna: número en Josefin Sans 300 de 56 px Oliva (01–04), título en Josefin Sans 400 de 20 px mayúsculas, texto Jost 16 px.
  1. **Hecho en Colombia** — «Diseño y confección propios.»
  2. **De la S a la XXL** — «Prendas pensadas para cuerpos reales.»
  3. **Envíos a todo el país y al exterior** — «Despachamos desde Cartagena.»
  4. **Atención por WhatsApp** — «Te ayudamos a elegir talla y color.»
- **Tablet**: 2 × 2. **Móvil**: lista vertical; número a la izquierda (40 px), texto a la derecha, filete horizontal entre elementos.

### C10. Llamada a la acción — «Cómo pedir»

- Fondo Oliva tinta `#2B3323`, texto Crema, relleno 140 px.
- Izquierda (columnas 1–6): H2 grande Josefin Sans 300, 64 px, mayúsculas: «Tu próxima prenda está a un mensaje». Debajo, botón primario invertido (fondo Crema, texto Oliva tinta) «Escribir por WhatsApp» y el número **+57 300 598 9482** en Jost 18 px.
- Derecha (columnas 8–12): tres pasos unidos por un hilo vertical Crema al 40 % con un nudo por paso:
  1. «Elige tu prenda y anota el código.»
  2. «Escríbenos por WhatsApp con tu talla.»
  3. «La recibes en tu ciudad.»
- **Móvil**: H2 a 36 px, botón a todo el ancho, pasos debajo.
- No mencionar medios de pago ni tiempos de entrega: no están verificados.

### C11. Contacto — «La tienda»

- Fondo Papel, relleno 120 px. Dos mitades alrededor del eje:
  - Izquierda: foto 4:5 del interior de la boutique (nichos iluminados y perchero).
  - Derecha: H2 «Visítanos en Cartagena»; lista de datos con icono de línea y filete entre filas: **Dirección** (pendiente), **Horario** (pendiente), **WhatsApp** +57 300 598 9482, **Instagram** @vertigofashionctg. Botones: primario «Pedir por WhatsApp», secundario «Cómo llegar» (solo si se confirma la dirección).
- Sin formulario: todo contacto va a WhatsApp.
- **Móvil**: datos primero, foto después.

### C12. Pie de página

- Fondo Crema. El hilo llega aquí y **termina en la plomada** (lunar Cacao de 14 px) justo encima del logo grande centrado (ancho 280 px).
- Bajo el logo: lema «Diseñado para mujeres que inspiran» en Jost 13 px mayúsculas espaciadas.
- Fila de enlaces: Colección · Categorías · Cartagena · La tienda · Instagram · WhatsApp.
- Línea legal: «© 2026 Vértigo Fashion Store · Cartagena, Colombia · Hecho en Colombia».
- Móvil: todo centrado en columna; dejar 88 px de espacio inferior para la barra fija.

### C13. Barra fija de WhatsApp (solo móvil y tablet)

- Aparece al pasar el hero. Barra inferior de 64 px, fondo Crema al 95 % con desenfoque y filete superior; dentro, botón primario a todo el ancho «Pedir por WhatsApp». Se oculta al llegar a C10 y al pie.
- Escritorio: en su lugar, botón circular de 56 px Oliva hondo con icono de WhatsApp Crema, fijo abajo a la derecha.

### Testimonios

No se incluyen: no hay reseñas verificables en el perfil. La prueba social es la cifra de 35 mil seguidoras y la cuenta verificada (C4).

---

## D. Sistema de diseño

### Paleta (variables)

```
--crema:#F4E4CC  --papel:#FBF3E6  --oliva:#5C7444  --oliva-hondo:#46592F
--tinta:#2B3323  --malva:#8A7A7D  --malva-hondo:#5E4F54  --cacao:#6B4A3A
--celeste:#CFE0E6  --mantequilla:#F3E9B8
```

Reglas: texto de párrafo siempre en Tinta sobre fondos claros y en Crema sobre fondos oscuros. Oliva `#5C7444` solo en titulares grandes, líneas e iconos (no en texto pequeño). Celeste y Mantequilla no salen de C7. Sin degradados.

### Escala tipográfica

| Uso | Fuente | Escritorio | Móvil | Detalles |
|---|---|---|---|---|
| H1 | Josefin Sans 300 | clamp(44, 5.4vw, 84) px | 38–42 px | mayúsculas, interlineado 1,02, tracking 0,04 em |
| H2 | Josefin Sans 300 | 48 px (64 en C10) | 32 px (36 en C10) | mayúsculas, interlineado 1,1, tracking 0,04 em |
| Frase destacada | Josefin Sans 300 | 40 px | 26 px | sin mayúsculas, interlineado 1,2 |
| H3 / nombre de tarjeta | Josefin Sans 400 | 20 px | 17 px | mayúsculas, tracking 0,08 em |
| Párrafo | Jost 400 | 18 px | 16 px | interlineado 1,6, máximo 62 caracteres |
| Texto pequeño | Jost 400 | 14 px | 13 px | — |
| Antetítulo / etiqueta | Jost 500 | 12 px | 11 px | mayúsculas, tracking 0,18 em |
| Precio | Jost 600 | 18 px | 16 px | cifras tabulares |
| Colección | Pinyon Script 400 | 96 px | 60 px | solo «Siempre» |

### Espaciados

Base 4 px. Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 120 · 160.
Relleno vertical de sección: 120 px escritorio (140–160 en C4, C8, C10) · 88 px tablet · 64 px móvil. Margen lateral: 48 / 32 / 16 px.

### Bordes

Radio 2 px en fotos, tarjetas y botones (marca de líneas rectas y finas; nada de esquinas muy redondeadas). Círculo completo solo en nudos, plomada e iconos flotantes. Filetes: 1 px, color del texto al 20 %. Hilo: 1,5 px Oliva.

### Sombras

Una sola, para lo que cuelga: `0 18px 30px -18px rgba(43,51,35,.35)`. Nada más lleva sombra.

### Botones

- **Primario**: fondo Oliva hondo, texto Crema, Jost 500 de 13 px, mayúsculas, tracking 0,14 em, alto 52 px (44 en encabezado), relleno horizontal 28 px, radio 2 px, icono de WhatsApp de 18 px a la izquierda. Cursor encima: fondo Tinta y el icono baja 2 px y vuelve (200 ms). Foco: contorno de 2 px Cacao separado 3 px.
- **Primario invertido** (sobre fondo oscuro): fondo Crema, texto Tinta.
- **Secundario**: transparente, borde de 1 px Tinta, texto Tinta; cursor encima: fondo Tinta, texto Crema.
- **Enlace de texto**: Jost 500 de 13 px mayúsculas con filete inferior de 1 px; al pasar el cursor el filete se redibuja de izquierda a derecha.
- Área táctil mínima 44 × 44 px.

### Tarjetas

- **Tarjeta de producto**: foto 4:5 con radio 2 px, sin borde ni fondo. Debajo, a 14 px, la **ficha**.
- **Ficha** (rasgo de marca tomado de sus publicaciones): nombre en Josefin Sans 400 mayúsculas → filete de 24 px × 1 px → línea «Tallas S–XXL · Apariencia lino» en Jost 13 px → línea «Cód. 37320» en Jost 12 px al 60 % → precio en Jost 600. Alineada a la izquierda.
- **Tarjeta colgante** (categorías, foto del hero): igual, con hilo y nudo arriba, borde Crema de 6 px y la sombra de colgante.

### Iconografía

De línea, trazo de 1,25 px, extremos redondeados, 20 px, color heredado del texto (familia tipo Lucide). Solo los necesarios: WhatsApp, Instagram, ubicación, reloj, flecha, menú, cerrar. Sin emojis en la interfaz.

### Movimiento

- Curva única: `cubic-bezier(.22,1,.36,1)`. Duraciones: 200 ms (cursor), 450 ms (entradas), 900 ms (hilo y descubrimiento de fotos).
- Regla de marca: **todo entra cayendo** (desde −24 px hacia su sitio, con fundido). Las fotos se descubren con recorte de arriba abajo.
- Hilo ligado al scroll; péndulo en lo que cuelga (máximo 3°).
- Con «reducir movimiento» activo: hilo dibujado completo, sin péndulo, sin marquesina, sin paralaje; solo fundidos de 150 ms.

### Puntos de corte

Escritorio ≥ 1200 px · portátil 1024–1199 (mismo diseño, márgenes de 32 px) · tablet 768–1023 · móvil ≤ 767 (diseñar para 390 px y comprobar en 360 px).

---

## E. Recursos necesarios

### Fotografías del perfil a usar (URL: `instagram.com/p/<código>` o `/reel/<código>`)

| Sección | Imagen | Código |
|---|---|---|
| Hero, principal | Set Luna caminando ante portón colonial | reel `DexjGN6hEDA` |
| Hero, colgante | Vestido Aussi ante reja de hierro | reel `DevEkRVioFG` |
| Presentación | Vestido Zuny, estudio | reel `Dfk31TuCWc2` |
| Categoría Vestidos | Vestido Kissis, estudio con espejo dorado | reel `Dfav7cMEZVa` |
| Categoría Sets | Set Madisón | p `DdhZPr4jbj1` |
| Categoría Camisas y blusas | Camisa Lauris | p `DepYlagHAlD` |
| Categoría Crochet | Set crochet $120.000 | p `DenZi2rnVxm` |
| Categoría Playa | Salida de baño | p `DemkI3AlkGF` |
| Productos | Zuny `Dfk31TuCWc2` · Kissis `Dfav7cMEZVa` · Set Lucero p `DdXMymQFDMb` · Aussi `DevEkRVioFG` · Set Luna `DexjGN6hEDA` · Set crochet p `DenZi2rnVxm` · Blusa Merlina p `DfIwVlujk1Y` · Camisa Lauris p `DepYlagHAlD` | — |
| Productos, reserva | Falda Lucero reel `DexAzsyDKvH` · Mildred p `Ddg9wmLjzR-` · Indira p `Denj3w-joAX` · Gala p `DenPQOCDfCJ` · Blusa crochet p `Dep0EY3DQeo` · Falda crochet p `DehqNKkjN_C` · Kimono p `DdMf5qalFTj` | — |
| Colección Siempre Tú | Arte de la colección (referencia para rayas y lunares) | p `DdU6QtOMNAh` |
| Colección, fotos laterales | Vestido Sofy reel `DdXDKDmiVy4` · Set Lucero p `DdXMymQFDMb` (lunares, interior de boutique) | — |
| Galería A, B, C | Falda Lucero, muro azul `DexAzsyDKvH` · Set Luna, portón `DexjGN6hEDA` · Vestido Aussi, reja `DevEkRVioFG` | — |
| Galería D | Vestido Kamile, rayas amarillas | reel `De4Elp3tHmP` |
| Galería E y Contacto | Interior de boutique con nichos iluminados y perchero (publicaciones de la colección Siempre Tú, p. ej. Set Mariana) | reel `DdXodRGkRir` |

Notas de uso:
- Casi todas las portadas llevan la **ficha blanca sobreimpresa** arriba a la izquierda y el logo abajo a la derecha. Para la web usar la **segunda foto del carrusel** o un fotograma limpio del reel. **No recortar la foto por la mitad para esconder el texto**; si no hay versión limpia, pedir el original.
- Los accesorios de las fotos son de `@cuarzorosa_accesorios`: no anunciarlos como producto de Vértigo.
- Varias publicaciones antiguas son compartidas con `@innovacionfashion`; usar solo material publicado por Vértigo hasta aclarar la relación.

### Recursos que faltan (pedir a la clienta)

1. **Logo en vector** (SVG o PDF) en oliva y en blanco, con «fashion store». En el perfil solo hay un círculo de 1080 px.
2. **Fotos originales sin ficha sobreimpresa** de las 8 prendas destacadas, de las 3 fotos del centro histórico y del hero (mínimo 2000 px de alto).
3. **Fotos de la tienda**: fachada, interior general, probador o mostrador (2–3 horizontales). Hoy solo se ve el interior como fondo de modelos.
4. **Dirección exacta y horario** (están en las historias destacadas «UBICACIÓN» y «HORARIO», no revisadas).
5. **Detalles de tela**: 3 o 4 primeros planos de crochet, ojalillo y lino, para dar textura a categorías.
6. Confirmar: precios y tallas vigentes, códigos que faltan (Set Lucero, Aussi, Set Luna), piezas que componen la colección «Siempre Tú».
7. Opcional y deseable: 3 testimonios reales de clientas (con permiso) y foto de la diseñadora o del taller para reforzar «Hecho en Colombia».

No usar fotos de banco ni imágenes generadas: todo el material es del perfil o lo entrega la clienta.

---

## F. Instrucciones para Claude Opus

**Encargo**: construir una página de una sola vista (landing) para Vértigo siguiendo este documento al pie de la letra. Las decisiones creativas ya están tomadas; no cambiar paleta, tipografías, orden de secciones ni el motivo del hilo.

1. **Tecnología**: HTML, CSS y JavaScript sin frameworks ni dependencias. Archivos: `index.html`, `styles.css`, `main.js`, carpeta `assets/img/`. Sin backend, sin carrito, sin formulario. `lang="es-CO"`.
2. **Fuentes**: Google Fonts — Josefin Sans (300, 400), Jost (400, 500, 600), Pinyon Script (400), con `display=swap` y preconexión.
3. **Variables**: declarar en `:root` la paleta, la escala de espaciado, la curva y las duraciones de la sección D. No usar ningún color fuera de la paleta.
4. **Orden de secciones**: C1 barra → C2 encabezado → C3 hero → C4 presentación → C5 perchero → C6 productos → C7 Siempre Tú → C8 galería → C9 beneficios → C10 cómo pedir → C11 la tienda → C12 pie → C13 barra fija. Anclas: `#coleccion` (C7), `#categorias` (C5), `#cartagena` (C8), `#tienda` (C11).
5. **El hilo**: un elemento decorativo (`aria-hidden`) posicionado en el eje central del documento, que crece con el progreso de scroll (`transform: scaleY` con origen arriba) y lleva la plomada en su extremo. Usar animación ligada al scroll en CSS (`animation-timeline: scroll()`) con alternativa en JavaScript (`requestAnimationFrame`) si no hay soporte. Ocultarlo con una máscara en C5, C7, C8 y C10. En móvil sustituirlo por conectores de 64 px entre secciones que se dibujan al entrar en pantalla. El logo del encabezado debe colocarse para que el asta de la T coincida con el eje.
6. **Perchero (C5)**: contenedor con desplazamiento horizontal y `scroll-snap`; arrastre con puntero en escritorio. El vaivén se calcula con la velocidad del desplazamiento, limitado a ±3°, `transform-origin: top center`.
7. **Productos (C6)**: definir los productos como un arreglo en `main.js` (`nombre, categoria, precio, tallas, tela, codigo, img, img2`) y generar las tarjetas desde ahí, para que la clienta pueda actualizar el catálogo editando una sola lista. Los filtros muestran u ocultan por categoría sin recargar. Dar formato de precio con `Intl.NumberFormat('es-CO')`.
8. **WhatsApp**: todos los botones enlazan a `https://wa.me/573005989482?text=` con el texto codificado.
   - General: `Hola Vértigo 🤎 Vi su página y quiero hacer un pedido.`
   - Producto: `Hola Vértigo 🤎 Quiero pedir: {nombre} (Cód. {codigo}). Mi talla es: `
   - Colección: `Hola Vértigo 🤎 Quiero ver la colección Siempre Tú.`
   - Abrir en pestaña nueva con `rel="noopener"`.
9. **Rayas de C7**: `repeating-linear-gradient` a 90° con Celeste y Mantequilla; lunares como elementos absolutos en posiciones fijas (no aleatorias en cada carga). Texto circular con `<textPath>` en SVG.
10. **Imágenes**: exportar en WebP en dos tamaños (800 y 1600 px de ancho), con `srcset`, `sizes`, `width` y `height` declarados y `loading="lazy"` salvo las dos del hero (`fetchpriority="high"` en la principal). `object-fit: cover` con `object-position` ajustado por foto para no cortar rostros. Texto alternativo descriptivo en español («Modelo con Vestido Zuny rosado en estudio»).
11. **Entradas**: un solo `IntersectionObserver` que añade una clase al entrar; la animación es «caer» (−24 px → 0 con fundido) o «descubrir» (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Animar solo `transform`, `opacity` y `clip-path`.
12. **Accesibilidad**: contraste AA (por eso los botones usan Oliva hondo y la sección oscura Malva hondo), foco visible, navegación completa con teclado, menú móvil con `aria-expanded` y retención de foco, `prefers-reduced-motion` según la sección D, un solo `h1`.
13. **Responsive**: móvil primero. Comprobar sin desplazamiento horizontal en 360, 390, 768, 1024, 1440 y **1536×735** (pantalla de revisión: el hero debe verse entero, sin cortar el H1 ni los botones). Ningún texto montado sobre otro ni sobre rostros.
14. **Datos pendientes**: donde falte dirección u horario, dejar el texto «Por confirmar» en un `<span data-pendiente>` fácil de localizar; no inventar datos, reseñas, medios de pago ni tiempos de entrega. Ocultar el botón «Cómo llegar» hasta tener dirección.
15. **Metadatos mínimos**: `<title>Vértigo Fashion Store · Moda femenina hecha en Colombia | Cartagena</title>`, descripción de una línea, imagen para compartir (foto del hero) y favicon con la T del logo en oliva sobre crema.
16. **Fuera de alcance**: carrito, pagos, blog, panel de administración, analítica avanzada.

**Criterio de terminado**: la página se ve como una revista de moda clara y cálida, el hilo de la T se reconoce de principio a fin, cada prenda está a un toque de WhatsApp y en un teléfono de 390 px todo se lee y se toca con comodidad.
