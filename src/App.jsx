import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;
