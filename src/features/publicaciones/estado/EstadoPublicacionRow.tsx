import {
    useState,
} from "react";

import type {
    Publicacion,
} from "../types";

import EstadoPublicacionSelector from "./EstadoPublicacionSelector";

type Props = {
    publicacion: Publicacion;

    onGuardar: (
        idPublicacion: number,
        idEstado: number
    ) => void | Promise<void>;
};

const EstadoPublicacionRow = ({
    publicacion,
    onGuardar,
}: Props) => {

    const obtenerIdEstado = (
        estado: string
    ): number => {

        switch (estado) {

            case "Archivada":
                return 2;

            default:
                return 1;

        }

    };

    const estadoInicial =
        obtenerIdEstado(publicacion.estado);

    const [
        idEstado,
        setIdEstado,
    ] = useState<number>(estadoInicial);

    const guardar = async () => {

        await onGuardar(
            publicacion.id,
            idEstado
        );

    };

    return (

        <div
            className="
                grid
                grid-cols-12
                items-center
                border-b
                px-6
                py-4
                transition
                hover:bg-slate-50
            "
        >

            {/* Inmueble */}

            <div className="col-span-5">

                <p className="font-medium text-slate-800">

                    {publicacion.tituloInmueble}

                </p>

                <p className="text-sm text-slate-500">

                    {publicacion.codigoInmueble}

                </p>

            </div>

            {/* Estado actual */}

            <div className="col-span-3">

                <span
                    className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-sm
                        font-medium
                        text-slate-700
                    "
                >

                    {publicacion.estado}

                </span>

            </div>

            {/* Acción */}

            <div
                className="
                    col-span-4
                    flex
                    items-center
                    gap-3
                "
            >

                <EstadoPublicacionSelector
                    value={idEstado}
                    onChange={setIdEstado}
                />

                <button
                    type="button"
                    onClick={guardar}
                    disabled={
                        idEstado === estadoInicial
                    }
                    className="
                        rounded-lg
                        bg-[#386641]
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#2F5536]
                        disabled:cursor-not-allowed
                        disabled:bg-slate-300
                    "
                >

                    Guardar

                </button>

            </div>

        </div>

    );

};

export default EstadoPublicacionRow;