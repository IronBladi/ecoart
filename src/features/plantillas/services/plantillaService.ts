import { api } from "../../../services/api";

import type {
    Plantilla,
    CrearPlantillaRequest,
    ActualizarPlantillaRequest,
} from "../types";

class PlantillaService {

    // Obtener todas las plantillas

    async obtenerTodas(): Promise<Plantilla[]> {

        const response = await api.get(
            "/Plantilla"
        );

        return response.data;

    }

    // Obtener una plantilla por ID

    async obtenerPorId(
        id: number
    ): Promise<Plantilla> {

        const response = await api.get(
            `/Plantilla/${id}`
        );

        return response.data;

    }

    // Crear plantilla

    async crear(
        data: CrearPlantillaRequest
    ): Promise<Plantilla> {

        const response = await api.post(
            "/Plantilla",
            data
        );

        return response.data;

    }

    // Actualizar plantilla

    async actualizar(
        id: number,
        data: ActualizarPlantillaRequest
    ): Promise<Plantilla> {

        const response = await api.put(
            `/Plantilla/${id}`,
            data
        );

        return response.data;

    }

    // Eliminar plantilla

    async eliminar(
        id: number
    ): Promise<void> {

        await api.delete(
            `/Plantilla/${id}`
        );

    }

}

export const plantillaService =
    new PlantillaService();