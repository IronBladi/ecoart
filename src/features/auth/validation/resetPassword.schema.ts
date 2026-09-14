import * as yup from "yup";

export const resetPasswordSchema = yup.object({
    password: yup
        .string()
        .min(
            8,
            "La contraseña debe tener al menos 8 caracteres."
        )
        .required(
            "La nueva contraseña es obligatoria."
        ),

    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password")],
            "Las contraseñas no coinciden."
        )
        .required(
            "La confirmación de contraseña es obligatoria."
        ),
});