import PlantillaCard from "./PlantillaCard";

import type { Plantilla } from "../types";

interface Props {

    plantillas: Plantilla[];

    modoEdicion: boolean;

}

const PlantillaList = ({
    plantillas,
    modoEdicion,
}: Props) => {

    if (plantillas.length === 0) {

        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-dashed
                    border-[#D9D5C8]
                    bg-white
                    p-12
                    text-center
                    shadow-sm
                "
            >

                <h2 className="text-xl font-semibold text-[#386641]">

                    No existen plantillas registradas

                </h2>

                <p className="mt-3 text-gray-500">

                    Cuando registre una plantilla aparecerá en esta lista.

                </p>

            </div>

        );

    }

    return (

        <div
            className="
                grid
                gap-6
            "
        >

            {plantillas.map((plantilla) => (

                <PlantillaCard
                    key={plantilla.id}
                    plantilla={plantilla}
                    modoEdicion={modoEdicion}
                />

            ))}

        </div>

    );

};

export default PlantillaList;