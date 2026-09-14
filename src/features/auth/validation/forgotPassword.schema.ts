import * as yup from "yup";


export const forgotPasswordSchema = yup.object({

    correo: yup
        .string()
        .email(
            "Ingrese un correo electrónico válido."
        )
        .required(
            "El correo electrónico es obligatorio."
        ),

});