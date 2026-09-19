import { useState } from "react";
import {
    FiSearch,
    FiMapPin,
    FiHome,
    FiDollarSign,
    FiChevronDown,
    FiX,
} from "react-icons/fi";
import type { BuscarCatalogoRequest } from "../types";

interface Props {
    onBuscar: (filtros: BuscarCatalogoRequest) => void;
}

const CatalogFilters = ({ onBuscar }: Props) => {
    const [texto, setTexto] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [idTipo, setIdTipo] = useState("");
    const [precioMax, setPrecioMax] = useState("");

    const hayFiltrosActivos = Boolean(
        texto || departamento || idTipo || precioMax
    );

    function buscar() {
        onBuscar({
            texto: texto.trim() || undefined,
            departamento: departamento || undefined,
            idTipo: idTipo ? Number(idTipo) : undefined,
            precioMax: precioMax ? Number(precioMax) : undefined,
        });
    }

    function limpiar() {
        setTexto("");
        setDepartamento("");
        setIdTipo("");
        setPrecioMax("");
        onBuscar({});
    }

    return (
        <div className="w-full">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    buscar();
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end"
            >
                {/* 1. Campo de Búsqueda por Texto */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                    <label
                        htmlFor="filtro-texto"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                        Palabra clave / Zona
                    </label>
                    <div className="relative flex items-center rounded-xl border border-gray-200 bg-gray-50/70 transition-all duration-200 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 hover:border-gray-300">
                        <div className="pointer-events-none absolute left-3.5 flex items-center text-accent">
                            <FiSearch size={18} />
                        </div>
                        <input
                            type="text"
                            id="filtro-texto"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            placeholder="Ej. Casa en San Roque, Tomatitas..."
                            className="w-full bg-transparent py-3 pl-10 pr-3 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none"
                        />
                        {texto && (
                            <button
                                type="button"
                                onClick={() => setTexto("")}
                                className="mr-3 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Borrar texto de búsqueda"
                            >
                                <FiX size={14} />
                            </button>
                        )}
                    </div>
                </div>

                {/* 2. Campo Departamento */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-3">
                    <label
                        htmlFor="filtro-departamento"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                        Departamento
                    </label>
                    <div className="relative flex items-center rounded-xl border border-gray-200 bg-gray-50/70 transition-all duration-200 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 hover:border-gray-300">
                        <div className="pointer-events-none absolute left-3.5 flex items-center text-accent">
                            <FiMapPin size={18} />
                        </div>
                        <select
                            id="filtro-departamento"
                            value={departamento}
                            onChange={(e) => setDepartamento(e.target.value)}
                            className="w-full cursor-pointer appearance-none bg-transparent py-3 pl-10 pr-8 text-sm font-medium text-gray-800 outline-none"
                        >
                            <option value="">Todos los departamentos</option>
                            <option value="La Paz">La Paz</option>
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Tarija">Tarija</option>
                            <option value="Chuquisaca">Chuquisaca</option>
                            <option value="Potosí">Potosí</option>
                            <option value="Oruro">Oruro</option>
                            <option value="Beni">Beni</option>
                            <option value="Pando">Pando</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 flex items-center text-gray-400">
                            <FiChevronDown size={16} />
                        </div>
                    </div>
                </div>

                {/* 3. Campo Tipo de Inmueble */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                    <label
                        htmlFor="filtro-tipo"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                        Tipo de propiedad
                    </label>
                    <div className="relative flex items-center rounded-xl border border-gray-200 bg-gray-50/70 transition-all duration-200 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 hover:border-gray-300">
                        <div className="pointer-events-none absolute left-3.5 flex items-center text-accent">
                            <FiHome size={18} />
                        </div>
                        <select
                            id="filtro-tipo"
                            value={idTipo}
                            onChange={(e) => setIdTipo(e.target.value)}
                            className="w-full cursor-pointer appearance-none bg-transparent py-3 pl-10 pr-8 text-sm font-medium text-gray-800 outline-none"
                        >
                            <option value="">Todos los tipos</option>
                            <option value="1">Casa</option>
                            <option value="2">En construcción</option>
                            <option value="3">Terreno</option>
                            <option value="4">Departamento</option>
                            <option value="5">Oficina</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 flex items-center text-gray-400">
                            <FiChevronDown size={16} />
                        </div>
                    </div>
                </div>

                {/* 4. Campo Precio Máximo */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                    <label
                        htmlFor="filtro-precio"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                        Precio Máximo
                    </label>
                    <div className="relative flex items-center rounded-xl border border-gray-200 bg-gray-50/70 transition-all duration-200 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 hover:border-gray-300">
                        <div className="pointer-events-none absolute left-3.5 flex items-center text-accent">
                            <FiDollarSign size={18} />
                        </div>
                        <input
                            type="number"
                            id="filtro-precio"
                            min="0"
                            step="1000"
                            value={precioMax}
                            onChange={(e) => setPrecioMax(e.target.value)}
                            placeholder="Monto máx."
                            className="w-full bg-transparent py-3 pl-10 pr-3 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none"
                        />
                    </div>
                </div>

                {/* 5. Botón de Búsqueda */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col justify-end">
                    <button
                        type="submit"
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-primary
                            py-3.5
                            px-4
                            text-sm
                            font-bold
                            text-white
                            shadow-md
                            transition-all
                            duration-200
                            hover:bg-secondary
                            hover:shadow-lg
                            active:scale-95
                        "
                        title="Buscar propiedades con los filtros seleccionados"
                    >
                        <FiSearch className="text-accent text-base" />
                        <span className="lg:hidden">Buscar</span>
                    </button>
                </div>
            </form>

            {/* Barra de estado / Limpiar filtros */}
            {hayFiltrosActivos && (
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <span className="font-medium text-secondary">
                        Filtros activos para la búsqueda
                    </span>
                    <button
                        type="button"
                        onClick={limpiar}
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-colors"
                    >
                        <FiX size={14} />
                        Limpiar todos los filtros
                    </button>
                </div>
            )}
        </div>
    );
};

export default CatalogFilters;
