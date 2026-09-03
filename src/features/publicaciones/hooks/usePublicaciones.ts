import {
    useEffect,
    useState,
} from "react";

import {
    publicacionService,
} from "../services/publicacionService";

import type {
    Publicacion,
    CrearPublicacionRequest,
    ActualizarPublicacionRequest,
} from "../types";

export const usePublicaciones = () => {

    const [
        publicaciones,
        setPublicaciones,
    ] = useState<Publicacion[]>([]);

    const [
        loading,
        setLoading,
    ] = useState(true);

    // =============================
    // Cargar publicaciones
    // =============================

    const cargarPublicaciones = async () => {

        try {

            setLoading(true);

            const data =
                await publicacionService
                    .obtenerTodas();

            setPublicaciones(data);

        }
        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        cargarPublicaciones();

    }, []);

    // =============================
    // Obtener por Id
    // =============================

    const obtenerPorId = async (
        id: number
    ) => {

        return await publicacionService
            .obtenerPorId(id);

    };

    // =============================
    // Crear
    // =============================

    const crear = async (
        data: CrearPublicacionRequest
    ) => {

        await publicacionService.crear(data);

        await cargarPublicaciones();

    };

    // =============================
    // Actualizar
    // =============================

    const actualizar = async (
        id: number,
        data: ActualizarPublicacionRequest
    ) => {

        await publicacionService.actualizar(
            id,
            data
        );

        await cargarPublicaciones();

    };

    // =============================
    // Cambiar estado
    // =============================

    const cambiarEstado = async (
        id: number,
        idEstado: number
    ) => {

        await publicacionService.cambiarEstado(
            id,
            {
                idEstado,
            }
        );

        await cargarPublicaciones();

    };

    // =============================
    // Eliminar
    // =============================

    const eliminar = async (
        id: number
    ) => {

        await publicacionService.eliminar(id);

        await cargarPublicaciones();

    };

    return {

        publicaciones,

        loading,

        cargarPublicaciones,

        obtenerPorId,

        crear,

        actualizar,

        cambiarEstado,

        eliminar,

    };

};