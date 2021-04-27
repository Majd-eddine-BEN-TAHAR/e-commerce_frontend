import { useState } from "react";
import { CheckoutProducts } from "../components";
import useStore from "../store/useStore";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const totalPrice = useStore((state) => state.totalPrice());
  const placeOrder = useStore(({ placeOrder }) => placeOrder);

  const sendRequest = (e) => {
    e.preventDefault();
    const validationResult = e.target.parentNode.reportValidity();
    if (validationResult) {
      const result = placeOrder(
        paymentMethod,
        address,
        city,
        postalCode,
        country
      );

      if (result) {
        history.push("/");
      }
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">place order</h1>
      <div className="pl-4">
        <form action="">
          <div className="">
            <h2 className="text-4xl capitalize">1. shipping</h2>
            <div className="pl-4 py-4">
              <label className="capitalize text-xl tracking-widest">
                address :
              </label>
              <input
                required
                type="text"
                placeholder="enter address"
                className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </div>
            <div className="pl-4 py-4">
              <label className="capitalize text-xl tracking-widest">
                city :
              </label>
              <input
                required
                className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
                type="text"
                placeholder="enter city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
              />
            </div>
            <div className="pl-4 py-4">
              <label className="capitalize text-xl tracking-widest">
                postal code :
              </label>
              <input
                required
                className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
                type="number"
                name="postal code"
                placeholder="enter postal code"
                onChange={(e) => {
                  setPostalCode(e.target.value);
                }}
                value={postalCode}
              />
            </div>
            <div className="pl-4 py-4">
              <label className="capitalize text-xl tracking-widest">
                country :
              </label>
              <input
                required
                className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
                type="text"
                placeholder="enter country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                value={country}
              />
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-4xl capitalize">2. payment method</h2>
            <div className="pl-4 py-4">
              <div className="">
                <input
                  id="Cash"
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                />
                <label
                  htmlFor="cash"
                  className="capitalize text-xl tracking-widest pl-4 "
                >
                  cash
                </label>
              </div>

              <div className="">
                <input
                  id="Paypal"
                  type="radio"
                  name="payment"
                  value="Paypal"
                  checked={paymentMethod === "Paypal"}
                  disabled
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                />
                <label
                  className="capitalize text-xl tracking-widest pl-4 text-gray-400"
                  htmlFor="Paypal"
                >
                  paypal (not supported yet)
                </label>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-4xl capitalize">3. products</h2>
          </div>
          <CheckoutProducts />
          <div className="mt-8 flex justify-around">
            <p className="capitalize text-3xl font-medium">total </p>
            <p className="capitalize text-3xl font-medium underline">
              $ {totalPrice}
            </p>
          </div>

          <input
            type="submit"
            value="place order"
            className="w-full text-white font-medium block  uppercase py-2 px-4  my-10 border-none cursor-pointer bg-black hover:bg-gray-700"
            onClick={sendRequest}
          />
        </form>
      </div>
    </section>
  );
};

export default Checkout;
