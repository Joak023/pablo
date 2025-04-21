import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import './Navbar.css';


const Navbar = () => {
  const categories = ["electronica", "ropa", "hogar"]; // Cambiá según tus categorías reales

  return (
    <>
    
    
  

    <nav className="navbar">
      <Link to="/" className="logo">Mi Tienda</Link>
      
      <ul className="nav-links">
        {categories.map(cat => (
          <li key={cat}>
            <NavLink to={`/category/${cat}`} activeclassname="active">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
       </nav>
       <CartWidget />
  
  </>
);
};


export default Navbar;
