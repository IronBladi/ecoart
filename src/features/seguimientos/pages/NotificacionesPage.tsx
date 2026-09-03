import {
    FiBell,
    FiRefreshCw,
} from "react-icons/fi";

import NotificacionList from "../components/NotificacionList";

import {
    useNotificaciones,
} from "../hooks/useNotificaciones";

const NotificacionesPage = () => {

    const {

        notificaciones,

        loading,

        error,

        cargarNotificaciones,

        marcarComoLeida,

    } = useNotificaciones();

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

                            <FiBell
                                size={28}
                            />

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

                                Centro de avisos

                            </p>

                            <h1
                                className="
                                    text-4xl
                                    font-bold
                                    text-[#386641]
                                "
                            >

                                Notificaciones

                            </h1>

                        </div>

                    </div>

                    <p
                        className="
                            text-gray-500
                        "
                    >

                        Consulte las últimas actualizaciones de los inmuebles en construcción.

                    </p>

                </div>

                <button
                    onClick={
                        cargarNotificaciones
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

                    <FiRefreshCw />

                    Actualizar

                </button>

            </div>

            {/* Loading */}

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

                        Cargando notificaciones...

                    </div>

                )
            }

            {/* Error */}

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

            {/* Lista */}

            {
                !loading &&
                !error && (

                    <NotificacionList

                        notificaciones={
                            notificaciones
                        }

                        onMarcarComoLeida={
                            marcarComoLeida
                        }

                    />

                )
            }

        </div>

    );

};

export default NotificacionesPage;