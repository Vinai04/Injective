import React from "react";

const Footer = () => {
  return (
    <footer
      className="max-w-10xl mx-auto -mt-36 px-4 sm:px-6 lg:px-8 h-full w-full bg-gray-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-md bg-opacity-20 shadow-md"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src="ratelock_logo.svg" className="h-12" alt="Ratelock Logo" />
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Ratelock. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
