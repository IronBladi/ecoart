import type { FotoInmueble } from "./fotoInmueble";

export interface Inmueble {

    id: number;

    codigo: string;

    titulo: string;

    descripcion?: string;

    idPropietario: number;

    nombrePropietario?: string;

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

    activo: boolean;

    fechaCreacion: string;

    fotos: FotoInmueble[];

}