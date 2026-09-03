import {
    useEffect,
    useState,
} from "react";

import { historialService }
    from "../services/historialService";

import type {
    Historial,
    HistorialFiltro,
} from "../types";

const useHistorial = () => {

    const [historial, setHistorial] =
        useState<Historial[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        cargarHistorial();

    }, []);

    const cargarHistorial =
        async () => {

            try {

                setLoading(true);

                const data =
                    await historialService.obtenerTodos();

                setHistorial(data);

            }
            catch {

                setError(
                    "No se pudo cargar la bitácora."
                );

            }
            finally {

                setLoading(false);

            }

        };

    const filtrarHistorial =
        async (
            filtro: HistorialFiltro
        ) => {

            try {

                setLoading(true);

                const data =
                    await historialService.filtrar(
                        filtro
                    );

                setHistorial(data);

            }
            catch {

                setError(
                    "No se pudo filtrar la bitácora."
                );

            }
            finally {

                setLoading(false);

            }

        };

    return {

        historial,

        loading,

        error,

        cargarHistorial,

        filtrarHistorial,

    };

};

export default useHistorial;