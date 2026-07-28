import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceLayer } from "../../components/ExperienceLayer";
import { projects } from "../../lib/projects";

const liderMedia = [
  {
    image: "/media/lider/lider-admin-desktop.webp",
    title: "Administración conectada",
    text: "Pólizas, canales de venta, comisiones, renovaciones, usuarios y reportes en un solo entorno.",
    alt: "Panel administrativo de la solución de Líder de Seguros",
  },
  {
    image: "/media/lider/lider-keychain-car.webp",
    title: "El servicio viaja con el vehículo",
    text: "El asegurado lleva el acceso digital junto a sus llaves y abre la experiencia acercando el teléfono.",
    alt: "Llavero NFC de Líder de Seguros junto a unas llaves de vehículo",
  },
  {
    image: "/media/lider/lider-keychain-package.webp",
    title: "Entrega NFC + QR",
    text: "Dos formas de acceso permiten una activación inmediata y máxima compatibilidad.",
    alt: "Entrega de un llavero NFC con respaldo mediante código QR",
  },
] as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/portafolio/${project.slug}` },
    openGraph: {
      title: `${project.name} | Zivi Dynamics`,
      description: project.summary,
      type: "article",
      url: `/portafolio/${project.slug}`,
      images: project.image
        ? [{ url: project.image, alt: project.imageAlt ?? project.name }]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((item) => item.slug !== project.slug && item.sector === project.sector)
    .slice(0, 2);
  const isLider = project.slug === "lider-seguros-nfc";

  return (
    <>
      <ExperienceLayer />
      <article className={`caseEpic accent-${project.accent}`}>
        <header className="caseEpicHero">
          <div className="container">
            <Link href="/portafolio" className="caseEpicBack">← Índice de trabajo</Link>
            <div className="caseEpicHeroGrid">
              <div className="caseEpicIntro" data-reveal>
                <span>{project.category}</span>
                <h1>{project.name}</h1>
                <p>{project.summary}</p>
                <div className="caseEpicMeta">
                  <div><small>SECTOR</small><strong>{project.sector}</strong></div>
                  <div><small>ESTADO</small><strong>{project.status}</strong></div>
                  <div><small>SISTEMA</small><strong>{isLider ? "Físico + digital" : "Producto digital"}</strong></div>
                </div>
                <div className="epicActions">
                  {project.url && (
                    <a href={project.url} className="epicButton epicButtonPrimary" target="_blank" rel="noreferrer">
                      Visitar producto <span>↗</span>
                    </a>
                  )}
                  <Link href="/contacto" className="epicButton epicButtonGhost">Crear algo similar</Link>
                </div>
              </div>

              <div className="caseEpicVisual" data-reveal>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : (
                  <div className="projectMonogram">
                    <span>{project.name.slice(0, 1)}</span><i /><i /><i />
                  </div>
                )}
                <div className="caseVisualChrome">
                  <span>ZIVI / {project.slug.toUpperCase()}</span>
                  <div><i /><i /><i /></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="caseEpicStory">
          <div className="container caseEpicStoryGrid">
            <div data-reveal>
              <span className="caseStoryLabel">01 / EL CONTEXTO</span>
              <h2>Una necesidad operativa, no una excusa para diseñar pantallas.</h2>
            </div>
            <div data-reveal>
              <p>{project.challenge}</p>
              <div className="caseStoryRule" />
              <span className="caseStoryLabel">02 / LA RESPUESTA</span>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        <section className="caseSystem">
          <div className="container">
            <div className="editorialHeading" data-reveal>
              <div>
                <span className="epicEyebrow">Arquitectura de valor</span>
                <h2>Lo que hace que el sistema <em>funcione.</em></h2>
              </div>
              <p>
                Cada capacidad responde a una parte del proceso. Juntas forman
                una experiencia coherente para usuarios y operación.
              </p>
            </div>
            <div className="caseSystemGrid">
              {project.features.map((feature, index) => (
                <div key={feature} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{feature}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isLider ? (
          <section className="caseEpicGallery">
            <div className="container">
              <div className="editorialHeading" data-reveal>
                <div>
                  <span className="epicEyebrow">Evidencia física + digital</span>
                  <h2>El toque es solo <em>el comienzo.</em></h2>
                </div>
                <p>
                  Producto físico, experiencia para el asegurado y operación
                  administrativa conectados en un mismo ecosistema.
                </p>
              </div>
              <div className="caseEpicGalleryGrid">
                {liderMedia.map((item, index) => (
                  <figure className={`caseGalleryItem gallery-${index + 1}`} key={item.title} data-reveal>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes={index === 0 ? "(max-width: 760px) 100vw, 62vw" : "(max-width: 760px) 100vw, 38vw"}
                      />
                    </div>
                    <figcaption><strong>{item.title}</strong><p>{item.text}</p></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : project.image ? (
          <section className="caseEpicEvidence">
            <div className="container">
              <div className="caseEvidenceFrame" data-reveal>
                <div className="caseEvidenceBar">
                  <span>PRODUCT / LIVE INTERFACE</span>
                  <span>{project.status}</span>
                </div>
                <div className="caseEvidenceImage">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 1100px"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="caseEpicOutcome">
          <div className="container" data-reveal>
            <span className="epicEyebrow">Valor creado</span>
            <h2>
              {isLider
                ? "Servicios disponibles desde las llaves. Operación organizada desde una plataforma."
                : "Un proceso disperso convertido en una experiencia clara y preparada para evolucionar."}
            </h2>
          </div>
        </section>

        {related.length > 0 && (
          <section className="caseEpicRelated">
            <div className="container">
              <div className="caseRelatedHead">
                <span>Más experiencia en {project.sector}</span>
                <Link href="/portafolio">Ver todos →</Link>
              </div>
              <div className="caseRelatedGrid">
                {related.map((item) => (
                  <Link href={`/portafolio/${item.slug}`} key={item.slug} data-reveal>
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <strong>Explorar caso ↗</strong>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
