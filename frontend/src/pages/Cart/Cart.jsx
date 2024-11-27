import React, {  } from 'react'
import './Cart.css'
const Cart = () => {

  
  return (
  
 <div className='flex justify-center items-center min-h-screen'>

<div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl'>
          <table className='w-full text-left border-collapse'>
            <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-2 px-4 text-gray-600 font-semibold">Items</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Qty</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-center">Price</th>
                  <th className="py-2 px-4 text-gray-600 font-semibold text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                   <tr className="border-b border-gray-200">
                     <td className="py-4 px-4 flex items-center space-x-4">
                          <img src="https://via.placeholder.com/50" alt="Item Image" class="w-12 h-12 rounded" />
                          <div>
                            <p class="font-medium text-gray-800">Gyro Sandwich</p>
                            <p class="text-sm text-gray-500">Best one selling in these month</p>
                          </div>
                    </td>
                     <td className="py-4 px-4 text-center">
                         <div class="flex items-center justify-center space-x-2">
                            <button class="text-orange-500 text-lg">-</button>
                            <span class="text-gray-800 font-medium">1</span>
                            <button class="text-orange-500 text-lg">+</button>
                          </div>
                     </td>
                     <td className="py-4 px-4 text-center text-gray-800 font-medium">$565.00 </td>
                     <td className="py-4 px-4 text-right text-gray-800 font-medium">$565.00 </td>

                   </tr>
                   <tr class="border-b border-gray-200">
          <td class="py-4 px-4 flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Item Image" class="w-12 h-12 rounded" />
            <div>
              <p class="font-medium text-gray-800">Gyro Sandwich</p>
              <p class="text-sm text-gray-500">Best one selling in these month</p>
            </div>
          </td>
          <td class="py-4 px-4 text-center">
            <div class="flex items-center justify-center space-x-2">
              <button class="text-orange-500 text-lg">-</button>
              <span class="text-gray-800 font-medium">1</span>
              <button class="text-orange-500 text-lg">+</button>
            </div>
          </td>
          <td class="py-4 px-4 text-center text-gray-800 font-medium">$399.00</td>
          <td class="py-4 px-4 text-right text-gray-800 font-medium">$399.00</td>
        </tr>
        
                   <tr class="border-b border-gray-200">
          <td class="py-4 px-4 flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Item Image" class="w-12 h-12 rounded" />
            <div>
              <p class="font-medium text-gray-800">Gyro Sandwich</p>
              <p class="text-sm text-gray-500">Best one selling in these month</p>
            </div>
          </td>
          <td class="py-4 px-4 text-center">
            <div class="flex items-center justify-center space-x-2">
              <button class="text-orange-500 text-lg">-</button>
              <span class="text-gray-800 font-medium">1</span>
              <button class="text-orange-500 text-lg">+</button>
            </div>
          </td>
          <td class="py-4 px-4 text-center text-gray-800 font-medium">$399.00</td>
          <td class="py-4 px-4 text-right text-gray-800 font-medium">$399.00</td>
        </tr>


            </tbody>
          </table>


          <div class="mt-6 border-t border-gray-200 pt-4">
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-600">Sub Total</span>
        <span class="text-gray-800 font-medium">$1197.00</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-600">Tax</span>
        <span class="text-gray-800 font-medium">$0.00</span>
      </div>
      <div class="flex justify-between items-center mb-4">
        <span class="text-gray-600">Total</span>
        <span class="text-gray-800 font-semibold">$1197.00</span>
      </div>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded w-full">
        Checkout
      </button>
    </div>


   </div>

 </div>
  

  )
}

export default Cart
