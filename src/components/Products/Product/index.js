import { Link } from "react-router-dom";
import { Stars } from "./../../";

const Product = ({
  product: { _id, name, image_url, price, generalRating },
}) => {
  return (
    <Link to={`/products/${_id}`}>
      <section className="h-full border-2 p-2 hover:opacity-70 hover:border-blue-500">
        <div className="w-full ">
          <img
            src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
            alt={name}
            className="w-full h-80  object-cover"
          />
        </div>

        <div className="px-2">
          <h2 className="PRODUCT-NAME my-4 capitalize text-gray-600 font-medium underline overflow-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h2>

          <div className="flex justify-between">
            <Stars stars={generalRating} />
            <p className="PRICE font-medium">{price}$</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Product;
