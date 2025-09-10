import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const renderNavLink = ({ to, label, end }, isMobile = false) => (
    <NavLink
      key={to}
      to={to}
      end={end}
      onClick={() => isMobile && setIsOpen(false)}
      className={({ isActive }) =>
        `relative group px-1 py-2 transition duration-300 ${
          isActive ? "text-lime-400" : "text-white hover:text-lime-400"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full transform origin-left bg-lime-400 ${
              isActive
                ? "scale-x-0"
                : "scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            }`}
          />
        </>
      )}
    </NavLink>
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-black px-36 py-4 flex justify-between items-center">
     
      <div className="flex items-center space-x-3">
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 21h18v-2H3v2zm2-4h2v-4H5v4zm4 0h2v-6H9v6zm4 0h2v-8h-2v8zm4 0h2v-10h-2v10z" />
        </svg>

        <div className="flex flex-col leading-tight">
          <span className="text-base font-bold font-sans text-white">SIHARA</span>
          <span className="text-sm font-medium font-sans text-white">Construction</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-white font-small">
        <ul className="flex space-x-8 items-center">
          {navItems.map((item) => renderNavLink(item))}
        </ul>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="bg-lime-400 text-black font-bold px-6 py-2 rounded-full hover:bg-white transition"
        >
          GET IN TOUCH
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-white font-medium md:hidden">
          {navItems.map((item) => (
            <div key={item.to} className="w-full text-center">
              {renderNavLink(item, true)}
            </div>
          ))}

          <NavLink
            to="/contact"
            className="bg-lime-400 text-black font-bold px-6 py-2 rounded-full hover:bg-white transition"
            onClick={() => setIsOpen(false)}
          >
            GET IN TOUCH
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
