import { api } from "../../../services";
import type {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    UsuarioPerfil,
} from "../types";

class AuthService {
    async login(data: LoginRequest): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>("/Auth/login", data);
        return response.data;
    }

    async register(data: RegisterRequest): Promise<void> {
        await api.post("/Auth/register", data);
    }

    async perfil(): Promise<UsuarioPerfil> {
        const response = await api.get<UsuarioPerfil>("/Auth/perfil");
        return response.data;
    }
}

export const authService = new AuthService();