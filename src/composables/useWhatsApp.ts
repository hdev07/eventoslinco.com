import type { CotizacionExpressData, CotizacionFormData } from "@/types/contact";

const DEFAULT_NUMBER = "525568671815";
const DEFAULT_MESSAGE = "Hola, me interesa cotizar un evento con LINCO.";

export function useWhatsApp() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_NUMBER;

  function buildUrl(message = DEFAULT_MESSAGE) {
    const params = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${number}${params}`;
  }

  function buildContactMessage(data: CotizacionFormData): string {
    const lines = [
      "Hola, me gustaría cotizar un evento con LINCO.",
      "",
      `*Nombre:* ${data.nombre.trim()}`,
    ];

    if (data.empresa.trim()) {
      lines.push(`*Empresa:* ${data.empresa.trim()}`);
    }

    lines.push(`*Servicios de interés:* ${data.servicios.join(", ")}`);
    lines.push(`*Ciudad:* ${data.ciudad.trim()}`);
    lines.push(`*Teléfono / WhatsApp:* ${data.telefono.trim()}`);

    if (data.fechaEvento) {
      lines.push(`*Fecha del evento:* ${data.fechaEvento}`);
    }

    if (data.paquete) {
      lines.push(`*Paquete de referencia:* ${data.paquete}`);
    }

    if (data.comentarios.trim()) {
      lines.push("", `*Comentarios:*`, data.comentarios.trim());
    }

    return lines.join("\n");
  }

  function buildExpressMessage(data: CotizacionExpressData): string {
    const invitadosLabel =
      data.invitados === "menos-50"
        ? "Menos de 50"
        : data.invitados === "50-150"
          ? "50 – 150"
          : data.invitados === "150-300"
            ? "150 – 300"
            : data.invitados === "300-mas"
              ? "Más de 300"
              : data.invitados;

    const lines = [
      "Hola, quiero cotizar mi evento con LINCO (cotización express).",
      "",
      `*Tipo de evento:* ${data.tipoEvento}`,
      `*Fecha aproximada:* ${data.fecha || "Por definir"}`,
      `*Ciudad:* ${data.ciudad}`,
      `*Invitados:* ${invitadosLabel}`,
      `*Nombre:* ${data.nombre.trim()}`,
      `*Contacto:* ${data.contacto.trim()}`,
    ];

    return lines.join("\n");
  }

  function openContactWhatsApp(data: CotizacionFormData) {
    const url = buildUrl(buildContactMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openExpressWhatsApp(data: CotizacionExpressData) {
    const url = buildUrl(buildExpressMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return {
    number,
    defaultMessage: DEFAULT_MESSAGE,
    url: buildUrl(),
    buildUrl,
    buildContactMessage,
    buildExpressMessage,
    openContactWhatsApp,
    openExpressWhatsApp,
  };
}
