import { ReactComponent as DeleteIcon } from "./../../../assets/images/delete.svg";
import useStore from "../../../store/useStore";

const CheckoutProduct = ({ _id, name, image_url, price, quantity }) => {
  const removeProductFromCart = useStore(
    ({ removeProductFromCart }) => removeProductFromCart
  );

  return (
    <>
      <div className="p-4 vsm:flex">
        <img
          src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
          alt={name}
          className="w-40 mx-auto vsm:w-1/2 "
        />
        <div className="vsm:p-4 vsm:w-1/2">
          <p className="font-medium text-xl ">{name}</p>
          <div className="flex justify-between my-4">
            <p className="text-gray-500 text-lg">
              {price}$ * {quantity} = {(price * quantity).toFixed(2)}
            </p>

            <DeleteIcon
              className="w-10 h-10 cursor-pointer hover:opacity-50"
              onClick={() => {
                removeProductFromCart(_id);
              }}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CheckoutProduct;
