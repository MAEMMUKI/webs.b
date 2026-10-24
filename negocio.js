/* ============================================================
   NEGOCIO: Oasis Helados con Queso & Coffee
   Este es el único archivo que se edita para cada negocio.
   - Textos con { es: '...', en: '...' } salen en español e inglés.
   - Lo que dice porConfirmar: true muestra una etiqueta amarilla
     mientras demo sea true.
   - Para un negocio nuevo: copia la carpeta "oasis", renómbrala
     y cambia este archivo.
   ============================================================ */
window.NEGOCIO = {
  id: 'oasis',
  demo: true,                       // true = muestra la franja de "borrador" y las etiquetas amarillas
  nombre: 'Oasis Helados con Queso',
  idiomas: ['es', 'en'],
  zonaHoraria: 'America/New_York',
  tituloPestana: { es: 'Oasis · Helados con queso en Union City', en: 'Oasis · Ecuadorian ice cream with cheese in Union City' },
  descripcion: { es: 'Helado con queso ecuatoriano, pan recién hecho y café en Union City, NJ.', en: 'Ecuadorian ice cream with cheese, fresh bread and coffee in Union City, NJ.' },
  lema: { es: 'Helado con queso ecuatoriano, pan recién hecho y café. Para compartir en familia.', en: 'Ecuadorian ice cream with cheese, fresh bread and coffee. Made for sharing.' },
  creditos: 'Diseño: Maemuki',

  logo: 'https://vibe.filesafe.space/1782778390814352848/attachments/730d8d57-4f76-46d0-aed8-57bbdd2b4ad2.png',

  // Colores tomados de su web actual
  colores: {
    texto: '#1f2a1c', textoSuave: '#5b6655',
    marca: '#2f5d34', marcaOscuro: '#1d3a21',
    fondo: '#fbf8f1', arena: '#f3ecdf', lineas: '#e6dccb', acento: '#e9c46a'
  },
  letras: {
    titulos: '"Fraunces", Georgia, serif',
    texto: '"Outfit", system-ui, sans-serif',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,500;9..144,0,600;9..144,1,500&family=Outfit:wght@400;500;600&display=swap'
  },

  // PORTADA: pon "video" con el link de un .mp4 para que se mueva atrás; si no, usa la imagen
  portada: {
    imagen: 'https://vibe.filesafe.space/1782778390814352848/attachments/f9cffd0b-c571-4f65-88ff-9964febe6724.png',
    video: '',
    titulo: 'Oasis',
    etiqueta: { es: 'Tradición ecuatoriana · Union City, NJ', en: 'Ecuadorian tradition · Union City, NJ' },
    subtitulo: { es: 'Helado con queso, pan recién hecho y café. Dulce, salado y hecho para compartir.', en: 'Ice cream with cheese, fresh bread and coffee. Sweet, savory and made for sharing.' }
  },

  contacto: {
    telefono: '(973) 495-6143',
    whatsapp: '19734956143',
    whatsappPorConfirmar: true,
    mensajeWhatsapp: { es: 'Hola Oasis, quiero hacer un pedido', en: 'Hi Oasis, I’d like to place an order' },
    pedidos: ''                      // link de DoorDash / Uber Eats si tienen
  },

  redes: { instagram: '', tiktok: '', facebook: '' },   // pegar los links reales

  resenas: {
    calificacion: '4.7',
    total: '268',
    titulo: { es: 'Lo que dicen nuestros clientes', en: 'What our guests say' },
    dejarResena: 'https://search.google.com/local/writereview?placeid=ChIJt_AjvmJZwokR6062rCNfLBs',
    verTodas: 'https://www.google.com/maps/place/?q=place_id:ChIJt_AjvmJZwokR6062rCNfLBs',
    destacadas: []                   // ejemplo: [{ texto: { es:'...', en:'...' }, autor: 'María G.' }]
  },

  // LOS 5 DE LA CASA (carrusel que se mueve solo y las tarjetas se voltean)
  favoritos: {
    porConfirmar: true,              // confirmar con el dueño cuáles son sus 5 más vendidos
    etiqueta: { es: 'Los favoritos', en: 'House favorites' },
    titulo: { es: 'Las 5 de la casa', en: 'Our famous five' },
    texto: { es: 'Las copas que más se piden en Oasis. Toca una para ver qué lleva.', en: 'The cups our guests order the most. Tap one to see what’s inside.' },
    productos: [
      { nombre: 'Galaxy Lagoon', precio: '$16.75', color1: '#8fb3e8', color2: '#4f6fb8',
        foto: 'https://vibe.filesafe.space/1782778390814352848/attachments/67774453-b58b-4899-8c01-db9fe34d9053.png',
        corto: { es: '5 sabores', en: '5 flavors' },
        lleva: { es: ['Cinco sabores de helado', 'Crema', 'Queso rallado'], en: ['Five ice cream flavors', 'Cream', 'Grated cheese'] },
        combina: { es: 'un café americano', en: 'an Americano' } },
      { nombre: 'Brownie Delight', precio: '$11.25 · $15.25', color1: '#d9a679', color2: '#7a4a2e',
        foto: 'https://vibe.filesafe.space/1782778390814352848/attachments/f8135c98-41ee-4c1a-9d3e-4d81bc2c32e1.png',
        corto: { es: 'Brownie + 4 sabores', en: 'Brownie + 4 flavors' },
        lleva: { es: ['Brownie de chocolate', 'Cuatro sabores de helado', 'Una fresa', 'Crema y queso rallado', '2 barquillos'], en: ['Fudgy brownie', 'Four ice cream flavors', 'One fresh strawberry', 'Cream and grated cheese', '2 wafers'] },
        combina: { es: 'un latte', en: 'a latte' } },
      { nombre: 'Fruit Fiesta', precio: '$14.75', color1: '#f6a6b2', color2: '#e0566f',
        foto: 'https://vibe.filesafe.space/1782778390814352848/attachments/d08a00ef-b268-44c0-a802-bac2b62b7d4d.png',
        corto: { es: 'Frutas + 2 sabores', en: 'Fruit + 2 flavors' },
        lleva: { es: ['Frutas frescas', 'Dos sabores de helado', 'Crema y queso rallado', '1 barquillo'], en: ['Fresh fruit', 'Two ice cream flavors', 'Cream and grated cheese', '1 wafer'] },
        combina: { es: 'un té de hierba luisa', en: 'a lemon verbena tea' } },
      { nombre: 'Beach Sunset', precio: '$8.75', color1: '#ffd27a', color2: '#f08a4b',
        foto: 'https://vibe.filesafe.space/1782778390814352848/attachments/9dc0df87-7a1d-4137-ba82-53183e04fd3c.png',
        corto: { es: '2 sabores + fresa', en: '2 flavors + strawberry' },
        lleva: { es: ['Dos sabores de helado', 'Sirope de fresa', 'Crema y queso rallado', '1 barquillo'], en: ['Two ice cream flavors', 'Strawberry syrup', 'Cream and grated cheese', '1 wafer'] },
        combina: { es: 'pan de yuca', en: 'pan de yuca' } },
      { nombre: 'Oasis Family', precio: '$35.50', color1: '#a8d5a2', color2: '#3f7d4a',
        foto: 'https://vibe.filesafe.space/1782778390814352848/attachments/cd5053bc-54ec-4874-bab4-9a08ea1292fb.png',
        corto: { es: 'Para compartir', en: 'For sharing' },
        lleva: { es: ['Waffle y crepe', 'Seis sabores de helado', 'Frutas y sirope de chocolate', 'Queso rallado encima'], en: ['A waffle and a crepe', 'Six ice cream flavors', 'Fruit and chocolate syrup', 'Topped with grated cheese'] },
        combina: { es: 'la familia completa', en: 'the whole family' } }
    ]
  },

  // NUESTRA HISTORIA · completar con el dueño (lo que está entre [ ] es para llenar)
  historia: {
    porConfirmar: true,
    etiqueta: { es: 'Nuestra historia', en: 'Our story' },
    titulo: { es: 'Un pedacito de Ecuador en Union City', en: 'A little piece of Ecuador in Union City' },
    foto: '',
    fotoAlt: { es: 'La familia de Oasis', en: 'The Oasis family' },
    fotoPendiente: { es: 'Aquí va una foto del dueño, la familia o el día de la apertura', en: 'A photo of the owner, the family or opening day goes here' },
    parrafos: {
      es: ['Oasis nació de [nombre del dueño], que creció en [ciudad de Ecuador] comiendo helado con queso en la plaza los domingos.',
           'Al llegar a New Jersey en [año] extrañaba ese sabor, y en [año] abrió Oasis en Bergenline Avenue para compartirlo con su nueva comunidad.',
           'Hoy hacemos [cada día / a mano] el helado y el pan, con recetas de [la abuela / la familia].'],
      en: ['Oasis was started by [owner’s name], who grew up in [city in Ecuador] eating ice cream with cheese in the town square on Sundays.',
           'After moving to New Jersey in [year], they missed that taste, and in [year] opened Oasis on Bergenline Avenue to share it with a new community.',
           'Today we make our ice cream and bread [daily / by hand], with [grandma’s / family] recipes.']
    },
    frase: { es: '“Lo dulce y lo salado, como la vida: mejor en familia.”', en: '“Sweet and savory, like life: better with family.”' },
    datos: { es: ['Desde [año]', 'Receta de [ciudad]', 'Union City, NJ'], en: ['Since [year]', 'Recipe from [city]', 'Union City, NJ'] }
  },

  // ¿PRIMERA VEZ? · explica el helado con queso a quien no lo conoce
  primeraVez: {
    etiqueta: { es: '¿Primera vez?', en: 'First time?' },
    titulo: { es: '¿Helado con queso? Confía en nosotros', en: 'Ice cream with cheese? Trust us' },
    texto: { es: 'Es un clásico de la Sierra del Ecuador. Lo dulce del helado y lo salado del queso se equilibran, y cada cucharada sabe distinta.', en: 'It’s a classic from Ecuador’s highlands. Sweet ice cream and savory cheese balance each other, and every spoonful tastes a little different.' },
    pasos: [
      { titulo: { es: 'Escoge tu copa', en: 'Pick your cup' }, texto: { es: 'Cono, copa con fruta, waffle o crepe.', en: 'A cone, a fruit cup, a waffle or a crepe.' } },
      { titulo: { es: 'Escoge tus sabores', en: 'Pick your flavors' }, texto: { es: 'Maracuyá, mora, coco, ron con pasas… hasta 6 en una copa.', en: 'Passion fruit, blackberry, coconut, rum raisin… up to 6 in one cup.' } },
      { titulo: { es: 'Crema y queso encima', en: 'Cream and cheese on top' }, texto: { es: 'El queso rallado es el secreto. Pruébalo con pan de yuca.', en: 'The grated cheese is the secret. Try it with pan de yuca.' } }
    ]
  },

  // DESAYUNO ECUATORIANO (abren 6 AM)
  desayuno: {
    etiqueta: { es: 'Desde las 6 AM', en: 'From 6 AM' },
    titulo: { es: 'Desayuno ecuatoriano', en: 'Ecuadorian breakfast' },
    texto: { es: 'Antes del helado, el pan recién hecho y los platos de casa.', en: 'Before the ice cream: fresh bread and home-style plates.' },
    platos: [
      { nombre: 'Bolón', precio: '$20.00', desc: { es: 'Verde majado con queso y chicharrón, 2 huevos fritos y seco de carne.', en: 'Mashed green plantain with cheese and chicharrón, 2 fried eggs and Ecuadorian beef stew.' } },
      { nombre: { es: 'Morocho con empanadas de viento', en: 'Morocho with empanadas de viento' }, precio: '$10.50', desc: { es: 'Morocho cremoso con leche y canela, con dos empanadas recién fritas.', en: 'Creamy corn and milk drink with cinnamon, with two freshly fried empanadas.' } },
      { nombre: 'Colada morada', precio: '$8.50', desc: { es: 'Bebida de maíz morado con frutas y especias, con dos empanadas de viento.', en: 'Purple corn drink with fruit and spices, with two empanadas de viento.' } },
      { nombre: { es: 'Yogurt con pan de yuca', en: 'Yogurt with pan de yuca' }, precio: '$13.75', desc: { es: 'Yogurt de fresa, chocolate o vainilla con 3 panes de yuca o de queso.', en: 'Strawberry, chocolate or vanilla yogurt with 3 pan de yuca or cheese bread.' } },
      { nombre: { es: 'Chocolate con tostis', en: 'Hot chocolate & tostis' }, precio: '$11.50', desc: { es: 'Chocolate ecuatoriano tradicional con 2 sánduches de jamón y queso.', en: 'Traditional Ecuadorian hot chocolate with 2 toasted ham and cheese sandwiches.' } },
      { nombre: { es: 'Sánduche integral', en: 'Whole wheat sandwich' }, precio: '$16.50', desc: { es: 'Pan integral, aguacate, huevo, queso y tomate, con batido o milkshake.', en: 'Whole wheat bread, avocado, egg, cheese and tomato, with a smoothie or milkshake.' } }
    ],
    panesTitulo: { es: 'Pan ecuatoriano del día', en: 'Today’s Ecuadorian bread' },
    panesSinPrecio: true,
    panes: ['Manitas', 'Pan de cereal', 'Enrollado', 'Bizcochos', 'Empanada integral', 'Reventado', 'Pan de chocolate', 'Ambateño', 'Rosita', 'Roscón de fresa', 'Pan de coco', 'Pan de guayaba', 'Encasillado', 'Empanada', 'Mini empanada', 'Nacional Oasis', 'Baguette']
  },

  // MENÚ COMPLETO (precios de su web actual)
  menu: {
    etiqueta: { es: 'Menú', en: 'Menu' },
    titulo: { es: 'Todo lo que hacemos', en: 'Everything we make' },
    nota: { es: 'Se agrega 10% de propina a todos los pedidos.', en: 'A 10% gratuity is added to all orders.' },
    sabores: [
      { es: 'Vainilla', en: 'Vanilla' }, { es: 'Coco', en: 'Coconut' }, 'Mango', { es: 'Fresa', en: 'Strawberry' },
      'Chocolate', { es: 'Café', en: 'Coffee' }, 'Cookies & Cream', { es: 'Caramelo', en: 'Caramel' },
      { es: 'Ron con pasas', en: 'Rum raisin' }, { es: 'Mora', en: 'Blackberry' }, { es: 'Maracuyá', en: 'Passion fruit' }, { es: 'Chicle', en: 'Bubblegum' }
    ],
    categorias: [
      { nombre: { es: 'Copas', en: 'Cups' }, items: [
        { nombre: 'Super Tropical Cup', precio: '$15.75', desc: { es: 'Doble durazno y fresa, 2 sabores, crema, queso, 2 barquillos.', en: 'Double peach and strawberry, 2 flavors, cream, cheese, 2 wafers.' } },
        { nombre: 'Galaxy Lagoon', precio: '$16.75', desc: { es: '5 sabores, crema y queso.', en: '5 flavors, cream and cheese.' } },
        { nombre: 'Fruit Fiesta', precio: '$14.75', desc: { es: 'Frutas frescas, 2 sabores, crema, queso, 1 barquillo.', en: 'Fresh fruit, 2 flavors, cream, cheese, 1 wafer.' } },
        { nombre: 'Brownie Delight', precio: { es: 'Normal $11.25 · Super $15.25', en: 'Reg. $11.25 · Super $15.25' }, desc: { es: 'Brownie, 4 sabores, 1 fresa, crema, queso, 2 barquillos.', en: 'Brownie, 4 flavors, 1 strawberry, cream, cheese, 2 wafers.' } },
        { nombre: 'Tropical Cup', precio: '$10.50', desc: { es: 'Trozos de durazno y fresa, 2 sabores, crema, queso, 1 barquillo.', en: 'Peach and strawberry chunks, 2 flavors, cream, cheese, 1 wafer.' } },
        { nombre: 'Oasis Tropical Cup', precio: '$10.25', desc: { es: '2 sabores, crema, queso, 1 barquillo.', en: '2 flavors, cream, cheese, 1 wafer.' } },
        { nombre: 'Peachy Cup', precio: { es: 'Normal $13.25 · Pequeña $10.25', en: 'Reg. $13.25 · Small $10.25' }, desc: { es: 'Trozos de durazno, 1 sabor, crema y queso.', en: 'Peach chunks, 1 flavor, cream and cheese.' } },
        { nombre: 'Strawberry Wave Cup', precio: { es: 'Normal $13.25 · Pequeña $10.25', en: 'Reg. $13.25 · Small $10.25' }, desc: { es: 'Fresas en rodajas, 1 sabor, crema y queso.', en: 'Sliced strawberries, 1 flavor, cream and cheese.' } },
        { nombre: 'Dual Cup', precio: '$8.75', desc: { es: '2 sabores, 1 barquillo.', en: '2 flavors, 1 wafer.' } },
        { nombre: 'Red Paradise', precio: '$7.75', desc: { es: 'Fresas frescas con crema.', en: 'Fresh strawberries with cream.' } },
        { nombre: { es: 'Ensalada de frutas', en: 'Fruit salad' }, precio: '$11.50', desc: { es: 'Fresa, sandía, piña, papaya y guineo, con crema y queso.', en: 'Strawberry, watermelon, pineapple, papaya and banana, with cream and cheese.' } }
      ]},
      { nombre: { es: 'Conos y botes', en: 'Cones & boats' }, items: [
        { nombre: 'Banana Island Boat', precio: '$15.25', desc: { es: '3 sabores, guineo, crema, queso, 1 barquillo.', en: '3 flavors, banana, cream, cheese, 1 wafer.' } },
        { nombre: 'Beach Sunset', precio: '$8.75', desc: { es: '2 sabores, sirope de fresa, crema, queso, 1 barquillo.', en: '2 flavors, strawberry syrup, cream, cheese, 1 wafer.' } },
        { nombre: 'Mini Beach Sunset', precio: '$6.75', desc: { es: '2 sabores, sirope de fresa, 1 barquillo.', en: '2 flavors, strawberry syrup, 1 wafer.' } },
        { nombre: 'Oasis Cone', precio: '$6.75', desc: { es: '1 sabor con doble crema y doble queso.', en: '1 flavor with double cream and double cheese.' } },
        { nombre: 'Kids Paradise', precio: { es: '1 sabor $4.50 · 2 sabores $5.50', en: '1 flavor $4.50 · 2 flavors $5.50' }, desc: { es: 'Uno o dos sabores.', en: 'One or two flavors.' } },
        { nombre: 'Cono estudiantil', precio: '$2.50', desc: { es: '1 sabor.', en: '1 flavor.' } }
      ]},
      { nombre: { es: 'Waffles y crepes', en: 'Waffles & crepes' }, items: [
        { nombre: 'Oasis Family', precio: '$35.50', desc: { es: 'Waffle y crepe con sirope de chocolate, frutas, 6 sabores y queso.', en: 'A waffle and a crepe with chocolate syrup, fruit, 6 flavors and cheese.' } },
        { nombre: 'Paradise Waffle', precio: '$17.75', desc: { es: 'Waffle dorado con sirope de chocolate, helado y queso.', en: 'Golden waffle with chocolate syrup, ice cream and cheese.' } },
        { nombre: 'Paradise Crepe', precio: { es: '$16.75 · solo crepe $11.25', en: '$16.75 · crepe only $11.25' }, desc: { es: 'Crepe con Nutella, fresas, guineo, queso y 1 sabor aparte.', en: 'Nutella crepe with strawberries, banana, cheese and 1 flavor on the side.' } }
      ]},
      { nombre: { es: 'Platos ecuatorianos', en: 'Ecuadorian plates' }, items: [
        { nombre: 'Bolón', precio: '$20.00', desc: { es: 'Verde majado con queso y chicharrón, 2 huevos y seco de carne.', en: 'Mashed plantain with cheese and chicharrón, 2 eggs and beef stew.' } },
        { nombre: 'Colada morada', precio: '$8.50', desc: { es: 'Con dos empanadas de viento.', en: 'With two empanadas de viento.' } },
        { nombre: { es: 'Morocho con empanadas', en: 'Morocho with empanadas' }, precio: '$10.50', desc: { es: 'Morocho caliente con dos empanadas de viento.', en: 'Warm morocho with two empanadas de viento.' } },
        { nombre: { es: 'Yogurt con pan de yuca', en: 'Yogurt with pan de yuca' }, precio: '$13.75', desc: { es: 'Con 3 panes de yuca o de queso.', en: 'With 3 pan de yuca or cheese bread.' } },
        { nombre: { es: 'Chocolate con tostis', en: 'Hot chocolate & tostis' }, precio: '$11.50', desc: { es: 'Con 2 sánduches de jamón y queso.', en: 'With 2 toasted ham and cheese sandwiches.' } },
        { nombre: { es: 'Sánduche integral', en: 'Whole wheat sandwich' }, precio: '$16.50', desc: { es: 'Con batido o milkshake.', en: 'With a smoothie or milkshake.' } }
      ]},
      { nombre: { es: 'Café y batidos', en: 'Coffee & shakes' }, items: [
        { nombre: { es: 'Café', en: 'Regular coffee' }, precio: { es: 'Peq. $2.00 · Gde. $2.50', en: 'S $2.00 · L $2.50' } },
        { nombre: 'Americano', precio: { es: 'Peq. $2.50 · Gde. $3.00', en: 'S $2.50 · L $3.00' } },
        { nombre: 'Latte', precio: { es: 'Peq. $2.50 · Gde. $3.50', en: 'S $2.50 · L $3.50' } },
        { nombre: 'Cappuccino', precio: { es: 'Peq. $3.85 · Gde. $4.50', en: 'S $3.85 · L $4.50' } },
        { nombre: { es: 'Café helado', en: 'Iced coffee' }, precio: { es: 'Peq. $3.50 · Gde. $4.75', en: 'S $3.50 · L $4.75' } },
        { nombre: { es: 'Café helado con espresso', en: 'Iced coffee with espresso' }, precio: { es: 'Peq. $5.50 · Gde. $6.25', en: 'S $5.50 · L $6.25' } },
        { nombre: 'Espresso', precio: '$3.50' },
        { nombre: { es: 'Espresso con leche', en: 'Espresso with milk' }, precio: '$4.00' },
        { nombre: 'Milkshake', precio: '$7.75' },
        { nombre: 'Caramel Frappe', precio: '$7.75' },
        { nombre: { es: 'Té e infusiones', en: 'Teas' }, precio: { es: 'Peq. $1.40 · Gde. $1.85', en: 'S $1.40 · L $1.85' }, desc: { es: 'Limón, cedrón, horchata, manzanilla, jazmín, hierba luisa y más.', en: 'Lemon, cedrón, horchata, chamomile, jasmine, lemon verbena and more.' } }
      ]}
    ]
  },

  visitanosTitulo: { es: 'Ven a vernos', en: 'Come see us' },
  locales: [
    { nombre: 'Bergenline Ave', ciudad: 'Union City, NJ', direccion: '3413 Bergenline Ave, Union City, NJ 07087',
      horario: { lun:['06:00','21:00'], mar:['06:00','21:00'], mie:['06:00','21:00'], jue:['06:00','21:00'], vie:['06:00','21:00'], sab:['06:00','21:00'], dom:['06:00','21:00'] } },
    { nombre: 'Ferry Street · Newark', pronto: true, porConfirmar: true,
      nota: { es: 'Estamos preparando algo especial en el Ironbound. Fecha de apertura muy pronto.', en: 'We’re preparing something special in the Ironbound. Opening date coming soon.' } }
  ]
};
