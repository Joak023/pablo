import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import './Navbar.css';

const Navbar = () => {
  const categories = ["electronica", "ropa", "hogar"]; 

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mi Tienda</Link>

      <ul className="nav-links">
        {categories.map(cat => (
          <li key={cat}>
            <NavLink 
              to={`/category/${cat}`} 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* 📦 Carrito de compras */}
      
        <CartWidget />
      
    </nav>
  );
};

export default Navbar;
