type Props = {
    value: number;

    onChange: (
        value: number
    ) => void;
};

const EstadoPublicacionSelector = ({
    value,
    onChange,
}: Props) => {

    return (

        <select
            value={value}
            onChange={(e) =>
                onChange(Number(e.target.value))
            }
            className="
                w-44
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                py-2
                text-sm
                text-slate-700
                outline-none
                transition
                focus:border-emerald-600
                focus:ring-2
                focus:ring-emerald-200
            "
        >

            <option value={1}>
                Publicada
            </option>

            <option value={2}>
                Archivada
            </option>

        </select>

    );

};

export default EstadoPublicacionSelector;