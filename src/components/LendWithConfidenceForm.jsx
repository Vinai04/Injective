import React from "react";
import { WalletContext } from "../Contexts/WalletContext";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const LendWithConfidenceForm = (props) => {
  const { connected } = useContext(WalletContext);
  const { setConnected } = useContext(WalletContext);
  const [isDropdownOpenAmount, setIsDropdownOpenAmount] = useState(false);
  const [optionAmount, setOptionAmount] = useState(props.id);
  const { ETH, DAI, USDC, WBTC } = useContext(WalletContext);
  const [page, setPage] = useState(props.id);

  const toggleDropdownAmount = () => {
    setIsDropdownOpenAmount(!isDropdownOpenAmount);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
  };

  const handleDisabledButton = (event) => {
    event.preventDefault();
    toast.error("Wallet not Connected!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  let selectedCrypto = null;

  switch (optionAmount) {
    case "ETH":
      selectedCrypto = ETH;
      break;
    case "DAI":
      selectedCrypto = DAI;
      break;
    case "USDC":
      selectedCrypto = USDC;
      break;
    case "WBTC":
      selectedCrypto = WBTC;
      break;
    default:
      break;
  }

  if (!selectedCrypto) {
    return null;
  }

  useEffect(() => {
    if(page !== optionAmount){
      window.location.href = `/lend/${page}`;}
  }, [page]);

  return (
    <div>
      <form
        onSubmit={connected ? handleFormSubmit : handleDisabledButton}
        className="max-w-fit mx-auto mr-16 bg-white px-16 py-16 rounded-2xl shadow-black shadow-md"
      >
        <div className="mb-12">
          <div className="-mb-3">
            <span className="text-4xl text-gray-900 font-semibold">
              Lend With Confidence
            </span>
          </div>
          <br></br>
          <span className="text-xl text-gray-400 font-medium">
            Lock in a fixed interest rate today. Fixed rates guarantee your APY.
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 text-lg font-medium text-gray-700 "
          >
            1. Select a maturity & fix your rate
          </label>
          <div className="inline-flex rounded-md shadow-sm mb-4" role="group">
            
            {JSON.parse(selectedCrypto.data)[0] && <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              <span className="text-gray-400 text-xs">{JSON.parse(selectedCrypto.labels.replace(/'/g, '"'))[0]}</span>{" "}
              <br></br> {JSON.parse(selectedCrypto.data)[0]}
            </button>}

            {JSON.parse(selectedCrypto.data)[1] && <button
              type="button"
              className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${ JSON.parse(selectedCrypto.data)[2] ? "" : "rounded-e-lg border-e"} hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
            >
              <span className="text-gray-400 text-xs">{JSON.parse(selectedCrypto.labels.replace(/'/g, '"'))[1]}</span>
              <br></br> {JSON.parse(selectedCrypto.data)[1]}
            </button>}

            {JSON.parse(selectedCrypto.data)[2] && <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              <span className="text-gray-400 text-xs">{JSON.parse(selectedCrypto.labels.replace(/'/g, '"'))[2]}</span>
              <br></br> {JSON.parse(selectedCrypto.data)[2]}
            </button>}
          </div>
        </div>

        <div className="mb-8">
          <label
            htmlFor="amount"
            className="block mb-2 text-lg font-medium text-gray-700"
          >
            2. How much do you want to lend?
          </label>
          <div className="mb-5 flex">
            <input
              type="text"
              id="amount"
              className="bg-gray-50 mr-2 border px-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00000000"
              required
            />
            <button
              id="dropdownUsersButton"
              onClick={toggleDropdownAmount}
              className={`text-white bg-blue-600 w-44 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center ${
                isDropdownOpenAmount ? "open" : ""
              }`}
              type="button"
            >
              <img
                className="w-6 h-6 me-2 rounded-full"
                src={`/${optionAmount}icon.svg`}
                alt="Jese image"
              />
              {optionAmount}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
          <div>
            <div
              id="dropdownUsers"
              className={`z-10 bg-white rounded-lg shadow w-full -mt-3 mb-4 dark:bg-gray-700 ${
                isDropdownOpenAmount ? "block" : "hidden"
              }`}
            >
              <ul
                className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUsersButton"
              >
                <li
                  onClick={() => {
                    setPage("ETH")
                    toggleDropdownAmount();
                  }}
                >
                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <img
                      className="w-6 h-6 me-2 rounded-full"
                      src="/ETHicon.svg"
                      alt="Jese image"
                    />
                    ETH
                  </div>
                </li>
                <li
                  onClick={() => {
                    setPage("DAI")
                    toggleDropdownAmount();
                  }}
                >
                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <img
                      className="w-6 h-6 me-2 rounded-full"
                      src="/DAIicon.svg"
                      alt="Jese image"
                    />
                    DAI
                  </div>
                </li>
                <li
                  onClick={() => {
                    setPage("USDC")
                    toggleDropdownAmount();
                  }}
                >
                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <img
                      className="w-6 h-6 me-2 rounded-full"
                      src="/USDCicon.svg"
                      alt="Jese image"
                    />
                    USDC
                  </div>
                </li>
                <li
                  onClick={() => {
                    setPage("WBTC")
                    toggleDropdownAmount();
                  }}
                >
                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <img
                      className="w-6 h-6 me-2 rounded-full"
                      src="/WBTCicon.svg"
                      alt="Jese image"
                    />
                    WBTC
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white font-medium rounded-lg text-lg w-full px-5 py-4 text-center
          ${
            connected
              ? "bg-green-600 mt-2 hover:bg-green-500"
              : "cursor-not-allowed disabled bg-gray-600 mt-2 hover:bg-gray-500"
          }`}
        >
          {connected ? "Confirm & Submit Trade" : "Connect Wallet to Trade"}
        </button>
      </form>
    </div>
  );
};

export default LendWithConfidenceForm;
