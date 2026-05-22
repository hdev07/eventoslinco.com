import marca from "@/data/marca.json";

/** Enlace tel: internacional para México (+52). */
export function telHref(telefono = marca.contacto.telefono): string {
  const digits = telefono.replace(/\D/g, "");
  return `tel:+52${digits}`;
}
