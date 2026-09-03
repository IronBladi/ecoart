import { api } from "../../../services/api";

import type {
    Historial,
    HistorialFiltro,
} from "../types";

class HistorialService {

    async obtenerTodos(): Promise<Historial[]> {

        const response = await api.get(
            "/Historial"
        );

        return response.data;

    }

    async obtenerPorId(
        id: number
    ): Promise<Historial> {

        const response = await api.get(
            `/Historial/${id}`
        );

        return response.data;

    }

    async filtrar(
        filtro: HistorialFiltro
    ): Promise<Historial[]> {

        const response = await api.get(
            "/Historial/filtrar",
            {
                params: filtro,
            }
        );

        return response.data;

    }

}

export const historialService =
    new HistorialService();