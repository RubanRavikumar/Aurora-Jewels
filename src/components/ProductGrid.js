import React from "react";
import { useCart } from "../context/CartContext";

function ProductGrid({ category }) {
  const { addToCart } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{category.title}</h2>
      <p className="text-muted">{category.description}</p>

      <div className="row">
        {category.products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top border-bottom shadow"
                style={{ height: 380, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div>
                    <strong>
                      {product.currency} {product.price}
                    </strong>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
