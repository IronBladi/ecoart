export interface Propietario {
    id: number;
    nombre: string;
    apellido: string;
    ci: string;
    telefono?: string;
    correo?: string;
    direccion?: string;
    fechaCreacion: string;
}