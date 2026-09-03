import type { Plantilla } from "../../plantillas/types";

interface Props {

    plantilla?: Plantilla;

}

const VistaPreviaPlantilla = ({
    plantilla,
}: Props) => {

    if (!plantilla) {

        return null;

    }

    return (

        <div
            className="
                rounded-xl
                border
                border-green-300
                bg-green-50
                p-5
            "
        >

            <h3
                className="
                    mb-3
                    text-lg
                    font-bold
                    text-green-800
                "
            >

                Vista previa de la plantilla

            </h3>

            <div
                className="
                    rounded-lg
                    border
                    bg-white
                    p-4
                    whitespace-pre-wrap
                    text-gray-700
                "
            >

                {plantilla.contenido}

            </div>

            <div
                className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    text-sm
                    text-gray-500
                "
            >

                <span>

                    <strong>Plantilla:</strong>{" "}
                    {plantilla.nombre}

                </span>

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        font-semibold
                        ${
                            plantilla.activa
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                        }
                    `}
                >

                    {plantilla.activa
                        ? "Activa"
                        : "Inactiva"}

                </span>

            </div>

        </div>

    );

};

export default VistaPreviaPlantilla;