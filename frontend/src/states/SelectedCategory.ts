import { atom } from "recoil";

export const selectedCategoryState = atom<string>({
  key: "SelectedCategoryState",
  default: "All",
});
