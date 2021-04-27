import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!loggedIn) return <Redirect to="/login" />;
        return <Component />;
      }}
    />
  );
};

export default ProtectedRoute;
