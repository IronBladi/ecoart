import {
    FiActivity,
    FiCalendar,
    FiCamera,
    FiUser,
    FiCheckCircle,
} from "react-icons/fi";


import type {
    Seguimiento,
} from "../types";



interface Props {

    seguimientos: Seguimiento[];

}



const SeguimientoTimeline = ({
    seguimientos,
}: Props) => {



    /*
        Orden descendente:
        el último seguimiento registrado
        siempre aparece primero.
    */

    const ordenados =
        [...seguimientos].sort(
            (a, b) =>
                new Date(b.fecha).getTime()
                -
                new Date(a.fecha).getTime()
        );





    if (ordenados.length === 0) {

        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-[#E8E5D9]
                    bg-white
                    p-8
                    text-center
                    text-gray-500
                "
            >

                <FiCheckCircle
                    className="
                        mx-auto
                        mb-3
                        text-[#6A994E]
                    "
                    size={32}
                />


                Este inmueble todavía no tiene avances registrados.


            </div>

        );

    }





    return (

        <div
            className="
                relative
                space-y-8
            "
        >



            {
                ordenados.map(
                    (
                        seguimiento,
                        index
                    ) => (


                        <div
                            key={
                                seguimiento.id
                            }
                            className="
                                relative
                                flex
                                gap-6
                            "
                        >



                            {
                                index !== ordenados.length - 1 && (

                                    <div
                                        className="
                                            absolute
                                            left-6
                                            top-12
                                            h-full
                                            w-px
                                            bg-[#D9D5C8]
                                        "
                                    />

                                )
                            }







                            {/* Punto del timeline */}


                            <div
                                className="
                                    z-10
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#386641]
                                    text-white
                                "
                            >

                                <FiActivity
                                    size={22}
                                />

                            </div>







                            {/* Tarjeta seguimiento */}


                            <div
                                className="
                                    w-full
                                    rounded-3xl
                                    border
                                    border-[#E8E5D9]
                                    bg-white
                                    p-6
                                    shadow-sm
                                    transition
                                    hover:shadow-lg
                                "
                            >






                                {/* Cabecera */}


                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >


                                    <div>


                                        <h3
                                            className="
                                                text-lg
                                                font-bold
                                                text-[#2F3A2F]
                                            "
                                        >

                                            Actualización de avance

                                        </h3>


                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-500
                                            "
                                        >

                                            {
                                                seguimiento.porcentajeAvance ?? 0
                                            }%
                                            completado


                                        </p>


                                    </div>





                                    <span
                                        className="
                                            rounded-full
                                            bg-[#A7C957]/20
                                            px-4
                                            py-1
                                            text-sm
                                            font-semibold
                                            text-[#386641]
                                        "
                                    >

                                        {
                                            seguimiento.porcentajeAvance ?? 0
                                        }%


                                    </span>



                                </div>








                                {/* Barra progreso */}


                                <div
                                    className="
                                        mt-5
                                        h-2
                                        overflow-hidden
                                        rounded-full
                                        bg-[#ECE9DD]
                                    "
                                >

                                    <div

                                        className="
                                            h-full
                                            rounded-full
                                            bg-[#6A994E]
                                        "

                                        style={{
                                            width:
                                            `${
                                                seguimiento.porcentajeAvance ?? 0
                                            }%`
                                        }}

                                    />


                                </div>









                                {/* Descripción */}


                                <div
                                    className="
                                        mt-6
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        Descripción

                                    </p>



                                    <p
                                        className="
                                            mt-1
                                            text-gray-700
                                        "
                                    >

                                        {
                                            seguimiento.descripcion
                                            ??
                                            "Sin descripción registrada."
                                        }


                                    </p>


                                </div>









                                {/* Observaciones */}


                                {
                                    seguimiento.observaciones && (

                                        <div
                                            className="
                                                mt-5
                                            "
                                        >

                                            <p
                                                className="
                                                    text-sm
                                                    text-gray-500
                                                "
                                            >

                                                Observaciones

                                            </p>


                                            <p
                                                className="
                                                    mt-1
                                                    text-gray-700
                                                "
                                            >

                                                {
                                                    seguimiento.observaciones
                                                }


                                            </p>


                                        </div>

                                    )
                                }









                                {/* Fotografía */}


                                {
                                    seguimiento.fotografia && (

                                        <div
                                            className="
                                                mt-5
                                                flex
                                                items-center
                                                gap-3
                                                rounded-xl
                                                bg-[#F8F7F2]
                                                p-4
                                            "
                                        >

                                            <FiCamera
                                                className="text-[#6A994E]"
                                            />


                                            <span
                                                className="
                                                    text-sm
                                                    text-gray-700
                                                "
                                            >

                                                Evidencia fotográfica registrada


                                            </span>


                                        </div>

                                    )
                                }









                                {/* Información registro */}


                                <div
                                    className="
                                        mt-6
                                        flex
                                        flex-wrap
                                        justify-between
                                        gap-4
                                        border-t
                                        border-[#ECE9DD]
                                        pt-5
                                    "
                                >



                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        <FiUser/>


                                        {
                                            seguimiento.nombreUsuario
                                            ??
                                            "Usuario desconocido"
                                        }


                                    </div>





                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        <FiCalendar/>


                                        {
                                            new Date(
                                                seguimiento.fecha
                                            )
                                            .toLocaleDateString()
                                        }


                                    </div>


                                </div>





                            </div>





                        </div>


                    )

                )
            }



        </div>


    );

};



export default SeguimientoTimeline;