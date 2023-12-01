import React, { createContext, useState } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [buttonText, setButtonText] = useState("Connect with Metamask");
  const [connected, setConnected] = useState(false);
  const ETH = {
    name: "ETH",
    rate: "3.06",
    img: "/ethereum.svg",
    mode: "LOW",
    method: "BORROW",
    page: "borroworder",
    data: "[0.750, 7.567]",
    labels: "['Dec 2023', 'Mar 2024']"
  };
  const DAI = {
    name: "DAI",
    rate: "4.32",
    img: "/dai.svg",
    mode: "LOW",
    method: "BORROW",
    page: "borroworder",
    data: "[1.855, 0.932, 0.965]",
    labels: "['Dec 2023', 'Mar 2024', 'Sep 2024']"
  };
  const USDC = {
    name: "USDC",
    rate: "4.89",
    img: "/usdc.svg",
    mode: "LOW",
    method: "BORROW",
    page: "borroworder",
    data: "[4.498, 4.496, 4.698]",
    labels: "['Dec 2023', 'Mar 2024', 'Sep 2024']"
  };
  const WBTC = {
    name: "WBTC",
    rate: "2.00",
    img: "/wbtc.svg",
    mode: "LOW",
    method: "BORROW",
    page: "borroworder",
    data: "[1.147, 0.906]",
    labels: "['Dec 2023', 'Mar 2024']"
  };

  return (
    <WalletContext.Provider
      value={{ buttonText, setButtonText, connected, setConnected, ETH, DAI, USDC, WBTC }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
