import { ReactComponent as AddressIcon } from "./../../../../assets/images/address.svg";

const Address = () => {
  return (
    <section className="ADDRESS contact-section">
      <AddressIcon className="contact-icon" />
      <div className="">
        <h3 className="contact-title">address</h3>
        <p className="capitalize">
          3 rue de maroc nouvelle ariana, ariana 2080
        </p>
      </div>
    </section>
  );
};

export default Address;
