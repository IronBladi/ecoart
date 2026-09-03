import InmuebleCard from "./InmuebleCard";

import type {
    Inmueble,
} from "../types";


interface Props {

    inmuebles: Inmueble[];

    modoEdicion: boolean;

}


const InmuebleList = ({
    inmuebles,
    modoEdicion,
}: Props) => {

    return (

        <div
            className="
                grid
                gap-6
            "
        >

            {inmuebles.map((inmueble) => (

                <InmuebleCard
                    key={inmueble.id}
                    inmueble={inmueble}
                    modoEdicion={modoEdicion}
                />

            ))}

        </div>

    );

};


export default InmuebleList;