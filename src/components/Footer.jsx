import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-800 font-bold">
                M
              </div>

              <h2 className="text-xl font-bold">
                Mosty<span className="text-blue-400">Stock</span>
              </h2>
            </Link>

            <p className="text-gray-400 mt-4 max-w-sm leading-6">
              A simple and reliable inventory management system designed
              to help businesses manage products, monitor stock, and
              improve their operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#benefits" className="hover:text-white transition">
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Get Started
            </h3>

            <p className="text-gray-400 mb-4">
              Start managing your inventory more efficiently today.
            </p>

            <div className="flex gap-3">
              <Link
                to="/login"
                className="border border-blue-500 text-blue-400 px-5 py-2 rounded-md hover:bg-blue-800 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-800 px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MostyStock. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer