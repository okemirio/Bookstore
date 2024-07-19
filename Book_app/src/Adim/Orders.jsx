import React from 'react';
import HeaderAdmin from './HeaderAdmin';

const Orders = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-2xl bg-white border border-gray-300 rounded-lg shadow-md p-6">
          <h1 className="text-center text-2xl font-bold mb-6">PLACED ORDERS</h1>
          <div className="p-4">
            <h1 className="mb-2">User ID: <span className='text-blue-600'>12</span></h1>
            <h1 className="mb-2">Placed on: <span className='text-blue-600'>19/07/2024</span></h1>
            <h1 className="mb-2">Name: <span className='text-blue-600'>Okewuri Johnson</span></h1>
            <h1 className="mb-2">Number: <span className='text-blue-600'>08062825970</span></h1>
            <h1 className="mb-2">Email: <span className='text-blue-600'>johnson@gmail.com</span></h1>
            <h1 className="mb-2">Address: <span className='text-blue-600'>12 Ogbulam Street, Ajayi, Lagos</span></h1>
            <h1 className="mb-2">Total Product: <span className='text-blue-600'>The World of Art (1), Happy Lemons (3)</span></h1>
            <h1 className="mb-2">Total Price: <span className='text-blue-600'>1234</span></h1>
            <h1 className="mb-2">Payment Method: <span className='text-blue-600'>PayPal</span></h1>
            
            <div className="mt-4">
              <label className="block text-gray-700 mb-2" htmlFor="orderStatus">Order Status:</label>
              <select
                id="orderStatus"
                className="block w-full mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className='flex gap-4 mt-6'>
              <button className='bg-orange-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'>
                Update
              </button>
              <button className='bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders;
