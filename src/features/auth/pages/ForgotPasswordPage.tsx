import { useState } from "react";

import {
    FiHome,
    FiCheckCircle,
    FiArrowLeft,
    FiMail,
} from "react-icons/fi";

import {
    useNavigate,
} from "react-router-dom";

import {
    useForm,
    type Resolver,
} from "react-hook-form";

import {
    yupResolver,
} from "@hookform/resolvers/yup";

import axios from "axios";

import {
    forgotPasswordSchema,
} from "../validation/forgotPassword.schema";

import type {
    ForgotPasswordRequest,
} from "../types";

import {
    authService,
} from "../services/auth.service";


const ForgotPasswordPage = () => {

    const navigate = useNavigate();

    const [
        error,
        setError,
    ] = useState<string | null>(null);

    const [
        mensaje,
        setMensaje,
    ] = useState<string | null>(null);


    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ForgotPasswordRequest>({
        resolver: yupResolver(
            forgotPasswordSchema
        ) as Resolver<ForgotPasswordRequest>,

        defaultValues: {
            correo: "",
        },
    });


    const onSubmit = async (
        data: ForgotPasswordRequest
    ) => {

        setError(null);
        setMensaje(null);

        try {

            const response =
                await authService.forgotPassword(
                    data
                );

            setMensaje(
                response.mensaje
            );

        } catch (error) {

            console.error(
                "Error al solicitar recuperación:",
                error
            );

            if (axios.isAxiosError(error)) {

                const mensajeError =
                    error.response?.data?.mensaje;

                setError(
                    mensajeError ||
                    "No fue posible procesar la solicitud. Intente nuevamente."
                );

            } else {

                setError(
                    "Ocurrió un error al procesar la solicitud. Intente nuevamente."
                );

            }

        }

    };


    return (

        <div
            className="
                min-h-screen
                bg-[#F8F9FA]
                flex
                items-center
                justify-center
                px-4
                py-12
                lg:px-6
            "
        >

            <div
                className="
                    grid
                    w-full
                    max-w-7xl
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                    lg:grid-cols-2
                "
            >

                {/* =========================
                    PANEL IZQUIERDO
                ========================== */}

                <section
                    className="
                        relative
                        hidden
                        lg:flex
                        flex-col
                        justify-center
                        bg-[#0F382C]
                        p-12
                        text-white
                    "
                >

                    <div
                        className="
                            absolute
                            -right-20
                            -top-20
                            h-48
                            w-48
                            rounded-full
                            bg-[#10B981]/20
                        "
                        aria-hidden="true"
                    />

                    <div
                        className="
                            absolute
                            -bottom-24
                            -left-24
                            h-64
                            w-64
                            rounded-full
                            bg-[#A7C957]/25
                        "
                        aria-hidden="true"
                    />

                    <div
                        className="
                            relative
                            z-10
                            space-y-8
                        "
                    >

                        {/* LOGO */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#A7C957]
                                    text-[#0F382C]
                                    shadow-md
                                "
                            >

                                <FiHome size={28} />

                            </div>

                            <h1
                                className="
                                    text-5xl
                                    font-extrabold
                                    tracking-tight
                                "
                            >
                                EcoArt
                            </h1>

                        </div>


                        {/* DESCRIPCIÓN */}

                        <p
                            className="
                                max-w-md
                                text-lg
                                leading-8
                                text-[#F2E8CF]
                            "
                        >
                            Sistema web para la gestión
                            inmobiliaria, propietarios y
                            publicaciones.
                        </p>


                        {/* BENEFICIOS */}

                        <div
                            className="
                                space-y-4
                            "
                        >

                            {[
                                "Gestión centralizada de inmuebles",
                                "Administración de propietarios",
                                "Plataforma moderna y segura",
                            ].map(
                                (
                                    txt,
                                    i
                                ) => (

                                    <div
                                        key={i}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >

                                        <FiCheckCircle
                                            className="
                                                text-[#A7C957]
                                            "
                                            size={22}
                                        />

                                        <span>
                                            {txt}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>


                {/* =========================
                    PANEL DERECHO
                ========================== */}

                <section
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        bg-[#F8F9FA]
                        p-8
                        lg:p-12
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-md
                            space-y-6
                        "
                    >

                        {/* VOLVER */}

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/login")
                            }
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-lg
                                bg-[#10B981]/10
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-[#10B981]
                                transition-colors
                                duration-200
                                hover:bg-[#10B981]/20
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#10B981]
                            "
                        >

                            <FiArrowLeft size={16} />

                            Volver al inicio de sesión

                        </button>


                        {/* ENCABEZADO */}

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.35em]
                                    text-[#0F382C]
                                "
                            >
                                Recuperación
                            </p>

                            <h2
                                className="
                                    mt-2
                                    text-4xl
                                    font-extrabold
                                    text-[#0F382C]
                                "
                            >
                                Recuperar contraseña
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-gray-600
                                "
                            >
                                Ingrese el correo electrónico
                                asociado a su cuenta y le
                                enviaremos instrucciones para
                                restablecer su contraseña.
                            </p>

                        </div>


                        {/* =========================
                            MENSAJE DE ÉXITO
                        ========================== */}

                        {mensaje && (

                            <div
                                className="
                                    rounded-lg
                                    border
                                    border-emerald-200
                                    bg-emerald-50
                                    px-4
                                    py-4
                                    text-sm
                                    text-emerald-700
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >

                                    <FiCheckCircle
                                        className="
                                            mt-0.5
                                            shrink-0
                                        "
                                        size={20}
                                    />

                                    <div>

                                        <p
                                            className="
                                                font-semibold
                                            "
                                        >
                                            Solicitud procesada
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                leading-5
                                            "
                                        >
                                            {mensaje}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        )}


                        {/* =========================
                            MENSAJE DE ERROR
                        ========================== */}

                        {error && (

                            <div
                                className="
                                    rounded-lg
                                    border
                                    border-red-200
                                    bg-red-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-red-700
                                "
                            >

                                {error}

                            </div>

                        )}


                        {/* =========================
                            FORMULARIO
                        ========================== */}

                        {!mensaje && (

                            <form
                                onSubmit={
                                    handleSubmit(onSubmit)
                                }
                                className="
                                    space-y-5
                                "
                            >

                                {/* CORREO */}

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            font-medium
                                            text-gray-800
                                        "
                                    >
                                        Correo electrónico
                                    </label>

                                    <div
                                        className="
                                            relative
                                        "
                                    >

                                        <FiMail
                                            className="
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-gray-400
                                            "
                                            size={18}
                                        />

                                        <input
                                            type="email"
                                            {...register(
                                                "correo"
                                            )}
                                            className="
                                                w-full
                                                rounded-lg
                                                border
                                                border-gray-300
                                                bg-white
                                                py-3
                                                pl-11
                                                pr-4
                                                focus:border-emerald-500
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-emerald-500/20
                                            "
                                            placeholder="correo@ejemplo.com"
                                        />

                                    </div>


                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-red-500
                                        "
                                    >
                                        {
                                            errors
                                                .correo
                                                ?.message
                                        }
                                    </p>

                                </div>


                                {/* ENVIAR */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="
                                        w-full
                                        rounded-lg
                                        bg-emerald-600
                                        py-3
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-emerald-700
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                    "
                                >

                                    {isSubmitting
                                        ? "Enviando..."
                                        : "Enviar solicitud"
                                    }

                                </button>

                            </form>

                        )}


                        {/* =========================
                            VOLVER AL LOGIN
                        ========================== */}

                        {mensaje && (

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/login")
                                }
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    bg-white
                                    py-3
                                    font-semibold
                                    text-gray-700
                                    transition
                                    hover:bg-gray-50
                                "
                            >
                                Volver al inicio de sesión
                            </button>

                        )}

                    </div>

                </section>

            </div>

        </div>

    );

};


export default ForgotPasswordPage;