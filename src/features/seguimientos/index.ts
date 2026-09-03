// =====================================
// COMPONENTES
// =====================================

export { default as SeguimientoCard }
    from "./components/SeguimientoCard";

export { default as SeguimientoList }
    from "./components/SeguimientoList";

export { default as SeguimientoForm }
    from "./components/SeguimientoForm";

export { default as SeguimientoTimeline }
    from "./components/SeguimientoTimeline";


// =====================================
// NOTIFICACIONES
// =====================================

export { default as NotificacionCard }
    from "./components/NotificacionCard";

export { default as NotificacionList }
    from "./components/NotificacionList";


// =====================================
// PAGES
// =====================================

export { default as CrearSeguimientoPage }
    from "./pages/CrearSeguimientoPage";

export { default as SeguimientosPage }
    from "./pages/SeguimientosPage";

export { default as NotificacionesPage }
    from "./pages/NotificacionesPage";


// =====================================
// HOOKS
// =====================================

export { useSeguimientos }
    from "./hooks/useSeguimientos";

export { useNotificaciones }
    from "./hooks/useNotificaciones";


// =====================================
// SERVICES
// =====================================

export {
    seguimientoService
}
from "./services/seguimiento.service";


// =====================================
// TYPES
// =====================================

export type {

    Seguimiento,

    CrearSeguimientoRequest,

    ActualizarSeguimientoRequest,

    NotificacionSeguimiento,

}
from "./types";