import {
    useState,
} from "react";

import {
    MapContainer,
    Marker,
    TileLayer,
    useMapEvents,
} from "react-leaflet";

import type {
    LatLngLiteral,
} from "leaflet";

import "leaflet/dist/leaflet.css";


// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================

const CENTRO_TARIJA: [number, number] = [
    -21.5355,
    -64.7296,
];


// ==========================================
// TIPOS
// ==========================================

interface Props {
    onLocationSelect?: (
        ubicacion: LatLngLiteral
    ) => void;
}


// ==========================================
// COMPONENTE INTERNO
// Detecta clics sobre el mapa
// ==========================================

interface MapClickHandlerProps {
    onLocationSelect?: (
        ubicacion: LatLngLiteral
    ) => void;

    onMarkerChange: (
        ubicacion: LatLngLiteral
    ) => void;
}

const MapClickHandler = ({
    onLocationSelect,
    onMarkerChange,
}: MapClickHandlerProps) => {

    useMapEvents({
        click(event) {

            const ubicacion: LatLngLiteral = {
                lat: event.latlng.lat,
                lng: event.latlng.lng,
            };

            onMarkerChange(ubicacion);

            onLocationSelect?.(ubicacion);
        },
    });

    return null;
};


// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const UbicacionMapa = ({
    onLocationSelect,
}: Props) => {

    const [
        ubicacionSeleccionada,
        setUbicacionSeleccionada,
    ] = useState<LatLngLiteral | null>(null);


    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-300">

            <MapContainer
                center={CENTRO_TARIJA}
                zoom={14}
                scrollWheelZoom={true}
                className="h-96 w-full"
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapClickHandler
                    onLocationSelect={onLocationSelect}
                    onMarkerChange={setUbicacionSeleccionada}
                />

                {ubicacionSeleccionada && (
                    <Marker
                        position={ubicacionSeleccionada}
                    />
                )}

            </MapContainer>

        </div>
    );
};

export default UbicacionMapa;