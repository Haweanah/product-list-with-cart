import { useState } from "react";
import Header from "./components/Header";
import Entries from "./components/Entries";
import data from "../data.json";
import Cart from "./components/Cart";
import OrderConfirmed from "./components/OrderConfirmed";
import "./App.css";

function App() {
  const [quantities, setQuantities] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // =========================
  // CART LOGIC
  // =========================

  function increase(id) {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  function decrease(id) {
    setQuantities(prev => {
      const updated = (prev[id] || 0) - 1;

      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }

      return {
        ...prev,
        [id]: updated,
      };
    });
  }

  function removeItem(id) {
    setQuantities(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }

  function resetCart() {
    setQuantities({});
  }

  // =========================
  // DERIVED VALUES (IMPORTANT)
  // =========================

  const cartCount = Object.values(quantities).reduce(
    (sum, q) => sum + q,
    0
  );

  const total = data.reduce((sum, item) => {
    return sum + (quantities[item.id] || 0) * item.price;
  }, 0);

  // =========================
  // PRODUCT LIST
  // =========================

  const products = data.map(item => (
    <Entries
      key={item.id}
      {...item}
      quantity={quantities[item.id] || 0}
      increase={increase}
      decrease={decrease}
    />
  ));

  // =========================
  // CART ITEMS
  // =========================

  const cartItems = data
    .filter(item => quantities[item.id])
    .map(item => (
      <div key={item.id} className="cart-wrapper">
        <div className="cart-item">
          <p className="item-name">{item.name}</p>

          <p className="count-details">
            <span className="item-no">{quantities[item.id]}x</span>
            <span>@ ${item.price.toFixed(2)}</span>
            <span>
              ${(quantities[item.id] * item.price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="remove-item">
          <img
            src="/images/icon-remove-item.svg"
            alt="remove item"
            onClick={() => removeItem(item.id)}
          />
        </div>
      </div>
    ))
    ;

  // =========================
  // ORDER CONFIRMATION
  // =========================

  function handleOrderConfirmation() {
    setOrderConfirmed(true);
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="page">
      <Header />

      <main>
        <div className="products">{products}</div>

        <Cart
          cartCount={cartCount}
          cartItems={cartItems}
          total={total}
          handleOrderConfirmation={handleOrderConfirmation}
          resetCart={resetCart}
        />
      </main>

      {orderConfirmed && (
        <div className="confirmed-page-overlayed">
          <OrderConfirmed
            cartItems={cartItems}
            total={total}
          />
        </div>
      )}
    </div>
  );
}

export default App;