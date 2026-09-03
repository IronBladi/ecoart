import {
    FiHome,
    FiMapPin,
    FiDollarSign,
} from "react-icons/fi";

import {
    getImageUrl,
} from "../../../services/api";

import type {
    HomeCarrusel,
} from "./types/homeCarrusel";


interface Props {

    item: HomeCarrusel;

}


const HomePropertyPanel = ({
    item,
}: Props) => {


    const imagen =
        getImageUrl(
            item.urlFotoPrincipal,
            "https://placehold.co/900x700?text=Sin+Imagen"
        );


    return (

        <div
            className="
                relative
                h-full
                overflow-hidden
            "
        >

            {/* ========================================
                IMAGEN
            ======================================== */}

            <img
                src={imagen}
                alt={item.tituloInmueble}
                className="
                    h-full
                    w-full
                    object-cover
                "
            />


            {/* ========================================
                DEGRADADO
            ======================================== */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/20
                    to-transparent
                "
            />


            {/* ========================================
                INFORMACIÓN
            ======================================== */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-8
                    text-white
                "
            >

                <span
                    className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-[#6A994E]
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                    "
                >

                    {item.codigo}

                </span>


                <h2
                    className="
                        mt-4
                        text-4xl
                        font-bold
                        leading-tight
                    "
                >

                    {item.tituloInmueble}

                </h2>


                <p
                    className="
                        mt-4
                        max-w-xl
                        text-base
                        leading-7
                        text-gray-200
                        line-clamp-3
                    "
                >

                    {item.descripcionInmueble}

                </p>


                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-6
                        text-sm
                    "
                >

                    {/* Ubicación */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <FiMapPin />

                        <span>

                            {item.departamento},{" "}
                            {item.ciudad}

                        </span>

                    </div>


                    {/* Zona */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <FiHome />

                        <span>

                            {item.zona ||
                                "Zona no registrada"}

                        </span>

                    </div>


                    {/* Precio */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <FiDollarSign />

                        <span
                            className="
                                text-xl
                                font-bold
                            "
                        >

                            {item.moneda}{" "}

                            {Number(
                                item.precio ?? 0
                            ).toLocaleString()}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

};


export default HomePropertyPanel;