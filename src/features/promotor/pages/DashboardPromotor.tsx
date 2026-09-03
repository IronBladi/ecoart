import { useNavigate } from "react-router-dom";

import {
    FiCamera,
    FiFileText,
    FiPhoneCall,
    FiUser,
} from "react-icons/fi";

import { useAuth } from "../../auth";

const DashboardPromotor = () => {

    const navigate = useNavigate();

    const { usuario } = useAuth();

    return (

        <div className="space-y-8">

            {/* Bienvenida */}

            <div className="rounded-3xl bg-gradient-to-r from-[#386641] to-[#6A994E] p-8 text-white shadow-lg">

                <h1 className="text-4xl font-bold">

                    Bienvenido, {usuario?.nombre}

                </h1>

                <p className="mt-3 text-lg text-green-100">

                    Panel del Promotor Inmobiliario

                </p>

            </div>

            {/* Información */}

            <div className="rounded-3xl bg-white p-6 shadow">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#386641]/10">

                        <FiUser
                            size={28}
                            className="text-[#386641]"
                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-[#386641]">

                            {usuario?.nombre}

                        </h2>

                        <p className="text-gray-500">

                            {usuario?.correo}

                        </p>

                        <span className="mt-2 inline-block rounded-full bg-[#A7C957]/20 px-4 py-1 text-sm font-semibold text-[#386641]">

                            {usuario?.rol}

                        </span>

                    </div>

                </div>

            </div>

            {/* Accesos rápidos */}

            <div>

                <h2 className="mb-5 text-2xl font-bold text-[#386641]">

                    Acciones rápidas

                </h2>

                <div className="grid gap-6 md:grid-cols-3">

                    <button
                        onClick={() => navigate("/inmuebles")}
                        className="rounded-3xl bg-white p-8 text-left shadow transition hover:-translate-y-1 hover:shadow-xl"
                    >

                        <FiCamera
                            size={38}
                            className="mb-4 text-[#386641]"
                        />

                        <h3 className="text-xl font-bold">

                            Fotografías

                        </h3>

                        <p className="mt-2 text-gray-600">

                            Administrar fotografías de los inmuebles.

                        </p>

                    </button>

                    <button
                        disabled
                        className="cursor-not-allowed rounded-3xl bg-white p-8 text-left opacity-60 shadow"
                    >

                        <FiFileText
                            size={38}
                            className="mb-4 text-[#386641]"
                        />

                        <h3 className="text-xl font-bold">

                            Publicaciones

                        </h3>

                        <p className="mt-2 text-gray-600">

                            Próximamente.

                        </p>

                    </button>

                    <button
                        disabled
                        className="cursor-not-allowed rounded-3xl bg-white p-8 text-left opacity-60 shadow"
                    >

                        <FiPhoneCall
                            size={38}
                            className="mb-4 text-[#386641]"
                        />

                        <h3 className="text-xl font-bold">

                            Solicitudes

                        </h3>

                        <p className="mt-2 text-gray-600">

                            Próximamente.

                        </p>

                    </button>

                </div>

            </div>

            {/* Información */}

            <div className="rounded-3xl border border-[#A7C957] bg-[#FAFCF7] p-6">

                <h2 className="text-xl font-bold text-[#386641]">

                    Funciones disponibles

                </h2>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">

                    <li>Administrar fotografías de inmuebles.</li>

                    <li>Consultar información de inmuebles.</li>

                    <li>Gestionar futuras publicaciones.</li>

                    <li>Revisar solicitudes de contacto.</li>

                </ul>

            </div>

        </div>

    );

};

export default DashboardPromotor;