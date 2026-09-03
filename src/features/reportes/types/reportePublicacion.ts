export interface ReportePublicacion {

    id: number;

    codigoInmueble?: string;

    tituloInmueble?: string;

    tipoPublicacion?: string;

    estado?: string;

    urlPublicacion?: string;

    fechaPublicacion?: string;

    activo: boolean;

    publicadoPor?: string;

}