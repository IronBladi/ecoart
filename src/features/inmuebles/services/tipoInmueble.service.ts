import { api } from "../../../services/api";

import type { TipoInmueble } from "../types";

class TipoInmuebleService {

    async obtenerTodos(): Promise<TipoInmueble[]> {

        const response = await api.get("/TipoInmueble");

        return response.data;

    }

}

export const tipoInmuebleService = new TipoInmuebleService();