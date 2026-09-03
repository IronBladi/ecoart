import { useState } from "react";

import ContactoForm from "../components/ContactoForm";
import { useContactos } from "../hooks/useContactos";

import type { CrearContactoRequest } from "../types/contacto";

interface Props {

    /**
     * Opcional.
     * Si la página se utiliza desde el detalle de un inmueble,
     * se envía el id del inmueble.
     * Si se usa como página de contacto general,
     * será null.
     */
    idInmueble?: number | null;

}

const ContactoPage = ({
    idInmueble = null
}: Props) => {

    const {

        crear,

        loading

    } = useContactos();

    const [mensajeExito, setMensajeExito] =
        useState("");

    const [mensajeError, setMensajeError] =
        useState("");

    const handleSubmit = async (
        data: CrearContactoRequest
    ) => {

        try {

            setMensajeError("");

            setMensajeExito("");

            await crear(data);

            setMensajeExito(
                "Su consulta fue enviada correctamente. Nos pondremos en contacto con usted lo antes posible."
            );

        }
        catch (error: any) {

            setMensajeExito("");

            setMensajeError(

                error?.response?.data?.mensaje ??

                "No fue posible enviar la consulta."

            );

        }

    };

    return (

        <div
            className="
                mx-auto
                max-w-3xl
                px-4
                py-10
            "
        >

            <h1
                className="
                    mb-3
                    text-3xl
                    font-bold
                    text-[#386641]
                "
            >

                Contáctanos

            </h1>

            <p
                className="
                    mb-8
                    text-gray-600
                "
            >

                Si tienes alguna consulta acerca de nuestros
                inmuebles o de nuestros servicios, completa
                el siguiente formulario.

            </p>

            {mensajeExito && (

                <div
                    className="
                        mb-6
                        rounded-lg
                        border
                        border-green-300
                        bg-green-50
                        px-4
                        py-3
                        text-green-700
                    "
                >

                    {mensajeExito}

                </div>

            )}

            {mensajeError && (

                <div
                    className="
                        mb-6
                        rounded-lg
                        border
                        border-red-300
                        bg-red-50
                        px-4
                        py-3
                        text-red-700
                    "
                >

                    {mensajeError}

                </div>

            )}

            <ContactoForm

                idInmueble={idInmueble}

                loading={loading}

                onSubmit={handleSubmit}

            />

        </div>

    );

};

export default ContactoPage;