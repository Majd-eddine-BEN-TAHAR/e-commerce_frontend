import Review from "./Review";

const Reviews = ({ reviews }) => {
  return (
    <div className="REVIEWS mt-4 px-2 py-4 shadow">
      <h2 className="capitalize text-2xl font-medium underline">reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => <Review {...review} key={review._id} />)
      ) : (
        <p>no reviews for this product</p>
      )}
    </div>
  );
};

export default Reviews;
