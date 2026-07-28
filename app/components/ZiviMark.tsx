import Image from "next/image";

type ZiviMarkProps = {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

export function ZiviMark({
  className = "",
  decorative = true,
  priority = false,
}: ZiviMarkProps) {
  return (
    <span
      className={`ziviMonogram ${className}`.trim()}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : "Z de Zivi Dynamics"}
    >
      <Image
        className="ziviMonogramImage"
        src="/brand/zivi-mark-real-v2.png"
        alt=""
        width={821}
        height={1025}
        sizes="(max-width: 650px) 110px, 190px"
        quality={100}
        priority={priority}
      />
    </span>
  );
}
