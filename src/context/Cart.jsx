import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Tu carrito está vacío.</h2>
        <Link to="/">
        <button>Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => addToCart(item, 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "1rem" }}>Eliminar</button>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <br /><br />
      <Link to="/">
      <button>Seguir comprando</button>
      </Link>
      <Link to="/checkout">
      <button>Finalizar Compra</button>
      </Link>

    </div>
  );
};

export default Cart;
