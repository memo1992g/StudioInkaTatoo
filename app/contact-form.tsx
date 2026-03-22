"use client";

const WHATSAPP_NUMBER = "50371111664";

type ContactFormProps = {
  labels: {
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
};

export default function ContactForm({ labels }: ContactFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const text = [
      labels.whatsappIntro,
      `${labels.name}: ${name || labels.emptyValue}`,
      `${labels.phone}: ${phone || labels.emptyValue}`,
      `${labels.service}: ${service || labels.emptyValue}`,
      `${labels.message}: ${message || labels.emptyValue}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {labels.name}
        <input type="text" name="name" placeholder={labels.name} />
      </label>
      <label>
        {labels.phone}
        <input type="tel" name="phone" placeholder={labels.phone} />
      </label>
      <label>
        {labels.service}
        <select name="service" defaultValue="">
          <option value="" disabled>
            {labels.servicePlaceholder}
          </option>
          {labels.services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        {labels.message}
        <textarea name="message" rows={5} placeholder={labels.message} />
      </label>
      <button type="submit" className="primary-button primary-button--full">
        {labels.submit}
      </button>
    </form>
  );
}
