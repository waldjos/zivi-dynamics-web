import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 2000) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try { payload = await request.json(); }
  catch { return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 }); }

  if (clean(payload.website)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(payload.name, 120), company: clean(payload.company, 160), email: clean(payload.email, 180), phone: clean(payload.phone, 80),
    service: clean(payload.service, 120), budget: clean(payload.budget, 80), startDate: clean(payload.startDate, 80), message: clean(payload.message, 3000),
  };
  if (!data.name || !emailPattern.test(data.email) || !data.phone || !data.service || data.message.length < 20) {
    return NextResponse.json({ error: "Revisa los campos obligatorios y describe el proyecto con mayor detalle." }, { status: 422 });
  }

  const text = ["Hola Zivi Dynamics, deseo solicitar una cotización.","",`Nombre: ${data.name}`,`Empresa: ${data.company || "No indicada"}`,`Correo: ${data.email}`,`Teléfono: ${data.phone}`,`Tipo de proyecto: ${data.service}`,`Presupuesto: ${data.budget || "Por definir"}`,`Inicio estimado: ${data.startDate || "Por definir"}`,`Descripción: ${data.message}`].join("\n");
  const whatsappUrl = `https://wa.me/584127065848?text=${encodeURIComponent(text)}`;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: true, delivered: false, whatsappUrl });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "Zivi Web <onboarding@resend.dev>", to: [process.env.CONTACT_TO_EMAIL || "ziviagency@gmail.com"], reply_to: data.email, subject: `Nueva solicitud web: ${data.service} — ${data.name}`, text }),
  });
  return NextResponse.json({ ok: true, delivered: response.ok, whatsappUrl });
}
