import {
    api,
} from "../../../services/api";

import type {
    Ubicacion,
} from "../types";


class UbicacionService {

    // Obtener información de dirección
    // a partir de coordenadas geográficas.
    async obtenerDireccion(
        latitud: number,
        longitud: number,
    ): Promise<Ubicacion> {

        const response = await api.get(
            "/Ubicaciones/reverse",
            {
                params: {
                    latitud,
                    longitud,
                },
            }
        );

        return response.data;

    }

}


export const ubicacionService =
    new UbicacionService();