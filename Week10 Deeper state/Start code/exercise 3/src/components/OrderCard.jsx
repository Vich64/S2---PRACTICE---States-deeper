import React from "react";

export default function OrderCard({ name, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div
          className={`order-button ${quantity === 0 ? "disabled" : ""}`}
          onClick={quantity > 0 ? onDecrease : undefined}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrease}>
          +
        </div>
      </div>
    </div>
  );
}