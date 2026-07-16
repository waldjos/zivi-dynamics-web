import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zivi Dynamics C.A. — Tecnología que conecta, automatiza y transforma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"70px",color:"white",background:"radial-gradient(circle at 15% 15%, #06395b 0, transparent 34%), radial-gradient(circle at 90% 15%, #3a0c45 0, transparent 32%), #050914",fontFamily:"Arial"}}>
    <div style={{display:"flex",alignItems:"center",gap:"34px"}}><div style={{width:"225px",height:"225px",borderRadius:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"150px",fontWeight:900,background:"linear-gradient(145deg,#12c9ff,#ffbd2e 51%,#ff2f92)",boxShadow:"0 0 70px rgba(73,109,255,.35)"}}>Z</div><div style={{display:"flex",flexDirection:"column"}}><div style={{fontSize:"78px",fontWeight:800,letterSpacing:"-4px"}}>Zivi</div><div style={{fontSize:"34px",letterSpacing:"6px"}}>DYNAMICS C.A.</div><div style={{fontSize:"22px",letterSpacing:"9px",color:"#80d9ff",marginTop:"18px"}}>SOLUCIONES DIGITALES</div></div></div>
    <div style={{width:"380px",display:"flex",flexDirection:"column",gap:"22px"}}><div style={{fontSize:"50px",lineHeight:1.05,fontWeight:800}}>Tecnología que conecta, automatiza y transforma.</div><div style={{fontSize:"23px",lineHeight:1.4,color:"#b9c4d8"}}>Aplicaciones · Web · Sistemas · IA · NFC</div><div style={{fontSize:"20px",color:"#16c7ff"}}>zivi.com · @zividynamics</div></div>
  </div>, size);
}
