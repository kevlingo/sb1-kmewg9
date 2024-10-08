import React, { useState } from 'react'
import { Truck, Wind, Snowflake, Search } from 'lucide-react'

const categories = [
  {
    name: 'Radiators',
    icon: Truck,
    subcategories: [
      'Numbered Cores',
      'Bus and Truck Radiators',
      'Tractor Radiators',
      'Industrial Radiators',
      'Lift Truck Radiators'
    ]
  },
  { name: 'Charge Air Coolers', icon: Wind },
  { name: 'Condensers', icon: Snowflake },
]

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
    // You would typically make an API call here to search for products
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center border-2 border-blue-600 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for part, OEM, or vendor part number"
            className="flex-grow px-4 py-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-semibold mb-6">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <category.icon className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            {category.subcategories ? (
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 mb-4">Explore our range of {category.name.toLowerCase()}.</p>
            )}
            <a href="#" className="mt-2 inline-block text-blue-600 hover:underline">View Products</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList