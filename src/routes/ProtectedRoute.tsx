import type { ReactNode } from "react";

import {
    Navigate,
    useLocation,
} from "react-router-dom";

import { useAuth } from "../features/auth";

interface Props {

    children: ReactNode;

}

const ProtectedRoute = ({
    children,
}: Props) => {

    const {
        usuario,
        loading,
    } = useAuth();

    const location = useLocation();

    if (loading) {

        return <p>Cargando...</p>;

    }

    if (!usuario) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    if (
        location.pathname === "/login" ||
        location.pathname === "/"
    ) {

        if (usuario.idRol === 1) {

            return (
                <Navigate
                    to="/gerente/dashboard"
                    replace
                />
            );

        }

        return (
            <Navigate
                to="/promotor/dashboard"
                replace
            />
        );

    }

    return children;

};

export default ProtectedRoute;