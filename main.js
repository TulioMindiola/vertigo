/* ==========================================================================
   VÉRTIGO FASHION STORE · interacciones
   JavaScript puro, sin dependencias.
   Para actualizar el catálogo basta con editar FOTOS y PRODUCTOS (sección 1).
   ========================================================================== */
(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. DATOS EDITABLES
     ------------------------------------------------------------------------ */

  const WHATSAPP = '573005989482';

  const MENSAJES = {
    general: 'Hola Vértigo 🤎 Vi su página y quiero hacer un pedido.',
    coleccion: 'Hola Vértigo 🤎 Quiero ver la colección Siempre Tú.',
  };
  const mensajeProducto = (p) =>
    `Hola Vértigo 🤎 Quiero pedir: ${p.nombre}${p.codigo ? ` (${textoCodigo(p.codigo)})` : ''}. Mi talla es: `;

  /* Fotos fijas de la página (tomadas de las publicaciones de @vertigofashionctg).
     Cada foto existe en assets/img/<archivo>-<ancho>.webp para cada ancho de ANCHOS.
     Para cambiar una foto: exportar la nueva con el mismo nombre en esos anchos.
     lista: false → muestra el marcador «Foto pendiente» (tipo: estudio | calle | boutique).
     posicion: object-position si la foto se recorta en algún tamaño de pantalla. */
  const RUTA_IMG = 'assets/img/';
  const ANCHOS = [480, 720];
  const FOTOS = {
    'hero-principal': { archivo: 'hero-set-luna', lista: true, tipo: 'calle', posicion: '50% 35%', ref: 'reel DexjGN6hEDA', desc: 'Set Luna · portón colonial', alt: 'Modelo con el Set Luna frente a un portón colonial del centro histórico de Cartagena' },
    'hero-colgante': { archivo: 'hero-vestido-aussi', lista: true, tipo: 'calle', ref: 'reel DevEkRVioFG', desc: 'Vestido Aussi · reja', alt: 'Modelo con el Vestido Aussi azul floral frente a una reja de hierro' },
    'presentacion': { archivo: 'marca-vestido-zuny', lista: true, tipo: 'estudio', ref: 'reel Dfk31TuCWc2', desc: 'Vestido Zuny · estudio', alt: 'Modelo con el Vestido Zuny rosado en el estudio' },
    'cat-vestidos': { archivo: 'categoria-vestidos', lista: true, tipo: 'estudio', ref: 'reel Dfav7cMEZVa', desc: 'Vestido Kissis', alt: 'Modelo con el Vestido Kissis azul en el estudio, junto a un espejo dorado' },
    'cat-sets': { archivo: 'categoria-sets', lista: true, tipo: 'estudio', ref: 'p DdhZPr4jbj1', desc: 'Set Madisón', alt: 'Modelo con el Set Madisón de rayas' },
    'cat-camisas': { archivo: 'categoria-camisas', lista: true, tipo: 'estudio', ref: 'p DepYlagHAlD', desc: 'Camisa Lauris', alt: 'Modelo con la Camisa Lauris blanca' },
    'cat-crochet': { archivo: 'categoria-crochet', lista: true, tipo: 'estudio', ref: 'p DenZi2rnVxm', desc: 'Set crochet', alt: 'Modelo con un set de crochet blanco' },
    'cat-playa': { archivo: 'categoria-playa', lista: true, tipo: 'estudio', ref: 'p DdMf5qalFTj', desc: 'Kimono', alt: 'Modelo con un kimono de encaje blanco y short de jean' },
    'coleccion-izq': { archivo: 'coleccion-vestido-sofy', lista: true, tipo: 'boutique', ref: 'reel DdXDKDmiVy4', desc: 'Vestido Sofy · Siempre Tú', alt: 'Modelo con el Vestido Sofy azul de lunares de la colección Siempre Tú' },
    'coleccion-der': { archivo: 'coleccion-set-lucero', lista: true, tipo: 'boutique', ref: 'p DdXMymQFDMb', desc: 'Set Lucero · boutique', alt: 'Modelo con el Set Lucero de lunares en el interior de la boutique' },
    'galeria-a': { archivo: 'galeria-falda-lucero', lista: true, tipo: 'calle', ref: 'reel DexAzsyDKvH', desc: 'Falda Lucero · muro azul', alt: 'Modelo con la Falda Lucero frente a un muro azul con balaustrada blanca en el centro histórico' },
    'galeria-b': { archivo: 'galeria-set-luna', lista: true, tipo: 'calle', ref: 'reel DexjGN6hEDA', desc: 'Set Luna · portón', alt: 'Modelo con el Set Luna junto a un portón colonial de madera' },
    'galeria-c': { archivo: 'galeria-vestido-aussi', lista: true, tipo: 'calle', ref: 'reel DevEkRVioFG', desc: 'Vestido Aussi · reja', alt: 'Modelo con el Vestido Aussi caminando junto a una reja de hierro forjado' },
    'galeria-d': { archivo: 'galeria-vestido-kissis', lista: true, tipo: 'estudio', ref: 'reel Dfav7cMEZVa', desc: 'Vestido Kissis · estudio', alt: 'Modelo con el Vestido Kissis en el estudio malva' },
    'galeria-e': { archivo: 'galeria-boutique', lista: true, tipo: 'boutique', ref: 'reel DdXodRGkRir', desc: 'Interior de la boutique', alt: 'Interior de la boutique Vértigo con nichos iluminados' },
    'tienda': { archivo: 'tienda-interior', lista: true, tipo: 'boutique', ref: 'reel DdXDKDmiVy4', desc: 'Boutique · nichos', alt: 'Interior de la boutique Vértigo en Cartagena, con nichos iluminados y espejo dorado' },
  };

  /* Catálogo (datos de los textos de cada publicación). destacado: true → aparece en «Todo».
     tallas o código en null → se muestra «por confirmar»; tela en null → no se muestra.
     img / img2: nombre base de las fotos (assets/img/<img>-<ancho>.webp). */
  const CATEGORIAS = {
    vestidos: 'Vestidos',
    sets: 'Sets',
    camisas: 'Camisas y blusas',
    crochet: 'Crochet',
    playa: 'Playa',
  };
  const PRODUCTOS = [
    { nombre: 'Vestido Zuny', categoria: 'vestidos', precio: 200000, tallas: 'S–XXL', tela: 'Apariencia lino', codigo: '37320', destacado: true, ref: 'reel Dfk31TuCWc2', img: 'producto-vestido-zuny', img2: 'producto-vestido-zuny-2', fotosListas: true },
    { nombre: 'Vestido Kissis', categoria: 'vestidos', precio: 200000, tallas: 'S–XXL', tela: 'Ojalillo bordado', codigo: '32233', destacado: true, ref: 'reel Dfav7cMEZVa', img: 'producto-vestido-kissis', img2: 'producto-vestido-kissis-2', fotosListas: true },
    { nombre: 'Set Lucero', categoria: 'sets', precio: 150000, tallas: 'S–XXL', tela: 'Apariencia lino', codigo: '36643', destacado: true, ref: 'p DdXMymQFDMb', img: 'producto-set-lucero', img2: 'producto-set-lucero-2', fotosListas: true },
    { nombre: 'Vestido Aussi', categoria: 'vestidos', precio: 130000, tallas: 'S–XXL', tela: 'Apariencia lino', codigo: '37162', destacado: true, ref: 'reel DevEkRVioFG', img: 'producto-vestido-aussi', img2: 'producto-vestido-aussi-2', fotosListas: true },
    { nombre: 'Set Luna', categoria: 'sets', precio: 120000, tallas: 'S/M – L/XL – XXL', tela: 'Apariencia lino', codigo: '36511', destacado: true, ref: 'reel DexjGN6hEDA', img: 'producto-set-luna', img2: 'producto-set-luna-2', fotosListas: true },
    { nombre: 'Set crochet', categoria: 'crochet', precio: 120000, tallas: 'S/M – L/XL', tela: 'Crochet', codigo: 'REF 0308', destacado: true, ref: 'p DenZi2rnVxm', img: 'producto-set-crochet', img2: 'producto-set-crochet-2', fotosListas: true },
    { nombre: 'Blusa Merlina', categoria: 'camisas', precio: 80000, tallas: 'S–XXL', tela: 'Apariencia lino', codigo: '37318', destacado: true, ref: 'p DfIwVlujk1Y', img: 'producto-blusa-merlina', img2: 'producto-blusa-merlina-2', fotosListas: true },
    { nombre: 'Camisa Lauris', categoria: 'camisas', precio: 80000, tallas: 'S–XXL', tela: 'Popelina', codigo: '28022', destacado: true, ref: 'p DepYlagHAlD', img: 'producto-camisa-lauris', img2: 'producto-camisa-lauris-2', fotosListas: true },
    // Reserva: completan los filtros
    { nombre: 'Vestido Mildred', categoria: 'vestidos', precio: 140000, tallas: 'S–XXL', tela: 'Microfibra', codigo: '34548', ref: 'p Ddg9wmLjzR-', img: 'producto-vestido-mildred', img2: 'producto-vestido-mildred-2', fotosListas: true },
    { nombre: 'Set Madisón', categoria: 'sets', precio: 140000, tallas: 'S/M – L/XL – XXL', tela: null, codigo: '35549', ref: 'p DdhZPr4jbj1', img: 'producto-set-madison', img2: 'producto-set-madison-2', fotosListas: true },
    { nombre: 'Camisa Indira', categoria: 'camisas', precio: 70000, tallas: 'S–XXL', tela: 'Popelina', codigo: '28164', ref: 'p Denj3w-joAX', img: 'producto-camisa-indira', img2: 'producto-camisa-indira-2', fotosListas: true },
    { nombre: 'Camisa Gala', categoria: 'camisas', precio: 80000, tallas: 'S/M – L/XL', tela: 'Velino bordado', codigo: '38063', ref: 'p DenPQOCDfCJ', img: 'producto-camisa-gala', img2: 'producto-camisa-gala-2', fotosListas: true },
    { nombre: 'Blusa crochet', categoria: 'crochet', precio: 50000, tallas: 'S/M – L/XL', tela: 'Crochet', codigo: '0568', ref: 'p Dep0EY3DQeo', img: 'producto-blusa-crochet', img2: 'producto-blusa-crochet-2', fotosListas: true },
    { nombre: 'Falda crochet', categoria: 'crochet', precio: 90000, tallas: 'S/M – L/XL', tela: 'Crochet', codigo: 'REF 0216', ref: 'p DehqNKkjN_C', img: 'producto-falda-crochet', img2: 'producto-falda-crochet-2', fotosListas: true },
    { nombre: 'Salida de baño', categoria: 'playa', precio: 90000, tallas: 'S/M – L/XL', tela: null, codigo: 'REF 0513', ref: 'p DemkI3AlkGF', img: 'producto-salida-de-bano', img2: 'producto-salida-de-bano-2', fotosListas: true },
    { nombre: 'Kimono', categoria: 'playa', precio: 70000, tallas: 'S/M – L/XL', tela: null, codigo: '1027', ref: 'p DdMf5qalFTj', img: 'producto-kimono', img2: 'producto-kimono-2', fotosListas: true },
  ];

  /* ------------------------------------------------------------------------
     2. UTILIDADES
     ------------------------------------------------------------------------ */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const mqReducir = matchMedia('(prefers-reduced-motion: reduce)');
  const reducir = () => mqReducir.matches;
  const waEnlace = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  const numero = new Intl.NumberFormat('es-CO');
  const precio = (n) => `$${numero.format(n)}`;
  function textoCodigo(c) { return /^ref/i.test(c) ? c.toUpperCase() : `Cód. ${c}`; }
  const slug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const crear = (tag, clase, texto) => {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  };
  const pendiente = (texto = 'por confirmar') => {
    const s = crear('span', '', texto);
    s.dataset.pendiente = '';
    return s;
  };

  /* ------------------------------------------------------------------------
     3. FOTOS (imagen real o marcador «Foto pendiente»)
     ------------------------------------------------------------------------ */
  function medidas(el) {
    const m = /([\d.]+)\s*\/\s*([\d.]+)/.exec(getComputedStyle(el).aspectRatio);
    const r = m ? m[1] / m[2] : 0.8;
    const ancho = ANCHOS[ANCHOS.length - 1];
    return [ancho, Math.round(ancho / r)];
  }

  function pintarFoto(slot, foto, { alterna = false } = {}) {
    if (!slot || !foto) return;
    slot.dataset.tipo = alterna ? 'alterna' : (foto.tipo || 'estudio');

    if (foto.lista && foto.archivo) {
      const img = document.createElement('img');
      const [w, h] = medidas(slot);
      const prioridad = slot.hasAttribute('data-prioridad');
      img.width = w;
      img.height = h;
      img.alt = alterna ? '' : (foto.alt || '');
      img.decoding = 'async';
      img.loading = prioridad ? 'eager' : 'lazy';
      if (prioridad) img.fetchPriority = 'high';
      img.sizes = slot.dataset.sizes || '100vw';
      img.srcset = ANCHOS.map((a) => `${RUTA_IMG}${foto.archivo}-${a}.webp ${a}w`).join(', ');
      img.src = `${RUTA_IMG}${foto.archivo}-${ANCHOS[ANCHOS.length - 1]}.webp`;
      if (foto.posicion) img.style.objectPosition = foto.posicion;
      slot.classList.add('foto--lista');
      slot.append(img);
      return;
    }

    // Marcador claramente identificado mientras llega la foto original
    if (alterna) {
      slot.setAttribute('aria-hidden', 'true');
    } else {
      slot.setAttribute('role', 'img');
      slot.setAttribute('aria-label', foto.alt);
    }
    const marca = crear('span', 'foto__pendiente');
    marca.setAttribute('aria-hidden', 'true');
    marca.dataset.pendiente = 'foto';
    marca.append(
      crear('b', '', alterna ? 'Foto 2 pendiente' : 'Foto pendiente'),
      crear('span', 'foto__desc', foto.desc),
      crear('span', 'foto__ref', `Instagram · ${foto.ref}`),
    );
    slot.append(marca);
  }

  $$('[data-foto]').forEach((slot) => pintarFoto(slot, FOTOS[slot.dataset.foto]));

  /* Enlaces de WhatsApp: una sola fuente para los mensajes */
  $$('[data-wa]').forEach((a) => {
    const m = MENSAJES[a.dataset.wa];
    if (m) a.href = waEnlace(m);
  });

  /* ------------------------------------------------------------------------
     4. ENTRADAS (un solo IntersectionObserver)
     ------------------------------------------------------------------------ */
  /* Las fotos que se «descubren» empiezan recortadas al 100 % (clip-path) y el
     navegador las da por invisibles: se vigila su contenedor en su lugar. */
  const destinos = new Map();
  const observador = 'IntersectionObserver' in window
    ? new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        (destinos.get(e.target) || [e.target]).forEach((el) => el.classList.add('is-in'));
        destinos.delete(e.target);
        observador.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' })
    : null;
  const observar = (el) => {
    if (!observador) { el.classList.add('is-in'); return; }
    const vigia = el.dataset.anim === 'descubrir' && el.parentElement ? el.parentElement : el;
    if (vigia !== el) {
      const lista = destinos.get(vigia) || (vigia.hasAttribute('data-anim') ? [vigia] : []);
      lista.push(el);
      destinos.set(vigia, lista);
    }
    observador.observe(vigia);
  };

  /* ------------------------------------------------------------------------
     5. PRODUCTOS Y FILTROS (C6)
     ------------------------------------------------------------------------ */
  const grid = $('#productos-grid');
  const estado = $('#productos-estado');
  const botonesFiltro = $$('.filtro');
  const tallasSizes = '(min-width: 1024px) 24vw, (min-width: 768px) 31vw, 46vw';
  let filtroActual = null;
  let temporizadorFiltro = 0;

  function crearTarjeta(p) {
    const id = `prenda-${slug(p.nombre)}`;
    const li = crear('li', 'producto');
    li.dataset.anim = 'caer';
    li.dataset.categoria = p.categoria;

    const articulo = crear('article', 'producto__tarjeta');
    articulo.setAttribute('aria-labelledby', id);

    const media = crear('div', 'producto__media');
    const foto1 = crear('div', 'foto');
    const foto2 = crear('div', 'foto foto--alt');
    foto1.dataset.sizes = tallasSizes;
    foto2.dataset.sizes = tallasSizes;

    const boton = crear('a', 'btn btn--primario producto__wa');
    boton.href = waEnlace(mensajeProducto(p));
    boton.target = '_blank';
    boton.rel = 'noopener';
    boton.setAttribute('aria-describedby', 'nueva-pestana');
    boton.innerHTML = '<svg class="icono" aria-hidden="true"><use href="#i-whatsapp"/></svg>';
    const textoBoton = crear('span', 'producto__wa-texto', 'Pedir por WhatsApp');
    textoBoton.append(crear('span', 'visualmente-oculto', `: ${p.nombre}`));
    boton.append(textoBoton);
    media.append(foto1, foto2, boton);

    const ficha = crear('div', 'ficha');
    const nombre = crear('h3', 'ficha__nombre', p.nombre);
    nombre.id = id;
    const filete = crear('span', 'ficha__filete');
    filete.setAttribute('aria-hidden', 'true');

    const detalle = crear('p', 'ficha__detalle');
    const tallas = crear('span', 'ficha__tallas', 'Tallas ');
    tallas.append(p.tallas ? p.tallas : pendiente());
    detalle.append(tallas);
    if (p.tela) detalle.append(crear('span', 'ficha__tela', ` · ${p.tela}`));

    const codigo = crear('p', 'ficha__codigo');
    if (p.codigo) codigo.textContent = textoCodigo(p.codigo);
    else codigo.append('Cód. ', pendiente());

    const valor = crear('p', 'ficha__precio', precio(p.precio));
    ficha.append(nombre, filete, detalle, codigo, valor);

    articulo.append(media, ficha);
    li.append(articulo);

    const base = { tipo: 'estudio', ref: p.ref, desc: p.nombre, alt: `Modelo con ${p.nombre}`, lista: p.fotosListas };
    pintarFoto(foto1, { ...base, archivo: p.img });
    pintarFoto(foto2, { ...base, archivo: p.img2 }, { alterna: true });
    return li;
  }

  const listaPara = (f) => (f === 'todo'
    ? PRODUCTOS.filter((p) => p.destacado)
    : PRODUCTOS.filter((p) => p.categoria === f));

  function pintarProductos(f, animar) {
    const lista = listaPara(f);
    const tarjetas = lista.map((p, i) => {
      const t = crearTarjeta(p);
      t.style.setProperty('--retraso', `${animar ? i * 40 : (i % 4) * 60}ms`);
      return t;
    });
    grid.replaceChildren(...tarjetas);
    if (animar) {
      requestAnimationFrame(() => requestAnimationFrame(() => tarjetas.forEach((t) => t.classList.add('is-in'))));
    } else {
      tarjetas.forEach(observar);
    }
    return lista.length;
  }

  function aplicarFiltro(f, { anunciar = true } = {}) {
    if (f !== 'todo' && !(f in CATEGORIAS)) f = 'todo';
    if (f === filtroActual) return;
    const primeraVez = filtroActual === null;
    filtroActual = f;
    botonesFiltro.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === f)));

    const cambiar = () => {
      const n = pintarProductos(f, !primeraVez);
      if (anunciar) {
        estado.textContent = `${n} ${n === 1 ? 'prenda' : 'prendas'}: ${f === 'todo' ? 'recién llegadas' : CATEGORIAS[f]}.`;
      }
    };
    clearTimeout(temporizadorFiltro);
    const actuales = $$('.producto', grid);
    if (primeraVez || reducir() || !actuales.length) { cambiar(); return; }
    actuales.forEach((t) => t.classList.add('is-saliendo'));
    temporizadorFiltro = setTimeout(cambiar, 150);
  }

  botonesFiltro.forEach((b) => b.addEventListener('click', () => aplicarFiltro(b.dataset.filtro)));
  aplicarFiltro('todo', { anunciar: false });

  // Ahora sí: observar todas las entradas (incluidas las tarjetas recién creadas)
  $$('[data-anim]:not(.producto), .conector').forEach(observar);

  /* ------------------------------------------------------------------------
     6. ENCABEZADO Y MENÚ MÓVIL (C2)
     ------------------------------------------------------------------------ */
  const cabecera = $('#cabecera');
  let compacta = null;
  function revisarCabecera() {
    const c = scrollY > 80;
    if (c !== compacta) {
      compacta = c;
      cabecera.classList.toggle('is-compacta', c);
    }
  }

  const botonMenu = $('.cabecera__menu');
  const menu = $('#menu-movil');
  const cerrarMenuBtn = $('.menu-movil__cerrar');
  const fondoMenu = ['.anuncio', '.cabecera', 'main', '.pie', '.barra-wa', '.wa-flotante'].map((s) => $(s)).filter(Boolean);
  const mqNavEscritorio = matchMedia('(min-width: 1025px)');

  function abrirMenu() {
    menu.classList.add('is-abierto');
    botonMenu.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('menu-abierto');
    fondoMenu.forEach((el) => { el.inert = true; });
    document.addEventListener('keydown', tecladoMenu);
    setTimeout(() => cerrarMenuBtn.focus(), 60);
  }
  function cerrarMenu(devolverFoco = true) {
    if (!menu.classList.contains('is-abierto')) return;
    menu.classList.remove('is-abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('menu-abierto');
    fondoMenu.forEach((el) => { el.inert = false; });
    document.removeEventListener('keydown', tecladoMenu);
    if (devolverFoco) botonMenu.focus();
  }
  function tecladoMenu(e) {
    if (e.key === 'Escape') { e.preventDefault(); cerrarMenu(); return; }
    if (e.key !== 'Tab') return;
    const focos = $$('a[href], button:not([disabled])', menu);
    const primero = focos[0];
    const ultimo = focos[focos.length - 1];
    if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
  }
  botonMenu.addEventListener('click', abrirMenu);
  cerrarMenuBtn.addEventListener('click', () => cerrarMenu());
  $$('a', menu).forEach((a) => a.addEventListener('click', () => cerrarMenu(false)));
  mqNavEscritorio.addEventListener('change', (e) => { if (e.matches) cerrarMenu(false); });

  /* ------------------------------------------------------------------------
     7. EL HILO (C0): crece con el scroll y termina en la plomada del pie
     ------------------------------------------------------------------------ */
  const hilo = $('.hilo');
  const hero = $('.hero');
  const plomada = $('.pie__plomada');
  const hiloCSS = window.CSS && CSS.supports('animation-timeline: view()') && CSS.supports('view-timeline-inset: 70% 30%');
  let hiloTop = 0;
  let hiloAlto = 1;

  function medirHilo() {
    const y = scrollY;
    hiloTop = hero.getBoundingClientRect().top + y;
    const r = plomada.getBoundingClientRect();
    hiloAlto = Math.max(1, r.top + y + r.height / 2 - hiloTop);
    hilo.style.setProperty('--hilo-top', `${hiloTop}px`);
    hilo.style.setProperty('--hilo-alto', `${hiloAlto}px`);
    if (!hilo.classList.contains('is-listo')) {
      if (y < 40 && !reducir()) hilo.classList.add('is-intro');
      hilo.classList.add('is-listo');
    }
    actualizarHilo();
  }
  function actualizarHilo() {
    if (hiloCSS) return;
    const p = clamp((scrollY + innerHeight * 0.7 - hiloTop) / hiloAlto, 0, 1);
    hilo.style.setProperty('--p', p.toFixed(4));
  }

  let medicionPendiente = false;
  const pedirMedicion = () => {
    if (medicionPendiente) return;
    medicionPendiente = true;
    requestAnimationFrame(() => { medicionPendiente = false; medirHilo(); });
  };
  medirHilo();
  if ('ResizeObserver' in window) new ResizeObserver(pedirMedicion).observe(document.body);
  if (document.fonts) document.fonts.ready.then(pedirMedicion);
  addEventListener('load', pedirMedicion);

  /* ------------------------------------------------------------------------
     8. PERCHERO (C5): arrastre, vaivén y filtro
     ------------------------------------------------------------------------ */
  const pista = $('.perchero__pista');
  if (pista) {
    const cuerpos = $$('.percha__cuerpo', pista);
    const estados = cuerpos.map((_, i) => ({ a: 0, v: 0, k: 0.8 + ((i * 37) % 40) / 100 }));
    const RIGIDEZ = 170;
    const AMORTIGUACION = 9;
    const MAX = 3;
    let fuerza = 0;
    let corriendo = false;
    let tAnterior = 0;
    let ultimaX = pista.scrollLeft;
    let ultimaT = performance.now();

    const paso = (t) => {
      const dt = Math.min(0.034, Math.max(0.001, (t - tAnterior) / 1000));
      tAnterior = t;
      let activo = Math.abs(fuerza) > 0.02;
      estados.forEach((s, i) => {
        const objetivo = fuerza * s.k;
        s.v += (-RIGIDEZ * (s.a - objetivo) - AMORTIGUACION * s.v) * dt;
        s.a = clamp(s.a + s.v * dt, -MAX, MAX);
        if (Math.abs(s.a) > 0.02 || Math.abs(s.v) > 0.1) activo = true;
        cuerpos[i].style.setProperty('--giro', `${s.a.toFixed(2)}deg`);
      });
      fuerza *= 0.8;
      if (activo) {
        requestAnimationFrame(paso);
      } else {
        corriendo = false;
        fuerza = 0;
        estados.forEach((s, i) => { s.a = 0; s.v = 0; cuerpos[i].style.setProperty('--giro', '0deg'); });
      }
    };
    const mecer = () => {
      if (corriendo || reducir()) return;
      corriendo = true;
      tAnterior = performance.now();
      requestAnimationFrame(paso);
    };

    // El vaivén depende de la velocidad del desplazamiento
    pista.addEventListener('scroll', () => {
      const t = performance.now();
      const x = pista.scrollLeft;
      const vel = (x - ultimaX) / Math.max(8, t - ultimaT);
      ultimaX = x;
      ultimaT = t;
      fuerza = clamp(-vel * 1.6, -MAX, MAX);
      mecer();
    }, { passive: true });

    // Al pasar el cursor, la prenda se mece en el sentido del movimiento
    cuerpos.forEach((c, i) => c.parentElement.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return;
      estados[i].v += (e.movementX >= 0 ? -1 : 1) * 38;
      mecer();
    }));

    // Arrastre con el ratón
    let arrastre = null;
    let movido = 0;
    pista.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      arrastre = { x: e.clientX, s: pista.scrollLeft, id: e.pointerId };
      movido = 0;
    });
    pista.addEventListener('pointermove', (e) => {
      if (!arrastre) return;
      const dx = e.clientX - arrastre.x;
      if (!pista.classList.contains('is-arrastrando')) {
        if (Math.abs(dx) < 5) return;
        pista.classList.add('is-arrastrando');
        pista.setPointerCapture(arrastre.id);
      }
      movido = Math.max(movido, Math.abs(dx));
      pista.scrollLeft = arrastre.s - dx;
    });
    const soltar = () => {
      if (!arrastre) return;
      arrastre = null;
      pista.classList.remove('is-arrastrando');
    };
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => pista.addEventListener(ev, soltar));
    pista.addEventListener('dragstart', (e) => e.preventDefault());

    // Clic en una categoría: baja a los productos con ese filtro activo
    pista.addEventListener('click', (e) => {
      const a = e.target.closest('a[data-filtro]');
      if (!a) return;
      e.preventDefault();
      if (movido > 5) { movido = 0; return; }
      aplicarFiltro(a.dataset.filtro);
      $('#productos').scrollIntoView({ behavior: reducir() ? 'auto' : 'smooth', block: 'start' });
      setTimeout(() => {
        const activo = $('.filtro[aria-pressed="true"]');
        if (activo) activo.focus({ preventScroll: true });
      }, reducir() ? 0 : 700);
    });
  }

  /* ------------------------------------------------------------------------
     9. GALERÍA (C8): paralaje suave y contador del carrusel móvil
     ------------------------------------------------------------------------ */
  const paralajes = $$('[data-paralaje]');
  const mqParalaje = matchMedia('(min-width: 1024px)');
  function actualizarParalaje() {
    if (reducir() || !mqParalaje.matches) return;
    const mitad = innerHeight / 2;
    paralajes.forEach((li) => {
      const r = li.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      const y = clamp((r.top + r.height / 2 - mitad) * -0.08, -40, 40);
      li.firstElementChild.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    });
  }
  mqParalaje.addEventListener('change', () => {
    paralajes.forEach((li) => { li.firstElementChild.style.transform = ''; });
    actualizarParalaje();
  });

  const mosaico = $('.galeria__mosaico');
  const indicador = $('.galeria__indicador span');
  if (mosaico && indicador) {
    mosaico.addEventListener('scroll', () => {
      const items = mosaico.children;
      if (!items.length) return;
      const pasoItem = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(mosaico).columnGap || 0);
      const alFinal = mosaico.scrollLeft >= mosaico.scrollWidth - mosaico.clientWidth - 2;
      const n = alFinal ? items.length : clamp(Math.round(mosaico.scrollLeft / pasoItem) + 1, 1, items.length);
      indicador.textContent = String(n);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     10. WHATSAPP FIJO (C13): aparece al pasar el hero, se oculta en C10 y el pie
     ------------------------------------------------------------------------ */
  const barra = $('#barra-wa');
  const flotante = $('#wa-flotante');
  if ('IntersectionObserver' in window) {
    const zonas = new Map();
    const ioZonas = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => zonas.set(e.target, e.isIntersecting));
      const mostrar = ![...zonas.values()].some(Boolean);
      barra.classList.toggle('is-visible', mostrar);
      flotante.classList.toggle('is-visible', mostrar);
    });
    [hero, $('.pedir'), $('.pie')].forEach((el) => el && ioZonas.observe(el));
  }

  /* ------------------------------------------------------------------------
     11. SCROLL: un solo bucle por cuadro
     ------------------------------------------------------------------------ */
  let cuadroPendiente = false;
  const cuadro = () => {
    cuadroPendiente = false;
    revisarCabecera();
    actualizarHilo();
    actualizarParalaje();
  };
  const alDesplazar = () => {
    if (cuadroPendiente) return;
    cuadroPendiente = true;
    requestAnimationFrame(cuadro);
  };
  addEventListener('scroll', alDesplazar, { passive: true });
  addEventListener('resize', () => { pedirMedicion(); alDesplazar(); });
  cuadro();
})();
