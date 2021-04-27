import { useState } from "react";

import { ReactComponent as NewsletterIcon } from "./../../../../assets/images/newsletter.svg";
import useStore from "../../../../store/useStore";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const subscribeToNewsletter = useStore(
    (state) => state.subscribeToNewsletter
  );

  const sendRequest = (e) => {
    e.preventDefault();
    if (e.target.parentNode.reportValidity()) {
      subscribeToNewsletter(email);
    }
  };

  return (
    <section className="NEWSLETTER contact-section">
      <NewsletterIcon className="contact-icon" />
      <div className="">
        <h3 className="contact-title">newsletter</h3>
        <p className="capitalize text-gray-400">sign up for our newsletter</p>
        <form action="">
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your Email..."
            className="w-full px-2 py-1 my-2 border-gray-300 border-2 rounded-sm outline-none focus:border-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full py-1 border-gray-300 border-2 rounded-sm cursor-pointer hover:bg-blue-500 transition-all hover:border-blue-500 hover:text-white"
            onClick={sendRequest}
          />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
