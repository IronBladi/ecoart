export interface CrearPublicacionRequest {

    idInmueble: number;

    idPlantilla: number | null;

    contenidoManual: string | null;

    titulo: string;

    idTipo: number;

}