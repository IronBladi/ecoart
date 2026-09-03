import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../features/auth";

interface Props {
    children: ReactNode;
    rolesPermitidos: number[];
}

const RoleRoute = ({
    children,
    rolesPermitidos,
}: Props) => {

    const { usuario, loading } = useAuth();

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    if (!rolesPermitidos.includes(usuario.idRol)) {

        const rutaDashboard =
            usuario.idRol === 1
                ? "/gerente/dashboard"
                : "/promotor/dashboard";

        return <Navigate to={rutaDashboard} replace />;
    }

    return children;
};

export default RoleRoute;