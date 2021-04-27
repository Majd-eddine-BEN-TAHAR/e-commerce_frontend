import { useEffect } from "react";
import useStore from "../../store/useStore";
import AdminProduct from "./AdminProduct";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const products = useStore(({ products }) => products);
  const fetchProducts = useStore(({ fetchProducts }) => fetchProducts);

  useEffect(() => fetchProducts(), [fetchProducts]);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl md:text-6xl my-8 underline md:mt-0">
        products
      </h1>
      <div className="sm:flex sm:justify-end">
        <Link
          to="/admin/products/product"
          className="text-white font-medium inline-block w-full vsm:w-auto uppercase py-2 px-4 mb-6 border-none cursor-pointer bg-black hover:bg-gray-700"
        >
          + create product
        </Link>
      </div>
      {products.length !== 0 ? (
        products.map((product) => (
          <AdminProduct key={product._id} {...product} />
        ))
      ) : (
        <h1>you don't have products</h1>
      )}
    </section>
  );
};

export default AdminProducts;
