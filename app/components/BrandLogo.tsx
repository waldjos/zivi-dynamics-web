import { ZiviMark } from "./ZiviMark";

type BrandLogoProps = {
  variant?: "compact" | "full";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "full", className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`brandLockup brandLockup-${variant} ${className}`.trim()}
      role="img"
      aria-label="Zivi Dynamics C.A. Soluciones Digitales"
    >
      <ZiviMark className="brandLockupMark" priority={priority} />
      <span className="brandLockupWords">
        <span className="brandLockupName" aria-hidden="true">
          {"Z"}
          <span className="brandI">
            <span className="brandIStem">{"ı"}</span>
            <span className="brandDot brandDotBlue" />
          </span>
          {"v"}
          <span className="brandI">
            <span className="brandIStem">{"ı"}</span>
            <span className="brandDot brandDotPink" />
          </span>
        </span>
        <span className="brandLockupCompany">Dynamics C.A.</span>
        {variant === "full" && <span className="brandLockupTagline">Soluciones Digitales</span>}
      </span>
    </span>
  );
}
