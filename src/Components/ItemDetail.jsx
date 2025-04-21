import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    console.log(`Agregado al carrito: ${product.name} x${quantity}`);
  };
  const domain = window.location.hostname === "localhost" ? "localhost:5173" : window.location.hostname;
  return (
    <div className="item-detail">
      <img src={`${window.location.protocol}//${domain}/${product.image}`} alt={product.name} className="detail-img" />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
