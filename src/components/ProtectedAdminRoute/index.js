import { Redirect, Route } from "react-router-dom";

const ProtectedAdminRoute = ({
  component: Component,
  loggedIn,
  role,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (loggedIn && role === "admin") return <Component />;
        return <Redirect to="/register" />;
      }}
    />
  );
};

export default ProtectedAdminRoute;
