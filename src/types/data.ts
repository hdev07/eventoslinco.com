export interface Paquete {
  id: number;
  nombre: string;
  slug: string;
  paraQuien: string;
  asistentes: string;
  duracion: string;
  escalaProduccion: string;
  notaInversion: string;
  incluye: string;
  descripcionCorta: string;
}

export interface EscalaEvento {
  id: string;
  etiqueta: string;
  rango: string;
  produccion: string;
}

export interface Servicio {
  nombre: string;
  slug: string;
  descripcion: string;
}

export interface CategoriaServicio {
  id: string;
  nombre: string;
  servicios: Servicio[];
}

export interface MetricaPruebaSocial {
  id: string;
  valor: number;
  prefijo?: string;
  sufijo?: string;
  etiqueta: string;
}

export interface Testimonio {
  id: string;
  publicado: boolean;
  nombre: string;
  cargo: string;
  empresa: string;
  cita: string;
  evento: string;
  ciudad: string;
  fecha: string;
}

export interface TrustSignal {
  icon: string;
  titulo: string;
  descripcion: string;
}

export interface FaqItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface AudienciaBloque {
  id: string;
  icon: string;
  titulo: string;
  lineas: string[];
  enlace: string;
  enlaceTexto: string;
}
