import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileIcon from "../assets/image.png";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav
      className={`navbar ${
        theme === "light" ? "bg-[#4b5bb8]" : "bg-gray-800"
      } text-white flex justify-between items-center p-4 px-14`}
    >
      <div className="navbar-start">
        <Link to="/" className="flex justify-center items-center font-bold">
          <h2>CrowdCube</h2>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={`font-bold hover:text-${
                theme === "dark" ? "gray-300" : "white"
              } ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/all-campaigns"
              className={`font-bold hover:text-${
                theme === "dark" ? "gray-300" : "white"
              } ${activeLink === "/all-campaigns" ? "active" : ""}`}
              onClick={() => handleLinkClick("/all-campaigns")}
            >
              All Campaigns
            </Link>
          </li>
          <li>
            <Link
              to="/add-new-campaign"
              className={`font-bold hover:text-${
                theme === "dark" ? "gray-300" : "white"
              } ${activeLink === "/add-new-campaign" ? "active" : ""}`}
              onClick={() => handleLinkClick("/add-new-campaign")}
            >
              Add New Campaign
            </Link>
          </li>
          <li>
            <Link
              to="/my-campaigns"
              className={`font-bold hover:text-${
                theme === "dark" ? "gray-300" : "white"
              } ${activeLink === "/my-campaigns" ? "active" : ""}`}
              onClick={() => handleLinkClick("/my-campaigns")}
            >
              My Campaigns
            </Link>
          </li>
          <li>
            <Link
              to="/my-donations"
              className={`font-bold hover:text-${
                theme === "dark" ? "gray-300" : "white"
              } ${activeLink === "/my-donations" ? "active" : ""}`}
              onClick={() => handleLinkClick("/my-donations")}
            >
              My Donations
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <label className="flex cursor-pointer items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        <Link to="/" className="hidden md:inline">
          <img
            className="w-12 h-12 rounded-full"
            src={user && user.photoURL ? user.photoURL : ProfileIcon}
            alt="Profile"
          />
        </Link>

        {user && user.email ? (
          <button
            onClick={handleLogOut}
            className="btn bg-blue-600 border-none text-white"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn bg-blue-600 border-none text-white">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
