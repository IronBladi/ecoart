import { Link } from "react-router-dom";

import {
    FiEdit,
    FiCheckCircle,
    FiXCircle,
    FiFileText,
    FiHome,
    FiImage,
} from "react-icons/fi";


import type {
    Publicacion,
} from "../types";


import {
    useAuth,
} from "../../auth";


import EstadoBadge from "./EstadoBadge";



interface Props {


    publicacion: Publicacion;


    onCambiarEstado: (

        id: number,

        activo: boolean

    ) => void;


}



const PublicacionCard = ({

    publicacion,

    onCambiarEstado,

}: Props) => {


    const {
        usuario,
    } = useAuth();



    const esGerente =
        usuario?.idRol === 1;



    const esPromotor =
        usuario?.idRol === 2;




    return (

        <div

            className="
                rounded-xl
                border
                bg-white
                p-5
                shadow-sm
                transition-all
                hover:shadow-lg
            "

        >


            {/* =========================
                HEADER
            ========================= */}


            <div

                className="
                    flex
                    justify-between
                    gap-4
                "

            >


                <div>


                    <h2

                        className="
                            text-xl
                            font-bold
                            text-[#386641]
                        "

                    >

                        {publicacion.titulo}


                    </h2>



                    <p

                        className="
                            mt-1
                            text-sm
                            text-gray-500
                        "

                    >

                        Código inmueble:

                        {" "}

                        <strong>

                            {publicacion.codigoInmueble}

                        </strong>


                    </p>


                </div>



                <EstadoBadge

                    estado={
                        publicacion.estado
                    }

                />


            </div>




            {/* =========================
                FOTO PRINCIPAL
            ========================= */}



            {

                publicacion.urlFotoPrincipal && (

                    <img

                        src={
                            publicacion.urlFotoPrincipal
                        }

                        alt={
                            publicacion.titulo
                        }


                        className="
                            mt-5
                            h-56
                            w-full
                            rounded-lg
                            object-cover
                        "

                    />

                )

            }





            {/* =========================
                INFORMACION
            ========================= */}



            <div

                className="
                    mt-5
                    space-y-2
                "

            >


                <p>


                    <FiHome

                        className="
                            mr-2
                            inline
                        "

                    />


                    <strong>

                        Inmueble:

                    </strong>


                    {" "}


                    {publicacion.tituloInmueble}


                </p>




                <p>


                    <FiFileText

                        className="
                            mr-2
                            inline
                        "

                    />


                    <strong>

                        Tipo:

                    </strong>


                    {" "}


                    {publicacion.tipoPublicacion}



                </p>




                <p>


                    <strong>

                        Plantilla:

                    </strong>


                    {" "}


                    {

                        publicacion.nombrePlantilla

                        ??

                        "Contenido manual"

                    }


                </p>





                <p>


                    <strong>

                        Promotor:

                    </strong>


                    {" "}


                    {publicacion.usuario}



                </p>





                <p>


                    <strong>

                        Fecha:

                    </strong>


                    {" "}


                    {

                        new Date(
                            publicacion.fechaPublicacion
                        )
                        .toLocaleDateString()


                    }



                </p>



            </div>





            {/* =========================
                CONTENIDO
            ========================= */}



            <div

                className="
                    mt-6
                    rounded-lg
                    bg-gray-50
                    p-4
                    text-gray-700
                    whitespace-pre-wrap
                "

            >


                {publicacion.contenido}


            </div>





            {/* =========================
                ACCIONES
            ========================= */}



            <div

                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                "

            >




                {/* EDITAR */}



                {

                    esPromotor && (


                        <Link


                            to={
                                `/publicaciones/editar/${publicacion.id}`
                            }


                            className="
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                bg-yellow-500
                                px-4
                                py-2
                                text-white
                                transition
                                hover:bg-yellow-600
                            "


                        >


                            <FiEdit />


                            Editar


                        </Link>


                    )


                }






                {/* FOTOS */}



                <Link


                    to={
                        `/publicaciones/${publicacion.id}/fotos`
                    }


                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-white
                        transition
                        hover:bg-blue-700
                    "


                >


                    <FiImage />


                    Fotografías


                </Link>






                {/* CAMBIAR ESTADO */}



                {


                    esGerente && (



                        <button


                            onClick={() =>

                                onCambiarEstado(

                                    publicacion.id,

                                    !publicacion.activo

                                )

                            }



                            className={`

                                flex

                                items-center

                                gap-2

                                rounded-lg

                                px-4

                                py-2

                                text-white

                                transition


                                ${

                                    publicacion.activo

                                    ?

                                    "bg-red-600 hover:bg-red-700"

                                    :

                                    "bg-green-600 hover:bg-green-700"

                                }

                            `}



                        >



                            {


                                publicacion.activo

                                ?

                                <FiXCircle />

                                :

                                <FiCheckCircle />


                            }





                            {


                                publicacion.activo

                                ?

                                "Archivar"

                                :

                                "Publicar"


                            }



                        </button>



                    )


                }



            </div>



        </div>


    );


};



export default PublicacionCard;