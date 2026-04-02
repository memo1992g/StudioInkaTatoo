export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

type NavLink = {
  href: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  image: string;
};

type Faq = {
  question: string;
  answer: string;
};

type SiteContent = {
  localeLabel: string;
  nav: NavLink[];
  mobileMenuLabel: string;
  hero: {
    kicker: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
  };
  services: {
    kicker: string;
    title: string;
    items: Service[];
  };
  works: {
    kicker: string;
    title: string;
  };
  testimonials: {
    kicker: string;
    title: string;
    items: string[];
  };
  values: {
    kicker: string;
    title: string;
    body: string;
    metrics: string[];
    imageAlt: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: Faq[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    addressLabel: string;
    address: string;
    whatsappLabel: string;
    instagramLabel: string;
  };
  form: {
    name: string;
    phone: string;
    service: string;
    message: string;
    servicePlaceholder: string;
    submit: string;
    whatsappIntro: string;
    emptyValue: string;
    services: string[];
  };
  poweredBy: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    localeLabel: "ES",
    nav: [
      { href: "#nosotros", label: "Nosotros" },
      { href: "#servicios", label: "Servicios" },
      { href: "#trabajos", label: "Trabajos" },
      { href: "#faq", label: "FAQ" },
      { href: "#contacto", label: "Contacto" },
    ],
    mobileMenuLabel: "Abrir menú",
    hero: {
      kicker: "Alex Melendez Professional Tattoo",
      title: "Alex Melendez Professional Tattoo",
      copy:
        "Tatuajes y piercings en Santa Tecla, El Salvador. Creamos piezas personalizadas con identidad, técnica y un proceso profesional de principio a fin.",
      primaryCta: "Agenda tu cita",
      secondaryCta: "Ver trabajos",
      scroll: "Desliza",
    },
    about: {
      kicker: "Nosotros",
      title: "Tatuajes en El Salvador con identidad y precisión",
      body: [
        "En Alex Melendez Professional Tattoo desarrollamos tatuajes personalizados en El Salvador para personas que buscan una pieza con significado, presencia y ejecución de alto nivel.",
        "Desde Santa Tecla acompañamos cada proyecto con una valoración clara, diseño cuidado, protocolo profesional y seguimiento real para que tu experiencia sea tan sólida como el resultado final.",
      ],
    },
    services: {
      kicker: "Servicios",
      title: "Lo que hacemos",
      items: [
        {
          title: "Tatuajes",
          description:
            "Diseños personalizados, composición cuidada y ejecución orientada a convertir la piel en una pieza con historia.",
          image: "/media/service-tattoo-machine.png",
        },
        {
          title: "Piercings",
          description:
            "Perforaciones con protocolo higiénico riguroso, acompañamiento claro y un enfoque profesional desde la cita inicial.",
          image: "/media/service-piercing.png",
        },
        {
          title: "Aftercare y supply",
          description:
            "Productos seleccionados y acompañamiento para extender la experiencia del estudio con el mismo estándar de detalle y confianza.",
          image: "/media/service-glue.png",
        },
      ],
    },
    works: {
      kicker: "Trabajos",
      title: "Nuestro Portafolio",
    },
    testimonials: {
      kicker: "Clientes",
      title: "Experiencias que dejan huella",
      items: [
        "Excelente atención, profesionalismo y un resultado impecable desde la primera sesión.",
        "El estudio se siente premium, serio y muy bien cuidado en cada detalle.",
        "Desde la valoración hasta el seguimiento, todo el proceso fue claro y confiable.",
      ],
    },
    values: {
      kicker: "Valores",
      title: "Excelencia, cuidado y autenticidad",
      body:
        "Cada decisión, cada proceso y cada pieza se trabajan con dedicación, cuidado y autenticidad para construir una experiencia profesional y humana en cada visita.",
      metrics: ["Arte", "Seguridad", "Técnica", "Seguimiento"],
      imageAlt: "Interior del estudio de Alex Melendez Professional Tattoo",
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cómo puedo agendar una cita para tatuaje?",
          answer:
            "Puedes escribirnos por WhatsApp o completar el formulario para revisar tu idea, referencias, tamaño y disponibilidad.",
        },
        {
          question: "¿Atienden clientes de todo El Salvador?",
          answer:
            "Sí. Recibimos clientes de Santa Tecla, San Salvador y otras zonas del país. Te orientamos antes de tu cita para que llegues con todo claro.",
        },
        {
          question: "¿Qué debo llevar a mi valoración?",
          answer:
            "Tamaño aproximado, zona del cuerpo, referencias visuales y una descripción breve del concepto que deseas desarrollar.",
        },
        {
          question: "¿Qué métodos de pago manejan?",
          answer:
            "Trabajamos con efectivo, transferencias y otras opciones que el estudio te confirma al momento de reservar.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Agenda tu cita",
      body:
        "Escríbenos para cotizar tu idea, recibir una valoración y reservar tu espacio dentro del estudio.",
      addressLabel: "Dirección",
      address:
        "Calle El Pedregal #10, Jardines de la Hacienda, Santa Tecla, Nueva San Salvador, CP 1501, 1502",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
    },
    form: {
      name: "Nombre",
      phone: "Teléfono",
      service: "Servicio",
      message: "Mensaje",
      servicePlaceholder: "Selecciona un servicio",
      submit: "Enviar por WhatsApp",
      whatsappIntro:
        "Hola, quiero agendar una cita en Alex Melendez Professional Tattoo.",
      emptyValue: "No especificado",
      services: ["Tatuaje", "Piercing", "Valoración"],
    },
    poweredBy: "Esta página está potenciada por",
    seo: {
      title:
        "Estudio de tatuajes en Santa Tecla, El Salvador | Alex Melendez Inka",
      description:
        "Alex Melendez Inka: estudio profesional de tatuajes y piercings en Santa Tecla, El Salvador. Atención para clientes locales y turistas. Reserva por WhatsApp.",
      keywords: [
        "tatuajes en el salvador",
        "tatuador en santa tecla",
        "estudio de tatuajes en santa tecla",
        "hacerme un tatuaje en el salvador",
        "quiero tatuarme en el salvador",
        "tatuajes personalizados el salvador",
        "piercings en santa tecla",
        "tatuajes para turistas en el salvador",
        "agenda tatuaje el salvador",
        "alex melendez inka",
      ],
    },
  },
  en: {
    localeLabel: "EN",
    nav: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#work", label: "Work" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    mobileMenuLabel: "Open menu",
    hero: {
      kicker: "Alex Melendez Professional Tattoo",
      title: "Alex Melendez Professional Tattoo",
      copy:
        "Tattoo and piercing studio in Santa Tecla, El Salvador. We create custom pieces with identity, technical precision, and a professional process from start to finish.",
      primaryCta: "Book your appointment",
      secondaryCta: "View portfolio",
      scroll: "Scroll",
    },
    about: {
      kicker: "About",
      title: "Tattoo artist in El Salvador with identity and precision",
      body: [
        "At Alex Melendez Professional Tattoo, we create custom tattoos in El Salvador for clients looking for meaningful work, strong composition, and high-level execution.",
        "From Santa Tecla, we guide every project with clear consultation, thoughtful design, professional hygiene standards, and real follow-up so the experience matches the final piece.",
      ],
    },
    services: {
      kicker: "Services",
      title: "What we do",
      items: [
        {
          title: "Tattoos",
          description:
            "Custom designs, careful composition, and execution focused on turning skin into a piece with story and presence.",
          image: "/media/service-tattoo-machine.png",
        },
        {
          title: "Piercings",
          description:
            "Piercings with strict hygiene protocols, clear guidance, and a professional approach from the first consultation.",
          image: "/media/service-piercing.png",
        },
        {
          title: "Aftercare and supply",
          description:
            "Selected products and guidance to extend the studio experience with the same level of detail and trust.",
          image: "/media/service-glue.png",
        },
      ],
    },
    works: {
      kicker: "Work",
      title: "Our Portfolio",
    },
    testimonials: {
      kicker: "Clients",
      title: "Experiences that leave a mark",
      items: [
        "Excellent attention, professionalism, and flawless results from the very first session.",
        "The studio feels premium, serious, and carefully designed in every detail.",
        "From consultation to follow-up, the whole process felt clear and trustworthy.",
      ],
    },
    values: {
      kicker: "Values",
      title: "Excellence, care, and authenticity",
      body:
        "Every decision, every process, and every piece is handled with dedication, care, and authenticity to build a professional and human experience in every visit.",
      metrics: ["Art", "Safety", "Technique", "Follow-up"],
      imageAlt: "Inside Alex Melendez Professional Tattoo studio",
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How can I book a tattoo appointment?",
          answer:
            "You can message us on WhatsApp or use the form to send your idea, references, size, and preferred dates.",
        },
        {
          question: "Do you work with clients visiting El Salvador?",
          answer:
            "Yes. We work with local and international clients and help you prepare everything before your appointment in Santa Tecla.",
        },
        {
          question: "What should I bring to my consultation?",
          answer:
            "Approximate size, body placement, visual references, and a short description of the concept you want to develop.",
        },
        {
          question: "Which payment methods do you accept?",
          answer:
            "We work with cash, bank transfers, and other options confirmed by the studio when booking.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Book your appointment",
      body:
        "Message us to get a quote, receive a consultation, and reserve your spot at the studio.",
      addressLabel: "Address",
      address:
        "Calle El Pedregal #10, Jardines de la Hacienda, Santa Tecla, Nueva San Salvador, CP 1501, 1502",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
    },
    form: {
      name: "Name",
      phone: "Phone",
      service: "Service",
      message: "Message",
      servicePlaceholder: "Choose a service",
      submit: "Send through WhatsApp",
      whatsappIntro:
        "Hi, I would like to book an appointment at Alex Melendez Professional Tattoo.",
      emptyValue: "Not specified",
      services: ["Tattoo", "Piercing", "Consultation"],
    },
    poweredBy: "This website is powered by",
    seo: {
      title:
        "Tattoo Studio in Santa Tecla, El Salvador | Alex Melendez Inka",
      description:
        "Alex Melendez Inka is a premium tattoo and piercing studio in Santa Tecla, El Salvador for local and international clients. Book your appointment on WhatsApp.",
      keywords: [
        "tattoo artist in el salvador",
        "tattoo studio in el salvador",
        "best tattoo artist in el salvador",
        "tattoo shop in santa tecla",
        "tattoo studio in santa tecla",
        "custom tattoos el salvador",
        "i want to get a tattoo in el salvador",
        "traveling to el salvador tattoo appointment",
        "book a tattoo in el salvador",
        "tattoo studio santa tecla",
        "piercing studio el salvador",
        "alex melendez inka",
      ],
    },
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale) {
  return locale === "es" ? "en" : "es";
}
