import { useCallback, useState } from "react";

import contactoService from "../services/contactoService";

import type {
    BuscarContactoRequest,
    Contacto,
    CrearContactoRequest
} from "../types/contacto";

export const useContactos = () => {

    const [contactos, setContactos] = useState<Contacto[]>([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    // ==========================================
    // Crear contacto (público)
    // ==========================================

    const crear = useCallback(
        async (data: CrearContactoRequest) => {

            try {

                setLoading(true);

                setError(null);

                const nuevo = await contactoService.crear(data);

                return nuevo;

            } catch (err: any) {

                setError(
                    err?.response?.data?.mensaje ??
                    "No se pudo enviar la consulta."
                );

                throw err;

            } finally {

                setLoading(false);

            }

        },
        []
    );

    // ==========================================
    // Obtener todos
    // ==========================================

    const obtenerTodos = useCallback(
        async () => {

            try {

                setLoading(true);

                setError(null);

                const data = await contactoService.obtenerTodos();

                setContactos(data);

            } catch (err: any) {

                setError(
                    err?.response?.data?.mensaje ??
                    "No se pudieron cargar los contactos."
                );

            } finally {

                setLoading(false);

            }

        },
        []
    );

    // ==========================================
    // Buscar
    // ==========================================

    const buscar = useCallback(
        async (filtro: BuscarContactoRequest) => {

            try {

                setLoading(true);

                setError(null);

                const data = await contactoService.buscar(filtro);

                setContactos(data);

            } catch (err: any) {

                setError(
                    err?.response?.data?.mensaje ??
                    "Error al buscar contactos."
                );

            } finally {

                setLoading(false);

            }

        },
        []
    );

    // ==========================================
    // Cambiar estado
    // ==========================================

    const cambiarEstado = useCallback(
        async (
            id: number,
            atendido: boolean
        ): Promise<void> => {

            try {

                setLoading(true);

                setError(null);

                const actualizado =
                    await contactoService.cambiarEstado(
                        id,
                        { atendido }
                    );

                setContactos(prev =>
                    prev.map(c =>
                        c.id === id
                            ? actualizado
                            : c
                    )
                );

            } catch (err: any) {

                setError(
                    err?.response?.data?.mensaje ??
                    "No se pudo actualizar el estado."
                );

                throw err;

            } finally {

                setLoading(false);

            }

        },
        []
    );

    return {

        contactos,

        loading,

        error,

        crear,

        obtenerTodos,

        buscar,

        cambiarEstado

    };

};

export default useContactos;