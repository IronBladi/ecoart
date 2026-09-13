import { FiSearch, FiSliders } from "react-icons/fi";

/**
 * CatalogEmpty
 * Estado vacío del catálogo. Comunicar claramente que no hay resultados
 * y orientar al usuario a modificar los filtros.
 * No se elimina ni se modifica ninguna acción o lógica existente.
 */
const CatalogEmpty = () => {

    return (

        <div
            className="
                mx-auto
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
                pt-10
                pb-16
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    border-gray-200
                    bg-white
                    py-20
                    px-6
                    text-center
                "
                role="status"
                aria-live="polite"
                aria-label="No se encontraron inmuebles con los filtros actuales"
            >

                {/* Ícono ilustrativo */}
                <div
                    className="
                        mb-6
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0F382C]/5
                        border
                        border-[#0F382C]/10
                        text-[#0F382C]/40
                    "
                    aria-hidden="true"
                >
                    <FiSearch size={36} />
                </div>

                {/* Mensaje principal */}
                <h3
                    className="
                        text-xl
                        font-extrabold
                        text-[#0F382C]
                    "
                >
                    Sin resultados para esta búsqueda
                </h3>

                <p
                    className="
                        mt-3
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-gray-500
                    "
                >
                    No encontramos inmuebles con los filtros seleccionados.
                    Intenta ajustar la búsqueda o ampliar el rango de criterios.
                </p>

                {/* Sugerencia visual */}
                <div
                    className="
                        mt-8
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-100
                        bg-[#F8F9FA]
                        px-5
                        py-3
                        text-sm
                        text-gray-500
                    "
                    aria-hidden="true"
                >
                    <FiSliders
                        size={15}
                        className="text-[#10B981] shrink-0"
                    />
                    <span>
                        Prueba modificar el departamento, tipo o precio máximo
                    </span>
                </div>

            </div>
        </div>

    );

};

export default CatalogEmpty;