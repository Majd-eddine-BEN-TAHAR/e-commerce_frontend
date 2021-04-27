import { Link } from "react-router-dom";
import { ReactComponent as CustomerServiceIcon } from "./../../../../assets/images/customer-service.svg";

const CustomerService = () => {
  return (
    <section className="CUSTOMER-SERVICE contact-section lg:border-l-4 lg:border-r-4">
      <CustomerServiceIcon className="contact-icon" />
      <div className="flex flex-col">
        <h3 className="contact-title">customer service</h3>
        <Link to="/contact" className="link">
          contact us
        </Link>

        <Link to="/policy" className="link">
          policy
        </Link>

        <Link to="/report" className="link">
          report a product
        </Link>
      </div>
    </section>
  );
};

export default CustomerService;
