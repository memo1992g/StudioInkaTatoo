import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const pageUrl = `${siteUrl}/en/get-a-tattoo-in-el-salvador`;

const faqItems = [
  {
    question: "How do I book a tattoo appointment in Santa Tecla?",
    answer:
      "Send us a WhatsApp message with your idea, approximate size, body placement, and travel dates. We will reply with a first evaluation and available slots.",
  },
  {
    question: "Do you work with travelers visiting El Salvador?",
    answer:
      "Yes. We regularly work with international clients and can align your appointment with your itinerary for a smooth and professional experience.",
  },
  {
    question: "Is hygiene and safety a priority at the studio?",
    answer:
      "Absolutely. We follow a professional hygiene protocol, use sterile materials, and give clear aftercare guidance before and after each session.",
  },
  {
    question: "Can I review your real tattoo portfolio first?",
    answer:
      "Yes. You can explore our portfolio and Instagram to see authentic work, style consistency, and execution quality before booking.",
  },
];

export const metadata: Metadata = {
  title:
    "Get a Tattoo in El Salvador | Premium Tattoo Studio in Santa Tecla",
  description:
    "Traveling to El Salvador and want a tattoo? Alex Melendez Inka is a professional tattoo studio in Santa Tecla for locals and international clients.",
  alternates: {
    canonical: pageUrl,
    languages: {
      es: `${siteUrl}/tatuajes-en-el-salvador`,
      en: pageUrl,
      "x-default": `${siteUrl}/tatuajes-en-el-salvador`,
    },
  },
  openGraph: {
    title:
      "Get a Tattoo in El Salvador | Premium Tattoo Studio in Santa Tecla",
    description:
      "Custom tattoos in Santa Tecla, El Salvador. Premium process, strict hygiene, and direct WhatsApp booking.",
    url: pageUrl,
    siteName: "Alex Melendez Inka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Get a Tattoo in El Salvador | Premium Tattoo Studio in Santa Tecla",
    description:
      "Tattoo studio in Santa Tecla for travelers and local clients. Book on WhatsApp.",
  },
};

export default function GetATattooInElSalvadorPage() {
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
        <h1>Get a tattoo in El Salvador with a premium studio experience</h1>
        <p>
          Looking for a trusted tattoo studio in El Salvador? Alex Melendez Inka
          in Santa Tecla offers custom tattoo work, strict hygiene standards, and
          clear communication for both local clients and international travelers.
        </p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://wa.me/50371111664?text=Hi%2C%20I%20want%20to%20book%20a%20tattoo%20appointment%20in%20El%20Salvador."
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <a className="ghost-button" href="/en#work">
            See real portfolio
          </a>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Why clients choose our tattoo studio in Santa Tecla</h2>
        </div>
        <div className="section-lead">
          <p>
            Our process focuses on quality and confidence: concept review, design
            direction, clear booking expectations, and professional execution in a
            clean and controlled environment.
          </p>
          <p>
            We prioritize custom work that feels personal and timeless, while
            giving you practical guidance on preparation and aftercare.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Traveling to El Salvador? We make booking easy</h2>
        </div>
        <div className="section-lead">
          <p>
            If you are visiting El Salvador, we can schedule your session around
            your travel window. We will help you estimate session timing and give
            practical recommendations so your appointment fits smoothly into your
            trip.
          </p>
          <h3>Send this info for a faster quote</h3>
          <ul>
            <li>Reference images or preferred style.</li>
            <li>Approximate size and body placement.</li>
            <li>Your available dates while in El Salvador.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>FAQ: getting a tattoo in El Salvador</h2>
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
          <h2>Ready to book your tattoo session?</h2>
        </div>
        <p>
          Message us on WhatsApp and we will guide you through concept, quote,
          schedule, and preparation.
        </p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://wa.me/50371111664?text=Hi%2C%20I%20want%20a%20quote%20for%20a%20tattoo%20in%20Santa%20Tecla."
            target="_blank"
            rel="noreferrer"
          >
            Start on WhatsApp
          </a>
          <a className="ghost-button" href="/en#contact">
            Go to contact form
          </a>
        </div>
        <p className="landing-links">
          Suggested internal links: <a href="/en#services">Services</a> ·{" "}
          <a href="/en#work">Portfolio</a> · <a href="/en#faq">FAQ</a> ·{" "}
          <a href="/tatuajes-en-el-salvador">Versión en español</a>
        </p>
      </section>
    </main>
  );
}
