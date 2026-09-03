import * as yup from "yup";

export const registerSchema = yup.object({
    nombre: yup
        .string()
        .required("El nombre es obligatorio."),

    apellido: yup
        .string()
        .optional(),

    correo: yup
        .string()
        .email("Ingrese un correo válido.")
        .required("El correo es obligatorio."),

    telefono: yup
        .string()
        .optional(),

    password: yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .required("La contraseña es obligatoria."),

    idRol: yup
        .number()
        .required(),
});