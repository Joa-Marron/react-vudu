import { Link } from "react-router-dom";

const InputContador = () => {
  
  return (
    <>
      <Link to="/Cart">
        <button className="btn btn-light btn-outline-dark m-2">
          Ir al Cart
        </button>
      </Link>
      <Link to="/">
        <button className="btn btn-light btn-outline-dark m-2">
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

export default InputContador;