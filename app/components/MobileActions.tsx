import Link from "next/link";

export function MobileActions() {
  return <aside className="mobile-actions" aria-label="Acciones rápidas">
    <a href="https://wa.me/584127065848" target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> WhatsApp</a>
    <Link href="/contacto"><span aria-hidden="true">✦</span> Cotizar</Link>
  </aside>;
}
