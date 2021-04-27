import { useState } from "react";
import { SingleOrderProduct } from "../";
import { useParams } from "react-router-dom";
import useStore from "../../store/useStore";
import formatDate from "./../../utils/formatDate";

const AdminEditOrder = () => {
  const { orderId } = useParams();
  const showModal = useStore((state) => state.showModal);
  const order = useStore(
    (state) => state.adminOrders.filter((order) => order._id === orderId)[0]
  );

  const updateUserOrder = useStore(({ updateUserOrder }) => updateUserOrder);

  const [delivered, setDelivered] = useState(() => {
    if (!order) return null;
    return order.delivered === "yes" ? true : false;
  });

  if (!order) {
    showModal("order does not exist!!!");
    return <h1 className="text-red-500 text-2xl">order does not exist!!!</h1>;
  }

  const date = formatDate(order.createdAt);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl md:text-6xl my-8 underline md:mt-0">
        edit order
      </h1>
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

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          user id :
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {order.userId}
        </p>
      </div>

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          address :
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {order.shipping_address}
        </p>
      </div>

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          payment type:
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {order.payment_method}
        </p>
      </div>

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          paid :
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {order.paid}
        </p>
      </div>

      <div className=" flex overflow-hidden">
        <p className="whitespace-nowrap capitalize font-medium flex-1">
          delivered :
        </p>
        <p className="flex-1 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
          {order.delivered}
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
          {order.products.map((product) => {
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
          <p className="font-bold">$ {order.totalAmount}</p>
        </div>

        <div className="TAX flex justify-between">
          <p className="font-medium capitalize">tax </p>
          <p className="font-bold">$ 0</p>
        </div>

        <hr className="my-16" />

        <div className="TOTAL flex justify-between">
          <p className="font-medium capitalize">total </p>
          <p className="font-bold">$ {order.totalAmount}</p>
        </div>
      </section>

      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex my-4 ">
          <input
            required
            type="checkbox"
            name=""
            className=""
            checked={delivered}
            onChange={(e) => {
              setDelivered(e.target.checked);
            }}
          />
          <label className="ml-4 capitalize text-xl tracking-widest">
            delivered
          </label>
        </div>
        <input
          type="submit"
          value="update"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={(e) => {
            e.preventDefault();
            updateUserOrder(orderId, delivered ? "yes" : "no");
          }}
        />
      </form>
    </section>
  );
};

export default AdminEditOrder;
