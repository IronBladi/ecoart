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

    const {
        usuario,
        logout,
    } = useAuth();

    const esGerente =
        usuario?.idRol === 1;

    const esPromotor =
        usuario?.idRol === 2;

    const cerrarSesion = () => {

        logout();

        navigate("/");

    };

    const dashboardRoute =
        esGerente
            ? "/gerente/dashboard"
            : "/promotor/dashboard";

    return (

        <aside
            className="
                flex
                h-screen
                w-64
                flex-col
                justify-between
                bg-[#386641]
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
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#A7C957]
                                text-2xl
                            "
                        >

                            🏡

                        </div>

                        <div>

                            <h1 className="text-2xl font-bold">

                                EcoArt

                            </h1>

                            <p className="text-sm text-[#F2E8CF]">

                                Sistema Inmobiliario

                            </p>

                        </div>

                    </div>

                </div>

                {/* MENÚ */}

                <nav className="mt-6 px-4">

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
                    border-[#6A994E]
                    p-5
                "
            >

                <div
                    className="
                        mb-5
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-[#4D7A55]
                        p-3
                    "
                >

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-[#A7C957]
                            text-[#386641]
                        "
                    >

                        <FiUser size={20} />

                    </div>

                    <div className="overflow-hidden">

                        <p className="truncate font-semibold">

                            {usuario?.nombre}

                        </p>

                        <p className="truncate text-xs text-[#F2E8CF]">

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
                        bg-[#BC4749]
                        px-4
                        py-3
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-red-700
                        hover:shadow-lg
                    "
                >

                    <FiLogOut size={20} />

                    Cerrar sesión

                </button>

            </div>

        </aside>

    );

};

export default Sidebar;