export interface CrearPropietarioRequest {
    nombre: string;
    apellido: string;
    ci: string;
    telefono?: string;
    correo?: string;
    direccion?: string;
}