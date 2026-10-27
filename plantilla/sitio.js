/* ============================================================
   Plantilla Maemuki · arma la página a partir de window.NEGOCIO
   No hace falta tocar este archivo para un negocio nuevo:
   todo se cambia en el negocio.js de cada carpeta.
   ============================================================ */
(function(){
  const N = window.NEGOCIO;
  if (!N) { document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif">Falta el archivo negocio.js</p>'; return; }
  document.documentElement.classList.add('js');

  // ---------- idioma ----------
  const LKEY = 'maemuki-lang-' + (N.id || 'sitio');
  let lang = 'es';
  try { lang = localStorage.getItem(LKEY) || N.idiomaInicial || 'es'; } catch(e) {}
  if (!(N.idiomas || ['es']).includes(lang)) lang = (N.idiomas || ['es'])[0];

  const T = { // textos fijos de la plantilla
    es:{menu:'Menú', favs:'Favoritos', story:'Historia', visit:'Visítanos', reviews:'Reseñas', order:'Pedir', call:'Llamar', directions:'Cómo llegar', whatsapp:'WhatsApp',
      openNow:'Abierto ahora', closedNow:'Cerrado ahora', opensAt:'Abre a las', opensTomorrow:'abre mañana a las', closesAt:'Cierra a las', today:'Hoy', everyDay:'Todos los días',
      flipHint:'Toca una copa para ver qué lleva', turn:'Voltear', pairWith:'Combínalo con', orderThis:'Pídelo por WhatsApp',
      seeAll:'Ver todas en Google', leaveReview:'Déjanos tu reseña', reviewsOn:'reseñas en Google', soon:'Próximamente', notifyMe:'Avísame cuando abra',
      follow:'Síguenos', hoursT:'Horario', contact:'Contacto', rights:'Todos los derechos reservados.', flavors:'Nuestros sabores', howOrder:'¿Cómo quieres pedir?', orderItem:'Pedir', waSub:'Directo con nosotros · respuesta rápida', appsQ:'¿Prefieres delivery por app?', callQ:'¿Prefieres llamar?', orderThis2:'Pedir esta', flavHint:'Toca un sabor ✨', flavTipDef:'Pídelo con queso rallado encima, como en Ecuador.', viewMenu:'Ver el menú',
      home:'Inicio', about:'Nosotros', readStory:'Leer la historia completa', explore:'Sigue explorando', exploreT:'¿Qué quieres ver?', go:'Ver',
      pg_menu:'Helados con queso, copas, waffles, café y más.', pg_nosotros:'La historia detrás de cada copa.', pg_visitanos:'Te esperamos con una copa lista.',
      ex_menu:'Copas, desayunos, panes y café, con precios.', ex_nosotros:'Cómo un sueño migrante se convirtió en Oasis.', ex_visitanos:'Dirección, horario, mapa y WhatsApp.',
      close:'Cerrar',
      demo:'Borrador de propuesta para', demo2:'· no es la página oficial', pend:'por confirmar', reviewPh:'Aquí va una reseña real de Google, elegida con el dueño.'},
    en:{menu:'Menu', favs:'Favorites', story:'Our story', visit:'Visit us', reviews:'Reviews', order:'Order', call:'Call', directions:'Directions', whatsapp:'WhatsApp',
      openNow:'Open now', closedNow:'Closed now', opensAt:'Opens at', opensTomorrow:'opens tomorrow at', closesAt:'Closes at', today:'Today', everyDay:'Every day',
      flipHint:'Tap a cup to see what’s inside', turn:'Flip', pairWith:'Pair it with', orderThis:'Order on WhatsApp',
      seeAll:'See all on Google', leaveReview:'Leave us a review', reviewsOn:'reviews on Google', soon:'Coming soon', notifyMe:'Tell me when it opens',
      follow:'Follow us', hoursT:'Hours', contact:'Contact', rights:'All rights reserved.', flavors:'Our flavors', howOrder:'How would you like to order?', orderItem:'Order', waSub:'Straight to us · quick reply', appsQ:'Prefer delivery through an app?', callQ:'Rather call?', orderThis2:'Order this', flavHint:'Tap a flavor ✨', flavTipDef:'Get it topped with grated cheese, Ecuadorian style.', viewMenu:'See the menu',
      home:'Home', about:'About us', readStory:'Read the full story', explore:'Keep exploring', exploreT:'What would you like to see?', go:'See',
      pg_menu:'Ice cream with cheese, cups, waffles, coffee and more.', pg_nosotros:'The story behind every cup.', pg_visitanos:'We’ll have a cup ready for you.',
      ex_menu:'Cups, breakfast, bread and coffee, with prices.', ex_nosotros:'How an immigrant’s dream became Oasis.', ex_visitanos:'Address, hours, map and WhatsApp.',
      close:'Close',
      demo:'Draft proposal for', demo2:'· not the official website', pend:'to confirm', reviewPh:'A real Google review goes here, chosen with the owner.'}
  };
  const t = k => (T[lang] && T[lang][k]) || T.es[k] || k;
  const L = v => v == null ? '' : (typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.es ?? '') : v);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pend = (show) => show && N.demo ? ` <span class="pend">${t('pend')}</span>` : '';

  // ---------- íconos ----------
  const I = {
    wa:'<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/>',
    phone:'<path d="M6.6 3.5l3 .5 1.3 4-2 1.6a12 12 0 0 0 5.5 5.5l1.6-2 4 1.3.5 3a2 2 0 0 1-2.1 2.1A17 17 0 0 1 4.5 5.6 2 2 0 0 1 6.6 3.5z"/>',
    pin:'<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
    star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    turn:'<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M18 3v4h-4M6 21v-4h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    instagram:'<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="7" r="1.2"/>',
    tiktok:'<path d="M14 4v10.5a3.5 3.5 0 1 1-2-3.2V4h2zm0 0c.5 2.2 2.2 3.6 4.5 3.8v2.2c-1.7 0-3.3-.6-4.5-1.6z"/>',
    facebook:'<path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.4-1.4h1.5V5.5a19 19 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2.1H8.2V14h2.4v7z"/>',
    bag:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  };
  const ico = k => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${I[k]||''}</svg>`;

  // ---------- links útiles ----------
  const C = N.contacto || {};
  const tel = C.telefono ? 'tel:' + C.telefono.replace(/[^\d+]/g,'') : null;
  const wa = (msg) => C.whatsapp ? 'https://wa.me/' + C.whatsapp.replace(/\D/g,'') + (msg ? '?text=' + encodeURIComponent(msg) : '') : null;
  // l = un local de N.locales; si tiene nombreMaps/placeId, Maps abre la ficha del negocio y no solo la calle
  const lugar = l => l.nombreMaps ? l.nombreMaps + ', ' + l.direccion : l.direccion;
  const dir = l => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(lugar(l)) + (l.placeId ? '&destination_place_id=' + encodeURIComponent(l.placeId) : '');
  const mapEmbed = l => 'https://www.google.com/maps?q=' + encodeURIComponent(lugar(l)) + '&output=embed';
  const R = N.resenas || {};

  // ---------- horario ----------
  const DAYS = ['dom','lun','mar','mie','jue','vie','sab'];
  function nowParts(){
    const f = new Intl.DateTimeFormat('en-US',{timeZone:N.zonaHoraria||'America/New_York',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
    const g = k => f.find(p=>p.type===k).value;
    return {day:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')), min:(+g('hour')%24)*60 + +g('minute')};
  }
  const toMin = s => { const [h,m] = s.split(':').map(Number); return h*60+(m||0); };
  const fmt = s => { const [h,m] = s.split(':').map(Number); const d = new Date(2000,0,1,h,m||0); return d.toLocaleTimeString(lang==='es'?'es-US':'en-US',{hour:'numeric',minute: m ? '2-digit' : undefined}); };
  function status(hours){
    if (!hours) return null;
    const {day,min} = nowParts(); const h = hours[DAYS[day]];
    if (!h) return {open:false, text:t('closedNow')};
    const [a,b] = h; const open = min >= toMin(a) && min < toMin(b);
    const nx = hours[DAYS[(day+1)%7]];
    const later = min < toMin(a) ? t('opensAt')+' '+fmt(a) : (nx ? t('opensTomorrow')+' '+fmt(nx[0]) : '');
    return {open, text: open ? `${t('openNow')} · ${t('closesAt')} ${fmt(b)}` : `${t('closedNow')} · ${later}`.replace(/ · $/,'')};
  }
  function hoursText(hours){
    if (!hours) return '';
    const vals = DAYS.map(d => hours[d] ? hours[d].join('-') : 'x');
    if (vals.every(v => v === vals[0]) && hours.lun) return `${t('everyDay')} · ${fmt(hours.lun[0])} – ${fmt(hours.lun[1])}`;
    const names = lang==='es' ? ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return DAYS.map((d,i) => `${names[i]} ${hours[d] ? fmt(hours[d][0])+'–'+fmt(hours[d][1]) : '—'}`).join(' · ');
  }

  // ---------- páginas (pestañas) ----------
  const VIEWS = N.paginas || {
    inicio:    ['hero','top5','first','storyTeaser','explore'],
    menu:      ['pagehead','menu','breakfast','promo'],
    nosotros:  ['pagehead','story','reviews'],
    visitanos: ['pagehead','visit']
  };
  const NAV = [['inicio','home'],['menu','menu'],['nosotros','about'],['visitanos','visit']].filter(([v]) => VIEWS[v]);
  const viewNow = () => { const h = (location.hash || '').slice(1); return VIEWS[h] ? h : 'inicio'; };

  // ---------- secciones ----------
  const main = N.locales && N.locales[0] || {};
  const sec = {};

  sec.demo = () => N.demo ? `<div class="demo">${t('demo')} ${esc(N.nombre)} ${t('demo2')}</div>` : '';

  sec.header = () => `
  <header class="top" id="top"><div class="wrap">
    <a class="logo" href="#inicio" aria-label="${esc(N.nombre)}">${N.logo ? `<span class="logo-badge"><img src="${esc(N.logo)}" alt="${esc(N.nombre)}" crossorigin="anonymous" data-fit="alpha" data-fill="0.86" onerror="this.closest('.logo').textContent=this.alt"></span>` : esc(N.nombre)}</a>
    <nav class="nav" aria-label="Principal">${NAV.map(([v,k])=>`<a href="#${v}"${v===viewNow()?' aria-current="page"':''}>${t(k)}</a>`).join('')}</nav>
    ${(N.idiomas||[]).length > 1 ? `<div class="lang" role="group" aria-label="Idioma / Language">${N.idiomas.map(l=>`<button type="button" data-lang="${l}" aria-pressed="${l===lang}">${l.toUpperCase()}</button>`).join('')}</div>` : ''}
    ${wa() ? `<a class="btn btn-main" href="${esc(wa(L(C.mensajeWhatsapp)))}" target="_blank" rel="noopener" data-order>${ico('bag')}${t('order')}</a>` : ''}
  </div>
  <nav class="tabsbar" aria-label="Principal"><div class="wrap">${NAV.map(([v,k])=>`<a href="#${v}"${v===viewNow()?' aria-current="page"':''}>${t(k)}</a>`).join('')}</div></nav>
  </header>`;

  sec.hero = () => {
    const P = N.portada || {};
    const media = P.video
      ? `<video autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture disableremoteplayback poster="${esc(P.imagen||'')}"><source src="${esc(P.video)}" type="video/mp4"></video>`
      : (P.imagen ? `<img src="${esc(P.imagen)}" alt="" fetchpriority="high" onerror="this.remove()">` : '');
    return `
    <section class="hero" id="inicio">
      <div class="hero-media" style="${P.posicion ? `--pos:${esc(P.posicion)}` : ''}">${media}</div>
      <div class="wrap">
        ${P.etiqueta ? `<span class="hero-tag">${esc(L(P.etiqueta))}</span>` : ''}
        <h1>${esc(P.titulo || N.nombre)}</h1>
        <p class="hero-sub">${esc(L(P.subtitulo))}</p>
        <div class="btns">
          <a class="btn btn-light" href="#menu">${t('viewMenu')}</a>
          ${main.direccion ? `<a class="btn btn-line" style="color:#fff;border-color:rgba(255,255,255,.7)" href="${esc(dir(main))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>` : ''}
        </div>
        ${R.calificacion ? `<a class="rating" href="${esc(R.verTodas||R.dejarResena||'#')}" target="_blank" rel="noopener"><span class="stars">★★★★★</span><b>${esc(R.calificacion)}</b> · ${esc(R.total)} ${t('reviewsOn')}</a>` : ''}
        ${(() => { const st = status(main.horario); return st ? `<p class="hero-open"><span class="dot ${st.open?'open':''}"></span>${esc(st.text)}</p>` : ''; })()}
      </div>
      <svg class="arc" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80V40C240 8 480 0 720 0s480 8 720 40v40z"/></svg>
      <a class="cue" href="#inicio" data-scroll="favoritos" aria-label="${t('favs')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></a>
    </section>`;
  };

  sec.today = () => {
    const s = status(main.horario);
    return `<div class="today"><div class="wrap">
      ${s ? `<span><span class="dot ${s.open?'open':''}"></span><b>${esc(s.text)}</b></span>` : ''}
      ${main.horario ? `<span>${esc(hoursText(main.horario))}</span>` : ''}
      ${main.direccion ? `<span>${esc(main.direccion)}</span>` : ''}
    </div></div>`;
  };

  sec.top5 = () => {
    const F = N.favoritos || {}; const items = F.productos || [];
    if (!items.length) return '';
    return `
    <section class="top5" id="favoritos">
      <div class="wrap sec-head center reveal">
        <span class="eyebrow">${esc(L(F.etiqueta))}</span>
        <h2>${esc(L(F.titulo))}${pend(F.porConfirmar)}</h2>
        <p class="lead">${esc(L(F.texto))}</p>
      </div>
      <div class="rail" id="rail" tabindex="0" aria-label="${esc(L(F.titulo))}">
        ${items.map((p,i) => `
        <div class="fav" role="button" tabindex="0" aria-label="${esc(p.nombre)}: ${t('turn')}" style="--c1:${esc(p.color1)};--c2:${esc(p.color2)}">
          <div class="fav-in">
            <div class="face front">
              <div class="stage"><span class="rank">${i+1}</span><span class="turn">${ico('turn')}</span><div class="pic">${p.foto ? `<img src="${esc(p.foto)}" alt="" crossorigin="anonymous" data-fit data-fill="0.86" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ph'}))">` : '<span class="ph"></span>'}</div></div>
              <div class="info"><h3>${esc(p.nombre)}</h3><span class="meta">${esc(L(p.corto))}</span><span class="tag">${esc(p.precio)}</span></div>
            </div>
            <div class="face back">
              <h3>${esc(p.nombre)}</h3>
              <span class="price">${esc(p.precio)}</span>
              <ul>${(L(p.lleva)||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
              ${p.combina ? `<span class="pair"><b>${t('pairWith')}:</b> ${esc(L(p.combina))}</span>` : ''}
              ${wa() ? `<a class="btn btn-main" href="${esc(wa((lang==='es'?'Hola, quiero pedir un ':'Hi, I’d like to order a ')+p.nombre))}" target="_blank" rel="noopener" data-order="${esc(p.nombre)}">${ico('bag')}${t('orderThis2')}</a>` : ''}
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div class="rail-ctrl" id="railDots">${items.map((_,i)=>`<button type="button" aria-label="${i+1}"${i?'':' aria-current="true"'}></button>`).join('')}</div>
      <p class="hint">${t('flipHint')}</p>
    </section>`;
  };

  sec.story = () => {
    const H = N.historia; if (!H) return '';
    return `
    <section class="story" id="historia"><div class="wrap">
      <div class="story-pic reveal">${H.foto ? `<img src="${esc(H.foto)}" alt="${esc(L(H.fotoAlt))}" loading="lazy">` : `<div class="ph">${esc(L(H.fotoPendiente))}</div>`}</div>
      <div class="story-text reveal">
        <span class="eyebrow">${esc(L(H.etiqueta))}</span>
        <h2 style="margin:10px 0 18px">${esc(L(H.titulo))}${pend(H.porConfirmar)}</h2>
        ${(L(H.parrafos)||[]).map(p=>`<p>${esc(p)}</p>`).join('')}
        ${H.frase ? `<p class="quote">${esc(L(H.frase))}</p>` : ''}
        ${H.datos ? `<div class="facts">${(L(H.datos)||[]).map(d=>`<span>${esc(d)}</span>`).join('')}</div>` : ''}
        ${socialButtons(L(H.redesTexto))}
      </div>
    </div></section>`;
  };

  function socialButtons(title){
    const S = N.redes || {}; const ks = ['instagram','tiktok','facebook'].filter(k => S[k]);
    if (!ks.length) return '';
    const names = {instagram:'Instagram', tiktok:'TikTok', facebook:'Facebook'};
    return `<div class="follow">${title ? `<p class="follow-t">${esc(title)}</p>` : ''}<div class="btns">${ks.map(k=>`<a class="btn btn-soc ${k}" href="${esc(S[k])}" target="_blank" rel="noopener">${ico(k)}${names[k]}${S[k+'Usuario'] ? `<small>${esc(S[k+'Usuario'])}</small>` : ''}</a>`).join('')}</div></div>`;
  }

  sec.pagehead = () => {
    const v = viewNow(); const label = (NAV.find(n=>n[0]===v)||[])[1];
    const txt = (N.paginasTexto && L(N.paginasTexto[v])) || t('pg_'+v);
    return `
    <section class="pagehead"><div class="wrap">
      <span class="eyebrow">${esc(N.nombre)}</span>
      <h1>${esc(t(label))}</h1>
      <p class="lead">${esc(txt)}</p>
    </div><svg class="arc" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80V40C240 8 480 0 720 0s480 8 720 40v40z"/></svg></section>`;
  };

  sec.storyTeaser = () => {
    const H = N.historia; if (!H || !VIEWS.nosotros) return '';
    const first = (L(H.parrafos)||[])[0] || '';
    return `
    <section class="story teaser"><div class="wrap">
      <div class="story-pic reveal">${H.foto ? `<img src="${esc(H.foto)}" alt="${esc(L(H.fotoAlt))}" loading="lazy">` : `<div class="ph">${esc(L(H.fotoPendiente))}</div>`}</div>
      <div class="story-text reveal">
        <span class="eyebrow">${esc(L(H.etiqueta))}</span>
        <h2 style="margin:10px 0 18px">${esc(L(H.titulo))}</h2>
        <p>${esc(first)}</p>
        ${H.frase ? `<p class="quote">${esc(L(H.frase))}</p>` : ''}
        <div class="btns"><a class="btn btn-main" href="#nosotros">${t('readStory')}</a></div>
      </div>
    </div></section>`;
  };

  sec.explore = () => {
    const items = [['menu','menu','menu'],['nosotros','about','star'],['visitanos','visit','pin']].filter(([v]) => VIEWS[v]);
    return `
    <section class="explore"><div class="wrap">
      <div class="sec-head center reveal"><span class="eyebrow">${t('explore')}</span><h2>${t('exploreT')}</h2></div>
      <div class="ex-grid">${items.map(([v,k,ic])=>`
        <a class="ex-card reveal" href="#${v}">
          <span class="ex-ico">${ico(ic==='menu'?'bag':ic)}</span>
          <span class="ex-t">${t(k)}</span>
          <span class="ex-d">${t('ex_'+v)}</span>
          <span class="ex-go">${t('go')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>`).join('')}</div>
    </div></section>`;
  };

  // aviso emergente de novedades (sale una vez por visita)
  sec.promo = () => {
    const P = N.novedad; if (!P) return '';
    return `
    <aside class="promo" id="promo" role="dialog" aria-label="${esc(L(P.titulo))}" hidden>
      <button type="button" class="promo-x" aria-label="${t('close')}">×</button>
      <div class="promo-ico" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path class="steam" d="M17 6c-3 3 3 5 0 8M24 4c-3 3 3 5 0 8M31 6c-3 3 3 5 0 8"/><path d="M6 22h36a18 18 0 0 1-36 0z" fill="currentColor" fill-opacity=".15"/><path d="M6 22h36M14 40h20"/></svg></div>
      <span class="promo-tag">${esc(L(P.etiqueta))}</span>
      <h3>${esc(L(P.titulo))}</h3>
      <p>${esc(L(P.texto))}</p>
      ${P.items ? `<div class="chips">${P.items.map(i=>`<span>${esc(L(i))}</span>`).join('')}</div>` : ''}
      <a class="btn btn-main" href="#menu" data-scroll="${esc(P.destino||'desayuno')}">${esc(L(P.boton))}</a>
    </aside>`;
  };

  sec.first = () => {
    const P = N.primeraVez; if (!P) return '';
    return `
    <section class="first"><svg class="paila" viewBox="0 0 200 120" fill="none" stroke="#f4ead7" stroke-width="3" aria-hidden="true"><ellipse cx="100" cy="30" rx="90" ry="18"/><path d="M10 30c4 50 40 78 90 78s86-28 90-78"/><path d="M40 20c20-30 100-30 120 0" stroke-dasharray="4 7"/><path d="M150 4l-38 46"/><ellipse cx="108" cy="54" rx="7" ry="4"/></svg>
      <div class="wrap">
        <div class="sec-head center reveal"><span class="eyebrow">${esc(L(P.etiqueta))}</span><h2>${esc(L(P.titulo))}</h2><p class="lead">${esc(L(P.texto))}</p></div>
        <div class="steps">${(P.pasos||[]).map(s=>`<div class="step reveal"><h3>${esc(L(s.titulo))}</h3><p>${esc(L(s.texto))}</p></div>`).join('')}</div>
      </div>
    </section>`;
  };

  sec.breakfast = () => {
    const D = N.desayuno; if (!D) return '';
    return `
    <section class="breakfast${D.video ? ' has-video' : ''}" id="desayuno">
      ${D.video ? `<div class="nube" aria-hidden="true"><video autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture disableremoteplayback poster="${esc(D.videoPoster||'')}"><source src="${esc(D.video)}" type="video/mp4"></video></div>` : ''}
      <div class="wrap">
      <div class="sec-head center reveal"><span class="eyebrow">${esc(L(D.etiqueta))}</span><h2>${esc(L(D.titulo))}</h2><p class="lead">${esc(L(D.texto))}</p></div>
      <div class="grid">${(D.platos||[]).map(p=>`<div class="dish reveal"><div class="row"><h3>${esc(L(p.nombre))}</h3><span class="p">${esc(p.precio)}</span></div><p>${esc(L(p.desc))}</p></div>`).join('')}</div>
      ${D.temporada ? `<div class="breads reveal" style="background:#fff;border:1px solid var(--line)"><h3>${esc(L(D.temporadaTitulo))}${pend(D.temporadaPorConfirmar)}</h3><div class="chips">${D.temporada.map(b=>`<span>${esc(L(b))}</span>`).join('')}</div></div>` : ''}
      ${D.panes ? `<div class="breads reveal"><h3>${esc(L(D.panesTitulo))}${pend(D.panesSinPrecio)}</h3><div class="chips">${D.panes.map(b=>`<span>${esc(b)}</span>`).join('')}</div></div>` : ''}
    </div></section>`;
  };

  // SABORES con partículas: cada sabor suelta 2-3 dibujitos al tocarlo
  const norm = x => (x||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const FLAVS = [
    ['fresa','#e0566f'],['coco','#e9e2d3'],['chocolate','#6b3f26'],['vainilla','#f3e2b0'],['mango','#f5a623'],
    ['cafe','#7a5236'],['cookies','#3b3b3b'],['caramelo','#d08a2e'],['ron','#6d3b5c'],['mora','#5b2a6e'],
    ['maracuya','#f2c230'],['chicle','#f49ac1'],['durazno','#f6a77a'],['guanabana','#eef0e2'],['naranjilla','#f39c34'],['tamarindo','#9b6a3c']
  ];
  const flavorOf = es => { const n = norm(es); const f = FLAVS.find(([k])=>n.includes(k)); return f ? {k:f[0], c:f[1]} : {k:'gen', c:'var(--sun)'}; };
  const PART = {
    fresa:'<path d="M10 18c-4-2-7-6-6-10 1-2 3-3 6-3s5 1 6 3c1 4-2 8-6 10z" fill="#e0566f"/><path d="M6 5c1-2 3-2 4-1 1-1 3-1 4 1-2 1-6 1-8 0z" fill="#3f9a4a"/><g fill="#ffd6dd"><circle cx="8" cy="10" r=".8"/><circle cx="12" cy="10" r=".8"/><circle cx="10" cy="13" r=".8"/></g>',
    coco:'<rect x="5" y="8" width="10" height="4" rx="2" fill="#fff" stroke="#cdbf9f" stroke-width="1" transform="rotate(-20 10 10)"/>',
    chocolate:'<rect x="5" y="5" width="10" height="10" rx="2" fill="#6b3f26"/><path d="M7 8h6M7 12h6" stroke="#8a5537" stroke-width="1"/>',
    vainilla:'<g fill="#f3e2b0" stroke="#e2c47a" stroke-width=".6"><circle cx="10" cy="5.5" r="3"/><circle cx="14.3" cy="8.6" r="3"/><circle cx="12.7" cy="13.6" r="3"/><circle cx="7.3" cy="13.6" r="3"/><circle cx="5.7" cy="8.6" r="3"/></g><circle cx="10" cy="10" r="2" fill="#f5b942"/>',
    mango:'<rect x="5" y="5" width="10" height="10" rx="2.5" fill="#f5a623"/><rect x="7" y="7" width="3" height="3" rx="1" fill="#ffd27a"/>',
    cafe:'<ellipse cx="10" cy="10" rx="5" ry="7" fill="#7a5236" transform="rotate(25 10 10)"/><path d="M8 4c3 4-1 8 2 12" stroke="#4a2f1d" stroke-width="1.2" fill="none" transform="rotate(25 10 10)"/>',
    cookies:'<circle cx="10" cy="10" r="6" fill="#3b3b3b"/><circle cx="8" cy="8" r="1.2" fill="#f4f1ea"/><circle cx="12" cy="11" r="1" fill="#f4f1ea"/><circle cx="9" cy="12.5" r=".8" fill="#f4f1ea"/>',
    caramelo:'<path d="M10 3c3 5 5 7 5 10a5 5 0 0 1-10 0c0-3 2-5 5-10z" fill="#d08a2e"/><ellipse cx="8.3" cy="12" rx="1.2" ry="2" fill="#f2c27a"/>',
    ron:'<ellipse cx="10" cy="10" rx="4" ry="5.5" fill="#6d3b5c" transform="rotate(-15 10 10)"/><path d="M8 8c1 1 3 1 4 0M8 12c1 1 3 1 4 0" stroke="#4a2440" stroke-width=".9" fill="none"/>',
    mora:'<g fill="#5b2a6e"><circle cx="8" cy="8" r="2.6"/><circle cx="12" cy="8" r="2.6"/><circle cx="10" cy="11.5" r="2.6"/><circle cx="7" cy="12" r="2.3"/><circle cx="13" cy="12" r="2.3"/><circle cx="10" cy="15" r="2.2"/></g><path d="M9 4l1 2 1-2" stroke="#3f9a4a" stroke-width="1.2" fill="none"/>',
    maracuya:'<circle cx="10" cy="10" r="6.5" fill="#f2c230"/><g fill="#3b2a12"><circle cx="8" cy="8" r=".9"/><circle cx="12" cy="9" r=".9"/><circle cx="9" cy="12" r=".9"/><circle cx="12.5" cy="12.5" r=".8"/></g>',
    chicle:'<circle cx="10" cy="10" r="6" fill="#f49ac1" fill-opacity=".35" stroke="#f49ac1" stroke-width="1.4"/><circle cx="8" cy="8" r="1.4" fill="#fff" fill-opacity=".9"/>',
    gen:'<path d="M10 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#f5b942"/>'
  };
  ['durazno','guanabana','naranjilla','tamarindo'].forEach(k => PART[k] = PART.gen);
  function burst(btn){
    const k = btn.dataset.flav, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
    if (reduce) return;
    const n = 3;
    for (let i=0;i<n;i++){
      const el = document.createElement('b'); el.className = 'flav-p';
      el.innerHTML = `<svg viewBox="0 0 20 20" width="21" height="21">${PART[k]||PART.gen}</svg>`;
      const dx = (i-(n-1)/2)*18 + (Math.random()*10-5), dy = -(26 + Math.random()*20), r = (Math.random()*80-40)|0;
      el.style.setProperty('--dx', dx+'px'); el.style.setProperty('--dy', dy+'px'); el.style.setProperty('--r', r+'deg');
      el.style.animationDelay = (i*60)+'ms';
      btn.appendChild(el); setTimeout(()=>el.remove(), 1200);
    }
  }

  let currentTab = 0;
  sec.menu = () => {
    const M = N.menu; if (!M) return '';
    const cats = M.categorias || [];
    return `
    <section class="menu" id="menu"><div class="wrap">
      <div class="sec-head center reveal"><span class="eyebrow">${esc(L(M.etiqueta))}</span><h2>${esc(L(M.titulo))}</h2></div>
      <div class="tabs" role="tablist">${cats.map((c,i)=>`<button type="button" role="tab" data-tab="${i}" aria-selected="${i===currentTab}">${esc(L(c.nombre))}</button>`).join('')}</div>
      <div id="tabPanel">${menuPanel(cats[currentTab])}</div>
      ${M.sabores ? `<div class="flavors"><h3>${t('flavors')}</h3><div class="chips flav">${M.sabores.map(s=>{ const es = typeof s==='string' ? s : s.es; const f = flavorOf(es); return `<button type="button" class="flav-chip" data-flav="${esc(f.k)}" data-es="${esc(es)}" style="--fc:${f.c}"><i aria-hidden="true"></i>${esc(L(s))}</button>`; }).join('')}</div><p class="flav-tip" id="flavTip" aria-live="polite">${t('flavHint')}</p></div>` : ''}
      ${M.nota ? `<p class="note">${esc(L(M.nota))}</p>` : ''}
    </div></section>`;
  };
  function menuPanel(c){
    if (!c) return '';
    return `<div class="items" role="tabpanel">${(c.items||[]).map(it=>`
      <div class="item"><div class="row"><h3>${esc(L(it.nombre))}</h3><span class="p">${esc(L(it.precio))}</span></div>${it.desc ? `<p>${esc(L(it.desc))}</p>` : ''}</div>`).join('')}</div>`;
  }

  sec.reviews = () => {
    if (!R.calificacion) return '';
    const cards = (R.destacadas && R.destacadas.length ? R.destacadas : [null,null,null]);
    return `
    <section class="reviews" id="resenas" style="background:var(--sand)"><div class="wrap">
      <div class="head reveal">
        <div class="sec-head" style="margin:0"><span class="eyebrow">${t('reviews')}</span><h2>${esc(L(R.titulo))}</h2></div>
        <div class="score"><b>${esc(R.calificacion)}</b><div><div class="stars">★★★★★</div><div>${esc(R.total)} ${t('reviewsOn')}</div></div></div>
      </div>
      <div class="rgrid">${cards.map(c => `<div class="rcard reveal"><span class="stars">★★★★★</span>${c ? `<p>“${esc(L(c.texto))}”</p><small>${esc(c.autor)}</small>` : `<p style="color:var(--ink-soft)">${t('reviewPh')}</p>${pend(true)}`}</div>`).join('')}</div>
      <div class="btns" style="margin-top:24px">
        ${R.dejarResena ? `<a class="btn btn-main" href="${esc(R.dejarResena)}" target="_blank" rel="noopener">${ico('star')}${t('leaveReview')}</a>` : ''}
        ${R.verTodas ? `<a class="btn btn-line" href="${esc(R.verTodas)}" target="_blank" rel="noopener">${t('seeAll')}</a>` : ''}
      </div>
    </div></section>`;
  };

  sec.visit = () => {
    const locs = N.locales || []; if (!locs.length) return '';
    return `
    <section class="visit" id="visitanos"><div class="wrap">
      <div class="grid">${locs.map(l => l.pronto ? `
        <div class="place reveal"><div class="soon-art">${esc(l.nombre)}</div><div class="body">
          <span class="tag soon">${t('soon')}</span><h3>${esc(l.nombre)}</h3><p class="hours">${esc(L(l.nota))}${pend(l.porConfirmar)}</p>
          ${wa() ? `<div class="btns"><a class="btn btn-main" href="${esc(wa((lang==='es'?'Hola, avísenme cuando abra Oasis en ':'Hi, let me know when Oasis opens in ')+l.nombre))}" target="_blank" rel="noopener">${ico('wa')}${t('notifyMe')}</a></div>` : ''}
        </div></div>` : `
        <div class="place reveal">
          <iframe class="map" loading="lazy" title="Mapa ${esc(l.nombre)}" src="${esc(mapEmbed(l))}" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="body">
            <span class="tag">${esc(l.ciudad||'')}</span><h3>${esc(l.nombre)}</h3>
            <p>${esc(l.direccion)}</p>
            <p class="hours"><b>${t('hoursT')}:</b> ${esc(hoursText(l.horario))}</p>
            <div class="btns">
              <a class="btn btn-main" href="${esc(dir(l))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>
              ${tel ? `<a class="btn btn-line" href="${esc(tel)}">${ico('phone')}${t('call')}</a>` : ''}
              ${wa() ? `<a class="btn btn-line" href="${esc(wa(L(C.mensajeWhatsapp)))}" target="_blank" rel="noopener">${ico('wa')}WhatsApp</a>` : ''}
            </div>
          </div>
        </div>`).join('')}</div>
    </div></section>`;
  };

  sec.footer = () => {
    const S = N.redes || {};
    const soc = ['instagram','tiktok','facebook'].filter(k => S[k]);
    return `
    <footer><div class="wrap">
      <div><h3>${esc(N.nombre)}</h3><p>${esc(L(N.lema))}</p>
        ${soc.length ? `<div class="social" style="margin-top:16px" aria-label="${t('follow')}">${soc.map(k=>`<a href="${esc(S[k])}" target="_blank" rel="noopener" aria-label="${k}">${ico(k)}</a>`).join('')}</div>` : (N.demo ? `<p style="margin-top:12px">${t('follow')}:${pend(true)}</p>` : '')}
      </div>
      <div><h3>${t('contact')}</h3>
        ${C.telefono ? `<p><a href="${esc(tel)}">${esc(C.telefono)}</a></p>` : ''}
        ${C.whatsapp ? `<p><a href="${esc(wa())}" target="_blank" rel="noopener">WhatsApp</a>${pend(C.whatsappPorConfirmar)}</p>` : ''}
        ${(C.delivery||[]).filter(d=>d&&d.url).map(d=>`<p><a href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.nombre)}</a></p>`).join('')}
      </div>
      <div><h3>${esc(N.nombre)}</h3>${NAV.map(([v,k])=>`<p><a href="#${v}">${t(k)}</a></p>`).join('')}</div>
      <div><h3>${t('hoursT')}</h3><p>${esc(hoursText(main.horario))}</p><p>${esc(main.direccion||'')}</p></div>
      <p class="copy">© ${new Date().getFullYear()} ${esc(N.nombre)}. ${t('rights')}${N.creditos ? ' · ' + N.creditos : ''}</p>
    </div></footer>`;
  };

  sec.dock = () => `
    <nav class="dock" aria-label="${t('contact')}">
      ${tel ? `<a href="${esc(tel)}">${ico('phone')}${t('call')}</a>` : ''}
      ${wa() ? `<a class="main" href="${esc(wa(L(C.mensajeWhatsapp)))}" target="_blank" rel="noopener" data-order>${ico('bag')}${t('order')}</a>` : ''}
      ${main.direccion ? `<a href="${esc(dir(main))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>` : ''}
    </nav>
    <div class="osheet" id="osheet" hidden>
      <div class="osheet-bg" data-close></div>
      <div class="osheet-card" role="dialog" aria-modal="true" aria-labelledby="osTitle" tabindex="-1">
        <span class="osheet-grab" aria-hidden="true"></span>
        <button type="button" class="osheet-x" data-close aria-label="${t('close')}">×</button>
        <div id="osBody"></div>
      </div>
    </div>`;

  // tarjeta "¿Cómo quieres pedir?": WhatsApp grande, apps de delivery pequeñas y llamar
  function sheetBody(item){
    const st = status(main.horario);
    const msg = item ? (lang==='es' ? 'Hola, quiero pedir un ' : 'Hi, I’d like to order a ') + item : L(C.mensajeWhatsapp);
    const apps = (C.delivery||[]).filter(d => d && d.url);
    const appCls = n => /door/i.test(n) ? 'dd' : /uber/i.test(n) ? 'ue' : '';
    const appLabel = n => /uber/i.test(n) ? 'Uber <b>Eats</b>' : esc(n);
    return `
      ${st ? `<p class="os-status ${st.open?'open':''}"><span class="dot ${st.open?'open':''}"></span>${esc(st.text)}</p>` : ''}
      <h3 id="osTitle">${item ? `${t('orderItem')} <em>${esc(item)}</em>` : t('howOrder')}</h3>
      ${wa() ? `<a class="os-wa" href="${esc(wa(msg))}" target="_blank" rel="noopener">${ico('wa')}<span><b>${lang==='es'?'Pedir por WhatsApp':'Order on WhatsApp'}</b><small>${t('waSub')}</small></span></a>` : ''}
      ${apps.length ? `<p class="os-q">${t('appsQ')}</p><div class="os-apps">${apps.map(d=>`<a class="os-app ${appCls(d.nombre)}" href="${esc(d.url)}" target="_blank" rel="noopener">${appLabel(d.nombre)}</a>`).join('')}</div>` : ''}
      ${tel ? `<a class="os-call" href="${esc(tel)}">${ico('phone')}<span>${t('callQ')} <b>${esc(C.telefono)}</b></span></a>` : ''}`;
  }
  function startVideos(){
    document.querySelectorAll('video[autoplay]').forEach(v => {
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.controls = false;
      const go = () => { const pr = v.play(); if (pr && pr.catch) pr.catch(() => v.classList.add('still')); };
      if (v.readyState >= 2) go(); else v.addEventListener('canplay', go, {once:true});
      v.addEventListener('playing', () => v.classList.remove('still'));
      go();
    });
  }
  // si el teléfono bloqueó el video (modo ahorro), intentarlo otra vez al primer toque o al volver a la pestaña
  ['touchstart','click'].forEach(ev => document.addEventListener(ev, () => document.querySelectorAll('video.still').forEach(v => v.play().catch(()=>{})), {passive:true}));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) document.querySelectorAll('video[autoplay]').forEach(v => v.paused && v.play().catch(()=>{})); });

  let lastFocus = null;
  function openSheet(item){
    const sh = document.getElementById('osheet'); if (!sh) return false;
    document.getElementById('osBody').innerHTML = sheetBody(item);
    lastFocus = document.activeElement;
    sh.hidden = false; document.documentElement.classList.add('os-lock');
    requestAnimationFrame(() => { sh.classList.add('show'); const f = sh.querySelector('.os-wa,.os-app,.os-call'); f && f.focus({preventScroll:true}); });
    return true;
  }
  function closeSheet(){
    const sh = document.getElementById('osheet'); if (!sh || sh.hidden) return;
    sh.classList.remove('show'); document.documentElement.classList.remove('os-lock');
    const card = sh.querySelector('.osheet-card'); card.style.transform = '';
    setTimeout(() => { sh.hidden = true; }, 320);
    lastFocus && lastFocus.focus && lastFocus.focus({preventScroll:true});
  }
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-order]');
    if (o) { if (openSheet(o.dataset.order || '')) { e.preventDefault(); e.stopPropagation(); } return; }
    if (e.target.closest('#osheet [data-close]')) { closeSheet(); return; }
    if (e.target.closest('#osheet a')) setTimeout(closeSheet, 300);
  }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
  // deslizar hacia abajo para cerrar (celular)
  let dragY = null;
  document.addEventListener('touchstart', e => { const c = e.target.closest('.osheet-card'); dragY = c && c.scrollTop <= 0 ? e.touches[0].clientY : null; }, {passive:true});
  document.addEventListener('touchmove', e => { if (dragY == null) return; const d = e.touches[0].clientY - dragY; const c = document.querySelector('.osheet-card'); if (c && d > 0) c.style.transform = `translateY(${d}px)`; }, {passive:true});
  document.addEventListener('touchend', e => { if (dragY == null) return; const d = e.changedTouches[0].clientY - dragY; dragY = null; const c = document.querySelector('.osheet-card'); if (!c) return; if (d > 90) closeSheet(); else c.style.transform = ''; });

  // ---------- armar ----------
  function applyTheme(){
    const c = N.colores || {}; const r = document.documentElement.style;
    const map = {texto:'--ink', textoSuave:'--ink-soft', marca:'--brand', marcaOscuro:'--brand-deep', fondo:'--cream', arena:'--sand', lineas:'--line', acento:'--sun'};
    Object.entries(map).forEach(([k,v]) => { if (c[k]) r.setProperty(v, c[k]); });
    if (N.letras) {
      if (N.letras.titulos) r.setProperty('--display', N.letras.titulos);
      if (N.letras.texto) r.setProperty('--body', N.letras.texto);
      if (N.letras.googleFonts && !document.getElementById('gf')) {
        const l = document.createElement('link'); l.id='gf'; l.rel='stylesheet'; l.href=N.letras.googleFonts; document.head.appendChild(l);
      }
    }
    document.title = L(N.tituloPestana) || N.nombre;
    const d = document.querySelector('meta[name=description]'); if (d) d.content = L(N.descripcion) || '';
    document.documentElement.lang = lang;
  }

  function render(keepScroll){
    const y = window.scrollY;
    applyTheme();
    const order = ['demo','header', ...VIEWS[viewNow()], 'footer','dock'];
    document.getElementById('app').innerHTML = order.map(k => sec[k] ? sec[k]() : '').join('');
    wire();
    window.scrollTo(0, keepScroll ? y : 0);
  }
  window.addEventListener('hashchange', () => { currentTab = 0; render(false); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || a.dataset.scroll) return;
    const v = a.getAttribute('href').slice(1);
    if (VIEWS[v] && v === viewNow()) { e.preventDefault(); currentTab = 0; render(false); }
  });

  function wire(){
    // videos de fondo: arrancarlos por código (iPhone a veces no lo hace solo) y nunca mostrar el botón de play
    startVideos();
    // idioma
    document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { lang = b.dataset.lang; try{localStorage.setItem(LKEY,lang)}catch(e){} render(true); });
    // encabezado con línea al bajar
    const top = document.getElementById('top');
    const onScroll = () => top && top.classList.toggle('scrolled', window.scrollY > 10);
    window.onscroll = onScroll; onScroll();
    // sabores con partículas
    const tip = document.getElementById('flavTip');
    document.querySelectorAll('.flav-chip').forEach(b => {
      let last = 0;
      const go = () => { if (Date.now()-last < 500) return; last = Date.now(); burst(b);
        if (tip) { const T = (N.menu.saboresTips||{})[b.dataset.es]; tip.innerHTML = `<b>${esc(b.textContent)}</b> · ${esc(T ? L(T) : t('flavTipDef'))}`; tip.classList.remove('show'); void tip.offsetWidth; tip.classList.add('show'); } };
      b.addEventListener('click', go);
      b.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') go(); });
    });
    // pestañas del menú
    document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
      currentTab = +b.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach(x => x.setAttribute('aria-selected', x===b));
      document.getElementById('tabPanel').innerHTML = menuPanel(N.menu.categorias[currentTab]);
    });
    // tarjetas que se voltean (sin voltear al tocar un link interno)
    document.querySelectorAll('.fav').forEach(f => { f.onclick = e => { if (e.target.closest('a')) return; f.classList.toggle('flip'); pause(9000); }; f.onkeydown = e => { if ((e.key==='Enter'||e.key===' ') && !e.target.closest('a')) { e.preventDefault(); f.click(); } }; });
    document.querySelectorAll('[data-scroll]').forEach(a => a.onclick = e => { e.preventDefault(); const el = document.getElementById(a.dataset.scroll); if (el) el.scrollIntoView({behavior:'smooth'}); });
    const promo = document.getElementById('promo');
    if (promo) {
      const close = () => { promo.classList.remove('show'); setTimeout(()=>promo.hidden = true, 400); };
      setTimeout(() => { promo.hidden = false; requestAnimationFrame(() => promo.classList.add('show')); }, 1400);
      promo.querySelector('.promo-x').onclick = close;
      promo.querySelector('[data-scroll]').addEventListener('click', close);
      promo.querySelector('[data-scroll]').addEventListener('click', e => e.stopPropagation());
    }
    railAuto();
    fitImages();
    reveal();
  }


  // recorta el espacio vacío de cada foto para que todas se vean del mismo tamaño
  function fitImages(){
    document.querySelectorAll('img[data-fit]').forEach(img => {
      const alphaOnly = img.dataset.fit === 'alpha', fill = +(img.dataset.fill || 0.9);
      const run = () => {
        try {
          const W = img.naturalWidth, H = img.naturalHeight; if (!W) return;
          const k = Math.min(1, 220 / Math.max(W,H)), w = Math.round(W*k), h = Math.round(H*k);
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          const x = c.getContext('2d', {willReadFrequently:true}); x.drawImage(img,0,0,w,h);
          const d = x.getImageData(0,0,w,h).data; let x0=w,y0=h,x1=-1,y1=-1;
          for (let y=0;y<h;y++) for (let q=0;q<w;q++){ const i=(y*w+q)*4; if (d[i+3]>24 && (alphaOnly || !(d[i]>244&&d[i+1]>244&&d[i+2]>244))) { if(q<x0)x0=q; if(q>x1)x1=q; if(y<y0)y0=y; if(y>y1)y1=y; } }
          if (x1 < 0) return;
          const bw=(x1-x0+1)/w, bh=(y1-y0+1)/h, ar=W/H; // fracciones de la imagen
          const m = Math.max(bw*ar, bh);        // lado mayor del producto, en alturas de imagen
          const hPct = fill/m*100, wPct = hPct*ar;            // tamaño de la imagen respecto a la caja cuadrada
          const cx = (x0/w + bw/2)*wPct, cy = (y0/h + bh/2)*hPct;
          Object.assign(img.style, {position:'absolute', width:wPct+'%', height:hPct+'%', maxWidth:'none', maxHeight:'none', left:(50-cx)+'%', top:(50-cy)+'%'});
          img.classList.add('fitted');
        } catch(e) { /* si la foto no deja leerse, se queda centrada normal */ }
      };
      img.complete && img.naturalWidth ? run() : img.addEventListener('load', run, {once:true});
    });
  }

  // carrusel automático: se pausa mientras la persona lo usa y vuelve a moverse solo
  let timer = null, holdUntil = 0, hovering = false;
  function pause(ms){ holdUntil = Date.now() + (ms || 6000); }
  function railAuto(){
    const rail = document.getElementById('rail'); if (!rail) return;
    const cards = [...rail.querySelectorAll('.fav')]; const dots = [...document.querySelectorAll('#railDots button')];
    let cur = 0, autoScroll = false, autoT = null;
    const center = el => el.offsetLeft + el.offsetWidth/2;   // .rail es position:relative
    const idx = () => { const c = rail.scrollLeft + rail.clientWidth/2; let best=0,d=1e9; cards.forEach((el,i)=>{ const m=Math.abs(center(el)-c); if(m<d){d=m;best=i;} }); return best; };
    const setActive = i => { cur = i; dots.forEach((d,j)=>d.setAttribute('aria-current', j===i)); cards.forEach((c,j)=>c.classList.toggle('active', j===i)); };
    const canScroll = () => rail.scrollWidth > rail.clientWidth + 4;
    const go = i => { setActive(i); if (canScroll()) { autoScroll = true; clearTimeout(autoT); autoT = setTimeout(()=>autoScroll=false, 900); rail.scrollTo({left: center(cards[i]) - rail.clientWidth/2, behavior:'smooth'}); } };
    let ticking = false;
    rail.onscroll = () => { if (autoScroll || !canScroll() || ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; setActive(idx()); }); };
    cards.forEach((c,i) => {
      c.addEventListener('mouseenter', () => { hovering = true; setActive(i); });
      c.addEventListener('mouseleave', () => { hovering = false; holdUntil = Date.now() + 1200; });
    });
    dots.forEach((d,i) => d.onclick = () => { pause(); go(i); });
    ['pointerdown','wheel','touchstart','keydown'].forEach(ev => rail.addEventListener(ev, () => pause(), {passive:true}));
    requestAnimationFrame(() => setActive(canScroll() ? idx() : 0));
    clearInterval(timer);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      if (document.hidden || hovering || Date.now() < holdUntil) return;
      if (cards.some(c => c.classList.contains('flip'))) { cards.forEach(c=>c.classList.remove('flip')); holdUntil = Date.now() + 900; return; }
      go((cur+1) % cards.length);
    }, 3800);
  }

  // aparición suave; todo queda visible a los 2.5 s pase lo que pase
  function reveal(){
    const els = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) return;
    const vh = window.innerHeight;
    els.forEach(el => { if (el.getBoundingClientRect().top > vh) el.classList.add('wait'); });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('wait'); io.unobserve(e.target); } }), {rootMargin:'0px 0px 10% 0px'});
    els.forEach(el => io.observe(el));
    setTimeout(() => els.forEach(el => el.classList.remove('wait')), 2500);
  }

  render();
  setInterval(() => { const el = document.querySelector('.today'); if (el) el.outerHTML = sec.today(); }, 60000);
})();
