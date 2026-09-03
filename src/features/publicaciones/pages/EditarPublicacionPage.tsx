import {
    useEffect,
    useState,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    FiArrowLeft,
    FiEdit,
    FiFileText,
} from "react-icons/fi";

import PublicacionForm from "../components/PublicacionForm";

import {
    usePublicaciones,
} from "../hooks/usePublicaciones";

import {
    useInmuebles,
} from "../../inmuebles/hooks";

import {
    usePlantillas,
} from "../../plantillas/hooks";

import type {
    Publicacion,
    ActualizarPublicacionRequest,
    CrearPublicacionRequest,
} from "../types";

const EditarPublicacionPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        obtenerPorId,
        actualizar,
        loading,
    } = usePublicaciones();

    const {
        inmuebles,
        loading: loadingInmuebles,
    } = useInmuebles();

    const {
        plantillas,
        loading: loadingPlantillas,
    } = usePlantillas();

    const [
        publicacion,
        setPublicacion,
    ] = useState<Publicacion>();

    const [
        cargando,
        setCargando,
    ] = useState(true);

    useEffect(() => {

        const cargar = async () => {

            if (!id)
                return;

            try {

                const data =
                    await obtenerPorId(
                        Number(id)
                    );

                setPublicacion(data);

            }
            finally {

                setCargando(false);

            }

        };

        cargar();

    }, [id]);

    const guardar = async (
        data: CrearPublicacionRequest
    ) => {

        if (!id)
            return;

        const request: ActualizarPublicacionRequest = {

            titulo: data.titulo,

            idPlantilla: data.idPlantilla,

            contenidoManual:
                data.contenidoManual,

            idTipo:
                data.idTipo,

        };

        await actualizar(
            Number(id),
            request
        );

        navigate("/publicaciones");

    };

    if (
        cargando ||
        loadingInmuebles ||
        loadingPlantillas
    ) {

        return (

            <div className="flex h-96 items-center justify-center">

                <p>

                    Cargando publicación...

                </p>

            </div>

        );

    }

    return (

        <div className="mx-auto max-w-7xl px-8 py-8">

            {/* Encabezado */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <div className="mb-3 flex items-center gap-3">

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

                            <FiFileText size={28} />

                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-widest text-[#6A994E]">

                                Gestión de publicaciones

                            </p>

                            <h1 className="text-4xl font-bold text-[#386641]">

                                Editar publicación

                            </h1>

                        </div>

                    </div>

                    <p className="text-gray-500">

                        Modifique la información de la publicación.

                    </p>

                </div>

                <button
                    onClick={() =>
                        navigate("/publicaciones")
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

            {/* Tarjeta */}

            <div className="rounded-3xl bg-white shadow-xl">

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

                    <FiEdit
                        size={24}
                        className="text-[#386641]"
                    />

                    <h2 className="text-xl font-bold text-[#386641]">

                        Editar información

                    </h2>

                </div>

                <div className="p-8">

                    {

                        publicacion && (

                            <PublicacionForm
                                publicacion={publicacion}
                                onSubmit={guardar}
                                loading={loading}
                                inmuebles={inmuebles}
                                plantillas={plantillas}
                            />

                        )

                    }

                </div>

            </div>

        </div>

    );

};

export default EditarPublicacionPage;