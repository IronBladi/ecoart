import {
    useEffect,
    useState,
} from "react";

import {
    seguimientoService,
} from "../services/seguimiento.service";

import type {
    NotificacionSeguimiento,
} from "../types";

export const useNotificaciones = () => {

    const [
        notificaciones,
        setNotificaciones
    ] = useState<NotificacionSeguimiento[]>([]);

    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        error,
        setError
    ] = useState<string | null>(null);

    const cargarNotificaciones = async () => {

        try {

            setLoading(true);

            setError(null);

            const data =
                await seguimientoService
                    .obtenerNotificaciones();

            setNotificaciones(data);

        } catch (error) {

            console.error(error);

            setError(
                "No se pudieron cargar las notificaciones."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        cargarNotificaciones();

    }, []);

    const marcarComoLeida = async (
        idSeguimiento: number
    ) => {

        await seguimientoService
            .marcarComoLeida(idSeguimiento);

        setNotificaciones(
            actual =>
                actual.map(n =>
                    n.idSeguimiento === idSeguimiento
                        ? {
                            ...n,
                            leida: true
                        }
                        : n
                )
        );

    };

    return {

        notificaciones,

        loading,

        error,

        cargarNotificaciones,

        marcarComoLeida,

    };

};