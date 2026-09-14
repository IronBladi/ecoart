import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {
    HomePage,
    NotFoundPage,
} from "../features/shared";

import {
    CatalogDetailPage,
} from "../features/catalogo";

import {
    ContactoPage,
    ContactosAdminPage,
} from "../features/contactos";

import {
    FotosInmueblePage,
} from "../features/fotosInmueble";

import {
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    ForgotPasswordPage,
} from "../features/auth";

import {
    DashboardGerente,
} from "../features/gerente";

import {
    DashboardPromotor,
} from "../features/promotor";

import {
    InmueblesPage,
    CrearInmueblePage,
    EditarInmueblePage,
} from "../features/inmuebles";

import {
    PropietariosPage,
    CrearPropietarioPage,
    EditarPropietarioPage,
} from "../features/propietarios";

import {
    PlantillasPage,
    CrearPlantillaPage,
    EditarPlantillaPage,
} from "../features/plantillas";

import {
    PublicacionesPage,
    CrearPublicacionPage,
    EditarPublicacionPage,
    GestionEstadoPublicacionesPage,
} from "../features/publicaciones";

// ===============================
// SEGUIMIENTOS
// ===============================

import {
    CrearSeguimientoPage,
    SeguimientosPage,
    NotificacionesPage,
} from "../features/seguimientos";

// ===============================
// USUARIOS
// ===============================

import {
    UsuariosPage,
    CrearUsuarioPage,
    EditarUsuarioPage,
} from "../features/usuarios";

// ===============================
// HISTORIAL
// ===============================

import {
    HistorialPage,
} from "../features/historial";

// ===============================
// REPORTES
// ===============================

import {
    ReportesPage,
} from "../features/reportes";

import {
    ProtectedLayout,
    RoleRoute,
} from ".";



const AppRouter = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* =========================
                    RUTAS PUBLICAS
                ========================== */}

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/catalogo/:id"
                    element={<CatalogDetailPage />}
                />

                <Route
                    path="/contacto"
                    element={<ContactoPage />}
                />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/registro"
                    element={<RegisterPage />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPasswordPage />}
                />

                {/* =========================
                    RUTAS PROTEGIDAS
                ========================== */}

                <Route element={<ProtectedLayout />}>

                    {/* DASHBOARD GERENTE */}

                    <Route
                        path="/gerente/dashboard"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <DashboardGerente />
                            </RoleRoute>
                        }
                    />

                    {/* DASHBOARD PROMOTOR */}

                    <Route
                        path="/promotor/dashboard"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <DashboardPromotor />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        INMUEBLES
                    ========================== */}

                    <Route
                        path="/inmuebles"
                        element={
                            <RoleRoute rolesPermitidos={[1, 2]}>
                                <InmueblesPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/inmuebles/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <CrearInmueblePage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/inmuebles/editar/:id"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <EditarInmueblePage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        PROPIETARIOS
                    ========================== */}

                    <Route
                        path="/propietarios"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <PropietariosPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/propietarios/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <CrearPropietarioPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/propietarios/editar/:id"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <EditarPropietarioPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        USUARIOS
                    ========================== */}

                    <Route
                        path="/usuarios"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <UsuariosPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/usuarios/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <CrearUsuarioPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/usuarios/editar/:id"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <EditarUsuarioPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        PLANTILLAS
                    ========================== */}

                    <Route
                        path="/plantillas"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <PlantillasPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/plantillas/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <CrearPlantillaPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/plantillas/editar/:id"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <EditarPlantillaPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        PUBLICACIONES
                    ========================== */}

                    <Route
                        path="/publicaciones"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <PublicacionesPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/publicaciones/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <CrearPublicacionPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/publicaciones/editar/:id"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <EditarPublicacionPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        CONTACTOS
                    ========================== */}

                    <Route
                        path="/contactos"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <ContactosAdminPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        ESTADO PUBLICACIONES
                    ========================== */}

                    <Route
                        path="/publicaciones/estado"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <GestionEstadoPublicacionesPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        REPORTES
                    ========================== */}

                    <Route
                        path="/reportes"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <ReportesPage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                        FOTOS
                    ========================== */}

                    <Route
                        path="/inmuebles/:id/fotos"
                        element={
                            <RoleRoute rolesPermitidos={[1, 2]}>
                                <FotosInmueblePage />
                            </RoleRoute>
                        }
                    />

                    {/* =========================
                            HISTORIAL
                        ========================== */}

                        <Route
                            path="/historial"
                            element={
                                <RoleRoute rolesPermitidos={[1]}>
                                    <HistorialPage />
                                </RoleRoute>
                            }
                        />

                    {/* =========================
                        SEGUIMIENTOS
                    ========================== */}

                    <Route
                        path="/seguimientos"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <SeguimientosPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/seguimientos/nuevo"
                        element={
                            <RoleRoute rolesPermitidos={[1]}>
                                <CrearSeguimientoPage />
                            </RoleRoute>
                        }
                    />

                    <Route
                        path="/notificaciones"
                        element={
                            <RoleRoute rolesPermitidos={[2]}>
                                <NotificacionesPage />
                            </RoleRoute>
                        }
                    />

                </Route>

                {/* =========================
                    404
                ========================== */}

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>

        </BrowserRouter>

    );

};

export default AppRouter;