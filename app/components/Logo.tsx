import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Zivi Dynamics C.A. — Inicio">
      <Image src="/zivi-app-icon.png" alt="" width={compact ? 38 : 44} height={compact ? 38 : 44} className="brandIcon" priority />
      <span className="brandText">
        <strong>Zivi</strong>
        <span>Dynamics C.A.</span>
      </span>
    </Link>
  );
}
