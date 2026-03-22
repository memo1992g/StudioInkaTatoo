"use client";

import { useEffect, useState } from "react";

type MobileNavProps = {
  links: {
    href: string;
    label: string;
  }[];
  ariaLabel: string;
};

export default function MobileNav({ links, ariaLabel }: MobileNavProps) {
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
        aria-label={ariaLabel}
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
        <div className="mobile-menu__locales">
          <a href="/es" onClick={() => setIsOpen(false)}>
            ES
          </a>
          <a href="/en" onClick={() => setIsOpen(false)}>
            EN
          </a>
        </div>
      </div>
    </>
  );
}
