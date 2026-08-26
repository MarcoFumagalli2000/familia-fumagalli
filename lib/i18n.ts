export type Locale = 'es'

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
    rights: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: { home: 'Inicio', wines: 'Nuestros Vinos', media: 'Sobre nosotros', contact: 'Contacto' },
    cta: {
      visit: 'Planificar una visita',
      explore: 'Explorar variedades',
      discover: 'Descubrir nuestros vinos',
      send: 'Enviar solicitud',
    },
    home: {
      heroKicker: 'Familia Fumagalli',
      heroTitle: 'Transmitiendo nuestra historia, desde Carate Brianza a Cerro Leones.',
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
      tagline: 'Transmitiendo nuestra historia, desde Carate Brianza a Cerro Leones.',
      navTitle: 'Navegación',
      subscribeTitle: 'Recibe nuestra información',
      subscribeBody: 'Déjanos tus datos y te enviaremos un correo con información y horarios de la bodega.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      subscribe: 'Suscribirme',
      subscribed: '¡Gracias por suscribirte!',
      rights: 'Todos los derechos reservados.',
    },
  },
}
