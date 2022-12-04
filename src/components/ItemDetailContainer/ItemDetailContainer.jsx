import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {gFetch} from '../../utils/gFetch'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState ({})

  const {productID} = useParams ()

   useEffect(() => {
    gFetch(productID)
        .then(resp => setProduct(resp))
        }, []);


  return (

    <ItemDetail product = { product } />

  )

}
  
export default ItemDetailContainer