import type { ReporteInmueble } from "../types";

interface Props {

    data: ReporteInmueble[];

}

const ReporteInmueblesTable = ({
    data,
}: Props) => {

    if (data.length === 0) {

        return (

            <div className="rounded-3xl border border-[#E8E5D9] bg-white p-10 text-center shadow-sm">

                <p className="text-gray-500">

                    No existen inmuebles para mostrar.

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

                            <th className="px-5 py-4 text-left">Código</th>

                            <th className="px-5 py-4 text-left">Título</th>

                            <th className="px-5 py-4 text-left">Propietario</th>

                            <th className="px-5 py-4 text-left">Tipo</th>

                            <th className="px-5 py-4 text-left">Precio</th>

                            <th className="px-5 py-4 text-left">Estado</th>

                            <th className="px-5 py-4 text-left">Activo</th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map(inmueble => (

                            <tr
                                key={inmueble.id}
                                className="border-t hover:bg-[#FAFCF7]"
                            >

                                <td className="px-5 py-4">{inmueble.codigo}</td>

                                <td className="px-5 py-4">{inmueble.titulo}</td>

                                <td className="px-5 py-4">{inmueble.propietario}</td>

                                <td className="px-5 py-4">{inmueble.tipo}</td>

                                <td className="px-5 py-4">

                                    {inmueble.moneda} {inmueble.precio.toLocaleString()}

                                </td>

                                <td className="px-5 py-4">{inmueble.estado}</td>

                                <td className="px-5 py-4">

                                    {inmueble.activo ? "Sí" : "No"}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReporteInmueblesTable;