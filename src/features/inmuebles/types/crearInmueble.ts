export interface CrearInmuebleRequest {

    titulo: string;

    descripcion?: string;

    idPropietario: number;

    idTipo: number;

    idEstado: number;

    departamento: string;

    ciudad: string;

    zona?: string;

    direccion: string;

    referencia?: string;

    latitud?: number;

    longitud?: number;

    precio: number;

    moneda: string;

}