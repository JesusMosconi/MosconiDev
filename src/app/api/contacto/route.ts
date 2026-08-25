import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escaparHtml(valor: string) {
  return valor
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
    }

    const { nombre, email, descripcion } = body as Record<string, unknown>;

    if (
      typeof nombre !== "string" || !nombre.trim() ||
      typeof email !== "string" || !email.trim() ||
      typeof descripcion !== "string" || !descripcion.trim()
    ) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "El email no tiene un formato válido." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const nombreSeguro = escaparHtml(nombre.trim());
    const emailSeguro = escaparHtml(email.trim());
    const descripcionSegura = escaparHtml(descripcion.trim()).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      // Dominio de pruebas de Resend. Reemplazar por uno propio verificado,
      // por ejemplo contacto@mosconidev.com, al verificarlo en el panel de Resend.
      from: "MosconiDev <onboarding@resend.dev>",
      to: "contacto.mosconidev@gmail.com",
      replyTo: email.trim(),
      subject: `Nuevo contacto desde portfolio — ${nombre.trim()}`,
      html: `<h1>Nuevo contacto desde el portfolio</h1><p><strong>Nombre:</strong> ${nombreSeguro}</p><p><strong>Email:</strong> ${emailSeguro}</p><p><strong>Descripción:</strong><br />${descripcionSegura}</p>`,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
