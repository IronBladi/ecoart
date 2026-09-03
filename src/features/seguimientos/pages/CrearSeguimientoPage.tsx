import {
    useNavigate
} from "react-router-dom";

import {
    FiArrowLeft,
    FiActivity,
    FiPlusCircle,
} from "react-icons/fi";


import SeguimientoForm from "../components/SeguimientoForm";


import {
    seguimientoService
} from "../services/seguimiento.service";


import {
    useSeguimientos
} from "../hooks/useSeguimientos";


import type {
    CrearSeguimientoRequest,
} from "../types";



const CrearSeguimientoPage = () => {


    const navigate = useNavigate();



    const {

        inmuebles,

        loading,

        error,

    } = useSeguimientos();






    const crear = async (
        data: CrearSeguimientoRequest
    ) => {


        try {


            await seguimientoService.crear(
                data
            );


            navigate(
                "/seguimientos"
            );


        } catch (error) {


            console.error(
                "Error al registrar seguimiento:",
                error
            );


        }


    };






    return (


        <div
            className="
                mx-auto
                max-w-7xl
                px-8
                py-8
            "
        >



            {/* Encabezado */}


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

                                Registrar seguimiento

                            </h1>


                        </div>


                    </div>





                    <p
                        className="
                            text-gray-500
                        "
                    >

                        Registre una nueva actualización del avance de un inmueble.

                    </p>


                </div>







                <button

                    onClick={() =>
                        navigate(
                            "/seguimientos"
                        )
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

                    <FiArrowLeft />

                    Volver


                </button>



            </div>









            {/* Tarjeta formulario */}



            <div
                className="
                    rounded-3xl
                    bg-white
                    shadow-xl
                "
            >



                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-t-3xl
                        border-b
                        border-[#ECE9DD]
                        bg-[#F8F7F2]
                        px-8
                        py-6
                    "
                >



                    <FiPlusCircle
                        size={24}
                        className="text-[#386641]"
                    />



                    <h2
                        className="
                            text-xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Información del seguimiento

                    </h2>



                </div>








                <div
                    className="
                        p-8
                    "
                >



                    {
                        loading && (

                            <div className="
                                rounded-xl
                                bg-[#F8F7F2]
                                p-5
                                text-gray-500
                            ">

                                Cargando inmuebles...

                            </div>

                        )

                    }




                    {
                        error && (

                            <div className="
                                rounded-xl
                                bg-red-50
                                p-5
                                text-[#BC4749]
                            ">

                                {error}

                            </div>

                        )

                    }







                    {
                        !loading &&
                        !error && (


                            <SeguimientoForm

                                onSubmit={
                                    crear
                                }


                                inmuebles={
                                    inmuebles
                                }


                            />


                        )

                    }





                </div>



            </div>





        </div>


    );


};



export default CrearSeguimientoPage;