import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("id", "==", Number(itemId)));

    getDocs(q)
      .then((response) => {
        if (response.empty) {
          console.log("Producto no encontrado");
        } else {
          const productAdapted = response.docs[0].data();
          setItem(productAdapted);
        }
      })
      .catch((error) => {
        console.error("Error obteniendo producto:", error);
      });
  }, [itemId]);

  return item ? <ItemDetail product={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
