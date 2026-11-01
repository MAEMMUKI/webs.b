/* Sabores con partículas (compartido por la web y la página de solo menú).
   Para un sabor nuevo: agrega su color en FLAVS y su dibujito en PART. */
(function(){
  const norm = x => (x||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const FLAVS = [
    ['fresa','#e0566f'],['coco','#e9e2d3'],['chocolate','#6b3f26'],['vainilla','#f3e2b0'],['mango','#f5a623'],
    ['cafe','#7a5236'],['cookies','#3b3b3b'],['caramelo','#d08a2e'],['ron','#6d3b5c'],['mora','#5b2a6e'],
    ['maracuya','#f2c230'],['chicle','#f49ac1'],['durazno','#f6a77a'],['guanabana','#eef0e2'],['naranjilla','#f39c34'],['tamarindo','#9b6a3c']
  ];
  const flavorOf = es => { const n = norm(es); const f = FLAVS.find(([k])=>n.includes(k)); return f ? {k:f[0], c:f[1]} : {k:'gen', c:'var(--sun)'}; };
  const PART = {
    fresa:'<path d="M10 18c-4-2-7-6-6-10 1-2 3-3 6-3s5 1 6 3c1 4-2 8-6 10z" fill="#e0566f"/><path d="M6 5c1-2 3-2 4-1 1-1 3-1 4 1-2 1-6 1-8 0z" fill="#3f9a4a"/><g fill="#ffd6dd"><circle cx="8" cy="10" r=".8"/><circle cx="12" cy="10" r=".8"/><circle cx="10" cy="13" r=".8"/></g>',
    coco:'<path d="M2.5 9.5a7.5 7.5 0 0 0 15 0z" fill="#7b4a29"/><path d="M5 12.6l1.2-.6M7.6 15l.6-1.1M12.4 15l-.6-1.1M15 12.6l-1.2-.6M10 16.4v-1.2" stroke="#a8754a" stroke-width=".8" stroke-linecap="round"/><ellipse cx="10" cy="9.5" rx="7.5" ry="3" fill="#fffaf0" stroke="#5c341b" stroke-width=".8"/><ellipse cx="10" cy="9.7" rx="5.1" ry="1.8" fill="#efe4cc"/>',
    chocolate:'<rect x="5" y="5" width="10" height="10" rx="2" fill="#6b3f26"/><path d="M7 8h6M7 12h6" stroke="#8a5537" stroke-width="1"/>',
    vainilla:'<g fill="#f3e2b0" stroke="#e2c47a" stroke-width=".6"><circle cx="10" cy="5.5" r="3"/><circle cx="14.3" cy="8.6" r="3"/><circle cx="12.7" cy="13.6" r="3"/><circle cx="7.3" cy="13.6" r="3"/><circle cx="5.7" cy="8.6" r="3"/></g><circle cx="10" cy="10" r="2" fill="#f5b942"/>',
    mango:'<g transform="rotate(-25 10 10)"><path d="M10 1.8c4.5 0 7.4 3.7 7.2 8.3-.2 4.7-3.5 7.9-7.6 7.7-4.2-.2-7-3.6-6.8-7.9C3 5.2 5.8 1.8 10 1.8z" fill="#5f9e43"/><path d="M14.6 4.2c2 1.5 2.9 3.8 2.6 6.4-.3 2.9-2 5.2-4.3 6.3 1.4-2.6 2-5.8 1.7-12.7z" fill="#e2553b" opacity=".85"/><path d="M10 3.2c3.6 0 5.9 3.1 5.8 6.9-.1 3.9-2.8 6.5-6.1 6.4-3.4-.1-5.6-2.9-5.4-6.4C4.4 6.1 6.7 3.2 10 3.2z" fill="#f7a823"/><path d="M10 4.6c2.6 0 4.3 2.4 4.2 5.4-.1 3-2 5-4.4 4.9-2.5-.1-4.1-2.2-3.9-5C6 7 7.6 4.6 10 4.6z" fill="#ffc94a"/><ellipse cx="10" cy="9.8" rx="2.1" ry="3.7" fill="#f6e7bf" stroke="#d6b26a" stroke-width=".6"/><path d="M10 6.6v6.4M9 7.8l1 .7 1-.7M9 10.2l1 .7 1-.7" stroke="#d6b26a" stroke-width=".45" fill="none"/><path d="M10 1.9c.3-.9 1-1.4 1.8-1.4" stroke="#4a3220" stroke-width=".8" fill="none" stroke-linecap="round"/><path d="M11.4 1.1c1.5-.8 3.1-.4 3.7.6-1.5.6-2.8.4-3.7-.6z" fill="#3f8a3a"/></g>',
    cafe:'<ellipse cx="10" cy="10" rx="5" ry="7" fill="#7a5236" transform="rotate(25 10 10)"/><path d="M8 4c3 4-1 8 2 12" stroke="#4a2f1d" stroke-width="1.2" fill="none" transform="rotate(25 10 10)"/>',
    cookies:'<circle cx="10" cy="10" r="6" fill="#3b3b3b"/><circle cx="8" cy="8" r="1.2" fill="#f4f1ea"/><circle cx="12" cy="11" r="1" fill="#f4f1ea"/><circle cx="9" cy="12.5" r=".8" fill="#f4f1ea"/>',
    caramelo:'<path d="M10 3c3 5 5 7 5 10a5 5 0 0 1-10 0c0-3 2-5 5-10z" fill="#d08a2e"/><ellipse cx="8.3" cy="12" rx="1.2" ry="2" fill="#f2c27a"/>',
    ron:'<path d="M3.2 8.6c-.4-2.4 1.6-3.8 3.6-3.1 1.6-1.4 4.2-.4 4.1 1.9 1.5 1.3.6 4-1.4 4.1-1 1.5-3.6 1.4-4.3-.2-1.6-.2-2.4-1.4-2-2.7z" fill="#5b2840"/><path d="M5 7.4c.9.6 2 .5 2.8-.2M5.6 9.6c1 .4 2.2.2 2.9-.6M8.6 6.6c.6.7.7 1.6.3 2.4" stroke="#36142a" stroke-width=".7" fill="none" stroke-linecap="round"/><ellipse cx="6" cy="6.6" rx="1" ry=".55" fill="#a8627f" opacity=".75"/><path d="M9.6 13.2c-.2-2 1.5-3.2 3.1-2.6 1.4-1.1 3.6-.2 3.5 1.7 1.2 1.1.4 3.4-1.2 3.4-.9 1.2-3.1 1.1-3.7-.2-1.3-.2-2-1.2-1.7-2.3z" fill="#6a3049"/><path d="M11.2 12.4c.8.5 1.7.4 2.4-.2M11.7 14.2c.9.3 1.9.1 2.5-.5" stroke="#3d1830" stroke-width=".7" fill="none" stroke-linecap="round"/><ellipse cx="12" cy="11.6" rx=".9" ry=".5" fill="#b06e8a" opacity=".7"/>',
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

  window.MaemukiSabores = { FLAVS, PART, flavorOf, burst, norm };
})();
