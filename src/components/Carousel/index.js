import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import useStore from "../../store/useStore";

const Carousel = () => {
  const carouselProducts = useStore(({ carouselProducts }) => carouselProducts);
  const fetchCarouselProducts = useStore(
    ({ fetchCarouselProducts }) => fetchCarouselProducts
  );

  useEffect(() => fetchCarouselProducts(), [fetchCarouselProducts]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  if (carouselProducts.length === 0) return null;

  return (
    <Slider
      {...settings}
      className="mx-auto my-4  max-w-5xl  h-112 p-8 relative overflow-hidden"
    >
      {carouselProducts.map(({ image_url, _id }) => (
        <Link to={`/carousel/${_id}`} key={`${_id}`} className="carousel-image">
          <img
            src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
            alt={_id}
            className="carousel-image"
          />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
