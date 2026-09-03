import { Outlet } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../components/layout/DashboardLayout";

const ProtectedLayout = () => {

    return (

        <ProtectedRoute>

            <DashboardLayout>

                <Outlet />

            </DashboardLayout>

        </ProtectedRoute>

    );

};

export default ProtectedLayout;