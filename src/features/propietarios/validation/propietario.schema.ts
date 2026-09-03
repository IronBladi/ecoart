import * as yup from "yup";

export const propietarioSchema = yup.object({

    nombre: yup
        .string()
        .required("El nombre es obligatorio."),

    apellido: yup
        .string()
        .required("El apellido es obligatorio."),

    ci: yup
        .string()
        .required("El CI es obligatorio."),

    telefono: yup
        .string()
        .optional(),

    correo: yup
        .string()
        .email("Correo inválido.")
        .optional(),

    direccion: yup
        .string()
        .optional(),

});