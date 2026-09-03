import { useEffect, useState } from "react";

import { catalogoService } from "../services/catalogoService";

import type {
    CatalogoDetalle,
    CrearValoracion,
} from "../types";

export function useCatalogoDetalle(
    id: number
) {

    const [
        inmueble,
        setInmueble,
    ] = useState<CatalogoDetalle | null>(null);

    const [
        loading,
        setLoading,
    ] = useState(true);

    useEffect(() => {

        if (!id)
            return;

        cargar();

    }, [id]);

    async function cargar() {

        setLoading(true);

        try {

            const data =
                await catalogoService.obtenerPorId(id);

            setInmueble(data);

        }
        finally {

            setLoading(false);

        }

    }

    async function valorar(
        puntuacion: number
    ) {

        const request: CrearValoracion = {

            puntuacion,

        };

        await catalogoService.registrarValoracion(
            id,
            request
        );

        await cargar();

    }

    return {

        inmueble,

        loading,

        recargar: cargar,

        valorar,

    };

}