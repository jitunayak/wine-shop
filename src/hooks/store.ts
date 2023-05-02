import { StoreApi, UseBoundStore, create } from "zustand";
import { IAlcohol } from "../types/ICommon";

export interface ICartStore {
  items: IAlcohol[];
  addItem: (item: IAlcohol) => void;
  removeItem: (item: IAlcohol) => void;
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

    removeAllBears: () => set({ items: [] }),
  })
);