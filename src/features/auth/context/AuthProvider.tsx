import {
    useEffect,
    useState,
} from "react";

import type {
    ReactNode,
} from "react";

import type {
    UsuarioPerfil,
} from "../types";

import {
    authService,
} from "../services/auth.service";

import {
    saveToken,
    removeToken,
    getToken,
} from "../../../utils/token";

import {
    AuthContext,
} from "./AuthContext";

interface Props {

    children: ReactNode;

}

export function AuthProvider({
    children,
}: Props) {

    const [usuario, setUsuario] =
        useState<UsuarioPerfil | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        let activo = true;

        const cargarUsuario = async () => {

            const token = getToken();

            if (!token) {

                if (activo) {
                    setLoading(false);
                }

                return;

            }

            try {

                const perfil =
                    await authService.perfil();

                if (activo) {
                    setUsuario(perfil);
                }

            }
            catch {

                removeToken();

                if (activo) {
                    setUsuario(null);
                }

            }
            finally {

                if (activo) {
                    setLoading(false);
                }

            }

        };

        cargarUsuario();

        return () => {

            activo = false;

        };

    }, []);

    const login = async (
        correo: string,
        password: string
    ): Promise<UsuarioPerfil> => {

        const respuesta =
            await authService.login({

                correo,

                password,

            });

        saveToken(
            respuesta.token,
            respuesta.expiracion
        );

        const perfil =
            await authService.perfil();

        setUsuario(perfil);

        return perfil;

    };

    const logout = () => {

        removeToken();

        setUsuario(null);

    };

    return (

        <AuthContext.Provider
            value={{

                usuario,

                loading,

                login,

                logout,

            }}
        >

            {children}

        </AuthContext.Provider>

    );

}