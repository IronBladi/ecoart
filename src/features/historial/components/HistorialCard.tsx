import type {
    Historial,
} from "../types";


interface Props {

    historial: Historial;

    onClick?: () => void;

}


const HistorialCard = ({
    historial,
    onClick,
}: Props) => {


    return (

        <div
            onClick={onClick}
            className="
                cursor-pointer
                rounded-3xl
                border
                bg-white
                p-5
                shadow-sm
                hover:bg-[#FAFCF7]
            "
        >

            <h3 className="font-bold text-[#2F3A2F]">

                {historial.accion}

            </h3>


            <p className="mt-2 text-sm text-gray-600">

                Usuario:
                {" "}
                {historial.nombreUsuario ?? "-"}

            </p>


            <p className="text-sm text-gray-600">

                Módulo:
                {" "}
                {historial.modulo ?? "-"}

            </p>


            <p className="mt-3 text-xs text-gray-500">

                {
                    new Date(
                        historial.fecha
                    ).toLocaleString()
                }

            </p>


        </div>

    );

};


export default HistorialCard;