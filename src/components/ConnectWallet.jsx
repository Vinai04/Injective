import { useState, useContext } from "react";
import { WalletContext } from "../Contexts/WalletContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ConnectWallet() {
  const { buttonText } = useContext(WalletContext);
  const { setButtonText } = useContext(WalletContext);
  const [Loading, setLoading] = useState(false);
  const { connected } = useContext(WalletContext);
  const { setConnected } = useContext(WalletContext);

  let accountText = "";
  async function connectToMetaMask() {
    setLoading(true);
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountText =
          account[0].slice(0, 6) +
          "..." +
          account[0].slice(account[0].length - 4, account[0].length);
        setTimeout(() => {
          setLoading(false);
          setButtonText(accountText);
          setConnected(true);
          toast.success("Connected with Metamask", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });          
        }, 3000);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not detected. Please install it.");
    }
  }

  return (
    <>
      <button
        onClick={connectToMetaMask}
        type="button"
        className={`text-white ${
          !connected ? "bg-gray-800" : "bg-darkblue"
        } hover:bg-gray-700 border border-gray-700 
                  font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center ${
                    !connected ? "" : "cursor-not-allowed"
                  }`}
      >
        {Loading && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-6 h-6 mr-2 mb-0.5 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}

        {!Loading && (
          <img src="/metamask_icon.svg" alt="Logo" className="h-8 mr-2" />
        )}
        {buttonText}
      </button>
    </>
  );
}

export default ConnectWallet;
