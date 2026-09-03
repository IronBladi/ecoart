import {
    FiHome,
    FiCheckCircle,
} from "react-icons/fi";

import LoginForm from "../components/LoginForm";

const LoginPage = () => {

    return (

        <div
            className="
                min-h-screen
                bg-[#F8F7F2]
                flex
                items-center
                justify-center
                px-6
                py-10
            "
        >

            <div
                className="
                    grid
                    w-full
                    max-w-7xl
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    shadow-2xl
                    lg:grid-cols-2
                "
            >

                {/* PANEL IZQUIERDO */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-gradient-to-br
                        from-[#386641]
                        via-[#4A7C59]
                        to-[#6A994E]
                        p-16
                        text-white
                    "
                >

                    {/* Círculos decorativos */}

                    <div
                        className="
                            absolute
                            -right-24
                            -top-24
                            h-72
                            w-72
                            rounded-full
                            bg-white/10
                        "
                    />

                    <div
                        className="
                            absolute
                            -bottom-20
                            -left-20
                            h-56
                            w-56
                            rounded-full
                            bg-[#A7C957]/20
                        "
                    />

                    <div className="relative z-10">

                        <div
                            className="
                                mb-10
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-3xl
                                bg-[#A7C957]
                                text-[#386641]
                                shadow-lg
                            "
                        >

                            <FiHome size={40} />

                        </div>

                        <h1
                            className="
                                text-5xl
                                font-bold
                                tracking-tight
                            "
                        >

                            EcoArt

                        </h1>

                        <p
                            className="
                                mt-5
                                max-w-md
                                text-lg
                                leading-8
                                text-[#F2E8CF]
                            "
                        >

                            Sistema Web para la gestión de inmuebles,
                            propietarios y publicaciones inmobiliarias.

                        </p>

                        <div className="mt-14 space-y-5">

                            <div className="flex items-center gap-3">

                                <FiCheckCircle
                                    className="text-[#A7C957]"
                                    size={22}
                                />

                                <span>

                                    Gestión centralizada de inmuebles

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FiCheckCircle
                                    className="text-[#A7C957]"
                                    size={22}
                                />

                                <span>

                                    Administración de propietarios

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FiCheckCircle
                                    className="text-[#A7C957]"
                                    size={22}
                                />

                                <span>

                                    Plataforma moderna y segura

                                </span>

                            </div>

                        </div>

                    </div>

                </section>

                {/* PANEL DERECHO */}

                <section
                    className="
                        flex
                        items-center
                        justify-center
                        bg-[#FCFCFA]
                        p-10
                        lg:p-16
                    "
                >

                    <div className="w-full max-w-md">

                        <p
                            className="
                                mb-2
                                text-sm
                                uppercase
                                tracking-[0.35em]
                                text-[#6A994E]
                            "
                        >

                            Bienvenido

                        </p>

                        <h2
                            className="
                                mb-3
                                text-4xl
                                font-bold
                                text-[#386641]
                            "
                        >

                            Iniciar sesión

                        </h2>

                        <p className="mb-10 text-gray-500">

                            Ingrese sus credenciales para acceder al
                            sistema EcoArt.

                        </p>

                        <LoginForm />

                    </div>

                </section>

            </div>

        </div>

    );

};

export default LoginPage;