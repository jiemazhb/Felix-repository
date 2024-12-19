import React, {useMemo, useState } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", price: 0.99, quantity: 0 },
    { id: 2, name: "Banana", price: 0.49, quantity: 0 },
    { id: 3, name: "Mango", price: 1.99, quantity: 0 },
    { id: 4, name: "Strawberry", price: 2.49, quantity: 0 },
  ]);

  const updateQuantity = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item;
      })
    );
  };

  // const totalPrice = items
  //   .reduce((sum, item) => {
  //     return sum + item.price * item.quantity;
  //   }, 0)
  //   .toFixed(2);

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }, [items]);

  return (
    <div style={{ padding: "20px", color: "#fff", backgroundColor: "#1e1e1e" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#333" }}>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #555" }}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>${item.price.toFixed(2)}</td>
              <td style={cellStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  {" "}
                  -{" "}
                </button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button
                  style={buttonStyle}
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "20px", textAlign: "right" }}>
        Total price: ${totalPrice}
      </h2>
    </div>
  );
}

const cellStyle = {
  padding: "10px",
  backgroundColor: "#222",
};

const buttonStyle = {
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  fontSize: "16px",
};
