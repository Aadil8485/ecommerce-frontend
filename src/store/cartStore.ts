import { create } from "zustand";

interface CartState {
  items: any[];
  addToCart: (item: any) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));
