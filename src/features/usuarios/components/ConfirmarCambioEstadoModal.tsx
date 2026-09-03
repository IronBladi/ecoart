import {
    FiAlertTriangle,
} from "react-icons/fi";

import type {
    Usuario,
} from "../types";


interface Props {

    mostrar: boolean;

    usuario: Usuario | null;

    activoNuevo: boolean;

    onCancelar: () => void;

    onConfirmar: () => Promise<void>;

}


const ConfirmarCambioEstadoModal = ({
    mostrar,
    usuario,
    activoNuevo,
    onCancelar,
    onConfirmar,
}: Props) => {


    if (!mostrar || !usuario) {
        return null;
    }



    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
                px-4
            "
        >


            <div
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-2xl
                "
            >


                {/* Icono */}

                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-[#A7C957]/20
                    "
                >

                    <FiAlertTriangle
                        size={32}
                        className="text-[#386641]"
                    />

                </div>




                {/* Titulo */}

                <h2
                    className="
                        mt-6
                        text-center
                        text-2xl
                        font-bold
                        text-[#2F3A2F]
                    "
                >

                    Confirmar cambio de estado

                </h2>




                {/* Mensaje */}

                <p
                    className="
                        mt-4
                        text-center
                        text-gray-600
                    "
                >

                    ¿Desea{" "}

                    <strong>
                        {
                            activoNuevo
                                ? "activar"
                                : "desactivar"
                        }
                    </strong>

                    {" "}al usuario:

                    <br />

                    <strong
                        className="text-[#386641]"
                    >

                        {usuario.nombre}{" "}
                        {usuario.apellido}

                    </strong>

                    ?

                </p>





                {/* Botones */}

                <div
                    className="
                        mt-8
                        flex
                        justify-end
                        gap-4
                    "
                >


                    <button
                        type="button"
                        onClick={onCancelar}
                        className="
                            rounded-xl
                            border
                            border-[#D9D5C8]
                            bg-white
                            px-5
                            py-3
                            font-semibold
                            text-gray-700
                            transition
                            hover:bg-gray-100
                        "
                    >

                        Cancelar

                    </button>




                    <button
                        type="button"
                        onClick={onConfirmar}
                        className={`
                            rounded-xl
                            px-5
                            py-3
                            font-semibold
                            text-white
                            transition
                            ${
                                activoNuevo
                                    ?
                                    `
                                    bg-[#386641]
                                    hover:bg-[#6A994E]
                                    `
                                    :
                                    `
                                    bg-[#BC4749]
                                    hover:bg-red-700
                                    `
                            }
                        `}
                    >

                        {
                            activoNuevo
                                ? "Activar"
                                : "Desactivar"
                        }

                    </button>


                </div>



            </div>


        </div>

    );

};


export default ConfirmarCambioEstadoModal;