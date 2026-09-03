import * as yup from "yup";

export const historialSchema = yup.object({

    idUsuario: yup
        .number()
        .optional(),

    modulo: yup
        .string()
        .optional(),

    accion: yup
        .string()
        .optional(),

    descripcion: yup
        .string()
        .optional(),

    fechaInicio: yup
        .string()
        .optional(),

    fechaFin: yup
        .string()
        .optional(),

});