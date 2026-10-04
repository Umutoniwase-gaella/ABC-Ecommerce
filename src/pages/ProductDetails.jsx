import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Product Details</h1>

      <h2>ABC Product {id}</h2>

      <p>
        <strong>Product ID:</strong> {id}
      </p>

      <p>
        This is a product from ABC E-Commerce. This product
        is available for customers in Kayonza and throughout Rwanda.
      </p>

      <p>
        <strong>Price:</strong> $100
      </p>

      <p>
        <strong>Availability:</strong> In Stock
      </p>

      <div>
        <Link to="reviews">Reviews</Link>
        {" | "}
        <Link to="specs">Specifications</Link>
      </div>

      <br />

      <button onClick={() => navigate("/products")}>
        Back to Products
      </button>

      <hr />

      {/* Nested pages appear here */}
      <Outlet />
    </div>
  );
}

export default ProductDetails;