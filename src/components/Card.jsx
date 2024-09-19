/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const Card = ({name, desc, value, status, image, categoria}) => {
  return(
      <>
        <div className={style.card}>
            <h1>{name}</h1>
            <h2>{desc}</h2>
            <p>{value}</p>
            <p>Categoria: {categoria}</p>
            <p className={status? style.verde : style.vermelho}></p>
            <img src={image} alt={name} width={150} height={"150"}/>
        </div>
      </>
  
  )
}