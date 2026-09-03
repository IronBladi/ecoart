import { api } from "../../../services/api";

import type {
    ReporteDashboard,
    ReporteFiltro,
    ReporteInmueble,
    ReportePublicacion,
    ReporteSeguimiento,
    ReporteProductividad,
} from "../types";

class ReporteService {

    async obtenerDashboard(): Promise<ReporteDashboard> {

        const response = await api.get(
            "/Reportes/dashboard"
        );

        return response.data;

    }

    async obtenerReporteInmuebles(
        filtro?: ReporteFiltro
    ): Promise<ReporteInmueble[]> {

        const response = await api.get(
            "/Reportes/inmuebles",
            {
                params: filtro,
            }
        );

        return response.data;

    }

    async obtenerReportePublicaciones(
        filtro?: ReporteFiltro
    ): Promise<ReportePublicacion[]> {

        const response = await api.get(
            "/Reportes/publicaciones",
            {
                params: filtro,
            }
        );

        return response.data;

    }

    async obtenerReporteSeguimientos(
        filtro?: ReporteFiltro
    ): Promise<ReporteSeguimiento[]> {

        const response = await api.get(
            "/Reportes/seguimientos",
            {
                params: filtro,
            }
        );

        return response.data;

    }

    async obtenerReporteProductividad()
        : Promise<ReporteProductividad[]> {

        const response = await api.get(
            "/Reportes/productividad"
        );

        return response.data;

    }

}

export const reporteService = new ReporteService();