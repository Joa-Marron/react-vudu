import { Alert } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";

const Order = () => {
  const { orderId } = useCartContext();
  return (
    <Alert variant="success">
      Este es su número de orden {orderId}.
      <br />
      Le agradecemos por su compra.
    </Alert>
  );
};

export default Order;