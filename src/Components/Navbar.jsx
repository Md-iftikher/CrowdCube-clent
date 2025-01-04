import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/image.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="navbar bg-[#4b5bb8] text-white flex justify-between items-center p-4">
      <div className="navbar-start">
        <Link to="/" className="flex justify-center items-center gap-2">
          <div className="grid gap-0 font-bold md:text-xl">
            <h2>CrowdCube</h2>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden font-bold lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-campaigns">All Campaigns</Link>
          </li>
          <li>
            {user && <Link to="/add-new-campaign">Add New Campaign</Link>}
          </li>
          <li>{user && <Link to="/my-campaigns">My Campaigns</Link>}</li>
          <li>{user && <Link to="/my-donations">My Donations</Link>}</li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <Link to="/dashboard" className="hidden md:inline">
          <img
            className="w-12 h-12 rounded-full"
            src={(user&&user.photoURL )|| ProfileIcon}
            alt="Profile"
          />
        </Link>

        {user && user.email ? (
          <button
            onClick={handleLogOut}
            className="btn text-white bg-[#0D37FF] border-none hidden md:inline text-center hover:bg-[#0B2BBF] transition duration-300"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <p className="btn bg-[#0D37FF] hover:bg-[#0B2BBF] border-[#0B2BBF] text-white">
              Log In
            </p>
          </Link>
        )}

        {/* Mobile Dropdown Menu */}
        <div className="dropdown md:hidden relative">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-xs bg-gray-800 dropdown-content w-48 rounded-box z-10 mt-2 p-2 shadow-lg absolute right-0"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-campaigns">All Campaigns</Link>
            </li>
            <li>
              {user && <Link to="/add-new-campaign">Add New Campaign</Link>}
            </li>
            <li>{user && <Link to="/my-campaigns">My Campaigns</Link>}</li>
            <li>{user && <Link to="/my-donations">My Donations</Link>}</li>
            <li>
              {user && user.email ? (
                <button
                  onClick={handleLogOut}
                  className="btn text-white bg-[#0D37FF] border-none text-sm px-2 py-1"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-[#0D37FF] text-white border-none hover:bg-[#6d7dcc] text-sm px-2 py-1"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
