import {
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    useForm,
} from "react-hook-form";

import {
    yupResolver,
} from "@hookform/resolvers/yup";

import {
    loginSchema,
} from "../validation/login.schema";

import type {
    LoginRequest,
} from "../types";

import {
    useAuth,
} from "../hooks/useAuth";

import axios from "axios";


const LoginForm = () => {

    const {
        login,
    } = useAuth();

    const navigate = useNavigate();


    const [
        errorLogin,
        setErrorLogin,
    ] = useState<string | null>(null);


    const {

        register,

        handleSubmit,

        formState: {
            errors,
            isSubmitting,
        },

    } = useForm<LoginRequest>({

        resolver: yupResolver(loginSchema),

        defaultValues: {

            correo: "",

            password: "",

        },

    });


    const onSubmit = async (
        data: LoginRequest
    ) => {

        setErrorLogin(null);

        try {

            const usuario = await login(
                data.correo,
                data.password
            );


            switch (usuario.idRol) {

                case 1:

                    navigate(
                        "/gerente/dashboard"
                    );

                    break;


                case 2:

                    navigate(
                        "/promotor/dashboard"
                    );

                    break;


                default:

                    navigate("/");

                    break;

            }

        }
        catch (error) {

            console.error(
                "Error al iniciar sesión:",
                error
            );


            if (axios.isAxiosError(error)) {

                const mensaje =
                    error.response?.data?.mensaje;


                if (mensaje) {

                    setErrorLogin(
                        mensaje
                    );

                }
                else {

                    setErrorLogin(
                        "No fue posible iniciar sesión. Verifique sus credenciales."
                    );

                }

            }
            else {

                setErrorLogin(
                    "Ocurrió un error al iniciar sesión. Intente nuevamente."
                );

            }

        }

    };


    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >

            {/* =========================
                MENSAJE DE ERROR
            ========================== */}

            {
                errorLogin && (

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

                        {errorLogin}

                    </div>

                )
            }


            {/* =========================
                CORREO
            ========================== */}

            <div>

                <label
                    className="
                        mb-2
                        block
                        font-medium
                    "
                >

                    Correo

                </label>


                <input
                    type="email"
                    {...register("correo")}
                    onChange={() => {

                        if (errorLogin) {
                            setErrorLogin(null);
                        }

                    }}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-2
                        focus:border-emerald-500
                        focus:outline-none
                    "
                />


                <p
                    className="
                        mt-1
                        text-sm
                        text-red-500
                    "
                >

                    {errors.correo?.message}

                </p>

            </div>


            {/* =========================
                CONTRASEÑA
            ========================== */}

            <div>

                <label
                    className="
                        mb-2
                        block
                        font-medium
                    "
                >

                    Contraseña

                </label>


                <input
                    type="password"
                    {...register("password")}
                    onChange={() => {

                        if (errorLogin) {
                            setErrorLogin(null);
                        }

                    }}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-gray-300
                        px-4
                        py-2
                        focus:border-emerald-500
                        focus:outline-none
                    "
                />


                <p
                    className="
                        mt-1
                        text-sm
                        text-red-500
                    "
                >

                    {errors.password?.message}

                </p>

            </div>


            {/* =========================
                BOTÓN
            ========================== */}

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
                    disabled:opacity-60
                "
            >

                {
                    isSubmitting
                        ? "Ingresando..."
                        : "Iniciar sesión"
                }

            </button>


        </form>

    );

};


export default LoginForm;