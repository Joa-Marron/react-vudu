import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = doc(dbFirestore, 'productos', productId)
    getDoc(queryCollection)
      .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [productId])



  return (

    <div>

      {loading
        ?
        <h2>Cargando...</h2>

        :
        < ItemDetail product={product} />
      }


    </div>


  )
}

export default ItemDetailContainer