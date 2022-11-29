import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"


export const ItemDetailContainer = () => {

  const { productID } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    gFetch(productID)
      .then(resp => setProduct(resp))
      .catch(err => console.log(err))
      .finally(() => console.log('Siempre'))

  }, [])




  return (

    <ItemDetail product = { product } />

  )
}

export default ItemDetailContainer