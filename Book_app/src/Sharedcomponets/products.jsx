import React from 'react';

const Product = ({ data, addToCart, isAdded }) => {
  return (
    <div className="relative border border-black p-7 rounded-lg shadow-lg">
      <div
        className='relative bg-cover bg-no-repeat w-full h-96 font-bold'
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>{data.price}/-</h1>
      </div>
      <div className='mt-4'>
        <h3 className="text-lg font-semibold mb-2 text-center">{data.name}</h3>
        <input type="number" defaultValue={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
        <button
          className={`${isAdded ? 'bg-green-600' : 'bg-blue-600'} text-white p-2 rounded-md w-full`}
          onClick={() => !isAdded && addToCart(data)}
          disabled={isAdded} // Prevent multiple clicks
        >
          {isAdded ? 'Already in cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
