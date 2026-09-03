import { api } from "../../../services/api";

import type {
    CatalogoInmueble,
    BuscarCatalogoRequest,
    CatalogoDetalle,
    CrearValoracion,
} from "../types";

class CatalogoService {

    async obtenerCatalogo(): Promise<CatalogoInmueble[]> {

        const response = await api.get("/Catalogo");

        return response.data;

    }

    async buscar(
        filtros: BuscarCatalogoRequest
    ): Promise<CatalogoInmueble[]> {

        const params = new URLSearchParams();

        if (filtros.texto)
            params.append("texto", filtros.texto);

        if (filtros.departamento)
            params.append("departamento", filtros.departamento);

        if (filtros.ciudad)
            params.append("ciudad", filtros.ciudad);

        if (filtros.idTipo)
            params.append(
                "idTipo",
                filtros.idTipo.toString()
            );

        if (filtros.precioMin !== undefined)
            params.append(
                "precioMin",
                filtros.precioMin.toString()
            );

        if (filtros.precioMax !== undefined)
            params.append(
                "precioMax",
                filtros.precioMax.toString()
            );

        const response = await api.get(
            `/Catalogo/buscar?${params.toString()}`
        );

        return response.data;

    }

    async obtenerPorId(
        id: number
    ): Promise<CatalogoDetalle> {

        const response =
            await api.get(`/Catalogo/${id}`);

        return response.data;

    }

    async registrarValoracion(
        id: number,
        data: CrearValoracion
    ): Promise<void> {

        await api.post(
            `/Catalogo/${id}/valoracion`,
            data
        );

    }

}

export const catalogoService =
    new CatalogoService();