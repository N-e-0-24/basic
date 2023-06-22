import React, { useState } from 'react';
import { logo } from '../assets';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="w-full z-20 top-0 left-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-20 w-20 mr-1" alt="Avinya Logo" />
            <div className="flex flex-col">
              <div className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400 -ml-36">
                {/* Hide the tag on smaller devices */}
                <span className="hidden md:inline">Avinya Infinity Solutions</span>
              </div>
              <div className="text-black hidden md:inline">
                "Elevating Hygiene Standards with Cutting-Edge Solutions"
              </div>
            </div>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Conditionally render the menu based on the device size */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full md:flex md:w-auto md:order-2`}
            id="navbar-sticky"
          >
            {/* Hide the menu on smaller devices */}
            <ul className="flex flex-col p-4 md:p-0 mt-8 bg-slate-800 md:bg-transparent font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className={`block py-2 pl-3 pr-4 mt-10 text-gray-700 rounded hover:text-gray-400 ${
                    isMenuOpen ? ' ' : 'md:bg-transparent'
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className={`block py-2 pl-3 pr-4 mt-10 text-gray-700 rounded hover:text-gray-400 ${
                    isMenuOpen ? ' ' : 'md:bg-transparent'
                  }`}
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className={`block py-2 pl-3 pr-4 mt-10 text-gray-700 rounded hover:text-gray-400 ${
                    isMenuOpen ? ' ' : 'md:bg-transparent'
                  }`}
                  onClick={toggleMenu}
                >
                  Send Us A Query
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
