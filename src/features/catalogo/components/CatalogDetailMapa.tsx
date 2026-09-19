import {
    MapContainer,
    Marker,
    TileLayer,
} from "react-leaflet";

import {
    FiExternalLink,
    FiMapPin,
} from "react-icons/fi";

import L from "leaflet";

import markerIcon from "../../../assets/leaflet/marker-icon.png";
import markerIcon2x from "../../../assets/leaflet/marker-icon-2x.png";      
import markerShadow from "../../../assets/leaflet/marker-shadow.png";   

import "leaflet/dist/leaflet.css";


// ==========================================
// CONFIGURACIÓN DEL ICONO DE LEAFLET
// ==========================================

const markerIconConfig = L.icon({

    iconUrl: markerIcon,

    iconRetinaUrl: markerIcon2x,

    shadowUrl: markerShadow,

    iconSize: [25, 41],

    iconAnchor: [12, 41],

    popupAnchor: [1, -34],

    shadowSize: [41, 41],

});


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

    // ==========================================
    // VALIDACIÓN DE COORDENADAS
    // ==========================================

    if (
        latitud === undefined ||
        longitud === undefined
    ) {

        return null;

    }


    // ==========================================
    // UBICACIÓN
    // ==========================================

    const ubicacion: [number, number] = [
        latitud,
        longitud,
    ];


    // ==========================================
    // GOOGLE MAPS
    // ==========================================

    const googleMapsUrl =
        `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;


    // ==========================================
    // RENDER
    // ==========================================

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

            {/* =====================================
                ENCABEZADO
            ====================================== */}

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

                {/* Título */}

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


                {/* Google Maps */}

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


            {/* =====================================
                MAPA
            ====================================== */}

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


                {/* Marcador del inmueble */}

                <Marker
                    position={ubicacion}
                    icon={markerIconConfig}
                />

            </MapContainer>

        </div>

    );

};


export default CatalogDetailMapa;