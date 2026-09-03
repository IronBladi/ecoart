import { useEffect, useState } from "react";

import ContactoList from "../components/ContactoList";
import { useContactos } from "../hooks/useContactos";

const ContactosAdminPage = () => {

    const {

        contactos,

        loading,

        buscar,

        cambiarEstado

    } = useContactos();

    const [nombre, setNombre] = useState("");

    const [correo, setCorreo] = useState("");

    const [atendido, setAtendido] = useState("");

    useEffect(() => {

        buscar({});

    }, []);

    const buscarContactos = async () => {

        await buscar({

            nombre: nombre || undefined,

            correo: correo || undefined,

            atendido:
                atendido === ""
                    ? undefined
                    : atendido === "true"

        });

    };

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    Solicitudes de contacto

                </h1>

                <p className="mt-2 text-gray-600">

                    Administre las consultas realizadas desde el
                    sitio web.

                </p>

            </div>

            {/* Filtros */}

            <div
                className="
                    rounded-xl
                    bg-white
                    p-6
                    shadow
                "
            >

                <div
                    className="
                        grid
                        gap-4
                        md:grid-cols-4
                    "
                >

                    <input

                        type="text"

                        placeholder="Nombre"

                        value={nombre}

                        onChange={(e) =>
                            setNombre(e.target.value)
                        }

                        className="
                            rounded-lg
                            border
                            border-gray-300
                            px-4
                            py-2
                        "

                    />

                    <input

                        type="text"

                        placeholder="Correo"

                        value={correo}

                        onChange={(e) =>
                            setCorreo(e.target.value)
                        }

                        className="
                            rounded-lg
                            border
                            border-gray-300
                            px-4
                            py-2
                        "

                    />

                    <select

                        value={atendido}

                        onChange={(e) =>
                            setAtendido(e.target.value)
                        }

                        className="
                            rounded-lg
                            border
                            border-gray-300
                            px-4
                            py-2
                        "

                    >

                        <option value="">

                            Todos

                        </option>

                        <option value="false">

                            Pendientes

                        </option>

                        <option value="true">

                            Atendidos

                        </option>

                    </select>

                    <button

                        onClick={buscarContactos}

                        className="
                            rounded-lg
                            bg-[#386641]
                            px-4
                            py-2
                            font-medium
                            text-white
                            transition
                            hover:bg-[#2F5233]
                        "

                    >

                        Buscar

                    </button>

                </div>

            </div>

            {/* Lista */}

            <ContactoList

                contactos={contactos}

                loading={loading}

                onCambiarEstado={cambiarEstado}

            />

        </div>

    );

};

export default ContactosAdminPage;