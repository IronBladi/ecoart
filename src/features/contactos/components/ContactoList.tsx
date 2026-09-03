import ContactoCard from "./ContactoCard";

import type { Contacto } from "../types/contacto";

interface Props {

    contactos: Contacto[];

    loading?: boolean;

    onCambiarEstado: (
        id: number,
        atendido: boolean
    ) => void | Promise<void>;

}

const ContactoList = ({
    contactos,
    loading = false,
    onCambiarEstado
}: Props) => {

    if (loading) {

        return (

            <div
                className="
                    py-12
                    text-center
                    text-gray-500
                "
            >

                Cargando solicitudes...

            </div>

        );

    }

    if (contactos.length === 0) {

        return (

            <div
                className="
                    rounded-xl
                    border
                    border-dashed
                    border-gray-300
                    bg-white
                    py-12
                    text-center
                    text-gray-500
                "
            >

                No existen solicitudes de contacto.

            </div>

        );

    }

    return (

        <div
            className="
                grid
                gap-6
            "
        >

            {contactos.map(contacto => (

                <ContactoCard

                    key={contacto.id}

                    contacto={contacto}

                    loading={loading}

                    onCambiarEstado={onCambiarEstado}

                />

            ))}

        </div>

    );

};

export default ContactoList;