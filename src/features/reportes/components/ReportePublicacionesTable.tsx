import type { ReportePublicacion } from "../types";

interface Props {

    data: ReportePublicacion[];

}

const ReportePublicacionesTable = ({
    data,
}: Props) => {

    if (data.length === 0) {

        return (

            <div className="rounded-3xl border border-[#E8E5D9] bg-white p-10 text-center shadow-sm">

                <p className="text-gray-500">

                    No existen publicaciones.

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

                            <th className="px-5 py-4 text-left">Inmueble</th>

                            <th className="px-5 py-4 text-left">Tipo</th>

                            <th className="px-5 py-4 text-left">Estado</th>

                            <th className="px-5 py-4 text-left">Fecha</th>

                            <th className="px-5 py-4 text-left">Activo</th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map(pub => (

                            <tr
                                key={pub.id}
                                className="border-t hover:bg-[#FAFCF7]"
                            >

                                <td className="px-5 py-4">

                                    {pub.tituloInmueble}

                                </td>

                                <td className="px-5 py-4">

                                    {pub.tipoPublicacion}

                                </td>

                                <td className="px-5 py-4">

                                    {pub.estado}

                                </td>

                                <td className="px-5 py-4">

                                    {pub.fechaPublicacion
                                        ? new Date(pub.fechaPublicacion).toLocaleDateString()
                                        : "-"}

                                </td>

                                <td className="px-5 py-4">

                                    {pub.activo ? "Sí" : "No"}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReportePublicacionesTable;