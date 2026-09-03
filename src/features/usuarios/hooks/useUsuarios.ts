import {
    useEffect,
    useState,
} from "react";

import {
    usuarioService,
} from "../services/usuario.service";

import type {
    Usuario,
    CrearUsuarioRequest,
    ActualizarUsuarioRequest,
} from "../types";

export const useUsuarios = () => {

    const [
        usuarios,
        setUsuarios,
    ] = useState<Usuario[]>([]);

    const [
        loading,
        setLoading,
    ] = useState(true);

    // =============================
    // Cargar usuarios
    // =============================

    const cargarUsuarios = async () => {

        try {

            setLoading(true);

            const data =
                await usuarioService
                    .obtenerTodos();

            setUsuarios(data);

        }
        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        cargarUsuarios();

    }, []);

    // =============================
    // Obtener por Id
    // =============================

    const obtenerPorId = async (
        id: number
    ) => {

        return await usuarioService
            .obtenerPorId(id);

    };

    // =============================
    // Crear usuario
    // =============================

    const crear = async (
        data: CrearUsuarioRequest
    ) => {

        await usuarioService
            .crear(data);

        await cargarUsuarios();

    };

    // =============================
    // Actualizar usuario
    // =============================

    const actualizar = async (
        id: number,
        data: ActualizarUsuarioRequest
    ) => {

        await usuarioService
            .actualizar(
                id,
                data
            );

        await cargarUsuarios();

    };

    // =============================
    // Activar / Desactivar
    // =============================

    const cambiarEstado = async (
        id: number,
        activo: boolean
    ) => {

        await usuarioService
            .cambiarEstado(
                id,
                {
                    activo,
                }
            );

        await cargarUsuarios();

    };

    return {

        usuarios,

        loading,

        cargarUsuarios,

        obtenerPorId,

        crear,

        actualizar,

        cambiarEstado,

    };

};