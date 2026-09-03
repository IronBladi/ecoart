import { useEffect, useState } from "react";

import {
    useForm,
    Controller,
} from "react-hook-form";

import type { Resolver } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {
    FiImage,
    FiUpload,
} from "react-icons/fi";

import { fotoInmuebleSchema } from "../validation/fotoInmueble.schema";

import type {
    SubirFotoInmuebleRequest,
} from "../types";

interface Props {

    onSubmit: (
        data: SubirFotoInmuebleRequest
    ) => Promise<void>;

}

const FotoInmuebleForm = ({
    onSubmit,
}: Props) => {

    const {

        register,

        handleSubmit,

        control,

        watch,

        reset,

        formState: {
            errors,
            isSubmitting,
        },

    } = useForm<SubirFotoInmuebleRequest>({

        resolver: yupResolver(
            fotoInmuebleSchema
        ) as Resolver<SubirFotoInmuebleRequest>,

        defaultValues: {

            principal: false,

            orden: undefined,

        },

    });

    const [preview, setPreview] =
        useState<string>();

    const archivo = watch("archivo");

    useEffect(() => {

    if (!archivo) {

        setPreview(undefined);

        return;

    }

    const url = URL.createObjectURL(archivo);

    setPreview(url);

    return () => {

        URL.revokeObjectURL(url);

    };

}, [archivo]);

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
        onSubmit={handleSubmit(async (data) => {

            await onSubmit(data);

        })}
        className="space-y-8"
    >

        <section className="rounded-3xl bg-white p-8 shadow-md">

            <h2 className={sectionTitle}>

                <FiImage />

                Fotografía del inmueble

            </h2>

            <div className="grid gap-8 lg:grid-cols-2">

                {/* Imagen */}

                <div>

                    <label className={labelClass}>

                        Imagen

                    </label>

                    <Controller
                        control={control}
                        name="archivo"
                        render={({ field }) => (

                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.webp,image/*"
                                className={inputClass}
                                onChange={(e) => {

                                    const file =
                                        e.target.files?.[0];

                                    field.onChange(file);

                                }}
                            />

                        )}
                    />

                    <p className={errorClass}>

                        {errors.archivo?.message}

                    </p>

                    {preview && (

                        <div className="mt-6 overflow-hidden rounded-2xl border border-[#D9D5C8]">

                            <img
                                src={preview}
                                alt="Vista previa"
                                className="h-72 w-full object-cover"
                            />

                        </div>

                    )}

                </div>

                {/* Configuración */}

                <div className="space-y-6">

                    <div>

                        <label className={labelClass}>

                            Orden

                        </label>

                        <input
                            type="number"
                            {...register("orden", {

                                valueAsNumber: true,

                            })}
                            className={inputClass}
                        />

                        <p className={errorClass}>

                            {errors.orden?.message}

                        </p>

                    </div>

                    <div className="rounded-2xl border border-[#D9D5C8] bg-[#F8F7F2] p-5">

                        <label className="flex cursor-pointer items-center gap-3">

                            <input
                                type="checkbox"
                                {...register("principal")}
                                className="h-5 w-5 rounded border-gray-300 accent-[#386641]"
                            />

                            <div>

                                <p className="font-semibold text-[#386641]">

                                    Fotografía principal

                                </p>

                                <p className="text-sm text-gray-500">

                                    Esta imagen será utilizada como portada del inmueble.

                                </p>

                            </div>

                        </label>

                    </div>

                </div>

            </div>

        </section>

                {/* Botones */}

        <div className="flex justify-end gap-4 border-t border-[#E8E5D9] pt-8">

            <button
                type="button"
                onClick={() => {

                    reset();

                    setPreview(undefined);

                }}
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
                    flex
                    items-center
                    gap-2
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

                <FiUpload />

                {isSubmitting
                    ? "Subiendo..."
                    : "Subir fotografía"}

            </button>

        </div>

    </form>

);

};

export default FotoInmuebleForm;