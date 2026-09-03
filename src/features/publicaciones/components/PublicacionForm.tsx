import { useEffect } from "react";

import {
    useForm,
} from "react-hook-form";

import {
    yupResolver,
} from "@hookform/resolvers/yup";

import {
    publicacionSchema,
} from "../validation/publicacion.schema";

import type {
    CrearPublicacionRequest,
    Publicacion,
} from "../types";

import type {
    Plantilla,
} from "../../plantillas/types";

import type {
    Inmueble,
} from "../../inmuebles/types";

import SelectorInmueble from "./SelectorInmueble";

import SelectorPlantilla from "./SelectorPlantilla";

import SelectorTipoPublicacion from "./SelectorTipoPublicacion";

import VistaPreviaPlantilla from "./VistaPreviaPlantilla";


interface Props {

    onSubmit: (
        data: CrearPublicacionRequest
    ) => Promise<void>;

    loading: boolean;

    publicacion?: Publicacion;

    inmuebles: Inmueble[];

    plantillas: Plantilla[];

}


const PublicacionForm = ({
    onSubmit,
    loading,
    publicacion,
    inmuebles,
    plantillas,
}: Props) => {


    const {

        register,

        handleSubmit,

        watch,

        setValue,

        formState: {
            errors,
        },

    } = useForm<CrearPublicacionRequest>({

        resolver: yupResolver(publicacionSchema) as any,

        defaultValues: {

            idInmueble:
                publicacion?.idInmueble ?? 0,

            idPlantilla:
                publicacion?.idPlantilla ?? null,

            contenidoManual:
                publicacion?.idPlantilla
                    ? ""
                    : publicacion?.contenido ?? "",

            titulo:
                publicacion?.titulo ?? "",

            idTipo:
                publicacion?.idTipo ?? 1,

        },

    });



    const idInmueble =
        watch("idInmueble");


    const idPlantilla =
        watch("idPlantilla");


    const idTipo =
        watch("idTipo");


    const contenidoManual =
        watch("contenidoManual");



    useEffect(() => {

        if (idPlantilla) {

            setValue(
                "contenidoManual",
                ""
            );

        }


    }, [

        idPlantilla,

        setValue,

    ]);



    const plantillaSeleccionada =

        plantillas.find(

            (x) =>

                x.id === Number(idPlantilla)

        );



    return (

        <form

            onSubmit={
                handleSubmit(onSubmit)
            }

            className="
                space-y-7
            "

        >


            {/* ===============================
                INMUEBLE
            =============================== */}


            <SelectorInmueble

                inmuebles={
                    inmuebles
                }


                value={
                    idInmueble
                }


                onChange={(value) => {


                    setValue(

                        "idInmueble",

                        value,

                        {

                            shouldValidate:true,

                        }

                    );


                }}


                error={
                    errors.idInmueble?.message
                }


            />



            {/* ===============================
                TITULO
            =============================== */}


            <div>


                <label

                    className="
                        mb-2
                        block
                        font-medium
                    "

                >

                    Título

                </label>



                <input

                    type="text"

                    {...register(
                        "titulo"
                    )}

                    className="
                        w-full
                        rounded-lg
                        border
                        p-3
                    "

                    placeholder="
                        Título de la publicación
                    "

                />



                <p

                    className="
                        mt-1
                        text-sm
                        text-red-600
                    "

                >

                    {
                        errors.titulo?.message
                    }

                </p>



            </div>




            {/* ===============================
                TIPO
            =============================== */}


            <SelectorTipoPublicacion


                value={
                    idTipo
                }


                onChange={(value) => {


                    setValue(

                        "idTipo",

                        value,

                        {

                            shouldValidate:true,

                        }

                    );


                }}


            />



            {/* ===============================
                PLANTILLA
            =============================== */}


            <SelectorPlantilla


                plantillas={
                    plantillas
                }


                value={
                    idPlantilla
                }


                onChange={(value) => {


                    setValue(

                        "idPlantilla",

                        value,

                        {

                            shouldValidate:true,

                        }

                    );


                }}


            />

                        {/* ===============================
                VISTA PREVIA
            =============================== */}


            {

                plantillaSeleccionada && (


                    <VistaPreviaPlantilla


                        plantilla={

                            plantillaSeleccionada

                        }


                    />


                )


            }





            {/* ===============================
                CONTENIDO MANUAL
            =============================== */}



            {

                !idPlantilla && (


                    <div>



                        <label

                            className="
                                mb-2
                                block
                                font-medium
                            "

                        >

                            Contenido personalizado


                        </label>



                        <textarea


                            rows={8}


                            {...register(
                                "contenidoManual"
                            )}



                            value={

                                contenidoManual ?? ""

                            }



                            className="
                                w-full
                                rounded-lg
                                border
                                p-3
                            "



                            placeholder="
                                Escriba el contenido de la publicación...
                            "



                        />



                        <p


                            className="
                                mt-1
                                text-sm
                                text-red-600
                            "



                        >


                            {

                                errors
                                    .contenidoManual
                                    ?.message

                            }



                        </p>



                    </div>



                )


            }





            {/* ===============================
                BOTÓN
            =============================== */}



            <button



                type="submit"



                disabled={loading}



                className="
                    rounded-lg
                    bg-[#386641]
                    px-7
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#2F5233]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "



            >



                {


                    loading


                        ? "Guardando..."


                        : publicacion


                            ? "Actualizar publicación"


                            : "Crear publicación"



                }



            </button>




        </form>



    );

};



export default PublicacionForm;