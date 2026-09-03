import { api } from "../../../services/api";

import type {
    Seguimiento,
    CrearSeguimientoRequest,
    ActualizarSeguimientoRequest,
    NotificacionSeguimiento,
} from "../types";


class SeguimientoService {


    // =====================================
    // SEGUIMIENTOS
    // =====================================


    // Obtener todos los seguimientos
    async obtenerTodos(): Promise<Seguimiento[]> {

        const response =
            await api.get("/Seguimientos");

        return response.data;

    }



    // Obtener seguimiento por ID
    async obtenerPorId(
        id: number
    ): Promise<Seguimiento> {

        const response =
            await api.get(`/Seguimientos/${id}`);

        return response.data;

    }



    // Obtener seguimientos asociados a un inmueble
    async obtenerPorInmueble(
        idInmueble: number
    ): Promise<Seguimiento[]> {

        const response =
            await api.get(
                `/Seguimientos/inmueble/${idInmueble}`
            );

        return response.data;

    }




    // Crear seguimiento
    async crear(
        data: CrearSeguimientoRequest
    ): Promise<Seguimiento> {


        const response =
            await api.post(
                "/Seguimientos",
                data
            );


        return response.data;

    }




    // Actualizar seguimiento
    async actualizar(
        id: number,
        data: ActualizarSeguimientoRequest
    ): Promise<Seguimiento> {


        const response =
            await api.put(
                `/Seguimientos/${id}`,
                data
            );


        return response.data;

    }





    // Eliminar seguimiento
    async eliminar(
        id: number
    ): Promise<void> {


        await api.delete(
            `/Seguimientos/${id}`
        );

    }





    // =====================================
    // INMUEBLES EN CONSTRUCCIÓN
    // =====================================


    async obtenerInmueblesEnConstruccion() {


        const response =
            await api.get(
                "/Seguimientos/inmuebles-en-construccion"
            );


        return response.data;

    }



    // =====================================
    // NOTIFICACIONES
    // =====================================

    async obtenerNotificaciones()
        : Promise<NotificacionSeguimiento[]> {

        const response =
            await api.get(
                "/Seguimientos/notificaciones"
            );

        return response.data;

    }

    async marcarComoLeida(
        idSeguimiento: number
    ): Promise<void> {

        await api.patch(
            `/Seguimientos/${idSeguimiento}/leer`
        );

    }


}


export const seguimientoService =
    new SeguimientoService();