import { api } from "../../../services/api";

import type {
    Publicacion,
    CrearPublicacionRequest,
    ActualizarPublicacionRequest,
    CambiarEstadoPublicacionRequest,
} from "../types";

class PublicacionService {

    // =============================
    // Obtener todas las publicaciones
    // =============================

    async obtenerTodas(): Promise<Publicacion[]> {

        const response = await api.get(
            "/Publicaciones"
        );

        return response.data;

    }

    // =============================
    // Obtener publicaciones activas
    // =============================

    async obtenerActivas(): Promise<Publicacion[]> {

        const response = await api.get(
            "/Publicaciones/activas"
        );

        return response.data;

    }

    // =============================
    // Obtener por Id
    // =============================

    async obtenerPorId(
        id: number
    ): Promise<Publicacion> {

        const response = await api.get(
            `/Publicaciones/${id}`
        );

        return response.data;

    }

    // =============================
    // Crear
    // =============================

    async crear(
        data: CrearPublicacionRequest
    ): Promise<Publicacion> {

        const response = await api.post(
            "/Publicaciones",
            data
        );

        return response.data;

    }

    // =============================
    // Actualizar
    // =============================

    async actualizar(
        id: number,
        data: ActualizarPublicacionRequest
    ): Promise<Publicacion> {

        const response = await api.put(
            `/Publicaciones/${id}`,
            data
        );

        return response.data;

    }

    // =============================
    // Cambiar estado
    // =============================

    async cambiarEstado(
        id: number,
        data: CambiarEstadoPublicacionRequest
    ): Promise<Publicacion> {

        const response = await api.patch(
            `/Publicaciones/${id}/estado`,
            data
        );

        return response.data;

    }

    // =============================
    // Eliminación lógica
    // =============================

    async eliminar(
        id: number
    ): Promise<void> {

        await api.delete(
            `/Publicaciones/${id}`
        );

    }

}

export const publicacionService =
    new PublicacionService();