"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`mobile-nav-toggle${isOpen ? " is-open" : ""}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
