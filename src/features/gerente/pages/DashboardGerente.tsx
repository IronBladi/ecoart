import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiShield, FiPlusCircle, FiImage, FiHome, FiInfo, FiGrid } from "react-icons/fi";
import { useAuth } from "../../auth";

const DashboardGerente = () => {
    const { usuario } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* BIENVENIDA */}
            <section className="relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-10 text-white shadow-md">
                <div className="relative z-10">
                    <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                        <FiGrid className="text-sm" />
                        Dashboard
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Bienvenido, {usuario?.nombre}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-200">
                        Gestiona tus inmuebles desde un solo lugar.
                        Consulta información, registra nuevos inmuebles,
                        actualiza propietarios y administra las fotografías
                        del sistema EcoArt.
                    </p>
                </div>
                {/* Decorative background element */}
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
            </section>

            {/* TARJETAS */}
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FiUser className="text-lg" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Usuario
                        </p>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-primary">
                        {usuario?.nombre}
                    </h2>
                </div>

                <div className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FiMail className="text-lg" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Correo
                        </p>
                    </div>
                    <h2 className="mt-4 truncate text-lg font-bold text-primary">
                        {usuario?.correo}
                    </h2>
                </div>

                <div className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                            <FiShield className="text-lg text-primary" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Rol
                        </p>
                    </div>
                    <div className="mt-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                            <div className="h-2 w-2 rounded-full bg-accent"></div>
                            {usuario?.rol}
                        </span>
                    </div>
                </div>
            </section>

            {/* DOS COLUMNAS */}
            <section className="grid gap-6 xl:grid-cols-3">
                {/* PANEL PRINCIPAL */}
                <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm xl:col-span-2">
                    <div className="flex items-center gap-3 mb-5">
                        <FiInfo className="text-2xl text-accent" />
                        <h2 className="text-xl font-bold text-primary">
                            Panel Principal
                        </h2>
                    </div>
                    <p className="leading-relaxed text-gray-600 text-base sm:text-lg">
                        Desde este panel podrás administrar los módulos
                        principales del sistema EcoArt. Actualmente puedes
                        registrar inmuebles, propietarios y gestionar las
                        fotografías asociadas a cada inmueble. En los
                        siguientes sprints se incorporarán publicaciones,
                        valoraciones, seguimientos y reportes.
                    </p>
                </div>

                {/* REGISTROS RÁPIDOS */}
                <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
                    <h2 className="mb-6 text-lg font-bold text-primary">
                        Registros rápidos
                    </h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate("/inmuebles/nuevo")}
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-primary
                                py-3.5
                                px-4
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-200
                                hover:bg-secondary
                                hover:shadow-md
                                active:scale-95
                            "
                        >
                            <FiHome className="text-lg transition-transform group-hover:scale-110" />
                            <span>Registrar inmueble</span>
                        </button>

                        <button
                            onClick={() => navigate("/propietarios/nuevo")}
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border border-gray-200
                                bg-white
                                py-3.5
                                px-4
                                font-semibold
                                text-gray-700
                                shadow-xs
                                transition-all
                                duration-200
                                hover:bg-gray-50
                                hover:border-gray-300
                                hover:text-primary
                                active:scale-95
                            "
                        >
                            <FiPlusCircle className="text-lg transition-transform group-hover:scale-110" />
                            <span>Registrar propietario</span>
                        </button>

                        <button
                            onClick={() => navigate("/inmuebles")}
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border border-gray-200
                                bg-white
                                py-3.5
                                px-4
                                font-semibold
                                text-gray-700
                                shadow-xs
                                transition-all
                                duration-200
                                hover:bg-gray-50
                                hover:border-gray-300
                                hover:text-primary
                                active:scale-95
                            "
                        >
                            <FiImage className="text-lg transition-transform group-hover:scale-110" />
                            <span>Registrar fotografías</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashboardGerente;