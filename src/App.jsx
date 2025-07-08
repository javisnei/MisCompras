import { Opciones } from './assets/Principal/Opciones'
import styles from './App.module.css'
function App() {




  

  return (
    <>

    <div>
        <div className={styles.Menu}>
          <h2>Mis Compras </h2>
          <Opciones/>
        </div>
        <div className={styles.Listado}> 
        <h5>Lista de Compras</h5>
        <div id='Listado'></div>

        </div>

    </div>

   
    
      
    </>
  )
}

export default App
