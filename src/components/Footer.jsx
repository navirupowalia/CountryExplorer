import { GitHub, LinkedIn } from "@mui/icons-material";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <h1 className="text-white font-bold">Country Explorer</h1>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link to={"/Home"} className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/AboutUs"} clLinkssNLinkme="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to={"/Services"} className="hover:text-gray-400">
                Services
              </Link>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400"></a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-300"></a>
            <a href="#" aria-label="Instagram" className=" flex gap-3">
              <InstagramIcon className="hover:text-pink-400" />
              <GitHub className="hover:text-pink-400" />
              <LinkedIn className="hover:text-pink-400" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Country Explorer All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
