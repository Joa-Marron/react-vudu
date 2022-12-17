import { useState } from 'react'
import InputContador from '../InputContador/InputContador'
import './Contador.css'


const Contador = ({ initial = 1, stock = 100, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const [bool, setBool] = useState(true);
    const add = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    };
  
    const subtract = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const addquantity = () => {
      onAdd(quantity);
      setBool(false);
    };
    
    return (
      <div className='btnCart'>
        {bool === true ? (
          <div>
            <button className="btn btn-dark btn-outline-light border-dark m-1" onClick={subtract}>
              -
            </button>
            <label>{quantity}</label>
            <button className="btn btn-dark btn-outline-light border-dark m-1" onClick={add}>
              +
            </button>
            <br />
            <button className="btn btn-dark btn-outline-light border-dark m-1" onClick={addquantity}>
              Agregar al carrito
            </button>
          </div>
        ) : (
          <InputContador />
        )}
      </div>
    );
  };
export default Contador

