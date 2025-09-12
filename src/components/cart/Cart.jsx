import React from "react";
import "./Cart.css";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce(
    (s, item) => s + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div style={{ maxWidth: "50%" }} className="d-flex flex-column">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px" }}
                    className="shadow"
                  />
                  <strong>{item.name}</strong>
                </div>
                <div style={{width:"300px"}} className="d-flex align-items-center justify-content-between">
                  <div>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity || 1}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="mx-3">
                    <strong>
                      {item.currency} {item.price}
                    </strong>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-end">
            <h4>Total: INR {total}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
