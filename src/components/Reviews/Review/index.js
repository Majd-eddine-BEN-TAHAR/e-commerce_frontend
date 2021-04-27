import React from "react";
import { Stars } from "../../";

const Review = ({ userId: { name }, rating, createdAt, comment }) => {
  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const reviewDate = `${year}/${month}/${day}`;

  return (
    <div className="REVIEW-INFO pl-4 mt-4 ">
      <p className="capitalize tracking-widest pb-2 text-xl">{name}</p>
      <Stars stars={rating} className="" />
      <p className="mt-2">{reviewDate}</p>
      <p className="pl-4 mt-2 italic text-gray-600">{comment}</p>
    </div>
  );
};

export default Review;
