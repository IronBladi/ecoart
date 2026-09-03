import { api } from "../../../services/api";

export interface TipoCambioResponse {
    ok: boolean;

    datos: {
        moneda_base: string;
        url_fuente: string;
        ufv_bob: number;
        fuente: string;
        usd_bob: number;
        fecha_actualizacion: string;
    };

    error: string | null;

    timestamp: string;
}

export const obtenerTipoCambio =
    async (): Promise<TipoCambioResponse> => {

        const response =
            await api.get<TipoCambioResponse>(
                "/TipoCambio"
            );

        return response.data;
    };