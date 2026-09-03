import type { Publicacion } from "../types";

import EstadoPublicacionRow from "./EstadoPublicacionRow";

type Props = {
    publicaciones: Publicacion[];
    onGuardar: (
        idPublicacion: number,
        idEstado: number
    ) => void | Promise<void>;
};

const EstadoPublicacionList = ({
    publicaciones,
    onGuardar,
}: Props) => {

    return (

        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* ===============================
                CABECERA
            =============================== */}

            <div
                className="
                    grid
                    grid-cols-12
                    items-center
                    bg-[#386641]
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    text-white
                "
            >

                <div className="col-span-5">

                    Inmueble

                </div>

                <div className="col-span-3">

                    Estado actual

                </div>

                <div className="col-span-4">

                    Acción

                </div>

            </div>

            {/* ===============================
                FILAS
            =============================== */}

            <div className="divide-y divide-slate-200">

                {publicaciones.length === 0 ? (

                    <div
                        className="
                            flex
                            h-48
                            items-center
                            justify-center
                            text-center
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-lg
                                    font-semibold
                                    text-slate-700
                                "
                            >

                                No existen publicaciones registradas

                            </p>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-500
                                "
                            >

                                Cuando existan publicaciones aparecerán aquí
                                para administrar su estado.

                            </p>

                        </div>

                    </div>

                ) : (

                    publicaciones.map((publicacion) => (

                        <EstadoPublicacionRow

                            key={publicacion.id}

                            publicacion={publicacion}

                            onGuardar={onGuardar}

                        />

                    ))

                )}

            </div>

        </div>

    );

};

export default EstadoPublicacionList;