import React from 'react'
import { benefits } from '../data'

const Card = ({ name, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-800 font-bold mb-4">
        ✓
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {name}
      </h3>

      <p className="text-gray-600 mt-2 leading-6">
        {description}
      </p>

    </div>
  )
}

const Benefits = () => {
  return (
    <div>
      <section id="benefits" className="px-4 sm:px-6 lg:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-blue-700 font-semibold uppercase">
              Benefits
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Why Choose MostyStock?
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              MostyStock helps businesses manage their inventory more
              efficiently, securely, and confidently.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {benefits.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-800 font-bold mb-4">
                  ✓
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-2 leading-6">
                  {item.description}
                </p>
              </div>
            ))} */}
            {benefits.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </section>   
    </div>
  )
}

export default Benefits