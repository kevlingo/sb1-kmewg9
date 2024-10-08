import React from 'react'
import ProductList from '../components/ProductList'

const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">OEM Certified Heavy Duty Parts</h1>
      <ProductList />
    </>
  )
}

export default HomePage