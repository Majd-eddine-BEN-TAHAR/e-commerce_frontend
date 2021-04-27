import useStore from "../../store/useStore";
import CartProduct from "./CartProduct/index";

const CartProducts = () => {
  const cartProducts = useStore(({ cartProducts }) => cartProducts);

  return (
    <div className="flex-1 grid grid-cols-1 auto-rows-fr overflow-hidden">
      <div className="h-full overflow-auto">
        {cartProducts.length === 0 ? (
          <p className="flex justify-center">Your shopping cart is empty</p>
        ) : (
          cartProducts.map((product) => (
            <CartProduct key={product._id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default CartProducts;
