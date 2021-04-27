import Address from "./Address";
import CustomerService from "./CustomerService";
import Newsletter from "./Newsletter";

const Contact = () => {
  return (
    <div className="w-10/12 mx-auto my-4 lg:h-36 lg:flex lg:justify-around lg:items-start">
      <Address />
      <CustomerService />
      <Newsletter />
    </div>
  );
};

export default Contact;
