import {
    FiMapPin,
    FiHome,
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
                min-h-[300px]
                lg:min-h-0
                overflow-hidden
                group
            "
        >

            {/* ============================================
                IMAGEN — protagonista visual
            ============================================ */}

            <img
                src={imagen}
                alt={item.tituloInmueble}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                "
            />


            {/* ============================================
                DEGRADADO — legibilidad del texto inferior
            ============================================ */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F382C]/85
                    via-[#0F382C]/35
                    to-transparent
                "
            />

            {/* ============================================
                OVERLAY SUPERIOR — badge de código
            ============================================ */}

            <div className="absolute top-6 left-6 z-10">
                <span
                    className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-white/15
                        backdrop-blur-sm
                        border
                        border-white/30
                        px-3
                        py-1
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                    "
                >
                    {item.codigo}
                </span>
            </div>


            {/* ============================================
                INFORMACIÓN INFERIOR
            ============================================ */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-7
                    text-white
                "
            >

                {/* Título del inmueble */}
                <h3
                    className="
                        text-2xl
                        md:text-3xl
                        font-extrabold
                        leading-tight
                        drop-shadow-sm
                        line-clamp-2
                    "
                >
                    {item.tituloInmueble}
                </h3>


                {/* Descripción breve */}
                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-white/80
                        line-clamp-2
                        max-w-md
                    "
                >
                    {item.descripcionInmueble}
                </p>


                {/* Metadatos — ubicación y zona */}
                <div
                    className="
                        mt-4
                        flex
                        flex-wrap
                        gap-x-5
                        gap-y-2
                        text-xs
                        text-white/75
                    "
                >

                    {/* Ubicación */}
                    <span
                        className="flex items-center gap-1.5"
                    >
                        <FiMapPin
                            size={13}
                            className="text-[#10B981] shrink-0"
                        />
                        {item.departamento},&nbsp;{item.ciudad}
                    </span>


                    {/* Zona */}
                    {item.zona && (
                        <span
                            className="flex items-center gap-1.5"
                        >
                            <FiHome
                                size={13}
                                className="text-[#10B981] shrink-0"
                            />
                            {item.zona}
                        </span>
                    )}

                </div>

            </div>

        </div>

    );

};


export default HomePropertyPanel;