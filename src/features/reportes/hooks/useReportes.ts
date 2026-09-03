import { useEffect, useState } from "react";

import { reporteService } from "../services/reporteService";

import type {
    ReporteDashboard,
    ReporteFiltro,
    ReporteInmueble,
    ReportePublicacion,
    ReporteSeguimiento,
    ReporteProductividad,
} from "../types";

const useReportes = () => {

    const [dashboard, setDashboard] =
        useState<ReporteDashboard | null>(null);

    const [reporteInmuebles, setReporteInmuebles] =
        useState<ReporteInmueble[]>([]);

    const [reportePublicaciones, setReportePublicaciones] =
        useState<ReportePublicacion[]>([]);

    const [reporteSeguimientos, setReporteSeguimientos] =
        useState<ReporteSeguimiento[]>([]);

    const [reporteProductividad, setReporteProductividad] =
        useState<ReporteProductividad[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        cargarDashboard();

    }, []);

    const cargarDashboard = async () => {

        try {

            setLoading(true);

            const data =
                await reporteService.obtenerDashboard();

            setDashboard(data);

        }
        catch {

            setError(
                "No se pudo cargar el dashboard."
            );

        }
        finally {

            setLoading(false);

        }

    };

    const cargarReporteInmuebles = async (
        filtro?: ReporteFiltro
    ) => {

        try {

            setLoading(true);

            const data =
                await reporteService.obtenerReporteInmuebles(
                    filtro
                );

            setReporteInmuebles(data);

        }
        catch {

            setError(
                "No se pudo cargar el reporte de inmuebles."
            );

        }
        finally {

            setLoading(false);

        }

    };

    const cargarReportePublicaciones = async (
        filtro?: ReporteFiltro
    ) => {

        try {

            setLoading(true);

            const data =
                await reporteService.obtenerReportePublicaciones(
                    filtro
                );

            setReportePublicaciones(data);

        }
        catch {

            setError(
                "No se pudo cargar el reporte de publicaciones."
            );

        }
        finally {

            setLoading(false);

        }

    };

    const cargarReporteSeguimientos = async (
        filtro?: ReporteFiltro
    ) => {

        try {

            setLoading(true);

            const data =
                await reporteService.obtenerReporteSeguimientos(
                    filtro
                );

            setReporteSeguimientos(data);

        }
        catch {

            setError(
                "No se pudo cargar el reporte de seguimientos."
            );

        }
        finally {

            setLoading(false);

        }

    };

    const cargarReporteProductividad = async () => {

        try {

            setLoading(true);

            const data =
                await reporteService.obtenerReporteProductividad();

            setReporteProductividad(data);

        }
        catch {

            setError(
                "No se pudo cargar el reporte de productividad."
            );

        }
        finally {

            setLoading(false);

        }

    };

    return {

        dashboard,

        reporteInmuebles,

        reportePublicaciones,

        reporteSeguimientos,

        reporteProductividad,

        loading,

        error,

        cargarDashboard,

        cargarReporteInmuebles,

        cargarReportePublicaciones,

        cargarReporteSeguimientos,

        cargarReporteProductividad,

    };

};

export default useReportes;