import { useEffect, useState } from "react";

import {
    tipoInmuebleService,
    estadoInmuebleService,
} from "../services";

import type {
    TipoInmueble,
    EstadoInmueble,
} from "../types";

const useCatalogos = () => {

    const [tipos, setTipos] = useState<TipoInmueble[]>([]);

    const [estados, setEstados] = useState<EstadoInmueble[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const cargarCatalogos = async () => {

            try {

                const [tiposData, estadosData] = await Promise.all([

                    tipoInmuebleService.obtenerTodos(),

                    estadoInmuebleService.obtenerTodos(),

                ]);

                setTipos(tiposData);

                setEstados(estadosData);

            } catch {

                setError("No se pudieron cargar los catálogos.");

            } finally {

                setLoading(false);

            }

        };

        cargarCatalogos();

    }, []);

    return {

        tipos,

        estados,

        loading,

        error,

    };

};

export default useCatalogos;