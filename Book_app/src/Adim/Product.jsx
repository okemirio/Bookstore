import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import ListedAdminProduct from '../Sharedcomponets/ListedAdminProduct';
const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-6">SHOP PRODUCTS</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">ADD PRODUCT</h2>
          <div className="mb-4">
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="productPrice"
              id="productPrice"
              placeholder="Enter product price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="productImage"
              id="productImage"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </form>
      </div>
      <ListedAdminProduct/>
    </div>
  );
}

export default Product;
