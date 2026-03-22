"use client";

const WHATSAPP_NUMBER = "50371111664";

const services = ["Tatuaje", "Piercing", "Valoración"];

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const text = [
      "Hola, quiero agendar una cita en Alex Melendez Professional Tattoo.",
      `Nombre: ${name || "No especificado"}`,
      `Teléfono: ${phone || "No especificado"}`,
      `Servicio: ${service || "No especificado"}`,
      `Mensaje: ${message || "No especificado"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input type="text" name="name" placeholder="Tu nombre" />
      </label>
      <label>
        Teléfono
        <input type="tel" name="phone" placeholder="Tu teléfono" />
      </label>
      <label>
        Servicio
        <select name="service" defaultValue="">
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        Mensaje
        <textarea name="message" rows={5} placeholder="Cuéntanos tu idea" />
      </label>
      <button type="submit" className="primary-button primary-button--full">
        Enviar por WhatsApp
      </button>
    </form>
  );
}
