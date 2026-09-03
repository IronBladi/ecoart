import * as yup from "yup";

export const usuarioSchema = yup.object({

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
        .when("$modoEdicion", {

            is: false,

            then: (schema) =>
                schema
                    .required(
                        "La contraseña es obligatoria."
                    )
                    .min(
                        8,
                        "La contraseña debe tener al menos 8 caracteres."
                    ),

            otherwise: (schema) =>
                schema
                    .optional(),

        }),

    idRol: yup
        .number()
        .required("Debe seleccionar un rol.")

});