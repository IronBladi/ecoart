import { FiSearch } from "react-icons/fi";

const CatalogEmpty = () => {

    return (

        <div
            className="
                rounded-3xl
                bg-white
                py-20
                text-center
                shadow-md
            "
        >

            <FiSearch
                className="
                    mx-auto
                    text-6xl
                    text-gray-300
                "
            />

            <h3
                className="
                    mt-6
                    text-2xl
                    font-semibold
                    text-gray-700
                "
            >

                No se encontraron inmuebles

            </h3>

            <p
                className="
                    mt-3
                    text-gray-500
                "
            >

                Intenta modificar los filtros de búsqueda.

            </p>

        </div>

    );

};

export default CatalogEmpty;