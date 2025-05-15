import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = categoryId 
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(q)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      });
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
 