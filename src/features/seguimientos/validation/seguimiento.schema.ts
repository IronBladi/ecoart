import * as yup from "yup";



export const seguimientoSchema = yup.object({



    idInmueble: yup

        .number()

        .required(
            "Seleccione un inmueble."
        )

        .moreThan(

            0,

            "Seleccione un inmueble válido."

        ),






    porcentajeAvance: yup

        .number()

        .typeError(
            "Ingrese un porcentaje válido."
        )

        .min(
            0,
            "El porcentaje no puede ser menor a 0."
        )

        .max(
            100,
            "El porcentaje no puede ser mayor a 100."
        )

        .optional(),






    descripcion: yup

        .string()

        .max(
            1000,
            "La descripción no puede superar los 1000 caracteres."
        )

        .optional(),






    observaciones: yup

        .string()

        .max(
            1000,
            "Las observaciones no pueden superar los 1000 caracteres."
        )

        .optional(),






    fotografia: yup

        .string()

        .max(
            255,
            "La fotografía no puede superar los 255 caracteres."
        )

        .optional(),


});