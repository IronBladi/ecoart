import {
    FiMapPin,
    FiStar,
    FiTag,
    FiHome,
    FiHash,
} from "react-icons/fi";

import type {
    CatalogoDetalle,
} from "../types";

interface Props {

    inmueble: CatalogoDetalle;

}

const CatalogDetailInfo = ({
    inmueble,
}: Props) => {

    return (

        <div
            className="
                rounded-3xl
                bg-white
                p-8
                shadow-lg
            "
        >

            {/* Código */}

            <div
                className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#F3F6F4]
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#386641]
                "
            >

                <FiHash />

                {inmueble.codigo}

            </div>

            {/* Título */}

            <h1
                className="
                    text-4xl
                    font-bold
                    text-[#386641]
                "
            >

                {inmueble.titulo}

            </h1>

            {/* Precio */}

            <div
                className="
                    mt-6
                    text-4xl
                    font-bold
                    text-[#6A994E]
                "
            >

                {inmueble.moneda}{" "}

                {inmueble.precio?.toLocaleString()}

            </div>

            {/* Ubicación */}

            <div
                className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    text-gray-600
                "
            >

                <FiMapPin
                    className="
                        text-[#386641]
                    "
                />

                <span>

                    {inmueble.direccion}

                </span>

            </div>

            <div
                className="
                    mt-2
                    text-gray-500
                "
            >

                {inmueble.zona}

                {inmueble.zona &&
                    inmueble.ciudad &&
                    ", "}

                {inmueble.ciudad}

                {inmueble.ciudad &&
                    inmueble.departamento &&
                    ", "}

                {inmueble.departamento}

            </div>

            {/* Tipo */}

            <div
                className="
                    mt-8
                    flex
                    items-center
                    gap-3
                "
            >

                <FiHome
                    className="
                        text-[#386641]
                    "
                />

                <div>

                    <p
                        className="
                            text-sm
                            text-gray-500
                        "
                    >

                        Tipo de inmueble

                    </p>

                    <p
                        className="
                            font-semibold
                        "
                    >

                        {inmueble.nombreTipo ?? "No especificado"}

                    </p>

                </div>

            </div>

            {/* Referencia */}

            {inmueble.referencia && (

                <div
                    className="
                        mt-6
                        flex
                        items-start
                        gap-3
                    "
                >

                    <FiTag
                        className="
                            mt-1
                            text-[#386641]
                        "
                    />

                    <div>

                        <p
                            className="
                                text-sm
                                text-gray-500
                            "
                        >

                            Referencia

                        </p>

                        <p>

                            {inmueble.referencia}

                        </p>

                    </div>

                </div>

            )}

            {/* Valoración */}

            <div
                className="
                    mt-10
                    flex
                    items-center
                    gap-3
                "
            >

                <FiStar
                    className="
                        text-2xl
                        text-yellow-500
                    "
                />

                <div>

                    <div
                        className="
                            text-xl
                            font-semibold
                        "
                    >

                        {Number(
                            inmueble.puntuacionPromedio
                        ).toFixed(1)}

                    </div>

                    <div
                        className="
                            text-sm
                            text-gray-500
                        "
                    >

                        {inmueble.cantidadValoraciones} valoraciones

                    </div>

                </div>

            </div>

            {/* Descripción */}

            <div
                className="
                    mt-10
                "
            >

                <h2
                    className="
                        mb-4
                        text-xl
                        font-bold
                        text-[#386641]
                    "
                >

                    Descripción

                </h2>

                <p
                    className="
                        whitespace-pre-line
                        leading-8
                        text-gray-700
                    "
                >

                    {inmueble.descripcion}

                </p>

            </div>

        </div>

    );

};

export default CatalogDetailInfo;