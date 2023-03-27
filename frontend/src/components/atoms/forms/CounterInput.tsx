import { useState } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../../../states/Products";
import Button from "../forms/Button";

interface ICounterInput {
  itemId: number;
  productCount: number;
}

const CounterInput = ({ itemId, productCount }: ICounterInput) => {
  const [products, setProducts] = useRecoilState(productsState);

  const handleCounterIncrement = () => {
    let tempProducts = products.map((product) => {
      if (product.id === itemId) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(tempProducts);
  };

  const handleCounterDecrement = () => {
    let tempProducts = products.map((product) => {
      if (product.id === itemId) {
        return {
          ...product,
          count: product.count <= 1 ? 1 : product.count - 1,
        };
      } else {
        return product;
      }
    });
    setProducts(tempProducts);
  };

  const handleCounter = (count: number) => {
    let tempProducts = products.map((product) => {
      if (product.id === itemId) {
        return {
          ...product,
          count: count,
        };
      } else {
        return product;
      }
    });
    setProducts(tempProducts);
  };

  return (
    <div className="mt-3 flex w-40 gap-1">
      <Button
        type="button"
        varient="border"
        buttonText="-"
        handleClick={handleCounterDecrement}
      />
      <input
        className=" w-full border border-gray-400 p-2"
        type="number"
        value={productCount}
        onChange={(e) => {
          handleCounter(+e.target.value);
        }}
      />
      <Button
        type="button"
        varient="border"
        buttonText="+"
        handleClick={handleCounterIncrement}
      />
    </div>
  );
};

export default CounterInput;
