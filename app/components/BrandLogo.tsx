type BrandLogoProps = {
  variant?: "compact" | "full";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "full", className = "", priority = false }: BrandLogoProps) {
  return (
    <span className={`brandLockup brandLockup-${variant} ${className}`.trim()} aria-label="Zivi Dynamics C.A. Soluciones Digitales">
      <img
        className="brandLockupMark"
        src="/brand/zivi-mark.svg"
        alt=""
        width="240"
        height="240"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <span className="brandLockupWords">
        <span className="brandLockupName">Zivi</span>
        <span className="brandLockupCompany">Dynamics C.A.</span>
        {variant === "full" && <span className="brandLockupTagline">Soluciones Digitales</span>}
      </span>
    </span>
  );
}
