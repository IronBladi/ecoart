import { FiBell, FiCheckCircle } from "react-icons/fi";

import { useAuth } from "../../features/auth";

const Header = () => {

    const { usuario } = useAuth();

    return (

        <header
            className="
                sticky
                top-0
                z-30
                flex
                h-24
                items-center
                justify-between
                border-b
                border-[#E8E5D9]
                bg-[#F8F7F2]/90
                px-10
                backdrop-blur
            "
        >

            {/* IZQUIERDA */}

            <div>

                <h1
                    className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-[#386641]
                    "
                >
                    Dashboard
                </h1>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                    "
                >
                    Bienvenido nuevamente

                    <span
                        className="
                            ml-1
                            font-semibold
                            text-[#386641]
                        "
                    >
                        {usuario?.nombre}
                    </span>

                </p>

            </div>

            {/* DERECHA */}

            <div
                className="
                    flex
                    items-center
                    gap-6
                "
            >

                {/* Estado del sistema */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-[#E7E4D8]
                        bg-white
                        px-5
                        py-3
                        shadow-sm
                    "
                >

                    {/* Indicador visual */}

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#A7C957]/20
                        "
                    >

                        <FiCheckCircle
                            size={20}
                            className="text-[#386641]"
                        />

                    </div>

                    {/* Información del estado */}

                    <div>

                        <p
                            className="
                                text-xs
                                font-medium
                                text-gray-500
                            "
                        >
                            Estado del sistema
                        </p>

                        <div
                            className="
                                mt-0.5
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#6A994E]
                                "
                            />

                            <span
                                className="
                                    text-sm
                                    font-semibold
                                    text-[#386641]
                                "
                            >
                                Operativo
                            </span>

                        </div>

                    </div>

                </div>

                {/* Notificaciones */}

                <button
                    className="
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shadow-sm
                        transition
                        hover:scale-105
                    "
                >

                    <FiBell
                        size={20}
                        className="text-[#386641]"
                    />

                    <span
                        className="
                            absolute
                            right-2
                            top-2
                            h-2
                            w-2
                            rounded-full
                            bg-[#BC4749]
                        "
                    />

                </button>

                {/* Usuario */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        bg-white
                        px-4
                        py-2
                        shadow-sm
                    "
                >

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-br
                            from-[#386641]
                            to-[#6A994E]
                            text-lg
                            font-bold
                            text-white
                            shadow
                        "
                    >
                        {usuario?.nombre?.charAt(0).toUpperCase()}
                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                            "
                        >
                            {usuario?.nombre}
                        </p>

                        <span
                            className="
                                mt-1
                                inline-flex
                                rounded-full
                                bg-[#A7C957]/25
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                text-[#386641]
                            "
                        >
                            {usuario?.rol}
                        </span>

                    </div>

                </div>

            </div>

        </header>

    );

};

export default Header;