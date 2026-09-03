import { useNavigate } from "react-router-dom";

import {
    FiEdit3,
    FiFileText,
    FiCalendar,
} from "react-icons/fi";

import type { Plantilla } from "../types";

interface Props {

    plantilla: Plantilla;

    modoEdicion: boolean;

}

const PlantillaCard = ({
    plantilla,
    modoEdicion,
}: Props) => {

    const navigate = useNavigate();

    const editar = () => {

        navigate(`/plantillas/editar/${plantilla.id}`);

    };

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
                hover:-translate-y-1
                hover:shadow-lg
                ${
                    modoEdicion
                        ? "hover:border-[#6A994E] hover:bg-[#FAFCF7]"
                        : ""
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

                        <FiFileText
                            size={24}
                            className="text-[#386641]"
                        />

                    </div>

                    <h2 className="text-xl font-bold text-[#2F3A2F]">

                        {plantilla.nombre}

                    </h2>

                </div>

                <span
                    className={`
                        rounded-full
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        tracking-wide
                        ${
                            plantilla.activa
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }
                    `}
                >

                    {plantilla.activa
                        ? "Activa"
                        : "Inactiva"}

                </span>

            </div>

            {/* Contenido */}

            <p
                className="
                    mt-6
                    line-clamp-6
                    whitespace-pre-wrap
                    break-all
                    text-sm
                    leading-7
                    text-gray-600
                "
            >

                {plantilla.contenido}

            </p>

            {/* Información */}

            <div className="mt-8 space-y-3">

                <div className="flex items-center gap-2 text-gray-600">

                    <FiCalendar
                        className="text-[#6A994E]"
                    />

                    <span>

                        Creada:

                        {" "}

                        {new Date(
                            plantilla.fechaCreacion
                        ).toLocaleDateString()}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-gray-600">

                    <FiCalendar
                        className="text-[#6A994E]"
                    />

                    <span>

                        Actualizada:

                        {" "}

                        {new Date(
                            plantilla.fechaModificacion
                        ).toLocaleDateString()}

                    </span>

                </div>

            </div>

            {/* Footer */}

            <div
                className="
                    mt-8
                    flex
                    items-center
                    justify-end
                    border-t
                    border-[#ECE9DD]
                    pt-5
                "
            >

                {modoEdicion && (

                    <button
                        type="button"
                        onClick={editar}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-[#386641]
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#6A994E]
                        "
                    >

                        <FiEdit3 size={16} />

                        Editar

                    </button>

                )}

            </div>

        </div>

    );

};

export default PlantillaCard;