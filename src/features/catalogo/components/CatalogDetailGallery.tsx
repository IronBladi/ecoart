import { useMemo, useState } from "react";

import type {
    FotoInmueble,
} from "../../fotosInmueble/types";

import {
    getImageUrl,
} from "../../../services/api";


interface Props {

    fotos: FotoInmueble[];

}


const CatalogDetailGallery = ({
    fotos,
}: Props) => {


    const imagenes = useMemo(() => {

        return [...fotos].sort((a, b) => {

            if (a.principal && !b.principal)
                return -1;

            if (!a.principal && b.principal)
                return 1;

            return (
                (a.orden ?? 999) -
                (b.orden ?? 999)
            );

        });

    }, [fotos]);


    const [indiceActual, setIndiceActual] =
        useState(0);


    // ============================================
    // SIN FOTOGRAFÍAS
    // ============================================

    if (imagenes.length === 0) {

        return (

            <div
                className="
                    flex
                    h-[420px]
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gray-100
                    text-gray-400
                "
            >

                Sin fotografías

            </div>

        );

    }


    // ============================================
    // IMAGEN PRINCIPAL
    // ============================================

    const imagenPrincipal =
        getImageUrl(
            imagenes[indiceActual].url,
            "https://placehold.co/900x600?text=Sin+Imagen"
        );


    return (

        <div
            className="
                space-y-5
            "
        >

            {/* ========================================
                IMAGEN PRINCIPAL
            ======================================== */}

            <div
                className="
                    overflow-hidden
                    rounded-3xl
                    shadow-lg
                "
            >

                <img
                    src={imagenPrincipal}
                    alt="Inmueble"
                    className="
                        h-[500px]
                        w-full
                        object-cover
                    "
                />

            </div>


            {/* ========================================
                MINIATURAS
            ======================================== */}

            {imagenes.length > 1 && (

                <div
                    className="
                        grid
                        grid-cols-4
                        gap-3
                        md:grid-cols-6
                    "
                >

                    {imagenes.map((foto, index) => (

                        <button
                            key={foto.id}
                            type="button"
                            onClick={() =>
                                setIndiceActual(index)
                            }
                            className={`
                                overflow-hidden
                                rounded-xl
                                border-2
                                transition

                                ${
                                    indiceActual === index
                                        ? "border-[#386641]"
                                        : "border-transparent hover:border-[#6A994E]"
                                }
                            `}
                        >

                            <img
                                src={getImageUrl(
                                    foto.url,
                                    "https://placehold.co/300x200?text=Sin+Imagen"
                                )}
                                alt={`Foto ${index + 1}`}
                                className="
                                    h-24
                                    w-full
                                    object-cover
                                "
                            />

                        </button>

                    ))}

                </div>

            )}

        </div>

    );

};


export default CatalogDetailGallery;