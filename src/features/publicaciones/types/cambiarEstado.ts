// =============================
// PUBLICACION
// =============================

export interface Publicacion {

    id: number;

    idInmueble: number;

    codigoInmueble: string;

    tituloInmueble: string;

    urlFotoPrincipal: string;

    idPlantilla: number | null;

    nombrePlantilla: string | null;

    titulo: string;

    contenido: string;

    /*
        Solo para edición.
        Mientras el backend no lo envíe,
        utilizará el valor por defecto.
    */
    idTipo?: number;

    tipoPublicacion: string;

    estado: string;

    activo: boolean;

    fechaPublicacion: string;

    usuario: string;

}

// =============================
// CREAR
// =============================

export interface CrearPublicacionRequest {

    idInmueble: number;

    idPlantilla: number | null;

    contenidoManual: string | null;

    titulo: string;

    idTipo: number;

}

// =============================
// ACTUALIZAR
// =============================

export interface ActualizarPublicacionRequest {

    idPlantilla: number | null;

    contenidoManual: string | null;

    titulo: string;

    idTipo: number;

}

// =============================
// CAMBIAR ESTADO
// =============================

export interface CambiarEstadoPublicacionRequest {

    idEstado: number;

}