export interface IAlcohol {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    rating?: number;
    category: string;
    color: "green-600" | "yellow" | "red" | "orange-500";
    metaData: Record<string, any>[];
    inStock: boolean;
}
