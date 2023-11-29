import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BorrowOrderForm from "./BorrowOrderForm";
import LoadingPage from "./LoadingPage";

const BorrowOrder = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let { id } = useParams();

  return (
    <>
      <div className="min-h-screen p-4 bg-homepage_bg bg-no-repeat bg-cover bg-center bg-fixed">
        {loading && <LoadingPage />}

        {!loading && (
          <>
            <div>
              <Navbar />
            </div>

            <div className="flex">
              <div className="w-1/2 px-20">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                  <div className="flex items-center">
                    <img
                      className="w-24 h-24 me-2 rounded-full"
                      src={`../../public/${id}icon.svg`}
                      alt="Jese image"
                    />
                    <h1 className="text-7xl font-bold text-white font-poppins px-6 drop-shadow-lg min-w-full shadow-black">
                      Borrow {id}
                    </h1>
                  </div>
                  <h1 className="text-6xl text-white font-semibold">
                    FIXED APY
                  </h1>
                  <img
                    className="-mt-28 w-full rounded-3xl"
                    src={`../../public/yield_curve.png`}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-1/2">
                <div className="mt-16">
                  <BorrowOrderForm id={id} />
                </div>
              </div>
            </div>

            <div>
              <div className="mt-64">
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BorrowOrder;
