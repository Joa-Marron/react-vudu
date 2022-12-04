import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {gFetch} from '../../utils/gFetch'

export const ItemDetailContainer = () => {

  const [product, setproduct] = useState ({})

  const {productID} = useParams ()

   useEffect(() => {
    gFetch(productID)
        .then((resp) => setProduct((resp) => resp.id === productID))
        .catch((err) => console.log(err))
        .finally(() => console.log("Siempre"));
}, []);


  return (

    <ItemDetail product = { product } />

  )

}
  
export default ItemDetailContainer