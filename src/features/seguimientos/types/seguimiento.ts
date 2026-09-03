export interface Seguimiento {

    id: number;

    idInmueble: number;

    idUsuario: number;

    porcentajeAvance?: number;

    descripcion?: string;

    observaciones?: string;

    fotografia?: string;

    fecha: string;

    leida: boolean;

    nombreUsuario?: string;

    correoUsuario?: string;

}