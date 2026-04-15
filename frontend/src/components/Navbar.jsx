import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        `relative group px-1 py-2 transition duration-300 text-base font-medium ${
          isActive
              ? "text-red-600" : "text-black hover:text-red-600"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full transform origin-left bg-yellow-400 ${
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
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed w-full top-0 z-50 px-6 md:px-36 flex justify-between items-center h-20 transition-colors duration-300 ${
        isHovered ? "bg-white/40 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="SIHARA Construction"
          className="h-[90px] w-auto object-contain -my-2" 
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-small">
        <ul className="flex space-x-8 items-center">
          {navItems.map((item) => renderNavLink(item))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl transition-colors duration-300 ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-white font-medium md:hidden">
          {navItems.map((item) => (
            <div key={item.to} className="w-full text-center">
              {renderNavLink(item, true)}
            </div>
          ))}

          <NavLink
            to="/contact"
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-white transition"
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