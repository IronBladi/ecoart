import { api } from "../../../services/api";

import type {
    Usuario,
    CrearUsuarioRequest,
    ActualizarUsuarioRequest,
    CambiarEstadoUsuarioRequest,
} from "../types";

class UsuarioService {

    // =====================================
    // OBTENER TODOS
    // =====================================

    async obtenerTodos(): Promise<Usuario[]> {

        const response =
            await api.get("/Usuarios");

        return response.data;

    }

    // =====================================
    // OBTENER POR ID
    // =====================================

    async obtenerPorId(
        id: number
    ): Promise<Usuario> {

        const response =
            await api.get(
                `/Usuarios/${id}`
            );

        return response.data;

    }

    // =====================================
    // CREAR
    // =====================================

    async crear(
        data: CrearUsuarioRequest
    ): Promise<void> {

        await api.post(
            "/Auth/register",
            data
        );

    }

    // =====================================
    // ACTUALIZAR
    // =====================================

    async actualizar(
        id: number,
        data: ActualizarUsuarioRequest
    ): Promise<Usuario> {

        const response =
            await api.put(
                `/Usuarios/${id}`,
                data
            );

        return response.data;

    }

    // =====================================
    // CAMBIAR ESTADO
    // =====================================

    async cambiarEstado(
        id: number,
        data: CambiarEstadoUsuarioRequest
    ): Promise<void> {

        await api.patch(
            `/Usuarios/${id}/estado`,
            data
        );

    }

}

export const usuarioService =
    new UsuarioService();