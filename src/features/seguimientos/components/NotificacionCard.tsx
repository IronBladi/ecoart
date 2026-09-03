import {
    FiBell,
    FiCalendar,
    FiCheckCircle,
    FiHome,
} from "react-icons/fi";

import type {
    NotificacionSeguimiento,
} from "../types";

interface Props {

    notificacion: NotificacionSeguimiento;

    onMarcarComoLeida: (
        idSeguimiento: number
    ) => void | Promise<void>;

}

const NotificacionCard = ({
    notificacion,
    onMarcarComoLeida,
}: Props) => {

    return (

        <div
            className={`
                rounded-3xl
                border
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${
                    notificacion.leida
                        ? "border-[#E8E5D9] bg-white opacity-80"
                        : "border-[#6A994E] bg-[#FAFCF7]"
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

                        <FiBell
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
                        {notificacion.titulo}
                    </h2>

                </div>

                <span
                    className={`
                        rounded-full
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        ${
                            notificacion.leida
                                ? "bg-gray-200 text-gray-600"
                                : "bg-[#A7C957]/20 text-[#386641]"
                        }
                    `}
                >
                    {
                        notificacion.leida
                            ? "Leída"
                            : "Nueva"
                    }
                </span>

            </div>

            {/* Inmueble */}

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

                <FiHome
                    className="text-[#6A994E]"
                />

                <div>

                    <p
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        Inmueble
                    </p>

                    <p
                        className="
                            font-semibold
                            text-gray-700
                        "
                    >
                        ID: {notificacion.idInmueble}
                    </p>

                </div>

            </div>

            {/* Mensaje */}

            <div className="mt-6">

                <p
                    className="
                        text-sm
                        text-gray-500
                    "
                >
                    Mensaje
                </p>

                <p
                    className="
                        mt-1
                        text-gray-700
                    "
                >
                    {notificacion.mensaje}
                </p>

            </div>

            {/* Avance */}

            {
                notificacion.porcentajeAvance !== undefined &&
                notificacion.porcentajeAvance !== null && (

                    <div className="mt-6">

                        <div
                            className="
                                mb-2
                                flex
                                justify-between
                                text-sm
                            "
                        >

                            <span className="text-gray-500">

                                Avance

                            </span>

                            <span
                                className="
                                    font-semibold
                                    text-[#386641]
                                "
                            >
                                {notificacion.porcentajeAvance}%
                            </span>

                        </div>

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
                                "
                                style={{
                                    width: `${notificacion.porcentajeAvance}%`,
                                }}
                            />

                        </div>

                    </div>

                )
            }

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
                            notificacion.fecha
                        ).toLocaleDateString()
                    }

                </div>

                {
                    notificacion.leida ? (

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-[#386641]
                            "
                        >

                            <FiCheckCircle />

                            Leída

                        </div>

                    ) : (

                        <button
                            onClick={() =>
                                onMarcarComoLeida(
                                    notificacion.idSeguimiento
                                )
                            }
                            className="
                                rounded-xl
                                bg-[#386641]
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                                transition
                                hover:bg-[#6A994E]
                            "
                        >
                            Marcar como leída
                        </button>

                    )
                }

            </div>

        </div>

    );

};

export default NotificacionCard;