/**
 * CatalogLoading
 * Skeleton cards que reproducen la estructura visual de CatalogCard.
 * Evita CLS al mantener alturas equivalentes a las tarjetas reales.
 */

const SKELETON_COUNT = 6;

const SkeletonCard = () => (
    <div
        className="
            flex
            flex-col
            overflow-hidden
            rounded-2xl
            bg-white
            border
            border-gray-100/80
            shadow-sm
            animate-pulse
        "
        aria-hidden="true"
    >
        {/* Imagen skeleton */}
        <div className="h-56 bg-gray-200 shrink-0" />

        {/* Contenido skeleton */}
        <div className="flex flex-1 flex-col p-5 gap-3">

            {/* Título */}
            <div className="h-4 w-3/4 rounded-md bg-gray-200" />
            <div className="h-4 w-1/2 rounded-md bg-gray-100" />

            {/* Descripción */}
            <div className="space-y-1.5 mt-1">
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="h-3 w-5/6 rounded bg-gray-100" />
            </div>

            {/* Metadatos */}
            <div className="flex items-center gap-2 mt-1">
                <div className="h-3 w-3 rounded-full bg-gray-200" />
                <div className="h-3 w-32 rounded bg-gray-100" />
            </div>

            {/* Separador */}
            <div className="my-2 border-t border-gray-100" />

            {/* CTA */}
            <div className="h-9 w-full rounded-xl bg-gray-200" />

        </div>
    </div>
);

const CatalogLoading = () => {

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
            aria-label="Cargando inmuebles"
            aria-busy="true"
        >

            {/* Encabezado skeleton */}
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 animate-pulse">
                <div>
                    <div className="h-7 w-56 rounded-lg bg-gray-200" />
                    <div className="mt-2 h-4 w-32 rounded-md bg-gray-100" />
                </div>
                <div className="h-6 w-36 rounded-full bg-gray-100" />
            </div>

            {/* Grid de skeleton cards */}
            <div
                className="
                    grid
                    gap-6
                    sm:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {Array.from({ length: SKELETON_COUNT }, (_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>

        </section>

    );

};

export default CatalogLoading;