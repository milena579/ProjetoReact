import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import App from './App';


export const Mapa = () => {
    const position = [-25.4248507,-49.2730483]
    return(
    <>
        <App/>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: '100vw', height:'300px'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </>
    )
}