import type { ReporteProductividad } from "../types";

interface Props {

    data: ReporteProductividad[];

}

const ReporteProductividadTable = ({
    data,
}: Props) => {

    if (data.length === 0) {

        return (

            <div className="rounded-3xl border border-[#E8E5D9] bg-white p-10 text-center shadow-sm">

                <p className="text-gray-500">

                    No existen registros.

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

                                Usuario

                            </th>

                            <th className="px-5 py-4 text-left">

                                Correo

                            </th>

                            <th className="px-5 py-4 text-center">

                                Inmuebles

                            </th>

                            <th className="px-5 py-4 text-center">

                                Publicaciones

                            </th>

                            <th className="px-5 py-4 text-center">

                                Seguimientos

                            </th>

                            <th className="px-5 py-4 text-center">

                                Activo

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map(usuario => (

                            <tr
                                key={usuario.idUsuario}
                                className="border-t hover:bg-[#FAFCF7]"
                            >

                                <td className="px-5 py-4">

                                    {usuario.nombreUsuario}

                                </td>

                                <td className="px-5 py-4">

                                    {usuario.correo}

                                </td>

                                <td className="px-5 py-4 text-center">

                                    {usuario.cantidadInmuebles}

                                </td>

                                <td className="px-5 py-4 text-center">

                                    {usuario.cantidadPublicaciones}

                                </td>

                                <td className="px-5 py-4 text-center">

                                    {usuario.cantidadSeguimientos}

                                </td>

                                <td className="px-5 py-4 text-center">

                                    {usuario.activo ? "Sí" : "No"}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReporteProductividadTable;