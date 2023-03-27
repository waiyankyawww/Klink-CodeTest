import React from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../../../states/Products";
import Button from "../../atoms/forms/Button";

const Checkout = () => {
  const [products, setProducts] = useRecoilState(productsState);

  const handleClick = () => {
    setProducts([]);
  };

  const subTotal = () => {
    return products.reduce(
      (acc, product) => acc + Number(product.price) * Number(product.count),
      0
    );
  };

  return (
    <div className="h-[23vh] bg-indigo-100 p-4 text-sm">
      <div className="itemscenter mt-3 flex justify-between">
        <p className="text-gray-600">subtotal</p>
        <p className="text-indigo-700">Ks {subTotal()}</p>
      </div>
      <div className="itemscenter mt-3 flex justify-between">
        <p className="text-gray-600">Tax(5%)</p>
        <p className="text-indigo-700">Ks {subTotal() * 0.05}</p>
      </div>
      <hr className="my-3 border-dashed border-gray-400" />
      <div className="itemscenter mt-3 flex justify-between">
        <p className="text-gray-600">Total</p>
        <p className="text-indigo-700">Ks {subTotal() + subTotal() * 0.05}</p>
      </div>
      <div className="mt-2">
        <Button
          type="button"
          varient="primary"
          buttonText="Pay Now"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Checkout;
