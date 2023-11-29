import { Outlet, Link } from "react-router-dom";
import { HiMiniRocketLaunch } from "react-icons/hi2";

function LaunchPageNav() {
  return (
    <>
      <nav className="py-4">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 z-10">
              <button className="flex items-center space-x-2">
                <img src="ratelock_logo.svg" alt="Logo" className="w-64 h-18" />
              </button>
            </div>
            <div className="z-10">
              <Link to="/home">
                <button
                  type="button"
                  className="flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
            font-medium rounded-lg text-2xl px-6 py-4 text-center me-2 mb-2 transform transition duration-500 hover:scale-110
            hover:shadow-black hover:shadow-md"
                >
                  Launch App
                  <div className="mt-1.5 ml-2">
                    <HiMiniRocketLaunch />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default LaunchPageNav;
