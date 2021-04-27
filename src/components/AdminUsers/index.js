import { useEffect } from "react";
import useStore from "../../store/useStore";
import User from "./User";

const AdminUsers = () => {
  const users = useStore((state) => state.adminUsers);
  const fetchUsers = useStore(({ fetchUsers }) => fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <h1 className="uppercase text-6xl my-8 underline md:mt-0">users</h1>
      <div className="USERS">
        {users.map((user) => (
          <User key={user._id} {...user} />
        ))}
      </div>
    </section>
  );
};

export default AdminUsers;
