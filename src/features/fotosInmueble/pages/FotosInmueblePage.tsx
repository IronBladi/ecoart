import { useParams } from "react-router-dom";

import {
    FiCamera,
    FiImage,
} from "react-icons/fi";

import FotoInmuebleForm from "../components/FotoInmuebleForm";
import FotoInmuebleList from "../components/FotoInmuebleList";

import useFotosInmueble from "../hooks/useFotosInmueble";

import { fotoInmuebleService } from "../services/fotoInmueble.service";

import type {
    SubirFotoInmuebleRequest,
} from "../types";

const FotosInmueblePage = () => {

    const { id } = useParams();

    const idInmueble = Number(id);

    const {

        fotos,

        loading,

        error,

        recargar,

    } = useFotosInmueble(idInmueble);

    const subirFoto = async (
        data: SubirFotoInmuebleRequest
    ) => {

        await fotoInmuebleService.subir(
            idInmueble,
            data
        );

        await recargar();

    };

    const eliminarFoto = async (
        idFoto: number
    ) => {

        await fotoInmuebleService.eliminar(
            idFoto
        );

        await recargar();

    };

    if (loading) {

        return (

            <div className="flex h-80 items-center justify-center">

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            mb-4
                            h-12
                            w-12
                            animate-spin
                            rounded-full
                            border-4
                            border-[#A7C957]
                            border-t-[#386641]
                        "
                    />

                    <p className="font-medium text-[#386641]">

                        Cargando fotografías...

                    </p>

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <p className="text-center text-red-500">

                {error}

            </p>

        );

    }

    return (

        <div className="mx-auto max-w-7xl space-y-10">

            {/* Encabezado */}

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

                        <FiCamera size={28} />

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

                            Gestión de fotografías

                        </p>

                        <h1
                            className="
                                text-4xl
                                font-bold
                                text-[#386641]
                            "
                        >

                            Fotografías del inmueble

                        </h1>

                    </div>

                </div>

                <p className="text-gray-500">

                    Agregue, visualice y elimine fotografías del inmueble.

                </p>

            </div>

            {/* Formulario */}

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

                    <FiImage
                        size={24}
                        className="text-[#386641]"
                    />

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Nueva fotografía

                    </h2>

                </div>

                <div className="p-8">

                    <FotoInmuebleForm
                        onSubmit={subirFoto}
                    />

                </div>

            </div>

            {/* Galería */}

            <section>

                <h2
                    className="
                        mb-6
                        text-2xl
                        font-bold
                        text-[#386641]
                    "
                >

                    Fotografías registradas

                </h2>

                <FotoInmuebleList
                    fotos={fotos}
                    onEliminar={eliminarFoto}
                />

            </section>

        </div>

    );

};

export default FotosInmueblePage;