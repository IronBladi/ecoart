import { useState } from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    FiArrowLeft,
} from "react-icons/fi";

import {
    CatalogDetailGallery,
    CatalogDetailInfo,
    CatalogDetailMapa,
    CatalogRating,
} from "../components";

import {
    useCatalogoDetalle,
} from "../hooks/useCatalogoDetalle";

import ContactoForm from "../../contactos/components/ContactoForm";

import {
    useContactos,
} from "../../contactos/hooks/useContactos";

import type {
    CrearContactoRequest,
} from "../../contactos/types/contacto";


// ============================================
// COMPONENTE
// ============================================

const CatalogDetailPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [
        puntuacion,
        setPuntuacion,
    ] = useState(0);

    const [
        enviando,
        setEnviando,
    ] = useState(false);


    const {
        inmueble,
        loading,
        valorar,
    } = useCatalogoDetalle(
        Number(id)
    );


    const {
        crear,
        loading: enviandoContacto,
    } = useContactos();


    // ============================================
    // ENVIAR VALORACIÓN
    // ============================================

    async function enviarValoracion() {

        if (!id)
            return;

        if (puntuacion === 0)
            return;

        setEnviando(true);

        try {

            await valorar(
                puntuacion
            );

            setPuntuacion(0);

        }
        finally {

            setEnviando(false);

        }

    }


    // ============================================
    // ENVIAR CONTACTO
    // ============================================

    async function enviarContacto(
        data: CrearContactoRequest
    ): Promise<void> {

        await crear(data);

        alert(
            "Su consulta fue enviada correctamente. Un promotor se comunicará con usted a la brevedad."
        );

    }


    // ============================================
    // ESTADO DE CARGA
    // ============================================

    if (loading) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    text-xl
                "
            >

                Cargando inmueble...

            </div>

        );

    }


    // ============================================
    // INMUEBLE NO ENCONTRADO
    // ============================================

    if (!inmueble) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    flex-col
                    items-center
                    justify-center
                    gap-6
                "
            >

                <h2
                    className="
                        text-3xl
                        font-bold
                    "
                >

                    Inmueble no encontrado

                </h2>

                <button
                    onClick={() => navigate("/")}
                    className="
                        rounded-xl
                        bg-[#386641]
                        px-6
                        py-3
                        text-white
                    "
                >

                    Volver al catálogo

                </button>

            </div>

        );

    }


    // ============================================
    // VISTA PRINCIPAL
    // ============================================

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-10
                "
            >

                {/* ============================================
                    VOLVER
                ============================================ */}

                <button
                    onClick={() => navigate(-1)}
                    className="
                        mb-8
                        flex
                        items-center
                        gap-2
                        font-medium
                        text-[#386641]
                        hover:underline
                    "
                >

                    <FiArrowLeft />

                    Volver

                </button>


                {/* ============================================
                    INFORMACIÓN PRINCIPAL DEL INMUEBLE
                ============================================ */}

                <div
                    className="
                        grid
                        gap-10
                        lg:grid-cols-2
                    "
                >

                    <CatalogDetailGallery
                        fotos={inmueble.fotos}
                    />

                    <CatalogDetailInfo
                        inmueble={inmueble}
                    />

                </div>


                {/* ============================================
                    UBICACIÓN EN EL MAPA

                    Solo se mostrará si el inmueble tiene
                    coordenadas registradas.
                ============================================ */}

                <CatalogDetailMapa
                    latitud={inmueble.latitud}
                    longitud={inmueble.longitud}
                />


                {/* ============================================
                    FORMULARIO DE CONTACTO
                ============================================ */}

                <section
                    className="
                        mt-16
                        rounded-3xl
                        bg-white
                        p-8
                        shadow-md
                    "
                >

                    <h2
                        className="
                            mb-3
                            text-3xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Solicitar información

                    </h2>

                    <p
                        className="
                            mb-8
                            text-gray-600
                        "
                    >

                        ¿Te interesa este inmueble?
                        Completa el siguiente formulario y un
                        promotor se pondrá en contacto contigo.

                    </p>

                    <ContactoForm
                        idInmueble={inmueble.id}
                        onSubmit={enviarContacto}
                        loading={enviandoContacto}
                    />

                </section>


                {/* ============================================
                    VALORACIÓN
                ============================================ */}

                <section
                    className="
                        mt-16
                        rounded-3xl
                        bg-white
                        p-8
                        shadow-md
                    "
                >

                    <h2
                        className="
                            mb-6
                            text-center
                            text-2xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        ¿Qué te pareció este inmueble?

                    </h2>

                    <CatalogRating
                        value={puntuacion}
                        onChange={setPuntuacion}
                        disabled={enviando}
                    />

                    <div
                        className="
                            mt-8
                            flex
                            justify-center
                        "
                    >

                        <button
                            onClick={enviarValoracion}
                            disabled={
                                puntuacion === 0 ||
                                enviando
                            }
                            className="
                                rounded-xl
                                bg-[#386641]
                                px-8
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#2F5536]
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >

                            {
                                enviando
                                    ? "Enviando..."
                                    : "Enviar valoración"
                            }

                        </button>

                    </div>

                </section>

            </div>

        </div>

    );

};

export default CatalogDetailPage;