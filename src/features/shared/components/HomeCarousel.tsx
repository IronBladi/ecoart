import {
    useEffect,
    useState,
} from "react";

import {
    FiChevronLeft,
    FiChevronRight,
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

    if (loading) {

        return (

            <section className="bg-[#F8F8F6] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div
                        className="
                            flex
                            h-[650px]
                            items-center
                            justify-center
                            rounded-3xl
                            bg-white
                            shadow-lg
                        "
                    >

                        <span
                            className="
                                text-lg
                                font-semibold
                                text-[#386641]
                            "
                        >

                            Cargando publicaciones...

                        </span>

                    </div>

                </div>

            </section>

        );

    }

    if (items.length === 0) {

        return null;

    }

    return (

        <section className="bg-[#F8F8F6] py-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="relative">

                    <HomeCarouselSlide
                        item={items[indexActual]}
                    />

                    {items.length > 1 && (

                        <>

                            {/* Flecha izquierda */}

                            <button
                                type="button"
                                onClick={anterior}
                                className="
                                    absolute
                                    left-5
                                    top-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-white/90
                                    p-4
                                    shadow-lg
                                    transition
                                    hover:bg-white
                                "
                            >

                                <FiChevronLeft size={28} />

                            </button>

                            {/* Flecha derecha */}

                            <button
                                type="button"
                                onClick={siguiente}
                                className="
                                    absolute
                                    right-5
                                    top-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-white/90
                                    p-4
                                    shadow-lg
                                    transition
                                    hover:bg-white
                                "
                            >

                                <FiChevronRight size={28} />

                            </button>

                            {/* Indicadores */}

                            <div
                                className="
                                    mt-8
                                    flex
                                    justify-center
                                    gap-3
                                "
                            >

                                {items.map((_, indice) => (

                                    <button
                                        key={indice}
                                        type="button"
                                        onClick={() =>
                                            setIndexActual(indice)
                                        }
                                        className={`
                                            h-3
                                            rounded-full
                                            transition-all
                                            ${
                                                indice === indexActual
                                                    ? "w-10 bg-[#386641]"
                                                    : "w-3 bg-gray-300"
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