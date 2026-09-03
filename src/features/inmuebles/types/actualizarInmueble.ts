import type { CrearInmuebleRequest } from "./crearInmueble";

export interface ActualizarInmuebleRequest
    extends CrearInmuebleRequest {

    activo: boolean;

}