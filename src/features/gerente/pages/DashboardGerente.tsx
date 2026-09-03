import { useNavigate } from "react-router-dom";



import { useAuth } from "../../auth";

const DashboardGerente = () => {

    const { usuario } = useAuth();

    const navigate = useNavigate();

    return (

        <div className="space-y-8">

            {/* BIENVENIDA */}

            <section className="rounded-3xl bg-gradient-to-r from-[#386641] via-[#4D7B4C] to-[#6A994E] p-10 text-white shadow-xl">

                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#F2E8CF]">

                    Dashboard

                </p>

                <h1 className="text-4xl font-bold">

                    Bienvenido, {usuario?.nombre}

                </h1>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#F2E8CF]">

                    Gestiona tus inmuebles desde un solo lugar.
                    Consulta información, registra nuevos inmuebles,
                    actualiza propietarios y administra las fotografías
                    del sistema EcoArt.

                </p>

            </section>

            {/* TARJETAS */}

            <section className="grid gap-6 lg:grid-cols-3">

                <div className="rounded-3xl bg-[#386641] p-6 text-white shadow-lg transition duration-300 hover:-translate-y-1">

                    <p className="text-sm uppercase tracking-widest text-[#F2E8CF]">

                        Usuario

                    </p>

                    <h2 className="mt-4 text-3xl font-bold">

                        {usuario?.nombre}

                    </h2>

                </div>

                <div className="rounded-3xl bg-[#A7C957] p-6 shadow-lg transition duration-300 hover:-translate-y-1">

                    <p className="text-sm uppercase tracking-widest text-[#386641]">

                        Correo

                    </p>

                    <h2 className="mt-4 break-all text-lg font-semibold text-[#1F1F1F]">

                        {usuario?.correo}

                    </h2>

                </div>

                <div className="rounded-3xl bg-[#F2E8CF] p-6 shadow-lg transition duration-300 hover:-translate-y-1">

                    <p className="text-sm uppercase tracking-widest text-[#386641]">

                        Rol

                    </p>

                    <span className="mt-5 inline-flex rounded-full bg-[#386641] px-5 py-2 text-sm font-semibold text-white">

                        {usuario?.rol}

                    </span>

                </div>

            </section>

            {/* DOS COLUMNAS */}

            <section className="grid gap-6 xl:grid-cols-3">

                {/* PANEL PRINCIPAL */}

                <div className="rounded-3xl bg-white p-8 shadow-md xl:col-span-2">

                    <h2 className="mb-5 text-2xl font-bold text-[#386641]">

                        Panel Principal

                    </h2>

                    <p className="leading-8 text-gray-600">

                        Desde este panel podrás administrar los módulos
                        principales del sistema EcoArt. Actualmente puedes
                        registrar inmuebles, propietarios y gestionar las
                        fotografías asociadas a cada inmueble. En los
                        siguientes sprints se incorporarán publicaciones,
                        valoraciones, seguimientos y reportes.

                    </p>

                </div>

                {/* REGISTROS RÁPIDOS */}

                <div className="rounded-3xl bg-white p-8 shadow-md">

                    <h2 className="mb-5 text-xl font-bold text-[#386641]">

                        Registros rápidos

                    </h2>

                    <div className="space-y-4">

                        <button
                            onClick={() =>
                                navigate("/inmuebles/nuevo")
                            }
                            className="
                                w-full
                                rounded-xl
                                bg-[#386641]
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#2F5536]
                            "
                        >

                            Registrar inmueble

                        </button>

                        <button
                            onClick={() =>
                                navigate("/propietarios/nuevo")
                            }
                            className="
                                w-full
                                rounded-xl
                                bg-[#6A994E]
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#5A8741]
                            "
                        >

                            Registrar propietario

                        </button>

                        <button
                            onClick={() =>
                                navigate("/inmuebles")
                            }
                            className="
                                w-full
                                rounded-xl
                                bg-[#BC4749]
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#A33B3D]
                            "
                        >

                            Registrar fotografías

                        </button>

                    </div>

                </div>

            </section>

        </div>

    );

};

export default DashboardGerente;