import Link from "next/link";

const services=[
["📱","Aplicaciones móviles","Experiencias rápidas, intuitivas y adaptadas a Android, iOS y PWA."],
["🌐","Páginas y plataformas web","Sitios corporativos, portales, tiendas y sistemas conectados."],
["⚙️","Software empresarial","Herramientas para automatizar operaciones, usuarios, pagos y reportes."],
["🤖","Inteligencia artificial","Asistentes, automatizaciones e integraciones inteligentes."],
["📡","Tecnología NFC","Tarjetas, llaveros, habladores y experiencias digitales conectadas."],
["🛡️","Soporte y evolución","Mantenimiento, infraestructura, mejoras y acompañamiento continuo."]];
const projects=[
["HealthTech","Sociedad Venezolana de Urología","Presencia institucional, contenidos científicos y servicios para miembros."],
["Membresías","SoveuroApp","Colegiatura, pagos, eventos, tickets, QR y administración de afiliados."],
["Salud pública","ZoriApp","Gestión de jornadas masivas de despistaje de cáncer de próstata."],
["Consultorios","PaciGest Plus","Administración de pacientes, agendas y operación de consultorios."],
["NFC + seguros","Líder Seguros","Portal vehicular conectado a llaveros NFC y servicios de asistencia."],
["Gastronomía","MesaClick","Experiencia digital para restaurantes, mesas y atención comercial."]];

export default function Home(){return <>
<section className="hero"><div className="container heroGrid"><div><span className="eyebrow">Zivi Dynamics C.A. · Soluciones digitales</span><h1>Tecnología que <span className="gradient">conecta, automatiza y transforma.</span></h1><p className="lead">Desarrollamos aplicaciones, páginas web, sistemas empresariales, integraciones con inteligencia artificial y soluciones NFC adaptadas a cada organización.</p><div className="actions"><Link className="btn" href="/contacto">Solicitar cotización</Link><Link className="btn secondary" href="/portafolio">Explorar proyectos</Link></div></div><div className="visual"><span className="megaMark">Z</span></div></div></section>
<section className="section alt"><div className="container"><div className="sectionHead"><span className="eyebrow">Capacidades</span><h2>Un ecosistema tecnológico completo</h2><p className="lead">Combinamos estrategia, diseño y desarrollo para convertir procesos complejos en experiencias digitales simples.</p></div><div className="grid">{services.map(([i,t,d])=><article className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="section"><div className="container"><div className="sectionHead"><span className="eyebrow">Experiencia comprobable</span><h2>Proyectos creados para operar en el mundo real</h2><p className="lead">Nuestra experiencia abarca salud, sociedades profesionales, consultorios, seguros, movilidad, restaurantes y plataformas comerciales.</p></div><div className="grid">{projects.map(([tag,name,desc])=><Link href="/portafolio" className="card project" key={name}><span className="tag">{tag}</span><h3>{name}</h3><p>{desc}</p><strong>Ver portafolio →</strong></Link>)}</div></div></section>
<section className="section alt"><div className="container contentGrid"><div><span className="eyebrow">Especialización</span><h2>Amplia experiencia en tecnología para salud</h2><p className="lead">Hemos desarrollado soluciones para sociedades médicas, eventos científicos, membresías, jornadas de despistaje y gestión de consultorios.</p><div className="actions"><Link className="btn" href="/soluciones">Conocer soluciones</Link></div></div><div className="card"><h3>HealthTech Venezuela</h3><p>Afiliación, pagos, solvencias, eventos, historias clínicas, jornadas, estadísticas y comunicación con pacientes.</p><p>Diseñado para instituciones que necesitan seguridad, trazabilidad y facilidad de uso.</p></div></div></section>
<section className="section"><div className="container" style={{textAlign:"center"}}><span className="eyebrow">Conversemos</span><h2>¿Tienes una idea o un proceso que necesitas digitalizar?</h2><p className="lead" style={{margin:"auto"}}>Analizamos tu necesidad y proponemos una solución clara, escalable y alineada con tus objetivos.</p><div className="actions" style={{justifyContent:"center"}}><Link className="btn" href="/contacto">Iniciar un proyecto</Link><a className="btn secondary" href="https://wa.me/584127065848">Hablar por WhatsApp</a></div></div></section>
</>}
