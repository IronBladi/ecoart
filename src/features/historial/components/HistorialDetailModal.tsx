import type {
    Historial,
} from "../types";


interface Props {

    historial: Historial | null;

    onClose: () => void;

}



const HistorialDetailModal = ({
    historial,
    onClose,
}: Props) => {


    if(!historial)
        return null;



    return (

        <div
            className="
                fixed
                inset-0
                flex
                items-center
                justify-center
                bg-black/40
                p-5
            "
        >

            <div
                className="
                    w-full
                    max-w-xl
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-xl
                "
            >


                <h2
                    className="
                        text-2xl
                        font-bold
                        text-[#2F3A2F]
                    "
                >
                    Detalle de auditoría
                </h2>



                <div className="mt-6 space-y-3">


                    <p>
                        <strong>Usuario:</strong>
                        {" "}
                        {historial.nombreUsuario ?? "-"}
                    </p>


                    <p>
                        <strong>Correo:</strong>
                        {" "}
                        {historial.correoUsuario ?? "-"}
                    </p>


                    <p>
                        <strong>Módulo:</strong>
                        {" "}
                        {historial.modulo ?? "-"}
                    </p>


                    <p>
                        <strong>Acción:</strong>
                        {" "}
                        {historial.accion ?? "-"}
                    </p>


                    <p>
                        <strong>Descripción:</strong>
                        {" "}
                        {historial.descripcion ?? "-"}
                    </p>


                    <p>
                        <strong>IP:</strong>
                        {" "}
                        {historial.ip ?? "-"}
                    </p>


                    <p>
                        <strong>Navegador:</strong>
                        {" "}
                        {historial.navegador ?? "-"}
                    </p>


                    <p>
                        <strong>Fecha:</strong>
                        {" "}
                        {
                            new Date(
                                historial.fecha
                            ).toLocaleString()
                        }
                    </p>


                </div>



                <div className="mt-8 flex justify-end">


                    <button
                        onClick={onClose}
                        className="
                            rounded-xl
                            bg-[#386641]
                            px-5
                            py-2
                            text-white
                        "
                    >
                        Cerrar
                    </button>


                </div>


            </div>


        </div>

    );

};


export default HistorialDetailModal;