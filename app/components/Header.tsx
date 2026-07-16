"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const links = [
  ["/", "Inicio"],
  ["/servicios", "Servicios"],
  ["/soluciones", "Soluciones"],
  ["/portafolio", "Portafolio"],
  ["/nfc", "NFC"],
  ["/inteligencia-artificial", "IA"],
  ["/nosotros", "Nosotros"],
  ["/contacto", "Contacto"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return <header className="site-header">
    <div className="container site-nav">
      <Link href="/" className="site-brand" aria-label="Zivi Dynamics C.A. — Inicio">
        <img src="/zivi-logo-light.svg" alt="Zivi Dynamics C.A. — Soluciones Digitales" />
      </Link>
      <nav className="desktop-menu" aria-label="Navegación principal">
        {links.map(([href,label]) => <Link key={href} href={href} className={active(href) ? "active" : ""} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link className="btn small desktop-cta" href="/contacto">Solicitar cotización</Link>
      <button className="menu-toggle" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(value => !value)}>
        <span/><span/><span/>
      </button>
    </div>
    <div className={`mobile-menu-layer ${open ? "open" : ""}`} aria-hidden={!open}>
      <button className="mobile-backdrop" type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
      <nav id={menuId} className="mobile-menu" aria-label="Navegación móvil">
        <div className="mobile-menu-head"><strong>Explorar Zivi</strong><button type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)}>×</button></div>
        {links.map(([href,label]) => <Link key={href} href={href} className={active(href) ? "active" : ""} aria-current={active(href) ? "page" : undefined}><span>{label}</span><span aria-hidden="true">→</span></Link>)}
        <Link className="mobile-primary" href="/contacto">Solicitar cotización</Link>
        <a className="mobile-whatsapp" href="https://wa.me/584127065848" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
      </nav>
    </div>
  </header>;
}
