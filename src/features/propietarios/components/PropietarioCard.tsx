import { useNavigate } from "react-router-dom";

import {
    FiUser,
    FiPhone,
    FiMail,
    FiEdit3,
    FiCreditCard,
} from "react-icons/fi";

import type { Propietario } from "../types";

interface Props {

    propietario: Propietario;

    modoEdicion: boolean;

}

const PropietarioCard = ({
    propietario,
    modoEdicion,
}: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {

        if (!modoEdicion) return;

        navigate(
            `/propietarios/editar/${propietario.id}`
        );

    };

    return (

        <div
            onClick={handleClick}
            className={`
                group
                rounded-3xl
                border
                border-[#E8E5D9]
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                ${
                    modoEdicion
                        ? "cursor-pointer hover:-translate-y-1 hover:border-[#6A994E] hover:bg-[#FAFCF7] hover:shadow-xl"
                        : "hover:-translate-y-1 hover:shadow-lg"
                }
            `}
        >

            {/* Encabezado */}

            <div className="flex items-start justify-between">

                <div>

                    <div
                        className="
                            mb-3
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#386641]/10
                        "
                    >

                        <FiUser
                            size={24}
                            className="text-[#386641]"
                        />

                    </div>

                    <h2 className="text-xl font-bold text-[#2F3A2F]">

                        {propietario.nombre} {propietario.apellido}

                    </h2>

                </div>

                <span
                    className="
                        rounded-full
                        bg-[#A7C957]/20
                        px-4
                        py-1
                        text-xs
                        font-semibold
                        tracking-wide
                        text-[#386641]
                    "
                >
                    CI: {propietario.ci}
                </span>

            </div>

            {/* Información */}

            <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-gray-600">

                    <FiPhone className="text-[#6A994E]" />

                    <span>

                        {propietario.telefono || "Sin teléfono"}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-gray-600">

                    <FiMail className="text-[#6A994E]" />

                    <span>

                        {propietario.correo || "Sin correo"}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-gray-600">

                    <FiCreditCard className="text-[#BC4749]" />

                    <span>

                        {propietario.ci}

                    </span>

                </div>

            </div>

            {/* Dirección */}

            <div className="mt-6 rounded-xl bg-[#F8F7F2] p-4">

                <p className="text-sm text-gray-500">

                    Dirección

                </p>

                <p className="mt-1 text-gray-700">

                    {propietario.direccion || "Sin dirección registrada"}

                </p>

            </div>

            {/* Footer */}

            <div className="mt-8 flex items-center justify-between border-t border-[#ECE9DD] pt-5">

                <span className="text-xs text-gray-500">

                    Registrado el{" "}
                    {new Date(
                        propietario.fechaCreacion
                    ).toLocaleDateString()}

                </span>

                {modoEdicion && (

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-[#386641]
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            transition
                            group-hover:bg-[#6A994E]
                        "
                    >

                        <FiEdit3 size={16} />

                        Editar

                    </div>

                )}

            </div>

        </div>

    );

};

export default PropietarioCard;