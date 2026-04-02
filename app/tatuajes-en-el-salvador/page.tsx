const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const pageUrl = `${siteUrl}/tatuajes-en-el-salvador`;

const faqItems = [
  {
    question: "¿Cómo agendo una cita de tatuaje en Santa Tecla?",
    answer:
      "Escríbenos por WhatsApp con tu idea, tamaño, zona del cuerpo y fechas disponibles. Te enviamos una valoración inicial y opciones de agenda.",
  },
  {
    question: "¿Atienden turistas que viajan a El Salvador?",
    answer:
      "Sí. Recibimos clientes internacionales y te ayudamos a coordinar tu cita de acuerdo con tu itinerario de viaje para que tengas una sesión segura y puntual.",
  },
  {
    question: "¿Qué estándares de higiene manejan en el estudio?",
    answer:
      "Trabajamos con protocolo profesional de higiene, material estéril y acompañamiento de aftercare para cuidar tu piel antes, durante y después de la sesión.",
  },
  {
    question: "¿Puedo ver trabajos reales antes de reservar?",
    answer:
      "Sí. Puedes revisar nuestro portafolio e Instagram para ver estilos, técnica y resultados reales realizados en el estudio.",
  },
];

export const metadata = {
  title:
    "Tatuajes en El Salvador | Estudio profesional en Santa Tecla - Alex Melendez Inka",
  description:
    "¿Quieres tatuarte en El Salvador? Alex Melendez Inka es un estudio profesional en Santa Tecla para clientes locales y turistas. Reserva por WhatsApp.",
  alternates: {
    canonical: pageUrl,
    languages: {
      es: pageUrl,
      en: `${siteUrl}/en/get-a-tattoo-in-el-salvador`,
      "x-default": pageUrl,
    },
  },
  openGraph: {
    title:
      "Tatuajes en El Salvador | Estudio profesional en Santa Tecla - Alex Melendez Inka",
    description:
      "Tatuajes premium en Santa Tecla, El Salvador. Diseño personalizado, higiene profesional y reserva fácil por WhatsApp.",
    url: pageUrl,
    siteName: "Alex Melendez Inka",
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tatuajes en El Salvador | Estudio profesional en Santa Tecla - Alex Melendez Inka",
    description:
      "Estudio de tatuajes en Santa Tecla para locales y turistas. Agenda por WhatsApp.",
  },
};

export default function TattoosInElSalvadorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="seo-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="content-section intro-section">
        <p className="section-kicker">Alex Melendez Inka · Santa Tecla</p>
        <h1>Tatuajes en El Salvador para locales y turistas</h1>
        <p>
          Si estás buscando dónde tatuarte en El Salvador, en Alex Melendez Inka
          encuentras un estudio profesional en Santa Tecla con enfoque artístico,
          higiene estricta y atención personalizada. Trabajamos con clientes
          locales y con personas que vienen de viaje y quieren llevarse una pieza
          memorable hecha con técnica y criterio.
        </p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://wa.me/50371111664?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20tatuaje%20en%20El%20Salvador."
            target="_blank"
            rel="noreferrer"
          >
            Reservar por WhatsApp
          </a>
          <a className="ghost-button" href="/es#trabajos">
            Ver portafolio real
          </a>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Por qué elegir nuestro estudio de tatuajes en Santa Tecla</h2>
        </div>
        <div className="section-lead">
          <p>
            Nuestro proceso está diseñado para que tu experiencia sea clara desde
            el primer mensaje: revisión de idea, propuesta visual, recomendaciones
            previas y sesión con estándares profesionales.
          </p>
          <p>
            Nos especializamos en tatuajes personalizados con composición cuidada,
            atención al detalle y seguimiento de aftercare para que el resultado se
            mantenga sólido con el tiempo.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>¿Viajas a El Salvador? Te ayudamos a coordinar tu cita</h2>
        </div>
        <div className="section-lead">
          <p>
            Si vienes por turismo, podemos adaptar tu cita a tus fechas de viaje.
            Compartimos recomendaciones previas, duración estimada y cuidados para
            que puedas organizarte mejor durante tu estancia en Santa Tecla.
          </p>
          <h3>Qué enviarnos para cotizar más rápido</h3>
          <ul>
            <li>Referencia o estilo que te gusta.</li>
            <li>Tamaño aproximado y zona del cuerpo.</li>
            <li>Fecha disponible y tiempo de viaje en el país.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>FAQ: tatuajes en El Salvador</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item" open>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Agenda tu cita hoy</h2>
        </div>
        <p>
          Escríbenos y te ayudamos a aterrizar tu idea con un plan claro, enfoque
          premium y resultados reales.
        </p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://wa.me/50371111664?text=Hola%2C%20quiero%20cotizar%20un%20tatuaje%20en%20Santa%20Tecla."
            target="_blank"
            rel="noreferrer"
          >
            Hablar por WhatsApp
          </a>
          <a className="ghost-button" href="/es#contacto">
            Ir al formulario
          </a>
        </div>
        <p className="landing-links">
          Enlaces recomendados: <a href="/es#servicios">Servicios</a> ·{" "}
          <a href="/es#trabajos">Portafolio</a> · <a href="/es#faq">FAQ</a> ·{" "}
          <a href="/en/get-a-tattoo-in-el-salvador">English version</a>
        </p>
      </section>
    </main>
  );
}
