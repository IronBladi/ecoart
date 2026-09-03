import CatalogFilters from "./CatalogFilters";
import CatalogGrid from "./CatalogGrid";

import { useCatalogo } from "../hooks/useCatalogo";

import type {
    BuscarCatalogoRequest,
} from "../types";

const CatalogSearchSection = () => {

    const {

        inmuebles,

        loading,

        buscar,

    } = useCatalogo();

    async function handleBuscar(
        filtros: BuscarCatalogoRequest
    ) {

        await buscar(filtros);

    }

    return (

        <section
            className="
                relative
                -mt-24
                z-20
                pb-20
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-2xl
                "
            >

                <div className="mb-8 text-center">

                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Encuentra el inmueble perfecto

                    </h2>

                    <p
                        className="
                            mt-3
                            text-gray-500
                        "
                    >

                        Explora nuestro catálogo de inmuebles publicados.

                    </p>

                </div>

                <CatalogFilters

                    onBuscar={handleBuscar}

                />

            </div>

            <CatalogGrid

                inmuebles={inmuebles}

                loading={loading}

            />

        </section>

    );

};

export default CatalogSearchSection;