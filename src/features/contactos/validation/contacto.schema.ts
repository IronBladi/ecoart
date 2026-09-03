import * as yup from "yup";

export const contactoSchema = yup.object({

    idInmueble: yup
        .number()
        .nullable()
        .defined(),

    nombre: yup
        .string()
        .required("El nombre es obligatorio.")
        .max(100, "Máximo 100 caracteres."),

    telefono: yup
        .string()
        .required("El teléfono es obligatorio.")
        .max(20, "Máximo 20 caracteres."),

    correo: yup
        .string()
        .required("El correo es obligatorio.")
        .email("Correo electrónico inválido.")
        .max(150, "Máximo 150 caracteres."),

    mensaje: yup
        .string()
        .required("Debe escribir un mensaje.")
        .max(3000, "El mensaje es demasiado largo.")

});