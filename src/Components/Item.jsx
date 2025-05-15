import { Link } from "react-router-dom";

const Item = ({ product }) => {
   const baseUrl = `${window.location.protocol}//${window.location.host}`;
  
  return (
    <div className="item-card">
      <img src={`${baseUrl}/${product.image}`} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
      
    </div>
  );
};

export default Item;
