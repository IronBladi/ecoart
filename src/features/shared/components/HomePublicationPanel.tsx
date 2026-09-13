import { Link } from "react-router-dom";

import {
    FiArrowRight,
    FiCalendar,
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
    ).toLocaleDateString("es-BO", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });


    return (

        <div
            className="
                flex
                h-full
                flex-col
                justify-between
                bg-white
                p-8
                sm:p-10
                lg:p-12
            "
        >

            {/* ── Parte superior ─────────────────────────── */}
            <div className="flex-1 flex flex-col">

                {/* Badge — tipo de publicación */}
                <span
                    className="
                        mb-5
                        w-fit
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-[#10B981]/10
                        border
                        border-[#10B981]/20
                        px-3
                        py-1
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-[#0F382C]
                    "
                >
                    {item.tipoPublicacion}
                </span>


                {/* Título de la publicación */}
                <h2
                    className="
                        text-2xl
                        md:text-3xl
                        font-extrabold
                        leading-tight
                        text-[#0F382C]
                        line-clamp-3
                    "
                >
                    {item.tituloPublicacion}
                </h2>


                {/* Fecha de publicación */}
                <div
                    className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-gray-400
                    "
                >
                    <FiCalendar
                        size={13}
                        className="shrink-0"
                    />
                    <span>Publicado el {fecha}</span>
                </div>


                {/* Contenido / resumen */}
                <p
                    className="
                        mt-6
                        text-sm
                        leading-7
                        text-gray-600
                        line-clamp-4
                    "
                >
                    {item.contenidoPublicacion}
                </p>

            </div>


            {/* ── Parte inferior ─────────────────────────── */}
            <div className="mt-8 flex flex-col gap-5">

                {/* Precio — cápsula destacada */}
                <div
                    className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-gray-100
                        bg-[#F8F9FA]
                        px-5
                        py-4
                    "
                    aria-label={`Precio: ${item.moneda} ${Number(item.precio ?? 0).toLocaleString()}`}
                >
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#0F382C]/8
                            text-[#0F382C]
                        "
                    >
                        <FiTag size={18} />
                    </div>
                    <div>
                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-widest
                                text-gray-400
                            "
                        >
                            Precio
                        </p>
                        <p
                            className="
                                text-xl
                                font-extrabold
                                text-[#0F382C]
                                leading-tight
                            "
                        >
                            {item.moneda}{" "}
                            {Number(item.precio ?? 0).toLocaleString()}
                        </p>
                    </div>
                </div>


                {/* CTA — ver detalle del inmueble */}
                {/* ⚠️ Ruta original intacta: /catalogo/:idInmueble */}
                <Link
                    to={`/catalogo/${item.idInmueble}`}
                    className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-[#0F382C]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-200
                        hover:bg-[#1E5642]
                        hover:shadow-lg
                        active:scale-[0.98]
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#10B981]
                    "
                    aria-label={`Ver detalle del inmueble: ${item.tituloInmueble}`}
                >
                    <span>Ver detalle</span>
                    <FiArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>

            </div>

        </div>

    );

};


export default HomePublicationPanel;