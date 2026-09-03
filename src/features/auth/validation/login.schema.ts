import * as yup from "yup";

export const loginSchema = yup.object({
    correo: yup
        .string()
        .email("Ingrese un correo válido.")
        .required("El correo es obligatorio."),

    password: yup
        .string()
        .required("La contraseña es obligatoria."),
});