import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiUser } from "react-icons/fi";

import { propietarioSchema } from "../validation/propietario.schema";

import type {
    CrearPropietarioRequest,
} from "../types";

interface Props {

    onSubmit: (
        data: CrearPropietarioRequest
    ) => Promise<void>;

    defaultValues?: CrearPropietarioRequest;

}

const PropietarioForm = ({
    onSubmit,
    defaultValues,
}: Props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<CrearPropietarioRequest>({
        resolver: yupResolver(
            propietarioSchema
        ) as Resolver<CrearPropietarioRequest>,

        defaultValues: {
            nombre: "",
            apellido: "",
            ci: "",
            telefono: "",
            correo: "",
            direccion: "",
        },
    });

    useEffect(() => {

        if (defaultValues) {

            reset(defaultValues);

        }

    }, [defaultValues, reset]);

    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition-all focus:border-[#6A994E] focus:ring-2 focus:ring-[#A7C957]/40";

    const labelClass =
        "text-sm font-semibold uppercase tracking-wider text-[#386641]";

    const errorClass =
        "mt-1 text-sm text-[#BC4749]";

    const sectionTitle =
        "mb-6 flex items-center gap-3 text-2xl font-bold text-[#386641]";

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >

            {<section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiUser />

                    Información personal

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* Nombre */}

                    <div>

                        <label className={labelClass}>

                            Nombre

                        </label>

                        <input
                            {...register("nombre")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.nombre?.message}
                        </p>

                    </div>

                    {/* Apellido */}

                    <div>

                        <label className={labelClass}>

                            Apellido

                        </label>

                        <input
                            {...register("apellido")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.apellido?.message}
                        </p>

                    </div>

                    {/* CI */}

                    <div>

                        <label className={labelClass}>

                            CI

                        </label>

                        <input
                            {...register("ci")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.ci?.message}
                        </p>

                    </div>

                </div>

                </section>}

                <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    Información de contacto

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* Teléfono */}

                    <div>

                        <label className={labelClass}>

                            Teléfono

                        </label>

                        <input
                            {...register("telefono")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.telefono?.message}
                        </p>

                    </div>

                    {/* Correo */}

                    <div>

                        <label className={labelClass}>

                            Correo electrónico

                        </label>

                        <input
                            type="email"
                            {...register("correo")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.correo?.message}
                        </p>

                    </div>

                </div>

                {/* Dirección */}

                <div className="mt-6">

                    <label className={labelClass}>

                        Dirección

                    </label>

                    <textarea
                        rows={3}
                        {...register("direccion")}
                        className={inputClass}
                    />

                    <p className={errorClass}>
                        {errors.direccion?.message}
                    </p>

                </div>

            </section>    

            {/* Botones */}

                <div className="flex justify-end gap-4 border-t border-[#E8E5D9] pt-8">

                    <button
                        type="button"
                        onClick={() => reset()}
                        className="
                            rounded-xl
                            border
                            border-[#D9D5C8]
                            bg-white
                            px-6
                            py-3
                            font-semibold
                            text-gray-700
                            transition
                            hover:bg-gray-100
                        "
                    >
                        Limpiar
                    </button>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                            rounded-xl
                            bg-gradient-to-r
                            from-[#386641]
                            to-[#6A994E]
                            px-8
                            py-3
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:shadow-xl
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {
                            isSubmitting
                                ? "Guardando..."
                                : "Guardar propietario"
                        }
                    </button>

                </div>

        </form>

    );

};

export default PropietarioForm;