import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zivi-dynamics-web.vercel.app"),
  title: { default: "Zivi Dynamics C.A. | Soluciones Digitales", template: "%s | Zivi Dynamics" },
  description: "Aplicaciones móviles, páginas web, sistemas empresariales, inteligencia artificial y tecnología NFC para empresas y organizaciones.",
  openGraph: { title: "Zivi Dynamics C.A.", description: "Tecnología que conecta, automatiza y transforma.", images: ["/zivi-app-icon.svg"] },
  icons: { icon: "/zivi-app-icon.svg", apple: "/zivi-app-icon.svg" }
};

const nav=[["/","Inicio"],["/servicios","Servicios"],["/soluciones","Soluciones"],["/portafolio","Portafolio"],["/nfc","NFC"],["/inteligencia-artificial","IA"],["/nosotros","Nosotros"],["/contacto","Contacto"]];

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="es"><body>
  <header className="header"><div className="container nav">
   <Link className="brand" href="/"><img src="/zivi-logo-light.svg" alt="Zivi Dynamics C.A."/></Link>
   <nav>{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
   <Link className="btn small" href="/contacto">Solicitar cotización</Link>
  </div></header>
  <main>{children}</main>
  <footer className="footer"><div className="footerGlow"/><div className="container footerGrid">
   <div className="footerBrand"><img src="/zivi-logo-light.svg" alt="Zivi Dynamics C.A."/><p>Soluciones digitales inteligentes para organizaciones que quieren automatizar, crecer y competir con estándares internacionales.</p><span>RIF: J-508175123</span></div>
   <div><h4>Explorar</h4><Link href="/servicios">Servicios</Link><Link href="/soluciones">Soluciones</Link><Link href="/portafolio">Portafolio</Link><Link href="/nosotros">Nosotros</Link></div>
   <div><h4>Contacto</h4><a href="https://wa.me/584127065848">+58 412 706 5848</a><a href="mailto:ziviagency@gmail.com">ziviagency@gmail.com</a><a href="https://instagram.com/zividynamics">@zividynamics</a><p>San Antonio de los Altos, Miranda, Venezuela</p></div>
  </div><div className="container footerBottom"><span>© 2026 Zivi Dynamics C.A.</span><div><Link href="/politica-de-privacidad">Privacidad</Link><Link href="/terminos-y-condiciones">Términos</Link></div></div></footer>
 </body></html>
}
