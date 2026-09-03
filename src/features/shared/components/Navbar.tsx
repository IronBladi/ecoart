import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiHome,
    FiInfo,
    FiMapPin,
    FiLogIn,
} from "react-icons/fi";

const Navbar = () => {

    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    return (

        <header
            className={`
                fixed
                left-0
                top-0
                z-50
                w-full
                transition-all
                duration-300
                ${
                    scrolled
                        ? "bg-white shadow-lg"
                        : "bg-transparent"
                }
            `}
        >

            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-8
                    py-5
                "
            >

                {/* Logo */}

                <div
                    className="
                        cursor-pointer
                        text-3xl
                        font-extrabold
                        tracking-wide
                        text-[#386641]
                    "
                    onClick={() => navigate("/")}
                >

                    EcoArt

                </div>

                {/* Menú */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-10
                        md:flex
                    "
                >

                    <button
                        onClick={() => navigate("/")}
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-700
                            transition
                            hover:text-[#386641]
                        "
                    >

                        <FiHome />

                        Inicio

                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-700
                            transition
                            hover:text-[#386641]
                        "
                    >

                        <FiMapPin />

                        Propiedades

                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-700
                            transition
                            hover:text-[#386641]
                        "
                    >

                        <FiInfo />

                        Nosotros

                    </button>

                    <button
                        onClick={() => navigate("/contacto")}
                        className="
                            text-gray-700
                            transition
                            hover:text-[#386641]
                        "
                    >

                        Contacto

                    </button>

                </nav>

                {/* Login */}

                <button
                    onClick={() => navigate("/login")}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#386641]
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#2F5536]
                    "
                >

                    <FiLogIn />

                    Iniciar sesión

                </button>

            </div>

        </header>

    );

};

export default Navbar;