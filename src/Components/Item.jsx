import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const domain = window.location.hostname === "localhost" ? "localhost:5173" : window.location.hostname;
  return (
    <div className="item-card">
      <img src={`${window.location.protocol}//${domain}/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
      
    </div>
  );
};

export default Item;
