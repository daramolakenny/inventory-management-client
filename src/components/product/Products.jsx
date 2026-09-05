import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductDetails from './ProductDetails'

const Products = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/api/products/getProducts'
      )

      const data = await res.json()

      console.log('Products response:', data)

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch products')
      }

      setProducts(data.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {
    return <p className="p-6">Loading products...</p>
  }

  return (
    <div className="p-6">

      {/* <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Products
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onView={setSelectedProduct}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )} */}

      <table>
        <th className="text-2xl font-bold text-gray-900 mb-6">
          Products
        </th>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
                <thead>
                    <tr></tr>
                    <tr>{product.products}</tr>
                    <tr>{product}</tr>
                    <tr>{product}</tr>
                    <tr>{product}</tr>
                    <tr>{product}</tr>
                    <tr>{product}</tr>
                </thead>

                <tr>
                    <td></td>
                </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products