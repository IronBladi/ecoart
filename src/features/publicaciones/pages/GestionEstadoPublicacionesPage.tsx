import {
    FiSettings,
} from "react-icons/fi";

import { usePublicaciones } from "../hooks/usePublicaciones";

import EstadoPublicacionList from "../estado/EstadoPublicacionList";

const GestionEstadoPublicacionesPage = () => {

    const {
        publicaciones,
        loading,
        cambiarEstado,
    } = usePublicaciones();

    if (loading) {

        return (

            <div
                className="
                    flex
                    h-96
                    items-center
                    justify-center
                    text-lg
                    font-medium
                    text-slate-500
                "
            >

                Cargando publicaciones...

            </div>

        );

    }

    return (

        <div
            className="
                min-h-screen
                bg-slate-50
                px-8
                py-10
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >

                {/* ===========================
                    CABECERA
                ============================ */}

                <div
                    className="
                        mb-8
                        flex
                        items-center
                        gap-5
                    "
                >

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#386641]
                            text-white
                            shadow-lg
                        "
                    >

                        <FiSettings size={30} />

                    </div>

                    <div>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                text-[#386641]
                            "
                        >

                            Gestión de Estado de Publicaciones

                        </h1>

                        <p
                            className="
                                mt-1
                                text-gray-500
                            "
                        >

                            Administre la visibilidad de las publicaciones
                            disponibles en el portal inmobiliario.

                        </p>

                    </div>

                </div>

                {/* ===========================
                    CONTENEDOR PRINCIPAL
                ============================ */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-md
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-semibold
                                    text-slate-800
                                "
                            >

                                Publicaciones registradas

                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-slate-500
                                "
                            >

                                Seleccione un nuevo estado y presione
                                <span className="font-semibold">
                                    {" "}Guardar
                                </span>
                                para aplicar los cambios.

                            </p>

                        </div>

                        <div
                            className="
                                rounded-xl
                                bg-[#A7C957]/20
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-[#386641]
                            "
                        >

                            {publicaciones.length} publicaciones

                        </div>

                    </div>

                    <EstadoPublicacionList

                        publicaciones={publicaciones}

                        onGuardar={async (
                            id: number,
                            idEstado: number
                        ) => {

                            await cambiarEstado(
                                id,
                                idEstado
                            );

                        }}

                    />

                </div>

            </div>

        </div>

    );

};

export default GestionEstadoPublicacionesPage;