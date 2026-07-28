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
      <svg
        className="brandLockupMark"
        viewBox="0 0 240 240"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#00bff3"
          d="M24 46C67 79 112 18 191 48c22 8 35 23 38 38-19-14-36-9-55 0-43 21-82 23-118 10C40 90 29 72 24 46Z"
        />
        <path
          fill="#ffb51b"
          d="M226 77c-11 31-39 59-68 82l-66 50c-21 16-48 12-63-5 18-1 31-10 46-23l94-85c23-21 40-27 57-19Z"
        />
        <path
          fill="#f50078"
          d="M33 192c30 18 62-8 101-8 38 0 69 15 91 40-31-13-61-8-90 6-37 18-73 9-96-14-8-8-10-17-6-24Z"
        />
        <path fill="none" stroke="#fff" strokeOpacity=".52" strokeWidth="3" strokeLinecap="round" d="M40 52c47 25 88-18 145 0" />
        <path fill="none" stroke="#fff" strokeOpacity=".36" strokeWidth="3" strokeLinecap="round" d="M207 88c-22 32-59 65-108 101" />
        <path fill="none" stroke="#fff" strokeOpacity=".34" strokeWidth="3" strokeLinecap="round" d="M46 197c34 12 61-5 88-5" />
      </svg>
      <span className="brandLockupWords">
        <span className="brandLockupName">
          Z<span className="brandI"><span className="brandDot brandDotBlue" />ı</span>v<span className="brandI"><span className="brandDot brandDotPink" />ı</span>
        </span>
        <span className="brandLockupCompany">Dynamics C.A.</span>
        {variant === "full" && <span className="brandLockupTagline">Soluciones Digitales</span>}
      </span>
    </span>
  );
}
