import {
    useEffect,
    useState,
} from "react";

import {
    FiChevronLeft,
    FiChevronRight,
    FiGrid,
} from "react-icons/fi";

import HomeCarouselSlide from "./HomeCarouselSlide";

import { homeService } from "./services/home.service";

import type { HomeCarrusel } from "./types/homeCarrusel";

const INTERVALO = 6000;

const HomeCarousel = () => {

    const [items, setItems] = useState<HomeCarrusel[]>([]);

    const [loading, setLoading] = useState(true);

    const [indexActual, setIndexActual] = useState(0);

    useEffect(() => {

        const cargar = async () => {

            try {

                const data =
                    await homeService.obtenerCarrusel();

                setItems(data);

            }
            catch (error) {

                console.error(error);

            }
            finally {

                setLoading(false);

            }

        };

        cargar();

    }, []);

    useEffect(() => {

        if (items.length <= 1)
            return;

        const intervalo = window.setInterval(() => {

            setIndexActual((actual) =>
                actual === items.length - 1
                    ? 0
                    : actual + 1
            );

        }, INTERVALO);

        return () => window.clearInterval(intervalo);

    }, [items]);

    const siguiente = () => {

        setIndexActual((actual) =>
            actual === items.length - 1
                ? 0
                : actual + 1
        );

    };

    const anterior = () => {

        setIndexActual((actual) =>
            actual === 0
                ? items.length - 1
                : actual - 1
        );

    };

    // ── Estado de carga ─────────────────────────────────────────────
    if (loading) {
        return (
            <section
                className="bg-[#F8F9FA] py-16 md:py-20"
                aria-label="Cargando publicaciones destacadas"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Encabezado skeleton */}
                    <div className="mb-10 flex flex-col items-center gap-3 animate-pulse">
                        <div className="h-5 w-28 rounded-full bg-gray-200" />
                        <div className="h-8 w-72 rounded-lg bg-gray-200" />
                        <div className="h-4 w-52 rounded-md bg-gray-100" />
                    </div>
                    {/* Slide skeleton */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 animate-pulse">
                        <div className="grid lg:grid-cols-2 min-h-[580px]">
                            <div className="bg-gray-200 min-h-[300px] lg:min-h-0" />
                            <div className="p-10 lg:p-14 flex flex-col gap-5">
                                <div className="h-5 w-24 rounded-full bg-gray-100" />
                                <div className="h-9 w-64 rounded-lg bg-gray-200" />
                                <div className="h-4 w-32 rounded-md bg-gray-100" />
                                <div className="space-y-2 mt-4">
                                    <div className="h-4 w-full rounded bg-gray-100" />
                                    <div className="h-4 w-5/6 rounded bg-gray-100" />
                                    <div className="h-4 w-4/6 rounded bg-gray-100" />
                                </div>
                                <div className="h-16 w-full rounded-2xl bg-gray-100 mt-4" />
                                <div className="h-12 w-40 rounded-2xl bg-gray-200 mt-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // ── Estado vacío ─────────────────────────────────────────────────
    if (items.length === 0) {
        return null;
    }

    // ── Renderizado principal ────────────────────────────────────────
    return (
        <section
            className="bg-[#F8F9FA] py-16 md:py-20"
            aria-label="Publicaciones destacadas de EcoArt"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ── Encabezado editorial ─────────────────────────── */}
                <div className="mb-10 flex flex-col items-center text-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0F382C]">
                        <FiGrid size={11} />
                        Publicaciones destacadas
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F382C] leading-tight">
                        Descubre nuestros inmuebles
                    </h2>
                    <p className="text-sm text-gray-500 max-w-md">
                        Selección de propiedades disponibles en Tarija y Bolivia
                    </p>
                </div>

                {/* ── Carrusel ─────────────────────────────────────── */}
                <div className="relative">

                    <HomeCarouselSlide
                        item={items[indexActual]}
                    />

                    {items.length > 1 && (
                        <>
                            {/* ── Flecha izquierda ─────────────────── */}
                            <button
                                type="button"
                                onClick={anterior}
                                aria-label="Ver publicación anterior"
                                className="
                                    absolute
                                    left-3
                                    top-1/2
                                    -translate-y-1/2
                                    z-10
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-md
                                    border
                                    border-gray-200/80
                                    text-[#0F382C]
                                    transition-all
                                    duration-200
                                    hover:bg-[#0F382C]
                                    hover:text-white
                                    hover:border-[#0F382C]
                                    hover:shadow-lg
                                    active:scale-95
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#10B981]
                                "
                            >
                                <FiChevronLeft size={20} />
                            </button>

                            {/* ── Flecha derecha ───────────────────── */}
                            <button
                                type="button"
                                onClick={siguiente}
                                aria-label="Ver publicación siguiente"
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    z-10
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-md
                                    border
                                    border-gray-200/80
                                    text-[#0F382C]
                                    transition-all
                                    duration-200
                                    hover:bg-[#0F382C]
                                    hover:text-white
                                    hover:border-[#0F382C]
                                    hover:shadow-lg
                                    active:scale-95
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#10B981]
                                "
                            >
                                <FiChevronRight size={20} />
                            </button>

                            {/* ── Indicadores de posición ──────────── */}
                            <div
                                className="mt-7 flex items-center justify-center gap-2"
                                role="tablist"
                                aria-label="Indicadores de publicación"
                            >
                                {items.map((_, indice) => (
                                    <button
                                        key={indice}
                                        type="button"
                                        role="tab"
                                        aria-selected={indice === indexActual}
                                        aria-label={`Ir a publicación ${indice + 1} de ${items.length}`}
                                        onClick={() =>
                                            setIndexActual(indice)
                                        }
                                        className={`
                                            h-2
                                            rounded-full
                                            transition-all
                                            duration-300
                                            ${
                                                indice === indexActual
                                                    ? "w-8 bg-[#0F382C]"
                                                    : "w-2 bg-gray-300 hover:bg-gray-400"
                                            }
                                        `}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                </div>

            </div>
        </section>
    );

};

export default HomeCarousel;