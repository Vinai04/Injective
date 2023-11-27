import React from "react";

const LaunchApp = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden my-16">
        <div className="max-w-screen-md w-full p-8 relative z-10">
          <div>
            <h1 className="text-7xl font-bold text-white font-poppins px-6">
              Maximum Returns.
            </h1>
            <br></br>
            <h1 className="text-7xl font-bold text-white  font-poppins px-6">
              Minimum Risk.
            </h1>
            <br></br>
            <p className="text-2xl font-medium text-white  font-poppins px-6">
              Lend, borrow, and earn leveraged yield with DeFi's leading fixed
              rate lending protocol.
            </p>
          </div>
          <div className="flex mt-12 px-6 py-6">
            <button
              type="button"
              className="text-white bg-darkblue hover:bg-black focus:ring-4 focus:ring-darkblue font-medium rounded-lg text-2xl px-12 py-4 me-2 mb-2 focus:outline-none"
            >
              Launch App
            </button>
            <button
              type="button"
              className="text-white bg-black hover:bg-darkblue ring-2 ring-darkblue focus:ring-4 focus:ring-darkblue font-medium rounded-lg text-2xl px-6 py-4 ml-6 me-2 mb-2 focus:outline-none"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 z-0 w-full h-full">
        <div className="absolute bottom-28 left-12 w-96 h-96 bg-skyblue rounded-full filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-36 left-72 w-96 h-96 bg-lightpink rounded-full filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-48 w-96 h-96 bg-yellow rounded-full filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <footer className="bg-white rounded-lg shadow-2xl dark:bg-violet m-4 -mt-40 mb-1 shadow-opacity-100 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a>
              <img src="ratelock_logo.svg" className="h-12" alt="Flowbite Logo" />
            </a>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Ratelock. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LaunchApp;
