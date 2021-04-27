import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "./../../../assets/images/delete.svg";
import { ReactComponent as EditIcon } from "./../../../assets/images/write.svg";
import useStore from "../../../store/useStore";

const AdminProduct = ({ _id, countInStock, image_url, name, price }) => {
  const deleteProduct = useStore(({ deleteProduct }) => deleteProduct);
  return (
    <section className="relative m-2 border-2 rounded p-2 sm:flex">
      <div className="">
        <img
          src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
          alt={name}
          className="sm:max-w-xxxs "
        />
      </div>

      <div className="w-full mt-4 ">
        <div className="grid grid-cols-12 overflow-hidden">
          <p className="sm:col-start-2 sm:col-end-5 whitespace-nowrap capitalize font-medium ">
            product id :
          </p>
          <p className="col-start-6 col-end-11 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
            {_id}
          </p>
        </div>

        <div className=" grid grid-cols-12 overflow-hidden ">
          <p className="sm:col-start-2 sm:col-end-5 whitespace-nowrap capitalize font-medium ">
            name :
          </p>
          <p className="col-start-6 col-end-11 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
            {name}
          </p>
        </div>

        <div className=" grid grid-cols-12 overflow-hidden ">
          <p className="sm:col-start-2 sm:col-end-5 whitespace-nowrap capitalize font-medium ">
            in stock :
          </p>
          <p className="col-start-6 col-end-11 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
            {countInStock}
          </p>
        </div>

        <div className=" grid grid-cols-12 overflow-hidden ">
          <p className="sm:col-start-2 sm:col-end-5 whitespace-nowrap capitalize font-medium ">
            price :
          </p>
          <p className="col-start-6 col-end-11 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-36 vsm:w-full">
            $&nbsp;{price}
          </p>
        </div>

        <div className="flex justify-around p-4">
          <DeleteIcon
            className="w-8 h-8 hover:opacity-30 cursor-pointer"
            onClick={() => deleteProduct(_id)}
          />
          <Link to={`/admin/products/${_id}`}>
            <EditIcon className="w-8 h-8 hover:opacity-30 cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminProduct;
