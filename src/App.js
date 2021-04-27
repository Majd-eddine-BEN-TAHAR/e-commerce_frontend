import { useEffect, useCallback } from "react";
import {
  Home,
  Error,
  SingleProduct,
  Login,
  Register,
  ResetPassword,
  ChangePassword,
  ContactUs,
  Policy,
  Report,
  Checkout,
  Dashboard,
  CarouselProduct,
  AdminPanel,
} from "./pages";

import {
  Header,
  Footer,
  ErrorModal,
  Cart,
  Spinner,
  ProtectedUserRoute,
  ProtectedAdminRoute,
} from "./components";

import { Switch, Route } from "react-router";
import useStore from "./store/useStore";
import dotenv from "dotenv";
import { useHistory } from "react-router-dom";

dotenv.config();

function App() {
  const history = useHistory();

  const addProductsToCart = useStore(
    useCallback(({ addProductsToCart }) => addProductsToCart, [])
  );
  const setUserInfo = useStore(
    useCallback(({ setUserInfo }) => setUserInfo, [])
  );

  const cartProducts = useStore(({ cartProducts }) => cartProducts);
  const userInfo = useStore(({ userInfo }) => userInfo);
  const loggedIn = useStore(({ loggedIn }) => loggedIn());
  const role = useStore(({ userRole }) => userRole());

  let cartProductsStorage;
  try {
    cartProductsStorage = JSON.parse(localStorage.getItem("cartProducts"));
  } catch (error) {
    localStorage.setItem("cartProducts", "[]");
    cartProductsStorage = [];
  }

  let userInfoStorage;
  try {
    userInfoStorage = JSON.parse(localStorage.getItem("userInfo"));
  } catch (error) {
    localStorage.setItem("userInfo", "{}");
    userInfoStorage = {};
  }

  useEffect(() => {
    if (
      cartProductsStorage &&
      cartProductsStorage.length > 0 &&
      cartProducts.length === 0
    ) {
      addProductsToCart(cartProductsStorage);
    }
  }, [addProductsToCart, cartProductsStorage, cartProducts]);

  useEffect(() => {
    if (
      userInfoStorage &&
      Object.entries(userInfoStorage).length > 0 &&
      Object.entries(userInfo).length === 0
    ) {
      setUserInfo(userInfoStorage);
    }
  }, [setUserInfo, userInfoStorage, userInfo]);

  useEffect(() => {
    if (history.location.pathname.split("/")[1] === "reset-password")
      history.push(history.location.pathname);
    else if (userInfo) history.push("/");
  }, [history, userInfo]);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1">
        {(cartProductsStorage.length > 0 && cartProducts.length === 0) ||
        (Object.entries(userInfoStorage).length > 0 && userInfo === null) ? (
          <Spinner />
        ) : (
          <>
            <Cart />
            <ErrorModal />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/policy" component={Policy} />
              <Route path="/report" component={Report} />
              <Route path="/reset-password" component={ResetPassword} exact />
              <Route path="/reset-password/:token" component={ChangePassword} />
              <Route path="/products/search" component={Home} />
              <Route path="/products/:productId" component={SingleProduct} />
              <Route
                path="/carousel/:carouselProductId"
                component={CarouselProduct}
              />

              <ProtectedUserRoute
                path="/checkout"
                loggedIn={loggedIn}
                component={Checkout}
              />
              <ProtectedUserRoute
                path="/dashboard"
                loggedIn={loggedIn}
                component={Dashboard}
              />

              <ProtectedAdminRoute
                path="/admin"
                loggedIn={loggedIn}
                role={role}
                component={AdminPanel}
              />

              <Route path="*" component={Error} />
            </Switch>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
