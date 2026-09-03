import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    FiFileText,
    FiLayout,
} from "react-icons/fi";

import { plantillaSchema } from "../validation/plantilla.schema";

import type {
    CrearPlantillaRequest,
} from "../types";

interface Props {

    onSubmit: (
        data: CrearPlantillaRequest
    ) => Promise<void>;

    defaultValues?: CrearPlantillaRequest;

}

const PlantillaForm = ({
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

    } = useForm<CrearPlantillaRequest>({

        resolver:
            yupResolver(
                plantillaSchema
            ) as Resolver<CrearPlantillaRequest>,

        defaultValues: {

            nombre: "",

            contenido: "",

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

            {/* ==========================================
                INFORMACIÓN GENERAL
            ========================================== */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiLayout />

                    Información de la plantilla

                </h2>

                <div>

                    <label className={labelClass}>

                        Nombre

                    </label>

                    <input
                        {...register("nombre")}
                        className={inputClass}
                        placeholder="Ej. Publicación Casa Moderna"
                    />

                    <p className={errorClass}>

                        {errors.nombre?.message}

                    </p>

                </div>

            </section>

            {/* ==========================================
                CONTENIDO
            ========================================== */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiFileText />

                    Contenido de la plantilla

                </h2>

                <p className="mb-5 text-sm text-gray-500">

                    Escriba aquí la estructura HTML de la plantilla.
                    Posteriormente podrá utilizar variables dinámicas
                    para generar publicaciones automáticamente.

                </p>

                <textarea
                    rows={18}
                    {...register("contenido")}
                    className={`${inputClass} resize-none font-mono`}
                    placeholder="<html>...</html>"
                />

                <p className={errorClass}>

                    {errors.contenido?.message}

                </p>

            </section>

            {/* ==========================================
                BOTONES
            ========================================== */}

            <div className="flex justify-end gap-4 border-t border-[#ECE9DD] pt-8">

                <button
                    type="button"
                    onClick={() => reset()}
                    disabled={isSubmitting}
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
                        disabled:opacity-60
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
                            : defaultValues
                                ? "Actualizar plantilla"
                                : "Registrar plantilla"

                    }

                </button>

            </div>

        </form>

    );

};

export default PlantillaForm;