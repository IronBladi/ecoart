import type {
    Historial,
} from "../types";


interface Props {

    data: Historial[];

    onSelect: (
        historial: Historial
    ) => void;

}



const HistorialTable = ({
    data,
    onSelect,
}: Props) => {


    if(data.length === 0){

        return (

            <div
                className="
                    rounded-3xl
                    border
                    bg-white
                    p-10
                    text-center
                "
            >

                <p className="text-gray-500">
                    No existen registros de auditoría.
                </p>

            </div>

        );

    }



    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                bg-white
                shadow-sm
            "
        >

            <div className="overflow-x-auto">

                <table className="min-w-full">


                    <thead className="bg-[#F8F7F2]">

                        <tr>

                            <th className="px-5 py-4 text-left">
                                Usuario
                            </th>

                            <th className="px-5 py-4 text-left">
                                Módulo
                            </th>

                            <th className="px-5 py-4 text-left">
                                Acción
                            </th>

                            <th className="px-5 py-4 text-left">
                                Fecha
                            </th>

                            <th className="px-5 py-4 text-left">
                                Detalle
                            </th>

                        </tr>

                    </thead>



                    <tbody>


                        {data.map(item => (

                            <tr
                                key={item.id}
                                className="
                                    border-t
                                    hover:bg-[#FAFCF7]
                                "
                            >


                                <td className="px-5 py-4">

                                    {item.nombreUsuario ?? "-"}

                                </td>


                                <td className="px-5 py-4">

                                    {item.modulo ?? "-"}

                                </td>


                                <td className="px-5 py-4">

                                    {item.accion ?? "-"}

                                </td>


                                <td className="px-5 py-4">

                                    {
                                        new Date(
                                            item.fecha
                                        ).toLocaleString()
                                    }

                                </td>


                                <td className="px-5 py-4">

                                    <button
                                        onClick={() =>
                                            onSelect(item)
                                        }
                                        className="
                                            text-[#386641]
                                            font-semibold
                                        "
                                    >
                                        Ver
                                    </button>

                                </td>


                            </tr>

                        ))}


                    </tbody>


                </table>

            </div>

        </div>

    );

};


export default HistorialTable;