// src/context/CartContext.js
"use client";

import { createContext, useContext, useState } from "react";
// 🔥 Toast ko import kiya
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 1. Add to Cart (Alert hatakar Toast lagaya)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // 🔥 Puraane alert(...) ki jagah sundar Toast
    toast.success(`🛒 ${product.name} Cart me add ho gaya!`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "15px",
      },
    });
  };

  // 2. Item Delete Karna
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
    toast.error("Item cart se hata diya gaya!"); // 🔥 Delete hone par bhi toast
  };

  // 3. Quantity Plus/Minus Karna
  const updateQuantity = (productId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }),
    );
  };
  // 4. NAYA FUNCTION: Order place hone par cart khali karna
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
