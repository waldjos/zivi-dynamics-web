import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name:"Zivi Dynamics C.A.", short_name:"Zivi", description:"Tecnología que conecta, automatiza y transforma.", start_url:"/", display:"standalone", background_color:"#050914", theme_color:"#050914", lang:"es-VE", icons:[{src:"/zivi-app-icon.svg",sizes:"any",type:"image/svg+xml"}] };
}
