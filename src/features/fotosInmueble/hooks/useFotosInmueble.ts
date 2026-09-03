import { useEffect, useState } from "react";

import { fotoInmuebleService } from "../services/fotoInmueble.service";

import type { FotoInmueble } from "../types";

const useFotosInmueble = (
    idInmueble: number
) => {

    const [fotos, setFotos] = useState<FotoInmueble[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const cargarFotos = async () => {

        try {

            const data =
                await fotoInmuebleService.obtenerPorInmueble(
                    idInmueble
                );

            setFotos(data);

        } catch {

            setError(
                "No se pudieron cargar las fotografías."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (!idInmueble) return;

        cargarFotos();

    }, [idInmueble]);

    return {

        fotos,

        loading,

        error,

        recargar: cargarFotos,

    };

};

export default useFotosInmueble;