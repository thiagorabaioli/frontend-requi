import { CategoryDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    registerDate: string; // ✅ novo campo ISO 8601
    categories: CategoryDTO[];
}
