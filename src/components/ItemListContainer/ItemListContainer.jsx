import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'



const ItemListContainer = (props) => {

  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const sumar = () => {
    setCount(count + 1)
  }

  useEffect(() => {

    gFetch
      .then(resp => setProducts(resp))
      .finally(() => setLoading(false))

  }, [])

  console.log(products);


  return (
    loading
      ?
      <div className='flex'>
      <h2 className='loading'>Cargando...</h2>
      </div>
      :

      (<div className='body'>

        <div>
          <h2 className='saludo'>{props.greeting}</h2>
        </div>

        <div className='listaProductos'>

          {products.map(obj => <div key={obj.ID} className='card'>
            <Link to={`/detail/${obj.id}`}>
            <div className='listaProductos'>
              {obj.nombre}
            </div>
            <div className='listaProductos'>
              {obj.descripción}
            </div>
            <div className='listaProductos'>
              {obj.stock}
            </div>
            <div className='listaProductos'>
              {obj.precio}
            </div>
            <div className='listaProductos'>
              <img src={obj.foto} alt="" className='imgProductos'/>
            </div>

            <div className='count'>
              {count}
            </div>

            <div className='btn flex'>
              <button onClick={sumar}> + </button>
              <div className='btnCount flex'>
              <button className='btn btnCountStyle'>Agregar al carrito</button>
              </div>
            </div>
            </Link>
          </div>)}

        </div>

      </div>
      ))
}

export default ItemListContainer