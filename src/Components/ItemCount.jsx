import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 0, onAdd }) => {  // <-- cambio acá
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count < stock ? count + 1 : count)}>+</button>
      <button onClick={handleAdd} disabled={count === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
