import NotificacionCard from "./NotificacionCard";

import type {
    NotificacionSeguimiento,
} from "../types";

interface Props {

    notificaciones: NotificacionSeguimiento[];

    onMarcarComoLeida: (
        idSeguimiento: number
    ) => void | Promise<void>;

}

const NotificacionList = ({
    notificaciones,
    onMarcarComoLeida,
}: Props) => {

    if (notificaciones.length === 0) {

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

                No existen notificaciones disponibles.

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

            {
                notificaciones.map(
                    (notificacion) => (

                        <NotificacionCard

                            key={
                                notificacion.idSeguimiento
                            }

                            notificacion={
                                notificacion
                            }

                            onMarcarComoLeida={
                                onMarcarComoLeida
                            }

                        />

                    )
                )
            }

        </div>

    );

};

export default NotificacionList;