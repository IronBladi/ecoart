import {
    useEffect,
    useState,
} from "react";

import {
    useForm,
} from "react-hook-form";

import type {
    Resolver,
} from "react-hook-form";

import {
    yupResolver,
} from "@hookform/resolvers/yup";

import {
    FiHome,
    FiMapPin,
    FiDollarSign,
} from "react-icons/fi";

import {
    inmuebleSchema,
} from "../validation/inmueble.schema";

import useCatalogos from "../hooks/useCatalogos";

import {
    usePropietarios,
} from "../../propietarios";

import UbicacionMapa from "../components/UbicacionMapa";

import {
    ubicacionService,
} from "../services";

import type {
    CrearInmuebleRequest,
} from "../types";

import type {
    LatLngLiteral,
} from "leaflet";


interface Props {

    onSubmit: (
        data: CrearInmuebleRequest
    ) => Promise<void>;

    defaultValues?: CrearInmuebleRequest;

}


type ModoUbicacion =
    | "manual"
    | "mapa";


const InmuebleForm = ({
    onSubmit,
    defaultValues,
}: Props) => {

    // ==========================================
    // ESTADO DE UBICACIÓN
    // ==========================================

    const [
        modoUbicacion,
        setModoUbicacion,
    ] = useState<ModoUbicacion>("manual");

    const [
        cargandoUbicacion,
        setCargandoUbicacion,
    ] = useState(false);

    const [
        errorUbicacion,
        setErrorUbicacion,
    ] = useState<string | null>(null);


    // ==========================================
    // FORMULARIO
    // ==========================================

    const {

        register,

        handleSubmit,

        reset,

        setValue,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm<CrearInmuebleRequest>({

        resolver:
            yupResolver(
                inmuebleSchema
            ) as Resolver<CrearInmuebleRequest>,

        defaultValues: {

            titulo: "",

            descripcion: "",

            idPropietario: undefined,

            idTipo: undefined,

            idEstado: undefined,

            departamento: "",

            ciudad: "",

            zona: "",

            direccion: "",

            referencia: "",

            latitud: undefined,

            longitud: undefined,

            precio: undefined,

            moneda: "BOB",

        },

    });


    // ==========================================
    // VALORES PARA EDICIÓN
    // ==========================================

    useEffect(() => {

        if (defaultValues) {

            reset(defaultValues);

        }

    }, [defaultValues, reset]);


    // ==========================================
    // SELECCIÓN DESDE EL MAPA
    // ==========================================

    const manejarSeleccionUbicacion = async (
        ubicacion: LatLngLiteral
    ) => {

        setCargandoUbicacion(true);

        setErrorUbicacion(null);

        try {

            const resultado =
                await ubicacionService.obtenerDireccion(
                    ubicacion.lat,
                    ubicacion.lng
                );

            // Coordenadas seleccionadas
            setValue(
                "latitud",
                resultado.latitud,
                {
                    shouldValidate: true,
                    shouldDirty: true,
                }
            );

            setValue(
                "longitud",
                resultado.longitud,
                {
                    shouldValidate: true,
                    shouldDirty: true,
                }
            );

            // Información obtenida por geocodificación
            if (resultado.departamento) {

                setValue(
                    "departamento",
                    resultado.departamento,
                    {
                        shouldValidate: true,
                        shouldDirty: true,
                    }
                );

            }

            if (resultado.ciudad) {

                setValue(
                    "ciudad",
                    resultado.ciudad,
                    {
                        shouldValidate: true,
                        shouldDirty: true,
                    }
                );

            }

            if (resultado.zona) {

                setValue(
                    "zona",
                    resultado.zona,
                    {
                        shouldDirty: true,
                    }
                );

            }

            if (resultado.direccion) {

                setValue(
                    "direccion",
                    resultado.direccion,
                    {
                        shouldValidate: true,
                        shouldDirty: true,
                    }
                );

            }

        }
        catch (error) {

            const mensaje =
                error instanceof Error
                    ? error.message
                    : "No se pudo obtener la información de la ubicación.";

            setErrorUbicacion(mensaje);

        }
        finally {

            setCargandoUbicacion(false);

        }

    };


    // ==========================================
    // CATÁLOGOS
    // ==========================================

    const {

        tipos,

        estados,

        loading,

        error,

    } = useCatalogos();


    const {

        propietarios,

        loading: loadingPropietarios,

        error: errorPropietarios,

    } = usePropietarios();


    // ==========================================
    // ESTILOS
    // ==========================================

    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition-all focus:border-[#6A994E] focus:ring-2 focus:ring-[#A7C957]/40";

    const labelClass =
        "text-sm font-semibold uppercase tracking-wider text-[#386641]";

    const errorClass =
        "mt-1 text-sm text-[#BC4749]";

    const sectionTitle =
        "mb-6 flex items-center gap-3 text-2xl font-bold text-[#386641]";


    if (loading || loadingPropietarios) {

        return (

            <p className="text-center">

                Cargando información...

            </p>

        );

    }


    if (error || errorPropietarios) {

        return (

            <p className="text-center text-red-500">

                {error ?? errorPropietarios}

            </p>

        );

    }


    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >

            {/* ============================================
                INFORMACIÓN GENERAL
            ============================================= */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiHome />

                    Información general

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* TÍTULO */}

                    <div>

                        <label className={labelClass}>

                            Título

                        </label>

                        <input
                            {...register("titulo")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.titulo?.message}
                        </p>

                    </div>


                    {/* PROPIETARIO */}

                    <div>

                        <label className={labelClass}>

                            Propietario

                        </label>

                        <select
                            {...register("idPropietario", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        >

                            <option value="">
                                Seleccione un propietario
                            </option>

                            {propietarios.map((propietario) => (

                                <option
                                    key={propietario.id}
                                    value={propietario.id}
                                >

                                    {propietario.nombre}{" "}
                                    {propietario.apellido}

                                </option>

                            ))}

                        </select>

                        <p className={errorClass}>
                            {errors.idPropietario?.message}
                        </p>

                    </div>


                    {/* TIPO */}

                    <div>

                        <label className={labelClass}>
                            Tipo de inmueble
                        </label>

                        <select
                            {...register("idTipo", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        >

                            <option value="">
                                Seleccione...
                            </option>

                            {tipos.map((tipo) => (

                                <option
                                    key={tipo.id}
                                    value={tipo.id}
                                >

                                    {tipo.nombre}

                                </option>

                            ))}

                        </select>

                        <p className={errorClass}>
                            {errors.idTipo?.message}
                        </p>

                    </div>


                    {/* ESTADO */}

                    <div>

                        <label className={labelClass}>
                            Estado
                        </label>

                        <select
                            {...register("idEstado", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        >

                            <option value="">
                                Seleccione...
                            </option>

                            {estados.map((estado) => (

                                <option
                                    key={estado.id}
                                    value={estado.id}
                                >

                                    {estado.nombre}

                                </option>

                            ))}

                        </select>

                        <p className={errorClass}>
                            {errors.idEstado?.message}
                        </p>

                    </div>

                </div>


                {/* DESCRIPCIÓN */}

                <div className="mt-6">

                    <label className={labelClass}>
                        Descripción
                    </label>

                    <textarea
                        rows={5}
                        {...register("descripcion")}
                        className={`${inputClass} resize-none`}
                    />

                    <p className={errorClass}>
                        {errors.descripcion?.message}
                    </p>

                </div>

            </section>


            {/* ============================================
                UBICACIÓN
            ============================================= */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiMapPin />

                    Ubicación

                </h2>


                {/* ==========================================
                    MÉTODO DE SELECCIÓN
                =========================================== */}

                <div className="mb-6">

                    <p className={labelClass}>
                        Método de ingreso
                    </p>

                    <div className="mt-3 flex flex-wrap gap-6">

                        <label className="flex cursor-pointer items-center gap-2 text-gray-700">

                            <input
                                type="radio"
                                name="modoUbicacion"
                                value="manual"
                                checked={
                                    modoUbicacion === "manual"
                                }
                                onChange={() =>
                                    setModoUbicacion("manual")
                                }
                            />

                            Ingresar manualmente

                        </label>


                        <label className="flex cursor-pointer items-center gap-2 text-gray-700">

                            <input
                                type="radio"
                                name="modoUbicacion"
                                value="mapa"
                                checked={
                                    modoUbicacion === "mapa"
                                }
                                onChange={() =>
                                    setModoUbicacion("mapa")
                                }
                            />

                            Seleccionar en el mapa

                        </label>

                    </div>

                </div>


                {/* ==========================================
                    MAPA OPCIONAL
                =========================================== */}

                {modoUbicacion === "mapa" && (

                    <div className="mb-8">

                        <p className="mb-3 text-sm text-gray-600">

                            Haz clic sobre el mapa para seleccionar
                            la ubicación del inmueble. Los datos de
                            ubicación se completarán automáticamente
                            cuando estén disponibles.

                        </p>

                        <UbicacionMapa
                            onLocationSelect={
                                manejarSeleccionUbicacion
                            }
                        />

                        {cargandoUbicacion && (

                            <p className="mt-3 text-sm text-gray-500">

                                Obteniendo información de la ubicación...

                            </p>

                        )}

                        {errorUbicacion && (

                            <p className="mt-3 text-sm text-[#BC4749]">

                                {errorUbicacion}

                            </p>

                        )}

                    </div>

                )}


                {/* ==========================================
                    DATOS DE UBICACIÓN
                =========================================== */}

                <div className="grid gap-6 md:grid-cols-2">

                    {/* DEPARTAMENTO */}

                    <div>

                        <label className={labelClass}>
                            Departamento
                        </label>

                        <input
                            {...register("departamento")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.departamento?.message}
                        </p>

                    </div>


                    {/* CIUDAD */}

                    <div>

                        <label className={labelClass}>
                            Ciudad
                        </label>

                        <input
                            {...register("ciudad")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.ciudad?.message}
                        </p>

                    </div>

                </div>


                <div className="mt-6 grid gap-6 md:grid-cols-2">

                    {/* ZONA */}

                    <div>

                        <label className={labelClass}>
                            Zona
                        </label>

                        <input
                            {...register("zona")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.zona?.message}
                        </p>

                    </div>


                    {/* DIRECCIÓN */}

                    <div>

                        <label className={labelClass}>
                            Dirección
                        </label>

                        <input
                            {...register("direccion")}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.direccion?.message}
                        </p>

                    </div>

                </div>


                {/* REFERENCIA */}

                <div className="mt-6">

                    <label className={labelClass}>
                        Referencia
                    </label>

                    <textarea
                        rows={3}
                        {...register("referencia")}
                        placeholder="Ej. Frente a la plaza principal"
                        className={`${inputClass} resize-none`}
                    />

                    <p className={errorClass}>
                        {errors.referencia?.message}
                    </p>

                </div>

            </section>


            {/* ============================================
                COORDENADAS
            ============================================= */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiMapPin />

                    Coordenadas

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* LATITUD */}

                    <div>

                        <label className={labelClass}>
                            Latitud
                        </label>

                        <input
                            type="number"
                            step="any"
                            {...register("latitud", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.latitud?.message}
                        </p>

                    </div>


                    {/* LONGITUD */}

                    <div>

                        <label className={labelClass}>
                            Longitud
                        </label>

                        <input
                            type="number"
                            step="any"
                            {...register("longitud", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.longitud?.message}
                        </p>

                    </div>

                </div>

            </section>


            {/* ============================================
                PRECIO
            ============================================= */}

            <section className="rounded-3xl bg-white p-8 shadow-md">

                <h2 className={sectionTitle}>

                    <FiDollarSign />

                    Información económica

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* PRECIO */}

                    <div>

                        <label className={labelClass}>
                            Precio
                        </label>

                        <input
                            type="number"
                            step="0.01"
                            {...register("precio", {
                                valueAsNumber: true,
                            })}
                            className={inputClass}
                        />

                        <p className={errorClass}>
                            {errors.precio?.message}
                        </p>

                    </div>


                    {/* MONEDA */}

                    <div>

                        <label className={labelClass}>
                            Moneda
                        </label>

                        <select
                            {...register("moneda")}
                            className={inputClass}
                        >

                            <option value="BOB">
                                Bolivianos (BOB)
                            </option>

                            <option value="USD">
                                Dólares estadounidenses (USD)
                            </option>

                        </select>

                        <p className={errorClass}>
                            {errors.moneda?.message}
                        </p>

                    </div>

                </div>

            </section>


            {/* ============================================
                BOTONES
            ============================================= */}

            <div className="flex justify-end gap-4 border-t border-[#ECE9DD] pt-8">

                <button
                    type="button"
                    onClick={() => reset()}
                    disabled={isSubmitting}
                    className="
                        rounded-xl
                        border
                        border-[#D9D5C8]
                        bg-white
                        px-6
                        py-3
                        font-semibold
                        text-gray-700
                        transition
                        hover:bg-gray-100
                        disabled:opacity-60
                    "
                >
                    Limpiar
                </button>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                        rounded-xl
                        bg-linear-to-r
                        from-[#386641]
                        to-[#6A994E]
                        px-8
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >

                    {isSubmitting
                        ? "Guardando..."
                        : defaultValues
                            ? "Actualizar inmueble"
                            : "Registrar inmueble"}

                </button>

            </div>

        </form>

    );

};


export default InmuebleForm;