import { StoreApi, UseBoundStore, create } from "zustand";
import { IAlcohol } from "../types/ICommon";

export interface ICartStore {
  items: IAlcohol[];
  addItem: (item: IAlcohol) => void;
  removeItem: (item: IAlcohol) => void;
}
export const useCartStore: UseBoundStore<StoreApi<ICartStore>> = create(
  (set) => ({
    items: [] as IAlcohol[],
    addItem: (item: IAlcohol) =>
      set((state: { items: IAlcohol[] }) => ({
        items: [...state.items, item],
      })),

    removeItem: (item: IAlcohol) =>
      set((state: { items: IAlcohol[] }) => ({
        items: state.items.filter((i) => i.id !== item.id),
      })),

    removeAllBears: () => set({ items: [] }),
  })
);
