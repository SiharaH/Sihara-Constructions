import React from "react"
import "remixicon/fonts/remixicon.css"

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6 text-yellow-400 tracking-wide">
            SIHARA CONSTRUCTIONS
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Building trust with quality craftsmanship. From planning to finishing,
            we deliver construction services that exceed expectations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mx-10">
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="/terms-conditions" className="hover:text-yellow-400 transition">Terms</a></li>
            <li><a href="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 uppercase tracking-wide">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <i className="ri-phone-fill text-lg text-yellow-400"></i> +94 77 123 4567
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-fill text-lg text-yellow-400"></i> info@siharaconstructions@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mx-10">
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-yellow-400 text-red-900 hover:bg-yellow-500 transition transform hover:scale-110"
            >
              <i className="ri-facebook-fill text-lg"></i> <b>Facebook</b>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-red-800 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">Sihara Constructions</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
