import { useNavigate } from "react-router-dom";
import "../App.css";
import ConnectWallet from "./ConnectWallet";

function Navbar() {
  return (
    <nav className="py-4">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 z-10">
            <button className="flex items-center space-x-2">
              <img src="ratelock_logo.svg" alt="Logo" className="w-64 h-18" />
            </button>
          </div>
          <div className="z-10">
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
          focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl 
          px-6 py-4 text-center me-2 mb-2">Launch App
          <span class="ml-2">&#8594;</span>
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
