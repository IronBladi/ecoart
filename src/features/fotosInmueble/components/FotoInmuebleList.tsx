import FotoInmuebleCard from "./FotoInmuebleCard";

import type { FotoInmueble } from "../types";

interface Props {

    fotos: FotoInmueble[];

    onEliminar: (id: number) => void;

}

const FotoInmuebleList = ({
    fotos,
    onEliminar,
}: Props) => {

    if (fotos.length === 0) {

        return (

            <div
                className="
                    rounded-3xl
                    border-2
                    border-dashed
                    border-[#D9D5C8]
                    bg-[#F8F7F2]
                    px-8
                    py-16
                    text-center
                "
            >

                <h3
                    className="
                        text-xl
                        font-bold
                        text-[#386641]
                    "
                >

                    No existen fotografías

                </h3>

                <p className="mt-3 text-gray-500">

                    Este inmueble aún no tiene fotografías registradas.

                </p>

            </div>

        );

    }

    return (

        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                xl:grid-cols-3
            "
        >

            {fotos.map((foto) => (

                <FotoInmuebleCard
                    key={foto.id}
                    foto={foto}
                    onEliminar={onEliminar}
                />

            ))}

        </div>

    );

};

export default FotoInmuebleList;