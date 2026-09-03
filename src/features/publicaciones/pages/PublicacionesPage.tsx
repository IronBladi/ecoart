import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { useAuth } from "../../auth";

import { usePublicaciones } from "../hooks/usePublicaciones";

import PublicacionList from "../components/PublicacionList";
import EstadoPublicacionList from "../estado/EstadoPublicacionList";

const PublicacionesPage = () => {

    const navigate = useNavigate();

    const { usuario } = useAuth();

    const esGerente = usuario?.idRol === 1;

    const esPromotor = usuario?.idRol === 2;

    const {
        publicaciones,
        loading,
        cambiarEstado,
    } = usePublicaciones();

    if (loading) {

        return (

            <p className="p-10">

                Cargando publicaciones...

            </p>

        );

    }

    return (

        <div className="mx-auto max-w-7xl p-10">

            {/* ===========================
                ENCABEZADO
            =========================== */}

            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-[#386641]
                        "
                    >
                        Publicaciones
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Administración de publicaciones.
                    </p>

                </div>

                {
                    esPromotor && (

                        <button

                            onClick={() =>
                                navigate("/publicaciones/nuevo")
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
                                hover:bg-[#2F5536]
                            "
                        >

                            <FiPlus />

                            Nueva publicación

                        </button>

                    )
                }

            </div>

            {/* ===========================
                GERENTE
            =========================== */}

            {
    esGerente && (

        <EstadoPublicacionList
            publicaciones={publicaciones}
            onGuardar={(
                id: number,
                idEstado: number
            ) =>
                cambiarEstado(
                    id,
                    idEstado
                )
            }
        />

    )
}

            {/* ===========================
                PROMOTOR
            =========================== */}

            {
                esPromotor && (

                    <PublicacionList

                        publicaciones={publicaciones}

                        onCambiarEstado={() => { }}

                    />

                )
            }

        </div>

    );

};

export default PublicacionesPage;