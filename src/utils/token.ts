const TOKEN_KEY = "ecoart_token";
const EXPIRATION_KEY = "ecoart_expiration";

export const saveToken = (
    token: string,
    expiration: string
): void => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EXPIRATION_KEY, expiration);
};

export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getExpiration = (): string | null => {
    return localStorage.getItem(EXPIRATION_KEY);
};

export const removeToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
};

export const isAuthenticated = (): boolean => {
    return !!getToken();
};