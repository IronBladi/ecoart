import * as yup from "yup";

export const inmuebleSchema = yup.object({

    titulo: yup
        .string()
        .required("El título es obligatorio."),

    descripcion: yup
        .string()
        .optional(),

    idPropietario: yup
    .number()
    .required("Seleccione un propietario."),

    idTipo: yup
        .number()
        .required("Seleccione un tipo de inmueble."),

    idEstado: yup
        .number()
        .required("Seleccione un estado."),

    departamento: yup
        .string()
        .required("Seleccione un departamento."),

    ciudad: yup
        .string()
        .required("Ingrese la ciudad."),

    zona: yup
        .string()
        .optional(),

    direccion: yup
        .string()
        .required("Ingrese la dirección."),

    referencia: yup
        .string()
        .optional(),

    latitud: yup
        .number()
        .optional(),

    longitud: yup
        .number()
        .optional(),

    precio: yup
        .number()
        .typeError("Ingrese un precio válido.")
        .positive("Debe ser mayor que cero.")
        .required("El precio es obligatorio."),

    moneda: yup
        .string()
        .required("Seleccione una moneda."),

});