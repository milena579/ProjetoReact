import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility"
import style from  './Mapa.module.css'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import App from './App';


export const Mapa = () => {
    const position = [-25.4248507,-49.2730483]
    return(
    <>
        <App/>
        <div className={style.tela}>
            <h1>Mapa</h1>
            <MapContainer className={style.mapa} center={position} zoom={13} scrollWheelZoom={false} style={{width: '90vw', height:'600px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                       <a target='_blank' href="https://g.co/kgs/9rjY2Tr">Maps</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
    )
}