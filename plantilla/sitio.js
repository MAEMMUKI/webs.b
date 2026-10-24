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
      openNow:'Abierto ahora', closedNow:'Cerrado ahora', opensAt:'Abre a las', closesAt:'Cierra a las', today:'Hoy', everyDay:'Todos los días',
      flipHint:'Toca una copa para ver qué lleva', turn:'Voltear', pairWith:'Combínalo con', orderThis:'Pídelo por WhatsApp',
      seeAll:'Ver todas en Google', leaveReview:'Déjanos tu reseña', reviewsOn:'reseñas en Google', soon:'Próximamente', notifyMe:'Avísame cuando abra',
      follow:'Síguenos', hoursT:'Horario', contact:'Contacto', rights:'Todos los derechos reservados.', flavors:'Nuestros sabores', viewMenu:'Ver el menú',
      demo:'Borrador de propuesta para', demo2:'· no es la página oficial', pend:'por confirmar', reviewPh:'Aquí va una reseña real de Google, elegida con el dueño.'},
    en:{menu:'Menu', favs:'Favorites', story:'Our story', visit:'Visit us', reviews:'Reviews', order:'Order', call:'Call', directions:'Directions', whatsapp:'WhatsApp',
      openNow:'Open now', closedNow:'Closed now', opensAt:'Opens at', closesAt:'Closes at', today:'Today', everyDay:'Every day',
      flipHint:'Tap a cup to see what’s inside', turn:'Flip', pairWith:'Pair it with', orderThis:'Order on WhatsApp',
      seeAll:'See all on Google', leaveReview:'Leave us a review', reviewsOn:'reviews on Google', soon:'Coming soon', notifyMe:'Tell me when it opens',
      follow:'Follow us', hoursT:'Hours', contact:'Contact', rights:'All rights reserved.', flavors:'Our flavors', viewMenu:'See the menu',
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
  const dir = a => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(a);
  const mapEmbed = a => 'https://www.google.com/maps?q=' + encodeURIComponent(a) + '&output=embed';
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
    return {open, text: open ? `${t('openNow')} · ${t('closesAt')} ${fmt(b)}` : `${t('closedNow')} · ${min < toMin(a) ? t('opensAt')+' '+fmt(a) : ''}`.replace(/ · $/,'')};
  }
  function hoursText(hours){
    if (!hours) return '';
    const vals = DAYS.map(d => hours[d] ? hours[d].join('-') : 'x');
    if (vals.every(v => v === vals[0]) && hours.lun) return `${t('everyDay')} · ${fmt(hours.lun[0])} – ${fmt(hours.lun[1])}`;
    const names = lang==='es' ? ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return DAYS.map((d,i) => `${names[i]} ${hours[d] ? fmt(hours[d][0])+'–'+fmt(hours[d][1]) : '—'}`).join(' · ');
  }

  // ---------- secciones ----------
  const main = N.locales && N.locales[0] || {};
  const sec = {};

  sec.demo = () => N.demo ? `<div class="demo">${t('demo')} ${esc(N.nombre)} ${t('demo2')}</div>` : '';

  sec.header = () => `
  <header class="top" id="top"><div class="wrap">
    <a class="logo" href="#inicio" aria-label="${esc(N.nombre)}">${N.logo ? `<img src="${esc(N.logo)}" alt="${esc(N.nombre)}" onerror="this.replaceWith(document.createTextNode(this.alt))">` : esc(N.nombre)}</a>
    <nav class="nav" aria-label="Principal">
      <a href="#favoritos">${t('favs')}</a><a href="#menu">${t('menu')}</a><a href="#historia">${t('story')}</a><a href="#visitanos">${t('visit')}</a>
    </nav>
    ${(N.idiomas||[]).length > 1 ? `<div class="lang" role="group" aria-label="Idioma / Language">${N.idiomas.map(l=>`<button type="button" data-lang="${l}" aria-pressed="${l===lang}">${l.toUpperCase()}</button>`).join('')}</div>` : ''}
    ${wa() ? `<a class="btn btn-main" href="${esc(wa(L(C.mensajeWhatsapp)))}" target="_blank" rel="noopener">${ico('wa')}${t('order')}</a>` : ''}
  </div></header>`;

  sec.hero = () => {
    const P = N.portada || {};
    const media = P.video
      ? `<video autoplay muted loop playsinline poster="${esc(P.imagen||'')}"><source src="${esc(P.video)}"></video>`
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
          ${main.direccion ? `<a class="btn btn-line" style="color:#fff;border-color:rgba(255,255,255,.7)" href="${esc(dir(main.direccion))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>` : ''}
        </div>
        ${R.calificacion ? `<a class="rating" href="${esc(R.verTodas||R.dejarResena||'#')}" target="_blank" rel="noopener"><span class="stars">★★★★★</span><b>${esc(R.calificacion)}</b> · ${esc(R.total)} ${t('reviewsOn')}</a>` : ''}
      </div>
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
      <div class="wrap sec-head reveal">
        <span class="eyebrow">${esc(L(F.etiqueta))}</span>
        <h2>${esc(L(F.titulo))}${pend(F.porConfirmar)}</h2>
        <p class="lead">${esc(L(F.texto))}</p>
      </div>
      <div class="rail" id="rail" tabindex="0" aria-label="${esc(L(F.titulo))}">
        ${items.map((p,i) => `
        <div class="fav" role="button" tabindex="0" aria-label="${esc(p.nombre)}: ${t('turn')}" style="--c1:${esc(p.color1)};--c2:${esc(p.color2)}">
          <div class="fav-in">
            <div class="face front">
              <span class="rank">${i+1}</span>
              <span class="turn">${ico('turn')}</span>
              <div class="pic"><span class="halo"></span>${p.foto ? `<img src="${esc(p.foto)}" alt="" crossorigin="anonymous" data-fit onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ph'}))">` : '<span class="ph"></span>'}</div>
              <div class="info"><h3>${esc(p.nombre)}</h3><span>${esc(L(p.corto))} · ${esc(p.precio)}</span></div>
            </div>
            <div class="face back">
              <h3>${esc(p.nombre)}</h3>
              <span class="price">${esc(p.precio)}</span>
              <ul>${(L(p.lleva)||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
              ${p.combina ? `<span class="pair"><b>${t('pairWith')}:</b> ${esc(L(p.combina))}</span>` : ''}
              ${wa() ? `<a class="btn btn-main" href="${esc(wa((lang==='es'?'Hola, quiero pedir un ':'Hi, I’d like to order a ')+p.nombre))}" target="_blank" rel="noopener">${ico('wa')}${t('orderThis')}</a>` : ''}
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

  sec.first = () => {
    const P = N.primeraVez; if (!P) return '';
    return `
    <section class="first"><svg class="paila" viewBox="0 0 200 120" fill="none" stroke="#f4ead7" stroke-width="3" aria-hidden="true"><ellipse cx="100" cy="30" rx="90" ry="18"/><path d="M10 30c4 50 40 78 90 78s86-28 90-78"/><path d="M40 20c20-30 100-30 120 0" stroke-dasharray="4 7"/><path d="M150 4l-38 46"/><ellipse cx="108" cy="54" rx="7" ry="4"/></svg>
      <div class="wrap">
        <div class="sec-head reveal"><span class="eyebrow">${esc(L(P.etiqueta))}</span><h2>${esc(L(P.titulo))}</h2><p class="lead">${esc(L(P.texto))}</p></div>
        <div class="steps">${(P.pasos||[]).map(s=>`<div class="step reveal"><h3>${esc(L(s.titulo))}</h3><p>${esc(L(s.texto))}</p></div>`).join('')}</div>
      </div>
    </section>`;
  };

  sec.breakfast = () => {
    const D = N.desayuno; if (!D) return '';
    return `
    <section class="breakfast" id="desayuno"><div class="wrap">
      <div class="sec-head reveal"><span class="eyebrow">${esc(L(D.etiqueta))}</span><h2>${esc(L(D.titulo))}</h2><p class="lead">${esc(L(D.texto))}</p></div>
      <div class="grid">${(D.platos||[]).map(p=>`<div class="dish reveal"><div class="row"><h3>${esc(L(p.nombre))}</h3><span class="p">${esc(p.precio)}</span></div><p>${esc(L(p.desc))}</p></div>`).join('')}</div>
      ${D.temporada ? `<div class="breads reveal" style="background:#fff;border:1px solid var(--line)"><h3>${esc(L(D.temporadaTitulo))}${pend(D.temporadaPorConfirmar)}</h3><div class="chips">${D.temporada.map(b=>`<span>${esc(L(b))}</span>`).join('')}</div></div>` : ''}
      ${D.panes ? `<div class="breads reveal"><h3>${esc(L(D.panesTitulo))}${pend(D.panesSinPrecio)}</h3><div class="chips">${D.panes.map(b=>`<span>${esc(b)}</span>`).join('')}</div></div>` : ''}
    </div></section>`;
  };

  let currentTab = 0;
  sec.menu = () => {
    const M = N.menu; if (!M) return '';
    const cats = M.categorias || [];
    return `
    <section class="menu" id="menu"><div class="wrap">
      <div class="sec-head reveal"><span class="eyebrow">${esc(L(M.etiqueta))}</span><h2>${esc(L(M.titulo))}</h2></div>
      <div class="tabs" role="tablist">${cats.map((c,i)=>`<button type="button" role="tab" data-tab="${i}" aria-selected="${i===currentTab}">${esc(L(c.nombre))}</button>`).join('')}</div>
      <div id="tabPanel">${menuPanel(cats[currentTab])}</div>
      ${M.sabores ? `<div class="flavors"><h3>${t('flavors')}</h3><div class="chips">${M.sabores.map(s=>`<span>${esc(L(s))}</span>`).join('')}</div></div>` : ''}
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
    <section class="reviews" id="resenas"><div class="wrap">
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
    <section class="visit" id="visitanos" style="background:var(--sand)"><div class="wrap">
      <div class="sec-head reveal"><span class="eyebrow">${t('visit')}</span><h2>${esc(L(N.visitanosTitulo))}</h2></div>
      <div class="grid">${locs.map(l => l.pronto ? `
        <div class="place reveal"><div class="soon-art">${esc(l.nombre)}</div><div class="body">
          <span class="tag soon">${t('soon')}</span><h3>${esc(l.nombre)}</h3><p class="hours">${esc(L(l.nota))}${pend(l.porConfirmar)}</p>
          ${wa() ? `<div class="btns"><a class="btn btn-main" href="${esc(wa((lang==='es'?'Hola, avísenme cuando abra Oasis en ':'Hi, let me know when Oasis opens in ')+l.nombre))}" target="_blank" rel="noopener">${ico('wa')}${t('notifyMe')}</a></div>` : ''}
        </div></div>` : `
        <div class="place reveal">
          <iframe class="map" loading="lazy" title="Mapa ${esc(l.nombre)}" src="${esc(mapEmbed(l.direccion))}" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="body">
            <span class="tag">${esc(l.ciudad||'')}</span><h3>${esc(l.nombre)}</h3>
            <p>${esc(l.direccion)}</p>
            <p class="hours"><b>${t('hoursT')}:</b> ${esc(hoursText(l.horario))}</p>
            <div class="btns">
              <a class="btn btn-main" href="${esc(dir(l.direccion))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>
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
        ${C.pedidos ? `<p><a href="${esc(C.pedidos)}" target="_blank" rel="noopener">${t('order')} online</a></p>` : ''}
      </div>
      <div><h3>${t('hoursT')}</h3><p>${esc(hoursText(main.horario))}</p><p>${esc(main.direccion||'')}</p></div>
      <p class="copy">© ${new Date().getFullYear()} ${esc(N.nombre)}. ${t('rights')}${N.creditos ? ' · ' + N.creditos : ''}</p>
    </div></footer>`;
  };

  sec.dock = () => `
    <nav class="dock" aria-label="${t('contact')}">
      ${tel ? `<a href="${esc(tel)}">${ico('phone')}${t('call')}</a>` : ''}
      ${wa() ? `<a class="main" href="${esc(wa(L(C.mensajeWhatsapp)))}" target="_blank" rel="noopener">${ico('wa')}${t('order')}</a>` : ''}
      ${main.direccion ? `<a href="${esc(dir(main.direccion))}" target="_blank" rel="noopener">${ico('pin')}${t('directions')}</a>` : ''}
    </nav>`;

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

  const ORDER = N.orden || ['demo','header','hero','today','top5','story','first','breakfast','menu','reviews','visit','footer','dock'];
  function render(){
    const y = window.scrollY;
    applyTheme();
    document.getElementById('app').innerHTML = ORDER.map(k => sec[k] ? sec[k]() : '').join('');
    wire();
    window.scrollTo(0, y);
  }

  function wire(){
    // idioma
    document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { lang = b.dataset.lang; try{localStorage.setItem(LKEY,lang)}catch(e){} render(); });
    // encabezado con línea al bajar
    const top = document.getElementById('top');
    const onScroll = () => top && top.classList.toggle('scrolled', window.scrollY > 10);
    window.onscroll = onScroll; onScroll();
    // pestañas del menú
    document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
      currentTab = +b.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach(x => x.setAttribute('aria-selected', x===b));
      document.getElementById('tabPanel').innerHTML = menuPanel(N.menu.categorias[currentTab]);
    });
    // tarjetas que se voltean (sin voltear al tocar un link interno)
    document.querySelectorAll('.fav').forEach(f => { f.onclick = e => { if (e.target.closest('a')) return; f.classList.toggle('flip'); pause(); }; f.onkeydown = e => { if ((e.key==='Enter'||e.key===' ') && !e.target.closest('a')) { e.preventDefault(); f.click(); } }; });
    railAuto();
    fitImages();
    reveal();
  }


  // recorta el espacio vacío de cada foto para que todas se vean del mismo tamaño
  function fitImages(){
    document.querySelectorAll('img[data-fit]').forEach(img => {
      const run = () => {
        try {
          const W = img.naturalWidth, H = img.naturalHeight; if (!W) return;
          const k = Math.min(1, 220 / Math.max(W,H)), w = Math.round(W*k), h = Math.round(H*k);
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          const x = c.getContext('2d', {willReadFrequently:true}); x.drawImage(img,0,0,w,h);
          const d = x.getImageData(0,0,w,h).data; let x0=w,y0=h,x1=-1,y1=-1;
          for (let y=0;y<h;y++) for (let q=0;q<w;q++){ const i=(y*w+q)*4; if (d[i+3]>24 && !(d[i]>244&&d[i+1]>244&&d[i+2]>244)) { if(q<x0)x0=q; if(q>x1)x1=q; if(y<y0)y0=y; if(y>y1)y1=y; } }
          if (x1 < 0) return;
          const bw=(x1-x0+1)/w, bh=(y1-y0+1)/h, ar=W/H; // fracciones de la imagen
          const fill = 0.9, m = Math.max(bw*ar, bh);        // lado mayor del producto, en alturas de imagen
          const hPct = fill/m*100, wPct = hPct*ar;            // tamaño de la imagen respecto a la caja cuadrada
          const cx = (x0/w + bw/2)*wPct, cy = (y0/h + bh/2)*hPct;
          Object.assign(img.style, {position:'absolute', width:wPct+'%', height:hPct+'%', maxWidth:'none', maxHeight:'none', left:(50-cx)+'%', top:(50-cy)+'%'});
          img.classList.add('fitted');
        } catch(e) { /* si la foto no deja leerse, se queda centrada normal */ }
      };
      img.complete && img.naturalWidth ? run() : img.addEventListener('load', run, {once:true});
    });
  }

  // carrusel automático, se detiene cuando la persona lo toca
  let timer = null, paused = false;
  function pause(){ paused = true; clearInterval(timer); }
  function railAuto(){
    const rail = document.getElementById('rail'); if (!rail) return;
    const cards = [...rail.querySelectorAll('.fav')]; const dots = [...document.querySelectorAll('#railDots button')];
    const idx = () => { const c = rail.scrollLeft + rail.clientWidth/2; let best=0,d=1e9; cards.forEach((el,i)=>{const m=el.offsetLeft+el.offsetWidth/2; if(Math.abs(m-c)<d){d=Math.abs(m-c);best=i;}}); return best; };
    const go = i => rail.scrollTo({left: cards[i].offsetLeft - (rail.clientWidth - cards[i].offsetWidth)/2, behavior:'smooth'});
    const mark = () => { const i = idx(); dots.forEach((d,j)=>d.setAttribute('aria-current', j===i)); cards.forEach((c,j)=>c.classList.toggle('active', j===i)); };
    rail.onscroll = mark; requestAnimationFrame(mark);
    dots.forEach((d,i) => d.onclick = () => { pause(); go(i); });
    ['pointerdown','wheel','touchstart','keydown'].forEach(ev => rail.addEventListener(ev, pause, {passive:true}));
    clearInterval(timer);
    if (paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => { if (document.hidden) return; const i = idx(); cards.forEach(c=>c.classList.remove('flip')); go((i+1) % cards.length); }, 3800);
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
