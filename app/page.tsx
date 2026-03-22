import Image from "next/image";

const services = [
  {
    title: "Tatuajes personalizados",
    description:
      "Diseños hechos a medida con enfoque en composición, detalle y lectura estética de la piel.",
    accent: "01",
  },
  {
    title: "Piercing profesional",
    description:
      "Perforaciones seguras, con protocolo higiénico riguroso, joyería premium y asesoría de curación.",
    accent: "02",
  },
  {
    title: "Dirección creativa",
    description:
      "Aterrizamos ideas, referencias y conceptos para convertirlos en piezas coherentes y memorables.",
    accent: "03",
  },
];

const gallery = [
  {
    title: "Realismo ritual",
    image: "/art/gallery-01.svg",
    tag: "Black & Grey",
  },
  {
    title: "Ornamental andino",
    image: "/art/gallery-02.svg",
    tag: "Fine Line",
  },
  {
    title: "Serpiente solar",
    image: "/art/gallery-03.svg",
    tag: "Neo tradicional",
  },
  {
    title: "Máscara sagrada",
    image: "/art/gallery-04.svg",
    tag: "Grabado",
  },
  {
    title: "Cóndor en vuelo",
    image: "/art/gallery-05.svg",
    tag: "Ilustrativo",
  },
  {
    title: "Floral ceremonial",
    image: "/art/gallery-06.svg",
    tag: "Blackwork",
  },
];

const team = [
  {
    name: "Amaru",
    role: "Director artístico",
    image: "/art/artist-01.svg",
    description:
      "Especialista en realismo oscuro y composición narrativa. Convierte ideas complejas en piezas sólidas y atemporales.",
  },
  {
    name: "Killa",
    role: "Tattoo artist",
    image: "/art/artist-02.svg",
    description:
      "Enfocada en línea fina, botánica y ornamento. Su trazo es limpio, delicado y muy preciso.",
  },
  {
    name: "Inti",
    role: "Piercer & curator",
    image: "/art/artist-03.svg",
    description:
      "Responsable del área de perforación y joyería. Prioriza seguridad, estética y acompañamiento post servicio.",
  },
];

const testimonials = [
  {
    quote:
      "Me ayudaron a convertir una idea emocional en una pieza elegante. El resultado superó por mucho mi expectativa.",
    name: "Valeria M.",
  },
  {
    quote:
      "El estudio se siente premium desde que llegas. Todo fue claro, higiénico y muy bien cuidado.",
    name: "Ricardo A.",
  },
  {
    quote:
      "Mi piercing cicatrizó excelente y la atención fue súper cálida. Se nota que dominan el proceso.",
    name: "Fernanda G.",
  },
];

