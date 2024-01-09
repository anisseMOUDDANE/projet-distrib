import { Product } from "./Product";

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  total: number;
  setTotal: (value: number) => void;
}
