import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState(""); // Cleared default so it starts blank
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const fetchInventory = () => {
    axios.get("http://localhost:8080/api/admin/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching inventory:", err));
  };

  useEffect(() => { fetchInventory(); }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      name, 
      brand, 
      category, 
      price: parseFloat(price), 
      stock: parseInt(stock),
      status: "Active"
    };

    console.log("Sending payload to backend:", payload);

    axios.post("http://localhost:8080/api/admin/products", payload)
      .then(() => {
        setName(""); setBrand(""); setCategory(""); setPrice(""); setStock("");
        fetchInventory();
      })
      .catch((err) => {
        console.error("Full Axios Error:", err.response?.data || err.message);
        alert(`Failed to add product: ${err.response?.data?.message || err.message}`);
      });
  };

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:8080/api/admin/products/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error("Error deleting:", err));
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "1.5rem" }}>Admin Dashboard</h1>

      <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", marginBottom: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "1rem" }}>Add New Product</h3>
        <form onSubmit={handleAdd} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", alignItems: "end" }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Wireless Mouse" />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Brand</label>
            <input value={brand} onChange={(e) => setBrand(e.target.value)} required placeholder="boAt or Zebronics" />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Category</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)} required placeholder="Mice" />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Price (₹)</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder="1299" />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Stock</label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required placeholder="75" />
          </div>
          <button type="submit" className="btn" style={{ height: "38px" }}>Create</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(p.id)} style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}