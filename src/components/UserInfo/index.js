import { useState } from "react";
import useStore from "../../store/useStore";

const UserInfo = () => {
  const userInfo = useStore(({ userInfo }) => userInfo);
  const updateProfile = useStore(({ updateProfile }) => updateProfile);

  const [name, setName] = useState(userInfo ? userInfo.name : "");
  const [email, setEmail] = useState(userInfo ? userInfo.email : "");
  const [role] = useState(userInfo ? userInfo.role : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const showModal = useStore((state) => state.showModal);

  const sendRequest = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      showModal("password and confirm password not matching");
    else if (e.target.parentNode.reportValidity())
      updateProfile(name, email, password);
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl my-8 underline md:text-6xl md:mt-0">
        account details
      </h1>
      <form action="" autoComplete="off">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">name:</label>
          <input
            required
            type="text"
            name="name"
            placeholder="enter name..."
            title="Please enter at least 2 character as a name."
            pattern="[a-z]{2,}"
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">email:</label>
          <input
            required
            type="email"
            name="email"
            placeholder="enter email..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">role:</label>
          <input
            required
            disabled
            type="text"
            name="role"
            className="cursor-not-allowed w-full bg-gray-300 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
            value={role}
            onChange={() => {}}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">
            password:
          </label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            placeholder="enter password..."
            className="w-full bg-gray-100 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none "
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
            type="password"
            name="confirmPassword"
            autoComplete="off"
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
          value="save changes"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={sendRequest}
        />
      </form>
    </section>
  );
};

export default UserInfo;
