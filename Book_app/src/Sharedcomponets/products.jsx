import React from 'react';

const Product = ({ data, addToCart, isAdded }) => {
  return (
    <div className="relative border border-gray-200 rounded-lg shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Image Container */}
      <div className="w-full h-48 sm:h-64 md:h-80">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-full rounded"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white p-1 sm:p-2 rounded-md text-xs sm:text-base font-bold">
          {data.price}/-
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-center truncate">
          {data.name}
        </h3>
        <input
          type="number"
          defaultValue={1}
          min="1"
          name="quantity"
          className="border border-gray-300 rounded-md p-2 mb-2 w-full text-sm sm:text-base"
        />
        <button
          className={`${
            isAdded ? 'bg-green-600' : 'bg-blue-600'
          } text-white p-2 rounded-md w-full text-sm sm:text-base transition duration-300 ease-in-out ${
            !isAdded && 'hover:bg-opacity-90'
          }`}
          onClick={() => !isAdded && addToCart(data)}
          disabled={isAdded}
        >
          {isAdded ? 'Already in cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
