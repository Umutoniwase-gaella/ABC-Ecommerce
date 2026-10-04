import { useSearchParams, Link } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const price = searchParams.get("price");

  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "electronics",
      price: 800,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "electronics",
      price: 400,
    },
    {
      id: 3,
      name: "T-Shirt",
      category: "clothing",
      price: 20,
    },
    {
      id: 4,
      name: "Jeans",
      category: "clothing",
      price: 35,
    },
    {
      id: 5,
      name: "Headphones",
      category: "electronics",
      price: 50,
    },
  ];

  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Filter by price
  if (price === "low") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < 100
    );
  }

  if (price === "high") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= 100
    );
  }

  return (
    <div className="page">
      <h1>ABC E-Commerce Products</h1>

      <p>Browse our available products.</p>

      {/* Display active filters */}
      {category && (
        <p>
          <strong>Category:</strong> {category}
        </p>
      )}

      {price && (
        <p>
          <strong>Price:</strong> {price}
        </p>
      )}

      {/* Product cards */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Price:</strong> ${product.price}
            </p>

            <Link to={`/products/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>

      {/* Message when no products match */}
      {filteredProducts.length === 0 && (
        <p>
          <strong>No products found for this filter.</strong>
        </p>
      )}
    </div>
  );
}

export default Products;