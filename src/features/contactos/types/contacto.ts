export interface CrearContactoRequest {
    idInmueble: number | null;

    nombre: string;

    telefono: string;

    correo: string;

    mensaje: string;
}

export interface Contacto {
    id: number;

    idInmueble: number | null;

    tituloInmueble: string | null;

    nombre: string;

    telefono: string;

    correo: string;

    mensaje: string;

    fecha: string;

    atendido: boolean;
}

export interface BuscarContactoRequest {
    atendido?: boolean;

    nombre?: string;

    correo?: string;

    idInmueble?: number;

    fechaDesde?: string;

    fechaHasta?: string;
}

export interface CambiarEstadoContactoRequest {
    atendido: boolean;
}