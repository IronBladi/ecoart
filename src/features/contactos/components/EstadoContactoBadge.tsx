interface Props {

    atendido: boolean;

}

const EstadoContactoBadge = ({
    atendido
}: Props) => {

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${atendido
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"}
            `}
        >

            {atendido
                ? "Atendido"
                : "Pendiente"}

        </span>

    );

};

export default EstadoContactoBadge;