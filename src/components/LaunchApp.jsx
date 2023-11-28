import React from "react";
import LaunchPageNav from "./LaunchPageNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const LaunchApp = () => {
  return (
    <>
      <div className="min-h-screen p-4 bg-launchpage_bg bg-no-repeat bg-cover bg-center">
        <div>
          <LaunchPageNav />
        </div>
        <div className="relative min-h-screen overflow-hidden my-16">
          <div className="max-w-screen-md w-full p-8 relative z-10">
            <div>
              <h1 className="text-7xl font-bold text-white font-poppins px-6 drop-shadow-lg">
                <div className="drop-shadow-lg">Maximum Returns.</div>
              </h1>
              <br></br>
              <h1 className="text-7xl font-bold text-white font-poppins px-6 drop-shadow-lg">
                <div className="drop-shadow-lg">Minimum Risk.</div>
              </h1>
              <br></br>
              <p className="text-2xl font-medium text-white  font-poppins px-6">
                Lend, borrow, and earn leveraged yield with DeFi's leading fixed
                rate lending protocol.
              </p>
            </div>
            <div className="flex mt-12 px-6 py-6">
              <Link to="/home">
                <button
                  type="button"
                  className="text-white bg-darkblue hover:bg-black font-medium rounded-lg text-2xl px-12 py-4 me-2 mb-2 focus:outline-none"
                >
                  Launch App
                </button>
              </Link>
              <button
                type="button"
                className="text-white bg-black hover:bg-darkblue ring-2 ring-darkblue font-medium rounded-lg text-2xl px-6 py-4 ml-6 me-2 mb-2 focus:outline-none"
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
        <Footer />
      </div>
    </>
  );
};

export default LaunchApp;
