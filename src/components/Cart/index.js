import useStore from "../../store/useStore";
import CloseButton from "./CloseButton";
import CartProducts from "../CartProducts";
import Checkout from "./Checkout";

const Cart = () => {
  const cartState = useStore((state) => state.cartState);
  const closeCart = useStore((state) => state.closeCart);
  return (
    <div
      className="BACKDROP min-h-full bg-backdrop fixed fixed-mobiles top-0 bottom-0 w-full h-full z-20 flex justify-end transition-all overflow-hidden"
      style={{
        right: cartState ? "0px" : "-100%",
        opacity: cartState ? "1" : "0",
        maxWidth: cartState ? "100%" : "0%",
      }}
    >
      <div className="w-full max-w-288px md:max-w-md h-full flex flex-col bg-white pt-10 relative ">
        <CloseButton />
        <hr />
        <CartProducts />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
