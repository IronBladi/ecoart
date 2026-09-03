import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
    children: ReactNode;
}

const DashboardLayout = ({
    children,
}: Props) => {

    return (

        <div className="flex min-h-screen bg-[#f6f6f4]">

            {/* Sidebar */}

            <Sidebar />

            {/* Contenido */}

            <div className="flex flex-1 flex-col">

                <Header />

                <main className="flex-1 overflow-y-auto p-8">

                    {children}

                </main>

            </div>

        </div>

    );

};

export default DashboardLayout;