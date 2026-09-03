export interface ReporteInmueble {

    id: number;

    codigo?: string;

    titulo?: string;

    propietario?: string;

    tipo?: string;

    estado?: string;

    departamento?: string;

    ciudad?: string;

    zona?: string;

    precio: number;

    moneda?: string;

    puntuacionPromedio: number;

    cantidadValoraciones: number;

    activo: boolean;

    fechaCreacion: string;

    registradoPor?: string;

}