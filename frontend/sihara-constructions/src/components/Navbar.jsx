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
