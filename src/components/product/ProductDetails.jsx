import React from 'react'

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Product Image */}
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-400">
              No Image
            </span>
          )}
        </div>

        {/* Product Information */}
        <div className="p-6">

          <p className="text-sm text-blue-600 font-medium">
            {product.category}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-1">
            {product.name}
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">

            <div>
              <p className="text-sm text-gray-500">
                SKU
              </p>
              <p className="font-medium text-gray-900">
                {product.sku}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Barcode
              </p>
              <p className="font-medium text-gray-900">
                {product.barcode || 'N/A'}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Brand
              </p>
              <p className="font-medium text-gray-900">
                {product.brand || 'N/A'}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Quantity
              </p>
              <p className="font-medium text-gray-900">
                {product.quantity}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Purchase Price
              </p>
              <p className="font-medium text-gray-900">
                ₦{product.purchase}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Selling Price
              </p>
              <p className="font-medium text-gray-900">
                ₦{product.sellingPrice}
              </p>
            </div>

          </div>

          {/* Profit */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Profit per item
            </p>

            <p className="text-xl font-bold text-blue-700">
              ₦{product.sellingPrice - product.purchase}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button
              className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Edit Product
            </button>

            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails