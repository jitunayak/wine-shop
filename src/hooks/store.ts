import { StoreApi, UseBoundStore, create } from "zustand";
import { IAlcohol } from "../types/ICommon";

export interface ICartStore {
  items: IAlcohol[];
  addItem: (item: IAlcohol) => void;
  removeItem: (item: IAlcohol) => void;
  removeAllItems: () => void;
}

const removeItems = (items: IAlcohol[], item: IAlcohol) => {
  const rest = items.filter((i) => i.id !== item.id);
  const removeItems = items.filter((i) => i.id === item.id);
  removeItems.pop();

  return [...rest, ...removeItems];
};

export const useCartStore: UseBoundStore<StoreApi<ICartStore>> = create(
  (set) => ({
    items: [] as IAlcohol[],
    addItem: (item: IAlcohol) =>
      set((state: { items: IAlcohol[] }) => ({
        items: [...state.items, item],
      })),

    removeItem: (item: IAlcohol) =>
      set((state: { items: IAlcohol[] }) => ({
        items: removeItems(state.items, item),
      })),

    removeAllItems: () => set({ items: [] }),
  })
);

export const useUserStore: UseBoundStore<StoreApi<any>> = create((set) => ({
  userId: null,
  isNewAccount: false,
  userName: "Jitu Nayak",
  phoneNumber: "9999999999",
  setUserId: (userId: string) => set({ userId }),
  setUserName: (userName: string) => set({ userName }),
}));
