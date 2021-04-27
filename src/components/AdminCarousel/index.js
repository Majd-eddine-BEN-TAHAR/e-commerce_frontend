import { useEffect } from "react";
import useStore from "../../store/useStore";
import { ReactComponent as DeleteIcon } from "./../../assets/images/delete.svg";
import { FileInput } from "./..";

const AdminCarousel = () => {
  const carouselProducts = useStore(({ carouselProducts }) => carouselProducts);
  const fetchCarouselProducts = useStore(
    ({ fetchCarouselProducts }) => fetchCarouselProducts
  );
  const deleteCarouselImage = useStore(
    ({ deleteCarouselImage }) => deleteCarouselImage
  );

  useEffect(() => fetchCarouselProducts(), [fetchCarouselProducts]);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl  my-8 underline md:mt-0">
        carousel products
      </h1>

      <FileInput />

      <div className="">
        {carouselProducts.map(({ _id, image_url }) => (
          <div className="relative mb-4 bg-gray-100" key={_id}>
            <DeleteIcon
              className="w-12 h-12 absolute right-4 top-4 cursor-pointer z-0 bg-gray-300 p-2 rounded hover:opacity-60"
              onClick={() => deleteCarouselImage(_id)}
            />
            <img
              src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
              alt={_id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminCarousel;
