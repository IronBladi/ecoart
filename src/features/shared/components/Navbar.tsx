import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    FiHome,
    FiInfo,
    FiMapPin,
    FiLogIn,
    FiMenu,
    FiX,
    FiUser,
} from "react-icons/fi";
import { useAuth } from "../../auth";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario } = useAuth();

    const [scrolled, setScrolled] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú móvil al cambiar de ruta
    useEffect(() => {
        setMenuAbierto(false);
    }, [location.pathname]);

    const esInicio = location.pathname === "/";
    const esContacto = location.pathname === "/contacto";

    const irAInicio = () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuAbierto(false);
    };

    const irAPropiedades = () => {
        setMenuAbierto(false);
        if (location.pathname === "/") {
            const catalogoEl =
                document.getElementById("catalogo-section") ||
                document.getElementById("propiedades") ||
                document.querySelector("section:nth-of-type(3)");

            if (catalogoEl) {
                catalogoEl.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 750, behavior: "smooth" });
            }
        } else {
            navigate("/");
        }
    };

    const irANosotros = () => {
        setMenuAbierto(false);
        const footer = document.querySelector("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    const irAContacto = () => {
        setMenuAbierto(false);
        navigate("/contacto");
    };

    const irAPanelOLogin = () => {
        setMenuAbierto(false);
        if (usuario) {
            navigate(
                usuario.idRol === 1
                    ? "/gerente/dashboard"
                    : "/promotor/dashboard"
            );
        } else {
            navigate("/login");
        }
    };

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
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3"
                        : "bg-white/85 backdrop-blur-sm border-b border-white/50 shadow-xs py-4"
                }
            `}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logotipo EcoArt */}
                <div
                    className="group flex cursor-pointer items-center gap-3 transition-transform active:scale-95"
                    onClick={irAInicio}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-colors duration-200 group-hover:bg-secondary">
                        {/* Isotipo con hoja arquitectónica / diseño biofilico */}
                        <svg
                            className="h-5 w-5 text-accent"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold tracking-tight text-primary">
                            EcoArt
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/80">
                            Bienes Raíces
                        </span>
                    </div>
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden items-center gap-1 md:flex lg:gap-2">
                    <button
                        type="button"
                        onClick={irAInicio}
                        className={`
                            flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                            ${
                                esInicio
                                    ? "bg-primary/10 font-semibold text-primary"
                                    : "text-gray-700 hover:bg-gray-100/70 hover:text-primary"
                            }
                        `}
                    >
                        <FiHome className={esInicio ? "text-accent" : "text-gray-500"} />
                        <span>Inicio</span>
                    </button>

                    <button
                        type="button"
                        onClick={irAPropiedades}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100/70 hover:text-primary"
                    >
                        <FiMapPin className="text-gray-500" />
                        <span>Propiedades</span>
                    </button>

                    <button
                        type="button"
                        onClick={irANosotros}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100/70 hover:text-primary"
                    >
                        <FiInfo className="text-gray-500" />
                        <span>Nosotros</span>
                    </button>

                    <button
                        type="button"
                        onClick={irAContacto}
                        className={`
                            flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                            ${
                                esContacto
                                    ? "bg-primary/10 font-semibold text-primary"
                                    : "text-gray-700 hover:bg-gray-100/70 hover:text-primary"
                            }
                        `}
                    >
                        <span>Contacto</span>
                    </button>
                </nav>

                {/* Acciones derecha: Botón de sesión / Panel & botón móvil */}
                <div className="flex items-center gap-3">
                    {/* Botón Desktop de Autenticación / Panel */}
                    <button
                        type="button"
                        onClick={irAPanelOLogin}
                        className="
                            hidden md:inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-primary
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            duration-200
                            hover:bg-secondary
                            active:scale-95
                        "
                    >
                        {usuario ? (
                            <>
                                <FiUser className="text-base text-accent" />
                                <span>{usuario.nombre.split(" ")[0]}</span>
                            </>
                        ) : (
                            <>
                                <FiLogIn className="text-base text-accent" />
                                <span>Iniciar sesión</span>
                            </>
                        )}
                    </button>

                    {/* Botón Toggle Móvil */}
                    <button
                        type="button"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            text-primary
                            transition-colors
                            hover:bg-gray-100
                            md:hidden
                        "
                        aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    >
                        {menuAbierto ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            {menuAbierto && (
                <div className="border-t border-gray-200/80 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-lg md:hidden">
                    <nav className="flex flex-col gap-2">
                        <button
                            type="button"
                            onClick={irAInicio}
                            className={`
                                flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition
                                ${
                                    esInicio
                                        ? "bg-primary/10 font-bold text-primary"
                                        : "text-gray-700 hover:bg-gray-50"
                                }
                            `}
                        >
                            <FiHome className={esInicio ? "text-accent" : "text-gray-400"} />
                            <span>Inicio</span>
                        </button>

                        <button
                            type="button"
                            onClick={irAPropiedades}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium text-gray-700 transition hover:bg-gray-50"
                        >
                            <FiMapPin className="text-gray-400" />
                            <span>Propiedades</span>
                        </button>

                        <button
                            type="button"
                            onClick={irANosotros}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium text-gray-700 transition hover:bg-gray-50"
                        >
                            <FiInfo className="text-gray-400" />
                            <span>Nosotros</span>
                        </button>

                        <button
                            type="button"
                            onClick={irAContacto}
                            className={`
                                flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition
                                ${
                                    esContacto
                                        ? "bg-primary/10 font-bold text-primary"
                                        : "text-gray-700 hover:bg-gray-50"
                                }
                            `}
                        >
                            <span className="w-4" />
                            <span>Contacto</span>
                        </button>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={irAPanelOLogin}
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-primary
                                    py-3
                                    text-base
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:bg-secondary
                                "
                            >
                                {usuario ? (
                                    <>
                                        <FiUser className="text-accent" />
                                        <span>Mi Panel ({usuario.nombre.split(" ")[0]})</span>
                                    </>
                                ) : (
                                    <>
                                        <FiLogIn className="text-accent" />
                                        <span>Iniciar sesión</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;