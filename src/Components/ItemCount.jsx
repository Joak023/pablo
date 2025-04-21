import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count < stock ? count + 1 : count)}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
