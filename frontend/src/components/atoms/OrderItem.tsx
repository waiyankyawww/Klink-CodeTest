import React from "react";
import { useSetRecoilState } from "recoil";
import { productsState } from "../../states/Products";
import Button from "./forms/Button";
import CounterInput from "./forms/CounterInput";
import { ProductProps, CartProductProps } from "./ProductCard";

const OrderItem = ({ id, name, img, price, count }: CartProductProps) => {
  const setProducts = useSetRecoilState(productsState);

  const handleRemoveFromOrderList = () => {
    setProducts((products: CartProductProps[]): CartProductProps[] => {
      return products.filter((p) => p.id !== id);
    });
  };

  return (
    <div className="flex justify-between p-4">
      <div className="flex items-center gap-3">
        <img
          className="h-28 w-28 rounded-lg object-cover"
          src={img}
          alt={`${id}-${name}`}
        />
        <div>
          <h5 className="w-40 truncate text-sm ">
            Couple Shoes 2021 New one Man and One Woman Spring Korean{" "}
          </h5>
          <p className="font-bold text-indigo-600">
            <span className="text-xs">Ks</span>
            {price}
          </p>
          <div className="mt-3 flex w-40 gap-1">
            <CounterInput itemId={id} productCount={count} />
          </div>
        </div>
      </div>
      <div>
        <Button
          type="button"
          varient="text"
          buttonText="x"
          handleClick={handleRemoveFromOrderList}
        />
      </div>
    </div>
  );
};

export default OrderItem;
