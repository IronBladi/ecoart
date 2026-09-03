import {
    FiHome,
    FiMapPin,
    FiMail,
    FiPhone,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
} from "react-icons/fi";

const Footer = () => {

    return (

        <footer className="bg-[#1F2D1F] text-white">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* EcoArt */}

                    <div>

                        <h2 className="text-3xl font-bold text-[#A7C957]">

                            EcoArt

                        </h2>

                        <p className="mt-5 leading-8 text-gray-300">

                            Sistema web para la gestión inmobiliaria,
                            desarrollado como proyecto de grado para
                            optimizar la administración de inmuebles,
                            propietarios y publicaciones.

                        </p>

                    </div>

                    {/* Navegación */}

                    <div>

                        <h3 className="mb-6 text-xl font-semibold">

                            Navegación

                        </h3>

                        <ul className="space-y-4 text-gray-300">

                            <li className="flex items-center gap-3">

                                <FiHome />

                                Inicio

                            </li>

                            <li className="flex items-center gap-3">

                                <FiMapPin />

                                Propiedades

                            </li>

                            <li>

                                Nosotros

                            </li>

                            <li>

                                Contacto

                            </li>

                        </ul>

                    </div>

                    {/* Contacto */}

                    <div>

                        <h3 className="mb-6 text-xl font-semibold">

                            Contacto

                        </h3>

                        <div className="space-y-5 text-gray-300">

                            <div className="flex items-center gap-3">

                                <FiMapPin />

                                Tarija - Bolivia

                            </div>

                            <div className="flex items-center gap-3">

                                <FiPhone />

                                +591 70000000

                            </div>

                            <div className="flex items-center gap-3">

                                <FiMail />

                                ecoart@demo.com

                            </div>

                        </div>

                    </div>

                    {/* Redes */}

                    <div>

                        <h3 className="mb-6 text-xl font-semibold">

                            Síguenos

                        </h3>

                        <p className="mb-6 text-gray-300">

                            Próximamente nuestras redes sociales.

                        </p>

                        <div className="flex gap-4">

                            <button
                                className="
                                    rounded-xl
                                    bg-[#386641]
                                    p-3
                                    transition
                                    hover:bg-[#6A994E]
                                "
                            >

                                <FiFacebook size={20} />

                            </button>

                            <button
                                className="
                                    rounded-xl
                                    bg-[#386641]
                                    p-3
                                    transition
                                    hover:bg-[#6A994E]
                                "
                            >

                                <FiInstagram size={20} />

                            </button>

                            <button
                                className="
                                    rounded-xl
                                    bg-[#386641]
                                    p-3
                                    transition
                                    hover:bg-[#6A994E]
                                "
                            >

                                <FiLinkedin size={20} />

                            </button>

                        </div>

                    </div>

                </div>

                {/* Línea */}

                <div className="my-12 h-px bg-white/10" />

                {/* Copyright */}

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-4
                        text-sm
                        text-gray-400
                        md:flex-row
                    "
                >

                    <p>

                        © 2026 EcoArt. Todos los derechos reservados.

                    </p>

                    <p>

                        Proyecto de Grado · UPDS

                    </p>

                </div>

            </div>

        </footer>

    );

};

export default Footer;