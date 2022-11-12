import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Navbar} from './components/Navbar/Navbar'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  return (<BrowserRouter>

    <Header />
    <Navbar />

    <Routes>
      <Route  path='/' element={<ItemListContainer greeting={'¡Bienvenido a la tienda pensada para vos!'} />}/>
      <Route  path='/categoria/:categoriaID' element={<ItemListContainer greeting={'¡Bienvenido a la tienda pensada para vos!'} />}/>
      <Route path='/detail/:productID' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element= {<Navigate to = '/'/>}/>
    </Routes>


  </BrowserRouter>
  )
}


export default App