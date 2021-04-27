import React from "react";
import useStore from "../../store/useStore";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProducts = () => {
  const products = useStore((state) => state.cartProducts);

  return (
    <div>
      {products.map((product) => (
        <CheckoutProduct {...product} key={product._id} />
      ))}
    </div>
  );
};

export default CheckoutProducts;
