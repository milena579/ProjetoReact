import { Card } from '../src/components/Card'
import produtos from './constants/produtos.json'
import style from './App.module.css'
import App from './App'

export const Produtos = () => {
    return(
      <>
        <App/>
        <h2>Showroom de produtos</h2>
          <div className={style.cards}>
          {produtos.map((item) => {
            return(
              <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} categoria={item.categoria}/>
            )
           })}
          </div>
      </>
    ) 
}