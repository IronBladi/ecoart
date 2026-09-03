import {
    FiActivity,
    FiCalendar,
    FiCamera,
    FiEdit3,
    FiUser,
} from "react-icons/fi";

import type { Seguimiento } from "../types";


interface Props {

    seguimiento: Seguimiento;

    modoEdicion: boolean;

}


const SeguimientoCard = ({
    seguimiento,
    modoEdicion,
}: Props) => {


    return (

        <div
            className={`
                group
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                ${
                    modoEdicion
                        ? "hover:-translate-y-1 hover:border-[#6A994E] hover:bg-[#FAFCF7] hover:shadow-xl"
                        : "hover:-translate-y-1 hover:shadow-lg"
                }
            `}
        >


            {/* Encabezado */}

            <div className="flex items-start justify-between">


                <div>


                    <div
                        className="
                            mb-3
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#386641]/10
                        "
                    >

                        <FiActivity
                            size={24}
                            className="text-[#386641]"
                        />

                    </div>


                    <h2 className="text-xl font-bold text-[#2F3A2F]">

                        Seguimiento de avance

                    </h2>


                </div>



                <span
                    className="
                        rounded-full
                        bg-[#A7C957]/20
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        text-[#386641]
                    "
                >

                    {seguimiento.porcentajeAvance ?? 0}% avance

                </span>


            </div>



            {/* Barra de progreso */}

            <div className="mt-6">


                <div
                    className="
                        h-3
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
                            transition-all
                        "
                        style={{
                            width:
                                `${seguimiento.porcentajeAvance ?? 0}%`
                        }}
                    />

                </div>


            </div>



            {/* Información */}

            <div className="mt-6 space-y-4">


                <div>

                    <p className="text-sm text-gray-500">

                        Descripción

                    </p>


                    <p className="mt-1 text-gray-700">

                        {
                            seguimiento.descripcion ||
                            "Sin descripción registrada."
                        }

                    </p>

                </div>



                <div>

                    <p className="text-sm text-gray-500">

                        Observaciones

                    </p>


                    <p className="mt-1 text-gray-700">

                        {
                            seguimiento.observaciones ||
                            "Sin observaciones."
                        }

                    </p>

                </div>


            </div>



            {/* Fotografía */}

            {
                seguimiento.fotografia && (

                    <div
                        className="
                            mt-6
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

                        <span className="text-sm text-gray-700">

                            Evidencia fotográfica registrada

                        </span>

                    </div>

                )
            }



            {/* Usuario */}

            <div className="mt-6 flex items-center gap-2 text-gray-600">


                <FiUser
                    className="text-[#6A994E]"
                />


                <span>

                    {
                        seguimiento.nombreUsuario ??
                        "Usuario desconocido"
                    }

                </span>


            </div>



            {/* Footer */}

            <div
                className="
                    mt-8
                    flex
                    items-center
                    justify-between
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
                        text-xs
                        text-gray-500
                    "
                >

                    <FiCalendar />

                    {
                        new Date(
                            seguimiento.fecha
                        ).toLocaleDateString()
                    }


                </div>



                {
                    modoEdicion && (

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#386641]
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-white
                            "
                        >

                            <FiEdit3 size={16}/>

                            Editar

                        </div>

                    )
                }


            </div>


        </div>

    );

};


export default SeguimientoCard;