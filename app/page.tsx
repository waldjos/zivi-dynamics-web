import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ExperienceLayer } from "./components/ExperienceLayer";
import { BrandLogo } from "./components/BrandLogo";
import { projects } from "./lib/projects";

const capabilities = [
  {
    index: "01",
    title: "Producto digital",
    text: "Definimos la experiencia, la arquitectura y el camino desde una necesidad hasta un producto que la gente puede usar.",
    tags: ["Estrategia", "UX/UI", "Prototipos"],
  },
  {
    index: "02",
    title: "Software y plataformas",
    text: "Construimos aplicaciones, sistemas empresariales y experiencias web preparadas para operar, medir y evolucionar.",
    tags: ["Apps", "Web", "Sistemas"],
  },
  {
    index: "03",
    title: "IA y automatización",
    text: "Conectamos datos, asistentes y flujos inteligentes para reducir tareas repetitivas y acelerar decisiones.",
    tags: ["Agentes", "Procesos", "Datos"],
  },
  {
    index: "04",
    title: "NFC y experiencias phygital",
    text: "Unimos productos físicos con servicios digitales: llaveros, tarjetas, stickers, portales y analítica.",
    tags: ["NFC", "QR", "Integraciones"],
  },
] as const;

const featuredSlugs = ["lider-seguros-nfc", "soveuro", "pacigest-plus", "mesaclick"];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const sectors = [...new Set(projects.map((project) => project.sector))];

