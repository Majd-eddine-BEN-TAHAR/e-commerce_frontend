import { useParams } from "react-router-dom";
import { Reviews, AddReview, ProductInfo } from "../components";
import useStore from "../store/useStore";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = useStore(
    ({ products }) => products.filter(({ _id }) => _id === productId)[0]
  );
  const loggedIn = useStore(({ loggedIn }) => loggedIn());

  if (!product) return null;

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <ProductInfo {...product} />
      <Reviews reviews={product.reviews} />
      {loggedIn ? <AddReview productId={productId} /> : null}
    </section>
  );
};

export default SingleProduct;
