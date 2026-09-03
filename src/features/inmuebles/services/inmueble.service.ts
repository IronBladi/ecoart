import { api } from "../../../services/api";

import type {
    Inmueble,
    CrearInmuebleRequest,
    ActualizarInmuebleRequest,
    BuscarInmuebleRequest,
} from "../types";

class InmuebleService {

    // Obtener todos los inmuebles
    async obtenerTodos(): Promise<Inmueble[]> {

        const response = await api.get("/Inmuebles");

        return response.data;

    }

    // Buscar inmuebles por filtros
    async buscar(
        filtros: BuscarInmuebleRequest
    ): Promise<Inmueble[]> {

        const params = new URLSearchParams();

        if (filtros.codigo)
            params.append(
                "codigo",
                filtros.codigo
            );

        if (filtros.titulo)
            params.append(
                "titulo",
                filtros.titulo
            );

        if (filtros.departamento)
            params.append(
                "departamento",
                filtros.departamento
            );

        if (filtros.ciudad)
            params.append(
                "ciudad",
                filtros.ciudad
            );

        if (filtros.zona)
            params.append(
                "zona",
                filtros.zona
            );

        if (filtros.idPropietario)
            params.append(
                "idPropietario",
                filtros.idPropietario.toString()
            );

        if (filtros.idTipo)
            params.append(
                "idTipo",
                filtros.idTipo.toString()
            );

        if (filtros.idEstado)
            params.append(
                "idEstado",
                filtros.idEstado.toString()
            );

        if (filtros.activo !== undefined)
            params.append(
                "activo",
                filtros.activo.toString()
            );

        const response = await api.get(
            `/Inmuebles/buscar?${params.toString()}`
        );

        return response.data;

    }

    // Obtener un inmueble por ID
    async obtenerPorId(id: number): Promise<Inmueble> {

        const response = await api.get(`/Inmuebles/${id}`);

        return response.data;

    }

    // Crear un inmueble
    async crear(
        data: CrearInmuebleRequest
    ): Promise<Inmueble> {

        const response = await api.post(
            "/Inmuebles",
            data
        );

        return response.data;

    }

    // Actualizar un inmueble
    async actualizar(
        id: number,
        data: ActualizarInmuebleRequest
    ): Promise<Inmueble> {

        const response = await api.put(
            `/Inmuebles/${id}`,
            data
        );

        return response.data;

    }

    // Eliminación lógica
    async eliminar(
        id: number
    ): Promise<void> {

        await api.delete(`/Inmuebles/${id}`);

    }

}

export const inmuebleService = new InmuebleService();