export default function Home() {
  return (
    <>
      <ExperienceLayer />

      <section className="epicHero" data-signal-stage>
        <div className="epicHeroGrid" aria-hidden="true" />
        <div className="container epicHeroInner">
          <div className="epicHeroCopy" data-reveal>
            <div className="heroKicker">
              <span>Venezuela / LATAM</span>
              <i />
              <span>Product engineering studio</span>
            </div>
            <h1>
              Software que mueve
              <em>organizaciones reales.</em>
            </h1>
            <p>
              Diseñamos y desarrollamos productos digitales, automatización y
              experiencias NFC para empresas que necesitan operar mejor,
              conectar con sus clientes y crecer.
            </p>
            <div className="epicActions">
              <Link href="/portafolio" className="epicButton epicButtonPrimary">
                Explorar trabajo <span>↗</span>
              </Link>
              <Link href="/contacto" className="epicButton epicButtonGhost">
                Cuéntanos el reto
              </Link>
            </div>
          </div>

          <div className="heroSignalBoard" data-reveal aria-hidden="true">
            <div className="signalBoardTop">
              <span>ZIVI / OPERATING SYSTEM</span>
              <span className="signalLive"><i /> LIVE NETWORK</span>
            </div>
            <div className="signalTelemetry signalTelemetryLeft">
              <span>CAPACIDAD</span>
              <div><i style={{ "--level": "92%" } as CSSProperties} /><small>PRODUCT</small></div>
              <div><i style={{ "--level": "86%" } as CSSProperties} /><small>ENGINEERING</small></div>
              <div><i style={{ "--level": "78%" } as CSSProperties} /><small>AUTOMATION</small></div>
            </div>
            <div className="signalTelemetry signalTelemetryRight">
              <span>PULSO / 2026</span>
              <div className="signalWaveform">{Array.from({ length: 14 }).map((_, index) => <i key={index} />)}</div>
              <small>12.842 SIGNALS</small>
            </div>
            <div className="signalCore">
              <div className="signalSweep" />
              <div className="signalReticle"><i /><i /><i /><i /></div>
              <div className="signalLink signalLinkOne"><i /><i /><i /></div>
              <div className="signalLink signalLinkTwo"><i /><i /></div>
              <div className="signalLink signalLinkThree"><i /><i /><i /><i /></div>
              <div className="signalOrbit signalOrbitZero" />
              <div className="signalOrbit signalOrbitOne" />
              <div className="signalOrbit signalOrbitTwo" />
              <div className="signalOrbit signalOrbitThree" />
              <div className="signalBrand">
                <BrandLogo variant="compact" />
                <small>CORE / ACTIVE</small>
              </div>
              <span className="signalNode nodeOne"><i /><strong>APPS</strong><small>PRODUCTOS</small></span>
              <span className="signalNode nodeTwo"><i /><strong>NFC</strong><small>PHYGITAL</small></span>
              <span className="signalNode nodeThree"><i /><strong>IA</strong><small>AGENTES</small></span>
              <span className="signalNode nodeFour"><i /><strong>WEB</strong><small>PLATAFORMAS</small></span>
              <span className="signalCoordinate coordinateOne">08° 14&apos; 32&quot; N</span>
              <span className="signalCoordinate coordinateTwo">SYS / ZV-01</span>
            </div>
            <div className="signalBoardBottom">
              <div><span>ENTRADA</span><strong>Problema real</strong></div>
              <div><span>SISTEMA</span><strong>Estrategia + ingeniería</strong></div>
              <div><span>SALIDA</span><strong>Capacidad operativa ↑</strong></div>
            </div>
          </div>
        </div>
        <div className="heroDataRail">
          <div className="container">
            <span><strong>{projects.length}</strong> productos documentados</span>
            <span><strong>{sectors.length}</strong> sectores con experiencia</span>
            <span><strong>01</strong> socio para estrategia + ejecución</span>
            <span><strong>∞</strong> capacidad de evolución</span>
          </div>
        </div>
      </section>

      <section className="proofSection">
        <div className="container">
          <div className="editorialHeading" data-reveal>
            <div>
              <span className="epicEyebrow">Trabajo / 2026</span>
              <h2>No vendemos promesas.<br /><em>Mostramos sistemas.</em></h2>
            </div>
            <p>
              Plataformas que ya atienden miembros, organizan jornadas médicas,
              gestionan consultorios, conectan pólizas y transforman la
              experiencia en restaurantes.
            </p>
          </div>

          <div className="featuredWorkGrid">
            {featuredProjects.map((project, index) => (
              <Link
                href={`/portafolio/${project.slug}`}
                className={`featuredWorkCard work-${index + 1} accent-${project.accent}`}
                key={project.slug}
                data-reveal
              >
                <div className="featuredWorkMedia">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.name}
                      fill
                      sizes={index === 0 ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 38vw"}
                    />
                  )}
                  <div className="workMediaChrome">
                    <span>zivi / case-{String(index + 1).padStart(2, "0")}</span>
                    <i /><i /><i />
                  </div>
                </div>
                <div className="featuredWorkCopy">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <strong>Ver caso <span>↗</span></strong>
                </div>
              </Link>
            ))}
          </div>

          <div className="sectionFootLink" data-reveal>
            <span>Hay {projects.length - featuredProjects.length} casos adicionales</span>
            <Link href="/portafolio">Ver todo el portafolio <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="nfcFlagship">
        <div className="nfcFlagshipNoise" aria-hidden="true" />
        <div className="container nfcFlagshipGrid">
          <div className="nfcFlagshipCopy" data-reveal>
            <span className="epicEyebrow">Producto insignia / NFC</span>
            <h2>El mundo físico también puede tener interfaz.</h2>
            <p>
              Una tarjeta o un llavero no es el producto final. Diseñamos todo
              lo que ocurre después del toque: perfiles, pólizas, menús,
              catálogos, asistencia, pagos, analítica y automatizaciones.
            </p>
            <div className="nfcValueChain">
              <span>TOQUE</span><i>→</i><span>ACCIÓN</span><i>→</i>
              <span>DATO</span><i>→</i><span>RELACIÓN</span>
            </div>
            <Link href="/nfc" className="epicButton epicButtonLight">
              Descubrir Zivi NFC <span>↗</span>
            </Link>
          </div>

          <div className="nfcEvidence" data-reveal>
            <div className="nfcEvidenceMain">
              <Image
                src="/media/lider/lider-keychain-car-hq.png"
                alt="Llavero NFC implementado para Líder de Seguros"
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
                quality={96}
              />
              <span>Implementación real / Seguros</span>
            </div>
            <div className="nfcEvidenceMini">
              <Image
                src="/media/lider/lider-keychain-package.webp"
                alt="Entrega de llavero NFC con respaldo QR"
                fill
                sizes="240px"
              />
              <span>NFC + QR</span>
            </div>
            <div className="nfcTapBadge">
              <i /><i /><i />
              <strong>TAP</strong>
              <span>sin instalar apps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilitySection">
        <div className="container">
          <div className="editorialHeading capabilityHeading" data-reveal>
            <div>
              <span className="epicEyebrow">Capacidades</span>
              <h2>Una empresa.<br /><em>Todo el sistema.</em></h2>
            </div>
            <p>
              Las grandes transformaciones no caben en una sola disciplina.
              Integramos producto, diseño, ingeniería y operación para evitar
              soluciones desconectadas.
            </p>
          </div>
          <div className="capabilityList">
            {capabilities.map((capability) => (
              <article key={capability.index} data-reveal>
                <span>{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <div>{capability.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="visionStatement">
        <div className="container visionStatementGrid">
          <div data-reveal>
            <span className="epicEyebrow">Nacidos en Venezuela</span>
            <blockquote>
              “La tecnología debe elevar la capacidad de nuestras empresas,
              instituciones y comunidades para competir con el mundo.”
            </blockquote>
          </div>
          <div className="founderCard" data-reveal>
            <Image
              src="/team/joswald-v2.webp"
              alt="Joswald Alejandro López Luna, CEO y fundador de Zivi Dynamics"
              width={500}
              height={625}
              sizes="(max-width: 760px) 100vw, 360px"
            />
            <div>
              <strong>Joswald Alejandro López Luna</strong>
              <span>CEO & Fundador</span>
              <Link href="/nosotros">Conocer la visión →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="epicContact">
        <div className="container epicContactGrid" data-reveal>
          <div>
            <span className="epicEyebrow">El próximo sistema</span>
            <h2>¿Qué necesita moverse en tu empresa?</h2>
          </div>
          <div>
            <p>
              Cuéntanos el proceso, el problema o la oportunidad. Nosotros
              trazamos el producto que puede transformarlo.
            </p>
            <div className="epicActions">
              <a className="epicButton epicButtonPrimary" href="https://wa.me/584127065848?text=Hola%20Zivi%20Dynamics,%20quiero%20conversar%20sobre%20un%20proyecto.">
                Hablar por WhatsApp <span>↗</span>
              </a>
              <Link className="epicButton epicButtonGhost" href="/contacto">
                Solicitar diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
