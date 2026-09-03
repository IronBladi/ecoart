import PropietarioCard from "./PropietarioCard";

import type { Propietario } from "../types";

interface Props {

    propietarios: Propietario[];

    modoEdicion: boolean;

}

const PropietarioList = ({
    propietarios,
    modoEdicion,
}: Props) => {

    return (

        <div
            className="
                grid
                gap-6
            "
        >

            {propietarios.map((propietario) => (

                <PropietarioCard
                    key={propietario.id}
                    propietario={propietario}
                    modoEdicion={modoEdicion}
                />

            ))}

        </div>

    );

};

export default PropietarioList;