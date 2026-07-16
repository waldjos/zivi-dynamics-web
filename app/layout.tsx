import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zivi.com"),
  title: { default: "Zivi Dynamics C.A. | Soluciones Digitales", template: "%s | Zivi Dynamics" },
  description: "Aplicaciones móviles, páginas web, sistemas, inteligencia artificial y tecnología NFC para empresas y organizaciones.",
};

const nav = [
  ["/servicios", "Servicios"], ["/soluciones", "Soluciones"], ["/portafolio", "Portafolio"],
  ["/nfc", "NFC"], ["/inteligencia-artificial", "IA"], ["/nosotros", "Nosotros"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="container nav">
            <Link className="brand" href="/"><span className="mark">Z</span><span><b>Zivi</b><small>Dynamics C.A.</small></span></Link>
            <nav>{nav.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
            <Link className="btn small" href="/contacto">Solicitar cotización</Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footerGrid">
            <div><div className="brand"><span className="mark">Z</span><span><b>Zivi</b><small>Dynamics C.A.</small></span></div><p>Tecnología que conecta, automatiza y transforma.</p><p>RIF: J-508175123</p></div>
            <div><h4>Contacto</h4><a href="https://wa.me/584127065848">+58 412 706 5848</a><a href="mailto:ziviagency@gmail.com">ziviagency@gmail.com</a><a href="https://instagram.com/zividynamics">@zividynamics</a></div>
            <div><h4>Ubicación</h4><p>San Antonio de los Altos, Miranda, Venezuela</p><Link href="/politica-de-privacidad">Privacidad</Link><Link href="/terminos-y-condiciones">Términos</Link></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
