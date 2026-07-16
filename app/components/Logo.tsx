import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand brand-lockup ${compact ? "brand-compact" : ""}`} aria-label="Zivi Dynamics C.A. — Inicio">
      <Image
        src="/zivi-logo-light.png"
        alt="Zivi Dynamics C.A. — Soluciones Digitales"
        width={1000}
        height={484}
        className="brand-logo-image"
        priority={!compact}
      />
    </Link>
  );
}
