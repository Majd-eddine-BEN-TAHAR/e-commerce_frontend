import { ReactComponent as DeleteIcon } from "./../../../assets/images/delete.svg";
import { Link } from "react-router-dom";
import useStore from "../../../store/useStore";

const CartProduct = ({ _id, name, image_url, price, quantity }) => {
  const closeCart = useStore(({ closeCart }) => closeCart);
  const removeProductFromCart = useStore(
    ({ removeProductFromCart }) => removeProductFromCart
  );

  return (
    <section className="CartProduct py-2 px-6">
      <div className="flex justify-between items-center">
        <Link
          className="overflow-hidden hover:opacity-70"
          to={`/products/${_id}`}
          onClick={closeCart}
        >
          <div className="flex items-center">
            <img
              src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
              alt={name}
              className="w-20 h-20 object-cover rounded  mr-2 "
            />
            <p className="font-medium capitalize overflow-hidden whitespace-nowrap overflow-ellipsis mr-2">
              {name}
            </p>
          </div>
        </Link>
        <DeleteIcon
          className="w-8 h-8 hover:opacity-50 focus:opacity-50 cursor-pointer"
          onClick={() => removeProductFromCart(_id)}
        />
      </div>
      <div className="PRICE flex justify-between my-2">
        <p className="capitalize ">price</p>
        <p className="font-medium">$&nbsp;{price}</p>
      </div>
      <div className="QUANTITY flex justify-between my-2">
        <p className="capitalize">quantity</p>
        <p className="font-medium">{quantity}</p>
      </div>
      <hr />
    </section>
  );
};

export default CartProduct;
