import type {
    FotoInmueble,
} from "../../inmuebles/types";

export interface CatalogoDetalle {

    id: number;

    codigo?: string;

    titulo?: string;

    descripcion?: string;

    departamento?: string;

    ciudad?: string;

    zona?: string;

    direccion?: string;

    referencia?: string;

    precio?: number;

    moneda?: string;

    latitud?: number;

    longitud?: number;

    // NUEVO
    nombreTipo?: string;

    puntuacionPromedio: number;

    cantidadValoraciones: number;

    fotos: FotoInmueble[];

}