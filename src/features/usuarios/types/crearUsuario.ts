export interface CrearUsuarioRequest {

    nombre: string;

    apellido?: string;

    correo: string;

    telefono?: string;

    password: string;

    idRol: number;

}