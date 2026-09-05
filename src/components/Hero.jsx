import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='home' className='w-full overflow-x-hidden'>
      {/* Hero section */}
    <div className="w-full md:flex md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-6 lg:px-10 bg-linear-to-br from-blue-100 via-white to-blue-50">

      {/* Hero text */}
      <div className="flex min-w-0 flex-col items-start max-w-2xl">

        {/* Small badge */}
        <span className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          ✦ Simple • Smart • Reliable
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Welcome to{" "}
          <span className="text-blue-800">
            MostyStock
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-blue-700">
          Your Simple and Reliable Inventory Management System
        </p>

        <p className="mt-3 max-w-xl text-gray-600 leading-relaxed">
          Manage your inventory, monitor stock levels, track products,
          and keep your business operations organised — all in one place.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/login">
            <button className="rounded-md bg-blue-800 px-6 py-3 text-white shadow-md transition hover:bg-blue-900 hover:-translate-y-0.5">
              Get Started →
            </button>
          </Link>

          <a href="#features">
            <button className="rounded-md border border-blue-800 px-6 py-3 text-blue-800 transition hover:bg-blue-50">
              Explore Features
            </button>
          </a>
        </div>

      </div>

      {/* Inventory preview */}
      <div className="mt-8 w-full max-w-md md:mt-0">

        <div className="rounded-2xl bg-white p-6 shadow-xl">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">
                Inventory Overview
              </h3>
              <p className="text-sm text-gray-500">
                Current stock summary
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              ● Active
            </span>
          </div>

          <div className="grid grid-col-1 sm:grid-cols-3 gap-3">

            <div className="rounded-lg bg-blue-50 p-3">
              <p className="text-xs text-gray-500">Products</p>
              <p className="mt-1 text-2xl font-bold text-blue-800">
                248
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-xs text-gray-500">In Stock</p>
              <p className="mt-1 text-2xl font-bold text-green-700">
                215
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-3">
              <p className="text-xs text-gray-500">Low Stock</p>
              <p className="mt-1 text-2xl font-bold text-red-600">
                18
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Stock level
              </span>
              <span className="text-sm font-semibold">
                86%
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-gray-200">
              <div className="h-2 w-[86%] rounded-full bg-blue-800"></div>
            </div>
          </div>

        </div>

      </div>


    </div>
      <About />
    </div>
  )
}

export default Hero