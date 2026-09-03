import {
    MapContainer,
    Marker,
    TileLayer,
} from "react-leaflet";

import type {
    LatLngExpression,
} from "leaflet";

import {
    FiNavigation,
} from "react-icons/fi";

import "leaflet/dist/leaflet.css";


// ==========================================
// TIPOS
// ==========================================

interface Props {

    latitud?: number | null;

    longitud?: number | null;

}


// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const InmuebleMiniMapa = ({
    latitud,
    longitud,
}: Props) => {

    // ==========================================
    // VALIDAR UBICACIÓN
    // ==========================================

    const tieneUbicacion =
        latitud !== null &&
        latitud !== undefined &&
        longitud !== null &&
        longitud !== undefined;


    if (!tieneUbicacion) {

        return (

            <div
                className="
                    flex
                    h-40
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-dashed
                    border-gray-300
                    bg-gray-50
                    px-4
                    text-center
                    text-sm
                    text-gray-500
                "
            >
                Este inmueble no tiene una ubicación
                geográfica registrada.

            </div>

        );

    }


    const posicion: LatLngExpression = [
        latitud,
        longitud,
    ];


    // ==========================================
    // ABRIR GOOGLE MAPS
    // ==========================================

    const abrirGoogleMaps = () => {

        const url =
            `https://www.google.com/maps/search/?api=1&query=` +
            `${latitud},${longitud}`;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    };


    return (

        <div className="space-y-3">

            {/* ======================================
                MAPA
            ====================================== */}

            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E8E5D9]
                "
            >

                <MapContainer
                    center={posicion}
                    zoom={16}
                    scrollWheelZoom={false}
                    dragging={false}
                    doubleClickZoom={false}
                    zoomControl={false}
                    className="
                        h-48
                        w-full
                    "
                >

                    <TileLayer
                        attribution={
                            '&copy; OpenStreetMap contributors'
                        }
                        url={
                            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />

                    <Marker
                        position={posicion}
                    />

                </MapContainer>

            </div>


            {/* ======================================
                ABRIR UBICACIÓN
            ====================================== */}

            <button
                type="button"
                onClick={abrirGoogleMaps}
                className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#6A994E]
                    bg-white
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#386641]
                    transition
                    hover:bg-[#F3F8EE]
                "
            >

                <FiNavigation size={16} />

                Ver ubicación en Google Maps

            </button>

        </div>

    );

};


export default InmuebleMiniMapa;