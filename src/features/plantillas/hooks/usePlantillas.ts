import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { plantillaService } from "../services/plantillaService";

import type {
    Plantilla,
    CrearPlantillaRequest,
    ActualizarPlantillaRequest,
} from "../types";

export const usePlantillas = () => {

    const [plantillas, setPlantillas] = useState<Plantilla[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const cargarPlantillas = useCallback(async () => {

        try {

            setLoading(true);

            setError("");

            const data =
                await plantillaService.obtenerTodas();

            setPlantillas(data);

        }
        catch (err: any) {

            setError(
                err.response?.data?.mensaje ??
                "Error al cargar las plantillas."
            );

        }
        finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        cargarPlantillas();

    }, [cargarPlantillas]);

    const crear = async (
        data: CrearPlantillaRequest
    ) => {

        const nueva =
            await plantillaService.crear(data);

        setPlantillas(prev => [
            nueva,
            ...prev,
        ]);

        return nueva;

    };

    const actualizar = async (
        id: number,
        data: ActualizarPlantillaRequest
    ) => {

        const actualizada =
            await plantillaService.actualizar(
                id,
                data
            );

        setPlantillas(prev =>
            prev.map(x =>
                x.id === id
                    ? actualizada
                    : x
            )
        );

        return actualizada;

    };

    const eliminar = async (
        id: number
    ) => {

        await plantillaService.eliminar(id);

        setPlantillas(prev =>
            prev.filter(x => x.id !== id)
        );

    };

    return {

        plantillas,

        loading,

        error,

        recargar: cargarPlantillas,

        crear,

        actualizar,

        eliminar,

    };

};