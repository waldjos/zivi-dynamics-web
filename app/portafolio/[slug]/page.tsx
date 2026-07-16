import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../lib/projects";

export function generateStaticParams(){ return projects.map(project=>({slug:project.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const project=projects.find(item=>item.slug===slug); if(!project)return{}; return{title:project.name,description:project.summary,alternates:{canonical:`/portafolio/${project.slug}`},openGraph:{title:`${project.name} | Zivi Dynamics`,description:project.summary,type:"article"}}; }

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=projects.find(item=>item.slug===slug); if(!project)notFound();
  const related=projects.filter(item=>item.slug!==project.slug&&item.sector===project.sector).slice(0,2);
  return <>
    <section className="case-hero"><div className="case-hero-grid"/><div className="container"><Link href="/portafolio" className="case-back">← Volver al portafolio</Link><div className="case-hero-layout"><div><span className="eyebrow">{project.category}</span><h1>{project.name}</h1><p>{project.summary}</p><div className="case-actions">{project.url&&<a href={project.url} className="btn" target="_blank" rel="noreferrer">Visitar proyecto ↗</a>}<Link href="/contacto" className="btn secondary">Solicitar solución similar</Link></div></div><div className="case-hero-visual"><span>{project.name.slice(0,1)}</span><i/><i/><div><small>Estado</small><strong>{project.status}</strong></div></div></div></div></section>
    <section className="case-content"><div className="container case-content-grid"><article><span className="eyebrow">El reto</span><h2>Una necesidad concreta de operación y experiencia.</h2><p>{project.challenge}</p></article><article><span className="eyebrow">La solución</span><h2>Tecnología diseñada alrededor del proceso.</h2><p>{project.solution}</p></article></div></section>
    <section className="case-features"><div className="container"><div className="portfolio-intro"><div><span className="eyebrow">Capacidades implementadas</span><h2>Componentes que sostienen la solución.</h2></div><p>El alcance se adaptó al contexto del proyecto y puede evolucionar con nuevas integraciones, automatizaciones y módulos.</p></div><div className="feature-case-grid">{project.features.map((feature,index)=><div key={feature}><span>{String(index+1).padStart(2,"0")}</span><strong>{feature}</strong></div>)}</div></div></section>
    <section className="case-result"><div className="container case-result-box"><div><span className="eyebrow">Valor generado</span><h2>Información, servicios y procesos reunidos en una experiencia coherente.</h2></div><p>La plataforma permite sustituir puntos de contacto dispersos por una solución organizada, accesible desde dispositivos modernos y preparada para acompañar la evolución de la organización.</p></div></section>
    {related.length>0&&<section className="portfolio-section related-section"><div className="container"><div className="portfolio-intro"><div><span className="eyebrow">Proyectos relacionados</span><h2>Más experiencia en {project.sector.toLowerCase()}.</h2></div></div><div className="related-grid">{related.map(item=><Link href={`/portafolio/${item.slug}`} className="related-card" key={item.slug}><span>{item.category}</span><h3>{item.name}</h3><p>{item.summary}</p><strong>Ver caso →</strong></Link>)}</div></div></section>}
    <section className="section"><div className="container cta"><div><span className="eyebrow">Conversemos</span><h2>¿Necesitas una solución con capacidades similares?</h2></div><Link href="/contacto" className="btn">Solicitar propuesta</Link></div></section>
  </>;
}
