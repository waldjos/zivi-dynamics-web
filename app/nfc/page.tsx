import type { Metadata } from "next";
import Link from "next/link";
import "./nfc.css";

export const metadata: Metadata = {
  title: "Tecnología NFC para empresas en Venezuela",
  description: "Conoce cómo funciona NFC y descubre tarjetas, llaveros, stickers y habladores NFC conectados con experiencias digitales.",
  alternates: { canonical: "/nfc" },
};

type IconName = "phone" | "tap" | "link" | "chart" | "card" | "key" | "sticker" | "store" | "business" | "restaurant" | "car" | "event" | "wifi" | "marketing";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 18h4"/></>,
    tap: <><path d="M8 12a4 4 0 0 1 4-4"/><path d="M5 12a7 7 0 0 1 7-7"/><path d="M12 12v8"/><path d="m12 15 3-2 4 3-2 6h-7"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,
    chart: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8"/><path d="m15 8 3 3"/><path d="m17 6 3 3"/></>,
    sticker: <><path d="M4 4h12l4 4v12H4z"/><path d="M16 4v4h4"/><path d="M8 13a4 4 0 0 1 4-4"/><path d="M8 16a7 7 0 0 1 7-7"/></>,
    store: <><path d="M3 9h18l-2-5H5z"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></>,
    business: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M9 21v-5h6v5"/></>,
    restaurant: <><path d="M6 2v8M3 2v5a3 3 0 0 0 6 0V2M6 10v12"/><path d="M16 2v20M16 2c4 3 4 7 0 10"/></>,
    car: <><path d="m5 17-2-2v-5l3-5h12l3 5v5l-2 2"/><path d="M5 17v3M19 17v3M4 13h16"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></>,
    event: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="m9 16 2 2 4-4"/></>,
    wifi: <><path d="M5 12a10 10 0 0 1 14 0"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/></>,
    marketing: <><path d="m3 11 15-6v14L3 13z"/><path d="M7 14v6h4"/><path d="M21 9v6"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const steps = [
  ["01", "Programamos la experiencia", "Asociamos el chip a un perfil, catálogo, menú, documento, formulario, Wi-Fi, WhatsApp o flujo empresarial.", "link"],
  ["02", "El usuario acerca su teléfono", "El equipo detecta la etiqueta NFC a pocos centímetros y muestra una notificación de forma inmediata.", "tap"],
  ["03", "Se abre una acción útil", "La persona accede a la información o servicio configurado sin escribir direcciones ni buscar manualmente.", "phone"],
  ["04", "Actualizas y mides", "El contenido digital puede cambiar sin reemplazar el producto físico y puede conectarse con analítica.", "chart"],
] as const;

const catalog = [
  { title: "Tarjetas NFC", image: "/nfc/card.svg", icon: "card" as IconName, summary: "Una tarjeta inteligente para compartir tu identidad profesional o empresarial con un solo toque.", uses: ["Perfil digital y datos de contacto", "Portafolio, catálogo o página web", "WhatsApp, Instagram y ubicación", "Membresías y credenciales"], ideal: "Ejecutivos, médicos, asesores, vendedores y empresas de servicios." },
  { title: "Llaveros NFC", image: "/nfc/keychain.svg", icon: "key" as IconName, summary: "Un formato práctico y resistente que acompaña al usuario y activa servicios importantes.", uses: ["Asistencia y seguros vehiculares", "Datos y documentos del vehículo", "Control de acceso", "Promociones y fidelización"], ideal: "Aseguradoras, concesionarios, flotillas, clubes y condominios." },
  { title: "Stickers NFC", image: "/nfc/sticker.svg", icon: "sticker" as IconName, summary: "Etiquetas adhesivas que convierten superficies y productos en puntos de interacción digital.", uses: ["Wi-Fi para clientes", "Reseñas de Google", "Catálogos y promociones", "Formularios y soporte"], ideal: "Vitrinas, empaques, mostradores, cajas, oficinas y espacios comerciales." },
  { title: "Habladores NFC", image: "/nfc/talker.svg", icon: "store" as IconName, summary: "Piezas de mesa o mostrador que indican al cliente dónde tocar y qué experiencia recibirá.", uses: ["Menú digital", "Pedidos y pagos", "Encuestas y reseñas", "Promociones por temporada"], ideal: "Restaurantes, cafés, tiendas, ferias, hoteles y eventos." },
];

const useCases = [
  ["Negocios y ventas", "Comparte catálogo, WhatsApp, ubicación, ficha de producto o página de pago.", "business"],
  ["Restaurantes y comercios", "Activa menús, promociones, reseñas, Wi-Fi y atención desde cada mesa.", "restaurant"],
  ["Seguros y movilidad", "Conecta pólizas, asistencia vial, documentos y recordatorios mediante llaveros.", "car"],
  ["Eventos e instituciones", "Digitaliza acreditaciones, agendas, formularios y credenciales inteligentes.", "event"],
  ["Oficinas y atención", "Simplifica acceso a Wi-Fi, directorios, soporte y onboarding de visitantes.", "wifi"],
  ["Marketing interactivo", "Crea campañas físicas que llevan a promociones, formularios y captación de clientes.", "marketing"],
] as const;

