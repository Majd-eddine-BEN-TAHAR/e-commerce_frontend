import { useEffect } from "react";
import useStore from "../../store/useStore";
import Order from "./Order";

const AdminOrders = () => {
  const orders = useStore((state) => state.adminOrders);
  const fetchAdminOrders = useStore(({ fetchAdminOrders }) => fetchAdminOrders);

  useEffect(() => fetchAdminOrders(), [fetchAdminOrders]);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline md:mt-0">orders</h1>
      <div className="USERS">
        {orders.length !== 0 ? (
          orders.map((order) => <Order key={order._id} {...order} />)
        ) : (
          <h1> you don't have orders </h1>
        )}
      </div>
    </section>
  );
};

export default AdminOrders;
