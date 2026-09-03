import {
    useState,
    type FormEvent,
} from "react";

import {
    FiChevronDown,
    FiChevronUp,
    FiSearch,
    FiX,
} from "react-icons/fi";

import type {
    BuscarInmuebleRequest,
    EstadoInmueble,
    TipoInmueble,
} from "../types";

interface Props {

    onBuscar: (
        filtros: BuscarInmuebleRequest
    ) => void;

    onLimpiar: () => void;

    tipos: TipoInmueble[];

    estados: EstadoInmueble[];

}

const BusquedaInmueble = ({
    onBuscar,
    onLimpiar,
    tipos,
    estados,
}: Props) => {

    const [mostrarFiltros, setMostrarFiltros] =
        useState(false);

    const [filtros, setFiltros] =
        useState<BuscarInmuebleRequest>({});

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement
        >
    ) {

        const {
            name,
            value,
        } = e.target;

        let nuevoValor: unknown = value;

        switch (name) {

            case "idTipo":
            case "idEstado":

                nuevoValor =
                    value === ""
                        ? undefined
                        : Number(value);

                break;

            case "activo":

                nuevoValor =
                    value === ""
                        ? undefined
                        : value === "true";

                break;

            default:

                nuevoValor =
                    value === ""
                        ? undefined
                        : value;

                break;

        }

        setFiltros({

            ...filtros,

            [name]: nuevoValor,

        });

    }

    function buscar(
        e: FormEvent
    ) {

        e.preventDefault();

        onBuscar(filtros);

    }

    function limpiar() {

        setFiltros({});

        onLimpiar();

    }

    return (

        <div className="mb-8">

            <button
                type="button"
                onClick={() =>
                    setMostrarFiltros(!mostrarFiltros)
                }
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#386641]
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#2F5536]
                "
            >

                <FiSearch />

                Buscar inmuebles

                {mostrarFiltros
                    ? <FiChevronUp />
                    : <FiChevronDown />}

            </button>

            {mostrarFiltros && (

                <form
                    onSubmit={buscar}
                    className="
                        mt-5
                        rounded-3xl
                        bg-white
                        p-8
                        shadow-md
                    "
                >

                    <h2
                        className="
                            mb-6
                            text-2xl
                            font-bold
                            text-[#386641]
                        "
                    >

                        Búsqueda avanzada

                    </h2>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        <input
                            name="codigo"
                            placeholder="Código"
                            value={filtros.codigo ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        />

                        <input
                            name="titulo"
                            placeholder="Título"
                            value={filtros.titulo ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        />

                        <input
                            name="departamento"
                            placeholder="Departamento"
                            value={filtros.departamento ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        />

                        <input
                            name="ciudad"
                            placeholder="Ciudad"
                            value={filtros.ciudad ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        />

                        <input
                            name="zona"
                            placeholder="Zona"
                            value={filtros.zona ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        />

                        <select
                            name="idTipo"
                            value={filtros.idTipo ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        >

                            <option value="">
                                Todos los tipos
                            </option>

                            {tipos.map(tipo => (

                                <option
                                    key={tipo.id}
                                    value={tipo.id}
                                >

                                    {tipo.nombre}

                                </option>

                            ))}

                        </select>

                        <select
                            name="idEstado"
                            value={filtros.idEstado ?? ""}
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
                                focus:outline-none
                            "
                        >

                            <option value="">
                                Todos los estados
                            </option>

                            {estados.map(estado => (

                                <option
                                    key={estado.id}
                                    value={estado.id}
                                >

                                    {estado.nombre}

                                </option>

                            ))}

                        </select>

                        <select
                            name="activo"
                            value={
                                filtros.activo === undefined
                                    ? ""
                                    : filtros.activo.toString()
                            }
                            onChange={handleChange}
                            className="
                                rounded-xl
                                border
                                border-[#D9D9D9]
                                p-3
                                focus:border-[#6A994E]
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

                    <div className="mt-8 flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={limpiar}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-gray-300
                                px-5
                                py-3
                                font-semibold
                                transition
                                hover:bg-gray-100
                            "
                        >

                            <FiX />

                            Limpiar

                        </button>

                        <button
                            type="submit"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#386641]
                                px-5
                                py-3
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

                </form>

            )}

        </div>

    );

};

export default BusquedaInmueble;