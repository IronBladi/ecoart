import * as yup from "yup";

export const publicacionSchema = yup
    .object({

        idInmueble: yup
            .number()
            .moreThan(
                0,
                "Debe seleccionar un inmueble."
            )
            .required(
                "Debe seleccionar un inmueble."
            ),

        idPlantilla: yup
            .number()
            .nullable()
            .defined(),

        contenidoManual: yup
            .string()
            .nullable()
            .defined(),

        titulo: yup
            .string()
            .required("El título es obligatorio.")
            .min(
                3,
                "El título debe tener al menos 3 caracteres."
            )
            .max(
                200,
                "El título no puede superar los 200 caracteres."
            ),

        idTipo: yup
            .number()
            .required(
                "Debe seleccionar un tipo de publicación."
            ),

    })
    .test(

        "contenido",

        "Debe seleccionar una plantilla o escribir un contenido.",

        (value) => {

            if (!value)
                return false;

            const tienePlantilla =
                value.idPlantilla !== null;

            const tieneContenido =
                value.contenidoManual !== null &&
                value.contenidoManual.trim() !== "";

            return tienePlantilla || tieneContenido;

        }

    );