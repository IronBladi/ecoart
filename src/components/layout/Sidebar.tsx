import { useNavigate } from "react-router-dom";
import {
    FiGrid,
    FiHome,
    FiLogOut,
    FiUser,
    FiUsers,
    FiFileText,
    FiMessageSquare,
    FiActivity,
    FiBarChart2,
    FiClipboard,
} from "react-icons/fi";

import MenuItem from "./MenuItem";
import { useAuth } from "../../features/auth";

const Sidebar = () => {
    const navigate = useNavigate();
    const { usuario, logout } = useAuth();

    const esGerente = usuario?.idRol === 1;
    const esPromotor = usuario?.idRol === 2;

    const cerrarSesion = () => {
        logout();
        navigate("/");
    };

    const dashboardRoute = esGerente ? "/gerente/dashboard" : "/promotor/dashboard";

    return (
        <aside
            className="
                flex
                h-screen
                w-64
                flex-col
                justify-between
                bg-primary
                text-white
                shadow-xl
            "
        >
            <div>
                {/* LOGO */}
                <div className="px-8 py-8">
                    <div className="flex items-center gap-4">
                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-accent/20
                                text-accent
                                text-2xl
                            "
                        >
                            🏡
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                EcoArt
                            </h1>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mt-0.5">
                                Bienes Raíces
                            </p>
                        </div>
                    </div>
                </div>

                {/* MENÚ */}
                <nav className="mt-4 px-4 space-y-1">
                    <MenuItem
                        to={dashboardRoute}
                        text="Dashboard"
                        icon={FiGrid}
                    />
                    <MenuItem
                        to="/inmuebles"
                        text="Inmuebles"
                        icon={FiHome}
                    />

                    {/* ==========================
                        OPCIONES GERENTE
                    =========================== */}
                    {esGerente && (
                        <>
                            <MenuItem
                                to="/usuarios"
                                text="Usuarios"
                                icon={FiUser}
                            />
                            <MenuItem
                                to="/seguimientos"
                                text="Seguimientos"
                                icon={FiActivity}
                            />
                            <MenuItem
                                to="/propietarios"
                                text="Propietarios"
                                icon={FiUsers}
                            />
                            <MenuItem
                                to="/publicaciones/estado"
                                text="Estado publicaciones"
                                icon={FiFileText}
                            />
                            <MenuItem
                                to="/reportes"
                                text="Reportes"
                                icon={FiBarChart2}
                            />
                            <MenuItem
                                to="/historial"
                                text="Historial"
                                icon={FiClipboard}
                            />
                        </>
                    )}

                    {/* ==========================
                        OPCIONES PROMOTOR
                    =========================== */}
                    {esPromotor && (
                        <>
                            <MenuItem
                                to="/plantillas"
                                text="Plantillas"
                                icon={FiFileText}
                            />
                            <MenuItem
                                to="/publicaciones"
                                text="Publicaciones"
                                icon={FiFileText}
                            />
                            <MenuItem
                                to="/contactos"
                                text="Solicitudes"
                                icon={FiMessageSquare}
                            />
                            <MenuItem
                                to="/notificaciones"
                                text="Notificaciones"
                                icon={FiActivity}
                            />
                        </>
                    )}
                </nav>
            </div>

            {/* FOOTER */}
            <div
                className="
                    border-t
                    border-white/10
                    p-5
                "
            >
                <div
                    className="
                        mb-4
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-white/5
                        p-3
                        border
                        border-white/5
                    "
                >
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-accent/20
                            text-accent
                        "
                    >
                        <FiUser size={18} />
                    </div>
                    <div className="overflow-hidden">
                        <p className="truncate font-semibold text-sm">
                            {usuario?.nombre}
                        </p>
                        <p className="truncate text-xs text-white/60 mt-0.5">
                            {usuario?.rol}
                        </p>
                    </div>
                </div>

                <button
                    onClick={cerrarSesion}
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-red-500/10
                        text-red-400
                        px-4
                        py-3
                        font-semibold
                        transition-all
                        duration-200
                        hover:bg-red-500
                        hover:text-white
                        active:scale-95
                    "
                >
                    <FiLogOut size={18} />
                    Cerrar sesión
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;