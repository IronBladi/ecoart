import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usePlantillas } from "../hooks";

import PlantillaList from "../components/PlantillaList";

const PlantillasPage = () => {

    const navigate = useNavigate();

    const {

        plantillas,

        loading,

        error,

    } = usePlantillas();

    const [modoEdicion, setModoEdicion] =
        useState(false);

    if (loading) {

        return (

            <p className="p-10">

                Cargando plantillas...

            </p>

        );

    }

    if (error) {

        return (

            <p className="p-10 text-red-600">

                {error}

            </p>

        );

    }

    return (

        <div className="mx-auto max-w-7xl p-10">

            {/* Encabezado */}

            <div className="mb-8 flex items-center justify-between">

                <h1 className="text-3xl font-bold">

                    Plantillas

                </h1>

                <div className="flex gap-3">

                    <button
                        onClick={() =>
                            navigate("/plantillas/nuevo")
                        }
                        className="
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

                        Nueva plantilla

                    </button>

                    <button
                        onClick={() =>
                            setModoEdicion(
                                !modoEdicion
                            )
                        }
                        className={`
                            rounded-xl
                            px-5
                            py-3
                            font-semibold
                            text-white
                            transition
                            ${
                                modoEdicion
                                    ? "bg-[#BC4749] hover:bg-[#A33B3D]"
                                    : "bg-[#3B82F6] hover:bg-[#2563EB]"
                            }
                        `}
                    >

                        {

                            modoEdicion
                                ? "Cancelar edición"
                                : "Editar plantillas"

                        }

                    </button>

                </div>

            </div>

            {/* Aviso */}

            {modoEdicion && (

                <p
                    className="
                        mb-5
                        rounded-xl
                        border
                        border-yellow-300
                        bg-yellow-50
                        p-4
                        text-yellow-800
                    "
                >

                    Seleccione la plantilla que desea editar.

                </p>

            )}

            {/* Lista */}

            <PlantillaList

                plantillas={plantillas}

                modoEdicion={modoEdicion}

            />

        </div>

    );

};

export default PlantillasPage;