import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/Products";
import ItemList from "../Components/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? productsData.filter((prod) => prod.category === categoryId)
            : productsData
        );
      }, 1000);
    });

    fetchProducts.then((res) => setProducts(res));
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
