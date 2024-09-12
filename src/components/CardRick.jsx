/* eslint-disable react/prop-types */
import style from './CardRick.module.css'
import { Tilt } from 'react-tilt'

export const CardRick = ({ name, status, species, type, gender , image}) => {
  return(
    <Tilt>
        <div className={style.card}>
            <h3>{name}</h3>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{type}</p>
            <p className={status == 'Alive'? style.verde : style.vermelho}></p>
            <img src={image} alt={name} width={150} height={"150"}/>
        </div>
      </Tilt>
  )
}