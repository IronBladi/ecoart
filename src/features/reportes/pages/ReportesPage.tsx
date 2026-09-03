import { useState } from "react";

import DashboardCards from "../components/DashboardCards";
import ExportButtons from "../components/ExportButtons";
import ReporteFiltros from "../components/ReporteFiltros";

import ReporteInmueblesTable from "../components/ReporteInmueblesTable";
import ReportePublicacionesTable from "../components/ReportePublicacionesTable";
import ReporteSeguimientosTable from "../components/ReporteSeguimientosTable";
import ReporteProductividadTable from "../components/ReporteProductividadTable";

import useReportes from "../hooks/useReportes";

import { exportToExcel } from "../utils/exportExcel";
import { exportToPdf } from "../utils/exportPdf";

import type { ReporteFiltro } from "../types";

const ReportesPage = () => {

    const {

        dashboard,

        reporteInmuebles,

        reportePublicaciones,

        reporteSeguimientos,

        reporteProductividad,

        loading,

        cargarReporteInmuebles,

        cargarReportePublicaciones,

        cargarReporteSeguimientos,

        cargarReporteProductividad,

    } = useReportes();

    const [tipoReporte, setTipoReporte] =
        useState("inmuebles");

    const handleBuscar = async (
        tipo: string,
        filtro: ReporteFiltro
    ) => {

        setTipoReporte(tipo);

        switch (tipo) {

            case "publicaciones":

                await cargarReportePublicaciones(filtro);
                break;

            case "seguimientos":

                await cargarReporteSeguimientos(filtro);
                break;

            case "productividad":

                await cargarReporteProductividad();
                break;

            default:

                await cargarReporteInmuebles(filtro);
                break;

        }

    };

    const obtenerDatosExportacion = (): Record<
        string,
        string | number | boolean | null
    >[] => {

        switch (tipoReporte) {

            case "publicaciones":

                return reportePublicaciones.map(x => ({

                    Código: x.codigoInmueble ?? "-",

                    Inmueble: x.tituloInmueble ?? "-",

                    Tipo: x.tipoPublicacion ?? "-",

                    Estado: x.estado ?? "-",

                    Fecha: x.fechaPublicacion
                        ? new Date(
                            x.fechaPublicacion
                        ).toLocaleDateString()
                        : "-",

                    Responsable: x.publicadoPor ?? "-",

                    Activa: x.activo
                        ? "Sí"
                        : "No",

                }));

            case "seguimientos":

                return reporteSeguimientos.map(x => ({

                    Código: x.codigoInmueble ?? "-",

                    Inmueble: x.tituloInmueble ?? "-",

                    Responsable: x.responsable ?? "-",

                    Avance: `${x.porcentajeAvance}%`,

                    Fecha: new Date(
                        x.fecha
                    ).toLocaleDateString(),

                    Observaciones:
                        x.observaciones ?? "-",

                }));

            case "productividad":

                return reporteProductividad.map(x => ({

                    Usuario:
                        x.nombreUsuario,

                    Correo:
                        x.correo,

                    Inmuebles:
                        x.cantidadInmuebles,

                    Publicaciones:
                        x.cantidadPublicaciones,

                    Seguimientos:
                        x.cantidadSeguimientos,

                    ÚltimoAcceso:
                        x.ultimoAcceso
                            ? new Date(
                                x.ultimoAcceso
                            ).toLocaleDateString()
                            : "-",

                    Activo:
                        x.activo
                            ? "Sí"
                            : "No",

                }));

            default:

                return reporteInmuebles.map(x => ({

                    Código:
                        x.codigo ?? "-",

                    Título:
                        x.titulo ?? "-",

                    Propietario:
                        x.propietario ?? "-",

                    Tipo:
                        x.tipo ?? "-",

                    Estado:
                        x.estado ?? "-",

                    Departamento:
                        x.departamento ?? "-",

                    Ciudad:
                        x.ciudad ?? "-",

                    Zona:
                        x.zona ?? "-",

                    Precio:
                        `${x.moneda ?? ""} ${x.precio.toLocaleString()}`,

                    Valoración:
                        x.puntuacionPromedio,

                    Reseñas:
                        x.cantidadValoraciones,

                    RegistradoPor:
                        x.registradoPor ?? "-",

                    Fecha:
                        new Date(
                            x.fechaCreacion
                        ).toLocaleDateString(),

                    Activo:
                        x.activo
                            ? "Sí"
                            : "No",

                }));

        }

    };

    const handleExportExcel = () => {

        exportToExcel(
            obtenerDatosExportacion(),
            `Reporte_${tipoReporte}`
        );

    };

    const handleExportPdf = () => {

        exportToPdf(

            `Reporte ${tipoReporte}`,

            obtenerDatosExportacion(),

            {
                compact: tipoReporte === "inmuebles",
            }
        )
    };

    if (loading) {

        return (

            <p className="p-10">

                Cargando reportes...

            </p>

        );

    }

    return (

        <div className="mx-auto max-w-7xl space-y-8 p-10">

            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-4
                "
            >

                <div>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-[#2F3A2F]
                        "
                    >
                        Reportes
                    </h1>

                    <p
                        className="
                            mt-2
                            text-gray-500
                        "
                    >
                        Consulte información del sistema y exporte reportes.
                    </p>

                </div>

                <ExportButtons
                    onExportPdf={handleExportPdf}
                    onExportExcel={handleExportExcel}
                    disabled={
                        tipoReporte === "inmuebles"
                            ? reporteInmuebles.length === 0
                            : tipoReporte === "publicaciones"
                                ? reportePublicaciones.length === 0
                                : tipoReporte === "seguimientos"
                                    ? reporteSeguimientos.length === 0
                                    : reporteProductividad.length === 0
                    }
                />

            </div>

            {dashboard && (

                <DashboardCards
                    dashboard={dashboard}
                />

            )}

            <ReporteFiltros
                onBuscar={handleBuscar}
            />

            {tipoReporte === "inmuebles" && (

                <ReporteInmueblesTable
                    data={reporteInmuebles}
                />

            )}

            {tipoReporte === "publicaciones" && (

                <ReportePublicacionesTable
                    data={reportePublicaciones}
                />

            )}

            {tipoReporte === "seguimientos" && (

                <ReporteSeguimientosTable
                    data={reporteSeguimientos}
                />

            )}

            {tipoReporte === "productividad" && (

                <ReporteProductividadTable
                    data={reporteProductividad}
                />

            )}

        </div>

    );

};

export default ReportesPage;