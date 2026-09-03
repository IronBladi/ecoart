import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface ExportPdfOptions {

    compact?: boolean;

}

export const exportToPdf = (
    title: string,
    data: Record<
        string,
        string | number | boolean | null
    >[],
    options?: ExportPdfOptions
) => {

    if (data.length === 0) return;

    const compact = options?.compact ?? false;

    const doc = new jsPDF({

        orientation: "landscape",

        unit: "mm",

        format: compact
            ? "a3"
            : "a4",

    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    doc.text(title, 14, 15);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    doc.text(
        `Generado: ${new Date().toLocaleString()}`,
        14,
        22
    );

    const headers = [
        Object.keys(data[0])
    ];

    const rows = data.map(item =>
        Object.values(item).map(value =>
            value === null
                ? ""
                : String(value)
        )
    );

    autoTable(doc, {

        head: headers,

        body: rows,

        startY: 28,

        theme: "grid",

        styles: {

            font: "helvetica",

            fontSize: compact
                ? 6
                : 8,

            cellPadding: compact
                ? 1.5
                : 2,

            overflow: "linebreak",

            halign: "center",

            valign: "middle",

            lineWidth: 0.1,

        },

        headStyles: {

            fillColor: [106, 153, 78],

            textColor: 255,

            fontStyle: "bold",

            fontSize: compact
                ? 7
                : 8,

            halign: "center",

            valign: "middle",

        },

        bodyStyles: {

            textColor: 50,

        },

        alternateRowStyles: {

            fillColor: [245, 245, 245],

        },

        tableWidth: compact
            ? "auto"
            : "wrap",

        margin: {

            left: compact
                ? 6
                : 10,

            right: compact
                ? 6
                : 10,

        },

        columnStyles: compact
            ? Object.fromEntries(
                headers[0].map((_, index) => [
                    index,
                    {
                        cellWidth: "auto",
                    },
                ])
            )
            : {},

    });

    doc.save(`${title}.pdf`);

};