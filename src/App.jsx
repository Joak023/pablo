import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./context/Cart"; 
import { CartProvider } from "./context/CartContext";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />  {/* <-- Nueva ruta */}
          <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Página no encontrada</h2>} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
