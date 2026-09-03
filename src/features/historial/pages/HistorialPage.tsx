import {
    useState,
} from "react";


import HistorialFilters
    from "../components/HistorialFilters";

import HistorialTable
    from "../components/HistorialTable";

import HistorialDetailModal
    from "../components/HistorialDetailModal";


import useHistorial
    from "../hooks/useHistorial";


import type {
    Historial,
} from "../types";



const HistorialPage = () => {


    const {

        historial,

        loading,

        error,

        filtrarHistorial,

    } = useHistorial();



    const [historialSeleccionado, setHistorialSeleccionado] =
        useState<Historial | null>(null);



    const handleDetalle = (
        item: Historial
    ) => {

        setHistorialSeleccionado(item);

    };



    const cerrarModal = () => {

        setHistorialSeleccionado(null);

    };



    return (

        <div
            className="
                mx-auto
                max-w-7xl
                space-y-8
                p-10
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
                    Bitácora de auditoría
                </h1>


                <p
                    className="
                        mt-2
                        text-gray-500
                    "
                >
                    Consulte las acciones realizadas por los usuarios dentro del sistema.
                </p>


            </div>



            <HistorialFilters
                onBuscar={
                    filtrarHistorial
                }
            />



            {
                loading && (

                    <div
                        className="
                            rounded-3xl
                            border
                            border-[#E8E5D9]
                            bg-white
                            p-10
                            text-center
                            shadow-sm
                        "
                    >

                        <p>
                            Cargando bitácora...
                        </p>


                    </div>

                )
            }



            {
                error && (

                    <div
                        className="
                            rounded-3xl
                            border
                            border-red-200
                            bg-red-50
                            p-5
                            text-red-700
                        "
                    >

                        {error}

                    </div>

                )
            }



            {
                !loading && !error && (

                    <HistorialTable

                    data={
                        historial
                    }

                    onSelect={
                        handleDetalle
                    }

                />

                )
            }



            {
                historialSeleccionado && (

                    <HistorialDetailModal

                        historial={
                            historialSeleccionado
                        }

                        onClose={
                            cerrarModal
                        }

                    />

                )
            }



        </div>

    );

};


export default HistorialPage;