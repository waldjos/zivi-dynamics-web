import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 2000) => typeof value === "string" ? value.trim().slice(0, max) : "";

const WINDOW_MS = 60000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) for (const [key, times] of hits) if (!times.some((time) => now - time < WINDOW_MS)) hits.delete(key);
  return recent.length > MAX_HITS;
}

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "desconocida";
  if (rateLimited(ip)) return NextResponse.json({ error: "Demasiadas solicitudes seguidas. Espera un minuto e inténtalo de nuevo." }, { status: 429 });

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
  return NextResponse.json({ ok: true, whatsappUrl: `https://wa.me/584127065848?text=${encodeURIComponent(text)}` });
}
