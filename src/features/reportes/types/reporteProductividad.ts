export interface ReporteProductividad {

    idUsuario: number;

    nombreUsuario: string;

    correo: string;

    cantidadInmuebles: number;

    cantidadPublicaciones: number;

    cantidadSeguimientos: number;

    ultimoAcceso?: string;

    activo: boolean;

}