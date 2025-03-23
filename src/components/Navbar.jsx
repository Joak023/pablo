import "../index.css";
import CartWidget from "./CartWidget.jsx";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;