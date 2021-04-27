import { Stars } from "../";
import useStore from "../../store/useStore";
import { useState } from "react";

const ProductInfo = ({
  _id,
  name,
  price,
  description,
  countInStock,
  image_url,
  reviews,
  generalRating,
}) => {
  const addProductToCart = useStore(({ addProductToCart }) => addProductToCart);
  const removeProductFromCart = useStore(
    ({ removeProductFromCart }) => removeProductFromCart
  );

  const isExistInCart = useStore(({ isExistInCart }) => isExistInCart(_id));

  const updateProductQuantity = useStore(
    ({ updateProductQuantity }) => updateProductQuantity
  );

  const [quantity, setQuantity] = useState(() => {
    if (isExistInCart) return isExistInCart.quantity;
    return 1;
  });

  return (
    <div className="grid md:grid-cols-2 ">
      <img
        src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
        alt={name}
        className="w-full h-full object-cover  shadow"
      />
      <section className="INFO mt-4 px-2 py-4 shadow  md:mt-0 md:ml-4">
        <h2 className="PRODUCT-NAME text-xl font-medium capitalize my-2">
          {name}
        </h2>
        <hr className="GRAY-HORIZONTAL-LINE" />
        <p className="DESCRIPTION my-4 text-justify">{description}</p>
        <div className="flex">
          <Stars stars={generalRating} />
          <p className="font-light">&nbsp;{reviews.length} reviews</p>
        </div>
        <p className="PRICE text-2xl font-bold underline">$&nbsp;{price} </p>
        <form action="" className="mt-6 ">
          <label htmlFor="quantity" className="capitalize font-medium text-xl">
            quantity
          </label>

          <input
            required
            type="number"
            name="quantity"
            id="quantity"
            className="w-full border-2 px-2 py-1 outline-none focus:border-gray-400"
            min={1}
            max={countInStock}
            value={quantity}
            onChange={(e) => {
              const validationResult = e.target.parentNode.reportValidity();
              if (validationResult) {
                if (isExistInCart) updateProductQuantity(_id, e.target.value);
              }
              setQuantity(e.target.value);
            }}
          />

          {isExistInCart ? (
            <input
              type="submit"
              value="remove from cart"
              className="w-full mt-2 capitalize bg-blue-500 text-white font-medium py-1 cursor-pointer hover:bg-blue-400"
              onClick={(e) => {
                e.preventDefault();
                removeProductFromCart(_id);
              }}
            />
          ) : (
            <input
              type="submit"
              value="add to cart"
              className="w-full mt-2 capitalize bg-blue-500 text-white font-medium py-1 cursor-pointer hover:bg-blue-400"
              onClick={(e) => {
                e.preventDefault();
                const validationResult = e.target.parentNode.reportValidity();
                if (validationResult) {
                  addProductToCart({ _id, name, image_url, price, quantity });
                }
              }}
            />
          )}
        </form>
      </section>
    </div>
  );
};

export default ProductInfo;
