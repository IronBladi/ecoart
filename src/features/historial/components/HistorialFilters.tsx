import { useState } from "react";

import type {
    HistorialFiltro,
} from "../types";


interface Props {

    onBuscar: (
        filtro: HistorialFiltro
    ) => void;

}


const HistorialFilters = ({
    onBuscar,
}: Props) => {


    const [filtro, setFiltro] =
        useState<HistorialFiltro>({});


    const handleChange = (
        campo: keyof HistorialFiltro,
        valor: string
    ) => {

        setFiltro(prev => ({

            ...prev,

            [campo]:

                valor === ""

                    ? undefined

                    : campo === "idUsuario"

                        ? Number(valor)

                        : valor,

        }));

    };


    const buscar = () => {

        onBuscar(filtro);

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
                Filtros de auditoría
            </h2>


            <div
                className="
                    grid
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >


                {/* Usuario */}

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                        "
                    >
                        Usuario
                    </label>


                    <select
                        value={filtro.idUsuario ?? ""}
                        onChange={(e) =>
                            handleChange(
                                "idUsuario",
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
                        "
                    >

                        <option value="">
                            Todos los usuarios
                        </option>

                        <option value="1">
                            Pedro Fernando Acebo
                        </option>

                        <option value="2">
                            Juan Alberto Zuñiga
                        </option>

                        <option value="3">
                            Gabriel Aramayo
                        </option>

                    </select>

                </div>



                {/* Módulo */}

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                        "
                    >
                        Módulo
                    </label>


                    <select
                        value={filtro.modulo ?? ""}
                        onChange={(e) =>
                            handleChange(
                                "modulo",
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
                        "
                    >

                        <option value="">
                            Todos los módulos
                        </option>

                        <option value="Usuarios">
                            Usuarios
                        </option>

                        <option value="Propietarios">
                            Propietarios
                        </option>

                        <option value="Inmuebles">
                            Inmuebles
                        </option>

                        <option value="Publicaciones">
                            Publicaciones
                        </option>

                        <option value="Seguimientos">
                            Seguimientos
                        </option>

                        <option value="Reportes">
                            Reportes
                        </option>

                        <option value="Autenticación">
                            Autenticación
                        </option>

                    </select>

                </div>



                {/* Acción */}

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                        "
                    >
                        Acción
                    </label>


                    <select
                        value={filtro.accion ?? ""}
                        onChange={(e) =>
                            handleChange(
                                "accion",
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
                        "
                    >

                        <option value="">
                            Todas las acciones
                        </option>

                        <option value="Crear">
                            Crear
                        </option>

                        <option value="Actualizar">
                            Actualizar
                        </option>

                        <option value="Eliminar">
                            Eliminar
                        </option>

                        <option value="Consultar">
                            Consultar
                        </option>

                        <option value="Iniciar sesión">
                            Iniciar sesión
                        </option>

                        <option value="Cerrar sesión">
                            Cerrar sesión
                        </option>

                    </select>

                </div>



                {/* Fecha inicio */}

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                        "
                    >
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
                        "
                    />

                </div>



                {/* Fecha fin */}

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                        "
                    >
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
                        "
                    />

                </div>


            </div>



            <div
                className="
                    mt-8
                    flex
                    justify-end
                "
            >

                <button
                    onClick={buscar}
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
                    Buscar
                </button>


            </div>


        </div>

    );

};


export default HistorialFilters;