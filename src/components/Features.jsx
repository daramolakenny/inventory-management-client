import React from 'react'
import Benefits from './Benefits'
import Card from './Card'
import { features } from '../data'

const Features = ({name, description}) => {
  return (
    <div>
        <section id="features" className="px-4 sm:px-6 lg:px-10 py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <p className="text-blue-700 font-semibold uppercase">
                Features
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Everything You Need to Manage Inventory
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                MostyStock provides simple tools to help your team manage
                products, monitor inventory, and control access efficiently.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <Benefits />
    </div>
  )
}

export default Features