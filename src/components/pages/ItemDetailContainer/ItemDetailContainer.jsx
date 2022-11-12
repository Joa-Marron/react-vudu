import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const {productId}= useParams()
    return (
    <ItemDetail/>
  )
}

export default ItemDetailContainer