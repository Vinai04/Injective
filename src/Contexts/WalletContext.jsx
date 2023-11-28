import React, { createContext, useState } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [buttonText, setButtonText] = useState("Connect with Metamask");
  const [connected, setConnected] = useState(false);

  return (
    <WalletContext.Provider
      value={{ buttonText, setButtonText, connected, setConnected }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
