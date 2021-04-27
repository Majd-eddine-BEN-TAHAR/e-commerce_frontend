import Product from "./Product";
import useStore from "../../store/useStore";

const Products = () => {
  const products = useStore(({ products }) => products);

  return (
    <div className="w-11/12 max-w-6xl grid gap-6 grid-cols-auto auto-rows-fr justify-center mx-auto my-8">
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Products;
