# webs.b · borradores de páginas web

Plantilla de Maemuki para hacer la web de cada negocio.

## Cómo está organizado
- `plantilla/` → el diseño y las funciones. Es igual para todos los negocios. No se toca para un cliente nuevo.
- `oasis/` → un negocio. Tiene `index.html` (no se toca) y `negocio.js` (todos los datos: textos, fotos, menú, links, colores).
- `index.html` (raíz) → lista de borradores.

## Negocio nuevo
1. Copia la carpeta `oasis` y ponle el nombre del negocio, en minúsculas y sin espacios (ej. `cafe-luna`).
2. Abre `negocio.js` y cambia los datos. Lo que tenga `porConfirmar: true` sale con etiqueta amarilla mientras `demo: true`.
3. Agrega el link en `index.html` de la raíz.
4. Queda en `https://maemmuki.github.io/webs.b/cafe-luna/`

## Cuando el cliente aprueba
1. En su `negocio.js` pon `demo: false`.
2. En su `index.html` borra la línea `<meta name="robots" content="noindex, nofollow">` para que Google la encuentre.
3. Mueve su web a un repositorio propio y conecta su dominio (Settings → Pages → Custom domain).
