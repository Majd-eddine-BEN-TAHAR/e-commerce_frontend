import { Switch, Route, NavLink } from "react-router-dom";
import {
  AdminUsers,
  AdminEditUser,
  AdminOrders,
  AdminEditOrder,
  AdminCarousel,
  AdminEditProduct,
  AdminProducts,
  AdminCreateProduct,
} from "./../components";

const AdminPanel = () => {
  return (
    <div className="p-4 grid md:grid-cols-3 md:mt-8 w-full max-w-4xl mx-auto">
      <section className="">
        <h2 className="capitalize text-3xl font-medium border-2 p-2 border-b-0">
          admin panel
        </h2>
        <div className="flex flex-col ">
          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 border-b-0 p-2 capitalize "
            to="/admin/products"
          >
            products
          </NavLink>
          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 border-b-0 p-2 capitalize "
            to="/admin/users"
          >
            users
          </NavLink>

          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 border-b-0 p-2 capitalize "
            to="/admin/orders"
          >
            orders
          </NavLink>

          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 p-2 capitalize "
            to="/admin/carousel"
          >
            carousel products
          </NavLink>
        </div>
      </section>

      <div className="w-full  mt-8 md:mt-0  md:ml-4 md:col-span-2">
        <Switch>
          <Route path="/admin/users" component={AdminUsers} exact />
          <Route path="/admin/users/:userId" component={AdminEditUser} />
          <Route path="/admin/orders" component={AdminOrders} exact />
          <Route path="/admin/orders/:orderId" component={AdminEditOrder} />
          <Route
            path="/admin/products/product"
            component={AdminCreateProduct}
          />
          <Route path="/admin/products" component={AdminProducts} exact />
          <Route
            path="/admin/products/:productId"
            component={AdminEditProduct}
          />
          <Route path="/admin/carousel" component={AdminCarousel} exact />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPanel;
