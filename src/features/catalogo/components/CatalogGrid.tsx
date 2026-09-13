import CatalogCard from "./CatalogCard";
import CatalogLoading from "./CatalogLoading";
import CatalogEmpty from "./CatalogEmpty";

import type {
    CatalogoInmueble,
} from "../types";

interface Props {

    inmuebles: CatalogoInmueble[];

    loading: boolean;

}

const CatalogGrid = ({
    inmuebles,
    loading,
}: Props) => {

    if (loading) {

        return <CatalogLoading />;

    }

    if (inmuebles.length === 0) {

        return <CatalogEmpty />;

    }

    return (

        <section
            className="
                mx-auto
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
                pt-10
                pb-16
            "
            aria-label="Resultados del catálogo de inmuebles"
        >

            {/* ── Encabezado de resultados ──────────────────── */}
            <div
                className="
                    mb-8
                    flex
                    flex-wrap
                    items-end
                    justify-between
                    gap-4
                "
            >

                <div>
                    <h2
                        className="
                            text-2xl
                            font-extrabold
                            text-[#0F382C]
                            leading-tight
                        "
                    >
                        Inmuebles disponibles
                    </h2>
                    <p
                        className="
                            mt-1
                            text-sm
                            text-gray-500
                        "
                    >
                        {inmuebles.length}{" "}
                        inmueble{inmuebles.length !== 1 ? "s" : ""}{" "}
                        encontrado{inmuebles.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* Indicador visual de resultados activos */}
                <span
                    className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-[#10B981]/10
                        border
                        border-[#10B981]/20
                        px-3
                        py-1
                        text-xs
                        font-bold
                        text-[#0F382C]
                    "
                >
                    <span
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#10B981]
                            animate-pulse
                        "
                    />
                    Catálogo actualizado
                </span>

            </div>

            {/* ── Grid de tarjetas ────────────────────────────── */}
            <div
                className="
                    grid
                    gap-6
                    sm:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {inmuebles.map((inmueble) => (

                    <CatalogCard
                        key={inmueble.id}
                        inmueble={inmueble}
                    />

                ))}

            </div>

        </section>

    );

};

export default CatalogGrid;