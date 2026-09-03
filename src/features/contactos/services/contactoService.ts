import { api } from "../../../services/api";

import type {
    BuscarContactoRequest,
    CambiarEstadoContactoRequest,
    Contacto,
    CrearContactoRequest
} from "../types/contacto";

const URL = "/Contactos";

export const contactoService = {

    /**
     * Formulario público
     */
    async crear(
        data: CrearContactoRequest
    ): Promise<Contacto> {

        const response = await api.post<Contacto>(
            URL,
            data
        );

        return response.data;

    },

    /**
     * Panel del promotor
     */
    async obtenerTodos(): Promise<Contacto[]> {

        const response = await api.get<Contacto[]>(
            URL
        );

        return response.data;

    },

    async obtenerPorId(
        id: number
    ): Promise<Contacto> {

        const response = await api.get<Contacto>(
            `${URL}/${id}`
        );

        return response.data;

    },

    async buscar(
        filtros: BuscarContactoRequest
    ): Promise<Contacto[]> {

        const response = await api.get<Contacto[]>(
            `${URL}/buscar`,
            {
                params: filtros
            }
        );

        return response.data;

    },

    /**
     * Cambiar estado (Pendiente / Atendido)
     */
    async cambiarEstado(
        id: number,
        data: CambiarEstadoContactoRequest
    ): Promise<Contacto> {

        const response = await api.put<Contacto>(
            `${URL}/${id}/estado`,
            data
        );

        return response.data;

    }

};

export default contactoService;