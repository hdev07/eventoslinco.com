export interface CotizacionFormData {
  nombre: string;
  empresa: string;
  servicios: string[];
  ciudad: string;
  telefono: string;
  fechaEvento: string;
  comentarios: string;
  paquete?: string;
}

export type ContactFormErrors = Partial<
  Record<keyof Pick<CotizacionFormData, "nombre" | "ciudad" | "telefono" | "servicios">, string>
>;

export interface CotizacionExpressData {
  tipoEvento: string;
  fecha: string;
  ciudad: string;
  invitados: string;
  nombre: string;
  contacto: string;
}
