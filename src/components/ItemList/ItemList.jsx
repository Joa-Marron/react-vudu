import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (

        products.map(product => <Item key={product.Id} product={product} />) 
    )
}

export default ItemList