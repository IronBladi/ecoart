import {
    FiMapPin,
    FiPhone,
    FiFacebook,
    FiClock,
    FiExternalLink,
    FiArrowRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const AÑO_ACTUAL = new Date().getFullYear();

// ── Datos de contacto reales ─────────────────────────────────────────────────
const TELEFONOS = [
    { numero: "65819997", label: "+591 65819997" },
    { numero: "67961931", label: "+591 67961931" },
];

const HORARIOS = [
    { dia: "Lunes – Viernes", horario: "8:00 – 12:30 · 14:30 – 18:30" },
    { dia: "Sábado", horario: "8:30 – 12:30" },
    { dia: "Domingo", horario: "Cerrado" },
];

// ── Navegación del footer ────────────────────────────────────────────────────
const NAV_LINKS = [
    { label: "Inicio", to: "/" },
    { label: "Catálogo de inmuebles", to: "/#catalogo-section" },
];

// ── Enlace de crédito externo ────────────────────────────────────────────────
const ENLACE_CREDITO =
    "https://bit.ly/InfoCréditodecasas";


const Footer = () => {

    const scrollToCatalogo = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        if (window.location.pathname === "/") {
            e.preventDefault();
            document
                .getElementById("catalogo-section")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (

        <footer
            className="bg-gradient-to-r from-[#0F382C] to-[#1E5642] text-white"
            aria-label="Pie de página de EcoArt"
        >

            {/* ── Cuerpo principal del Footer ─────────────────────────── */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">

                <div
                    className="
                        grid
                        gap-10
                        sm:grid-cols-2
                        lg:grid-cols-4
                        lg:gap-12
                    "
                >

                    {/* ─── Columna 1 — Marca ──────────────────────────────── */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        {/* Logo / Nombre */}
                        <div className="flex items-center gap-2.5">
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#10B981]/20
                                    border
                                    border-[#10B981]/30
                                "
                                aria-hidden="true"
                            >
                                <span
                                    className="
                                        text-sm
                                        font-black
                                        text-[#10B981]
                                    "
                                >
                                    E
                                </span>
                            </div>
                            <span
                                className="
                                    text-xl
                                    font-black
                                    tracking-tight
                                    text-white
                                "
                            >
                                EcoArt
                            </span>
                        </div>

                        {/* Descripción */}
                        <p
                            className="
                                mt-5
                                text-sm
                                leading-7
                                text-white/60
                                max-w-xs
                            "
                        >
                            Sistema web para la gestión inmobiliaria,
                            desarrollado como proyecto de grado para
                            optimizar la administración de inmuebles,
                            propietarios y publicaciones.
                        </p>

                        {/* Enlace de crédito inmobiliario */}
                        <a
                            href={ENLACE_CREDITO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-[#10B981]/30
                                bg-[#10B981]/10
                                px-4
                                py-2.5
                                text-xs
                                font-bold
                                text-[#10B981]
                                transition-all
                                duration-200
                                hover:bg-[#10B981]/20
                                hover:border-[#10B981]/50
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#10B981]
                            "
                            aria-label="Más información sobre crédito de casas (abre en nueva pestaña)"
                        >
                            <FiExternalLink size={13} />
                            <span>Info Crédito de Casas</span>
                        </a>

                        {/* Red social — Facebook */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100087600783543"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar página de EcoArt en Facebook (abre en nueva pestaña)"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/8
                                    text-white/70
                                    transition-all
                                    duration-200
                                    hover:bg-[#1877F2]/20
                                    hover:border-[#1877F2]/40
                                    hover:text-white
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#10B981]
                                "
                            >
                                <FiFacebook size={17} />
                            </a>
                        </div>

                    </div>


                    {/* ─── Columna 2 — Navegación ─────────────────────────── */}
                    <div>

                        <h3
                            className="
                                mb-6
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-[#10B981]
                            "
                        >
                            Navegación
                        </h3>

                        <ul
                            className="space-y-3"
                            role="list"
                        >

                            {NAV_LINKS.map(({ label, to }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        onClick={
                                            to === "/#catalogo-section"
                                                ? scrollToCatalogo
                                                : undefined
                                        }
                                        className="
                                            group
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-white/60
                                            transition-colors
                                            duration-200
                                            hover:text-white
                                            focus-visible:outline
                                            focus-visible:outline-2
                                            focus-visible:outline-offset-2
                                            focus-visible:outline-[#10B981]
                                        "
                                    >
                                        <FiArrowRight
                                            size={12}
                                            className="
                                                shrink-0
                                                text-[#10B981]/50
                                                transition-transform
                                                duration-200
                                                group-hover:translate-x-0.5
                                                group-hover:text-[#10B981]
                                            "
                                        />
                                        {label}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* ─── Columna 3 — Contacto ───────────────────────────── */}
                    <div>

                        <h3
                            className="
                                mb-6
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-[#10B981]
                            "
                        >
                            Contacto
                        </h3>

                        <div className="space-y-4">

                            {/* Dirección */}
                            <div className="flex items-start gap-3">
                                <FiMapPin
                                    size={15}
                                    className="mt-0.5 shrink-0 text-[#10B981]/70"
                                    aria-hidden="true"
                                />
                                <span
                                    className="text-sm leading-relaxed text-white/60"
                                >
                                    C/Juan Misael Saracho, Bolivar<br />
                                    Tarija, Bolivia
                                </span>
                            </div>

                            {/* Teléfonos */}
                            <div className="flex items-start gap-3">
                                <FiPhone
                                    size={15}
                                    className="mt-0.5 shrink-0 text-[#10B981]/70"
                                    aria-hidden="true"
                                />
                                <div className="flex flex-col gap-1">
                                    {TELEFONOS.map(({ numero, label }) => (
                                        <a
                                            key={numero}
                                            href={`tel:+591${numero}`}
                                            className="
                                                text-sm
                                                text-white/60
                                                transition-colors
                                                duration-200
                                                hover:text-[#10B981]
                                                focus-visible:outline
                                                focus-visible:outline-2
                                                focus-visible:outline-offset-2
                                                focus-visible:outline-[#10B981]
                                            "
                                            aria-label={`Llamar al ${label}`}
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* ─── Columna 4 — Horarios ───────────────────────────── */}
                    <div>

                        <h3
                            className="
                                mb-6
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-[#10B981]
                            "
                        >
                            Horario de atención
                        </h3>

                        <div className="space-y-3">

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    mb-4
                                "
                            >
                                <FiClock
                                    size={14}
                                    className="shrink-0 text-[#10B981]/70"
                                    aria-hidden="true"
                                />
                                <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                                    Oficina Tarija
                                </span>
                            </div>

                            {HORARIOS.map(({ dia, horario }) => (
                                <div
                                    key={dia}
                                    className="
                                        flex
                                        flex-col
                                        gap-0.5
                                    "
                                >
                                    <span
                                        className="
                                            text-xs
                                            font-semibold
                                            text-white/80
                                        "
                                    >
                                        {dia}
                                    </span>
                                    <span
                                        className={`
                                            text-xs
                                            ${horario === "Cerrado"
                                                ? "text-white/30"
                                                : "text-white/50"
                                            }
                                        `}
                                    >
                                        {horario}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>


                {/* ── Divisor ───────────────────────────────────────────── */}
                <div
                    className="my-10 h-px bg-white/10"
                    aria-hidden="true"
                />


                {/* ── Barra de copyright ────────────────────────────────── */}
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-3
                        text-xs
                        text-white/40
                        sm:flex-row
                    "
                >

                    <p>
                        © {AÑO_ACTUAL} EcoArt. Todos los derechos reservados.
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