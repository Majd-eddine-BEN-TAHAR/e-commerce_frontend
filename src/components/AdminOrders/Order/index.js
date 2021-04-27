import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "./../../../assets/images/write.svg";
import { ReactComponent as TrueIcon } from "./../../../assets/images/true.svg";
import { ReactComponent as FalseIcon } from "./../../../assets/images/false.svg";
import formatDate from "./../../../utils/formatDate";

const Order = ({ _id, createdAt, delivered, payment_method }) => {
  const date = formatDate(createdAt);

  return (
    <div className="w-full border p-2 my-2 capitalize rounded  lg:grid grid-cols-3">
      <div className="col-span-2">
        <p>
          id : &nbsp;<span className="font-bold text-sm">{_id}</span>
        </p>
        <p className="flex items-center">
          payment_method :&nbsp;
          <span className="font-bold text-sm">{payment_method}</span>
        </p>
        <p className="flex items-center">
          delivered : &nbsp;
          {delivered === "yes" ? (
            <TrueIcon className="w-4 h-4" />
          ) : (
            <FalseIcon className="w-4 h-4" />
          )}
        </p>

        <p className="flex items-center">
          date :&nbsp;
          <span className="inline-block w-44 vsm:w-max overflow-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm">
            {date}
          </span>
        </p>
      </div>

      <div className="flex justify-around py-2">
        <Link to={`/admin/orders/${_id}`}>
          <EditIcon className="w-8 h-8 hover:opacity-60 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Order;
