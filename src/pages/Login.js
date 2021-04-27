import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useStore(({ signIn }) => signIn);
  const setUserInfo = useStore(({ setUserInfo }) => setUserInfo);

  const sendRequest = (e) => {
    e.preventDefault();
    const validationResult = e.target.parentNode.reportValidity();
    if (validationResult) {
      signIn(email, password);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">sign in</h1>
      <form className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">email:</label>
          <input
            required
            type="email"
            name="email"
            placeholder="enter email..."
            className="w-full bg-gray-100 py-2 px-4 mt-2 border-2 focus:border-gray-400 outline-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="INPUT-GROUP flex flex-col my-4">
          <label className="capitalize text-2xl tracking-widest">
            password:
          </label>
          <input
            required
            type="password"
            name="password"
            pattern=".{8,}"
            title="Please enter at least 8 characters."
            placeholder="enter password..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="sign in"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={sendRequest}
        />
      </form>
      <p className="capitalize font-light">
        New Customer?
        <Link to="/register" className="font-medium underline hover:opacity-50">
          &nbsp;register
        </Link>
      </p>
      <p className="capitalize font-light mt-4">
        Forgot Password?
        <Link
          to="/reset-password"
          className="font-medium underline hover:opacity-50"
        >
          &nbsp;reset password
        </Link>
      </p>
    </section>
  );
};

export default Login;
