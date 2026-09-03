export interface Usuario {

    id: number;

    nombre: string;

    apellido?: string;

    correo: string;

    telefono?: string;

    idRol: number;

    rol: string;

    activo: boolean;

    ultimoAcceso?: string;

    fechaCreacion: string;

}