import React from "react";
import Checkout from "../molecules/OrderDetails/Checkout";
import OrderList from "../molecules/OrderDetails/OrderList";

const OrderDetails = () => {
  return (
    <div className="h-screen border-l border-gray-400">
      <h2 className="h-[7vh] p-4 text-xl font-semibold">Order Details</h2>
      <div className="flex h-[93vh] flex-col justify-between">
        <OrderList />

        <Checkout />
      </div>
    </div>
  );
};

export default OrderDetails;
