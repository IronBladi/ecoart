import { useNavigate } from "react-router-dom";
import {
    FiCamera,
    FiFileText,
    FiPhoneCall,
    FiUser,
    FiGrid,
    FiInfo,
    FiCheckCircle
} from "react-icons/fi";

import { useAuth } from "../../auth";

const DashboardPromotor = () => {
    const navigate = useNavigate();
    const { usuario } = useAuth();

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Bienvenida */}
            <div className="relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-10 text-white shadow-md">
                <div className="relative z-10">
                    <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                        <FiGrid className="text-sm" />
                        Dashboard
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Bienvenido, {usuario?.nombre}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-200">
                        Panel del Promotor Inmobiliario
                    </p>
                </div>
                {/* Decorative background element */}
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
            </div>

            {/* Información */}
            <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <FiUser className="text-3xl text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-primary">
                            {usuario?.nombre}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            {usuario?.correo}
                        </p>
                        <div className="mt-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                                <div className="h-2 w-2 rounded-full bg-accent"></div>
                                {usuario?.rol}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accesos rápidos */}
            <div>
                <div className="mb-6 flex items-center gap-3">
                    <FiGrid className="text-2xl text-accent" />
                    <h2 className="text-xl font-bold text-primary">
                        Acciones rápidas
                    </h2>
                </div>
                
                <div className="grid gap-6 md:grid-cols-3">
                    <button
                        onClick={() => navigate("/inmuebles")}
                        className="group rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-200 active:scale-95"
                    >
                        <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <FiCamera size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-primary">
                            Fotografías
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Administrar fotografías de los inmuebles.
                        </p>
                    </button>

                    <button
                        disabled
                        className="rounded-2xl bg-gray-50 border border-gray-100 p-6 sm:p-8 text-left shadow-sm opacity-70 cursor-not-allowed"
                    >
                        <div className="mb-5 inline-flex rounded-xl bg-gray-200 p-3 text-gray-500">
                            <FiFileText size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-700">
                            Publicaciones
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Próximamente.
                        </p>
                    </button>

                    <button
                        disabled
                        className="rounded-2xl bg-gray-50 border border-gray-100 p-6 sm:p-8 text-left shadow-sm opacity-70 cursor-not-allowed"
                    >
                        <div className="mb-5 inline-flex rounded-xl bg-gray-200 p-3 text-gray-500">
                            <FiPhoneCall size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-700">
                            Solicitudes
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Próximamente.
                        </p>
                    </button>
                </div>
            </div>

            {/* Funciones disponibles */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <FiInfo className="text-2xl text-accent" />
                    <h2 className="text-xl font-bold text-primary">
                        Funciones disponibles
                    </h2>
                </div>
                
                <ul className="grid gap-4 sm:grid-cols-2 text-gray-600">
                    <li className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <FiCheckCircle className="text-lg text-accent" />
                        </div>
                        <span className="font-medium">Administrar fotografías de inmuebles.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <FiCheckCircle className="text-lg text-accent" />
                        </div>
                        <span className="font-medium">Consultar información de inmuebles.</span>
                    </li>
                    <li className="flex items-center gap-3 opacity-60">
                        <div className="flex-shrink-0">
                            <FiCheckCircle className="text-lg text-gray-400" />
                        </div>
                        <span>Gestionar futuras publicaciones.</span>
                    </li>
                    <li className="flex items-center gap-3 opacity-60">
                        <div className="flex-shrink-0">
                            <FiCheckCircle className="text-lg text-gray-400" />
                        </div>
                        <span>Revisar solicitudes de contacto.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPromotor;