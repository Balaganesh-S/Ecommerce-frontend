import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  addProducts: (products) => set((state) => ({ products: [...products] })),
  categories: [],
  addCategories: (categories) =>
    set((state) => ({ categories: [...categories] })),
}));
