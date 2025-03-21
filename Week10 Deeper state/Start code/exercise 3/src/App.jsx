import React from "react";
import OrderCard from "./components/OrderCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
    quantity: 0,
  },
  {
    name: "Computer",
    price: 100.5,
    quantity: 0,
  },
  {
    name: "Table",
    price: 60,
    quantity: 0,
  },
];

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  const handleIncrease = (index) => {
    const updatedStuffs = [...stuffs];
    updatedStuffs[index].quantity += 1;
    setStuffs(updatedStuffs);
  };

  const handleDecrease = (index) => {
    const updatedStuffs = [...stuffs];
    if (updatedStuffs[index].quantity > 0) {
      updatedStuffs[index].quantity -= 1;
      setStuffs(updatedStuffs);
    }
  };

  const totalPrice = stuffs.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <header>
        <h1>My Order</h1>
      </header>

      <div className="order-list">
        {stuffs.map((stuff, index) => (
          <OrderCard
            key={index}
            name={stuff.name}
            price={stuff.price}
            quantity={stuff.quantity}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>

      <div className="total-price-container">
        <h2 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </>
  );
}