import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {

  return (<BrowserRouter>

    <Header />
    <NavBar />

    <Routes>
      <Route  path='/' element={<ItemListContainer greeting={'¡Bienvenido a la tienda pensada para vos!'} />}/>
      <Route  path='/categoria/:categoriaID' element={<ItemListContainer greeting={'¡Bienvenido a la tienda pensada para vos!'} />}/>
      <Route path='/detail/:productID' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element= {<Navigate to = '/'/>}/>
    </Routes>


  </BrowserRouter>
  )
}


export default App