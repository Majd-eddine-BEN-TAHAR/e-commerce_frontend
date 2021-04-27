import { Switch, Route, NavLink } from "react-router-dom";
import { UserInfo, Orders, SingleOrder } from "./../components";

const Dashboard = () => {
  return (
    <div className="p-4 grid md:grid-cols-3 md:mt-8 w-full max-w-4xl mx-auto">
      <section className="">
        <h2 className="capitalize text-3xl font-medium border-2 p-2 border-b-0">
          account
        </h2>
        <div className="flex flex-col ">
          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 p-2 capitalize border-b-0"
            to="/dashboard"
            exact
          >
            account details
          </NavLink>

          <NavLink
            activeClassName="bg-gray-200 font-medium tracking-widest"
            className="border-2 p-2 capitalize "
            to="/dashboard/orders"
          >
            my orders
          </NavLink>
        </div>
      </section>

      <div className="w-full  mt-8 md:mt-0  md:ml-4 md:col-span-2">
        <Switch>
          <Route path="/dashboard" component={UserInfo} exact />
          <Route path="/dashboard/orders" component={Orders} exact />
          <Route path="/dashboard/orders/:orderId" component={SingleOrder} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
