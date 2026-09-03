export interface ActualizarPropietarioRequest {
    nombre: string;
    apellido: string;
    ci: string;
    telefono?: string;
    correo?: string;
    direccion?: string;
}