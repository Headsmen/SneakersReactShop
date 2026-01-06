import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShopState {
  favorites: number[];
  cart: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleCart: (id: number) => void;
  isInCart: (id: number) => boolean;
  clearCart: () => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      favorites: [],
      cart: [],

      toggleFavorite: (id: number) => {
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((itemId) => itemId !== id)
            : [...state.favorites, id],
        }));
      },

      isFavorite: (id: number) => {
        return get().favorites.includes(id);
      },

      toggleCart: (id: number) => {
        set((state) => ({
          cart: state.cart.includes(id)
            ? state.cart.filter((itemId) => itemId !== id)
            : [...state.cart, id],
        }));
      },

      isInCart: (id: number) => {
        return get().cart.includes(id);
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'shop-storage',
    }
  )
);
