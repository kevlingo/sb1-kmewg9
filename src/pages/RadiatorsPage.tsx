import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Tractor, Factory, Forklift, Grid } from 'lucide-react'

const radiatorCategories = [
  { name: 'Numbered Cores', icon: Grid, description: 'Standardized radiator cores for various applications' },
  { name: 'Bus and Truck Radiators', icon: Truck, description: 'Heavy-duty radiators for buses and commercial trucks' },
  { name: 'Tractor Radiators', icon: Tractor, description: 'Durable radiators for agricultural and construction tractors' },
  { name: 'Industrial Radiators', icon: Factory, description: 'High-performance radiators for industrial machinery' },
  { name: 'Lift Truck Radiators', icon: Forklift, description: 'Specialized radiators for forklifts and material handling equipment' },
]

const RadiatorsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Radiator Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {radiatorCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <category.icon className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <Link to="/radiators" className="mt-2 inline-block text-blue-600 hover:underline">
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadiatorsPage