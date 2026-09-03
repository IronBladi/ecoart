import { useEffect, useState } from "react";

import { inmuebleService } from "../services/inmueble.service";

import type {
    Inmueble,
    BuscarInmuebleRequest,
} from "../types";

export function useInmuebles() {

    const [inmuebles, setInmuebles] = useState<Inmueble[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        cargar();

    }, []);

    async function cargar() {

        setLoading(true);

        try {

            const data = await inmuebleService.obtenerTodos();

            setInmuebles(data);

        }
        finally {

            setLoading(false);

        }

    }

    async function buscar(
        filtros: BuscarInmuebleRequest
    ) {

        setLoading(true);

        try {

            const data = await inmuebleService.buscar(filtros);

            setInmuebles(data);

        }
        finally {

            setLoading(false);

        }

    }

    return {

        inmuebles,

        loading,

        recargar: cargar,

        buscar

    };

}