import { useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../../store/useStore";

const AdminEditUser = () => {
  const { userId } = useParams();
  const user = useStore(
    (state) => state.adminUsers.filter((user) => user._id === userId)[0]
  );
  const updateUserRole = useStore(({ updateUserRole }) => updateUserRole);

  const [role, setRole] = useState(() =>
    user.role === "admin" ? true : false
  );

  const submitData = (e) => {
    e.preventDefault();
    updateUserRole(userId, role ? "admin" : "user");
  };

  if (!user)
    return <p className="uppercase text-5xl my-8 md:mt-0">user don't exist</p>;

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-5xl md:text-6xl my-8 underline md:mt-0">
        edit user
      </h1>
      <form action="" className="mt-10 mb-5">
        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">_id:</label>
          <input
            required
            disabled
            type="text"
            name="_id"
            className="w-full bg-gray-200 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none cursor-not-allowed "
            value={user._id}
            onChange={() => {}}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">name:</label>
          <input
            required
            type="text"
            name="name"
            className="w-full bg-gray-200 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none cursor-not-allowed "
            value={user.name}
            onChange={() => {}}
          />
        </div>

        <div className="INPUT-GROUP flex flex-col my-4 ">
          <label className="capitalize text-2xl tracking-widest">email:</label>
          <input
            required
            type="text"
            name="email"
            className="w-full bg-gray-200 py-2 px-4 capitalize mt-2 border-2 focus:border-gray-400 outline-none cursor-not-allowed "
            value={user.email}
            onChange={() => {}}
          />
        </div>

        <div className="INPUT-GROUP flex my-4 ">
          <input
            required
            type="checkbox"
            name=""
            className=""
            checked={role}
            onChange={(e) => {
              setRole(e.target.checked);
            }}
          />
          <label className="ml-4 capitalize text-xl tracking-widest">
            isAdmin
          </label>
        </div>
        <input
          type="submit"
          value="update"
          className="text-white font-medium block uppercase py-2 px-4 mt-6 border-none cursor-pointer bg-black hover:bg-gray-700"
          onClick={submitData}
        />
      </form>
    </section>
  );
};

export default AdminEditUser;
