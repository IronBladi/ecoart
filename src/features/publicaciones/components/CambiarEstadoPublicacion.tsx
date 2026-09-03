import {
    useState,
    type FC,
} from "react";

import {
    FiSave,
} from "react-icons/fi";

import { usePublicaciones } from "../hooks/usePublicaciones";

interface Props {

    idPublicacion: number;

    estadoActual: string;

    onActualizado?: () => void;

}

const CambiarEstadoPublicacion: FC<Props> = ({
    idPublicacion,
    estadoActual,
    onActualizado,
}) => {

    const { cambiarEstado } =
        usePublicaciones();

    const obtenerIdEstado = (
        estado: string
    ) => {

        switch (estado.toLowerCase()) {

            case "publicada":
                return 1;

            case "archivada":
                return 2;

            default:
                return 1;

        }

    };

    const obtenerNombreEstado = (
        idEstado: number
    ) => {

        switch (idEstado) {

            case 1:
                return "Publicada";

            case 2:
                return "Archivada";

            default:
                return "Publicada";

        }

    };

    const [
        idEstado,
        setIdEstado,
    ] = useState(
        obtenerIdEstado(estadoActual)
    );

    const [
        guardando,
        setGuardando,
    ] = useState(false);

    const guardar = async () => {

        if (
            idEstado ===
            obtenerIdEstado(estadoActual)
        ) {

            return;

        }

        try {

            setGuardando(true);

            await cambiarEstado(
                idPublicacion,
                idEstado
            );

            onActualizado?.();

        }
        catch (error) {

            console.error(error);

            alert(
                "No fue posible cambiar el estado."
            );

        }
        finally {

            setGuardando(false);

        }

    };

    return (

        <div
            className="
                mt-4
                rounded-2xl
                border
                border-[#ECE9DD]
                bg-[#FAFAF7]
                p-4
            "
        >

            <label
                className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#386641]
                "
            >

                Estado de la publicación

            </label>

            <div
                className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "
            >

                <select
                    value={idEstado}
                    onChange={(e) =>
                        setIdEstado(
                            Number(e.target.value)
                        )
                    }
                    className="
                        flex-1
                        rounded-xl
                        border
                        border-[#D9D6CA]
                        bg-white
                        px-4
                        py-2
                        outline-none
                        focus:border-[#6A994E]
                    "
                >

                    <option value={1}>

                        {obtenerNombreEstado(1)}

                    </option>

                    <option value={2}>

                        {obtenerNombreEstado(2)}

                    </option>

                </select>

                <button
                    type="button"
                    disabled={
                        guardando ||
                        idEstado ===
                        obtenerIdEstado(
                            estadoActual
                        )
                    }
                    onClick={guardar}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#386641]
                        px-5
                        py-2
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#2F5536]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >

                    <FiSave />

                    {guardando
                        ? "Guardando..."
                        : "Guardar"}

                </button>

            </div>

        </div>

    );

};

export default CambiarEstadoPublicacion;