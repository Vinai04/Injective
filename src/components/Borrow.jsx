import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import { WalletContext } from "../Contexts/WalletContext";

const Borrow = () => {

  const { ETH } = useContext(WalletContext)
  const { DAI } = useContext(WalletContext)
  const { USDC } = useContext(WalletContext)
  const { WBTC } = useContext(WalletContext)

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
            <div className="relative overflow-hidden mt-6">
              <div className="w-full p-8 relative z-10">
                <div>
                  <h1 className="text-7xl font-bold text-white  font-poppins px-6 drop-shadow-lg">
                    <div className="drop-shadow-lg">Fixed Rate Borrowing</div>
                  </h1>
                  <br></br>
                  <div className="text-2xl font-medium text-white  font-poppins px-6 drop-shadow-lg">
                    <p className="drop-shadow-lg">
                      Fix your rate and never worry about spiking borrowing
                      costs again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="m-8 flex">
                <Card info={ETH} />
              </div>
              <div className="m-8 flex">
                <Card info={DAI} />
              </div>
              <div className="m-8 flex">
                <Card info={USDC} />
              </div>
              <div className="m-8 flex">
                <Card info={WBTC} />
              </div>
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

export default Borrow;
