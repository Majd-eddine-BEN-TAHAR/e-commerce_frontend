import { useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../store/useStore";

const ChangePassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const changePassword = useStore(({ changePassword }) => changePassword);

  const sendRequest = (e) => {
    e.preventDefault();
    const validationResult = e.target.parentNode.reportValidity();
    if (validationResult) {
      changePassword(token, password, confirmPassword);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">change password</h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4">
          <label className="capitalize text-2xl tracking-widest">
            password:
          </label>
          <input
            required
            type="password"
            name="password"
            pattern=".{4,}"
            title="please enter at least 4 characters!"
            placeholder="enter password..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">
            confirm password:
          </label>
          <input
            required
            type="password"
            name="confirmPassword"
            pattern=".{4,}"
            title="please enter at least 4 characters!"
            placeholder="enter password again..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="change password"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={sendRequest}
        />
      </form>
    </section>
  );
};

export default ChangePassword;
