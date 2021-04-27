import React from "react";
import { Link } from "react-router-dom";
import formatDate from "./../../utils/formatDate";

const OrderRow = ({ _id, totalAmount, delivered, paid, createdAt }) => {
  const date = formatDate(createdAt);

  return (
    <tr>
      <td className="italic p-1 m-1 border-2 td-hidden-mobile overflow-auto">
        {_id.substring(18)}...
      </td>
      <td className="italic p-1 m-1 border-2 ">{date}</td>
      <td className="italic p-1 m-1 border-2 ">$ {totalAmount}</td>
      <td className="italic p-1 m-1 border-2 td-hidden-mobile">{delivered}</td>
      <td className="italic p-1 m-1 border-2 td-hidden-mobile">{paid}</td>
      <td className="italic p-1 m-1 border-2 w-10">
        <Link to={`/dashboard/orders/${_id}`}>
          <button className="p-1 m-1 bg-gray-200 rounded capitalize hover:bg-gray-100">
            details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
