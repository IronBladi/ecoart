import { api } from "../../../services/api";

import type { EstadoInmueble } from "../types";

class EstadoInmuebleService {

    async obtenerTodos(): Promise<EstadoInmueble[]> {

        const response = await api.get("/EstadoInmueble");

        return response.data;

    }

}

export const estadoInmuebleService = new EstadoInmuebleService();