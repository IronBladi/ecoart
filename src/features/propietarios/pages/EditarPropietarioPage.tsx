import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    FiArrowLeft,
    FiEdit,
    FiUser,
} from "react-icons/fi";

import PropietarioForm from "../components/PropietarioForm";

import { propietarioService } from "../services/propietarioService";

import type {
    ActualizarPropietarioRequest,
    CrearPropietarioRequest,
} from "../types";

const EditarPropietarioPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [propietario, setPropietario] =
        useState<CrearPropietarioRequest>();

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const cargar = async () => {

            try {

                if (!id) return;

                const data =
                    await propietarioService.obtenerPorId(
                        Number(id)
                    );

                setPropietario({

                    nombre: data.nombre,

                    apellido: data.apellido,

                    ci: data.ci,

                    telefono: data.telefono,

                    correo: data.correo,

                    direccion: data.direccion,

                });

            } catch (error) {

                console.error(
                    "Error cargando propietario",
                    error
                );

            } finally {

                setLoading(false);

            }

        };

        cargar();

    }, [id]);

    const actualizar = async (
        data: CrearPropietarioRequest
    ) => {

        if (!id) return;

        const request: ActualizarPropietarioRequest = {

            ...data,

        };

        await propietarioService.actualizar(
            Number(id),
            request
        );

        navigate("/propietarios");

    };

    if (loading) {

        return (

            <div className="flex h-96 items-center justify-center">

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            mb-4
                            h-12
                            w-12
                            animate-spin
                            rounded-full
                            border-4
                            border-[#A7C957]
                            border-t-[#386641]
                        "
                    />

                    <p className="font-medium text-[#386641]">

                        Cargando propietario...

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="mx-auto max-w-7xl px-8 py-8">

            {/* Encabezado */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <div className="mb-3 flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#386641]
                                text-white
                            "
                        >

                            <FiUser size={28} />

                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-widest text-[#6A994E]">

                                Gestión de propietarios

                            </p>

                            <h1 className="text-4xl font-bold text-[#386641]">

                                Editar propietario

                            </h1>

                        </div>

                    </div>

                    <p className="text-gray-500">

                        Actualice la información del propietario seleccionado.

                    </p>

                </div>

                <button
                    onClick={() => navigate("/propietarios")}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-[#D9D5C8]
                        bg-white
                        px-5
                        py-3
                        font-medium
                        text-gray-700
                        transition
                        hover:bg-gray-100
                    "
                >

                    <FiArrowLeft />

                    Volver

                </button>

            </div>

            {/* Tarjeta */}

            <div className="rounded-3xl bg-white shadow-xl">

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-t-3xl
                        border-b
                        border-[#ECE9DD]
                        bg-[#F8F7F2]
                        px-8
                        py-6
                    "
                >

                    <FiEdit
                        size={24}
                        className="text-[#386641]"
                    />

                    <h2 className="text-xl font-bold text-[#386641]">

                        Editar información

                    </h2>

                </div>

                <div className="p-8">

                    {propietario && (

                        <PropietarioForm
                            onSubmit={actualizar}
                            defaultValues={propietario}
                        />

                    )}

                </div>

            </div>

        </div>

    );

};

export default EditarPropietarioPage;