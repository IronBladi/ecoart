import CatalogFilters from "./CatalogFilters";
import CatalogGrid from "./CatalogGrid";
import { useCatalogo } from "../hooks/useCatalogo";
import type { BuscarCatalogoRequest } from "../types";
import { FiSearch } from "react-icons/fi";

const CatalogSearchSection = () => {
    const { inmuebles, loading, buscar } = useCatalogo();

    async function handleBuscar(filtros: BuscarCatalogoRequest) {
        await buscar(filtros);
    }

    return (
        <section
            id="catalogo-section"
            className="relative z-10 py-16 sm:py-20 bg-[#F8F9FA]"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Panel de Búsqueda */}
                <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40">
                    <div className="mb-8 text-center max-w-2xl mx-auto">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                            <FiSearch className="text-accent text-sm" />
                            <span>Explorador de Inmuebles</span>
                        </span>

                        <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                            Encuentra tu próximo inmueble
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Explora nuestro catálogo de propiedades verificadas en Tarija. Filtra por ubicación, tipología o presupuesto máximo.
                        </p>
                    </div>

                    <CatalogFilters onBuscar={handleBuscar} />
                </div>

                {/* Resultados del Catálogo */}
                <CatalogGrid
                    inmuebles={inmuebles}
                    loading={loading}
                />
            </div>
        </section>
    );
};

export default CatalogSearchSection;