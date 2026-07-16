import type { MetadataRoute } from "next";

const projectSlugs = ["soveuro","soveuroapp","sociedad-venezolana-cardiologia","zoriapp","pacigest-plus","citaclick","mesaclick","lider-seguros-nfc","elite-links","guia-kupai"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zivi.com";
  const pages = ["","/servicios","/soluciones","/portafolio","/nfc","/inteligencia-artificial","/nosotros","/contacto","/politica-de-privacidad","/terminos-y-condiciones"];
  return [...pages.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:path===""?1:path==="/contacto"?0.9:0.8})),...projectSlugs.map(slug=>({url:`${base}/portafolio/${slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.7}))];
}
