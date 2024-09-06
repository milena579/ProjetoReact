/* eslint-disable react/prop-types */
import style from './CardRick.module.css'

export const CardRick = ({ name, status, species, type, gender , image}) => {
  return(
      <div className={style.card}>
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{type}</p>
          <p className={status == 'Alive'? style.verde : style.vermelho}></p>
          <img src={image} alt={name} width={150} height={"150"}/>
      </div>
  )
}