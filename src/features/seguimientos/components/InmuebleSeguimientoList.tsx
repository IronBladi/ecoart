import InmuebleSeguimientoCard from "./InmuebleSeguimientoCard";


import type {
    Inmueble
} from "../../inmuebles/types";


import type {
    Seguimiento
} from "../types";



interface Props {


    inmuebles: Inmueble[];


    seguimientos: Seguimiento[];


    onSeleccionar: (
        inmueble: Inmueble
    ) => void;


}




const InmuebleSeguimientoList = ({
    inmuebles,
    seguimientos,
    onSeleccionar,
}: Props) => {



    if (inmuebles.length === 0) {


        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-[#E8E5D9]
                    bg-white
                    p-8
                    text-center
                    text-gray-500
                "
            >

                No existen inmuebles en construcción registrados.

            </div>

        );


    }





    return (


        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >



            {
                inmuebles.map(
                    (inmueble) => {


                        /*
                            Buscamos si este inmueble
                            ya tiene seguimientos cargados.

                            Actualmente el hook mantiene
                            solamente el inmueble seleccionado,
                            por eso normalmente será vacío
                            para los demás inmuebles.

                            Luego podemos optimizar con un cache.
                        */


                        const historial =
                            seguimientos.filter(
                                seguimiento =>
                                    seguimiento.idInmueble === inmueble.id
                            );



                        return (

                            <InmuebleSeguimientoCard

                                key={
                                    inmueble.id
                                }


                                inmueble={
                                    inmueble
                                }


                                seguimientos={
                                    historial
                                }


                                onSeleccionar={
                                    onSeleccionar
                                }

                            />

                        );


                    }
                )
            }




        </div>


    );


};



export default InmuebleSeguimientoList;