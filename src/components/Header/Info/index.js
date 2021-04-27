import { FaTruck, FaCreditCard, FaPhoneAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="SHIPPING bg-gray-900 p-4  mx-auto flex justify-around items-center capitalize">
      <div className=" text-white hidden lg:flex lg:justify-center lg:items-center">
        <FaTruck className="mr-2" />
        <p>free shipping</p>
      </div>

      <div className="CREDIT-CARD text-white hidden lg:flex lg:justify-center lg:items-center ">
        <FaCreditCard className="mr-2" />
        <p>e-dinar</p>
      </div>

      <div className="CALL-US text-white flex justify-center items-center">
        <FaPhoneAlt className="mr-2" />
        <p>Need advice? Call us 25 953 297</p>
      </div>
    </div>
  );
};

export default Info;
