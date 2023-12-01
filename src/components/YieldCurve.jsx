import React, { useEffect, useContext } from "react";
import { Chart, initTE } from "tw-elements";
import { WalletContext } from "../Contexts/WalletContext";

const YieldCurve = (props) => {
    const { ETH, DAI, USDC, WBTC } = useContext(WalletContext);

    useEffect(() => {
      if (ETH && DAI && USDC && WBTC) {
        initTE({ Chart });
      }
    }, [ETH, DAI, USDC, WBTC]);

  let selectedCrypto = null;

  switch (props.id) {
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

  return (
    <div className="mx-auto w-full overflow-hidden">
      <canvas
        data-te-chart="line"
        data-te-dataset-label="FIXED RATE"
        data-te-labels={selectedCrypto.labels}
        data-te-dataset-data={selectedCrypto.data}
      ></canvas>
    </div>
  );
};

export default YieldCurve;
