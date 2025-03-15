import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 sm:px-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 shadow-lg border-b border-orange-400 rounded-b-xl">
      <Link to="/" className="flex items-center gap-3">
        <img src={assets.product_icon} alt="logo" className="w-8 sm:w-10" />
        <span className="text-white text-lg sm:text-xl font-semibold tracking-wide drop-shadow-lg">GenImg</span>
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              className="flex items-center gap-1 bg-white text-gray-800 px-2 sm:px-6 py-1 sm:py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              onClick={() => navigate("/buy-credit")}
            >
              <img className="w-6" src={assets.credit_logo} alt="credits" />
              <p className="text-xs sm:text-sm font-medium">
                Credits: {credit}
              </p>
            </button>
            <p className="text-white max-sm:hidden pl-4 font-medium drop-shadow-lg">
              Hi, {user.name}
            </p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 rounded-full border border-white shadow-md cursor-pointer"
                alt="Profile"
              />
              <div className="absolute hidden group-hover:block top-8 right-0 z-10 bg-white rounded-lg shadow-lg border border-gray-300">
                <ul className="list-none m-0 p-2">
                  <li
                    onClick={logout}
                    className="py-2 px-4 cursor-pointer text-sm text-gray-800 hover:bg-gray-200 rounded-md transition-all duration-200"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer text-white hover:text-gray-200 transition-all duration-200 drop-shadow-lg"
            >
              Pricing
            </p>
            <button
              className="bg-white text-gray-800 px-7 py-2 sm:px-10 text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;