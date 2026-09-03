import type {
    CrearUsuarioRequest,
} from "./crearUsuario";

import type {
    ActualizarUsuarioRequest,
} from "./actualizarUsuario";


export type UsuarioFormData =
    Partial<CrearUsuarioRequest> &
    Partial<ActualizarUsuarioRequest> & {
        password?: string;
    };