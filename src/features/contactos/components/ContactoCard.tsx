import EstadoContactoBadge from "./EstadoContactoBadge";

import type { Contacto } from "../types/contacto";

interface Props {

    contacto: Contacto;

    onCambiarEstado: (
        id: number,
        atendido: boolean
    ) => void | Promise<void>;

    loading?: boolean;

}

const ContactoCard = ({
    contacto,
    onCambiarEstado,
    loading = false
}: Props) => {

    const fecha = new Date(contacto.fecha).toLocaleString(
        "es-BO",
        {
            dateStyle: "medium",
            timeStyle: "short"
        }
    );

    return (

        <div
            className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-md
            "
        >

            {/* Cabecera */}

            <div
                className="
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-gray-800
                    "
                >

                    {contacto.nombre}

                </h3>

                <EstadoContactoBadge
                    atendido={contacto.atendido}
                />

            </div>

            {/* Datos */}

            <div className="space-y-2 text-sm">

                <p>

                    <span className="font-semibold">

                        Teléfono:

                    </span>{" "}

                    {contacto.telefono}

                </p>

                <p>

                    <span className="font-semibold">

                        Correo:

                    </span>{" "}

                    {contacto.correo}

                </p>

                <p>

                    <span className="font-semibold">

                        Fecha:

                    </span>{" "}

                    {fecha}

                </p>

                <p>

                    <span className="font-semibold">

                        Inmueble:

                    </span>{" "}

                    {contacto.tituloInmueble ??
                        "Consulta general"}

                </p>

            </div>

            {/* Mensaje */}

            <div className="mt-5">

                <h4
                    className="
                        mb-2
                        font-semibold
                        text-gray-700
                    "
                >

                    Mensaje

                </h4>

                <div
                    className="
                        rounded-lg
                        bg-gray-50
                        p-4
                        text-sm
                        whitespace-pre-wrap
                        text-gray-700
                    "
                >

                    {contacto.mensaje}

                </div>

            </div>

            {/* Acciones */}

            <div
                className="
                    mt-6
                    flex
                    justify-end
                "
            >

                <button

                    type="button"

                    disabled={loading}

                    onClick={() =>
                        onCambiarEstado(
                            contacto.id,
                            !contacto.atendido
                        )
                    }

                    className={`
                        rounded-lg
                        px-5
                        py-2
                        font-medium
                        text-white
                        transition
                        disabled:cursor-not-allowed
                        disabled:opacity-50

                        ${
                            contacto.atendido
                                ? "bg-yellow-600 hover:bg-yellow-700"
                                : "bg-green-700 hover:bg-green-800"
                        }
                    `}
                >

                    {contacto.atendido
                        ? "Marcar como pendiente"
                        : "Marcar como atendido"}

                </button>

            </div>

        </div>

    );

};

export default ContactoCard;