import {
    useNavigate
} from "react-router-dom";


import {
    FiActivity,
    FiPlus,
    FiRefreshCw,
    FiArrowLeft,
} from "react-icons/fi";



import InmuebleSeguimientoList
    from "../components/InmuebleSeguimientoList";



import SeguimientoTimeline
    from "../components/SeguimientoTimeline";



import {
    useSeguimientos
} from "../hooks/useSeguimientos";




const SeguimientosPage = () => {


    const navigate = useNavigate();




    const {

        inmuebles,

        seguimientos,

        inmuebleSeleccionado,

        loading,

        error,

        recargar,

        seleccionarInmueble,

        limpiarSeguimientos,


    } = useSeguimientos();








    return (


        <div
            className="
                mx-auto
                max-w-7xl
                px-8
                py-8
            "
        >





            {/* =========================
                ENCABEZADO
            ========================== */}


            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >


                <div>


                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            gap-3
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
                                bg-[#386641]
                                text-white
                            "
                        >

                            <FiActivity size={28}/>


                        </div>




                        <div>


                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-widest
                                    text-[#6A994E]
                                "
                            >

                                Gestión de seguimiento

                            </p>




                            <h1
                                className="
                                    text-4xl
                                    font-bold
                                    text-[#386641]
                                "
                            >

                                {
                                    inmuebleSeleccionado
                                        ? "Historial del inmueble"
                                        : "Seguimientos de inmuebles"
                                }


                            </h1>


                        </div>



                    </div>





                    <p className="text-gray-500">


                        {
                            inmuebleSeleccionado

                                ? "Consulta las actualizaciones registradas del avance de obra."

                                : "Seleccione un inmueble en construcción para consultar sus avances."
                        }


                    </p>



                </div>







                <div
                    className="
                        flex
                        gap-3
                    "
                >





                    {
                        inmuebleSeleccionado && (

                            <button

                                onClick={
                                    limpiarSeguimientos
                                }

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-[#D9D5C8]
                                    bg-white
                                    px-5
                                    py-3
                                    font-medium
                                    text-gray-700
                                    transition
                                    hover:bg-gray-100
                                "

                            >

                                <FiArrowLeft/>

                                Volver


                            </button>

                        )

                    }






                    <button
                        onClick={recargar}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#D9D5C8]
                            bg-white
                            px-5
                            py-3
                            font-medium
                            text-gray-700
                            transition
                            hover:bg-gray-100
                        "
                    >

                        <FiRefreshCw/>

                        Actualizar


                    </button>







                    <button
                        onClick={() =>
                            navigate(
                                "/seguimientos/nuevo"
                            )
                        }
                        className="
                            flex
                            items-center
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

                        <FiPlus/>

                        Nuevo seguimiento


                    </button>





                </div>


            </div>









            {/* =========================
                CARGANDO
            ========================== */}


            {
                loading && (

                    <div
                        className="
                            rounded-3xl
                            bg-white
                            p-8
                            text-center
                            text-gray-500
                            shadow
                        "
                    >

                        Cargando información...

                    </div>

                )

            }








            {/* =========================
                ERROR
            ========================== */}


            {
                error && (

                    <div
                        className="
                            rounded-3xl
                            border
                            border-red-200
                            bg-red-50
                            p-6
                            text-center
                            text-[#BC4749]
                        "
                    >

                        {error}

                    </div>

                )

            }









            {/* =========================
                LISTA DE INMUEBLES
            ========================== */}



            {
                !loading &&
                !error &&
                !inmuebleSeleccionado && (


                    <InmuebleSeguimientoList

                        inmuebles={
                            inmuebles
                        }


                        seguimientos={
                            seguimientos
                        }


                        onSeleccionar={
                            seleccionarInmueble
                        }

                    />


                )

            }









            {/* =========================
                DETALLE HISTORIAL
            ========================== */}



            {
                !loading &&
                !error &&
                inmuebleSeleccionado && (


                    <div
                        className="
                            rounded-3xl
                            bg-white
                            p-8
                            shadow-xl
                        "
                    >


                        <div
                            className="
                                mb-6
                                border-b
                                border-[#ECE9DD]
                                pb-5
                            "
                        >

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#386641]
                                "
                            >

                                {
                                    inmuebleSeleccionado.titulo
                                }


                            </h2>



                            <p
                                className="
                                    text-gray-500
                                "
                            >

                                Código:
                                {" "}
                                {
                                    inmuebleSeleccionado.codigo
                                }


                            </p>


                        </div>





                        <SeguimientoTimeline

                            seguimientos={
                                seguimientos
                            }

                        />



                    </div>


                )

            }





        </div>


    );


};



export default SeguimientosPage;