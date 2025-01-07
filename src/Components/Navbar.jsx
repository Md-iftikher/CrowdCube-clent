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
    <nav className={`navbar ${theme === 'light' ? 'bg-[#4b5bb8]' : 'bg-gray-800'} text-white flex justify-between items-center p-4 px-14`}>
      <div className="navbar-start">
        <Link to="/" className="flex justify-center items-center font-bold">
          <h2>CrowdCube</h2>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className={`font-bold hover:text-${theme === 'dark' ? 'gray-300' : 'white'} ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
          </li>
          <li>
            <Link to="/all-campaigns" className={`font-bold hover:text-${theme === 'dark' ? 'gray-300' : 'white'} ${activeLink === '/all-campaigns' ? 'active' : ''}`} onClick={() => handleLinkClick('/all-campaigns')}>All Campaigns</Link>
          </li>
          <li>
            <Link to="/add-new-campaign" className={`font-bold hover:text-${theme === 'dark' ? 'gray-300' : 'white'} ${activeLink === '/add-new-campaign' ? 'active' : ''}`} onClick={() => handleLinkClick('/add-new-campaign')}>Add New Campaign</Link>
          </li>
          <li>
            <Link to="/my-campaigns" className={`font-bold hover:text-${theme === 'dark' ? 'gray-300' : 'white'} ${activeLink === '/my-campaigns' ? 'active' : ''}`} onClick={() => handleLinkClick('/my-campaigns')}>My Campaigns</Link>
          </li>
          <li>
            <Link to="/my-donations" className={`font-bold hover:text-${theme === 'dark' ? 'gray-300' : 'white'} ${activeLink === '/my-donations' ? 'active' : ''}`} onClick={() => handleLinkClick('/my-donations')}>My Donations</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
        </label>

        <Link to="/dashboard" className="hidden md:inline">
          <img className="w-12 h-12 rounded-full" src={user && user.photoURL ? user.photoURL : ProfileIcon} alt="Profile" />
        </Link>

        {user && user.email ? (
          <button onClick={handleLogOut} className="btn bg-blue-600 border-none text-white">Log Out</button>
        ) : (
          <Link to="/login" className="btn bg-blue-600 border-none text-white">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;