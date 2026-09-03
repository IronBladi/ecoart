export interface NotificacionSeguimiento {

    idSeguimiento: number;

    idInmueble: number;

    titulo?: string;

    mensaje: string;

    porcentajeAvance?: number;

    fecha: string;

    leida: boolean;

}