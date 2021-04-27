import { Link } from "react-router-dom";
import useStore from "../../../store/useStore";

const Checkout = () => {
  const totalPrice = useStore((state) => state.totalPrice());
  const closeCart = useStore((state) => state.closeCart);
  const loggedIn = useStore(({ loggedIn }) => loggedIn());

  return (
    <div className="w-full h-40  py-2 px-6 bg-gray-100 border-t-2 flex flex-col justify-center">
      <div className="flex justify-between w-full max-w-xs mx-auto">
        <p className="capitalize font-medium">total</p>
        <p className="underline font-bold">$ &nbsp; {totalPrice}</p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1">
        <Link
          to="/"
          onClick={closeCart}
          className="w-full capitalize border-2 py-1 px-2 flex justify-center hover:bg-blue-500 hover:text-white font-medium transition-all hover:border-none"
        >
          continue shopping
        </Link>

        <Link
          to={loggedIn ? `/checkout` : "/login"}
          onClick={closeCart}
          className="w-full capitalize border-2 py-1 px-2 flex justify-center  hover:bg-blue-500 hover:text-white font-medium transition-all hover:border-none"
        >
          proceed To Checkout
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
