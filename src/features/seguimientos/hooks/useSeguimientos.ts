import {
    useEffect,
    useState
} from "react";


import {
    seguimientoService
} from "../services/seguimiento.service";


import type {
    Seguimiento,
    CrearSeguimientoRequest,
    ActualizarSeguimientoRequest,
} from "../types";


import type {
    Inmueble
} from "../../inmuebles/types";



export function useSeguimientos() {


    // =====================================
    // Lista de seguimientos del inmueble
    // seleccionado
    // =====================================

    const [
        seguimientos,
        setSeguimientos
    ] = useState<Seguimiento[]>([]);



    // =====================================
    // Inmuebles disponibles
    // =====================================

    const [
        inmuebles,
        setInmuebles
    ] = useState<Inmueble[]>([]);



    // =====================================
    // Inmueble actualmente seleccionado
    // =====================================

    const [
        inmuebleSeleccionado,
        setInmuebleSeleccionado
    ] = useState<Inmueble | null>(null);



    const [
        loading,
        setLoading
    ] = useState(true);



    const [
        error,
        setError
    ] = useState<string | null>(null);






    useEffect(() => {

        cargarInmuebles();

    }, []);






    // =====================================
    // Obtener inmuebles en construcción
    // =====================================

    async function cargarInmuebles() {


        try {


            setLoading(true);

            setError(null);



            const data =
                await seguimientoService
                    .obtenerInmueblesEnConstruccion();



            setInmuebles(data);



        } catch(error) {


            console.error(
                "Error cargando inmuebles en construcción:",
                error
            );


            setError(
                "No se pudieron cargar los inmuebles."
            );



        } finally {


            setLoading(false);


        }

    }








    // =====================================
    // Seleccionar inmueble
    // =====================================

    async function seleccionarInmueble(
        inmueble: Inmueble
    ) {


        try {


            setLoading(true);

            setError(null);



            setInmuebleSeleccionado(
                inmueble
            );



            const data =
                await seguimientoService
                    .obtenerPorInmueble(
                        inmueble.id
                    );



            setSeguimientos(data);



        } catch(error) {


            console.error(
                "Error obteniendo historial:",
                error
            );


            setError(
                "No se pudo cargar el historial del inmueble."
            );


        } finally {


            setLoading(false);


        }

    }








    // =====================================
    // Limpiar detalle
    // =====================================

    function limpiarSeguimientos() {


        setSeguimientos([]);

        setInmuebleSeleccionado(null);


    }








    // =====================================
    // Obtener historial manualmente
    // =====================================

    async function obtenerPorInmueble(
        idInmueble:number
    ):Promise<Seguimiento[]> {


        try {


            const data =
                await seguimientoService
                    .obtenerPorInmueble(
                        idInmueble
                    );


            setSeguimientos(data);



            return data;



        } catch(error) {


            console.error(
                "Error obteniendo seguimientos:",
                error
            );


            throw error;


        }

    }








    // =====================================
    // Crear
    // =====================================

    async function crear(
        data: CrearSeguimientoRequest
    ):Promise<Seguimiento> {


        const resultado =
            await seguimientoService
                .crear(data);



        await cargarInmuebles();



        return resultado;


    }








    // =====================================
    // Actualizar
    // =====================================

    async function actualizar(
        id:number,
        data:ActualizarSeguimientoRequest
    ):Promise<Seguimiento> {


        const resultado =
            await seguimientoService
                .actualizar(
                    id,
                    data
                );



        if(inmuebleSeleccionado){

            await obtenerPorInmueble(
                inmuebleSeleccionado.id
            );

        }



        return resultado;


    }








    // =====================================
    // Eliminar
    // =====================================

    async function eliminar(
        id:number
    ) {


        await seguimientoService
            .eliminar(id);



        if(inmuebleSeleccionado){

            await obtenerPorInmueble(
                inmuebleSeleccionado.id
            );

        }


    }







    return {


        // Datos

        inmuebles,

        seguimientos,

        inmuebleSeleccionado,



        // Estados

        loading,

        error,



        // Acciones

        recargar:
            cargarInmuebles,


        seleccionarInmueble,


        limpiarSeguimientos,


        obtenerPorInmueble,


        crear,


        actualizar,


        eliminar,


        obtenerInmueblesEnConstruccion:
            cargarInmuebles


    };


}