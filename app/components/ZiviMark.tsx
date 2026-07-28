type ZiviMarkProps = {
  className?: string;
  decorative?: boolean;
};

export function ZiviMark({
  className = "",
  decorative = true,
}: ZiviMarkProps) {
  return (
    <span
      className={`ziviMonogram ${className}`.trim()}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : "Z de Zivi Dynamics"}
    >
      <span className="ziviMonogramFrame" />
      <span className="ziviMonogramGlyph" />
      <span className="ziviMonogramPulse" />
    </span>
  );
}
