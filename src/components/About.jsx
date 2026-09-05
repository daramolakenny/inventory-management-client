import React from 'react'
import Features from './Features'

const About = () => {
  return (
    <div>
      <section id="about" className="w-full px-4 sm:px-6 lg:px-10 py-16 bg-white" >
        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              About MostyStock
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Simple Inventory Management
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Our Inventory Management System provides a simple and efficient
              way for businesses to manage their products and inventory from
              one centralized platform.
            </p>
          </div>

          {/* Content */}
          <div className="md:flex md:items-center md:gap-12">

            {/* Text */}
            <div className="min-w-0 md:w-1/2">
              <p className="text-gray-700 leading-7 mb-4">
                The system helps administrators, managers, and staff keep
                track of stock levels, manage products, monitor inventory
                activities, and maintain accurate records.
              </p>

              <p className="text-gray-700 leading-7">
                With role-based access, each team member gets the appropriate
                level of access, ensuring that sensitive operations such as
                user management and system administration remain restricted
                to authorized administrators.
              </p>
            </div>

            {/* Simple Dashboard Illustration */}
            <div className="min-w-0 md:w-1/2 mt-10 md:mt-0">
              <div className="rounded-xl bg-blue-50 p-6 shadow-sm">

                <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                  INVENTORY MANAGEMENT
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <h4 className="font-semibold text-blue-800">
                      Products
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Manage products
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <h4 className="font-semibold text-blue-800">
                      Inventory
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Track stock
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <h4 className="font-semibold text-blue-800">
                      Users
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Manage access
                    </p>
                  </div>

                </div>

                <div className="flex justify-center mt-5">
                  <div className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                    Better Management
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <Features />
    </div>
  )
}

export default About