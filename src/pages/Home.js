import { useEffect } from "react";
import { Carousel, Products } from "./../components";
import { useHistory } from "react-router-dom";
import useStore from "./../store/useStore";

const Home = () => {
  const fetchProducts = useStore(({ fetchProducts }) => fetchProducts);
  const { location } = useHistory();
  const urlParams = new URLSearchParams(location.search);
  const keyword = urlParams.get("keyword");

  useEffect(() => {
    fetchProducts(keyword);
  }, [fetchProducts, keyword]);

  if (keyword) {
    return (
      <div className="max-w-7xl mx-auto">
        <Products />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Carousel />
      <h2 className="text-3xl font-bold capitalize ml-8 text-gray-900">
        latest products
      </h2>
      <Products />
    </div>
  );
};

export default Home;
