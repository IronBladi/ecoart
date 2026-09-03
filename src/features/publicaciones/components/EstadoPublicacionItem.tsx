import {
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";

import type {
    Publicacion,
} from "../types";

interface Props {

    publicacion: Publicacion;

    onCambiarEstado: (
        id: number,
        idEstado: number
    ) => void;

}

const EstadoPublicacionItem = ({
    publicacion,
    onCambiarEstado,
}: Props) => {

    const publicada =
        publicacion.estado.toLowerCase() === "publicada";

    return (

        <div
            className="
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-[#E8E5D9]
                bg-white
                p-5
                shadow-sm
                transition
                hover:shadow-md
                md:flex-row
                md:items-center
                md:justify-between
            "
        >

            {/* Información */}

            <div>

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-[#386641]
                    "
                >

                    {publicacion.tituloInmueble}

                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                    "
                >

                    Código:{" "}

                    <span className="font-medium">

                        {publicacion.codigoInmueble}

                    </span>

                </p>

            </div>

            {/* Estado */}

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        ${
                            publicada
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                        }
                    `}
                >

                    {publicacion.estado}

                </span>

                <button
                    type="button"
                    onClick={() =>
                        onCambiarEstado(
                            publicacion.id,
                            publicada ? 2 : 1
                        )
                    }
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
                            publicada
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-[#386641] hover:bg-[#2F5536]"
                        }
                    `}
                >

                    {

                        publicada
                            ? <FiXCircle size={18} />
                            : <FiCheckCircle size={18} />

                    }

                    {

                        publicada
                            ? "Archivar"
                            : "Publicar"

                    }

                </button>

            </div>

        </div>

    );

};

export default EstadoPublicacionItem;