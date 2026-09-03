import * as yup from "yup";

export const plantillaSchema = yup.object({

    nombre: yup
        .string()
        .required("El nombre es obligatorio."),

    contenido: yup
        .string()
        .required("El contenido es obligatorio."),

});