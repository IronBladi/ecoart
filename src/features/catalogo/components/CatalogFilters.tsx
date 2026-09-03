import {
    FiSearch,
    FiMapPin,
    FiHome,
    FiDollarSign,
} from "react-icons/fi";

import { useState } from "react";

import type {
    BuscarCatalogoRequest,
} from "../types";

interface Props {

    onBuscar: (
        filtros: BuscarCatalogoRequest
    ) => void;

}

const CatalogFilters = ({
    onBuscar,
}: Props) => {

    const [texto, setTexto] = useState("");

    const [departamento, setDepartamento] = useState("");

    const [idTipo, setIdTipo] = useState("");

    const [precioMax, setPrecioMax] = useState("");

    function buscar() {

        onBuscar({

            texto: texto || undefined,

            departamento:
                departamento || undefined,

            idTipo:
                idTipo
                    ? Number(idTipo)
                    : undefined,

            precioMax:
                precioMax
                    ? Number(precioMax)
                    : undefined

        });

    }

    return (

        <div
            className="
                grid
                gap-5
                lg:grid-cols-5
            "
        >

            {/* Texto */}

            <div className="relative">

                <FiSearch
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#6A994E]
                    "
                />

                <input

                    value={texto}

                    onChange={(e) =>
                        setTexto(
                            e.target.value
                        )
                    }

                    placeholder="
                        Buscar inmueble,
                        zona o ciudad
                    "

                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        py-4
                        pl-12
                        pr-4
                        outline-none
                        focus:border-[#6A994E]
                    "

                />

            </div>

            {/* Departamento */}

            <div className="relative">

                <FiMapPin
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#6A994E]
                    "
                />

                <select

                    value={departamento}

                    onChange={(e) =>
                        setDepartamento(
                            e.target.value
                        )
                    }

                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        py-4
                        pl-12
                        pr-4
                    "

                >

                    <option value="">

                        Departamento

                    </option>

                    <option>La Paz</option>

                    <option>Cochabamba</option>

                    <option>Santa Cruz</option>

                    <option>Tarija</option>

                    <option>Chuquisaca</option>

                    <option>Potosí</option>

                    <option>Oruro</option>

                    <option>Beni</option>

                    <option>Pando</option>

                </select>

            </div>

            {/* Tipo */}

            <div className="relative">

                <FiHome
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#6A994E]
                    "
                />

                <select

                    value={idTipo}

                    onChange={(e) =>
                        setIdTipo(
                            e.target.value
                        )
                    }

                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        py-4
                        pl-12
                        pr-4
                    "

                >

                    <option value="">

                        Tipo

                    </option>

                    <option value="1">

                        Casa

                    </option>

                    <option value="2">

                        Departamento

                    </option>

                    <option value="3">

                        Terreno

                    </option>

                    <option value="4">

                        Oficina

                    </option>

                </select>

            </div>

            {/* Precio */}

            <div className="relative">

                <FiDollarSign
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#6A994E]
                    "
                />

                <input

                    type="number"

                    value={precioMax}

                    onChange={(e) =>
                        setPrecioMax(
                            e.target.value
                        )
                    }

                    placeholder="Precio máximo"

                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        py-4
                        pl-12
                        pr-4
                    "

                />

            </div>

            {/* Buscar */}

            <button

                onClick={buscar}

                className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#386641]
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#2F5536]
                "

            >

                <FiSearch />

                Buscar

            </button>

        </div>

    );

};

export default CatalogFilters;