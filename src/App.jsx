import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import Cart from './components/pages/Cart/Cart'
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer'




function App() {

  return (<BrowserRouter>

    <Header />
    <Navbar />

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={'Bienvenido a la tienda pensada para vos.'} />} />
      <Route path='/categoria/:categoriaID' element={<ItemListContainer greeting={'Bienvenido a la tienda pensada para vos.'} />} />
      <Route path='/detail/:productsID' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart/>}/>      
      <Route path='*' element={<Navigate to='/' />}/>
    
    </Routes>
  </BrowserRouter>
  )
}

export default App