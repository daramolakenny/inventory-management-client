import React from 'react'

const ProductCard = ({ product, onView }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      
      {/* Product Image */}
      <div className="h-36 bg-gray-100 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">
            No Image
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-blue-600 font-medium">
          {product.category}
        </p>

        <h3 className="text-base font-bold text-gray-900 mt-1 truncate">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          SKU: {product.sku}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-semibold text-gray-900">
            ₦{product.sellingPrice}
          </p>

          <p className="text-xs text-gray-600">
            Stock: {product.quantity}
          </p>
        </div>

        {/* View Button */}
        <button
          onClick={() => onView(product)}
          className="w-full mt-4 border border-blue-600 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition"
        >
          View Product
        </button>
      </div>
    </div>
  )
}

export default ProductCard

// import React from 'react'

// const ProductCard = ({ product }) => {
//   return (
//     <div className='bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition'>
//         <div className='h-36 bg-gray-100 flex items-center justify-center'>
//             {product.image ? (
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                 />
//             ) : (
//                 <span className="text-gray-400">No Image</span>
//             )}
//         </div>
        
//         <div className="p-4">
//             <p className='text-sm text-blue-600 font-medium'>
//                 {product.category}
//             </p>
//             <h3 className='text-lg font-bold text-gray-900 mt-1'>
//                 {product.name}
//             </h3>
//             <p className='text-sm text-gray-500 mt-1'>
//                 SKU: {product.sku}
//             </p>
//         </div>
        
//         <div className="flex justify-between items-center p-4">
//             <p className="text-lg font-semibold text-gray-900">
//                 ₦{product.sellingPrice}
//             </p>
//             <p className="text-sm text-gray-600">
//                 Stock: {product.quantity}
//             </p>
//         </div>
//     </div>
//   )
// }

// export default ProductCard