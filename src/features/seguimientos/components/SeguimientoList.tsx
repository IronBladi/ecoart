import SeguimientoCard from "./SeguimientoCard";

import type {
    Seguimiento
} from "../types";


interface Props {

    seguimientos: Seguimiento[];

    modoEdicion: boolean;

}



const SeguimientoList = ({
    seguimientos,
    modoEdicion,
}: Props) => {


    if (seguimientos.length === 0) {

        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-[#E8E5D9]
                    bg-white
                    p-8
                    text-center
                    text-gray-500
                "
            >

                No existen seguimientos registrados.

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

            {
                seguimientos.map(
                    (seguimiento) => (

                        <SeguimientoCard

                            key={
                                seguimiento.id
                            }

                            seguimiento={
                                seguimiento
                            }

                            modoEdicion={
                                modoEdicion
                            }

                        />

                    )
                )
            }

        </div>

    );

};


export default SeguimientoList;