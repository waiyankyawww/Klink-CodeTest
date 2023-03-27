import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { productsState } from "../../../states/Products";
import OrderItem from "../../atoms/OrderItem";
import ProductCard from "../../atoms/ProductCard";

const OrderList = () => {
  const products = useRecoilValue(productsState);

  return (
    <div className="h-[70vh] space-y-5 overflow-auto p-4">
      {products && products.length > 0 ? (
        <Fragment>
          {products.map((product) => (
            <Fragment key={product.id}>
              <OrderItem
                id={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                category={product.category}
                count={product.count}
              />
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <h2>No Order Yet...</h2>
      )}
    </div>
  );
};

export default OrderList;
