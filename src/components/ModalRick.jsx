import style from './CardRick.module.css'
import Draggable from 'react-draggable'

export const ModalRick = (props) => {
    return (
        <Draggable>
            <div className={style.modal}>
                <div className={style.botao}>
                    <a onClick={props.close}>&#128473;</a>
                </div>
                <div className={style.imgInfo}>
                    <img src={props.data.image} alt={props.data.name} width={250} height={"250"}/>
                    <div className={style.info}>
                        <h2>{props.data.name}</h2>
                        <p>Raça: {props.data.species}</p>
                        <p>Gênero: {props.data.gender}</p>
                        <p>Tipo: {props.data.type}</p>
                        <p>Local: {props.data.location.name}</p>
                        <div className={style.vivo}>
                            <p>Situação: {props.data.status}</p>
                            <p className={props.data.status == 'Alive'? style.verde : style.vermelho}></p>
                        </div>
                    </div>   
                </div>
            </div>
        </Draggable>
    )
}