import { Outlet, Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

function Navbar() {
  return (
    <>
      <nav>
        <div
          className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full bg-gray-400 rounded-md bg-clip-padding 
        backdrop-filter backdrop-blur-md bg-opacity-20 shadow-md"
        >
          <div className="flex justify-between items-center p-1">
            <div className="flex-shrink-0 z-10">
              <Link to="/">
                <button className="flex items-center space-x-2">
                  <img src="../../public/ratelock_logo.svg" alt="Logo" className="h-16" />
                </button>
              </Link>
            </div>
            <div className="z-10">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
