import type { ReporteSeguimiento } from "../types";

interface Props {

    data: ReporteSeguimiento[];

}

const ReporteSeguimientosTable = ({
    data,
}: Props) => {

    if (data.length === 0) {

        return (

            <div className="rounded-3xl border border-[#E8E5D9] bg-white p-10 text-center shadow-sm">

                <p className="text-gray-500">

                    No existen seguimientos.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-3xl border border-[#E8E5D9] bg-white shadow-sm">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-[#F8F7F2]">

                        <tr>

                            <th className="px-5 py-4 text-left">

                                Inmueble

                            </th>

                            <th className="px-5 py-4 text-left">

                                Responsable

                            </th>

                            <th className="px-5 py-4 text-left">

                                Avance

                            </th>

                            <th className="px-5 py-4 text-left">

                                Fecha

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map(item => (

                            <tr
                                key={item.id}
                                className="border-t hover:bg-[#FAFCF7]"
                            >

                                <td className="px-5 py-4">

                                    {item.tituloInmueble}

                                </td>

                                <td className="px-5 py-4">

                                    {item.responsable}

                                </td>

                                <td className="px-5 py-4">

                                    {item.porcentajeAvance}%

                                </td>

                                <td className="px-5 py-4">

                                    {new Date(item.fecha).toLocaleDateString()}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReporteSeguimientosTable;