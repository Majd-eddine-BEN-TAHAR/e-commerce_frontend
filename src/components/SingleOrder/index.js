import useStore from "../../store/useStore";
import { useParams } from "react-router-dom";
import formatDate from "./../../utils/formatDate";
import { SingleOrderProduct } from "../";

const SingleOrder = () => {
  const { orderId } = useParams();
  const order = useStore(
    (state) => state.orders.filter(({ _id }) => _id === orderId)[0]
  );

  if (!order) return <p>order don't exist</p>;

  const { createdAt, products, totalAmount } = order;
  const date = formatDate(createdAt);

  return (
    <section className=" w-full max-w-2xl mx-auto p-4">
      <h2 className="capitalize text-2xl font-bold underline mb-8">
        order details
      </h2>

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          order number :
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {orderId}
        </p>
      </div>

      <div className="flex">
        <p className="font-medium capitalize flex-1">order date :</p>
        <p className="font-bold capitalize flex-1">{date}</p>
      </div>

      <section className="ORDERS-ITEMS">
        <h2 className="mt-16 capitalize text-2xl font-bold underline">
          order items
        </h2>

        <div className="ORDER-ITEMS">
          {products.map((product) => {
            return <SingleOrderProduct {...product} key={product._id} />;
          })}
        </div>
      </section>

      <section className="ORDER-SUMMARY border mt-16 p-4">
        <h2 className="capitalize text-2xl font-bold underline">
          order summary
        </h2>

        <div className="SUBTOTAL mt-4 flex justify-between">
          <p className="font-medium capitalize">subtotal</p>
          <p className="font-bold">$ {totalAmount}</p>
        </div>

        <div className="TAX flex justify-between">
          <p className="font-medium capitalize">tax </p>
          <p className="font-bold">$ 0</p>
        </div>

        <hr className="my-16" />

        <div className="TOTAL flex justify-between">
          <p className="font-medium capitalize">total </p>
          <p className="font-bold">$ {totalAmount}</p>
        </div>
      </section>
    </section>
  );
};

export default SingleOrder;
