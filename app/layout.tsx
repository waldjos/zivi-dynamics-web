import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./phase1.css";
import "./phase2.css";
import "./phase3.css";
import { Header } from "./components/Header";
import { MobileActions } from "./components/MobileActions";

export const viewport: Viewport = { themeColor: "#050914", colorScheme: "dark" };

export const metadata: Metadata = {
  metadataBase: new URL("https://zivi.com"),
  title: { default: "Zivi Dynamics C.A. | Desarrollo de Software en Venezuela", template: "%s | Zivi Dynamics" },
  description: "Desarrollo de aplicaciones móviles, plataformas web, sistemas empresariales, inteligencia artificial y tecnología NFC para empresas y organizaciones en Venezuela.",
  keywords: ["desarrollo de software Venezuela", "aplicaciones móviles Venezuela", "páginas web corporativas", "sistemas empresariales", "inteligencia artificial para empresas", "tecnología NFC Venezuela"],
  authors: [{ name: "Zivi Dynamics C.A.", url: "https://zivi.com" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_VE", url: "https://zivi.com", siteName: "Zivi Dynamics C.A.", title: "Zivi Dynamics C.A. — Soluciones Digitales", description: "Tecnología que conecta, automatiza y transforma.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zivi Dynamics C.A." }] },
  twitter: { card: "summary_large_image", title: "Zivi Dynamics C.A.", description: "Tecnología que conecta, automatiza y transforma.", images: ["/opengraph-image"] },
  icons: { icon: "/zivi-app-icon.svg", apple: "/zivi-app-icon.svg" },
  manifest: "/manifest.webmanifest",
};

const organization = {
  "@context":"https://schema.org", "@type":["Organization","ProfessionalService"], name:"Zivi Dynamics C.A.", legalName:"Zivi Dynamics C.A.", taxID:"J-508175123", url:"https://zivi.com", logo:"https://zivi.com/zivi-logo-light.svg", email:"ziviagency@gmail.com", telephone:"+58 412 706 5848",
  address:{"@type":"PostalAddress",addressLocality:"San Antonio de los Altos",addressRegion:"Miranda",addressCountry:"VE"}, sameAs:["https://www.instagram.com/zividynamics"], founder:{"@type":"Person",name:"Joswald Alejandro López Luna",jobTitle:"CEO y Fundador"}, areaServed:["Venezuela","Latinoamérica"], serviceType:["Desarrollo de software","Aplicaciones móviles","Desarrollo web","Inteligencia artificial","Tecnología NFC"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>
    <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
    <Header />
    <main id="contenido">{children}</main>
    <footer className="footer"><div className="container footerGrid"><div><Link className="brand" href="/"><img src="/zivi-logo-light.svg" alt="Zivi Dynamics C.A." /></Link><p>Tecnología que conecta, automatiza y transforma.</p><p>RIF: J-508175123</p></div><div><h4>Explorar</h4><Link href="/servicios">Servicios</Link><Link href="/portafolio">Portafolio</Link><Link href="/recursos">Recursos</Link><Link href="/nosotros">Nosotros</Link></div><div><h4>Contacto</h4><a href="https://wa.me/584127065848">+58 412 706 5848</a><a href="mailto:ziviagency@gmail.com">ziviagency@gmail.com</a><a href="https://instagram.com/zividynamics">@zividynamics</a><p>San Antonio de los Altos, Miranda, Venezuela</p><Link href="/politica-de-privacidad">Privacidad</Link><Link href="/terminos-y-condiciones">Términos</Link></div></div></footer>
    <MobileActions />
    <Analytics />
    <SpeedInsights />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
  </body></html>;
}
