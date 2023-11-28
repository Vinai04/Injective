import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiquidityPools from "./LiquidityPools";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const lend = {
    mode: "Lending",
    desc: "Deposit assets to actively participate in earning interest on your holdings.",
  };
  const borrow = {
    mode: "Borrowing",
    desc: "Deposit collateral to borrow crypto and pay interest.",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen p-4 bg-homepage_bg bg-no-repeat bg-cover bg-center bg-fixed">
        {loading && <LoadingPage />}

        {!loading && (
          <div>
            <Navbar />
            <div className="relative overflow-hidden mt-8">
              <div className="w-full p-8 relative z-10">
                <div>
                  <h1 className="text-7xl font-bold text-white  font-poppins px-6 drop-shadow-lg">
                    <div>How Ratelock Maximizes Returns</div>
                  </h1>
                  <br></br>
                  <div className="text-2xl font-medium text-white  font-poppins px-6 drop-shadow-lg">
                    <p className="drop-shadow-lg">HOW IT WORKS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center -mt-8">
              <Link to="/lend">
                <div className="mr-8 mt-20">
                  <LiquidityPools info={lend} />
                </div>
              </Link>
              <div className="justify-center mt-20">
                <img
                  src="badge.svg"
                  alt="liquidity pools"
                  className="h-full w-full"
                />
              </div>
              <Link to="/borrow">
                <div className="ml-8 mt-20">
                  <LiquidityPools info={borrow} />
                </div>
              </Link>
            </div>
            <div className="mt-60">
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
