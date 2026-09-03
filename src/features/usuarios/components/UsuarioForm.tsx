import {
    useEffect,
    useRef,
} from "react";

import {
    useForm,
} from "react-hook-form";

import type {
    Resolver,
} from "react-hook-form";

import {
    yupResolver,
} from "@hookform/resolvers/yup";


import {
    FiUser,
    FiShield,
    FiLock,
} from "react-icons/fi";


import {
    usuarioSchema,
} from "../validation/usuario.schema";


import type {
    UsuarioFormData,
} from "../types";



interface Props {


    onSubmit: (
        data: UsuarioFormData
    ) => Promise<void>;


    defaultValues?: UsuarioFormData;


}



const UsuarioForm = ({
    onSubmit,
    defaultValues,
}: Props) => {


    const esEdicion =
        !!defaultValues;



    const inicializado =
        useRef(false);




    const {

        register,

        handleSubmit,

        reset,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm<UsuarioFormData>({



        resolver:

            yupResolver(
                usuarioSchema
            ) as Resolver<UsuarioFormData>,




        defaultValues: {


            nombre: "",

            apellido: "",

            correo: "",

            telefono: "",

            password: "",

            idRol: undefined,


        },


    });







    useEffect(() => {


        if (
            defaultValues &&
            !inicializado.current
        ) {


            reset({


                ...defaultValues,


                password: "",


            });



            inicializado.current = true;


        }


    }, [

        defaultValues,

        reset,

    ]);








    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 px-4 py-3 text-gray-700 shadow-sm outline-none transition-all focus:border-[#6A994E] focus:ring-2 focus:ring-[#A7C957]/40";



    const labelClass =
        "text-sm font-semibold uppercase tracking-wider text-[#386641]";



    const errorClass =
        "mt-1 text-sm text-[#BC4749]";



    const sectionTitle =
        "mb-6 flex items-center gap-3 text-2xl font-bold text-[#386641]";








    return (



        <form

            onSubmit={
                handleSubmit(onSubmit)
            }

            className="space-y-8"

        >



            <section className="rounded-3xl bg-white p-8 shadow-md">


                <h2 className={sectionTitle}>


                    <FiUser />


                    Información personal


                </h2>




                <div className="grid gap-6 md:grid-cols-2">


                    <div>


                        <label className={labelClass}>

                            Nombre

                        </label>



                        <input

                            {...register("nombre")}

                            className={inputClass}

                        />



                        <p className={errorClass}>

                            {
                                errors.nombre?.message
                            }

                        </p>


                    </div>





                    <div>


                        <label className={labelClass}>

                            Apellido

                        </label>



                        <input

                            {...register("apellido")}

                            className={inputClass}

                        />



                        <p className={errorClass}>

                            {
                                errors.apellido?.message
                            }

                        </p>


                    </div>





                    <div>


                        <label className={labelClass}>

                            Teléfono

                        </label>



                        <input

                            {...register("telefono")}

                            className={inputClass}

                        />



                        <p className={errorClass}>

                            {
                                errors.telefono?.message
                            }

                        </p>


                    </div>


                </div>


            </section>







            <section className="rounded-3xl bg-white p-8 shadow-md">


                <h2 className={sectionTitle}>


                    <FiLock />


                    Información de acceso


                </h2>




                <div className="grid gap-6 md:grid-cols-2">


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

                            {
                                errors.correo?.message
                            }

                        </p>


                    </div>





                    {
                        !esEdicion && (


                            <div>


                                <label className={labelClass}>

                                    Contraseña

                                </label>



                                <input

                                    type="password"

                                    {...register("password")}

                                    className={inputClass}

                                />



                                <p className={errorClass}>

                                    {
                                        errors.password?.message
                                    }

                                </p>


                            </div>


                        )
                    }


                </div>


            </section>







            <section className="rounded-3xl bg-white p-8 shadow-md">


                <h2 className={sectionTitle}>


                    <FiShield />


                    Configuración del usuario


                </h2>




                <div className="grid gap-6 md:grid-cols-2">


                    <div>


                        <label className={labelClass}>

                            Rol

                        </label>




                        <select


                            {...register(

                                "idRol",

                                {

                                    valueAsNumber: true,

                                }

                            )}


                            className={inputClass}



                        >



                            <option value="">

                                Seleccione un rol

                            </option>



                            <option value={1}>

                                Gerente

                            </option>



                            <option value={2}>

                                Promotor Inmobiliario

                            </option>



                        </select>



                        <p className={errorClass}>

                            {
                                errors.idRol?.message
                            }

                        </p>


                    </div>


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
                        bg-linear-to-r
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



                            : esEdicion



                                ? "Actualizar usuario"



                                : "Registrar usuario"



                    }





                </button>





            </div>





        </form>


    );


};




export default UsuarioForm;