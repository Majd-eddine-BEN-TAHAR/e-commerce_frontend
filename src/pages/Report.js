import { useState } from "react";
import useStore from "../store/useStore";

const Report = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const reportProduct = useStore((state) => state.reportProduct);

  const sendRequest = (e) => {
    e.preventDefault();
    if (e.target.parentNode.reportValidity()) {
      reportProduct(name, message);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">report a product</h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4">
          <label className="capitalize text-2xl tracking-widest">
            product name :
          </label>
          <input
            required
            type="text"
            name="text"
            pattern=".{2,}"
            title="Please enter at least 2 characters."
            placeholder="enter product name..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4">
          <label className="capitalize text-2xl tracking-widest">
            the problem :
          </label>
          <textarea
            required
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
            placeholder="please describe the problem"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          value="submit"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={sendRequest}
        />
      </form>
    </section>
  );
};

export default Report;
