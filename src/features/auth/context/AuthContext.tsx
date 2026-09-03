import {
    createContext,
} from "react";

import type {
    UsuarioPerfil,
} from "../types";

export interface AuthContextType {

    usuario: UsuarioPerfil | null;

    loading: boolean;

    login: (
        correo: string,
        password: string
    ) => Promise<UsuarioPerfil>;

    logout: () => void;

}

export const AuthContext =
    createContext<AuthContextType | undefined>(undefined);