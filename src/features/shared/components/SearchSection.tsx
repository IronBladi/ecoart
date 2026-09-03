import {
    FiSearch,
    FiMapPin,
    FiHome,
    FiDollarSign,
} from "react-icons/fi";

const SearchSection = () => {

    return (

        <section className="relative -mt-24 z-20">

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

                        Busca por ubicación, tipo de inmueble o rango de precio.

                    </p>

                </div>

                <div className="grid gap-5 lg:grid-cols-5">

                    {/* Tipo */}

                    <div className="relative">

                        <FiHome
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#6A994E]
                            "
                        />

                        <select
                            disabled
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                py-4
                                pl-12
                                pr-4
                                outline-none
                            "
                        >

                            <option>

                                Tipo de inmueble

                            </option>

                        </select>

                    </div>

                    {/* Departamento */}

                    <div className="relative">

                        <FiMapPin
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#6A994E]
                            "
                        />

                        <select
                            disabled
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                py-4
                                pl-12
                                pr-4
                            "
                        >

                            <option>

                                Departamento

                            </option>

                        </select>

                    </div>

                    {/* Ciudad */}

                    <div className="relative">

                        <FiMapPin
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#6A994E]
                            "
                        />

                        <input
                            disabled
                            placeholder="Ciudad"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                py-4
                                pl-12
                                pr-4
                            "
                        />

                    </div>

                    {/* Precio */}

                    <div className="relative">

                        <FiDollarSign
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#6A994E]
                            "
                        />

                        <select
                            disabled
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                py-4
                                pl-12
                                pr-4
                            "
                        >

                            <option>

                                Precio

                            </option>

                        </select>

                    </div>

                    {/* Botón */}

                    <button
                        disabled
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                            rounded-xl
                            bg-[#386641]
                            py-4
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#2F5536]
                            disabled:cursor-not-allowed
                            disabled:opacity-80
                        "
                    >

                        <FiSearch />

                        Buscar

                    </button>

                </div>

                <p
                    className="
                        mt-5
                        text-center
                        text-sm
                        text-gray-400
                    "
                >

                    Esta funcionalidad estará disponible en un próximo sprint.

                </p>

            </div>

        </section>

    );

};

export default SearchSection;