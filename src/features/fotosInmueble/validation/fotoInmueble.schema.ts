import * as yup from "yup";

const EXTENSIONES_PERMITIDAS = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

const TAMANO_MAXIMO = 20 * 1024 * 1024; // 20 MB

export const fotoInmuebleSchema = yup.object({

    archivo: yup
        .mixed<File>()
        .required("Debe seleccionar una imagen.")
        .test(
            "tipo",
            "Solo se permiten imágenes JPG, JPEG, PNG o WEBP.",
            (value) => {

                if (!value) return false;

                return EXTENSIONES_PERMITIDAS.includes(
                    value.type
                );

            }
        )
        .test(
            "tamano",
            "La imagen no puede superar los 20 MB.",
            (value) => {

                if (!value) return false;

                return value.size <= TAMANO_MAXIMO;

            }
        ),

    principal: yup
        .boolean()
        .required(),

    orden: yup
        .number()
        .nullable()
        .transform((value, originalValue) => {

            return originalValue === ""
                ? null
                : value;

        })
        .min(1, "El orden debe ser mayor que cero.")

});