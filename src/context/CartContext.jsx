// src/context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'bellataste_cart';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.id === action.item.id);
      if (existing) {
        return state.map(i =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.id);
    case 'INCREASE_QTY':
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i);
    case 'DECREASE_QTY':
      return state.map(i =>
        i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
      );
    case 'CLEAR_CART':
      return [];
    case 'LOAD':
      return action.payload;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal   = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
