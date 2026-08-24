export type Locale = 'es' | 'en' | 'it'

export const locales: { code: Locale; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
]

type Dictionary = {
  nav: { home: string; wines: string; media: string; contact: string }
  cta: { visit: string; explore: string; discover: string; send: string;}
  home: {
    heroKicker: string
    heroTitle: string
    quote: string
    quoteAuthor: string
    sectionTimeTitle: string
    sectionTimeBody: string
    sectionEstateTitle: string
    sectionEstateBody: string
    experiencesTitle: string
    experiencesBody: string
    exp: { name: string; desc: string }[]
  }
  wines: {
    kicker: string
    title: string
    intro: string
    terroirTitle: string
    terroirBody: string
    list: { name: string; year: string; desc: string; notes: string }[]
    tastingTitle: string
    tastingBody: string
  }
  media: {
    kicker: string
    title: string
    intro: string
    articles: { tag: string; title: string; desc: string; date: string }[]
    galleryTitle: string
  }
  contact: {
    kicker: string
    title: string
    intro: string
    formName: string
    formLastName: string
    formEmail: string
    formDate: string
    formGuests: string
    formExperience: string
    formMessage: string
    success: string
    hoursTitle: string
    hours: { day: string; time: string }[]
    addressTitle: string
    address: string
    phoneLabel: string
  }
  footer: {
    tagline: string
    navTitle: string
    subscribeTitle: string
    subscribeBody: string
    firstName: string
    lastName: string
    email: string
    subscribe: string
    subscribed: string
    langTitle: string
    rights: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: { home: 'Inicio', wines: 'Nuestros Vinos', media: 'Sobre nosotros', contact: 'Contacto' },
    cta: {
      visit: 'Planificar una visita',
      explore: 'Explorar añadas',
      discover: 'Descubrir nuestros vinos',
      send: 'Enviar solicitud',
    },
    home: {
      heroKicker: 'Familia Fumagalli',
      heroTitle: 'Transmitiendo nuestra historia, desde Catena Brianza a Cerro Leones.',
            quote: 'El vino es la suma de todos los terroirs...',
      quoteAuthor: 'Michel Rolland',
      sectionTimeTitle: 'Nuestros Vinos',
      sectionTimeBody:
        'El vino es la suma de todos los terroirs, la aridez de Mendoza, la altura de Salta, y el clima fresco de Tandil. Cada uva lleva la huella de su tierra, y al encontrarse en nuestros vinos, dan lugar a una expresión special, bien Argentina.',
      sectionEstateTitle: 'Nuestra Familia',
      sectionEstateBody:
        'Chapeaurouge, Cerro Leones, Tandil. Nuestra bodega se encuentra en el corazon de la Tandilia, entre campos y sierras, un paisaje similar a donde nuestra historia comienzaba..',
      experiencesTitle: 'Tres experiencias de degustación',
      experiencesBody:
        'Lo que viviran cuando visiten nuestra bodega,',
      exp: [
        { name: 'La vid', desc: 'Donde hablaremos sobre nuestra eleccion de uvas y las propiedades del terroir tandilense.' },
        { name: 'Sala de barricas', desc: 'Un recorrido íntimo y sensorial a nuestra bodega subterranea.' },
        { name: 'Cata en la terraza', desc: 'Degustación al aire libre con vistas a las hileras de viñas al atardecer.' },
      ],
    },
    wines: {
      kicker: 'Nuestros Vinos',
      title: 'El arte de una sola gran obra',
      intro:
        'Elaboramos un número limitado de vinos, cada uno concebido como la máxima expresión de su añada y de nuestro terroir.',
      terroirTitle: 'Nuestro terroir',
      terroirBody:
        'Suelos volcánicos y aluviales, brisas frescas de la tarde y largas horas de sol definen el carácter de nuestras uvas. Cada parcela se vendimia a mano en el momento preciso de madurez.',
      list: [
        { name: 'Gran Reserva', year: '2019', desc: 'Nuestro vino insignia, un ensamblaje de Cabernet Sauvignon y Merlot.', notes: 'Cassis, cedro, tabaco y un final prolongado y sedoso.' },
        { name: 'Sombra', year: '2020', desc: 'Un tinto de expresión pura, elegante y contemporáneo.', notes: 'Frutos rojos, violeta y especias finas.' },
        { name: 'Blanco de Altura', year: '2022', desc: 'Chardonnay de viñedos de altura, criado en barrica.', notes: 'Cítricos, flor blanca y una mineralidad vibrante.' },
      ],
      tastingTitle: 'Notas de cata',
      tastingBody:
        'Cada botella es el resultado de un año de trabajo paciente en el viñedo y la bodega. Te invitamos a descubrir su historia copa a copa.',
    },
    media: {
      kicker: 'Contenido',
      title: 'Historias desde la finca',
      intro: 'Noticias, prensa y momentos capturados a lo largo del año en Viña Solara.',
      articles: [
        { tag: 'Vendimia', title: 'Crónica de la cosecha 2025', desc: 'Un año excepcional marcado por un clima equilibrado y uvas de gran concentración.', date: 'Octubre 2025' },
        { tag: 'Premios', title: '95 puntos para nuestra Gran Reserva', desc: 'La crítica internacional reconoce el trabajo de nuestro equipo enológico.', date: 'Julio 2025' },
        { tag: 'Eventos', title: 'Cena maridaje bajo las estrellas', desc: 'Una velada única en la terraza del viñedo con cocina de temporada.', date: 'Mayo 2025' },
      ],
      galleryTitle: 'Galería',
    },
    contact: {
      kicker: 'Visítanos',
      title: 'Planifica tu visita',
      intro:
        'Reserva una experiencia en la finca. Completa el formulario y nuestro equipo confirmará tu visita por correo.',
      formName: 'Nombre',
      formLastName: 'Apellido',
      formEmail: 'Correo electrónico',
      formDate: 'Fecha preferida',
      formGuests: 'Número de invitados',
      formExperience: 'Experiencia',
      formMessage: 'Mensaje (opcional)',
      success: '¡Gracias! Hemos recibido tu solicitud y te responderemos muy pronto.',
      hoursTitle: 'Horarios',
      hours: [
        { day: 'Lunes – Viernes', time: '10:00 – 18:00' },
        { day: 'Sábado', time: '10:00 – 20:00' },
        { day: 'Domingo', time: '11:00 – 16:00' },
      ],
      addressTitle: 'Dónde estamos',
      address: 'Camino de los Viñedos, km 12 · Valle del Sol',
      phoneLabel: 'Teléfono',
    },
    footer: {
      tagline: 'Dos familias, una visión. Vinos que trascienden generaciones.',
      navTitle: 'Navegación',
      subscribeTitle: 'Recibe nuestra información',
      subscribeBody: 'Déjanos tus datos y te enviaremos un correo con información y horarios de la bodega.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      subscribe: 'Suscribirme',
      subscribed: '¡Gracias por suscribirte!',
      langTitle: 'Idioma',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: { home: 'Home', wines: 'Our Wines', media: 'Media', contact: 'Visit Us' },
    cta: {
      visit: 'Plan a visit',
      explore: 'Explore vintages',
      discover: 'Discover our wines',
      send: 'Send request',
    },
    home: {
      heroKicker: 'Fumagalli Family',
      heroTitle: 'Two Families. One Vision.',
      quote: 'Wine is born, then it lives. But it never dies — in man, it lives on.',
      quoteAuthor: 'Founders of Familia Fumagalli',
      sectionTimeTitle: 'An expression of time and place',
      sectionTimeBody:
        'The essence of time is expressed in every vintage of Viña Solara through its character. Place, often defined as terroir, represents the geography, the climate and the essential human element captured in the wine’s balance between power and finesse, structure and texture.',
      sectionEstateTitle: 'Built to honor a vision',
      sectionEstateBody:
        'Rising gracefully from the vineyards, the winery stands in subtle celebration of the land and the open space surrounding the estate. It remains a living testament to our founders’ vision of a singular wine that transcends generations.',
      experiencesTitle: 'Three tasting experiences',
      experiencesBody:
        'Thoughtfully curated to celebrate our heritage, we offer three unique experiences on the estate.',
      exp: [
        { name: 'The Founder’s Tasting', desc: 'An intimate journey through our flagship vintages guided by our winemaker.' },
        { name: 'Vineyard Terrace', desc: 'An open-air tasting overlooking the vine rows at sunset.' },
        { name: 'Barrel Room', desc: 'A sensory experience in the low light of our underground cellar.' },
      ],
    },
    wines: {
      kicker: 'Our Wines',
      title: 'The art of a single great work',
      intro:
        'We craft a limited number of wines, each conceived as the ultimate expression of its vintage and our terroir.',
      terroirTitle: 'Our terroir',
      terroirBody:
        'Volcanic and alluvial soils, cool afternoon breezes and long hours of sun define the character of our grapes. Every parcel is hand-harvested at the precise moment of ripeness.',
      list: [
        { name: 'Gran Reserva', year: '2019', desc: 'Our flagship wine, a blend of Cabernet Sauvignon and Merlot.', notes: 'Cassis, cedar, tobacco and a long, silky finish.' },
        { name: 'Sombra', year: '2020', desc: 'A pure-expression red, elegant and contemporary.', notes: 'Red fruit, violet and fine spices.' },
        { name: 'Blanco de Altura', year: '2022', desc: 'Chardonnay from high-altitude vineyards, barrel-aged.', notes: 'Citrus, white blossom and a vibrant minerality.' },
      ],
      tastingTitle: 'Tasting notes',
      tastingBody:
        'Every bottle is the result of a year of patient work in the vineyard and the cellar. We invite you to discover its story glass by glass.',
    },
    media: {
      kicker: 'Media',
      title: 'Stories from the estate',
      intro: 'News, press and moments captured throughout the year at Viña Solara.',
      articles: [
        { tag: 'Harvest', title: 'Chronicle of the 2025 harvest', desc: 'An exceptional year marked by balanced weather and highly concentrated grapes.', date: 'October 2025' },
        { tag: 'Awards', title: '95 points for our Gran Reserva', desc: 'International critics recognize the work of our winemaking team.', date: 'July 2025' },
        { tag: 'Events', title: 'Pairing dinner under the stars', desc: 'A unique evening on the vineyard terrace with seasonal cuisine.', date: 'May 2025' },
      ],
      galleryTitle: 'Gallery',
    },
    contact: {
      kicker: 'Visit Us',
      title: 'Plan your visit',
      intro:
        'Book an experience on the estate. Fill out the form and our team will confirm your visit by email.',
      formName: 'First name',
      formLastName: 'Last name',
      formEmail: 'Email',
      formDate: 'Preferred date',
      formGuests: 'Number of guests',
      formExperience: 'Experience',
      formMessage: 'Message (optional)',
      success: 'Thank you! We have received your request and will reply very soon.',
      hoursTitle: 'Opening hours',
      hours: [
        { day: 'Monday – Friday', time: '10:00 – 18:00' },
        { day: 'Saturday', time: '10:00 – 20:00' },
        { day: 'Sunday', time: '11:00 – 16:00' },
      ],
      addressTitle: 'Where we are',
      address: 'Camino de los Viñedos, km 12 · Valle del Sol',
      phoneLabel: 'Phone',
    },
    footer: {
      tagline: 'Two families, one vision. Wines that transcend generations.',
      navTitle: 'Navigation',
      subscribeTitle: 'Receive our information',
      subscribeBody: 'Leave us your details and we will send you an email with information and opening hours.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subscribe: 'Subscribe',
      subscribed: 'Thank you for subscribing!',
      langTitle: 'Language',
      rights: 'All rights reserved.',
    },
  },
  it: {
    nav: { home: 'Home', wines: 'I Nostri Vini', media: 'Contenuti', contact: 'Visitaci' },
    cta: {
      visit: 'Pianifica una visita',
      explore: 'Esplora le annate',
      discover: 'Scopri i nostri vini',
      send: 'Invia richiesta',
    },
    home: {
      heroKicker: 'Famiglia Fumagalli',
      heroTitle: 'Due famiglie. Una visione.',
      quote: 'Il vino nasce, poi vive. Ma non muore mai: nell’uomo continua a vivere.',
      quoteAuthor: 'Fondatori di Familia Fumagalli',
      sectionTimeTitle: 'Un’espressione del tempo e del luogo',
      sectionTimeBody:
        'L’essenza del tempo si esprime in ogni annata di Viña Solara attraverso il suo carattere. Il luogo, spesso definito terroir, rappresenta la geografia, il clima e l’elemento umano essenziale, catturato nell’equilibrio del vino tra potenza ed eleganza, struttura e texture.',
      sectionEstateTitle: 'Costruita per onorare una visione',
      sectionEstateBody:
        'Elevandosi con grazia dai vigneti, la cantina celebra con discrezione la terra e lo spazio aperto che circonda la tenuta. Rimane una testimonianza viva della visione dei nostri fondatori: un vino singolare che trascende le generazioni.',
      experiencesTitle: 'Tre esperienze di degustazione',
      experiencesBody:
        'Pensate con cura per celebrare il nostro patrimonio, offriamo tre esperienze uniche nella tenuta.',
      exp: [
        { name: 'La Degustazione del Fondatore', desc: 'Un viaggio intimo tra le annate emblematiche guidato dal nostro enologo.' },
        { name: 'Terrazza del Vigneto', desc: 'Una degustazione all’aperto con vista sui filari al tramonto.' },
        { name: 'Sala delle Barrique', desc: 'Un’esperienza sensoriale nella penombra della nostra cantina sotterranea.' },
      ],
    },
    wines: {
      kicker: 'I Nostri Vini',
      title: 'L’arte di una sola grande opera',
      intro:
        'Produciamo un numero limitato di vini, ognuno concepito come la massima espressione della sua annata e del nostro terroir.',
      terroirTitle: 'Il nostro terroir',
      terroirBody:
        'Suoli vulcanici e alluvionali, brezze fresche del pomeriggio e lunghe ore di sole definiscono il carattere delle nostre uve. Ogni parcella è vendemmiata a mano nel momento preciso di maturità.',
      list: [
        { name: 'Gran Reserva', year: '2019', desc: 'Il nostro vino di punta, un assemblaggio di Cabernet Sauvignon e Merlot.', notes: 'Cassis, cedro, tabacco e un finale lungo e setoso.' },
        { name: 'Sombra', year: '2020', desc: 'Un rosso di pura espressione, elegante e contemporaneo.', notes: 'Frutti rossi, viola e spezie fini.' },
        { name: 'Blanco de Altura', year: '2022', desc: 'Chardonnay da vigneti d’altura, affinato in barrique.', notes: 'Agrumi, fiori bianchi e una mineralità vibrante.' },
      ],
      tastingTitle: 'Note di degustazione',
      tastingBody:
        'Ogni bottiglia è il risultato di un anno di lavoro paziente in vigna e in cantina. Ti invitiamo a scoprirne la storia calice dopo calice.',
    },
    media: {
      kicker: 'Contenuti',
      title: 'Storie dalla tenuta',
      intro: 'Notizie, stampa e momenti catturati durante l’anno a Viña Solara.',
      articles: [
        { tag: 'Vendemmia', title: 'Cronaca della vendemmia 2025', desc: 'Un’annata eccezionale segnata da un clima equilibrato e uve molto concentrate.', date: 'Ottobre 2025' },
        { tag: 'Premi', title: '95 punti per la nostra Gran Reserva', desc: 'La critica internazionale riconosce il lavoro del nostro team enologico.', date: 'Luglio 2025' },
        { tag: 'Eventi', title: 'Cena in abbinamento sotto le stelle', desc: 'Una serata unica sulla terrazza del vigneto con cucina di stagione.', date: 'Maggio 2025' },
      ],
      galleryTitle: 'Galleria',
    },
    contact: {
      kicker: 'Visitaci',
      title: 'Pianifica la tua visita',
      intro:
        'Prenota un’esperienza nella tenuta. Compila il modulo e il nostro team confermerà la tua visita via email.',
      formName: 'Nome',
      formLastName: 'Cognome',
      formEmail: 'Email',
      formDate: 'Data preferita',
      formGuests: 'Numero di ospiti',
      formExperience: 'Esperienza',
      formMessage: 'Messaggio (facoltativo)',
      success: 'Grazie! Abbiamo ricevuto la tua richiesta e ti risponderemo molto presto.',
      hoursTitle: 'Orari',
      hours: [
        { day: 'Lunedì – Venerdì', time: '10:00 – 18:00' },
        { day: 'Sabato', time: '10:00 – 20:00' },
        { day: 'Domenica', time: '11:00 – 16:00' },
      ],
      addressTitle: 'Dove siamo',
      address: 'Camino de los Viñedos, km 12 · Valle del Sol',
      phoneLabel: 'Telefono',
    },
    footer: {
      tagline: 'Due famiglie, una visione. Vini che trascendono le generazioni.',
      navTitle: 'Navigazione',
      subscribeTitle: 'Ricevi le nostre informazioni',
      subscribeBody: 'Lasciaci i tuoi dati e ti invieremo un’email con informazioni e orari della cantina.',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      subscribe: 'Iscriviti',
      subscribed: 'Grazie per esserti iscritto!',
      langTitle: 'Lingua',
      rights: 'Tutti i diritti riservati.',
    },
  },
}
