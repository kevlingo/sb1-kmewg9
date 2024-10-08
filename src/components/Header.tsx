import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, ChevronDown, User } from 'lucide-react'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <header className="bg-white text-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" alt="FleetCooling Logo" className="h-8" />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
            <li className="relative group">
              <Link to="/radiators" className="flex items-center hover:text-blue-800">
                Radiators <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li><Link to="/radiators/numbered-cores" className="block px-4 py-2 text-sm hover:bg-blue-100">Numbered Cores</Link></li>
                <li><Link to="/radiators/bus-and-truck-radiators" className="block px-4 py-2 text-sm hover:bg-blue-100">Bus and Truck Radiators</Link></li>
                <li><Link to="/radiators/tractor-radiators" className="block px-4 py-2 text-sm hover:bg-blue-100">Tractor Radiators</Link></li>
                <li><Link to="/radiators/industrial-radiators" className="block px-4 py-2 text-sm hover:bg-blue-100">Industrial Radiators</Link></li>
                <li><Link to="/radiators/lift-truck-radiators" className="block px-4 py-2 text-sm hover:bg-blue-100">Lift Truck Radiators</Link></li>
              </ul>
            </li>
            <li><Link to="/charge-air-coolers" className="hover:text-blue-800">Charge Air Coolers</Link></li>
            <li><Link to="/condensers" className="hover:text-blue-800">Condensers</Link></li>
            <li><Link to="/about" className="hover:text-blue-800">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
            <li>
              <button onClick={handleLoginClick} className="flex items-center hover:text-blue-800">
                <User className="mr-1 h-4 w-4" />
                Login
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <ShoppingCart className="mr-2" />
          <span>Cart (0)</span>
        </div>
      </div>
    </header>
  )
}

export default Header