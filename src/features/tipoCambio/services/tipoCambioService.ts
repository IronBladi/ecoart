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

const API_URL = "https://api.factura.bo/ExchangeRate";

export const obtenerTipoCambio = async (): Promise<TipoCambioResponse> => {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("No se pudo obtener el tipo de cambio");
    }

    return await response.json();
};