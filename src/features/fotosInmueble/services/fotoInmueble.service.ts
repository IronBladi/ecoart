import { api } from "../../../services/api";

import type {
    FotoInmueble,
    SubirFotoInmuebleRequest,
} from "../types";

class FotoInmuebleService {

    async obtenerPorInmueble(
        idInmueble: number
    ): Promise<FotoInmueble[]> {

        const response = await api.get(
            `/FotoInmueble/inmueble/${idInmueble}`
        );

        return response.data;

    }

    async subir(
        idInmueble: number,
        data: SubirFotoInmuebleRequest
    ): Promise<FotoInmueble> {

        const formData = new FormData();

        formData.append(
            "archivo",
            data.archivo
        );

        formData.append(
            "principal",
            String(data.principal)
        );

        if (data.orden !== undefined) {

            formData.append(
                "orden",
                String(data.orden)
            );

        }

        const response = await api.post(
            `/FotoInmueble/${idInmueble}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;

    }

    async eliminar(idFoto: number): Promise<void> {

        await api.delete(
            `/FotoInmueble/${idFoto}`
        );

    }

}

export const fotoInmuebleService =
    new FotoInmuebleService();