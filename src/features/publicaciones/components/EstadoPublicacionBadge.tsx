import type { FC } from "react";

interface Props {

    estado: string;

}

const EstadoPublicacionBadge: FC<Props> = ({
    estado,
}) => {

    const obtenerClases = () => {

        switch (estado.toLowerCase()) {

            case "publicada":

                return "bg-green-100 text-green-700 border-green-200";

            case "archivada":

                return "bg-yellow-100 text-yellow-700 border-yellow-200";

            default:

                return "bg-gray-100 text-gray-700 border-gray-200";

        }

    };

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-semibold
                ${obtenerClases()}
            `}
        >

            {estado}

        </span>

    );

};

export default EstadoPublicacionBadge;