import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-l from-red-300 via-red-200 to-amber-100 text-gray-700 border-t border-gray-100"
    >

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="SIHARA Construction"
              className="h-[90px] w-auto object-contain -my-2" 
            />

            <p className="text-gray-500 text-sm leading-relaxed">
              Building dreams with excellence since 2005. Quality construction services you can trust.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">

              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-red-200 hover:scale-110 transition hover:text-blue-600">
                <FaFacebook size={18} />
              </a>

              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-red-200 hover:scale-110 transition hover:text-pink-500">
                <FaInstagram size={18} />
              </a>

              <a href="#" className="p-2 rounded-full bg-white shadow-sm hover:shadow-red-200 hover:scale-110 transition hover:text-blue-700">
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>

            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-red-600 transition"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Services</h4>

            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span className="hover:text-amber-600 transition">Residential Construction</span>
              <span className="hover:text-amber-600 transition">Commercial Buildings</span>
              <span className="hover:text-amber-600 transition">Infrastructure</span>
              <span className="hover:text-amber-600 transition">Renovation</span>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Contact</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-500">

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-red-600" />
                +94 771 838 727
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-red-600" />
                siharaconstructions@gmail.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-red-600" />
                Colombo, Sri Lanka
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
              to="/contact"
              className="text-sm font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 bg-amber-400 text-black hover:bg-amber-500"
            >
              GET IN TOUCH
            </Link>
            </div>
            
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-red-600 font-medium">Sihara Constructions</span>. All rights reserved.
        </div>

      </div>

      {/* BACK TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:shadow-red-300 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </motion.footer>
  );
};

export default Footer;