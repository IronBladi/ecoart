import { useNavigate } from "react-router-dom";
import {
    FiArrowRight,
    FiHome,
    FiCompass,
    FiCheckCircle,
    FiChevronDown,
} from "react-icons/fi";

const Hero = () => {
    const navigate = useNavigate();

    const explorarInmuebles = () => {
        // Scroll suave hacia la sección de inmuebles/catálogo
        const catalogoEl =
            document.getElementById("catalogo-section") ||
            document.getElementById("propiedades") ||
            document.querySelector("main > section:nth-of-type(3)") ||
            document.querySelector("main > section:last-of-type");

        if (catalogoEl) {
            catalogoEl.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 720, behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Canvas visual principal con bordes redondeados y sombra suave */}
                <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-[#0F382C] shadow-2xl">
                    {/* Imagen de fondo con soporte para ratio arquitectónico */}
                    <div className="relative min-h-[520px] w-full sm:min-h-[580px] md:min-h-[620px] lg:min-h-[640px]">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
                            alt="Arquitectura moderna y sostenible en Tarija - EcoArt"
                            className="absolute inset-0 h-full w-full object-cover object-center brightness-90"
                            loading="eager"
                        />

                        {/* Degradado envolvente con la paleta oficial de EcoArt */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#0F382C]
                                via-[#0F382C]/70
                                to-[#0F382C]/30
                            "
                        />

                        {/* Patrón atmosférico sutil */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />

                        {/* Contenedor de contenido estructurado */}
                        <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-6 sm:min-h-[580px] sm:p-10 md:min-h-[620px] md:p-14 lg:min-h-[640px] lg:p-16">
                            {/* Tagline / Badge de identidad */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-md">
                                    <FiCompass className="text-accent text-sm" />
                                    <span>Gestión Inmobiliaria · Tarija, Bolivia</span>
                                </span>

                                <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur-md sm:inline-flex">
                                    <FiCheckCircle className="text-accent text-xs" />
                                    <span>Desarrollos Sustentables</span>
                                </span>
                            </div>

                            {/* Título principal y descripción */}
                            <div className="my-auto max-w-3xl py-8">
                                <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:leading-[1.15]">
                                    Encuentra el inmueble{" "}
                                    <span className="text-emerald-300">
                                        ideal para ti
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg md:text-xl md:leading-8">
                                    EcoArt centraliza la administración de inmuebles,
                                    propietarios y publicaciones en una plataforma
                                    moderna, segura y sostenible en los valles de Tarija.
                                </p>

                                {/* Botones de llamada a la acción */}
                                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                                    {/* Botón Principal: Explorar inmuebles */}
                                    <button
                                        type="button"
                                        onClick={explorarInmuebles}
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            rounded-xl
                                            bg-accent
                                            px-7
                                            py-4
                                            text-base
                                            font-bold
                                            text-[#0F382C]
                                            shadow-lg
                                            transition-all
                                            duration-200
                                            hover:bg-emerald-400
                                            hover:shadow-xl
                                            active:scale-95
                                        "
                                    >
                                        <FiHome className="text-lg transition-transform group-hover:scale-110" />
                                        <span>Explorar inmuebles</span>
                                    </button>

                                    {/* Botón Secundario: Iniciar sesión */}
                                    <button
                                        type="button"
                                        onClick={() => navigate("/login")}
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            rounded-xl
                                            border
                                            border-white/30
                                            bg-white/10
                                            px-7
                                            py-4
                                            text-base
                                            font-semibold
                                            text-white
                                            backdrop-blur-sm
                                            transition-all
                                            duration-200
                                            hover:bg-white/20
                                            hover:border-white/50
                                            active:scale-95
                                        "
                                    >
                                        <span>Iniciar sesión</span>
                                        <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>

                            {/* Indicador inferior de exploración */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs text-white/80">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                        Propiedades seleccionadas
                                    </span>
                                    <span className="hidden sm:inline">
                                        · Asesoramiento profesional
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={explorarInmuebles}
                                    className="inline-flex items-center gap-1 text-white hover:text-accent transition-colors"
                                    aria-label="Desplazarse hacia el catálogo"
                                >
                                    <span className="hidden md:inline">Ver catálogo</span>
                                    <FiChevronDown className="text-base animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;