import { Link } from "react-router-dom";

import {
    FiArrowRight,
    FiCalendar,
    FiFileText,
    FiTag,
} from "react-icons/fi";

import type { HomeCarrusel } from "./types/homeCarrusel";


interface Props {

    item: HomeCarrusel;

}


const HomePublicationPanel = ({
    item,
}: Props) => {

    const fecha = new Date(
        item.fechaPublicacion
    ).toLocaleDateString("es-BO");


    return (

        <div
            className="
                flex
                h-full
                flex-col
                justify-center
                bg-white
                p-10
                lg:p-14
            "
        >

            <span
                className="
                    mb-4
                    w-fit
                    rounded-full
                    bg-[#386641]/10
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-[#386641]
                "
            >

                {item.tipoPublicacion}

            </span>


            <h2
                className="
                    text-4xl
                    font-bold
                    leading-tight
                    text-[#1F1F1F]
                "
            >

                {item.tituloPublicacion}

            </h2>


            <div
                className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                "
            >

                <FiCalendar />

                <span>

                    Publicado el {fecha}

                </span>

            </div>


            <div
                className="
                    mt-8
                    flex
                    items-start
                    gap-3
                "
            >

                <FiFileText
                    className="
                        mt-1
                        text-[#6A994E]
                    "
                    size={20}
                />

                <p
                    className="
                        text-base
                        leading-8
                        text-gray-600
                    "
                >

                    {item.contenidoPublicacion}

                </p>

            </div>


            <div
                className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-[#F7F8F6]
                    p-5
                "
            >

                <FiTag
                    size={20}
                    className="text-[#386641]"
                />

                <div>

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-widest
                            text-gray-500
                        "
                    >

                        Precio

                    </p>

                    <p
                        className="
                            text-2xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        {item.moneda}{" "}
                        {Number(item.precio ?? 0).toLocaleString()}

                    </p>

                </div>

            </div>


            {/* ============================================
                ACCESO AL DETALLE PÚBLICO DEL INMUEBLE
            ============================================ */}

            <div className="mt-12">

                <Link
                    to={`/catalogo/${item.idInmueble}`}
                    className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-[#386641]
                        px-8
                        py-4
                        text-lg
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#2F5536]
                    "
                >

                    Ver detalle

                    <FiArrowRight size={20} />

                </Link>

            </div>

        </div>

    );

};


export default HomePublicationPanel;