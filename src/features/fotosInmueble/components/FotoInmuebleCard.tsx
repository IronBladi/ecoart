import {
    FiImage,
    FiStar,
    FiTrash2,
} from "react-icons/fi";

import type { FotoInmueble } from "../types";


interface Props {

    foto: FotoInmueble;

    onEliminar: (id: number) => void;

}


const FotoInmuebleCard = ({
    foto,
    onEliminar,
}: Props) => {


    const eliminar = () => {

        const confirmar = window.confirm(
            "¿Desea eliminar esta fotografía?"
        );

        if (!confirmar) return;

        onEliminar(foto.id);

    };


    return (

        <div
            className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            {/* Imagen */}

            <div className="relative h-64 bg-[#F8F7F2]">

                {foto.url ? (

                    <img
                        src={foto.url}
                        alt="Fotografía inmueble"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-300
                            group-hover:scale-105
                        "
                    />

                ) : (

                    <div
                        className="
                            flex
                            h-full
                            items-center
                            justify-center
                        "
                    >

                        <FiImage
                            size={70}
                            className="text-[#A7C957]"
                        />

                    </div>

                )}


                {/* Principal */}

                {foto.principal && (

                    <div
                        className="
                            absolute
                            left-4
                            top-4
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-[#386641]
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                        "
                    >

                        <FiStar size={15} />

                        Principal

                    </div>

                )}

            </div>


            {/* Información */}

            <div className="space-y-5 p-6">

                <div className="flex items-center justify-between">

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-[#6A994E]
                            "
                        >
                            Fotografía
                        </p>

                        <h3
                            className="
                                mt-1
                                text-lg
                                font-bold
                                text-[#386641]
                            "
                        >
                            Imagen #{foto.id}
                        </h3>

                    </div>


                    <span
                        className="
                            rounded-full
                            bg-[#F2E8CF]
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-[#386641]
                        "
                    >
                        Orden {foto.orden ?? "-"}
                    </span>

                </div>


                <button
                    type="button"
                    onClick={eliminar}
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#BC4749]
                        px-5
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#A33B3D]
                    "
                >

                    <FiTrash2 />

                    Eliminar fotografía

                </button>

            </div>

        </div>

    );

};


export default FotoInmuebleCard;