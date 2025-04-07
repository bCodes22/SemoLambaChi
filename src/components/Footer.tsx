import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
// Import your logo image
import logo from '../Lambda/crescent.png'; // adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* Use the imported image */}
              <img src={logo} alt="Lambda Chi Alpha Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Lambda Chi Alpha</span>
            </div>
            <p className="text-gray-400">
              Delta-Phi Zeta Chapter<br />
              Southeast Missouri State University
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link to="/brotherhood" className="text-gray-400 hover:text-purple-400">Brotherhood</Link></li>
              <li><Link to="/philanthropy" className="text-gray-400 hover:text-purple-400">Philanthropy</Link></li>
              <li><Link to="/alumni" className="text-gray-400 hover:text-purple-400">Alumni</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              Cape Girardeau, MO 63701<br />
              Email: <a href="mailto:lambdachirushchair@gmail.com" className="text-purple-400 hover:text-purple-300">lambdachirushchair@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/semolambdachi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/semolambdachi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@deltaphizeta.org" 
                className="text-gray-400 hover:text-purple-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Lambda Chi Alpha - Delta-Phi Zeta Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
