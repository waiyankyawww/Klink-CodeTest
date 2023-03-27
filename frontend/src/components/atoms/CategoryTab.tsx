import React from "react";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../../states/SelectedCategory";

export type CategoryProps = {
  name: string;
};

const CategoryTab = ({ name }: CategoryProps) => {
  const [category, setCategory] = useRecoilState(selectedCategoryState);

  const handleClick = () => {
    setCategory(name);
  };

  return (
    <div
      className={`cursor-pointer rounded-full bg-gray-200 px-3 py-1 hover:bg-indigo-500 hover:text-white ${
        category === name ? "bg-indigo-600 text-white" : ""
      }`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default CategoryTab;
