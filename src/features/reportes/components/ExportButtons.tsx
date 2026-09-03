import {
    FiFileText,
    FiFile,
} from "react-icons/fi";

interface Props {

    onExportPdf: () => void;

    onExportExcel: () => void;

    disabled?: boolean;

}

const ExportButtons = ({
    onExportPdf,
    onExportExcel,
    disabled = false,
}: Props) => {

    return (

        <div className="flex flex-wrap gap-4">

            <button
                type="button"
                onClick={onExportPdf}
                disabled={disabled}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#BC4749]
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#A63C3E]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >

                <FiFileText size={18} />

                Exportar PDF

            </button>

            <button
                type="button"
                onClick={onExportExcel}
                disabled={disabled}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#6A994E]
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#5A8742]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >

                <FiFile size={18} />

                Exportar Excel

            </button>

        </div>

    );

};

export default ExportButtons;