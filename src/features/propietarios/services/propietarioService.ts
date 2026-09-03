import { api } from "../../../services/api";

import type {
    Propietario,
    CrearPropietarioRequest,
    ActualizarPropietarioRequest,
} from "../types";

class PropietarioService {

    async obtenerTodos(): Promise<Propietario[]> {

        const response = await api.get("/Propietarios");

        return response.data;

    }

    async obtenerPorId(id: number): Promise<Propietario> {

        const response = await api.get(`/Propietarios/${id}`);

        return response.data;

    }

    async crear(
        data: CrearPropietarioRequest
    ): Promise<Propietario> {

        const response = await api.post(
            "/Propietarios",
            data
        );

        return response.data;

    }

    async actualizar(
        id: number,
        data: ActualizarPropietarioRequest
    ): Promise<Propietario> {

        const response = await api.put(
            `/Propietarios/${id}`,
            data
        );

        return response.data;

    }

}

export const propietarioService = new PropietarioService();