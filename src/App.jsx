import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'



function App() {

  return (<div>
    <Header />
    <Navbar />
    <ItemListContainer greeting={'Bienvenido a la tienda pensada para vos.'} />
    
  </div>
  )
}

export default App