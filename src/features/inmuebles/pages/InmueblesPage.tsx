import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth";

import {
    useInmuebles,
    useCatalogos,
} from "../hooks";

import BusquedaInmueble from "../components/BusquedaInmueble";
import InmuebleList from "../components/InmuebleList";

const InmueblesPage = () => {

    const navigate = useNavigate();

    const { usuario } = useAuth();

    const esGerente = usuario?.idRol === 1;

    const {
        inmuebles,
        loading,
        buscar,
        recargar,
    } = useInmuebles();

    const {

        tipos,

        estados,

        loading: loadingCatalogos,

        error,

    } = useCatalogos();

    const [modoEdicion, setModoEdicion] = useState(false);

    if (loading || loadingCatalogos) {

        return (

            <p className="p-10">

                Cargando...

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

                    Inmuebles

                </h1>

                {esGerente && (

                    <div className="flex gap-3">

                        <button
                            onClick={() => navigate("/inmuebles/nuevo")}
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

                            Nuevo inmueble

                        </button>

                        <button
                            onClick={() =>
                                setModoEdicion(!modoEdicion)
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

                            {modoEdicion
                                ? "Cancelar edición"
                                : "Editar inmuebles"}

                        </button>

                    </div>

                )}

            </div>

            {/* Buscador */}

            <BusquedaInmueble
                onBuscar={buscar}
                onLimpiar={recargar}
                tipos={tipos}
                estados={estados}
            />

            {/* Mensaje modo edición */}

            {esGerente && modoEdicion && (

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

                    Seleccione el inmueble que desea editar.

                </p>

            )}

            {/* Lista */}

            <InmuebleList
                inmuebles={inmuebles}
                modoEdicion={esGerente && modoEdicion}
            />

        </div>

    );

};

export default InmueblesPage;