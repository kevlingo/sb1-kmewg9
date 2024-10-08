import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FleetCooling.com</h3>
            <p className="text-blue-100">FleetCooling.com provides top-quality cooling solutions for semi-trucks, buses, and industrial applications.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white">Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Products</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">About</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-100">123 Cooling Street<br />Chillville, FR 12345<br />Phone: (123) 456-7890<br />Email: info@fleetcooling.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-500 text-center text-blue-100">
          <p>&copy; 2024 FleetCooling.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer