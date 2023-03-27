import React from "react";
import { useSetRecoilState } from "recoil";
import { productsState } from "../../states/Products";

export type ProductProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
};

export interface CartProductProps extends ProductProps {
  count: number;
}

const ProductCard = ({ id, name, img, price, category }: ProductProps) => {
  const setProducts = useSetRecoilState(productsState);

  const handleAddToCart = () => {
    setProducts((products: CartProductProps[]): CartProductProps[] => {
      const product: ProductProps = { id, name, img, price, category };
      const isProductExist: ProductProps | undefined = products.find(
        (p) => p.id === product.id
      );

      if (isProductExist) {
        return products;
      } else {
        return [...products, { ...product, count: 1 }];
      }
    });
  };

  return (
    <div
      className="relative flex cursor-pointer flex-col space-y-3 rounded-md border border-gray-100 bg-white p-2 drop-shadow-md"
      onClick={handleAddToCart}
    >
      <p className="absolute top-2 right-2 bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
        {category}
      </p>
      <img className="h-56 w-full object-cover" src={img} alt="product-img" />
      <h5 className="text-sm font-semibold">{name}</h5>
      <p className="font-bold text-indigo-600">
        <span className="text-xs">Ks </span>
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
