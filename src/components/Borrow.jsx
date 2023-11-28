import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

const Borrow = () => {
  const eth = { name: "ETH", rate: "3.06", img: "ethereum.svg", mode: "LOW" };
  const dai = { name: "DAI", rate: "4.32", img: "dai.svg", mode: "LOW" };
  const usdc = { name: "USDC", rate: "4.89", img: "usdc.svg", mode: "LOW" };
  const wbtc = { name: "WBTC", rate: "2.00", img: "wbtc.svg", mode: "LOW" };

  return (
    <>
      <div className="min-h-screen p-4 bg-homepage_bg bg-no-repeat bg-cover bg-center bg-fixed">
        <Navbar />
        <div className="relative overflow-hidden mt-6">
          <div className="w-full p-8 relative z-10">
            <div>
              <h1 className="text-7xl font-bold text-white  font-poppins px-6 drop-shadow-lg">
                <div className="drop-shadow-lg">Fixed Rate Borrowing</div>
              </h1>
              <br></br>
              <div className="text-2xl font-medium text-white  font-poppins px-6 drop-shadow-lg">
                <p className="drop-shadow-lg">
                  Fix your rate and never worry about spiking borrowing costs
                  again.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="m-8 flex">
            <Card info={eth} />
          </div>
          <div className="m-8 flex">
            <Card info={dai} />
          </div>
          <div className="m-8 flex">
            <Card info={usdc} />
          </div>
          <div className="m-8 flex">
            <Card info={wbtc} />
          </div>
        </div>
        <div className="mt-60">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Borrow;