const faqs = [
  ["¿Qué necesita el usuario?", "Un teléfono compatible con NFC y la función activada. La lectura se realiza acercando la zona NFC del teléfono al producto."],
  ["¿Necesita instalar una aplicación?", "Normalmente no. La experiencia puede abrirse directamente en el navegador, WhatsApp, Google Maps o el servicio configurado."],
  ["¿Puede cambiarse la información después?", "Sí. Podemos utilizar un enlace administrable para actualizar contenido, promociones o datos sin reemplazar el producto físico."],
  ["¿Cuál es la diferencia entre NFC y QR?", "El QR exige abrir la cámara y enfocar. NFC permite acercar el teléfono. Ambos pueden combinarse para ofrecer máxima compatibilidad."],
  ["¿Sirve para empresas venezolanas?", "Sí. Es útil para comercios, restaurantes, aseguradoras, profesionales, eventos, inmobiliarias, clínicas, retail y empresas de servicios."],
];

export default function NfcPage() {
  return <>
    <section className="pageHero nfcHero"><div className="container nfcHeroGrid"><div><span className="eyebrow">Tecnología NFC en Venezuela</span><h1>Productos físicos que abren experiencias digitales reales.</h1><p className="lead">Diseñamos la pieza NFC, la plataforma que se activa y la lógica de negocio detrás. Convierte una tarjeta, llavero, sticker o hablador en una herramienta para vender, informar, automatizar y fidelizar.</p><div className="actions"><Link href="/contacto" className="btn">Solicitar solución NFC →</Link><a href="https://wa.me/584127065848" className="btn secondary">Hablar por WhatsApp</a></div></div><div className="nfcHeroVisual"><img src="/nfc/hero-showcase.svg" alt="Catálogo de tarjetas, llaveros, stickers y habladores NFC" /></div></div></section>

    <section className="nfcSection"><div className="container nfcIntro"><div><span className="eyebrow">¿Qué es NFC?</span><h2>La forma más sencilla de conectar un objeto con un servicio digital.</h2><p>NFC significa <strong>Near Field Communication</strong>. Es una tecnología inalámbrica de corto alcance que permite que un teléfono lea información almacenada en una tarjeta, etiqueta, llavero u otro objeto compatible.</p><p>Al acercar el teléfono, el usuario puede abrir un perfil, catálogo, menú, formulario, ubicación, documento o canal de atención en segundos.</p></div><div className="nfcBenefits"><h3>¿Para qué sirve?</h3>{["Reduce pasos para contactar, comprar o consultar.","Moderniza la experiencia del cliente.","Permite cambiar el contenido sin reimprimir.","Conecta productos físicos con portales y automatizaciones.","Ayuda a medir interacciones y campañas.","Funciona junto con QR para ampliar compatibilidad."].map(item=><div key={item}><span>✓</span>{item}</div>)}</div></div></section>

    <section className="nfcSection nfcAlt"><div className="container"><div className="nfcHeading"><span className="eyebrow">Cómo funciona</span><h2>Del toque a una acción útil en cuatro pasos.</h2></div><div className="nfcSteps">{steps.map(([number,title,text,icon])=><article key={number}><span className="nfcNumber">{number}</span><div className="nfcIcon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="nfcSection"><div className="container nfcMotionGrid"><div><span className="eyebrow">Demostración animada</span><h2>Acerca, detecta y abre.</h2><p>Esta simulación muestra la interacción típica: el usuario acerca el teléfono, el dispositivo detecta el chip y abre una experiencia web diseñada para la empresa.</p><ul><li>No necesita escribir direcciones.</li><li>Puede abrirse en el navegador o una aplicación compatible.</li><li>La experiencia puede conectarse con WhatsApp, catálogos y sistemas internos.</li></ul></div><div className="nfcMotion" role="img" aria-label="Demostración animada de una tarjeta NFC acercándose a un teléfono"><div className="motionPhone"><span>Experiencia NFC</span><strong>Contenido detectado</strong><small>Perfil · Menú · WhatsApp</small><b>Abrir</b></div><div className="motionCard"><i/>Zivi NFC<small>Toca aquí</small></div><div className="wave wave1"/><div className="wave wave2"/><div className="wave wave3"/></div></div></section>

    <section className="nfcSection nfcAlt"><div className="container"><div className="nfcHeading"><span className="eyebrow">Catálogo NFC</span><h2>Productos que puedes implementar en Venezuela.</h2><p>La personalización visual, el contenido digital y la configuración se adaptan a cada proyecto.</p></div><div className="nfcCatalog">{catalog.map(product=><article key={product.title}><div className="nfcProductMedia"><img src={product.image} alt={product.title}/></div><div className="nfcProductBody"><div className="nfcProductTitle"><Icon name={product.icon}/><h3>{product.title}</h3></div><p>{product.summary}</p><ul>{product.uses.map(use=><li key={use}>{use}</li>)}</ul><strong>Ideal para: {product.ideal}</strong><Link href="/contacto">Cotizar este producto →</Link></div></article>)}</div></div></section>

    <section className="nfcSection"><div className="container"><div className="nfcHeading"><span className="eyebrow">Aplicaciones reales</span><h2>¿Cómo puede utilizar NFC tu empresa?</h2></div><div className="nfcUses">{useCases.map(([title,text,icon])=><article key={title}><div className="nfcIcon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="nfcSection nfcAlt"><div className="container nfcFaq"><div className="nfcHeading"><span className="eyebrow">Preguntas frecuentes</span><h2>Lo que debes saber antes de implementar NFC.</h2></div>{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

    <section className="section"><div className="container cta"><div><span className="eyebrow">Proyecto NFC</span><h2>Diseñemos el producto físico y la plataforma que lo hace útil.</h2><p>Podemos desarrollar la identidad, el portal, el catálogo, la automatización y la configuración NFC completa.</p></div><div className="actions"><Link href="/contacto" className="btn">Solicitar cotización NFC</Link><Link href="/portafolio" className="btn secondary">Ver proyectos</Link></div></div></section>
  </>;
}