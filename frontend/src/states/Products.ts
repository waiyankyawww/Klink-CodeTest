import { atom } from "recoil";
import {
  ProductProps,
  CartProductProps,
} from "../components/atoms/ProductCard";

export const productsState = atom<CartProductProps[]>({
  key: "produtsState",
  default: [],
});
