import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const requestPasswordReset = useStore(
    ({ requestPasswordReset }) => requestPasswordReset
  );

  const sendRequest = (e) => {
    e.preventDefault();
    const validationResult = e.target.parentNode.reportValidity();
    if (validationResult) {
      requestPasswordReset(email);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl md:text-6xl my-8 underline">
        reset password
      </h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">email:</label>
          <input
            required
            type="text"
            name="email"
            placeholder="enter your email..."
            className="w-full bg-gray-100 py-2 px-4  mt-2 border-2 focus:border-gray-400 outline-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          value="send email"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={sendRequest}
        />
      </form>
      <p className="capitalize font-light">
        back to
        <Link to="/register" className="font-medium underline hover:opacity-50">
          &nbsp;login
        </Link>
      </p>
    </section>
  );
};

export default ResetPassword;
