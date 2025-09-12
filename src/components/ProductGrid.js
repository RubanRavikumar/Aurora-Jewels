import React from "react";

function ProductGrid({ category }) {
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
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="text-muted small">{product.material}</p>
                <h6 className="fw-bold mt-auto">₹ {product.price}</h6>
                <button
                  className="btn btn-primary mt-2"
                  disabled={!product.inStock}
                >
                  
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
