import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHome, FiPlusCircle } from "react-icons/fi";

import InmuebleForm from "../components/InmuebleForm";

import { inmuebleService } from "../services/inmueble.service";

import type { CrearInmuebleRequest } from "../types";

const CrearInmueblePage = () => {

    const navigate = useNavigate();

    const crear = async (
        data: CrearInmuebleRequest
    ) => {

        try {

            await inmuebleService.crear(data);

            navigate("/inmuebles");

        } catch (error) {

            console.error(
                "Error al registrar inmueble:",
                error
            );

        }

    };

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
                            <FiHome size={28} />
                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-widest text-[#6A994E]">

                                Gestión de inmuebles

                            </p>

                            <h1 className="text-4xl font-bold text-[#386641]">

                                Registrar inmueble

                            </h1>

                        </div>

                    </div>

                    <p className="text-gray-500">

                        Complete la información para registrar un nuevo inmueble.

                    </p>

                </div>

                <button
                    onClick={() => navigate("/inmuebles")}
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

                    <FiPlusCircle
                        size={24}
                        className="text-[#386641]"
                    />

                    <h2 className="text-xl font-bold text-[#386641]">

                        Información del inmueble

                    </h2>

                </div>

                <div className="p-8">

                    <InmuebleForm
                        onSubmit={crear}
                    />

                </div>

            </div>

        </div>

    );

};

export default CrearInmueblePage;