import Item from "./Item";
import "./ItemList.css"; // Asegurate de que esta ruta esté bien según tu estructura

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
