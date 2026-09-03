import type { ReactNode } from "react";

interface Column<T> {

    header: string;

    accessor: keyof T;

    render?: (
        value: T[keyof T],
        row: T
    ) => ReactNode;

}

interface Props<T extends object> {

    columns: Column<T>[];

    data: T[];

    emptyMessage?: string;

}

const ReporteTable = <T extends object>({

    columns,

    data,

    emptyMessage = "No existen registros.",

}: Props<T>) => {

    if (data.length === 0) {

        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-[#E8E5D9]
                    bg-white
                    p-10
                    text-center
                    shadow-sm
                "
            >

                <p className="text-gray-500">

                    {emptyMessage}

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
                border-[#E8E5D9]
                bg-white
                shadow-sm
            "
        >

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-[#F8F7F2]">

                        <tr>

                            {columns.map((column) => (

                                <th
                                    key={String(column.accessor)}
                                    className="
                                        whitespace-nowrap
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-[#2F3A2F]
                                    "
                                >

                                    {column.header}

                                </th>

                            ))}

                        </tr>

                    </thead>

                    <tbody>

                        {data.map((row, index) => (

                            <tr
                                key={index}
                                className="
                                    border-t
                                    border-[#ECE9DD]
                                    transition
                                    hover:bg-[#FAFCF7]
                                "
                            >

                                {columns.map((column) => {

                                    const value =
                                        (row as Record<string, unknown>)[
                                        column.accessor as string
                                        ] as T[keyof T];

                                    return (

                                        <td
                                            key={String(column.accessor)}
                                            className="
                                                whitespace-nowrap
                                                px-6
                                                py-4
                                                text-sm
                                                text-gray-700
                                            "
                                        >

                                            {column.render
                                                ? column.render(
                                                    value,
                                                    row
                                                )
                                                : String(value ?? "")}

                                        </td>

                                    );

                                })}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReporteTable;