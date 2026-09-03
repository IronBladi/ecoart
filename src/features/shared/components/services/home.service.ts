import { api } from "../../../../services/api";

import type { HomeCarrusel } from "../types/homeCarrusel";

class HomeService {

    /**
     * Obtiene los banners del carrusel público.
     */
    async obtenerCarrusel(): Promise<HomeCarrusel[]> {

        const { data } = await api.get<HomeCarrusel[]>(
            "/Home/carrusel"
        );

        return data;

    }

}

export const homeService = new HomeService();