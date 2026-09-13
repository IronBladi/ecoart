import { Link } from "react-router-dom";

import {
    FiMapPin,
    FiStar,
    FiArrowRight,
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

    const tieneValoracion =
        inmueble.cantidadValoraciones > 0;


    return (

        <article
            className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                bg-white
                border
                border-gray-100/80
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-gray-200/80
            "
        >

            {/* ── Imagen ──────────────────────────────── */}

            <div
                className="
                    relative
                    h-56
                    overflow-hidden
                    shrink-0
                "
            >

                <img
                    src={imagen}
                    alt={inmueble.titulo}
                    className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-[1.04]
                    "
                    loading="lazy"
                />

                {/* Overlay degradado para badges */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent
                    "
                />

                {/* Badge — código de inmueble */}
                <div
                    className="
                        absolute
                        left-3
                        top-3
                        flex
                        items-center
                        gap-1.5
                    "
                >
                    <span
                        className="
                            rounded-full
                            bg-[#0F382C]/80
                            backdrop-blur-sm
                            border
                            border-white/20
                            px-2.5
                            py-0.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-white
                        "
                    >
                        {inmueble.codigo}
                    </span>
                </div>

                {/* Badge — precio flotante */}
                {inmueble.precio != null && (
                    <div
                        className="
                            absolute
                            bottom-3
                            right-3
                        "
                    >
                        <span
                            className="
                                inline-flex
                                items-baseline
                                gap-1
                                rounded-xl
                                bg-white/95
                                backdrop-blur-sm
                                px-3
                                py-1.5
                                shadow-sm
                            "
                        >
                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-gray-400
                                "
                            >
                                {inmueble.moneda}
                            </span>
                            <span
                                className="
                                    text-base
                                    font-extrabold
                                    text-[#0F382C]
                                "
                            >
                                {inmueble.precio.toLocaleString()}
                            </span>
                        </span>
                    </div>
                )}

            </div>


            {/* ── Contenido ───────────────────────────── */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    p-5
                "
            >

                {/* Título */}
                <h3
                    className="
                        text-base
                        font-extrabold
                        leading-snug
                        text-[#0F382C]
                        line-clamp-2
                    "
                >
                    {inmueble.titulo}
                </h3>


                {/* Descripción breve */}
                {inmueble.descripcion && (
                    <p
                        className="
                            mt-2
                            text-sm
                            leading-relaxed
                            text-gray-500
                            line-clamp-2
                        "
                    >
                        {inmueble.descripcion}
                    </p>
                )}


                {/* Metadatos */}
                <div
                    className="
                        mt-3
                        flex
                        flex-col
                        gap-1.5
                    "
                >

                    {/* Ubicación */}
                    <div
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-xs
                            text-gray-500
                        "
                    >
                        <FiMapPin
                            size={12}
                            className="shrink-0 text-[#10B981]"
                        />
                        <span>
                            {inmueble.ciudad},&nbsp;{inmueble.departamento}
                            {inmueble.zona && ` · ${inmueble.zona}`}
                        </span>
                    </div>

                    {/* Valoración */}
                    {tieneValoracion && (
                        <div
                            className="
                                flex
                                items-center
                                gap-1.5
                                text-xs
                                text-gray-500
                            "
                        >
                            <FiStar
                                size={12}
                                className="shrink-0 text-amber-400"
                            />
                            <span className="font-semibold text-gray-700">
                                {Number(inmueble.puntuacionPromedio).toFixed(1)}
                            </span>
                            <span>
                                ({inmueble.cantidadValoraciones} valoración{inmueble.cantidadValoraciones !== 1 ? "es" : ""})
                            </span>
                        </div>
                    )}

                </div>


                {/* Separador */}
                <div
                    className="
                        my-4
                        border-t
                        border-gray-100
                    "
                />


                {/* CTA — enlace al detalle */}
                {/* Ruta original: /catalogo/:id — intacta */}
                <Link
                    to={`/catalogo/${inmueble.id}`}
                    className="
                        group/cta
                        mt-auto
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#0F382C]
                        px-5
                        py-2.5
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-200
                        hover:bg-[#1E5642]
                        hover:shadow-md
                        active:scale-[0.98]
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#10B981]
                    "
                    aria-label={`Ver detalle de ${inmueble.titulo}`}
                >
                    <span>Ver detalle</span>
                    <FiArrowRight
                        size={15}
                        className="
                            transition-transform
                            duration-200
                            group-hover/cta:translate-x-1
                        "
                    />
                </Link>

            </div>

        </article>

    );

};


export default CatalogCard;