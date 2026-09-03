import {
    useEffect,
    useState,
} from "react";

import {
    obtenerTipoCambio,
} from "../services/tipoCambioService";

const TipoCambioCard = () => {

    const [usd, setUsd] = useState<number | null>(null);
    const [ufv, setUfv] = useState<number | null>(null);
    const [fecha, setFecha] = useState<string | null>(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const cargarTipoCambio = async () => {

            try {

                const response = await obtenerTipoCambio();

                if (!response.ok || !response.datos) {
                    throw new Error(
                        "Respuesta inválida de factura.bo"
                    );
                }

                setUsd(Number(response.datos.usd_bob));
                setUfv(Number(response.datos.ufv_bob));

                setFecha(
                    response.datos.fecha_actualizacion
                );

            } catch (error) {

                console.error(
                    "Error al obtener el tipo de cambio:",
                    error
                );

                setError(true);

            } finally {

                setCargando(false);

            }

        };

        cargarTipoCambio();

    }, []);

    if (cargando) {
        return (
            <section className="py-6">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-500">
                            Consultando tipo de cambio...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (error || usd === null) {
        return null;
    }

    const fechaFormateada = fecha
        ? new Date(fecha).toLocaleDateString(
            "es-BO",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }
        )
        : null;

    return (
        <section className="py-6">

            <div className="mx-auto max-w-7xl px-4">

                <div className="rounded-xl bg-white px-6 py-5 shadow-sm">

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        {/* Información */}

                        <div>

                            <p className="text-sm font-medium text-gray-500">
                                Indicadores oficiales
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-gray-800">
                                Tipo de cambio
                            </h2>

                            {fechaFormateada && (
                                <p className="mt-1 text-xs text-gray-400">
                                    Actualizado: {fechaFormateada}
                                </p>
                            )}

                        </div>

                        {/* Indicadores */}

                        <div className="flex flex-col gap-4 sm:flex-row">

                            {/* Dólar */}

                            <div className="min-w-[180px] rounded-lg bg-gray-50 px-5 py-3">

                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Dólar estadounidense
                                </p>

                                <p className="mt-1 text-xl font-bold text-gray-800">
                                    1 USD = Bs. {usd.toFixed(2)}
                                </p>

                            </div>

                            {/* UFV */}

                            {ufv !== null && (
                                <div className="min-w-[150px] rounded-lg bg-gray-50 px-5 py-3">

                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                        UFV
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-800">
                                        Bs. {ufv.toFixed(5)}
                                    </p>

                                </div>
                            )}

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-gray-400">
                        Fuente: Banco Central de Bolivia
                    </p>

                </div>

            </div>

        </section>
    );
};

export default TipoCambioCard;