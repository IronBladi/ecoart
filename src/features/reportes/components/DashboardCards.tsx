import {
    FiHome,
    FiFileText,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";

import type { ReporteDashboard } from "../types";

interface Props {

    dashboard: ReporteDashboard;

}

const DashboardCards = ({
    dashboard,
}: Props) => {

    const cards = [

        {
            titulo: "Inmuebles",
            valor: dashboard.totalInmuebles,
            icono: FiHome,
            color: "bg-[#386641]/10",
            iconColor: "text-[#386641]",
        },

        {
            titulo: "Publicaciones",
            valor: dashboard.totalPublicaciones,
            icono: FiFileText,
            color: "bg-[#6A994E]/10",
            iconColor: "text-[#6A994E]",
        },

        {
            titulo: "Seguimientos",
            valor: dashboard.totalSeguimientos,
            icono: FiTrendingUp,
            color: "bg-[#BC4749]/10",
            iconColor: "text-[#BC4749]",
        },

        {
            titulo: "Usuarios",
            valor: dashboard.totalUsuarios,
            icono: FiUsers,
            color: "bg-[#A7C957]/20",
            iconColor: "text-[#386641]",
        },

    ];

    return (

        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                xl:grid-cols-4
            "
        >

            {cards.map((card) => {

                const Icon = card.icono;

                return (

                    <div
                        key={card.titulo}
                        className="
                            rounded-3xl
                            border
                            border-[#E8E5D9]
                            bg-white
                            p-6
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p
                                    className="
                                        text-sm
                                        font-medium
                                        text-gray-500
                                    "
                                >
                                    {card.titulo}
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-3xl
                                        font-bold
                                        text-[#2F3A2F]
                                    "
                                >
                                    {card.valor}
                                </h2>

                            </div>

                            <div
                                className={`
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    ${card.color}
                                `}
                            >

                                <Icon
                                    size={28}
                                    className={card.iconColor}
                                />

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default DashboardCards;