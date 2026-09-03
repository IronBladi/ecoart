import { Link } from "react-router-dom";

import {
    FiMapPin,
    FiStar,
    FiEye,
} from "react-icons/fi";

import {
    getImageUrl,
} from "../../../services/api";

import type {
    CatalogoInmueble,
} from "../types";


interface Props {

    inmueble: CatalogoInmueble;

}


const CatalogCard = ({
    inmueble,
}: Props) => {


    const fotoPrincipal =
        inmueble.fotos.find(f => f.principal)
        ?? inmueble.fotos[0];


    const imagen =
        getImageUrl(
            fotoPrincipal?.url
        );


    return (

        <article
            className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-md
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            {/* Imagen */}

            <div
                className="
                    relative
                    h-64
                    overflow-hidden
                "
            >

                <img
                    src={imagen}
                    alt={inmueble.titulo}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />


                <div
                    className="
                        absolute
                        right-4
                        top-4
                        rounded-full
                        bg-white/90
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-[#386641]
                        shadow
                    "
                >

                    {inmueble.moneda}{" "}
                    {inmueble.precio?.toLocaleString()}

                </div>

            </div>


            {/* Contenido */}

            <div className="p-6">

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-[#386641]
                    "
                >
                    {inmueble.titulo}
                </h3>


                <p
                    className="
                        mt-3
                        line-clamp-2
                        text-gray-600
                    "
                >
                    {inmueble.descripcion}
                </p>


                <div
                    className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-gray-500
                    "
                >

                    <FiMapPin />

                    <span>
                        {inmueble.ciudad},{" "}
                        {inmueble.departamento}
                    </span>

                </div>


                <div
                    className="
                        mt-4
                        flex
                        items-center
                        gap-2
                    "
                >

                    <FiStar
                        className="
                            text-yellow-500
                        "
                    />

                    <span
                        className="
                            font-semibold
                        "
                    >
                        {Number(
                            inmueble.puntuacionPromedio
                        ).toFixed(1)}
                    </span>

                    <span
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        ({inmueble.cantidadValoraciones} valoraciones)
                    </span>

                </div>


                <Link
                    to={`/catalogo/${inmueble.id}`}
                    className="
                        mt-6
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#386641]
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#2F5536]
                    "
                >

                    <FiEye />

                    Ver detalle

                </Link>

            </div>

        </article>

    );

};


export default CatalogCard;