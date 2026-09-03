import {
    useState,
} from "react";


import {
    FiUser,
    FiPhone,
    FiMail,
    FiShield,
    FiCalendar,
    FiCheckCircle,
    FiXCircle,
    FiPower,
    FiEdit3,
} from "react-icons/fi";


import type {
    Usuario,
} from "../types";


import ConfirmarCambioEstadoModal from "./ConfirmarCambioEstadoModal";



interface Props {

    usuario: Usuario;

    esUsuarioActual: boolean;


    onCambiarEstado: (
        id: number,
        activo: boolean
    ) => void | Promise<void>;


    onEditar: (
        id: number
    ) => void;

}




const UsuarioCard = ({
    usuario,
    esUsuarioActual,
    onCambiarEstado,
    onEditar,
}: Props) => {



    const [
        mostrarModal,
        setMostrarModal,
    ] = useState(false);



    const [
        activoNuevo,
        setActivoNuevo,
    ] = useState(false);





    const abrirModal = () => {

        setActivoNuevo(
            !usuario.activo
        );


        setMostrarModal(true);

    };





    const cerrarModal = () => {

        setMostrarModal(false);

    };





    const confirmarCambioEstado = async () => {


        await onCambiarEstado(
            usuario.id,
            activoNuevo
        );


        setMostrarModal(false);

    };





    return (

        <>


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
                    hover:shadow-lg
                "
            >



                {/* ENCABEZADO */}


                <div
                    className="
                        flex
                        items-start
                        justify-between
                    "
                >


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

                            <FiUser
                                size={24}
                                className="text-[#386641]"
                            />

                        </div>




                        <h2
                            className="
                                text-xl
                                font-bold
                                text-[#2F3A2F]
                            "
                        >

                            {usuario.nombre}{" "}
                            {usuario.apellido}

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
                            tracking-wide
                            text-[#386641]
                        "
                    >

                        {usuario.rol}

                    </span>


                </div>







                {/* INFORMACION */}


                <div
                    className="
                        mt-6
                        space-y-3
                    "
                >



                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-600
                        "
                    >

                        <FiMail
                            className="text-[#6A994E]"
                        />


                        <span>
                            {usuario.correo}
                        </span>

                    </div>




                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-600
                        "
                    >

                        <FiPhone
                            className="text-[#6A994E]"
                        />


                        <span>

                            {
                                usuario.telefono ||
                                "Sin teléfono"
                            }

                        </span>

                    </div>




                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-600
                        "
                    >

                        <FiShield
                            className="text-[#386641]"
                        />


                        <span>
                            {usuario.rol}
                        </span>


                    </div>


                </div>









                {/* ESTADO */}


                <div
                    className="
                        mt-6
                        rounded-xl
                        bg-[#F8F7F2]
                        p-4
                    "
                >


                    <p
                        className="
                            text-sm
                            text-gray-500
                        "
                    >

                        Estado

                    </p>




                    <div
                        className="
                            mt-2
                            flex
                            items-center
                            gap-2
                        "
                    >


                        {
                            usuario.activo ? (

                                <>

                                    <FiCheckCircle
                                        className="text-[#6A994E]"
                                    />


                                    <span
                                        className="
                                            font-semibold
                                            text-[#386641]
                                        "
                                    >

                                        Usuario activo

                                    </span>


                                </>


                            ) : (


                                <>


                                    <FiXCircle
                                        className="text-[#BC4749]"
                                    />


                                    <span
                                        className="
                                            font-semibold
                                            text-[#BC4749]
                                        "
                                    >

                                        Usuario inactivo

                                    </span>


                                </>


                            )

                        }


                    </div>


                </div>









                {/* FOOTER */}



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



                    <div>


                        <div
                            className="
                                flex
                                items-center
                                gap-1
                                text-xs
                                text-gray-500
                            "
                        >


                            <FiCalendar />


                            Registrado el{" "}


                            {
                                new Date(
                                    usuario.fechaCreacion
                                )
                                .toLocaleDateString(
                                    "es-ES"
                                )
                            }


                        </div>




                        {
                            usuario.ultimoAcceso && (

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-gray-500
                                    "
                                >

                                    Último acceso{" "}


                                    {
                                        new Date(
                                            usuario.ultimoAcceso
                                        )
                                        .toLocaleDateString(
                                            "es-ES"
                                        )
                                    }

                                </p>

                            )
                        }


                    </div>










                    <div
                        className="
                            flex
                            gap-3
                        "
                    >



                        {/* EDITAR */}



                        <button

                            type="button"

                            onClick={() =>
                                onEditar(
                                    usuario.id
                                )
                            }

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
                                transition
                                hover:bg-[#6A994E]
                            "

                        >

                            <FiEdit3
                                size={15}
                            />


                            Editar


                        </button>










                        {/* CAMBIO ESTADO */}


                        {
                            !esUsuarioActual && (

                                <button

                                    type="button"

                                    onClick={abrirModal}

                                    className={`
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        ${
                                            usuario.activo
                                                ? "bg-[#BC4749] hover:bg-red-700"
                                                : "bg-[#386641] hover:bg-[#6A994E]"
                                        }
                                    `}

                                >


                                    <FiPower
                                        size={16}
                                    />



                                    {
                                        usuario.activo
                                            ? "Desactivar"
                                            : "Activar"
                                    }


                                </button>

                            )
                        }



                    </div>



                </div>



            </div>







            <ConfirmarCambioEstadoModal

                mostrar={mostrarModal}

                usuario={usuario}

                activoNuevo={activoNuevo}

                onCancelar={cerrarModal}

                onConfirmar={
                    confirmarCambioEstado
                }

            />



        </>

    );

};



export default UsuarioCard;