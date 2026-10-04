import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <p>
        © 2026 ABC E-Commerce. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;