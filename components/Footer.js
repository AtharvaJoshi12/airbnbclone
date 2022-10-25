import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600  text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Trust & Safety</p>
        <p>Help Center</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
    </div>
  );
};

export default Footer;
