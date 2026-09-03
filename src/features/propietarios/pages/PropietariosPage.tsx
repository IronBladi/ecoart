import { useState } from "react";
import { useNavigate } from "react-router-dom";

import usePropietarios from "../hooks/usePropietarios";

import PropietarioList from "../components/PropietarioList";

const PropietariosPage = () => {

    const navigate = useNavigate();

    const {
        propietarios,
        loading,
        error,
    } = usePropietarios();

    const [modoEdicion, setModoEdicion] =
        useState(false);

    if (loading) {

        return (
            <p className="p-10">
                Cargando propietarios...
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

                    Propietarios

                </h1>

                <div className="flex gap-3">

                    <button
                        onClick={() =>
                            navigate("/propietarios/nuevo")
                        }
                        className="
                            rounded
                            bg-emerald-600
                            px-4
                            py-2
                            text-white
                            transition
                            hover:bg-emerald-700
                        "
                    >
                        Nuevo propietario
                    </button>

                    <button
                        onClick={() =>
                            setModoEdicion(!modoEdicion)
                        }
                        className="
                            rounded
                            bg-blue-600
                            px-4
                            py-2
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >
                        {modoEdicion
                            ? "Cancelar"
                            : "Editar"}
                    </button>

                </div>

            </div>

            {/* Aviso */}

            {modoEdicion && (

                <p
                    className="
                        mb-5
                        rounded
                        bg-yellow-100
                        p-3
                        text-yellow-800
                    "
                >
                    Seleccione el propietario que desea editar.
                </p>

            )}

            {/* Lista */}

            <PropietarioList
                propietarios={propietarios}
                modoEdicion={modoEdicion}
            />

        </div>

    );

};

export default PropietariosPage;