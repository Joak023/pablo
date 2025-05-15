import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirm = async () => {
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Completá todos los campos!");
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: serverTimestamp()
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error generando orden: ", error);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Finalizar Compra</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleInputChange}
        />
      </div>

      <h3>Productos:</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} x {item.quantity}</li>
        ))}
      </ul>

      <p><strong>Total:</strong> ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>

      <button onClick={handleConfirm}>Confirmar compra</button>
    </div>
  );
};

export default Checkout;