const faqs = [
  {
    question: "¿Cómo puedo cotizar mi tatuaje?",
    answer:
      "Comparte tamaño aproximado, zona del cuerpo, referencias visuales y una breve descripción del concepto. Con eso preparamos una propuesta inicial.",
  },
  {
    question: "¿Trabajan por cita o por walk-in?",
    answer:
      "La experiencia principal es por cita para cuidar el diseño y el tiempo de cada cliente, aunque algunos espacios pueden abrirse para piezas pequeñas.",
  },
  {
    question: "¿Qué cuidados siguen para tatuajes y piercings?",
    answer:
      "Usamos material estéril, estaciones preparadas por servicio y guía de aftercare escrita para asegurar una curación adecuada.",
  },
  {
    question: "¿Qué estilos puede desarrollar Inka Tatoo?",
    answer:
      "Realismo, black & grey, fine line, ornamental, ilustrativo y propuestas conceptuales desarrolladas junto con el cliente.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="inicio">
        <div className="hero__overlay" />
        <header className="topbar">
          <div>
            <p className="eyebrow">Inka Tatoo Studio</p>
            <p className="topbar__sub">
              Arte corporal, identidad y ritual contemporáneo
            </p>
          </div>
          <nav className="topbar__nav" aria-label="Principal">
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">
              Inspirado en la experiencia premium de un estudio editorial
            </p>
            <h1>
              Una landing de alto impacto para presentar a Inka Tatoo con fuerza
              visual.
            </h1>
            <p className="hero__lead">
              Construimos una página tipo one-page en Next.js, con narrativa
              clara, estética oscura, portafolio, equipo, FAQ y contacto para
              convertir visitas en citas.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contacto">
                Agendar valoración
              </a>
              <a className="button button--ghost" href="#trabajos">
                Ver portafolio
              </a>
            </div>
            <ul className="hero__metrics" aria-label="Valores destacados">
              <li>
                <strong>100%</strong>
                <span>Diseño personalizado</span>
              </li>
              <li>
                <strong>3</strong>
                <span>Áreas clave del servicio</span>
              </li>
              <li>
                <strong>1</strong>
                <span>Experiencia unificada de marca</span>
              </li>
            </ul>
          </div>

          <div className="hero__art">
            <div className="hero__badge">Nueva identidad visual</div>
            <Image
              src="/branding/hero-emblem.svg"
              alt="Emblema artístico de Inka Tatoo"
              width={620}
              height={760}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section--split" id="nosotros">
        <div>
          <p className="section__label">Nosotros</p>
          <h2>
            Una estructura inspirada en Monasterio Tattoo, reinterpretada para
            una marca con identidad propia.
          </h2>
        </div>
        <div className="stack-lg">
          <p>
            La referencia se tomó por su ritmo de navegación y por cómo conecta
            historia, servicios, portafolio, testimonios, equipo y contacto en
            una sola narrativa. Para Inka Tatoo se diseñó una versión más
            editorial, con símbolos propios, colorimetría volcánica y piezas
            visuales originales en SVG.
          </p>
          <blockquote className="quote-card">
            “La tinta no solo decora el cuerpo; también ordena recuerdos,
            símbolos y decisiones.”
          </blockquote>
        </div>
      </section>

      <section className="section" id="servicios">
        <p className="section__label">Servicios</p>
        <div className="section__header">
          <h2>
            Un bloque comercial claro para vender la experiencia completa del
            estudio.
          </h2>
          <p>
            Se replica la lógica de la página de referencia: servicios
            principales visibles desde el primer scroll, mensajes concretos y
            llamadas a la acción enfocadas en conversión.
          </p>
        </div>
        <div className="card-grid card-grid--services">
          {services.map((service) => (
            <article key={service.title} className="feature-card">
              <span className="feature-card__accent">{service.accent}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--portfolio" id="trabajos">
        <div className="section__header">
          <div>
            <p className="section__label">Trabajos</p>
            <h2>Arte original para maquetar el portafolio desde el día uno.</h2>
          </div>
          <p>
            Como parte del entregable se generaron ilustraciones propias para
            hero, galería y equipo, de modo que el sitio ya se vea completo
            mientras llegan fotografías reales del estudio.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <article key={item.title} className="gallery-card">
              <div className="gallery-card__image">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                />
              </div>
              <div className="gallery-card__body">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__header">
          <div>
            <p className="section__label">Clientes</p>
            <h2>
              Prueba social y confianza, igual que en el sitio de referencia.
            </h2>
          </div>
          <p>
            La home incluye reseñas breves para reducir fricción y reforzar la
            percepción de calidad, seguridad e intención artística.
          </p>
        </div>
        <div className="card-grid testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <p>“{testimonial.quote}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="equipo">
        <div className="section__header">
          <div>
            <p className="section__label">Equipo</p>
            <h2>
              Presentación del crew con perfil, especialidad e ilustración
              dedicada.
            </h2>
          </div>
          <p>
            Esta sección conserva la intención del sitio analizado: humanizar al
            estudio mostrando a sus artistas y reforzar la confianza en cada
            disciplina.
          </p>
        </div>
        <div className="card-grid team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <Image
                src={member.image}
                alt={member.name}
                width={460}
                height={520}
              />
              <div className="team-card__body">
                <p className="team-card__role">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--values">
        <div className="values-panel">
          <div>
            <p className="section__label">Valores</p>
            <h2>Excelencia, seguridad, creatividad y seguimiento.</h2>
            <p>
              Igual que la referencia, el discurso de marca aterriza en
              atributos medibles para que la experiencia del estudio se perciba
              profesional, cuidada y coherente.
            </p>
          </div>
          <div className="values-metrics">
            {["Excelencia", "Seguridad", "Creatividad", "Compromiso"].map(
              (item) => (
                <div key={item}>
                  <strong>100%</strong>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--faq">
        <div className="section__header">
          <div>
            <p className="section__label">FAQ</p>
            <h2>Preguntas frecuentes para reducir dudas antes de contactar.</h2>
          </div>
          <p>
            Se mantuvo esta sección porque en el sitio base ayuda mucho a
            convertir: responde objeciones, explica el proceso y ordena la
            comunicación comercial.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section--contact" id="contacto">
        <div className="contact-card">
          <div className="contact-card__copy">
            <p className="section__label">Contacto</p>
            <h2>Tu idea empieza aquí.</h2>
            <p>
              Dejé una estructura lista para captación: datos del estudio,
              horarios, CTA principal y formulario base para que luego conectes
              el envío real con el canal que prefieras.
            </p>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong> hola@inkatatoo.com
              </li>
              <li>
                <strong>WhatsApp:</strong> +52 33 0000 0000
              </li>
              <li>
                <strong>Horario:</strong> Lun - Sáb / 11:00 a 20:00
              </li>
              <li>
                <strong>Ubicación:</strong> Guadalajara, Jalisco · Dirección
                editable
              </li>
            </ul>
          </div>
          <form className="contact-form">
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>
            <label>
              Servicio
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Elige una opción
                </option>
                <option>Tatuaje personalizado</option>
                <option>Piercing</option>
                <option>Valoración de proyecto</option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                name="message"
                rows={5}
                placeholder="Cuéntanos tu idea"
              />
            </label>
            <button
              type="submit"
              className="button button--primary button--full"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
