import { useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../../store/useStore";

const AdminEditProduct = () => {
  const { productId } = useParams();
  const product = useStore((state) => state.productById(productId));
  const updateProduct = useStore(({ updateProduct }) => updateProduct);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [countInStock, setCountInStock] = useState(product.countInStock);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(null);

  const updateProductClicked = (e) => {
    e.preventDefault();
    const validationResult = e.target.parentNode.reportValidity();
    if (validationResult) {
      updateProduct(productId, name, price, countInStock, description, image);
    }
  };

  if (!product) return null;

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl sm:text-6xl my-8 underline">
        edit product
      </h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">_id:</label>
          <input
            required
            disabled
            type="text"
            name="_id"
            className="w-full bg-gray-200 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none cursor-not-allowed "
            value={product._id}
            onChange={() => {}}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">name:</label>
          <input
            required
            type="text"
            name="name"
            pattern=".{2,}"
            title="Please enter at least 2 characters."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl mb-2 tracking-widest">
            image:
          </label>

          <img
            src={
              image
                ? URL.createObjectURL(image)
                : `${process.env.REACT_APP_BACKEND_ROOT_URL}/${product.image_url}`
            }
            alt={product.name}
            className="w-full max-w-sm mx-auto"
          />

          <p className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none">
            {product.image_url}
          </p>
          <label className="font-bold text-center border-2 py-1 px-3 capitalize cursor-pointer bg-gray-200 hover:bg-blue-600 hover:text-white">
            <input
              type="file"
              className="hidden"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            browse
          </label>
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">price:</label>
          <input
            required
            type="number"
            title="Please enter a number"
            name="price"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">
            in stock:
          </label>
          <input
            required
            type="number"
            title="Please enter a number"
            name="countInStock"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">
            description:
          </label>
          <input
            required
            type="text"
            name="description"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="update"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={updateProductClicked}
        />
      </form>
    </section>
  );
};

export default AdminEditProduct;
