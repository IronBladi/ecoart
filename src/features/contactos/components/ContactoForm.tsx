import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { contactoSchema } from "../validation/contacto.schema";
import type { CrearContactoRequest } from "../types/contacto";

interface Props {

    onSubmit: (data: CrearContactoRequest) => Promise<void>;

    loading?: boolean;

    idInmueble?: number | null;

}

const ContactoForm = ({
    onSubmit,
    loading = false,
    idInmueble = null
}: Props) => {

    const {

        register,

        handleSubmit,

        reset,

        setValue,

        formState: { errors }

    } = useForm<CrearContactoRequest>({

        resolver: yupResolver(contactoSchema),

        defaultValues: {

            idInmueble,

            nombre: "",

            telefono: "",

            correo: "",

            mensaje: ""

        }

    });

    useEffect(() => {

        setValue("idInmueble", idInmueble ?? null);

    }, [idInmueble, setValue]);

    const submit = async (data: CrearContactoRequest) => {

        await onSubmit(data);

        reset({

            idInmueble,

            nombre: "",

            telefono: "",

            correo: "",

            mensaje: ""

        });

    };

    return (

        <form
            onSubmit={handleSubmit(submit)}
            className="space-y-6"
        >

            <input
                type="hidden"
                {...register("idInmueble")}
            />

            {/* Nombre */}

            <div>

                <label className="mb-2 block font-medium">

                    Nombre completo

                </label>

                <input
                    type="text"
                    {...register("nombre")}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-3
                        focus:border-green-600
                        focus:outline-none
                    "
                />

                {errors.nombre && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.nombre.message}

                    </p>

                )}

            </div>

            {/* Teléfono */}

            <div>

                <label className="mb-2 block font-medium">

                    Teléfono

                </label>

                <input
                    type="text"
                    {...register("telefono")}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-3
                        focus:border-green-600
                        focus:outline-none
                    "
                />

                {errors.telefono && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.telefono.message}

                    </p>

                )}

            </div>

            {/* Correo */}

            <div>

                <label className="mb-2 block font-medium">

                    Correo electrónico

                </label>

                <input
                    type="email"
                    {...register("correo")}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-3
                        focus:border-green-600
                        focus:outline-none
                    "
                />

                {errors.correo && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.correo.message}

                    </p>

                )}

            </div>

            {/* Mensaje */}

            <div>

                <label className="mb-2 block font-medium">

                    Mensaje

                </label>

                <textarea
                    rows={6}
                    {...register("mensaje")}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-3
                        focus:border-green-600
                        focus:outline-none
                    "
                />

                {errors.mensaje && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.mensaje.message}

                    </p>

                )}

            </div>

            <button
                type="submit"
                disabled={loading}
                className="
                    w-full
                    rounded-lg
                    bg-[#386641]
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#2F5233]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >

                {loading
                    ? "Enviando..."
                    : "Enviar consulta"}

            </button>

        </form>

    );

};

export default ContactoForm;