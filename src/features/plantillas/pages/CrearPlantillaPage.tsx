import { useNavigate } from "react-router-dom";

import {
    FiArrowLeft,
    FiFileText,
    FiPlusCircle,
} from "react-icons/fi";

import PlantillaForm from "../components/PlantillaForm";

import { plantillaService } from "../services/plantillaService";

import type { CrearPlantillaRequest } from "../types";

const CrearPlantillaPage = () => {

    const navigate = useNavigate();

    const crear = async (
        data: CrearPlantillaRequest
    ) => {

        try {

            await plantillaService.crear(data);

            navigate("/plantillas");

        } catch (error) {

            console.error(
                "Error registrando plantilla:",
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

                            <FiFileText size={28} />

                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-widest text-[#6A994E]">

                                Gestión de plantillas

                            </p>

                            <h1 className="text-4xl font-bold text-[#386641]">

                                Registrar plantilla

                            </h1>

                        </div>

                    </div>

                    <p className="text-gray-500">

                        Cree una nueva plantilla para las publicaciones.

                    </p>

                </div>

                <button
                    onClick={() => navigate("/plantillas")}
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

                        Información de la plantilla

                    </h2>

                </div>

                <div className="p-8">

                    <PlantillaForm
                        onSubmit={crear}
                    />

                </div>

            </div>

        </div>

    );

};

export default CrearPlantillaPage;