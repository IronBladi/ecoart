import {
    MapContainer,
    Marker,
    TileLayer,
} from "react-leaflet";

import {
    FiExternalLink,
    FiMapPin,
} from "react-icons/fi";

import "leaflet/dist/leaflet.css";


// ==========================================
// TIPOS
// ==========================================

interface Props {

    latitud?: number;

    longitud?: number;

}


// ==========================================
// COMPONENTE
// ==========================================

const CatalogDetailMapa = ({
    latitud,
    longitud,
}: Props) => {

    // Si el inmueble no tiene coordenadas,
    // no mostramos el mapa.
    if (
        latitud === undefined ||
        longitud === undefined
    ) {

        return null;

    }


    const ubicacion: [number, number] = [
        latitud,
        longitud,
    ];


    // Enlace universal compatible con Google Maps.
    const googleMapsUrl =
        `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;


    return (

        <div
            className="
                mt-8
                overflow-hidden
                rounded-2xl
                border
                border-[#E8E5D9]
            "
        >

            {/* Encabezado */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    bg-[#F7F9F5]
                    px-5
                    py-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-[#386641]
                    "
                >

                    <FiMapPin />

                    Ubicación del inmueble

                </div>


                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#6A994E]
                        transition
                        hover:text-[#386641]
                        hover:underline
                    "
                >

                    Ver en Google Maps

                    <FiExternalLink />

                </a>

            </div>


            {/* Mapa */}

            <MapContainer
                center={ubicacion}
                zoom={16}
                scrollWheelZoom={false}
                className="
                    h-75
                    w-full
                "
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={ubicacion}
                />

            </MapContainer>

        </div>

    );

};


export default CatalogDetailMapa;