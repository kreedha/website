import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        set((state) => {
          const exists = state.items.find((i) => i._id === item._id);
          if (exists) return state;
          return { items: [...state.items, item] };
        });
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item._id !== id),
        }));
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item._id === id);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'makhana-wishlist',
    }
  )
);
