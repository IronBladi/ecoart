import { useEffect, useState } from "react";
import { FiTrendingUp, FiInfo } from "react-icons/fi";
import { obtenerTipoCambio } from "../services/tipoCambioService";

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
                    throw new Error("Respuesta inválida de factura.bo");
                }

                setUsd(Number(response.datos.usd_bob));
                setUfv(Number(response.datos.ufv_bob));
                setFecha(response.datos.fecha_actualizacion);
            } catch (error) {
                console.error("Error al obtener el tipo de cambio:", error);
                setError(true);
            } finally {
                setCargando(false);
            }
        };

        cargarTipoCambio();
    }, []);

    // 1. Estado de Carga (Skeleton proporcionado para evitar saltos de layout)
    if (cargando) {
        return (
            <section
                className="py-4 md:py-6"
                aria-label="Cargando indicadores de tipo de cambio"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl rounded-2xl md:rounded-3xl border border-gray-200/80 bg-white p-5 md:p-6 shadow-sm">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between animate-pulse">
                            <div className="flex items-center gap-3.5">
                                <div className="h-11 w-11 rounded-xl bg-gray-100" />
                                <div className="space-y-2">
                                    <div className="h-4 w-32 rounded-md bg-gray-100" />
                                    <div className="h-5 w-44 rounded-md bg-gray-200" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="h-16 w-40 rounded-xl bg-gray-100" />
                                <div className="h-16 w-40 rounded-xl bg-gray-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // 2. Estado de Error comprensible y no intrusivo
    if (error || usd === null) {
        return (
            <section
                className="py-4 md:py-6"
                aria-label="Información de tipo de cambio"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl rounded-2xl md:rounded-3xl border border-gray-200/80 bg-white p-4 sm:p-5 shadow-sm text-gray-500 text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                                <FiInfo size={18} />
                            </div>
                            <p>
                                <span className="font-semibold text-gray-700">
                                    Indicadores oficiales:
                                </span>{" "}
                                Servicio de cotizaciones en actualización. Las
                                transacciones se cotizan según el tipo de cambio
                                oficial del BCB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const fechaFormateada = fecha
        ? new Date(fecha).toLocaleDateString("es-BO", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
          })
        : null;

    // 3. Renderizado principal
    return (
        <section
            className="py-4 md:py-6"
            aria-label="Indicadores oficiales de tipo de cambio"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Tarjeta contenida con microinteracción hover suave */}
                <div className="mx-auto max-w-4xl rounded-2xl md:rounded-3xl border border-gray-200/80 bg-white p-5 md:p-6 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:shadow-md hover:border-gray-300/80">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        {/* Encabezado e información oficial */}
                        <div className="flex items-start gap-3.5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent border border-accent/20">
                                <FiTrendingUp size={22} className="text-accent" />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                        Mercado Oficial
                                    </span>
                                    {fechaFormateada && (
                                        <span className="text-xs text-gray-400">
                                            · Actualizado: {fechaFormateada}
                                        </span>
                                    )}
                                </div>
                                <h2 className="mt-1 text-base md:text-lg font-extrabold text-primary">
                                    Tipo de cambio oficial
                                </h2>
                                <p className="text-xs text-gray-500">
                                    Fuente oficial del Banco Central de Bolivia (BCB)
                                </p>
                            </div>
                        </div>

                        {/* Indicadores numéricos de alta legibilidad */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            {/* Dólar estadounidense */}
                            <div className="flex-1 min-w-[170px] rounded-xl border border-gray-100 bg-gray-50/70 p-3.5 transition-all hover:bg-white hover:border-gray-200">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                                        Dólar oficial
                                    </span>
                                    <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                                        USD / BOB
                                    </span>
                                </div>
                                <div className="mt-1 flex items-baseline gap-1">
                                    <span className="text-xl md:text-2xl font-extrabold text-primary">
                                        Bs. {usd.toFixed(2)}
                                    </span>
                                    <span className="text-xs font-semibold text-gray-400">
                                        / $us
                                    </span>
                                </div>
                            </div>

                            {/* Unidad UFV */}
                            {ufv !== null && (
                                <div className="flex-1 min-w-[170px] rounded-xl border border-gray-100 bg-gray-50/70 p-3.5 transition-all hover:bg-white hover:border-gray-200">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                                            Unidad UFV
                                        </span>
                                        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-accent">
                                            BCB
                                        </span>
                                    </div>
                                    <div className="mt-1 flex items-baseline gap-1">
                                        <span className="text-xl md:text-2xl font-extrabold text-primary">
                                            Bs. {ufv.toFixed(5)}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TipoCambioCard;