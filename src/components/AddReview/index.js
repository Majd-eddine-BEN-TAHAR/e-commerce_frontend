import { useState } from "react";
import useStore from "../../store/useStore";

const AddReview = ({ productId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const addReview = useStore((state) => state.addReview);

  const sendRequest = (e) => {
    e.preventDefault();
    if (e.target.parentNode.reportValidity()) {
      addReview(productId, rating, comment);
    }
  };

  return (
    <section className="mt-4 capitalize shadow py-4 px-2">
      <h2 className="text-2xl font-medium underline">add a customer review</h2>
      <form action="" className="">
        <div className="INPUT-GROUP mt-2">
          <label className="capitalize text-lg">rating</label>
          <select
            name="rating"
            className="w-full border-2 h-7 focus:border-gray-400"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="INPUT-GROUP mt-2">
          <label className="capitalize ">comment</label>
          <textarea
            required
            name="comment"
            className="w-full p-2 border-2 outline-none focus:border-gray-300"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="submit"
          className="block mt-2 px-4 py-1 cursor-pointer capitalize  bg-blue-500 text-white hover:bg-blue-300 font-medium"
          onClick={sendRequest}
        />
      </form>
    </section>
  );
};

export default AddReview;
