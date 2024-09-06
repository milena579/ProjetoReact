import style from './App.module.css'

function App() {
  return (
    <>
    <div className={style.wrapBtns}>
      <a href="/Produtos"><button >Produtos</button></a>
      <a href="CardRick"><button >API</button></a>
      <a href="/Mapa"><button >Mapas</button></a>
      <a href="/Grafico"><button >Graficos</button></a>
    </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
      </div>
    </>
  )
}

export default App
