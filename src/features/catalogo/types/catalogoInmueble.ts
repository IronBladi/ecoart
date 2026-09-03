import type { FotoInmueble } from "../../inmuebles/types";

export interface CatalogoInmueble {

    id: number;

    codigo: string;

    titulo: string;

    descripcion?: string;

    departamento: string;

    ciudad: string;

    zona?: string;

    precio?: number;

    moneda?: string;

    puntuacionPromedio: number;

    cantidadValoraciones: number;

    fotos: FotoInmueble[];

}