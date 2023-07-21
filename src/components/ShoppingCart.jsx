import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState('');

  const addItem = () => {
    if (itemInput.trim()) {
      setItems([...items, itemInput]);
      setItemInput('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const totalItemsCount = items.length;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total Items: {totalItemsCount}</p>
    </div>
  );
};

export default ShoppingCart;
