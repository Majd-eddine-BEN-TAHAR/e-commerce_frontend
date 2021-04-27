import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "./../../../assets/images/write.svg";
import { ReactComponent as DeleteIcon } from "./../../../assets/images/delete.svg";
import { ReactComponent as TrueIcon } from "./../../../assets/images/true.svg";
import { ReactComponent as FalseIcon } from "./../../../assets/images/false.svg";
import useStore from "../../../store/useStore";

const User = ({ _id, name, role, email }) => {
  const deleteUser = useStore(({ deleteUser }) => deleteUser);

  return (
    <div className="w-full border p-2 my-2 capitalize rounded  lg:grid grid-cols-3">
      <div className="col-span-2">
        <p>
          id : &nbsp;<span className="font-bold text-sm">{_id}</span>
        </p>
        <p className="flex items-center">
          name :&nbsp;
          <span className="inline-block w-44 vsm:w-max overflow-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm">
            {name}
          </span>
        </p>
        <p className="flex items-center">
          admin : &nbsp;
          {role === "admin" ? (
            <TrueIcon className="w-4 h-4" />
          ) : (
            <FalseIcon className="w-4 h-4" />
          )}
        </p>

        <p className="flex items-center">
          email :&nbsp;
          <span className="inline-block w-44 vsm:w-max overflow-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm">
            {email}
          </span>
        </p>
      </div>

      <div className="flex justify-around py-2">
        <Link to={`/admin/users/${_id}`}>
          <EditIcon className="w-8 h-8 hover:opacity-60 cursor-pointer" />
        </Link>

        <DeleteIcon
          className="w-8 h-8 hover:opacity-60 cursor-pointer"
          onClick={() => deleteUser(_id)}
        />
      </div>
    </div>
  );
};

export default User;
