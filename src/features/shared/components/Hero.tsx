import { useNavigate } from "react-router-dom";

import {
    FiArrowRight,
    FiHome,
} from "react-icons/fi";

const Hero = () => {

    const navigate = useNavigate();

    return (

        <section
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                bg-cover
                bg-center
            "
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(20,30,20,.65),
                        rgba(20,30,20,.55)
                    ),
                    url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80")
                `,
            }}
        >

            {/* Contenido */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-6xl
                    px-8
                    text-center
                    text-white
                "
            >

                <p
                    className="
                        mb-6
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.4em]
                        text-[#F2E8CF]
                    "
                >

                    Sistema de Gestión Inmobiliaria

                </p>

                <h1
                    className="
                        text-5xl
                        font-extrabold
                        leading-tight
                        md:text-7xl
                    "
                >

                    Encuentra el inmueble

                    <br />

                    ideal para ti

                </h1>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-[#F2E8CF]
                        md:text-xl
                    "
                >

                    EcoArt centraliza la administración de inmuebles,
                    propietarios y publicaciones en una plataforma
                    moderna, segura y fácil de utilizar.

                </p>

                {/* Botones */}

                <div
                    className="
                        mt-12
                        flex
                        flex-wrap
                        justify-center
                        gap-5
                    "
                >

                    <button
                        onClick={() => navigate("/login")}
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-[#386641]
                            px-8
                            py-4
                            text-lg
                            font-semibold
                            text-white
                            shadow-lg
                            transition
                            hover:bg-[#2F5536]
                        "
                    >

                        <FiArrowRight size={20} />

                        Iniciar sesión

                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border-2
                            border-white
                            px-8
                            py-4
                            text-lg
                            font-semibold
                            text-white
                            transition
                            hover:bg-white
                            hover:text-[#386641]
                        "
                    >

                        <FiHome size={20} />

                        Explorar inmuebles

                    </button>

                </div>

            </div>

            {/* Indicador inferior */}

            <div
                className="
                    absolute
                    bottom-10
                    left-1/2
                    -translate-x-1/2
                    animate-bounce
                "
            >

                <div
                    className="
                        h-10
                        w-6
                        rounded-full
                        border-2
                        border-white
                    "
                >

                    <div
                        className="
                            mx-auto
                            mt-2
                            h-2
                            w-2
                            rounded-full
                            bg-white
                        "
                    />

                </div>

            </div>

        </section>

    );

};

export default Hero;