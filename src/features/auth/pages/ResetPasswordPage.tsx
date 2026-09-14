import { useState } from "react";

import {
    useNavigate,
    useSearchParams,
} from "react-router-dom";

import {
    useForm,
    type Resolver,
} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {
    FiHome,
    FiLock,
    FiArrowLeft,
} from "react-icons/fi";

import axios from "axios";

import { resetPasswordSchema } from "../validation/resetPassword.schema";

import { authService } from "../services/auth.service";


type ResetPasswordFormData = {
    password: string;
    confirmPassword: string;
};


const ResetPasswordPage = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");


    const [errorMsg, setErrorMsg] =
        useState<string | null>(null);

    const [success, setSuccess] =
        useState<boolean>(false);

    const [successMsg, setSuccessMsg] =
        useState<string>("");


    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ResetPasswordFormData>({
        resolver: yupResolver(
            resetPasswordSchema
        ) as Resolver<ResetPasswordFormData>,

        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });


    const onSubmit = async (
        data: ResetPasswordFormData
    ) => {

        if (!token) {
            return;
        }

        setErrorMsg(null);

        try {

            const response =
                await authService.resetPassword({
                    token,
                    password: data.password,
                });

            setSuccess(true);

            setSuccessMsg(
                response.mensaje ||
                "Contraseña restablecida correctamente."
            );

        } catch (error) {

            if (axios.isAxiosError(error)) {

                const mensaje =
                    error.response?.data?.mensaje;

                if (mensaje) {

                    setErrorMsg(mensaje);

                } else {

                    setErrorMsg(
                        "No fue posible restablecer la contraseña. Intente nuevamente."
                    );
                }

            } else {

                setErrorMsg(
                    "Ocurrió un error de conexión. Intente nuevamente."
                );
            }
        }
    };


    /*
     * =====================================================
     * ESTADO: TOKEN AUSENTE
     * =====================================================
     */

    if (!token) {

        return (
            <div className="min-h-screen flex bg-[#F8F7F2]">

                {/* PANEL IZQUIERDO */}

                <div
                    className="
                        hidden
                        lg:flex
                        lg:w-1/2
                        bg-[#0F382C]
                        text-white
                        flex-col
                        justify-between
                        p-12
                    "
                >

                    <div>

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-xl
                                    bg-[#F8F7F2]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#0F382C]
                                    font-bold
                                    text-xl
                                "
                            >
                                E
                            </div>

                            <span
                                className="
                                    text-2xl
                                    font-semibold
                                    tracking-wide
                                "
                            >
                                EcoArt
                            </span>

                        </div>

                    </div>


                    <div>

                        <h1
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                mb-5
                            "
                        >
                            Gestión inmobiliaria
                            <br />
                            simple y eficiente.
                        </h1>

                        <p
                            className="
                                text-white/70
                                text-lg
                                max-w-md
                                leading-relaxed
                            "
                        >
                            Administre la información de sus
                            inmuebles de manera organizada,
                            segura y centralizada.
                        </p>

                    </div>


                    <div
                        className="
                            text-sm
                            text-white/50
                        "
                    >
                        © EcoArt
                    </div>

                </div>


                {/* PANEL DERECHO */}

                <div
                    className="
                        w-full
                        lg:w-1/2
                        flex
                        items-center
                        justify-center
                        p-6
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-md
                        "
                    >

                        <div
                            className="
                                bg-white
                                rounded-2xl
                                shadow-sm
                                border
                                border-[#E8E5D9]
                                p-8
                            "
                        >

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-full
                                    bg-red-50
                                    text-red-600
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                "
                            >
                                <FiLock size={24} />
                            </div>


                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#0F382C]
                                    mb-3
                                "
                            >
                                Enlace no válido
                            </h2>


                            <p
                                className="
                                    text-gray-600
                                    leading-relaxed
                                    mb-8
                                "
                            >
                                El enlace de recuperación de
                                contraseña no es válido o está
                                incompleto. Solicite un nuevo
                                enlace desde la pantalla de
                                inicio de sesión.
                            </p>


                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#386641]
                                    hover:bg-[#2F5637]
                                    text-white
                                    font-semibold
                                    py-3
                                    rounded-xl
                                    transition
                                "
                            >
                                <FiArrowLeft size={18} />

                                Ir a iniciar sesión

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        );
    }


    /*
     * =====================================================
     * ESTADO: CONTRASEÑA RESTABLECIDA
     * =====================================================
     */

    if (success) {

        return (
            <div className="min-h-screen flex bg-[#F8F7F2]">

                {/* PANEL IZQUIERDO */}

                <div
                    className="
                        hidden
                        lg:flex
                        lg:w-1/2
                        bg-[#0F382C]
                        text-white
                        flex-col
                        justify-between
                        p-12
                    "
                >

                    <div>

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-xl
                                    bg-[#F8F7F2]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#0F382C]
                                    font-bold
                                    text-xl
                                "
                            >
                                E
                            </div>

                            <span
                                className="
                                    text-2xl
                                    font-semibold
                                    tracking-wide
                                "
                            >
                                EcoArt
                            </span>

                        </div>

                    </div>


                    <div>

                        <h1
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                mb-5
                            "
                        >
                            Gestión inmobiliaria
                            <br />
                            simple y eficiente.
                        </h1>

                        <p
                            className="
                                text-white/70
                                text-lg
                                max-w-md
                                leading-relaxed
                            "
                        >
                            Administre la información de sus
                            inmuebles de manera organizada,
                            segura y centralizada.
                        </p>

                    </div>


                    <div
                        className="
                            text-sm
                            text-white/50
                        "
                    >
                        © EcoArt
                    </div>

                </div>


                {/* PANEL DERECHO */}

                <div
                    className="
                        w-full
                        lg:w-1/2
                        flex
                        items-center
                        justify-center
                        p-6
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-md
                        "
                    >

                        <div
                            className="
                                bg-white
                                rounded-2xl
                                shadow-sm
                                border
                                border-[#E8E5D9]
                                p-8
                            "
                        >

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-full
                                    bg-green-50
                                    text-[#386641]
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                "
                            >
                                <FiLock size={24} />
                            </div>


                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#0F382C]
                                    mb-3
                                "
                            >
                                ¡Contraseña restablecida!
                            </h2>


                            <p
                                className="
                                    text-gray-600
                                    leading-relaxed
                                    mb-2
                                "
                            >
                                {successMsg}
                            </p>


                            <p
                                className="
                                    text-gray-600
                                    leading-relaxed
                                    mb-8
                                "
                            >
                                Ya puede iniciar sesión con su
                                nueva contraseña.
                            </p>


                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#386641]
                                    hover:bg-[#2F5637]
                                    text-white
                                    font-semibold
                                    py-3
                                    rounded-xl
                                    transition
                                "
                            >
                                <FiHome size={18} />

                                Ir a iniciar sesión

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        );
    }


    /*
     * =====================================================
     * FORMULARIO PRINCIPAL
     * =====================================================
     */

    return (

        <div className="min-h-screen flex bg-[#F8F7F2]">

            {/* =================================================
                PANEL IZQUIERDO
            ================================================= */}

            <div
                className="
                    hidden
                    lg:flex
                    lg:w-1/2
                    bg-[#0F382C]
                    text-white
                    flex-col
                    justify-between
                    p-12
                "
            >

                <div>

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-10
                                h-10
                                rounded-xl
                                bg-[#F8F7F2]
                                flex
                                items-center
                                justify-center
                                text-[#0F382C]
                                font-bold
                                text-xl
                            "
                        >
                            E
                        </div>

                        <span
                            className="
                                text-2xl
                                font-semibold
                                tracking-wide
                            "
                        >
                            EcoArt
                        </span>

                    </div>

                </div>


                <div>

                    <h1
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            mb-5
                        "
                    >
                        Gestión inmobiliaria
                        <br />
                        simple y eficiente.
                    </h1>


                    <p
                        className="
                            text-white/70
                            text-lg
                            max-w-md
                            leading-relaxed
                        "
                    >
                        Administre la información de sus
                        inmuebles de manera organizada,
                        segura y centralizada.
                    </p>

                </div>


                <div
                    className="
                        text-sm
                        text-white/50
                    "
                >
                    © EcoArt
                </div>

            </div>


            {/* =================================================
                PANEL DERECHO
            ================================================= */}

            <div
                className="
                    w-full
                    lg:w-1/2
                    flex
                    items-center
                    justify-center
                    p-6
                "
            >

                <div
                    className="
                        w-full
                        max-w-md
                    "
                >

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            shadow-sm
                            border
                            border-[#E8E5D9]
                            p-8
                        "
                    >

                        {/* BOTÓN REGRESAR */}

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-gray-500
                                hover:text-[#386641]
                                transition
                                mb-8
                            "
                        >
                            <FiArrowLeft size={16} />

                            Volver al inicio de sesión

                        </button>


                        {/* ICONO */}

                        <div
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-[#EAF2EA]
                                text-[#386641]
                                flex
                                items-center
                                justify-center
                                mb-6
                            "
                        >
                            <FiLock size={24} />
                        </div>


                        {/* TÍTULO */}

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-[#0F382C]
                                mb-2
                            "
                        >
                            Restablecer contraseña
                        </h2>


                        <p
                            className="
                                text-gray-600
                                leading-relaxed
                                mb-8
                            "
                        >
                            Introduzca su nueva contraseña para
                            restablecer el acceso a su cuenta.
                        </p>


                        {/* ERROR GENERAL */}

                        {errorMsg && (

                            <div
                                className="
                                    mb-6
                                    rounded-xl
                                    border
                                    border-red-200
                                    bg-red-50
                                    px-4
                                    py-3
                                    text-sm
                                    text-red-700
                                "
                            >
                                {errorMsg}
                            </div>

                        )}


                        {/* FORMULARIO */}

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >

                            {/* NUEVA CONTRASEÑA */}

                            <div>

                                <label
                                    htmlFor="password"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                        mb-2
                                    "
                                >
                                    Nueva contraseña
                                </label>


                                <div className="relative">

                                    <FiLock
                                        className="
                                            absolute
                                            left-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                        size={18}
                                    />


                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Ingrese su nueva contraseña"
                                        {...register("password")}
                                        className={`
                                            w-full
                                            rounded-xl
                                            border
                                            ${errors.password
                                                ? "border-red-400"
                                                : "border-gray-300"
                                            }
                                            bg-white
                                            py-3
                                            pl-10
                                            pr-4
                                            text-gray-800
                                            outline-none
                                            transition
                                            focus:border-[#386641]
                                            focus:ring-2
                                            focus:ring-[#386641]/20
                                        `}
                                    />

                                </div>


                                {errors.password?.message && (

                                    <p
                                        className="
                                            mt-1.5
                                            text-sm
                                            text-red-600
                                        "
                                    >
                                        {errors.password.message}
                                    </p>

                                )}

                            </div>


                            {/* CONFIRMAR CONTRASEÑA */}

                            <div>

                                <label
                                    htmlFor="confirmPassword"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                        mb-2
                                    "
                                >
                                    Confirmar nueva contraseña
                                </label>


                                <div className="relative">

                                    <FiLock
                                        className="
                                            absolute
                                            left-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                        size={18}
                                    />


                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Repita su nueva contraseña"
                                        {...register("confirmPassword")}
                                        className={`
                                            w-full
                                            rounded-xl
                                            border
                                            ${errors.confirmPassword
                                                ? "border-red-400"
                                                : "border-gray-300"
                                            }
                                            bg-white
                                            py-3
                                            pl-10
                                            pr-4
                                            text-gray-800
                                            outline-none
                                            transition
                                            focus:border-[#386641]
                                            focus:ring-2
                                            focus:ring-[#386641]/20
                                        `}
                                    />

                                </div>


                                {errors.confirmPassword?.message && (

                                    <p
                                        className="
                                            mt-1.5
                                            text-sm
                                            text-red-600
                                        "
                                    >
                                        {errors.confirmPassword.message}
                                    </p>

                                )}

                            </div>


                            {/* BOTÓN */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#386641]
                                    hover:bg-[#2F5637]
                                    disabled:bg-gray-400
                                    disabled:cursor-not-allowed
                                    text-white
                                    font-semibold
                                    py-3
                                    rounded-xl
                                    transition
                                "
                            >

                                <FiLock size={18} />

                                {isSubmitting
                                    ? "Restableciendo contraseña..."
                                    : "Restablecer contraseña"
                                }

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};


export default ResetPasswordPage;