import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export default function Storefront() {
  const [products, setProducts] = useState<Product[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Fetch main catalog
    axios.get("http://localhost:8080/api/catalog")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Catalog error:", err));

    // 2. Fetch graph recommendations matching your CatalogController.java
    axios.get("http://localhost:8080/api/catalog/recommendations/alice")
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.error("Recommendations error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <header style={{ marginBottom: "2rem", background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "1.75rem", color: "#0f172a", marginBottom: "0.5rem" }}>CypherCart Storefront</h1>
        <p style={{ color: "#64748b" }}>Gadget recommendations powered by real-time Neo4j graph traversals.</p>
      </header>

      {recommendations.length > 0 && (
        <section style={{ marginBottom: "2.5rem" }}>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.1rem", color: "#1e40af" }}>⚡ Recommended for You (Multi-Hop Graph Match)</h2>
            <p style={{ fontSize: "0.85rem", color: "#3b82f6" }}>Generated via collaborative filtering traversal over CognoDB.</p>
          </div>
          <div className="grid">
            {recommendations.map((prod) => (
              <div key={prod.id} className="card" onClick={() => navigate(`/product/${prod.id}`)}>
                <span className="badge badge-success" style={{ marginBottom: "0.5rem" }}>Recommended</span>
                <h3>{prod.name}</h3>
                <p>Category: {prod.category}</p>
                <div className="price">₹{prod.price}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2>All Products</h2>
        {loading ? <p>Connecting to Spring Boot backend...</p> : (
          <div className="grid">
            {products.map((prod) => (
              <div key={prod.id} className="card" onClick={() => navigate(`/product/${prod.id}`)}>
                <h3>{prod.name}</h3>
                <p>Category: {prod.category}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="price">₹{prod.price}</span>
                  <span className={`badge ${prod.stock > 0 ? "badge-success" : "badge-warning"}`}>
                    {prod.stock > 0 ? `Stock: ${prod.stock}` : "Out of stock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}