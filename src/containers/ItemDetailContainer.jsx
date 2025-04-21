import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/Products";
import ItemDetail from "../Components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData.find((prod) => prod.id === parseInt(itemId)));
      }, 1000);
    });

    fetchItem.then((res) => setItem(res));
  }, [itemId]);

  return item ? <ItemDetail product={item} />  : <p>Cargando...</p>;
};

export default ItemDetailContainer;
