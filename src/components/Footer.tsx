import React from "react";
import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-green-400 transition-transform duration-300 hover:scale-110" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                LexComp Global
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in privacy, compliance, and strategic
              procurement.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/company/105947932"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:business@lexcompglobal.com"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Privacy Audits
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  GRC Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/thought-leadership"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span>
                  Palo Alto
                  <br />
                  California, 94303
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span>business@lexcompglobal.com</span>
              </li>
              <li className="flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span>+1 (650) 346-2173</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LexComp Global. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
