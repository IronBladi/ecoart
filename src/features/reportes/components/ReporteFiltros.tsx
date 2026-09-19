import { useState } from "react";

import type { ReporteFiltro } from "../types";

interface Props {

    onBuscar: (
        tipoReporte: string,
        filtro: ReporteFiltro
    ) => void;

}

const ReporteFiltros = ({
    onBuscar,
}: Props) => {

    const [tipoReporte, setTipoReporte] =
        useState("inmuebles");

    const [filtro, setFiltro] =
        useState<ReporteFiltro>({});

    const handleChange = (
        campo: keyof ReporteFiltro,
        valor: string
    ) => {

        setFiltro(prev => ({

            ...prev,

            [campo]:
                valor === ""
                    ? undefined
                    : valor,

        }));

    };

    const handleBuscar = () => {

        onBuscar(
            tipoReporte,
            filtro
        );

    };

    return (

        <div
            className="
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                p-6
                shadow-sm
            "
        >

            <h2
                className="
                    mb-6
                    text-xl
                    font-bold
                    text-[#2F3A2F]
                "
            >
                Filtros del reporte
            </h2>

            <div
                className="
                    grid
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {/* Tipo de reporte */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Reporte

                    </label>

                    <select
                        value={tipoReporte}
                        onChange={(e) =>
                            setTipoReporte(
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    >

                        <option value="inmuebles">

                            Inmuebles

                        </option>

                        <option value="publicaciones">

                            Publicaciones

                        </option>

                        <option value="seguimientos">

                            Seguimientos

                        </option>

                        <option value="productividad">

                            Productividad

                        </option>

                    </select>

                </div>

                {/* Fecha Inicio */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Fecha inicio

                    </label>

                    <input
                        type="date"
                        onChange={(e) =>
                            handleChange(
                                "fechaInicio",
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    />

                </div>

                {/* Fecha Fin */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Fecha fin

                    </label>

                    <input
                        type="date"
                        onChange={(e) =>
                            handleChange(
                                "fechaFin",
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    />

                </div>

                {/* Estado */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Estado

                    </label>

                    <select
                        value={filtro.idEstado ?? ""}
                        onChange={(e) =>
                            setFiltro(prev => ({
                                ...prev,
                                idEstado:
                                    e.target.value === ""
                                        ? undefined
                                        : Number(e.target.value),
                            }))
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    >

                        <option value="">

                            Todos

                        </option>

                        <option value="1">

                            Disponible

                        </option>

                        <option value="2">

                            Vendido

                        </option>

                    </select>

                </div>

                {/* Tipo */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Tipo

                    </label>

                    <select
                        value={filtro.idTipo ?? ""}
                        onChange={(e) =>
                            setFiltro(prev => ({
                                ...prev,
                                idTipo:
                                    e.target.value === ""
                                        ? undefined
                                        : Number(e.target.value),
                            }))
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    >

                        <option value="">

                            Todos

                        </option>

                        <option value="1">

                            Casa

                        </option>

                        <option value="2">

                            Inmueble en construcción

                        </option>

                        <option value="3">

                            Terreno

                        </option>

                        <option value="4">

                            Departamento

                        </option>

                    </select>

                </div>

                {/* Activo */}

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Activo

                    </label>

                    <select
                        onChange={(e) =>
                            setFiltro(prev => ({
                                ...prev,
                                activo:
                                    e.target.value === ""
                                        ? undefined
                                        : e.target.value === "true",
                            }))
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-2
                            focus:border-[#386641]
                            focus:outline-none
                        "
                    >

                        <option value="">

                            Todos

                        </option>

                        <option value="true">

                            Activos

                        </option>

                        <option value="false">

                            Inactivos

                        </option>

                    </select>

                </div>

            </div>

            <div className="mt-8 flex justify-end">

                <button
                    onClick={handleBuscar}
                    className="
                        rounded-xl
                        bg-[#386641]
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#6A994E]
                    "
                >
                    Generar reporte
                </button>

            </div>

        </div>

    );

};

export default ReporteFiltros;


