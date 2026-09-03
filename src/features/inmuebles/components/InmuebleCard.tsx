import { useNavigate } from "react-router-dom";

import {
    FiMapPin,
    FiDollarSign,
    FiEdit3,
    FiHome,
    FiCamera,
} from "react-icons/fi";

import { useAuth } from "../../auth";

import InmuebleMiniMapa from "./InmuebleMiniMapa";

import {
    getImageUrl,
} from "../../../services/api";

import type { Inmueble } from "../types";


interface Props {
    inmueble: Inmueble;
    modoEdicion: boolean;
}


const IMAGEN_GENERICA =
    "https://placehold.co/800x500?text=Sin+fotografia";


const InmuebleCard = ({
    inmueble,
    modoEdicion,
}: Props) => {

    const navigate = useNavigate();

    const { usuario } = useAuth();

    const esGerente = usuario?.idRol === 1;

    const esPromotor = usuario?.idRol === 2;


    const editar = () => {

        navigate(
            `/inmuebles/editar/${inmueble.id}`
        );

    };


    const administrarFotos = () => {

        navigate(
            `/inmuebles/${inmueble.id}/fotos`
        );

    };


    // ===============================
    // FOTO PRINCIPAL
    // ===============================

    const fotoPrincipal =
        inmueble.fotos.find(
            f => f.principal
        ) ??
        inmueble.fotos[0];


    const imagen =
        getImageUrl(
            fotoPrincipal?.url,
            IMAGEN_GENERICA
        );


    return (

        <div
            className={`
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${
                    modoEdicion
                        ? "hover:border-[#6A994E] hover:bg-[#FAFCF7]"
                        : ""
                }
            `}
        >

            {/* ==========================
                IMAGEN
            ========================== */}

            <img
                src={imagen}
                alt={inmueble.titulo}
                className="
                    h-64
                    w-full
                    object-cover
                "
            />


            <div className="p-6">

                {/* ==========================
                    ENCABEZADO
                ========================== */}

                <div className="flex items-start justify-between">

                    <div>

                        <div
                            className="
                                mb-3
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#386641]/10
                            "
                        >

                            <FiHome
                                size={24}
                                className="text-[#386641]"
                            />

                        </div>


                        <h2
                            className="
                                text-xl
                                font-bold
                                text-[#2F3A2F]
                            "
                        >
                            {inmueble.titulo}
                        </h2>

                    </div>


                    <span
                        className="
                            rounded-full
                            bg-[#A7C957]/20
                            px-4
                            py-1
                            text-xs
                            font-semibold
                            tracking-wide
                            text-[#386641]
                        "
                    >
                        {inmueble.codigo}
                    </span>

                </div>


                {/* ==========================
                    DESCRIPCIÓN
                ========================== */}

                <p
                    className="
                        mt-5
                        line-clamp-3
                        text-sm
                        leading-7
                        text-gray-600
                    "
                >
                    {inmueble.descripcion}
                </p>


                {/* ==========================
                    INFORMACIÓN
                ========================== */}

                <div className="mt-6 space-y-3">

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-600
                        "
                    >

                        <FiMapPin
                            className="text-[#6A994E]"
                        />

                        <span>
                            {inmueble.departamento},{" "}
                            {inmueble.ciudad}
                        </span>

                    </div>


                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-600
                        "
                    >

                        <FiMapPin
                            className="text-[#6A994E]"
                        />

                        <span>
                            {inmueble.zona ||
                                "Sin zona registrada"}
                        </span>

                    </div>


                    <div className="flex items-center gap-2">

                        <FiDollarSign
                            className="text-[#BC4749]"
                        />

                        <span
                            className="
                                font-bold
                                text-[#386641]
                            "
                        >

                            {inmueble.moneda}{" "}

                            {Number(
                                inmueble.precio
                            ).toLocaleString()}

                        </span>

                    </div>

                </div>


                {/* ==========================
                    UBICACIÓN EN EL MAPA
                ========================== */}

                <div className="mt-6">

                    <InmuebleMiniMapa
                        latitud={inmueble.latitud}
                        longitud={inmueble.longitud}
                    />

                </div>


                {/* ==========================
                    FOOTER
                ========================== */}

                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        border-t
                        border-[#ECE9DD]
                        pt-5
                    "
                >

                    <span
                        className={`
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            ${
                                inmueble.activo
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }
                        `}
                    >

                        {inmueble.activo
                            ? "Activo"
                            : "Inactivo"}

                    </span>


                    {(modoEdicion || esPromotor) && (

                        <div className="flex gap-3">

                            {esGerente &&
                                modoEdicion && (

                                <button
                                    type="button"
                                    onClick={editar}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-[#386641]
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-[#6A994E]
                                    "
                                >

                                    <FiEdit3 size={16} />

                                    Editar

                                </button>

                            )}


                            <button
                                type="button"
                                onClick={administrarFotos}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-[#BC4749]
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#A33B3D]
                                "
                            >

                                <FiCamera size={16} />

                                Fotografías

                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

};


export default InmuebleCard;