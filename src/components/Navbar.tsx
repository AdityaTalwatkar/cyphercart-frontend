import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛒 CypherCart</Link>
      <div className="nav-links">
        <Link to="/">Storefront</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </div>
    </nav>
  );
}