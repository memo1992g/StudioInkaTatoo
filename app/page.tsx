import Image from "next/image";
import ContactForm from "./contact-form";
import MobileNav from "./mobile-nav";
import ValuesMetrics from "./values-metrics";

const services = [
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
    title: "Supply",
    description:
      "Productos seleccionados y acompañamiento para extender la experiencia del estudio con el mismo estándar de detalle y confianza.",
    image: "/media/service-glue.png",
  },
];

const works = [
  "/media/work-01.jpg",
  "/media/work-02.jpg",
  "/media/work-03.jpg",
  "/media/work-04.jpeg",
];

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes escribirnos por WhatsApp o completar el formulario para revisar tu idea, referencias y disponibilidad.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Trabajamos con efectivo, transferencias y opciones adicionales que el estudio te confirma al momento de reservar.",
  },
  {
    question: "¿Manejan meses sin intereses?",
    answer:
      "La disponibilidad de promociones y formas de financiamiento se confirma según campaña y tipo de servicio.",
  },
  {
    question: "¿Qué debo llevar a mi valoración?",
    answer:
      "Tamaño aproximado, zona del cuerpo, referencias visuales y una descripción breve del concepto que deseas desarrollar.",
  },
];

export default function Home() {
  return (
    <main className="monasterio-page">
      <header className="site-header">
        <a
          className="site-logo"
          href="#inicio"
          aria-label="Alex Melendez Professional Tattoo"
        >
          <Image
            src="/branding/alex-melendez-logo-transparent.png"
            alt="Alex Melendez Professional Tattoo"
            width={220}
            height={202}
            priority
          />
        </a>
        <nav className="site-nav" aria-label="Principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <MobileNav />
      </header>

      <section className="hero-block" id="inicio">
        <video
          className="hero-video"
          src="/media/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/contact-bg.jpg"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="section-kicker">Alex Melendez Professional Tattoo</p>
          <h1 className="hero-title">Alex Melendez Professional Tattoo</h1>
          <p className="hero-copy">
            En Alex Melendez Professional Tattoo creemos que tu piel es un
            lienzo con historia. Aquí te acompañamos a plasmar lo que eres y lo
            que deseas expresar.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contacto">
              Agenda tu cita
            </a>
            <a className="ghost-button" href="#trabajos">
              Ver trabajos
            </a>
          </div>
        </div>
        <a className="hero-scroll" href="#nosotros">
          Desliza
        </a>
      </section>

      <section className="content-section intro-section" id="nosotros">
        <div className="section-heading">
          <p className="section-kicker">Nosotros</p>
          <h2>Alex Melendez Professional Tattoo</h2>
        </div>
        <div className="section-lead">
          <p>
            En Alex Melendez Professional Tattoo creemos que tu piel es un
            lienzo con historia. Nuestra pasión por el arte corporal se une a
            una ejecución precisa para transformar ideas, símbolos y recuerdos
            en piezas con identidad.
          </p>
          <p>
            Este sitio está pensado como una experiencia de una sola página,
            donde puedes recorrer nuestros servicios, trabajos, valores,
            preguntas frecuentes y datos de contacto de forma clara y continua.
          </p>
        </div>
      </section>

      <section className="content-section" id="servicios">
        <div className="section-heading">
          <p className="section-kicker">Servicios</p>
          <h2>Lo que hacemos</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <Image
                src={service.image}
                alt={service.title}
                width={70}
                height={70}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="trabajos">
        <div className="section-heading">
          <p className="section-kicker">Trabajos</p>
          <h2>Nuestro Portafolio</h2>
        </div>
        <div className="works-grid">
          {works.map((image, index) => (
            <article key={image} className="work-card">
              <Image
                src={image}
                alt={`Trabajo ${index + 1}`}
                width={900}
                height={1100}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="content-section testimonials-section">
        <div className="section-heading">
          <p className="section-kicker">Clientes</p>
          <h2>Experiencias que dejan huella</h2>
        </div>
        <div className="testimonial-strip">
          {[
            "Excelente atención, profesionalismo y un resultado impecable desde la primera sesión.",
            "El estudio se siente premium, serio y muy bien cuidado en cada detalle.",
            "Desde la valoración hasta el seguimiento, todo el proceso fue claro y confiable.",
          ].map((quote) => (
            <blockquote key={quote} className="testimonial-card">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </section>

      <section className="content-section values-section">
        <div className="values-copy">
          <div className="section-heading">
            <p className="section-kicker">Valores</p>
            <h2>Excelencia, cuidado y autenticidad</h2>
          </div>
          <p>
            Cada decisión, cada proceso y cada pieza se trabajan con dedicación,
            cuidado y autenticidad para construir una experiencia profesional y
            humana en cada visita.
          </p>
          <ValuesMetrics />
        </div>
        <div className="values-image">
          <Image
            src="/media/values-image.jpg"
            alt="Interior de Alex Melendez Professional Tattoo"
            width={1200}
            height={980}
          />
        </div>
      </section>

      <section className="content-section" id="faq">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Preguntas Frecuentes</h2>
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

      <section className="contact-section" id="contacto">
        <div className="contact-overlay" />
        <div className="contact-inner">
          <div className="section-heading">
            <p className="section-kicker">Contacto</p>
            <h2>Agenda tu cita</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                Escríbenos para cotizar tu idea, recibir una valoración y
                reservar tu espacio dentro del estudio.
              </p>
              <ul className="contact-list">
                <li>
                  <strong>Dirección:</strong>{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Calle+El+Pedregal+%2310,+Jardines+de+la+Hacienda,+Santa+Tecla,+Nueva+San+Salvador,+CP+1501,+1502"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Calle El Pedregal #10, Jardines de la Hacienda, Santa
                    Tecla, Nueva San Salvador, CP 1501, 1502
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/50371111664" target="_blank" rel="noreferrer">
                    +503 7111-1664
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong>{" "}
                  <a
                    href="https://www.instagram.com/inka_alexmelendez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @inka_alexmelendez
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
