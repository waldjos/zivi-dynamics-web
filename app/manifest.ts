import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name:"Zivi Dynamics C.A.", short_name:"Zivi", description:"Software que mueve organizaciones. NFC que conecta el mundo físico.", start_url:"/", display:"standalone", background_color:"#080808", theme_color:"#080808", lang:"es-VE", icons:[{src:"/brand/zivi-app-icon-real-v2.png",sizes:"1024x1024",type:"image/png",purpose:"any"}] };
}
