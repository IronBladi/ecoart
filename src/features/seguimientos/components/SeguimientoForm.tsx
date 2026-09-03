import {
    useForm
} from "react-hook-form";


import type {
    Resolver
} from "react-hook-form";


import {
    yupResolver
} from "@hookform/resolvers/yup";


import {
    FiClipboard
} from "react-icons/fi";


import {
    seguimientoSchema
} from "../validation/seguimiento.schema";


import type {
    CrearSeguimientoRequest
} from "../types";


import type {
    Inmueble
} from "../../inmuebles/types";




interface Props {


    onSubmit: (
        data: CrearSeguimientoRequest
    ) => Promise<void>;



    defaultValues?: CrearSeguimientoRequest;



    inmuebles: Inmueble[];


}




const SeguimientoForm = ({

    onSubmit,

    defaultValues,

    inmuebles,

}: Props) => {




    const {

        register,

        handleSubmit,

        reset,

        formState:{
            errors,
            isSubmitting
        }


    } = useForm<CrearSeguimientoRequest>({



        resolver:
            yupResolver(
                seguimientoSchema
            ) as Resolver<CrearSeguimientoRequest>,



        defaultValues:{


            idInmueble:
                defaultValues?.idInmueble ?? 0,


            porcentajeAvance:
                defaultValues?.porcentajeAvance,


            descripcion:
                defaultValues?.descripcion ?? "",


            observaciones:
                defaultValues?.observaciones ?? "",


            fotografia:
                defaultValues?.fotografia ?? ""

        }



    });







    const inputClass =

        `
        mt-2
        w-full
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-3
        text-gray-700
        shadow-sm
        outline-none
        transition-all
        focus:border-[#6A994E]
        focus:ring-2
        focus:ring-[#A7C957]/40
        `;



    const labelClass =

        `
        text-sm
        font-semibold
        uppercase
        tracking-wider
        text-[#386641]
        `;



    const errorClass =

        `
        mt-1
        text-sm
        text-[#BC4749]
        `;



    const sectionTitle =

        `
        mb-6
        flex
        items-center
        gap-3
        text-2xl
        font-bold
        text-[#386641]
        `;









    return (



        <form

            onSubmit={
                handleSubmit(onSubmit)
            }


            className="
                space-y-8
            "

        >






            <section

                className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-md
                "

            >



                <h2
                    className={sectionTitle}
                >

                    <FiClipboard/>

                    Información del seguimiento

                </h2>








                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >







                    {/* INMUEBLE */}

                    <div>


                        <label
                            className={labelClass}
                        >

                            Inmueble

                        </label>



                        <select


                            {...register(
                                "idInmueble",
                                {
                                    valueAsNumber:true
                                }
                            )}



                            className={inputClass}


                        >


                            <option value={0}>

                                Seleccione un inmueble

                            </option>




                            {
                                inmuebles.map(

                                    inmueble => (

                                        <option

                                            key={
                                                inmueble.id
                                            }

                                            value={
                                                inmueble.id
                                            }

                                        >

                                            {
                                                inmueble.titulo
                                            }

                                            {" - "}

                                            {
                                                inmueble.codigo
                                            }


                                        </option>


                                    )

                                )
                            }



                        </select>




                        <p className={errorClass}>

                            {
                                errors
                                .idInmueble
                                ?.message
                            }

                        </p>


                    </div>









                    {/* PORCENTAJE */}


                    <div>


                        <label
                            className={labelClass}
                        >

                            Porcentaje de avance (%)

                        </label>



                        <input

                            type="number"

                            min="0"

                            max="100"


                            {...register(

                                "porcentajeAvance",

                                {
                                    valueAsNumber:true
                                }

                            )}



                            className={inputClass}


                        />



                        <p className={errorClass}>

                            {
                                errors
                                .porcentajeAvance
                                ?.message
                            }

                        </p>


                    </div>









                    {/* FOTOGRAFIA */}


                    <div>


                        <label
                            className={labelClass}
                        >

                            Fotografía

                        </label>




                        <input


                            {...register(
                                "fotografia"
                            )}



                            className={inputClass}


                            placeholder="
                                URL de la fotografía
                            "


                        />



                        <p className={errorClass}>

                            {
                                errors
                                .fotografia
                                ?.message
                            }

                        </p>


                    </div>



                </div>


            </section>








            <section

                className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-md
                "

            >


                <h2 className={sectionTitle}>

                    Descripción del avance

                </h2>






                <label className={labelClass}>

                    Descripción

                </label>



                <textarea

                    rows={5}


                    {...register(
                        "descripcion"
                    )}



                    className={inputClass}


                />



                <p className={errorClass}>

                    {
                        errors
                        .descripcion
                        ?.message
                    }

                </p>








                <div className="mt-6">


                    <label className={labelClass}>

                        Observaciones

                    </label>



                    <textarea

                        rows={4}


                        {...register(
                            "observaciones"
                        )}



                        className={inputClass}


                    />



                </div>



            </section>









            <div

                className="
                    flex
                    justify-end
                    gap-4
                    border-t
                    border-[#E8E5D9]
                    pt-8
                "

            >


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
                    "

                >

                    Limpiar

                </button>






                <button

                    type="submit"

                    disabled={isSubmitting}


                    className="
                        rounded-xl
                        bg-[#386641]
                        px-8
                        py-3
                        font-semibold
                        text-white
                    "

                >


                    {
                        isSubmitting
                        ?
                        "Guardando..."
                        :
                        "Guardar seguimiento"
                    }



                </button>




            </div>






        </form>


    );


};



export default SeguimientoForm;