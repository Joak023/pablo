import "../index.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="item-list">
      <h2>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;