import React, { useState } from "react";

export default function StuffForm({ onAdd }) {
  const [name, setName] = useState(""); // State for the name input
  const [price, setPrice] = useState(""); // State for the price input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Create a new object with the entered name and price
    const newStuff = {
      name: name,
      price: parseFloat(price), // Convert price to a number
    };

    onAdd(newStuff); // Send the new object to the App component

    // Clear the form
    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <p>Stuff price</p>
      <input
        type="search"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}