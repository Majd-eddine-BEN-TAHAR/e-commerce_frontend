import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = useStore(({ signUp }) => signUp);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline">sign up</h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">name:</label>
          <input
            required
            type="text"
            name="name"
            pattern=".{2,}"
            title="Please enter at least 2 characters."
            placeholder="enter your name"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">email:</label>
          <input
            required
            type="email"
            name="email"
            placeholder="enter your email"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="enter a password"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="sign up"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={(e) => {
            e.preventDefault();
            const validationResult = e.target.parentNode.reportValidity();
            if (validationResult) {
              signUp(name, email, password);
            }
          }}
        />
      </form>

      <p className="capitalize font-light">
        already have an account?
        <Link to="/login" className="font-medium underline hover:opacity-50">
          &nbsp; login
        </Link>
      </p>
    </section>
  );
};

export default Register;
