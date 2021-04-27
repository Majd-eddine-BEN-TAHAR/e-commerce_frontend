import React from "react";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <Contact />
      <p className="text-center my-6 text-gray-400">&copy; 2021 Majd-Store</p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
