import { CardRick } from '../src/components/CardRick'
import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import style from './App.module.css'
import App from './App'
import { ModalRick } from './components/ModalRick'

export const CardRickMorty = () =>{
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [modal, setModal] = useState();

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
          if(!response.data.results){
            console.log("Vazio")
          }
          setData(response.data.results)
        }).catch((error) => {
          if(error.response.status === 404){
            alert("Esta pagina nao contem este personagem")
          }
          console.error(error)
        })
    
      },[page, name])
      
    return(
      <>
        <App/>
        {modal !== undefined && <ModalRick data={data[modal]} close={() => setModal()}/>}
        <h2>Rick and Morty API</h2>
          <div className={style.pesquisas}>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
              <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
          </div>
          <div className={style.cards}>
            {data.map((item, index) => { 
              return(
              <div key={item.id} className={style.card}>
                <CardRick name={item.name} species={item.species} gender={item.gender} type={item.type} status={item.status} image={item.image} />
                {<a className={style.abrirInfo} onClick={() => setModal(index)}><b>+</b></a> }
              </div>
              )
            })}
          </div>
      </>
    )
}