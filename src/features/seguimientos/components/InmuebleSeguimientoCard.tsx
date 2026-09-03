import {
    FiHome,
    FiMapPin,
    FiActivity,
    FiChevronRight,
} from "react-icons/fi";


import type {
    Inmueble
} from "../../inmuebles/types";


import type {
    Seguimiento
} from "../types";



interface Props {


    inmueble: Inmueble;


    seguimientos: Seguimiento[];


    onSeleccionar: (
        inmueble: Inmueble
    ) => void;


}



const InmuebleSeguimientoCard = ({
    inmueble,
    seguimientos,
    onSeleccionar,
}: Props) => {



    const ultimoSeguimiento =
        seguimientos.length > 0
            ? seguimientos[0]
            : null;





    return (


        <div
            className="
                group
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#6A994E]
                hover:shadow-xl
            "
        >



            {/* Encabezado */}


            <div
                className="
                    flex
                    items-start
                    justify-between
                "
            >


                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >


                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#386641]/10
                        "
                    >

                        <FiHome
                            size={28}
                            className="text-[#386641]"
                        />

                    </div>



                    <div>


                        <h2
                            className="
                                text-xl
                                font-bold
                                text-[#2F3A2F]
                            "
                        >

                            {inmueble.titulo}

                        </h2>



                        <p
                            className="
                                text-sm
                                text-gray-500
                            "
                        >

                            Código:
                            {" "}
                            {inmueble.codigo}

                        </p>


                    </div>


                </div>





                <div
                    className="
                        rounded-full
                        bg-[#A7C957]/20
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-[#386641]
                    "
                >

                    Construcción

                </div>



            </div>









            {/* Ubicación */}


            <div
                className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-gray-600
                "
            >


                <FiMapPin
                    className="text-[#6A994E]"
                />


                <span>

                    {
                        inmueble.zona ??
                        inmueble.ciudad ??
                        "Ubicación no registrada"
                    }


                </span>


            </div>









            {/* Estado seguimiento */}


            <div
                className="
                    mt-6
                    rounded-2xl
                    bg-[#F8F7F2]
                    p-5
                "
            >


                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >


                    <FiActivity
                        className="text-[#386641]"
                    />


                    <p
                        className="
                            font-semibold
                            text-[#386641]
                        "
                    >

                        Historial de avances

                    </p>


                </div>





                <div className="mt-4">


                    {
                        ultimoSeguimiento ? (

                            <>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >

                                    Último avance registrado

                                </p>



                                <p
                                    className="
                                        mt-1
                                        text-3xl
                                        font-bold
                                        text-[#386641]
                                    "
                                >

                                    {
                                        ultimoSeguimiento
                                            .porcentajeAvance ?? 0
                                    }%

                                </p>



                            </>


                        ) : (


                            <p
                                className="
                                    text-sm
                                    text-gray-500
                                "
                            >

                                Sin seguimientos registrados.

                            </p>


                        )

                    }


                </div>


            </div>








            {/* Footer */}


            <button

                onClick={() =>
                    onSeleccionar(
                        inmueble
                    )
                }

                className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#386641]
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#6A994E]
                "

            >

                Ver historial


                <FiChevronRight />

            </button>





        </div>


    );

};


export default InmuebleSeguimientoCard;