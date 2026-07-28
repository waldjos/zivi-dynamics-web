import { ZiviMark } from "./ZiviMark";

type BrandLogoProps = {
  variant?: "compact" | "full";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "full", className = "" }: BrandLogoProps) {
  return (
    <span
      className={`brandLockup brandLockup-${variant} ${className}`.trim()}
      role="img"
      aria-label="Zivi Dynamics C.A. Soluciones Digitales"
    >
      <ZiviMark className="brandLockupMark" />
      <span className="brandLockupWords">
        <span className="brandLockupName">ZIVI</span>
        <span className="brandLockupCompany">Dynamics C.A.</span>
        {variant === "full" && <span className="brandLockupTagline">Soluciones Digitales</span>}
      </span>
    </span>
  );
}
