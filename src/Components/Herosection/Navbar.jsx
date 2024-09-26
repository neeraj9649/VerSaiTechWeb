import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="lg:w-[90%] lg:bg-transparent h-[50px] mx-auto p-5 py-10 items-center flex justify-between lg:text-white bg-white relative">
      {/* Logo */}
      <div className="font-bold text-4xl">stripe</div>

      {/* Hamburger / Cross Icon for Mobile */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {/* Toggle between Hamburger and Cross icon */}
          {isMenuOpen ? (
            // Cross Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden lg:flex w-auto gap-8 items-center">
        <li>Products</li>
        <li>Solutions</li>
        <li>Developers</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>

      {/* Contact Button */}
      <button className="hidden lg:block w-[100px]">Contact sales</button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20  left-0 w-full bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ zIndex: 9999 }}
      >
        <ul className="flex flex-col ml-5 text-2xl space-y-10 py-4">
          <li>Products</li>
          <li>Solutions</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>
            <button>Contact sales</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
