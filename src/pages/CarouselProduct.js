import { useParams } from "react-router-dom";
import useStore from "../store/useStore";

const CarouselProduct = () => {
  const { carouselProductId } = useParams();

  const carouselProduct = useStore(
    ({ carouselProducts }) =>
      carouselProducts.filter((prod) => prod._id === carouselProductId)[0]
  );

  if (!carouselProduct) return null;

  return (
    <div>
      <img
        src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${carouselProduct.image_url}`}
        alt={carouselProduct._id}
        className="w-full max-w-xl mx-auto my-4 p-4"
      />
    </div>
  );
};

export default CarouselProduct;
