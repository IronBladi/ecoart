import { useEffect, useState } from "react";

import { catalogoService } from "../services/catalogoService";

import type {
    CatalogoInmueble,
    BuscarCatalogoRequest,
} from "../types";

export function useCatalogo() {

    const [
        inmuebles,
        setInmuebles,
    ] = useState<CatalogoInmueble[]>([]);

    const [
        loading,
        setLoading,
    ] = useState(true);

    useEffect(() => {

        cargar();

    }, []);

    // =============================
    // Obtener catálogo completo
    // =============================

    async function cargar() {

        setLoading(true);

        try {

            const data =
                await catalogoService.obtenerCatalogo();

            setInmuebles(data);

        }
        finally {

            setLoading(false);

        }

    }

    // =============================
    // Buscar
    // =============================

    async function buscar(
        filtros: BuscarCatalogoRequest
    ) {

        setLoading(true);

        try {

            const data =
                await catalogoService.buscar(filtros);

            setInmuebles(data);

        }
        finally {

            setLoading(false);

        }

    }

    // =============================
    // Obtener detalle
    // =============================

    async function obtenerPorId(
        id: number
    ) {

        return await catalogoService.obtenerPorId(id);

    }

    return {

        inmuebles,

        loading,

        recargar: cargar,

        buscar,

        obtenerPorId,

    };

}