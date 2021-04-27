import { useEffect } from "react";
import useStore from "../../store/useStore";
import OrderRow from "../OrderRow/index";

const Orders = () => {
  const orders = useStore((state) => state.orders);
  const fetchOrders = useStore((state) => state.fetchOrders);

  useEffect(() => fetchOrders(), [fetchOrders]);

  return (
    <section className="w-full max-w-2xl   mx-auto p-4">
      <h1 className="uppercase text-5xl my-8 underline md:text-6xl md:mt-0">
        my orders
      </h1>
      <div className="max-w-xxs vsm:max-w-full overflow-auto">
        <table className=" border-2 table-auto w-full">
          <thead className="p-2">
            <tr>
              <th className="text-center p-2 font-medium border-2 td-hidden-mobile">
                ID
              </th>
              <th className="text-center  p-2 font-medium border-2">DATE</th>
              <th className="text-center  p-2 font-medium border-2">TOTAL</th>
              <th className="text-center p-2 font-medium border-2 td-hidden-mobile">
                DELIVERED
              </th>
              <th className="text-center p-2 font-medium border-2 td-hidden-mobile">
                PAID
              </th>
              <td className="text-center p-2 font-medium border-2"></td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow {...order} key={order._id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
