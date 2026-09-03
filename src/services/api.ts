import axios from "axios";

import { getToken } from "../utils/token";

export const API_URL =
    import.meta.env.VITE_API_URL;

export const SERVER_URL =
    API_URL.replace(/\/api\/?$/, "");


export const api = axios.create({

    baseURL: API_URL,

    timeout: 10000,

    headers: {

        "Content-Type": "application/json",

    },

});


api.interceptors.request.use((config) => {

    const token = getToken();

    if (token) {

        config.headers.Authorization =
            `Bearer ${token}`;

    }

    return config;

});


export const getImageUrl = (

    url?: string | null,

    fallback: string =
        "https://placehold.co/800x500?text=Sin+fotografia"

): string => {

    // No existe URL
    if (!url || !url.trim()) {

        return fallback;

    }


    const valor = url.trim();


    // URL absoluta:
    // Supabase Storage, otro servidor, etc.
    if (/^https?:\/\//i.test(valor)) {

        return valor;

    }


    // URL relativa antigua:
    // /uploads/imagen.jpg
    return `${SERVER_URL}/${valor.replace(/^\/+/, "")}`;

};