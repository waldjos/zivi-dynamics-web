"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"fallback"|"error">("idle");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/contacto", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No pudimos procesar la solicitud.");
      if (result.delivered) { setState("sent"); form.reset(); }
      else { setFallbackUrl(result.whatsappUrl); setState("fallback"); }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Ocurrió un error inesperado.");
      setState("error");
    }
  }

  return <form className="lead-form" onSubmit={submit} noValidate>
    <div className="form-intro"><span>Solicitud de proyecto</span><h2>Cuéntanos qué necesitas transformar.</h2><p>Estos datos nos permiten preparar una primera conversación más útil y enfocada.</p></div>
    <div className="form-row"><label>Nombre completo<input name="name" required autoComplete="name" placeholder="Tu nombre y apellido"/></label><label>Empresa<input name="company" autoComplete="organization" placeholder="Nombre de la organización"/></label></div>
    <div className="form-row"><label>Correo electrónico<input name="email" type="email" required autoComplete="email" placeholder="correo@empresa.com"/></label><label>Teléfono<input name="phone" required autoComplete="tel" placeholder="+58 ..."/></label></div>
    <div className="form-row"><label>Tipo de proyecto<select name="service" required defaultValue="Aplicación o sistema"><option>Aplicación o sistema</option><option>Página o plataforma web</option><option>Inteligencia artificial</option><option>Tecnología NFC</option><option>Automatización empresarial</option><option>Soporte y evolución</option><option>Otro</option></select></label><label>Presupuesto estimado<select name="budget" defaultValue="Por definir"><option>Por definir</option><option>Menos de USD 1.000</option><option>USD 1.000 – 3.000</option><option>USD 3.000 – 8.000</option><option>Más de USD 8.000</option></select></label></div>
    <label>Fecha estimada de inicio<input name="startDate" type="month"/></label>
    <label>Descripción del proyecto<textarea name="message" required minLength={20} rows={6} placeholder="Describe el problema, el proceso actual, los usuarios y el resultado que esperas obtener."/></label>
    <label className="form-honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <label className="form-consent"><input type="checkbox" required/><span>Acepto que Zivi Dynamics utilice estos datos para responder mi solicitud, conforme a la política de privacidad.</span></label>
    <button className="btn form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Procesando solicitud…" : "Enviar solicitud"}</button>
    {state === "sent" && <p className="form-status success">✓ Solicitud enviada. Te contactaremos utilizando los datos suministrados.</p>}
    {state === "fallback" && <div className="form-fallback"><p>El correo automático todavía no está activado. Tu solicitud quedó preparada para enviarse por WhatsApp.</p><a className="btn secondary" href={fallbackUrl} target="_blank" rel="noreferrer">Continuar en WhatsApp</a></div>}
    {state === "error" && <p className="form-status error">{message}</p>}
  </form>;
}
