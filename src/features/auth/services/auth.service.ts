import { api } from "../../../services";

import type {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    ResetPasswordRequest,
    ForgotPasswordRequest,
    UsuarioPerfil,
} from "../types";


class AuthService {

    async login(
        data: LoginRequest
    ): Promise<LoginResponse> {

        const response = await api.post<LoginResponse>(
            "/Auth/login",
            data
        );

        return response.data;
    }


    async register(
        data: RegisterRequest
    ): Promise<void> {

        await api.post(
            "/Auth/register",
            data
        );
    }


    async perfil(): Promise<UsuarioPerfil> {

        const response = await api.get<UsuarioPerfil>(
            "/Auth/perfil"
        );

        return response.data;
    }


    async forgotPassword(
        data: ForgotPasswordRequest
    ): Promise<{ mensaje: string }> {

        const response = await api.post<{ mensaje: string }>(
            "/auth/password/forgot",
            data
        );

        return response.data;
    }


    async resetPassword(
        data: ResetPasswordRequest
    ): Promise<{ mensaje: string }> {

        const response = await api.post<{ mensaje: string }>(
            "/auth/password/reset",
            data
        );

        return response.data;
    }

}


export const authService = new AuthService();