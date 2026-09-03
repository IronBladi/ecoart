export interface HomeCarrusel {

    // Publicación
    idPublicacion: number;

    // Inmueble
    idInmueble: number;

    codigo: string;

    tituloInmueble: string;

    descripcionInmueble: string;

    precio?: number;

    moneda: string;

    departamento: string;

    ciudad: string;

    zona: string;

    // Fotografía principal
    urlFotoPrincipal: string;

    // Publicación
    tituloPublicacion: string;

    contenidoPublicacion: string;

    tipoPublicacion: string;

    fechaPublicacion: string;

}