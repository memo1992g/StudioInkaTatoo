import Image from "next/image";
import { notFound } from "next/navigation";
import ContactForm from "../contact-form";
import MobileNav from "../mobile-nav";
import ValuesMetrics from "../values-metrics";
import {
  getAlternateLocale,
  isValidLocale,
  siteContent,
  type Locale,
} from "../site-content";

const works = [
  "/media/work-01.jpg",
  "/media/work-02.jpg",
  "/media/work-03.jpg",
  "/media/work-04.jpeg",
];

const addressUrl =
  "https://www.google.com/maps/search/?api=1&query=Calle+El+Pedregal+%2310,+Jardines+de+la+Hacienda,+Santa+Tecla,+Nueva+San+Salvador,+CP+1501,+1502";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const alternateLocale = getAlternateLocale(locale);
  const content = siteContent[locale];

  const sectionIds =
    locale === "es"
      ? {
          about: "nosotros",
          services: "servicios",
          works: "trabajos",
          faq: "faq",
          contact: "contacto",
        }
      : {
          about: "about",
          services: "services",
          works: "work",
          faq: "faq",
          contact: "contact",
        };

  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "Alex Melendez Professional Tattoo",
    image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/branding/alex-melendez-logo-transparent.png`,
    description: content.seo.description,
    telephone: "+50371111664",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle El Pedregal #10, Jardines de la Hacienda",
      addressLocality: "Santa Tecla",
      addressRegion: "La Libertad",
      addressCountry: "SV",
      postalCode: "1501, 1502",
    },
    areaServed: ["Santa Tecla", "San Salvador", "El Salvador"],
    sameAs: ["https://www.instagram.com/inka_alexmelendez"],
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/${locale}`,
    inLanguage: locale,
  };

  return (
    <main className="monasterio-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
          {content.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="lang-switcher" aria-label="Language switcher">
          <a
            href="/es"
            className={locale === "es" ? "is-active" : undefined}
          >
            ES
          </a>
          <a
            href="/en"
            className={locale === "en" ? "is-active" : undefined}
          >
            EN
          </a>
        </div>

        <MobileNav links={content.nav} ariaLabel={content.mobileMenuLabel} />
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
          <p className="section-kicker">{content.hero.kicker}</p>
          <h1 className="hero-title">{content.hero.title}</h1>
          <p className="hero-copy">{content.hero.copy}</p>
          <div className="hero-actions">
            <a className="primary-button" href={`#${sectionIds.contact}`}>
              {content.hero.primaryCta}
            </a>
            <a className="ghost-button" href={`#${sectionIds.works}`}>
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>
        <a className="hero-scroll" href={`#${sectionIds.about}`}>
          {content.hero.scroll}
        </a>
      </section>

      <section
        className="content-section intro-section"
        id={sectionIds.about}
      >
        <div className="section-heading">
          <p className="section-kicker">{content.about.kicker}</p>
          <h2>{content.about.title}</h2>
        </div>
        <div className="section-lead">
          {content.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="content-section" id={sectionIds.services}>
        <div className="section-heading">
          <p className="section-kicker">{content.services.kicker}</p>
          <h2>{content.services.title}</h2>
        </div>
        <div className="services-grid">
          {content.services.items.map((service) => (
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

      <section className="content-section" id={sectionIds.works}>
        <div className="section-heading">
          <p className="section-kicker">{content.works.kicker}</p>
          <h2>{content.works.title}</h2>
        </div>
        <div className="works-grid">
          {works.map((image, index) => (
            <article key={image} className="work-card">
              <Image
                src={image}
                alt={`${content.works.title} ${index + 1}`}
                width={900}
                height={1100}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="content-section testimonials-section">
        <div className="section-heading">
          <p className="section-kicker">{content.testimonials.kicker}</p>
          <h2>{content.testimonials.title}</h2>
        </div>
        <div className="testimonial-strip">
          {content.testimonials.items.map((quote) => (
            <blockquote key={quote} className="testimonial-card">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </section>

      <section className="content-section values-section">
        <div className="values-copy">
          <div className="section-heading">
            <p className="section-kicker">{content.values.kicker}</p>
            <h2>{content.values.title}</h2>
          </div>
          <p>{content.values.body}</p>
          <ValuesMetrics labels={content.values.metrics} />
        </div>
        <div className="values-image">
          <Image
            src="/media/values-image.jpg"
            alt={content.values.imageAlt}
            width={1200}
            height={980}
          />
        </div>
      </section>

      <section className="content-section" id={sectionIds.faq}>
        <div className="section-heading">
          <p className="section-kicker">{content.faq.kicker}</p>
          <h2>{content.faq.title}</h2>
        </div>
        <div className="faq-list">
          {content.faq.items.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id={sectionIds.contact}>
        <div className="contact-overlay" />
        <div className="contact-inner">
          <div className="section-heading">
            <p className="section-kicker">{content.contact.kicker}</p>
            <h2>{content.contact.title}</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>{content.contact.body}</p>
              <ul className="contact-list">
                <li>
                  <strong>{content.contact.addressLabel}:</strong>{" "}
                  <a
                    href={addressUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-cta icon-cta--maps"
                    aria-label={
                      locale === "es"
                        ? "Abrir dirección en Google Maps"
                        : "Open address in Google Maps"
                    }
                  >
                    <span className="icon-cta__glyph" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path d="M12 2.5c-4.03 0-7.3 3.12-7.3 6.97 0 5.38 7.3 12.03 7.3 12.03s7.3-6.65 7.3-12.03c0-3.85-3.27-6.97-7.3-6.97Zm0 9.54a2.58 2.58 0 1 1 0-5.16 2.58 2.58 0 0 1 0 5.16Z" />
                      </svg>
                    </span>
                    <span className="icon-cta__text">
                      {locale === "es" ? "Abrir en Google Maps" : "Open in Google Maps"}
                    </span>
                  </a>
                </li>
                <li>
                  <strong>{content.contact.whatsappLabel}:</strong>{" "}
                  <a
                    href="https://wa.me/50371111664"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +503 7111-1664
                  </a>
                </li>
                <li>
                  <strong>{content.contact.instagramLabel}:</strong>{" "}
                  <a
                    href="https://www.instagram.com/inka_alexmelendez"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-cta icon-cta--instagram"
                    aria-label={
                      locale === "es"
                        ? "Abrir perfil de Instagram"
                        : "Open Instagram profile"
                    }
                  >
                    <span className="icon-cta__glyph" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path d="M7.2 2.8h9.6a4.4 4.4 0 0 1 4.4 4.4v9.6a4.4 4.4 0 0 1-4.4 4.4H7.2a4.4 4.4 0 0 1-4.4-4.4V7.2a4.4 4.4 0 0 1 4.4-4.4Zm9.6 16a2 2 0 0 0 2-2V7.2a2 2 0 0 0-2-2H7.2a2 2 0 0 0-2 2v9.6a2 2 0 0 0 2 2h9.6Zm-4.8-11a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm4.9-6.73a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04Z" />
                      </svg>
                    </span>
                    <span className="icon-cta__text">@inka_alexmelendez</span>
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm labels={content.form} />
          </div>
        </div>
      </section>

      <section className="powered-section" aria-label="Potenciado por">
        <p>{content.poweredBy}</p>
        <Image
          src="/branding/powered-by-logo.png"
          alt="Studio logo"
          width={220}
          height={147}
        />
      </section>
    </main>
  );
}
