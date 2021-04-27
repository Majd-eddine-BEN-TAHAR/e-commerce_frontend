import React from "react";
import { ReactComponent as GrayStars } from "./../../assets/images/grey-stars.svg";
import { ReactComponent as YellowStars } from "./../../assets/images/yellow-stars.svg";

const Stars = ({ stars }) => {
  return (
    <div className="relative">
      <GrayStars />
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: (stars * 100) / 5 }}
      >
        <YellowStars />
      </div>
    </div>
  );
};

export default Stars;
